import { ShieldCheck, TrendingUp, Lock } from 'lucide-react'
import { TextLink, PillMint, PillGhost } from './Buttons.jsx'
import CTABanner from './CTABanner.jsx'
import { Eyebrow } from './common.jsx'

const S = {
  h2:      { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  h2Light: { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#F2FCFF', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  accent:  { fontStyle: 'italic', color: '#70BABF' },
  body:    { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: 0 },
  bodyDark:{ fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: 'rgba(242,252,255,.65)', lineHeight: 1.7, margin: 0 },
  iconTile:{ width: 44, height: 44, borderRadius: 10, background: 'rgba(36,148,193,.12)', border: '1px solid rgba(36,148,193,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
}

function FeatureList({ features, dark }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {features.map((f, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 0', borderTop: i > 0 ? `1px solid ${dark ? 'rgba(255,255,255,.08)' : 'rgba(36,148,193,.12)'}` : 'none' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="7" cy="7" r="6.5" stroke={dark ? '#70BABF' : '#2494C1'} strokeOpacity={dark ? '0.5' : '0.3'} />
            <path d="M4.5 7L6.5 9L9.5 5" stroke={dark ? '#70BABF' : '#2494C1'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, lineHeight: 1.6, color: dark ? 'rgba(242,252,255,.72)' : '#4A5568' }}>{f}</span>
        </div>
      ))}
    </div>
  )
}

const FIA_LINE = [
  {
    eyebrow: 'Balanced Accumulation',
    title: 'Harbourview FIA',
    tagline: 'Balanced growth potential linked to market indexes, with 100% principal protection against market downturns. Multiple crediting strategies designed for long-term accumulation.',
    features: ['Multiple index crediting strategies', 'Zero-floor principal protection', 'Death benefit for named beneficiaries'],
    route: 'harbourview-fia',
  },
  {
    eyebrow: 'Guaranteed Cap',
    title: 'CapLock™ FIA',
    tagline: 'Your cap. Your term. Locked. CapLock removes the uncertainty of changing caps by guaranteeing your declared cap rate for the entire surrender charge period.',
    features: ['Cap rate locked for the full surrender period', 'No annual cap resets or surprises', 'Multiple crediting strategy options'],
    route: 'caplock',
  },
  {
    eyebrow: 'Upside-Focused',
    title: 'Topsider FIA',
    tagline: 'Upside-focused growth potential within a structured, protected framework — index-linked interest crediting with a zero-percent floor on every strategy.',
    features: ['Upside-focused crediting strategies', 'Zero-floor protection on every strategy', 'Structured for accumulation-focused clients'],
    route: 'topsider',
  },
]

export default function FIAOverviewPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>Products</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '24ch' }}>
            Fixed Indexed Annuities
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '54ch' }}>
            Index-linked growth potential with a zero-percent floor — three products built for different ways clients want to balance upside and certainty.
          </p>
        </div>
      </section>

      {/* How FIAs work */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'center', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <Eyebrow>How They Work</Eyebrow>
                <h2 style={{ ...S.h2, marginBottom: 14 }}>
                  Market-linked growth. <em style={S.accent}>Zero market risk.</em>
                </h2>
              </div>
              <p style={S.body}>
                A Fixed Indexed Annuity credits interest based on the performance of a market index — without ever directly investing in the market. If the index falls, a built-in zero-percent floor means the account value never declines due to index loss.
              </p>
              <FeatureList features={[
                'Interest credited based on index performance, subject to a cap, participation rate, or spread',
                'Zero-floor protection — account value cannot decrease due to negative index performance',
                'Tax-deferred growth compounds over the life of the contract',
                'Multiple crediting strategies let clients diversify how interest is calculated',
              ]} />
            </div>
            <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { Icon: TrendingUp,  title: 'Index-Linked Upside', body: 'Interest credits track the performance of market indexes like the S&P 500, Nasdaq-100, or Russell 2000.' },
                { Icon: ShieldCheck, title: 'Zero-Floor Protection', body: 'A market downturn can never reduce account value due to index loss — principal is always protected.' },
                { Icon: Lock,        title: 'Locked-In Strategy Terms', body: 'Caps, participation rates, and spreads are declared for each crediting term and guaranteed for that period.' },
              ].map((f, i) => (
                <div key={i} style={{ background: 'rgba(112,186,191,0.2)', border: '1px solid rgba(112,186,191,.25)', borderRadius: 14, padding: '20px 24px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={S.iconTile}><f.Icon size={20} color="#2494C1" strokeWidth={1.75} /></div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 18, color: '#0D1F4E', letterSpacing: '-0.01em', margin: '0 0 4px' }}>{f.title}</h3>
                    <p style={{ ...S.body, fontSize: 14 }}>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compare the line — navy section */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 56 }}>
            <Eyebrow light>Three Products, One Line</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 14 }}>
              Find the right fit <em style={S.accent}>for your client.</em>
            </h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              Every Oceanview FIA shares the same zero-floor protection — they differ in how upside is structured.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="ov-risk-grid">
            {FIA_LINE.map((p, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div>
                  <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#70BABF', marginBottom: 4 }}>{p.eyebrow}</div>
                  <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 22, color: '#F2FCFF', letterSpacing: '-0.01em', lineHeight: 1.2, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ ...S.bodyDark, fontSize: 14 }}>{p.tagline}</p>
                <FeatureList dark features={p.features} />
                <TextLink color="#70BABF" onClick={() => { window.location.hash = p.route; }}>Explore {p.title}</TextLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare in detail */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <Eyebrow>Side-by-Side</Eyebrow>
              <h2 style={{ ...S.h2, marginBottom: 8 }}>Want the full comparison?</h2>
              <p style={{ ...S.body, maxWidth: '54ch' }}>
                See cap rates, participation rates, and guarantees compared side-by-side on the Client Resources comparison tool.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <PillMint onClick={() => { window.location.hash = 'client-resources?tab=comparisons'; }}>View Comparisons</PillMint>
              <PillGhost onClick={() => { window.location.hash = 'products'; }}>All Products</PillGhost>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Get Started"
            title="Not sure which FIA"
            titleAccent="fits your client?"
            body="Talk to a financial professional or contact our team to find the strategy that fits your client's goals and risk tolerance."
            cta="Contact Us"
            onClick={() => { window.location.hash = 'contact'; }}
          />
        </div>
      </section>
    </main>
  )
}
