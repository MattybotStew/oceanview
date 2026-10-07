# White / Light Inline Signup — Page List

**Generated:** 2026-10-07
**Purpose:** Track which pages render the white/light "Stay Informed" email capture (the inline page form, not the dark global footer form), and the client request behind each.

The global **dark navy footer** signup (`Footer.jsx:342`) is the sitewide default. The pages below instead render their own inline light form. Where noted, the footer block is hidden so a page never shows two competing signups.

| # | Route | Component / section | Form style | Footer blue block | Client request source |
|---|-------|---------------------|-----------|-------------------|-----------------------|
| 1 | `#` / `#home` / `#home-v2` | `HomeV2Page.jsx:308` (draft §8) | Split — copy left; Name + Email + Sign Up + consent right; `--ov-surface-tint` band | **hidden** (`hideSignup`) | Homepage copy draft §8 "Stay Informed"; reconciliation **S1-A** + row **A8 "One newsletter only"** — see `docs/HOMEPAGE_RECONCILIATION.md` |
| 2 | `#individuals` | `IndividualsPage.jsx:327` | Split — copy left; Email + Sign Up right; `#fff` band | **still shows** (route is not in the `hideSignup` list at `Page.jsx:338`) | **Undocumented** — shipped in batch commit `20d62a7` (Jun 7 2026), before `JOURNAL.md` begins. Verify with Matt. |
| 3 | `#national-senior-games` | `NationalSeniorGamesPage.jsx:454` (draft §4) | Split — copy left; form in tinted card right; `#fff` band | **hidden** (`hideSignup`) | `docs/National Senior Games Sponsorship Landing Page Web Copy V2.docx` → "Section 4: Email capture" |
| 4 | `#alzheimers-awareness` | `AlzheimersAwarenessPage.jsx:440` (§6) | Split — copy left; form in tinted card right; `#fff` band | **hidden** (`hideSignup`) | `Oceanview_Alzheimers_Dementia_Web_Copy_Only.docx` (cited in `.clinerules`; source file no longer present in repo or `~/Downloads`) |

## Excluded

- **`#professionals`** — `ProfessionalsPage.jsx:332` uses a `CTABanner` ("Sign Up for Updates" → `#contact`), not an inline form.

## Notes

- Each page defines its **own local `EmailSignup`**; there is no shared "white form" component yet.
- **`#individuals` is the odd one out** — it renders the inline white form *and* the dark footer form. This looks like an oversight (the page predates the homepage reconciliation's "one newsletter per page" rule).
- `HomePage.jsx` (`#home-legacy`) has no signup.
