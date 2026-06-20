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
