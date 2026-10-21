# LLM Instructions — Oceanview

This file is read by Claude Code and any other LLM assistants working in this repo.

## Shared Context (read every session)

Read `.clinerules` at the start of every session. It is kept up-to-date by both Claude Code and Cline and contains current project state, recent changes, tech stack rules, file conventions, and things NOT to do. After making any change (no matter how small), update `.clinerules` to reflect what was done so Cline stays in sync.

## Session continuity

This project is worked on by multiple AI agents (Claude Code, Gemini CLI, Deep Code, Grok, …).
- At session start: read `JOURNAL.md` (newest first) and recent `git log`.
- Before ending a session: add a short entry at the top of `JOURNAL.md` — date, agent/model, what was done, decisions, loose ends.

## Unlisted routes (by design)

These are **real pages** with hash routes, but they are **not** in header/footer main nav. That is intentional (campaign/partner/internal destinations), not a bug:

| Route | Component | Purpose |
|-------|-----------|---------|
| `#design` | `DesignPage.jsx` | Internal design system + WPBakery how-to |
| `#nav-dropdowns` | `NavDropdownsPage.jsx` | All desktop mega-menus open/stacked (review handoff) |
| `#product-tab-examples` | `ProductTabExamplesPage.jsx` | Five product-first sticky tab ideas (full titles); catalog body identical under each |
| `#products-filter-test` | `ProductsPage` (`navVariant="parent-filter"`) | Full products page test with option 5 nav (parent filter + product tabs) |
| `#cetera-landing` | `CeteraLandingPage.jsx` | Partner landing |
| `#lpl-landing` | `LPLLandingPage.jsx` | Partner landing |
| `#national-senior-games` | `NationalSeniorGamesPage.jsx` | Sponsorship landing |
| `#protection-for-whats-next` | `ProtectionForWhatsNextPage.jsx` | September 2026 advisor campaign (Guide + Checkup) |
| `#alzheimers-awareness` | `AlzheimersAwarenessPage.jsx` | Consumer "Planning Ahead for Alzheimer's and Dementia" guide landing (download PDF + email capture; content from docx web copy) |
| `#home-v2` | `HomeV2Page.jsx` | Alias for live home (same as `#` / `#home`) |
| `#home-legacy` | `HomePage.jsx` | Previous homepage (carousel hero, prod-parity layout) — unlisted |

Open via URL/hash only. Do not “fix” by adding nav links unless stakeholders request it.

---

## Master plan — WordPress vs prototype (2026-10-21)

**Goal:** WP (staging → prod) matches the React prototype on **layout, type, spacing, buttons, nav chrome, form UI** — not marketing copy.  
**Figma board:** [Design QA](https://www.figma.com/design/fe7PYQtVJ2pNZ1VR6lznWz/2026-Oceanview-Design?node-id=9253-2) (WP left, prototype right).

### Source of truth & deliberate divergence

| Reference | Role |
|-----------|------|
| **React prototype** — `npm run dev`, hash routes (`#home`, `#products`, …) | Default UI truth |
| **Local WP `ocean`** — `~/Local Sites/ocean/app/public/` | Build & verify before SFTP |
| **Ticker on WP** | **Stays** — 32px strip + 72px nav = **104px** stack; collapses on scroll (→ 73px). Prototype has **no ticker** (72px only). **Do not remove** the ticker to match Figma/prototype. |

**Theme on Local/staging:** `oceanviewlife` at `wp-content/themes/oceanviewlife/` (top-level — **not** `x-child` / `x`). WP does **not** auto-sync from this git repo; theme mirrors live in `docs/wpbakery/`.

### Doc map (read before WP work)

| Doc | Purpose |
|-----|---------|
| [`LOCAL_OCEAN_WP_PLAN.md`](LOCAL_OCEAN_WP_PLAN.md) | **Agent pickup** — link to full plan |
| [`docs/LOCAL_OCEAN_WP_PLAN.md`](docs/LOCAL_OCEAN_WP_PLAN.md) | Phases 0–4 checklist |
| [`docs/WP_DEV_PUNCHLIST.md`](docs/WP_DEV_PUNCHLIST.md) | Dev handoff + acceptance criteria |
| [`docs/FIGMA_QA_FULL_SCOPE_AND_QUICK_WINS.md`](docs/FIGMA_QA_FULL_SCOPE_AND_QUICK_WINS.md) | All 11 page pairs; **Q0 / Q1 / S** tiers |
| [`docs/DESIGN_QA_WP_HANDOFF.md`](docs/DESIGN_QA_WP_HANDOFF.md) | Full gap list (G1–G9) + SFTP notes |

**Fix tiers:** **Q0** = sitewide SFTP bundle (Phase 1). **Q1** = small per-page CSS or builder tweak. **S** = structural rebuild (nav shell, tabs, grid).

### Execution phases

| Phase | Status | What |
|-------|--------|------|
| **0** — Local ready | ✅ | Pull WPE **Stg** (files + DB); permalinks save; site = `ocean` |
| **1** — Global chrome + type (**Q0**) | ✅ **live on staging, verified 2026-10-21** | One appended CSS block. No PHP, no new file, no new enqueue, no DB push |
| **2** — Page builder | **Next** | P0 Products + Home; P1 Contact + Blog — needs WPBakery admin |
| **3** — Production | ⚠️ **not a CSS append** | Prod still runs the **legacy** theme — see "Production" below |
| **4** — Follow-ups | Open | G9 client decision; Figma article/modal pairs |

### What is live on staging (2026-10-21)

A single Design QA block appended to the **end** of
`wp-content/themes/oceanviewlife/oceanview-wpbakery.css` (staging file now
**295,748 bytes** / 11,518 lines). It is the last stylesheet the theme loads, so
it wins on source order. **No PHP, no mu-plugin, no new stylesheet, no DB change.**

| Item | Live value |
|---|---|
| Header stack | **104px** = 32px ticker + 72px nav; `#content` starts at **y = 104** on every template |
| Scroll behaviour | ticker folds → stack **73px**, offset follows. Pure CSS via `body:has(.ov-ticker--hidden)` — needs **no** theme PHP |
| Audience pills | outline, **21.92px** label in the 44px control |
| Section intros | **630px** measure, deck **18px**, 40px dead gap gone |
| Section eyebrow | **11px** @ `0.1em` / 17.6px line — **hero** eyebrow stays **10px** @ 1.4px |
| Hero H1 | **800**; `clamp(28px, 8vw, 63px)` home, `clamp(28px, 5.5vw, 63px)` inner pages |
| Accent italics | restored — headings + `.ov-accent` only; `<em>` in body copy stays upright |
| Hero stack rhythm | gap **40** → 28 (≤1100) → 20 (≤720) → 16 (≤480); card padding 28/20 ≤480 |
| Footer | **37.6px** link step; signup = Name + Email + Sign Up on one row |
| Buttons | already at parity — 43.8/61px vs prototype 44.5/61.5px (0.7px, **left alone**, see G7) |

Verified at 1440px + 390px across 7–13 pages; **no horizontal overflow**;
`#content` offset 104 at rest and 73 scrolled on every page.

### Deploying to staging (proven, repeatable)

SFTP only — WPE **SSH is publickey-only** and this machine's key is not
authorised. Use the checked-in driver:

```bash
cd docs/wpbakery/staging-patch
OV_PASS='…' OV_USER='oceanviewstg-matt' ./remote.sh probe      # transport check
OV_PASS='…' ./remote.sh get <remote> <local>                    # download
OV_PASS='…' ./remote.sh put <local>  <remote>                   # upload
```

Remote theme root is **`/`** on the SFTP host (i.e.
`/wp-content/themes/oceanviewlife/…`). Workflow that has been safe every time:

1. `get` the live sheet and compare it with the previous upload — abort if it moved.
2. Edit the repo block (`docs/wpbakery/staging-patch/oceanview-wpbakery.append.css`),
   rebuild Local's file as `baseline + block`, test on Local.
3. `put`, then `get` again and `cmp` — must be byte-identical.
4. `curl` the served CSS for the section marker, then measure with Playwright.

**No cache purge needed** — `filemtime()` versions the file and WPE re-validated
on its own. **Never push the Local DB.**

Two gotchas that cost time: this `expect` build does **not** support `(?i)`, and
the WPE SFTP prompt is `Password:` with a capital P — a case-sensitive match
fails as a silent timeout. Match the literal `assword:`.

### Traps (each one already cost a session)

- **Section padding is already at parity — do not "fix" it.** Every band is
  `padding-block: var(--ov-section-py)` = 80px (64/48/36 down the breakpoints),
  the same token and scale as the prototype, and **no `.vc_row` carries an inline
  padding** from Design Options. A blanket `.vc_row { padding }` rule is the one
  change that breaks the builder. Fix component-level rules instead.
- **`#content` beats a bare class.** The sheet carries
  `#content .ov-eyebrow { font-size: 10px !important }`; a plain
  `.ov-eyebrow` override silently half-applies (tracking changes, size doesn't).
  Include the `#content` prefix.
- **Do not overwrite the theme's `oceanview-wpbakery.css`** with the repo's
  `docs/wpbakery/oceanview-wpbakery.css` — that is a **27KB subset** of the
  **279KB** build and deletes the header/footer/newsletter rules. Append only.
- **Header stays `position: fixed`** — legacy `html { overflow-x: hidden }`
  breaks viewport-relative `sticky`.
- **`--ov-fz-eyebrow: 16px` in `src/styles/tokens.css` is unused** — no
  component renders 16px. Do not wire it up.
- **Ticker stays on WP** (104px stack). It is a deliberate divergence from the
  prototype, not a defect.

### Production — read before planning any prod work

`oceanviewlife.com` is **not** running this build:

| | Prod | Staging |
|---|---|---|
| `oceanview-wpbakery.css` | **36KB** / 1,279 lines | **295KB** / 11,518 lines |
| `ov-ds` body class | **none** | present |
| `ov-hero-title` / `ov-section` / `ov-ticker` markup | **0 occurrences** | everywhere |
| WPBakery | 8.7.3 | 9.0.1 |
| Template | `page-template-default` | `template-oceanview-v2` |

So the Design QA block **cannot be appended to prod** — the selectors match
nothing there. Prod is the legacy site; reaching it needs the **design-system
migration** (templates + DS sheet + per-page `_oceanview_ds_enabled` opt-in),
which is a project, not a push. `docs/HOMEPAGE_DESIGN_AUDIT.md`'s production
section predates this and should be re-checked before anyone plans from it.

### SFTP/CSS vs WPBakery

| Without WPBakery (done) | Needs WPBakery / template work |
|--------------------------------------|--------------------------------|
| Header, offset, pills, section measure, eyebrow, hero type/rhythm, footer | Products option-5 sticky nav (~109px band) |
| Scoped CSS on component classes | Contact left hero + **4× 51px tabs** |
| | Blog **grid** + closing band (not ~10k px stack) |
| | Home — Why Oceanview link on own row; Current Rates band |
| | Anything that changes row/column **structure** |

### Page-level backlog (Phase 2 / structural)

| Priority | Page | Match prototype |
|----------|------|-----------------|
| P0 | **Products** | Option 5: full-width category pills (3 equal thirds) + product tabs — `#products` / `ProductsPage.jsx` |
| P0 | **Home** | Stats spacing; Why OV CTA on own row; Current Rates band. ✅ hero below header |
| P1 | **Contact** | Left hero + four tabbed sections (51px tabs) |
| P1 | **Blog index** | Grid + closing band |
| P2 | About, Leadership, Harbourview, Client Resources, Insights, White Papers, Individuals | Mostly Q0 — re-QA after staging promote |
| — | Articles + pro-resource **modals** on Figma | Not yet diffed |

Newsroom / FAQ on the board = WP-only duplicates (no prototype column).

### Session prompt (Local / WP parity)

```text
Read AGENTS.md “Master plan — WordPress vs prototype”, docs/LOCAL_OCEAN_WP_PLAN.md, docs/DESIGN_QA_WP_HANDOFF.md.
Local root: ~/Local Sites/ocean/app/public/  Theme: oceanviewlife
Phase 1 (Q0) is LIVE on WPE staging and verified — next: Phase 2 WPBakery (Products nav, Contact tabs, Blog grid, Home bands).
Compare to npm run dev (hash routes). Ticker stays on WP (104px stack). UI only, not copy.
```

---

## Current Action Items (React prototype repo)

### 🎯 Priority Tasks for Matt

**Blocking Haley's 7/25 deadline:**
- ✅ **Supplied full page list** (53 pages: 51 live + 2 internal) for dev subtask creation

**React / prototype backlog:**

1. ✅ **Hero spacing below hero** — `marginBottom: 40` removed from `Hero.jsx` / `PageHero.jsx` (2026-09-09).

2. **Product page body** (cards, tabs behavior, mobile) — reference `ProductsPage.jsx`, `ProductsCard.jsx` for Mikko where WP lags prototype.

3. **Product sticky nav — decided in React (2026-10-21)**
   - **Live `#products`:** option 5 `navVariant="parent-filter"` (same as `#products-filter-test`).
   - **Desktop:** three **full-width category pills** (equal thirds) + product tabs; **mobile:** category dropdown + scrollable product tabs.
   - **Board:** `#product-tab-examples` (five alternatives); `#products-filter-test` for full-page review.
   - **WP handoff:** implement same chrome in WPBakery — see `docs/DESIGN_QA_WP_HANDOFF.md` (Products row).
   - Unused: `ProductAccordionNav.jsx`.

**Figma MCP client available:**
- `figma-get-node.mjs` — extracts design metadata, context, screenshots
- `figma-mcp-client.mjs` — lists available tools
- Requires MCP server running on port 3845

**Complete page inventory in `plan.md`** (session artifact)

**White inline signup pages + client request:** `docs/WHITE_FORM_PAGES.md`

---

## Recent work (2026-10-21 — Big Pickle)

- **Master plan** documented above + [`docs/LOCAL_OCEAN_WP_PLAN.md`](docs/LOCAL_OCEAN_WP_PLAN.md), [`docs/FIGMA_QA_FULL_SCOPE_AND_QUICK_WINS.md`](docs/FIGMA_QA_FULL_SCOPE_AND_QUICK_WINS.md), [`docs/WP_DEV_PUNCHLIST.md`](docs/WP_DEV_PUNCHLIST.md).
- **Phase 1 (Q0) global chrome** built and geometry-verified on Local `ocean`; **ticker stays** (Matt decision).
- **Next:** SFTP promote Phase 1 to WPE staging, then Phase 2 WPBakery (Products, Home, Contact, Blog). Details in `JOURNAL.md`.

## Recent work (2026-07-22 — Composer)

### Product sticky-nav exploration

- Rebuilt `#product-tab-examples` around **product-first** options (not category-first accordion).
- Full titles only (e.g. “Fixed Annuities with Flexibility”, “Harbourview MYGA”).
- Identical mock catalog under each of the five tab shells.
- Wired `#products-filter-test` for real-page review of option 5 without touching live `#products`.

---

## Recent work (2026-07-10 — Grok)

### WPBakery design system package

Production build-out is **WPBakery on WordPress**. React is the prototype/reference.

- **Folder:** `docs/wpbakery/`
- **CSS to enqueue:** `docs/wpbakery/oceanview-wpbakery.css` (tokens + `ov-*` classes)
- **PHP enqueue example:** `docs/wpbakery/enqueue-example.php` (child theme `functions.php`)
- **Builder guide:** `docs/wpbakery/README.md`
- **Copy-paste HTML:** `docs/wpbakery/recipes.html`
- **Row/column recipes:** `docs/wpbakery/shortcodes.md`
- **Hex swatches:** `docs/wpbakery/color-swatches.md`

When tokens/components change in React, update the WPBakery CSS too and bump the enqueue version. Prefer Raw HTML for hero + CTA banner; use Row Extra class `ov-section ov-bg-*` for section bands.

### Design System page (`#design`) — system + WPBakery how-to

- **Route:** `#design` (unlisted)
- **File:** `src/components/DesignPage.jsx`
- **Dual purpose:**
  1. **WPBakery how-to (top)** — setup (fonts → CSS → enqueue), package file map (`docs/wpbakery/`), where to put Extra class names, React→WPB map, examples
  2. **Design system (below)** — live tokens/components with teal **WPBakery** callouts (`ov-*` classes) on each section
- Sidebar: “WPBakery” group + “Design system” group
- **Source of truth:** React visuals = `tokens.css` + shared components; WP production = `docs/wpbakery/oceanview-wpbakery.css` + recipes — keep both in sync

---

## Recent work (2026-07-09 — Grok + Claude Code)

### National Senior Games sponsorship landing

- **Route:** `#national-senior-games` (prod target: `oceanviewlife.com/national-senior-games`)
- **File:** `src/components/NationalSeniorGamesPage.jsx`
- **Wired in:** `Page.jsx` (`PAGE_ROUTES`, `ROUTE_TO_NAV`, meta title/description, switch case)
- **Responsive:** `.nsg-split` / `.nsg-split-reverse` in `src/styles/tokens.css`
- **Copy source:** `docs/National Senior Games Sponsorship Landing Page Web Copy V2.docx` (in-repo; use this for copy/compliance)

**Sections (top → bottom):**
1. Hero card — “Celebrating the *Long Game*” + dual CTAs (Explore Retirement Resources → `#individuals`, Learn About Oceanview → `#about`)
2. Navy band — Featured-Products-style intro: eyebrow “National Senior Games”, H2 “Every chapter can be full of *purpose, progress and possibility.*”, then the two long-game body paragraphs; then “Why We Sponsor” split (headline + copy + image)
3. White band — “The Long Game Matters” (retirement planning connection)
4. Surface tint — About Oceanview + Learn More
5. Email capture — Name + Email + consent + Sign Up (UI-only, no backend)
6. Navy closing — “Keep Moving Toward What *Matters*”
7. CTABanner + full compliance disclosure block from the doc

**Pattern:** Same visual system as partner landings (`PartnerLandingPage` / Cetera / LPL) — hero card, `Eyebrow`, `PillMint`/`PillGhost`, `CTABanner`, navy/teal tokens — but **not** a data-driven `PartnerLandingPage` clone (different section set).

**Not done / loose ends (stakeholder-dependent):**
- Unlisted by design unless they request a nav/footer link
- Placeholder stock images (no NSG-specific photography); NSGA logo rights pending
- Email form is client-side success only
- CTA destinations and assets still open to stakeholder confirm
- Navy H2 + form success message may need compliance confirm

@FIGMA.md
