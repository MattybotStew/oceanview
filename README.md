# Oceanview Life and Annuity — Marketing Site

Static marketing site for Oceanview Life and Annuity Company. No build step, no npm, no bundler.

## Tech stack

| Concern | Solution |
|---|---|
| UI | React 18.3.1 via unpkg CDN |
| JSX | Babel Standalone 7.29.0 (in-browser compilation) |
| Styling | Inline JS style objects + `css/tokens.css` |
| Routing | In-memory state in `Page.jsx` (no URL changes) |
| Build | None |

## Running locally

Serve the project root over HTTP — opening `index.html` as a `file://` URL won't work because browsers block cross-origin script tags.

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Then open `http://localhost:8080`.

## Project structure

```
oceanview/
├── index.html              # App shell — loads CDN scripts + all JSX in order
├── css/
│   └── tokens.css          # CSS custom properties, global resets, responsive helpers
├── components/
│   ├── Buttons.jsx         # PillMint, PillNavy, PillGhost, TextLink
│   ├── Header.jsx          # Sticky nav — desktop mega-dropdown + mobile drawer
│   ├── TickerBar.jsx       # Scrolling market data ticker
│   ├── Hero.jsx            # Full-bleed carousel (4 slides, 6s auto-advance)
│   ├── Highlights.jsx      # Three differentiator cards + photo
│   ├── ProductsCard.jsx    # Tabbed MYGA / FIA rate card
│   ├── AboutBlock.jsx      # Split photo + company copy
│   ├── RatingBlock.jsx     # A.M. Best "A Excellent" callout
│   ├── CTAPanel.jsx        # "Get Started" conversion band
│   ├── Footer.jsx          # Dark navy footer — email signup, links, legal
│   ├── FAQPage.jsx         # FAQ route — hero + accordion + CTAPanel
│   └── Page.jsx            # Root router — composes Home and FAQ views
├── assets/                 # Images and SVGs
└── fonts/                  # PP Editorial New + PP Mori (.otf files)
```

## How the app boots

1. `index.html` loads React, ReactDOM, and Babel from unpkg (SRI-hashed).
2. Each `.jsx` is loaded as `type="text/babel"` — Babel compiles it in the browser at runtime.
3. Scripts load in dependency order. Each file ends with `Object.assign(window, { ComponentName })` to expose it globally — there are no `import` statements.
4. The final inline script calls `ReactDOM.createRoot` and renders `<Page />`.

## Adding or editing a component

1. Edit the `.jsx` file in `components/`.
2. Bump the `?v=N` version number on its `<script>` tag in `index.html` to bust the browser cache.

```html
<!-- index.html -->
<script type="text/babel" src="components/Hero.jsx?v=16"></script>
```

## Routing

Two routes, controlled by a `route` state string in `Page.jsx`:

- `"Home"` — Hero → Highlights → ProductsCard → AboutBlock → RatingBlock → CTAPanel
- `"FAQ"` — FAQPage (hero + accordion + CTAPanel)

Navigation links call `onNav(routeName)`. There are no URL changes or browser history entries.

## Design tokens

All CSS custom properties live in `css/tokens.css`. Key ones:

- Colors: `--ov-navy-*`, `--ov-teal-*`, `--ov-grey-*`, `--ov-surface-*`
- Type: `--ov-ff-display` (PP Editorial New), `--ov-ff-sans` / `--ov-ff-body` (PP Mori)
- Layout: `--ov-container` (1300px max-width), `--ov-gutter` (120px desktop padding)

See [OCEANVIEW_PROJECT.md](OCEANVIEW_PROJECT.md) for the full token reference, component API docs, and responsive breakpoint tables.
