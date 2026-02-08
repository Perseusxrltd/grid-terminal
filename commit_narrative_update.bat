@echo off
echo ==========================================
echo Committing Narrative Update
echo ==========================================

git add .
git commit -m "docs: Update narrative from 'Molty CEO team' to 'open Swarm network'"
git push

echo ==========================================
echo Complete!
pause
