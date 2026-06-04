#!/bin/sh
set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
PROJECT_DIR=$(CDPATH= cd -- "$SCRIPT_DIR/.." && pwd)

cd "$PROJECT_DIR"

NODE_MAJOR=$(node -v 2>/dev/null | sed 's/^v//' | cut -d. -f1 || echo 0)
NODE22_BIN="/Users/adityakumar/.nvm/versions/node/v22.18.0/bin"

if [ "${NODE_MAJOR:-0}" -lt 22 ] && [ -x "$NODE22_BIN/node" ]; then
  PATH="$NODE22_BIN:$PATH"
  export PATH
fi

if [ -f .env ]; then
  set -a
  # shellcheck disable=SC1091
  . ./.env
  set +a
fi

if [ -z "${API_KEY:-}" ] && [ -n "${VITE_TESTSPRITE_KEY:-}" ]; then
  API_KEY="$VITE_TESTSPRITE_KEY"
  export API_KEY
fi

if [ -z "${API_KEY:-}" ]; then
  echo "Missing TestSprite API key. Set VITE_TESTSPRITE_KEY in .env or API_KEY in the environment." >&2
  exit 1
fi

exec npx @testsprite/testsprite-mcp@latest "$@"
