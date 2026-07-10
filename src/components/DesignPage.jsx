// DesignPage.jsx — Design system visual reference + WPBakery how-to
// React prototype source: tokens.css + Buttons / common / PageHero / CTABanner / CTAPanel
// WordPress production: docs/wpbakery/ (oceanview-wpbakery.css, recipes, enqueue-example.php)
// Sticky sidebar + scrollable content. Keep React + WPBakery docs in sync.
import { useState } from 'react'
import { PillMint, PillNavy, PillWhite, PillGhost, TextLink } from './Buttons.jsx'
import { Eyebrow } from './common.jsx'
import CTABanner from './CTABanner.jsx'

const HEADER_H = 72;

const SECTIONS = [
  { id: 'wpbakery', label: 'WPBakery how-to', group: 'wpb' },
  { id: 'colors', label: 'Colors', group: 'system' },
  { id: 'typography', label: 'Typography', group: 'system' },
  { id: 'buttons', label: 'Buttons', group: 'system' },
  { id: 'links', label: 'Links', group: 'system' },
  { id: 'shadows', label: 'Shadows', group: 'system' },
  { id: 'cards', label: 'Cards', group: 'system' },
  { id: 'pills', label: 'Pills & Badges', group: 'system' },
  { id: 'forms', label: 'Forms', group: 'system' },
  { id: 'layout', label: 'Layout', group: 'system' },
  { id: 'patterns', label: 'Component Patterns', group: 'system' },
];

// ── STYLES ────────────────────────────────────────────────────────────────────

const S = {
  page: { display: 'flex', minHeight: '100vh', background: '#fff' },
  sidebar: {
    width: 260, flexShrink: 0, position: 'sticky', top: HEADER_H,
    height: `calc(100vh - ${HEADER_H}px)`, overflowY: 'auto',
    background: 'var(--ov-surface-cream, #F0EEE9)',
    borderRight: '1px solid rgba(13,31,78,0.08)', padding: '32px 0',
  },
  sbTitle: {
    fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11,
    letterSpacing: '1.2px', textTransform: 'uppercase',
    color: 'var(--ov-grey-500)', padding: '0 24px', marginBottom: 16,
  },
  sbLink: (active) => ({
    display: 'block', width: '100%', padding: '10px 24px', border: 'none',
    background: active ? '#fff' : 'none',
    borderLeft: active ? '3px solid var(--ov-teal-600)' : '3px solid transparent',
    fontFamily: 'var(--ov-ff-sans)', fontWeight: active ? 600 : 400, fontSize: 14,
    color: 'var(--ov-navy-900)', cursor: 'pointer', textAlign: 'left',
    transition: 'background 0.15s ease, border-color 0.15s ease',
  }),
  content: { flex: 1, padding: '40px 48px 80px', minWidth: 0, maxWidth: 960 },
  section: { marginBottom: 56 },
  h2: {
    fontFamily: 'var(--ov-ff-display)', fontWeight: 400,
    fontSize: 'clamp(24px, 2.8vw, 36px)', color: '#0D1F4E',
    lineHeight: 1.2, margin: '0 0 20px', paddingBottom: 12,
    borderBottom: '1px solid rgba(13,31,78,0.08)',
  },
  card: {
    background: '#fff', borderRadius: 20, border: '1px solid rgba(13,31,78,0.08)',
    padding: '28px 32px', marginBottom: 20,
  },
  cardHd: {
    fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13,
    color: 'var(--ov-grey-500)', letterSpacing: '0.06em',
    textTransform: 'uppercase', marginBottom: 20,
  },
  note: {
    fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: 'var(--ov-grey-600)',
    lineHeight: 1.7, marginTop: 16,
  },
  mono: { fontFamily: 'ui-monospace, monospace', fontSize: 12 },
  table: { width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--ov-ff-sans)', fontSize: 13, marginTop: 12 },
  th: { padding: '10px 12px', fontWeight: 600, color: 'var(--ov-grey-500)', fontSize: 11, letterSpacing: '0.8px', textTransform: 'uppercase', textAlign: 'left', borderBottom: '1px solid rgba(13,31,78,0.08)' },
  td: { padding: '10px 12px', color: 'var(--ov-navy-900)', borderBottom: '1px solid rgba(13,31,78,0.04)', lineHeight: 1.5, fontSize: 13 },
  grid: (min) => ({ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`, gap: 12 }),
  pre: {
    background: 'var(--ov-navy-1000)', color: '#f2fcff', borderRadius: 12,
    padding: '16px 20px', fontFamily: 'ui-monospace, monospace', fontSize: 13,
    lineHeight: 1.65, overflowX: 'auto', margin: 0,
  },
  row: { display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' },
  wpb: {
    marginTop: 16, padding: '14px 16px', borderRadius: 12,
    background: 'rgba(36,148,193,0.08)', border: '1px solid rgba(36,148,193,0.22)',
    fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: 'var(--ov-navy-900)', lineHeight: 1.65,
  },
  wpbLabel: {
    display: 'inline-block', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px',
    textTransform: 'uppercase', color: 'var(--ov-teal-600)', marginBottom: 6,
  },
  heroBanner: {
    background: 'var(--ov-navy-1000)', borderRadius: 16, padding: '28px 32px',
    marginBottom: 28, color: '#F2FCFF',
  },
  step: {
    display: 'flex', gap: 14, marginBottom: 16, alignItems: 'flex-start',
  },
  stepNum: {
    flexShrink: 0, width: 28, height: 28, borderRadius: 99,
    background: 'var(--ov-teal-400)', color: 'var(--ov-navy-1000)',
    fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
};

/** WPBakery callout — how to apply this pattern in WordPress */
function Wpb({ children }) {
  return (
    <div style={S.wpb}>
      <div style={S.wpbLabel}>WPBakery</div>
      <div>{children}</div>
    </div>
  );
}

// ── WPBAKERY HOW-TO ───────────────────────────────────────────────────────────

function WpBakeryHowTo() {
  return (
    <div id="wpbakery" style={S.section}>
      <div style={S.heroBanner}>
        <div style={{
          fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11,
          letterSpacing: '1.2px', textTransform: 'uppercase', color: '#70BABF', marginBottom: 10,
        }}>
          Production build-out
        </div>
        <h1 style={{
          fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px, 3vw, 36px)',
          color: '#F2FCFF', margin: '0 0 12px', lineHeight: 1.15, letterSpacing: '-0.02em',
        }}>
          Design system + <em style={{ fontStyle: 'italic', color: '#70BABF' }}>WPBakery how-to</em>
        </h1>
        <p style={{
          fontFamily: 'var(--ov-ff-sans)', fontSize: 15, lineHeight: 1.65,
          color: 'rgba(242,252,255,0.72)', margin: 0, maxWidth: '62ch',
        }}>
          This page is the interactive reference for Oceanview styles.
          Ship pages in <strong style={{ color: '#fff', fontWeight: 600 }}>WordPress + WPBakery</strong> using the package in{' '}
          <span style={S.mono}>docs/wpbakery/</span> — do not rebuild production pages in React.
        </p>
      </div>

      <h2 style={S.h2}>WPBakery how-to</h2>
      <p style={{ ...S.note, marginTop: 0, marginBottom: 20 }}>
        Goal: load one CSS file on the theme, then build every section with Extra class names and Raw HTML recipes.
        Each section below shows the live React look <em>and</em> the WPBakery class to use.
      </p>

      <div style={S.card}>
        <div style={S.cardHd}>Package files (repo → theme)</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>File in docs/wpbakery/</th>
              <th style={S.th}>What to do with it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><span style={S.mono}>oceanview-wpbakery.css</span></td>
              <td style={S.td}>Copy into child theme root (or assets/css/). This is the full design system as CSS classes.</td>
            </tr>
            <tr>
              <td style={S.td}><span style={S.mono}>enqueue-example.php</span></td>
              <td style={S.td}>Paste hooks into child theme <span style={S.mono}>functions.php</span> (enqueue CSS + body class <span style={S.mono}>ov-ds</span>).</td>
            </tr>
            <tr>
              <td style={S.td}><span style={S.mono}>recipes.html</span></td>
              <td style={S.td}>Copy-paste into WPBakery <strong>Raw HTML</strong> for hero, CTA banner, cards, splits, forms.</td>
            </tr>
            <tr>
              <td style={S.td}><span style={S.mono}>shortcodes.md</span></td>
              <td style={S.td}>Row / column structures and Extra class recipes.</td>
            </tr>
            <tr>
              <td style={S.td}><span style={S.mono}>color-swatches.md</span></td>
              <td style={S.td}>Hex values if you must use Design Options color pickers.</td>
            </tr>
            <tr>
              <td style={S.td}><span style={S.mono}>README.md</span></td>
              <td style={S.td}>Full builder guide (cheat sheets, card rules, mapping table).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>One-time setup (child theme)</div>
        <div style={S.step}>
          <div style={S.stepNum}>1</div>
          <div style={S.note}>
            <strong style={{ color: 'var(--ov-navy-900)' }}>Fonts</strong> — Upload PP Editorial New + PP Mori into the theme
            (e.g. <span style={S.mono}>fonts/</span>). Fix <span style={S.mono}>@font-face</span> paths at the top of{' '}
            <span style={S.mono}>oceanview-wpbakery.css</span> if needed.
          </div>
        </div>
        <div style={S.step}>
          <div style={S.stepNum}>2</div>
          <div style={S.note}>
            <strong style={{ color: 'var(--ov-navy-900)' }}>CSS</strong> — Copy <span style={S.mono}>oceanview-wpbakery.css</span> into the child theme.
          </div>
        </div>
        <div style={S.step}>
          <div style={S.stepNum}>3</div>
          <div style={S.note}>
            <strong style={{ color: 'var(--ov-navy-900)' }}>Enqueue</strong> — From <span style={S.mono}>enqueue-example.php</span>: load the stylesheet
            and add body class <span style={S.mono}>ov-ds</span> so base type styles apply sitewide.
          </div>
        </div>
        <div style={S.step}>
          <div style={S.stepNum}>4</div>
          <div style={S.note}>
            <strong style={{ color: 'var(--ov-navy-900)' }}>Build</strong> — In WPBakery, use Row Extra class for section bands, Button Extra class
            (or Raw HTML) for pills, and Raw HTML recipes for hero / CTA banner.
          </div>
        </div>
        <pre style={{ ...S.pre, marginTop: 8 }}>{`// Child theme functions.php — see docs/wpbakery/enqueue-example.php
wp_enqueue_style( 'oceanview-ds', get_stylesheet_directory_uri() . '/oceanview-wpbakery.css', [], $ver );
// body_class filter adds: ov-ds`}</pre>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>How styles get into WPBakery (the system)</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>What you want</th>
              <th style={S.th}>Where to put the class</th>
              <th style={S.th}>Classes / source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>Section band (tint / navy / white)</td>
              <td style={S.td}>Row → Extra class name</td>
              <td style={S.td}><span style={S.mono}>ov-section ov-bg-tint</span> · <span style={S.mono}>ov-bg-navy</span> · <span style={S.mono}>ov-bg-white</span></td>
            </tr>
            <tr>
              <td style={S.td}>Primary / ghost buttons</td>
              <td style={S.td}>Button Extra class, or Raw HTML <span style={S.mono}>&lt;a&gt;</span></td>
              <td style={S.td}><span style={S.mono}>ov-btn ov-btn--mint ov-btn--sm</span> (etc.)</td>
            </tr>
            <tr>
              <td style={S.td}>Cards</td>
              <td style={S.td}>Column Extra class or HTML wrapper</td>
              <td style={S.td}><span style={S.mono}>ov-card ov-card--white</span> / <span style={S.mono}>--teal</span> / <span style={S.mono}>--dark</span></td>
            </tr>
            <tr>
              <td style={S.td}>Eyebrow, body, accents</td>
              <td style={S.td}>Text Block / Custom Heading HTML</td>
              <td style={S.td}><span style={S.mono}>ov-eyebrow</span> · <span style={S.mono}>ov-body-lg</span> · <span style={S.mono}>ov-accent</span></td>
            </tr>
            <tr>
              <td style={S.td}>Page hero</td>
              <td style={S.td}>Raw HTML element</td>
              <td style={S.td}>Paste hero block from <span style={S.mono}>recipes.html</span></td>
            </tr>
            <tr>
              <td style={S.td}>CTA banner / panel</td>
              <td style={S.td}>Raw HTML element</td>
              <td style={S.td}><span style={S.mono}>ov-cta-banner</span> / <span style={S.mono}>ov-cta-panel</span> recipes</td>
            </tr>
            <tr>
              <td style={S.td}>Hex only (last resort)</td>
              <td style={S.td}>Design Options color picker</td>
              <td style={S.td}><span style={S.mono}>color-swatches.md</span> — prefer classes so CSS updates fix all pages</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>React → WPBakery map</div>
        <table style={S.table}>
          <thead>
            <tr><th style={S.th}>React (this prototype)</th><th style={S.th}>WPBakery</th></tr>
          </thead>
          <tbody>
            <tr><td style={S.td}><span style={S.mono}>tokens.css</span></td><td style={S.td}>Same vars inside <span style={S.mono}>oceanview-wpbakery.css</span></td></tr>
            <tr><td style={S.td}><span style={S.mono}>PillMint</span> / <span style={S.mono}>PillGhost</span></td><td style={S.td}><span style={S.mono}>ov-btn ov-btn--mint</span> / <span style={S.mono}>--ghost</span></td></tr>
            <tr><td style={S.td}><span style={S.mono}>Eyebrow</span></td><td style={S.td}><span style={S.mono}>&lt;p class="ov-eyebrow"&gt;</span></td></tr>
            <tr><td style={S.td}><span style={S.mono}>PageHero</span></td><td style={S.td}>Raw HTML — recipes.html hero</td></tr>
            <tr><td style={S.td}><span style={S.mono}>CTABanner</span></td><td style={S.td}>Raw HTML — <span style={S.mono}>ov-cta-banner</span></td></tr>
            <tr><td style={S.td}><span style={S.mono}>CTAPanel</span></td><td style={S.td}>Raw HTML — <span style={S.mono}>ov-cta-panel</span></td></tr>
            <tr><td style={S.td}><span style={S.mono}>TextLink</span></td><td style={S.td}><span style={S.mono}>&lt;a class="ov-text-link"&gt;</span></td></tr>
            <tr><td style={S.td}>Hash routes (#products)</td><td style={S.td}>Real WP pages / permalinks</td></tr>
          </tbody>
        </table>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Rules of thumb</div>
        <div style={S.note}>
          <strong>Prefer classes over Design Options</strong> for brand-critical pieces (buttons, heroes, navy bands, cards)
          so one CSS update fixes every page.<br /><br />
          <strong>Raw HTML wins</strong> for hero + CTA banner — stacking six native elements is less reliable than the recipe.<br /><br />
          <strong>If theme Button styles fight you</strong>, use <span style={S.mono}>&lt;a class="ov-btn …"&gt;</span> in Raw HTML / Text Block instead of the Button element.<br /><br />
          <strong>Unlisted landings</strong> (partner, NSG, this design page if published) are real pages — just leave them out of the primary menu.<br /><br />
          <strong>When tokens change</strong> in React, update <span style={S.mono}>docs/wpbakery/oceanview-wpbakery.css</span> and bump the enqueue version.
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Example: mint button in Raw HTML</div>
        <pre style={S.pre}>{`<a class="ov-btn ov-btn--mint ov-btn--sm" href="/products/">Explore Products</a>
<a class="ov-btn ov-btn--ghost ov-btn--sm" href="/about/">Learn More</a>
<a class="ov-btn ov-btn--ghost-light ov-btn--lg" href="/contact/">On dark backgrounds</a>`}</pre>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Example: section Row</div>
        <pre style={S.pre}>{`// Row → Extra class name:
ov-section ov-bg-tint

// Column → Extra class name (white card on tint):
ov-card ov-card--white ov-card--large`}</pre>
      </div>
    </div>
  );
}

// ── COLOR SWATCH ──────────────────────────────────────────────────────────────

function Swatch({ name, hex, note }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div style={{
        width: 48, height: 48, borderRadius: 12, background: hex,
        border: '1px solid rgba(13,31,78,0.06)', flexShrink: 0,
      }} />
      <div>
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14, color: 'var(--ov-navy-900)', marginBottom: 2 }}>{name}</div>
        <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 13, color: 'var(--ov-grey-600)' }}>{hex}</div>
        {note && <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: 'var(--ov-grey-500)', marginTop: 2 }}>{note}</div>}
      </div>
    </div>
  );
}

// ── COLORS ────────────────────────────────────────────────────────────────────

function Colors() {
  const NAVIES = [
    ['--ov-navy-1000', '#001F54', 'Deepest — footer-adjacent dark, card headings'],
    ['--ov-navy-900',  '#0D1F4E', 'Primary text (--ov-fg)'],
    ['--ov-navy-800',  '#1A2452', ''],
    ['--ov-navy-700',  '#16317B', ''],
    ['--ov-navy-600',  '#1A3070', 'Dropdown links, TextLink default'],
    ['--ov-navy-500',  '#233D7C', 'Header / secondary CTA (--ov-cta-secondary-bg)'],
    ['--ov-navy-400',  '#223F84', ''],
    ['--ov-navy-300',  '#4472C4', 'Section callout accent'],
  ];
  const TEALS = [
    ['--ov-teal-700', '#1976A0', 'Link color (--ov-link)'],
    ['--ov-teal-600', '#2494C1', 'Info / accent; Eyebrow default'],
    ['--ov-teal-500', '#06BCC1', ''],
    ['--ov-teal-400', '#6BBABF', 'Primary CTA bg (--ov-cta-primary-bg)'],
    ['--ov-teal-300', '#71BABF', 'Teal accent text, hero italic (~#70BABF in UI)'],
  ];
  const SECONDARY = [
    ['--ov-golden-sun',    '#E1C43B', 'Brand secondary gold'],
    ['--ov-sunset-orange', '#A84124', 'Brand secondary orange'],
    ['--ov-footer-bg',     '#001233', 'Footer background'],
  ];
  const GREYS = [
    ['--ov-grey-900', '#212529', ''],
    ['--ov-grey-800', '#333333', ''],
    ['--ov-grey-700', '#2B3A4F', ''],
    ['--ov-grey-600', '#374151', 'Body text (--ov-fg-muted), AA 7.2:1'],
    ['--ov-grey-500', '#6B7280', 'Meta / captions'],
    ['--ov-grey-400', '#828282', 'Meta alias (--ov-fg-meta)'],
    ['--ov-grey-300', '#DADADA', ''],
    ['--ov-grey-200', '#E9EBF5', ''],
    ['--ov-grey-150', '#CFD5EA', 'Hero dot inactive'],
    ['--ov-grey-100', '#D9D9D9', ''],
    ['--ov-grey-50',  '#F2F2F2', ''],
  ];
  const SURFACES = [
    ['--ov-surface-0',      '#FFFFFF', 'Page bg (--ov-bg)'],
    ['--ov-surface-tint',   '#F1FBFF', 'Soft tint (--ov-bg-soft)'],
    ['--ov-surface-tint-2', '#F2FCFF', 'On-dark text (--ov-fg-on-dark)'],
    ['--ov-surface-tint-3', '#F2FAFE', ''],
    ['--ov-surface-cream',  '#F0EEE9', 'Nav sidebar + mobile bg'],
    ['--ov-surface-soft',   '#F9F9F9', ''],
  ];
  const STATUS = [
    ['--ov-success', '#008000', 'Success'],
    ['--ov-danger',  '#CC0000', 'Danger — AA 5.87:1 on white'],
    ['--ov-info',    '#2494C1', 'Maps to --ov-teal-600'],
  ];
  const BORDERS = [
    ['--ov-border-faint',    'rgba(13, 31, 78, 0.10)', ''],
    ['--ov-border-soft',     'rgba(13, 31, 78, 0.12)', 'Default light divider'],
    ['--ov-border-dark',     'rgba(13, 31, 78, 0.20)', ''],
    ['--ov-border-on-dark',  'rgba(255, 255, 255, 0.20)', ''],
    ['--ov-border-hairline', 'rgba(0, 0, 0, 0.13)', ''],
  ];
  const ALIASES = [
    ['--ov-bg',               '--ov-surface-0',       '#FFFFFF'],
    ['--ov-bg-soft',          '--ov-surface-tint',    '#F1FBFF'],
    ['--ov-bg-deep',          '--ov-navy-500',        '#233D7C'],
    ['--ov-fg',               '--ov-navy-900',        '#0D1F4E'],
    ['--ov-fg-on-dark',       '--ov-surface-tint-2',  '#F2FCFF'],
    ['--ov-fg-muted',         '--ov-grey-600',        '#374151'],
    ['--ov-fg-meta',          '--ov-grey-400',        '#828282'],
    ['--ov-link',             '--ov-teal-700',        '#1976A0'],
    ['--ov-cta-primary-bg',   '--ov-teal-400',        '#6BBABF'],
    ['--ov-cta-primary-fg',   '--ov-navy-1000',       '#001F54'],
    ['--ov-cta-secondary-bg', '--ov-navy-500',        '#233D7C'],
    ['--ov-cta-secondary-fg', '--ov-fg-on-dark',      '#F2FCFF'],
  ];

  return (
    <div id="colors" style={S.section}>
      <h2 style={S.h2}>Colors</h2>
      <p style={{ ...S.note, marginTop: 0, marginBottom: 20 }}>
        All tokens live on <span style={S.mono}>:root</span> in <span style={S.mono}>src/styles/tokens.css</span>. Prefer semantic aliases in UI code.
      </p>
      <Wpb>
        Same CSS variables ship in <span style={S.mono}>docs/wpbakery/oceanview-wpbakery.css</span>.
        Prefer row/column classes (<span style={S.mono}>ov-bg-navy</span>, <span style={S.mono}>ov-bg-tint</span>) over pasting hex into Design Options.
        Hex list for pickers: <span style={S.mono}>docs/wpbakery/color-swatches.md</span>.
      </Wpb>
      <div style={{ height: 20 }} />
      <div style={S.card}><div style={S.cardHd}>Navy palette</div><div style={S.grid(220)}>{NAVIES.map(c => <Swatch key={c[0]} name={c[0]} hex={c[1]} note={c[2]} />)}</div></div>
      <div style={S.card}><div style={S.cardHd}>Teal / Cyan palette</div><div style={S.grid(220)}>{TEALS.map(c => <Swatch key={c[0]} name={c[0]} hex={c[1]} note={c[2]} />)}</div></div>
      <div style={S.card}><div style={S.cardHd}>Secondary brand</div><div style={S.grid(220)}>{SECONDARY.map(c => <Swatch key={c[0]} name={c[0]} hex={c[1]} note={c[2]} />)}</div></div>
      <div style={S.card}><div style={S.cardHd}>Grey palette</div><div style={S.grid(220)}>{GREYS.map(c => <Swatch key={c[0]} name={c[0]} hex={c[1]} note={c[2]} />)}</div></div>
      <div style={S.card}><div style={S.cardHd}>Surfaces</div><div style={S.grid(220)}>{SURFACES.map(c => <Swatch key={c[0]} name={c[0]} hex={c[1]} note={c[2]} />)}</div></div>
      <div style={S.card}><div style={S.cardHd}>Status</div><div style={S.grid(220)}>{STATUS.map(c => <Swatch key={c[0]} name={c[0]} hex={c[1]} note={c[2]} />)}</div></div>
      <div style={S.card}><div style={S.cardHd}>Borders</div><div style={S.grid(220)}>{BORDERS.map(c => <Swatch key={c[0]} name={c[0]} hex={c[1]} note={c[2]} />)}</div></div>
      <div style={S.card}>
        <div style={S.cardHd}>Semantic aliases</div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Token</th><th style={S.th}>Maps To</th><th style={S.th}>Value</th></tr></thead>
          <tbody>{ALIASES.map(r => (
            <tr key={r[0]}>{r.map((c, i) => (
              <td key={i} style={{ ...S.td, fontFamily: i < 2 ? 'ui-monospace, monospace' : 'var(--ov-ff-sans)', fontSize: 12 }}>{c}</td>
            ))}</tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

// ── TYPOGRAPHY ────────────────────────────────────────────────────────────────

function Typography() {
  const SCALE = [
    ['display-1', '--ov-fz-display-1', 'PP Editorial New', '124px', '400', '1.0', 'token only'],
    ['display-2', '--ov-fz-display-2', 'PP Editorial New', '69px', '400', '1.0', 'token only'],
    ['display-3 / .ov-display', '--ov-fz-display-3', 'PP Editorial New', '63px', '400', '1.0', ''],
    ['h1 / .ov-h1', '--ov-fz-h1', 'PP Editorial New', 'clamp(32px, 4vw, 48px)', '400', '1.16', '-0.025em'],
    ['h2 / .ov-h2', '--ov-fz-h2', 'PP Editorial New', 'clamp(26px, 3vw, 42px)', '400', '1.1', '-0.025em'],
    ['h3 / .ov-h3', '--ov-fz-h3', 'PP Editorial New', 'clamp(18px, 2vw, 36px)', '400', '1.16', '-0.025em'],
    ['h4 / .ov-h4', '--ov-fz-h4', 'PP Editorial New', '28px', '400', '1.16', '0'],
    ['h5 / .ov-h5', '--ov-fz-h5', 'PP Editorial New', '24px', '400', '1.16', '0'],
    ['h6', '--ov-fz-h6', 'PP Editorial New', '20px', '400', '1.16', '0'],
    ['p / .ov-body', '--ov-fz-body', 'PP Mori', '16px', '400', '1.6', '0'],
    ['Body Large / .ov-p-lg', '--ov-fz-body-lg', 'PP Mori', '18px', '400', '1.65', '0'],
    ['Body Small / .ov-p-sm', '--ov-fz-body-sm', 'PP Mori', '14px', '400', '1.5', '0'],
    ['Meta / .ov-meta', '--ov-fz-meta', 'PP Mori', '13px', '400', '1.5', '0'],
    ['Caption / .ov-caption', '--ov-fz-caption', 'PP Mori', '12px', '400', '1.4', '0'],
    ['.ov-eyebrow class', '--ov-fz-eyebrow', 'PP Mori', '16px', '600', '1.0', '0.10em, uppercase'],
    ['Eyebrow component', 'inline', 'PP Mori', '10px', '600', '1', '1.4px, uppercase'],
    ['Hero Title', 'inline', 'PP Editorial New', 'clamp(28px, 8vw, 63px)', '800', '1.1', '0'],
    ['PageHero Title', 'inline', 'PP Editorial New', 'clamp(28px, 4vw, 63px)', '800', '1.1', '0'],
  ];

  return (
    <div id="typography" style={S.section}>
      <h2 style={S.h2}>Typography</h2>
      <Wpb>
        Body class <span style={S.mono}>ov-ds</span> (from enqueue) styles headings/body globally.
        Or set classes on text: <span style={S.mono}>ov-h1</span>–<span style={S.mono}>ov-h5</span>, <span style={S.mono}>ov-body-lg</span>, <span style={S.mono}>ov-meta</span>.
        Italic teal accent: <span style={S.mono}>&lt;em class="ov-accent"&gt;…&lt;/em&gt;</span>.
        Upload brand fonts to the theme; stacks: PP Editorial New (display), PP Mori (UI).
      </Wpb>
      <div style={{ height: 20 }} />
      <div style={S.card}>
        <div style={S.cardHd}>Font families</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <div style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 32, color: '#0D1F4E', lineHeight: 1.1 }}>PP Editorial New</div>
            <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: 'var(--ov-grey-600)', marginTop: 4 }}>
              Brand display serif — headings (h1–h6, .ov-h1–.ov-h5, hero titles). Token: <span style={S.mono}>--ov-ff-display</span>
            </div>
            <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: 'var(--ov-grey-500)' }}>
              Weights: 200 Ultralight, 400 Regular, 800 Ultrabold + italics. Files in <span style={S.mono}>src/fonts/</span>.
            </div>
          </div>
          <div style={{ height: 1, background: 'var(--ov-border-faint)' }} />
          <div>
            <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 32, color: '#0D1F4E', lineHeight: 1.1 }}>PP Mori</div>
            <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: 'var(--ov-grey-600)', marginTop: 4 }}>
              Brand sans — body, UI, buttons, nav. Tokens: <span style={S.mono}>--ov-ff-sans</span> / <span style={S.mono}>--ov-ff-body</span>
            </div>
            <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: 'var(--ov-grey-500)' }}>
              Weights: 200 Extralight, 400 Regular, 600 Semibold, 900 Black + italics.
            </div>
          </div>
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Type scale</div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Element</th><th style={S.th}>Token</th><th style={S.th}>Font</th>
              <th style={S.th}>Size</th><th style={S.th}>Weight</th><th style={S.th}>Line</th><th style={S.th}>Tracking</th>
            </tr>
          </thead>
          <tbody>{SCALE.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} style={S.td}>{c}</td>)}</tr>)}</tbody>
        </table>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Live samples</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h1 style={{ margin: 0 }}>Heading one sample</h1>
          <h2 style={{ margin: 0 }}>Heading two sample</h2>
          <h3 style={{ margin: 0 }}>Heading three sample</h3>
          <p style={{ margin: 0 }}>Body copy uses PP Mori at 16px / 1.6 with muted navy-grey for long-form readability.</p>
          <p className="ov-p-lg" style={{ margin: 0 }}>Large body for lead paragraphs and intros.</p>
          <p className="ov-meta" style={{ margin: 0 }}>Meta text for timestamps, labels, and secondary info.</p>
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Button text</div>
        <div style={S.note}>
          All <span style={S.mono}>.ov-btn</span> variants: PP Mori 600, letter-spacing <span style={S.mono}>.02em</span>.
          Sizes: <span style={S.mono}>sm</span> 14px / 12px 28px · <span style={S.mono}>lg</span> (hero) 15px / 20px 40px.
          TextLink: 15px default (often overridden per context).
        </div>
      </div>
    </div>
  );
}

// ── BUTTONS ───────────────────────────────────────────────────────────────────

function Buttons() {
  return (
    <div id="buttons" style={S.section}>
      <h2 style={S.h2}>Buttons</h2>
      <p style={{ ...S.note, marginTop: 0, marginBottom: 12 }}>
        Live components from <span style={S.mono}>Buttons.jsx</span>. Hover / focus / disabled states are defined on <span style={S.mono}>.ov-btn-*</span> in tokens.css.
        API: <span style={S.mono}>hero</span> → large size; <span style={S.mono}>PillGhost light</span> → ghost-light on dark.
      </p>
      <Wpb>
        Extra class on Button (or Raw HTML): <span style={S.mono}>ov-btn ov-btn--mint ov-btn--sm</span>.
        Sizes: <span style={S.mono}>--sm</span> default · <span style={S.mono}>--lg</span> = hero.
        Variants: <span style={S.mono}>--mint</span> · <span style={S.mono}>--navy</span> · <span style={S.mono}>--ghost</span> · <span style={S.mono}>--ghost-light</span> · <span style={S.mono}>--white</span>.
        If theme chrome fights you, use Raw HTML <span style={S.mono}>&lt;a class="ov-btn …"&gt;</span>.
      </Wpb>
      <div style={{ height: 20 }} />

      <div style={S.card}>
        <div style={S.cardHd}>PillMint — primary CTA (any background)</div>
        <div style={S.row}>
          <PillMint>Explore Products</PillMint>
          <PillMint hero>Hero size</PillMint>
          <PillMint disabled>Disabled</PillMint>
        </div>
        <div style={S.note}>
          <strong>Class:</strong> <span style={S.mono}>.ov-btn--mint</span> · bg <span style={S.mono}>--ov-cta-primary-bg</span> · color <span style={S.mono}>--ov-cta-primary-fg</span><br />
          <strong>Hover:</strong> translateY(-2px) + teal glow · <strong>Active:</strong> press inset shadow
        </div>
        <Wpb><span style={S.mono}>ov-btn ov-btn--mint ov-btn--sm</span> · hero: add <span style={S.mono}>ov-btn--lg</span></Wpb>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>PillNavy — secondary CTA (light backgrounds)</div>
        <div style={S.row}>
          <PillNavy>Learn More</PillNavy>
          <PillNavy hero>Hero size</PillNavy>
        </div>
        <div style={S.note}>
          <strong>Class:</strong> <span style={S.mono}>.ov-btn--navy</span> · bg <span style={S.mono}>--ov-cta-secondary-bg</span> · color <span style={S.mono}>--ov-cta-secondary-fg</span>
        </div>
        <Wpb><span style={S.mono}>ov-btn ov-btn--navy ov-btn--sm</span></Wpb>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>PillGhost — outline (light backgrounds)</div>
        <div style={S.row}>
          <PillGhost>Contact Us</PillGhost>
          <PillGhost hero>Hero size</PillGhost>
        </div>
        <div style={S.note}>
          <strong>Class:</strong> <span style={S.mono}>.ov-btn--ghost</span> · transparent + navy border · hover fills navy
        </div>
        <Wpb><span style={S.mono}>ov-btn ov-btn--ghost ov-btn--sm</span></Wpb>
      </div>

      <div style={{ ...S.card, background: 'var(--ov-navy-1000)' }}>
        <div style={{ ...S.cardHd, color: 'rgba(255,255,255,0.5)' }}>On dark — PillWhite + PillGhost light</div>
        <div style={S.row}>
          <PillWhite>PillWhite</PillWhite>
          <PillGhost light>PillGhost light</PillGhost>
          <PillMint>PillMint still ok</PillMint>
        </div>
        <div style={{ ...S.note, color: 'rgba(255,255,255,0.7)' }}>
          <strong>PillWhite:</strong> <span style={S.mono}>.ov-btn--white</span> — solid white on navy/images<br />
          <strong>PillGhost light:</strong> <span style={S.mono}>.ov-btn--ghost-light</span> — frosted outline (PageHero secondary)
        </div>
        <Wpb>
          <span style={S.mono}>ov-btn ov-btn--white</span> · <span style={S.mono}>ov-btn ov-btn--ghost-light</span> (use on navy/image rows)
        </Wpb>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>.ov-btn architecture</div>
        <div style={S.note}>
          Base: inline-flex · border-radius 200px · border 1.5px transparent (size parity) · font-weight 600 · letter-spacing .02em<br />
          Focus-visible: 2px solid currentColor, 3px offset · Disabled: opacity .4, pointer-events none<br />
          Sizes: <span style={S.mono}>.ov-btn--sm</span> (default) · <span style={S.mono}>.ov-btn--lg</span> when <span style={S.mono}>hero</span>
        </div>
      </div>
    </div>
  );
}

// ── LINKS ─────────────────────────────────────────────────────────────────────

function Links() {
  return (
    <div id="links" style={S.section}>
      <h2 style={S.h2}>Links</h2>
      <Wpb>
        Text links: <span style={S.mono}>&lt;a class="ov-text-link" href="…"&gt;Label&lt;/a&gt;</span> (arrow via CSS <span style={S.mono}>::after</span>).
        Teal variant: add <span style={S.mono}>ov-text-link--teal</span>. Body links under <span style={S.mono}>.ov-ds</span> underline automatically.
      </Wpb>
      <div style={{ height: 20 }} />

      <div style={S.card}>
        <div style={S.cardHd}>TextLink — standalone action (Buttons.jsx)</div>
        <div style={{ ...S.row, marginBottom: 12 }}>
          <TextLink onClick={() => {}}>Get Directions</TextLink>
          <TextLink color="var(--ov-teal-600)" onClick={() => {}}>Teal override</TextLink>
        </div>
        <div style={S.note}>
          <strong>Default color:</strong> <span style={S.mono}>var(--ov-navy-600)</span> (#1A3070) — not link teal; pass <span style={S.mono}>color</span> to override<br />
          <strong>Class:</strong> <span style={S.mono}>.ov-text-link</span> · weight 600 · arrow → slides on hover<br />
          <strong>Use:</strong> card CTAs, “view page” actions — not inside paragraph copy
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Inline links — inside body copy</div>
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: 'var(--ov-grey-600)', lineHeight: 1.65, marginBottom: 12 }}>
          Contact our{' '}
          <a
            href="#contact"
            onClick={e => e.preventDefault()}
            style={{ color: 'var(--ov-link)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}
          >
            sales team
          </a>{' '}
          for current rates and product availability.
        </div>
        <div style={S.note}>
          Always underline in body (WCAG 1.4.1). Color: <span style={S.mono}>var(--ov-link)</span> / #1976A0 · weight 600 · underline-offset 2px
        </div>
      </div>

      <div style={{ ...S.card, background: 'var(--ov-footer-bg)' }}>
        <div style={{ ...S.cardHd, color: 'rgba(255,255,255,0.5)' }}>Footer links</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
          <a href="#" onClick={e => e.preventDefault()} style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13.5, color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}>Case Studies</a>
          <a href="#" onClick={e => e.preventDefault()} style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13.5, color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}>Downloads</a>
        </div>
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: 'rgba(255,255,255,.5)' }}>
          Default: 13.5px · rgba(255,255,255,.7) · no underline · Hover: color #fff
        </div>
      </div>
    </div>
  );
}

// ── SHADOWS ───────────────────────────────────────────────────────────────────

function Shadows() {
  const shadows = [
    ['--ov-shadow-card',   '0 24px 60px 0 rgba(13, 31, 78, 0.12)', 'Dropdown panels, elevated cards'],
    ['--ov-shadow-cover',  '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 'Hero cover / overlay panels'],
    ['--ov-shadow-button', '0 2px 8px 0 rgba(13, 31, 78, 0.10)', 'Default button elevation'],
    ['--ov-shadow-press',  'inset 0 1px 0 rgba(0, 0, 0, 0.10)', 'Button active / pressed'],
  ];
  return (
    <div id="shadows" style={S.section}>
      <h2 style={S.h2}>Shadows</h2>
      <Wpb>
        Prefer card/border classes over custom box-shadows. Shadows are baked into <span style={S.mono}>ov-card</span> / button hovers in the WPBakery CSS.
      </Wpb>
      <div style={{ height: 16 }} />
      <div style={S.grid(260)}>
        {shadows.map(s => (
          <div key={s[0]} style={{ background: '#fff', borderRadius: 16, padding: 24, boxShadow: s[1], border: '1px solid rgba(13,31,78,0.04)' }}>
            <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 15, color: 'var(--ov-navy-900)', marginBottom: 8 }}>{s[0]}</div>
            <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.5, marginBottom: 6 }}>{s[2]}</div>
            <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, color: 'var(--ov-grey-500)' }}>{s[1]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── CARDS ─────────────────────────────────────────────────────────────────────

function Cards() {
  return (
    <div id="cards" style={S.section}>
      <h2 style={S.h2}>Cards</h2>
      <p style={{ ...S.note, marginTop: 0, marginBottom: 12 }}>
        Three card types — match card surface to section background. Never put a white card on white or a teal card on surface-tint.
      </p>
      <Wpb>
        Column Extra class (or HTML wrapper): <span style={S.mono}>ov-card ov-card--white</span> on <span style={S.mono}>ov-bg-tint</span> rows;
        <span style={S.mono}> ov-card--teal</span> on white; <span style={S.mono}>ov-card--dark</span> on navy.
        Padding: <span style={S.mono}>ov-card--compact</span> / <span style={S.mono}>--standard</span> / <span style={S.mono}>--large</span>.
        Title: <span style={S.mono}>&lt;h3 class="ov-card__title"&gt;</span>. In-card nav → <span style={S.mono}>ov-text-link</span>; actions → <span style={S.mono}>ov-btn</span>.
      </Wpb>
      <div style={{ height: 20 }} />

      <div style={{ ...S.card, background: 'var(--ov-surface-tint)' }}>
        <div style={S.cardHd}>White card — sits on surface-tint</div>
        <div style={{
          background: '#fff', borderRadius: 14, border: '1px solid rgba(13,31,78,.08)',
          padding: '28px 32px', maxWidth: 360,
        }}>
          <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 18, letterSpacing: '-0.01em', margin: '0 0 8px', color: 'var(--ov-navy-900)' }}>Card title</h3>
          <p style={{ margin: 0, fontSize: 14 }}>Standard content card on soft tint sections.</p>
        </div>
        <div style={S.note}>
          <span style={S.mono}>background: &apos;#fff&apos;</span> · <span style={S.mono}>borderRadius: 14</span> · <span style={S.mono}>border: 1px solid rgba(13,31,78,.08)</span>
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Teal-tint card — sits on white</div>
        <div style={{
          background: 'rgba(112,186,191,0.2)', borderRadius: 14, border: '1px solid rgba(112,186,191,.25)',
          padding: '28px 32px', maxWidth: 360,
        }}>
          <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 18, letterSpacing: '-0.01em', margin: '0 0 8px', color: 'var(--ov-navy-900)' }}>Highlight card</h3>
          <p style={{ margin: 0, fontSize: 14 }}>Feature callouts, tip boxes, secondary content blocks.</p>
        </div>
        <div style={S.note}>
          <span style={S.mono}>background: rgba(112,186,191,0.2)</span> · <span style={S.mono}>borderRadius: 14</span> · teal border
        </div>
      </div>

      <div style={{ ...S.card, background: 'var(--ov-navy-1000)' }}>
        <div style={{ ...S.cardHd, color: 'rgba(255,255,255,0.5)' }}>Dark card — sits on navy</div>
        <div style={{
          background: 'rgba(255,255,255,.05)', borderRadius: 16, border: '1px solid rgba(255,255,255,.08)',
          padding: '28px 32px', maxWidth: 360,
        }}>
          <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 18, letterSpacing: '-0.01em', margin: '0 0 8px', color: '#F2FCFF' }}>On dark</h3>
          <p style={{ margin: 0, fontSize: 14, color: 'rgba(242,252,255,.7)' }}>Glass-style cards for navy feature bands.</p>
        </div>
        <div style={{ ...S.note, color: 'rgba(255,255,255,0.65)' }}>
          <span style={S.mono}>background: rgba(255,255,255,.05)</span> · <span style={S.mono}>borderRadius: 16</span> · white border at 8%
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Padding scale & card CTAs</div>
        <div style={S.note}>
          Compact <span style={S.mono}>20px 24px</span> · Standard <span style={S.mono}>24px 22px 20px</span> · Large <span style={S.mono}>28px 32px</span><br />
          Titles: use <span style={S.mono}>&lt;h3&gt;</span> with display font ~18–19px.<br />
          Inside cards: navigation → <span style={S.mono}>TextLink</span>; primary action → <span style={S.mono}>PillGhost</span> / <span style={S.mono}>PillMint</span> — no raw styled buttons.
        </div>
      </div>
    </div>
  );
}

// ── PILLS & BADGES ────────────────────────────────────────────────────────────

function Pills() {
  return (
    <div id="pills" style={S.section}>
      <h2 style={S.h2}>Pills & Badges</h2>
      <Wpb>
        Badges: <span style={S.mono}>ov-badge</span> · <span style={S.mono}>ov-badge--teal</span> · <span style={S.mono}>ov-badge--hero</span>.
        Tabs: <span style={S.mono}>nav.ov-tabs</span> with <span style={S.mono}>.is-active</span> on the current link (recipes.html).
      </Wpb>
      <div style={{ height: 20 }} />

      <div style={S.card}>
        <div style={S.cardHd}>Tab underline pattern (Contact / Client Resources)</div>
        <div style={{ display: 'flex', gap: 4, marginBottom: 16, borderBottom: '1px solid #e8e5e5' }}>
          <button type="button" className="ov-contact-tab" style={{ padding: '14px 20px', border: 'none', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#001F54', background: 'transparent', borderBottom: '3px solid #2494C1', cursor: 'pointer', marginBottom: -1 }}>Downloads</button>
          <button type="button" className="ov-contact-tab" style={{ padding: '14px 20px', border: 'none', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#001F54', background: 'transparent', borderBottom: '1px solid transparent', cursor: 'pointer', marginBottom: -1 }}>Rates</button>
          <button type="button" className="ov-contact-tab" style={{ padding: '14px 20px', border: 'none', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#001F54', background: 'transparent', borderBottom: '1px solid transparent', cursor: 'pointer', marginBottom: -1 }}>Glossary</button>
        </div>
        <div style={S.note}>
          Active: bottom border 3px solid #2494C1 · Inactive: transparent · Font: PP Mori 600 13px · Focus: <span style={S.mono}>.ov-contact-tab:focus-visible</span>
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Hero carousel dots</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <div className="ov-hero-dot" style={{ width: 22, height: 8, borderRadius: 4, background: '#2494C1' }} />
          <div className="ov-hero-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#CFD5EA' }} />
          <div className="ov-hero-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#CFD5EA' }} />
        </div>
        <div style={S.note}>
          Active 22×8 pill · Inactive 8×8 circle · Hit area via <span style={S.mono}>.ov-hero-dot::before</span> inset -18px
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Badge chips</div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: 99, background: 'rgba(13,31,78,0.06)', color: '#1A3070' }}>Since 1987</span>
          <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: 99, background: 'rgba(13,31,78,0.06)', color: '#1A3070' }}>A-Rated</span>
          <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: 99, background: 'rgba(112,186,191,.12)', border: '1px solid rgba(112,186,191,.2)', color: '#70BABF' }}>Strategy term</span>
        </div>
        <div style={S.note}>
          Light chip for dropdowns / meta · Teal outline chip for strategy terms (product pages)
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>PageHero badge prop</div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,31,84,.45)', border: '1px solid rgba(255,255,255,.22)', borderRadius: 200, padding: '5px 12px' }}>
          <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#F2FCFF' }}>New</span>
        </div>
        <div style={S.note}>
          Optional <span style={S.mono}>badge</span> on PageHero — frosted pill above eyebrow on image heroes
        </div>
      </div>
    </div>
  );
}

// ── FORMS ─────────────────────────────────────────────────────────────────────

function Forms() {
  const lightInput = {
    width: '100%', boxSizing: 'border-box', height: 44, padding: '0 14px', borderRadius: 10,
    border: '1px solid rgba(107,126,160,0.3)', background: '#fff',
    fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: 'var(--ov-navy-900)', outline: 'none',
  };
  return (
    <div id="forms" style={S.section}>
      <h2 style={S.h2}>Forms</h2>
      <Wpb>
        Light fields: class <span style={S.mono}>ov-input</span> / <span style={S.mono}>ov-textarea</span> + <span style={S.mono}>ov-label</span>, or style CF7/Gravity via the shared CSS selectors in the package.
        Dark: <span style={S.mono}>ov-input--dark</span> or place the form inside <span style={S.mono}>ov-bg-navy</span> / footer band. Recipe block 14 in <span style={S.mono}>recipes.html</span>.
      </Wpb>
      <div style={{ height: 20 }} />

      <div style={{ ...S.card, background: 'var(--ov-footer-bg)' }}>
        <div style={{ ...S.cardHd, color: 'rgba(255,255,255,0.5)' }}>Newsletter — dark (Footer)</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 400 }}>
          <label style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#fff' }}>Email Address</label>
          <input type="email" placeholder="you@email.com" readOnly style={{
            height: 44, padding: '0 14px', borderRadius: 6,
            border: '1px solid rgba(255,255,255,.18)',
            background: 'rgba(255,255,255,.06)', color: '#fff',
            fontFamily: 'var(--ov-ff-sans)', fontSize: 16, outline: 'none',
          }} />
        </div>
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: 'rgba(255,255,255,.5)', marginTop: 16, lineHeight: 1.7 }}>
          Input height 44 · radius 6 · border rgba(255,255,255,.18) · bg rgba(255,255,255,.06)<br />
          Submit: white pill · navy text · height 44 · PP Mori 600 14px
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Contact / light form inputs</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
          <div>
            <label style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: 'var(--ov-navy-900)', display: 'block', marginBottom: 6 }}>Full Name</label>
            <input type="text" placeholder="Your name" readOnly style={lightInput} />
          </div>
          <div>
            <label style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: 'var(--ov-navy-900)', display: 'block', marginBottom: 6 }}>Message</label>
            <textarea placeholder="Tell us how we can help…" readOnly style={{
              ...lightInput, height: 'auto', minHeight: 100, padding: '12px 14px', resize: 'vertical',
            }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <input type="checkbox" id="ds-consent" style={{ marginTop: 3 }} />
            <label htmlFor="ds-consent" style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.5 }}>
              Consent checkbox pattern (email capture / legal pages)
            </label>
          </div>
        </div>
        <div style={S.note}>
          Height 44 · padding 0 14px · border-radius 10 · border rgba(107,126,160,0.3) · bg white<br />
          Label: navy-900 · weight 600 · 13px · Focus: border-color teal-700, outline none
        </div>
      </div>
    </div>
  );
}

// ── LAYOUT ────────────────────────────────────────────────────────────────────

function Layout() {
  return (
    <div id="layout" style={S.section}>
      <h2 style={S.h2}>Layout</h2>
      <Wpb>
        Row Extra class: <span style={S.mono}>ov-section ov-bg-white|ov-bg-tint|ov-bg-navy|ov-bg-footer</span>.
        On navy, add <span style={S.mono}>ov-on-dark</span> for light text. Content width: wrap with <span style={S.mono}>ov-container</span> or theme container.
        Two-up landings: Raw HTML <span style={S.mono}>ov-split</span> / <span style={S.mono}>ov-split--reverse</span> (see recipes).
      </Wpb>
      <div style={{ height: 20 }} />

      <div style={S.card}>
        <div style={S.cardHd}>.ov-container</div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Property</th><th style={S.th}>Value</th></tr></thead>
          <tbody>
            <tr><td style={S.td}>max-width</td><td style={S.td}><span style={S.mono}>var(--ov-container) = 1600px</span> · margin 0 auto</td></tr>
            <tr><td style={S.td}>Default padding</td><td style={S.td}><span style={S.mono}>0 var(--ov-gutter)</span> = 0 120px</td></tr>
            <tr><td style={S.td}>≤ 1840px</td><td style={S.td}><span style={S.mono}>0 60px</span></td></tr>
            <tr><td style={S.td}>≤ 1100px</td><td style={S.td}><span style={S.mono}>0 32px</span></td></tr>
            <tr><td style={S.td}>≤ 720px</td><td style={S.td}><span style={S.mono}>0 var(--ov-gutter-sm)</span> = 0 16px</td></tr>
            <tr><td style={S.td}>≥ 2000px</td><td style={S.td}><span style={S.mono}>0 200px</span></td></tr>
          </tbody>
        </table>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>.ov-hero-wrapper / .ov-hero-card</div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Property</th><th style={S.th}>Value</th></tr></thead>
          <tbody>
            <tr><td style={S.td}>Wrapper default</td><td style={S.td}><span style={S.mono}>padding: 0 20px</span> — full-width gutters</td></tr>
            <tr><td style={S.td}>Wrapper ≥ 1840px</td><td style={S.td}><span style={S.mono}>max-width: 1680px</span> · centered · no side padding</td></tr>
            <tr><td style={S.td}>Card radius</td><td style={S.td}><span style={S.mono}>border-radius: 32px</span></td></tr>
            <tr><td style={S.td}>Card height</td><td style={S.td}>800 default · 580 ≤1100 · 560 ≤720 · 520 ≤480</td></tr>
            <tr><td style={S.td}>Mobile CTAs</td><td style={S.td}>≤720: buttons full-width stack · scrim opacity adjusted</td></tr>
          </tbody>
        </table>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Breakpoints & section spacing</div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Width</th><th style={S.th}>Typical changes</th></tr></thead>
          <tbody>
            <tr><td style={S.td}>1100px</td><td style={S.td}>Container gutters, hero height</td></tr>
            <tr><td style={S.td}>1024px</td><td style={S.td}>Hamburger nav · --ov-section-py → 64px</td></tr>
            <tr><td style={S.td}>960px</td><td style={S.td}>About / product grids stack</td></tr>
            <tr><td style={S.td}>720px</td><td style={S.td}>Gutter 16px · hero mobile · section-py 48px</td></tr>
            <tr><td style={S.td}>480px</td><td style={S.td}>Single column · section-py 36px</td></tr>
          </tbody>
        </table>
        <div style={S.note}>
          Section padding via <span style={S.mono}>.ov-section &#123; padding: var(--ov-section-py) 0 &#125;</span> · default 80px
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Spacing & radii tokens</div>
        <div style={S.note}>
          Spacing: <span style={S.mono}>--ov-sp-1</span>…<span style={S.mono}>--ov-sp-10</span> (4 → 65px)<br />
          Radii: sm 4 · md 6 · lg 10 · xl 12 · pill 200<br />
          Header: <span style={S.mono}>--ov-header-h: 72px</span>
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Landing-page helpers</div>
        <div style={S.note}>
          <span style={S.mono}>.nsg-split</span> / <span style={S.mono}>.nsg-split-reverse</span> — two-column content for National Senior Games (and similar landings); stacks ≤ breakpoint in tokens.css<br />
          Partner landings (Cetera, LPL) share hero card + navy/teal band patterns via <span style={S.mono}>PartnerLandingPage</span>
        </div>
      </div>
    </div>
  );
}

// ── COMPONENT PATTERNS ────────────────────────────────────────────────────────

function Patterns() {
  return (
    <div id="patterns" style={S.section}>
      <h2 style={S.h2}>Component Patterns</h2>
      <Wpb>
        Prefer <span style={S.mono}>recipes.html</span> Raw HTML for hero, CTA banner, and CTA panel.
        Eyebrow in text: <span style={S.mono}>&lt;p class="ov-eyebrow"&gt;</span> or <span style={S.mono}>ov-eyebrow--light</span> on dark.
      </Wpb>
      <div style={{ height: 20 }} />

      <div style={S.card}>
        <div style={S.cardHd}>Eyebrow — common.jsx</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 12 }}>
          <Eyebrow>Default on light</Eyebrow>
          <div style={{ background: 'var(--ov-navy-1000)', padding: 16, borderRadius: 12 }}>
            <Eyebrow light style={{ marginBottom: 0 }}>Light on dark</Eyebrow>
          </div>
        </div>
        <div style={S.note}>
          Dash 18×1px · text PP Mori 600 · 10px · letter-spacing 1.4px · uppercase<br />
          <strong>Default:</strong> line + text #2494C1 · <strong>light:</strong> line rgba(112,186,191,.6) · text #70BABF<br />
          Source: <span style={S.mono}>Eyebrow</span> in common.jsx (Hero / PageHero may inline similar markup)
        </div>
        <Wpb><span style={S.mono}>&lt;p class="ov-eyebrow"&gt;Label&lt;/p&gt;</span> · dark: add <span style={S.mono}>ov-eyebrow--light</span></Wpb>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>PageHero — props</div>
        <pre style={S.pre}>{`<PageHero
  image="assets/hero-couple.jpg"
  imgFocus="65% 35%"
  badge="Optional badge"
  eyebrow="Leadership"
  title="Experience"
  titleAccent="our leadership team."
  subtitle="Optional subtitle text"
  ctaPrimary="View Profile"
  onPrimary={handler}
  ctaSecondary="Secondary"
  onSecondary={handler}
/>`}</pre>
        <div style={S.note}>
          Primary CTA: <span style={S.mono}>PillMint hero</span> · Secondary: <span style={S.mono}>PillGhost light hero</span><br />
          <span style={S.mono}>imgFocus</span> sets background-position at all breakpoints · badge optional frosted pill
        </div>
        <Wpb>
          Do not rebuild with stacked WPBakery elements. Paste hero from <span style={S.mono}>recipes.html</span>
          (<span style={S.mono}>.ov-hero-wrap</span> / <span style={S.mono}>.ov-hero-card</span> / <span style={S.mono}>.ov-hero-title</span>).
        </Wpb>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>CTABanner — live (dark horizontal band)</div>
        <CTABanner
          eyebrow="Get Started"
          title="Protect your retirement"
          titleAccent="with confidence."
          body="Competitive guaranteed rates, principal protection, and dedicated service."
          cta="Explore Products"
          onClick={() => { window.location.hash = 'products'; }}
        />
        <div style={S.note}>
          Navy rounded band · text left / CTA right · stacks on narrow viewports<br />
          CTA is <span style={S.mono}>PillMint hero</span> (not PillNavy) · optional eyebrow + italic titleAccent
        </div>
        <Wpb>
          Raw HTML recipe <span style={S.mono}>.ov-cta-banner</span> — CTA uses <span style={S.mono}>ov-btn ov-btn--mint ov-btn--lg</span>.
        </Wpb>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>CTAPanel — homepage closing band</div>
        <pre style={S.pre}>{`// CTAPanel.jsx — centered navy section, dual CTAs
// Eyebrow with lines on both sides · large display H2
// PillMint hero + PillGhost light hero
// Use on homepage / full-bleed navy closes (not the horizontal CTABanner)`}</pre>
        <div style={S.note}>
          Full-width <span style={S.mono}>var(--ov-navy-1000)</span> · centered max ~720px · dual-audience product/sales CTAs
        </div>
        <Wpb>
          Raw HTML recipe <span style={S.mono}>.ov-cta-panel</span> (full-width navy close; not the same as CTABanner).
        </Wpb>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Divider</div>
        <div style={{ height: 1, background: 'var(--ov-border-soft)', marginBottom: 12, width: '100%' }} />
        <div style={S.note}>
          Light: <span style={S.mono}>var(--ov-border-soft)</span> · Dark: rgba(255,255,255,.12)
        </div>
      </div>

      <div style={{ ...S.card, background: 'var(--ov-surface-tint)' }}>
        <div style={S.cardHd}>Section background rhythm</div>
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.8 }}>
          <div><span style={{ fontWeight: 600, color: 'var(--ov-navy-900)' }}>#fff</span> — default page / section</div>
          <div><span style={{ fontWeight: 600, color: 'var(--ov-navy-900)' }}>var(--ov-surface-tint)</span> — soft blue-grey bands</div>
          <div><span style={{ fontWeight: 600, color: 'var(--ov-navy-900)' }}>var(--ov-navy-1000)</span> — hero / dark feature / CTAPanel</div>
          <div><span style={{ fontWeight: 600, color: 'var(--ov-navy-900)' }}>var(--ov-footer-bg)</span> — footer #001233</div>
          <div><span style={{ fontWeight: 600, color: 'var(--ov-navy-900)' }}>rgba(112,186,191,0.2)</span> — teal cards / strips on white</div>
          <div><span style={{ fontWeight: 600, color: 'var(--ov-navy-900)' }}>var(--ov-surface-cream)</span> — dropdowns / mobile nav</div>
        </div>
      </div>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function DesignPage() {
  const [active, setActive] = useState('wpbakery');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_H - 20;
    window.scrollTo({ top, behavior: 'smooth' });
    setActive(id);
  };

  const wpbSections = SECTIONS.filter(s => s.group === 'wpb');
  const systemSections = SECTIONS.filter(s => s.group === 'system');

  return (
    <div style={S.page}>
      <nav style={S.sidebar} aria-label="Design system sections">
        <div style={S.sbTitle}>WPBakery</div>
        {wpbSections.map(s => (
          <button key={s.id} type="button" onClick={() => scrollTo(s.id)} style={S.sbLink(active === s.id)}>
            {s.label}
          </button>
        ))}
        <div style={{ ...S.sbTitle, marginTop: 24 }}>Design system</div>
        {systemSections.map(s => (
          <button key={s.id} type="button" onClick={() => scrollTo(s.id)} style={S.sbLink(active === s.id)}>
            {s.label}
          </button>
        ))}
      </nav>

      <div style={S.content}>
        <WpBakeryHowTo />
        <Colors />
        <Typography />
        <Buttons />
        <Links />
        <Shadows />
        <Cards />
        <Pills />
        <Forms />
        <Layout />
        <Patterns />
      </div>
    </div>
  );
}
