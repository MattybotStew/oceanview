# Rates inventory — where every published rate lives today

**For:** Mikko (WP build) · **From:** design QA pass · **Date:** 2026-10-24
**Goal:** one place for Mae to update rates, without touching page layouts.

**Method:** crawled all 84 pages on **staging** plus the known rate URLs, and read the
shortcode definitions in `wp-content/plugins/tcm-vc/class/`. Counts below are **rendered
instances** on staging, not rows in the database (Local's MySQL was down, so post content
couldn't be enumerated directly — see "What I could not check").

---

## 1. The short version

Rates are **not** in one place. They live in **four different mechanisms**, all of them
per-instance, so changing a rate currently means editing each page that shows it:

| # | Mechanism | Where the number is stored | Editable by |
|---|-----------|---------------------------|-------------|
| A | `tcm_cr_rate_summary_card` | shortcode attributes on each card | Mikko (shortcode) |
| B | `tcm_pdt_rate_display` | `rate_value` / `term_label` / `effective_date` attributes per card | Mikko (shortcode) |
| C | `tcm_pdt_rate_table` | `columns` + per-row `label` / `values` attributes | Mikko (shortcode) |
| D | `tcm_rate_table` (Client Resources module) | `columns` + rows | Mikko (shortcode) |

There is **no rate CPT, no ACF options page, and no shared data source** behind any of them.
That is the actual problem to solve — not a styling one.

---

## 2. Inventory by surface

### 2.1 `/rates/` — "Current Annuity Rates" (the biggest cluster)

Uses the **Client Resources rate table** module (`tcm_rate_table`) — 5 tables, **~98 rate
cells** in total. This is already the closest thing to a single source and is the natural
home for Mae.

| Section on page | Products covered | Columns |
|---|---|---|
| Harbourview MYGA Rates | Harbourview MYGA | Surrender Period × **Standard ($20k+) / Select ($70k+) / Premier ($100k+)** |
| CurrentRate MYGA Rates | CurrentRate MYGA | Surrender Period × Standard |
| Sky Harbourview MYGA Rates | Sky Harbourview MYGA | Surrender Period × 3 bands |
| Harbourview FIA | Harbourview FIA | Crediting Strategy × **3 / 5 / 7 / 10 Year** |
| CapLock FIA | CapLock FIA | Crediting Strategy × 3 / 5 / 7 / 10 Year |

Sample of what is live today (so you can sanity-check the mapping):

```
2-Year MYGA   4.80%   5.15%   5.15%
3-Year MYGA   4.95%   5.30%   5.30%
4-Year MYGA   5.35%   5.70%   5.70%
5-Year MYGA   5.15%   5.50%   5.50%
6-Year MYGA   5.75%   6.10%   6.10%

S&P 500 Annual Point-to-Point   60.00%  65.00%  65.00%  65.00%   (3y/5y/7y/10y)
```

### 2.2 `/professionals/` — 5 summary cards

`tcm_cr_rate_summary_card` × 5: Harbourview MYGA, CurrentRate MYGA, Sky Harbourview MYGA,
Harbourview FIA, CapLock FIA. Each has its own `rate_value` + `effective_date`.
**All 5 currently render the `X.XX%` placeholder.**

### 2.3 `/individuals/` — 4 summary cards

Same module, same products (Harbourview MYGA, CurrentRate MYGA, Harbourview FIA, CapLock FIA
cap rate). **All 4 render the `X.XX%` placeholder.**

### 2.4 Product pages — rate cards + term tables

| Page | `tcm_pdt_rate_display` cards | `tcm_pdt_rate_table` | `tcm_pdt_strategy_row` |
|---|---|---|---|
| `/products/harbourview-fixed-annuity-series/` | **8** (one per guarantee term) | – | – |
| `/products/harbourview-fixed-indexed-annuity/` | **5** | 1 | 16 |
| `/products/caplock-fixed-indexed-annuity/` | **3** | 1 | 22 |
| `/products/levelcapfixed-indexed-annuity/` | **3** | 1 | 22 |
| `/products/sky-harbourview-fixed-annuity-series/` | **1** | – | – |
| `/products/currentrate-myga/` | **1** | – | – |

The FIA term tables hold the year-by-year cap/participation curve, e.g. CapLock:

```
Year   5-Year  7-Year
1      9%      9%
2      8%      8%
3      7%      7%
4      6%      6%
5      5%      5%
6      —       4%
7      —       3%
```

### 2.5 Landing pages with their own rate table

| Page | Module |
|---|---|
| `/oceanview-horizon/` | `tcm_pdt_rate_table` × 1 |
| `/topsider-fia-landing-page/` | `tcm_pdt_rate_table` × 1 + 13 strategy rows |

**These are duplicates of product-page data.** They will drift unless they read the same
source — worth deciding whether they stay as copies or get pointed at the source.

---

## 3. Recommendation for the single source

**A dedicated "Rates" data source, with the existing modules reading from it and falling
back to their current attribute** (so nothing breaks on pages not yet migrated).

Suggested shape — one row per *rate offering*, keyed by product + term + band:

```
product        term    band        value    effective_date   type
Harbourview    2-Year  Standard    4.80%    2026-10-01       MYGA APY
Harbourview    2-Year  Select      5.15%    2026-10-01       MYGA APY
Harbourview    2-Year  Premier     5.15%    2026-10-01       MYGA APY
CapLock S&P    5-Year  —           9.00%    2026-10-01       FIA cap
Harbourview FIA 5-Year —           65.00%   2026-10-01       Participation rate
```

Two implementation options:

- **A. ACF Options page ("Rates")** — fastest. A repeater Mae edits under
  *Settings → Rates*, plus a single global "effective date". Then add one helper,
  `ov_rate( $product, $term, $band )`, and change each module to call it first.
- **B. Rate CPT** — better if rates need an audit trail (who changed what, when, and the
  previous value), which for annuity rates is usually worth it. Same helper reads it.

**Either way, Mae gets:** one screen, rows grouped by product, a single "effective date"
she sets once per change, and no page editing.

**Migration is mechanical:** each existing card/table instance maps to one
`(product, term, band)` key. The `/rates/` tables and the `/professionals/` +
`/individuals/` cards are all addressable from the same rows — which is what removes the
current duplication.

---

## 4. Two things to decide before building

1. **Which is canonical?** `/rates/` already holds the most complete data (all bands, all
   terms). If that becomes the source, the product-page cards and the summary cards all
   derive from it — no new authoring at all, just wiring.
2. **The `X.XX%` placeholders** — 9 summary cards (4 + 5) render the placeholder today, and
   I saw it on several product cards too. Is that "rates not yet published on staging", or
   is staging meant to mirror production numbers? This determines whether the migration
   starts with a real import or an empty table.

---

## 5. What I could not check

- **Post content / shortcode attributes** — Local's MySQL was stopped, so I audited the
  rendered HTML and plugin source instead. Exact instance counts and which cards are
  placeholder vs populated should be confirmed in WP admin (**Pages → the page → the rate
  module**). The page list and module names above are reliable; instance counts are within
  a card of correct.
- **`/professionals/fia-annuity-rates/`** renders no rate module — it looks like a
  link/landing page. Worth confirming that's intended, since the name suggests otherwise.
- **Market ticker** (header, `+0.42%` etc.) is market data, **not** a product rate. It is
  out of scope for Mae and should not be moved into the same source.
- Strategy names like "Daily Risk Control 5%" contain a percentage that is a **volatility
  target, not a rate** — do not migrate those.

---

## 6. Suggested order of work

1. Confirm the two decisions in §4.
2. Build the rates table + the ACF/CPT screen (a day).
3. Seed it from the `/rates/` tables (they're the most complete).
4. Point `/rates/`, then the `/professionals/` and `/individuals/` summary cards at it —
   those 3 surfaces are the highest-visibility and cover all **9 summary cards** (4 + 5)
   plus the 98 cells on `/rates/`.
5. Move the product-page cards and FIA term tables page by page.
6. Decide on the two landing-page duplicates (`/oceanview-horizon/`,
   `/topsider-fia-landing-page/`).
7. Hand to Mae with one page of instructions: *Settings → Rates → change the value → set the
   effective date → save.* Everything else derives.
