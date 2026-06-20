# Deployment, Hosting, and SSL Plan

## Hosting Path

Use Cloudflare Pages for the live production site.

## Why Cloudflare Pages

- Well suited for static sites
- HTTPS is automatic
- CDN delivery is built in
- Simple git-based deployments fit the current project structure
- Easy to connect a custom domain later

## Environment Strategy

### Staging

- Use the default Cloudflare Pages preview deployments for branch validation
- Review layout, routing, and metadata on preview URLs before production promotion

### Production

- Connect the production branch to the primary Pages project
- Point `hcww.net` to Cloudflare-managed DNS for the live site
- Redirect `www.hcww.net` permanently to `https://hcww.net/`

## Deployment Flow

1. Push changes to the main repository branch.
2. Let Cloudflare Pages build the static site directly from the repo root.
3. Review the generated preview deployment when the change affects layout, metadata, or routing.
4. Promote the validated branch state to production.

## DNS Ownership

- Keep DNS in a single managed account with MFA enabled
- Store registrar and DNS ownership details in a secure owner-managed credential vault
- Use least-privilege access if a second maintainer is added later

## SSL Strategy

- Enforce HTTPS for the public site
- Use Cloudflare-managed certificates for the apex domain and `www` if needed
- Redirect alternate hostnames to the primary canonical hostname
- Check for mixed-content warnings before launch

## Contact Form Direction

The contact form now submits through a hosted form endpoint and redirects to `/contact/thanks/` after success.

Current launch note:

- Confirm the hosted endpoint works on the public domain after deployment and verify inbox delivery manually.

Future upgrade options:

- Cloudflare Workers-based form handling for first-party processing
- another hosted form backend if spam handling or workflow needs change
- deeper CRM or ticketing integration if inquiry volume grows

## Pre-Launch Checklist

Completed on the live host:

- Domain connected
- DNS records verified for `hcww.net`
- HTTPS active on `https://hcww.net/`
- `robots.txt` and `sitemap.xml` published

Still pending:

- Final public broken-link checks outside the current environment

User-confirmed complete on June 20, 2026:

- Cloudflare Web Analytics is enabled and reporting
- Contact path tested end to end on the public host
- Manual browser and device QA checks
