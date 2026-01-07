# SEO Pages Testing Guide

## Quick Test Checklist

### 1. Local Testing
```bash
npm run dev
```

Then visit each page:
- http://localhost:3000/seo/locations/maharashtra
- http://localhost:3000/seo/locations/mumbai
- http://localhost:3000/seo/locations/gujarat
- http://localhost:3000/seo/locations/karnataka

### 2. Check Page Source (Right-click → View Page Source)

For each page, verify:
- ✅ `<title>` tag is present and under 60 characters
- ✅ `<meta name="description">` is present and under 160 characters
- ✅ `<link rel="canonical">` points to correct URL
- ✅ Open Graph tags (`og:title`, `og:description`, `og:url`)
- ✅ Twitter card tags
- ✅ JSON-LD scripts for FinancialService and FAQPage

### 3. Test Structured Data

**Google Rich Results Test:**
1. Go to: https://search.google.com/test/rich-results
2. Enter your page URL (after deployment)
3. Check for:
   - FinancialService schema validation
   - FAQPage schema validation
   - No errors or warnings

**Schema.org Validator:**
1. Go to: https://validator.schema.org/
2. Enter your page URL
3. Verify structured data is valid

### 4. Test Sitemap

After deployment, visit:
- https://www.rhomboidfinguru.com/sitemap.xml

Verify all 4 SEO pages are listed:
- /seo/locations/maharashtra
- /seo/locations/mumbai
- /seo/locations/gujarat
- /seo/locations/karnataka

### 5. Google Search Console

1. Go to: https://search.google.com/search-console
2. Add your property (if not already added)
3. Submit sitemap: `https://www.rhomboidfinguru.com/sitemap.xml`
4. Wait 24-48 hours for indexing
5. Check "Coverage" report for indexing status
6. Check "Enhancements" → "FAQ" for FAQPage recognition

### 6. Robots.txt Check

Visit: https://www.rhomboidfinguru.com/robots.txt

Verify:
- ✅ `Allow: /` is present
- ✅ No disallow rules for `/seo/locations/`
- ✅ Sitemap URL is listed

### 7. Content Verification

For each page, check:
- ✅ H1 tag is present (only one)
- ✅ H2 sections for Secured/Unsecured/Advisory
- ✅ H3 sections for each advisory service
- ✅ Word count: 1,200-1,600 words
- ✅ Disclaimer is present
- ✅ No broken links
- ✅ Images have alt text (if any)

### 8. Mobile Responsiveness

Test on mobile device or browser dev tools:
- ✅ Pages are responsive
- ✅ Text is readable
- ✅ No horizontal scrolling
- ✅ Touch targets are adequate

### 9. Performance Check

**Google PageSpeed Insights:**
1. Go to: https://pagespeed.web.dev/
2. Enter your page URL
3. Check Core Web Vitals scores

### 10. SEO Tools

**Free SEO Checkers:**
- https://www.seobility.net/en/seocheck/
- https://www.seoreviewtools.com/
- https://www.semrush.com/ (free account)

Check for:
- Meta tags presence
- Heading structure
- Content quality
- Mobile-friendliness

## Common Issues to Watch For

1. **Duplicate Content:** Ensure each page has unique content
2. **Missing Metadata:** All pages should have title, description, canonical
3. **Structured Data Errors:** Fix any schema validation errors
4. **Indexing Issues:** If pages don't index, check robots.txt and sitemap
5. **404 Errors:** Ensure all URLs are accessible

## Expected Timeline

- **Immediate:** Pages accessible, metadata visible
- **24-48 hours:** Google starts crawling (if sitemap submitted)
- **1-2 weeks:** Pages may start appearing in search results
- **1-3 months:** Full indexing and potential ranking

## Notes

- SEO pages are NOT linked from navbar/footer (intentional)
- Pages are discoverable via sitemap.xml only
- This is a long-term SEO strategy - results take time
- Monitor Google Search Console for indexing status

