# Deployment, Hosting, and SSL Plan

## Chosen Hosting Path

Use Cloudflare Pages for both the initial launch and the expected near-term production hosting model.

## Why Cloudflare Pages

- Well suited for static sites
- HTTPS is automatic
- CDN delivery is built in
- Simple git-based deployments fit the current project structure
- Easy to connect and manage the custom domain
- Lower operational overhead than a self-managed VM or container deployment
- A better fit than Kubernetes for the current static site scope

## Environment Strategy

### Staging

- Use the default Cloudflare Pages preview deployments for branch validation
- Review layout, routing, and metadata on preview URLs before production promotion

### Production

- Connect the production branch to the primary Pages project
- Point `hcww.net` to Cloudflare-managed DNS once launch is ready
- Treat Cloudflare Pages as the default production platform unless the project later grows beyond static-site needs

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

- Domain connected
- DNS records verified
- HTTPS active
- Canonical host redirect confirmed
- `robots.txt` and `sitemap.xml` published
- Contact path tested end to end on the public host
