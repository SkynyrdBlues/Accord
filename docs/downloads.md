# Downloads And Dependencies

## Already Present Locally

- Node: `v24.13.1`
- npm: `11.8.0`
- Python: `3.14.4`

These are enough for the first web prototype.

## Recommended Installs

### Node.js

Official download: https://nodejs.org/en/download

The official page currently lists Node `v24.16.0 LTS`. Local `v24.13.1` is close enough for this project, so upgrading is optional unless npm packages complain.

### pnpm

Official docs: https://pnpm.io/installation

Not required right now. This repo uses npm workspaces so we can avoid another package manager at the beginning.

### Frontend

- Vite docs: https://vite.dev/guide/
- Tone.js docs: https://tonejs.github.io/docs/
- Tonejs MIDI parser: https://tonejs.github.io/Midi/
- Web MIDI API: https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API

Decision: use browser Web Audio for the MVP. Add Tone.js when scheduling and instrument playback need to be smoother. Use Web MIDI only as an optional extension because browser support is limited and it requires a secure context.

### Backend And MIDI Processing

- FastAPI docs: https://fastapi.tiangolo.com/tutorial/
- MidiTok docs: https://miditok.readthedocs.io/en/latest/
- music21 docs: https://music21.org/
- Mido docs: https://mido.github.io/mido/
- pretty_midi GitHub: https://github.com/craffel/pretty-midi

Decision:

- Use FastAPI for model inference endpoints.
- Use Mido or pretty_midi for concrete MIDI file IO.
- Use MidiTok when the Transformer tokenization stage starts.
- Use music21 for theory-heavy analysis only if needed; it is useful but can be slower for large preprocessing.

## Dataset

### POP909

Official GitHub: https://github.com/music-x-lab/POP909-Dataset

Why it fits:

- 909 pop-song piano arrangements.
- MIDI tracks include main melody, bridge melody, and piano accompaniment.
- Provides tempo, beat, key, and chord annotations.
- Good match for melody-to-chord, accompaniment, and continuation experiments.

Download options:

```bash
scripts/download_pop909.sh
```

or manually:

```bash
curl -L -o data/raw/POP909.zip https://github.com/music-x-lab/POP909-Dataset/raw/master/POP909.zip
```

Keep the ZIP and extracted dataset under `data/raw/`; processed tokens go under `data/processed/`.

## Full Corpus Lab

现在项目已经有单独的素材清洗工作区：

```bash
corpus-lab/
```

完整数据源分层、下载优先级、授权风险和脚本入口见：

- [docs/corpus/download-table.md](corpus/download-table.md)
- [corpus-lab/README.md](../corpus-lab/README.md)
- [corpus-lab/manifests/datasets.yml](../corpus-lab/manifests/datasets.yml)

第一阶段推荐下载命令：

```bash
bash scripts/corpus/download_phase1.sh
```

## First Install Plan

1. Run `npm install` for the web MVP.
2. Run `npm run dev` and check the keyboard animation.
3. Download POP909 only after the UI skeleton is stable.
4. Create Python venv and install backend dependencies.
5. Add preprocessing scripts for POP909.
