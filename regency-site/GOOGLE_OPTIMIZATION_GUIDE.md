# Google Optimization Setup Guide

## ✅ Completed Optimizations

### 1. Schema Markup (Structured Data)
- ✅ **LocalBusiness Schema** - Added comprehensive LocalBusiness schema matching Google Business Profile
- ✅ **RealEstateAgent Schema** - Enhanced with proper NAP (Name, Address, Phone) data
- ✅ **Service Schema** - Individual service pages have Service schema markup
- ✅ **Image Schema** - Updated to use correct agent headshot path

### 2. Sitemap
- ✅ **XML Sitemap** - Generated at `/sitemap.xml`
- ✅ **Proper Priorities** - Homepage (1.0), Services (0.9), Other pages (0.7-0.8)
- ✅ **Change Frequencies** - Weekly for homepage/community, Daily for listings, Monthly for others
- ✅ **All Routes Included** - All main pages in sitemap

### 3. Robots.txt
- ✅ **Robots.ts** - Next.js 15 robots.ts file created
- ✅ **Sitemap Reference** - Points to sitemap.xml
- ✅ **Disallow Rules** - Blocks admin, API, and internal routes

### 4. Metadata & SEO
- ✅ **Open Graph Tags** - Complete OG tags for social sharing
- ✅ **Twitter Cards** - Twitter card metadata
- ✅ **Canonical URLs** - Proper canonical tags
- ✅ **Meta Descriptions** - SEO-optimized descriptions
- ✅ **Keywords** - Relevant keyword meta tags

### 5. Google Analytics & Tag Manager
- ✅ **GoogleAnalytics Component** - Ready for GA4 and GTM
- ✅ **Environment Variables** - Configured for NEXT_PUBLIC_GA_ID and NEXT_PUBLIC_GTM_ID

## 🔧 Required Setup Steps

### Step 1: Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://macdonaldhighlandshomes.com`
3. Verify ownership using one of these methods:
   - **HTML Tag Method**: Add verification code to environment variable
   - **HTML File Upload**: Download verification file and place in `public/` folder
   - **DNS Record**: Add TXT record to domain DNS

**Environment Variable to Add:**
```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code-here
```

### Step 2: Google Analytics 4
1. Go to [Google Analytics](https://analytics.google.com)
2. Create GA4 property for `macdonaldhighlandshomes.com`
3. Get Measurement ID (format: `G-XXXXXXXXXX`)

**Environment Variable to Add:**
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Step 3: Google Tag Manager (Optional but Recommended)
1. Go to [Google Tag Manager](https://tagmanager.google.com)
2. Create container for website
3. Get Container ID (format: `GTM-XXXXXXX`)

**Environment Variable to Add:**
```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Step 4: Google Business Profile
1. Ensure Google Business Profile is claimed and verified
2. Verify NAP (Name, Address, Phone) matches exactly:
   - **Name**: Dr. Jan Duffy, REALTOR®
   - **Address**: MacDonald Highlands, Henderson, NV 89012
   - **Phone**: (702) 744-8474
3. Add website URL: `https://macdonaldhighlandshomes.com`
4. Verify schema markup matches GBP details

### Step 5: Submit Sitemap to Google
1. In Google Search Console, go to "Sitemaps"
2. Submit: `https://macdonaldhighlandshomes.com/sitemap.xml`
3. Monitor indexing status

## 📋 NAP Consistency Checklist

Verify these match across all platforms:
- ✅ Website schema markup
- ✅ Google Business Profile
- ✅ Footer contact information
- ✅ Contact page
- ✅ About page
- ✅ All service pages

**Current NAP:**
- **Name**: Dr. Jan Duffy, REALTOR®
- **Address**: MacDonald Highlands, Henderson, NV 89012
- **Phone**: (702) 222-1964
- **Email**: jan@drjanduffy.com

## 🎯 Local SEO Best Practices Implemented

1. ✅ **LocalBusiness Schema** - Complete with geo coordinates
2. ✅ **Area Served** - Henderson, MacDonald Highlands, Las Vegas
3. ✅ **Service Area** - Clearly defined in schema
4. ✅ **NAP Consistency** - Matches across all pages
5. ✅ **Location Pages** - Community page with local content
6. ✅ **Service Pages** - Location-specific service descriptions

## 📊 Next Steps After Setup

1. **Monitor Google Search Console** - Check indexing status, search performance
2. **Review Analytics** - Track traffic sources, user behavior
3. **Monitor Core Web Vitals** - Ensure good page experience signals
4. **Update Content Regularly** - Fresh content helps rankings
5. **Build Backlinks** - Quality links from local directories and real estate sites
6. **Get Reviews** - Encourage Google reviews (schema supports review markup)

## 🔍 Testing & Verification

### Test Schema Markup
- Use [Google Rich Results Test](https://search.google.com/test/rich-results)
- Test URL: `https://macdonaldhighlandshomes.com`
- Verify LocalBusiness schema appears correctly

### Test Sitemap
- Visit: `https://macdonaldhighlandshomes.com/sitemap.xml`
- Verify all pages are listed
- Check priorities and change frequencies

### Test Robots.txt
- Visit: `https://macdonaldhighlandshomes.com/robots.txt`
- Verify sitemap reference
- Check disallow rules

## 📝 Environment Variables Needed

Add these to your Vercel environment variables:

```env
# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code

# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Tag Manager (Optional)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## 🚀 Deployment Checklist

- [ ] Add environment variables to Vercel
- [ ] Verify Google Search Console ownership
- [ ] Submit sitemap to Google Search Console
- [ ] Test schema markup with Rich Results Test
- [ ] Verify robots.txt is accessible
- [ ] Check Google Analytics is tracking
- [ ] Verify Google Business Profile links to website
- [ ] Test all pages load correctly
- [ ] Monitor Search Console for indexing issues

