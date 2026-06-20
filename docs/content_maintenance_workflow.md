# Content Maintenance Workflow

This guide explains the repeatable workflow for growing and maintaining the static Hill Country Web Works site over time.

## 1. Adding a Blog Post

Recommended steps:

1. Create a new folder under `blog/` using a URL-friendly slug.
2. Add an `index.html` page inside that folder.
3. Include:
   - unique `<title>`
   - unique meta description
   - canonical URL
   - Open Graph title and description
   - `og:locale`
   - clear article heading and published date
4. Add the new post card to `blog/index.html`.
5. Add the new route to `sitemap.xml`.
6. Link relevant blog posts back to the matching service or contact pages.

## 2. Updating Existing Service Content

Use this path when services, pricing, or positioning change:

1. Update the relevant service-detail page first.
2. Update `services/index.html` if the overview language or CTA routing also changed.
3. Update `pricing/index.html` if pricing context changed.
4. Review homepage references so summary messaging stays aligned.
5. If the change is meaningful for SEO or education, consider publishing a related blog post.

## 3. Updating Contact and Operations Content

When contact workflows or launch operations change:

1. Update `contact/index.html`.
2. Update `assets/js/site-shell.js` if footer contact information changes.
3. Update `docs/phase6_operations_baseline.md` when the operating model changes.
4. Update legal pages if the inquiry-handling or data-use model changes materially.

## 4. Sitemap and Crawlability Checklist

Whenever a public page is added:

- add the route to `sitemap.xml`
- ensure the page has canonical metadata
- ensure the page is reachable from at least one crawlable site path

## 5. Lightweight Review Checklist

Before committing content updates:

- confirm copy still matches brand voice
- confirm links point to real routes
- confirm the page title and description are unique
- review heading order
- check mobile layout at a narrow width when possible

## 6. Suggested Ongoing Content Priorities

Recommended order for future content growth:

1. Add more blog posts that answer small-business technology questions.
2. Add portfolio or case-study content when proof assets become available.
3. Add testimonials when approved client quotes exist.
4. Refresh pricing and services wording as offerings evolve.
