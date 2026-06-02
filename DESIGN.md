# Oceanview Life & Annuity — Design Reference

Source: [2026 Oceanview Design (Figma)](https://www.figma.com/design/fe7PYQtVJ2pNZ1VR6lznWz/2026-Oceanview-Design?node-id=6639-10194)
Status: WIP (`✅ Design [WIP]` canvas)

---

## Pages

| Page | Figma node | Status in code |
|---|---|---|
| Home | `7278:2672` | ✅ Built |
| Products (landing) | `6932:106` | ✅ Built (stub) |
| Product Detail | `6951:569` | ❌ Not built |
| About / Company | `7324:1074` | ✅ Built |
| Leadership | `7326:1671` | ❌ Not built |
| Board of Directors | `7326:2209` | ❌ Not built |
| Client Resources | `7326:3981` | ✅ Built (stub) |
| Newsroom | `7391:1326` | ❌ Not built |
| Blog (listing) | `7391:3155` | ❌ Not built |
| Blog Article | `7391:3634` | ❌ Not built |
| Disclaimers | `7391:4186` | ❌ Not built |
| Privacy Policy | `7391:4470` | ❌ Not built |
| FAQ | — | ✅ Built |

---

## Global Shell

Every page uses the same shell: **TickerBar → Header → [page content] → CTAPanel → Footer**.

### TickerBar
- 32px tall, light tint background, bottom border
- Scrolling market data: S&P 500, NASDAQ, RUSSELL 2000, 10 YR TREASURY, VIX
- Collapses to `max-height: 0` when page is scrolled > 10px

### Header
- Sticky, navy bar
- Logo (white) left; nav center-right; two audience chips ("Individuals", "Professionals") far right
- Dropdowns: About → tabbed; Products → tabbed; Client Resources → simple list; Insights → simple list
- Mobile (< 1024px): hamburger → right-side drawer

### CTAPanel (bottom of every page)
- Light sky-tint panel, centered layout
- Eyebrow + large display headline + `PillMint` ("Get Started") + `PillGhost` ("Find a Professional")

### Footer
- Deep navy (`#001F54`)
- Row 1: email signup (copy left, form right)
- Row 2: 4-column links (logo + blurb + social icons, Products, Company, Resources)
- Row 3: copyright + Privacy / Terms / Accessibility + insurance disclaimer

---

## Hero Pattern

Used on every page. Same rounded card structure throughout.

```
<div.ov-hero-wrapper>         max-width container, side padding
  <section.ov-hero-section>
    <div.ov-hero-card>        border-radius 32px, overflow hidden
      background image
      gradient scrim          left-to-right, ~80% black → transparent
      Noise.png overlay       200px tile, 80% opacity
      <div.ov-hero-content>   abs positioned, left 80px, verticalCenter
        eyebrow               PP Mori, 13px, 0.12em tracking, uppercase, 72% white
        h1                    PP Editorial New, 800, clamp(28–63px), #F2FCFF
        [subtitle]            optional
        [CTA buttons]         optional
      </div>
    </div>
    [nav dots / arrows]       homepage carousel only
  </section>
</div>
```

**Product Detail hero** adds a stats bar at the bottom of the card — a row of 4–5 pill metrics (e.g. rate %, term, min premium, A.M. Best rating) rendered inside the card before the curve.

---

## Page Sections

### Home

| # | Section | Notes |
|---|---|---|
| 1 | Hero carousel | 4 slides, auto-advance 6s, prev/next arrows + dot indicators |
| 2 | Company Highlights | `h2` centered heading + flex row: square photo left, 3 cards right |
| 3 | Products | Eyebrow + display heading left; tabbed rate card right (MYGA / FIA tabs) |
| 4 | About | Square photo left; heading + body + `PillGhost` + `TextLink` right |
| 5 | A.M. Best Rating | Navy card with large "A" left; heading + body + `TextLink` right |

---

### Products (landing)

Three product-category sections, alternating image/text sides:

| # | Heading | Image side | Notes |
|---|---|---|---|
| 1 | Predictable growth with straightforward accumulation | Left | MYGA category |
| 2 | Guaranteed growth with the ability to outlast inflation | Right | FIA category |
| 3 | Growth potential linked to market indices without direct market risk | Left | FIA indexed category |

Each section: eyebrow + h2 + body copy + two CTAs.

Bottom: "Not sure which product is right for you?" CTA panel (same as global CTAPanel but with teal-tint background and custom headline).

---

### Product Detail (`Harbourview Fixed Indexed Annuity` example)

**Hero:** Full-bleed image + stats bar at card bottom:
- 5 stat pills: rate `%`, contract length, withdrawal %, min premium `$`, A.M. Best rating

**Body layout:** Two-column — sticky left sidebar + scrollable right content.

**Left sidebar — Contract Benefits:**
- Product name + tag
- Key benefit bullets
- CTA button ("Get a Quote" or "Talk to an Advisor")

**Right content — accordion sections:**
1. **What your contract provides** — benefit list with icons/checkmarks
2. **Choose your growth approach** — tab switcher (All / Cap / Participation / Spread) → rate table with columns: Strategy, Index, Type, Rate
3. **Key terms and specifications** — definition list (surrender period, min premium, free withdrawal %, etc.)
4. **Built-in benefit provisions** — expandable list of provisions
5. **End of surrender charge period** — options at maturity
6. **Income payment options** — annuitization / withdrawal options

Bottom: full-width navy CTA band ("Ready to explore the Harbourview FIA?")

---

### About / Company

**Hero:** Underwater swimmer image, "Retirement solutions designed for clarity and confidence"

**Sections (alternating two-col layout):**

| # | Heading | Image side |
|---|---|---|
| 1 | Experience the difference | Right (family photo) |
| 2 | Unmatched reserves with straightforward accumulation | Left |
| 3 | A clear path to predictable, guaranteed returns | Right |
| 4 | Experience the difference (differentiators grid) | — |
| 5 | A.M. Best "A" Excellent rating | Right (rating badge) |

---

### Leadership

**Hero:** Beach couple image, eyebrow "Our People", headline "The people behind the promise."

**Grid:** 3-column card grid of executives. Each card:
- Headshot photo (square crop, rounded)
- Name (display font, ~20px)
- Title (body font, muted grey)

---

### Board of Directors

Same structure as Leadership page.

---

### Client Resources

**Hero:** "Client Resources" with interior image

**Tab bar** (horizontal, below hero, sticky):
- Downloads
- Rates
- Product Comparisons
- Annuity Library
- Insights / Case Studies

**Downloads tab:**
Card grid — each card: icon, document title, description, "Download" link

**Rates tab:**
Table — rows: product name; columns: term lengths with current rates. Teal accent on active/highlighted rate.

**Product Comparisons tab:**
Side-by-side comparison cards for MYGA vs competitors and other savings vehicles.

**Annuity Library tab:**
Searchable/filterable document list with A–Z letter index.

**Insights / Case Studies tab:**
Article card grid (image, eyebrow, heading, excerpt, "Read more →")

---

### Newsroom

**Hero:** Navy tint, "News Room", eyebrow + optional subtitle

**Filter tabs:** All · Company · Product · Industry · Events

**Article list:** Each item:
- Date + category tag
- Headline (display font, ~24px)
- Short excerpt (body font, muted)
- "Read more →" TextLink

**Pagination:** Load More button or numbered pages

---

### Blog (listing)

Same structure as Newsroom with blog-specific categories.

---

### Blog Article

**Hero:** Article feature image with headline overlay

**Body:**
- Author + date byline
- Long-form article body (serif body text, ~18px)
- Pull quote blocks
- "Related articles" card row at bottom

---

## Design Patterns

### Two-column section
Alternating image/text layout used on Home, About, Products, and Leadership:
- Image: square crop, `border-radius: 24px`, `object-fit: cover`, `clamp(260px, 30vw, 420px)` width
- Text col: flex column, `gap: 32px`, heading + body + CTA(s)
- Stacks to single column at ≤ 800px

### Card (highlight / feature)
- Background: `#F1FBFF` (teal tint) or white with shadow
- `border-radius: 16px`, padding `26–30px`
- Heading: PP Editorial New, ~24px, navy
- Body: PP Mori, 17px, muted grey

### Rate table
- Full-width, `border-collapse: collapse`
- Header row: navy background, white text, PP Mori semibold
- Data rows: alternating white / tint, teal accent on rate values
- Hover: subtle row highlight

### Stats bar (product detail hero)
- Rendered inside the hero card, bottom-aligned above the wave curve
- Row of pill chips: label above, value below in display font
- Background: semi-transparent dark or teal

### Section rhythm
| Context | Padding |
|---|---|
| Standard section | `80px 0` |
| Dark/mission strip | `72px 0` |
| Tight card sections | `60–64px 0` |
| Mobile (≤ 720px) | `48px 0` |

---

## Typography in Practice

| Use | Font | Weight | Size | Color |
|---|---|---|---|---|
| Hero h1 | PP Editorial New | 800 | clamp(28–63px) | `#F2FCFF` |
| Page h2 | PP Editorial New | 400 | clamp(36–60px) | `#0D1F4E` or `#233D7C` |
| Section h2 | PP Editorial New | 400 | clamp(30–48px) | `#0D1F4E` |
| Card h3 | PP Editorial New | 400 | 20–24px | `#0D1F4E` |
| Eyebrow | PP Mori | 600 | 11–13px | muted white or navy-600 |
| Body | PP Mori | 400 | 16–17px | `#4A5568` |
| Rate value | PP Editorial New | 400 | 28–36px | `--ov-teal-600` |
| Navigation | PP Mori | 600 | 12–13px | white |

---

## Button Hover States

| Variant | Default | Hover |
|---|---|---|
| `PillMint` (on dark) | teal fill, navy text | navy fill, white text, white glow shadow |
| `PillMint` (on light) | teal fill, navy text | lift + teal glow shadow |
| `PillNavy` | navy fill, white text | lift + white glow shadow |
| `PillGhost` | white fill, navy border | navy fill, white text, lift |
| `TextLink` | navy text + `→` | `→` slides right 4px |

Lift: `transform: translateY(-2px)`, transition `0.18s ease`

---

## Assets Referenced in Design

| Asset | Used on |
|---|---|
| `assets/hero-couple.jpg` | Home hero slide 1 |
| `assets/two.jpg` | Home hero slide 2 |
| `assets/three.jpg` | Home hero slide 3 |
| `assets/four.jpg` | Home hero slide 4 |
| `assets/family.png` | Home highlights, Insights card |
| `assets/couple-walking.png` | About, Client Resources hero |
| `assets/older-couple-1.png` | About section, Insights hero |
| `assets/lighthouse.jpg` | About/Company hero (current) |
| `assets/hero-beach-couple.jpg` | Products hero |
| `assets/faq-hero.jpg` | FAQ hero |
| `assets/ambest.png` | A.M. Best section |
| `assets/ambest-rating.png` | A.M. Best section |
| `assets/Noise.png` | All heroes (grain texture) |
| `assets/oceanview-logo-white.png` | Header, Footer |
| `assets/wave-emblem.svg` | Footer, brand moments |
