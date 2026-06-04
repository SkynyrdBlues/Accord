#!/usr/bin/env node
import { createWriteStream, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, "../..");
const DEFAULT_SOURCE_DIR = path.join(
  ROOT_DIR,
  "corpus-lab/raw/nottingham/nottingham-dataset-master/ABC_cleaned",
);
const OUT_DIR = path.join(ROOT_DIR, "corpus-lab/processed/nottingham");
const REPORT_DIR = path.join(ROOT_DIR, "corpus-lab/reports");

const NOTE_BASE = { C: 60, D: 62, E: 64, F: 65, G: 67, A: 69, B: 71 };
const PC = { C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, F: 5, "F#": 6, Gb: 6, G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11 };

const KEY_SIGNATURES = {
  C: {},
  G: { F: 1 },
  D: { F: 1, C: 1 },
  A: { F: 1, C: 1, G: 1 },
  E: { F: 1, C: 1, G: 1, D: 1 },
  B: { F: 1, C: 1, G: 1, D: 1, A: 1 },
  "F#": { F: 1, C: 1, G: 1, D: 1, A: 1, E: 1 },
  "C#": { F: 1, C: 1, G: 1, D: 1, A: 1, E: 1, B: 1 },
  F: { B: -1 },
  Bb: { B: -1, E: -1 },
  Eb: { B: -1, E: -1, A: -1 },
  Ab: { B: -1, E: -1, A: -1, D: -1 },
  Db: { B: -1, E: -1, A: -1, D: -1, G: -1 },
  Gb: { B: -1, E: -1, A: -1, D: -1, G: -1, C: -1 },
  Cb: { B: -1, E: -1, A: -1, D: -1, G: -1, C: -1, F: -1 },
  Am: {},
  Em: { F: 1 },
  Bm: { F: 1, C: 1 },
  "F#m": { F: 1, C: 1, G: 1 },
  "C#m": { F: 1, C: 1, G: 1, D: 1 },
  "G#m": { F: 1, C: 1, G: 1, D: 1, A: 1 },
  "D#m": { F: 1, C: 1, G: 1, D: 1, A: 1, E: 1 },
  "A#m": { F: 1, C: 1, G: 1, D: 1, A: 1, E: 1, B: 1 },
  Dm: { B: -1 },
  Gm: { B: -1, E: -1 },
  Cm: { B: -1, E: -1, A: -1 },
  Fm: { B: -1, E: -1, A: -1, D: -1 },
  Bbm: { B: -1, E: -1, A: -1, D: -1, G: -1 },
  Ebm: { B: -1, E: -1, A: -1, D: -1, G: -1, C: -1 },
  Abm: { B: -1, E: -1, A: -1, D: -1, G: -1, C: -1, F: -1 },
};

function parseArgs(argv) {
  const args = {
    sourceDir: DEFAULT_SOURCE_DIR,
    outDir: OUT_DIR,
    phraseBars: 8,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--source-dir") args.sourceDir = path.resolve(argv[++i]);
    else if (arg === "--out-dir") args.outDir = path.resolve(argv[++i]);
    else if (arg === "--phrase-bars") args.phraseBars = Number(argv[++i]);
    else if (arg === "--help") {
      console.log("Usage: node scripts/corpus/parse_nottingham.mjs [--source-dir DIR] [--out-dir DIR] [--phrase-bars 8]");
      process.exit(0);
    }
  }

  if (!Number.isFinite(args.phraseBars) || args.phraseBars < 1) {
    throw new Error("--phrase-bars must be a positive number");
  }

  return args;
}

function splitTunes(text, sourceFile) {
  const normalized = text.replace(/\\\r?\n/g, " ");
  const blocks = normalized.split(/\n(?=X:\s*\d+)/g);
  return blocks
    .map((block) => block.trim())
    .filter((block) => block.startsWith("X:"))
    .map((block) => parseTuneBlock(block, sourceFile));
}

function parseTuneBlock(block, sourceFile) {
  const tune = {
    source: "nottingham",
    sourceFile,
    x: "",
    title: "",
    meter: "4/4",
    defaultNoteLength: "",
    key: "C",
    rawHeaders: {},
    bodyLines: [],
  };

  const lines = block.split(/\r?\n/);
  let inBody = false;

  for (const originalLine of lines) {
    const line = originalLine.trim();
    if (!line || line.startsWith("%")) continue;

    const header = line.match(/^([A-Z]):\s*(.*)$/);
    if (header && !inBody) {
      applyHeader(tune, header[1], header[2]);
      if (header[1] === "K") inBody = true;
      continue;
    }

    inBody = true;
    tune.bodyLines.push(line);
  }

  return tune;
}

function applyHeader(tune, key, value) {
  tune.rawHeaders[key] = value;
  if (key === "X") tune.x = value.trim();
  if (key === "T") tune.title = value.trim();
  if (key === "M") tune.meter = value.trim();
  if (key === "L") tune.defaultNoteLength = value.trim();
  if (key === "K") tune.key = value.trim();
}

function parseMeter(value) {
  if (!value || value === "C") return { num: 4, den: 4, barBeats: 4 };
  if (value === "C|") return { num: 2, den: 2, barBeats: 4 };
  const match = value.match(/^(\d+)\/(\d+)/);
  if (!match) return { num: 4, den: 4, barBeats: 4 };
  const num = Number(match[1]);
  const den = Number(match[2]);
  return { num, den, barBeats: (4 * num) / den };
}

function defaultLengthBeats(defaultLength, meter) {
  const value = defaultLength || "1/8";
  const match = value.match(/^(\d+)\/(\d+)/);
  if (match) return (4 * Number(match[1])) / Number(match[2]);

  const meterRatio = meter.num / meter.den;
  return meterRatio < 0.75 ? 0.25 : 0.5;
}

function normalizeKey(rawKey) {
  const compact = (rawKey || "C").trim().replace(/\s+/g, "");
  const match = compact.match(/^([A-Ga-g])([#b]?)(m|min|minor)?/);
  if (!match) return "C";
  const tonic = match[1].toUpperCase() + (match[2] || "");
  const mode = match[3] ? "m" : "";
  return `${tonic}${mode}`;
}

function keyAccidentals(rawKey) {
  const key = normalizeKey(rawKey);
  return KEY_SIGNATURES[key] || {};
}

function parseAbcTune(tune) {
  let meter = parseMeter(tune.meter);
  let baseLength = defaultLengthBeats(tune.defaultNoteLength, meter);
  let key = tune.key;
  let signature = keyAccidentals(key);
  let currentBeat = 0;
  let currentBarStart = 0;
  let currentBar = 0;
  let pendingChord = null;
  let tupletRemaining = 0;
  let tupletScale = 1;
  const notes = [];
  const chordMarks = [];
  const barStarts = [0];
  const warnings = [];

  function closeChord(atBeat) {
    if (!pendingChord) return;
    if (atBeat > pendingChord.startBeat) {
      chordMarks.push({ ...pendingChord, durationBeats: roundBeat(atBeat - pendingChord.startBeat) });
    }
    pendingChord = null;
  }

  function beginChord(raw) {
    const label = raw.trim();
    if (!looksLikeChord(label)) return;
    closeChord(currentBeat);
    const parsed = parseChord(label);
    pendingChord = {
      name: parsed.name,
      raw,
      root: parsed.root,
      quality: parsed.quality,
      startBeat: roundBeat(currentBeat),
    };
  }

  function beginTuplet(count) {
    tupletRemaining = count;
    tupletScale = count === 2 ? 1.5 : (count - 1) / count;
  }

  function consumeTupletScale() {
    if (tupletRemaining <= 0) return 1;
    const scale = tupletScale;
    tupletRemaining -= 1;
    if (tupletRemaining === 0) tupletScale = 1;
    return scale;
  }

  function addBarIfNeeded() {
    if (currentBeat <= currentBarStart + 0.0001) return;
    currentBar += 1;
    currentBarStart = currentBeat;
    barStarts.push(roundBeat(currentBeat));
  }

  for (const line of tune.bodyLines) {
    const withoutComment = line.replace(/%.*/, "").trim();
    if (!withoutComment) continue;

    const header = withoutComment.match(/^([A-Z]):\s*(.*)$/);
    if (header) {
      if (header[1] === "M") {
        meter = parseMeter(header[2]);
        baseLength = defaultLengthBeats(tune.defaultNoteLength, meter);
      } else if (header[1] === "L") {
        baseLength = defaultLengthBeats(header[2], meter);
      } else if (header[1] === "K") {
        key = header[2].trim();
        signature = keyAccidentals(key);
      }
      continue;
    }

    let i = 0;
    while (i < withoutComment.length) {
      const char = withoutComment[i];

      if (char === '"') {
        const end = withoutComment.indexOf('"', i + 1);
        if (end === -1) {
          warnings.push(`Unclosed chord quote in ${tune.title}`);
          break;
        }
        beginChord(withoutComment.slice(i + 1, end));
        i = end + 1;
        continue;
      }

      if (char === "|") {
        addBarIfNeeded();
        i += 1;
        continue;
      }

      if (char === "[") {
        if (withoutComment[i + 1] === "1" || withoutComment[i + 1] === "2") {
          i += 2;
          continue;
        }

        const end = withoutComment.indexOf("]", i + 1);
        if (end === -1) {
          i += 1;
          continue;
        }
        const chordToken = withoutComment.slice(i + 1, end);
        const parsedChordNotes = parseBracketNotes(chordToken, baseLength, signature, currentBeat, consumeTupletScale());
        for (const note of parsedChordNotes.notes) notes.push({ ...note, bar: currentBar });
        currentBeat += parsedChordNotes.durationBeats;
        i = end + 1;
        continue;
      }

      if (char === "(" && /\d/.test(withoutComment[i + 1] || "")) {
        beginTuplet(Number(withoutComment[i + 1]));
        i += 2;
        continue;
      }

      if (isNoteStart(withoutComment, i)) {
        const parsed = parseSingleNote(withoutComment, i, baseLength, signature, currentBeat, consumeTupletScale());
        if (parsed.note) notes.push({ ...parsed.note, bar: currentBar });
        currentBeat += parsed.durationBeats;
        i = parsed.nextIndex;
        continue;
      }

      i += 1;
    }
  }

  closeChord(currentBeat);

  const totalBars = Math.max(currentBar, barStarts.length - 1);
  return {
    id: `nottingham:${path.basename(tune.sourceFile, ".abc")}:${tune.x}`,
    source: tune.source,
    sourceFile: tune.sourceFile,
    x: tune.x,
    title: tune.title,
    key: normalizeKey(tune.key),
    meter: tune.meter,
    totalBeats: roundBeat(currentBeat),
    totalBars,
    barStarts,
    notes,
    chords: chordMarks,
    warnings,
  };
}

function looksLikeChord(label) {
  const trimmed = label.trim();
  if (!trimmed) return false;
  return /^[A-G](#|b)?/.test(trimmed);
}

function parseChord(label) {
  const trimmed = label.trim().replace(/\s+/g, "");
  const noBass = trimmed.split("/")[0];
  const match = noBass.match(/^([A-G])(#|b)?(.*)$/);
  if (!match) return { name: trimmed, root: 0, quality: "maj" };

  const rootName = `${match[1]}${match[2] || ""}`;
  const suffix = match[3] || "";
  let quality = "maj";
  if (/m7|min7/i.test(suffix)) quality = "min7";
  else if (/maj7|M7/i.test(suffix)) quality = "maj7";
  else if (/7/.test(suffix)) quality = "dom7";
  else if (/m|min/i.test(suffix)) quality = "min";
  else if (/dim|°|d$/.test(suffix)) quality = "dim";

  return {
    name: trimmed,
    root: PC[rootName] ?? 0,
    quality,
  };
}

function parseBracketNotes(token, baseLength, signature, startBeat, durationScale) {
  const notes = [];
  let maxDuration = 0;
  let i = 0;

  while (i < token.length) {
    if (isNoteStart(token, i)) {
      const parsed = parseSingleNote(token, i, baseLength, signature, startBeat, durationScale);
      if (parsed.note) notes.push(parsed.note);
      maxDuration = Math.max(maxDuration, parsed.durationBeats);
      i = parsed.nextIndex;
    } else {
      i += 1;
    }
  }

  return {
    notes,
    durationBeats: maxDuration || baseLength,
  };
}

function isNoteStart(text, index) {
  const char = text[index];
  if (/[=_^]/.test(char)) return /[A-Ga-gz]/.test(text[index + 1] || "");
  return /[A-Ga-gz]/.test(char);
}

function parseSingleNote(text, startIndex, baseLength, signature, startBeat, durationScale = 1) {
  let i = startIndex;
  let accidental = null;
  if (text[i] === "^" || text[i] === "_" || text[i] === "=") {
    if (text[i] === "^") accidental = 1;
    if (text[i] === "_") accidental = -1;
    if (text[i] === "=") accidental = 0;
    i += 1;
  }

  const letter = text[i];
  i += 1;

  let octave = 0;
  while (text[i] === "'" || text[i] === ",") {
    octave += text[i] === "'" ? 12 : -12;
    i += 1;
  }

  const durationStart = i;
  while (/[0-9/]/.test(text[i] || "")) i += 1;
  const durationToken = text.slice(durationStart, i);
  const durationBeats = roundBeat(baseLength * parseDurationFactor(durationToken) * durationScale);

  if (letter === "z") {
    return { note: null, durationBeats, nextIndex: i };
  }

  const upper = letter.toUpperCase();
  const caseOctave = letter === letter.toLowerCase() ? 12 : 0;
  const keyDelta = accidental === null ? signature[upper] || 0 : accidental;
  const pitch = NOTE_BASE[upper] + caseOctave + octave + keyDelta;

  return {
    note: {
      pitch,
      startBeat: roundBeat(startBeat),
      durationBeats,
      velocity: 0.78,
      track: "melody",
    },
    durationBeats,
    nextIndex: i,
  };
}

function parseDurationFactor(token) {
  if (!token) return 1;

  const slashOnly = token.match(/^\/+$/);
  if (slashOnly) return 1 / 2 ** token.length;

  const fraction = token.match(/^(\d+)?\/(\d+)?$/);
  if (fraction) {
    const numerator = fraction[1] ? Number(fraction[1]) : 1;
    const denominator = fraction[2] ? Number(fraction[2]) : 2;
    return numerator / denominator;
  }

  const number = token.match(/^(\d+)$/);
  if (number) return Number(number[1]);

  const mixed = token.match(/^(\d+)\/+$/);
  if (mixed) return Number(mixed[1]) / 2;

  return 1;
}

function roundBeat(value) {
  return Math.round(value * 1000) / 1000;
}

function cutPhrases(tune, phraseBars) {
  const phrases = [];
  const usableBarStarts = tune.barStarts.filter((beat) => beat <= tune.totalBeats);

  for (let startBar = 0; startBar + phraseBars < usableBarStarts.length; startBar += phraseBars) {
    const startBeat = usableBarStarts[startBar];
    const endBeat = usableBarStarts[startBar + phraseBars];
    const notes = clipEvents(tune.notes, startBeat, endBeat);
    const chords = clipEvents(tune.chords, startBeat, endBeat);

    if (notes.length < 4 || chords.length < 1) continue;

    phrases.push({
      id: `${tune.id}:bars-${startBar + 1}-${startBar + phraseBars}`,
      source: tune.source,
      sourceFile: tune.sourceFile,
      sourceTuneId: tune.id,
      title: tune.title,
      key: tune.key,
      meter: tune.meter,
      bars: phraseBars,
      startBar,
      startBeat: 0,
      durationBeats: roundBeat(endBeat - startBeat),
      chords,
      notes,
      provenance: {
        dataset: "Nottingham Dataset",
        subset: path.basename(tune.sourceFile, ".abc"),
        license: "GPL-3.0",
      },
    });
  }

  return phrases;
}

function clipEvents(events, startBeat, endBeat) {
  return events
    .map((event) => {
      const eventStart = event.startBeat;
      const eventEnd = event.startBeat + event.durationBeats;
      if (eventEnd <= startBeat || eventStart >= endBeat) return null;
      const clippedStart = Math.max(eventStart, startBeat);
      const clippedEnd = Math.min(eventEnd, endBeat);
      const { bar, ...rest } = event;
      return {
        ...rest,
        startBeat: roundBeat(clippedStart - startBeat),
        durationBeats: roundBeat(clippedEnd - clippedStart),
      };
    })
    .filter(Boolean);
}

function summarize(tunes, phrases) {
  const bySubset = {};
  const chordCounts = {};
  for (const tune of tunes) {
    const subset = path.basename(tune.sourceFile, ".abc");
    bySubset[subset] ||= { tunes: 0, phrases: 0, notes: 0, chords: 0 };
    bySubset[subset].tunes += 1;
    bySubset[subset].notes += tune.notes.length;
    bySubset[subset].chords += tune.chords.length;
    for (const chord of tune.chords) chordCounts[chord.name] = (chordCounts[chord.name] || 0) + 1;
  }
  for (const phrase of phrases) {
    const subset = path.basename(phrase.sourceFile, ".abc");
    bySubset[subset] ||= { tunes: 0, phrases: 0, notes: 0, chords: 0 };
    bySubset[subset].phrases += 1;
  }

  return {
    generatedAt: new Date().toISOString(),
    dataset: "nottingham",
    tuneCount: tunes.length,
    phraseCount: phrases.length,
    noteCount: tunes.reduce((sum, tune) => sum + tune.notes.length, 0),
    chordEventCount: tunes.reduce((sum, tune) => sum + tune.chords.length, 0),
    bySubset,
    topChords: Object.entries(chordCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 30)
      .map(([name, count]) => ({ name, count })),
  };
}

function writeJsonl(filePath, rows) {
  const stream = createWriteStream(filePath, { encoding: "utf8" });
  for (const row of rows) stream.write(`${JSON.stringify(row)}\n`);
  stream.end();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!existsSync(args.sourceDir)) {
    throw new Error(`Nottingham ABC_cleaned directory not found: ${args.sourceDir}`);
  }

  mkdirSync(args.outDir, { recursive: true });
  mkdirSync(REPORT_DIR, { recursive: true });

  const abcFiles = readdirSync(args.sourceDir)
    .filter((file) => file.endsWith(".abc"))
    .sort();

  const tunes = [];
  for (const file of abcFiles) {
    const filePath = path.join(args.sourceDir, file);
    const text = readFileSync(filePath, "utf8");
    const parsedTunes = splitTunes(text, filePath).map(parseAbcTune);
    tunes.push(...parsedTunes);
  }

  const phrases = tunes.flatMap((tune) => cutPhrases(tune, args.phraseBars));
  const summary = summarize(tunes, phrases);

  writeJsonl(path.join(args.outDir, "tunes.jsonl"), tunes);
  writeJsonl(path.join(args.outDir, "phrases.jsonl"), phrases);
  writeFileSync(path.join(REPORT_DIR, "nottingham-summary.json"), `${JSON.stringify(summary, null, 2)}\n`);

  console.log(`Parsed ${summary.tuneCount} Nottingham tunes.`);
  console.log(`Generated ${summary.phraseCount} ${args.phraseBars}-bar phrases.`);
  console.log(`Notes: ${summary.noteCount}; chord events: ${summary.chordEventCount}.`);
  console.log(`Wrote: ${path.join(args.outDir, "phrases.jsonl")}`);
  console.log(`Report: ${path.join(REPORT_DIR, "nottingham-summary.json")}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
