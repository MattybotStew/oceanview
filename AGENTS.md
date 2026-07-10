# LLM Instructions — Oceanview

This file is read by Claude Code and any other LLM assistants working in this repo.

## Shared Context (read every session)

Read `.clinerules` at the start of every session. It is kept up-to-date by both Claude Code and Cline and contains current project state, recent changes, tech stack rules, file conventions, and things NOT to do. After making any change (no matter how small), update `.clinerules` to reflect what was done so Cline stays in sync.

## Session continuity

This project is worked on by multiple AI agents (Claude Code, Gemini CLI, Deep Code, Grok, …).
- At session start: read `JOURNAL.md` (newest first) and recent `git log`.
- Before ending a session: add a short entry at the top of `JOURNAL.md` — date, agent/model, what was done, decisions, loose ends.

## Unlisted routes (by design)

These are **real pages** with hash routes, but they are **not** in header/footer main nav. That is intentional (campaign/partner/internal destinations), not a bug:

| Route | Component | Purpose |
|-------|-----------|---------|
| `#design` | `DesignPage.jsx` | Internal design system reference |
| `#cetera-landing` | `CeteraLandingPage.jsx` | Partner landing |
| `#lpl-landing` | `LPLLandingPage.jsx` | Partner landing |
| `#national-senior-games` | `NationalSeniorGamesPage.jsx` | Sponsorship landing |

Open via URL/hash only. Do not “fix” by adding nav links unless stakeholders request it.

---

## Recent work (2026-07-10 — Grok)

### Design System page refresh

- **Route:** `#design` (unlisted — internal reference only)
- **File:** `src/components/DesignPage.jsx`
- **Commit:** `a37479b` on `main` (pushed to GitHub)
- **Was stale:** Last written 2026-06-13; tokens/components had moved on without updating this page

**What changed:**
- Imports **live** shared components: `PillMint`, `PillNavy`, `PillWhite`, `PillGhost`, `TextLink` (`Buttons.jsx`), `Eyebrow` (`common.jsx`), `CTABanner` (so hover/focus match production CSS)
- Full token coverage from `tokens.css`: navy-800, secondary gold/orange, footer bg, greys 50–900, surfaces, borders, status, CTA primary/secondary aliases
- New **Cards** section: white / teal-tint / dark-on-navy (matches `.clinerules` card rules)
- Corrected docs: CTABanner CTA is **PillMint** (not PillNavy); TextLink default color is **`var(--ov-navy-600)`**; Eyebrow default vs `light`; PageHero `badge` prop; CTAPanel documented
- Forms notes no longer use Tailwind-style pseudocode
- Layout notes include `.nsg-split` / partner-landing helpers

**Source of truth (still):** `src/styles/tokens.css` + shared components — keep `#design` in sync when those change.

---

## Recent work (2026-07-09 — Grok + Claude Code)

### National Senior Games sponsorship landing

- **Route:** `#national-senior-games` (prod target: `oceanviewlife.com/national-senior-games`)
- **File:** `src/components/NationalSeniorGamesPage.jsx`
- **Wired in:** `Page.jsx` (`PAGE_ROUTES`, `ROUTE_TO_NAV`, meta title/description, switch case)
- **Responsive:** `.nsg-split` / `.nsg-split-reverse` in `src/styles/tokens.css`
- **Copy source:** `docs/National Senior Games Sponsorship Landing Page Web Copy V2.docx` (in-repo; use this for copy/compliance)

**Sections (top → bottom):**
1. Hero card — “Celebrating the *Long Game*” + dual CTAs (Explore Retirement Resources → `#individuals`, Learn About Oceanview → `#about`)
2. Navy band — Featured-Products-style intro: eyebrow “National Senior Games”, H2 “Every chapter can be full of *purpose, progress and possibility.*”, then the two long-game body paragraphs; then “Why We Sponsor” split (headline + copy + image)
3. White band — “The Long Game Matters” (retirement planning connection)
4. Surface tint — About Oceanview + Learn More
5. Email capture — Name + Email + consent + Sign Up (UI-only, no backend)
6. Navy closing — “Keep Moving Toward What *Matters*”
7. CTABanner + full compliance disclosure block from the doc

**Pattern:** Same visual system as partner landings (`PartnerLandingPage` / Cetera / LPL) — hero card, `Eyebrow`, `PillMint`/`PillGhost`, `CTABanner`, navy/teal tokens — but **not** a data-driven `PartnerLandingPage` clone (different section set).

**Not done / loose ends (stakeholder-dependent):**
- Unlisted by design unless they request a nav/footer link
- Placeholder stock images (no NSG-specific photography); NSGA logo rights pending
- Email form is client-side success only
- CTA destinations and assets still open to stakeholder confirm
- Navy H2 + form success message may need compliance confirm
