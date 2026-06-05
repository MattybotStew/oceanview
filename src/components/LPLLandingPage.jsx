import { useState } from 'react'
import { PillMint, PillGhost, PillNavy, TextLink } from './Buttons.jsx'
import {
  ShieldCheck, Eye, Zap, Star,
  FileText, BarChart2, Download, Map,
  Layers, Check,
} from 'lucide-react'
import HeroShaper from './HeroShaper.jsx'

// ── Shared styles ─────────────────────────────────────────────────────────────
const S = {
  eyebrowRow:       { display: 'flex', alignItems: 'center', gap: 8 },
  eyebrowLine:      { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow:          { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' },
  eyebrowLineLight: { width: 18, height: 1, background: 'rgba(112,186,191,.6)', flexShrink: 0 },
  eyebrowLight:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#70BABF' },

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

function Eyebrow({ light, children }) {
  return (
    <div style={{ ...S.eyebrowRow, marginBottom: 14 }}>
      <div style={light ? S.eyebrowLineLight : S.eyebrowLine} />
      <span style={light ? S.eyebrowLight : S.eyebrow}>{children}</span>
    </div>
  )
}

// Inline feature list (replaces card-within-card KeyFeaturesCard)
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

// Differentiator pillar card
function PillarCard({ Icon, eyebrow, title, body }) {
  return (
    <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 14, padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={S.iconTile}>
        <Icon size={20} color="#2494C1" strokeWidth={1.75} />
      </div>
      <div>
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#70BABF', marginBottom: 6 }}>{eyebrow}</div>
        <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 19, color: '#F2FCFF', letterSpacing: '-0.01em', lineHeight: 1.2, margin: 0 }}>{title}</h3>
        <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13.5, color: 'rgba(242,252,255,.55)', lineHeight: 1.65, margin: '8px 0 0' }}>{body}</p>
      </div>
    </div>
  )
}

// Resource download row
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

// Email signup
const inputStyle = { fontFamily: 'var(--ov-ff-sans)', fontSize: 16, color: '#0D1F4E', border: '1px solid rgba(13,31,78,.15)', borderRadius: 10, padding: '13px 16px', outline: 'none', width: '100%', boxSizing: 'border-box', transition: 'border-color .15s, box-shadow .15s', background: '#fff' }

function EmailSignup() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', consent: false })
  const [done, setDone] = useState(false)
  const [focused, setFocused] = useState(null)
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))
  const focusStyle = k => focused === k ? { borderColor: '#2494C1', boxShadow: '0 0 0 3px rgba(36,148,193,.12)' } : {}

  if (done) return (
    <div style={{ textAlign: 'center', padding: '32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(36,148,193,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Check size={24} color="#2494C1" strokeWidth={2.5} />
      </div>
      <p style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 'clamp(18px,2vw,24px)', color: '#0D1F4E', letterSpacing: '-0.01em', margin: 0 }}>You're on the list.</p>
      <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', margin: 0 }}>Thank you — we'll be in touch.</p>
    </div>
  )

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

// ── Data ─────────────────────────────────────────────────────────────────────
const PILLARS = [
  { Icon: ShieldCheck, eyebrow: 'Foundation',  title: 'Financial Strength',       body: 'An A (Excellent) A.M. Best rating backed by the capital strength of Bayview Asset Management.' },
  { Icon: Eye,         eyebrow: 'Clarity',     title: 'Transparent by Design',    body: 'Clear terms, no hidden fees, transparent renewal rates — your clients always know what to expect.' },
  { Icon: Zap,         eyebrow: 'Performance', title: 'Competitive Rates',        body: 'Top-tier crediting strategies across fixed and indexed products, consistently among the industry\'s best.' },
  { Icon: Star,        eyebrow: 'Service',     title: 'Advisor-First Support',    body: 'Fast, responsive, and built around you — from case design to in-force policy service.' },
]

const RESOURCES = {
  brochures:  [{ label: 'Client Brochure',        title: 'Harbourview FIA Client Brochure' }],
  rateSheets: [{ label: 'Rate Sheet',             title: 'Harbourview FIA Client Rate Sheet' }, { label: 'Rate Sheet — California', title: 'Harbourview FIA Client Rate Sheet (CA)' }],
  salesTools: [{ label: 'Allocation Strategy',   title: 'Anchoring Allocations' }, { label: 'Retirement Planning', title: 'The New 60/40 Approach' }, { label: 'Crediting Strategy', title: 'S&P 500 Index Crediting Strategy' }, { label: 'Rate Strategy', title: 'Rates That Keep Pace' }, { label: 'Risk Control', title: 'S&P 500 Daily Risk Control 10% Vol Strategy' }],
  additional: [{ label: 'Wholesaler Map',        title: 'Simplicity Wholesaler Map' }],
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function LPLLandingPage() {
  return (
    <main>

      {/* 1 ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="ov-hero-wrapper" style={{ marginBottom: 40 }}>
        <section style={{ paddingTop: 20, paddingBottom: 0 }}>
          <div className="ov-hero-card" style={{ background: 'var(--ov-navy-1000)' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(assets/hero-beach-couple.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(85deg, rgba(0,0,0,.82) 0%, rgba(0,31,84,.4) 60%, transparent 100%)', zIndex: 1 }} />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(assets/Noise.png)', backgroundRepeat: 'repeat', backgroundSize: '200px', opacity: 0.6, pointerEvents: 'none', zIndex: 2 }} />
            <HeroShaper />
            <div className="ov-hero-content" style={{ zIndex: 3 }}>
              <Eyebrow light>For LPL Financial Advisors</Eyebrow>
              <h1 className="ov-hero-title" style={S.h1}>
                Strength.<br />Simplicity.<br />
                <em style={{ fontStyle: 'italic', color: '#70BABF' }}>Competitive Value.</em>
              </h1>
              <p style={{ ...S.bodyDark, maxWidth: '46ch', fontSize: 'clamp(14px,1.4vw,17px)' }}>
                Dependable retirement solutions built to perform — and simple enough to explain in any client meeting.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <PillMint hero onClick={() => document.getElementById('lpl-products')?.scrollIntoView({ behavior: 'smooth' })}>Explore Products</PillMint>
                <PillGhost light onClick={() => document.getElementById('lpl-resources')?.scrollIntoView({ behavior: 'smooth' })}>Download Resources</PillGhost>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2 ── Products ──────────────────────────────────────────────────────── */}
      <section id="lpl-products" style={{ background: 'var(--ov-navy-1000)' }} className="ov-section prd-section">
        <div className="ov-container">
          <div style={{ marginBottom: 56 }}>
            <Eyebrow light>Featured Products</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 14 }}>Annuity solutions for <em style={S.accent}>every retirement goal.</em></h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              Whether your client is focused on predictable guaranteed growth or index-linked upside with principal protection, Oceanview has a solution built for them.
            </p>
          </div>

          {/* Harbourview FIA */}
          <div style={S.introRow} className="prd-intro-row prd-intro-img-right">
            <img src="assets/older-couple-1.png" alt="Couple reviewing retirement plan" style={S.introImg} className="prd-intro-img" />
            <div style={S.introText}>
              <div>
                <Eyebrow light>Fixed Indexed Annuity</Eyebrow>
                <h2 style={S.h2Light}>Harbourview FIA</h2>
              </div>
              <p style={S.bodyDark}>
                Designed for clients seeking both asset protection from market volatility and growth potential from market gains — with principal never directly exposed to market loss.
              </p>
              <FeatureList dark features={['Principal protected from market downturns', 'Interest crediting linked to market index performance', 'Multiple crediting strategy options', 'Tax-deferred accumulation']} />
              <PillGhost light onClick={() => { window.location.hash = 'products' }} style={{ alignSelf: 'flex-start' }}>View Product Details</PillGhost>
            </div>
          </div>

          {/* Horizon MYGA */}
          <div style={{ ...S.introRow, marginTop: 72 }} className="prd-intro-row">
            <img src="assets/family.png" alt="Family planning for the future" style={S.introImg} className="prd-intro-img" />
            <div style={S.introText}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
                  <div style={S.eyebrowRow}>
                    <div style={S.eyebrowLineLight} />
                    <span style={S.eyebrowLight}>Multi-Year Guaranteed Annuity</span>
                  </div>
                  <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 700, fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: '#fff', background: '#2494C1', borderRadius: 100, padding: '3px 10px' }}>Coming Soon</span>
                </div>
                <h2 style={S.h2Light}>Horizon MYGA</h2>
              </div>
              <p style={S.bodyDark}>
                A Single Premium Deferred Annuity for clients seeking a straightforward retirement savings accumulation vehicle — offering principal protection, a guaranteed interest rate, and tax-deferred earnings.
              </p>
              <FeatureList dark features={['Guaranteed interest rate for the full contract term', 'Principal protection from market fluctuations', 'Tax-deferred accumulation', 'Lifetime income options available']} />
              <PillGhost light onClick={() => { window.location.hash = 'products' }} style={{ alignSelf: 'flex-start' }}>Learn More About MYGAs</PillGhost>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── Why Oceanview — pillars ────────────────────────────────────────── */}
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
                <div style={{ ...S.eyebrowRow, marginBottom: 14 }}>
                  <div style={S.eyebrowLineLight} />
                  <span style={S.eyebrowLight}>Case Study</span>
                </div>
                <h2 style={{ ...S.h2Light, fontSize: 'clamp(22px,2.8vw,36px)' }}>
                  How John and Betty protected their savings —{' '}
                  <em style={S.accent}>while still growing what matters most.</em>
                </h2>
              </div>
              <p style={{ ...S.bodyDark, maxWidth: '52ch' }}>
                A retired couple used the Harbourview Fixed Indexed Annuity to shield their savings from market volatility while achieving meaningful growth for their loved ones.
              </p>
              <PillMint onClick={() => { window.location.hash = 'case-studies' }}>Read Their Story</PillMint>
            </div>
            <div style={{ width: '38%', flexShrink: 0 }} className="lpl-case-img">
              <img src="assets/hero-couple.jpg" alt="Couple enjoying retirement" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 5 ── Resources ─────────────────────────────────────────────────────── */}
      <section id="lpl-resources" style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ maxWidth: 640, marginBottom: 48 }}>
            <Eyebrow>Advisor Resources</Eyebrow>
            <h2 style={{ ...S.h2, marginBottom: 12 }}>Everything you need <em style={{ fontStyle: 'italic', color: '#2494C1' }}>to close.</em></h2>
            <p style={S.body}>
              Client brochures, rate sheets, and sales tools — all in one place. Questions?
              Call the <strong>Simplicity Sales Desk: </strong>
              <a href="tel:18558057684" style={{ color: '#2494C1', textDecoration: 'none', fontWeight: 600 }}>1-855-805-7684</a>
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }} className="lpl-resources-grid">
            {[
              { heading: 'Client Brochures', items: RESOURCES.brochures,  Icon: FileText  },
              { heading: 'Rate Sheets',      items: RESOURCES.rateSheets, Icon: BarChart2 },
              { heading: 'Sales Tools',      items: RESOURCES.salesTools, Icon: Layers    },
              { heading: 'Additional',       items: RESOURCES.additional, Icon: Map       },
            ].map(({ heading, items, Icon }) => (
              <div key={heading}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ ...S.iconTile, width: 36, height: 36, borderRadius: 8 }}>
                    <Icon size={17} color="#2494C1" strokeWidth={1.75} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 700, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: '#0D1F4E', margin: 0 }}>{heading}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }} className={`lpl-res-list lpl-res-${items.length > 2 ? '3col' : '2col'}`}>
                  {items.map(r => <ResourceCard key={r.title} {...r} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: '1 1 320px', minWidth: 0 }}>
              <Eyebrow light>Get in Touch</Eyebrow>
              <h2 style={{ ...S.h2Light }}>Ready to bring Oceanview <em style={S.accent}>to your clients?</em></h2>
              <p style={{ ...S.bodyDark, marginTop: 4 }}>
                Complete a general inquiry or reach our sales team directly — a dedicated representative will follow up.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', flexShrink: 0 }}>
              <PillMint hero onClick={() => { window.location.hash = 'contact' }}>Contact Us</PillMint>
              <PillGhost light hero onClick={() => { window.location.hash = 'sales-tools' }}>Browse Sales Tools</PillGhost>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
