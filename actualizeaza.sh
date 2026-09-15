#!/bin/bash
# Script de actualizare automată pe GitHub Pages
cd "$(dirname "$0")" || exit

git add .
MSG="${1:-Actualizare detalii întâlnire}"
git commit -m "$MSG"
git push origin main

echo ""
echo "✨ Site-ul a fost actualizat cu succes pe GitHub Pages!"
echo "🌐 Link live: https://teo-eleven.github.io/cat-date/"
echo ""
