# Local Ocean — WP parity execution plan

**Pickup:** Agents and Local sessions should start here when working on **WordPress staging parity** against the React prototype.

| | |
|---|---|
| **Local site** | `ocean` → `~/Local Sites/ocean/app/public/` |
| **Staging source** | WP Engine **Oceanview** → **Stg** (`oceanviewstg.wpengine.com`) |
| **Prototype (truth)** | This repo — `npm run dev` → `#home`, `#products`, `#contact`, etc. |
| **Visual diff spec** | [Figma Design QA](https://www.figma.com/design/fe7PYQtVJ2pNZ1VR6lznWz/2026-Oceanview-Design?node-id=9253-2) (WP left, prototype right) |
| **Full gap list** | [`DESIGN_QA_WP_HANDOFF.md`](./DESIGN_QA_WP_HANDOFF.md) |
| **Scope** | Layout, type, buttons, nav, form UI — **not** marketing copy |

---

## Phase 0 — Local site ready

- [x] Local site **ocean** running (green in Local app).
- [x] Pulled from WPE with **Files + Database** (staging, not prod).
- [x] WP Admin → **Settings → Permalinks → Save** once.
- [x] Front page loads and matches staging (not empty WP).
- [x] Note active **child theme** path:  
      `~/Local Sites/ocean/app/public/wp-content/themes/<child-theme>/`  
      → **`oceanviewlife`** (a top-level theme, *not* `x-child` / `x`).

**Terminal:**

```bash
cd ~/Local\ Sites/ocean/app/public
ls wp-content/themes
```

---

## Phase 1 — Global chrome (child theme: PHP + CSS) ✅ **done on Local 2026-10-21**

Do these on **Local** first; push to **staging SFTP** when verified.

| Step | Task | Repo / notes |
|------|------|----------------|
| 1.1 | ✅ **Keep the market ticker** (32px strip above the nav bar, collapses on scroll) — the React prototype dropped it, but WP keeps it by decision. Switch stays in ACF (`options_enable_stock_ticker`) behind the `oceanview_ticker_enabled` filter | React: ticker removed from shell 2026-09-09; prod has it — [`HOMEPAGE_DESIGN_AUDIT.md`](./HOMEPAGE_DESIGN_AUDIT.md) |
| 1.2 | ✅ **72px nav bar** + 32px ticker = **104px header stack**; content starts below it on every template. The offset tracks the ticker collapse in pure CSS (`body:has(.ov-ticker--hidden)`), so no PHP is needed. The bar stays `position: fixed` (sticky is unsafe here — legacy `html { overflow-x: hidden }` breaks viewport-relative sticky) | `--ov-header-h: 72px` in [`tokens.css`](../src/styles/tokens.css); [`Header.jsx`](../src/components/Header.jsx) |
| 1.3 | ✅ **Same header offset on every template** — `#content { margin-top: var(--ov-header-h, 72px) !important }` (beats two legacy inline writers), with `--ov-header-h` kept current as the ticker collapses on scroll | [`DESIGN_QA_WP_HANDOFF.md`](./DESIGN_QA_WP_HANDOFF.md) G2 |
| 1.4 | ✅ **Audience pills** — outline, **21.92px** centered label in the 44px control | `.ov-aud-chip` in `tokens.css` |
| 1.5 | ✅ Ship CSS — the theme already carried the full `oceanview-wpbakery.css`; the parity block is **appended to that same sheet** (no new file, no new enqueue) | [`staging-patch/oceanview-wpbakery.append.css`](./wpbakery/staging-patch/oceanview-wpbakery.append.css) → theme `oceanview-wpbakery.css` |
| 1.6 | ✅ Section headline **630.9px** column, eyebrow **10px** / deck **18px**; trimmed the 40px dead gap before card grids | Handoff G5–G6 |
| 1.7 | ✅ Footer link rhythm **37.6px**; signup row = **two** wide fields + button (GF #21 "Last Name" hidden at render time) | Handoff G8–G9 |

**Verified on Local (1440px + 390px):** header stack **104px** (32px ticker + 72px nav) and content at y=104 on 13 templates; hero card at top 124 / left 20 / 1400×800; pill label 21.92px; section column 630px; footer step 37.6px; footer signup row `[Name][Email][Sign Up]` on one line with consent below. Scrolling past 10px folds the ticker away → stack 73px, content offset follows.

**Promote to staging next:** the **safest ship is one append** — the Design QA block into `oceanview-wpbakery.css` (no PHP, no new files, cannot fatal; the block tracks the ticker collapse in CSS). Then purge the WPE cache. `header.php` and `functions.php` hunks are optional refinements. Step-by-step checks and rollback: [`docs/wpbakery/staging-patch/README.md`](./wpbakery/staging-patch/README.md). The Local DB value (`options_enable_stock_ticker = 1`) is **not** part of the promote.

---

## Phase 2 — Page builder (WP Admin on Local)

SFTP/CSS alone is not enough for these — edit in **WPBakery** on Local, then migrate or repeat on staging.

| Priority | Page | Match prototype |
|----------|------|-----------------|
| P0 | **Products** | Option 5 nav: full-width category pills (3 equal thirds) + product tab row ~109px — see `#products` in React [`ProductsPage.jsx`](../src/components/ProductsPage.jsx) |
| P0 | **Home** | Stats band spacing; “Discover the Oceanview Difference” on own row under Why grid; Current Rates band padding |
| P1 | **Contact** | Left hero + four **51px** tabs + panel (not centered stack) |
| P1 | **Blog** | Grid + closing band (not single long column) |
| P2 | Other marketing pages | Mostly Phase 1 globals |

**Verify:** Side-by-side with `npm run dev` on the same routes.

---

## Phase 3 — Promote to staging (not prod first)

| Method | When |
|--------|------|
| **SFTP** | Child theme files only (`functions.php`, CSS, JS) → WPE **staging** child theme |
| **Local → Push to WP Engine** | Files + DB if builder changed heavily — **staging only**; confirm target env before click |
| **WPE cache** | Purge after any deploy |

Never push Local DB to **production** without staging sign-off and snapshot.

---

## Phase 4 — Still open (not in this plan’s first pass)

- Figma board: article pairs + professional-resource modals — not yet diffed
- Newsroom / FAQ rows on Figma = WP-only duplicates (no prototype column)
- Hero **font-weight 800** on prod WP — [`HOMEPAGE_DESIGN_AUDIT.md`](./HOMEPAGE_DESIGN_AUDIT.md)

---

## Quick links (this repo)

| Doc | Purpose |
|-----|---------|
| [`DESIGN_QA_WP_HANDOFF.md`](./DESIGN_QA_WP_HANDOFF.md) | Full WP vs prototype checklist + SFTP notes |
| [`wpbakery/README.md`](./wpbakery/README.md) | React → WPBakery map |
| [`HOMEPAGE_DESIGN_AUDIT.md`](./HOMEPAGE_DESIGN_AUDIT.md) | Prod/staging hero + ticker |
| [`AGENTS.md`](../AGENTS.md) | Agent backlog summary |

---

## Suggested prompt for a Local / agent session

```text
Read AGENTS.md “Master plan — WordPress vs prototype”, docs/LOCAL_OCEAN_WP_PLAN.md, docs/DESIGN_QA_WP_HANDOFF.md.
Local root: ~/Local Sites/ocean/app/public/  Theme: oceanviewlife
Phase 1 (Q0) is done on Local — next: SFTP promote to WPE staging OR Phase 2 WPBakery (Products, Home, Contact, Blog).
Compare to npm run dev (hash routes). Ticker stays on WP (104px stack). Scope: layout/type/UI only, not copy.
```

---

*Created 2026-10-21 — Matt Local `ocean` clone from WPE staging.*
