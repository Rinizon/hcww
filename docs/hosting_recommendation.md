# Hosting Recommendation

Hill Country Web Works should use Cloudflare Pages as the primary hosting platform for this website.

## Recommended Decision

Use Cloudflare Pages for staging previews and production hosting.

## Why This Fits the Project

- The site is a static marketing website with a small shared CSS and JavaScript footprint.
- The current architecture does not require application servers, background jobs, or container orchestration.
- Git-based deployments match the repo workflow already in use.
- Cloudflare Pages provides CDN delivery, HTTPS, and preview deployments with less operational overhead than self-managed hosting.

## Why Not Docker as the Main Hosting Path

Docker can still be useful for local development or CI consistency, but it is not the best primary hosting model here.

- A container adds packaging and runtime steps that the live site does not actually need.
- Static hosting removes the need to patch and maintain a web server image.
- The current site has no backend service that benefits from container scheduling.

## Why Not Kubernetes

Kubernetes would be a poor fit for the current scope.

- The site does not need cluster orchestration, service discovery, or autoscaled application workloads.
- Kubernetes would add cost, maintenance, and failure modes without solving a real project problem.
- The operational complexity would be far out of proportion to a static brochure-style site.

## Why Not a Standard VM

A VM would work, but it would create unnecessary maintenance burden.

- Someone would need to manage the web server, operating system updates, firewall rules, TLS renewal strategy, and uptime monitoring at a lower level.
- That overhead does not create meaningful business value for the current site.
- Cloudflare Pages provides the needed outcome with far less hands-on infrastructure work.

## Operational Notes

- Keep Cloudflare Pages as the launch hosting path.
- Use preview deployments for route, metadata, and content validation before production updates.
- Validate the hosted contact form and canonical domain behavior on the public host before launch.
- Revisit the hosting decision only if the site grows into a true application with backend services or private workloads.
