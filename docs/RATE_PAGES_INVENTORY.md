# Rate pages inventory — where rates live today

_Last checked: 2026-10-24 (staging + production, public pages)._

## Staging (`oceanviewstg.wpengine.com`) — new design system

| Page | URL | What rates appear |
|---|---|---|
| **Rates** | https://oceanviewstg.wpengine.com/rates/ | **5 product tables** — Harbourview MYGA, CurrentRate MYGA, Sky Harbourview MYGA, Harbourview FIA, CapLock FIA. **Missing: Horizon MYGA, Topsider FIA.** |
| **How Oceanview MYGAs Compare** | https://oceanviewstg.wpengine.com/how-oceanview-mygas-compare/ | **3 competitor tables** — 2-, 3- and 4-year MYGA comparisons (Annuity Rate Watch, weekly, "as of" date). |
| Harbourview MYGA product | https://oceanviewstg.wpengine.com/products/harbourview-fixed-annuity-series/ | No rate table — links to Rates. |
| Horizon MYGA product | https://oceanviewstg.wpengine.com/oceanview-horizon/ | No rate table — rates quoted at application. |
| Sky Harbourview MYGA product | https://oceanviewstg.wpengine.com/products/sky-harbourview-fixed-annuity-series/ | No rate table — links to Rates. |
| CurrentRate MYGA product | https://oceanviewstg.wpengine.com/products/currentrate-myga/ | No rate table — links to Rates. |
| Harbourview FIA product | https://oceanviewstg.wpengine.com/products/harbourview-fixed-indexed-annuity/ | No caps table — links to Rates. |
| CapLock FIA product | https://oceanviewstg.wpengine.com/products/caplock-fixed-indexed-annuity/ | No caps table — links to Rates. |
| Topsider FIA product | https://oceanviewstg.wpengine.com/topsider-fia-landing-page/ | No rate table — rates quoted at application. |
| Renewal Rates | https://oceanviewstg.wpengine.com/renewal-rates/ | Renewal landing page — no rate table found. |
| Client Resources | https://oceanviewstg.wpengine.com/client-resources/ | No rate table on staging (the React prototype has a Rates tab). |
| Home | https://oceanviewstg.wpengine.com/ | No product-rate band — only the market ticker. |

**Net:** on staging, publishable rates live in **two places** — `/rates/` and `/how-oceanview-mygas-compare/` — plus rate-sheet PDFs behind Downloads/Brochures.

## Production (`oceanviewlife.com`) — legacy theme, **TablePress still active**

| Page | URL | Notes |
|---|---|---|
| **Rates** | https://oceanviewlife.com/rates/ | **TablePress**, 10 tables across 5 tabs (Harbourview MYGA, CurrentRate MYGA, Sky Harbourview MYGA, Harbourview FIA, Caplock FIA). Includes effective dates, contract features, California table and "Download Current Rate Sheet". |
| **How Oceanview MYGAs Compare** | https://oceanviewlife.com/how-oceanview-mygas-compare/ | 3 competitor tables (weekly). |
| Product pages | e.g. https://oceanviewlife.com/products/harbourview-fixed-annuity-series/ | Link to the Rates page; no duplicated rate tables. |

**TablePress evidence (production):** plugin active; `.tablepress` classes (20 nodes); `tablepress-combined.min.css?ver=7` and `js/jquery.datatables.min.js?ver=3.3.4` load on `/rates/`.
**Staging:** no TablePress plugin, no `.tablepress` markup, no TablePress CSS/JS. The rates tables are hand-built page content (WPBakery / HTML).

## What this means for updates

Today, a rate change means editing **each surface separately**:

1. `/rates/` — every product table (5 tables today, 7 after the redesign).
2. `/how-oceanview-mygas-compare/` — 3 competitor tables + the "as of" date.
3. Rate-sheet PDFs — regenerated and re-uploaded by product.
4. Any page that quotes a number inline (hero stats, comparison cards, campaign pages).
5. Production `/rates/` — separate TablePress tables (legacy site), if it is still maintained in parallel.

### Recommended single-source approach

- One **rates data source** (custom post type or ACF options page, e.g. `ov_rates`) with fields per product/term/band.
- One **renderer** (shortcode or block) used by `/rates/`, product pages, comparison pages and any campaign page.
- The "as of" date stored once with the dataset.
- Rate sheets stay files, but their links come from the same record.

Result: update the dataset once → every page reflects it. Alternative: keep TablePress and reuse one table per product via shortcode everywhere — editor-friendly, but styling and per-page consistency become the constraint.

## Open questions for the client

1. Are Horizon MYGA and Topsider FIA rates to be published publicly? If yes, supply current values/rate sheets.
2. Should production's TablePress tables stay until the legacy site is retired, or is staging now the only place rates are maintained?
3. Who owns the weekly Annuity Rate Watch data for `/how-oceanview-mygas-compare/`?
