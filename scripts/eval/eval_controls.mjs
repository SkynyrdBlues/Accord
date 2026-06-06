#!/usr/bin/env node
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, "../..");
const CORE_DIST = path.join(ROOT_DIR, "packages/core/dist/index.js");
const REPORT_DIR = path.join(ROOT_DIR, "corpus-lab/reports");
const JSON_OUT = path.join(REPORT_DIR, "projchord-control-eval.json");
const MD_OUT = path.join(REPORT_DIR, "projchord-control-eval.md");

const STYLE_ORDER = ["stable_pop", "soft_sparse", "tension", "groove", "complex", "loop_bgm"];

function features(piece) {
  const melodic = piece.notes.filter((note) => note.track === "melody" || note.track === "continuation");
  const harmony = piece.notes.filter((note) => note.track === "harmony");
  const pitches = melodic.map((note) => note.pitch);
  const durations = melodic.map((note) => note.durationBeats);
  const offbeatHarmony = harmony.filter((note) => Math.abs(note.startBeat - Math.round(note.startBeat)) > 0.001);

  return {
    notesPerBar: round(melodic.length / piece.bars),
    harmonyNotesPerBar: round(harmony.length / piece.bars),
    chordsPerBar: round(piece.chords.length / piece.bars),
    seventhRatio: round(piece.chords.filter((chord) => chord.quality.includes("7")).length / Math.max(piece.chords.length, 1)),
    avgMelodyDuration: round(mean(durations)),
    pitchRange: round(pitches.length ? Math.max(...pitches) - Math.min(...pitches) : 0),
    offbeatHarmonyRatio: round(offbeatHarmony.length / Math.max(harmony.length, 1)),
  };
}

function evaluateControlClaims(rows) {
  const byId = Object.fromEntries(rows.map((row) => [row.styleId, row]));
  const claims = [
    {
      name: "complex_has_highest_chord_density",
      pass: byId.complex.features.chordsPerBar > byId.stable_pop.features.chordsPerBar,
      observed: `${byId.complex.features.chordsPerBar} > ${byId.stable_pop.features.chordsPerBar}`,
    },
    {
      name: "tension_uses_more_sevenths_than_stable",
      pass: byId.tension.features.seventhRatio > byId.stable_pop.features.seventhRatio,
      observed: `${byId.tension.features.seventhRatio} > ${byId.stable_pop.features.seventhRatio}`,
    },
    {
      name: "soft_sparse_has_longer_melody_notes_than_groove",
      pass: byId.soft_sparse.features.avgMelodyDuration >= byId.groove.features.avgMelodyDuration,
      observed: `${byId.soft_sparse.features.avgMelodyDuration} >= ${byId.groove.features.avgMelodyDuration}`,
    },
    {
      name: "groove_has_more_offbeat_harmony_than_stable",
      pass: byId.groove.features.offbeatHarmonyRatio > byId.stable_pop.features.offbeatHarmonyRatio,
      observed: `${byId.groove.features.offbeatHarmonyRatio} > ${byId.stable_pop.features.offbeatHarmonyRatio}`,
    },
    {
      name: "loop_bgm_is_not_more_complex_than_complex",
      pass: byId.loop_bgm.features.chordsPerBar < byId.complex.features.chordsPerBar,
      observed: `${byId.loop_bgm.features.chordsPerBar} < ${byId.complex.features.chordsPerBar}`,
    },
  ];

  return {
    claims,
    passRate: round(claims.filter((claim) => claim.pass).length / claims.length),
  };
}

function renderMarkdown(report) {
  const featureRows = report.rows
    .map((row) => `| ${row.styleId} | ${row.label} | ${row.features.notesPerBar} | ${row.features.harmonyNotesPerBar} | ${row.features.chordsPerBar} | ${row.features.seventhRatio} | ${row.features.avgMelodyDuration} | ${row.features.offbeatHarmonyRatio} |`)
    .join("\n");
  const claimRows = report.controlClaims.claims
    .map((claim) => `| ${claim.name} | ${claim.pass ? "pass" : "fail"} | ${claim.observed} |`)
    .join("\n");

  return `# ProjChord Control Validity Eval

生成时间：${report.generatedAt}

## Style Feature Table

| styleId | label | notes/bar | harmony notes/bar | chords/bar | seventh ratio | avg melody duration | offbeat harmony ratio |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
${featureRows}

## Control Claims

| claim | result | observed |
| --- | --- | --- |
${claimRows}

## Pass Rate

| metric | value |
| --- | ---: |
| control claim pass rate | ${report.controlClaims.passRate} |

## Interpretation

这个报告只检查当前 demo 生成器的控制信号是否真的改变了可测属性。等 POP909 接入后，同一套 control validity 会改成对模型输出做批量评估。
`;
}

function mean(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function round(value) {
  return Math.round(value * 1000) / 1000;
}

async function main() {
  if (!existsSync(CORE_DIST)) {
    throw new Error("Missing packages/core/dist/index.js. Run: npm run build -w packages/core");
  }

  mkdirSync(REPORT_DIR, { recursive: true });
  const core = await import(pathToFileURL(CORE_DIST).href);
  const rows = STYLE_ORDER.map((styleId) => {
    const piece = core.createDemoComposition(styleId);
    const preset = core.STYLE_PRESETS.find((item) => item.id === styleId);
    return {
      styleId,
      label: preset?.label || styleId,
      features: features(piece),
    };
  });
  const report = {
    generatedAt: new Date().toISOString(),
    rows,
    controlClaims: evaluateControlClaims(rows),
  };

  writeFileSync(JSON_OUT, `${JSON.stringify(report, null, 2)}\n`);
  writeFileSync(MD_OUT, renderMarkdown(report));
  console.log(`Evaluated ${rows.length} style controls.`);
  console.log(`Wrote: ${JSON_OUT}`);
  console.log(`Wrote: ${MD_OUT}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
