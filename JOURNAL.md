# Project journal — oceanview

Shared session log for all AI agents. Newest entries at the top.

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
