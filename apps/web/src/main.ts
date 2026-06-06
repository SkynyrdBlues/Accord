import {
  STYLE_PRESETS,
  createDemoComposition,
  midiToNoteName,
  type ChordEvent,
  type Composition,
  type NoteEvent,
  type StylePresetId
} from "../../../packages/core/src";

import { NOTTINGHAM_PHRASES, type NottinghamPhrase } from "./data/nottinghamPhrases";
import "./style.css";

type InstrumentId = "piano" | "electric" | "organ" | "music_box" | "pluck" | "pad" | "bass";

interface InstrumentPreset {
  id: InstrumentId;
  label: string;
  oscillators: Array<{
    type: OscillatorType;
    harmonic: number;
    detune: number;
    gain: number;
  }>;
  filterFrequency: number;
  filterQ: number;
  attack: number;
  decay: number;
  sustain: number;
  release: number;
  volume: number;
}

interface SoundCombo {
  id: string;
  label: string;
  melody: InstrumentId;
  harmony: InstrumentId;
}

interface FifthsSlot {
  major: string;
  majorRoot: number;
  minor: string;
  minorRoot: number;
}

interface FifthsPoint {
  x: number;
  y: number;
  slotIndex: number;
  layer: "major" | "minor";
}

interface ActiveVoice {
  release: () => void;
}

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Missing #app root");
}

let selectedStyle: StylePresetId = "stable_pop";
let composition: Composition = createDemoComposition(selectedStyle);
let compositionSourceLabel = "小星星演示";
let audioContext: AudioContext | null = null;
let playbackTimers: number[] = [];
let activePlaybackVoices: ActiveVoice[] = [];
const pressedComputerKeys = new Set<string>();
const activeManualVoices = new Map<string, ActiveVoice>();
let melodyInstrument: InstrumentId = "piano";
let harmonyInstrument: InstrumentId = "pad";
let selectedSoundCombo = "piano_pad";
let isComparisonOpen = false;
let libraryPhraseIndex = 0;

const KEYBOARD_START_MIDI = 36;
const KEYBOARD_END_MIDI = 83;
const keyboardNotes = Array.from(
  { length: KEYBOARD_END_MIDI - KEYBOARD_START_MIDI + 1 },
  (_, index) => KEYBOARD_START_MIDI + index
);
const whiteKeyCount = keyboardNotes.filter((midi) => !isBlackKey(midi)).length;
const computerKeyToMidi = new Map<string, number>([
  ["a", 60],
  ["s", 62],
  ["d", 64],
  ["f", 65],
  ["g", 67],
  ["h", 69],
  ["j", 71],
  ["k", 72],
  ["l", 74],
  [";", 76],
  ["w", 61],
  ["e", 63],
  ["t", 66],
  ["y", 68],
  ["u", 70],
  ["o", 73],
  ["p", 75]
]);
const midiToComputerKey = new Map(
  Array.from(computerKeyToMidi.entries()).map(([computerKey, midi]) => [midi, computerKey.toUpperCase()])
);
const instruments: InstrumentPreset[] = [
  {
    id: "piano",
    label: "钢琴",
    oscillators: [
      { type: "triangle", harmonic: 1, detune: 0, gain: 0.78 },
      { type: "sine", harmonic: 2, detune: 3, gain: 0.18 },
      { type: "sine", harmonic: 3, detune: -4, gain: 0.08 }
    ],
    filterFrequency: 3200,
    filterQ: 0.7,
    attack: 0.006,
    decay: 0.18,
    sustain: 0.52,
    release: 0.34,
    volume: 0.16
  },
  {
    id: "electric",
    label: "电钢",
    oscillators: [
      { type: "sine", harmonic: 1, detune: -2, gain: 0.68 },
      { type: "triangle", harmonic: 2, detune: 8, gain: 0.2 },
      { type: "sine", harmonic: 4, detune: 1, gain: 0.05 }
    ],
    filterFrequency: 2600,
    filterQ: 1.2,
    attack: 0.012,
    decay: 0.24,
    sustain: 0.6,
    release: 0.42,
    volume: 0.15
  },
  {
    id: "organ",
    label: "风琴",
    oscillators: [
      { type: "sine", harmonic: 1, detune: 0, gain: 0.52 },
      { type: "sine", harmonic: 2, detune: 0, gain: 0.28 },
      { type: "sine", harmonic: 3, detune: 0, gain: 0.15 }
    ],
    filterFrequency: 3800,
    filterQ: 0.4,
    attack: 0.02,
    decay: 0.05,
    sustain: 0.82,
    release: 0.12,
    volume: 0.13
  },
  {
    id: "music_box",
    label: "音乐盒",
    oscillators: [
      { type: "sine", harmonic: 2, detune: 0, gain: 0.58 },
      { type: "sine", harmonic: 4, detune: 5, gain: 0.26 },
      { type: "triangle", harmonic: 6, detune: -3, gain: 0.1 }
    ],
    filterFrequency: 5600,
    filterQ: 1.8,
    attack: 0.003,
    decay: 0.22,
    sustain: 0.3,
    release: 0.5,
    volume: 0.12
  },
  {
    id: "pluck",
    label: "拨弦",
    oscillators: [
      { type: "triangle", harmonic: 1, detune: 0, gain: 0.7 },
      { type: "sine", harmonic: 2, detune: -7, gain: 0.18 }
    ],
    filterFrequency: 2800,
    filterQ: 1.4,
    attack: 0.002,
    decay: 0.12,
    sustain: 0.24,
    release: 0.2,
    volume: 0.14
  },
  {
    id: "pad",
    label: "Pad",
    oscillators: [
      { type: "sine", harmonic: 1, detune: -8, gain: 0.42 },
      { type: "sine", harmonic: 1, detune: 8, gain: 0.42 },
      { type: "triangle", harmonic: 2, detune: 0, gain: 0.14 }
    ],
    filterFrequency: 1450,
    filterQ: 0.7,
    attack: 0.18,
    decay: 0.22,
    sustain: 0.72,
    release: 0.8,
    volume: 0.1
  },
  {
    id: "bass",
    label: "低音",
    oscillators: [
      { type: "triangle", harmonic: 1, detune: 0, gain: 0.72 },
      { type: "sine", harmonic: 0.5, detune: 0, gain: 0.22 }
    ],
    filterFrequency: 850,
    filterQ: 0.8,
    attack: 0.012,
    decay: 0.16,
    sustain: 0.52,
    release: 0.28,
    volume: 0.13
  }
];
const soundCombos: SoundCombo[] = [
  { id: "piano_pad", label: "钢琴 + Pad", melody: "piano", harmony: "pad" },
  { id: "electric_organ", label: "电钢 + 风琴", melody: "electric", harmony: "organ" },
  { id: "box_pluck", label: "音乐盒 + 拨弦", melody: "music_box", harmony: "pluck" },
  { id: "piano_bass", label: "钢琴 + 低音", melody: "piano", harmony: "bass" }
];
const fifthsSlots: FifthsSlot[] = [
  { major: "C", majorRoot: 0, minor: "Am", minorRoot: 9 },
  { major: "G", majorRoot: 7, minor: "Em", minorRoot: 4 },
  { major: "D", majorRoot: 2, minor: "Bm", minorRoot: 11 },
  { major: "A", majorRoot: 9, minor: "F#m", minorRoot: 6 },
  { major: "E", majorRoot: 4, minor: "C#m", minorRoot: 1 },
  { major: "B", majorRoot: 11, minor: "G#m", minorRoot: 8 },
  { major: "F#", majorRoot: 6, minor: "Ebm", minorRoot: 3 },
  { major: "Db", majorRoot: 1, minor: "Bbm", minorRoot: 10 },
  { major: "Ab", majorRoot: 8, minor: "Fm", minorRoot: 5 },
  { major: "Eb", majorRoot: 3, minor: "Cm", minorRoot: 0 },
  { major: "Bb", majorRoot: 10, minor: "Gm", minorRoot: 7 },
  { major: "F", majorRoot: 5, minor: "Dm", minorRoot: 2 }
];
const libraryReference = createLibraryReferenceComposition();

app.innerHTML = `
  <main class="shell">
    <section class="topbar">
      <div>
        <p class="eyebrow">projChord</p>
        <h1>短旋律可控配和声与片段续写</h1>
      </div>
      <div class="actions">
        <button class="primary" id="playBtn" type="button">播放</button>
        <button id="stopBtn" type="button">停止</button>
        <button id="compareBtn" type="button">曲库对比</button>
        <button class="hidden" id="backBtn" type="button">返回主界面</button>
      </div>
    </section>

    <section class="workspace appHome">
      <aside class="panel">
        <h2>风格</h2>
        <div class="styleGrid" id="styleGrid"></div>
        <div class="controlReadout" id="controlReadout"></div>
      </aside>

      <section class="stage">
        <div class="timelineHeader">
          <div>
            <h2>生成结果</h2>
            <p id="summary"></p>
          </div>
          <div class="timelineActions">
            <button id="libraryBtn" type="button">载入曲库</button>
            <button id="regenBtn" type="button">重新生成</button>
          </div>
        </div>
        <div class="pianoRoll" id="pianoRoll" aria-label="piano roll"></div>
        <div class="chordRail" id="chordRail" aria-label="chord rail"></div>
        <section class="fifthsPanel" aria-label="circle of fifths">
          <div>
            <h2>五度圈</h2>
            <p id="fifthsReadout"></p>
            <div class="evalSnapshot" id="evalSnapshot" aria-label="evaluation snapshot"></div>
          </div>
          <svg class="fifthsSvg" id="fifthsSvg" viewBox="0 0 360 360" role="img" aria-label="circle of fifths chord path"></svg>
        </section>
      </section>
    </section>

    <section class="keyboardPanel appHome">
      <div class="soundPanel">
        <div class="soundCombos" id="soundCombos"></div>
        <div class="soundSelectors">
          <label>
            <span>旋律音色</span>
            <select id="melodyInstrumentSelect"></select>
          </label>
          <label>
            <span>和弦音色</span>
            <select id="harmonyInstrumentSelect"></select>
          </label>
        </div>
      </div>
      <div class="keyboardLabels">
        <span>左手和弦</span>
        <span>右手旋律</span>
      </div>
      <div class="keyboard" id="keyboard"></div>
    </section>

    <section class="comparisonPage hidden" id="comparisonPage">
      <div class="compareHero">
        <div>
          <p class="eyebrow">Library Comparison</p>
          <h2>当前生成 × 曲库人工参考</h2>
          <p>参考片段使用公共领域《小星星》主题 / Mozart K.265 主题风格的人工编配样本，用于结构化对比，不用于宣称超越原作。</p>
        </div>
        <div class="compareActions">
          <button class="primary" id="comparePlayBtn" type="button">同步播放对比</button>
        </div>
      </div>

      <div class="compareHeaderGrid">
        <section class="compareIdentity generated">
          <span>Generated</span>
          <strong id="generatedTitle"></strong>
          <small id="generatedMeta"></small>
        </section>
        <section class="compareIdentity reference">
          <span>Reference</span>
          <strong>公共领域人工编配参考</strong>
          <small>Ah! vous dirai-je, maman / Mozart K.265 theme style</small>
        </section>
      </div>

      <div class="vectorStage">
        <svg id="comparisonSvg" viewBox="0 0 1000 460" role="img" aria-label="generated and reference comparison"></svg>
      </div>

      <div class="metricGrid" id="metricGrid"></div>
      <div class="explainGrid" id="explainGrid"></div>
    </section>
  </main>
`;

const styleGrid = getElement<HTMLDivElement>("styleGrid");
const controlReadout = getElement<HTMLDivElement>("controlReadout");
const summary = getElement<HTMLParagraphElement>("summary");
const pianoRoll = getElement<HTMLDivElement>("pianoRoll");
const chordRail = getElement<HTMLDivElement>("chordRail");
const fifthsSvg = getElement<SVGElement>("fifthsSvg");
const fifthsReadout = getElement<HTMLParagraphElement>("fifthsReadout");
const evalSnapshot = getElement<HTMLDivElement>("evalSnapshot");
const keyboard = getElement<HTMLDivElement>("keyboard");
const homeSections = Array.from(document.querySelectorAll<HTMLElement>(".appHome"));
const comparisonPage = getElement<HTMLElement>("comparisonPage");
const comparisonSvg = getElement<SVGElement>("comparisonSvg");
const metricGrid = getElement<HTMLDivElement>("metricGrid");
const explainGrid = getElement<HTMLDivElement>("explainGrid");
const generatedTitle = getElement<HTMLElement>("generatedTitle");
const generatedMeta = getElement<HTMLElement>("generatedMeta");
const soundCombosElement = getElement<HTMLDivElement>("soundCombos");
const melodyInstrumentSelect = getElement<HTMLSelectElement>("melodyInstrumentSelect");
const harmonyInstrumentSelect = getElement<HTMLSelectElement>("harmonyInstrumentSelect");
const playBtn = getElement<HTMLButtonElement>("playBtn");
const stopBtn = getElement<HTMLButtonElement>("stopBtn");
const regenBtn = getElement<HTMLButtonElement>("regenBtn");
const libraryBtn = getElement<HTMLButtonElement>("libraryBtn");
const compareBtn = getElement<HTMLButtonElement>("compareBtn");
const backBtn = getElement<HTMLButtonElement>("backBtn");
const comparePlayBtn = getElement<HTMLButtonElement>("comparePlayBtn");

renderInstrumentControls();
renderStyleButtons();
renderKeyboard();
renderComposition();

playBtn.addEventListener("click", playComposition);
stopBtn.addEventListener("click", stopPlayback);
regenBtn.addEventListener("click", () => {
  composition = createDemoComposition(selectedStyle);
  compositionSourceLabel = "小星星演示";
  renderComposition();
});
libraryBtn.addEventListener("click", loadNextLibraryPhrase);
compareBtn.addEventListener("click", openComparisonPage);
backBtn.addEventListener("click", closeComparisonPage);
comparePlayBtn.addEventListener("click", playComparison);
window.addEventListener("keydown", handleComputerKeyDown);
window.addEventListener("keyup", handleComputerKeyUp);
melodyInstrumentSelect.addEventListener("change", () => {
  melodyInstrument = melodyInstrumentSelect.value as InstrumentId;
  selectedSoundCombo = "";
  renderSoundCombos();
  melodyInstrumentSelect.blur();
});
harmonyInstrumentSelect.addEventListener("change", () => {
  harmonyInstrument = harmonyInstrumentSelect.value as InstrumentId;
  selectedSoundCombo = "";
  renderSoundCombos();
  harmonyInstrumentSelect.blur();
});

function getElement<T extends Element>(id: string): T {
  const element = document.getElementById(id);

  if (!element) {
    throw new Error(`Missing #${id}`);
  }

  return element as unknown as T;
}

function renderStyleButtons() {
  styleGrid.innerHTML = "";

  for (const preset of STYLE_PRESETS) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = preset.id === selectedStyle ? "styleButton active" : "styleButton";
    button.innerHTML = `
      <strong>${preset.label}</strong>
      <span>${preset.description}</span>
    `;
    button.addEventListener("click", () => {
      selectedStyle = preset.id;
      composition = createDemoComposition(selectedStyle);
      compositionSourceLabel = "小星星演示";
      renderStyleButtons();
      renderComposition();
    });
    styleGrid.appendChild(button);
  }
}

function renderInstrumentControls() {
  melodyInstrumentSelect.innerHTML = renderInstrumentOptions(melodyInstrument);
  harmonyInstrumentSelect.innerHTML = renderInstrumentOptions(harmonyInstrument);
  renderSoundCombos();
}

function renderSoundCombos() {
  soundCombosElement.innerHTML = "";

  for (const combo of soundCombos) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = combo.id === selectedSoundCombo ? "soundCombo active" : "soundCombo";
    button.textContent = combo.label;
    button.addEventListener("click", () => {
      melodyInstrument = combo.melody;
      harmonyInstrument = combo.harmony;
      selectedSoundCombo = combo.id;
      renderInstrumentControls();
    });
    soundCombosElement.appendChild(button);
  }
}

function renderKeyboard() {
  keyboard.innerHTML = "";

  for (const midi of keyboardNotes) {
    const key = document.createElement("button");
    const noteName = midiToNoteName(midi);
    const isBlack = isBlackKey(midi);
    const whiteIndex = countWhiteKeysBefore(midi);
    const whiteKeyWidth = 100 / whiteKeyCount;
    const left = isBlack ? (whiteIndex - 0.32) * whiteKeyWidth : whiteIndex * whiteKeyWidth;

    key.type = "button";
    key.className = isBlack ? "key black" : "key white";
    key.dataset.midi = String(midi);
    key.dataset.hand = midi < 60 ? "left" : "right";
    key.style.left = `${left}%`;
    key.style.width = isBlack ? `${whiteKeyWidth * 0.62}%` : `${whiteKeyWidth}%`;
    key.innerHTML = `
      <span class="noteName">${noteName}</span>
      ${renderComputerKeyLabel(midi)}
    `;
    key.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      key.setPointerCapture(event.pointerId);
      startManualKey(midi, `pointer:${midi}`);
    });
    key.addEventListener("pointerup", (event) => {
      event.preventDefault();
      stopManualKey(midi, `pointer:${midi}`);
    });
    key.addEventListener("pointercancel", () => stopManualKey(midi, `pointer:${midi}`));
    key.addEventListener("pointerleave", () => stopManualKey(midi, `pointer:${midi}`));
    keyboard.appendChild(key);
  }
}

function renderComposition() {
  const preset = STYLE_PRESETS.find((item) => item.id === selectedStyle);
  if (!preset) {
    return;
  }

  summary.textContent = `${compositionSourceLabel} / ${composition.bars} 小节 / ${composition.tempo} BPM / ${composition.notes.length} 个音符 / ${composition.chords.length} 个和弦`;
  controlReadout.innerHTML = `
    <dl>
      <div><dt>和声密度</dt><dd>${preset.controls.harmonyDensity}</dd></div>
      <div><dt>节奏密度</dt><dd>${preset.controls.rhythmDensity}</dd></div>
      <div><dt>复杂度</dt><dd>${preset.controls.chordComplexity}</dd></div>
      <div><dt>伴奏型</dt><dd>${preset.controls.accompanimentPattern}</dd></div>
      <div><dt>张力</dt><dd>${preset.controls.tension}</dd></div>
    </dl>
  `;

  renderPianoRoll(composition);
  renderChordRail(composition);
  renderCircleOfFifths(composition, null);
  renderEvalSnapshot(composition);

  if (isComparisonOpen) {
    renderComparisonPage();
  }
}

function openComparisonPage() {
  isComparisonOpen = true;
  stopPlayback();
  renderComparisonPage();
  for (const section of homeSections) {
    section.classList.add("hidden");
  }
  comparisonPage.classList.remove("hidden");
  compareBtn.classList.add("hidden");
  backBtn.classList.remove("hidden");
}

function closeComparisonPage() {
  isComparisonOpen = false;
  stopPlayback();
  comparisonPage.classList.add("hidden");
  for (const section of homeSections) {
    section.classList.remove("hidden");
  }
  compareBtn.classList.remove("hidden");
  backBtn.classList.add("hidden");
}

function renderComparisonPage() {
  const styleLabel = STYLE_PRESETS.find((preset) => preset.id === selectedStyle)?.label ?? selectedStyle;
  generatedTitle.textContent = `${compositionSourceLabel}：${styleLabel}`;
  generatedMeta.textContent = `${composition.chords.length} 个和弦 / ${composition.notes.length} 个音符 / ${composition.tempo} BPM`;
  comparisonSvg.innerHTML = renderComparisonSvg(composition, libraryReference);
  metricGrid.innerHTML = renderMetricCards(composition, libraryReference);
  explainGrid.innerHTML = renderExplainGrid(composition, libraryReference);
}

function loadNextLibraryPhrase() {
  const phrase = NOTTINGHAM_PHRASES[libraryPhraseIndex % NOTTINGHAM_PHRASES.length];
  libraryPhraseIndex += 1;
  composition = compositionFromNottinghamPhrase(phrase, selectedStyle);
  compositionSourceLabel = `曲库乐句：${phrase.title}`;
  renderComposition();
}

function compositionFromNottinghamPhrase(phrase: NottinghamPhrase, styleId: StylePresetId): Composition {
  const chords = phrase.chords.map((chord) => createChord(
    chord.name,
    chord.root,
    chord.quality,
    chord.startBeat,
    chord.durationBeats
  ));
  const melody = phrase.notes.map((note) => ({
    ...note,
    velocity: Math.min(note.velocity, 0.82),
    track: "melody" as const
  }));

  return {
    id: phrase.id,
    styleId,
    tempo: phrase.meter === "2/2" ? 116 : 108,
    bars: phrase.bars,
    chords,
    notes: [...melody, ...renderLibraryAccompaniment(chords, styleId)]
  };
}

function renderLibraryAccompaniment(chords: ChordEvent[], styleId: StylePresetId) {
  const notes: NoteEvent[] = [];

  for (const chord of chords) {
    const tones = chordPitchClasses(chord).map((pitchClass) => 48 + pitchClass);
    const bass = tones[0] - 12;
    const chordDuration = Math.max(chord.durationBeats - 0.1, 0.25);

    if (styleId === "soft_sparse" || styleId === "loop_bgm") {
      notes.push(createNote(bass, chord.startBeat, Math.min(0.75, chordDuration), "harmony", 0.52));
      tones.forEach((pitch, index) => {
        const startBeat = chord.startBeat + 0.6 + index * 0.45;
        if (startBeat < chord.startBeat + chord.durationBeats) {
          notes.push(createNote(pitch, startBeat, 0.5, "harmony", 0.5));
        }
      });
      continue;
    }

    if (styleId === "groove") {
      notes.push(createNote(bass, chord.startBeat, 0.45, "harmony", 0.6));
      notes.push(createNote(bass, chord.startBeat + Math.min(1.5, chord.durationBeats * 0.55), 0.45, "harmony", 0.52));
      for (const pitch of tones.slice(1)) {
        notes.push(createNote(pitch, chord.startBeat + 0.5, Math.max(chordDuration - 0.5, 0.25), "harmony", 0.48));
      }
      continue;
    }

    notes.push(createNote(bass, chord.startBeat, Math.min(0.8, chordDuration), "harmony", 0.56));
    for (const pitch of tones) {
      notes.push(createNote(pitch, chord.startBeat + 0.35, Math.max(chordDuration - 0.35, 0.25), "harmony", 0.46));
    }
  }

  return notes;
}

function renderPianoRoll(nextComposition: Composition) {
  pianoRoll.innerHTML = "";
  const maxBeat = Math.max(
    nextComposition.bars * 4,
    ...nextComposition.notes.map((note) => note.startBeat + note.durationBeats),
    ...nextComposition.chords.map((chord) => chord.startBeat + chord.durationBeats)
  );
  const pitches = nextComposition.notes.map((note) => note.pitch);
  const minPitch = Math.max(0, Math.min(...pitches) - 2);
  const maxPitch = Math.min(127, Math.max(...pitches) + 2);
  const pitchRange = Math.max(maxPitch - minPitch, 1);

  for (const note of nextComposition.notes) {
    const block = document.createElement("div");
    const left = (note.startBeat / maxBeat) * 100;
    const width = (note.durationBeats / maxBeat) * 100;
    const top = 6 + (1 - (note.pitch - minPitch) / pitchRange) * 84;

    block.className = `noteBlock ${note.track}`;
    block.style.left = `${left}%`;
    block.style.width = `${Math.max(width, 1.5)}%`;
    block.style.top = `${top}%`;
    block.title = `${midiToNoteName(note.pitch)} ${note.track}`;
    pianoRoll.appendChild(block);
  }
}

function renderChordRail(nextComposition: Composition) {
  chordRail.innerHTML = "";
  const maxBeat = Math.max(
    nextComposition.bars * 4,
    ...nextComposition.chords.map((chord) => chord.startBeat + chord.durationBeats)
  );

  for (const chord of nextComposition.chords) {
    const block = document.createElement("div");
    const left = (chord.startBeat / maxBeat) * 100;
    const width = (chord.durationBeats / maxBeat) * 100;

    block.className = "chordBlock";
    block.dataset.name = chord.name;
    block.dataset.startBeat = String(chord.startBeat);
    block.style.left = `calc(${left}% + 2px)`;
    block.style.width = `calc(${width}% - 4px)`;
    block.textContent = chord.name;
    chordRail.appendChild(block);
  }
}

function renderCircleOfFifths(nextComposition: Composition, activeChord: ChordEvent | null) {
  fifthsSvg.innerHTML = renderCircleOfFifthsSvg(nextComposition, activeChord);
  fifthsReadout.textContent = activeChord
    ? `${activeChord.name} / ${fifthsLayerLabel(activeChord)} / ${describeChordMotion(nextComposition, activeChord)}`
    : `${nextComposition.chords.map((chord) => chord.name).join(" -> ")}`;
}

function renderCircleOfFifthsSvg(nextComposition: Composition, activeChord: ChordEvent | null) {
  const center = 180;
  const outerRadius = 134;
  const innerRadius = 86;
  const slotPoints = fifthsSlots.map((slot, index) => {
    const angle = -Math.PI / 2 + (index / fifthsSlots.length) * Math.PI * 2;
    return {
      slot,
      index,
      majorPoint: {
        x: center + Math.cos(angle) * outerRadius,
        y: center + Math.sin(angle) * outerRadius,
        slotIndex: index,
        layer: "major" as const
      },
      minorPoint: {
        x: center + Math.cos(angle) * innerRadius,
        y: center + Math.sin(angle) * innerRadius,
        slotIndex: index,
        layer: "minor" as const
      }
    };
  });
  const pathPoints = nextComposition.chords
    .map((chord) => getFifthsPointForChord(chord, slotPoints))
    .filter((point): point is FifthsPoint => Boolean(point));
  const pathData = renderFifthsPath(pathPoints);
  const activePoint = activeChord ? getFifthsPointForChord(activeChord, slotPoints) : null;

  const nodes = slotPoints.map(({ slot, index, majorPoint, minorPoint }) => {
    const majorUsed = nextComposition.chords.some((chord) => !isInnerFifthsChord(chord) && chord.root === slot.majorRoot);
    const minorUsed = nextComposition.chords.some((chord) => isInnerFifthsChord(chord) && chord.root === slot.minorRoot);
    const majorActive = Boolean(activeChord && !isInnerFifthsChord(activeChord) && activeChord.root === slot.majorRoot);
    const minorActive = Boolean(activeChord && isInnerFifthsChord(activeChord) && activeChord.root === slot.minorRoot);
    const majorClassName = ["fifthsNode", "major", majorUsed ? "used" : "", majorActive ? "active" : ""].filter(Boolean).join(" ");
    const minorClassName = ["fifthsNode", "minor", minorUsed ? "used" : "", minorActive ? "active" : ""].filter(Boolean).join(" ");

    return `
      <g class="${majorClassName}" style="--node-index: ${index}">
        <circle cx="${majorPoint.x.toFixed(1)}" cy="${majorPoint.y.toFixed(1)}" r="${majorActive ? 20 : 17}" />
        <text x="${majorPoint.x.toFixed(1)}" y="${(majorPoint.y + 5).toFixed(1)}" text-anchor="middle">${slot.major}</text>
      </g>
      <g class="${minorClassName}" style="--node-index: ${index}">
        <circle cx="${minorPoint.x.toFixed(1)}" cy="${minorPoint.y.toFixed(1)}" r="${minorActive ? 16 : 13}" />
        <text x="${minorPoint.x.toFixed(1)}" y="${(minorPoint.y + 4).toFixed(1)}" text-anchor="middle">${slot.minor}</text>
      </g>
    `;
  }).join("");

  return `
    <defs>
      <radialGradient id="fifthsCenterGlow" cx="50%" cy="50%" r="55%">
        <stop offset="0%" stop-color="#f7faf9" />
        <stop offset="72%" stop-color="#edf7f1" />
        <stop offset="100%" stop-color="#ffffff" />
      </radialGradient>
      <linearGradient id="fifthsPathGradient" x1="38" y1="50" x2="320" y2="310" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#1d4ed8" />
        <stop offset="46%" stop-color="#0f766e" />
        <stop offset="100%" stop-color="#f59e0b" />
      </linearGradient>
      <filter id="fifthsSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#0f172a" flood-opacity="0.13" />
      </filter>
    </defs>
    <circle class="fifthsOuter" cx="${center}" cy="${center}" r="${outerRadius + 30}" />
    <circle class="fifthsMajorRing" cx="${center}" cy="${center}" r="${outerRadius}" />
    <circle class="fifthsMinorRing" cx="${center}" cy="${center}" r="${innerRadius}" />
    ${pathData ? `<path class="fifthsPath" d="${pathData}" />` : ""}
    ${pathPoints.map((point, index) => `<circle class="fifthsPathDot ${point.layer}" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="${index === pathPoints.length - 1 ? 5 : 3}" />`).join("")}
    ${activePoint ? `<circle class="fifthsActiveHalo ${activePoint.layer}" cx="${activePoint.x.toFixed(1)}" cy="${activePoint.y.toFixed(1)}" r="${activePoint.layer === "major" ? 27 : 22}" />` : ""}
    ${nodes}
    <text class="fifthsRingLabel major" x="${center}" y="${center - 116}" text-anchor="middle">Major</text>
    <text class="fifthsRingLabel minor" x="${center}" y="${center - 66}" text-anchor="middle">minor</text>
    <text class="fifthsCenterLabel" x="${center}" y="${center - 4}" text-anchor="middle">${activeChord ? fifthsLayerLabel(activeChord) : "Chord Map"}</text>
    <text class="fifthsCenterChord" x="${center}" y="${center + 24}" text-anchor="middle">${activeChord ? escapeText(activeChord.name) : "Ready"}</text>
  `;
}

function describeChordMotion(nextComposition: Composition, activeChord: ChordEvent) {
  const activeIndex = nextComposition.chords.findIndex((chord) => chord === activeChord);
  if (activeIndex <= 0) {
    return "起点和弦";
  }

  const previousChord = nextComposition.chords[activeIndex - 1];
  const previousIndex = fifthsSlotIndexForChord(previousChord);
  const currentIndex = fifthsSlotIndexForChord(activeChord);

  if (previousIndex < 0 || currentIndex < 0) {
    return `${previousChord.name} -> ${activeChord.name}`;
  }

  const previousLayer = isInnerFifthsChord(previousChord) ? "内圈" : "外圈";
  const currentLayer = isInnerFifthsChord(activeChord) ? "内圈" : "外圈";
  const layerMotion = previousLayer === currentLayer ? previousLayer : `${previousLayer}到${currentLayer}`;
  const clockwise = (currentIndex - previousIndex + fifthsSlots.length) % fifthsSlots.length;
  const counterClockwise = (previousIndex - currentIndex + fifthsSlots.length) % fifthsSlots.length;

  if (clockwise === 0) return `${previousChord.name} -> ${activeChord.name} / ${layerMotion}同位`;
  if (clockwise === 1) return `${previousChord.name} -> ${activeChord.name} / ${layerMotion}顺五度`;
  if (counterClockwise === 1) return `${previousChord.name} -> ${activeChord.name} / ${layerMotion}逆五度`;
  return `${previousChord.name} -> ${activeChord.name} / ${layerMotion}跨 ${Math.min(clockwise, counterClockwise)} 格`;
}

function getFifthsPointForChord(
  chord: ChordEvent,
  slotPoints: Array<{
    slot: FifthsSlot;
    majorPoint: FifthsPoint;
    minorPoint: FifthsPoint;
  }>
) {
  const isInner = isInnerFifthsChord(chord);
  const item = slotPoints.find(({ slot }) => isInner ? slot.minorRoot === chord.root : slot.majorRoot === chord.root);
  return item ? (isInner ? item.minorPoint : item.majorPoint) : null;
}

function renderFifthsPath(points: FifthsPoint[]) {
  if (points.length === 0) {
    return "";
  }

  if (points.length === 1) {
    return `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  }

  const segments = [`M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`];
  for (let index = 0; index < points.length - 1; index += 1) {
    const previous = points[Math.max(index - 1, 0)];
    const current = points[index];
    const next = points[index + 1];
    const afterNext = points[Math.min(index + 2, points.length - 1)];
    const controlOne = {
      x: current.x + (next.x - previous.x) / 6,
      y: current.y + (next.y - previous.y) / 6
    };
    const controlTwo = {
      x: next.x - (afterNext.x - current.x) / 6,
      y: next.y - (afterNext.y - current.y) / 6
    };
    segments.push(
      `C ${controlOne.x.toFixed(1)} ${controlOne.y.toFixed(1)}, ${controlTwo.x.toFixed(1)} ${controlTwo.y.toFixed(1)}, ${next.x.toFixed(1)} ${next.y.toFixed(1)}`
    );
  }

  return segments.join(" ");
}

function fifthsSlotIndexForChord(chord: ChordEvent) {
  const isInner = isInnerFifthsChord(chord);
  return fifthsSlots.findIndex((slot) => isInner ? slot.minorRoot === chord.root : slot.majorRoot === chord.root);
}

function isInnerFifthsChord(chord: ChordEvent) {
  return chord.quality === "min" || chord.quality === "min7" || chord.quality === "dim";
}

function fifthsLayerLabel(chord: ChordEvent) {
  return isInnerFifthsChord(chord) ? "内圈小调" : "外圈大调";
}

function playComparison() {
  stopPlayback();
  ensureAudio();
  comparisonPage.classList.remove("isPlaying");
  window.setTimeout(() => comparisonPage.classList.add("isPlaying"), 0);

  for (const note of composition.notes) {
    const startMs = beatsToMs(note.startBeat, composition.tempo);
    const durationMs = beatsToMs(note.durationBeats, composition.tempo);

    playbackTimers.push(window.setTimeout(() => {
      activePlaybackVoices.push(playNote(note, composition.tempo));
      flashKey(note.pitch, durationMs, note.track);
    }, startMs));
  }

  scheduleChordVisualization(composition);

  for (const note of libraryReference.notes) {
    const startMs = beatsToMs(note.startBeat, libraryReference.tempo);

    playbackTimers.push(window.setTimeout(() => {
      const referenceInstrument = note.track === "harmony" ? "pluck" : "music_box";
      activePlaybackVoices.push(playSynthNote(
        { ...note, velocity: note.velocity * 0.72 },
        getInstrumentById(referenceInstrument),
        libraryReference.tempo
      ));
    }, startMs));
  }
}

function playComposition() {
  stopPlayback();
  ensureAudio();

  for (const note of composition.notes) {
    const startMs = beatsToMs(note.startBeat, composition.tempo);
    const durationMs = beatsToMs(note.durationBeats, composition.tempo);

    playbackTimers.push(window.setTimeout(() => {
      activePlaybackVoices.push(playNote(note, composition.tempo));
      flashKey(note.pitch, durationMs, note.track);
    }, startMs));
  }

  scheduleChordVisualization(composition);
}

function handleComputerKeyDown(event: KeyboardEvent) {
  if (shouldIgnoreKeyboardEvent(event)) {
    return;
  }

  const key = normalizeComputerKey(event);
  const midi = computerKeyToMidi.get(key);

  if (!midi || pressedComputerKeys.has(key)) {
    return;
  }

  event.preventDefault();
  pressedComputerKeys.add(key);
  startManualKey(midi, `computer:${key}`);
}

function handleComputerKeyUp(event: KeyboardEvent) {
  if (shouldIgnoreKeyboardEvent(event)) {
    return;
  }

  const key = normalizeComputerKey(event);
  const midi = computerKeyToMidi.get(key);

  if (!midi) {
    return;
  }

  event.preventDefault();
  pressedComputerKeys.delete(key);
  stopManualKey(midi, `computer:${key}`);
}

function startManualKey(midi: number, voiceId: string) {
  if (activeManualVoices.has(voiceId)) {
    return;
  }

  const voice = startSynthVoice(
    { pitch: midi, startBeat: 0, durationBeats: 999, velocity: 0.78, track: "melody" },
    getInstrumentForTrack("melody")
  );
  activeManualVoices.set(voiceId, voice);
  setKeyActive(midi, "melody", true);
}

function stopManualKey(midi: number, voiceId: string) {
  const voice = activeManualVoices.get(voiceId);
  if (!voice) {
    return;
  }

  voice.release();
  activeManualVoices.delete(voiceId);
  setKeyActive(midi, "melody", false);
}

function stopPlayback() {
  for (const timer of playbackTimers) {
    window.clearTimeout(timer);
  }

  for (const voice of activePlaybackVoices) {
    voice.release();
  }

  comparisonPage.classList.remove("isPlaying");
  playbackTimers = [];
  activePlaybackVoices = [];
  renderCircleOfFifths(composition, null);
  for (const key of keyboard.querySelectorAll(".key.active")) {
    key.classList.remove("active", "melodyActive", "harmonyActive");
  }
}

function scheduleChordVisualization(nextComposition: Composition) {
  for (const chord of nextComposition.chords) {
    const startMs = beatsToMs(chord.startBeat, nextComposition.tempo);
    playbackTimers.push(window.setTimeout(() => {
      renderCircleOfFifths(nextComposition, chord);
      setActiveChordBlock(chord);
    }, startMs));
  }
}

function setActiveChordBlock(activeChord: ChordEvent) {
  for (const block of chordRail.querySelectorAll<HTMLDivElement>(".chordBlock")) {
    const isActive = block.dataset.startBeat === String(activeChord.startBeat) && block.dataset.name === activeChord.name;
    block.classList.toggle("active", isActive);
  }
}

function ensureAudio() {
  if (!audioContext || audioContext.state === "closed") {
    audioContext = new AudioContext();
  }

  if (audioContext.state === "suspended") {
    void audioContext.resume();
  }

  return audioContext;
}

function playNote(note: NoteEvent, tempo = composition.tempo) {
  return playSynthNote(note, getInstrumentForTrack(note.track), tempo);
}

function playSynthNote(note: NoteEvent, instrument: InstrumentPreset, tempo = composition.tempo) {
  const durationSeconds = Math.max(beatsToMs(note.durationBeats, tempo) / 1000, 0.08);
  return startSynthVoice(note, instrument, durationSeconds);
}

function startSynthVoice(note: NoteEvent, instrument: InstrumentPreset, durationSeconds?: number): ActiveVoice {
  const context = ensureAudio();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  const now = context.currentTime;
  const frequency = midiToFrequency(note.pitch);
  const peakGain = Math.min(note.velocity, 1) * instrument.volume;
  const decayTime = now + instrument.attack + instrument.decay;
  const oscillators: OscillatorNode[] = [];
  let isReleased = false;

  filter.type = "lowpass";
  filter.frequency.value = instrument.filterFrequency;
  filter.Q.value = instrument.filterQ;
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(peakGain, now + instrument.attack);
  gain.gain.linearRampToValueAtTime(peakGain * instrument.sustain, decayTime);
  filter.connect(gain);
  gain.connect(context.destination);

  for (const oscillatorPreset of instrument.oscillators) {
    const oscillator = context.createOscillator();
    const oscillatorGain = context.createGain();
    oscillator.type = oscillatorPreset.type;
    oscillator.frequency.value = frequency * oscillatorPreset.harmonic;
    oscillator.detune.value = oscillatorPreset.detune;
    oscillatorGain.gain.value = oscillatorPreset.gain;
    oscillator.connect(oscillatorGain);
    oscillatorGain.connect(filter);
    oscillator.start(now);
    oscillators.push(oscillator);
  }

  const releaseVoice = () => {
    if (isReleased) {
      return;
    }

    isReleased = true;
    const releaseNow = context.currentTime;
    gain.gain.cancelScheduledValues(releaseNow);
    gain.gain.setTargetAtTime(0.001, releaseNow, Math.max(instrument.release / 3, 0.03));

    for (const oscillator of oscillators) {
      oscillator.stop(releaseNow + instrument.release + 0.08);
    }
  };

  if (durationSeconds !== undefined) {
    const releaseStart = now + Math.max(durationSeconds - instrument.release * 0.35, instrument.attack + 0.02);
    window.setTimeout(releaseVoice, Math.max((releaseStart - now) * 1000, 30));
  }

  return { release: releaseVoice };
}

function flashKey(midi: number, durationMs: number, track: NoteEvent["track"]) {
  setKeyActive(midi, track, true);
  window.setTimeout(() => {
    setKeyActive(midi, track, false);
  }, Math.max(durationMs, 120));
}

function setKeyActive(midi: number, track: NoteEvent["track"], isActive: boolean) {
  const key = keyboard.querySelector<HTMLButtonElement>(`[data-midi="${midi}"]`);

  if (!key) {
    return;
  }

  if (!isActive) {
    key.classList.remove("active", "harmonyActive", "melodyActive");
    return;
  }

  key.classList.add("active", track === "harmony" ? "harmonyActive" : "melodyActive");
}

function beatsToMs(beats: number, tempo: number) {
  return (beats * 60_000) / tempo;
}

function midiToFrequency(midi: number) {
  return 440 * 2 ** ((midi - 69) / 12);
}

function isBlackKey(midi: number) {
  return [1, 3, 6, 8, 10].includes(midi % 12);
}

function countWhiteKeysBefore(midi: number) {
  let count = 0;

  for (let note = KEYBOARD_START_MIDI; note < midi; note += 1) {
    if (!isBlackKey(note)) {
      count += 1;
    }
  }

  return count;
}

function normalizeComputerKey(event: KeyboardEvent) {
  if (event.key === "；") {
    return ";";
  }

  return event.key.toLowerCase();
}

function renderComputerKeyLabel(midi: number) {
  const computerKey = midiToComputerKey.get(midi);

  if (!computerKey) {
    return "";
  }

  return `<strong class="computerKey">${computerKey}</strong>`;
}

function createLibraryReferenceComposition(): Composition {
  const chords: ChordEvent[] = [
    createChord("C", 0, "maj", 0, 2),
    createChord("G", 7, "maj", 2, 2),
    createChord("Am", 9, "min", 4, 2),
    createChord("G", 7, "maj", 6, 2),
    createChord("F", 5, "maj", 8, 2),
    createChord("C", 0, "maj", 10, 2),
    createChord("G", 7, "maj", 12, 2),
    createChord("C", 0, "maj", 14, 2)
  ];
  const melody: NoteEvent[] = [
    createNote(72, 0, 1, "melody", 0.72),
    createNote(72, 1, 1, "melody", 0.72),
    createNote(79, 2, 1, "melody", 0.72),
    createNote(79, 3, 1, "melody", 0.72),
    createNote(81, 4, 1, "melody", 0.72),
    createNote(81, 5, 1, "melody", 0.72),
    createNote(79, 6, 2, "melody", 0.72),
    createNote(77, 8, 1, "continuation", 0.72),
    createNote(77, 9, 1, "continuation", 0.72),
    createNote(76, 10, 1, "continuation", 0.72),
    createNote(76, 11, 1, "continuation", 0.72),
    createNote(74, 12, 1, "continuation", 0.72),
    createNote(74, 13, 1, "continuation", 0.72),
    createNote(72, 14, 2, "continuation", 0.72)
  ];

  return {
    id: "reference-public-domain-twinkle",
    styleId: "stable_pop",
    tempo: 104,
    bars: 4,
    chords,
    notes: [...melody, ...renderReferenceAccompaniment(chords)]
  };
}

function renderReferenceAccompaniment(chords: ChordEvent[]) {
  const notes: NoteEvent[] = [];

  for (const chord of chords) {
    const tones = chordPitchClasses(chord).map((pitchClass) => 48 + pitchClass);
    const pattern = [tones[0] - 12, tones[2] ?? tones[0], tones[1] ?? tones[0], tones[2] ?? tones[0]];

    for (let index = 0; index < 4; index += 1) {
      notes.push(createNote(pattern[index], chord.startBeat + index * 0.5, 0.45, "harmony", 0.55));
    }
  }

  return notes;
}

function renderComparisonSvg(generated: Composition, reference: Composition) {
  const maxBeat = Math.max(
    generated.bars * 4,
    reference.bars * 4,
    ...generated.notes.map((note) => note.startBeat + note.durationBeats),
    ...reference.notes.map((note) => note.startBeat + note.durationBeats)
  );
  const allPitches = [...generated.notes, ...reference.notes].map((note) => note.pitch);
  const minPitch = Math.max(0, Math.min(...allPitches) - 3);
  const maxPitch = Math.min(127, Math.max(...allPitches) + 3);

  return `
    <defs>
      <linearGradient id="generatedRail" x1="0" x2="1">
        <stop offset="0%" stop-color="#eef5ff" />
        <stop offset="100%" stop-color="#f8fafc" />
      </linearGradient>
      <linearGradient id="referenceRail" x1="0" x2="1">
        <stop offset="0%" stop-color="#fff7ed" />
        <stop offset="100%" stop-color="#f8fafc" />
      </linearGradient>
      <linearGradient id="flowGradient" x1="0" x2="1">
        <stop offset="0%" stop-color="#2563eb" />
        <stop offset="50%" stop-color="#0f766e" />
        <stop offset="100%" stop-color="#d97706" />
      </linearGradient>
    </defs>
    <rect class="svgBackplate" x="0" y="0" width="1000" height="460" rx="18" />
    <path class="flowPath" d="M130 218 C290 152 420 284 500 218 S720 152 870 218" />
    ${renderSvgLane(generated, "Generated", 28, maxBeat, minPitch, maxPitch, "generated")}
    ${renderSvgLane(reference, "Reference", 246, maxBeat, minPitch, maxPitch, "reference")}
    <line class="compareScanline" x1="118" x2="118" y1="24" y2="430" />
  `;
}

function renderSvgLane(
  piece: Composition,
  label: string,
  laneY: number,
  maxBeat: number,
  minPitch: number,
  maxPitch: number,
  variant: "generated" | "reference"
) {
  const laneHeight = 182;
  const rollX = 118;
  const rollWidth = 760;
  const rollTop = laneY + 34;
  const rollHeight = 104;
  const pitchRange = Math.max(maxPitch - minPitch, 1);
  const notes = piece.notes
    .map((note) => {
      const x = rollX + (note.startBeat / maxBeat) * rollWidth;
      const width = Math.max((note.durationBeats / maxBeat) * rollWidth, 8);
      const y = rollTop + (1 - (note.pitch - minPitch) / pitchRange) * rollHeight;

      return `
        <rect class="svgNote ${variant} ${note.track}" x="${x.toFixed(2)}" y="${y.toFixed(2)}" width="${width.toFixed(2)}" height="10" rx="4">
          <title>${label}: ${midiToNoteName(note.pitch)} ${note.track}</title>
        </rect>
      `;
    })
    .join("");
  const chords = piece.chords
    .map((chord) => {
      const x = rollX + (chord.startBeat / maxBeat) * rollWidth;
      const width = Math.max((chord.durationBeats / maxBeat) * rollWidth - 4, 12);

      return `
        <g>
          <rect class="svgChord ${variant}" x="${x.toFixed(2)}" y="${laneY + 146}" width="${width.toFixed(2)}" height="28" rx="8" />
          <text class="svgChordText" x="${(x + width / 2).toFixed(2)}" y="${laneY + 165}" text-anchor="middle">${escapeText(chord.name)}</text>
        </g>
      `;
    })
    .join("");
  const gridLines = Array.from({ length: 17 }, (_, index) => {
    const x = rollX + (index / 16) * rollWidth;
    return `<line class="svgGridLine" x1="${x.toFixed(2)}" x2="${x.toFixed(2)}" y1="${rollTop}" y2="${laneY + 174}" />`;
  }).join("");

  return `
    <g>
      <rect class="svgLane ${variant}" x="24" y="${laneY}" width="952" height="${laneHeight}" rx="14" />
      <text class="svgLaneLabel" x="48" y="${laneY + 30}">${label}</text>
      <text class="svgLaneSub" x="48" y="${laneY + 54}">${piece.chords.length} chords / ${piece.notes.length} notes</text>
      ${gridLines}
      ${notes}
      ${chords}
    </g>
  `;
}

function renderMetricCards(generated: Composition, reference: Composition) {
  const generatedMetrics = getPieceMetrics(generated);
  const referenceMetrics = getPieceMetrics(reference);
  const contour = contourSimilarity(generated, reference);
  const metrics = [
    {
      label: "和弦音命中率",
      generated: generatedMetrics.compatibility,
      reference: referenceMetrics.compatibility,
      unit: "%"
    },
    {
      label: "换和弦密度",
      generated: generatedMetrics.chordDensity,
      reference: referenceMetrics.chordDensity,
      unit: "/bar"
    },
    {
      label: "七和弦比例",
      generated: generatedMetrics.seventhRatio,
      reference: referenceMetrics.seventhRatio,
      unit: "%"
    },
    {
      label: "旋律轮廓相似度",
      generated: contour,
      reference: 100,
      unit: "%"
    }
  ];

  return metrics
    .map((metric) => {
      const max = metric.unit === "/bar" ? 3 : 100;
      const generatedWidth = Math.min((metric.generated / max) * 100, 100);
      const referenceWidth = Math.min((metric.reference / max) * 100, 100);

      return `
        <section class="metricCard">
          <span>${metric.label}</span>
          <div class="metricValues">
            <strong>${formatMetric(metric.generated)}${metric.unit}</strong>
            <small>参考 ${formatMetric(metric.reference)}${metric.unit}</small>
          </div>
          <div class="metricBars">
            <i class="generatedBar" style="width: ${generatedWidth}%"></i>
            <i class="referenceBar" style="width: ${referenceWidth}%"></i>
          </div>
        </section>
      `;
    })
    .join("");
}

function renderExplainGrid(generated: Composition, reference: Composition) {
  return [0, 4, 8, 12]
    .map((beat, index) => {
      const generatedChords = chordsInWindow(generated, beat, 4).map((chord) => chord.name).join(" -> ");
      const referenceChords = chordsInWindow(reference, beat, 4).map((chord) => chord.name).join(" -> ");
      const generatedScore = compatibilityInWindow(generated, beat, 4);
      const referenceScore = compatibilityInWindow(reference, beat, 4);
      const melodyNotes = melodyNotesInWindow(generated, beat, 4)
        .map((note) => midiToNoteName(note.pitch).replace(/\d/g, ""))
        .join(" ");

      return `
        <section class="explainCard">
          <span>第 ${index + 1} 小节组</span>
          <strong>${melodyNotes}</strong>
          <p>生成：${generatedChords || "无"}，兼容 ${formatMetric(generatedScore)}%</p>
          <p>参考：${referenceChords || "无"}，兼容 ${formatMetric(referenceScore)}%</p>
        </section>
      `;
    })
    .join("");
}

function renderEvalSnapshot(piece: Composition) {
  const metrics = getPieceMetrics(piece);
  const evalItems = [
    { label: "和弦音", value: `${formatMetric(metrics.compatibility)}%`, tone: "good" },
    { label: "七和弦", value: `${formatMetric(metrics.seventhRatio)}%`, tone: "color" },
    { label: "密度", value: `${formatMetric(metrics.chordDensity)}/bar`, tone: "neutral" },
    { label: "错位", value: `${formatMetric(metrics.offbeatHarmonyRatio)}%`, tone: "motion" }
  ];

  evalSnapshot.innerHTML = `
    <div class="evalSnapshotHeader">
      <span>ProjChord-Eval</span>
      <strong>${piece.bars} bars</strong>
    </div>
    <div class="evalPills">
      ${evalItems.map((item) => `
        <span class="evalPill ${item.tone}">
          <small>${item.label}</small>
          <b>${item.value}</b>
        </span>
      `).join("")}
    </div>
  `;
}

function getPieceMetrics(piece: Composition) {
  const maxBeat = compositionMaxBeat(piece);
  const barCount = Math.max(maxBeat / 4, 1);
  const compatibility = compatibilityInWindow(piece, 0, maxBeat);
  const chordDensity = piece.chords.length / barCount;
  const seventhRatio = piece.chords.length === 0
    ? 0
    : (piece.chords.filter((chord) => chord.quality.includes("7")).length / piece.chords.length) * 100;
  const offbeatHarmonyRatio = getOffbeatHarmonyRatio(piece);

  return {
    compatibility,
    chordDensity,
    seventhRatio,
    offbeatHarmonyRatio
  };
}

function compositionMaxBeat(piece: Composition) {
  return Math.max(
    piece.bars * 4,
    ...piece.notes.map((note) => note.startBeat + note.durationBeats),
    ...piece.chords.map((chord) => chord.startBeat + chord.durationBeats)
  );
}

function getOffbeatHarmonyRatio(piece: Composition) {
  const harmonyNotes = piece.notes.filter((note) => note.track === "harmony");
  if (harmonyNotes.length === 0) {
    return 0;
  }

  const offbeatNotes = harmonyNotes.filter((note) => Math.abs(note.startBeat - Math.round(note.startBeat)) > 0.08);
  return (offbeatNotes.length / harmonyNotes.length) * 100;
}

function compatibilityInWindow(piece: Composition, startBeat: number, durationBeats: number) {
  const notes = melodyNotesInWindow(piece, startBeat, durationBeats);
  if (notes.length === 0) {
    return 0;
  }

  const hits = notes.filter((note) => {
    const chord = activeChordAt(piece, note.startBeat);
    return chord ? chordPitchClasses(chord).includes(note.pitch % 12) : false;
  }).length;

  return (hits / notes.length) * 100;
}

function melodyNotesInWindow(piece: Composition, startBeat: number, durationBeats: number) {
  return piece.notes.filter((note) => {
    const isMelodic = note.track === "melody" || note.track === "continuation";
    return isMelodic && note.startBeat >= startBeat && note.startBeat < startBeat + durationBeats;
  });
}

function chordsInWindow(piece: Composition, startBeat: number, durationBeats: number) {
  return piece.chords.filter((chord) => chord.startBeat >= startBeat && chord.startBeat < startBeat + durationBeats);
}

function activeChordAt(piece: Composition, beat: number) {
  return piece.chords.find((chord) => beat >= chord.startBeat && beat < chord.startBeat + chord.durationBeats);
}

function contourSimilarity(generated: Composition, reference: Composition) {
  const generatedContour = pitchContour(generated);
  const referenceContour = pitchContour(reference);
  const length = Math.min(generatedContour.length, referenceContour.length);

  if (length === 0) {
    return 0;
  }

  const matches = generatedContour.slice(0, length).filter((direction, index) => direction === referenceContour[index]).length;
  return (matches / length) * 100;
}

function pitchContour(piece: Composition) {
  const pitches = piece.notes
    .filter((note) => note.track === "melody" || note.track === "continuation")
    .sort((a, b) => a.startBeat - b.startBeat)
    .map((note) => note.pitch);

  return pitches.slice(1).map((pitch, index) => Math.sign(pitch - pitches[index]));
}

function chordPitchClasses(chord: ChordEvent) {
  const intervals: Record<ChordEvent["quality"], number[]> = {
    maj: [0, 4, 7],
    min: [0, 3, 7],
    dim: [0, 3, 6],
    dom7: [0, 4, 7, 10],
    maj7: [0, 4, 7, 11],
    min7: [0, 3, 7, 10]
  };

  return intervals[chord.quality].map((interval) => (chord.root + interval) % 12);
}

function createChord(
  name: string,
  root: number,
  quality: ChordEvent["quality"],
  startBeat: number,
  durationBeats: number
): ChordEvent {
  return {
    name,
    root,
    quality,
    startBeat,
    durationBeats
  };
}

function createNote(
  pitch: number,
  startBeat: number,
  durationBeats: number,
  track: NoteEvent["track"],
  velocity: number
): NoteEvent {
  return {
    pitch,
    startBeat,
    durationBeats,
    track,
    velocity
  };
}

function formatMetric(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function escapeText(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return entities[char];
  });
}

function renderInstrumentOptions(selectedInstrument: InstrumentId) {
  return instruments
    .map((instrument) => {
      const selected = instrument.id === selectedInstrument ? " selected" : "";
      return `<option value="${instrument.id}"${selected}>${instrument.label}</option>`;
    })
    .join("");
}

function getInstrumentForTrack(track: NoteEvent["track"]) {
  const instrumentId = track === "harmony" ? harmonyInstrument : melodyInstrument;
  return getInstrumentById(instrumentId);
}

function getInstrumentById(instrumentId: InstrumentId) {
  return instruments.find((instrument) => instrument.id === instrumentId) ?? instruments[0];
}

function shouldIgnoreKeyboardEvent(event: KeyboardEvent) {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return ["INPUT", "SELECT", "TEXTAREA"].includes(target.tagName) || target.isContentEditable;
}
