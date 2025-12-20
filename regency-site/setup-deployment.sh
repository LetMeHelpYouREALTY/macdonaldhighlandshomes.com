#!/bin/bash
# Setup script for Vercel deployment
# This script helps set up your own GitHub repository and Vercel connection

echo "=== Vercel Deployment Setup ==="
echo ""
echo "Step 1: Create a new GitHub repository"
echo "  1. Go to https://github.com/new"
echo "  2. Create a new repository (e.g., 'regency-site' or 'macdonald-highlands')"
echo "  3. DO NOT initialize with README, .gitignore, or license"
echo ""
echo "Step 2: Update git remote"
echo "  Run: git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
echo ""
echo "Step 3: Push to your repository"
echo "  Run: git push -u origin main"
echo ""
echo "Step 4: Connect to Vercel"
echo "  1. Go to https://vercel.com/new"
echo "  2. Import your GitHub repository"
echo "  3. Vercel will auto-detect Next.js"
echo "  4. Click Deploy"
echo ""
echo "After setup, every git push will automatically trigger Vercel deployment!"

