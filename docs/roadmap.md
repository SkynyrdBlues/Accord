# Roadmap

## Phase 0: Product Shell

Goal: make the idea visible before training anything.

- Virtual keyboard.
- Style buttons.
- Mock chord and melody generation.
- Piano roll.
- Playback animation with left-hand chord and right-hand melody split.
- FastAPI shell.

Exit criterion: a user can click a style button, hear a different mock version, and see keys light up.

## Phase 1: Rule Baseline

- Quantize melody notes.
- Infer likely key.
- Generate rule-based chord candidates.
- Render chord notes into accompaniment patterns.
- Export JSON and MIDI.

Exit criterion: generated output is musically basic but structurally valid.

## Phase 2: Dataset Pipeline

- Download POP909.
- Extract melody, accompaniment, chord, beat, and key annotations.
- Slice songs into 2/4/8-bar examples.
- Create train/validation/test splits.
- Produce tokenized datasets.

Exit criterion: scripts can rebuild processed data from raw POP909.

## Phase 3: Learning Models

- Markov / HMM chord baseline.
- LSTM or small Transformer chord model.
- Chord-conditioned continuation model.
- Ablation: no chord condition vs predicted chord condition vs true chord condition.

Exit criterion: at least one neural model beats the rule baseline on chosen metrics.

## Phase 4: Control And Prompt

- Map style buttons to explicit control parameters.
- Add sliders for density, complexity, and tension.
- Add prompt parser that maps natural text to these parameters.

Exit criterion: prompt output is explainable and editable rather than magic.

## Phase 5: Thesis Polish

- System flow diagram.
- Dataset processing diagram.
- Model diagram.
- Candidate chord comparison.
- Density control chart.
- Ablation chart.
- Piano roll case studies.
- Latency table.
