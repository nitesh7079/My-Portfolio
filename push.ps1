# Quick Git Push Script
# This script will add, commit, and push all changes to GitHub

param(
    [string]$message = "Updated portfolio"
)

Write-Host "Adding changes..." -ForegroundColor Cyan
git add .

Write-Host "Committing changes..." -ForegroundColor Cyan
git commit -m $message

Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push

Write-Host "`nSuccessfully pushed to GitHub! ✓" -ForegroundColor Green
