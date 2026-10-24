// ComplianceCornerPage.jsx — Newsroom / Compliance Corner
// Content + download links: production /newsroom/compliance-corner/
import PageHero from './PageHero.jsx'
import CTABanner from './CTABanner.jsx'
import { Download } from 'lucide-react'
import { ISSUES, HERO, INTRO, ARCHIVE, RELATED } from '../data/complianceCorner.js'

const S = {
  eyebrowRow: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 },
  eyebrowLine: { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow: { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' },
  h2: { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,2.8vw,36px)', color: '#0D1F4E', letterSpacing: '-0.02em', lineHeight: 1.15, margin: 0 },
  body: { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: 0 },
  card: { background: '#fff', border: '1px solid rgba(13,31,78,.09)', borderRadius: 12 },
}

const VOLUMES = [1, 2, 3]

function IssueCard({ item }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...S.card, padding: '24px 24px 20px', display: 'flex', flexDirection: 'column', gap: 12, textDecoration: 'none', color: 'inherit', minHeight: 168 }}
      className="cc-issue"
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div>
          <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1', marginBottom: 6 }}>
            Compliance Corner
          </div>
          <div style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 24, lineHeight: 1.15, color: '#0D1F4E', letterSpacing: '-0.01em' }}>
            Issue {item.issue}
          </div>
          <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#6B7280', marginTop: 4, minHeight: 18 }}>
            {item.date || 'PDF download'}
          </div>
        </div>
        <span style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(36,148,193,.09)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Download size={16} color="#2494C1" strokeWidth={2} />
        </span>
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#0D1F4E' }}>
        Download PDF <span aria-hidden="true">→</span>
      </div>
    </a>
  )
}

export default function ComplianceCornerPage() {
  return (
    <main>
      <PageHero
        image="assets/faq-hero.jpg"
        imgFocus="center"
        badge={HERO.badge}
        title={HERO.title}
        subtitle={HERO.subtitle}
        ctaPrimary={HERO.ctaPrimary}
        onPrimary={() => {
          document.getElementById('cc-archive')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }}
        ctaSecondary={HERO.ctaSecondary}
        onSecondary={() => { window.location.hash = 'newsroom' }}
      />

      {/* Intro */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={S.eyebrowRow}><div style={S.eyebrowLine} /><span style={S.eyebrow}>{INTRO.eyebrow}</span></div>
            <h2 style={S.h2}>{INTRO.heading}</h2>
            <p style={{ ...S.body, fontSize: 16, marginTop: 20 }}>{INTRO.paragraphs[0]}</p>
            <p style={{ ...S.body, fontSize: 16, marginTop: 14 }}>{INTRO.paragraphs[1]}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 36 }} className="cmp-grid">
            {INTRO.cards.map((card, i) => (
              <div key={card.title} style={{ background: 'var(--ov-surface-tint)', borderRadius: 12, padding: '26px 26px 24px' }}>
                <div style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 15, color: '#2494C1', marginBottom: 10 }}>0{i + 1}</div>
                <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 15, color: '#0D1F4E', marginBottom: 8 }}>{card.title}</div>
                <p style={{ ...S.body, fontSize: 14 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section id="cc-archive" className="ov-section" style={{ background: 'var(--ov-surface-tint)', scrollMarginTop: 112 }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 40 }}>
            <div>
              <div style={S.eyebrowRow}><div style={S.eyebrowLine} /><span style={S.eyebrow}>{ARCHIVE.eyebrow}</span></div>
              <h2 style={S.h2}>{ARCHIVE.heading}</h2>
              <p style={{ ...S.body, marginTop: 12 }}>{ARCHIVE.sub}</p>
            </div>
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.02em', color: '#0D1F4E', background: 'rgba(112,186,191,.28)', borderRadius: 200, padding: '8px 16px', whiteSpace: 'nowrap' }}>
              {ISSUES.length} issues
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {VOLUMES.map(vol => {
              const items = ISSUES.filter(i => i.volume === vol)
              if (!items.length) return null
              return (
                <div key={vol}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
                    <h3 style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, letterSpacing: '1px', textTransform: 'uppercase', color: '#0D1F4E', margin: 0 }}>
                      Volume {vol}
                    </h3>
                    <span style={{ flex: 1, height: 1, background: 'rgba(13,31,78,.10)' }} />
                    <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#6B7280' }}>{items.length} {items.length === 1 ? 'issue' : 'issues'}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="cc-grid">
                    {items.map(item => <IssueCard key={`${item.volume}-${item.issue}`} item={item} />)}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow={RELATED.eyebrow}
            title={RELATED.heading}
            body={RELATED.body}
            cta={RELATED.cta}
            onClick={() => { window.location.hash = 'newsroom' }}
          />
        </div>
      </section>
    </main>
  )
}
