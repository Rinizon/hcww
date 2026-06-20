# Foundation Standards

## Scope

This document defines the baseline technical standards for the Phase 1 Hill Country Web Works website foundation.

## Accessibility Baseline

- Use semantic landmarks: header, nav, main, section, footer
- Include a skip link on every page
- Keep color contrast strong across text, buttons, and navigation states
- Ensure all form controls have visible labels
- Preserve keyboard focus visibility with a consistent focus ring
- Keep heading order logical and page titles unique

## SEO Baseline

- Provide a unique `<title>` and meta description for every page
- Add canonical URLs for current public routes
- Include Open Graph summary tags for link sharing
- Use descriptive headings and route names aligned with the site structure
- Maintain crawlable HTML content without JavaScript-only page text
- Publish `robots.txt` and `sitemap.xml`

## Performance Baseline

- Keep the initial site dependency-light with no framework runtime
- Prefer system-available fonts before adding external font requests
- Reuse one shared stylesheet and one shared JavaScript shell file
- Avoid oversized media until brand imagery is finalized
- Favor static hosting with compression and CDN delivery

## Validation Approach

- Load the site locally with a static server before each review pass
- Confirm core routes return `200 OK`
- Check that every page includes the shared header, footer, and main content landmark
- Review mobile-width layout behavior before marking a page complete
- Resolve critical accessibility, broken-link, and metadata issues before launch
