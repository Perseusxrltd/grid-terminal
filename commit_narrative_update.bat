@echo off
echo ==========================================
echo Committing Final Documentation Updates
echo ==========================================

git add .
git commit -m "docs: Remove CEO references, add docs-only and audit notice"
git push

echo ==========================================
echo Complete!
pause
