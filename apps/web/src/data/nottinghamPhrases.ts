import type { ChordEvent, NoteEvent } from "../../../../packages/core/src";

export interface NottinghamPhrase {
  id: string;
  title: string;
  key: string;
  meter: string;
  bars: number;
  durationBeats: number;
  chords: ChordEvent[];
  notes: NoteEvent[];
  provenance: {
    dataset: string;
    subset: string;
    license: string;
  };
}

export const NOTTINGHAM_PHRASES: NottinghamPhrase[] = [
  {
    "id": "nottingham:ashover:2:bars-1-8",
    "title": "Barry's Favourite",
    "key": "D",
    "meter": "2/2",
    "bars": 8,
    "durationBeats": 28.998,
    "chords": [
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 3.999
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 4.999,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 6.999,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 8.999,
        "durationBeats": 4
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 12.999,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 14.999,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 16.999,
        "durationBeats": 3.999
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 20.998,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 22.998,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 24.998,
        "durationBeats": 4
      }
    ],
    "notes": [
      {
        "pitch": 69,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 1,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 83,
        "startBeat": 1.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 2,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 2.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 3,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 4.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 4.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 4.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 5.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 5.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 6.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 6.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 7.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 8.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 9.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 9.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 10.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 10.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 11.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 12.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 13.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 13.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 14.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 14.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 15.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 16.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 83,
        "startBeat": 17.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 17.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 18.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 18.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 19.999,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 20.332,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 20.665,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 20.998,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 21.748,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 21.998,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 22.748,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 22.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 23.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 24.998,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 25.748,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 25.998,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 26.748,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 26.998,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 27.748,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 27.998,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 28.748,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:4:bars-1-8",
    "title": "Black Tulip Hornpipe",
    "key": "G",
    "meter": "2/2",
    "bars": 8,
    "durationBeats": 29,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 9,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 13,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 17,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 21,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 25,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 27,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 74,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 1,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 1.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 2,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 2.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 3,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 3.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 5,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 5.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 6,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 6.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 7,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 8,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 8.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 9,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 9.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 10,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 10.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 11,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 11.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 12,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 12.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 13,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 13.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 14,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 15,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 15.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 16,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 16.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 17,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 17.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 18,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 18.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 19,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 83,
        "startBeat": 19.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 20,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 20.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 21,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 21.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 22,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 22.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 23,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 23.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 24,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 24.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 25,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 25.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 26,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 26.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 27,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 27.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 28,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 28.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:5:bars-1-8",
    "title": "Bobbin Mill Reel",
    "key": "D",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.5,
    "chords": [
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 0.5,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 4.5,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 6.5,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 8.5,
        "durationBeats": 4
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 12.5,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 14.5,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 16.5,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 20.5,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 22.5,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 24.5,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 26.5,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 69,
        "startBeat": 0,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 0.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 1,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 1.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 2.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 3.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 5.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 6.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 7.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 9,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 9.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 12.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 13.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 14.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 15.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 16.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 17,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 17.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 18,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 18.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 19,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 19.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 20.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 21.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 22.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 23.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 25,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 25.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 26,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 27,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 27.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 28,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:6:bars-1-8",
    "title": "Bonnie Kate",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 29,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 3,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 9,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 11,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 13,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 17,
        "durationBeats": 1
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 18,
        "durationBeats": 3
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 21,
        "durationBeats": 1
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 22,
        "durationBeats": 3
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 25,
        "durationBeats": 2
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 27,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 78,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 1,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 3,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 4,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 6,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 8,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 9,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 10,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 11,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 12,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 13,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 14,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 16,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 17,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 18,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 20.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 21,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 22,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 25,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 26,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 27,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 28,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:7:bars-1-8",
    "title": "Busker Brag",
    "key": "C",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 32,
    "chords": [
      {
        "name": "G7",
        "root": 7,
        "quality": "dom7",
        "startBeat": 0,
        "durationBeats": 8
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 8,
        "durationBeats": 8
      },
      {
        "name": "G7",
        "root": 7,
        "quality": "dom7",
        "startBeat": 16,
        "durationBeats": 12
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 28,
        "durationBeats": 4
      }
    ],
    "notes": [
      {
        "pitch": 77,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 2,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 3,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 4,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 5.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 6,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 8,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 9.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 10,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 12,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 13,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 15,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 16,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 17,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 18,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 19,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 20.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 21.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 22,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 25,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 25.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 26,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 27,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 27.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 28,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 29,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 30,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:8:bars-1-8",
    "title": "Caymann Reel",
    "key": "A",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 32,
    "chords": [
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 0,
        "durationBeats": 8
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 8,
        "durationBeats": 8
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 16,
        "durationBeats": 4
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 20,
        "durationBeats": 2
      },
      {
        "name": "E",
        "root": 4,
        "quality": "maj",
        "startBeat": 22,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 24,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 28,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 30,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 64,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 1,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 1.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 6,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 8,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 9,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 9.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 13,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 16,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 17,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 17.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 18,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 18.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 19,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 19.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 20.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 21,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 22,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 25,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 26,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 27,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 28,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 28.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 29,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 30,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:10:bars-1-8",
    "title": "Chestnut Reel",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 29.5,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 1.5,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 5.5,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 9.5,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 13.5,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 17.5,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 21.5,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 25.5,
        "durationBeats": 4
      }
    ],
    "notes": [
      {
        "pitch": 68,
        "startBeat": 0,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 0.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 1,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 1.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 5.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 6.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 7.5,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 9.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 13.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 14.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 15.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 68,
        "startBeat": 16,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 16.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 17,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 17.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 18,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 18.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 19,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 19.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 20.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 21,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 21.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 22.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 23.5,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 25.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 26,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 27,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 27.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 28,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 28.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 29,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:12:bars-1-8",
    "title": "Cuillin Reel",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 29,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 5,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 7,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 9,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 13,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 15,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 17,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 21,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 25,
        "durationBeats": 4
      }
    ],
    "notes": [
      {
        "pitch": 74,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 5.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 6,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 6.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 7,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 8,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 9,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 13.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 14,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 15,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 15.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 16,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 16.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 17,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 17.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 18,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 18.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 19,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 19.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 20.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 21,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 21.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 22,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 22.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 23,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 25,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 25.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 26,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 27,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 27.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 28,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 28.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:13:bars-1-8",
    "title": "The Dance of the Polygon",
    "key": "D",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 32,
    "chords": [
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 0,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 4,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 6,
        "durationBeats": 1
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 7,
        "durationBeats": 1
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 8,
        "durationBeats": 4
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 12,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 14,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 16,
        "durationBeats": 1
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 17,
        "durationBeats": 1
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 18,
        "durationBeats": 1
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 19,
        "durationBeats": 1
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 20,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 24,
        "durationBeats": 1
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 25,
        "durationBeats": 1
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 26,
        "durationBeats": 1
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 27,
        "durationBeats": 1
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 28,
        "durationBeats": 1
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 29,
        "durationBeats": 1
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 30,
        "durationBeats": 1
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 31,
        "durationBeats": 1
      }
    ],
    "notes": [
      {
        "pitch": 62,
        "startBeat": 0,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 0.5,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 0.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 1,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 1.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 3,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 5,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 5.25,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 5.5,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 5.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 6,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 6.25,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 6.5,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 6.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 8,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 8.5,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 8.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 9,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 9.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 11,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 13.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 14,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 15,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 16,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 16.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 17,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 17.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 18,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 18.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 19,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 20.5,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 20.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 21,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 21.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 22,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 22.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 23,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 25,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 25.25,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 25.5,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 25.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 26,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 27,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 28,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 28.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 29,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 29.25,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 29.5,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 29.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 30,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 31,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:17:bars-9-16",
    "title": "Falling About",
    "key": "E",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 32.991,
    "chords": [
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 0,
        "durationBeats": 0
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 0,
        "durationBeats": 8.998
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 8.998,
        "durationBeats": 3.999
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 12.997,
        "durationBeats": 3.999
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 16.996,
        "durationBeats": 7.998
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 24.994,
        "durationBeats": 1.999
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 26.993,
        "durationBeats": 1.999
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 28.992,
        "durationBeats": 3.999
      }
    ],
    "notes": [
      {
        "pitch": 76,
        "startBeat": 0,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 3,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 3.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 3.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 3.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 4.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 4.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 5.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 5.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 6.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 6.999,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 7.332,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7.665,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 7.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 8.998,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 10.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 11.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 11.998,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 12.331,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 12.664,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 12.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 13.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 13.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 14.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 14.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 15.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 15.997,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 16.33,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 16.663,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 16.996,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 18.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 19.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 19.996,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 20.329,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 20.662,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 20.995,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 21.495,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 21.995,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 22.495,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 22.995,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 23.495,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 23.995,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 24.328,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 24.661,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 24.994,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 25.494,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 25.994,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 26.327,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 26.66,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 26.993,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 27.493,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 27.993,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 28.326,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 68,
        "startBeat": 28.659,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 28.992,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 29.492,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 29.992,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 30.325,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 30.658,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 30.991,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:19:bars-1-8",
    "title": "Flapjack",
    "key": "F",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 29,
    "chords": [
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "F",
        "root": 5,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 9,
        "durationBeats": 4
      },
      {
        "name": "F",
        "root": 5,
        "quality": "maj",
        "startBeat": 13,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 17,
        "durationBeats": 4
      },
      {
        "name": "F",
        "root": 5,
        "quality": "maj",
        "startBeat": 21,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 25,
        "durationBeats": 4
      }
    ],
    "notes": [
      {
        "pitch": 81,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 1,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 1,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 3,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 3,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 4,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 5,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 5,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 6.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 6.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 7,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 7,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 8,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 8,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 9,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 9,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 11,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 11,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 12,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 12,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 13,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 13,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 15,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 15,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 16,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 16,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 17,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 17,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 18.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 18.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 19,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 19,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 20,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 20,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 21,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 21,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 22.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 22.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 23,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 23,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 24,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 24,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 25,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 25,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 27,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 27,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 28,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 28,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:20:bars-1-8",
    "title": "Fradley Reel",
    "key": "C",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.5,
    "chords": [
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 0.5,
        "durationBeats": 2
      },
      {
        "name": "F",
        "root": 5,
        "quality": "maj",
        "startBeat": 2.5,
        "durationBeats": 2
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 4.5,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 6.5,
        "durationBeats": 2
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 8.5,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 10.5,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 12.5,
        "durationBeats": 2
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 14.5,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 16.5,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 18.5,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 20.5,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 22.5,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 24.5,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 26.5,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 67,
        "startBeat": 0,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 0.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 1,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 1.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 65,
        "startBeat": 3.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 5.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 6,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 6.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 9,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 9.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 13.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 14,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 15,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 15.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 16,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 16.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 17.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 18,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 18.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 19,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 19.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 20.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 21.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 22,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 22.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 23.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 24.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 25.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 26,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 27,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 27.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 28,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:23:bars-1-8",
    "title": "Hopwas Hornpipe",
    "key": "G",
    "meter": "2/2",
    "bars": 8,
    "durationBeats": 28.999,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 7.999
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 8.999,
        "durationBeats": 8
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 16.999,
        "durationBeats": 8
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 24.999,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 26.999,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 71,
        "startBeat": 0,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 0.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 2,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 2.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 3,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 3.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 4,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 5,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 5.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 6,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 6.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 7,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 8,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 8.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 75,
        "startBeat": 8.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 8.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 9.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 10.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 10.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 68,
        "startBeat": 11.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 11.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 12.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 12.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 13.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 13.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 14.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 15.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 16.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 17.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 17.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 18.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 18.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 19.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 19.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 20.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 20.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 21.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 21.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 22.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 22.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 23.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 23.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 24.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 24.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 25.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 25.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 26.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 26.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 27.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 27.999,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 28.749,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:35:bars-1-8",
    "title": "The Scotch Ramble",
    "key": "A",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 32,
    "chords": [
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 0,
        "durationBeats": 4
      },
      {
        "name": "E",
        "root": 4,
        "quality": "maj",
        "startBeat": 4,
        "durationBeats": 4
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 8,
        "durationBeats": 3
      },
      {
        "name": "E",
        "root": 4,
        "quality": "maj",
        "startBeat": 11,
        "durationBeats": 1
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 12,
        "durationBeats": 1
      },
      {
        "name": "E",
        "root": 4,
        "quality": "maj",
        "startBeat": 13,
        "durationBeats": 1
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 14,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 16,
        "durationBeats": 6
      },
      {
        "name": "E",
        "root": 4,
        "quality": "maj",
        "startBeat": 22,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 24,
        "durationBeats": 5
      },
      {
        "name": "E",
        "root": 4,
        "quality": "maj",
        "startBeat": 29,
        "durationBeats": 1
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 30,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 69,
        "startBeat": 0,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 0.25,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 0.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 1,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 1.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4.25,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 68,
        "startBeat": 5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 5.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 6,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 7,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 7.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 8,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 8.25,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 9,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 9.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 12,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 12.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 13.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14.25,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 15,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 16,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 16.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 17,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 17.5,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 80,
        "startBeat": 17.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 18,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 19,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 19.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 20.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 21,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 21.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 22,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 22.25,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 22.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 23,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 25,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 25.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 26,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 27,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 27.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 28,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 28.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 29,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 29.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 30,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 30.25,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 30.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 31,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:40:bars-1-8",
    "title": "Temperley Hornpipe",
    "key": "D",
    "meter": "2/2",
    "bars": 8,
    "durationBeats": 29,
    "chords": [
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 4
      },
      {
        "name": "Bm",
        "root": 11,
        "quality": "min",
        "startBeat": 9,
        "durationBeats": 4
      },
      {
        "name": "F#",
        "root": 6,
        "quality": "maj",
        "startBeat": 13,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 17,
        "durationBeats": 4
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 21,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 25,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 27,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 69,
        "startBeat": 0,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 0.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 2,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 3,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 3.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 4,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 6,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 7,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 7.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 8,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 8.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 9,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 10,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 83,
        "startBeat": 11,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 11.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 12,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 12.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 13,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 13.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 14,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 14.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 15,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 15.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 16,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 16.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 17,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 18,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 19,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 19.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 20,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 20.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 21,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 22,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 23,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 23.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 24,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 24.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 25,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 83,
        "startBeat": 25.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 26,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 26.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 27,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 27.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 28,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 28.75,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:41:bars-1-8",
    "title": "The Toastmaster",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 32,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 4,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 8,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 10,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 12,
        "durationBeats": 8
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 20,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 24,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 26,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 28,
        "durationBeats": 4
      }
    ],
    "notes": [
      {
        "pitch": 74,
        "startBeat": 0,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 2,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 4,
        "durationBeats": 3,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 8,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 9,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 9.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 13.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 14,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 15,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 15.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 16,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 18,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 19.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 20,
        "durationBeats": 3,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 25,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 25.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 26,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 27,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 27.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 28,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 29,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 30,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 30.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 31,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 31.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:42:bars-1-8",
    "title": "The Trouper",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 31,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 3,
        "durationBeats": 8
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 11,
        "durationBeats": 8
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 19,
        "durationBeats": 8
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 27,
        "durationBeats": 2
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 29,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 59,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 60,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 61,
        "startBeat": 2,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 3,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 6,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 6.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 7,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 8,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 9,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 63,
        "startBeat": 10,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 11,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 12,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 13,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 14,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 15,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 17,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 65,
        "startBeat": 18,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 19,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 20,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 21,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 22,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 22.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 23,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 24,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 26,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 27,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 28,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 29,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 63,
        "startBeat": 30,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:ashover:46:bars-1-8",
    "title": "Washtap Reel",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 31,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 3,
        "durationBeats": 12
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 15,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 19,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 23,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 25,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 27,
        "durationBeats": 4
      }
    ],
    "notes": [
      {
        "pitch": 62,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 2,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 3,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 6,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 7,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 8,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 9,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 10,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 11,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 13,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 14,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 15,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 16,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 17,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 18,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 19,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 20.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 21,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 22,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 24,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 25,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 26,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 27,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 28.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 29,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 30,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "ashover",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:1:bars-1-8",
    "title": "Aunt Hessie's White Horse",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 29,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 4
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 9,
        "durationBeats": 4
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 13,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 17,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 21,
        "durationBeats": 4
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 25,
        "durationBeats": 4
      }
    ],
    "notes": [
      {
        "pitch": 74,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 2,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 3,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 4,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 5.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 6.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 8,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 9,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 9.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 11,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 12,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 13.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 15,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 16,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 17,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 18,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 19,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 20,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 21,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 21.5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 22.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 24,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 25,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 26,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 27,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 28,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:2:bars-1-8",
    "title": "Barn Dance 1",
    "key": "D",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.998,
    "chords": [
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 0.999,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 4.999,
        "durationBeats": 4
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 8.999,
        "durationBeats": 4
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 12.999,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 16.999,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 20.999,
        "durationBeats": 4
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 24.999,
        "durationBeats": 3.999
      }
    ],
    "notes": [
      {
        "pitch": 78,
        "startBeat": 0,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 0.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 80,
        "startBeat": 0.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 0.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 1.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 2.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 3.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 5.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 68,
        "startBeat": 5.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 6.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 6.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 7.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 8.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 9.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 10.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 11.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 12.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 13.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 68,
        "startBeat": 13.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 14.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 15.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 16.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 17.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 18.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 19.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 20.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 21.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 68,
        "startBeat": 21.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 22.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 22.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 23.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 24.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 25.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 25.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 26.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 83,
        "startBeat": 26.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 27.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 27.999,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 28.332,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 28.665,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:3:bars-1-8",
    "title": "Barn Dance 2",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.998,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 3.999
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 8.999,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 10.999,
        "durationBeats": 2
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 12.999,
        "durationBeats": 2
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 14.999,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 16.999,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 20.999,
        "durationBeats": 3.999
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 24.998,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 26.998,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 74,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 3,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 5,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 5.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 5.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 5.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 6.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 6.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7.499,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 8.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 9.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 10.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 10.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 11.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 11.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 12.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 12.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 13.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 13.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 14.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 15.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 16.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 17.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 18.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 18.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 19.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 20.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 20.999,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 21.332,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 21.665,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 21.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 22.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 22.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23.498,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 24.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 25.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 26.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 26.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 27.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 27.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 28.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:4:bars-1-8",
    "title": "The Blackbird",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.998,
    "chords": [
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 0.999,
        "durationBeats": 4
      },
      {
        "name": "Bm",
        "root": 11,
        "quality": "min",
        "startBeat": 4.999,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 6.999,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 8.999,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 10.999,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 12.999,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 14.999,
        "durationBeats": 1.999
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 16.998,
        "durationBeats": 4
      },
      {
        "name": "Bm",
        "root": 11,
        "quality": "min",
        "startBeat": 20.998,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 22.998,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 24.998,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 26.998,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 62,
        "startBeat": 0,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 0.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 0.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 0.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 1.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 2.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 2.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 3.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 4.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 5.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 5.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 6.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 6.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 7.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 8.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 8.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 9.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 10.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 10.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 11.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 11.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 12.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 12.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 13.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 14.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 15.999,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 16.332,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 16.665,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 16.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 17.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 18.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 18.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 19.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 20.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 20.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 21.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 21.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 22.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 22.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 23.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 24.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 24.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 25.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 26.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 26.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 27.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 27.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 28.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:5:bars-1-8",
    "title": "Blue Bell Polka",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.998,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 0.999,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 4.999,
        "durationBeats": 4
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 8.999,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 12.999,
        "durationBeats": 2
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 14.999,
        "durationBeats": 1.999
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 16.998,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 20.998,
        "durationBeats": 4
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 24.998,
        "durationBeats": 4
      }
    ],
    "notes": [
      {
        "pitch": 71,
        "startBeat": 0,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 0.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 0.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 83,
        "startBeat": 0.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 83,
        "startBeat": 1.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 2.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 3.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 3.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 4.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 5.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 6.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 7.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 8.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 9.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 9.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 10.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 10.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 11.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 12.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 13.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 13.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 14.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 14.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 15.999,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 16.332,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 16.665,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 83,
        "startBeat": 16.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 83,
        "startBeat": 17.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 18.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 19.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 19.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 20.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 20.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 21.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 22.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 23.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 24.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 25.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 25.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 26.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 26.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 27.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 27.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 28.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:6:bars-1-8",
    "title": "Beaux of Oakhill",
    "key": "D",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.998,
    "chords": [
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 1.999
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 6.999,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 8.999,
        "durationBeats": 2
      },
      {
        "name": "A7/e",
        "root": 9,
        "quality": "dom7",
        "startBeat": 10.999,
        "durationBeats": 2
      },
      {
        "name": "D/f+",
        "root": 2,
        "quality": "maj",
        "startBeat": 12.999,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 14.999,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 16.999,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 20.999,
        "durationBeats": 1.999
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 22.998,
        "durationBeats": 2
      },
      {
        "name": "Bm",
        "root": 11,
        "quality": "min",
        "startBeat": 24.998,
        "durationBeats": 2
      },
      {
        "name": "A7/c+",
        "root": 9,
        "quality": "dom7",
        "startBeat": 26.998,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 74,
        "startBeat": 0,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 0.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 1,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 1.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 5.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 6,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 6.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 6.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 6.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 8.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 8.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 9.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 9.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 10.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 10.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 11.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 11.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 12.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 12.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 13.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 13.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 14.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 14.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 15.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 16.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 16.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 17.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 17.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 18.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 18.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 19.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 19.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 20.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 20.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 21.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 21.999,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 22.332,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 22.665,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 22.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 24.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 24.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 25.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 25.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 26.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 26.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 27.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 27.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 28.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:7:bars-1-8",
    "title": "Caber Feigh",
    "key": "C",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 29,
    "chords": [
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 4
      },
      {
        "name": "Dm",
        "root": 2,
        "quality": "min",
        "startBeat": 9,
        "durationBeats": 4
      },
      {
        "name": "Dm",
        "root": 2,
        "quality": "min",
        "startBeat": 13,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 17,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 21,
        "durationBeats": 4
      },
      {
        "name": "Dm",
        "root": 2,
        "quality": "min",
        "startBeat": 25,
        "durationBeats": 4
      }
    ],
    "notes": [
      {
        "pitch": 67,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 3,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 6,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 65,
        "startBeat": 6.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 7,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 60,
        "startBeat": 7.25,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 60,
        "startBeat": 8,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 9,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 9.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 11,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 13,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 65,
        "startBeat": 15,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 15.25,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 16,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 17,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 18,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 18.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 19,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 20.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 21,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 22,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 65,
        "startBeat": 22.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 23,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 60,
        "startBeat": 23.25,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 60,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 25,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 25.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 65,
        "startBeat": 26,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 27,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 27.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 28,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 28.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:8:bars-1-8",
    "title": "Castles in the Air",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.996,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 0.999,
        "durationBeats": 2
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 2.999,
        "durationBeats": 1.999
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 4.998,
        "durationBeats": 2
      },
      {
        "name": "G7",
        "root": 7,
        "quality": "dom7",
        "startBeat": 6.998,
        "durationBeats": 2
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 8.998,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 10.998,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 12.998,
        "durationBeats": 2
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 14.998,
        "durationBeats": 1.999
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 16.997,
        "durationBeats": 2
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 18.997,
        "durationBeats": 1.999
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 20.996,
        "durationBeats": 2
      },
      {
        "name": "G7",
        "root": 7,
        "quality": "dom7",
        "startBeat": 22.996,
        "durationBeats": 2
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 24.996,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 26.996,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 62,
        "startBeat": 0,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 0.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 0.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 0.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 1.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 2.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 2.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 3.999,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 4.332,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 4.665,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 4.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 5.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 5.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 6.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 6.998,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 8.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 9.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 9.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 10.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 10.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 11.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 11.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 12.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 12.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 13.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 13.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 14.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 14.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 15.998,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 16.331,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 16.664,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 16.997,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 17.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 18.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 18.997,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 19.997,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 20.33,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 20.663,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 20.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 21.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 21.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 22.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 22.996,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 24.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 25.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 25.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 26.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 26.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 27.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 27.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 28.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:9:bars-1-8",
    "title": "Colosseum",
    "key": "A",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 29,
    "chords": [
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 2
      },
      {
        "name": "E7",
        "root": 4,
        "quality": "dom7",
        "startBeat": 3,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 7,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 9,
        "durationBeats": 4
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 13,
        "durationBeats": 2
      },
      {
        "name": "E7",
        "root": 4,
        "quality": "dom7",
        "startBeat": 15,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 17,
        "durationBeats": 2
      },
      {
        "name": "E7",
        "root": 4,
        "quality": "dom7",
        "startBeat": 19,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 21,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 23,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 25,
        "durationBeats": 2
      },
      {
        "name": "E7",
        "root": 4,
        "quality": "dom7",
        "startBeat": 27,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 64,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 2,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 6,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 7,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 7.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 8,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 9,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 9.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 80,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 13.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 14,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 15,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 15.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 68,
        "startBeat": 16,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 16.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 17,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 18,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 19,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 19.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 20.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 21,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 22,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 23,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 23.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 25,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 25.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 80,
        "startBeat": 26,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 27,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 27.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 28,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 28.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:10:bars-1-8",
    "title": "The Cuckoo",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.998,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 2
      },
      {
        "name": "D7/a",
        "root": 2,
        "quality": "dom7",
        "startBeat": 3,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 9,
        "durationBeats": 2
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 11,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 13,
        "durationBeats": 1.998
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 14.998,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 16.998,
        "durationBeats": 2
      },
      {
        "name": "D7/a",
        "root": 2,
        "quality": "dom7",
        "startBeat": 18.998,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 20.998,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 24.998,
        "durationBeats": 2
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 26.998,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 67,
        "startBeat": 0,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 0.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 1,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 1.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 5.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 6,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 6.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 7.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 8,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 9,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 13,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 13.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 13.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 13.999,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 14.332,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 14.665,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 14.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 15.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 16.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 16.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 17.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 17.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 18.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 18.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 19.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 19.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 20.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 20.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 21.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 21.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 22.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 22.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 23.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 23.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 24.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 24.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 25.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 26.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 26.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 27.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 27.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 28.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:11:bars-1-8",
    "title": "Cuckoo's Nest",
    "key": "Dm",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 31,
    "chords": [
      {
        "name": "Dm",
        "root": 2,
        "quality": "min",
        "startBeat": 0,
        "durationBeats": 4
      },
      {
        "name": "Dm",
        "root": 2,
        "quality": "min",
        "startBeat": 4,
        "durationBeats": 3
      },
      {
        "name": "C7",
        "root": 0,
        "quality": "dom7",
        "startBeat": 7,
        "durationBeats": 1
      },
      {
        "name": "F",
        "root": 5,
        "quality": "maj",
        "startBeat": 8,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 12,
        "durationBeats": 3
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 15,
        "durationBeats": 1
      },
      {
        "name": "Dm",
        "root": 2,
        "quality": "min",
        "startBeat": 16,
        "durationBeats": 4
      },
      {
        "name": "Dm",
        "root": 2,
        "quality": "min",
        "startBeat": 20,
        "durationBeats": 3
      },
      {
        "name": "C7",
        "root": 0,
        "quality": "dom7",
        "startBeat": 23,
        "durationBeats": 1
      },
      {
        "name": "F",
        "root": 5,
        "quality": "maj",
        "startBeat": 24,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 26,
        "durationBeats": 2
      },
      {
        "name": "Dm",
        "root": 2,
        "quality": "min",
        "startBeat": 28,
        "durationBeats": 1
      },
      {
        "name": "Gm",
        "root": 7,
        "quality": "min",
        "startBeat": 29,
        "durationBeats": 1
      },
      {
        "name": "Dm",
        "root": 2,
        "quality": "min",
        "startBeat": 30,
        "durationBeats": 1
      }
    ],
    "notes": [
      {
        "pitch": 62,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 1,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 1.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 60,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 57,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 60,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 60,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 5.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 65,
        "startBeat": 6,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 65,
        "startBeat": 7,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 7.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 8,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 9,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 9.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 10,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 65,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 60,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 60,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 60,
        "startBeat": 13.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 60,
        "startBeat": 14,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 65,
        "startBeat": 15,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 15.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 16,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 17,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 17.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 18,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 60,
        "startBeat": 18.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 57,
        "startBeat": 19,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 60,
        "startBeat": 19.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 60,
        "startBeat": 20.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 21,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 21.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 65,
        "startBeat": 22,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 65,
        "startBeat": 23,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 23.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 25,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 25.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 26,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 65,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 27,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 65,
        "startBeat": 27.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 28,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 29,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 30,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:12:bars-1-8",
    "title": "Down the Glen",
    "key": "D",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.991,
    "chords": [
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 3,
        "durationBeats": 1.999
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 4.999,
        "durationBeats": 3.999
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 8.998,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 10.998,
        "durationBeats": 1.999
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 12.997,
        "durationBeats": 1.998
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 14.995,
        "durationBeats": 1.998
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 16.993,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 18.993,
        "durationBeats": 1.999
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 20.992,
        "durationBeats": 3.999
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 24.991,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 26.991,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 69,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 1,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 1.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 4.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 4.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 5.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 5.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 6.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 6.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 7.999,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 8.332,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 75,
        "startBeat": 8.665,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 8.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 9.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 9.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 10.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 10.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 11.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 11.998,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 80,
        "startBeat": 12.331,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 12.664,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 12.997,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 13.33,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 13.663,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 13.996,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 14.329,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 14.662,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14.995,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 15.328,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 15.661,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 15.994,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 16.327,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 16.66,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 16.993,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 17.493,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 17.993,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 18.493,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 18.993,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 19.493,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 19.993,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 20.326,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 20.659,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 20.992,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 21.492,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 21.992,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 22.492,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 22.992,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 23.992,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 24.325,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 75,
        "startBeat": 24.658,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 24.991,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 25.491,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 25.991,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 26.491,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 26.991,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 27.491,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 27.991,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 28.491,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:13:bars-1-8",
    "title": "Fisher's Hornpipe",
    "key": "D",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.998,
    "chords": [
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 0.999,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 2.999,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 4.999,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 6.999,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 8.999,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 10.999,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 12.999,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 14.999,
        "durationBeats": 1.999
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 16.998,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 18.998,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 20.998,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 22.998,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 24.998,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 26.998,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 69,
        "startBeat": 0,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 0.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 0.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 0.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 1.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 1.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 2.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 2.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 3.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 3.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 4.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 4.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 5.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 5.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 6.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 6.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 7.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 7.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 8.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 8.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 9.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 9.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 10.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 10.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 11.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 11.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 12.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 12.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 13.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 13.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 14.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 14.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 15.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 15.999,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 16.332,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 16.665,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 16.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 17.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 17.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 18.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 18.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 19.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 19.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 20.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 20.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 21.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 21.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 22.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 22.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 23.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 23.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 24.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 24.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 25.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 25.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 26.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 26.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 27.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 27.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 28.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:14:bars-1-8",
    "title": "The Friendly Visit",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.996,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 3.999
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 4.999,
        "durationBeats": 1.999
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 6.998,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 8.998,
        "durationBeats": 2
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 10.998,
        "durationBeats": 2
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 12.998,
        "durationBeats": 2
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 14.998,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 16.998,
        "durationBeats": 3.999
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 20.997,
        "durationBeats": 1.999
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 22.996,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 24.996,
        "durationBeats": 2
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 26.996,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 71,
        "startBeat": 0,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 0.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 1,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 1.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 1.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 1.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 2.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 2.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 3.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 3.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 4.999,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 5.332,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 5.665,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 5.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 6.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 6.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 7.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 8.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 8.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 9.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 10.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 10.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 11.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 11.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 12.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 12.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 13.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 13.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 14.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 14.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 15.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 15.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 16.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 16.998,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 17.331,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 17.664,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 17.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 18.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 18.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 19.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 19.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 20.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 20.997,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 21.33,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 21.663,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 21.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 22.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 22.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 23.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 24.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 24.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 25.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 25.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 26.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 26.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 27.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 27.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 28.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:15:bars-1-8",
    "title": "Gilderoy",
    "key": "Am",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.999,
    "chords": [
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 5,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 7,
        "durationBeats": 2
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 9,
        "durationBeats": 4
      },
      {
        "name": "E7",
        "root": 4,
        "quality": "dom7",
        "startBeat": 13,
        "durationBeats": 3.999
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 16.999,
        "durationBeats": 4
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 20.999,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 22.999,
        "durationBeats": 2
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 24.999,
        "durationBeats": 2
      },
      {
        "name": "E7",
        "root": 4,
        "quality": "dom7",
        "startBeat": 26.999,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 64,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 5.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 6,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 6.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 8,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 9,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 9.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 68,
        "startBeat": 13.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 14,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 15,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 16,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 16.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 16.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 16.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 68,
        "startBeat": 17.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 17.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 18.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 18.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 19.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 19.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 20.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 20.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 21.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 21.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 22.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 22.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 23.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 24.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 24.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 25.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 80,
        "startBeat": 25.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 26.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 26.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 27.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 27.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 28.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:16:bars-1-8",
    "title": "Gipsy's Hornpipe",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.997,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 1.999
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 6.999,
        "durationBeats": 2
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 8.999,
        "durationBeats": 4
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 12.999,
        "durationBeats": 2
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 14.999,
        "durationBeats": 1.999
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 16.998,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 20.998,
        "durationBeats": 1.999
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 22.997,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 24.997,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 26.997,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 74,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 1,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 1.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 5.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 6,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 6.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 6.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 6.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 7.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 8.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 8.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 9.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 9.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 10.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 10.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 11.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 11.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 12.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 12.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 13.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 15.999,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 16.332,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 16.665,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 16.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 17.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 17.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 18.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 18.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 19.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 19.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 20.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 20.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 21.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 21.998,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 22.331,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 22.664,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 22.997,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 23.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 24.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 24.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 25.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 25.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 26.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 26.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 27.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 27.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 28.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:17:bars-1-8",
    "title": "Green Grow the Rushes",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 29,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 5,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 7,
        "durationBeats": 2
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 9,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 11,
        "durationBeats": 2
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 13,
        "durationBeats": 2
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 15,
        "durationBeats": 2
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 17,
        "durationBeats": 2
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 19,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 21,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 25,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 27,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 62,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 3,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 3.25,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 5,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 5.25,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 6,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 6.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 7,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 7.25,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 8,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 9,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 9.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 13.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 14,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 15,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 15.25,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 16,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 17,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 17.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 18,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 18.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 19,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 19.25,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 20,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 21,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 22,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 22.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 23,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23.25,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 25,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 25.25,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 26,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 27,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 27.25,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 28,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 28.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:18:bars-1-8",
    "title": "Greencastle Hornpipe",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.998,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 1.999
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 6.999,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 8.999,
        "durationBeats": 4
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 12.999,
        "durationBeats": 2
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 14.999,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 16.999,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 20.999,
        "durationBeats": 1.999
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 22.998,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 24.998,
        "durationBeats": 2
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 26.998,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 74,
        "startBeat": 0,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 0.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 1,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 1.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 5,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 5.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 5.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 5.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 6.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 6.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 8.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 8.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 9.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 9.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 10.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 10.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 11.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 11.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 12.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 12.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 13.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 13.999,
        "durationBeats": 0.25,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 14.249,
        "durationBeats": 0.75,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 15.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 16.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 16.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 17.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 17.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 18.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 18.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 19.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 19.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 20.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 20.999,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 21.332,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 21.665,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 21.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 22.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 22.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 24.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 24.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 25.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 25.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 26.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 26.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 27.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 27.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 28.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:19:bars-1-8",
    "title": "Humours of California",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.996,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 0.999,
        "durationBeats": 2
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 2.999,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 4.999,
        "durationBeats": 2
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 6.999,
        "durationBeats": 1
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 7.999,
        "durationBeats": 0.999
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 8.998,
        "durationBeats": 2
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 10.998,
        "durationBeats": 2
      },
      {
        "name": "Am",
        "root": 9,
        "quality": "min",
        "startBeat": 12.998,
        "durationBeats": 2
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 14.998,
        "durationBeats": 1.999
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 16.997,
        "durationBeats": 2
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 18.997,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 20.997,
        "durationBeats": 2
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 22.997,
        "durationBeats": 1
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 23.997,
        "durationBeats": 0.999
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 24.996,
        "durationBeats": 2
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 26.996,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 62,
        "startBeat": 0,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 0.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 0.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 0.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 1.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 1.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 2.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 2.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 3.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 3.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 4.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 4.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 5.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 5.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 6.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 6.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7.999,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 8.332,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 8.665,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 8.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 9.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 9.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 10.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 10.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 11.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 11.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 12.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 12.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 13.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 13.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 14.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 14.998,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 15.998,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 16.331,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 16.664,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 16.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 17.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 17.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 18.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 18.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 19.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 19.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 20.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 20.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 21.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 21.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 22.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 22.997,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23.997,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 24.33,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 24.663,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 24.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 25.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 25.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 26.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 26.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 27.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 27.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 28.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:20:bars-1-8",
    "title": "Hamish",
    "key": "D",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.994,
    "chords": [
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 0.999,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 2.999,
        "durationBeats": 1.999
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 4.998,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 6.998,
        "durationBeats": 2
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 8.998,
        "durationBeats": 4
      },
      {
        "name": "E7",
        "root": 4,
        "quality": "dom7",
        "startBeat": 12.998,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 14.998,
        "durationBeats": 1.999
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 16.997,
        "durationBeats": 2
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 18.997,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 20.997,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 24.997,
        "durationBeats": 1.999
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 26.996,
        "durationBeats": 1.998
      }
    ],
    "notes": [
      {
        "pitch": 69,
        "startBeat": 0,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 0.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 0.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 0.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 1.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 1.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 2.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 2.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 3.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 3.999,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4.332,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 4.665,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 5.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 5.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 6.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 6.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 7.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 7.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 8.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 8.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 9.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 9.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 10.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 10.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 11.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 11.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 12.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 12.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 13.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 13.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 14.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14.998,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 15.498,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 15.998,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 16.331,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 16.664,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 16.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 17.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 17.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 18.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 18.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 75,
        "startBeat": 19.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 19.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 20.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 20.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 77,
        "startBeat": 21.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 21.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 22.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 22.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 23.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23.997,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 24.497,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 24.997,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 25.33,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 25.663,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 25.996,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 26.496,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 26.996,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 27.329,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 27.662,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 27.995,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 28.328,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 28.661,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:21:bars-1-8",
    "title": "Harvest Home",
    "key": "D",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 29,
    "chords": [
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 4
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 9,
        "durationBeats": 4
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 13,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 15,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 17,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 21,
        "durationBeats": 4
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 25,
        "durationBeats": 4
      }
    ],
    "notes": [
      {
        "pitch": 69,
        "startBeat": 0,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 0.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 1,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 1.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 5.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 6,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 6.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 7.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 8,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 9,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 9.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 13.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 14,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 15,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 15.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 16,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 16.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 17,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 17.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 18,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 18.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 19,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 19.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 20.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 21,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 21.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 22,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 22.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 23.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 25,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 25.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 26,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 27,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 27.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 28,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 28.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:22:bars-1-8",
    "title": "The High Level",
    "key": "G",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 29,
    "chords": [
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 4
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 9,
        "durationBeats": 4
      },
      {
        "name": "D7",
        "root": 2,
        "quality": "dom7",
        "startBeat": 13,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 17,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 21,
        "durationBeats": 4
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 25,
        "durationBeats": 4
      }
    ],
    "notes": [
      {
        "pitch": 71,
        "startBeat": 0,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 0.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 1,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 1.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 59,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 5.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 6,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 6.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 7,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 7.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 8,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 9,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 9.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 13.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 14,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 15,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 15.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 16,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 16.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 17,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 17.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 18,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 18.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 59,
        "startBeat": 19,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 19.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 20.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 21,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 21.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 22,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 22.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 23,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 23.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 25,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 25.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 26,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 27,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 27.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 28,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 28.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:24:bars-1-8",
    "title": "John Peel",
    "key": "A",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 29,
    "chords": [
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 4
      },
      {
        "name": "E7",
        "root": 4,
        "quality": "dom7",
        "startBeat": 9,
        "durationBeats": 4
      },
      {
        "name": "E7",
        "root": 4,
        "quality": "dom7",
        "startBeat": 13,
        "durationBeats": 4
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 17,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 21,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 23,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 25,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 27,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 73,
        "startBeat": 0,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 0.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 2,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 3,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 6,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 7,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 8,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 9,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 10,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 11,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 13,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 14,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 15,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 16,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 16.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 17,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 18,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 19,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 20.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 80,
        "startBeat": 21,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 22,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 23,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 25,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 26,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 27,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 68,
        "startBeat": 28,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 28.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:25:bars-1-8",
    "title": "John Peel Variations",
    "key": "A",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 29,
    "chords": [
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 4
      },
      {
        "name": "E7",
        "root": 4,
        "quality": "dom7",
        "startBeat": 9,
        "durationBeats": 4
      },
      {
        "name": "E7",
        "root": 4,
        "quality": "dom7",
        "startBeat": 13,
        "durationBeats": 4
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 17,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 21,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 23,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 25,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 27,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 73,
        "startBeat": 0,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 0.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 2,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 3,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 6,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 7,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 8,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 9,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 10,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 11,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 13,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 14,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 15,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 16,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 16.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 17,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 18,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 19,
        "durationBeats": 1.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 20.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 80,
        "startBeat": 21,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 22,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 23,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 25,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 26,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 27,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 68,
        "startBeat": 28,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 28.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:28:bars-1-8",
    "title": "King of the Fairies",
    "key": "Em",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 29,
    "chords": [
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 5,
        "durationBeats": 4
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 9,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 13,
        "durationBeats": 4
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 17,
        "durationBeats": 2
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 19,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 21,
        "durationBeats": 4
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 25,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 27,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 71,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 3,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 6,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 7,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 7.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 8,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 9,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 10,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 13.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 15,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 59,
        "startBeat": 16,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 17,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 17.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 18,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 18.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 19,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 19.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 20.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 21,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 21.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 22,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 22.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 25,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 26,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 27,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 27.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 28,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 28.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:29:bars-1-8",
    "title": "King of the Fairies",
    "key": "Em",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.999,
    "chords": [
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 5,
        "durationBeats": 2
      },
      {
        "name": "B7",
        "root": 11,
        "quality": "dom7",
        "startBeat": 7,
        "durationBeats": 2
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 9,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 13,
        "durationBeats": 4
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 17,
        "durationBeats": 2
      },
      {
        "name": "C",
        "root": 0,
        "quality": "maj",
        "startBeat": 19,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 21,
        "durationBeats": 3.999
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 24.999,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 26.999,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 71,
        "startBeat": 0,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 1,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 1.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 5,
        "durationBeats": 2,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 7,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 7.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 8,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 9,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 10,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 13.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 14,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 15,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 59,
        "startBeat": 16,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 17,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 17.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 18,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 18.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 19,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 19.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 20.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 21,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 21.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 22,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 22.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 24,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 24.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 24.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 24.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 25.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 26.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 27.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 27.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 28.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:30:bars-1-8",
    "title": "Kitty O'Niel",
    "key": "A",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.999,
    "chords": [
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 0.999,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 4.999,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 6.999,
        "durationBeats": 2
      },
      {
        "name": "E7",
        "root": 4,
        "quality": "dom7",
        "startBeat": 8.999,
        "durationBeats": 4
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 12.999,
        "durationBeats": 1
      },
      {
        "name": "E7",
        "root": 4,
        "quality": "dom7",
        "startBeat": 13.999,
        "durationBeats": 1
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 14.999,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 16.999,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 20.999,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 22.999,
        "durationBeats": 2
      },
      {
        "name": "E7",
        "root": 4,
        "quality": "dom7",
        "startBeat": 24.999,
        "durationBeats": 4
      }
    ],
    "notes": [
      {
        "pitch": 76,
        "startBeat": 0,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 0.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 80,
        "startBeat": 0.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 0.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 80,
        "startBeat": 1.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 2.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 3.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 4.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 5.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 5.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 6.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 6.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 7.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 8.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 8.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 9.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 10.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 11.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 12.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 13.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 68,
        "startBeat": 13.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 14.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 14.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 15.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 15.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 80,
        "startBeat": 16.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 16.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 80,
        "startBeat": 17.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 18.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 19.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 20.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 21.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 21.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 22.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 22.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 23.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 24.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 24.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 25.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 26.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 27.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:31:bars-1-8",
    "title": "Kitty O'Niel's Champion",
    "key": "A",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 29,
    "chords": [
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 4
      },
      {
        "name": "Bm",
        "root": 11,
        "quality": "min",
        "startBeat": 9,
        "durationBeats": 4
      },
      {
        "name": "Bm",
        "root": 11,
        "quality": "min",
        "startBeat": 13,
        "durationBeats": 2
      },
      {
        "name": "E7",
        "root": 4,
        "quality": "dom7",
        "startBeat": 15,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 17,
        "durationBeats": 4
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 21,
        "durationBeats": 4
      },
      {
        "name": "Bm",
        "root": 11,
        "quality": "min",
        "startBeat": 25,
        "durationBeats": 4
      }
    ],
    "notes": [
      {
        "pitch": 69,
        "startBeat": 0,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 0.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 2,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 3,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 4,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 5.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 6,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 6.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 7,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 7.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 8,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 9,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 10,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 11,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 12,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 13.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 80,
        "startBeat": 14,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 15,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 15.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 16,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 16.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 17,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 18,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 19,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 20,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 21,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 72,
        "startBeat": 21.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 22,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 22.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 23,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 23.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 25,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 70,
        "startBeat": 26,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 27,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 28,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:33:bars-1-8",
    "title": "Liverpool Hornpipe",
    "key": "D",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 29,
    "chords": [
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 7,
        "durationBeats": 2
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 9,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 11,
        "durationBeats": 2
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 13,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 15,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 17,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 21,
        "durationBeats": 2
      },
      {
        "name": "A",
        "root": 9,
        "quality": "maj",
        "startBeat": 23,
        "durationBeats": 2
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 25,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 27,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 69,
        "startBeat": 0,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 0.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 1,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 1.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 5.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 6,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 6.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 7.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 8,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 9,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 11,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 13,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 13.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 14,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 15,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 15.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 16,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 16.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 17,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 62,
        "startBeat": 17.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 18,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 18.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 19,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 19.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 20,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 20.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 21,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 21.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 22,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 22.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 23,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 23.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 24,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 24.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 25,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 25.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 26,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 26.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 83,
        "startBeat": 27,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 27.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 28,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 28.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  },
  {
    "id": "nottingham:hpps:34:bars-1-8",
    "title": "Londonderry Hornpipe",
    "key": "D",
    "meter": "4/4",
    "bars": 8,
    "durationBeats": 28.999,
    "chords": [
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 1,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 5,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 9,
        "durationBeats": 4
      },
      {
        "name": "Em",
        "root": 4,
        "quality": "min",
        "startBeat": 13,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 15,
        "durationBeats": 1.999
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 16.999,
        "durationBeats": 4
      },
      {
        "name": "G",
        "root": 7,
        "quality": "maj",
        "startBeat": 20.999,
        "durationBeats": 4
      },
      {
        "name": "D",
        "root": 2,
        "quality": "maj",
        "startBeat": 24.999,
        "durationBeats": 2
      },
      {
        "name": "A7",
        "root": 9,
        "quality": "dom7",
        "startBeat": 26.999,
        "durationBeats": 2
      }
    ],
    "notes": [
      {
        "pitch": 69,
        "startBeat": 0,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 0.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 1,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 2,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 2.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 3,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 3.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 4,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 4.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 5,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 6,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 6.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 7,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 7.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 8,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 8.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 9,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 10,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 10.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 11,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 11.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 12,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 12.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 64,
        "startBeat": 13,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 14,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 14.5,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 15,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 15.333,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 15.666,
        "durationBeats": 0.333,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 15.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 16.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 16.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 17.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 18.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 18.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 19.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 69,
        "startBeat": 19.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 66,
        "startBeat": 20.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 67,
        "startBeat": 20.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 21.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 22.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 22.999,
        "durationBeats": 1,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 23.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 24.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 24.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 81,
        "startBeat": 25.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 78,
        "startBeat": 25.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 74,
        "startBeat": 26.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 71,
        "startBeat": 26.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 79,
        "startBeat": 27.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 76,
        "startBeat": 27.999,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      },
      {
        "pitch": 73,
        "startBeat": 28.499,
        "durationBeats": 0.5,
        "velocity": 0.78,
        "track": "melody"
      }
    ],
    "provenance": {
      "dataset": "Nottingham Dataset",
      "subset": "hpps",
      "license": "GPL-3.0"
    }
  }
];
