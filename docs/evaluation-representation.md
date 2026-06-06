# ProjChord-Eval And Representation Plan

更新时间：2026-06-05

## Core Thesis Move

不要把项目写成“预测原曲和弦是否正确”。那会把音乐问题写窄，也会让创新性变浅。

更稳的论文主张是：

> 本文提出一个面向短旋律配和声与续写的可控生成系统，并构建基于真实样本、扰动样本和语义原型的评价与优化框架，用于量化旋律-和声合理性、续写连贯性、风格真实性和控制有效性。

这里的核心不是“音乐有唯一答案”，而是“系统能否在可解释属性上更接近真实音乐，并且控制信号是否真的改变目标属性”。

## What Current Data Lacks

| 维度 | 当前 Nottingham | 对论文的影响 | 下一步 |
| --- | --- | --- | --- |
| 风格复杂度 | folk tune，旋律清楚，和声简单 | 适合作 baseline，不适合展示高级流行或 jazz | POP909 作为主数据 |
| 编配声部 | 主要是 melody 与 chord | 难训练伴奏型和左右手织体 | POP909 的 melody / bridge / piano tracks |
| 和声词汇 | I, IV, V, vi 等基础和弦多 | 张力和复杂度展示弱 | ChoCo 统一 chord vocabulary |
| 表现细节 | 缺 velocity、人类 timing、音色 | 播放效果和演奏表现薄 | MAESTRO / ASAP 做 performance reference |
| 语义标签 | 缺 genre、mood、style text | prompt/control 训练困难 | LLM 生成 pseudo descriptors，或接 CLaMP/WikiMT 思路 |

## Transfer From CILMP-Like Medical Image Work

CILMP 一类方法的可迁移思想不是“医学图像本身”，而是下面这个范式：

| 医学图像做法 | 音乐任务迁移 |
| --- | --- |
| 用 LLM 生成疾病类别的语义 representation | 用 LLM 生成风格、和声功能、伴奏型、张力等级的音乐语义 representation |
| 把类别描述变成 prompt 或 prototype | 把“稳定流行、温柔稀疏、张力变化、swing solo”等变成可检索、可训练的 prototype |
| 用 text representation 引导视觉模型分类 | 用 text/music representation 引导 chord selection、style retrieval、evaluation scorer |
| 通过概念描述提高可解释性 | 网页和论文能解释“为什么这个片段被判为高张力/高复杂/更像流行” |

迁移后，我们可以做一个 Music Concept Representation Layer。

## Music Concept Representation Layer

每个音乐片段不只保存 notes 和 chords，还保存一组可计算特征和一组可读语义描述。

| representation | 来源 | 用途 |
| --- | --- | --- |
| symbolic features | 本地脚本提取 | 训练评价器、控制指标、检索 |
| theory concepts | 规则计算 | 和声功能、终止式、张力、冲突 |
| LLM descriptors | 给 LLM 看结构化特征后生成 | pseudo labels、风格描述、网页解释 |
| prototype prompts | 人工模板 + LLM 扩写 | 可控生成条件、风格检索 |
| contrastive embedding | CLaMP/CLAP 类模型或后续自训 | text-to-music retrieval、zero-shot style match |

## Evaluation Protocols

### Protocol 1: Real Versus Corrupted

目的：证明指标不是瞎编。

做法：从真实曲库生成负样本。

| corruption | 破坏什么 |
| --- | --- |
| random_chord | 旋律-和弦匹配 |
| shifted_chord | 和弦边界与重音位置 |
| shuffled_chord_order | 和声进行 |
| wrong_key_chords | 调性一致性 |
| swapped_continuation | 续写连贯性 |
| rhythm_jitter | 节奏稳定性 |

评价器如果合理，应该把真实片段排在破坏片段前面。报告 AUC、pairwise ranking accuracy、平均分差。

### Protocol 2: Control Counterfactual

目的：证明控制按钮不是装饰。

同一个 seed 生成多个版本，只改变一个控制量。

| 控制项 | 可测属性 |
| --- | --- |
| harmonyDensity | chords per bar |
| rhythmDensity | notes per bar, inter-onset interval |
| chordComplexity | seventh ratio, non-triad ratio |
| tension | non-chord tone ratio, dominant/color chord ratio |
| accompanimentPattern | bass/chord onset offset, arpeggiation ratio |

报告 ordering accuracy 和 effect size。比如高密度版本的 chords per bar 是否显著高于低密度版本。

### Protocol 3: Distribution Matching

目的：证明生成结果更像 held-out 真实音乐。

从 MGEval、MusPy、FID、MMD、C2ST 迁移：

| 方法 | 音乐版本 |
| --- | --- |
| FID | Music-FID，比较真实与生成的特征均值/协方差 |
| MMD | 比较真实与生成特征分布 |
| C2ST | 训练分类器区分 real/generated，越难区分越好 |
| nearest neighbor | 防止直接复制训练集 |

### Protocol 4: Representation-Guided Retrieval

目的：把 LLM representation 变成实际可用模块。

做法：为每个控制风格生成 prototype descriptors，再用片段特征匹配 descriptor。

例子：

| prototype | descriptor |
| --- | --- |
| stable_pop | diatonic triads, clear downbeat chords, medium note density, low chromatic tension |
| soft_sparse | long note values, low note density, arpeggiated harmony, wide sustain |
| tension | seventh chords, secondary dominant feel, non-chord tones resolving by step |
| groove | offbeat chord entries, bass-chord alternation, stronger rhythmic syncopation |
| swing_jazz | triplet subdivision, chromatic approach notes, ii-V-I vocabulary, melodic enclosure |

## Concrete Next Implementation

1. 建立统一 feature schema：每个 phrase 提取 density、range、chord、rhythm、tension、continuity。
2. 生成 corrupted pairs：为真实 phrase 自动构造破坏样本。
3. 训练或先规则化一个 evaluator：输出 real-like score，不急着总分。
4. 接 POP909：把主实验从 folk baseline 升级到 pop melody-harmony-accompaniment。
5. 加 LLM descriptors：先用本地 prompt 模板生成描述，后续再调用 LLM 自动扩展。

## First Local Eval Script

本地第一版入口：

```bash
npm run eval:nottingham
```

可控性评价入口：

```bash
npm run eval:controls
```

它会读取 `corpus-lab/processed/nottingham/phrases.jsonl`，构造五类破坏样本，并输出：

| 输出 | 说明 |
| --- | --- |
| `corpus-lab/reports/projchord-eval-nottingham.json` | 机器可读评价结果 |
| `corpus-lab/reports/projchord-eval-nottingham.md` | 可放进论文实验设计的校准报告 |

当前五类破坏样本：

| corruption | 测试能力 |
| --- | --- |
| random_chords | 旋律与和弦的局部匹配 |
| shifted_chords | 和弦边界是否对齐重音与旋律 |
| shuffled_chords | 和声进行自然度 |
| swapped_continuation | 前后半段续写连贯性 |
| wrong_key_chords | 调性与和弦整体错配 |

`eval:controls` 会检查当前风格按钮是否真的改变了可测属性，例如 chord density、seventh ratio、average melody duration 和 offbeat harmony ratio。这个脚本先评估 demo 生成器，后续会迁移到真实模型输出。

## Why This Is Defensible

1. 音乐没有唯一答案，所以不把 chord accuracy 当唯一目标。
2. 指标通过 real/corrupted 排序实验验证，不是拍脑袋。
3. 控制性通过同 seed 反事实实验验证，不依赖大规模人工问卷。
4. representation 方法借鉴 CILMP、concept bottleneck、CLIP/CLaMP 思路，能解释模型为何给出某种判断。
5. 最终论文证据可以由 baseline 对比、ablation、distribution matching 和少量听评共同组成。
