import { Eyebrow } from './common.jsx'

// ── Shared styles ─────────────────────────────────────────────────────────────
const S = {
  eyebrowRow:  { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 },
  eyebrowLine: { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' },
  h2:          { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(20px,2vw,28px)', color: '#0D1F4E', letterSpacing: '-0.015em', lineHeight: 1.2, margin: '0 0 16px' },
  h3:          { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#0D1F4E', letterSpacing: '.04em', margin: '24px 0 8px', textTransform: 'uppercase' },
  body:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.75, margin: '0 0 16px' },
  caps:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#4A5568', lineHeight: 1.7, margin: '0 0 16px', fontWeight: 600 },
  divider:     { height: 1, background: 'rgba(13,31,78,.08)', margin: '48px 0' },
  ul:          { fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.75, paddingLeft: 20, margin: '0 0 16px' },
}

// ── Shared section heading component ──────────────────────────────────────────
export function Section({ eyebrow, heading, children }) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 style={S.h2}>{heading}</h2>
      {children}
    </div>
  )
}

// Expose styles so wrapper pages can reference them for inline content
export const LegalS = S

// ── Page shell ────────────────────────────────────────────────────────────────
export default function LegalPage({ title, subtitle, copyright, children }) {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <Eyebrow>Legal</Eyebrow>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,56px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 20px', maxWidth: '20ch' }}>
            {title}
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(14px,1.3vw,16px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '52ch' }}>
            {subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#fff', padding: '0 0 80px' }}>
        <div className="ov-container">
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            {children}
            <div style={S.divider} />
            <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#9CA3AF', lineHeight: 1.65 }}>
              {copyright}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
