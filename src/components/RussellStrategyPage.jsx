import { PillMint, PillGhost } from './Buttons.jsx'
import { BarChart } from 'lucide-react'
import CTABanner from './CTABanner.jsx'
import { Eyebrow } from './common.jsx'

const S = {
  h2: { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  h2Light: { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#F2FCFF', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  accent: { fontStyle: 'italic', color: '#70BABF' },
  accentLight: { fontStyle: 'italic', color: '#2494C1' },
  body: { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: 0 },
  bodyDark: { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: 'rgba(242,252,255,.65)', lineHeight: 1.7, margin: 0 },
  iconTile: { width: 44, height: 44, borderRadius: 10, background: 'rgba(36,148,193,.12)', border: '1px solid rgba(36,148,193,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  cardTeal: { background: 'rgba(112,186,191,0.2)', borderRadius: 14, border: '1px solid rgba(112,186,191,.25)', padding: '28px 32px' },
  cardDark: { background: 'rgba(255,255,255,.05)', borderRadius: 16, border: '1px solid rgba(255,255,255,.08)', padding: '28px 32px' },
  h3: { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 19, color: '#0D1F4E', letterSpacing: '-0.01em', lineHeight: 1.3, margin: 0 },
  h3Dark: { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 19, color: '#F2FCFF', letterSpacing: '-0.01em', lineHeight: 1.3, margin: 0 },
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

const STRATEGIES = [
  { name: 'Annual Point to Point with Cap Rate',           term: '1-Year Term',     desc: 'Measures Russell 2000 performance from one anniversary to the next. Growth is credited up to a declared annual cap rate.' },
  { name: 'Annual Point to Point with Participation Rate', term: '1-Year Term',     desc: 'Credits a declared percentage of the small-cap index gain each year — participation rate applies, no cap ceiling.' },
  { name: '2-Year Point to Point with Participation Rate', term: '2-Year Term',     desc: 'Captures Russell 2000 performance over two years, smoothing the impact of short-term small-cap volatility.' },
  { name: 'Daily Risk Control 10% — Participation Rate',   term: 'Risk-Controlled', desc: 'Tracks a volatility-managed version of the Russell 2000 targeting 10% daily volatility, then credits a participation rate on gains.' },
]

export default function RussellStrategyPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>Crediting Strategies</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '22ch' }}>
            Russell 2000 Index Strategy
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '54ch' }}>
            Four crediting strategies linked to the Russell 2000 Index — the leading benchmark for U.S. small-cap equity performance, available on the Harbourview Fixed Indexed Annuity.
          </p>
        </div>
      </section>

      {/* Section 1: About the Index */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={S.iconTile}>
                <BarChart size={20} color="#2494C1" strokeWidth={1.75} />
              </div>
              <Eyebrow>About the Index</Eyebrow>
              <h2 style={S.h2}>
                Small-cap exposure for <em style={S.accentLight}>broader diversification.</em>
              </h2>
              <p style={S.body}>
                The Russell 2000 tracks the 2,000 smallest companies in the Russell 3000 Index — the bottom 8% by market capitalization of the total U.S. equity universe. These are smaller, domestically focused businesses that tend to move differently than large-cap counterparts, giving a portfolio exposure to a different segment of the economy.
              </p>
              <p style={S.body}>
                Small-cap companies historically exhibit higher long-term growth potential than large caps, though with greater short-term volatility. For a Fixed Indexed Annuity, this volatility can work in the client's favor: when the Russell 2000 has strong up years, participation in those gains can be meaningful — and when it has down years, the zero-floor guarantee means the account simply credits zero rather than declining.
              </p>
            </div>
            <div style={{ flex: '1 1 300px', minWidth: 0 }}>
              <div style={S.cardTeal}>
                <h3 style={S.h3}>Russell 2000 Key Facts</h3>
                <div style={{ marginTop: 16 }}>
                  <FeatureList features={[
                    '2,000 small-cap U.S. companies — domestically focused, less influenced by global trade dynamics than large caps',
                    'Historically higher long-term growth potential than large-cap indexes, with greater short-term swings',
                    'Widely used as a barometer of U.S. domestic economic health and small business activity',
                    'Risk-controlled variant available on the Harbourview FIA, smoothing year-to-year crediting rate variability',
                    'Diversifies index exposure alongside S&P 500 and Nasdaq-100 strategies on the same contract',
                  ]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Available Strategies */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 48 }}>
            <Eyebrow light>Available Strategies</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 14 }}>
              Four ways to participate in <em style={S.accent}>small-cap growth.</em>
            </h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              Each strategy measures Russell 2000 performance differently. Choose based on the client's preference for certainty vs. upside, and their comfort with a 1-year vs. 2-year crediting window.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="ov-risk-grid">
            {STRATEGIES.map((s, i) => (
              <div key={i} style={S.cardDark}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
                  <h3 style={S.h3Dark}>{s.name}</h3>
                  <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 11, fontWeight: 600, color: '#70BABF', background: 'rgba(112,186,191,.12)', border: '1px solid rgba(112,186,191,.2)', borderRadius: 99, padding: '3px 10px', whiteSpace: 'nowrap', flexShrink: 0 }}>{s.term}</span>
                </div>
                <p style={{ ...S.bodyDark, fontSize: 14 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why Russell 2000 */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'center', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <Eyebrow>Why This Index</Eyebrow>
                <h2 style={{ ...S.h2, marginBottom: 14 }}>
                  Small-cap upside, <em style={{ fontStyle: 'italic', color: '#2494C1' }}>zero downside risk.</em>
                </h2>
              </div>
              <p style={S.body}>
                Small-cap stocks historically outperform large caps over long periods — but the volatility can be significant in any given year. A Fixed Indexed Annuity changes that calculation. When the Russell 2000 posts strong gains, the client earns a meaningful credit. When small caps sell off, the account holds its value. This asymmetry — participate in the upside, protected from the downside — is the core case for index-linked crediting strategies.
              </p>
              <FeatureList features={[
                'Small-cap stocks often outperform large caps over full market cycles',
                'Greater short-term volatility creates larger potential credited rates during strong years',
                'Zero-floor guarantee means down years in the Russell 2000 result in zero credit — not a loss',
                'Combine with S&P 500 strategies on the same contract for diversified index exposure',
              ]} />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 8 }}>
                <PillMint onClick={() => { window.location.hash = 'harbourview-fia' }}>Explore Harbourview FIA</PillMint>
                <PillGhost onClick={() => { window.location.hash = 'contact' }}>Talk to a Specialist</PillGhost>
              </div>
            </div>
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <img src="assets/couple-walking.png" alt="Couple planning retirement" loading="lazy" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Next Step"
            title="See all Harbourview FIA"
            titleAccent="crediting strategies."
            body="The Harbourview FIA offers Russell 2000, S&P 500, Nasdaq-100, and Fixed Interest strategies — giving clients the flexibility to build the right index mix for their retirement goals."
            cta="View the Harbourview FIA"
            onClick={() => { window.location.hash = 'harbourview-fia' }}
          />
        </div>
      </section>
    </main>
  )
}
