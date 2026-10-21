# Figma Design QA — full scope & quick-win UI fixes

**Board:** [2026 Oceanview Design → Design QA](https://www.figma.com/design/fe7PYQtVJ2pNZ1VR6lznWz/2026-Oceanview-Design?node-id=9253-2)  
**Layout:** WordPress capture **left**, React prototype **right** (source of truth for most UI).  
**Scope:** UI/UX only — layout, type, spacing, buttons, nav chrome, forms. Not copy/IA unless noted.  
**Ticker:** **Stays on WordPress** (32px + 72px nav = **104px** stack). Prototype has no ticker — **do not remove** on WP to match Figma right column.  
**Detailed dev punchlist:** [`WP_DEV_PUNCHLIST.md`](./WP_DEV_PUNCHLIST.md) · **Gap analysis:** [`DESIGN_QA_WP_HANDOFF.md`](./DESIGN_QA_WP_HANDOFF.md)

---

## How to read this doc

| Tier | Meaning | Typical effort |
|------|---------|----------------|
| **Q0** | **Sitewide bundle** — deploy once, fixes **every** paired page | SFTP 3 theme files (~1–2 hrs + QA) |
| **Q1** | **Quick win per page** — small WPBakery delete/tweak or one CSS rule | ≤30 min / page |
| **S** | **Structural** — rebuild rows, tabs, grids, nav shells | Half day+ / page |

**Q0 is already built on Local (`ocean.local`)** — promote to staging before re-QAing Q1 items.

---

## Board inventory (30 frames)

### Paired pages (WP vs prototype) — 11 pairs

| # | WordPress (left) | Prototype (right) | Q0 applies | Q1 on this page | Structural (S) |
|---|------------------|-------------------|------------|-----------------|----------------|
| 1 | Home | Home | ✓ | See § Home | Stats spacing, Why OV link row, Rates band |
| 2 | About | About | ✓ | Re-QA after Q0 | — |
| 3 | Leadership | Leadership | ✓ | Re-QA after Q0 | — |
| 4 | Products | Products | ✓ | — | **Option 5 product nav** (~136px → ~109px) |
| 5 | Harbourview MYGA (PDP) | Harbourview MYGA | ✓ | Product sub-nav sticky if present | In-page anchor/tabs if mismatched |
| 6 | Client Resources | Client Resources | ✓ | Secondary nav band height/spacing | — |
| 7 | Contact | Contact | ✓ | — | **Left hero + 4 tabs** |
| 8 | Insights hub | Insights | ✓ | Card grid spacing after Q0 | — |
| 9 | White Papers | White Papers | ✓ | Re-QA after Q0 | — |
| 10 | Blog index | Blog | ✓ | — | **Grid vs ~10k px stack** |
| 11 | Individuals | Individuals | ✓ | Headline column after Q0 | Optional section spacing |

### Unpaired / incomplete on board

| Frames | Notes | Quick wins only |
|--------|--------|-----------------|
| Newsroom × 2 (both WP) | No prototype column | **Q0 only** |
| FAQ × 2 (both WP) | No prototype column | **Q0 only** |
| FIA article (WP) | Prototype pair on board is **Life Events**, not same URL | **Q0** + compare to matching React article route manually |
| MYGA article (WP) | Adjacent frame is **RRS article** (different page) | **Q0** + manual article QA |
| 2× “Resources for financial professionals” dialogs | Modals, not full pages | Not reviewed — treat as separate task |

### Article / campaign pages (need explicit prototype URL in React)

| WP frame on board | Suggested React reference |
|-------------------|---------------------------|
| FIA — “How to Use FIAs to Protect…” | `#protection-for-whats-next` / related blog routes (confirm with content) |
| Life Events (proto frame) | Life Events series pages in repo |
| MYGA — “Who May Want a 5-Year CurrentRate…” | Product/insight pages in repo |
| RRS — “Retirement Protection Starts with Better Questions” | `#protection-for-whats-next` / blog |

---

## Q0 — Sitewide quick-win bundle (highest ROI)

**One deploy fixes the same drift on all 11 pairs + Newsroom + FAQ.**

Measured on board (WP before fix → prototype):

| Issue | WP (typical) | Prototype | Fix |
|-------|--------------|-----------|-----|
| Market ticker | **Keep** — part of approved WP design | None (72px nav only) | **No change** — intentional divergence |
| Header stack | **104px** (32 ticker + 72 nav) | 72px | Offset + scroll-collapse via `functions.php` + `header.php` + CSS |
| Content under header | Home overlay / mixed offsets | Prototype below 72px; **WP below 104px** | Design QA block appended to `oceanview-wpbakery.css` + `--ov-header-h` |
| Audience pills | Heavy/filled, tall type | Outline, centered label | QA overrides |
| Section H2 measure | up to **1200px** wide | **~631px** column | QA overrides |
| Footer link step | ~45px + indent | ~38px flush | QA overrides |
| Signup row | 3 narrow fields | 2 wide + button | GF render filter + CSS |
| Interior footer height | ~1045px | ~987px | Mostly rhythm above |

**Files:** append the Design QA block to `oceanview-wpbakery.css`, replace `syncContentOffset()` in `header.php`, append `oceanview_gf_signup_fields()` to `functions.php` → theme `oceanviewlife` → **purge WPE cache**.

**Not in Q0 (separate CSS ticket):** Production hero `.ov-hero-title` **weight 400 → 800** and teal **italic** accent — [`HOMEPAGE_DESIGN_AUDIT.md`](./HOMEPAGE_DESIGN_AUDIT.md) (Q0-style but prod CSS bundle).

---

## Q1 — Per-page quick wins (after Q0 on staging)

These are **small** changes visible on the Figma board but **not** full rebuilds.

### Home

| Fix | Tier | Action |
|-----|------|--------|
| Header/ticker/pills/section width/footer/signup | Q0 | Bundle |
| Trust stats band ~40px low | Q1 | Remove extra `vc_empty_space` / margin row under hero in WPBakery |
| Stat column alignment | Q1 | Column settings or small CSS on stats row |
| Hero H1 weight/italic (prod) | Q1 | CSS in theme or DS sheet |

### About · Leadership · Insights · White Papers · Individuals

| Fix | Tier | Action |
|-----|------|--------|
| All global chrome | Q0 | Bundle |
| Residual full-width intros | Q1 | After Q0, delete any page-specific full-width row wrappers overriding `.ov-section-intro` |
| Individuals long headlines | Q1 | Often fixed by Q0 measure; if not, constrain text column in builder |

### Harbourview MYGA (product detail)

| Fix | Tier | Action |
|-----|------|--------|
| Global chrome | Q0 | Bundle |
| Page height delta (~12k vs ~12.5k) | Q1 | Audit duplicate section padding / empty rows (same pattern as Home Rates band) |
| In-page sticky subnav | Q1/S | Compare left WP vs right proto — if only spacing, trim padding; if wrong tabs, **S** |

### Client Resources

| Fix | Tier | Action |
|-----|------|--------|
| Global chrome | Q0 | Bundle |
| Top secondary nav (`Navigation - Client Resources` ~92px band) | Q1 | Match proto spacing — often one empty row or padding halving |

### Contact

| Fix | Tier | Action |
|-----|------|--------|
| Global chrome | Q0 | Bundle |
| Hero H2 in centered block | Q1 | Partial — left-align intro text in existing row if possible without tabs |
| **Four support tabs** | **S** | Not Q1 |

### Blog

| Fix | Tier | Action |
|-----|------|--------|
| Global chrome | Q0 | Bundle |
| **Archive layout** | **S** | Not Q1 |

### Products

| Fix | Tier | Action |
|-----|------|--------|
| Global chrome | Q0 | Bundle |
| **Category + product nav** | **S** | WP 136px two-line pills → proto 109px option 5 — **largest structural gap on site** |

### Newsroom · FAQ (WP-only frames)

| Fix | Tier | Action |
|-----|------|--------|
| Ticker, header, footer, type | Q0 | Bundle only — no prototype diff on board |

---

## Structural backlog (not quick wins)

| Page | What Figma shows | Reference |
|------|------------------|-----------|
| **Products** | Two-line category pills + tall band | `#products` `parent-filter` nav |
| **Contact** | No tab bar; centered short hero | `#contact` tab list + panel |
| **Blog** | WP page ~11,920px tall vs proto ~4,184px | `#blog` grid |
| **Home** | Why Oceanview CTA inside grid cell; tall Current Rates | Move link row; tighten section padding |
| **Dialogs** | Pro resources modals | TBD |

---

## Recommended execution order

1. **Deploy Q0 to staging** → smoke-test all 11 pairs at 1440px + 390px (**104px** stack with ticker, content offset, pills, 630px intros, footer/signup).
2. **Q1 sweep** — Home stats gap → Client Resources nav band → Harbourview padding audit → prod hero CSS.
3. **S — P0** Products nav → Home sections → **S — P1** Contact tabs → Blog grid.
4. **Articles** — pair each WP URL to a React route; run Q0 + content layout pass (not on Figma board as matched pairs).

---

## QA checklist (per page, post-Q0)

- [ ] Ticker **on**; stack **104px** at rest (nav **72px**)
- [ ] Hero/card starts **below** nav (not underlap on home)
- [ ] Section intros ~**630px** wide on desktop
- [ ] Footer link spacing matches proto rhythm
- [ ] Signup: two fields + button on one row (where form exists)
- [ ] Compare to prototype hash at **1440** and **390**

| Page | Prototype route |
|------|-----------------|
| Home | `#` / `#home` |
| About | Our Story / `#about` |
| Leadership | `#leadership` |
| Products | `#products` |
| Harbourview MYGA | `#harbourview-myga` |
| Client Resources | `#client-resources` |
| Contact | `#contact` |
| Insights | `#insights` |
| White Papers | `#white-papers` |
| Blog | `#blog` |
| Individuals | `#individuals` |

---

## Figma artifacts

| Item | Link |
|------|------|
| Design QA canvas | [node 9253-2](https://www.figma.com/design/fe7PYQtVJ2pNZ1VR6lznWz/2026-Oceanview-Design?node-id=9253-2) |
| Dev punchlist sticky (yellow) | [node 9273-34](https://www.figma.com/design/fe7PYQtVJ2pNZ1VR6lznWz/2026-Oceanview-Design?node-id=9273-34) |
| Quick wins Q0/Q1 sticky (blue) | [node 9274-32](https://www.figma.com/design/fe7PYQtVJ2pNZ1VR6lznWz/2026-Oceanview-Design?node-id=9274-32) |

---

*2026-10-21 — Full board review (11 WP/proto pairs + unpaired frames). Q0 implemented on Local; staging promote pending.*
