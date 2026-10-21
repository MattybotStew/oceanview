# Project journal — oceanview

Shared session log for all AI agents. Newest entries at the top.

## 2026-10-21 — Big Pickle — Hero eyebrow verified identical (no change needed)

Checked the "hero eyebrow is 10px on WP vs 16px in the prototype" note I'd raised. **That was a measurement error on my part** — the 16px was the wrapper `div`'s inherited `font-size`, not the text. Measured the actual `<span>` on both sides at 1440 and 390:

| | font-size | weight | letter-spacing | line-height | transform | colour |
|---|---|---|---|---|---|---|
| WordPress | 10px | 600 | 1.4px | 16px | uppercase | `rgb(242,252,255)` |
| prototype | 10px | 600 | 1.4px | 16px | uppercase | `rgb(242,252,255)` |

Identical, and visible at both widths. **Nothing shipped for this** — flagging it so a future agent doesn't "fix" a non-issue.

The only remaining delta in that element is the decorative hairline: prototype `rgba(255,255,255,.65)` vs the DS token `rgba(242,252,255,.6)` — a ~5% alpha difference, imperceptible. Left alone deliberately.



**Question was "adjust gaps/margins/padding without messing up WPBakery".** Measured first, and the answer split in two.

**Section padding: already at parity — left alone.** Every band on staging is `padding-block: var(--ov-section-py)` → **80px** desktop (64 / 48 / 36 down the breakpoints), the same token and scale the prototype uses, and **no `.vc_row` carries an inline padding** — i.e. WPBakery's Design Options are not setting row padding on any of the inspected pages. Total page height was within 49px of the prototype. So there was nothing to "fix" at row level, and blanket `.vc_row` rules would have been the one change that breaks the builder. Documented as a standing rule in `.clinerules`.

**Hero stack: a real drift, fixed.** `.ov-hero-card__content` (the flex column holding eyebrow → h1 → sub → CTAs) was gapped at a flat **20px** at every width, and the eyebrow carried an extra **10px** bottom margin, so the rhythm read **30 / 20 / 20**.

| width | prototype | staging before | staging now |
|---|---|---|---|
| 1440 | 40px | 20px | **40px** |
| 1100 / 900 / 768 | 28px | 20px | **28px** |
| 600 | 20px | 20px | **20px** |
| 480 / 390 | 16px | 20px | **16px** |

Sourced from the prototype's own `src/styles/tokens.css` (`.ov-hero-content`) rather than guessed, then confirmed by measurement on both sides at seven widths. Container `gap` + one eyebrow margin reset — no margins added per child, so a builder reordering of hero children can't break the rhythm. Also picked up the ≤480 card padding step (**28/20**), which the theme was missing.

**Verified on staging:** gap scale matches the prototype at 1440/1100/900/768/600/480/390, hero padding matches at 600/480/390, and the 7-page chrome sweep still reads 104/104 at rest and 73/73 scrolled with no horizontal overflow.

**Deployed:** sheet now **293,340 bytes / 11,465 lines**, re-downloaded and byte-identical to what was tested, `HERO STACK RHYTHM` marker present in the served CSS.

## 2026-10-21 — Big Pickle — Hero typography fixed on staging (weight + italic)

**Problem:** the hero H1 rendered at **400** on a **4vw** ramp and its accent phrase was **roman**, where the prototype is **800 / 63px / italic**.

**Cause — two rules inside `oceanview-wpbakery.css`, not font loading.** PP Editorial New ships 400, 400-italic, **800** and **800-italic**; the 800 faces were never requested (`document.fonts` showed them `unloaded`).

1. `.ov-hero-title { font-weight: 400 !important; font-size: clamp(28px, 4vw, 63px) !important; }` — hard-coded to the wrong values.
2. A sitewide `h1–h6 em, .ov-accent { font-style: normal !important }` reset. Because it is author `!important`, it also beat the `style="font-style:italic"` that content authors had already put **inline** on some accents — so those lost twice.

**Fix,** appended to the Design QA block (no new file):

```css
.ov-hero-title { font-weight: 800 !important; font-size: clamp(28px, 5.5vw, 63px) !important; }
body.home .ov-hero-title { font-size: clamp(28px, 8vw, 63px) !important; }   /* Hero.jsx ramps 8vw */
h1 em, h2 em, … , .ov-accent { font-style: italic !important; }               /* mirrors the reset, flips it */
```

The italic rule deliberately mirrors the reset's selector list so it wins on ties by source order, and is scoped to headings + `.ov-accent` — `<em>` in body copy is untouched. Section H2 weight stays **400** (correct per the prototype); only their accents italicise.

**Verified against the prototype** (ran `npm run dev`, measured `.ov-hero-title` on `#home` and `#about`): prototype 800 / 63px / -1.575px / italic accent on both. After the fix, WordPress matches on home, about and products; **48px at 600px** confirms the 8vw ramp; all four home H2 accents italic, H2 weight 400 unchanged.

**Deployed:** re-downloaded the live sheet first (still byte-identical to the previous upload — nothing had drifted), then uploaded. Staging sheet now **291,733 bytes / 11,415 lines**, re-downloaded and byte-identical to what was tested, `HERO TYPOGRAPHY` marker present in the served CSS.

**Still open:** production needs the same append; the P1 font-family duplication (`'Editorial New'` 700 vs `"PP Editorial New"` 800) is untouched — harmless while every `.ov-*` class uses `--ov-ff-display`.

## 2026-10-21 — Big Pickle — Phase 1 DEPLOYED to WPE staging

**Shipped:** the Design QA block, appended to `wp-content/themes/oceanviewlife/oceanview-wpbakery.css` on **oceanviewstg**. Nothing else on the server was touched — no `header.php`, no `functions.php`, no DB.

**How:** WPE SSH is publickey-only (portal key never got added), so this went over **SFTP** (port 2222, user `oceanviewstg-matt`) with `docs/wpbakery/staging-patch/remote.sh`, an `expect` driver. Two gotchas worth remembering: the SFTP prompt is `Password:` with a capital P (a case-sensitive match silently times out), and this expect build does not support `(?i)` — match the literal `assword:` instead.

**Safety checks before the write:**
- Downloaded the live sheet first: **11,144 lines / 279,059 bytes**, mtime Oct 21 04:59 — matching the clone baseline, so dev had not changed it.
- Stripped the 211-line block (+2 newlines) from the Local copy and `cmp`'d: **byte-identical** to the live file. That proves uploading the full Local file is exactly "live + block", with nothing else able to change.
- Live original kept at `.tmp/staging-backup-oceanview-wpbakery.css` (gitignored).

**Result:** remote file now **11,357 lines / 289,090 bytes**, sha256 `c3165dee…0304`, re-downloaded and byte-identical to what was tested locally; marker count exactly 1.

**Verified live on staging** (Playwright, 1440px + 390px, 7 pages: home, about, products, contact, leadership, individuals, blog):

| | at rest | scrolled |
|---|---|---|
| header stack | **104** (ticker 32 + nav 72) | **73** |
| `#content` margin-top | **104px** | **73px** |

Also: audience pill label **21.92px** in the 44px chip, section intro H2 **630px**, footer `<li>` **25.6px**, **no horizontal overflow** at either width. Notably `--ov-header-h` stays `104px` on `<html>` while the margin computes to `73px` — that is the `body:has(.ov-ticker--hidden)` rule doing the work, confirming the offset needs no theme PHP.

**No cache purge needed:** both the old and new `?ver=` URLs return the new 289,090-byte file, and inner pages already rendered `?ver=1792613005`, so the page cache revalidated on its own.

**Not deployed (deliberately):** the optional `header.php` `syncContentOffset()` and the `functions.php` GF trim. So the signup row still shows three fields (G9 open, waiting on the client's First/Last Name decision). The offset works purely in CSS.

**Security:** the deploy used the account SFTP password, which was pasted into the chat — **rotate it**.

## 2026-10-21 — Big Pickle — Phase 1 made CSS-only (safest ship)

**Why:** "what is safest" — the CSS block previously depended on the `header.php` `syncContentOffset()` change to keep the offset in step as the ticker collapses. That made a *one-file, zero-PHP* ship impossible: shipping the CSS alone would leave a 31px gap under the bar when scrolled.

**Fix:** the block now tracks the collapse **in pure CSS**, using state the theme already has (`.ov-ticker--hidden` is toggled by the theme's existing inline script past 10px, and `.ov-header-bar` is a hard 72px):

```css
:root                        { --ov-header-h: 104px; }
body:has(.ov-ticker--hidden) { --ov-header-h: 73px; }
body:not(:has(.ov-ticker))   { --ov-header-h: 72px; }   /* ticker switched off */
#content { transition: margin-top .25s ease; }          /* matches the 250ms fold; off under prefers-reduced-motion */
```

Declarations on `body` beat the inherited value on `#content`, so this also cannot fight the optional JS (which writes the property on `<html>`) — the two agree.

**Verified on Local with the sync JS temporarily disabled** (`syncContentOffset()` calls/listeners commented out, then restored): at rest **104px**, scrolled **73px**, ticker element removed **72px** — and the scrolled/off states still correct with `--ov-header-h: 500px` forced onto `<html>`, proving the CSS rules, not the JS, drive it. Full sweep re-run afterwards with JS restored: 13 templates at **104/104**, scrolled **73/73**, no overflow.

**So the staging ship is now ranked by risk:** (1) append the CSS block — no PHP, cannot fatal, delete-to-rollback, fixes G2/G3/G4/G5/G6/G8; (2) *optional* `header.php` sync — measurement instead of hardcoded values; (3) *optional* `functions.php` GF trim — G9, needs the client's OK. Docs reordered to match (`docs/wpbakery/staging-patch/README.md`, `docs/WP_DEV_PUNCHLIST.md` §A0, `docs/DESIGN_QA_WP_HANDOFF.md`).



**Why:** staging has a backup in progress and dev's structure must not be reorganised. The first shape (a new `oceanview-qa-overrides.css` + new enqueue + a mu-plugin trial) added parallel structure. Reshaped so Phase 1 lands as **three edits to three files that already exist on staging** — no new stylesheet, no new `wp_enqueue_style()`, no mu-plugin, no DB change.

**What changed on Local (and therefore in the patch):**

1. **`oceanview-wpbakery.css`** — the Design QA block is now **appended** to the theme's existing sheet instead of living in its own file. Verified it is the **last stylesheet the theme loads**, so the block wins on source order exactly as before. Source of truth: `docs/wpbakery/staging-patch/oceanview-wpbakery.append.css`. It now also declares the default `:root{--ov-header-h:104px}` (previously a PHP inline style).
2. **`header.php`** — unchanged from the ticker work: `syncContentOffset()` writes `--ov-header-h` on `<html>`. Comment block corrected (it still claimed the ticker had been removed).
3. **`functions.php`** — the QA enqueue + `wp_add_inline_style` token removed (both now unnecessary); the ticker helper and the GF trim stay.

**Deleted:** `docs/wpbakery/oceanview-qa-overrides.css`, `docs/wpbakery/staging-test/` (the mu-plugin kit — superseded by this approach).

**Verified on Local after the reshape** — geometry identical to before: 104px stack on 13 templates, `#content` at y=104, `--ov-header-h:104px`, pill 21.92px, section intros 630px/18px, footer li 25.6px, footer signup `[First Name 185.8][Email 185.8][Sign Up 142.5]` with Last Name off-screen. Scrolled: stack 73px **and** content margin 73px (they stay equal → no gap). `oceanview-wpbakery.css` is the last theme stylesheet, the QA sheet is no longer requested, and the only failed request is the pre-existing external `cdn.acsbapp.com` 404.

**Handoff:** `docs/wpbakery/staging-patch/README.md` — the append block, the exact `syncContentOffset()` before/after, the `functions.php` block, upload-whole-file caveats (`header.php` calls `oceanview_ticker_enabled()`, so the two PHP files go together), 9 checks, and per-file rollback.

## 2026-10-21 — Composer — AGENTS.md master plan refresh

**What:** Replaced the scattered WP backlog in `AGENTS.md` / `CLAUDE.md` with a single **Master plan — WordPress vs prototype** section: doc map, phases 0–4, Q0/Q1/S tiers, SFTP vs WPBakery split, session prompt, ticker-stays rule. Trimmed duplicate Big Pickle prose to pointers. Synced `.clinerules`, root + doc `LOCAL_OCEAN_WP_PLAN.md` pickup links and agent prompt (Phase 1 done → promote or Phase 2).

**Next:** Matt SFTP Phase 1 to WPE staging; agents pick up Phase 2 from `AGENTS.md`.

## 2026-10-21 — Big Pickle — WP Phase 1 global chrome implemented on Local

**Scope:** global chrome parity between the Local WordPress site (`~/Local Sites/ocean/app/public/`, theme **`oceanviewlife`**) and the React prototype. Global items G1–G6, G8, G9 are closed; G7 (remaining button sizes) is partial. Page-builder items (Products nav, Contact tabs, Blog grid, Home bands) are still Phase 2 and need WPBakery admin.

> **Superseded in part — see the entry above.** This entry describes the first shape, where the parity CSS lived in a separate `oceanview-qa-overrides.css` with its own enqueue. It was reshaped the same day so the rules are **appended to the theme's existing `oceanview-wpbakery.css`** and no new file or enqueue is added. The *findings* below (offset conflicts, legacy rules, G1–G9 values) still stand; only the file layout changed.

> **Update (same day, later): the market ticker is KEPT.** The work below originally shipped with the ticker removed (the React prototype had dropped it from the shell on 2026-09-09). Matt's call was to keep it — it is part of the approved WordPress design — so WordPress **deliberately diverges from the prototype** on that one point. What that changed:
>
> - `functions.php` — the forced-off `add_filter( 'oceanview_ticker_enabled', '__return_false' )` is **removed**; the filter now passes the ACF value through, so WP Admin can still switch the ticker off and a file-only promote can pin the state.
> - Local DB — `wp_options.options_enable_stock_ticker` set back to `1` (still never pushed anywhere).
> - `header.php` — `syncContentOffset()` now writes the `--ov-header-h` custom property onto `<html>` instead of an inline `margin-top` on `#content`. An inline style loses to the `!important` offset rule, and the property is what lets the **ticker's scroll-collapse** (104px stack → 73px) stay in step with the content.
> - Header stack is **104px** (32px ticker + 72px nav) and the content starts at **y = 104**; the hero card lands at top 124. The nav bar itself is still 72px.
> - Every doc was corrected: `AGENTS.md`, `.clinerules`, `JOURNAL.md`, `docs/DESIGN_QA_WP_HANDOFF.md` (G1 + the Phase 1 section), `docs/LOCAL_OCEAN_WP_PLAN.md`, `docs/wpbakery/enqueue-example.php`, `docs/wpbakery/oceanview-qa-overrides.css`.
>

**What changed in the theme** (all file-based, so it promotes over SFTP without a database push):

- **`functions.php`**
  - `oceanview_ticker_enabled()` reads the ACF option `options_enable_stock_ticker` and passes it through an `oceanview_ticker_enabled` filter. **The ticker is KEPT** (see the update below) — the filter is left as a pass-through so WP Admin can still switch it off and a file-only promote can pin the state.
  - `wp_add_inline_style( 'oceanview-ds', ':root{--ov-header-h:104px;}' )` publishes the real header height (72px with the ticker off).
  - `oceanview-qa-overrides.css` is enqueued **after** `oceanview-wpbakery.css` (source order wins at equal specificity).
  - `oceanview_gf_signup_fields()` marks Gravity Forms #21's **Last Name** field hidden at render time (`gform_pre_render` / `gform_pre_validation` / `gform_pre_submission_filter`). GF skips hidden fields in validation, so it leaves the front end and the validation rules together.
- **`header.php`** — ticker markup gated on `oceanview_ticker_enabled()`, so a disabled ticker is never rendered (not hidden with CSS). `syncContentOffset()` now writes the `--ov-header-h` custom property onto `<html>` instead of an inline margin on `#content` — an inline style would lose to the `!important` rule, and the property keeps working when the ticker collapses on scroll.
- **`oceanview-qa-overrides.css`** (new) — G2/G3 content offset, G4 pill label line-height, G5 section measure, G6 dead gap, G8 footer rhythm.

**Root causes found (worth remembering):**

- **Two legacy writers were zeroing the content offset.** `library/dist/js/script-min.js` runs on `window.load`: `$("#content").css("margin-top", $(".header_wrapper").outerHeight())` — `.header_wrapper` is a zero-height wrapper because the DS header is `position: fixed`, so it wrote **0px** and the fixed header overlapped the top of every page. `header.php`'s inline `syncContentOffset()` also only ran once `#content` existed, so it never ran on first paint. Both write **inline** styles, so an author `!important` rule settles it: `#content { margin-top: var(--ov-header-h, 72px) !important; }`.
- **`.ov-aud-chip`'s 29px line-height was not the DS's** — it came from the legacy base stylesheet's bare `a { font-size: 18px; line-height: 29px }` (`library/dist/css/style.css`).
- **The footer link step was the legacy `ul li` rule**, not the DS's: `font-size:18px; line-height:28px; padding-left:5px; margin-bottom:5px` → 45px steps with a 5px indent. Resetting the `<li>` to the body strut (16px × 1.6) plus the DS's 12px gap gives the prototype's **37.6px**.
- **The theme's `oceanview-wpbakery.css` is a full 279KB build**, not the 27KB subset in `docs/wpbakery/` — it already contains the header/ticker/footer rules **and** a correct two-field signup row (flex row + `order` to place the button between the email field and the consent). Do not overwrite the theme copy.
- **`sticky` is unsafe for the header.** The legacy base stylesheet sets `html { overflow-x: hidden }`, which makes the root a scroll container and breaks viewport-relative sticky positioning. The bar stays `position: fixed` with a reliable content offset.

**Verified on Local** (Playwright geometry, 1440px and 390px): header stack **104px** = 32px ticker + 72px nav on 13 templates (home, about, products, contact, blog, leadership, individuals, insights, white-papers, harbourview, client-resources, NSG, 404); `#content` at **y = 104**; home hero card at **top 124 / left 20 / 1400×800**; scrolled past 10px the ticker folds away → stack **73px** and the content offset follows (no stale 32px gap); pill label **21.92px** in the 44px chip; section headline + deck **630px**, deck **18px**; the 40px `vc_empty_space` after section intros gone; footer link step **37.6px**, flush left; footer signup row `[Name 185.8][Email 185.8][Sign Up 142.5]` on one line with the consent full-width below.

**Handoff-doc figures corrected** (the earlier prose was approximate; measured prototype values win): eyebrow is **10px** (not 18 — 18 is the deck), section measure **630.9px**, footer link step **37.6px** (not 33), signup fields **234px** in the home band / **171px** in the footer.

**Repo updated:** `docs/wpbakery/oceanview-qa-overrides.css` (new mirror), `docs/wpbakery/enqueue-example.php` (now carries the ticker switch, `--ov-header-h` token, QA-sheet enqueue and the GF field trim), `docs/wpbakery/README.md`, `docs/DESIGN_QA_WP_HANDOFF.md` (status column + a Phase 1 section), `docs/LOCAL_OCEAN_WP_PLAN.md` (Phase 0/1 checked off). Also added a warning banner to the top of `docs/wpbakery/oceanview-wpbakery.css`: **that repo file is a 27KB subset with no `.ov-gform-footer` / `.ov-gform-newsletter-inline` rules at all**, so copying it over the theme's 279KB build would silently delete the newsletter row's layout.

**Loose ends / decisions for Matt:**

- ⚠️ **The newsletter form no longer collects a last name**, and GF still labels the field "First Name" where the prototype says "Name". Both are one-line changes in `functions.php` — but the data-collection change needs a client decision.
- **Next:** promote the three edits (append to `oceanview-wpbakery.css`, `header.php` `syncContentOffset()`, `functions.php` GF trim) to **WPE staging** over SFTP, purge the WPE cache, then verify before production. The Local DB value (`options_enable_stock_ticker = 1`) is **not** part of the promote and was never pushed anywhere.
- **Phase 2** still needs WPBakery admin: Products option-5 nav, Contact four tabs, Blog grid, Home bands (stats / Why Oceanview link row / Current Rates).
- **G7** — remaining primary-button heights (43–61px mixed) not yet diffed against the prototype's 45px pills.

## 2026-10-21 — Composer — Local `ocean` WP execution plan

- Added **`docs/LOCAL_OCEAN_WP_PLAN.md`** (phased checklist: Local setup → global child theme → WPBakery pages → push staging). Root pickup link **`LOCAL_OCEAN_WP_PLAN.md`** for Local modal / agent sessions.
- Local path documented: `~/Local Sites/ocean/app/public/` (pull from WPE Oceanview **Stg** with Files + Database).
- Linked from `AGENTS.md`, `CLAUDE.md`, `.clinerules`.

## 2026-10-21 — Composer — WordPress Design QA plan (Figma → agents/knowledge)

- Compared Figma **Design QA** canvas (`2026-Oceanview-Design`, node `9253:2`): WordPress captures **left**, React prototype **right** (source of truth). Scope agreed with Matt: **layout, type, buttons, nav, form UI** — not copy.
- Findings captured in **`docs/DESIGN_QA_WP_HANDOFF.md`** (global G1–G9, page-level table, fix order, prototype hash routes). Summarized open backlog in **`AGENTS.md`** / **`CLAUDE.md`**; **`.clinerules`** WordPress parity section points at the doc.
- Headline WP issues: market **ticker** + **104px** header vs prototype **72px**; **two header position models** (home hero under overlay vs inner pages with 104px body offset); Products **two-line category nav** vs prototype **option 5** full-width pills + tabs; Contact **no tab bar**; Blog **long stack** vs grid.
- **Loose ends:** Newsroom/FAQ rows on board are WP-only duplicates; article pairs and professional-resource modals not yet reviewed.

## 2026-10-21 — opencode (Big Pickle) — Products page category nav goes full width

- **Request (Matt):** make the product page nav full width; categories read **Fixed Annuities · Fixed Annuities with Flexibility · Fixed Indexed Annuities**. Follow-up: keep the **pills** (not tabs).
- `src/components/ProductsPage.jsx` — in the option-5 parent-filter nav, the desktop category row is no longer a set of small content-sized pill chips (which left ~477px of dead space to the right of a 1200px container). The three categories are now **full-width pills**, each filling an equal third of the row: `FILTER_NAV.chip` gets `flex: 1 1 0` + centered text, `chipRow` loses the horizontal-scroll setup. Pill styling is unchanged (999px radius, 13px semibold, teal border + 12% teal wash when active, subtle `var(--ov-border-soft)` border when inactive). Longest label ("Fixed Annuities with Flexibility", 183px) fits without wrapping or ellipsis down to the 900px desktop breakpoint (273px per pill).
- Product tab row below is unchanged and still filters to the active category; the two rows now align as columns (395/395/395 at 1440px).
- **Mobile unchanged** (<900px): full-width dropdown picker (category) + content-sized product tabs with horizontal scroll.
- **Bug fix (found while testing):** an explicit category/product click could be overridden mid-scroll by the IntersectionObserver scroll-spy, leaving the nav showing a different category than the one clicked. Added `SPY_LOCK_MS = 900` + `spyLockRef` — the spy ignores entries for 900 ms after a click-driven scroll. Manual scrolling still updates the nav normally.
- Also removed a pre-existing React style warning on the chips (shorthand `border` in `chip` mixed with `borderColor` in `chipOn` → both are now the `border` shorthand).
- Verified in Playwright: equal-third pills at 900/960/1024/1100/1280/1440/1920px, no wrapping/ellipsis, no horizontal overflow at 390px, all three category clicks land on the right section + product set, mobile picker selects correctly, manual scroll still drives the active category/product, 0 console errors on a fresh load. `npm run build` clean.
- Pre-existing, **not** introduced here: `#products` has ~130px of horizontal document overflow between 899px and 1100px viewport (present before this change too).

## 2026-10-21 — Grok — Products page uses parent-filter tabs

- `#products` now renders `ProductsPage` with `navVariant="parent-filter"` (option 5: category filter + product tabs). `#products-filter-test` stays on the same variant.
- Two-level sticky nav is still in `ProductsPage` as `navVariant="default"`, unused by routes.
- WordPress staging (`oceanviewstg.wpengine.com/products/`) is a separate WP build and does not pick this up from a git push of this repo.

## 2026-10-12 — deepseek-flash — Homepage design audit corrected; hero font-weight root-caused

- New `docs/HOMEPAGE_DESIGN_AUDIT.md` — **design-elements-only** comparison of staging (`mattybotstew.github.io/oceanview`) vs production (`oceanviewprod.wpengine.com`). Supersedes the design findings in the earlier session handoff.
- **Resolved the open "headline font weight differs" item.** It is a weight-value parity gap, not a fallback and not a missing font file — `PP Editorial New` loads on both. Same element, `.ov-hero-title`, three different sources:
  - `src/components/Hero.jsx` (`S.h1`) — weight **800**, `clamp(28px, 8vw, 63px)`
  - `docs/wpbakery/oceanview-wpbakery.css` (spec) — weight **800**, `clamp(28px, 5.5vw, 63px)`
  - **production live WP CSS** — weight **400**, `clamp(28px, 4vw, 63px)`
  - → staging renders Ultrabold; production renders Regular (lighter/thinner). **Production is the outlier**; 800 is already the documented spec (`.clinerules` 2026-08-31). Secondary: production's global `font-style: normal !important` reset forces the *"the retirement ahead."* accent upright, where spec/staging use teal **italic**.
  - Latent trap flagged: the WP theme ships the serif under a second family name `'Editorial New'` with Ultrabold mapped to weight **700** (DS uses `"PP Editorial New"` @ 800) — a standing source of the same class of mismatch.
- **Corrected the earlier report's inventory tables.** Those claimed 4 production-only and 3 staging-only design elements. Verified against the production page and the deployed staging bundle: **both environments render the same component set** (hero eyebrow, hero subtitle, "Discover the Oceanview Difference" CTA, full Retirement Resources 3-card grid, Current Rates, Stay Informed). The **only** production-only design element is the market ticker bar.
- Reclassified two reported defects: the "duplicated ticker block" is the marquee's loop frame (one bar, not two stacked sections) — not a design defect; the "orphaned Retirement Resources heading" is not reproducible (all three cards render).
- Recommends a P0 production-side CSS fix (weight 400→800, ramp 4vw→5.5vw, restore accent italic) and a P1 decision on whether the ticker belongs in the final design. Responsive pass still not assessed.
- No source/design-system files changed in this session — audit + documentation only.

## 2026-10-07 — opencode (deepseek-flash) — Brochures module redesign + Applications tab

- Redesigned `#brochures` into four tabs: **Brochures · Product Spec Sheets · Applications · Forms & Disclosures** (was Brochures / Product Spec Sheets / App Packs / Other). Tab persists via `?tab=` (`history.replaceState`); deep links `?product=&channel=` pre-filter Applications on first load.
- New `src/data/documents.js`, transcribed from the live page `oceanviewlife.com/resources/annuity-brochures-applications-forms/`: `APPLICATION_PRODUCTS` (5 products × channels × ~49 states = **392** app links; 6 Colorado entries are gated → acknowledgement modal), `BROCHURE_DOCS` (16 Salesforce brochure/spec/slip-sheet links), `SERVICE_FORMS` (25). All PDFs target the live WP site — no local assets.
- New `src/components/ApplicationsExplorer.jsx` — search + product chips + channel chips, grouped Product → Channel state-tile grids, live readout (“Showing X of 392”), collapse toggles, Colorado modal. ~392 nodes rendered, `useMemo` filtering, no virtualization.
- `BrochuresPage.jsx` — brochure cards resolve live PDFs (5 functional; Horizon/Topsider show “coming soon” since the prototype leads the live site); Specs tab = product spec sheets + strategy slip sheets; Forms tab = disclosures + 25 service forms. Reuses the `.ov-contact-tab` tablist/keyboard pattern.
- `src/styles/tokens.css` — new `.ov-apps-*` / `.ov-state-*` / `.ov-modal-*` classes (860px / 480px breakpoints).
- **WPBakery parity:** same classes added to `docs/wpbakery/oceanview-wpbakery.css` (header version → 1.2); new `docs/wpbakery/ov-applications-filter.js` (progressive-enhancement search/product/channel filter); JS enqueued in `enqueue-example.php`; recipe 16 + `shortcodes.md` §9 + `README.md` map/row.
- Build clean. Playwright smoke at 1440/390px: 4 tabs render; Applications shows 392 tiles / 386 external links / 6 acknowledges / 8 groups; product + search filters, deep link, Colorado modal, and tab switching verified; 0 horizontal overflow at 390px; only console error is the favicon 404.
- Data was extracted via Playwright DOM (`curl` is Cloudflare-blocked). Regenerate `documents.js` if the live list changes.

## 2026-10-07 — opencode (deepseek-flash) — White signup page list

- New doc `docs/WHITE_FORM_PAGES.md`: the four pages that render an inline white/light "Stay Informed" email capture (home `#`/`#home`/`#home-v2`, `#individuals`, `#national-senior-games`, `#alzheimers-awareness`), each with its client-request source and whether the dark footer form is hidden.
- Flagged two loose ends: `#individuals` has no documented client request and still shows the dark footer form (only page with a duplicate signup); the Alzheimer's source docx is no longer in repo/Downloads.
- Linked from `PAGES.md` (Notes for Dev) and `AGENTS.md`.

## 2026-10-07 — Grok (Hero eyebrow stroke)

- PageHero category badge (product heroes) dropped the frosted fill. Outline only: transparent background, `1px solid rgba(255,255,255,.55)`. Matched in `.ov-badge--hero` and the `#design` sample. Line-style eyebrows (home slider, PageHero `eyebrow`) were already stroke-only.

## 2026-09-30 — Grok (Renewal Rates sales CTA)

- Closing navy `CTABanner` on `#renewal-rates` now takes an optional `secondary`. Sales phone is `PillGhost light hero` with `tel:+18336567455` beside Explore Harbourview FIA. Standalone ghost button under the banner removed.

## 2026-09-30 — Grok (Renewal Rates closer-look split)

- `#renewal-rates` “Take a Closer Look at Rates That Keep Pace” is a two-column `.nsg-split`: `public/assets/harbourview-fia-hero.jpg` on the left, copy and both buttons on the right. Full `ov-container` width; stacks image then text at ≤800px. Hero image unchanged.

## 2026-09-30 — Grok (Renewal Rates hero image)

- Staging has no `/renewal-rates/` page. `#renewal-rates` hero uses the `/rates/` cover photo (`mid-50s-man-sitting-on-park-bench-looking-at-smart-phone-best-paying-annuities.png`), saved as `public/assets/renewal-rates-hero.png`, `backgroundPosition` `58% 28%`. Replaces the Harbourview FIA hero reuse. Copy unchanged.

## 2026-09-30 — Grok (Professionals hero eyebrow)

- `#professionals` hero `Eyebrow` only: `justifyContent: 'center'` and `width: '100%'` so the FINANCIAL PROFESSIONALS row sits in the middle of the container. Headline copy unchanged.

## 2026-09-30 — Grok (Renewal Rates landing)

- New unlisted route `#renewal-rates` (`RenewalRatesPage.jsx`) from Renewal Rates Landing Page web copy Draft v1. Download CTAs go to `#brochures`; Explore Harbourview FIA goes to `#harbourview-fia`. Historical 98.2% / 10.8% figures are from the draft; no live rate table.

## 2026-09-30 — Grok (Financial Professionals page)

- Rebuilt `#professionals` body from `FINANCIAL PROFESSIONALS page copy draft (1).docx`. Placeholder rates stay `X.XX%` / Effective [DATE]. Links use existing hashes only (`#products` for the rates hub, `#sales-tools`, `#brochures`, `#client-resources`, `#state-approval`, `#contact`, `#agent-portal`, `#about`, product routes).

## 2026-09-30 — Grok (CurrentRate section order)

- `#current-rate-fia` places How the Treasury Component Is Determined immediately after How CurrentRate Works (`insertAfter.howItWorks`), and CurrentRate vs Harbourview after At a Glance (`insertAfter.keyTerms`).
- Riders / Waivers section removed for this product only. `RidersSection` still renders when a product passes `riders`.
- Professional resources are 10 labeled links (rates, brochures, downloads, state-approval, comparisons, contact, agent-portal). Death benefit and RMD copy are readable blocks under Accessing Your Money. Hero line and image unchanged.

## 2026-09-30 — Grok (Harbourview FIA end sections)

- `#harbourview-fia` gained three optional tail blocks: Want to Understand FIAs First? (`#fia-overview`), Have a Retirement Situation in Mind? (`#les-market-volatility`, `#retirement-risk`), and Harbourview FIA Resources (rates, brochures, downloads).
- Dedicated “What is an MVA?” callout sits with surrender charges. CapLock compare links to `#caplock`.
- Optional `sectionOrder` on ProductDetailPage puts crediting menu, then Choosing a strategy, then Understand the Cap. Other products unchanged. Hero image field kept.

## 2026-09-30 — Grok (LevelCap and CapLock hero images)

- `#levelcap` hero is the staging content photo (couple in the tide), `public/assets/levelcap-hero.png`. Staging `og:image` was the reused Russell 2000 file and was not used.
- `#caplock` hero is the staging `ov-hero-card` background (woman biking), `public/assets/caplock-hero.png`. Copy unchanged.
- Confirmed `http://localhost:5175/oceanview/assets/levelcap-hero.png` returns 200. Sky Harbourview hero renders the beach couple.


## 2026-09-30 — Grok (Harbourview FIA hero image)

- `#harbourview-fia` hero is the staging page background (senior group selfie), saved as `public/assets/harbourview-fia-hero.jpg`, `imgFocus` `38% 40%`. Staging `og:image` (`FIA-Hero1.jpg`) was not used. Copy unchanged.

## 2026-09-30 — Grok (Harbourview MYGA hero image)

- `#harbourview-myga` hero is the staging page background (`AdobeStock_460547435-scaled.jpeg`), saved as `public/assets/harbourview-myga-hero.jpg`, `imgFocus` `center`. Staging `og:image` (`Image-MYGA1.jpg`) was not used. Copy unchanged.

## 2026-09-30 — Grok (Sky Harbourview hero image)

- `#sky-harbourview-myga` hero is the staging page background (beach couple), saved as `public/assets/sky-harbourview-hero.jpg`, `imgFocus` `78% 42%`. Open Graph photo saved as `public/assets/sky-harbourview-og.jpg` and not used on the page. Copy unchanged.

## 2026-09-30 — Grok (CurrentRate hero image)

- Pulled the CurrentRate MYGA page hero from `https://oceanviewstg.wpengine.com/products/currentrate-myga/` (WPBakery background image of two women hiking). Saved as `public/assets/current-rate-hero.jpg`. `#current-rate-fia` `image` now points at `assets/current-rate-hero.jpg`. Staging `og:image` is the site-wide Russell 2000 file and was not used.

## 2026-09-30 — Grok (LevelCap FIA page)

- `#levelcap` → `LevelCapFIAPage.jsx` on the product-detail shell. Copy follows the LevelCap draft (docx wins over staging). Rate is `X.XX%` with Effective [DATE]. Surrender schedule from the draft: 5-year 9-8-7-6-5, 7-year 9-8-7-6-5-4-3. No brochure download card. Nav added beside CapLock (header, footer, products, FIA overview, client resources, product-tab examples).

## 2026-09-30 — Grok (CapLock missing sections)

- Optional `ProductDetailPage` fields: `whatIs`, `whyGuaranteedCap`, `capDistinction`, `allocationWarning`. Current rates can take a 5-Year / 7-Year toggle and an effective-date line. CapLock uses them; other products omit the fields. Key-terms allocation row stays. Strategy row white background left as-is.
- Copy is structural (no live rates). Figma note beside the CapLock mockup: https://www.figma.com/design/fe7PYQtVJ2pNZ1VR6lznWz/2026-Oceanview-Design?node-id=9019-4565
- Nodes 9018:32 and 9018:142 were not in the file. The live mockup on “new pages” is `capsLock` (9015:9645).


## 2026-09-30 — Grok (CapLock page code)

- `#caplock` keeps the product-page shell. New optional body blocks on `ProductDetailPage`: current rates, guaranteed vs not, five steps, 9% example. Surrender, riders, income, and end of term stay. Other products are unchanged until they pass those fields.


## 2026-09-30 — Grok (CapLock shell)

- CapLock Figma direction: keep ProductDetailPage shell (hero, stats, sticky nav, CTA). New body blocks are Current Rates, Guaranteed vs Not, 5 steps, and the 9% example. Surrender, riders, income, and end-of-term stay. Same layout for Harbourview FIA, LevelCap, and Renewal Rates. https://www.figma.com/design/fe7PYQtVJ2pNZ1VR6lznWz/2026-Oceanview-Design?node-id=9018-32


## 2026-09-30 — Grok (CapLock page mockup)

- Figma mockup for `/products/caplock-fixed-indexed-annuity/` from the ticket section list, beside the old `capslock` capture. Copy draft file is not in the repo, so body copy is structural. https://www.figma.com/design/fe7PYQtVJ2pNZ1VR6lznWz/2026-Oceanview-Design?node-id=9016-32


## 2026-09-30 — Grok (brochure handoff)

- Spec Sheets stays at the five files already in the library. Topsider FIA and Current Rate have brochures only; the Spec Sheets tab says so instead of inventing rows. FIA brochure buttons are solid white (`PillWhite`) on the navy band. Other tab is grouped under category subheads.
- Captured `#brochures` into the 2026 Oceanview Design file with a dev-note frame: https://www.figma.com/design/fe7PYQtVJ2pNZ1VR6lznWz/2026-Oceanview-Design?node-id=9011-32


## 2026-09-30 — Grok (brochures nits)

- `#brochures` title is “Brochures, Applications & Forms”. FIA Download PDF uses `PillGhost light` (white on navy). Brochure cards and spec/app/other rows use existing `lpl-pillars-grid` (4 columns, 2 at 860px, 1 at 480px).


## 2026-09-30 — Grok (brochure tabs stay in the DOM)

- `#brochures` keeps Spec Sheets, App Packs, and Other in the page even when Brochures is selected. Harbourview FIA sits with Current Rate under Fixed Annuities with Flexibility. CapLock and Topsider stay on the navy FIA band with white download buttons. LevelCap brochure waits until that page exists.


## 2026-09-30 — Grok (LPL GitHub Pages)

- Horizon MYGA resource titles aligned to the temp LPL page, including the California rate sheet. Coming Soon stays off. Published to GitHub Pages.


## 2026-09-29 — Grok (prototype UI: LPL, newsroom, brochures)

- **`#lpl-landing`** — Horizon MYGA no longer `comingSoon`; brochure and rate-sheet rows added.
- **`#newsroom`** — embeds exported `RatesTab` and `DownloadsTab` from Client Resources, plus a link into the Compliance Corner filter.
- **`#brochures`** — sticky tabs: Brochures, Product Spec Sheets, App Packs, Other. Specs and other docs come from `DownloadsPage` exports.
- Product-page Figma redesigns and new Renewal Rates / LevelCap pages were not in this pass.


## 2026-09-09 — Composer (Hero mobile layout)

- **`ov-hero-ctas`** wrapper class; mobile padding override (`32px 24px` / `28px 20px`).
- Hero text + buttons share equal width; full-width stacked CTAs at ≤720px.


## 2026-09-09 — Composer (Home V2 responsive fixes)

- **Stats strip** — 2-column layout from 900px (was 720px) to fix cramped tablet cells.
- **§5 pillars** — single column at 860px with other home grids.
- **Hero CTAs** — removed `width: auto` override so mobile stacks full-width at ≤480px.


## 2026-09-09 — Composer (Home typography polish — Refined + Editorial)

- **Scoped type system** — `.home-v2-page` classes in `tokens.css`: display, h2, lead, accents, card titles, product subheads, editorial pillars.
- **Phase 1 (Refined):** mint/teal `<em>` accents on hero + all section H2s; CTABanner `title`/`titleAccent` split; 18px leads; 800-weight audience + resource titles; brighter dark-band body copy.
- **Phase 2 (Editorial):** centered §3 display intro; pillar top-border grid; 800 italic product subheads; larger stats values; signup display H2.
- **Hero:** accent restored on “the retirement ahead.”; slightly larger hero body via CSS.


## 2026-09-09 — Composer (Home V2 cutover — new index)

- **`#` / `#home` / `#home-v2`** now render `HomeV2Page.jsx` (draft S1-A homepage).
- **`#home-legacy`** retains previous `HomePage.jsx` (carousel hero, prod-parity layout) for reference.
- Footer `hideSignup` applies to all V2 home routes.


## 2026-09-09 — Composer (Remove global market ticker)

- **`Page.jsx`** — removed `TickerBar` from the global shell (all routes). Sticky header is now Header-only; scroll-hide ticker listener removed. `TickerBar.jsx` kept in repo but unused.


## 2026-09-09 — Composer (Home V2 §8 signup — footer-style split on white)

- **`#home-v2` Stay Informed** — replaced centered pill form with footer-style split: copy left, Name + Email + Sign Up row + consent right; white background; responsive stack via `.nsg-split` / `.home-v2-signup-form`.


## 2026-09-09 — Composer (Home V2 StatsStrip light variant tweak)

- **`StatsStrip variant="light"`** — stat values now `var(--ov-navy-900)` (was teal); cells center-aligned for `#home-v2` trust bar.


## 2026-09-09 — Composer (Home V2 Phase 1 — S1-A on-brand polish)

- **Reconciliation locked:** Matt chose S1-A (draft structure), light draft stats below hero, inline §8 newsletter + footer `hideSignup` on `#home-v2`. See `docs/HOMEPAGE_RECONCILIATION.md`.
- **Foundation fixes (shared):** `Highlights.jsx` heading `#233D7C` → `var(--ov-navy-900)` (A2, touches live `#`); `common.jsx` `Eyebrow` 11px / 0.1em (A3); `tokens.css` `.ov-eyebrow` default teal on light + new `.ov-eyebrow--light` for dark (A4); `Hero.jsx` skips empty `<em>` when `titleAccent` is blank (A13).
- **`#home-v2` wiring:** `Page.jsx` footer `hideSignup` for `home-v2` (A8); hero + CTABanner View Rates → `client-resources?tab=rates` (A12); §5 pillars use `.lpl-pillars-grid`; product grid responsive at 860px.
- **Live `#` unchanged** except Highlights heading color (A2 bug fix via shared component).
- **Still open:** D4 formally noted; compliance placeholders (`$XX.X Billion`, AM Best footnotes) — Phase 2.


## 2026-09-09 — Composer (Home V2 — full copy draft applied)

- **`#home-v2` now carries the full copy from `Oceanview Homepage copy draft[32].docx`** (8 sections), replacing the earlier prod-parity/wireframe copy. Live `#` / `#home` (`HomePage.jsx`) untouched.
- **Sections (top→bottom):** (1) Hero — new copy via `Hero slideOverride` (eyebrow "FIXED & FIXED INDEXED ANNUITIES", headline "Clear annuity solutions for the retirement ahead.", CTAs "Explore Annuity Options" / "View Rates"); (2) Trust bar — `StatsStrip variant="light"` with new 4 stats (`A (Excellent)` / `$XX.X Billion` / `Focused on Annuities` / `Broad Distribution`); (3) audience routing (unchanged copy); (4) dark-blue products section (Fixed Annuities + Fixed Indexed Annuities cards, replaces `ProductsCard`); (5) Why Oceanview 4 pillars (replaces `AboutBlock`); (6) retirement resources (updated copy); (7) CTA band "See what's current." / View Current Rates; (8) newsletter email capture (new in-page form, client-side only).
- **`StatsStrip.jsx`** — added optional `stats` prop (defaults to existing `STATS`; `detail` now optional). Non-breaking; live home's default navy strip unchanged.
- **Placeholders kept deliberately:** `$XX.X Billion` Total Assets (no source figure in repo — needs Finance/Legal); `Rated by AM Best*` / `Total Assets*` asterisks have no footnote text yet.
- **Verified:** `npm run build` clean; Playwright 1440px — all 8 sections render, no horizontal overflow; live `#` still shows original hero + stats.
- **Out of scope:** draft §9 (footer reorg) is sitewide and left untouched.


## 2026-09-09 — Composer (Home V2 — card CTA width fix)

- **`#home-v2` card CTAs:** Audience + retirement-resources `PillMint` buttons were stretching full card width (~460px). Root cause: `PillMint` did not forward `className`, so scoped `.home-v2-card-cta` rules in `tokens.css` (`align-self: flex-start; width: auto`) never applied; flex-column cards default to `align-items: stretch`.
- **Fix:** `Buttons.jsx` — `PillMint` now passes `className` through to `Btn`. No global `.ov-btn` changes.
- **Verified:** `npm run build` clean.


## 2026-09-09 — Composer (Home V2 — prod hero image)

- **`#home-v2` hero image:** Downloaded prod slide 1 background from `https://oceanviewprod.wpengine.com/wp-content/uploads/2020/04/home-hero.jpg` → `public/assets/home-v2-hero.jpg` (1440×585 JPEG). Wired via `Hero` `slideOverride={{ image: 'assets/home-v2-hero.jpg' }}` on `HomeV2Page` only; live `#` / `#home` carousel still uses `assets/hero-couple.jpg`.
- **Verified:** `npm run build` clean.


## 2026-09-09 — Composer (Home V2 shipped — `b7ae108`)

**Committed & pushed:** unlisted `#home-v2` homepage review surface. Live `#` / `#home` (`HomePage.jsx`) frozen until stakeholder sign-off.

- **Prod-parity rework:** `HomeV2Page.jsx` reuses live homepage components (`Hero`, `StatsStrip`, `ProductsCard`, `AboutBlock`, `CTABanner`). Wireframe-only blocks (audience routing + retirement resources) use prod card styling. Live home extracted to `HomePage.jsx`.
- **Static hero:** `Hero.jsx` optional `staticSlide` prop; `#home-v2` passes `staticSlide={0}` (first slide only, no carousel chrome). Live home keeps full 4-slide carousel.
- **Light StatsStrip:** `StatsStrip variant="light"` on `#home-v2` (white bg, teal values, navy labels). Live home keeps default navy variant.
- **Spacing fix:** removed hero `marginBottom: 40` from `Hero.jsx` and `PageHero.jsx` (global spacing cleanup).
- **CSS:** scoped `.home-v2-page` rules + `.ov-stats-grid--light` mobile dividers in `tokens.css`.
- **Routing:** `#home-v2` wired in `Page.jsx` (unlisted — no nav link). Documented in AGENTS.md, CLAUDE.md, PAGES.md.
- **Prod hero image:** added in follow-up — `public/assets/home-v2-hero.jpg` from prod `home-hero.jpg` (see entry above).
- **Still differs from prod:** Highlights replaced by audience routing; retirement resources section added; StatsStrip directly under hero (prod has Highlights first). Sign-off before cutover.


## 2026-09-08 — Cline
- **`#alzheimers-awareness` white-paper landing** — turned the staging WP "Alzheimer's Awareness / The Financial Impact of Alzheimer's" white-paper page into a consumer campaign landing (`AlzheimersAwarenessPage.jsx`), modeled on Protection-for-What's-Next / National Senior Games.
  - Sections: `.pwn-hero` photo-card hero (dual CTAs → download PDF / scroll to `#steps`) → white "Why planning matters" split (family.png placeholder) → tint stats (5.8M / 14M / $305B / $777B, `.lpl-pillars-grid`) → navy five-essential-steps rows (neutral descriptors + "not advice" note) → tint download + phone (1-833-656-7455) with white resource card → consumer email capture (`#contact`) → `CTABanner` → grey disclosures + sources.
  - Fully wired in `Page.jsx` (`ROUTE_TO_NAV: ""`, `PAGE_ROUTES`, switch, `titles`/`descriptions`, footer `hideSignup` true). Unlisted by design.
  - Stub PDF `public/assets/downloads/alzheimers-awareness-white-paper.pdf` (replace with the real compliance file).
  - Reused existing responsive classes; **no `tokens.css` change**.
  - Verified: `npm run build` clean; Playwright 1440px + 390px renders with correct title/H1, `#steps` present, no horizontal overflow, no console errors.
  - **Note:** Fixed a pre-existing broken duplicate `<section>` line in `PageHero.jsx` (uncommitted WIP) that was blocking the build.
  - **REBUILT content from the source docx** — replaced the earlier white-paper framing with the real `Oceanview_Alzheimers_Dementia_Web_Copy_Only.docx` ("Planning Ahead for Alzheimer's and Dementia — A Practical Guide to Financial Readiness", updated Sept 2026). Now: hero (real H1 + tagline + educational note) → six-question clarity split → new stats (7+ million / Nearly 13M / $409B / 19B+ hours) → 10-chapter "What's inside" preview grid (`#inside`) → 3 planning-principle quotes (navy) → "How Oceanview may support the broader plan" + annuity-fit teal card + printable-guide resource card → "Help is available" (real orgs + helplines 800-272-3900 / 800-677-1116) → consumer email → CTABanner → full disclosures + sources [1–10].
  - Updated meta title/description in `Page.jsx` to the doc's SEO title + meta description.
  - Build clean; Playwright 1440px + 390px: 4 stat cards, 10 chapter cards, 3 principle cards, tel links present, no overflow, no console errors.
  - **REBUILT to standard landing skeleton** — stakeholder asked that "all sections be the sections we always use." Removed the bespoke 10-chapter card grid, help-org grid, and principles band. Page now mirrors the National Senior Games section set & rhythm: photo-card hero → navy intro (six-questions checklist) → white image-text split → tint stat cards → white "What's inside" split (`#inside`) → tint "Oceanview support" split → white email capture → navy closing statement → CTABanner → grey disclosures + sources. Verified build + Playwright at 1440px/390px (10 sections, no overflow, no console errors).
  - **Photography**: localized 4 free Unsplash images as `public/assets/ova-*.jpg` and wired into the hero + 3 image splits (hero couple-on-pathway `Cc10IJDoj78`; family `Ul4CxTdRG_A`; planning-docs `photo-1450101499163-c8848c66ca85`; later-life finances `photo-1576477987917-9d056d379228`). Source IDs in the component header. Build + Playwright confirm all 4 load at 1440/390px, no overflow, no console errors.
  - **Level A content QA pass** — closes the main QA gaps while keeping it a landing: (1) "What's inside" now lists all 10 chapters with short real descriptors; (2) Oceanview section now balances "may help with" with the doc's "An annuity is **not**…" list; (3) added a standard "Help & resources" tint section with external links (alz.org, nia.nih.gov, medicare.gov, eldercare.acl.gov, consumerfinance.gov) + helplines. Build + Playwright verified at 1440/390px (no overflow/console errors).





## 2026-08-31 — Grok
- **Subpage hero title scale** — applied the type audit recommendations (home out of scope):
  - `PageHero` preferred size `4vw` → `5.5vw` so tablet titles don’t collapse; cap stays 63px / weight 800.
  - Partner + campaign photo-card heroes (LPL, Cetera, NSG, Protection) now match `PageHero` instead of 72px / 400.
  - Contact (64px) and legal (56px) folded into the centered-text recipe: `clamp(32px, 4.5vw, 62px)` / 400.
  - Blog articles left at 42px. WPBakery `.ov-hero-title` + Design page type table updated.

## 2026-08-17 — Composer
- **Protection section backgrounds + four-step pillars** — per Figma handoff: Two resources → navy; Why It Matters → white; How Advisors Use It → surface tint; Ask/Listen/Clarify/Connect restored with white pillar-grid styling (`.lpl-pillars-grid`, icon tiles + top borders).
- **Protection campaign imagery (GPT-5.6 Sol)** — replaced reused landing-page photos with three localized, free Unsplash images: an active senior couple for the hero, a retired couple reviewing finances, and an advisor-led client conversation. Source IDs are recorded in `ProtectionForWhatsNextPage.jsx`; desktop/mobile hero crops verified.
- **Protection hero wave clearance (GPT-5.6 Sol)** — raised the page-specific hero to 650px at 721–900px and restored 68px bottom padding at ≤480px. Measured second-label clearance: 76px at 430px, 84px at 720px, and 35px at 820px; desktop and `#lpl-landing` remain unchanged.
- **Protection hero spacing tighten** — reduced vertical gaps/padding at ≤720px and ≤480px (`.pwn-hero-body`, content gap/padding, card padding-bottom, CTA gaps). Verified 390/720/1440px; `#lpl-landing` unchanged.
- **Protection hero mobile fix** — `.pwn-hero` / `.pwn-hero-ctas` classes on `#protection-for-whats-next`; `tokens.css` overrides at ≤720px (auto height, top-aligned content, stacked full-width CTAs). Verified 390/720/1440px; `#lpl-landing` unchanged at 390px.
- **`#protection-for-whats-next` parity pass** — split photo sections (`.nsg-split`), `CTABanner` closing, PDF downloads wired to `public/assets/downloads/` (stub PDFs), agent/client blog articles (`#blog-retirement-protection-agent`, `#blog-retirement-protection-client`), article CTAs linked, `assetUrl()` on all landing pages.

## 2026-07-22 — Composer
- **`#products-filter-test` mobile nav** — option 5 sticky nav no longer dual-scrolls or crushes labels on phone:
  - Category: full-width picker dropdown (full titles) instead of horizontal chips
  - Product tabs: content-sized / grow-to-fill, horizontal scroll when needed; active tab scrolls into view
  - Removed brittle `[style*=overflowX]` CSS overrides in `tokens.css`; class-based fade on scroller only
  - Desktop chips unchanged; live `#products` untouched

## 2026-07-22 — Composer
- Updated `AGENTS.md` action items: product-nav constraints (product-first, full titles, content frozen), five options listed, `#products-filter-test` documented; live `#products` stays default until Mae sign-off.

## 2026-07-22 — Composer
- **`#products-filter-test`** — full Products page with option 5 nav (parent category filter chips + product tabs). Same catalog as `#products` via `navVariant="parent-filter"`. Live `#products` still default two-level nav.

## 2026-07-22 — Composer
- **`#product-tab-examples` rebuilt** — 5 product-first sticky tab ideas only (full titles). Same catalog body under each. No instructional copy on page. Live `#products` unchanged.
  - 1 Grouped strip · 2 Product row + parent eyebrow · 3 Labeled product groups · 4 Category prefix · 5 Products + parent filter

## 2026-07-22 — Composer
- **Product nav Variant A locked** — inline accordion spine (later superseded by product-first 5-option board above).
  - `ProductAccordionNav.jsx` remains in repo unused by the examples page.

## 2026-07-22 — Composer
- **Product tab examples** — initial 5 unrelated concepts + wiring (superseded).

## 2026-07-10 — Grok
- **#nav-dropdowns** responsive: Desktop / Mobile / Both tabs; auto-picks view from live breakpoint (1025px). Mobile phone-frame drawers use `MobileNavContent` (full expanded + per-section). Desktop panels scroll / stack ≤720px. Exports: `MobileNavContent`, `NAV_ITEMS`, `AUD_ITEMS`.

## 2026-07-10 — Grok
- **Nav dropdowns showcase** — `#nav-dropdowns` / `NavDropdownsPage.jsx` (unlisted). Stacks every desktop mega-menu open using live `TabbedDropdown` / `SimpleDropdown` + `NAV_DROPDOWNS` from Header. About + Products shown once per tab (locked). For Devn / design review.

## 2026-07-10 — Grok
- **#design page** is now dual-purpose: **WPBakery how-to at top** + full design system below.
  - Navy intro banner, setup steps, package file map, “how styles get into WPBakery” table, React→WPB map.
  - Teal **WPBakery** callouts on every system section (buttons, cards, hero, CTA, etc.) with `ov-*` classes.
  - Sidebar groups: WPBakery · Design system. Meta description updated in `Page.jsx`.

## 2026-07-10 — Grok
- Added **WPBakery design-system package** under `docs/wpbakery/` for the WordPress build-out:
  - `oceanview-wpbakery.css` — tokens + buttons, cards, hero, CTA banner/panel, forms, splits, tabs
  - `README.md` — setup, React→WPBakery map, class cheat sheets
  - `recipes.html` — Raw HTML snippets for builders
  - `shortcodes.md` — row/column recipes
  - `color-swatches.md` — hex list for Design Options
  - `enqueue-example.php` — child-theme enqueue + `ov-ds` body class
- React `#design` stays the interactive reference; WPBakery CSS is what ships on WordPress.

## 2026-07-10 — Grok
- Refreshed **Design System page** (`#design` / `DesignPage.jsx`) — was stale since 2026-06-13.
- Now imports live `PillMint`/`PillNavy`/`PillWhite`/`PillGhost`/`TextLink`, `Eyebrow`, and `CTABanner`.
- Documented full token sets (secondary colors, greys, surfaces, borders, status, CTA aliases), cards section (3 types), CTAPanel, PageHero `badge`, TextLink default navy-600, corrected CTABanner CTA (PillMint not PillNavy).
- Build passes. Committed + pushed: `a37479b` on `main`.
- Unlisted by design (same as partner/NSG landings — not a missing nav bug). Documented that in `AGENTS.md` for all agents.
- Agent handoff updated: `JOURNAL.md`, `.clinerules`, `AGENTS.md` (CLAUDE.md symlink).

## 2026-07-09 — Claude Code (Fable 5) — client-ready pass
- Applied the fixes from the earlier review of the NSG landing:
  - Navy intro: removed the body sentence duplicated by the display H2 (the H2 now carries that doc sentence verbatim; comment in JSX flags it for compliance confirm).
  - About Oceanview: converted to a two-col split with placeholder image (`lighthouse.jpg`); comment flags swap when real assets arrive.
  - Closing "Keep Moving Toward What Matters": centered statement treatment (was half-empty left column).
  - Footer newsletter now hidden on this page only (`Footer hideSignup` prop, passed from `Page.jsx`) — page keeps its own copy-doc-mandated signup; verified footer signup still renders on other pages.
  - Hero JSX comment marks where the NSGA co-brand/logo goes pending usage rights.
- Verified in browser at 1440px: all sections, no console errors, meta/title correct.
- Committed all NSG work (Grok's page + this polish).
- Still open for client/stakeholders: NSGA logo rights + real photography, CTA destinations, nav/footer link, email backend, global H2/body type scale vs Figma (affects all partner landings, decide once).

## 2026-07-09 — Claude Code (Fable 5)
- Reviewed the NSG landing (`#national-senior-games`) against Web Copy V2 doc and the Figma landing-page template (2026 Oceanview Design, node 7817-24765 = Cetera advisor landing).
- Copy matches the V2 doc verbatim, including the full disclosure block. Two invented strings to confirm with compliance: the added navy H2 "Every chapter can be full of purpose, progress and possibility." (duplicates the first sentence of the paragraph right under it) and the form success message.
- Design system usage is consistent with `PartnerLandingPage` (same S.h1/h2/body styles); no console errors; routing/meta wired correctly.
- Flagged for polish before client share: empty right half in three single-column sections (navy intro, About, closing); double email capture (NSG form + footer signup one screen apart); reused stock imagery + no NSGA logo/co-brand; H2/body sizes run smaller than the Figma (pre-existing across all partner landings, not NSG-specific).
- No code changes made this session — review only. NSG work remains uncommitted.

## 2026-07-09 — Grok
- Built **National Senior Games sponsorship landing** from Web Copy V2 doc.
- New page: `NationalSeniorGamesPage.jsx` at `#national-senior-games` (prod URL target: `/national-senior-games`).
- Sections: hero, navy intro + why we sponsor, long game / retirement, about Oceanview, email capture (client-side only), closing brand, CTABanner, compliance disclosure.
- Patterned after partner landings (hero card, Eyebrow, PillMint/Ghost, CTABanner); not a full PartnerLandingPage clone.
- Polish: moved long-game body copy into navy section; added Featured-Products-style H2 (“Every chapter can be full of *purpose, progress and possibility.*”).
- Updated `AGENTS.md` with NSG page summary for other agents.
- Copied source doc into `docs/National Senior Games Sponsorship Landing Page Web Copy V2.docx` for cross-agent use.
- Unlisted (no nav/footer link). CTAs → `#individuals` / `#about`. Stock images only.
- Loose ends: email backend; CTA confirm; nav link if desired; NSG assets.

## 2026-07-07 — Claude Code (setup)
- Adopted agent-agnostic setup: AGENTS.md is canonical (CLAUDE.md is a symlink), this journal tracks cross-agent session history.
- Recent git history at time of setup:
  - f37e666 fix: clean up Client Resources tab nav and Downloads section
  - 87133b8 refactor: convert Client Resources to ContactPage tab pattern
  - 6791788 fix: restore ?tab= navigation on Client Resources page
  - 355a5cf chore: regenerate snapshots after PageHero layer collapse
  - 4971112 refactor: collapse PageHero background layers for cleaner Figma import
  - bc7df1b chore: switch html-snapshots to external-assets approach + add .mcp.json
  - 36d9aac fix: unify product detail hero with PageHero component
  - 8088f61 chore: update .clinerules after batch 6
