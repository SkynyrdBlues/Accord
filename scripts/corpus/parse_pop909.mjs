#!/usr/bin/env node
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, "../..");
const DEFAULT_RAW_DIR = path.join(ROOT_DIR, "corpus-lab/raw/pop909");
const DEFAULT_OUT_DIR = path.join(ROOT_DIR, "corpus-lab/processed/pop909");
const REPORT_DIR = path.join(ROOT_DIR, "corpus-lab/reports");
const PHRASE_BARS = 8;
const BEATS_PER_BAR = 4;
const PHRASE_BEATS = PHRASE_BARS * BEATS_PER_BAR;
const PC = { C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, F: 5, "F#": 6, Gb: 6, G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11 };

function parseArgs(argv) {
  const args = {
    rawDir: DEFAULT_RAW_DIR,
    outDir: DEFAULT_OUT_DIR,
  };

  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === "--raw-dir") args.rawDir = path.resolve(argv[++i]);
    else if (argv[i] === "--out-dir") args.outDir = path.resolve(argv[++i]);
    else if (argv[i] === "--help") {
      console.log("Usage: node scripts/corpus/parse_pop909.mjs [--raw-dir DIR] [--out-dir DIR]");
      process.exit(0);
    }
  }

  return args;
}

function findDatasetRoot(rawDir) {
  const candidates = [
    path.join(rawDir, "POP909"),
    path.join(rawDir, "POP909-Dataset-master", "POP909"),
    rawDir,
  ];

  for (const candidate of candidates) {
    if (!existsSync(candidate)) continue;
    const numericDirs = readdirSync(candidate, { withFileTypes: true }).filter((entry) => entry.isDirectory() && /^\d{3}$/.test(entry.name));
    if (numericDirs.length > 0) return candidate;
  }

  throw new Error(`POP909 dataset root not found under ${rawDir}. Download and extract POP909 first.`);
}

function parseSong(songDir) {
  const songId = path.basename(songDir);
  const chordPath = path.join(songDir, "chord_midi.txt");
  const keyPath = path.join(songDir, "key_audio.txt");
  const beatPath = path.join(songDir, "beat_midi.txt");
  const midiPath = findMidiFile(songDir);

  if (!existsSync(chordPath) || !midiPath) return null;

  const chords = parseChordFile(chordPath);
  const midi = parseMidiFile(midiPath);
  const melodyTrack = selectTrack(midi.tracks, "melody") || midi.tracks.find((track) => track.notes.length > 0);
  const bridgeTrack = selectTrack(midi.tracks, "bridge");
  const pianoTrack = selectTrack(midi.tracks, "piano");
  const melodyNotes = melodyTrack ? melodyTrack.notes.map((note) => toNoteEvent(note, "melody")) : [];
  const bridgeNotes = bridgeTrack ? bridgeTrack.notes.map((note) => toNoteEvent(note, "continuation")) : [];
  const pianoNotes = pianoTrack ? pianoTrack.notes.map((note) => toNoteEvent(note, "harmony", 0.48)) : [];
  const key = existsSync(keyPath) ? readFileSync(keyPath, "utf8").trim().split(/\s+/).slice(0, 4).join(" ") : "";
  const beatCount = existsSync(beatPath) ? readFileSync(beatPath, "utf8").split(/\r?\n/).filter(Boolean).length : 0;
  const totalBeats = Math.max(
    ...[...melodyNotes, ...bridgeNotes, ...pianoNotes].map((note) => note.startBeat + note.durationBeats),
    ...chords.map((chord) => chord.startBeat + chord.durationBeats),
    0,
  );

  return {
    id: `pop909:${songId}`,
    source: "pop909",
    songId,
    sourceDir: songDir,
    key,
    beatCount,
    totalBeats: roundBeat(totalBeats),
    tracks: midi.tracks.map((track) => ({ name: track.name, noteCount: track.notes.length })),
    chords,
    notes: [...melodyNotes, ...bridgeNotes, ...pianoNotes],
  };
}

function findMidiFile(songDir) {
  const files = readdirSync(songDir).filter((file) => file.toLowerCase().endsWith(".mid") || file.toLowerCase().endsWith(".midi"));
  if (files.length === 0) return null;
  const preferred = files.find((file) => file === `${path.basename(songDir)}.mid`) || files.find((file) => /pop|\.mid$/i.test(file));
  return path.join(songDir, preferred || files[0]);
}

function selectTrack(tracks, role) {
  return tracks.find((track) => track.name.toLowerCase().includes(role) && track.notes.length > 0);
}

function parseChordFile(filePath) {
  return readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split(/\s+/);
      const startBeat = Number(parts[0]);
      const endBeat = Number(parts[1]);
      const rawName = parts.slice(2).join("");
      const parsed = parseChord(rawName);
      return {
        name: parsed.name,
        root: parsed.root,
        quality: parsed.quality,
        startBeat: roundBeat(startBeat),
        durationBeats: roundBeat(Math.max(endBeat - startBeat, 0.25)),
      };
    })
    .filter((chord) => Number.isFinite(chord.startBeat) && Number.isFinite(chord.durationBeats) && chord.name !== "N");
}

function parseChord(label) {
  const cleaned = label.trim();
  if (!cleaned || cleaned === "N") return { name: "N", root: 0, quality: "maj" };
  const noBass = cleaned.split("/")[0];
  const match = noBass.match(/^([A-G])(#|b)?(?::?(.+))?$/);
  if (!match) return { name: cleaned, root: 0, quality: "maj" };

  const rootName = `${match[1]}${match[2] || ""}`;
  const suffix = match[3] || "";
  let quality = "maj";
  if (/min7|m7/i.test(suffix)) quality = "min7";
  else if (/maj7|M7/i.test(suffix)) quality = "maj7";
  else if (/7/i.test(suffix)) quality = "dom7";
  else if (/min|m/i.test(suffix)) quality = "min";
  else if (/dim/i.test(suffix)) quality = "dim";

  return {
    name: cleaned.replace(":", ""),
    root: PC[rootName] ?? 0,
    quality,
  };
}

function parseMidiFile(filePath) {
  const bytes = readFileSync(filePath);
  let offset = 0;

  function readAscii(length) {
    const value = bytes.toString("ascii", offset, offset + length);
    offset += length;
    return value;
  }

  function readU16() {
    const value = bytes.readUInt16BE(offset);
    offset += 2;
    return value;
  }

  function readU32() {
    const value = bytes.readUInt32BE(offset);
    offset += 4;
    return value;
  }

  if (readAscii(4) !== "MThd") throw new Error(`Invalid MIDI header: ${filePath}`);
  const headerLength = readU32();
  const format = readU16();
  const trackCount = readU16();
  const division = readU16();
  offset += headerLength - 6;

  const tracks = [];
  for (let index = 0; index < trackCount; index += 1) {
    const chunkType = readAscii(4);
    const chunkLength = readU32();
    if (chunkType !== "MTrk") {
      offset += chunkLength;
      continue;
    }
    const end = offset + chunkLength;
    tracks.push(parseTrack(bytes, offset, end, division, index));
    offset = end;
  }

  return { format, division, tracks };
}

function parseTrack(bytes, startOffset, endOffset, division, index) {
  let offset = startOffset;
  let tick = 0;
  let runningStatus = null;
  let name = `track_${index}`;
  const active = new Map();
  const notes = [];

  function readVarLen() {
    let value = 0;
    while (offset < endOffset) {
      const byte = bytes[offset++];
      value = (value << 7) | (byte & 0x7f);
      if ((byte & 0x80) === 0) break;
    }
    return value;
  }

  while (offset < endOffset) {
    tick += readVarLen();
    let status = bytes[offset++];
    if (status < 0x80) {
      offset -= 1;
      status = runningStatus;
    } else {
      runningStatus = status;
    }

    if (status === 0xff) {
      const metaType = bytes[offset++];
      const length = readVarLen();
      const dataStart = offset;
      const dataEnd = offset + length;
      if (metaType === 0x03) name = bytes.toString("utf8", dataStart, dataEnd);
      offset = dataEnd;
      continue;
    }

    if (status === 0xf0 || status === 0xf7) {
      const length = readVarLen();
      offset += length;
      continue;
    }

    const eventType = status & 0xf0;
    const channel = status & 0x0f;
    const data1 = bytes[offset++];
    const data2 = eventType === 0xc0 || eventType === 0xd0 ? null : bytes[offset++];

    if (eventType === 0x90 && data2 > 0) {
      active.set(`${channel}:${data1}`, { pitch: data1, startTick: tick, velocity: data2 });
    } else if (eventType === 0x80 || (eventType === 0x90 && data2 === 0)) {
      const key = `${channel}:${data1}`;
      const started = active.get(key);
      if (started) {
        notes.push({
          pitch: started.pitch,
          startBeat: started.startTick / division,
          durationBeats: Math.max((tick - started.startTick) / division, 0.05),
          velocity: started.velocity / 127,
        });
        active.delete(key);
      }
    }
  }

  return { name, notes };
}

function toNoteEvent(note, track, velocityScale = 1) {
  return {
    pitch: note.pitch,
    startBeat: roundBeat(note.startBeat),
    durationBeats: roundBeat(note.durationBeats),
    velocity: roundBeat(Math.min(note.velocity * velocityScale, 1)),
    track,
  };
}

function cutPhrases(song) {
  const phrases = [];
  const windows = Math.floor(song.totalBeats / PHRASE_BEATS);

  for (let windowIndex = 0; windowIndex < windows; windowIndex += 1) {
    const startBeat = windowIndex * PHRASE_BEATS;
    const endBeat = startBeat + PHRASE_BEATS;
    const melodyNotes = clipEvents(song.notes.filter((note) => note.track === "melody"), startBeat, endBeat);
    const chords = clipEvents(song.chords, startBeat, endBeat);
    const accompaniment = clipEvents(song.notes.filter((note) => note.track !== "melody"), startBeat, endBeat);

    if (melodyNotes.length < 8 || chords.length < 2) continue;

    phrases.push({
      id: `${song.id}:bars-${windowIndex * PHRASE_BARS + 1}-${(windowIndex + 1) * PHRASE_BARS}`,
      source: song.source,
      songId: song.songId,
      key: song.key,
      bars: PHRASE_BARS,
      startBar: windowIndex * PHRASE_BARS,
      durationBeats: PHRASE_BEATS,
      chords,
      notes: [...melodyNotes, ...accompaniment],
      provenance: {
        dataset: "POP909",
        songId: song.songId,
        licenseNote: "Research dataset; verify demo/redistribution boundaries before public use.",
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
      return {
        ...event,
        startBeat: roundBeat(Math.max(eventStart, startBeat) - startBeat),
        durationBeats: roundBeat(Math.min(eventEnd, endBeat) - Math.max(eventStart, startBeat)),
      };
    })
    .filter(Boolean);
}

function roundBeat(value) {
  return Math.round(value * 1000) / 1000;
}

function writeJsonl(filePath, rows) {
  writeFileSync(filePath, rows.map((row) => JSON.stringify(row)).join("\n") + "\n");
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const datasetRoot = findDatasetRoot(args.rawDir);
  const songDirs = readdirSync(datasetRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^\d{3}$/.test(entry.name))
    .map((entry) => path.join(datasetRoot, entry.name))
    .sort();
  const songs = songDirs.map(parseSong).filter(Boolean);
  const phrases = songs.flatMap(cutPhrases);
  const summary = {
    generatedAt: new Date().toISOString(),
    dataset: "pop909",
    datasetRoot,
    songDirCount: songDirs.length,
    parsedSongCount: songs.length,
    phraseCount: phrases.length,
    phraseBars: PHRASE_BARS,
    notesByRole: roleCounts(phrases),
  };

  mkdirSync(args.outDir, { recursive: true });
  mkdirSync(REPORT_DIR, { recursive: true });
  writeJsonl(path.join(args.outDir, "songs.jsonl"), songs);
  writeJsonl(path.join(args.outDir, "phrases.jsonl"), phrases);
  writeFileSync(path.join(REPORT_DIR, "pop909-summary.json"), JSON.stringify(summary, null, 2) + "\n");

  console.log(`Parsed ${summary.parsedSongCount}/${summary.songDirCount} POP909 songs.`);
  console.log(`Generated ${summary.phraseCount} ${PHRASE_BARS}-bar phrases.`);
  console.log(`Wrote: ${path.join(args.outDir, "phrases.jsonl")}`);
}

function roleCounts(phrases) {
  const counts = {};
  for (const phrase of phrases) {
    for (const note of phrase.notes) counts[note.track] = (counts[note.track] || 0) + 1;
  }
  return counts;
}

main();
