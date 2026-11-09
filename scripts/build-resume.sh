#!/usr/bin/env bash
# =============================================================================
# build-resume.sh
# Compiles the LaTeX resume for a given role and copies the output PDF into
# public/ so the Next.js site picks it up automatically.
#
# USAGE:
#   ./scripts/build-resume.sh <Role> [output-name]
#
# EXAMPLES:
#   ./scripts/build-resume.sh PyDS
#     → compiles with \Role{PyDS}, outputs public/resume-pyds.pdf
#
#   ./scripts/build-resume.sh NPCI
#     → compiles with \Role{NPCI}, outputs public/resume-npci.pdf
#
#   ./scripts/build-resume.sh SDE sde-2026
#     → compiles with \Role{SDE}, outputs public/resume-sde-2026.pdf
#
# VALID ROLE VALUES (from resume/config.tex):
#   SDE, Backend, Frontend, FullStack, ML, Applied, Data, Analytics,
#   Quant, QuantResearch, QuantTrader, Finance, Consulting,
#   SRE, DevOps, Cloud, Security, MLOps, NPCI, PyDS
# =============================================================================

set -e  # exit immediately on any error

# ── Resolve paths relative to the repo root ──────────────────────────────────
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
RESUME_DIR="$REPO_ROOT/resume"
PUBLIC_DIR="$REPO_ROOT/public"

# ── Argument handling ─────────────────────────────────────────────────────────
ROLE="${1}"
if [[ -z "$ROLE" ]]; then
  echo "Usage: ./scripts/build-resume.sh <Role> [output-name]"
  echo "Example: ./scripts/build-resume.sh PyDS"
  exit 1
fi

# Output PDF name: second arg if provided, otherwise lowercased role
OUTPUT_NAME="${2:-resume-$(echo "$ROLE" | tr '[:upper:]' '[:lower:]')}"
OUTPUT_PDF="$PUBLIC_DIR/${OUTPUT_NAME}.pdf"

echo "▶ Building resume for role: $ROLE"
echo "  Source : $RESUME_DIR"
echo "  Output : $OUTPUT_PDF"

# ── Create an isolated build directory in /tmp ───────────────────────────────
# Using /tmp so LaTeX aux files never appear in the source tree and there is
# no risk of recursive self-copy.
BUILD_DIR="$(mktemp -d /tmp/resume-build-XXXXXX)"
trap 'rm -rf "$BUILD_DIR"' EXIT   # always clean up on exit

cp -r "$RESUME_DIR"/. "$BUILD_DIR/"

# ── Inject the requested role into config.tex ────────────────────────────────
sed -i '' "s|\\\\newcommand{\\\\Role}{[^}]*}|\\\\newcommand{\\\\Role}{$ROLE}|" \
  "$BUILD_DIR/config.tex"

echo "  Role injected into config.tex ✓"

# ── Run pdflatex twice (needed for correct cross-references) ─────────────────
mkdir -p "$PUBLIC_DIR"

cd "$BUILD_DIR"
pdflatex -interaction=nonstopmode -output-directory="$BUILD_DIR" main.tex > /dev/null 2>&1
pdflatex -interaction=nonstopmode -output-directory="$BUILD_DIR" main.tex > /dev/null 2>&1

# ── Copy the compiled PDF to public/ ─────────────────────────────────────────
cp "$BUILD_DIR/main.pdf" "$OUTPUT_PDF"

echo "✅ Done! PDF written to: public/${OUTPUT_NAME}.pdf"
echo ""
echo "   Point your profile's resumePdf to: /${OUTPUT_NAME}.pdf"
