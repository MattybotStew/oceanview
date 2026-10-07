# Project journal — oceanview

Shared session log for all AI agents. Newest entries at the top.

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
