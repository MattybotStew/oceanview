import { PillMint, PillGhost, TextLink } from './Buttons.jsx'
import { ShieldCheck, TrendingDown, DollarSign, Percent } from 'lucide-react'
import CTABanner from './CTABanner.jsx'
import { Eyebrow } from './common.jsx'

const S = {
  h2:              { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  h2Light:         { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#F2FCFF', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  accent:          { fontStyle: 'italic', color: '#70BABF' },
  body:            { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: 0 },
  bodyDark:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: 'rgba(242,252,255,.65)', lineHeight: 1.7, margin: 0 },
  iconTile:        { width: 44, height: 44, borderRadius: 10, background: 'rgba(36,148,193,.12)', border: '1px solid rgba(36,148,193,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
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

const RISKS = [
  {
    Icon: DollarSign,
    eyebrow: 'Risk #1',
    title: 'Longevity Risk',
    route: 'rrs-longevity-risk',
    body: 'Americans are living longer than ever — and outliving retirement savings is now one of the most common threats to financial security. A guaranteed income stream removes this uncertainty.',
    features: [
      'Guaranteed lifetime income options available',
      'Predictable cash flow regardless of how long you live',
      'Principal never lost to market fluctuations',
    ],
  },
  {
    Icon: TrendingDown,
    eyebrow: 'Risk #2',
    title: 'Market Risk',
    route: 'rrs-market-risk',
    body: 'A significant portfolio loss early in retirement can permanently impair income — a phenomenon called sequence-of-returns risk. Principal protection shields clients from this outcome.',
    features: [
      'Zero-floor protection: account value cannot decrease due to index loss',
      'Upside participation via index-linked crediting strategies',
      'Peace of mind through volatile markets',
    ],
  },
  {
    Icon: Percent,
    eyebrow: 'Risk #3',
    title: 'Inflation Risk',
    route: 'rrs-inflation-risk',
    body: 'Rising prices gradually erode purchasing power. Fixed indexed annuities offer growth potential tied to market indexes, which may outpace inflation over the long term.',
    features: [
      'Index-linked crediting with caps, participation rates, or spreads',
      'Growth potential beyond traditional CDs and savings accounts',
      'Tax-deferred compounding amplifies real returns over time',
    ],
  },
  {
    Icon: ShieldCheck,
    eyebrow: 'Risk #4',
    title: 'Interest Rate Risk',
    route: 'rrs-interest-rate-risk',
    body: 'Interest rate changes can erode the value of bond holdings or reduce income from traditional savings vehicles. MYGAs lock in competitive rates for the full contract term.',
    features: [
      'Guaranteed rates locked for the full contract period',
      'MYGA rates consistently competitive vs. comparable CDs',
      'No reinvestment risk during the guarantee period',
    ],
  },
]

export default function RetirementRiskPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>Insights</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '22ch' }}>
            Retirement Risk Series
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '54ch' }}>
            A guide to the four major threats to retirement security — and how Fixed Indexed Annuities provide guaranteed income, principal protection, and growth potential.
          </p>
        </div>
      </section>

      {/* 4 Risks — navy section with pillar cards */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 56 }}>
            <Eyebrow light>Four Threats to Retirement Security</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 14 }}>
              Understanding what puts retirement savings <em style={S.accent}>at risk.</em>
            </h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              Most retirees face the same four risks — and Oceanview FIAs and MYGAs are specifically designed to address each one.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="ov-risk-grid">
            {RISKS.map((r, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={S.iconTile}>
                    <r.Icon size={20} color="#70BABF" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#70BABF', marginBottom: 4 }}>{r.eyebrow}</div>
                    <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 22, color: '#F2FCFF', letterSpacing: '-0.01em', lineHeight: 1.2, margin: 0 }}>{r.title}</h3>
                  </div>
                </div>
                <p style={{ ...S.bodyDark, fontSize: 14 }}>{r.body}</p>
                <FeatureList dark features={r.features} />
                <TextLink color="#70BABF" onClick={() => { window.location.hash = r.route; }}>Learn more</TextLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIA Solution */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'center', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <Eyebrow>The Oceanview Solution</Eyebrow>
                <h2 style={{ ...S.h2, marginBottom: 14 }}>
                  One product. <em style={{ fontStyle: 'italic', color: '#2494C1' }}>Four protections.</em>
                </h2>
              </div>
              <p style={S.body}>
                The Harbourview Fixed Indexed Annuity addresses all four retirement risks in a single contract — giving clients market upside potential, zero-floor principal protection, tax-deferred growth, and guaranteed income options.
              </p>
              <FeatureList features={[
                'A.M. Best A (Excellent) rated carrier',
                'Multiple index crediting strategies: S&P 500, Nasdaq-100, Russell 2000',
                '10% free withdrawal starting year 2',
                'Nursing Home Confinement and Terminal Illness Waiver',
                'Death benefit for named beneficiaries',
              ]} />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 8 }}>
                <PillMint onClick={() => { window.location.hash = 'harbourview-fia' }}>Explore Harbourview FIA</PillMint>
                <PillGhost onClick={() => { window.location.hash = 'white-papers' }}>Read White Papers</PillGhost>
              </div>
            </div>
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <img src="assets/older-couple-1.png" alt="Couple reviewing retirement plan" loading="lazy" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Put It Into Practice"
            title="Address every retirement risk"
            titleAccent="with one solution."
            body="The Harbourview FIA provides principal protection, index-linked growth, and guaranteed income options — all in a single contract backed by an A (Excellent) A.M. Best rating."
            cta="Explore Products"
            onClick={() => { window.location.hash = 'products'; }}
          />
        </div>
      </section>
    </main>
  )
}
