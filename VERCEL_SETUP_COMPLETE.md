# Vercel Setup - Root Directory Configuration Required

## ✅ Files Are Now in Repository

The `regency-site` directory and all files are now successfully pushed to GitHub.

## ⚠️ Required: Set Root Directory in Vercel

Vercel needs to know that your Next.js project is in the `regency-site` subdirectory, not the root.

### Steps to Fix:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Click on your project: `macdonaldhighlandshomes.com`

2. **Navigate to Settings**
   - Click **Settings** in the top navigation
   - Click **General** in the left sidebar

3. **Set Root Directory**
   - Scroll down to **Root Directory**
   - Click **Edit**
   - Enter: `regency-site`
   - Click **Save**

4. **Redeploy**
   - Go to **Deployments** tab
   - Click the **⋯** menu on the latest deployment
   - Click **Redeploy**

## Why This Is Needed

- Your Next.js project is in `regency-site/` subdirectory
- Vercel needs to know this is the project root
- Without this setting, Vercel looks for Next.js in the root directory (which is the Nextra docs site)

## After Setting Root Directory

Once you set the Root Directory to `regency-site`:
- ✅ Vercel will automatically detect Next.js 14.2.5
- ✅ It will run `npm install` in the correct directory
- ✅ It will run `npm run build` successfully
- ✅ Your MacDonald Highlands website will deploy!

## Alternative: Remove Root vercel.json

If you prefer, you can also:
1. Delete the root `vercel.json` file
2. Set Root Directory to `regency-site` in Vercel
3. Vercel will use the `regency-site/vercel.json` automatically

