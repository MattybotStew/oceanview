# Rate inventory & single-source handoff

**For:** Mikko (build) · **Content owner:** Mae  
**Last checked:** 2026-10-24 (staging + production public pages, React prototype source)

**Why this exists:** rates are currently typed by hand into ~12 places, with **four different values for the same Harbourview 5-year rate**. This is the complete list of every surface that renders a rate, what it currently says, and the one record Mae should edit after consolidation.

---

## TL;DR for Mikko

1. There are **two publishable rate destinations** today on staging — `/rates/` and `/how-oceanview-mygas-compare/` — plus **rate-sheet PDFs** and **inline badges** on product/home pages.
2. The React prototype has a **second, conflicting rates schedule** in `ClientResourcesPage.jsx` (the “Rates” tab). Do not copy both. Pick one value set, verified against the current rate sheet PDF.
3. Build **one rates dataset + one renderer** (`ov_rates`) and replace every surface in Part A/B below. Target: changing one value in WP admin updates every page in this list.
4. Editorial snapshots — blog posts, newsroom articles, renewal-history stats — **must not** be wired to the live dataset. They are dated records.

---

## Part A — WordPress (what actually ships)

### Staging (`oceanviewstg.wpengine.com`) — new design system

| # | Surface | URL | What rates appear | Edited today |
|---|---|---|---|---|
| A1 | **Rates** | https://oceanviewstg.wpengine.com/rates/ | **5 product tables** — Harbourview MYGA, CurrentRate MYGA, Sky Harbourview MYGA, Harbourview FIA, CapLock FIA. **Missing: Horizon MYGA, Topsider FIA.** Includes effective dates, California table, “Download Current Rate Sheet”. | Hand-built WPBakery/HTML page content |
| A2 | **How Oceanview MYGAs Compare** | https://oceanviewstg.wpengine.com/how-oceanview-mygas-compare/ | **3 competitor tables** — 2-, 3-, 4-year MYGA comparison; Annuity Rate Watch, weekly, with an “as of” date. | Page content |
| A3 | Harbourview MYGA product | https://oceanviewstg.wpengine.com/products/harbourview-fixed-annuity-series/ | Links to Rates **and renders 8 `tcm_pdt_rate_display` cards** (one per guarantee term). | Shortcode attributes per card |
| A4 | Horizon MYGA product | https://oceanviewstg.wpengine.com/oceanview-horizon/ | **Renders 1 `tcm_pdt_rate_table`** (div-based, not a `<table>`). | Shortcode attributes |
| A5 | Sky Harbourview MYGA product | https://oceanviewstg.wpengine.com/products/sky-harbourview-fixed-annuity-series/ | Links to Rates **and renders 1 `tcm_pdt_rate_display` card**. | Shortcode attributes |
| A6 | CurrentRate MYGA product | https://oceanviewstg.wpengine.com/products/currentrate-myga/ | Links to Rates **and renders 1 `tcm_pdt_rate_display` card**. | Shortcode attributes |
| A7 | Harbourview FIA product | https://oceanviewstg.wpengine.com/products/harbourview-fixed-indexed-annuity/ | **5 rate cards + 1 `tcm_pdt_rate_table` (caps by year) + 16 strategy rows.** | Shortcode attributes |
| A8 | CapLock FIA product | https://oceanviewstg.wpengine.com/products/caplock-fixed-indexed-annuity/ | **3 rate cards + 1 `tcm_pdt_rate_table` (caps by year) + 22 strategy rows.** | Shortcode attributes |
| A9 | Topsider FIA product | https://oceanviewstg.wpengine.com/topsider-fia-landing-page/ | **1 `tcm_pdt_rate_table` + 13 strategy rows.** | Shortcode attributes |
| A10 | Renewal Rates | https://oceanviewstg.wpengine.com/renewal-rates/ | Renewal landing page — no rate table found. | — |
| A11 | Client Resources | https://oceanviewstg.wpengine.com/client-resources/ | No rate table on staging (the React prototype has a Rates tab — see B2). | — |
| A12 | Home | https://oceanviewstg.wpengine.com/ | No product-rate band — market ticker only. | — |
| A13 | Rate-sheet PDFs | Downloads / Brochures, plus Salesforce links on partner pages | Per-product PDFs (Harbourview FIA, Harbourview MYGA, CapLock, Horizon MYGA, + CA versions) | Media library / Salesforce |

**Net:** staging publishes rates in **two places** (A1, A2) plus PDFs. The consolidation work is mostly about **preventing the new build from re-scattering what A1/A2 already centralize**.

**Corrected 2026-10-24 after a module-level audit — staging already carries more than A1/A2.**
The rows above were first read from `<table>` markup, which misses three of the four rate
modules because they render **divs**, not tables. Measured against the rendered markup plus
the shortcode definitions in `wp-content/plugins/tcm-vc/class/`:

### Rate modules live on staging today (measured)

| Mechanism | Shortcode | Key attributes | Instances on staging |
|---|---|---|---|
| Summary card | `tcm_cr_rate_summary_card` | `rate_value`, `effective_date`, label | **9** — 4 on `/individuals/`, 5 on `/professionals/` (**all 9 render the `X.XX%` placeholder**) |
| Product rate card | `tcm_pdt_rate_display` | `rate_value`, `term_label`, `effective_date`, `heading`, `sublabel`, `description` | **21** across 6 product pages (8 Harbourview Fixed, 5 Harbourview FIA, 3 CapLock, 3 LevelCap, 1 Sky, 1 CurrentRate) |
| Term / cap table | `tcm_pdt_rate_table` | `columns`, `row_label_header`, rows of `label` + `values` | **5** — CapLock, LevelCap, Harbourview FIA, `/oceanview-horizon/`, `/topsider-fia-landing-page/` |
| Rates hub table | `tcm_rate_table` (+ `_group`, `_row`) | `columns`, rows | **5 tables / ~98 cells** on `/rates/` |

Also measured: `/rates/` is the only surface with a complete, consistent data set. Example —
Harbourview MYGA, Standard / Select / Premier: 2-Year **4.80 / 5.15 / 5.15**, 3-Year
**4.95 / 5.30 / 5.30**, 4-Year **5.35 / 5.70 / 5.70**, 5-Year **5.15 / 5.50 / 5.50**,
6-Year **5.75 / 6.10 / 6.10**. Caplock's cap table today: 5-year 9/8/7/6/5%, 7-year
9/8/7/6/5/4/3%.

**What this changes for the plan:** consolidation is **not** only about stopping the new
build from re-scattering. There are already **21 product cards + 5 term tables + 9 summary
cards** on staging whose values are per-instance shortcode attributes. Those are the rows
that have to be migrated onto the dataset — and because three of the four modules take a
`rate_value` (or `label`+`values`) attribute, the migration is mechanical: one attribute
per row maps to one dataset key. The nine summary cards are also the quickest visible win,
since they are three of the highest-traffic pages and every one is currently a placeholder.

### Production (`oceanviewlife.com`) — legacy theme

| # | Surface | URL | Notes |
|---|---|---|---|
| P1 | **Rates** | https://oceanviewlife.com/rates/ | **TablePress**, 10 tables across 5 tabs (Harbourview MYGA, CurrentRate MYGA, Sky Harbourview MYGA, Harbourview FIA, Caplock FIA). Effective dates, contract features, CA table, rate-sheet download. |
| P2 | **How Oceanview MYGAs Compare** | https://oceanviewlife.com/how-oceanview-mygas-compare/ | 3 competitor tables (weekly). |
| P3 | Product pages | e.g. `/products/harbourview-fixed-annuity-series/` | Link to Rates; no duplicated tables. |

**TablePress evidence (production):** plugin active; `.tablepress` classes (20 nodes); `tablepress-combined.min.css?ver=7` and `js/jquery.datatables.min.js?ver=3.3.4` load on `/rates/`.  
**Staging:** no TablePress plugin, no `.tablepress` markup, no TablePress CSS/JS.

> **Decision needed:** keep production TablePress until the legacy site retires, or treat staging as the only maintained set? If both stay live in parallel, Mae has two places to update — the exact problem this handoff is meant to solve.

---

## Part B — React prototype (Mikko’s reference build)

These are the surfaces the new WP build will reproduce. File paths are exact as of 2026-10-24.

| # | Surface | Route | Code | Rate content | Values? |
|---|---|---|---|---|---|
| B1 | **Rates hub** | `#rates` | `src/components/RatesPage.jsx` + `src/data/ratesPage.js` | 7 products: 4 MYGA band/term tables + 3 FIA strategy tables; “quoted at application” cards for Horizon + Topsider; disclosures | **98** hardcoded values |
| B2 | **Client Resources → Rates tab** | `#client-resources?tab=rates` | `src/components/ClientResourcesPage.jsx` (lines ~139–315) | 3 sub-tabs: MYGA Rates, FIA Caps & Participation, California Rates | **52** — **conflicts with B1** |
| B3 | **Products page badges** | `#products` | `src/components/ProductsPage.jsx` (`PRODUCTS`, ~line 135) | One rate badge per product card: Harbourview 5.20%, Horizon 5.10%, Current Rate 4.95%, Harbourview FIA 9.5%, CapLock 11.0%, LevelCap `X.XX%`, Sky + Topsider blank | 5 + 1 placeholder |
| B4 | **Home / legacy home product card** | `#home`, `#home-v2`, `#home-legacy` | `src/components/ProductsCard.jsx` (`PRODUCTS`, ~line 76) | Harbourview 5.20% / Sky 5.10% / Harbourview Plus 4.95% / Crescendo “Index Cap 9.5%” / Crescendo Plus “Index Cap 11.0%” | 5 |
| B5 | **Product detail “Current rates” block** | `#harbourview-myga`, `#caplock`, `#levelcap`, `#current-rate-fia`, `#harbourview-fia`, `#sky-harbourview-myga` | `ProductDetailPage.jsx` `CurrentRatesBlock` + each page’s `currentRates` object | `rate: "X.XX%"`, `ratesByTerm`, `effectiveDate` | 6 placeholders + 6 dates |
| B6 | **MYGA comparison page** | `#how-oceanview-mygas-compare` | `src/data/mygasCompare.js` | 3 competitor tables + `RATES_AS_OF = "October 19, 2026"` + source + context | 9 values + date |
| B7 | **Renewal rates campaign** | `#renewal-rates` | `src/components/RenewalRatesPage.jsx` | Historical stats **98.2%** (avg renewal cap vs initial) and **10.8%** (contracts renewed higher); no table | 2 stats (dated snapshot) |
| B8 | **Newsroom** | `#newsroom` | `src/components/NewsroomPage.jsx` | Rate-update article: “3-year MYGA increases to 5.20% on the Premier band ($100k+), effective June 1, 2026” + “Download Rate Sheet” | 1 value + date |
| B9 | **Blog index** | `#blog` | `src/components/BlogPage.jsx` | Two rate-update posts: “May 2026 Rate Update: Harbourview MYGA at 5.20%” and “April 2026 … S&P 500 annual cap increased to 9.5%” | 2 values + dates |
| B10 | **Partner landings** | `#cetera-landing`, `#lpl-landing` | `CeteraLandingPage.jsx`, `LPLLandingPage.jsx` | “Rate Sheets” resource lists — LPL has live Salesforce PDF URLs; Cetera has titles only | Links only |
| B11 | **Downloads / Brochures** | `#downloads`, `#brochures` | `src/data/documents.js` | Rate-sheet PDF links (Salesforce / WP uploads) per product | Links only |
| B12 | **Market ticker** | sitewide header (WP only) | `src/components/TickerBar.jsx` | S&P 500, NASDAQ, Russell 2000, 10-Yr Treasury, VIX — hardcoded, not product rates | 10 values |

**Total:** ~170 product-rate values + 6 placeholders + 3 competing effective-date formats across 11 editable surfaces.

---

## Part C — Conflicts to resolve before copying anything

Same product, same term, four different numbers. Mae cannot be handed a single source until one value set wins.

### Harbourview MYGA — 5-year

| Source | Value |
|---|---|
| B1 `ratesPage.js` | Standard **5.15%** · Select **5.50%** · Premier **5.50%** |
| B2 Client Resources | Standard **4.35%** · Senior **4.65%** · Premier **4.85%** |
| B3 Products page | **5.20%**, labelled “5-Year Guaranteed” |
| B4 Home card | **5.20%**, labelled “5-Year” |

**Likely root cause:** 5.20% is the **3-year Premier** rate in B2’s table, but B3/B4 label it 5-year. Newsroom (B8) correctly calls 5.20% the **3-year Premier** rate.

### Other conflicts

| Item | B1 Rates hub | B2 Client Resources | B3/B4 badges | Other |
|---|---|---|---|---|
| Harbourview FIA S&P 500 cap | **8.50%** (5/7/10-yr) | **10.00%** | **9.5%** | Blog: 9.5% |
| CapLock S&P 500 cap | **8.25%** (5-yr) | **9.50%** (“Cap (Locked)”) | **11.0%** | CapLock page example: 9% (hypothetical) |
| Sky Harbourview 7-yr | **5.70%** Standard / **6.05%** Select | — | **5.10%** (“Sky”, 7-Year) | Horizon badge also 5.10% 7-yr |
| CurrentRate MYGA 5-yr | **6.50%** Standard | — | **4.95%** “3-Year Initial Rate” | Home card calls it “Harbourview Plus” |
| Horizon MYGA | **all “—”** (quoted at application) | — | **5.10%** | Contradiction: unpublished in table, published as badge |
| Bands | Standard **$20K** / Select **$70K** / Premier **$100K** | Standard **$10K** / Senior **$50K** / Premier **$100K** | — | Different band definitions |
| Product names | CapLock / Topsider | CapLock | “Crescendo” / “Crescendo Plus” | Names not used anywhere else |
| Effective date | “current rate schedule” (undated) | **May 28, 2026** | — | Product blocks: `[DATE]` / “REPLACE FROM LIVE RATE SHEET” |
| FIA table shape | Term columns (3/5/7/10-yr) | No term dimension | — | Different data models, not just values |

**Recommendation:** treat **`ratesPage.js` (B1)** as the structural baseline — it covers all 7 products and has terms/bands/strategy groups. But verify every number against the **current rate-sheet PDF** before publishing, because B2 carries the only explicit effective date (May 28, 2026) and may be newer. Do not average, merge, or infer.

---

## Part D — What Mae edits after consolidation

One record per product, not one page per product. Suggested WordPress shape — **ACF options page `Rates`** (simplest for a non-dev) or CPT `ov_rate` if publishing workflow is needed.

### Global fields

| Field | Type | Used by |
|---|---|---|
| `effective_date` | date | `/rates/`, Client Resources, product blocks, comparison page |
| `last_reviewed` | date | internal / editorial |
| `source_note` | text | “Annuity Rate Watch”, update cadence |
| `disclosures` | repeater (rich text) | `/rates/` footer |
| `rate_sheet_pdf` | media (per product, below) | every “Download rate sheet” button |

### Per-product record

| Field | Type | Example |
|---|---|---|
| `product_key` | slug | `harbourview-myga` |
| `name` | text | Harbourview MYGA |
| `family` | select (`MYGA` / `FIA`) | MYGA |
| `state` | select (`All` / `CA`) | All |
| `status` | select (`published` / `request`) | published |
| `terms[]` | repeater | 2-Year … 10-Year |
| `bands[]` | repeater | label + min premium + `values[]` aligned to `terms[]` |
| `groups[]` (FIA) | repeater | group label (Cap / Participation / Fixed / Guaranteed) + rows (strategy + `values[]`) |
| `note` | text | “Rates effective as of the current rate schedule…” |
| `detail` | text | shown on “quoted at application” cards |
| `rate_sheet_pdf` | media | upload once, linked everywhere |

### Renderers

| Shortcode / block | Replaces |
|---|---|
| `[ov_rates_table product="harbourview-myga"]` | B1 section, A1 table |
| `[ov_rates_index]` | B1 sticky product index |
| `[ov_rate product="harbourview-myga" term="5" band="select"]` | B3/B4 badges, hero stats, any inline number |
| `[ov_rates_compare]` | B6 three competitor tables |
| `[ov_rates_date]` | B1, B2, B6 effective/as-of dates |
| `[ov_rate_sheet product="harbourview-myga"]` | all download buttons (A13, B10, B11) |

### California

Model CA as the same product record with `state = CA`, **not** a separate table. B2 currently duplicates the whole MYGA grid to express CA; B1 doesn’t model state at all.

### Quoted-at-application

Horizon and Topsider are the `status = request` state, with `detail` text listing available terms/bands. That lets Mae publish them later by flipping one toggle and entering values — no dev work.

---

## Part E — Build order & acceptance tests

| Priority | Surfaces | Why first |
|---|---|---|
| **P0** | B1 Rates hub · B2 Client Resources tab · B3/B4 badges · B5 product blocks | Most visible, most duplicated, highest compliance risk |
| **P0** | A1 `/rates/` renderer | The destination product pages link to |
| **P1** | B6 comparison page + as-of date · A2 | Dated weekly data; separate source from product rates |
| **P1** | A13/B10/B11 rate-sheet links | PDF swaps should ride the same record |
| **P2** | B12 ticker · B7 renewal stats · B8/B9 editorial | Not live product rates |

**Acceptance tests**

1. `grep -rn "%" src/components src/data` returns **no hardcoded rate values** in components (dates/labels allowed).
2. Change Harbourview 5-yr Select in WP → `/rates/`, Client Resources, Products badge, Home card and Harbourview product block all show the new number.
3. Change `effective_date` once → every dated surface updates.
4. Replace one rate-sheet PDF → all download links serve the new file.
5. Add a CA value → appears only in CA context, no duplicated grid.
6. Flip Horizon to `published` + enter values → its tables render without code changes.
7. No surface renders a value from a second source — including the prototype during handoff.

---

## Part F — Do **not** centralize

| Surface | Why |
|---|---|
| B7 Renewal stats (98.2%, 10.8%) | Historical, dated population statistic — not a current rate |
| B8 Newsroom / B9 Blog rate posts | Dated editorial record; changing them rewrites history |
| B12 Market ticker | Market data, not product rates; currently hardcoded placeholder values — needs a feed or removal, not the rates dataset |
| Disclosures | Reviewed by compliance on their own cycle; version them with the dataset, don’t auto-edit |

---

## Open questions for the client

1. **Which value set is authoritative** — `ratesPage.js` or Client Resources (effective May 28, 2026)? Confirm against the current rate-sheet PDF.
2. Are **Horizon MYGA** and **Topsider FIA** rates to be published publicly? If yes, supply values/rate sheets; if no, they stay `request` state.
3. Should production’s **TablePress** tables stay until the legacy site retires, or is staging the only maintained set?
4. Who owns the weekly **Annuity Rate Watch** data for `/how-oceanview-mygas-compare/`, and on what day does it refresh?
5. **California** — published from the same records via `state = CA`, or a separate approval workflow?
6. Should the **market ticker** stay? If yes, it needs a real data source; it is hardcoded today.
