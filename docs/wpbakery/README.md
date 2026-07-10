# Oceanview Design System — WPBakery guide

This folder is the **WordPress / WPBakery** version of the React design system (`#design` / `tokens.css`).

| File | Purpose |
|------|---------|
| `oceanview-wpbakery.css` | Enqueue in the theme — tokens + component classes |
| `recipes.html` | Copy-paste **Raw HTML** / Custom HTML element snippets |
| `shortcodes.md` | Row/column recipes + Extra class names |
| `color-swatches.md` | Hex values for WPBakery Design Options color pickers |

React prototype remains the visual reference. **Do not rebuild pages in React for production** — rebuild in WPBakery using these classes.

---

## Setup (once)

1. **Fonts** — Upload PP Editorial New + PP Mori (or subset) into the theme, e.g. `wp-content/themes/your-child/fonts/`.  
   Adjust `@font-face` paths at the top of `oceanview-wpbakery.css` if needed.

2. **CSS** — Copy `oceanview-wpbakery.css` into the child theme root.

3. **Enqueue** — Copy hooks from `enqueue-example.php` into the child theme `functions.php` (or `require` that file). It enqueues the CSS (cache-bust via `filemtime`) and adds body class `ov-ds`.

4. **Forms** — Gravity Forms / CF7 inputs inherit light styles when the form sits in normal content; use `.ov-input--dark` or a navy row for footer-style fields.

---

## Mental model: React → WPBakery

| React | WPBakery approach |
|-------|-------------------|
| `tokens.css` vars | Same CSS vars in `oceanview-wpbakery.css` |
| Section with `background` | **Row** → Design Options background **or** Extra class `ov-bg-tint` / `ov-bg-navy` / `ov-section` |
| `PillMint` / `PillGhost` | **Button** or Custom HTML `<a class="ov-btn ov-btn--mint ov-btn--sm">` |
| `Eyebrow` | Text Block / HTML: `<p class="ov-eyebrow">Label</p>` |
| `PageHero` | Custom HTML from `recipes.html` (hero block) |
| `CTABanner` | Custom HTML from recipes (or Row + navy bg + classes) |
| `CTAPanel` | Full-width Row + `ov-cta-panel` markup |
| White / teal / dark cards | Column Extra class `ov-card ov-card--white` etc. |
| `TextLink` | `<a class="ov-text-link" href="…">Label</a>` |
| Hash routes | Real WordPress pages / permalinks |

### Unlisted landings (no main nav)

Same as the React site: partner and campaign pages are **real WP pages** that are simply **not** added to primary menus (Cetera, LPL, National Senior Games, Design System if you publish it).

---

## Button cheat sheet

Put these on a **Button** element’s *Extra class name* (and set Button style to something minimal / Custom so theme CSS doesn’t fight you), **or** use Custom HTML.

| Intent | Classes |
|--------|---------|
| Primary CTA (any bg) | `ov-btn ov-btn--mint ov-btn--sm` |
| Primary large / hero | `ov-btn ov-btn--mint ov-btn--lg` |
| Secondary on light | `ov-btn ov-btn--navy ov-btn--sm` |
| Outline on light | `ov-btn ov-btn--ghost ov-btn--sm` |
| Outline on dark | `ov-btn ov-btn--ghost-light ov-btn--sm` |
| Solid white on dark | `ov-btn ov-btn--white ov-btn--sm` |

**Hex for WPBakery color picker if you must style natively:**

| Role | Hex |
|------|-----|
| Mint fill | `#6BBABF` |
| Mint text | `#001F54` |
| Navy fill | `#233D7C` |
| Navy text | `#F2FCFF` |
| Ghost border/text | `#0D1F4E` |
| Link teal | `#1976A0` |

---

## Section backgrounds

| Section type | Row Extra class |
|--------------|-----------------|
| Default white | `ov-section ov-bg-white` |
| Soft blue tint | `ov-section ov-bg-tint` |
| Deep navy feature | `ov-section ov-bg-navy` (+ text `ov-on-dark`) |
| Footer-depth navy | `ov-section ov-bg-footer` |
| Cream (nav-like) | `ov-section ov-bg-cream` |

Padding uses `--ov-section-py` (80 → 64 → 48 → 36 by breakpoint).

---

## Cards (match React rules)

| Card class | Sits on |
|------------|---------|
| `ov-card ov-card--white` | `ov-bg-tint` only |
| `ov-card ov-card--teal` | white only |
| `ov-card ov-card--dark` | `ov-bg-navy` only |

Titles: use `<h3 class="ov-card__title">` or Custom Heading with display font.

Inside cards:

- Navigation → `ov-text-link`
- Primary action → `ov-btn ov-btn--mint` or `ov-btn--ghost`
- Avoid raw WPBakery default button styles

---

## Typography in the editor

| Role | How |
|------|-----|
| Display headings | `h1`–`h3` inside `.ov-ds` **or** Custom Heading + class `ov-h1` / `ov-h2` |
| Italic teal accent | wrap: `<em class="ov-accent">possibility</em>` |
| Body large | class `ov-body-lg` on paragraph |
| Meta | class `ov-meta` |

**Font stack (Design Options if needed):**

- Headings: `PP Editorial New, Georgia, serif`
- Body/UI: `PP Mori, system-ui, sans-serif`

---

## Recommended WPBakery elements

| Pattern | Elements |
|---------|----------|
| Marketing section | Row → Column(s) → Text Block + Button |
| Hero | **Raw HTML** (hero recipe) — more reliable than stacking 6 elements |
| CTA banner | **Raw HTML** (cta-banner recipe) |
| 2-up story | Row 1/2 + 1/2, or HTML with `ov-split` |
| Form | CF7 / Gravity Forms shortcode inside Column |
| Image + copy | Single Image + Text Block in two columns |

**Tip:** WPBakery’s Design Options per element is fine for one-offs; **brand-critical** pieces (buttons, hero, cards, navy bands) should use `ov-*` classes so global CSS updates fix every page.

---

## Mapping from React `#design` page

| Design page section | WPBakery location |
|---------------------|-------------------|
| Colors | `color-swatches.md` + CSS vars |
| Typography | Base `.ov-ds` + heading classes |
| Buttons | `.ov-btn--*` |
| Links | `.ov-text-link`, body links |
| Shadows | Prefer cards/borders; `--ov-shadow-card` available |
| Cards | `.ov-card--*` |
| Pills & badges | `.ov-badge`, `.ov-tabs` |
| Forms | `.ov-input`, `.ov-label` |
| Layout | `.ov-section`, `.ov-container`, `.ov-split` |
| Patterns | `recipes.html` |

---

## Sync rule

When `src/styles/tokens.css` or shared React components change:

1. Update `docs/wpbakery/oceanview-wpbakery.css` token values / component CSS  
2. Note the change in `JOURNAL.md`  
3. Bump the CSS version query string in `wp_enqueue_style`

Prototype: `https://…/#design` (React) remains the interactive reference; this folder is what WP builders ship.
