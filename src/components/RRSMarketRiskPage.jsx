import { PillMint, PillGhost } from './Buttons.jsx'
import { TrendingDown } from 'lucide-react'
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
  cardWhite: { background: '#fff', borderRadius: 14, border: '1px solid rgba(13,31,78,.08)', padding: '28px 32px' },
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

export default function RRSMarketRiskPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <button
            type="button"
            onClick={() => { window.location.hash = 'retirement-risk'; }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 0, padding: 0, marginBottom: 20, fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: 'var(--ov-navy-600)', cursor: 'pointer' }}
          >
            ← Back to Retirement Risk Series
          </button>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>Retirement Risk Series</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '22ch' }}>
            Market Risk
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '54ch' }}>
            A significant portfolio loss early in retirement can permanently impair income. Principal protection shields clients from this outcome — and Oceanview FIAs are built for exactly this moment.
          </p>
        </div>
      </section>

      {/* Section 1: Understanding Market Risk */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={S.iconTile}>
                <TrendingDown size={20} color="#2494C1" strokeWidth={1.75} />
              </div>
              <Eyebrow>What Is Market Risk?</Eyebrow>
              <h2 style={S.h2}>
                When market downturns threaten <em style={S.accentLight}>retirement security.</em>
              </h2>
              <p style={S.body}>
                Market risk — also called sequence-of-returns risk — is the danger that a portfolio loss occurs at the worst possible moment: right before or early in retirement. When withdrawals begin while account values are depressed, the portfolio may never recover. Even if the market eventually rebounds, the damage from selling assets at a low to fund living expenses can be permanent.
              </p>
              <p style={S.body}>
                The math is unforgiving. A 20% loss in year one of retirement requires a 25% gain just to break even — and during that recovery time, the retiree is still withdrawing. This is the sequence-of-returns trap: losses early in the drawdown phase compound in the wrong direction.
              </p>
            </div>
            <div style={{ flex: '1 1 300px', minWidth: 0 }}>
              <div style={S.cardTeal}>
                <h3 style={S.h3}>Key Market Risk Facts</h3>
                <div style={{ marginTop: 16 }}>
                  <FeatureList features={[
                    'A 20% decline takes a 25% recovery just to break even — while withdrawals continue',
                    'The first five years of retirement are the most vulnerable to sequence risk',
                    'Traditional diversification does not eliminate sequence-of-returns risk — it only reduces volatility',
                    'Principal protection eliminates the sequence problem entirely: the account never declines due to market loss',
                  ]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Market Risk Matters */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 48 }}>
            <Eyebrow light>Why It Matters</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 14 }}>
              The retirement window <em style={S.accent}>has no do-overs.</em>
            </h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              Unlike accumulation years — where a market dip is an opportunity to buy low — retirement years turn every dip into a liability. Here is what sequence-of-returns risk looks like in practice.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="ov-risk-grid">
            <div style={S.cardDark}>
              <h3 style={S.h3Dark}>Portfolio Loss During Withdrawals</h3>
              <p style={{ ...S.bodyDark, fontSize: 14, marginTop: 14 }}>
                When a retiree withdraws from a declining portfolio, they lock in losses that compound in reverse. A portfolio that drops 30% early in retirement may deplete years sooner than one that merely averages the same return over time — even if the long-term average return is identical. The sequence matters more than the average.
              </p>
              <FeatureList dark features={[
                'Withdrawals during a downturn amplify portfolio depletion',
                'Recovery requires larger future gains to offset sold-down assets',
                'Ten extra years of life expectancy magnifies the damage',
              ]} />
            </div>
            <div style={S.cardDark}>
              <h3 style={S.h3Dark}>Emotional Decision-Making</h3>
              <p style={{ ...S.bodyDark, fontSize: 14, marginTop: 14 }}>
                Market downturns trigger fear — and fear drives poor decisions. Retirees who panic-sell during a correction lock in permanent losses, then often stay in cash too long and miss the recovery. The behavioral cost of market risk can exceed the mathematical cost by a wide margin.
              </p>
              <FeatureList dark features={[
                'Fear-driven selling during downturns locks in real losses',
                'Cash-heavy portfolios after a scare underperform inflation',
                'A protected portion of the portfolio removes the fear trigger',
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Oceanview Solution */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'center', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <Eyebrow>The Oceanview Solution</Eyebrow>
                <h2 style={{ ...S.h2, marginBottom: 14 }}>
                  Zero-floor protection <em style={{ fontStyle: 'italic', color: '#2494C1' }}>changes the equation.</em>
                </h2>
              </div>
              <p style={S.body}>
                Oceanview Fixed Indexed Annuities eliminate sequence-of-returns risk by design. The account value is linked to market index performance — with upside participation through caps, participation rates, or spreads — but carries a guaranteed zero floor. When the index declines, the account does not. When the index rises, the account captures a portion of the gain.
              </p>
              <FeatureList features={[
                'Zero-floor protection: account value cannot decrease due to index loss',
                'Upside participation via index-linked crediting strategies — S&P 500, Nasdaq-100, Russell 2000',
                'Peace of mind through volatile markets — no need to watch daily swings',
                'A.M. Best A (Excellent) rated carrier with strong capitalization',
              ]} />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 8 }}>
                <PillMint onClick={() => { window.location.hash = 'harbourview-fia' }}>Explore Harbourview FIA</PillMint>
                <PillGhost onClick={() => { window.location.hash = 'products' }}>View All Products</PillGhost>
              </div>
            </div>
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <img src="assets/hero-beach-couple.jpg" alt="Couple enjoying retirement" loading="lazy" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Put It Into Practice"
            title="Protect retirement savings"
            titleAccent="from market risk."
            body="The Harbourview FIA provides index-linked growth potential with a guaranteed zero floor — so your clients participate in market upside without ever losing principal to a downturn."
            cta="Explore Products"
            onClick={() => { window.location.hash = 'products' }}
          />
        </div>
      </section>
    </main>
  )
}