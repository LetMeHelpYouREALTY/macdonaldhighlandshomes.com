# PowerShell script to fix Vercel deployment setup
# This script helps set up your GitHub repository and update the remote

Write-Host "=== Vercel Deployment Fix ===" -ForegroundColor Cyan
Write-Host ""

# Get current git username
$gitUsername = git config user.name
Write-Host "Detected Git Username: $gitUsername" -ForegroundColor Yellow
Write-Host ""

# Prompt for GitHub username
$githubUsername = Read-Host "Enter your GitHub username (or press Enter to use '$gitUsername')"
if ([string]::IsNullOrWhiteSpace($githubUsername)) {
    $githubUsername = $gitUsername
}

# Suggest repository name
$suggestedRepo = "regency-site"
Write-Host ""
$repoName = Read-Host "Enter your GitHub repository name (or press Enter to use '$suggestedRepo')"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = $suggestedRepo
}

# Show what will happen
Write-Host ""
Write-Host "Configuration:" -ForegroundColor Cyan
Write-Host "  GitHub Username: $githubUsername"
Write-Host "  Repository Name: $repoName"
Write-Host "  Remote URL: https://github.com/$githubUsername/$repoName.git"
Write-Host ""

$confirm = Read-Host "Do you want to update the remote URL? (y/n)"
if ($confirm -eq "y" -or $confirm -eq "Y") {
    Write-Host ""
    Write-Host "Updating remote URL..." -ForegroundColor Green
    git remote set-url origin "https://github.com/$githubUsername/$repoName.git"
    
    Write-Host ""
    Write-Host "Verifying remote configuration..." -ForegroundColor Green
    git remote -v
    
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Make sure you've created the repository on GitHub:"
    Write-Host "   https://github.com/new"
    Write-Host "   Repository name: $repoName"
    Write-Host "   (Do NOT initialize with README, .gitignore, or license)"
    Write-Host ""
    Write-Host "2. Once the repository exists, run:"
    Write-Host "   git push -u origin main"
    Write-Host ""
    Write-Host "3. Connect to Vercel:"
    Write-Host "   https://vercel.com/new"
    Write-Host "   Import your repository: $githubUsername/$repoName"
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "Cancelled. No changes made." -ForegroundColor Yellow
}


