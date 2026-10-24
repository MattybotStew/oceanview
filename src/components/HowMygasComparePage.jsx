// HowMygasComparePage.jsx — How Oceanview MYGAs Compare
// Content parity with https://oceanviewlife.com/how-oceanview-mygas-compare/
import PageHero from './PageHero.jsx'
import { PillMint } from './Buttons.jsx'
import {
  RATES_AS_OF, HERO, INTRO, RATE_TABLES, RATE_CONTEXT, RATE_SOURCE,
  CONSIDERATIONS_HEADING, CONSIDERATIONS_SUB, CONSIDERATIONS, CONSIDERATIONS_FOOTNOTE,
  NEXT_STEP, DISCLOSURE_BULLETS, DISCLOSURE_PARAGRAPHS,
} from '../data/mygasCompare.js'

const S = {
  eyebrowRow: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 },
  eyebrowLine: { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow: { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' },
  h2: { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,2.8vw,36px)', color: '#0D1F4E', letterSpacing: '-0.02em', lineHeight: 1.15, margin: 0 },
  body: { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: 0 },
  small: { fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#6B7280', lineHeight: 1.6, margin: 0 },
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="8" cy="8" r="7.5" stroke="#2494C1" strokeOpacity="0.35" />
      <path d="M5 8.2L7.2 10.4L11 5.8" stroke="#2494C1" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Info() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="8" cy="8" r="7" stroke="#2494C1" strokeOpacity="0.55" />
      <path d="M8 5v4M8 11v.5" stroke="#2494C1" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function RateTable({ table }) {
  return (
    <div>
      <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(22px,2.2vw,28px)', color: '#0D1F4E', margin: '0 0 4px', letterSpacing: '-0.01em' }}>{table.heading}</h3>
      <p style={{ ...S.small, marginBottom: 14 }}>{table.scenario}</p>
      <div style={{ overflowX: 'auto', borderRadius: 12, border: '1px solid rgba(13,31,78,.09)', background: '#fff' }}>
        <div style={{ minWidth: 760 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '24% 30% 14% 16% 16%', background: '#001F54', padding: '0 24px', borderRadius: '12px 12px 0 0' }}>
            {['Carrier', 'Product', 'AM Best Rating', 'Guaranteed Term', 'Guaranteed Rate'].map((h, i) => (
              <div key={h} style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1px', textTransform: 'uppercase', color: i === 4 ? '#70BABF' : 'rgba(242,252,255,.6)', padding: '14px 10px 14px 0', textAlign: i === 4 ? 'right' : 'left' }}>{h}</div>
            ))}
          </div>
          {table.rows.map((row, i) => (
            <div key={row.product} style={{ display: 'grid', gridTemplateColumns: '24% 30% 14% 16% 16%', padding: '0 24px', borderTop: i === 0 ? 'none' : '1px solid rgba(13,31,78,.07)', background: row.ov ? 'rgba(112,186,191,.16)' : i % 2 === 0 ? '#fff' : 'rgba(13,31,78,.015)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '16px 10px 16px 0' }}>
                <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, fontWeight: row.ov ? 600 : 400, color: row.ov ? '#0D1F4E' : '#4A5568', lineHeight: 1.45 }}>{row.carrier}</span>
              </div>
              <div style={{ ...S.body, fontSize: 13, padding: '16px 10px 16px 0', color: row.ov ? '#0D1F4E' : '#4A5568' }}>{row.product}</div>
              <div style={{ ...S.body, fontSize: 13, padding: '16px 10px 16px 0' }}>{row.rating}</div>
              <div style={{ ...S.body, fontSize: 13, padding: '16px 10px 16px 0' }}>{row.term}</div>
              <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, fontWeight: 600, color: row.ov ? '#0D1F4E' : '#4A5568', padding: '16px 0', textAlign: 'right' }}>{row.rate}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HowMygasComparePage() {
  return (
    <main>
      <PageHero
        image="assets/pwn-advisor-conversation.jpg"
        imgFocus="center"
        badge={HERO.badge}
        title={HERO.title}
        subtitle={HERO.subtitle}
        ctaPrimary={HERO.ctaPrimary}
        onPrimary={() => { window.location.hash = 'client-resources?tab=rates' }}
        ctaSecondary={HERO.ctaSecondary}
        onSecondary={() => { window.location.hash = 'client-resources?tab=comparisons' }}
      />

      {/* Intro */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={S.eyebrowRow}><div style={S.eyebrowLine} /><span style={S.eyebrow}>{INTRO.eyebrow}</span></div>
            <h2 style={S.h2}>{INTRO.heading}</h2>
            <p style={{ ...S.body, fontSize: 16, marginTop: 20 }}>{INTRO.paragraphs[0]}</p>
            <p style={{ ...S.body, fontSize: 16, marginTop: 14 }}>
              Below is a snapshot comparison of AM Best <strong style={{ color: '#0D1F4E' }}>A rated (or higher)</strong> insurance carriers offering the highest rates for 2, 3, and 4-year Multi-Year Guaranteed Annuities (MYGAs) for the stated date below. This view is designed to help you understand where Oceanview fits among similar options — and is not intended to represent a comprehensive market survey.
            </p>
            <p style={{ ...S.body, fontSize: 13, marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(13,31,78,.07)' }}>{INTRO.note}</p>
          </div>
        </div>
      </section>

      {/* Rate comparisons */}
      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
            <div style={S.eyebrowRow}><div style={S.eyebrowLine} /><span style={S.eyebrow}>Rate comparisons</span></div>
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.02em', color: '#0D1F4E', background: 'rgba(112,186,191,.28)', borderRadius: 200, padding: '6px 14px' }}>As of {RATES_AS_OF}</span>
          </div>
          <h2 style={{ ...S.h2, marginBottom: 16 }}>How Oceanview MYGAs compare by term</h2>

          <div style={{ background: 'rgba(36,148,193,.07)', border: '1px solid rgba(36,148,193,.18)', borderRadius: 12, padding: '18px 22px', display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
            <Info />
            <p style={{ ...S.body, fontSize: 14 }}>
              <strong style={{ color: '#0D1F4E' }}>Important context:</strong> {RATE_CONTEXT}
            </p>
          </div>
          <p style={{ ...S.small, fontStyle: 'italic', marginBottom: 40 }}>{RATE_SOURCE}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {RATE_TABLES.map(t => <RateTable key={t.id} table={t} />)}
          </div>
        </div>
      </section>

      {/* How to think about these */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <h2 style={{ ...S.h2, textAlign: 'center' }}>{CONSIDERATIONS_HEADING}</h2>
            <p style={{ ...S.body, fontSize: 15, textAlign: 'center', margin: '14px auto 0', maxWidth: 720 }}>{CONSIDERATIONS_SUB}</p>
            <div style={{ background: 'var(--ov-surface-tint)', borderRadius: 14, padding: '30px 32px', marginTop: 32 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 32px' }} className="cmp-grid">
                {CONSIDERATIONS.map(c => (
                  <div key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 0', borderBottom: '1px solid rgba(13,31,78,.06)' }}>
                    <Check />
                    <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#0D1F4E', lineHeight: 1.55 }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontFamily: 'var(--ov-ff-display)', fontStyle: 'italic', fontSize: 18, lineHeight: 1.5, color: '#0D1F4E', textAlign: 'center', margin: '28px auto 0', maxWidth: 760 }}>{CONSIDERATIONS_FOOTNOTE}</p>
          </div>
        </div>
      </section>

      {/* Next step */}
      <section className="ov-section" style={{ background: '#001F54' }}>
        <div className="ov-container">
          <h2 style={{ ...S.h2, color: '#F2FCFF', textAlign: 'center' }}>{NEXT_STEP.heading}</h2>
          <p style={{ ...S.body, color: 'rgba(242,252,255,.65)', textAlign: 'center', margin: '12px auto 0', maxWidth: 640 }}>{NEXT_STEP.sub}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 36 }} className="cmp-grid">
            {NEXT_STEP.cards.map(card => (
              <div key={card.title} style={{ background: '#fff', borderRadius: 12, padding: '32px 30px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 24, lineHeight: 1.25, color: '#0D1F4E', margin: 0, letterSpacing: '-0.01em' }}>{card.title}</h3>
                <p style={{ ...S.body, flex: 1 }}>{card.body}</p>
                <div style={{ marginTop: 6 }}>
                  <PillMint onClick={() => { window.location.hash = card.cta === 'Get Started' ? 'contact?inquiry_type=Prospective' : 'contact?inquiry_type=Financial-Professional' }}>{card.cta}</PillMint>
                </div>
              </div>
            ))}
          </div>
          <p style={{ ...S.small, color: 'rgba(242,252,255,.45)', textAlign: 'center', marginTop: 28 }}>{NEXT_STEP.disclaimer}</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }}>
            <PillMint hero onClick={() => { window.location.hash = 'contact' }}>{NEXT_STEP.cta}</PillMint>
          </div>
        </div>
      </section>

      {/* Disclosures */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ ...S.eyebrow, marginBottom: 12 }}>Important Disclosures</div>
            <ul style={{ margin: '0 0 24px', paddingLeft: 18 }}>
              {DISCLOSURE_BULLETS.map(b => (
                <li key={b} style={{ ...S.small, marginBottom: 6 }}>{b}</li>
              ))}
            </ul>
            {DISCLOSURE_PARAGRAPHS.map(p => (
              <p key={p.slice(0, 48)} style={{ ...S.small, marginBottom: 10 }}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
