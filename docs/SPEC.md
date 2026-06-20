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

### PH2-01 Finalize Phase 2 Content Strategy

- Status: `done`
- Owner: `Codex`
- Depends On: `none`
- Summary: Convert the Phase 2 brand, business, and site structure guidance into an approved content outline for the homepage, About, Services, Pricing, and Contact pages.
- Acceptance: The repo documents the exact section order, key messages, and CTA intent for each Phase 2 page so implementation can proceed without inventing copy structure during build.
- Completion: Added `docs/phase2_content_strategy.md` with page-by-page section order, CTA intent, reusable trust themes, and voice guardrails for the five Phase 2 pages.

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

## Completed Work

Add all `done` tasks here.

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
