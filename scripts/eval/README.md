# Evaluation Scripts

`eval_nottingham.mjs` runs the first ProjChord-Eval calibration pass.

It compares real Nottingham phrases against automatically corrupted variants. The goal is not to produce a final taste score. The goal is to test whether the current metrics can detect broken harmony, broken timing, broken progression, and broken continuation.

Run:

```bash
npm run eval:nottingham
```

`eval_controls.mjs` checks whether the current style controls actually change measurable musical attributes.

Run:

```bash
npm run eval:controls
```
