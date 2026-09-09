# Homepage reconciliation — Composer + DeepSeek

**Purpose:** Single decision log both agents read **before** editing homepage code.  
**Review surface:** `#home-v2` → [`src/components/HomeV2Page.jsx`](../src/components/HomeV2Page.jsx)  
**Live home:** `#` / `#home` / `#home-v2` → [`HomeV2Page.jsx`](../src/components/HomeV2Page.jsx). Legacy: `#home-legacy` → [`HomePage.jsx`](../src/components/HomePage.jsx)  
**Brand reference:** React design system ([`tokens.css`](../src/styles/tokens.css), [`DESIGN.md`](../DESIGN.md), [`DesignPage.jsx`](../src/components/DesignPage.jsx)) + [WP prod](https://oceanviewprod.wpengine.com/)

**Merged audit plan:** `.cursor/plans/homepage_on-brand_audit_240744d9.plan.md`

**Status:** **Cutover complete** — `#` / `#home` / `#home-v2` → `HomeV2Page` (2026-09-09). Previous home at `#home-legacy`.

---

## How to use this doc

1. **One agent owns Phase 1** (D8) — coordinate with DeepSeek uncommitted draft-copy work.
2. Update changelog when code lands.
3. **D4:** Confirm with Matt before applying A2 Highlights fix on live `#` (color-only bugfix).

---

## Brand baseline (both audits agree)

| Principle | Spec |
|-----------|------|
| Display type | PP Editorial New, weight **400** on section headings |
| Hero type | PP Editorial New, weight **800** (**D1 locked: keep 800**) |
| Sans | PP Mori |
| Primary palette | Navy (`--ov-navy-900` `#0D1F4E`, `--ov-navy-1000` `#001F54`) + teal (`#2494C1`, `#70BABF`) |
| Surfaces | white, teal tint `#F1FBFF`, cream `#F0EEE9` |
| Buttons | Pill mint / ghost / white — content-width, not full-width in cards |
| Tone | Editorial, restrained, clarity + confidence, ocean/coastal imagery |

**Shared finding:** Homepage is **largely on-brand** at the foundation level. Work is **consistency, refinement, and on-brand rendering of the draft structure** — not a fundamental re-skin.

---

## Structural fork S1 — **NEEDS MATT** (heart of reconciliation)

**Question:** Does the **draft's section structure** win (rendered on-brand), or **prod-parity components** win (draft copy only inside prod layouts)?

| | Draft structure (DeepSeek) | Prod-parity (Composer audit) |
|--|---------------------------|------------------------------|
| §4 Products | Category-level Fixed / FIA split (not MYGA/FIA tabs+rates) | Reuse `ProductsCard` |
| §5 About | "Why Oceanview" pillars **replaces** AboutBlock | Restore `AboutBlock` + pillars additive |
| §7 Close | "See what's current." / View Rates | Get Started `CTABanner` |
| §8 Email | In-page Stay Informed form (draft §8) | Footer newsletter only |

**DeepSeek recommendation:** **Draft structure wins, rendered on-brand** — keep draft §4–§8 sections, implement with correct patterns (navy band, `.lpl-pillars-grid`, real product names per A11, one newsletter only). Honors "use all copy" while fixing off-brand artifacts.

**Composer note:** Accepts DeepSeek recommendation **if Matt confirms**. Supersedes original A5–A7 as "agreed"; those rows move to **forked** below.

**Matt decision (2026-09-09):** **S1-A** — Draft structure + on-brand patterns.

---

## Agreed rows (A1–A15) — DeepSeek review 2026-09-09

| ID | Item | DS | Notes |
|----|------|-----|-------|
| A1 | Section headings `var(--ov-navy-900)` not `#233D7C` | ✅ | Both audits |
| A2 | Fix Highlights.jsx `#233D7C` → navy-900 | ✅ | Bug fix; **touches live `#`** if Highlights shared — see D4 |
| A3 | Eyebrow ~11–12px / 600 / uppercase / ~0.1em | ✅ | Resolves 10px vs 16px split |
| A4 | Fix `.ov-eyebrow` on-light (near-white on white) | ✅ | Real bug |
| A5 | Reuse `ProductsCard` — no bespoke product grid | ❌ **fork** | Draft §4 is category split, not tabs+rates → **S1** |
| A6 | Restore `AboutBlock`; pillars additive | ❌ **fork** | Draft §5 repurposes About into pillars → **S1** |
| A7 | Closing `CTABanner` Get Started not Current Rates | ❌ **fork** | Draft §7 is View Rates closer → **S1** |
| A8 | One newsletter only | ✅ **locked** | Inline draft §8 form on V2; `hideSignup` on `#home-v2` (no footer duplicate) |
| A9 | Card CTAs content-width | ✅ | Shipped `63d7fc6` |
| A10 | Live `#` frozen until sign-off | ✅ **superseded** | Cutover 2026-09-09 — V2 is live index |
| A11 | Fix product names (Harbourview FIA / CapLock — not Crescendo) | ✅ | Correctness; applies even under S1-A |
| A12 | View Rates → `#client-resources?tab=rates` | ✅ | |
| A13 | Fix empty `<em>` from `titleAccent: ''` | ✅ | |
| A14 | Prod hero `home-v2-hero.jpg` | ✅ | Shipped `b290660` |
| A15 | Static hero on V2; carousel on live `#` | ✅ | |

**Locked regardless of S1:** A1–A4, A9–A15 (except A11 applies to shared catalog too).

---

## Open forks — decisions

| ID | Question | Decision | Status |
|----|----------|----------|--------|
| D1 | Hero weight 800 vs 400 | **Keep 800** — DESIGN.md + shipped; hero is the billboard moment | **Locked** |
| D2 | StatsStrip navy vs light; placement | **Light band**, **immediately below hero** per draft §2 | **Locked** |
| D3 | Draft trust stats vs prod stats | **Draft 4 stats** + `$XX.X Billion` placeholder; flag compliance for real figure + `*` footnote | **Locked** |
| D4 | Option B scope + live `#` | **Option B** with flag: A2 (Highlights color) touches live `#` — confirm color-only bugfix OK before cutover | **Matt: confirm live # OK** |
| D5 | Type-scale tokens vs clamp | defer OK | **Deferred** |
| D6 | Warm accent colors | defer OK | **Deferred** |
| D7 | Hero image brand fit | **No action** — `home-v2-hero.jpg` is prod hero, on-brand by definition | **Locked** |
| D8 | Parallel uncommitted work | **Pause** — DeepSeek holds draft-copy WIP; one agent owns Phase 1 after S1 | **Locked** |

---

## Target section order — **S1-A locked** (draft structure, on-brand)

| # | Draft § | Section | On-brand pattern |
|---|---------|---------|------------------|
| 1 | §1 | Hero (static, draft copy) | `Hero` + `slideOverride` + fix A13 accent |
| 2 | §2 | Trust / proof | `StatsStrip` **`variant="light"`**, draft stats, **immediately below hero** |
| 3 | §3 | Audience routing | Highlights-style or 2-card + photo; navy-900 H2 (A1) |
| 4 | §4 | Fixed vs FIA categories | Navy band + dark cards + **ghost/white CTAs** — not `ProductsCard` |
| 5 | §5 | Why Oceanview pillars | `.lpl-pillars-grid` — **replaces** AboutBlock per draft |
| 6 | §6 | Retirement resources | Tint band + white cards + TextLinks + icons |
| 7 | §7 | Current rates closer | `CTABanner` — draft copy "See what's current." |
| 8 | §8 | Stay Informed | Draft inline form; **`hideSignup` on `#home-v2`** |
| 9 | — | Footer | Standard footer (no duplicate signup) |

## Target section order — if **S1-B** (prod-parity)

| # | Section | Component |
|---|---------|-----------|
| 1 | Hero | `Hero` static + draft or prod copy |
| 2 | Audience / Highlights | `Highlights` or audience |
| 3 | Stats | `StatsStrip` navy, prod stats, after band 2 |
| 4 | Products | `ProductsCard` |
| 5 | About | `AboutBlock` |
| 6 | (optional draft) | Pillars + resources as additive |
| 7 | Close | Get Started `CTABanner` |
| 8 | Newsletter | Footer only |

---

## Implementation phases (after S1 + Matt forks locked)

| Phase | Work | Owner |
|-------|------|-------|
| **0** | This doc + Matt S1/D2/D3/D4 | — |
| **1a** | Foundation: A1–A4, A11–A13, D1, D7 (shared + V2) | One agent |
| **1b** | S1-A or S1-B section stack on `#home-v2` | One agent (DeepSeek WIP or Composer — D8) |
| **2** | P1 layout polish, responsive, compliance copy | |
| **3** | P2 token/doc/WPBakery cleanup | Separate PR OK |

---

## Changelog

| Date | Agent | Change |
|------|-------|--------|
| 2026-09-09 | Composer | Initial doc |
| 2026-09-09 | DeepSeek | Review: A1–A4 ✅; A5–A7 ❌ fork; A8 partial; D1/D7/D8 locked; S1 flagged |
| 2026-09-09 | Composer | Integrated DeepSeek review; added S1; split target orders for S1-A vs S1-B |
| 2026-09-09 | Matt | **S1-A** draft structure; light draft stats below hero; inline §8 + hideSignup |
| 2026-09-09 | Composer | Phase 1 shipped: A2–A4, A8, A12–A13; lpl-pillars-grid; product responsive; hideSignup |
