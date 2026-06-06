import type { StylePreset } from "./types.js";

export const STYLE_PRESETS: StylePreset[] = [
  {
    id: "stable_pop",
    label: "稳定流行",
    description: "常见功能和声，节奏清楚，适合做默认基线。",
    controls: {
      harmonyDensity: "medium",
      rhythmDensity: "medium",
      chordComplexity: "triad",
      accompanimentPattern: "block",
      tension: "low"
    }
  },
  {
    id: "soft_sparse",
    label: "温柔稀疏",
    description: "更长时值、更少音符、分解和弦，偏轻柔。",
    controls: {
      harmonyDensity: "low",
      rhythmDensity: "low",
      chordComplexity: "triad",
      accompanimentPattern: "broken",
      tension: "low"
    }
  },
  {
    id: "tension",
    label: "张力变化",
    description: "更多七和弦和经过感，适合展示和声重配。",
    controls: {
      harmonyDensity: "high",
      rhythmDensity: "medium",
      chordComplexity: "seventh",
      accompanimentPattern: "bass_chord",
      tension: "high"
    }
  },
  {
    id: "groove",
    label: "律动增强",
    description: "低音与和弦错位进入，听感更有推进。",
    controls: {
      harmonyDensity: "medium",
      rhythmDensity: "high",
      chordComplexity: "triad",
      accompanimentPattern: "bass_chord",
      tension: "medium"
    }
  },
  {
    id: "complex",
    label: "复杂一点",
    description: "换和弦更频繁，使用更丰富的色彩和弦。",
    controls: {
      harmonyDensity: "high",
      rhythmDensity: "high",
      chordComplexity: "color",
      accompanimentPattern: "broken",
      tension: "high"
    }
  },
  {
    id: "loop_bgm",
    label: "循环 BGM",
    description: "重复动机更明显，适合作为游戏/短视频循环片段。",
    controls: {
      harmonyDensity: "medium",
      rhythmDensity: "medium",
      chordComplexity: "triad",
      accompanimentPattern: "broken",
      tension: "medium"
    }
  }
];
