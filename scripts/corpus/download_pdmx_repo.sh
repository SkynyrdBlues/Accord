#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
RAW_DIR="$ROOT_DIR/corpus-lab/raw/pdmx"
ZIP_PATH="$RAW_DIR/pdmx-main.zip"
URL="https://github.com/pnlong/PDMX/archive/refs/heads/main.zip"

mkdir -p "$RAW_DIR"

echo "Downloading PDMX code/metadata repository archive..."
curl -L --retry 3 --connect-timeout 20 --speed-time 60 --speed-limit 1024 --continue-at - -o "$ZIP_PATH" "$URL"

echo "Saved: $ZIP_PATH"
echo "Full PDMX data is on Zenodo. Prefer no_license_conflict/all_valid subsets before bulk download."
