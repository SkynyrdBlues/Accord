#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, "../..");
const PHRASES_PATH = path.join(ROOT_DIR, "corpus-lab/processed/nottingham/phrases.jsonl");
const REPORT_DIR = path.join(ROOT_DIR, "corpus-lab/reports");
const JSON_OUT = path.join(REPORT_DIR, "projchord-eval-nottingham.json");
const MD_OUT = path.join(REPORT_DIR, "projchord-eval-nottingham.md");

const CHORD_INTERVALS = {
  maj: [0, 4, 7],
  min: [0, 3, 7],
  dim: [0, 3, 6],
  dom7: [0, 4, 7, 10],
  maj7: [0, 4, 7, 11],
  min7: [0, 3, 7, 10],
};
const CHORD_POOL = [
  ["C", 0, "maj"],
  ["Dm", 2, "min"],
  ["Em", 4, "min"],
  ["F", 5, "maj"],
  ["G", 7, "maj"],
  ["Am", 9, "min"],
  ["G7", 7, "dom7"],
  ["D7", 2, "dom7"],
  ["A7", 9, "dom7"],
  ["Bm", 11, "min"],
];

function readJsonl(filePath) {
  return readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function seededRandom(seed) {
  let value = seed || 1;
  return () => {
    value = (value * 48271) % 0x7fffffff;
    return value / 0x7fffffff;
  };
}

function buildReferenceStats(phrases) {
  const chordBigrams = new Map();
  const chordCounts = new Map();
  const featureRows = phrases.map((phrase) => rawFeatures(phrase, null));

  for (const phrase of phrases) {
    const chords = phrase.chords.map((chord) => chord.name);
    for (const chord of chords) {
      chordCounts.set(chord, (chordCounts.get(chord) || 0) + 1);
    }
    for (let i = 1; i < chords.length; i += 1) {
      const key = `${chords[i - 1]}->${chords[i]}`;
      chordBigrams.set(key, (chordBigrams.get(key) || 0) + 1);
    }
  }

  const numericKeys = [
    "notesPerBar",
    "chordsPerBar",
    "pitchRange",
    "avgDuration",
    "largeLeapRatio",
    "seventhChordRatio",
  ];
  const distributions = {};
  for (const key of numericKeys) {
    const values = featureRows.map((row) => row[key]).filter((value) => Number.isFinite(value));
    distributions[key] = {
      mean: mean(values),
      stdev: stdev(values),
    };
  }

  return {
    chordBigrams,
    chordCounts,
    bigramTotal: Array.from(chordBigrams.values()).reduce((sum, count) => sum + count, 0),
    distributions,
  };
}

function scorePhrase(phrase, referenceStats) {
  const features = rawFeatures(phrase, referenceStats);
  const scores = {
    melodyChordFit: features.melodyChordFit,
    longNoteFit: 1 - features.longConflictRate,
    chordProgression: features.chordProgressionScore,
    corpusPlausibility: corpusPlausibility(features, referenceStats),
    continuationCoherence: continuationCoherence(phrase),
  };
  const realLikeScore =
    0.3 * scores.melodyChordFit +
    0.2 * scores.longNoteFit +
    0.2 * scores.chordProgression +
    0.15 * scores.corpusPlausibility +
    0.15 * scores.continuationCoherence;

  return {
    realLikeScore: clamp(realLikeScore),
    scores,
    features,
  };
}

function rawFeatures(phrase, referenceStats) {
  const notes = melodicNotes(phrase);
  const pitchValues = notes.map((note) => note.pitch);
  const durations = notes.map((note) => note.durationBeats);
  const intervals = pitchValues.slice(1).map((pitch, index) => pitch - pitchValues[index]);
  const bars = phrase.bars || 1;
  const weightedFit = weightedMelodyChordFit(phrase);
  const chordProgressionScore = referenceStats ? chordProgressionLikelihood(phrase, referenceStats) : 0.5;

  return {
    notesPerBar: notes.length / bars,
    chordsPerBar: phrase.chords.length / bars,
    pitchRange: pitchValues.length ? Math.max(...pitchValues) - Math.min(...pitchValues) : 0,
    avgDuration: mean(durations),
    largeLeapRatio: intervals.length ? intervals.filter((interval) => Math.abs(interval) >= 7).length / intervals.length : 0,
    seventhChordRatio: phrase.chords.length ? phrase.chords.filter((chord) => chord.quality.includes("7")).length / phrase.chords.length : 0,
    melodyChordFit: weightedFit.fit,
    longConflictRate: weightedFit.longConflictRate,
    strongBeatFit: weightedFit.strongBeatFit,
    chordProgressionScore,
  };
}

function weightedMelodyChordFit(phrase) {
  const notes = melodicNotes(phrase);
  let totalWeight = 0;
  let hitWeight = 0;
  let strongTotal = 0;
  let strongHit = 0;
  let longTotal = 0;
  let longConflict = 0;

  for (const note of notes) {
    const chord = activeChordAt(phrase, note.startBeat);
    if (!chord) continue;

    const pc = positiveMod(note.pitch, 12);
    const weight = noteWeight(note);
    const compatibility = chordToneCompatibility(pc, chord);
    totalWeight += weight;
    hitWeight += weight * compatibility;

    if (isStrongBeat(note.startBeat)) {
      strongTotal += 1;
      strongHit += compatibility >= 0.75 ? 1 : 0;
    }

    if (note.durationBeats >= 1) {
      longTotal += 1;
      longConflict += compatibility < 0.5 ? 1 : 0;
    }
  }

  return {
    fit: totalWeight ? hitWeight / totalWeight : 0,
    strongBeatFit: strongTotal ? strongHit / strongTotal : 0,
    longConflictRate: longTotal ? longConflict / longTotal : 0,
  };
}

function chordToneCompatibility(pitchClass, chord) {
  const chordTones = chordPitchClasses(chord);
  if (chordTones.includes(pitchClass)) return 1;

  const root = chord.root;
  const softTensions = [2, 5, 9].map((interval) => positiveMod(root + interval, 12));
  if (softTensions.includes(pitchClass)) return 0.55;

  return 0;
}

function chordPitchClasses(chord) {
  const intervals = CHORD_INTERVALS[chord.quality] || CHORD_INTERVALS.maj;
  return intervals.map((interval) => positiveMod(chord.root + interval, 12));
}

function activeChordAt(phrase, beat) {
  return phrase.chords.find((chord) => beat >= chord.startBeat && beat < chord.startBeat + chord.durationBeats);
}

function noteWeight(note) {
  let weight = 1;
  if (note.durationBeats >= 1) weight += 0.7;
  if (isStrongBeat(note.startBeat)) weight += 0.5;
  return weight;
}

function isStrongBeat(beat) {
  return Math.abs(beat - Math.round(beat)) < 0.001 && Math.round(beat) % 2 === 0;
}

function chordProgressionLikelihood(phrase, referenceStats) {
  if (phrase.chords.length < 2) return 0.5;

  const vocabSize = Math.max(referenceStats.chordCounts.size, 1);
  const probabilities = [];
  for (let i = 1; i < phrase.chords.length; i += 1) {
    const key = `${phrase.chords[i - 1].name}->${phrase.chords[i].name}`;
    const count = referenceStats.chordBigrams.get(key) || 0;
    const probability = (count + 1) / (referenceStats.bigramTotal + vocabSize * vocabSize);
    probabilities.push(Math.log(probability));
  }

  const avgLog = mean(probabilities);
  return clamp((avgLog + 7) / 5);
}

function corpusPlausibility(features, referenceStats) {
  const keys = Object.keys(referenceStats.distributions);
  const scores = keys.map((key) => {
    const stats = referenceStats.distributions[key];
    const sigma = Math.max(stats.stdev, 0.001);
    const z = Math.abs((features[key] - stats.mean) / sigma);
    return Math.exp(-0.5 * Math.min(z, 4) ** 2);
  });
  return mean(scores);
}

function continuationCoherence(phrase) {
  const midpoint = phrase.durationBeats / 2;
  const seedNotes = melodicNotes(phrase).filter((note) => note.startBeat < midpoint);
  const continuationNotes = melodicNotes(phrase).filter((note) => note.startBeat >= midpoint);
  if (seedNotes.length < 3 || continuationNotes.length < 3) return 0.5;

  const seedRange = pitchRange(seedNotes);
  const continuationRange = pitchRange(continuationNotes);
  const rangeScore = 1 - clamp(Math.abs(seedRange - continuationRange) / 24);
  const densityScore = 1 - clamp(Math.abs(seedNotes.length - continuationNotes.length) / Math.max(seedNotes.length, continuationNotes.length));
  const contourScore = contourOverlap(seedNotes, continuationNotes);
  return clamp(0.35 * rangeScore + 0.35 * densityScore + 0.3 * contourScore);
}

function contourOverlap(a, b) {
  const contourA = contour(a);
  const contourB = contour(b);
  const size = Math.min(contourA.length, contourB.length);
  if (size === 0) return 0.5;
  let matches = 0;
  for (let i = 0; i < size; i += 1) {
    if (contourA[i] === contourB[i]) matches += 1;
  }
  return matches / size;
}

function contour(notes) {
  const pitches = notes.sort((a, b) => a.startBeat - b.startBeat).map((note) => note.pitch);
  return pitches.slice(1).map((pitch, index) => Math.sign(pitch - pitches[index]));
}

function pitchRange(notes) {
  const pitches = notes.map((note) => note.pitch);
  return Math.max(...pitches) - Math.min(...pitches);
}

function corruptPhrase(phrase, kind, phrasePool, random) {
  if (kind === "random_chords") return randomChords(phrase, random);
  if (kind === "shifted_chords") return shiftedChords(phrase);
  if (kind === "shuffled_chords") return shuffledChords(phrase, random);
  if (kind === "swapped_continuation") return swappedContinuation(phrase, phrasePool, random);
  if (kind === "wrong_key_chords") return transposeChordsOnly(phrase, 6);
  throw new Error(`Unknown corruption: ${kind}`);
}

function randomChords(phrase, random) {
  return {
    ...phrase,
    id: `${phrase.id}:corrupt-random-chords`,
    chords: phrase.chords.map((chord) => {
      const [name, root, quality] = CHORD_POOL[Math.floor(random() * CHORD_POOL.length)];
      return { ...chord, name, root, quality };
    }),
  };
}

function shiftedChords(phrase) {
  const shift = Math.max(1, phrase.durationBeats / 16);
  return {
    ...phrase,
    id: `${phrase.id}:corrupt-shifted-chords`,
    chords: phrase.chords.map((chord) => ({
      ...chord,
      startBeat: positiveMod(chord.startBeat + shift, phrase.durationBeats),
    })).sort((a, b) => a.startBeat - b.startBeat),
  };
}

function shuffledChords(phrase, random) {
  const harmonicLabels = phrase.chords.map((chord) => ({
    name: chord.name,
    root: chord.root,
    quality: chord.quality,
  }));
  const shuffled = [...harmonicLabels].sort(() => random() - 0.5);
  return {
    ...phrase,
    id: `${phrase.id}:corrupt-shuffled-chords`,
    chords: phrase.chords.map((chord, index) => ({ ...chord, ...shuffled[index] })),
  };
}

function swappedContinuation(phrase, phrasePool, random) {
  const donor = phrasePool[Math.floor(random() * phrasePool.length)] || phrase;
  const midpoint = phrase.durationBeats / 2;
  const seed = phrase.notes.filter((note) => note.startBeat < midpoint);
  const donorMidpoint = donor.durationBeats / 2;
  const donorContinuation = donor.notes
    .filter((note) => note.startBeat >= donorMidpoint)
    .map((note) => ({
      ...note,
      startBeat: midpoint + (note.startBeat - donorMidpoint),
    }))
    .filter((note) => note.startBeat < phrase.durationBeats);

  return {
    ...phrase,
    id: `${phrase.id}:corrupt-swapped-continuation`,
    notes: [...seed, ...donorContinuation],
  };
}

function transposeChordsOnly(phrase, semitones) {
  return {
    ...phrase,
    id: `${phrase.id}:corrupt-wrong-key-chords`,
    chords: phrase.chords.map((chord) => ({
      ...chord,
      root: positiveMod(chord.root + semitones, 12),
      name: `${chord.name}+${semitones}`,
    })),
  };
}

function evaluatePairs(phrases, referenceStats) {
  const corruptionKinds = ["random_chords", "shifted_chords", "shuffled_chords", "swapped_continuation", "wrong_key_chords"];
  const random = seededRandom(20260605);
  const results = {};

  for (const kind of corruptionKinds) {
    const rows = [];
    for (const phrase of phrases) {
      const realScore = scorePhrase(phrase, referenceStats);
      const corrupted = corruptPhrase(phrase, kind, phrases, random);
      const corruptedScore = scorePhrase(corrupted, referenceStats);
      rows.push({
        id: phrase.id,
        real: realScore.realLikeScore,
        corrupted: corruptedScore.realLikeScore,
        margin: realScore.realLikeScore - corruptedScore.realLikeScore,
      });
    }

    results[kind] = summarizePairRows(rows);
  }

  return results;
}

function summarizePairRows(rows) {
  const wins = rows.filter((row) => row.real > row.corrupted).length;
  const ties = rows.filter((row) => row.real === row.corrupted).length;
  const margins = rows.map((row) => row.margin);
  return {
    count: rows.length,
    rankingAccuracy: wins / rows.length,
    tieRate: ties / rows.length,
    meanMargin: mean(margins),
    p10Margin: quantile(margins, 0.1),
    p50Margin: quantile(margins, 0.5),
    p90Margin: quantile(margins, 0.9),
  };
}

function melodicNotes(phrase) {
  return phrase.notes.filter((note) => note.track === "melody" || note.track === "continuation");
}

function mean(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function stdev(values) {
  if (values.length < 2) return 0;
  const avg = mean(values);
  return Math.sqrt(mean(values.map((value) => (value - avg) ** 2)));
}

function quantile(values, q) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor((sorted.length - 1) * q)];
}

function positiveMod(value, mod) {
  return ((value % mod) + mod) % mod;
}

function clamp(value) {
  return Math.max(0, Math.min(1, value));
}

function round(value) {
  return Math.round(value * 1000) / 1000;
}

function roundDeep(value) {
  if (typeof value === "number") return round(value);
  if (Array.isArray(value)) return value.map(roundDeep);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, roundDeep(item)]));
  }
  return value;
}

function renderMarkdown(report) {
  const rows = Object.entries(report.corruptionResults)
    .map(([kind, result]) => `| ${kind} | ${round(result.rankingAccuracy)} | ${round(result.meanMargin)} | ${round(result.p10Margin)} | ${round(result.p50Margin)} | ${round(result.p90Margin)} |`)
    .join("\n");
  const componentRows = Object.entries(report.realComponentMeans)
    .map(([name, value]) => `| ${name} | ${round(value)} |`)
    .join("\n");

  return `# ProjChord-Eval Nottingham Calibration

生成时间：${report.generatedAt}

## Purpose

这个报告不证明音乐绝对好听。它只验证一件事：当前评价器能不能把真实 Nottingham 片段排在结构被破坏的片段前面。

## Pairwise Calibration

| corruption | ranking accuracy | mean margin | p10 margin | p50 margin | p90 margin |
| --- | ---: | ---: | ---: | ---: | ---: |
${rows}

## Real Sample Component Means

| component | mean |
| --- | ---: |
${componentRows}

## Interpretation

1. ranking accuracy 接近 1，说明该破坏类型能被当前指标稳定识别。
2. ranking accuracy 接近 0.5，说明当前指标对该破坏类型没有足够区分力。
3. mean margin 是真实样本分数减破坏样本分数，越大说明指标越敏感。

## Current Caveat

这是第一版规则评价器。它的作用是校准指标方向，不是最终论文总分。下一步应接入 POP909，并用 melody/chord/accompaniment 的真实配对训练更强的 representation scorer。
`;
}

function main() {
  if (!existsSync(PHRASES_PATH)) {
    throw new Error("Missing Nottingham phrases. Run: npm run corpus:nottingham");
  }

  mkdirSync(REPORT_DIR, { recursive: true });
  const phrases = readJsonl(PHRASES_PATH).filter((phrase) => phrase.notes.length >= 8 && phrase.chords.length >= 2);
  const sample = phrases.slice(0, 1200);
  const referenceStats = buildReferenceStats(phrases);
  const realScores = sample.map((phrase) => scorePhrase(phrase, referenceStats));
  const realComponentMeans = {};

  for (const name of Object.keys(realScores[0]?.scores || {})) {
    realComponentMeans[name] = mean(realScores.map((score) => score.scores[name]));
  }

  const report = {
    generatedAt: new Date().toISOString(),
    dataset: "nottingham",
    sampleCount: sample.length,
    fullPhraseCount: phrases.length,
    realScoreMean: mean(realScores.map((score) => score.realLikeScore)),
    realComponentMeans,
    corruptionResults: evaluatePairs(sample, referenceStats),
  };

  writeFileSync(JSON_OUT, `${JSON.stringify(roundDeep(report), null, 2)}\n`);
  writeFileSync(MD_OUT, renderMarkdown(report));
  console.log(`Evaluated ${sample.length} phrase pairs per corruption.`);
  console.log(`Wrote: ${JSON_OUT}`);
  console.log(`Wrote: ${MD_OUT}`);
}

main();
