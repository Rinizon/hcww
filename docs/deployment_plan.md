# Deployment, Hosting, and SSL Plan

## Recommended Hosting Path

Use Cloudflare Pages for the initial launch.

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
- Point `hcww.net` to Cloudflare-managed DNS once launch is ready

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

The current Phase 1 contact form is a placeholder UI only. In a later phase, connect it to one of these:

- Cloudflare Forms or Workers-based form handling
- Formspree or a similar hosted form backend
- A direct email workflow only if spam protection and reliability are acceptable

## Pre-Launch Checklist

- Domain connected
- DNS records verified
- HTTPS active
- Canonical host redirect confirmed
- `robots.txt` and `sitemap.xml` published
- Contact path tested end to end once backend handling is added
