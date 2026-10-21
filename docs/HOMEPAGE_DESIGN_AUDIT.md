# Oceanview Homepage — Design Audit (Corrected & Verified)

**Sites compared:** staging `mattybotstew.github.io/oceanview` vs production `oceanviewprod.wpengine.com`
**Date:** 2026-10-12
**Scope:** design elements only — visual design, layout & section structure, UI component
inventory, typography, rendering defects. Copy, behaviour and infrastructure are out of scope.

This supersedes the design findings in the earlier session report. The inventory tables in that
report (§2, §3, §5, §7) do not match what the two environments actually render; corrections and
evidence are below.

---

## 1. Typography — hero headline font weight (the reported mismatch) — RESOLVED

**Root cause: the same headline is set at two different weights. It is not a fallback font and not
a missing font file.**

Both environments load the brand display serif `PP Editorial New` successfully (verified reachable
on both, weight 400 and 800 faces available). The two implementations simply ask for different
weights on the same element, `.ov-hero-title`:

| Source | `font-weight` | `font-size` |
|---|---|---|
| Staging — `src/components/Hero.jsx` (`S.h1`) | **800** | `clamp(28px, 8vw, 63px)` |
| Repo design spec — `docs/wpbakery/oceanview-wpbakery.css` | **800** | `clamp(28px, 5.5vw, 63px)` |
| **Production (live WP CSS)** | **400** | `clamp(28px, 4vw, 63px)` |

PP Editorial New is declared at 400 (Regular) and 800 (Ultrabold), so:

- **Staging** renders **PP Editorial New Ultrabold** — a heavy display serif.
- **Production** renders **PP Editorial New Regular** — noticeably lighter and thinner at the same
  size, which is exactly the "headline weight differs" symptom.

**Production is the outlier, not staging.** Both the React prototype *and* this repo's WPBakery
handoff package specify **800**; production is running **400**. The weight is also already
documented as spec in `.clinerules` (2026-08-31): photo-card heroes are
`clamp(28px, 5.5vw, 63px)` / weight **800**. Production has drifted from that spec.

### Secondary mismatch on the same headline: the italic accent

The headline's accent phrase ("*the retirement ahead.*") is set differently:

| | Treatment |
|---|---|
| Repo spec (`docs/wpbakery/oceanview-wpbakery.css`) | `.ov-accent { font-style: italic; color: #70BABF }` |
| Staging (`Hero.jsx`) | inline `fontStyle: 'italic'`, `color: '#70BABF'` |
| Production | forced **upright** — a global `font-style: normal !important` reset targets `.ov-hero-title em` / `.ov-accent` |

So on production the accent phrase is teal but **roman**, where the design calls for teal *italic*.
Combined with the lighter weight, this changes the whole colour/rhythm of the headline even though
the words are identical.

### Latent trap worth knowing about

Production's WP theme ships the brand serif under a **second, different family name**:
`'Editorial New'` (theme `library/fonts/v2/stylesheet.css`), separate from the design system's
`"PP Editorial New"`. Worse, the theme maps **Ultrabold to `font-weight: 700`** and Ultralight to
`300`, whereas the design system maps Ultrabold to `800` and Ultralight to `200`.

Any theme CSS that uses `font-family: 'Editorial New'` alongside a 700 weight will render the
Ultrabold file, while design-system classes using `"PP Editorial New"` resolve weights differently.
This is a standing source of the same class of "the weight looks wrong" mismatch — worth collapsing
to one family name and one weight mapping.

---

## 2. Corrected component inventory

The earlier report listed four elements as "production only" and three as "staging only". **Those
tables are incorrect** — both environments render the same component set. Verified against the
production page and the deployed staging build.

| Design element | Staging | Production |
|---|---|---|
| Market ticker bar (top of page) | ✗ | ✓ |
| Hero eyebrow ("Fixed & Fixed Indexed Annuities") | ✓ | ✓ |
| Hero H1 | ✓ | ✓ |
| Hero subtitle paragraph | ✓ | ✓ |
| Hero dual CTAs (Explore Annuity Options / View Rates) | ✓ | ✓ |
| Trust / proof bar (AM Best, Total Assets, Focused, Distribution) | ✓ | ✓ |
| "How can we help you plan ahead?" audience cards | ✓ | ✓ |
| Annuity Options (Fixed / Fixed Indexed) | ✓ | ✓ |
| Why Oceanview 4-pillar grid | ✓ | ✓ |
| "Discover the Oceanview Difference" CTA | ✓ | ✓ |
| Retirement Resources 3-card grid + "Explore Retirement Resources" | ✓ | ✓ |
| Current Rates section ("See what's current.") | ✓ | ✓ |
| Stay Informed signup section | ✓ | ✓ |
| "For Financial Professionals — Resources built for you" | ✓ | ✓ |

**The only production-only design element is the market ticker bar.** Staging has no equivalent:
the ticker was removed from the React page shell on 2026-09-09 (`TickerBar` retained as an unused
component), and the deployed staging build contains no ticker markup.

Corrections to the earlier report's specific claims:

- **Hero eyebrow and subtitle are not production-only** — staging's hero passes both
  (`HomeV2Page.jsx` §1 → `slideOverride`).
- **"Discover the Oceanview Difference" is not production-only** — `HomeV2Page.jsx` renders it after
  the Why Oceanview grid.
- **Retirement Resources is not "heading only" on production** — production renders all three cards
  (How Fixed Annuities Work, Annuity Pros & Cons, Understanding Fixed Indexed Annuities) plus the
  "Explore Retirement Resources" CTA.
- **Current Rates and Stay Informed are not missing from production** — both render, in the same
  order as staging.

---

## 3. Layout & section order

Section sets match; production merely prepends the ticker.

| | Staging | Production |
|---|---|---|
| Top of page | Hero | **Ticker bar** → Hero |
| Hero composition | Eyebrow → H1 → subtitle → CTAs | Eyebrow → H1 → subtitle → CTAs |
| Body sections | Trust bar → Audience → Annuity Options → Why Oceanview → CTA → Resources → Current Rates → Stay Informed | Trust bar → Audience → Annuity Options → Why Oceanview → CTA → Resources → Current Rates → Stay Informed |

There is no truncated or orphaned section on either environment. The "shorter page / missing
sections" observation in the earlier report is not reproducible.

---

## 4. Rendering defects (design)

| # | Defect | Environment | Severity | Status |
|---|---|---|---|---|
| 1 | Hero headline renders at weight 400 instead of the specified 800; responsive size ramp is 4vw instead of 5.5vw | Production | **Medium** | ✅ **Fixed on staging 2026-10-21** — see §5 |
| 2 | Hero accent phrase forced upright instead of italic | Production | Low–Medium | ✅ **Fixed on staging 2026-10-21** — see §5 |
| 3 | Market ticker bar present, absent from the React design | Production | Low (design decision) | Confirmed as an element difference, not a defect per se |
| 4 | "Duplicated ticker block" | Production | — | **Reclassified:** not a design defect. The second copy of the data set is the marquee's loop frame; it is one bar, not two stacked sections. No layout/design fix required. |
| 5 | "Orphaned Retirement Resources heading" | Production | — | **Not reproducible** — the three cards render (§2). |
| 6 | "Empty vertical space / scroll rhythm" from missing sections | Production | — | **Not reproducible** — no sections are missing (§3). |

---

## 5. Recommended design fixes

| Priority | Action | Owner |
|---|---|---|
| **P0** | Align `.ov-hero-title` to spec: `font-weight` 400 → **800**, size ramp 4vw → **8vw home / 5.5vw inner** | Front-end Dev | ✅ Fixed on staging — measured 63px / 800 at 1440px, 48px at 600px |
| **P0** | Restore the accent italic (the sitewide `font-style: normal !important` reset was flattening it) | Front-end Dev | ✅ Fixed on staging — heroes and section H2s now italic; H2 weight stays 400 |
| **P1** | Collapse the two font family names / weight mappings (`"PP Editorial New"` 800 vs `'Editorial New'` 700) to one | Front-end Dev | Open — not needed for the weight fix (all `.ov-*` classes use `--ov-ff-display`) |
| **P1** | Decide whether the market ticker bar belongs in the final design — it exists only on production and is absent from the React design system | Design / Product |
| **P2** | Re-run the visual comparison after the weight fix; the earlier "missing sections" issues need no action | QA |
| **P2** | Responsive pass at 320 / 768 / 1024 / 1440px — still not assessed. Note the hero H1 ramp is the one element that already differs between environments at intermediate widths | QA |

---

## 6. Conclusion

The two environments are **closer to parity than the earlier report suggested**: they share the same
section set and component inventory. The **only** structural design difference is the production-only
market ticker bar.

The reported headline **font-weight mismatch is resolved**: it is a weight-value parity gap, not a
font-loading failure. Production renders the brand serif at **400 Regular** where both the React
prototype and this repo's WPBakery package specify **800 Ultrabold** — so production's headline reads
lighter than the design intends. The same `!important` block also flattens the italic accent to
upright. Both are production-side drift, fixable in the WP stylesheet without touching the prototype.

**Update (2026-10-21):** both are fixed on **staging**. The font files were never the problem — PP
Editorial New ships 400, 400-italic, **800** and **800-italic**; the 800 faces were simply never
requested. The cause was two rules inside `oceanview-wpbakery.css`: `.ov-hero-title` hard-coding
`font-weight: 400` and `font-size: clamp(28px, 4vw, 63px)`, and a sitewide
`h1–h6 em / .ov-accent { font-style: normal !important }` reset. The Design QA block appended to that
sheet now restores 800, the prototype's ramp (**8vw** home / **5.5vw** inner, both capped at 63px) and
the italic accents. Measured live on staging: hero **63px / 800 / -1.575px** at 1440px, **48px** at
600px, accent **italic**; section H2s correctly stay **400** with italic accents. Production still
needs the same append.
