#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Append the Design QA block to the staging theme sheet.
#
# Append-only: never replaces the file, never touches anything else.
# Idempotent: aborts if the block is already there. Backs up first.
#
#   ./deploy.sh              # do it
#   ./deploy.sh --dry-run    # show what it would do
#
# Override targets if the environment changes:
#   WPE_SSH_HOST=oceanviewstg.ssh.wpengine.net WPE_SSH_USER=oceanviewstg ./deploy.sh
# ---------------------------------------------------------------------------
set -euo pipefail

HOST="${WPE_SSH_HOST:-oceanviewstg.ssh.wpengine.net}"
SSH_USER="${WPE_SSH_USER:-oceanviewstg}"
THEME_REL="wp-content/themes/oceanviewlife"
SHEET="oceanview-wpbakery.css"
MARKER="DESIGN QA — layout parity with the React prototype"

HERE="$(cd "$(dirname "$0")" && pwd)"
BLOCK="$HERE/oceanview-wpbakery.append.css"
REMOTE_BLOCK="/tmp/ov-qa-append-$$.css"
DRY_RUN=0
[ "${1:-}" = "--dry-run" ] && DRY_RUN=1

[ -f "$BLOCK" ] || { echo "✗ missing append block: $BLOCK"; exit 1; }
BLOCK_LINES=$(wc -l < "$BLOCK" | tr -d ' ')
BLOCK_SHA=$(shasum -a 256 "$BLOCK" | awk '{print $1}')

echo "→ target   : $SSH_USER@$HOST"
echo "→ theme    : ~/$THEME_REL/$SHEET"
echo "→ block    : $BLOCK_LINES lines, sha256 ${BLOCK_SHA:0:12}…"
[ $DRY_RUN -eq 1 ] && echo "→ DRY RUN: no changes will be made"

# 1. Prove SSH works before touching anything.
if ! ssh -o BatchMode=yes -o ConnectTimeout=10 "$SSH_USER@$HOST" 'echo ok' >/dev/null 2>&1; then
  echo "✗ cannot SSH to $SSH_USER@$HOST (publickey)."
  echo "  Add this machine's key in the WPE portal → SSH Keys:"
  echo "  $(cat "$HOME/.ssh/id_ed25519.pub" 2>/dev/null || echo '(no ~/.ssh/id_ed25519.pub)')"
  exit 1
fi

# 2. Copy the block up (only the block — 6KB, not the 279KB sheet).
if [ $DRY_RUN -eq 0 ]; then
  scp -q "$BLOCK" "$SSH_USER@$HOST:$REMOTE_BLOCK"
fi

# 3. Append on the remote, guarded.
ssh "$SSH_USER@$HOST" "bash -s" <<REMOTE
set -euo pipefail
cd ~
if [ ! -f "$THEME_REL/$SHEET" ]; then
  echo "✗ $THEME_REL/$SHEET not found from \$(pwd)"
  echo "  listing candidates:"
  find / -maxdepth 7 -type f -name "$SHEET" -path "*oceanviewlife*" 2>/dev/null | head -5
  exit 1
fi
cd "$THEME_REL"

BEFORE_LINES=\$(wc -l < "$SHEET" | tr -d ' ')
BEFORE_BYTES=\$(wc -c < "$SHEET" | tr -d ' ')

if grep -q "$MARKER" "$SHEET"; then
  echo "✓ already present — nothing to do (\$BEFORE_LINES lines, \$BEFORE_BYTES bytes)"
  rm -f "$REMOTE_BLOCK"
  exit 0
fi

if [ "${DRY_RUN}" -eq 1 ]; then
  echo "→ would append \$(wc -l < "$REMOTE_BLOCK") lines to \$BEFORE_LINES lines / \$BEFORE_BYTES bytes"
  rm -f "$REMOTE_BLOCK"
  exit 0
fi

BACKUP="$SHEET.bak-\$(date +%Y%m%d-%H%M%S)"
cp -p "$SHEET" "\$BACKUP"
echo "→ backup   : $THEME_REL/\$BACKUP"

printf '\n\n' >> "$SHEET"
cat "$REMOTE_BLOCK" >> "$SHEET"
rm -f "$REMOTE_BLOCK"

AFTER_LINES=\$(wc -l < "$SHEET" | tr -d ' ')
AFTER_BYTES=\$(wc -c < "$SHEET" | tr -d ' ')

echo "→ sheet    : \$BEFORE_LINES → \$AFTER_LINES lines, \$BEFORE_BYTES → \$AFTER_BYTES bytes"

if [ "\$(grep -c "$MARKER" "$SHEET")" != "1" ]; then
  echo "✗ marker count is not 1 — restoring backup"
  cp -p "\$BACKUP" "$SHEET"
  exit 1
fi

# The appended text must be byte-identical to what we sent.
if [ "\$(tail -n $(wc -l < "$BLOCK" | tr -d ' ') "$SHEET" | shasum -a 256 | awk '{print \$1}')" != "$BLOCK_SHA" ]; then
  echo "✗ tail hash mismatch — restoring backup"
  cp -p "\$BACKUP" "$SHEET"
  exit 1
fi

echo "✓ appended, verified byte-identical. Backup kept at \$BACKUP"
REMOTE

echo
echo "Next: purge the WPE cache (portal → Caching), then run the checks:"
echo "  docs/wpbakery/staging-patch/README.md → Checks (1440px, and 390px)"
