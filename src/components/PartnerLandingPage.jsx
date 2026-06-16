import { PillMint, PillGhost } from './Buttons.jsx'
import { Eyebrow } from './common.jsx'
import CTABanner from './CTABanner.jsx'
import {
  ShieldCheck, Eye, Zap, Star,
  FileText, BarChart2, Download, Map,
  Layers, Mail, Phone,
} from 'lucide-react'
import HeroShaper from './HeroShaper.jsx'

// ── Shared styles ─────────────────────────────────────────────────────────────
const S = {
  h1:       { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(38px,5.5vw,72px)', color: '#F2FCFF', letterSpacing: '-0.03em', lineHeight: 1.03, margin: 0 },
  h2:       { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px, 3vw, 40px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  h2Light:  { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px, 3vw, 40px)', color: '#F2FCFF', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  accent:   { fontStyle: 'italic', color: '#70BABF' },
  body:     { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: 0 },
  bodyDark: { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: 'rgba(242,252,255,.65)', lineHeight: 1.7, margin: 0 },

  introRow:  { display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'flex-start' },
  introImg:  { width: '100%', aspectRatio: '4/3', borderRadius: 20, objectFit: 'cover', objectPosition: 'center top', display: 'block', flexShrink: 0 },
  introText: { display: 'flex', flexDirection: 'column', gap: 20, flex: 1 },

  iconTile: { width: 44, height: 44, borderRadius: 10, background: 'var(--ov-surface-tint)', border: '1px solid rgba(36,148,193,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
}

// ── Sub-components ────────────────────────────────────────────────────────────

function FeatureList({ features, dark }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {features.map((f, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 0', borderTop: i > 0 ? `1px solid ${dark ? 'rgba(255,255,255,.08)' : 'rgba(36,148,193,.12)'}` : 'none' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="7" cy="7" r="6.5" stroke={dark ? '#70BABF' : '#2494C1'} strokeOpacity={dark ? '0.5' : '0.3'}/>
            <path d="M4.5 7L6.5 9L9.5 5" stroke={dark ? '#70BABF' : '#2494C1'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, lineHeight: 1.6, color: dark ? 'rgba(242,252,255,.72)' : '#4A5568' }}>{f}</span>
        </div>
      ))}
    </div>
  )
}

function ResourceCard({ label, title }) {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', borderRadius: 10, background: 'rgba(112,186,191,.12)', border: '1px solid rgba(36,148,193,.18)', cursor: 'pointer', transition: 'border-color .15s, box-shadow .15s', gap: 16 }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(36,148,193,.45)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(13,31,78,.07)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(36,148,193,.18)'; e.currentTarget.style.boxShadow = '' }}
    >
      <div>
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1', marginBottom: 3 }}>{label}</div>
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14, color: '#0D1F4E', lineHeight: 1.35 }}>{title}</div>
      </div>
      <Download size={16} color="#2494C1" strokeWidth={2} style={{ flexShrink: 0 }} />
    </div>
  )
}

function ContactCard({ icon: Icon, label, name, detail, sub }) {
  return (
    <div style={{ background: 'rgba(36,148,193,.07)', border: '1px solid rgba(36,148,193,.12)', borderRadius: 14, padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: 14, transition: 'border-color .15s, box-shadow .15s' }}>
      <div style={S.iconTile}>
        <Icon size={20} color="#2494C1" strokeWidth={1.75} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1' }}>{label}</div>
        <div style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 17, color: '#0D1F4E', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{name}</div>
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#0D1F4E', lineHeight: 1.4 }}>{detail}</div>
        {sub && <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#4A5568', lineHeight: 1.5, margin: 0 }}>{sub}</p>}
      </div>
    </div>
  )
}

// ── Pillars data (shared) ─────────────────────────────────────────────────────
const PILLARS = [
  { Icon: ShieldCheck, eyebrow: 'Foundation',  title: 'Financial Strength',       body: 'An A (Excellent) A.M. Best rating backed by the capital strength of Bayview Asset Management.' },
  { Icon: Eye,         eyebrow: 'Clarity',     title: 'Transparent by Design',    body: 'Clear terms, no hidden fees, transparent renewal rates — your clients always know what to expect.' },
  { Icon: Zap,         eyebrow: 'Performance', title: 'Competitive Rates',        body: 'Top-tier crediting strategies across fixed and indexed products, consistently among the industry\'s best.' },
  { Icon: Star,        eyebrow: 'Service',     title: 'Advisor-First Support',    body: 'Fast, responsive, and built around you — from case design to in-force policy service.' },
]

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PartnerLandingPage({ data }) {
  const {
    partner,
    hero,
    products,
    caseStudy,
    resources,
    supportContacts,
    cta,
  } = data

  return (
    <main>

      {/* 1 ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="ov-hero-wrapper" style={{ marginBottom: 40 }}>
        <section style={{ paddingTop: 20, paddingBottom: 0 }}>
          <div className="ov-hero-card" style={{ background: 'var(--ov-navy-1000)' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${hero.image})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
            <div className="ov-hero-scrim" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(85deg, rgba(0,31,84,.82) 0%, rgba(0,31,84,.4) 60%, transparent 100%)', zIndex: 1 }} />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(assets/Noise.png)', backgroundRepeat: 'repeat', backgroundSize: '200px', opacity: 0.6, pointerEvents: 'none', zIndex: 2 }} />
            <HeroShaper />
            <div className="ov-hero-content" style={{ zIndex: 3 }}>
              <Eyebrow light>{hero.eyebrow}</Eyebrow>
              <h1 className="ov-hero-title" style={S.h1}>
                Strength.<br />Simplicity.<br />
                <em style={S.accent}>Competitive Value.</em>
              </h1>
              <p style={{ ...S.bodyDark, maxWidth: '46ch', fontSize: 'clamp(14px,1.4vw,17px)' }}>
                {hero.subtitle}
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <PillMint hero onClick={() => document.getElementById(hero.productAnchor)?.scrollIntoView({ behavior: 'smooth' })}>{hero.ctaPrimary}</PillMint>
                <PillGhost light onClick={() => document.getElementById(hero.resourceAnchor)?.scrollIntoView({ behavior: 'smooth' })}>{hero.ctaSecondary}</PillGhost>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2 ── Products ──────────────────────────────────────────────────────── */}
      <section id={products.sectionId} style={{ background: 'var(--ov-navy-1000)' }} className="ov-section prd-section">
        <div className="ov-container">
          <div style={{ marginBottom: 56 }}>
            <Eyebrow light>Featured Products</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 14 }}>Annuity solutions for <em style={S.accent}>every retirement goal.</em></h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              {products.introBody}
            </p>
          </div>

          {products.items.map((p, i) => (
            <div
              key={p.name}
              style={{ ...S.introRow, marginTop: i > 0 ? 72 : 0 }}
              className={`prd-intro-row ${p.imageRight ? 'prd-intro-img-right' : ''}`}
            >
              <img src={p.image} alt={p.imageAlt} style={S.introImg} className="prd-intro-img" />
              <div style={S.introText}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <Eyebrow light>{p.eyebrow}</Eyebrow>
                    {p.comingSoon && (
                      <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: '#fff', background: '#2494C1', borderRadius: 100, padding: '3px 10px' }}>Coming Soon</span>
                    )}
                  </div>
                  <h2 style={S.h2Light}>{p.name}</h2>
                </div>
                <p style={S.bodyDark}>{p.description}</p>
                <FeatureList dark features={p.features} />
                <PillGhost light onClick={() => { window.location.hash = 'products' }} style={{ alignSelf: 'flex-start' }}>{p.ctaLabel}</PillGhost>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 ── Why Oceanview ─────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 48, maxWidth: 600 }}>
            <Eyebrow>Why Oceanview</Eyebrow>
            <h2 style={{ ...S.h2, marginBottom: 14 }}>
              Built for advisors who <em style={{ fontStyle: 'italic', color: '#2494C1' }}>expect more.</em>
            </h2>
            <p style={S.body}>
              We focus exclusively on fixed annuity solutions — every product, every rate, and every service decision reflects a singular commitment to the retirement market.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="lpl-pillars-grid">
            {PILLARS.map(p => (
              <div key={p.title} style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '24px 0', borderTop: '2px solid rgba(36,148,193,.2)' }}>
                <div style={S.iconTile}>
                  <p.Icon size={20} color="#2494C1" strokeWidth={1.75} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1', marginBottom: 6 }}>{p.eyebrow}</div>
                  <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 19, color: '#0D1F4E', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 8px' }}>{p.title}</h3>
                  <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13.5, color: '#4A5568', lineHeight: 1.65, margin: 0 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 ── Case study ────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ background: 'var(--ov-navy-1000)', borderRadius: 20, overflow: 'hidden', display: 'flex', gap: 0 }} className="lpl-case-study">
            <div style={{ padding: 'clamp(40px,5vw,64px)', display: 'flex', flexDirection: 'column', gap: 20, flex: 1 }}>
              <div>
                <Eyebrow light>Case Study</Eyebrow>
                <h2 style={{ ...S.h2Light, fontSize: 'clamp(22px,2.8vw,36px)' }}>
                  How John and Betty protected their savings —{' '}
                  <em style={S.accent}>while still growing what matters most.</em>
                </h2>
              </div>
              <p style={{ ...S.bodyDark, maxWidth: '52ch' }}>
                A retired couple used the Harbourview Fixed Indexed Annuity to shield their savings from market volatility while achieving meaningful growth for their loved ones.
              </p>
              <PillMint onClick={() => { window.location.hash = 'case-studies' }} style={{ alignSelf: 'flex-start' }}>Read Their Story</PillMint>
            </div>
            <div style={{ width: '38%', flexShrink: 0 }} className="lpl-case-img">
              <img src={caseStudy.image} alt="Couple enjoying retirement" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 5 ── Resources ─────────────────────────────────────────────────────── */}
      <section id={resources.sectionId} style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ maxWidth: 640, marginBottom: 48 }}>
            <Eyebrow>Advisor Resources</Eyebrow>
            <h2 style={{ ...S.h2, marginBottom: 12 }}>Everything you need <em style={{ fontStyle: 'italic', color: '#2494C1' }}>to close.</em></h2>
            <p style={S.body}>
              Client brochures, rate sheets, and sales tools — all in one place. Questions?
              Call the <strong>{resources.salesDeskName}: </strong>
              <a href={`tel:${resources.salesDeskPhone}`} style={{ color: '#2494C1', textDecoration: 'none', fontWeight: 600 }}>{resources.salesDeskPhoneFormatted}</a>
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }} className="lpl-resources-grid">
            {resources.categories.map(({ heading, items, Icon }) => (
              <div key={heading}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ ...S.iconTile, width: 36, height: 36, borderRadius: 8 }}>
                    <Icon size={17} color="#2494C1" strokeWidth={1.75} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: '#0D1F4E', margin: 0 }}>{heading}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }} className={`lpl-res-list lpl-res-${items.length > 2 ? '3col' : '2col'}`}>
                  {items.map(r => <ResourceCard key={r.title} {...r} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 ── Support contacts (optional) ───────────────────────────────────── */}
      {supportContacts && supportContacts.length > 0 && (
        <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
          <div className="ov-container">
            <div style={{ maxWidth: 560, marginBottom: 40 }}>
              <Eyebrow>Get Support</Eyebrow>
              <h2 style={{ ...S.h2, marginBottom: 10 }}>We're here <em style={{ fontStyle: 'italic', color: '#2494C1' }}>to help.</em></h2>
              <p style={S.body}>Reach the right team for product questions, illustrations, or platform support.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="lpl-pillars-grid">
              {supportContacts.map(c => <ContactCard key={c.label} {...c} />)}
            </div>
          </div>
        </section>
      )}

      {/* 7 ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <CTABanner
            eyebrow={cta.eyebrow}
            title="Ready to bring Oceanview"
            titleAccent="to your clients?"
            body={cta.body}
            cta={cta.primaryLabel}
            onClick={() => { window.location.hash = 'contact' }}
          />
        </div>
      </section>

    </main>
  )
}
