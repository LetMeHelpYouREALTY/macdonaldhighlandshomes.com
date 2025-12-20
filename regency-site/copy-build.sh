#!/bin/bash
# Copy .next build output to root for Vercel deployment

set -e  # Exit on error

if [ -d ".next" ]; then
  echo "Copying .next to root directory..."
  # Remove old .next if it exists
  rm -rf ../.next
  # Copy with verbose output
  cp -rv .next ../.next
  # Verify the copy
  if [ -f "../.next/routes-manifest.json" ]; then
    echo "✓ Build output copied successfully - routes-manifest.json verified"
  else
    echo "✗ Error: routes-manifest.json not found after copy"
    ls -la ../.next/ || echo "Directory listing failed"
    exit 1
  fi
else
  echo "✗ Error: .next directory not found"
  exit 1
fi
