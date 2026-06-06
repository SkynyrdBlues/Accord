# Nottingham Corpus Audit

生成时间：2026-06-05T02:33:03.837Z

## Scale

| 项目 | 数值 |
| --- | --- |
| phrase count | 2574 |

## Meter Distribution

| meter | count |
| --- | --- |
| 4/4 | 1299 |
| 6/8 | 917 |
| 3/4 | 228 |
| 2/4 | 90 |
| 9/8 | 20 |
| 2/2 | 13 |
| 6/4 | 4 |
| 3/2 | 3 |

## Numeric Feature Summary

| feature | mean | p10 | p50 | p90 |
| --- | ---: | ---: | ---: | ---: |
| durationBeats | 26.453 | 21 | 27.99 | 32 |
| noteCount | 37.019 | 23 | 36 | 53 |
| chordCount | 9.349 | 6 | 9 | 13 |
| notesPerBar | 4.627 | 2.875 | 4.5 | 6.625 |
| chordsPerBar | 1.169 | 0.75 | 1.125 | 1.625 |
| pitchRange | 14.204 | 10 | 14 | 19 |
| uniquePitchClasses | 6.961 | 6 | 7 | 8 |
| avgDuration | 0.784 | 0.522 | 0.679 | 1.2 |
| longNoteRatio | 0.393 | 0.053 | 0.294 | 0.895 |
| largeLeapRatio | 0.067 | 0 | 0.044 | 0.157 |
| repeatedOnsetRatio | 0.003 | 0 | 0 | 0 |
| seventhChordRatio | 0.214 | 0 | 0.214 | 0.417 |

## Caveats

1. Nottingham is useful for folk melody and simple chord baselines, but it is not a strong source for pop arrangement or jazz harmonic vocabulary.
2. The current parser preserves written ABC order and does not fully expand repeat structure.
3. The corpus currently lacks audio, expressive timing, lyrics, arrangement roles beyond melody/chord, and rich style metadata.

## Recommended Next Data

1. POP909 for melody, chord, beat, key, and piano-accompaniment aligned pop phrases.
2. ChoCo for chord vocabulary normalization and harmonic prior estimation.
3. Weimar Jazz Database or similar jazz solo corpora for swing phrasing and improvisation descriptors, paired later with chord/lead-sheet sources.
4. PDMX or Mutopia for public-domain master-reference visual comparison.
