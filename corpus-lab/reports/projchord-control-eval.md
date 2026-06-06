# ProjChord Control Validity Eval

生成时间：2026-06-05T05:16:12.855Z

## Style Feature Table

| styleId | label | notes/bar | harmony notes/bar | chords/bar | seventh ratio | avg melody duration | offbeat harmony ratio |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| stable_pop | 稳定流行 | 3.5 | 4.5 | 1.5 | 0 | 1.143 | 0 |
| soft_sparse | 温柔稀疏 | 3.5 | 3.75 | 1.25 | 0 | 1.143 | 0.333 |
| tension | 张力变化 | 3.5 | 6 | 1.5 | 1 | 1.143 | 0 |
| groove | 律动增强 | 3.5 | 4.5 | 1.5 | 0 | 1.143 | 0.667 |
| complex | 复杂一点 | 3.5 | 8.75 | 2.25 | 0.889 | 1.143 | 0.486 |
| loop_bgm | 循环 BGM | 3.5 | 3.75 | 1.25 | 0 | 1.143 | 0.333 |

## Control Claims

| claim | result | observed |
| --- | --- | --- |
| complex_has_highest_chord_density | pass | 2.25 > 1.5 |
| tension_uses_more_sevenths_than_stable | pass | 1 > 0 |
| soft_sparse_has_longer_melody_notes_than_groove | pass | 1.143 >= 1.143 |
| groove_has_more_offbeat_harmony_than_stable | pass | 0.667 > 0 |
| loop_bgm_is_not_more_complex_than_complex | pass | 1.25 < 2.25 |

## Pass Rate

| metric | value |
| --- | ---: |
| control claim pass rate | 1 |

## Interpretation

这个报告只检查当前 demo 生成器的控制信号是否真的改变了可测属性。等 POP909 接入后，同一套 control validity 会改成对模型输出做批量评估。
