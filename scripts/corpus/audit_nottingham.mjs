#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, "../..");
const PHRASES_PATH = path.join(ROOT_DIR, "corpus-lab/processed/nottingham/phrases.jsonl");
const REPORT_DIR = path.join(ROOT_DIR, "corpus-lab/reports");
const JSON_OUT = path.join(REPORT_DIR, "nottingham-audit.json");
const MD_OUT = path.join(REPORT_DIR, "nottingham-audit.md");

function readJsonl(filePath) {
  return readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function mean(values) {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function quantile(values, q) {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.min(sorted.length - 1, Math.max(0, Math.floor((sorted.length - 1) * q)));
  return sorted[index];
}

function histogram(values) {
  return values.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function phraseFeatures(phrase) {
  const melodicNotes = phrase.notes.filter((note) => note.track === "melody" || note.track === "continuation");
  const pitches = melodicNotes.map((note) => note.pitch);
  const onsets = melodicNotes.map((note) => note.startBeat).sort((a, b) => a - b);
  const intervals = pitches.slice(1).map((pitch, index) => pitch - pitches[index]);
  const durations = melodicNotes.map((note) => note.durationBeats);
  const durationBeats = phrase.durationBeats || Math.max(1, ...phrase.notes.map((note) => note.startBeat + note.durationBeats));
  const bars = phrase.bars || 1;
  const uniquePitchClasses = new Set(pitches.map((pitch) => pitch % 12)).size;
  const largeLeaps = intervals.filter((interval) => Math.abs(interval) >= 7).length;
  const repeatedOnsets = onsets.filter((onset, index) => index > 0 && onset === onsets[index - 1]).length;
  const chordQualities = phrase.chords.map((chord) => chord.quality);

  return {
    id: phrase.id,
    title: phrase.title,
    subset: phrase.provenance?.subset || "unknown",
    meter: phrase.meter,
    bars,
    durationBeats,
    noteCount: melodicNotes.length,
    chordCount: phrase.chords.length,
    notesPerBar: melodicNotes.length / bars,
    chordsPerBar: phrase.chords.length / bars,
    pitchMin: pitches.length ? Math.min(...pitches) : null,
    pitchMax: pitches.length ? Math.max(...pitches) : null,
    pitchRange: pitches.length ? Math.max(...pitches) - Math.min(...pitches) : 0,
    uniquePitchClasses,
    avgDuration: mean(durations),
    longNoteRatio: durations.length ? durations.filter((duration) => duration >= 1).length / durations.length : 0,
    largeLeapRatio: intervals.length ? largeLeaps / intervals.length : 0,
    repeatedOnsetRatio: onsets.length ? repeatedOnsets / onsets.length : 0,
    seventhChordRatio: chordQualities.length ? chordQualities.filter((quality) => quality.includes("7")).length / chordQualities.length : 0,
  };
}

function summarizeFeatures(features) {
  const numericKeys = [
    "durationBeats",
    "noteCount",
    "chordCount",
    "notesPerBar",
    "chordsPerBar",
    "pitchRange",
    "uniquePitchClasses",
    "avgDuration",
    "longNoteRatio",
    "largeLeapRatio",
    "repeatedOnsetRatio",
    "seventhChordRatio",
  ];

  const numeric = {};
  for (const key of numericKeys) {
    const values = features.map((feature) => feature[key]).filter((value) => Number.isFinite(value));
    numeric[key] = {
      mean: round(mean(values)),
      p10: round(quantile(values, 0.1)),
      p50: round(quantile(values, 0.5)),
      p90: round(quantile(values, 0.9)),
    };
  }

  return {
    phraseCount: features.length,
    meters: histogram(features.map((feature) => feature.meter)),
    subsets: histogram(features.map((feature) => feature.subset)),
    numeric,
    caveats: [
      "Nottingham is useful for folk melody and simple chord baselines, but it is not a strong source for pop arrangement or jazz harmonic vocabulary.",
      "The current parser preserves written ABC order and does not fully expand repeat structure.",
      "The corpus currently lacks audio, expressive timing, lyrics, arrangement roles beyond melody/chord, and rich style metadata.",
    ],
    recommendedNextData: [
      "POP909 for melody, chord, beat, key, and piano-accompaniment aligned pop phrases.",
      "ChoCo for chord vocabulary normalization and harmonic prior estimation.",
      "Weimar Jazz Database or similar jazz solo corpora for swing phrasing and improvisation descriptors, paired later with chord/lead-sheet sources.",
      "PDMX or Mutopia for public-domain master-reference visual comparison.",
    ],
  };
}

function round(value) {
  return Math.round(value * 1000) / 1000;
}

function renderMarkdown(summary) {
  const numericRows = Object.entries(summary.numeric)
    .map(([name, stats]) => `| ${name} | ${stats.mean} | ${stats.p10} | ${stats.p50} | ${stats.p90} |`)
    .join("\n");
  const meterRows = Object.entries(summary.meters)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => `| ${name} | ${count} |`)
    .join("\n");

  return `# Nottingham Corpus Audit

生成时间：${summary.generatedAt}

## Scale

| 项目 | 数值 |
| --- | --- |
| phrase count | ${summary.phraseCount} |

## Meter Distribution

| meter | count |
| --- | --- |
${meterRows}

## Numeric Feature Summary

| feature | mean | p10 | p50 | p90 |
| --- | ---: | ---: | ---: | ---: |
${numericRows}

## Caveats

1. ${summary.caveats[0]}
2. ${summary.caveats[1]}
3. ${summary.caveats[2]}

## Recommended Next Data

1. ${summary.recommendedNextData[0]}
2. ${summary.recommendedNextData[1]}
3. ${summary.recommendedNextData[2]}
4. ${summary.recommendedNextData[3]}
`;
}

function main() {
  if (!existsSync(PHRASES_PATH)) {
    throw new Error("Missing Nottingham phrases. Run: npm run corpus:nottingham");
  }

  mkdirSync(REPORT_DIR, { recursive: true });
  const phrases = readJsonl(PHRASES_PATH);
  const features = phrases.map(phraseFeatures);
  const summary = {
    generatedAt: new Date().toISOString(),
    dataset: "nottingham",
    ...summarizeFeatures(features),
  };

  writeFileSync(JSON_OUT, `${JSON.stringify({ summary, features }, null, 2)}\n`);
  writeFileSync(MD_OUT, renderMarkdown(summary));
  console.log(`Audited ${features.length} Nottingham phrases.`);
  console.log(`Wrote: ${JSON_OUT}`);
  console.log(`Wrote: ${MD_OUT}`);
}

main();
