import { STYLE_PRESETS } from "./stylePresets.js";
import type { ChordEvent, Composition, NoteEvent, StylePresetId } from "./types.js";

const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const CHORD_PITCHES: Record<ChordEvent["quality"], number[]> = {
  maj: [0, 4, 7],
  min: [0, 3, 7],
  dim: [0, 3, 6],
  dom7: [0, 4, 7, 10],
  maj7: [0, 4, 7, 11],
  min7: [0, 3, 7, 10]
};

const PROGRESSIONS: Record<StylePresetId, ChordEvent[]> = {
  stable_pop: [
    chord("C", 0, "maj", 0, 4),
    chord("F", 5, "maj", 4, 2),
    chord("C", 0, "maj", 6, 2),
    chord("F", 5, "maj", 8, 4),
    chord("G", 7, "maj", 12, 2),
    chord("C", 0, "maj", 14, 2)
  ],
  soft_sparse: [
    chord("C", 0, "maj", 0, 4),
    chord("Am", 9, "min", 4, 4),
    chord("F", 5, "maj", 8, 4),
    chord("G", 7, "maj", 12, 2),
    chord("C", 0, "maj", 14, 2)
  ],
  tension: [
    chord("Cmaj7", 0, "maj7", 0, 4),
    chord("Dm7", 2, "min7", 4, 2),
    chord("G7", 7, "dom7", 6, 2),
    chord("Fmaj7", 5, "maj7", 8, 4),
    chord("G7", 7, "dom7", 12, 2),
    chord("Cmaj7", 0, "maj7", 14, 2)
  ],
  groove: [
    chord("C", 0, "maj", 0, 4),
    chord("F", 5, "maj", 4, 2),
    chord("G", 7, "maj", 6, 2),
    chord("F", 5, "maj", 8, 4),
    chord("G", 7, "maj", 12, 2),
    chord("C", 0, "maj", 14, 2)
  ],
  complex: [
    chord("Cmaj7", 0, "maj7", 0, 2),
    chord("G", 7, "maj", 2, 2),
    chord("Fmaj7", 5, "maj7", 4, 2),
    chord("Cmaj7", 0, "maj7", 6, 2),
    chord("Fmaj7", 5, "maj7", 8, 2),
    chord("Cmaj7", 0, "maj7", 10, 2),
    chord("Dm7", 2, "min7", 12, 2),
    chord("G7", 7, "dom7", 14, 1),
    chord("Cmaj7", 0, "maj7", 15, 1)
  ],
  loop_bgm: [
    chord("C", 0, "maj", 0, 4),
    chord("F", 5, "maj", 4, 4),
    chord("C", 0, "maj", 8, 4),
    chord("G", 7, "maj", 12, 2),
    chord("C", 0, "maj", 14, 2)
  ]
};

const SEED_MELODY: NoteEvent[] = [
  note(72, 0, 1, "melody"),
  note(72, 1, 1, "melody"),
  note(79, 2, 1, "melody"),
  note(79, 3, 1, "melody"),
  note(81, 4, 1, "melody"),
  note(81, 5, 1, "melody"),
  note(79, 6, 2, "melody")
];

export function createDemoComposition(styleId: StylePresetId): Composition {
  const preset = STYLE_PRESETS.find((item) => item.id === styleId) ?? STYLE_PRESETS[0];
  const chords = PROGRESSIONS[preset.id];
  const harmony = renderHarmony(chords, preset.id);
  const continuation = renderContinuation(preset.id);

  return {
    id: `demo-${preset.id}`,
    styleId: preset.id,
    tempo: preset.controls.rhythmDensity === "high" ? 128 : 104,
    bars: 4,
    chords,
    notes: [...SEED_MELODY, ...harmony, ...continuation]
  };
}

export function midiToNoteName(midi: number) {
  const octave = Math.floor(midi / 12) - 1;
  return `${NOTE_NAMES[midi % 12]}${octave}`;
}

function renderHarmony(chords: ChordEvent[], styleId: StylePresetId): NoteEvent[] {
  const notes: NoteEvent[] = [];

  for (const event of chords) {
    const chordTones = CHORD_PITCHES[event.quality].map((interval) => 48 + event.root + interval);

    if (styleId === "soft_sparse" || styleId === "loop_bgm" || styleId === "complex") {
      for (let index = 0; index < chordTones.length; index += 1) {
        notes.push(note(chordTones[index], event.startBeat + index * 0.5, 0.6, "harmony", 0.64));
      }
      continue;
    }

    if (styleId === "groove") {
      notes.push(note(chordTones[0] - 12, event.startBeat, 0.6, "harmony", 0.7));
      for (const pitch of chordTones.slice(1)) {
        notes.push(note(pitch, event.startBeat + 0.5, Math.max(event.durationBeats - 0.5, 0.5), "harmony", 0.58));
      }
      continue;
    }

    if (styleId === "tension") {
      notes.push(note(chordTones[0] - 12, event.startBeat, 0.75, "harmony", 0.7));
      for (const pitch of chordTones.slice(1)) {
        notes.push(note(pitch, event.startBeat + 1, event.durationBeats - 1, "harmony", 0.58));
      }
      continue;
    }

    for (const pitch of chordTones) {
      notes.push(note(pitch, event.startBeat, event.durationBeats * 0.85, "harmony", 0.56));
    }
  }

  return notes;
}

function renderContinuation(styleId: StylePresetId): NoteEvent[] {
  const velocity = styleId === "soft_sparse" ? 0.62 : styleId === "groove" ? 0.8 : 0.72;

  return [
    note(77, 8, 1, "continuation", velocity),
    note(77, 9, 1, "continuation", velocity),
    note(76, 10, 1, "continuation", velocity),
    note(76, 11, 1, "continuation", velocity),
    note(74, 12, 1, "continuation", velocity),
    note(74, 13, 1, "continuation", velocity),
    note(72, 14, 2, "continuation", velocity)
  ];
}

function chord(name: string, root: number, quality: ChordEvent["quality"], startBeat: number, durationBeats: number): ChordEvent {
  return {
    name,
    root,
    quality,
    startBeat,
    durationBeats
  };
}

function note(
  pitch: number,
  startBeat: number,
  durationBeats: number,
  track: NoteEvent["track"],
  velocity = 0.75
): NoteEvent {
  return {
    pitch,
    startBeat,
    durationBeats,
    velocity,
    track
  };
}
