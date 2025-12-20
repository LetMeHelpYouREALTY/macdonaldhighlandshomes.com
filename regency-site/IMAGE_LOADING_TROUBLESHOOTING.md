# Image Loading Troubleshooting Guide

## Issue: Images Not Loading or Being Blocked

### Quick Fixes

1. **Clear Next.js Cache**
   ```bash
   cd regency-site
   rm -rf .next
   npm run dev
   ```

2. **Verify Images Exist**
   - Check that images are in `public/photos/community/` and `public/photos/agent/`
   - Images should be accessible at `/photos/community/hero-view-lifestyle.jpg`

3. **Check Browser Console**
   - Open DevTools (F12)
   - Check Console for image loading errors
   - Check Network tab to see if images are being requested

4. **Verify Image Paths**
   - All image paths should start with `/photos/` (not `/public/photos/`)
   - Next.js serves files from `public/` directory at root

### Common Issues

#### Issue 1: Images Not Found (404)
**Symptom**: Browser shows 404 for image requests

**Solution**:
- Verify images exist in `public/photos/` directory
- Check path in code matches actual file location
- Ensure no typos in filenames (case-sensitive on some systems)

#### Issue 2: Image Optimization Failing
**Symptom**: Images load but are broken or show optimization errors

**Solution**:
- Check `next.config.mjs` image configuration
- Try adding `unoptimized={true}` temporarily to Image components
- Verify image formats are supported (JPG, PNG, WebP)

#### Issue 3: CORS or Security Blocking
**Symptom**: Images blocked by browser security

**Solution**:
- Ensure images are in `public/` directory (not imported)
- Check `next.config.mjs` for proper image domain settings
- Verify no Content Security Policy blocking images

### Testing Image Loading

1. **Direct URL Test**
   - Navigate to: `http://localhost:3000/photos/community/hero-view-lifestyle.jpg`
   - If this works, images are accessible
   - If this fails, check file paths

2. **Check Build Output**
   ```bash
   npm run build
   ```
   - Look for image optimization errors
   - Check `.next/static/media/` for optimized images

3. **Verify Image Component Usage**
   - Ensure parent has `position: relative` when using `fill`
   - Add `sizes` prop for responsive images
   - Use `priority` for above-fold images

### Current Image Paths in Code

- Homepage hero: `/photos/community/hero-view-lifestyle.jpg`
- Community page: `/photos/community/view-lifestyle-00024-full.jpg`
- Agent photo: `/photos/agent/dr-jan-duffy-headshot.jpg`
- Header component: Multiple images in `/photos/community/`

### If Images Still Don't Load

1. **Temporary Fallback**: Use regular `<img>` tags to test
2. **Check File Permissions**: Ensure images are readable
3. **Verify Git**: Ensure images are committed to repository
4. **Check Deployment**: Verify images are included in build

### Next Steps

If images still don't load after these steps:
1. Check Vercel/deployment logs for image optimization errors
2. Verify image file sizes aren't too large (>5MB may cause issues)
3. Try converting images to WebP format
4. Check if images are corrupted (try opening in image viewer)
