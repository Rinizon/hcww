## Spec

This file is the shared task queue for all agents working in this repo.

## Status Legend

- `todo`: ready to claim
- `in_progress`: currently owned by one agent
- `blocked`: cannot proceed until the blocker is resolved
- `done`: completed and validated for the scoped task

## Coordination Rules

- Claim work by changing a task from `todo` to `in_progress` and setting `Owner`.
- Do not edit another agent's `in_progress` task without an explicit handoff or user direction.
- When work is finished, change `Status` to `done` and add a short `Completion` note when useful.
- A task should only be marked `done` when the git working tree is clean after the task's changes are fully handled.
- If all tasks are `done`, stop and ask the user to add or prioritize new work.

## Task Template

Use this format for all new tasks:

### TASK-ID Short Title

- Status: `todo`
- Owner: `unassigned`
- Depends On: `none`
- Summary: One sentence describing the scoped change.
- Acceptance: Observable outcome that confirms the task is complete.
- Completion:

Notes:

- Use a stable ID like `UI-05`, `GAME-02`, or `ART-06`.
- Keep each task small enough for one focused pass.
- Set `Depends On` to one or more task IDs when order matters.
- Leave `Completion` blank until the task is finished.
- Before changing a task to `done`, verify there are no unintended uncommitted changes left in the working tree.

## Active Queue

Add all new `todo`, `in_progress`, and `blocked` tasks in this section.
Keep the highest-priority ready work at the top so agents can claim it quickly.

### POST-01 Submit Sitemap to Search Engines

- Status: `blocked`
- Owner: `unassigned`
- Depends On: `LIVE-06`
- Summary: Submit the live sitemap to Google Search Console and Bing Webmaster Tools so the post-launch indexing workflow is established.
- Acceptance: `https://hcww.net/sitemap.xml` is submitted successfully in both Google Search Console and Bing Webmaster Tools, and any basic verification notes are recorded.
- Completion: Setup path documented in `docs/search_engine_submission_runbook.md`; external account access is still required.

### POST-02 Publish Next Post-Launch Content Update

- Status: `todo`
- Owner: `unassigned`
- Depends On: `LIVE-06`
- Summary: Publish the next content-focused update so the site moves from launch completion into active growth.
- Acceptance: The repo includes one meaningful new public content improvement such as a blog post, service-page refresh, or other SEO-relevant update aligned with the content workflow.
- Completion:

## Completed Work

Add all `done` tasks here.

### LIVE-06 Complete External Post-Launch Route Audit

- Status: `done`
- Owner: `Codex`
- Depends On: `LIVE-01`, `LIVE-04`, `LIVE-05`
- Summary: Re-check the core public routes and redirects on the live host after launch so the remaining broken-link follow-up is either resolved or documented accurately.
- Acceptance: The repo contains a concise post-launch audit confirming the public route set and redirect behavior, and the launch docs no longer list the broken-link sweep as unresolved if no issues are found.
- Completion: Added `docs/post_launch_audit.md` and verified on June 20, 2026 that the main public routes, robots, sitemap, HTTP-to-HTTPS redirect, and `www` redirect all responded successfully.

### LIVE-03 Configure Uptime Monitoring and Alerts

- Status: `done`
- Owner: `user`
- Depends On: `LIVE-01`
- Summary: Create the external uptime monitor checks and route alerts to the correct owner destination.
- Acceptance: Public monitors are active for the core routes, alert delivery is confirmed, and the launch docs no longer list uptime monitoring as unresolved.
- Completion: User confirmed on June 20, 2026 that Better Stack monitoring is active for `https://hcww.net/` and routed into Microsoft Teams for alert updates; broader route coverage remains a recommended follow-up rather than a launch blocker.

### LIVE-02 Configure Production Analytics

- Status: `done`
- Owner: `user`
- Depends On: `LIVE-01`
- Summary: Select and configure the production analytics platform, then install the final public-site script or tag.
- Acceptance: The chosen analytics platform is active on `https://hcww.net/`, the implementation is reflected in the repo if code changes are needed, and the launch docs no longer list analytics as unresolved.
- Completion: User confirmed on June 20, 2026 that Cloudflare Web Analytics is enabled by default for the live site and reporting metrics such as visits, page views, and page load time.

### LIVE-01 Validate Public Launch Baseline

- Status: `done`
- Owner: `Codex`
- Depends On: `LAUNCH-03`
- Summary: Check the live Cloudflare Pages deployment on the public host and record which launch-baseline items are now confirmed versus still pending.
- Acceptance: The repo documents the results of the public-host validation pass, including HTTPS behavior, public route reachability, and any newly discovered launch blockers.
- Completion: Verified on June 20, 2026 that `https://hcww.net/`, `/contact/`, `/robots.txt`, and `/sitemap.xml` returned `200`, confirmed `http://hcww.net/` redirects to `https://hcww.net/`, and documented that `https://www.hcww.net/` did not resolve during the live check.

### LIVE-04 Finish Manual Launch QA

- Status: `done`
- Owner: `user`
- Depends On: `LIVE-01`
- Summary: Complete the remaining manual checks that require browser and inbox validation outside the current environment.
- Acceptance: The live contact form delivery is confirmed end to end, key pages are checked on real devices or browsers, and any remaining launch issues are either fixed or explicitly accepted.
- Completion: User confirmed completion of the live contact-form, browser, and device QA checks on June 20, 2026.

### LIVE-05 Configure `www` Redirect to Apex Domain

- Status: `done`
- Owner: `Codex`
- Depends On: `LIVE-01`
- Summary: Configure Cloudflare so `https://www.hcww.net/` redirects permanently to `https://hcww.net/`.
- Acceptance: `https://www.hcww.net/` resolves publicly and returns a permanent redirect to the apex domain without breaking the live Pages site.
- Completion: Verified on June 20, 2026 that `https://www.hcww.net/` returned `301` with `Location: https://hcww.net/`.

### LAUNCH-01 Replace Launch-Direction Contact Flow with Hosted Submission Path

- Status: `done`
- Owner: `Codex`
- Depends On: `PH7-03`
- Summary: Replace the current email-app handoff with a real hosted contact submission flow that works on the deployed static site.
- Acceptance: The Contact page submits through a hosted form endpoint, provides a success path, and no longer depends on the visitor having a local email app configured.
- Completion: Updated `/contact/` to post to a hosted form endpoint, added a confirmation route at `/contact/thanks/`, and changed the shared contact-form script to support the hosted submission path.

### LAUNCH-02 Update Launch Operations and Legal Notes

- Status: `done`
- Owner: `Codex`
- Depends On: `LAUNCH-01`
- Summary: Update the operations, privacy, and launch-readiness documentation so it reflects the live hosted inquiry path and the reduced blocker list.
- Acceptance: The operations and audit docs accurately describe the new contact handling model, any third-party form processing, and the remaining launch blockers.
- Completion: Updated the operations baseline, readiness audits, deployment plan, and privacy policy so they reflect the hosted form flow, third-party processing note, and the narrower launch blocker set.

### LAUNCH-03 Re-Audit Remaining Launch Blockers

- Status: `done`
- Owner: `Codex`
- Depends On: `LAUNCH-01`, `LAUNCH-02`
- Summary: Re-review the launch checklist after the contact-flow upgrade and capture only the blockers that still require external account setup or public-host validation.
- Acceptance: The repo contains a concise launch-blocker audit with the contact submission path resolved and only the genuinely remaining blockers listed.
- Completion: Added `docs/launch_blocker_cleanup_audit.md` to capture the resolved hosted contact path and the remaining launch blockers that still require external setup or public-host checks.

### PH8-01 Build Blog Landing and Content Entry Points

- Status: `done`
- Owner: `Codex`
- Depends On: `PH7-03`
- Summary: Create a blog landing page and add the shared routing updates needed to make long-term content growth discoverable on the site.
- Acceptance: The site includes a crawlable blog landing page with clear post entry points, and sitewide navigation or footer routing exposes the blog path cleanly.
- Completion: Added `/blog/`, exposed the blog through shared navigation and footer links, and created a crawlable blog landing page with clear article entry points.

### PH8-02 Publish Initial Blog Post Pipeline

- Status: `done`
- Owner: `Codex`
- Depends On: `PH8-01`
- Summary: Publish the first set of static blog posts so the site has a real example of the content-growth model rather than an empty section.
- Acceptance: The repo includes at least two real blog post pages with consistent structure, metadata, internal links, and content aligned with the documented blog ideas.
- Completion: Added two starter posts at `/blog/5-signs-your-business-website-needs-an-update/` and `/blog/what-is-managed-it-support/` with article metadata, internal service links, and consistent static structure.

### PH8-03 Document Ongoing Content Maintenance Workflow

- Status: `done`
- Owner: `Codex`
- Depends On: `PH8-01`, `PH8-02`
- Summary: Document the repeatable workflow for adding blog posts, refreshing services copy, and maintaining the static site over time.
- Acceptance: The repo contains a concise content-maintenance guide that explains how to add posts, update sitemap coverage, and keep recurring site content current.
- Completion: Added `docs/content_maintenance_workflow.md` with the repeatable process for publishing posts, updating services content, and keeping sitemap and route coverage current.

### PH8-04 Validate Phase 8 Growth Foundation

- Status: `done`
- Owner: `Codex`
- Depends On: `PH8-01`, `PH8-02`, `PH8-03`
- Summary: Review the blog setup and maintenance workflow together to confirm the site now has a practical path for post-launch content growth.
- Acceptance: The blog landing, starter posts, and maintenance workflow are verified together, and any remaining growth limitations are documented clearly.
- Completion: Added a Phase 8 growth-foundation audit, updated the sitemap with the new blog routes, and confirmed the site now has a workable static-friendly content growth path.

### PH7-01 Strengthen On-Page SEO and Local Signals

- Status: `done`
- Owner: `Codex`
- Depends On: `PH6-04`
- Summary: Improve metadata, internal local signals, and crawlable launch details so the core pages are better prepared for search and local discovery.
- Acceptance: Core pages include stronger local search cues, consistent metadata coverage, and any needed sitewide crawlable updates for the current route set.
- Completion: Added `og:locale` coverage across the route set, JSON-LD structured data to the homepage and Contact page, and verified sitemap coverage for the current public routes.

### PH7-02 Polish Accessibility and Frontend Readiness

- Status: `done`
- Owner: `Codex`
- Depends On: `PH6-04`
- Summary: Apply the most important accessibility and frontend quality fixes that can be completed within the current static site approach.
- Acceptance: The site includes meaningful accessibility polish, cleaner interaction states, and frontend adjustments that improve launch readiness without changing the chosen stack.
- Completion: Added reduced-motion handling, better contact link semantics, status-message accessibility improvements, and cleaner interaction behavior in the shared shell and contact flow.

### PH7-03 Create Launch Readiness Audit and Checklist

- Status: `done`
- Owner: `Codex`
- Depends On: `PH7-01`, `PH7-02`
- Summary: Review the site against the Phase 7 goals and produce a clear checklist of what is complete, what was validated, and what still blocks launch.
- Acceptance: The repo contains a concise launch-readiness audit that covers SEO, accessibility, broken-link risk, route coverage, and remaining blockers for public release.
- Completion: Added a Phase 7 launch-readiness audit with the outcome review, launch checklist, source-level validation notes, and remaining launch blockers.

### PH6-01 Implement Contact Form Behavior and Inquiry Flow

- Status: `done`
- Owner: `Codex`
- Depends On: `PH4-05`
- Summary: Add real client-side contact form behavior, clearer intake guidance, and a practical inquiry flow that lets visitors initiate contact reliably without a backend.
- Acceptance: The Contact page includes working form validation and a submission flow that guides visitors into email contact with clear fallback messaging and a documented operational limitation.
- Completion: Updated `contact/index.html` and `assets/js/site-shell.js` with client-side validation, inquiry-type intake, prefilled email handoff behavior, and explicit manual fallback guidance.

### PH6-02 Add Legal Pages and Sitewide Legal Links

- Status: `done`
- Owner: `Codex`
- Depends On: `PH4-05`
- Summary: Create Privacy Policy and Terms of Service pages, then expose them through the shared site shell and sitemap.
- Acceptance: The site includes accessible Privacy Policy and Terms pages, both are linked in the footer, and the sitemap reflects the new routes.
- Completion: Added `/privacy/` and `/terms/`, exposed both routes in the shared footer, and expanded `sitemap.xml` to include the legal pages and new service-detail pages.

### PH6-03 Document Launch Operations Baseline

- Status: `done`
- Owner: `Codex`
- Depends On: `PH6-01`, `PH6-02`
- Summary: Record the launch-ready baseline for inquiry handling, business hours, scheduling stance, analytics direction, and uptime monitoring so operations are explicit before launch.
- Acceptance: The repo documents the selected contact-handling workflow, business-hours wording, scheduling decision, analytics direction, and monitoring plan for launch preparation.
- Completion: Documented the Phase 6 launch-direction inquiry flow, business-hours wording, no-scheduling decision, analytics direction, and uptime-monitoring baseline.

### PH6-04 Validate Phase 6 Operations Readiness

- Status: `done`
- Owner: `Codex`
- Depends On: `PH6-01`, `PH6-02`, `PH6-03`
- Summary: Review the operational and legal additions together and capture any remaining launch-blocking gaps before Phase 7.
- Acceptance: The updated contact flow, legal pages, and operations baseline are verified together, and any remaining launch blockers are documented clearly for the next phase.
- Completion: Recorded the completed Phase 6 operational baseline, legal coverage, validation notes, and the remaining launch blockers for the next phase.

### PH4-01 Build Website Design and Hosting Detail Page

- Status: `done`
- Owner: `Codex`
- Depends On: `PH3-06`
- Summary: Create the dedicated sales page for website design and hosting with scope, process, feature, pricing, and CTA content tailored to website leads.
- Acceptance: The site includes a dedicated website services page that clearly explains deliverables, ideal fit, process, pricing guidance, and the next step for starting a website project.
- Completion: Added `services/website-design-hosting/index.html` with deliverables, fit guidance, process, pricing context, and a website-specific CTA path.

### PH4-02 Build Managed IT Support Detail Page

- Status: `done`
- Owner: `Codex`
- Depends On: `PH3-06`
- Summary: Create the dedicated managed IT support page with plain-English explanations of support tiers, included services, business value, pricing ranges, and CTA flow.
- Acceptance: The site includes a dedicated managed IT page that helps small-business visitors understand what support looks like, what is included, and how to start a support conversation.
- Completion: Added `services/managed-it-support/index.html` with plain-English managed IT framing, tier ranges, included support areas, business-value messaging, and a support-focused CTA.

### PH4-03 Build Cloud and Technical Consulting Detail Page

- Status: `done`
- Owner: `Codex`
- Depends On: `PH3-06`
- Summary: Create the dedicated cloud and technical consulting page that explains advanced support in approachable language while qualifying the right leads.
- Acceptance: The site includes a dedicated consulting page covering common problem types, technical strengths, engagement style, pricing context, and a CTA for booking technical help.
- Completion: Added `services/cloud-technical-consulting/index.html` with common consulting use cases, engagement flow, hourly guidance, and a technical-consultation CTA.

### PH4-04 Align Pricing and Service Routing

- Status: `done`
- Owner: `Codex`
- Depends On: `PH4-01`, `PH4-02`, `PH4-03`
- Summary: Update the Services overview, Pricing page, and key internal links so service-detail pages and pricing ranges reinforce each other.
- Acceptance: The overview and pricing pages route visitors cleanly into the correct service-detail pages, and the pricing language remains consistent across the site.
- Completion: Updated `index.html`, `services/index.html`, and `pricing/index.html` so the core funnel now routes into the dedicated service pages with consistent pricing-aligned CTAs.

### PH4-05 Validate Phase 4 Sales Pages and Capture Deferred Trust Dependencies

- Status: `done`
- Owner: `Codex`
- Depends On: `PH4-01`, `PH4-02`, `PH4-03`, `PH4-04`
- Summary: Review the finished service-detail and pricing pages as a coordinated mid-funnel experience and capture the remaining proof and local-trust needs that are now deferred while the roadmap moves to Phase 6.
- Acceptance: The service-detail pages and pricing page work together as a qualified-lead path, and any remaining needs for portfolio, testimonials, or service-area proof are documented clearly.
- Completion: Added a Phase 4 sales-pages audit, confirmed pricing consistency across the new detail pages, validated the updated Pricing route locally with `200 OK`, and documented the deferred proof and local-trust work while the roadmap moves directly to Phase 6.

### PH3-01 Audit Core Marketing Pages Against Phase 3 Goals

- Status: `done`
- Owner: `Codex`
- Depends On: `PH2-08`
- Summary: Compare the current homepage, About, Services, and Contact pages against the Phase 3 goals and identify the highest-value structural and conversion gaps.
- Acceptance: The repo contains a concise Phase 3 audit that maps each core page to its intended purpose, current strengths, remaining gaps, and the recommended implementation order for follow-up tasks.
- Completion: Added a Phase 3 core-pages audit and used it to capture the current page strengths, funnel gaps, and the Phase 4 dependencies that remain after the Phase 3 pass.

### PH3-02 Strengthen Homepage Visitor Journey

- Status: `done`
- Owner: `Codex`
- Depends On: `PH3-01`
- Summary: Refine the homepage so it carries visitors from first impression through trust, service understanding, and a clear contact action with less friction.
- Acceptance: The homepage presents a complete first-impression journey with stronger cross-links, clearer next steps, and section flow that supports contact conversion without relying on other pages to fill major gaps.
- Completion: Added scenario-based routing and service-specific anchor links on `index.html` so visitors can move from the homepage into the right service path more intentionally.

### PH3-03 Expand About Page Trust Story

- Status: `done`
- Owner: `Codex`
- Depends On: `PH3-01`
- Summary: Deepen the About page so it better supports credibility, local identity, and relationship confidence for visitors evaluating whether to reach out.
- Acceptance: The About page includes a fuller founder story, clearer values and differentiators, and strong links back into services or contact so it functions as a meaningful trust page rather than a short profile.
- Completion: Expanded `about/index.html` with a client-outcome section, stronger local-rooted positioning, and explicit links into services, pricing, and contact.

### PH3-04 Improve Services Overview Page Navigation

- Status: `done`
- Owner: `Codex`
- Depends On: `PH3-01`
- Summary: Turn the Services page into a better decision page by helping visitors compare offerings, understand fit, and move toward the right next action.
- Acceptance: The Services page gives visitors a clearer overview of each service category, explains how to choose a starting point, and routes them toward contact or the later Phase 4 detail pages.
- Completion: Added service anchors and a comparison-oriented “Which service fits?” section in `services/index.html` to make the overview page a stronger mid-funnel decision page.

### PH3-05 Increase Contact Page Conversion Clarity

- Status: `done`
- Owner: `Codex`
- Depends On: `PH3-01`
- Summary: Refine the Contact page so outreach feels easier, more trustworthy, and more actionable for new visitors.
- Acceptance: The Contact page clearly explains why to reach out, what information is helpful, and what happens next, with a layout and messaging flow that reduces hesitation.
- Completion: Expanded `contact/index.html` with visitor-type guidance, stronger response expectations, richer intake hints, and clearer “what happens next” messaging.

### PH3-06 Validate Core Marketing Funnel and Capture Phase 4 Dependencies

- Status: `done`
- Owner: `Codex`
- Depends On: `PH3-02`, `PH3-03`, `PH3-04`, `PH3-05`
- Summary: Review the updated core marketing pages together as a single visitor journey and record any remaining dependencies that belong in Phase 4.
- Acceptance: The homepage, About, Services, and Contact pages work together as a coherent marketing funnel, and any remaining needs for service-detail pages or pricing follow-ups are documented clearly.
- Completion: Reviewed the updated core pages together against the Phase 3 goal, refreshed the Phase 3 audit, and documented that the major remaining gaps are now dedicated service pages and operational contact handling in later phases.

### PH2-01 Finalize Phase 2 Content Strategy

- Status: `done`
- Owner: `Codex`
- Depends On: `none`
- Summary: Convert the Phase 2 brand, business, and site structure guidance into an approved content outline for the homepage, About, Services, Pricing, and Contact pages.
- Acceptance: The repo documents the exact section order, key messages, and CTA intent for each Phase 2 page so implementation can proceed without inventing copy structure during build.
- Completion: Added a Phase 2 content strategy with page-by-page section order, CTA intent, reusable trust themes, and voice guardrails for the five Phase 2 pages.

### PH2-02 Apply Brand Typography and Visual Direction

- Status: `done`
- Owner: `Codex`
- Depends On: `PH2-01`
- Summary: Refine the shared visual system so the live site more fully reflects the brand style guide for typography, color use, spacing, and overall presentation.
- Acceptance: Shared styles and shell components visibly align with `docs/brand_style.md`, including the selected heading and body font strategy, stronger brand hierarchy, and a more intentional Hill Country visual feel across core templates.
- Completion: Reworked the shared shell and stylesheet with Montserrat, Inter, Playfair Display, expanded brand treatments, stronger section patterns, and a more intentional Hill Country visual direction.

### PH2-03 Rewrite Homepage Messaging and Trust Blocks

- Status: `done`
- Owner: `Codex`
- Depends On: `PH2-01`, `PH2-02`
- Summary: Update the homepage copy and section structure to clearly express the value proposition, services snapshot, differentiators, and primary calls to action.
- Acceptance: The homepage presents approved Phase 2 messaging for hero, service summary, trust-building content, and final CTA, with copy that matches the documented brand voice and supports a clear visitor path.
- Completion: Rewrote `index.html` with a new hero, founder trust snapshot, service overview cards, differentiator blocks, service-area messaging, and consultation-focused CTAs.

### PH2-04 Build Founder Story and Local Identity Content

- Status: `done`
- Owner: `Codex`
- Depends On: `PH2-01`, `PH2-02`
- Summary: Expand the About page to present the founder story, local roots, enterprise background, values, and working style in a trust-building format.
- Acceptance: The About page includes clear sections for founder background, mission or values, differentiators, and a relationship-oriented CTA that reflects the business plan and site structure guidance.
- Completion: Expanded `about/index.html` with the founder narrative, mission and values framing, local relationship positioning, and a direct trust-building CTA.

### PH2-05 Align Services, Pricing, and Contact Messaging

- Status: `done`
- Owner: `Codex`
- Depends On: `PH2-01`, `PH2-02`
- Summary: Refine the Services, Pricing, and Contact pages so their copy, summaries, and CTAs use consistent positioning and set up later detail-page work.
- Acceptance: The Services, Pricing, and Contact pages use approved voice and tone, clearly describe the core offerings and pricing approach, reinforce trust, and hand visitors to the next action without placeholder-level messaging.
- Completion: Rewrote the Services, Pricing, and Contact pages with clearer positioning, detailed service and pricing summaries, low-pressure contact messaging, and consistent consultation-oriented CTAs.

### PH2-06 Create Reusable Trust and CTA Patterns

- Status: `done`
- Owner: `Codex`
- Depends On: `PH2-03`, `PH2-04`, `PH2-05`
- Summary: Establish reusable content and UI patterns for differentiators, reassurance copy, trust statements, and calls to action that can be reused in later phases.
- Acceptance: The codebase includes shared page patterns or section treatments for trust signals and CTAs that are already applied on the Phase 2 pages and can be reused on future service and proof pages without duplicating structure decisions.
- Completion: Added reusable hero, trust, metric, quote, process, contact, pricing, and CTA patterns in `assets/css/styles.css` and applied them across the core Phase 2 pages.

### PH2-07 Prepare Brand Assets and Contact Source of Truth

- Status: `done`
- Owner: `Codex`
- Depends On: `PH2-01`
- Summary: Gather or document the required logo direction, imagery plan, contact details, and any placeholder asset decisions needed to support the brand implementation work.
- Acceptance: The repo records the current source of truth for logo usage, imagery expectations, contact details, and any approved placeholders or missing assets so Phase 3 page work is not blocked by ambiguity.
- Completion: Added `docs/brand_assets_source_of_truth.md` to capture the current logo placeholder direction, imagery guidance, CTA language, and the authoritative contact details used in the site.

### PH2-08 Validate Phase 2 Outcomes and Queue Phase 3 Follow-Ups

- Status: `done`
- Owner: `Codex`
- Depends On: `PH2-03`, `PH2-04`, `PH2-05`, `PH2-06`, `PH2-07`
- Summary: Review the completed Phase 2 work against `docs/phases.md`, `docs/brand_style.md`, and `docs/AGENTS.md`, then capture any remaining gaps before core page build continues.
- Acceptance: Phase 2 deliverables are verified in the running site and documentation, and any unresolved issues are either fixed or turned into clearly scoped follow-up tasks for Phase 3.
- Completion: Fetched `origin` to confirm the branch is current, validated local HTTP responses for the updated home and pricing routes, and reviewed the refreshed Phase 2 pages and documentation for consistency before leaving the queue ready for Phase 3.

### PH1-01 Confirm Site Stack and Project Structure

- Status: `done`
- Owner: `Codex`
- Depends On: `none`
- Summary: Choose the site stack and define the initial project structure for the Hill Country Web Works website.
- Acceptance: The repo contains the selected stack scaffold or a documented implementation decision, and the structure supports shared layouts, styling, page routes, and deployment.
- Completion: Selected a dependency-light static HTML, CSS, and vanilla JavaScript stack and documented the structure in `docs/stack_decision.md`.

### PH1-02 Create Base Application Shell

- Status: `done`
- Owner: `Codex`
- Depends On: `PH1-01`
- Summary: Build the base application shell with the main entry point, shared layout, and placeholder page routing.
- Acceptance: The site runs locally with a reusable app shell that includes a header, main content area, footer, and placeholder routes or pages for the planned site structure.
- Completion: Added the homepage plus placeholder About, Services, Pricing, and Contact routes with a shared shell and reusable layout sections.

### PH1-03 Implement Global Design Tokens and Base Styles

- Status: `done`
- Owner: `Codex`
- Depends On: `PH1-02`
- Summary: Define and apply the global styling foundation for colors, typography, spacing, links, and button treatments.
- Acceptance: The site includes reusable global styles or tokens aligned with the brand guide, and shared UI elements render consistently across the base shell.
- Completion: Added shared tokens, spacing, button styles, card treatments, responsive grids, and page-level visual patterns in `assets/css/styles.css`.

### PH1-04 Build Shared Navigation and Layout Patterns

- Status: `done`
- Owner: `Codex`
- Depends On: `PH1-02`, `PH1-03`
- Summary: Implement shared navigation, footer, and layout patterns that can be reused across all future pages.
- Acceptance: The site has responsive global navigation and footer components, and content pages can use a consistent layout structure without page-specific duplication.
- Completion: Implemented reusable header and footer rendering in `assets/js/site-shell.js` with shared CTA and content layout patterns across the routed pages.

### PH1-05 Establish Baseline SEO, Accessibility, and Performance Standards

- Status: `done`
- Owner: `Codex`
- Depends On: `PH1-02`, `PH1-03`, `PH1-04`
- Summary: Add the baseline technical standards needed to support accessibility, metadata, and performance from the start.
- Acceptance: The site includes foundational metadata, semantic structure, accessibility-aware defaults, and an agreed validation approach for performance, accessibility, and SEO checks.
- Completion: Added per-page metadata, canonical URLs, skip links, focus states, `robots.txt`, `sitemap.xml`, and a documented baseline in `docs/foundation_standards.md`.

### PH1-06 Define Deployment, Hosting, and SSL Plan

- Status: `done`
- Owner: `Codex`
- Depends On: `PH1-01`
- Summary: Document the planned deployment path, hosting approach, domain handling, DNS ownership, and SSL strategy for staging and production.
- Acceptance: The project has a documented launch path covering hosting, deployment flow, DNS, SSL, and any required external accounts or access dependencies.
- Completion: Documented a Cloudflare Pages deployment approach, DNS ownership expectations, SSL strategy, and contact form direction in `docs/deployment_plan.md`.

### PH1-07 Validate Phase 1 Foundation and Record Follow-Up Gaps

- Status: `done`
- Owner: `Codex`
- Depends On: `PH1-04`, `PH1-05`, `PH1-06`
- Summary: Review the completed foundation work against Phase 1 goals and capture any remaining gaps before Phase 2 begins.
- Acceptance: Phase 1 outputs are verified against `docs/phases.md` and `docs/AGENTS.md`, and any remaining issues are either resolved or turned into clearly scoped follow-up tasks.
- Completion: Verified local route responses for the core pages with `200 OK` over a local HTTP server and confirmed the active queue is empty pending commit cleanup.
