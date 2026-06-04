export type TrackRole = "melody" | "harmony" | "continuation";

export type AccompanimentPattern = "block" | "broken" | "bass_chord";

export type StylePresetId =
  | "stable_pop"
  | "soft_sparse"
  | "tension"
  | "groove"
  | "complex"
  | "loop_bgm";

export interface NoteEvent {
  pitch: number;
  startBeat: number;
  durationBeats: number;
  velocity: number;
  track: TrackRole;
}

export interface ChordEvent {
  name: string;
  root: number;
  quality: "maj" | "min" | "dim" | "dom7" | "maj7" | "min7";
  startBeat: number;
  durationBeats: number;
}

export interface StyleControls {
  harmonyDensity: "low" | "medium" | "high";
  rhythmDensity: "low" | "medium" | "high";
  chordComplexity: "triad" | "seventh" | "color";
  accompanimentPattern: AccompanimentPattern;
  tension: "low" | "medium" | "high";
}

export interface StylePreset {
  id: StylePresetId;
  label: string;
  description: string;
  controls: StyleControls;
}

export interface Composition {
  id: string;
  styleId: StylePresetId;
  tempo: number;
  bars: number;
  chords: ChordEvent[];
  notes: NoteEvent[];
}
