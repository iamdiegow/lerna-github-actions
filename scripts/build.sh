#!/usr/bin/env bash
echo "┏━━━ 📦 Building Workspace ━━━━━━━━━━━━━━━━━━━"
lerna run build --stream --concurrency 1 