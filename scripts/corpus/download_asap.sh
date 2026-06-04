#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
RAW_DIR="$ROOT_DIR/corpus-lab/raw/asap"
ZIP_PATH="$RAW_DIR/asap-dataset-master.zip"
URL="https://github.com/fosfrancesco/asap-dataset/archive/refs/heads/master.zip"

mkdir -p "$RAW_DIR"

echo "Downloading ASAP repository archive..."
curl -L --retry 3 --connect-timeout 20 --speed-time 60 --speed-limit 1024 --continue-at - -o "$ZIP_PATH" "$URL"

echo "Saved: $ZIP_PATH"
echo "Extract with: unzip -q \"$ZIP_PATH\" -d \"$RAW_DIR\""
