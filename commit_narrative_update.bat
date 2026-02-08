@echo off
echo ==========================================
echo Grid Terminal - Push Latest Changes
echo ==========================================

git add .
git commit -m "docs: Final updates - investor concerns addressed, consistency verified"
git push

echo ==========================================
echo Complete!
pause
