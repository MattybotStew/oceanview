import { PillGhost } from './Buttons.jsx'
import CTABanner from './CTABanner.jsx'
import { Eyebrow } from './common.jsx'
import { Shield, TrendingUp, BarChart2, ArrowUpFromLine, RefreshCw } from 'lucide-react'

const S = {
  h2:   { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  lede: { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: '60ch' },
}

function BrochureCard({ icon: Icon, tag, title, body, dark, tint }) {
  const cardOverride = dark
    ? { background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', boxShadow: 'none' }
    : tint
    ? { background: 'rgba(112,186,191,0.2)', border: '1px solid rgba(112,186,191,.25)', boxShadow: 'none' }
    : {}
  return (
    <div style={{
      background: '#fff',
      border: '1px solid rgba(13,31,78,.07)',
      borderRadius: 14,
      padding: '24px 22px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      boxShadow: '0 2px 8px rgba(13,31,78,.04)',
      height: '100%',
      boxSizing: 'border-box',
      ...cardOverride,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 10,
        background: dark ? 'rgba(255,255,255,.08)' : 'var(--ov-surface-tint)',
        border: dark ? '1px solid rgba(255,255,255,.12)' : '1px solid rgba(36,148,193,.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <Icon size={18} color={dark ? '#70BABF' : '#2494C1'} strokeWidth={1.75} />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: dark ? '#70BABF' : '#2494C1' }}>{tag}</span>
        <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 17, color: dark ? '#F2FCFF' : '#0D1F4E', letterSpacing: '-0.01em', lineHeight: 1.25, margin: 0 }}>{title}</h3>
        <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13.5, color: dark ? 'rgba(242,252,255,.65)' : '#4A5568', lineHeight: 1.6, margin: 0 }}>{body}</p>
      </div>
      <div style={{ paddingTop: 4 }}>
        <PillGhost style={{ fontSize: 13 }}>Download PDF</PillGhost>
      </div>
    </div>
  )
}

const MYGA_BROCHURES = [
  {
    icon: Shield,
    tag: 'Multi-Year Guaranteed Annuity',
    title: 'Harbourview MYGA Product Brochure',
    body: 'An overview of the Harbourview Multi-Year Guaranteed Annuity — guaranteed interest, term options, withdrawal provisions, and key contract features.',
  },
  {
    icon: Shield,
    tag: 'Multi-Year Guaranteed Annuity',
    title: 'Horizon MYGA Product Brochure',
    body: 'An overview of the Horizon MYGA — predictable, tax-deferred growth through a guaranteed interest rate over a defined accumulation period.',
  },
  {
    icon: Shield,
    tag: 'Multi-Year Guaranteed Annuity',
    title: 'Sky Harbourview MYGA Product Brochure',
    body: 'An overview of the Sky Harbourview MYGA — guaranteed returns, tax-deferred growth, and a death benefit for beneficiaries included at no additional cost.',
  },
  {
    icon: RefreshCw,
    tag: 'Fixed Annuity',
    title: 'Current Rate Fixed Annuity Brochure',
    body: 'An overview of the Current Rate Fixed Annuity — guaranteed interest today with the flexibility to adjust your growth approach as retirement goals evolve.',
  },
]

const FIA_BROCHURES = [
  {
    icon: TrendingUp,
    tag: 'Fixed Indexed Annuity',
    title: 'Harbourview Fixed Indexed Annuity Brochure',
    body: 'An overview of the Harbourview FIA — index-linked interest crediting with 100% principal protection, multiple crediting strategies, and flexible term options.',
  },
  {
    icon: BarChart2,
    tag: 'Fixed Indexed Annuity',
    title: 'CapLock Fixed Indexed Annuity Brochure',
    body: 'An overview of CapLock — clearly defined index crediting parameters with transparency around how interest is credited to the contract.',
  },
  {
    icon: ArrowUpFromLine,
    tag: 'Fixed Indexed Annuity',
    title: 'Topsider Fixed Indexed Annuity Brochure',
    body: 'An overview of Topsider — an accumulation-focused fixed indexed annuity built to emphasize upside growth potential within a protected framework.',
  },
]

export default function BrochuresPage() {
  return (
    <main>

      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>Client Resources</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '18ch' }}>
            Product Brochures
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '52ch' }}>
            Plain-language product overviews for every Oceanview annuity — ready to share with clients or download as PDF.
          </p>
        </div>
      </section>

      {/* Fixed Annuities */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 40 }}>
            <Eyebrow>Fixed Annuities</Eyebrow>
            <h2 style={{ ...S.h2, color: '#0D1F4E', marginBottom: 10 }}>MYGA &amp; Fixed Annuity Brochures</h2>
            <p style={{ ...S.lede, color: '#4A5568' }}>
              Client-ready overviews for our multi-year guaranteed annuity and fixed annuity products.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="ov-tools-grid">
            {MYGA_BROCHURES.map(b => <BrochureCard key={b.title} {...b} tint />)}
          </div>
        </div>
      </section>

      {/* Fixed Indexed Annuities */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 40 }}>
            <Eyebrow light>Fixed Indexed Annuities</Eyebrow>
            <h2 style={{ ...S.h2, color: '#F2FCFF', marginBottom: 10 }}>FIA Brochures</h2>
            <p style={{ ...S.lede, color: 'rgba(242,252,255,.62)' }}>
              Overviews of our index-linked annuity products — clear explanations of how each product works and who it suits.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="ov-tools-grid">
            {FIA_BROCHURES.map(b => <BrochureCard key={b.title} {...b} dark />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Questions?"
            title="Not sure which product"
            titleAccent="is right for you?"
            body="Our team can help match the right annuity to your retirement goals. Talk to a licensed financial professional or contact us directly."
            cta="Contact Us"
            onClick={() => { window.location.hash = 'contact' }}
          />
        </div>
      </section>

    </main>
  )
}
