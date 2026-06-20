# Phase 6 Operations Baseline

This document records the selected operational baseline for launch preparation after the Phase 6 pass.

## 1. Inquiry Handling

Current launch-direction inquiry flow:

- The contact form uses client-side validation.
- Form submission opens the visitor's email app with a prefilled inquiry addressed to `robert@hcww.net`.
- If the email app does not open, the page provides a direct fallback instruction to email or call manually.

Current limitation:

- There is no server-side form handler yet.
- This means the inquiry flow is reliable only for visitors with a working local email app or manual follow-through.

Operational note:

- A true backend or hosted form service can be added later if launch requirements change.

## 2. Business Hours and Contact Methods

Launch wording in use:

- Standard business hours, with emergency support available at premium rates.

Primary contact methods:

- Phone: `(830) 431-0005`
- Email: `robert@hcww.net`

## 3. Scheduling Decision

Current launch decision:

- No scheduling link is used at launch.
- Email and phone remain the current booking path.

Future option:

- A Calendly-style scheduling link can be added later if direct booking becomes desirable.

## 4. Legal Baseline

The site now includes:

- Privacy Policy at `/privacy/`
- Terms of Service at `/terms/`

These pages are linked in the shared footer and included in the sitemap.

## 5. Analytics Direction

Selected launch direction:

- Delay analytics script installation until the preferred platform account is ready.
- If enabled later, use a privacy-friendly option such as Cloudflare Web Analytics or a similarly lightweight alternative.

Reason:

- The repo does not yet contain production analytics identifiers or account configuration details.

## 6. Monitoring Direction

Selected launch direction:

- Use a lightweight uptime monitor such as UptimeRobot or Better Stack for public route checks after deployment.

Recommended minimum monitored endpoints:

- `/`
- `/services/`
- `/pricing/`
- `/contact/`

## 7. Remaining Phase 7 and Launch-Readiness Gaps

Operational items still deferred beyond this Phase 6 pass:

- a true server-side or hosted form submission path
- analytics account setup and script installation
- uptime monitor account setup and alert destination confirmation
- any optional cookie notice if analytics or tracking changes warrant it
