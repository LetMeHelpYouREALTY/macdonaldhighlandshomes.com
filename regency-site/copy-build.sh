#!/bin/bash
# Copy .next build output to root for Vercel deployment

if [ -d ".next" ]; then
  echo "Copying .next to root directory..."
  cp -r .next ../.next
  echo "Build output copied successfully"
else
  echo "Error: .next directory not found"
  exit 1
fi
