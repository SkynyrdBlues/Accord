# projChord Corpus Lab

这里是单独的数据清洗工作区，和网页 demo、本地模型代码分开。目标是把大量来源不同的曲谱、MIDI、和声标注整理成 projChord 可以统一消费的片段数据。

## Directory Layout

```text
corpus-lab/
  raw/          # 官方原始下载件，按数据集分目录，git 忽略
  interim/      # 解压、解析、去重、转调等中间产物，git 忽略
  processed/    # 统一后的训练/评测/网页曲库片段，git 忽略
  manifests/    # 数据源清单、下载状态、许可证记录
  reports/      # 清洗报告、覆盖率统计、可视化截图
```

## Data Strategy

projChord 需要的不是单一“大曲库”，而是三类素材一起工作：

1. 可控生成训练集：有旋律、和弦、伴奏或明确声部的数据，例如 POP909、Nottingham、ChoCo。
2. 公版/许可清楚的展示曲库：用来做“当前生成片段 vs 大师作品”的可视化对比，例如 Mutopia、PDMX、ASAP、MAESTRO MIDI。
3. 海量背景语料：用于预训练、检索和风格统计，例如 Lakh MIDI、GiantMIDI-Piano、BFDB。

## First Commands

下载第一阶段推荐集：

```bash
bash scripts/corpus/download_phase1.sh
```

只下载 Nottingham 小型和声基线：

```bash
bash scripts/corpus/download_nottingham.sh
```

解析 Nottingham 并生成 8 小节真实片段：

```bash
npm run corpus:nottingham
```

抽样导出给网页 demo 使用：

```bash
npm run corpus:nottingham:web-sample
```

解析 POP909 主实验数据：

```bash
npm run corpus:pop909
```

如果缺少 ZIP，先运行：

```bash
bash scripts/corpus/download_pop909.sh
```

数据下载计划和风险表见 `docs/corpus/download-table.md`。
