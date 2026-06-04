#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
RAW_DIR="$ROOT_DIR/corpus-lab/raw/giantmidi-piano"
ZIP_PATH="$RAW_DIR/giantmidi-piano-master.zip"
URL="https://github.com/bytedance/GiantMIDI-Piano/archive/refs/heads/master.zip"

mkdir -p "$RAW_DIR"

echo "Downloading GiantMIDI-Piano repository archive..."
curl -L --retry 3 --connect-timeout 20 --speed-time 60 --speed-limit 1024 --continue-at - -o "$ZIP_PATH" "$URL"

echo "Saved: $ZIP_PATH"
echo "Stable MIDI data requires reading and accepting the repository disclaimer."
