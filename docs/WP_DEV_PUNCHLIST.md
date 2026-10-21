# WordPress dev punchlist — prototype parity

**For:** WP / WPBakery implementation (staging → prod)  
**Source of truth:** React prototype + design tokens in the [oceanview](https://github.com/mattybotstew/oceanview) repo (`npm run dev`, hash routes).  
**Visual spec:** [Figma — Design QA](https://www.figma.com/design/fe7PYQtVJ2pNZ1VR6lznWz/2026-Oceanview-Design?node-id=9253-2) (WordPress left, prototype right).  
**Full board scope + quick wins (Q0/Q1 vs structural):** [`FIGMA_QA_FULL_SCOPE_AND_QUICK_WINS.md`](./FIGMA_QA_FULL_SCOPE_AND_QUICK_WINS.md)  
**Figma handoff note on board:** [WP Dev Punchlist sticky](https://www.figma.com/design/fe7PYQtVJ2pNZ1VR6lznWz/2026-Oceanview-Design?node-id=9273-34) (left of page pairs, yellow frame).  
**Scope:** Layout, typography, spacing, buttons, header/footer chrome, form **UI** — **not** marketing copy or footer link text changes unless product asks separately.

**Intentional WP ≠ prototype:** The **32px market ticker stays** on WordPress (104px header stack: ticker + 72px nav). The React prototype has no ticker (72px only). Do not remove the ticker to match Figma/prototype.

**Environments**

| Env | URL | Notes |
|-----|-----|--------|
| Staging | `oceanviewstg.wpengine.com` | Deploy and QA here first |
| Production | `oceanviewprod.wpengine.com` | After staging sign-off |
| Reference prototype | GitHub Pages / local dev from repo | Match at **1440px** and **390px** |

**Theme:** `oceanviewlife` (child theme path on WPE: `wp-content/themes/oceanviewlife/`).

---

## Summary

| Track | Status | How to ship |
|-------|--------|-------------|
| **A. Global chrome + type (Phase 1)** | ✅ **Live on staging, verified 2026-10-21** | One CSS append to `oceanview-wpbakery.css` — no PHP, no new files. See `docs/wpbakery/staging-patch/` |
| **B. Page layout (Phase 2)** | ⬜ Open | **WPBakery** (and/or theme templates) on each page |
| **C. Hero typography (prod gap)** | ⬜ Open | CSS — see [HOMEPAGE_DESIGN_AUDIT.md](./HOMEPAGE_DESIGN_AUDIT.md) |
| **D. Articles + modals** | ⬜ Not spec’d yet | Pending Design QA on Figma board |

---

## A. Global chrome — deploy to staging (ready)

These fixes are **file-only** (no DB migration required for promote) and land in **three files that already exist on staging** — no new stylesheet, no new `wp_enqueue_style()`, no mu-plugin, no restructuring.

### A0. Safest first — one CSS append, no PHP

| Step | File (staging theme root) | Risk | Rollback |
|------|---------------------------|------|----------|
| **1** | `oceanview-wpbakery.css` — **append** the Design QA block | **none** — no PHP, cannot fatal | delete the block |
| 2 *(optional)* | `header.php` — replace one function (`syncContentOffset`) | low | restore it |
| 3 *(optional)* | `functions.php` — append `oceanview_gf_signup_fields()` + 3 filters | low — needs client OK for G9 | delete the block |

**Step 1 fixes G2/G3, G4, G5, G6 and G8 on its own.** The block tracks the ticker's
scroll-collapse in pure CSS (`body:has(.ov-ticker--hidden)`), using the class the
theme already toggles — so it needs no theme edit. Step 2 only adds measurement
instead of hardcoded 104/73; step 3 is the signup-row trim.

Full hunks, checks and rollback: [`docs/wpbakery/staging-patch/README.md`](./wpbakery/staging-patch/README.md).

> ⚠️ Never replace the theme's `oceanview-wpbakery.css` with this repo's copy — the repo file is a 27KB **subset** of the 279KB build and would delete the header/footer/newsletter rules. Append only.

### What each edit is for

| File | Purpose |
|------|---------|
| `oceanview-wpbakery.css` | `<style>` parity block: default `--ov-header-h: 104px`, the `#content` offset, audience-pill line-height, 630px section measure, Empty Space trim, footer link rhythm |
| `header.php` | `syncContentOffset()` writes `--ov-header-h` onto `<html>` (instead of an inline `margin-top` on `#content`, which the `!important` rule discards) so the ticker's scroll-collapse keeps the content offset in step |
| `functions.php` | Gravity Forms #21: hide “Last Name” so the row is Name + Email + Sign Up. *(Optional: `oceanview_ticker_enabled()` + the header ticker gate — not needed while the ticker is kept.)* |

**After upload:** WPE **cache purge** + hard refresh. Confirm the header stack is **104px** (32px ticker + 72px nav), the ticker collapses on scroll (→ 73px) with no gap, and content starts below the header on **home and inner pages**.

### Global acceptance criteria (1440px desktop)

- [ ] Market ticker **present** (32px strip above the nav bar) and folding away on scroll — kept by decision 2026-10-21, a deliberate divergence from the React prototype.
- [ ] Main nav bar height **72px** (stack 104px with the ticker); page content not hidden under fixed header.
- [ ] **Individuals** / **Professionals** header pills: outline style; label vertically centered (not oversized filled pills).
- [ ] Section intros: headline + body in a **~630px** left column (not full 1200px width).
- [ ] Footer link rows: even vertical rhythm; signup band shows **two** fields + button on one row (consent below).
- [ ] Same header behavior on **home** as on About / Products (no special “hero under menu” case).

### Open product question (signup)

Prototype label is **“Name”**; form may still show **“First Name”** with last name removed. Confirm with client before prod.

### Optional DB (not required for file promote)

The ticker switch lives in ACF (`options_enable_stock_ticker`). Local has it set to `1`; **do not push the Local DB** — staging/production should keep their own ACF value (or pin the state with the `oceanview_ticker_enabled` filter in `functions.php`).

**Technical detail:** See [DESIGN_QA_WP_HANDOFF.md](./DESIGN_QA_WP_HANDOFF.md) Phase 1 (content offset `!important`, legacy JS offset conflict).

---

## B. Page layout — still open (WPBakery / templates)

Compare each page to prototype routes in the table below. **SFTP will not fix row structure** — rebuild or adjust WPBakery rows.

### P0 — High visibility

#### B1. Products (`/products/`)

- [ ] Replace two-line category blocks (title + subtitle, ~136px tall band) with **option 5** nav:
  - Row 1: three **equal-width** category pills (full container width): Fixed Annuities · Fixed Annuities with Flexibility · Fixed Indexed Annuities (**~34px** tab height).
  - Row 2: product tabs (**~51px** height), filtered by category.
  - Total sticky block **~109px**, flush under hero (no extra 40px gap above).
- [ ] **Reference:** React `#products` / `#products-filter-test` — `ProductsPage.jsx` `navVariant="parent-filter"`.

#### B2. Home (`/`)

- [ ] Stats/trust band: remove **~40px** dead space below hero; align stat column typography with prototype (centering/wrapping as designed).
- [ ] **Why Oceanview:** move **“Discover the Oceanview Difference →”** to its **own row** below the 2×2 grid (not inside Financial Strength cell).
- [ ] **Current Rates** band: reduce vertical padding to match prototype section height (~381px vs ~550px) — likely duplicate section padding / empty rows in builder.

### P1

#### B3. Contact (`/contact/`)

- [ ] Hero: **left-aligned** intro band (~416px content width), not centered short hero.
- [ ] Add **four horizontal tabs** (~300px each, ~51px tall) switching support content panels (prototype uses tab list + panel, not stacked sections only).

#### B4. Blog index

- [ ] Replace long single-column post stack with **grid layout** + closing band (match prototype archive density).

### P2 — Mostly global CSS after Phase A

About, Leadership, Harbourview, Client Resources, Insights, White Papers, Individuals — re-QA after Phase A promote; fix any remaining section spacing in builder. **Individuals:** headlines may need narrower text column if still full-width.

### Prototype routes for side-by-side QA

| Page | Prototype (local dev) |
|------|------------------------|
| Home | `#` / `#home` |
| Products | `#products` |
| Contact | `#contact` |
| Blog | `#blog` |
| About / story | `#about` or Our Story route |
| Individuals | `#individuals` |

---

## C. Homepage hero typography (production)

Separate from Design QA board — documented in [HOMEPAGE_DESIGN_AUDIT.md](./HOMEPAGE_DESIGN_AUDIT.md):

- [x] `.ov-hero-title` **font-weight 800** (not 400) — ✅ fixed on staging 2026-10-21 (Design QA block).
- [x] Hero title size ramp aligned with spec — ✅ staging: `clamp(28px, 8vw, 63px)` home, `clamp(28px, 5.5vw, 63px)` inner pages.
- [x] Teal **italic** accent line in H1 (and section H2 accents) — ✅ staging: restores the italic the sitewide reset was flattening.
- [ ] Same three on **production** — needs the same CSS append there.

---

## D. Out of scope / later

- Figma Design QA: long-form **article** pairs and **professional resources** modals — not yet diffed.
- Newsroom / FAQ rows on Figma = duplicate WP captures only (no prototype column).
- Footer **link labels** and product list (LevelCap, Cookies Preferences, etc.) — content/IA unless requested.
- React repo changes do **not** auto-deploy to WP; only theme/builder changes on WPE.

---

## Deploy checklist (staging)

1. WPE snapshot / backup current staging.
2. SFTP **Section A** files to `wp-content/themes/oceanviewlife/`.
3. Purge WPE cache (and CDN if applicable).
4. QA Section A acceptance criteria on: Home, About, Products, Contact, one product detail.
5. Complete Section B in WP Admin on staging (or Local → push DB **only if** agreed and **staging only**).
6. Stakeholder sign-off → promote staging to prod per WPE process.

---

## Repo reference files (for devs with Git access)

| Path | Use |
|------|-----|
| `docs/DESIGN_QA_WP_HANDOFF.md` | Full gap analysis + Phase 1 implementation notes |
| `docs/wpbakery/oceanview-wpbakery.css` | Design system CSS (already on theme; keep in sync) |
| `docs/wpbakery/staging-patch/oceanview-wpbakery.append.css` | Design QA CSS block — append to the theme's `oceanview-wpbakery.css` |
| `docs/wpbakery/enqueue-example.php` | Enqueue pattern for `functions.php` |
| `docs/wpbakery/README.md` | React → WPBakery mapping |
| `src/components/Header.jsx` | Header behavior reference |
| `src/components/ProductsPage.jsx` | Products nav reference |

---

*Document version: 2026-10-21 — Design QA + Local Phase 1 complete; Phase 2 open for WPBakery.*
