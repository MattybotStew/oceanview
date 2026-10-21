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
| **1** — Global chrome (**Q0**) | ✅ on Local · ✅ **on staging** | One CSS append to `oceanview-wpbakery.css` (no PHP). Verified live 2026-10-21 |
| **3** — Promote Phase 1 | ✅ **done 2026-10-21** | CSS block appended to `oceanview-wpbakery.css` on staging, verified live at 1440px + 390px across 7 pages. No PHP, no DB push, no purge needed |
| **2** — Page builder | Open | P0 Products + Home; P1 Contact + Blog — **WPBakery on Local**, then staging |
| **4** — Follow-ups | Open | **Prod strategy** (prod is still the legacy site — not a CSS append). Then Figma article/modal pairs |

**Order after staging Q0:** Q1 sweep (Home stats gap, Client Resources nav band, prod hero CSS) → **S** Products nav → Home sections → Contact tabs → Blog grid → manual article QA.

### Phase 1 / Q0 — ✅ verified on Local

File-only promote (**no DB push**; ACF `options_enable_stock_ticker` on staging is separate):

1. ✅ **104px header stack** — ticker kept (`oceanview_ticker_enabled()` + ACF); nav **72px**; `--ov-header-h` on `<html>` via `syncContentOffset()`; `#content { margin-top: var(--ov-header-h) !important }`.
2. ✅ **Same offset on every template** — home hero card ~top **124** / left 20 / 1400×800.
3. ✅ **Audience pills** — outline, **21.92px** label in 44px control.
4. ✅ **Section intros** — **630.9px** column; eyebrow **10px** / deck **18px**; 40px dead gap before grids removed (scoped).
5. ✅ **Footer** — **37.6px** link step; signup **two** fields + button (GF #21 Last Name hidden at render).

Repo mirrors: `docs/wpbakery/staging-patch/` (CSS block to append + `header.php` / `functions.php` hunks), `docs/wpbakery/enqueue-example.php`.

> ⚠️ **Client:** GF still says "First Name" where prototype says "Name" (last name no longer collected).  
> **Trap:** Do **not** overwrite theme **279KB** `oceanview-wpbakery.css` with the repo **27KB** subset — newsletter row layout breaks. Header stays **`position: fixed`** (legacy `html { overflow-x: hidden }` breaks sticky).

### SFTP/CSS vs WPBakery

| Without WPBakery (Phase 1 + some Q1) | Needs WPBakery / template work |
|--------------------------------------|--------------------------------|
| Header, offset, pills, section measure, footer, GF field trim | Products option-5 sticky nav (~109px band) |
| Scoped CSS (hero weight, spacing trims) | Contact left hero + **4× 51px tabs** |
| | Blog **grid** + closing band (not ~10k px stack) |
| | Home — Why Oceanview link on own row; Current Rates band |

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
Phase 1 (Q0) done on Local — next: SFTP promote to WPE staging OR Phase 2 WPBakery (Products, Home, Contact, Blog).
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
