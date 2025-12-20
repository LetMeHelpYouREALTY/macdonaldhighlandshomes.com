# Fix Vercel to Deploy regency-site

## Problem
Vercel is deploying the root directory (Nextra docs) instead of the `regency-site` subdirectory.

## Solution: Configure Root Directory in Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Go to your Vercel project: https://vercel.com/dashboard
2. Click on your project: `macdonaldhighlandshomes.com`
3. Go to **Settings** → **General**
4. Scroll to **Root Directory**
5. Click **Edit**
6. Set Root Directory to: `regency-site`
7. Click **Save**
8. Redeploy (or push a new commit)

### Option 2: vercel.json in Root

Create a `vercel.json` in the root directory that points to the subdirectory:

```json
{
  "buildCommand": "cd regency-site && npm run build",
  "outputDirectory": "regency-site/.next",
  "installCommand": "cd regency-site && npm install"
}
```

### Option 3: Separate Repository (Best for Production)

Create a separate GitHub repository for `regency-site`:

1. Create new repo: `macdonald-highlands-site` or `regency-site`
2. Move `regency-site` to its own repository
3. Connect that repository to Vercel

## Recommended: Option 1 (Vercel Dashboard)

This is the cleanest solution - just set the root directory in Vercel settings.


