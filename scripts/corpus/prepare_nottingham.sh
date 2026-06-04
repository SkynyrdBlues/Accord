#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
RAW_DIR="$ROOT_DIR/corpus-lab/raw/nottingham"
ZIP_PATH="$RAW_DIR/nottingham-dataset-master.zip"
EXTRACTED_DIR="$RAW_DIR/nottingham-dataset-master"

if [ ! -d "$EXTRACTED_DIR" ]; then
  if [ ! -f "$ZIP_PATH" ]; then
    echo "Missing Nottingham ZIP. Run: bash scripts/corpus/download_nottingham.sh"
    exit 1
  fi
  unzip -q "$ZIP_PATH" -d "$RAW_DIR"
fi

node "$ROOT_DIR/scripts/corpus/parse_nottingham.mjs" --phrase-bars 8
