import { PillMint, PillGhost } from './Buttons.jsx'
import {
  Award, TrendingUp, Users, Eye,
  ShieldCheck, Zap, Star,
  FileText, BarChart2, Download, Layers, Map,
  Mail, Phone,
} from 'lucide-react'
import HeroShaper from './HeroShaper.jsx'

// ── Styles — exact mirror of LPLLandingPage ───────────────────────────────────
const PS = {
  sectionWhite: { background: '#fff' },
  sectionTint:  { background: 'var(--ov-surface-tint)' },
  sectionNavy:  { background: 'var(--ov-navy-1000)' },

  eyebrowRow:  { display: 'flex', alignItems: 'center', gap: 6 },
  eyebrowLine: { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1' },

  h1:        { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(38px,5.5vw,72px)', color: '#F2FCFF', letterSpacing: '-0.03em', lineHeight: 1.03, margin: 0 },
  h2:        { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  h2Light:   { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#F2FCFF', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  body:      { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: 0 },
  bodyLight: { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: 'rgba(242,252,255,.72)', lineHeight: 1.7, margin: 0 },

  introRow:  { display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'flex-start' },
  introImg:  { width: '100%', aspectRatio: '4/3', borderRadius: 20, objectFit: 'cover', objectPosition: 'center top', display: 'block', flexShrink: 0 },
  introText: { display: 'flex', flexDirection: 'column', gap: 22, flex: 1 },

  kfCard:  { background: '#fff', border: '1px solid rgba(36,148,193,.15)', borderRadius: 12, padding: '18px 24px 20px' },
  kfLabel: { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1', marginBottom: 12 },
  kfItem:  { display: 'flex', gap: 8, alignItems: 'flex-start', padding: '9px 0', borderTop: '1px solid rgba(36,148,193,.12)' },
  kfText:  { fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.55, margin: 0 },

  cardsGrid:   { display: 'flex', flexDirection: 'column', gap: 24 },
  card:        { background: '#fff', border: '1px solid rgba(13,31,78,.08)', borderRadius: 16, padding: '28px 32px 32px', display: 'flex', flexDirection: 'column', gap: 18, boxShadow: '0 2px 12px rgba(13,31,78,.04)' },
  cardEyebrow: { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1', marginBottom: 10 },
  cardH3:      { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(18px,1.8vw,22px)', color: '#0D1F4E', letterSpacing: '-0.015em', lineHeight: 1.2, margin: 0 },
  cardBody:    { fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.65, margin: 0 },
  iconTile:    { width: 48, height: 48, borderRadius: 10, background: '#fff', border: '1px solid rgba(13,31,78,.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },

  ctaPanel:  { background: 'rgba(112,186,191,.18)', border: '1px solid rgba(36,148,193,.2)', borderRadius: 16, padding: 'clamp(36px,4vw,56px) clamp(32px,5vw,80px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' },
  ctaLeft:   { display: 'flex', flexDirection: 'column', gap: 8, flex: '1 1 320px', minWidth: 0 },
  ctaH2:     { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#001F54', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  ctaBody:   { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: 'rgba(0,31,84,.72)', lineHeight: 1.65, maxWidth: '52ch', margin: 0, marginTop: 4 },
  ctaBtns:   { display: 'flex', gap: 12, flexWrap: 'wrap', flexShrink: 0 },
}

const CHECK = (
  <svg width="8" height="9" viewBox="0 0 8 9" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
    <path d="M1 4.5L3 6.5L7 2.5" stroke="#2494C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function PrdEyebrow({ light, children }) {
  return (
    <div style={PS.eyebrowRow}>
      <div style={{ ...PS.eyebrowLine, background: light ? 'rgba(112,186,191,.6)' : '#2494C1' }} />
      <span style={{ ...PS.eyebrow, color: light ? '#70BABF' : '#2494C1' }}>{children}</span>
    </div>
  )
}

function KeyFeaturesCard({ features }) {
  return (
    <div style={PS.kfCard}>
      <div style={PS.kfLabel}>Key Features</div>
      {features.map((f, i) => (
        <div key={i} style={PS.kfItem}>{CHECK}<p style={PS.kfText}>{f}</p></div>
      ))}
    </div>
  )
}

function IconCard({ icon: Icon, eyebrow, title, body, tint }) {
  const bg     = tint ? 'var(--ov-surface-tint-2)' : '#fff'
  const border = tint ? '1px solid rgba(13,31,78,.06)' : '1px solid rgba(13,31,78,.08)'
  const tileBg = tint ? 'rgba(255,255,255,.75)' : '#fff'
  return (
    <div
      style={{ ...PS.card, background: bg, border, transition: 'transform .2s ease, box-shadow .2s ease' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(13,31,78,.12)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 12px rgba(13,31,78,.04)' }}
    >
      <div style={{ ...PS.iconTile, background: tileBg }}>
        <Icon size={22} color="var(--ov-navy-500)" strokeWidth={1.75} />
      </div>
      <div>
        <div style={PS.cardEyebrow}>{eyebrow}</div>
        <h3 style={PS.cardH3}>{title}</h3>
      </div>
      <p style={PS.cardBody}>{body}</p>
    </div>
  )
}

function ResourceCard({ label, title }) {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderRadius: 10, background: 'rgba(112,186,191,.18)', border: '1px solid rgba(36,148,193,.2)', cursor: 'pointer', transition: 'border-color .15s, box-shadow .15s', gap: 16 }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(36,148,193,.5)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(13,31,78,.07)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(36,148,193,.2)'; e.currentTarget.style.boxShadow = '' }}
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
    <div style={{ background: '#fff', border: '1px solid rgba(13,31,78,.08)', borderRadius: 16, padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', gap: 12, boxShadow: '0 2px 12px rgba(13,31,78,.04)' }}>
      <div style={PS.iconTile}>
        <Icon size={20} color="var(--ov-navy-500)" strokeWidth={1.75} />
      </div>
      <div>
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1', marginBottom: 4 }}>{label}</div>
        <div style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(17px,1.6vw,20px)', color: '#0D1F4E', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{name}</div>
      </div>
      <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 15, color: '#2494C1' }}>{detail}</div>
      {sub && <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#828282' }}>{sub}</div>}
    </div>
  )
}

// ── Page data ─────────────────────────────────────────────────────────────────
const VALUE_CARDS = [
  { icon: Award,      eyebrow: 'Financial Strength', title: 'Financial Strength You Can Count On',    body: 'Rated "A" (Excellent) by A.M. Best and backed by Bayview Asset Management, we offer the stability and surplus strength that today\'s clients demand.' },
  { icon: Eye,        eyebrow: 'Transparency',        title: 'Straightforward Products, No Gimmicks', body: 'Our MYGAs and FIAs are designed with simplicity in mind — clear terms, transparent renewals, and no hidden fees or unnecessary riders.' },
  { icon: TrendingUp, eyebrow: 'Competitive Value',   title: 'Industry-Leading Rates',                body: 'We consistently offer top-tier crediting strategies and competitive yields — helping you deliver more value in every retirement conversation.' },
  { icon: Users,      eyebrow: 'Advisor Support',     title: 'Built for Financial Professionals',     body: 'Fast, responsive, and easy to work with — our team is here to support your success, not get in your way.' },
]

const DIFF_CARDS = [
  { icon: ShieldCheck, eyebrow: 'Foundation',  title: 'Financial Strength',       body: 'An A (Excellent) A.M. Best rating backed by the capital strength of Bayview Asset Management.' },
  { icon: Eye,         eyebrow: 'Clarity',     title: 'Transparency',             body: 'Clear terms, no hidden fees, and transparent renewal rates — clients always know what to expect.' },
  { icon: Zap,         eyebrow: 'Performance', title: 'Competitive and Flexible', body: 'Top-tier crediting strategies across fixed and indexed products, designed to meet varied client goals.' },
  { icon: Star,        eyebrow: 'Service',     title: 'Client-Focused Features',  body: 'Products and service built around your clients — intuitive, accessible, and designed for real retirement outcomes.' },
]

const RESOURCES = {
  brochures: [
    { label: 'Client Brochure', title: 'Harbourview MYGA Client Brochure' },
    { label: 'Client Brochure', title: 'Harbourview FIA Client Brochure' },
    { label: 'Client Brochure', title: 'CapLock FIA Client Brochure' },
  ],
  rateSheets: [
    { label: 'Rate Sheet',              title: 'Harbourview FIA Client Rate Sheet' },
    { label: 'Rate Sheet — California', title: 'Harbourview FIA Client Rate Sheet (CA)' },
    { label: 'Rate Sheet',              title: 'Harbourview MYGA Client Rate Sheet' },
    { label: 'Rate Sheet — California', title: 'Harbourview MYGA Client Rate Sheet (CA)' },
    { label: 'Rate Sheet',              title: 'CapLock FIA Client Rate Sheet' },
    { label: 'Rate Sheet — California', title: 'CapLock FIA Client Rate Sheet (CA)' },
  ],
  salesTools: [
    { label: 'Allocation Strategy', title: 'Anchoring Allocations' },
    { label: 'Retirement Planning', title: 'The New 60/40 Approach' },
    { label: 'Crediting Strategy',  title: 'S&P 500 Index Crediting Strategy' },
    { label: 'Rate Strategy',       title: 'Rates That Keep Pace' },
    { label: 'Risk Control',        title: 'S&P 500 Daily Risk Control 10% Vol Strategy' },
  ],
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CeteraLandingPage() {
  return (
    <main>

      {/* ══ Hero ════════════════════════════════════════════════════════ */}
      <div className="ov-hero-wrapper" style={{ marginBottom: 0 }}>
        <section style={{ paddingTop: 20, paddingBottom: 0 }}>
          <div className="ov-hero-card" style={{ background: 'var(--ov-navy-1000)', minHeight: 520 }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(assets/hero-couple.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(85deg, rgba(0,0,0,.82) 0%, rgba(0,31,84,.4) 60%, transparent 100%)', zIndex: 1 }} />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(assets/Noise.png)', backgroundRepeat: 'repeat', backgroundSize: '200px', opacity: 0.6, pointerEvents: 'none', zIndex: 2 }} />
            <HeroShaper />
            <div className="ov-hero-content" style={{ zIndex: 3 }}>
              <PrdEyebrow light>Cetera Financial Professional Resource Center</PrdEyebrow>
              <h1 className="ov-hero-title" style={PS.h1}>
                Strength.<br />
                Simplicity.<br />
                <em style={{ fontStyle: 'italic', color: '#70BABF' }}>Competitive Value.</em>
              </h1>
              <p style={{ ...PS.bodyLight, fontWeight: 500, maxWidth: '46ch', fontSize: 'clamp(14px,1.4vw,17px)' }}>
                At Oceanview Life and Annuity Company, we deliver dependable retirement solutions
                that are easy to understand — and built to perform.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <PillMint hero onClick={() => document.getElementById('cetera-products')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Products
                </PillMint>
                <PillGhost
                  onClick={() => document.getElementById('cetera-resources')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ background: 'rgba(255,255,255,.12)', color: '#fff', borderColor: 'rgba(255,255,255,.3)', backdropFilter: 'blur(4px)' }}
                >
                  Download Resources
                </PillGhost>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ══ Value props ════════════════════════════════════════════════ */}
      <section style={PS.sectionWhite} className="ov-section">
        <div className="ov-container">
          <div style={{ maxWidth: 680, marginBottom: 52 }}>
            <PrdEyebrow>Why Oceanview</PrdEyebrow>
            <h2 style={{ ...PS.h2, marginTop: 12, marginBottom: 16 }}>
              Dependable retirement solutions,<br />built to perform.
            </h2>
            <p style={PS.body}>
              We focus exclusively on fixed annuity solutions — so every product, every rate,
              and every service interaction reflects that singular commitment to the retirement market.
            </p>
          </div>
          <div style={PS.cardsGrid} className="prd-cards-grid prd-cards-2col">
            {VALUE_CARDS.map(c => <IconCard key={c.title} {...c} tint={false} />)}
          </div>
        </div>
      </section>

      {/* ══ Products ═══════════════════════════════════════════════════ */}
      <section id="cetera-products" style={PS.sectionTint} className="ov-section prd-section">
        <div className="ov-container">

          <div style={{ marginBottom: 56 }}>
            <PrdEyebrow>Featured Products</PrdEyebrow>
            <h2 style={{ ...PS.h2, marginTop: 12, marginBottom: 16 }}>
              Annuity solutions for every retirement goal.
            </h2>
            <p style={{ ...PS.body, maxWidth: '60ch' }}>
              Whether your client needs predictable guaranteed growth, indexed upside with
              principal protection, or defined growth parameters — Oceanview has a solution
              built around their needs.
            </p>
          </div>

          {/* Harbourview MYGA */}
          <div style={PS.introRow} className="prd-intro-row prd-intro-img-right">
            <img src="assets/family.png" alt="Family planning retirement" style={PS.introImg} className="prd-intro-img" />
            <div style={PS.introText}>
              <div>
                <PrdEyebrow>Multi-Year Guaranteed Annuity</PrdEyebrow>
                <h2 style={{ ...PS.h2, marginTop: 10 }}>Harbourview MYGA</h2>
              </div>
              <p style={PS.body}>
                A fixed annuity designed for individuals seeking predictable growth through a
                guaranteed interest rate over a defined period — with no exposure to market volatility.
              </p>
              <KeyFeaturesCard features={[
                'Guaranteed interest rate for the full contract term',
                'Principal protection from market fluctuations',
                'Predictable, tax-deferred accumulation',
                'Straightforward structure with clearly defined outcomes',
              ]} />
              <PillGhost onClick={() => { window.location.hash = 'products' }} style={{ alignSelf: 'flex-start' }}>
                View Product Details →
              </PillGhost>
            </div>
          </div>

          {/* Harbourview FIA */}
          <div style={{ ...PS.introRow, marginTop: 80 }} className="prd-intro-row prd-intro-img-left">
            <img src="assets/older-couple-1.png" alt="Couple reviewing retirement plan" style={PS.introImg} className="prd-intro-img" />
            <div style={PS.introText}>
              <div>
                <PrdEyebrow>Fixed Indexed Annuity</PrdEyebrow>
                <h2 style={{ ...PS.h2, marginTop: 10 }}>Harbourview FIA</h2>
              </div>
              <p style={PS.body}>
                Designed for individuals seeking both asset protection against market volatility
                and asset growth from potential market gains — with principal never directly
                exposed to market loss.
              </p>
              <KeyFeaturesCard features={[
                'Principal protected from market downturns',
                'Interest crediting linked to market index performance',
                'Multiple crediting strategy options',
                'Tax-deferred accumulation',
              ]} />
              <PillGhost onClick={() => { window.location.hash = 'products' }} style={{ alignSelf: 'flex-start' }}>
                View Product Details →
              </PillGhost>
            </div>
          </div>

          {/* CapLock FIA */}
          <div style={{ ...PS.introRow, marginTop: 80 }} className="prd-intro-row prd-intro-img-right">
            <img src="assets/couple-walking.png" alt="Couple walking, planning ahead" style={PS.introImg} className="prd-intro-img" />
            <div style={PS.introText}>
              <div>
                <PrdEyebrow>Fixed Indexed Annuity</PrdEyebrow>
                <h2 style={{ ...PS.h2, marginTop: 10 }}>CapLock FIA</h2>
              </div>
              <p style={PS.body}>
                A fixed indexed annuity designed to provide index-linked interest credits
                within clearly defined limits — giving clients and advisors transparency
                around how interest may be credited.
              </p>
              <KeyFeaturesCard features={[
                'Clearly defined growth parameters and cap structure',
                'Principal protection from market downturns',
                'Transparency around how interest is credited',
                'Structured approach to indexed growth potential',
              ]} />
              <PillGhost onClick={() => { window.location.hash = 'products' }} style={{ alignSelf: 'flex-start' }}>
                View Product Details →
              </PillGhost>
            </div>
          </div>

        </div>
      </section>

      {/* ══ Case study callout ═════════════════════════════════════════ */}
      <section style={PS.sectionWhite} className="ov-section">
        <div className="ov-container">
          <div style={{ background: 'var(--ov-navy-1000)', borderRadius: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column' }} className="lpl-case-study">
            <div style={{ padding: 'clamp(36px,5vw,64px)', display: 'flex', flexDirection: 'column', gap: 24, flex: 1 }}>
              <div>
                <div style={{ ...PS.eyebrowRow, marginBottom: 4 }}>
                  <div style={{ ...PS.eyebrowLine, background: 'rgba(112,186,191,.5)' }} />
                  <span style={{ ...PS.eyebrow, color: '#70BABF' }}>Case Study</span>
                </div>
                <h2 style={{ ...PS.h2Light, fontSize: 'clamp(22px,2.8vw,36px)', marginTop: 10 }}>
                  How John and Betty protected their retirement savings —
                  <em style={{ fontStyle: 'italic', color: '#70BABF' }}> while still growing what matters most.</em>
                </h2>
              </div>
              <p style={{ ...PS.bodyLight, maxWidth: '56ch' }}>
                Learn how a retired couple used the Harbourview Fixed Indexed Annuity to
                shield their savings from market volatility while achieving meaningful growth
                for their loved ones.
              </p>
              <div>
                <PillMint onClick={() => { window.location.hash = 'case-studies' }}>
                  Read Their Story
                </PillMint>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Differentiators ════════════════════════════════════════════ */}
      <section style={PS.sectionTint} className="ov-section">
        <div className="ov-container">
          <div style={{ maxWidth: 640, marginBottom: 52 }}>
            <PrdEyebrow>The Oceanview Difference</PrdEyebrow>
            <h2 style={{ ...PS.h2, marginTop: 12 }}>
              Experience the Oceanview Difference.
            </h2>
          </div>
          <div style={PS.cardsGrid} className="prd-cards-grid prd-cards-2col">
            {DIFF_CARDS.map(c => <IconCard key={c.title} {...c} tint={false} />)}
          </div>
        </div>
      </section>

      {/* ══ Resources ══════════════════════════════════════════════════ */}
      <section id="cetera-resources" style={PS.sectionWhite} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 640, marginBottom: 52 }}>
            <PrdEyebrow>Advisor Resources</PrdEyebrow>
            <h2 style={PS.h2}>Oceanview Resources</h2>
            <p style={PS.body}>
              Explore our comprehensive collection of resources designed to support your sales
              conversations — from client brochures and rate sheets to strategy materials.
            </p>
            <p style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 700, fontSize: 14, color: '#0D1F4E' }}>
              Oceanview Sales Desk:{' '}
              <a href="tel:18336567455" style={{ color: '#2494C1', textDecoration: 'none' }}>1-833-656-7455</a>
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }} className="lpl-resources-grid">
            {[
              { heading: 'Client Brochures', items: RESOURCES.brochures,  icon: FileText  },
              { heading: 'Rate Sheets',      items: RESOURCES.rateSheets, icon: BarChart2 },
              { heading: 'Sales Tools',      items: RESOURCES.salesTools, icon: Layers    },
            ].map(({ heading, items, icon: Icon }) => (
              <div key={heading}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div style={{ ...PS.iconTile, width: 36, height: 36, borderRadius: 8 }}>
                    <Icon size={17} color="var(--ov-navy-500)" strokeWidth={1.75} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 700, fontSize: 13, letterSpacing: '.08em', textTransform: 'uppercase', color: '#0D1F4E', margin: 0 }}>
                    {heading}
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }} className="lpl-res-list lpl-res-3col">
                  {items.map(r => <ResourceCard key={r.title} {...r} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Support contacts ═══════════════════════════════════════════ */}
      <section style={PS.sectionTint} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 560, marginBottom: 40 }}>
            <PrdEyebrow>Get Support</PrdEyebrow>
            <h2 style={PS.h2}>We're here to help.</h2>
            <p style={PS.body}>
              Reach the right team for product questions, illustrations, or platform support.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }} className="prd-cards-grid prd-cards-3col">
            <ContactCard
              icon={Mail}
              label="Cetera Sales Desk"
              name="Cetera Annuity Solutions"
              detail="annuitysolutions@cetera.com"
              sub="Platform and product support for Cetera advisors"
            />
            <ContactCard
              icon={Phone}
              label="Wholesaler Support"
              name="NFG Brokerage"
              detail="801-568-2626"
              sub="annuityquotes@nfgbrokerage.com — illustrations & wholesaling"
            />
            <ContactCard
              icon={Phone}
              label="Oceanview Sales Desk"
              name="Direct Sales Support"
              detail="1-833-656-7455"
              sub="Product questions and advisor resources"
            />
          </div>
        </div>
      </section>

      {/* ══ Want More Information CTA ═══════════════════════════════════ */}
      <section style={PS.sectionWhite} className="ov-section">
        <div className="ov-container">
          <div style={PS.ctaPanel}>
            <div style={PS.ctaLeft}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                <div style={{ width: 18, height: 1, background: 'rgba(0,31,84,.4)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: 'rgba(0,31,84,.65)' }}>Get in Touch</span>
              </div>
              <h2 style={PS.ctaH2}>Want More Information?</h2>
              <p style={PS.ctaBody}>
                Complete a general inquiry or reach our Cetera sales desk and a representative
                will follow up with additional information.
              </p>
              <button
                onClick={() => document.getElementById('footer-newsletter')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 700, fontStyle: 'italic', fontSize: 15, color: '#001F54', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', textDecoration: 'underline', textDecorationColor: 'rgba(0,31,84,.3)', textUnderlineOffset: 3 }}
                onMouseEnter={e => e.currentTarget.style.textDecorationColor = '#001F54'}
                onMouseLeave={e => e.currentTarget.style.textDecorationColor = 'rgba(0,31,84,.3)'}
              >
                Want insights delivered to your inbox? Scroll down to subscribe. ↓
              </button>
            </div>
            <div style={PS.ctaBtns}>
              <button
                onClick={() => { window.location.hash = 'contact' }}
                style={{ background: '#001F54', color: '#fff', border: 0, borderRadius: 200, padding: '16px 36px', fontFamily: 'var(--ov-ff-sans)', fontWeight: 700, fontSize: 14, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'opacity .15s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >Contact Us</button>
              <button
                onClick={() => { window.location.hash = 'sales-tools' }}
                style={{ background: '#fff', color: '#001F54', border: '1.5px solid rgba(0,31,84,.15)', borderRadius: 200, padding: '16px 36px', fontFamily: 'var(--ov-ff-sans)', fontWeight: 700, fontSize: 14, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'opacity .15s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >Browse Sales Tools</button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
