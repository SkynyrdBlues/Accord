#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
RAW_DIR="$ROOT_DIR/corpus-lab/raw/pop909"
ZIP_PATH="$RAW_DIR/POP909.zip"
DATASET_DIR="$RAW_DIR/POP909"

if [ ! -d "$DATASET_DIR" ]; then
  if [ ! -f "$ZIP_PATH" ]; then
    echo "Missing POP909 ZIP. Run: bash scripts/corpus/download_pop909.sh"
    exit 1
  fi
  unzip -q "$ZIP_PATH" -d "$RAW_DIR"
fi

node "$ROOT_DIR/scripts/corpus/parse_pop909.mjs"
