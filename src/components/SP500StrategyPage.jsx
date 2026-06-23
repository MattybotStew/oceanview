import { PillMint, PillGhost } from './Buttons.jsx'
import { TrendingUp } from 'lucide-react'
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
  strategyLabel: { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#F2FCFF', lineHeight: 1.5, margin: 0 },
  strategyTerm: { fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: 'rgba(242,252,255,.5)', lineHeight: 1.5, margin: 0 },
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
  { name: 'Annual Point to Point with Cap Rate',             term: '1-Year Term',     desc: 'Measures index performance from one anniversary to the next. Growth is credited up to a declared cap rate.' },
  { name: 'Annual Point to Point with Participation Rate',   term: '1-Year Term',     desc: 'Credits a declared percentage of the index gain each year — no cap ceiling, participation rate applies instead.' },
  { name: '2-Year Point to Point with Participation Rate',   term: '2-Year Term',     desc: 'Measures index performance over a two-year window, allowing for smoother participation over a longer interval.' },
  { name: 'Monthly Average with Annual Cap Rate',            term: '1-Year Term',     desc: 'Averages the S&P 500 value across each month of the contract year, then credits gains up to an annual cap.' },
  { name: 'Daily Risk Control 5% — Participation Rate',      term: 'Risk-Controlled', desc: 'Tracks a volatility-managed version of the index targeting 5% daily volatility. Credits a participation rate on gains.' },
  { name: 'Daily Risk Control 10% — Participation Rate',     term: 'Risk-Controlled', desc: 'Tracks a volatility-managed version of the index targeting 10% daily volatility. Credits a participation rate on gains.' },
]

export default function SP500StrategyPage() {
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
            S&P 500 Index Strategy
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '54ch' }}>
            Six crediting strategies linked to the S&P 500 Index — offering the broadest large-cap U.S. equity exposure available on the Harbourview Fixed Indexed Annuity.
          </p>
        </div>
      </section>

      {/* Section 1: About the Index */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={S.iconTile}>
                <TrendingUp size={20} color="#2494C1" strokeWidth={1.75} />
              </div>
              <Eyebrow>About the Index</Eyebrow>
              <h2 style={S.h2}>
                The most widely followed <em style={S.accentLight}>equity benchmark in the world.</em>
              </h2>
              <p style={S.body}>
                The S&P 500 tracks the 500 largest publicly traded U.S. companies by market capitalization — representing approximately 80% of the total U.S. equity market. It spans every major sector: technology, healthcare, financials, consumer staples, energy, and more. When most people talk about "the market," they mean the S&P 500.
              </p>
              <p style={S.body}>
                For a Fixed Indexed Annuity, the S&P 500 serves as the external benchmark that determines how interest is credited to the contract. The account does not invest directly in the index — instead, the index's performance is used to calculate a credited rate. When the index rises, the account earns a portion of that gain. When the index falls, the account earns zero — but never loses principal.
              </p>
            </div>
            <div style={{ flex: '1 1 300px', minWidth: 0 }}>
              <div style={S.cardTeal}>
                <h3 style={S.h3}>S&P 500 Key Facts</h3>
                <div style={{ marginTop: 16 }}>
                  <FeatureList features={[
                    '500 of the largest U.S. companies, representing ~80% of U.S. equity market capitalization',
                    'Diversified across all 11 GICS sectors — not concentrated in any single industry',
                    'One of the most liquid and transparent indexes globally, with a 60+ year track record',
                    'Six distinct crediting strategies available on the Harbourview FIA — more than any other index offered',
                    'Risk-controlled variants smooth volatility, making index performance more predictable for crediting purposes',
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
              Six ways to participate in <em style={S.accent}>S&P 500 growth.</em>
            </h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              Each strategy uses a different method to measure and credit index performance. The right choice depends on the client's timeline, rate environment, and preference for certainty vs. upside potential.
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

      {/* Section 3: Why S&P 500 */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'center', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <Eyebrow>Why This Index</Eyebrow>
                <h2 style={{ ...S.h2, marginBottom: 14 }}>
                  Broad participation, <em style={{ fontStyle: 'italic', color: '#2494C1' }}>with a guaranteed floor.</em>
                </h2>
              </div>
              <p style={S.body}>
                Linking a crediting strategy to the S&P 500 gives clients exposure to the full breadth of U.S. large-cap equity performance — without the risk of losing principal to a market downturn. The zero-floor guarantee means that even in a year when the S&P 500 drops 30%, the contract value does not decline. When the index recovers, the contract participates in the upside from a protected base.
              </p>
              <FeatureList features={[
                'Broadest available index on the Harbourview FIA — 6 strategy options to match any risk profile',
                'Risk-controlled variants reduce declared-rate volatility year to year',
                'No direct market investment — principal is protected regardless of index performance',
                'Cap and participation rates are declared in advance, so clients know the potential outcome before selecting a strategy',
              ]} />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 8 }}>
                <PillMint onClick={() => { window.location.hash = 'harbourview-fia' }}>Explore Harbourview FIA</PillMint>
                <PillGhost onClick={() => { window.location.hash = 'contact' }}>Talk to a Specialist</PillGhost>
              </div>
            </div>
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <img src="assets/four.jpg" alt="Couple planning retirement" loading="lazy" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
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
            body="The Harbourview FIA offers S&P 500, Nasdaq-100, Russell 2000, and Fixed Interest strategies — giving clients the flexibility to build the right index mix for their retirement goals."
            cta="View the Harbourview FIA"
            onClick={() => { window.location.hash = 'harbourview-fia' }}
          />
        </div>
      </section>
    </main>
  )
}
