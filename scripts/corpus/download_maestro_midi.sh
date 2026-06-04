#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
RAW_DIR="$ROOT_DIR/corpus-lab/raw/maestro"
ZIP_PATH="$RAW_DIR/maestro-v3.0.0-midi.zip"
CSV_PATH="$RAW_DIR/maestro-v3.0.0.csv"
JSON_PATH="$RAW_DIR/maestro-v3.0.0.json"

mkdir -p "$RAW_DIR"

echo "Downloading MAESTRO v3.0.0 MIDI-only archive..."
curl -L --retry 3 --connect-timeout 20 --speed-time 60 --speed-limit 1024 --continue-at - -o "$ZIP_PATH" "https://storage.googleapis.com/magentadata/datasets/maestro/v3.0.0/maestro-v3.0.0-midi.zip"

echo "Downloading MAESTRO metadata..."
curl -L --retry 3 --connect-timeout 20 --speed-time 60 --speed-limit 1024 -o "$CSV_PATH" "https://storage.googleapis.com/magentadata/datasets/maestro/v3.0.0/maestro-v3.0.0.csv"
curl -L --retry 3 --connect-timeout 20 --speed-time 60 --speed-limit 1024 -o "$JSON_PATH" "https://storage.googleapis.com/magentadata/datasets/maestro/v3.0.0/maestro-v3.0.0.json"

echo "Saved MAESTRO files under: $RAW_DIR"
echo "Extract with: unzip -q \"$ZIP_PATH\" -d \"$RAW_DIR\""
