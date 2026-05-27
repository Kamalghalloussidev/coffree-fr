#!/bin/zsh

PORT=8080
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "🚀 Lancement du serveur local sur http://localhost:$PORT"
echo "   Répertoire : $PROJECT_DIR"
echo "   Appuyez sur Ctrl+C pour arrêter."
echo ""

# Ouvre le navigateur après un court délai
(sleep 1 && open "http://localhost:$PORT") &

# Lance le serveur HTTP avec Python 3
cd "$PROJECT_DIR" && python3 -m http.server $PORT
