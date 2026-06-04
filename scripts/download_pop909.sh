#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RAW_DIR="$ROOT_DIR/data/raw"
ZIP_PATH="$RAW_DIR/POP909.zip"

mkdir -p "$RAW_DIR"

echo "Downloading POP909 dataset ZIP..."
curl -L -o "$ZIP_PATH" "https://github.com/music-x-lab/POP909-Dataset/raw/master/POP909.zip"

echo "Saved to $ZIP_PATH"
echo "You can extract it with: unzip -q data/raw/POP909.zip -d data/raw/POP909"
