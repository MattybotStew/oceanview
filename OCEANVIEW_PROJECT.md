# Oceanview Life & Annuity — Project Documentation

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [File Structure](#2-file-structure)
3. [Architecture](#3-architecture)
4. [Pages & Routing](#4-pages--routing)
5. [Components](#5-components)
6. [Design Tokens](#6-design-tokens)
7. [Typography System](#7-typography-system)
8. [Color Palette](#8-color-palette)
9. [Button System](#9-button-system)
10. [Responsive Breakpoints](#10-responsive-breakpoints)
11. [Assets & Fonts](#11-assets--fonts)
12. [Navigation Data](#12-navigation-data)

---

## 1. Project Overview

**Oceanview Life and Annuity Company** is a financial services marketing site focused on fixed and fixed-indexed annuity products. The site presents two primary product families — Multi-Year Guaranteed Annuities (MYGAs) and Fixed Indexed Annuities (FIAs) — alongside company information, ratings, and a FAQ page.

### Tech Stack

| Concern | Solution |
|---|---|
| UI Framework | React 18.3.1 (UMD build via unpkg CDN) |
| JSX Transform | Babel Standalone 7.29.0 (in-browser compilation) |
| Styling | Inline JS style objects + a single global `tokens.css` |
| Build step | None — plain HTML served as static files |
| Routing | In-memory state in `Page.jsx` (no URL changes) |

No bundler, no npm, no framework CLI. Every `.jsx` file is loaded as `type="text/babel"` via `<script>` tags in `index.html`. Components are registered on `window` so later scripts can reference earlier ones.

---

## 2. File Structure

```
oceanview/
├── index.html                     # App shell — loads CDN scripts + all JSX
│
├── css/
│   └── tokens.css                 # All CSS custom properties + global resets + responsive helpers
│
├── components/
│   ├── Buttons.jsx                # PillMint, PillNavy, PillGhost, TextLink primitives
│   ├── Header.jsx                 # Sticky nav bar — desktop mega-dropdown + mobile drawer
│   ├── TickerBar.jsx              # Scrolling market data ticker (hides on scroll)
│   ├── Hero.jsx                   # Full-bleed image card with auto-advancing slide carousel
│   ├── Highlights.jsx             # Three highlight cards beside a photo
│   ├── ProductsCard.jsx           # Split layout with tabbed MYGA/FIA rate card
│   ├── AboutBlock.jsx             # Split photo + text about the company
│   ├── RatingBlock.jsx            # A.M. Best "A" rating display
│   ├── CTAPanel.jsx               # Soft-tint "Get Started" call-to-action band
│   ├── Footer.jsx                 # Dark navy footer with email signup, links, legal
│   ├── FAQPage.jsx                # FAQ page with hero image + accordion list
│   └── Page.jsx                   # Top-level router — composes Home and FAQ views
│
├── assets/
│   ├── oceanview-logo-white.png   # Brand logo (white, used on dark backgrounds)
│   ├── wave-emblem.svg            # Wave icon / emblem
│   ├── hero-shaper.svg            # (legacy) SVG arc shape — replaced inline
│   ├── icon-arrow.svg             # Arrow icon
│   ├── Noise.png                  # Grain/noise texture overlay (200px tile, 80% opacity)
│   ├── hero-couple.jpg            # Hero slide 1 — couple portrait
│   ├── two.jpg                    # Hero slide 2
│   ├── three.jpg                  # Hero slide 3
│   ├── four.jpg                   # Hero slide 4
│   ├── faq-hero.jpg               # FAQ page hero image
│   ├── family.png                 # Highlights section photo
│   ├── couple-walking.png         # AboutBlock photo
│   ├── older-couple-1.png         # Unused / available
│   ├── hero-beach-couple.jpg      # Unused / available
│   ├── hero-couple.jpg            # Hero carousel
│   ├── hero-overlay.jpg           # Unused / available
│   ├── lighthouse.jpg             # Unused / available
│   ├── ambest.png                 # A.M. Best logo
│   ├── ambest-rating.png          # A.M. Best rating graphic
│   └── AdobeStock_1231908414@0.3x.jpg  # Stock photo (available)
│
└── fonts/
    ├── PPEditorialNew-Ultralight.otf
    ├── PPEditorialNew-UltralightItalic.otf
    ├── PPEditorialNew-Regular.otf
    ├── PPEditorialNew-Italic.otf
    ├── PPEditorialNew-Ultrabold.otf
    ├── PPEditorialNew-UltraboldItalic.otf
    ├── PPMori-Extralight.otf
    ├── PPMori-ExtralightItalic.otf
    ├── PPMori-Regular.otf
    ├── PPMori-Italic.otf
    ├── PPMori-Semibold.otf
    ├── PPMori-SemiboldItalic.otf
    ├── PPMori-Black.otf
    └── PPMori-BlackItalic.otf
```

---

## 3. Architecture

### Boot sequence

1. `index.html` loads React, ReactDOM, and Babel from unpkg CDN (with SRI hashes).
2. Each `.jsx` is loaded as `type="text/babel"` — Babel compiles in-browser at runtime.
3. Load order matches dependency order. Each file ends with `Object.assign(window, { ComponentName })` to expose it globally.
4. The final inline `<script type="text/babel">` calls `ReactDOM.createRoot` and renders `<Page />`.

### Global registration pattern

```js
// Every component file ends with:
Object.assign(window, { Hero, HeroShaper });
```

This allows `Page.jsx` and `FAQPage.jsx` to reference `<Hero />`, `<CTAPanel />` etc. without any import statements.

### Version cache busting

Each script tag carries a manual `?v=N` query string:
```html
<script type="text/babel" src="components/Hero.jsx?v=13"></script>
```
Increment the version number to force browsers to re-fetch after edits.

---

## 4. Pages & Routing

Routing is entirely in-memory — there are no URL changes or browser history entries.

### `Page.jsx`

```
Page (root)
├── <div sticky>
│   ├── TickerBar        (collapses to height 0 when scrolled > 10px)
│   └── Header           (receives active route + onNav callback)
├── {route === "FAQ" ? <FAQPage /> : <HomePage />}
└── Footer
```

**Route state:** `"Home"` or `"FAQ"`. Any navigation to `"Client Resources"` also resolves to `"FAQ"`.

**Scroll-hide ticker:** Uses a `maxHeight` CSS transition from `32px` → `0` triggered by a passive `scroll` listener.

### Home page section order

| # | Component | Purpose |
|---|---|---|
| 1 | `Hero` | Full-bleed image carousel with headlines |
| 2 | `Highlights` | Three company differentiator cards |
| 3 | `ProductsCard` | MYGA / FIA product rate card |
| 4 | `AboutBlock` | Company intro with photo |
| 5 | `RatingBlock` | A.M. Best "A" Excellent rating callout |
| 6 | `CTAPanel` | "Get Started" conversion band |

### FAQ page

Full-page route rendered as `<FAQPage />`. Contains:
- Photo hero with navy gradient scrim
- Accordion FAQ list (5 questions, one open at a time)
- `<CTAPanel />` embedded at the bottom

---

## 5. Components

### `Buttons.jsx`
Primitive CTA components shared across all sections.

| Component | Style | Use case |
|---|---|---|
| `PillMint` | Teal fill, navy text | Primary hero/section CTAs |
| `PillNavy` | Navy fill, light text | Secondary CTAs, product actions |
| `PillGhost` | White fill, navy border + text | Tertiary / soft actions |
| `TextLink` | Transparent, navy text, arrow suffix | Inline text actions |

Props shared by all: `children`, `onClick`, `style`. `PillMint` and `PillNavy` also accept a `hero` boolean that switches padding from `12px 28px` → `20px 36px`.

---

### `Header.jsx`
Full-featured responsive navigation bar.

**Desktop (≥ 1024px):**
- Navy bar, 72px tall
- Logo (white PNG, 205px wide) on the left
- Nav items: About, Products, Client Resources, Insights, Blog
- Audience chips: Individuals, Professionals (pill-style, ghost background)
- Dropdowns: `TabbedDropdown` (About, Products) or `SimpleDropdown` (Client Resources, Insights)
- Dropdown hover delay: 200ms close timer to prevent accidental dismissal

**Mobile (< 1024px):**
- Hamburger icon replaces nav items
- Slide-in drawer from the right (`width: min(320px, 88vw)`)
- Dark backdrop overlay (opacity transition)
- Accordion-style nav items within the drawer
- `body.overflow = hidden` while drawer is open

**Dropdown types:**

*Tabbed* — sidebar of tabs on the left (cream `#F0EEE9` background), content panel on the right. Hover a tab to switch. Supports: eyebrow label, heading, body, tag pills, product links with descriptions, and a CTA link.

*Simple* — single column of divider-separated links, right-aligned under the nav item.

---

### `TickerBar.jsx`
A 32px-tall scrolling market data strip.

- Items: S&P 500, NASDAQ, RUSSELL 2000, 10 YR TREASURY, VIX
- Items are duplicated (`[...data, ...data]`) for seamless infinite loop
- Animation: `tickerScroll` keyframe translates `0 → -50%` over 30 seconds
- Pauses on hover via `animation-play-state: paused`
- Positive changes render in `--ov-success` green; negative in `--ov-danger` red

---

### `Hero.jsx`
Rounded card carousel at the top of the homepage.

**Structure:**
```
<section>
  <div.ov-hero-card>           (rounded card, 800px tall desktop)
    <div.ov-hero-bg />         (background image, CSS transition on swap)
    scrim (gradient overlay)
    noise (Noise.png texture, 80% opacity)
    <div.ov-hero-content>      (absolute positioned, left: 80px, translateY(-50%))
      <h1.ov-hero-title />
      <p.ov-hero-subtitle />
      CTAs: PillMint + PillNavy
    </div>
    <HeroShaper />             (SVG arc at bottom of card)
  </div>
  <dotsContainer>              (prev arrow, dot pills, next arrow)
</section>
```

**Slides (4 total):**

| Slide | Title | Image |
|---|---|---|
| 1 | Plan today for the tomorrow you deserve | `hero-couple.jpg` |
| 2 | Secure your retirement with confidence | `two.jpg` |
| 3 | Growth potential, principal protected | `three.jpg` |
| 4 | Your legacy starts today | `four.jpg` |

**Auto-scroll:** 6-second interval via `setInterval`. Pauses on section `mouseenter`, resumes on `mouseleave`. Manual navigation (arrows or dots) resets the timer.

**Dot indicator:** Inactive dots are `8×8px` circles (`#CFD5EA`). Active dot becomes a `22×8px` rounded pill (`#2494C1`).

**HeroShaper:** Inline SVG arc (`Q200 0 400 60`) renders a white concave arc at the card bottom, visually bleeding into the section below.

---

### `Highlights.jsx`
Company differentiators section.

**Layout:** `flex` row — square photo (left, `clamp(260px, 30vw, 420px)`) + column of 3 cards (right).

**Cards:** Soft teal background (`rgba(112,186,191,0.2)`), `16px` border radius, 28/30px padding.

**3 highlight items:**
1. Committed to Enhancing Retirement Savings
2. Comprehensive Suite of Retirement Products
3. Bringing Retirement Savings to You

Photo: `assets/family.png`

---

### `ProductsCard.jsx`
Split section: left side is copy + CTAs; right side is an interactive tabbed rate card.

**Tabs:** MYGA | FIA (controlled state `tab`)

**MYGA products:**
| Name | Rate | Term |
|---|---|---|
| Harbourview | 5.20% | 5-Year |
| Sky Harbourview | 5.10% | 7-Year |
| Harbourview Plus | 4.95% | 3-Year |

**FIA products:**
| Name | Rate | Term |
|---|---|---|
| Crescendo | Index Cap 9.5% | 10-Year |
| Crescendo Plus | Index Cap 11.0% | 10-Year + Bonus |

Each row animates `padding-left: 6px` on hover. Rate values use `--ov-teal-600` and the display font.

---

### `AboutBlock.jsx`
Split section: photo left, copy + CTAs right.

- Photo: `assets/couple-walking.png` (square crop, `clamp(260px, 30vw, 420px)`)
- Eyebrow-less heading: "About Oceanview Life and Annuity Company"
- CTAs: `PillGhost` ("More About Us") + `TextLink` ("Read our 2024 Annual Report")

---

### `RatingBlock.jsx`
Highlights the A.M. Best A (Excellent) rating.

- Left: navy card with a large teal `"A"` character (92px, `--ov-ff-display`, weight 800)
- Right: heading + body copy + TextLink to the A.M. Best report
- Grid: `0.85fr 1.15fr` two columns

---

### `CTAPanel.jsx`
Conversion band used on Home (at bottom) and embedded in FAQPage.

- Light sky-tint background (`--ov-surface-tint` = `#F1FBFF`), `16px` radius panel
- Centered layout with eyebrow, large display heading, two CTAs: `PillMint` ("Get Started") + `PillGhost` ("Find a Professional")

---

### `Footer.jsx`
Dark navy footer (`--ov-navy-1000` = `#001F54`).

**Three zones:**
1. **Email signup row** — 2-column grid: copy left, form (first name + email + submit) right. Submit toggles to "Subscribed ✓" state.
2. **Link columns** — 4-column grid: logo+blurb+social, Products, Company, Resources.
3. **Bottom legal** — copyright, Privacy/Terms/Accessibility links, full insurance disclaimer paragraph.

Social icons: LinkedIn (`in`), Facebook (`f`), X (`𝕏`) — circular 30px buttons with hover background.

---

### `FAQPage.jsx`
Standalone FAQ page.

**Hero:** Full-bleed photo (`faq-hero.jpg`), navy gradient scrim, eyebrow + display heading.

**Accordion:** 5 FAQ items, only one open at a time (index state). Open/close toggled by `+` / `−` button. Question uses display font at 21px; answer uses body text at 16px.

**FAQs:**
1. What is an annuity?
2. What products are available through Oceanview?
3. How is my money protected?
4. Is the interest tax-deferred?
5. Where can I find a professional?

Ends with `<CTAPanel />`.

---

## 6. Design Tokens

All tokens are CSS custom properties defined in `css/tokens.css` on `:root`.

### Spacing scale

| Token | Value |
|---|---|
| `--ov-sp-1` | 4px |
| `--ov-sp-2` | 8px |
| `--ov-sp-3` | 12px |
| `--ov-sp-4` | 16px |
| `--ov-sp-5` | 20px |
| `--ov-sp-6` | 24px |
| `--ov-sp-7` | 30px |
| `--ov-sp-8` | 40px |
| `--ov-sp-9` | 50px |
| `--ov-sp-10` | 65px |

### Border radius

| Token | Value |
|---|---|
| `--ov-radius-sm` | 4px |
| `--ov-radius-md` | 6px |
| `--ov-radius-lg` | 10px |
| `--ov-radius-xl` | 12px |
| `--ov-radius-pill` | 200px |

### Shadows

| Token | Value |
|---|---|
| `--ov-shadow-card` | `0 24px 60px 0 rgba(13,31,78,0.12)` |
| `--ov-shadow-cover` | `0 25px 50px -12px rgba(0,0,0,0.25)` |
| `--ov-shadow-button` | `0 2px 8px 0 rgba(13,31,78,0.10)` |
| `--ov-shadow-press` | `inset 0 1px 0 rgba(0,0,0,0.10)` |

### Layout

| Token | Value |
|---|---|
| `--ov-container` | 1300px |
| `--ov-gutter` | 120px (desktop) |
| `--ov-gutter-sm` | 16px (mobile) |
| `--ov-header-h` | 96px |
| `--ov-ticker-h` | 32px |

The `.ov-container` class applies `max-width: 1300px`, `margin: 0 auto`, and `padding: 0 120px` (narrows responsively).

---

## 7. Typography System

### Font families

Two proprietary brand fonts are loaded via `@font-face` from `/fonts/`:

**PP Editorial New** — display serif, used for all headings, hero text, and decorative titles.
- Weights loaded: 200 (Ultralight), 400 (Regular), 800 (Ultrabold) — each with italic variant

**PP Mori** — geometric sans, used for body copy, UI labels, eyebrows, and navigation.
- Weights loaded: 200 (Extralight), 400 (Regular), 600 (Semibold), 900 (Black) — each with italic variant

Google Fonts are imported as system fallbacks: Cormorant Garamond, Open Sans, Playfair Display, DM Sans, Inter.

### CSS font-family stacks

| Token | Stack |
|---|---|
| `--ov-ff-display` | PP Editorial New → Cormorant Garamond → Playfair Display → ui-serif |
| `--ov-ff-serif` | Playfair Display → Miller Text → Cormorant Garamond → ui-serif |
| `--ov-ff-sans` | PP Mori → Manrope → DM Sans → Inter → ui-sans-serif |
| `--ov-ff-body` | PP Mori → DM Sans → Manrope → Inter → ui-sans-serif |
| `--ov-ff-eyebrow` | PP Mori → Open Sans → Proxima Nova → ui-sans-serif |
| `--ov-ff-mono` | ui-monospace → JetBrains Mono → Menlo |

### Type scale

| Token | Size |
|---|---|
| `--ov-fz-display-1` | 124px |
| `--ov-fz-display-2` | 69px |
| `--ov-fz-display-3` | 63px |
| `--ov-fz-h1` | 48px |
| `--ov-fz-h2` | 42px |
| `--ov-fz-h3` | 36px |
| `--ov-fz-h4` | 28px |
| `--ov-fz-h5` | 24px |
| `--ov-fz-h6` | 20px |
| `--ov-fz-body-lg` | 18px |
| `--ov-fz-body` | 16px |
| `--ov-fz-body-sm` | 14px |
| `--ov-fz-meta` | 13px |
| `--ov-fz-caption` | 12px |
| `--ov-fz-eyebrow` | 16px |

### Semantic type classes

Applied via `className` in HTML/JSX:

| Class | Description |
|---|---|
| `.ov-display` | 63px display serif, weight 400 |
| `.ov-h1` – `.ov-h5` | Scaled heading classes using display font |
| `.ov-eyebrow` | 16px PP Mori, weight 600, uppercase, 0.10em tracking, on-dark color |
| `.ov-p` / `.ov-body` | 16px PP Mori body, line-height 1.6, grey-600 |
| `.ov-p-lg` | 18px, line-height 1.65, grey-400 |
| `.ov-p-sm` | 14px, line-height 1.5, grey-600 |
| `.ov-meta` | 13px, grey-400 |
| `.ov-caption` | 12px PP Mori sans, grey-500 |
| `.ov-link` | Teal link with hover underline |
| `.ov-on-dark` | Forces `--ov-fg-on-dark` color for text on dark backgrounds |

### Line heights

| Token | Value |
|---|---|
| `--ov-lh-tight` | 1.0 |
| `--ov-lh-snug` | 1.16 |
| `--ov-lh-base` | 1.4 |
| `--ov-lh-body` | 1.6 |
| `--ov-lh-loose` | 1.65 |

### Letter spacing

| Token | Value |
|---|---|
| `--ov-ls-eyebrow` | 0.10em |
| `--ov-ls-tight` | -0.01em |

---

## 8. Color Palette

### Navy scale (brand primary)

| Token | Hex |
|---|---|
| `--ov-navy-1000` | `#001F54` |
| `--ov-navy-900` | `#0D1F4E` |
| `--ov-navy-800` | `#1A2452` |
| `--ov-navy-700` | `#16317B` |
| `--ov-navy-600` | `#1A3070` |
| `--ov-navy-500` | `#233D7C` |
| `--ov-navy-400` | `#223F84` |
| `--ov-navy-300` | `#4472C4` |

### Teal / Cyan scale (brand accent)

| Token | Hex |
|---|---|
| `--ov-teal-700` | `#1976A0` |
| `--ov-teal-600` | `#2494C1` |
| `--ov-teal-500` | `#06BCC1` |
| `--ov-teal-400` | `#6BBABF` |
| `--ov-teal-300` | `#70BABF` |

### Surfaces

| Token | Hex |
|---|---|
| `--ov-surface-0` | `#FFFFFF` |
| `--ov-surface-tint` | `#F1FBFF` |
| `--ov-surface-tint-2` | `#F2FCFF` |
| `--ov-surface-tint-3` | `#F2FAFE` |
| `--ov-surface-cream` | `#F0EEE9` |
| `--ov-surface-soft` | `#F9F9F9` |

The cream surface (`#F0EEE9`) is used as the header dropdown sidebar background and mobile nav expanded-item state.

### Neutrals (grey scale)

| Token | Hex |
|---|---|
| `--ov-grey-900` | `#212529` |
| `--ov-grey-800` | `#333333` |
| `--ov-grey-700` | `#2B3A4F` |
| `--ov-grey-600` | `#4A5568` |
| `--ov-grey-500` | `#6B7280` |
| `--ov-grey-400` | `#828282` |
| `--ov-grey-300` | `#DADADA` |
| `--ov-grey-200` | `#E9EBF5` |
| `--ov-grey-150` | `#CFD5EA` |
| `--ov-grey-100` | `#D9D9D9` |
| `--ov-grey-50` | `#F2F2F2` |

### Borders

| Token | Value |
|---|---|
| `--ov-border-faint` | `rgba(13,31,78, 0.10)` |
| `--ov-border-soft` | `rgba(13,31,78, 0.12)` |
| `--ov-border-dark` | `rgba(13,31,78, 0.20)` |
| `--ov-border-on-dark` | `rgba(255,255,255, 0.20)` |
| `--ov-border-hairline` | `rgba(0,0,0, 0.13)` |

### Semantic aliases

| Token | Resolves to |
|---|---|
| `--ov-bg` | `--ov-surface-0` (white) |
| `--ov-bg-soft` | `--ov-surface-tint` |
| `--ov-bg-deep` | `--ov-navy-500` |
| `--ov-fg` | `--ov-navy-900` (default text) |
| `--ov-fg-on-dark` | `--ov-surface-tint-2` (text on dark) |
| `--ov-fg-muted` | `--ov-grey-600` |
| `--ov-fg-meta` | `--ov-grey-400` |
| `--ov-link` | `--ov-teal-600` |
| `--ov-cta-primary-bg` | `--ov-teal-400` |
| `--ov-cta-primary-fg` | `--ov-navy-1000` |
| `--ov-cta-secondary-bg` | `--ov-navy-500` |
| `--ov-cta-secondary-fg` | `--ov-fg-on-dark` |

### Semantic states

| Token | Hex |
|---|---|
| `--ov-success` | `#008000` |
| `--ov-danger` | `#FF0000` |
| `--ov-info` | `--ov-teal-600` |

---

## 9. Button System

All buttons are defined in `components/Buttons.jsx` and registered globally.

### Variants

#### `PillMint` — Primary CTA
- Background: `--ov-teal-400` (`#6BBABF`)
- Text: `--ov-navy-1000` (`#001F54`)
- Hover: opacity 0.85
- Use: hero primary action, section primary conversion

#### `PillNavy` — Secondary CTA
- Background: `--ov-navy-500` (`#233D7C`)
- Text: `#F2FCFF`
- Hover: opacity 0.88
- Use: compare/explore actions, hero secondary

#### `PillGhost` — Tertiary CTA
- Background: `#fff` with `1px solid --ov-navy-900`
- Text: `--ov-navy-900`
- Hover: inverts to navy background + white text
- Use: soft secondary actions, "Find a Professional"

#### `TextLink` — Inline text action
- No background or border
- Text: `--ov-navy-600` (or custom `color` prop)
- Arrow (`→`) appended as a separate `<span>` in Inter font
- Use: "Read more", "Annual Report", "A.M. Best report"

### Sizing

| Prop | Padding | Font size |
|---|---|---|
| `hero={true}` | `20px 36px` | 14.8px |
| default (small) | `12px 28px` | 14px |

The hero size is used inside the `Hero` component; default size everywhere else.

---

## 10. Responsive Breakpoints

All breakpoint rules are in `css/tokens.css`.

### Container

| Breakpoint | Padding |
|---|---|
| > 1100px | `0 120px` |
| ≤ 1100px | `0 32px` |
| ≤ 720px | `0 16px` |

### Navigation

| Breakpoint | Behavior |
|---|---|
| ≤ 1300px | Nav button font shrinks to 11.5px, gap tightens |
| ≤ 1024px | Desktop nav hidden, hamburger shown |

### Hero card

| Breakpoint | Height |
|---|---|
| > 1100px | 800px |
| ≤ 1100px | 580px, content left: 40px, max-width: 520px |
| ≤ 720px | 560px, content stretches edge-to-edge (left/right: 24px) |
| ≤ 480px | 520px, tighter gap |

### Highlights grid

| Breakpoint | Behavior |
|---|---|
| ≤ 800px | Stacks to single column; photo becomes `aspect-ratio: 4/3` full width |

### Products grid

| Breakpoint | Behavior |
|---|---|
| ≤ 960px | Gap reduces to 48px |
| ≤ 800px | Stacks to single column |
| ≤ 720px | Section vertical padding reduces |
| ≤ 480px | Card padding reduces to `24px 20px 20px` |

---

## 11. Assets & Fonts

### Images in use

| File | Used by | Notes |
|---|---|---|
| `oceanview-logo-white.png` | Header, Footer | White version; `filter: brightness(0)` for dark mode |
| `Noise.png` | Hero | 200px repeat tile, 80% opacity grain overlay |
| `hero-couple.jpg` | Hero slide 1 | |
| `two.jpg` | Hero slide 2 | |
| `three.jpg` | Hero slide 3 | |
| `four.jpg` | Hero slide 4 | |
| `faq-hero.jpg` | FAQPage hero | |
| `family.png` | Highlights | Square crop beside highlight cards |
| `couple-walking.png` | AboutBlock | Square crop beside company copy |
| `wave-emblem.svg` | Available | Brand emblem |

### Fonts in use

**PP Editorial New** — display heading serif

| Weight | File |
|---|---|
| 200 normal | `PPEditorialNew-Ultralight.otf` |
| 200 italic | `PPEditorialNew-UltralightItalic.otf` |
| 400 normal | `PPEditorialNew-Regular.otf` |
| 400 italic | `PPEditorialNew-Italic.otf` |
| 800 normal | `PPEditorialNew-Ultrabold.otf` |
| 800 italic | `PPEditorialNew-UltraboldItalic.otf` |

**PP Mori** — UI / body sans

| Weight | File |
|---|---|
| 200 normal | `PPMori-Extralight.otf` |
| 200 italic | `PPMori-ExtralightItalic.otf` |
| 400 normal | `PPMori-Regular.otf` |
| 400 italic | `PPMori-Italic.otf` |
| 600 normal | `PPMori-Semibold.otf` |
| 600 italic | `PPMori-SemiboldItalic.otf` |
| 900 normal | `PPMori-Black.otf` |
| 900 italic | `PPMori-BlackItalic.otf` |

---

## 12. Navigation Data

The `NAV_DROPDOWNS` object in `Header.jsx` defines all dropdown content.

### Navigation items

```
About                → TabbedDropdown (5 tabs)
Products             → TabbedDropdown (2 tabs)
Client Resources     → SimpleDropdown (5 links, right-aligned)
Insights             → SimpleDropdown (3 links, right-aligned)
Blog                 → No dropdown (plain button)
```

Audience chips (not dropdowns): **Individuals**, **Professionals**

### About dropdown tabs

| Tab label | Eyebrow | Heading |
|---|---|---|
| Our Story | SINCE 1987 | A legacy built on trust |
| Leadership | OUR PEOPLE | Experienced leadership |
| Board of Directors | GOVERNANCE | Independent oversight |
| Newsroom | LATEST UPDATES | News & announcements |
| Careers | JOIN US | Build your future here |

### Products dropdown tabs

| Tab label | Eyebrow |
|---|---|
| Multi-Year Guaranteed Annuities | GUARANTEED RETURNS |
| Fixed Indexed Annuity | INDEXED GROWTH |

Products tab includes sub-links for individual product names (Harbourview, Sky Harbourview under MYGA; Harbourview, S&P 500, Nasdaq-100, Russell 2000, Fixed Interest, CapLock under FIA).

### Client Resources links

- Case Studies
- Downloads
- Glossary
- Rates
- How Oceanview MYGAs Compare

### Insights links

- Retirement Risk Series
- Life Events Series
- White Papers

### Dropdown rendering details

**TabbedDropdown:** Left sidebar (220px, cream `#F0EEE9`) + content panel (min 420px). Hover a sidebar item to activate its tab. Active tab gets white background; inactive tabs show a faint arrow.

**SimpleDropdown:** Single column (min 420px), 30px padding, divider lines between links. Aligned to the right edge of the nav item (`dropAlign: "right"`).

**ProductLink** (inside Products tab): On hover, a `2px solid #70BABF` left border animates in and label color shifts to teal. Supports an optional `desc` sub-label.

**SimpleLink:** On hover, label and arrow shift to `#70BABF`.
