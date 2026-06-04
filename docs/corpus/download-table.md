# projChord 曲库下载表

更新时间：2026-06-04

结论先说：这个项目最该先收的不是“随机 MIDI 数量”，而是“短旋律、和弦、伴奏、可解释对比”都能落到网页上的数据。推荐顺序是：Nottingham 和 POP909 做配和声 MVP，MAESTRO/ASAP/DCML/Mutopia 做大师曲库对比，PDMX 做公版大规模素材池，ChoCo 做和声标注标准化，最后再上 Lakh/GiantMIDI 这种海量但噪声更高的库。

## Download Table

| 优先级 | 数据集 | 官方入口 | 规模 | 主要格式 | 和弦/和声 | 对 projChord 的用途 | 授权与风险 | 本地动作 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P0 | Nottingham Dataset | https://github.com/jukedeck/nottingham-dataset | 约 1000+ folk tunes | ABC, MIDI | 有 chord notation | 立刻做 melody to chord 规则 baseline、可编辑乐句、和声评估 | GPL-3.0；folk 来源仍需保留 provenance | 已写 `download_nottingham.sh` |
| P0 | POP909 | https://github.com/music-x-lab/POP909-Dataset | 909 首流行钢琴编配 | MIDI, chord/key/beat txt | 有 chord/key/beat，含 melody/bridge/piano tracks | 最贴近“短旋律配和声与续写”的核心训练集 | GitHub repo MIT；流行歌素材用于研究展示要谨慎 | 已写 `download_pop909.sh` |
| P0 | MAESTRO MIDI-only | https://magenta.tensorflow.org/datasets/maestro | 1276 performances, 约 198.7 小时；MIDI-only 56MB | MIDI, CSV, JSON | 无和弦 | 钢琴演奏风格、节奏密度、velocity、网页大师对比 | CC BY-NC-SA 4.0，非商用同样共享 | 已写 `download_maestro_midi.sh` |
| P1 | ASAP | https://github.com/fosfrancesco/asap-dataset | 222 scores, 1067+ performances | MIDI, MusicXML, annotations | key/time/downbeat, 无通用 chord labels | 大师作品的 score vs performance 对齐，做高档可视化对比 | CC BY-NC-SA 4.0 | 已写 `download_asap.sh` |
| P1 | DCML Annotated Beethoven Corpus | https://github.com/DCMLab/ABC | 贝多芬弦乐四重奏全套和声分析 | TSV, MuseScore | 专家 Roman numeral harmony | 论文解释性：和声功能、转位、终止式对比 | CC BY-NC-SA 4.0 | 已写 `download_dcml_abc.sh` |
| P1 | Mutopia Project | https://www.mutopiaproject.org/ | 2124 pieces | PDF, MIDI, LilyPond | 通常无和弦 | 网页“公版大师曲库”展示，曲名/作曲家可信 | Public Domain 或 Creative Commons，逐曲核对 | 先人工筛 piano/classical，再写爬取 |
| P1 | ChoCo Chord Corpus | https://github.com/smashub/choco | 20K+ JAMS files, 60K+ annotations | JAMS, RDF | 强，有 Harte 和 Roman | 统一和弦标签、训练 chord prior、评估生成和弦是否像真实语料 | 双授权：多数 CC BY 4.0，部分 CC BY-NC-SA 4.0 | 已写 `download_choco_repo.sh`，优先拉 release |
| P1 | PDMX | https://github.com/pnlong/PDMX | 250K+ public-domain MusicXML scores | MusicXML/MXL, MIDI, PDF, JSON | 不保证有 chord labels | 真正的“致死量”公版曲库，适合做检索、视觉对比、风格统计 | 建议只用 `no_license_conflict` / `all_valid` 子集 | 已写 `download_pdmx_repo.sh`，大数据走 Zenodo |
| P2 | GiantMIDI-Piano | https://github.com/bytedance/GiantMIDI-Piano | 10,855 MIDI, curated 7,236 | MIDI | 无和弦 | 大量古典钢琴风格、旋律续写预训练 | CC BY 4.0；下载稳定版需同意 disclaimer | 已写 `download_giantmidi_repo.sh`，数据需手动确认 |
| P2 | Lakh MIDI Dataset | https://colinraffel.com/projects/lmd/ | 176,581 unique MIDI | MIDI, JSON/HDF5 metadata | 不稳定，取决于 MIDI 文件 | 海量 MIDI 预训练、去重、风格检索 | CC BY 4.0，但原 MIDI attribution 不完整，公开展示风险高 | 先下载 metadata/clean subset，不作为公开曲库 |
| P2 | BFDB | https://zenodo.org/records/14692025 | 13,835 British folk melodies | ABC | 无和弦 | 旋律续写、motif 统计、转调增强 | Zenodo 数据，需按页面许可证记录 | 后续脚本 |
| P3 | abcnotation.com / folktune.org | https://abcnotation.com/ | 大量 ABC folk/trad tunes | ABC | 部分有 chord text | 扩充民谣旋律，适合可编辑短乐句 | 逐来源许可证差异大，不能盲爬盲展示 | 只做白名单来源 |
| 暂缓 | HookTheory/TheoryTab | https://www.hooktheory.com/theorytab/about | 大量流行歌段落 | 网站数据 | 强 | 理论上非常适合 melody/chord 对齐 | 商业平台和版权歌曲，不能直接抓取做公开数据 | 暂不下载 |
| 暂缓 | Real Book / Beatles / Wikifonia 派生集 | 多数经 ChoCo 或论文引用出现 | 大 | leadsheet/lab/mxl | 强 | 和声分析很诱人 | 版权和再分发风险高 | 只通过 ChoCo 的许可边界间接研究 |

## What This Proves

你的论文/展示不需要证明“音乐好坏绝对优越”。更稳的证明方式是：

1. 和声合理性：生成和弦与 POP909、Nottingham、ChoCo 的真实和声分布接近。
2. 可控性：同一旋律在不同风格按钮下，密度、七和弦比例、切分、张力曲线有可量化变化。
3. 续写一致性：生成片段与输入 seed 在音域、节奏动机、调性中心上保持连续。
4. 可解释对比：网页把当前生成片段和公版大师曲库做 piano roll、pitch-class histogram、cadence map、tension curve、rhythm density 的直观对比。
5. 版权安全展示：最终给用户看的“大师作”只从 Mutopia、PDMX no-license-conflict、MAESTRO/ASAP 等许可清楚的来源来。

## Phase Plan

第一阶段先下载小而有效的数据：Nottingham、POP909、MAESTRO MIDI-only、ASAP、DCML ABC。它们足够把网页对比页从 hardcoded demo 变成真实曲库切片。

第二阶段接入 ChoCo，把不同来源的 chord notation 统一成 Harte/Roman/本项目 chord quality 三套表示。

第三阶段再开 PDMX、GiantMIDI、Lakh。它们数量大，但清洗成本和版权边界都更复杂，适合在基础 pipeline 稳了以后做。

## Current Pipeline

Nottingham 已经有第一版清洗入口：

```bash
npm run corpus:nottingham
```

输出：

- `corpus-lab/processed/nottingham/tunes.jsonl`
- `corpus-lab/processed/nottingham/phrases.jsonl`
- `corpus-lab/reports/nottingham-summary.json`

当前解析器优先保证项目闭环可用：读取 `ABC_cleaned` 的标题、调号、拍号、旋律音符和引号和弦，并按 8 小节切片。复杂反复结构暂时按谱面书写顺序近似处理，后续再加严格 repeat expansion。

2026-06-04 本地结果：

- 已解析 Nottingham：1034 首 tune。
- 已生成：2574 个 8 小节 phrase。
- 已导出网页样本：48 个 8 小节、4/4 或 2/2 phrase。
- 主页面已有“载入曲库”按钮，可把当前 demo 切换为真实 Nottingham 乐句。
