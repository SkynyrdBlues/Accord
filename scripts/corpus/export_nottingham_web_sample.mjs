#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, "../..");
const INPUT_PATH = path.join(ROOT_DIR, "corpus-lab/processed/nottingham/phrases.jsonl");
const OUTPUT_PATH = path.join(ROOT_DIR, "apps/web/src/data/nottinghamPhrases.ts");
const SAMPLE_SIZE = 48;

function readJsonl(filePath) {
  return readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function chooseSamples(phrases) {
  const preferred = phrases.filter((phrase) => {
    const meterOk = phrase.meter === "4/4" || phrase.meter === "2/2";
    const durationOk = phrase.durationBeats >= 28 && phrase.durationBeats <= 36;
    const noteOk = phrase.notes.length >= 16 && phrase.notes.length <= 96;
    const chordOk = phrase.chords.length >= 4 && phrase.chords.length <= 20;
    return meterOk && durationOk && noteOk && chordOk;
  });

  const byTune = new Map();
  for (const phrase of preferred) {
    if (!byTune.has(phrase.sourceTuneId)) byTune.set(phrase.sourceTuneId, phrase);
  }

  return Array.from(byTune.values()).slice(0, SAMPLE_SIZE);
}

function toWebPhrase(phrase) {
  return {
    id: phrase.id,
    title: phrase.title,
    key: phrase.key,
    meter: phrase.meter,
    bars: phrase.bars,
    durationBeats: phrase.durationBeats,
    chords: phrase.chords.map((chord) => ({
      name: chord.name,
      root: chord.root,
      quality: chord.quality,
      startBeat: chord.startBeat,
      durationBeats: chord.durationBeats,
    })),
    notes: phrase.notes.map((note) => ({
      pitch: note.pitch,
      startBeat: note.startBeat,
      durationBeats: note.durationBeats,
      velocity: note.velocity,
      track: note.track,
    })),
    provenance: phrase.provenance,
  };
}

function main() {
  if (!existsSync(INPUT_PATH)) {
    throw new Error(`Missing processed phrases: ${INPUT_PATH}. Run: npm run corpus:nottingham`);
  }

  const phrases = readJsonl(INPUT_PATH);
  const samples = chooseSamples(phrases).map(toWebPhrase);
  if (samples.length === 0) {
    throw new Error("No Nottingham phrases matched the web sample filter.");
  }

  mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  const content = `import type { ChordEvent, NoteEvent } from "../../../../packages/core/src";

export interface NottinghamPhrase {
  id: string;
  title: string;
  key: string;
  meter: string;
  bars: number;
  durationBeats: number;
  chords: ChordEvent[];
  notes: NoteEvent[];
  provenance: {
    dataset: string;
    subset: string;
    license: string;
  };
}

export const NOTTINGHAM_PHRASES: NottinghamPhrase[] = ${JSON.stringify(samples, null, 2)};
`;

  writeFileSync(OUTPUT_PATH, content);
  console.log(`Exported ${samples.length} web sample phrases.`);
  console.log(`Wrote: ${OUTPUT_PATH}`);
}

main();
