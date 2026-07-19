#!/bin/bash
set -euo pipefail

# Solo se ejecuta en Claude Code en la web (entorno remoto)
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

# Instala las dependencias para que lint y build funcionen en la sesión
npm install --no-audit --no-fund
