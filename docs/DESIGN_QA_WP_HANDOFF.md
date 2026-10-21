# Design QA — WordPress vs React prototype

**Source of truth:** React prototype in this repo (hash routes, `Header.jsx`, `HomeV2Page.jsx`, `ProductsPage.jsx`, etc.) and matching tokens in `src/styles/tokens.css` / `docs/wpbakery/oceanview-wpbakery.css`.

**Comparison board:** Figma file `2026-Oceanview-Design`, page **Design QA** (`node-id=9253-2`). Layout: **WordPress capture on the left**, **prototype on the right** (paired frames).

**Scope for WP dev:** Layout, typography, spacing, buttons, nav chrome, and form UI only — not marketing copy or footer link inventory (unless separately requested).

**Out of scope on this board:** Newsroom and FAQ rows are two WordPress captures each (no prototype pair). Article templates and professional-resource modals on the board are **not yet diffed** in detail.

---

## Recommended fix order

1. ✅ Global header (72px bar + **kept** market ticker, consistent content offset on **every** template including home) — **done on Local**
2. ✅ Global type measure + section gaps + audience pills — **done on Local**
3. ⬜ Products sticky nav (option 5 parent-filter) — needs WPBakery admin
4. ⬜ Contact tab shell + Blog index layout — needs WPBakery admin
5. ⬜ Home-specific bands (stats, Why Oceanview link row, Current Rates padding) — needs WPBakery admin
6. ✅ Footer rhythm + signup form row layout — **done on Local**
7. ⬜ Remaining article pages + modals (if in Mikko’s scope)

---

## Global — all WordPress templates

> Figures below were **re-measured in-browser at 1440px** against the React prototype on 2026-10-21 (earlier prose estimates were approximate — the measured prototype value wins). "WordPress (before)" is the pre-fix state of the Local site.

| # | Issue | Prototype (match this) | WordPress (before) | Status |
|---|--------|------------------------|---------------------|--------|
| G1 | **Header stack** | **72px** nav only (no ticker in React shell) | **104px** = 32px ticker + 72px nav — **keep ticker** (approved WP design) | ✅ done (diverges from prototype by design) |
| G2 | **Header position** | Header **inside** page flow; `Main Content` starts at **y = 72**; hero **below** nav, not under it | **Two models:** home `Body` at y=0 with hero ~20px down (header overlays); inner pages offset **104px** | ✅ done |
| G3 | **Sticky behavior** | `Header.jsx`: `position: sticky; top: 0; z-index: 100` on **72px** bar | Fixed + inconsistent spacer; `top` stack included the ticker | ✅ done (fixed bar — see note) |
| G4 | **Audience pills** | Outline ghost pills; label line **21.92px** (13.7px × 1.6), vertically centered in the **44px** control | Label on a **29px** line (legacy `a { font-size:18px; line-height:29px }`) | ✅ done |
| G5 | **Section headline measure** | Headline + deck in a **630.9px** left column; eyebrow **10px** / deck **18px** | Headline **1200px**, deck **900px @ 16px** — headlines stay on one line | ✅ done |
| G6 | **Section internal gaps** | No dead space between headline block and cards | Extra **40px** `vc_empty_space` container between headline and card grid | ✅ done (scoped to section intros) |
| G7 | **Primary buttons** | `--sm` **44.5px**, `--lg` **61.5px** (the brief's "45px / ~62px" was rounded); pill radius | `--sm` **43.8px**, `--lg` **61px** — same two variants, not a mix | ✅ done (sub-pixel residual — see note) |
| G8 | **Footer link rhythm** | **37.6px** row step (25.6px line box + 12px gap); links flush left in column | **45px** step + **5px** link indent (legacy `ul li` margin/padding) | ✅ done |
| G9 | **Inline signup row** | Two wide fields (**234px** in the home band / **171px** in the footer) + **47px** button on one row, consent below | Three narrow fields **~120px** (first/last/email) + button — different density | ✅ done |
| G10 | **Hero stack rhythm** | `eyebrow → h1 → sub → CTAs` gapped **40px** desktop, scaling **28px ≤1100 / 20px ≤720 / 16px ≤480**; card padding **32/24** ≤720, **28/20** ≤480 | Flat **20px** at every width, plus a stray **10px** eyebrow margin → rhythm read **30 / 20 / 20** | ✅ done |

**React reference:** `src/components/Header.jsx` (sticky 72px, no ticker in tree). **WP CSS:** the Design QA block appended to `oceanview-wpbakery.css` (see Phase 1 below).

> **G1 note — the ticker is kept (2026-10-21, Matt).** The React prototype dropped the market ticker from the shell on 2026-09-09, but the ticker is part of the approved WordPress design: a 32px market-data strip above the 72px nav bar that collapses away once the page scrolls past 10px. WordPress therefore **deliberately diverges from the prototype** here — the nav bar itself is still 72px, the stack is 104px, and the content starts at y = 104. The ACF option (`options_enable_stock_ticker`) remains the switch, so it can still be turned off from WP Admin without a code change.

> **G3 note:** the theme's `.ov-header` stays `position: fixed` rather than `sticky` — the legacy base stylesheet sets `html { overflow-x: hidden }`, which turns the root into a scroll container and breaks viewport-relative sticky positioning. A fixed bar plus a reliable content offset is visually identical at rest and behaves the same when scrolling. The prototype's own `Header.jsx` also pins the bar with `z-index: 100`.

> **G7 note — the "43–61px mix" was a mismeasurement.** Measured across 11 staging pages there are exactly **two** `.ov-btn` heights: **43.8px** (`--sm`, 28 instances) and **61px** (`--lg`, 19 instances). The prototype has the same two variants at **44.5px** and **61.5px** — so these are the design's two sizes, not drift, and the brief's "45px / ~62px" was rounded. The residual is **0.7px / 0.5px**, caused by the theme pinning `line-height: 1.2` where the prototype uses `normal`. Left as-is deliberately: `1.2` is font-independent, so buttons do not change height when PP Mori swaps in or a fallback is used — `normal` would trade 0.7px of exactness for layout shift. The Gravity Forms submit button already matches exactly (47px on both). **No change shipped.**

---

## Phase 1 — implemented on the Local site (2026-10-21)

All global items above except G7 are closed on `https://ocean.local` (theme `oceanviewlife`). Everything is **file-based** so it promotes over SFTP without a database push — and it lands in **three files that already exist** (no new stylesheet, no new enqueue).

| File (theme root) | Change |
|-------------------|--------|
| `oceanview-wpbakery.css` | **Append** the Design QA block (G1–G10 CSS): default `--ov-header-h`, the `#content` offset, G4 pill label, G5 section measure, G6 dead gap, G8 footer rhythm, G10 hero stack rhythm. It is the last sheet the theme loads, so the block wins on source order. **Self-sufficient:** it tracks the ticker collapse in CSS via `body:has(.ov-ticker--hidden)`, using the class the theme already toggles — no PHP needed. Source: `docs/wpbakery/staging-patch/oceanview-wpbakery.append.css` |
| `header.php` *(optional)* | `syncContentOffset()` updates `--ov-header-h` on `<html>` instead of writing an inline `margin-top` on `#content` — the measured height rather than the hardcoded 104/73 the CSS block uses |
| `functions.php` *(optional)* | `oceanview_gf_signup_fields()` trims the newsletter form (G9). Needs a client decision first |

### Why the content offset is a `!important` rule

Two legacy writers were fighting over `#content`'s top offset and both wrote **inline** styles:

1. `library/dist/js/script-min.js` — on `window.load` it runs `$("#content").css("margin-top", $(".header_wrapper").outerHeight())`. `.header_wrapper` is a zero-height wrapper (the DS header is `position: fixed`), so this wrote **`0px`** and the fixed header overlapped the top of the content on every template.
2. `header.php`'s inline `syncContentOffset()` — used to write the measured header height onto `#content` as an inline style; it now updates the `--ov-header-h` custom property on `<html>` instead (an inline style on `#content` would lose to the `!important` rule below).

An author `!important` declaration beats an inline style, so `#content { margin-top: var(--ov-header-h, 104px) !important; }` settles it for good. The default `--ov-header-h` is declared in the Design QA block and `syncContentOffset()` keeps it current, so the offset can never drift from the real header height — including the ticker's scroll-collapse (104px stack → 73px once the ticker folds away).

### G9 — the newsletter field set

The prototype's signup row is `[Name][Email][Sign Up]`. Gravity Forms #21 asked for First Name / Last Name / Email, which is what pushed the row into three narrow thirds — the DS sheet already lays both signup rows out for **two** fields. Rather than edit the form in the database (which would not survive a file-only promote), `functions.php` marks the *Last Name* field hidden at render time via `gform_pre_render` / `gform_pre_validation` / `gform_pre_submission_filter`. Gravity Forms skips hidden fields in validation (`GFFormDisplay::is_field_validation_supported()`), so the field leaves the front end and the validation rules together.

> ⚠️ **Needs a client decision:** the prototype labels the field "Name"; Gravity Forms still labels it "First Name", and the form no longer collects a last name. Renaming the label and restoring the field are both one-line changes in `functions.php`.

### The ticker switch

The ticker is **kept** (decision 2026-10-21). `wp_options.options_enable_stock_ticker` was briefly set to `0` in the Local database while the ticker was off and has been set back to `1`; the ACF option remains the switch, so the ticker can be turned off from WP Admin without a code change. The Local database value was **never** pushed anywhere — the file-based `oceanview_ticker_enabled()` filter is what travels on an SFTP promote.

---

## Page-level — paired frames on Design QA

### Home

| Issue | Prototype | WordPress |
|--------|-----------|-----------|
| Stats band vertical position | Flush under hero section | **~40px** extra gap before stat row |
| Stat column typography | e.g. “$XX.X Billion” may wrap; centered “A (Excellent)” in column | Single-line billion; left-weighted stat text |
| “Discover the Oceanview Difference” | **Own row** under Why Oceanview 2×2 grid | Link **inside** Financial Strength cell |
| Current Rates band height | **~381px** section | **~550px** — double vertical padding in section wrapper |
| Hero vs header | Content after **72px** header | Overlay header on hero (see G2) |

### Products

| Issue | Prototype | WordPress |
|--------|-----------|-----------|
| Sticky product nav | **Option 5:** full-width category row (**34px** tabs, three equal thirds) + product tab row (**51px**); total nav **~109px** flush under hero | Two-line category “pills” + descriptor (**~52px** each) in **~136px** block with **40px** top gap |
| Code reference | `#products`, `#products-filter-test` → `ProductsPage` `navVariant="parent-filter"` | Rebuild in WPBakery to match React/WPB CSS, not legacy two-line nav |

### Contact

| Issue | Prototype | WordPress |
|--------|-----------|-----------|
| Hero | Left-aligned **~416px** band | Centered short hero **~321px** |
| Support content | **Four tabs** (**300px** wide, **51px** tall) + tab panel | No tab bar; stacked blocks |

### Blog index

| Issue | Prototype | WordPress |
|--------|-----------|-----------|
| Archive layout | Grid + closing band (**~2,160px** main list region) | Long single-column stack (**~9,900px**) |

### About, Leadership, Harbourview, Client Resources, Insights, White Papers, Individuals

- Same **global** items (G1–G9) apply; heroes match **800px** card + **20px** page inset where present.
- **Individuals:** headline wrapping differs due to G5 (wide measure on WP).

### Not yet reviewed (same board)

- Long-form article pairs (e.g. FIA article, MYGA article, Life Events, RRS)
- “Resources for financial professionals” dialog frames

---

## Prototype routes for visual QA

| Page | Hash / route |
|------|----------------|
| Home | `#` / `#home` / `#home-v2` |
| About | `#about` / Our Story |
| Products | `#products` |
| Contact | `#contact` |
| Blog | `#blog` |
| Individuals | `#individuals` |
| Design system | `#design` |
| Product nav experiments | `#product-tab-examples`, `#products-filter-test` |

WordPress staging/production builds are **separate** from this git repo; parity is enforced via `docs/wpbakery/oceanview-wpbakery.css` + builder patterns, not automatic deploy from React.

---

## WP Engine + SFTP (what you can change over the wire)

**Yes — most global UI fixes can start on SFTP**, but **WPBakery page structure** (Products nav rows, Contact tabs, Blog grid, home section order) usually needs **WP Admin** (or DB/template export), not files alone.

### Connect (typical WPE)

1. **User Portal** → install → **SFTP** users / credentials (use **staging** first, not prod, while testing).
2. SFTP into the install root; editable theme files live under **`wp-content/themes/<active-theme>/`** (prefer the **child theme**, not the parent).
3. After CSS/PHP changes: **purge** WP Engine cache (and any CDN) before visual QA.

### Good fits for SFTP (from this repo)

| Fix | Where on WP | Repo reference |
|-----|-------------|----------------|
| Header stack + content offset | Child `functions.php` — `oceanview_ticker_enabled()` switch, publish `--ov-header-h` (104 ticker on / 72 off) and keep it current in `syncContentOffset()`; CSS `display:none` on `.ov-ticker` is a quick test only — prefer gating the markup | React: no ticker in `Page.jsx`; tokens `--ov-header-h: 72px` |
| Audience pills, section measure, footer rhythm, form row width | **Design QA block appended to `oceanview-wpbakery.css`** (no separate sheet, no extra enqueue) | `src/styles/tokens.css`, `docs/wpbakery/staging-patch/oceanview-wpbakery.append.css` |
| Hero weight / accent italic (home) | Same CSS file (see homepage audit) | `docs/HOMEPAGE_DESIGN_AUDIT.md` |
| Header offset (content below nav) | CSS: `padding-top` / spacer on `main` or `.site-content`; fix `position: sticky` + `top: 0` on nav wrapper — **same 72px on home and inner pages** | `docs/DESIGN_QA_WP_HANDOFF.md` G2 |

Upload pattern: **append** `docs/wpbakery/staging-patch/oceanview-wpbakery.append.css` to the theme's existing `oceanview-wpbakery.css` (do not replace that file — the repo copy is a 27KB subset of the 279KB build), replace `syncContentOffset()` in `header.php`, and merge the `functions.php` hooks from `docs/wpbakery/enqueue-example.php`. `filemtime()` cache-bust avoids stale CSS after upload — plus a WPE cache purge.

### Usually **not** SFTP-only

| Fix | Why |
|-----|-----|
| Products option-5 nav (two-row tabs) | Built as **WPBakery rows/elements** on the Products page — rebuild or paste from `docs/wpbakery/recipes.html` / shortcodes in admin |
| Contact four-tab shell | Tab list + panels = builder layout or custom template + shortcodes |
| Blog index grid vs long stack | Posts page template or archive PHP **if** theme-controlled; often a WPBakery “Blog” page in the DB |
| Home: Why Oceanview link row, stats spacing | Row/column structure in page builder |

For those, SFTP can still ship **CSS** that improves spacing/type, but **layout chrome** needs builder edits (or a new PHP template uploaded via SFTP **plus** assigning that template in admin).

### Safe workflow while you’re backing up

1. Finish **backup / snapshot** on WPE (or copy prod → staging).
2. Apply changes on **staging SFTP** only; verify against React prototype hashes in the table above.
3. Promote via WPE **copy environment** (staging → prod) or repeat vetted file uploads on prod during a window.
4. Keep a local copy of every edited remote file (git in a private theme repo is ideal; this oceanview repo holds the **design-system CSS**, not the live theme tree).

Tools: FileZilla, Cyberduck, Transmit, or an IDE SFTP extension — point at the child theme folder and upload changed files.

---

## Related docs

- `docs/HOMEPAGE_DESIGN_AUDIT.md` — staging vs production hero weight, ticker on prod only
- `docs/HOMEPAGE_RECONCILIATION.md` — home content/structure decisions
- `docs/wpbakery/README.md` — React → WPBakery map

---

*Last updated: 2026-10-21 — Composer (Design QA Figma pass, layout/type/UI only) + Big Pickle (Phase 1 global chrome implemented on Local: 72px nav bar + **kept** market ticker, QA overrides sheet).*
