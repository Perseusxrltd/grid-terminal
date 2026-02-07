#!/bin/bash
# Migration script for v2.3 updates

# Remove legacy files
rm -f docs/09_constitution.md
rm -f docs/GRID_TOKEN_SPEC.md
rm -f docs/DESIGN_SPEC_v2.2.md
rm -f docs/doctrine-v2.md
rm -f whitepaper/Sovereign_Swarm_Whitepaper_v2.2.md

# Add changes
git add .

# Commit
git commit -m "docs: consolidate v2.3 update and migration cleanup"

# Push
git push origin main
