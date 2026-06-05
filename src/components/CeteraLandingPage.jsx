import { PillMint, PillGhost } from './Buttons.jsx'
import {
  ShieldCheck, Eye, Zap, Star,
  FileText, BarChart2, Download, Layers,
  Mail, Phone,
} from 'lucide-react'
import HeroShaper from './HeroShaper.jsx'

// ── Shared styles (mirrors LPLLandingPage) ────────────────────────────────────
const S = {
  eyebrowRow:       { display: 'flex', alignItems: 'center', gap: 8 },
  eyebrowLine:      { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow:          { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' },
  eyebrowLineLight: { width: 18, height: 1, background: 'rgba(112,186,191,.6)', flexShrink: 0 },
  eyebrowLight:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#70BABF' },

  h1:       { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(38px,5.5vw,72px)', color: '#F2FCFF', letterSpacing: '-0.03em', lineHeight: 1.03, margin: 0 },
  h2:       { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  h2Light:  { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#F2FCFF', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
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
    <div style={{ background: '#fff', border: '1px solid rgba(13,31,78,.07)', borderRadius: 16, padding: '28px 24px 24px', display: 'flex', flexDirection: 'column', gap: 12, boxShadow: '0 2px 12px rgba(13,31,78,.04)' }}>
      <div style={S.iconTile}>
        <Icon size={20} color="#2494C1" strokeWidth={1.75} />
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

// ── Data ─────────────────────────────────────────────────────────────────────
const PILLARS = [
  { Icon: ShieldCheck, eyebrow: 'Foundation',  title: 'Financial Strength',    body: 'An A (Excellent) A.M. Best rating backed by the capital strength of Bayview Asset Management.' },
  { Icon: Eye,         eyebrow: 'Clarity',     title: 'Transparent by Design', body: 'Clear terms, no hidden fees, transparent renewal rates — your clients always know what to expect.' },
  { Icon: Zap,         eyebrow: 'Performance', title: 'Competitive Rates',     body: 'Top-tier crediting strategies across fixed and indexed products, consistently among the industry\'s best.' },
  { Icon: Star,        eyebrow: 'Service',     title: 'Advisor-First Support', body: 'Fast, responsive, and built around you — from case design to in-force policy service.' },
]

const RESOURCES = {
  brochures:  [
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

// ── Page ─────────────────────────────────────────────────────────────────────
export default function CeteraLandingPage() {
  return (
    <main>

      {/* 1 ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="ov-hero-wrapper" style={{ marginBottom: 40 }}>
        <section style={{ paddingTop: 20, paddingBottom: 0 }}>
          <div className="ov-hero-card" style={{ background: 'var(--ov-navy-1000)' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(assets/hero-couple.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(85deg, rgba(0,0,0,.82) 0%, rgba(0,31,84,.4) 60%, transparent 100%)', zIndex: 1 }} />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(assets/Noise.png)', backgroundRepeat: 'repeat', backgroundSize: '200px', opacity: 0.6, pointerEvents: 'none', zIndex: 2 }} />
            <HeroShaper />
            <div className="ov-hero-content" style={{ zIndex: 3 }}>
              <Eyebrow light>Cetera Financial Professional Resource Center</Eyebrow>
              <h1 className="ov-hero-title" style={S.h1}>
                Strength.<br />Simplicity.<br />
                <em style={S.accent}>Competitive Value.</em>
              </h1>
              <p style={{ ...S.bodyDark, maxWidth: '46ch', fontSize: 'clamp(14px,1.4vw,17px)' }}>
                Dependable retirement solutions built to perform — and simple enough to explain in any client meeting.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <PillMint hero onClick={() => document.getElementById('cetera-products')?.scrollIntoView({ behavior: 'smooth' })}>Explore Products</PillMint>
                <PillGhost light onClick={() => document.getElementById('cetera-resources')?.scrollIntoView({ behavior: 'smooth' })}>Download Resources</PillGhost>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2 ── Products ──────────────────────────────────────────────────────── */}
      <section id="cetera-products" style={{ background: 'var(--ov-navy-1000)' }} className="ov-section prd-section">
        <div className="ov-container">
          <div style={{ marginBottom: 56 }}>
            <Eyebrow light>Featured Products</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 14 }}>Annuity solutions for <em style={S.accent}>every retirement goal.</em></h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              Whether your client needs guaranteed growth, indexed upside with principal protection, or defined growth parameters — Oceanview has a solution built for them.
            </p>
          </div>

          {/* Harbourview MYGA */}
          <div style={S.introRow} className="prd-intro-row prd-intro-img-right">
            <img src="assets/family.png" alt="Family planning retirement" style={S.introImg} className="prd-intro-img" />
            <div style={S.introText}>
              <div>
                <Eyebrow light>Multi-Year Guaranteed Annuity</Eyebrow>
                <h2 style={S.h2Light}>Harbourview MYGA</h2>
              </div>
              <p style={S.bodyDark}>
                A fixed annuity designed for clients seeking predictable growth through a guaranteed interest rate over a defined period — with no exposure to market volatility.
              </p>
              <FeatureList dark features={['Guaranteed interest rate for the full contract term', 'Principal protection from market fluctuations', 'Predictable, tax-deferred accumulation', 'Straightforward structure with clearly defined outcomes']} />
              <PillGhost light onClick={() => { window.location.hash = 'products' }} style={{ alignSelf: 'flex-start' }}>View Product Details</PillGhost>
            </div>
          </div>

          {/* Harbourview FIA */}
          <div style={{ ...S.introRow, marginTop: 72 }} className="prd-intro-row">
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

          {/* CapLock FIA */}
          <div style={{ ...S.introRow, marginTop: 72 }} className="prd-intro-row prd-intro-img-right">
            <img src="assets/couple-walking.png" alt="Couple walking, planning ahead" style={S.introImg} className="prd-intro-img" />
            <div style={S.introText}>
              <div>
                <Eyebrow light>Fixed Indexed Annuity</Eyebrow>
                <h2 style={S.h2Light}>CapLock FIA</h2>
              </div>
              <p style={S.bodyDark}>
                A fixed indexed annuity with clearly defined growth parameters — giving clients and advisors full transparency around how interest may be credited.
              </p>
              <FeatureList dark features={['Clearly defined growth parameters and cap structure', 'Principal protection from market downturns', 'Transparency around how interest is credited', 'Structured approach to indexed growth potential']} />
              <PillGhost light onClick={() => { window.location.hash = 'products' }} style={{ alignSelf: 'flex-start' }}>View Product Details</PillGhost>
            </div>
          </div>
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
              <img src="assets/hero-beach-couple.jpg" alt="Couple enjoying retirement" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 5 ── Resources ─────────────────────────────────────────────────────── */}
      <section id="cetera-resources" style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ maxWidth: 640, marginBottom: 48 }}>
            <Eyebrow>Advisor Resources</Eyebrow>
            <h2 style={{ ...S.h2, marginBottom: 12 }}>Everything you need <em style={{ fontStyle: 'italic', color: '#2494C1' }}>to close.</em></h2>
            <p style={S.body}>
              Client brochures, rate sheets, and sales tools — all in one place. Questions?
              Call the <strong>Oceanview Sales Desk: </strong>
              <a href="tel:18336567455" style={{ color: '#2494C1', textDecoration: 'none', fontWeight: 600 }}>1-833-656-7455</a>
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }} className="lpl-resources-grid">
            {[
              { heading: 'Client Brochures', items: RESOURCES.brochures,  Icon: FileText  },
              { heading: 'Rate Sheets',      items: RESOURCES.rateSheets, Icon: BarChart2 },
              { heading: 'Sales Tools',      items: RESOURCES.salesTools, Icon: Layers    },
            ].map(({ heading, items, Icon }) => (
              <div key={heading}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ ...S.iconTile, width: 36, height: 36, borderRadius: 8 }}>
                    <Icon size={17} color="#2494C1" strokeWidth={1.75} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 700, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: '#0D1F4E', margin: 0 }}>{heading}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }} className="lpl-res-list lpl-res-3col">
                  {items.map(r => <ResourceCard key={r.title} {...r} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 ── Support contacts ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ maxWidth: 560, marginBottom: 40 }}>
            <Eyebrow>Get Support</Eyebrow>
            <h2 style={{ ...S.h2, marginBottom: 10 }}>We're here <em style={{ fontStyle: 'italic', color: '#2494C1' }}>to help.</em></h2>
            <p style={S.body}>Reach the right team for product questions, illustrations, or platform support.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="lpl-pillars-grid">
            <ContactCard icon={Mail}  label="Cetera Sales Desk"     name="Cetera Annuity Solutions" detail="annuitysolutions@cetera.com"  sub="Platform and product support for Cetera advisors" />
            <ContactCard icon={Phone} label="Wholesaler Support"    name="NFG Brokerage"             detail="801-568-2626"                sub="annuityquotes@nfgbrokerage.com — illustrations & wholesaling" />
            <ContactCard icon={Phone} label="Oceanview Sales Desk"  name="Direct Sales Support"      detail="1-833-656-7455"             sub="Product questions and advisor resources" />
          </div>
        </div>
      </section>

      {/* 7 ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: '1 1 320px', minWidth: 0 }}>
              <Eyebrow light>Get in Touch</Eyebrow>
              <h2 style={S.h2Light}>Ready to bring Oceanview <em style={S.accent}>to your clients?</em></h2>
              <p style={{ ...S.bodyDark, marginTop: 4 }}>
                Complete a general inquiry or reach our Cetera sales desk — a dedicated representative will follow up.
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
