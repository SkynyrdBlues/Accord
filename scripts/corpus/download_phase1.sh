#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Phase 1 corpus downloads: Nottingham, POP909, MAESTRO MIDI, ASAP, DCML ABC"
echo "This fetches official archives only. Raw files are ignored by git."

bash "$SCRIPT_DIR/download_nottingham.sh"
bash "$SCRIPT_DIR/download_pop909.sh"
bash "$SCRIPT_DIR/download_maestro_midi.sh"
bash "$SCRIPT_DIR/download_asap.sh"
bash "$SCRIPT_DIR/download_dcml_abc.sh"

echo "Phase 1 downloads finished."
