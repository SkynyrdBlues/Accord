#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
RAW_DIR="$ROOT_DIR/corpus-lab/raw/pop909"
ZIP_PATH="$RAW_DIR/POP909.zip"
URL="https://github.com/music-x-lab/POP909-Dataset/raw/master/POP909.zip"

mkdir -p "$RAW_DIR"

echo "Downloading POP909..."
curl -L --retry 3 --connect-timeout 20 --speed-time 60 --speed-limit 1024 --continue-at - -o "$ZIP_PATH" "$URL"

echo "Saved: $ZIP_PATH"
echo "Extract with: unzip -q \"$ZIP_PATH\" -d \"$RAW_DIR\""
