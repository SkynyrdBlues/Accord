#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
RAW_DIR="$ROOT_DIR/corpus-lab/raw/choco"
ZIP_PATH="$RAW_DIR/choco-main.zip"
URL="https://github.com/smashub/choco/archive/refs/heads/main.zip"

mkdir -p "$RAW_DIR"

echo "Downloading ChoCo repository archive..."
curl -L --retry 3 --connect-timeout 20 --speed-time 60 --speed-limit 1024 --continue-at - -o "$ZIP_PATH" "$URL"

echo "Saved: $ZIP_PATH"
echo "For production, prefer the latest ChoCo release JAMS package when selecting subsets."
