// DesignPage.jsx — Oceanview Design System reference page
// Sticky sidebar + scrollable content area, matching Figma reference pattern
import { useState } from 'react'

const HEADER_H = 72;

const SECTIONS = [
  { id: 'colors', label: 'Colors' },
  { id: 'typography', label: 'Typography' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'links', label: 'Links' },
  { id: 'shadows', label: 'Shadows' },
  { id: 'pills', label: 'Pills & Badges' },
  { id: 'forms', label: 'Forms' },
  { id: 'layout', label: 'Layout' },
  { id: 'patterns', label: 'Component Patterns' },
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
  table: { width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--ov-ff-sans)', fontSize: 13, marginTop: 12 },
  th: { padding: '10px 12px', fontWeight: 600, color: 'var(--ov-grey-500)', fontSize: 11, letterSpacing: '0.8px', textTransform: 'uppercase', textAlign: 'left', borderBottom: '1px solid rgba(13,31,78,0.08)' },
  td: { padding: '10px 12px', color: 'var(--ov-navy-900)', borderBottom: '1px solid rgba(13,31,78,0.04)', lineHeight: 1.5, fontSize: 13 },
  grid: (min) => ({ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`, gap: 12 }),
};

// ── COLOR SWATCH ──────────────────────────────────────────────────────────────

function Swatch({ name, hex, note }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div style={{ width: 48, height: 48, borderRadius: 12, background: hex, border: '1px solid rgba(13,31,78,0.06)', flexShrink: 0 }} />
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
    ['--ov-navy-1000', '#001F54', 'Deepest — footer bg, card headings'],
    ['--ov-navy-900',  '#0D1F4E', 'Primary text (--ov-fg)'],
    ['--ov-navy-700',  '#16317B', ''],
    ['--ov-navy-600',  '#1A3070', 'Dropdown link color'],
    ['--ov-navy-500',  '#233D7C', 'Header bg, secondary CTA bg'],
    ['--ov-navy-400',  '#223F84', ''],
    ['--ov-navy-300',  '#4472C4', 'Section callout accent'],
  ];
  const TEALS = [
    ['--ov-teal-700', '#1976A0', 'Link color (--ov-link)'],
    ['--ov-teal-600', '#2494C1', 'Info / accent color'],
    ['--ov-teal-500', '#06BCC1', ''],
    ['--ov-teal-400', '#6BBABF', 'Primary CTA bg (--ov-cta-primary-bg)'],
    ['--ov-teal-300', '#71BABF', 'Teal accent text, hero italic'],
  ];
  const GREYS = [
    ['--ov-grey-900', '#212529', ''],
    ['--ov-grey-800', '#333333', ''],
    ['--ov-grey-700', '#2B3A4F', ''],
    ['--ov-grey-600', '#374151', 'Body text (--ov-fg-muted), AA 7.2:1'],
    ['--ov-grey-500', '#6B7280', 'Meta text'],
    ['--ov-grey-400', '#828282', ''],
    ['--ov-grey-150', '#CFD5EA', 'Hero dot inactive'],
  ];
  const SURFACES = [
    ['--ov-surface-0', '#FFFFFF', 'Page bg (--ov-bg)'],
    ['--ov-surface-tint', '#F1FBFF', 'Soft tint bg (--ov-bg-soft)'],
    ['--ov-surface-tint-2', '#F2FCFF', 'On-dark text (--ov-fg-on-dark)'],
    ['--ov-surface-cream', '#F0EEE9', 'Nav sidebar + mobile bg'],
  ];
  const ALIASES = [
    ['--ov-bg',             '--ov-surface-0',      '#FFFFFF'],
    ['--ov-bg-soft',        '--ov-surface-tint',   '#F1FBFF'],
    ['--ov-fg',             '--ov-navy-900',       '#0D1F4E'],
    ['--ov-fg-on-dark',     '--ov-surface-tint-2', '#F2FCFF'],
    ['--ov-fg-muted',       '--ov-grey-600',       '#374151'],
    ['--ov-cta-primary-bg', '--ov-teal-400',       '#6BBABF'],
    ['--ov-cta-primary-fg', '--ov-navy-1000',      '#001F54'],
    ['--ov-link',           '--ov-teal-700',       '#1976A0'],
  ];
  return (
    <div id="colors" style={S.section}>
      <h2 style={S.h2}>Colors</h2>
      <div style={S.card}><div style={S.cardHd}>Navy palette</div><div style={S.grid(220)}>{NAVIES.map(c => <Swatch key={c[0]} name={c[0]} hex={c[1]} note={c[2]} />)}</div></div>
      <div style={S.card}><div style={S.cardHd}>Teal / Cyan palette</div><div style={S.grid(220)}>{TEALS.map(c => <Swatch key={c[0]} name={c[0]} hex={c[1]} note={c[2]} />)}</div></div>
      <div style={S.card}><div style={S.cardHd}>Grey palette</div><div style={S.grid(220)}>{GREYS.map(c => <Swatch key={c[0]} name={c[0]} hex={c[1]} note={c[2]} />)}</div></div>
      <div style={S.card}><div style={S.cardHd}>Surface colors</div><div style={S.grid(220)}>{SURFACES.map(c => <Swatch key={c[0]} name={c[0]} hex={c[1]} note={c[2]} />)}</div></div>
      <div style={S.card}>
        <div style={S.cardHd}>Semantic aliases</div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Token</th><th style={S.th}>Maps To</th><th style={S.th}>Value</th></tr></thead>
          <tbody>{ALIASES.map(r => <tr key={r[0]}>{r.map((c,i) => <td key={i} style={{...S.td, fontFamily: i < 2 ? 'ui-monospace, monospace' : 'var(--ov-ff-sans)', fontSize: 12}}>{c}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}

// ── TYPOGRAPHY ────────────────────────────────────────────────────────────────

function Typography() {
  const SCALE = [
    ['h1', '--ov-fz-h1 (48px)', 'PP Editorial New', 'clamp(32px, 4vw, 48px)', '400', '1.16', '-0.025em'],
    ['h2', '--ov-fz-h2 (42px)', 'PP Editorial New', 'clamp(26px, 3vw, 42px)', '400', '1.1', '-0.025em'],
    ['h3', '--ov-fz-h3 (36px)', 'PP Editorial New', 'clamp(18px, 2vw, 36px)', '400', '1.16', '-0.025em'],
    ['h4', '--ov-fz-h4 (28px)', 'PP Editorial New', '28px', '400', '1.16', '0'],
    ['h5', '--ov-fz-h5 (24px)', 'PP Editorial New', '24px', '400', '1.16', '0'],
    ['p (body)', '--ov-fz-body (16px)', 'PP Mori', '16px', '400', '1.6', '0'],
    ['Body Large', '--ov-fz-body-lg (18px)', 'PP Mori', '18px', '400', '1.65', '0'],
    ['Body Small', '--ov-fz-body-sm (14px)', 'PP Mori', '14px', '400', '1.5', '0'],
    ['Meta', '--ov-fz-meta (13px)', 'PP Mori', '13px', '400', '1.5', '0'],
    ['Caption', '--ov-fz-caption (12px)', 'PP Mori', '12px', '400', '1.4', '0'],
    ['Eyebrow (.ov-eyebrow)', '--ov-fz-eyebrow (16px)', 'PP Mori', '16px', '600', '1.0', '0.10em, uppercase'],
    ['Hero Title', 'inline', 'PP Editorial New', 'clamp(28px, 8vw, 63px)', '800', '1.1', '0'],
    ['PageHero Title', 'inline', 'PP Editorial New', 'clamp(28px, 4vw, 63px)', '800', '1.1', '0'],
  ];
  return (
    <div id="typography" style={S.section}>
      <h2 style={S.h2}>Typography</h2>
      <div style={S.card}>
        <div style={S.cardHd}>Font families</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <div style={{ fontFamily: 'PP Editorial New', fontWeight: 400, fontSize: 32, color: '#0D1F4E', lineHeight: 1.1 }}>PP Editorial New</div>
            <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', marginTop: 4 }}>Brand display serif — used for all headings (h1–h6, .ov-h1–.ov-h5).</div>
            <div style={{ fontFamily: 'PP Mori', fontSize: 12, color: 'var(--ov-grey-500)' }}>Weights: 200 (Ultralight), 400 (Regular), 800 (Ultrabold) + italic variants. Via src/fonts/.</div>
          </div>
          <div style={{ height: 1, background: 'rgba(13,31,78,0.08)' }} />
          <div>
            <div style={{ fontFamily: 'PP Mori', fontWeight: 600, fontSize: 32, color: '#0D1F4E', lineHeight: 1.1 }}>PP Mori</div>
            <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', marginTop: 4 }}>Brand sans — body text, UI, buttons, navigation, eyebrow.</div>
            <div style={{ fontFamily: 'PP Mori', fontSize: 12, color: 'var(--ov-grey-500)' }}>Weights: 200 (Extralight), 400 (Regular), 600 (Semibold), 900 (Black) + italic variants.</div>
          </div>
        </div>
      </div>
      <div style={S.card}>
        <div style={S.cardHd}>Type scale — with responsive clamp values</div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Element</th><th style={S.th}>Token</th><th style={S.th}>Font</th><th style={S.th}>Size</th><th style={S.th}>Weight</th><th style={S.th}>Line</th><th style={S.th}>Tracking</th></tr></thead>
          <tbody>{SCALE.map((r,i) => <tr key={i}>{r.map((c,j) => <td key={j} style={S.td}>{c}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <div style={S.card}>
        <div style={S.cardHd}>Responsive font formula</div>
        <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 14, color: 'var(--ov-navy-900)', marginBottom: 8 }}>vw% = target_px / design_width × 100</div>
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.6 }}>
          E.g. 48px target at 1440px = 3.33vw → <span style={{ fontFamily: 'ui-monospace, monospace' }}>clamp(32px, 3.33vw, 48px)</span><br />
          Hero uses 8vw; PageHero uses 4vw for a more refined inner-page scale.
        </div>
      </div>
      <div style={S.card}>
        <div style={S.cardHd}>Global button text</div>
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.6 }}>
          All buttons use <strong>PP Mori 600 (Semibold)</strong> with letter-spacing: 0.02em ·<br />
          PillMint/Navy: 15px · Small: 14px · TextLink: 15px
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

      <div style={S.card}>
        <div style={S.cardHd}>PillMint — Primary CTA (teal, all backgrounds)</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <button style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            border: '1.5px solid transparent', borderRadius: 200, boxSizing: 'border-box',
            fontFamily: 'PP Mori', fontWeight: 600, letterSpacing: '.02em', whiteSpace: 'nowrap',
            cursor: 'pointer', padding: '14px 30px', fontSize: 15,
            background: 'var(--ov-teal-400)', color: 'var(--ov-navy-1000)',
          }}>Explore Products</button>
          <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.7 }}>
            <strong>Default:</strong> bg=#6BBABF, color=#001F54<br />
            <strong>Hover:</strong> translateY(-2px) + box-shadow: 0 8px 28px rgba(107,186,191,.45)<br />
            <strong>Active:</strong> translateY(0) + inset 0 1px 0 rgba(0,0,0,.10)<br />
            <strong>Hero:</strong> 15px/20px 40px · <strong>Inline:</strong> 14px/12px 28px
          </div>
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>PillNavy — Secondary CTA (navy, light backgrounds)</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <button style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            border: '1.5px solid transparent', borderRadius: 200, boxSizing: 'border-box',
            fontFamily: 'PP Mori', fontWeight: 600, letterSpacing: '.02em', whiteSpace: 'nowrap',
            cursor: 'pointer', padding: '14px 30px', fontSize: 15,
            background: 'var(--ov-navy-500)', color: 'var(--ov-surface-tint-2)',
          }}>Learn More</button>
          <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.7 }}>
            <strong>Default:</strong> bg=#233D7C, color=#F2FCFF<br />
            <strong>Hover:</strong> translateY(-2px) + box-shadow: 0 8px 32px rgba(35,61,124,.35)
          </div>
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>PillGhost — Outline CTA (light backgrounds)</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <button style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            borderRadius: 200, boxSizing: 'border-box', fontFamily: 'PP Mori', fontWeight: 600,
            letterSpacing: '.02em', whiteSpace: 'nowrap', cursor: 'pointer',
            padding: '14px 30px', fontSize: 15, background: 'transparent',
            color: 'var(--ov-navy-900)', border: '1.5px solid var(--ov-navy-900)',
          }}>Contact Us</button>
          <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.7 }}>
            <strong>Default:</strong> transparent, border: 1.5px solid #0D1F4E, color: #0D1F4E<br />
            <strong>Hover:</strong> bg: #0D1F4E, color: #fff, box-shadow: 0 8px 24px rgba(13,31,78,.2)
          </div>
        </div>
      </div>

      <div style={{ ...S.card, background: 'var(--ov-navy-1000)' }}>
        <div style={{ ...S.cardHd, color: 'rgba(255,255,255,0.5)' }}>PillGhost Light — Outline CTA (dark / image backgrounds)</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <button style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            borderRadius: 200, boxSizing: 'border-box', fontFamily: 'PP Mori', fontWeight: 600,
            letterSpacing: '.02em', whiteSpace: 'nowrap', cursor: 'pointer',
            padding: '14px 30px', fontSize: 15, background: 'rgba(255,255,255,.10)',
            color: '#fff', border: '1.5px solid rgba(255,255,255,.35)', backdropFilter: 'blur(4px)',
          }}>Get Started</button>
          <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
            <strong>Default:</strong> bg: rgba(255,255,255,.10), border: rgba(255,255,255,.35), color: #fff, backdrop-filter: blur(4px)<br />
            <strong>Hover:</strong> bg: rgba(255,255,255,.20), border: rgba(255,255,255,.65)
          </div>
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>.ov-btn base architecture</div>
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.7 }}>
          All buttons extend <span style={{ fontFamily: 'ui-monospace, monospace' }}>.ov-btn</span>:<br />
          • display: inline-flex · border-radius: 200px · font-weight: 600 · letter-spacing: .02em<br />
          • transition: transform .18s, box-shadow .18s, background .15s, color .15s<br />
          • focus-visible: 2px solid currentColor ring, 3px offset · disabled: opacity .4, pointer-events none<br />
          • Size variants: <span style={{ fontFamily: 'ui-monospace, monospace' }}>.ov-btn--sm</span> (12px 28px, 14px) · <span style={{ fontFamily: 'ui-monospace, monospace' }}>.ov-btn--lg</span> (20px 40px, 15px)
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

      <div style={S.card}>
        <div style={S.cardHd}>.ov-text-link — standalone action links (outside paragraph copy)</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginBottom: 12 }}>
          <span style={{ fontFamily: 'PP Mori', fontWeight: 600, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1976A0', cursor: 'pointer' }}>
            Get Directions <span style={{ fontFamily: 'PP Mori', letterSpacing: '-.01em' }}>→</span>
          </span>
          <span style={{ fontFamily: 'PP Mori', fontWeight: 600, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1976A0', cursor: 'pointer' }}>
            Explore Products <span style={{ fontFamily: 'PP Mori', letterSpacing: '-.01em' }}>→</span>
          </span>
        </div>
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.7 }}>
          <strong>Default:</strong> color: #1976A0 (--ov-link) · font-weight: 600 · font-size: 15px · no underline · gap: 8px<br />
          <strong>Hover:</strong> color: #1976A0 (--ov-teal-700) · arrow → translateX(4px)<br />
          <strong>Focus:</strong> 2px solid currentColor outline, 2px offset<br />
          <strong>Use:</strong> Card CTAs, section links — NOT inside paragraph text
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Inline links — embedded in paragraph copy</div>
        <div style={{ fontFamily: 'PP Mori', fontSize: 15, color: 'var(--ov-grey-600)', lineHeight: 1.65, marginBottom: 12 }}>
          Contact our <a href="#" onClick={e => e.preventDefault()} style={{ color: '#1976A0', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>sales team</a> for current rates and product availability.
        </div>
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.7 }}>
          <strong>Rule:</strong> underline always visible (WCAG 1.4.1 — color alone insufficient in body copy)<br />
          <strong>Style:</strong> color: #1976A0 · font-weight: 600 · underline · underline-offset: 2px
        </div>
      </div>

      <div style={{ ...S.card, background: 'var(--ov-footer-bg)' }}>
        <div style={{ ...S.cardHd, color: 'rgba(255,255,255,0.5)' }}>Footer links — dark background context</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
          <a href="#" onClick={e => e.preventDefault()} style={{ fontFamily: 'PP Mori', fontSize: 13.5, color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}>Case Studies</a>
          <a href="#" onClick={e => e.preventDefault()} style={{ fontFamily: 'PP Mori', fontSize: 13.5, color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}>Downloads</a>
        </div>
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'rgba(255,255,255,.5)' }}>
          <strong>Default:</strong> font-size: 13.5px · color: rgba(255,255,255,.7) · no underline<br />
          <strong>Hover:</strong> color: #fff
        </div>
      </div>
    </div>
  );
}

// ── SHADOWS ───────────────────────────────────────────────────────────────────

function Shadows() {
  const shadows = [
    ['--ov-shadow-card',   '0 24px 60px 0 rgba(13, 31, 78, 0.12)', 'Dropdown panels, content cards'],
    ['--ov-shadow-cover',  '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 'Hero cover / overlay panels'],
    ['--ov-shadow-button', '0 2px 8px 0 rgba(13, 31, 78, 0.10)', 'Default button elevation'],
    ['--ov-shadow-press',  'inset 0 1px 0 rgba(0, 0, 0, 0.10)', 'Button active/pressed state'],
  ];
  return (
    <div id="shadows" style={S.section}>
      <h2 style={S.h2}>Shadows</h2>
      <div style={S.grid(260)}>
        {shadows.map(s => (
          <div key={s[0]} style={{ background: '#fff', borderRadius: 16, padding: 24, boxShadow: s[1] }}>
            <div style={{ fontFamily: 'PP Mori', fontWeight: 600, fontSize: 15, color: 'var(--ov-navy-900)', marginBottom: 8, lineHeight: 1.3 }}>{s[0]}</div>
            <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.5, marginBottom: 6 }}>{s[2]}</div>
            <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12, color: 'var(--ov-grey-500)' }}>{s[1]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PILLS & BADGES ────────────────────────────────────────────────────────────

function Pills() {
  return (
    <div id="pills" style={S.section}>
      <h2 style={S.h2}>Pills & Badges</h2>

      <div style={S.card}>
        <div style={S.cardHd}>Filter pills — ScrollNav tab pattern (ClientResourcesPage)</div>
        <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
          <button style={{ padding: '14px 20px', border: 'none', fontFamily: 'PP Mori', fontWeight: 600, fontSize: 13, color: '#001F54', background: 'transparent', borderBottom: '3px solid #2494C1', cursor: 'pointer' }}>Downloads</button>
          <button style={{ padding: '14px 20px', border: 'none', fontFamily: 'PP Mori', fontWeight: 600, fontSize: 13, color: '#001F54', background: 'transparent', borderBottom: '1px solid #e8e5e5', cursor: 'pointer' }}>Rates</button>
          <button style={{ padding: '14px 20px', border: 'none', fontFamily: 'PP Mori', fontWeight: 600, fontSize: 13, color: '#001F54', background: 'transparent', borderBottom: '1px solid #e8e5e5', cursor: 'pointer' }}>Glossary</button>
        </div>
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.7 }}>
          <strong>Active:</strong> border-bottom: 3px solid #2494C1 · bg: rgba(226,241,242,0.6) (on hover)<br />
          <strong>Inactive:</strong> border-bottom: 1px solid #e8e5e5<br />
          <strong>Font:</strong> PP Mori 600 · 13px · color: #001F54 · Hover: bg = rgba(226,241,242,0.35)
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Hero carousel dots — active / inactive</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <div style={{ width: 22, height: 8, borderRadius: 4, background: '#2494C1' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#CFD5EA' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#CFD5EA' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#CFD5EA' }} />
        </div>
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.7 }}>
          <strong>Active:</strong> 22×8px, border-radius: 4px, bg: #2494C1<br />
          <strong>Inactive:</strong> 8×8px, border-radius: 50%, bg: #CFD5EA<br />
          <strong>Hit area:</strong> 44px via pseudo-element inset(-18px) for touch targets
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Badge chips — used as eyebrow right element</div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          <span style={{ fontFamily: 'PP Mori', fontWeight: 600, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: 99, background: 'rgba(13,31,78,0.06)', color: '#1A3070' }}>Since 1987</span>
          <span style={{ fontFamily: 'PP Mori', fontWeight: 600, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: 99, background: 'rgba(13,31,78,0.06)', color: '#1A3070' }}>A-Rated</span>
          <span style={{ fontFamily: 'PP Mori', fontWeight: 600, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: 99, background: 'rgba(13,31,78,0.06)', color: '#1A3070' }}>Family-Owned</span>
        </div>
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.7 }}>
          <strong>Style:</strong> PP Mori 600 · 11px · letter-spacing: 0.06em · uppercase · padding: 3px 9px · border-radius: 99px<br />
          <strong>Bg:</strong> rgba(13,31,78,0.06) · color: #1A3070 · Used in About dropdown sidebar
        </div>
      </div>
    </div>
  );
}

// ── FORMS ─────────────────────────────────────────────────────────────────────

function Forms() {
  return (
    <div id="forms" style={S.section}>
      <h2 style={S.h2}>Forms</h2>

      <div style={{ ...S.card, background: 'var(--ov-footer-bg)' }}>
        <div style={{ ...S.cardHd, color: 'rgba(255,255,255,0.5)' }}>Newsletter input — dark background (Footer.jsx)</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 400 }}>
          <label style={{ fontFamily: 'PP Mori', fontWeight: 600, fontSize: 13, color: '#fff' }}>Email Address</label>
          <input type="email" placeholder="you@email.com" style={{
            height: 44, padding: '0 14px', borderRadius: 6,
            border: '1px solid rgba(255,255,255,.18)',
            background: 'rgba(255,255,255,.06)', color: '#fff',
            fontFamily: 'PP Mori', fontSize: 16, outline: 'none',
          }} />
        </div>
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'rgba(255,255,255,.5)', marginTop: 16, lineHeight: 1.7 }}>
          <strong>Input:</strong> height: 44px · padding: 0 14px · border-radius: 6px<br />
          <strong>Border:</strong> 1px solid rgba(255,255,255,.18) · bg: rgba(255,255,255,.06)<br />
          <strong>Placeholder:</strong> color: rgba(255,255,255,.85) via .ov-footer-form-row input::placeholder<br />
          <strong>Button:</strong> height: 44px · bg: #fff · color: var(--ov-navy-1000) · border-radius: 200px · PP Mori 600 14px
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Contact form inputs (light background)</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
          <div>
            <label style={{ fontFamily: 'PP Mori', fontWeight: 600, fontSize: 13, color: 'var(--ov-navy-900)', display: 'block', marginBottom: 6 }}>Full Name</label>
            <input type="text" placeholder="Your name" style={{
              width: '100%', boxSizing: 'border-box', height: 44, padding: '0 14px', borderRadius: 10,
              border: '1px solid rgba(107,126,160,0.3)', background: '#fff',
              fontFamily: 'PP Mori', fontSize: 15, color: 'var(--ov-navy-900)', outline: 'none',
            }} />
          </div>
          <div>
            <label style={{ fontFamily: 'PP Mori', fontWeight: 600, fontSize: 13, color: 'var(--ov-navy-900)', display: 'block', marginBottom: 6 }}>Message</label>
            <textarea placeholder="Tell us how we can help…" style={{
              width: '100%', boxSizing: 'border-box', minHeight: 100, padding: '12px 14px', borderRadius: 10,
              border: '1px solid rgba(107,126,160,0.3)', background: '#fff', resize: 'vertical',
              fontFamily: 'PP Mori', fontSize: 15, color: 'var(--ov-navy-900)', outline: 'none',
            }} />
          </div>
        </div>
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', marginTop: 16, lineHeight: 1.7 }}>
          <strong>Input class:</strong> px-[14px] py-[12px] rounded-[10px] border border-[rgba(107,126,160,0.3)] bg-white<br />
          <strong>Placeholder:</strong> color similar to --ov-navy-900 at 30% opacity<br />
          <strong>Focus:</strong> border-color: --ov-teal-700 · transition-colors · outline: none<br />
          <strong>Label:</strong> color: --ov-navy-900 · font-weight: 600 · font-size: 13px · PP Mori
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

      <div style={S.card}>
        <div style={S.cardHd}>.ov-container — max-width + responsive padding</div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Property</th><th style={S.th}>Value</th></tr></thead>
          <tbody>
            <tr><td style={S.td}>max-width</td><td style={S.td}><span style={{ fontFamily: 'ui-monospace, monospace' }}>var(--ov-container) = 1600px</span> · margin: 0 auto</td></tr>
            <tr><td style={S.td}>Default padding</td><td style={S.td}><span style={{ fontFamily: 'ui-monospace, monospace' }}>0 var(--ov-gutter) = 0 120px</span></td></tr>
            <tr><td style={S.td}>≤ 1840px</td><td style={S.td}><span style={{ fontFamily: 'ui-monospace, monospace' }}>0 60px</span></td></tr>
            <tr><td style={S.td}>≤ 1100px</td><td style={S.td}><span style={{ fontFamily: 'ui-monospace, monospace' }}>0 32px</span></td></tr>
            <tr><td style={S.td}>≤ 720px</td><td style={S.td}><span style={{ fontFamily: 'ui-monospace, monospace' }}>0 var(--ov-gutter-sm) = 0 16px</span></td></tr>
            <tr><td style={S.td}>≥ 2000px</td><td style={S.td}><span style={{ fontFamily: 'ui-monospace, monospace' }}>0 200px</span></td></tr>
          </tbody>
        </table>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>.ov-hero-wrapper — independent hero layout</div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Property</th><th style={S.th}>Value</th></tr></thead>
          <tbody>
              <tr><td style={S.td}>Default ({'<'} 1840px)</td><td style={S.td}><span style={{ fontFamily: 'ui-monospace, monospace' }}>max-width: none · margin: 0 · padding: 0 20px</span> — full-width with 20px gutters</td></tr>
            <tr><td style={S.td}>≥ 1840px</td><td style={S.td}><span style={{ fontFamily: 'ui-monospace, monospace' }}>max-width: 1680px · margin: 0 auto · padding: 0</span> — capped + centered</td></tr>
            <tr><td style={S.td}>Card (ov-hero-card)</td><td style={S.td}><span style={{ fontFamily: 'ui-monospace, monospace' }}>border-radius: 32px · overflow: hidden</span></td></tr>
            <tr><td style={S.td}>Card height: default</td><td style={S.td}>800px</td></tr>
            <tr><td style={S.td}>Card: ≤ 1100px</td><td style={S.td}>580px</td></tr>
            <tr><td style={S.td}>Card: ≤ 720px</td><td style={S.td}>560px</td></tr>
            <tr><td style={S.td}>Card: ≤ 480px</td><td style={S.td}>520px</td></tr>
          </tbody>
        </table>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Breakpoints</div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Name</th><th style={S.th}>Width</th><th style={S.th}>What changes</th></tr></thead>
          <tbody>
            <tr><td style={S.td}>1100px</td><td style={S.td}><span style={{ fontFamily: 'ui-monospace, monospace' }}>max-width: 1100px</span></td><td style={S.td}>Container gutters tighten, hero height drops, content padding adjusts</td></tr>
            <tr><td style={S.td}>1024px</td><td style={S.td}><span style={{ fontFamily: 'ui-monospace, monospace' }}>max-width: 1024px</span></td><td style={S.td}>Mobile nav toggle (hamburger) becomes visible</td></tr>
            <tr><td style={S.td}>960px</td><td style={S.td}><span style={{ fontFamily: 'ui-monospace, monospace' }}>max-width: 960px</span></td><td style={S.td}>About page grids stack vertically, products grid tightens</td></tr>
            <tr><td style={S.td}>720px</td><td style={S.td}><span style={{ fontFamily: 'ui-monospace, monospace' }}>max-width: 720px</span></td><td style={S.td}>Container gutter to 16px, hero scrim changes, nav/hamburger visible</td></tr>
            <tr><td style={S.td}>480px</td><td style={S.td}><span style={{ fontFamily: 'ui-monospace, monospace' }}>max-width: 480px</span></td><td style={S.td}>Hero height minimum, grids to single column, footer stacking</td></tr>
          </tbody>
        </table>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Section spacing</div>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Breakpoint</th><th style={S.th}>--ov-section-py</th></tr></thead>
          <tbody>
            <tr><td style={S.td}>Default</td><td style={S.td}>80px</td></tr>
            <tr><td style={S.td}>≤ 1024px</td><td style={S.td}>64px</td></tr>
            <tr><td style={S.td}>≤ 720px</td><td style={S.td}>48px</td></tr>
            <tr><td style={S.td}>≤ 480px</td><td style={S.td}>36px</td></tr>
          </tbody>
        </table>
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', marginTop: 12 }}>
          Applied via <span style={{ fontFamily: 'ui-monospace, monospace' }}>.ov-section &#123; padding: var(--ov-section-py) 0 &#125;</span>
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

      <div style={S.card}>
        <div style={S.cardHd}>Eyebrow — dashed-teal + uppercase label pattern</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <div style={{ width: 18, height: 1, background: 'rgba(112,186,191,.65)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'PP Mori', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#70BABF' }}>
            Section Label
          </span>
        </div>
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.7 }}>
          <strong>Dash:</strong> 18×1px · bg: rgba(112,186,191,.65) · flexShrink: 0<br />
          <strong>Text:</strong> PP Mori 600 · 10px · letter-spacing: 1.4px · uppercase · color: #70BABF<br />
          <strong>Gap:</strong> 8px between dash and text<br />
          <strong>Source:</strong> Eyebrow component in common.jsx · SlideEyebrow in Hero.jsx
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>PageHero — configurable props</div>
        <pre style={{ background: 'var(--ov-navy-1000)', color: '#f2fcff', borderRadius: 12, padding: '16px 20px', fontFamily: 'ui-monospace, monospace', fontSize: 13, lineHeight: 1.65, overflowX: 'auto' }}>
{`<PageHero
  image="assets/hero-couple.jpg"
  imgFocus="65% 35%"
  eyebrow="Leadership"
  title="Experience"
  titleAccent="our leadership team."
  subtitle="Optional subtitle text"
  ctaPrimary="View Profile"
  onPrimary={handler}
/>`}
        </pre>
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', marginTop: 12, lineHeight: 1.7 }}>
          <strong>image:</strong> background image URL · <strong>imgFocus:</strong> CSS background-position (e.g. "65% 35%") — optional, defaults to "center"<br />
          <strong>eyebrow:</strong> uppercase label with teal dash · <strong>title:</strong> heading text<br />
          <strong>titleAccent:</strong> italic teal portion after line break · <strong>subtitle:</strong> body text<br />
          <strong>ctaPrimary:</strong> PillMint button · <strong>ctaSecondary:</strong> PillGhost Light button<br />
          <strong>imgFocus:</strong> per-image focal point — works at every viewport without breakpoint hacks
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>CTABanner — inline CTA band</div>
        <pre style={{ background: 'var(--ov-navy-1000)', color: '#f2fcff', borderRadius: 12, padding: '16px 20px', fontFamily: 'ui-monospace, monospace', fontSize: 13, lineHeight: 1.65, overflowX: 'auto' }}>
{`<CTABanner
  eyebrow="Get Started"
  title="Protect your retirement"
  titleAccent="with confidence."
  body="Competitive guaranteed rates..."
  cta="Explore Products"
  onClick={() => { window.location.hash = 'products'; }}
/>`}
        </pre>
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', marginTop: 12, lineHeight: 1.7 }}>
          Used in light backgrounds — 2-col layout (text left, CTA right). Stacked on mobile.<br />
          <strong>Eyebrow:</strong> optional · <strong>titleAccent:</strong> italic teal, optional<br />
          <strong>cta:</strong> PillNavy button · <strong>onClick:</strong> navigation handler
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardHd}>Divider</div>
        <div style={{ height: 1, background: 'rgba(13,31,78,0.12)', marginBottom: 12, width: '100%' }} />
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.7 }}>
          <strong>Class:</strong> inline style or var(--ov-border-soft)<br />
          <strong>Usage:</strong> Between Product links in dropdown panels, between sections inside content cards<br />
          <strong>Light bg:</strong> height: 1px · background: rgba(13,31,78,0.12)<br />
          <strong>Dark bg:</strong> height: 1px · background: rgba(255,255,255,0.12)
        </div>
      </div>

      <div style={{ ...S.card, background: 'var(--ov-surface-tint)' }}>
        <div style={S.cardHd}>Section background rhythm</div>
        <div style={{ fontFamily: 'PP Mori', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.8 }}>
          <div><span style={{ fontWeight: 600, color: 'var(--ov-navy-900)' }}>bg-white</span> — default page and section background</div>
          <div><span style={{ fontWeight: 600, color: 'var(--ov-navy-900)' }}>bg: var(--ov-surface-tint)</span> — soft tint (#F1FBFF), this card</div>
          <div><span style={{ fontWeight: 600, color: 'var(--ov-navy-900)' }}>bg: var(--ov-navy-1000)</span> — hero card / dark feature sections</div>
          <div><span style={{ fontWeight: 600, color: 'var(--ov-navy-900)' }}>bg: var(--ov-footer-bg)</span> — footer (#001233)</div>
          <div><span style={{ fontWeight: 600, color: 'var(--ov-navy-900)' }}>bg: rgba(112,186,191,0.2)</span> — teal card / CTA strip</div>
          <div><span style={{ fontWeight: 600, color: 'var(--ov-navy-900)' }}>bg: var(--ov-surface-cream)</span> — dropdown sidebar / mobile nav bg</div>
        </div>
      </div>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function DesignPage() {
  const [active, setActive] = useState('colors');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_H - 20;
    window.scrollTo({ top, behavior: 'smooth' });
    setActive(id);
  };

  return (
    <div style={S.page}>
      {/* Sidebar */}
      <nav style={S.sidebar}>
        <div style={S.sbTitle}>Jump to</div>
        {SECTIONS.map(s => (
          <button key={s.id} onClick={() => scrollTo(s.id)} style={S.sbLink(active === s.id)}>
            {s.label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <div style={S.content}>
        <Colors />
        <Typography />
        <Buttons />
        <Links />
        <Shadows />
        <Pills />
        <Forms />
        <Layout />
        <Patterns />
      </div>
    </div>
  );
}