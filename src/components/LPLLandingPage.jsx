import { useState } from 'react'
import { PillMint, PillNavy, PillGhost } from './Buttons.jsx'
import {
  Award, Layers, TrendingUp, Users,
  ShieldCheck, Eye, Zap, Star,
  FileText, BarChart2, Download, Map,
  Check, ChevronDown,
} from 'lucide-react'
import HeroShaper from './HeroShaper.jsx'

// ── Design tokens (mirrors ProductsPage exactly) ─────────────────────────────
const PS = {
  sectionWhite: { background: '#fff' },
  sectionTint:  { background: 'var(--ov-surface-tint)' },
  sectionNavy:  { background: 'var(--ov-navy-1000)' },

  eyebrowRow:  { display: 'flex', alignItems: 'center', gap: 6 },
  eyebrowLine: { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1' },

  h1:          { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(38px,5.5vw,72px)', color: '#F2FCFF', letterSpacing: '-0.03em', lineHeight: 1.03, margin: 0 },
  h2:          { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px, 3vw, 40px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  h2Light:     { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px, 3vw, 40px)', color: '#F2FCFF', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  body:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: 0 },
  bodyLight:   { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: 'rgba(242,252,255,.72)', lineHeight: 1.7, margin: 0 },

  introRow:    { display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'flex-start' },
  introImg:    { width: '100%', aspectRatio: '4/3', borderRadius: 20, objectFit: 'cover', objectPosition: 'center top', display: 'block', flexShrink: 0 },
  introText:   { display: 'flex', flexDirection: 'column', gap: 22, flex: 1 },

  kfCard:      { background: '#fff', border: '1px solid rgba(36,148,193,.15)', borderRadius: 12, padding: '18px 24px 20px' },
  kfLabel:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1', marginBottom: 12 },
  kfItem:      { display: 'flex', gap: 8, alignItems: 'flex-start', padding: '9px 0', borderTop: '1px solid rgba(36,148,193,.12)' },
  kfText:      { fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.55, margin: 0 },

  cardsGrid:   { display: 'flex', flexDirection: 'column', gap: 24 },
  card:        { background: '#fff', border: '1px solid rgba(13,31,78,.08)', borderRadius: 16, padding: '28px 32px 32px', display: 'flex', flexDirection: 'column', gap: 18, boxShadow: '0 2px 12px rgba(13,31,78,.04)' },
  cardEyebrow: { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1' },
  cardH3:      { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(18px, 1.8vw, 22px)', color: '#0D1F4E', letterSpacing: '-0.015em', lineHeight: 1.2, margin: '4px 0 0' },
  cardBody:    { fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.65, margin: 0 },

  iconTile:    { width: 48, height: 48, borderRadius: 10, background: '#fff', border: '1px solid rgba(13,31,78,.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },

  ctaPanel:    { background: 'rgba(112,186,191,.18)', border: '1px solid rgba(36,148,193,.2)', borderRadius: 16, padding: 'clamp(36px,4vw,56px) clamp(32px,5vw,80px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' },
  ctaLeft:     { display: 'flex', flexDirection: 'column', gap: 8, flex: '1 1 320px', minWidth: 0 },
  ctaH2:       { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#001F54', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  ctaBody:     { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: 'rgba(0,31,84,.72)', lineHeight: 1.65, maxWidth: '52ch', margin: 0, marginTop: 4 },
  ctaBtns:     { display: 'flex', gap: 12, flexWrap: 'wrap', flexShrink: 0 },
}

const CHECK = (
  <svg width="8" height="9" viewBox="0 0 8 9" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
    <path d="M1 4.5L3 6.5L7 2.5" stroke="#2494C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ── Shared sub-components ─────────────────────────────────────────────────────
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
  const bg = tint ? 'var(--ov-surface-tint-2)' : '#fff'
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

// ── Resource download card ─────────────────────────────────────────────────────
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

// ── Email signup form ──────────────────────────────────────────────────────────
const inputStyle = { fontFamily: 'var(--ov-ff-sans)', fontSize: 14.5, color: '#0D1F4E', border: '1px solid rgba(13,31,78,.15)', borderRadius: 10, padding: '13px 16px', outline: 'none', width: '100%', boxSizing: 'border-box', transition: 'border-color .15s, box-shadow .15s', background: '#fff' }

function EmailSignup() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', consent: false })
  const [done, setDone] = useState(false)
  const [focused, setFocused] = useState(null)

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))
  const focusStyle = (k) => focused === k ? { borderColor: '#2494C1', boxShadow: '0 0 0 3px rgba(36,148,193,.12)' } : {}

  if (done) {
    return (
      <div style={{ textAlign: 'center', padding: '32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(36,148,193,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Check size={24} color="#2494C1" strokeWidth={2.5} />
        </div>
        <p style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 'clamp(18px,2vw,24px)', color: '#0D1F4E', letterSpacing: '-0.01em', margin: 0 }}>You're on the list.</p>
        <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', margin: 0 }}>Thank you — we'll be in touch.</p>
      </div>
    )
  }

  return (
    <form onSubmit={e => { e.preventDefault(); setDone(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        {[['firstName', 'First Name'], ['lastName', 'Last Name']].map(([k, label]) => (
          <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: '1 1 140px' }}>
            <label style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: '#4A5568' }}>{label}</label>
            <input required type="text" value={form[k]} onChange={set(k)} onFocus={() => setFocused(k)} onBlur={() => setFocused(null)} style={{ ...inputStyle, ...focusStyle(k) }} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: '#4A5568' }}>Email</label>
        <input required type="email" value={form.email} onChange={set('email')} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} style={{ ...inputStyle, ...focusStyle('email') }} />
      </div>
      <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer' }}>
        <input required type="checkbox" checked={form.consent} onChange={set('consent')} style={{ marginTop: 3, flexShrink: 0, accentColor: '#2494C1' }} />
        <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#4A5568', lineHeight: 1.55 }}>
          I agree to receive communications from Oceanview Life and Annuity. I understand I can unsubscribe at any time.
        </span>
      </label>
      <PillMint type="submit" style={{ alignSelf: 'flex-start' }}>Join the List</PillMint>
    </form>
  )
}

// ── Page data ─────────────────────────────────────────────────────────────────
const VALUE_CARDS = [
  {
    icon: Award,
    eyebrow: 'Financial Strength',
    title: 'Financial Strength You Can Count On',
    body: 'Rated "A" (Excellent) by A.M. Best and backed by Bayview Asset Management, we offer the stability and surplus strength that today\'s clients demand.',
  },
  {
    icon: Eye,
    eyebrow: 'Transparency',
    title: 'Straightforward Products, No Gimmicks',
    body: 'Our MYGAs and FIAs are designed with simplicity in mind — clear terms, transparent renewals, and no hidden fees or unnecessary riders.',
  },
  {
    icon: TrendingUp,
    eyebrow: 'Competitive Value',
    title: 'Industry-Leading Rates',
    body: 'We consistently offer top-tier crediting strategies and competitive yields — helping you deliver more value in every retirement conversation.',
  },
  {
    icon: Users,
    eyebrow: 'Advisor Support',
    title: 'Built for Financial Professionals',
    body: 'Fast, responsive, and easy to work with — our team is here to support your success, not get in your way.',
  },
]

const DIFF_CARDS = [
  { icon: ShieldCheck, eyebrow: 'Foundation',  title: 'Financial Strength',           body: 'An A (Excellent) A.M. Best rating backed by the capital strength of Bayview Asset Management.' },
  { icon: Eye,         eyebrow: 'Clarity',     title: 'Transparency',                 body: 'Clear terms, no hidden fees, and transparent renewal rates — clients always know what to expect.' },
  { icon: Zap,         eyebrow: 'Performance', title: 'Competitive and Flexible',     body: 'Top-tier crediting strategies across fixed and indexed products, designed to meet varied client goals.' },
  { icon: Star,        eyebrow: 'Service',     title: 'Client-Focused Features',      body: 'Products and service built around your clients — intuitive, accessible, and designed for real retirement outcomes.' },
]

const RESOURCES = {
  brochures: [
    { label: 'Client Brochure', title: 'Harbourview FIA Client Brochure' },
  ],
  rateSheets: [
    { label: 'Rate Sheet', title: 'Harbourview FIA Client Rate Sheet' },
    { label: 'Rate Sheet — California', title: 'Harbourview FIA Client Rate Sheet (CA)' },
  ],
  salesTools: [
    { label: 'Allocation Strategy', title: 'Anchoring Allocations' },
    { label: 'Retirement Planning', title: 'The New 60/40 Approach' },
    { label: 'Crediting Strategy', title: 'S&P 500 Index Crediting Strategy' },
    { label: 'Rate Strategy',      title: 'Rates That Keep Pace' },
    { label: 'Risk Control',       title: 'S&P 500 Daily Risk Control 10% Vol Strategy' },
  ],
  additional: [
    { label: 'Wholesaler Map', title: 'Simplicity Wholesaler Map' },
  ],
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function LPLLandingPage() {
  return (
    <main>

      {/* ══ Hero ════════════════════════════════════════════════════════ */}
      <div className="ov-hero-wrapper" style={{ marginBottom: 0 }}>
        <section style={{ paddingTop: 20, paddingBottom: 0 }}>
          <div className="ov-hero-card" style={{ background: 'var(--ov-navy-1000)', minHeight: 520 }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(assets/hero-beach-couple.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(85deg, rgba(0,0,0,.82) 0%, rgba(0,31,84,.4) 60%, transparent 100%)', zIndex: 1 }} />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(assets/Noise.png)', backgroundRepeat: 'repeat', backgroundSize: '200px', opacity: 0.6, pointerEvents: 'none', zIndex: 2 }} />
            <HeroShaper />
            <div className="ov-hero-content" style={{ zIndex: 3 }}>
              <PrdEyebrow light>For Financial Professionals</PrdEyebrow>
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
                <PillMint hero onClick={() => document.getElementById('lpl-products')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Products
                </PillMint>
                <PillGhost light onClick={() => document.getElementById('lpl-resources')?.scrollIntoView({ behavior: 'smooth' })}>
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
            {VALUE_CARDS.map((c) => (
              <IconCard key={c.title} {...c} tint={false} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ Products ═══════════════════════════════════════════════════ */}
      <section id="lpl-products" style={PS.sectionTint} className="ov-section prd-section">
        <div className="ov-container">

          <div style={{ marginBottom: 56 }}>
            <PrdEyebrow>Featured Products</PrdEyebrow>
            <h2 style={{ ...PS.h2, marginTop: 12, marginBottom: 16 }}>
              Annuity solutions for every retirement goal.
            </h2>
            <p style={{ ...PS.body, maxWidth: '60ch' }}>
              Whether your client is focused on predictable growth or indexed upside with principal
              protection, Oceanview has a solution built around their needs.
            </p>
          </div>

          {/* Harbourview FIA */}
          <div style={PS.introRow} className="prd-intro-row prd-intro-img-right">
            <img src="assets/older-couple-1.png" alt="Couple reviewing retirement plan" style={PS.introImg} className="prd-intro-img" />
            <div style={PS.introText}>
              <div>
                <PrdEyebrow>Fixed Indexed Annuity</PrdEyebrow>
                <h2 style={{ ...PS.h2, marginTop: 10 }}>Harbourview FIA</h2>
              </div>
              <p style={PS.body}>
                The Harbourview Fixed Indexed Annuity is designed for individuals seeking both
                asset protection against market volatility and asset growth from potential market
                gains — with principal never directly exposed to market loss.
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

          {/* Horizon MYGA */}
          <div style={{ ...PS.introRow, marginTop: 80 }} className="prd-intro-row">
            <img src="assets/family.png" alt="Family planning for the future" style={PS.introImg} className="prd-intro-img" />
            <div style={PS.introText}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <PrdEyebrow>Multi-Year Guaranteed Annuity</PrdEyebrow>
                <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 700, fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: '#fff', background: '#2494C1', borderRadius: 100, padding: '3px 10px' }}>
                  Coming Soon
                </span>
              </div>
              <h2 style={{ ...PS.h2, marginTop: 2 }}>Horizon MYGA</h2>
              <p style={PS.body}>
                The Oceanview Horizon MYGA is a Single Premium Deferred Annuity primarily
                intended for customers seeking a retirement savings accumulation vehicle —
                offering principal protection, guaranteed interest rates, tax-deferred earnings,
                and lifetime income options.
              </p>
              <KeyFeaturesCard features={[
                'Guaranteed interest rate for the full contract term',
                'Principal protection from market fluctuations',
                'Tax-deferred accumulation',
                'Lifetime income options available',
              ]} />
              <PillGhost onClick={() => { window.location.hash = 'products' }} style={{ alignSelf: 'flex-start' }}>
                Learn More About MYGAs →
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
            {DIFF_CARDS.map((c) => (
              <IconCard key={c.title} {...c} tint={false} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ Resources ══════════════════════════════════════════════════ */}
      <section id="lpl-resources" style={PS.sectionWhite} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 640, marginBottom: 52 }}>
            <PrdEyebrow>Advisor Resources</PrdEyebrow>
            <h2 style={PS.h2}>Oceanview Resources</h2>
            <p style={PS.body}>
              Explore our comprehensive collection of resources designed to empower your sales
              journey — from client brochures and rate sheets to strategy materials and tools.
            </p>
            <p style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 700, fontSize: 14, color: '#0D1F4E' }}>
              Simplicity Sales Desk:{' '}
              <a href="tel:18558057684" style={{ color: '#2494C1', textDecoration: 'none' }}>1-855-805-7684</a>
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }} className="lpl-resources-grid">
            {[
              { heading: 'Client Brochures', items: RESOURCES.brochures, icon: FileText },
              { heading: 'Rate Sheets',      items: RESOURCES.rateSheets, icon: BarChart2 },
              { heading: 'Sales Tools',      items: RESOURCES.salesTools, icon: Layers },
              { heading: 'Additional',       items: RESOURCES.additional, icon: Map },
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }} className={`lpl-res-list lpl-res-${items.length > 2 ? '3col' : '2col'}`}>
                  {items.map((r) => (
                    <ResourceCard key={r.title} {...r} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Email list signup ══════════════════════════════════════════ */}
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
                Complete a general inquiry or reach our sales team directly and one of our
                committed sales representatives will follow up with additional information.
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
