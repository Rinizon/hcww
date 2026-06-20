# Uptime Monitoring Runbook

This runbook defines the recommended uptime-monitoring setup for the live Hill Country Web Works site.

## Recommended Provider

Use Better Stack Uptime for the initial live-site monitoring setup.

Why this choice:

- simple HTTP and HTTPS checks
- straightforward email alerting
- status-page and escalation options available later if needed
- a good fit for a small static marketing site

## Required Monitors

Create HTTP or HTTPS monitors for these public routes:

- `https://hcww.net/`
- `https://hcww.net/services/`
- `https://hcww.net/pricing/`
- `https://hcww.net/contact/`

Optional low-priority monitors:

- `https://hcww.net/robots.txt`
- `https://hcww.net/sitemap.xml`

## Recommended Monitor Settings

Use these defaults unless you have a reason to be noisier or quieter:

- Check frequency: `5 minutes`
- Request method: `GET`
- Follow redirects: `enabled`
- Timeout: `30 seconds`
- Confirmed failures before alerting: `2`
- Confirmed recoveries before resolving: `1`

## Recommended Alert Routing

Start with one reliable owner destination:

- primary business email inbox

Optional later additions:

- SMS or phone escalation
- secondary maintainer email
- Slack or webhook integration

## Setup Steps

1. Create or sign in to the Better Stack account.
2. Open the Uptime section and create a new monitor for `https://hcww.net/`.
3. Repeat for the remaining required routes.
4. Create or confirm the alert recipient for the primary owner email.
5. Trigger or wait for the first successful checks.
6. Intentionally test one alert path if the platform allows a safe alert test.
7. Record that alert delivery was confirmed.

## Completion Criteria for `LIVE-03`

The uptime-monitoring task should be considered complete when:

- all required routes are monitored publicly
- alerts are routed to the intended owner destination
- at least one successful check is visible for each required route
- alert delivery has been confirmed

## Follow-Up

After setup is complete:

- update `docs/SPEC.md`
- remove uptime monitoring from `docs/launch_blocker_cleanup_audit.md`
- add any provider-specific owner notes if the alert routing or escalation policy changes
