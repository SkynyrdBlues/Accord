# Project Granularity

## One-Sentence Product

用户输入短旋律后，系统生成可切换风格的和弦、伴奏与续写片段，并在播放时用键盘动画和钢琴卷帘可视化结果。

## Core Boundary

必须做：

- 短旋律输入和量化。
- 和弦候选生成。
- 风格按钮：稳定流行、温柔稀疏、张力变化、律动增强、复杂一点、循环 BGM。
- 伴奏渲染：柱式、分解、低音加和弦。
- 旋律续写。
- 播放同步：左手和弦、右手旋律对应琴键高亮。
- 钢琴卷帘和和弦时间轴。
- MIDI 导出。

可加分：

- Prompt 解析成控制参数。
- 局部重配和声 / 局部续写。
- Top-3 候选对比。
- 音符与当前和弦的兼容性颜色。
- 外接 MIDI 键盘输入。

暂不承诺：

- 任意自然语言 prompt 直接生成任意风格。
- 真正实时无延迟即兴伴奏。
- 商业级音频生成。
- 超过前人 SOTA。

## Research Modules

1. Melody preprocessing
   - note extraction
   - beat alignment
   - quantization
   - phrase slicing

2. Chord generation
   - rule baseline
   - Markov / HMM baseline
   - Transformer chord decoder
   - Top-N chord candidates

3. Style control
   - harmony density
   - rhythm density
   - chord complexity
   - accompaniment pattern
   - register and range
   - tension level

4. Continuation
   - melody seed conditioning
   - chord conditioning
   - style conditioning
   - local infilling

5. Evaluation
   - chord root accuracy
   - chord quality accuracy
   - melody-chord compatibility
   - target density vs actual density
   - latency for short clips
   - user-facing example comparisons

## UI Modules

1. Recorder
   - click keyboard now
   - Web MIDI later

2. Generator panel
   - style buttons
   - advanced sliders later
   - prompt parser later

3. Timeline
   - melody track
   - chord track
   - accompaniment track
   - continuation track

4. Playback
   - Web Audio first
   - Tone.js later if richer scheduling is needed

5. Export
   - JSON event export first
   - MIDI export after `@tonejs/midi` or backend MIDI writer
