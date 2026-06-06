# ProjChord-Eval Nottingham Calibration

生成时间：2026-06-05T05:16:12.114Z

## Purpose

这个报告不证明音乐绝对好听。它只验证一件事：当前评价器能不能把真实 Nottingham 片段排在结构被破坏的片段前面。

## Pairwise Calibration

| corruption | ranking accuracy | mean margin | p10 margin | p50 margin | p90 margin |
| --- | ---: | ---: | ---: | ---: | ---: |
| random_chords | 0.994 | 0.194 | 0.097 | 0.195 | 0.289 |
| shifted_chords | 0.958 | 0.049 | 0.011 | 0.043 | 0.098 |
| shuffled_chords | 0.951 | 0.074 | 0.014 | 0.068 | 0.138 |
| swapped_continuation | 0.936 | 0.06 | 0.006 | 0.052 | 0.124 |
| wrong_key_chords | 1 | 0.474 | 0.352 | 0.492 | 0.567 |

## Real Sample Component Means

| component | mean |
| --- | ---: |
| melodyChordFit | 0.861 |
| longNoteFit | 0.971 |
| chordProgression | 0.416 |
| corpusPlausibility | 0.753 |
| continuationCoherence | 0.771 |

## Interpretation

1. ranking accuracy 接近 1，说明该破坏类型能被当前指标稳定识别。
2. ranking accuracy 接近 0.5，说明当前指标对该破坏类型没有足够区分力。
3. mean margin 是真实样本分数减破坏样本分数，越大说明指标越敏感。

## Current Caveat

这是第一版规则评价器。它的作用是校准指标方向，不是最终论文总分。下一步应接入 POP909，并用 melody/chord/accompaniment 的真实配对训练更强的 representation scorer。
