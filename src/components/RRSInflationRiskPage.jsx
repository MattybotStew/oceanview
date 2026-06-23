import { PillMint, PillGhost } from './Buttons.jsx'
import { Percent } from 'lucide-react'
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

export default function RRSInflationRiskPage() {
  return (
    <main>
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
            Inflation Risk
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '54ch' }}>
            Rising prices gradually erode purchasing power over a retirement that may last thirty years or more. Fixed indexed annuities offer growth potential tied to market indexes, which may outpace inflation over the long term.
          </p>
        </div>
      </section>

      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={S.iconTile}>
                <Percent size={20} color="#2494C1" strokeWidth={1.75} />
              </div>
              <Eyebrow>What Is Inflation Risk?</Eyebrow>
              <h2 style={S.h2}>
                When the cost of living rises <em style={S.accentLight}>faster than savings.</em>
              </h2>
              <p style={S.body}>
                Inflation risk is the silent erosion of purchasing power over time. Even modest inflation — at 2.5% annually — cuts the real value of a fixed income stream in half over roughly twenty-eight years. For a retiree who lives to ninety, that means their income buys half of what it did at sixty-five, just when healthcare and long-term care costs are rising fastest.
              </p>
              <p style={S.body}>
                The problem compounds: expenses that retirees cannot control — healthcare, housing, insurance — have historically inflated faster than the overall consumer price index. A retirement income strategy that does not account for inflation embeds a declining standard of living by default.
              </p>
            </div>
            <div style={{ flex: '1 1 300px', minWidth: 0 }}>
              <div style={S.cardTeal}>
                <h3 style={S.h3}>Key Inflation Risk Facts</h3>
                <div style={{ marginTop: 16 }}>
                  <FeatureList features={[
                    'At 3% inflation, purchasing power drops by more than half over a 25-year retirement',
                    'Healthcare costs have risen at roughly double the rate of general inflation for decades',
                    'Traditional fixed-income vehicles — CDs, money markets, bonds — lock in returns that inflation can overtake',
                    'Index-linked growth provides potential to outpace rising costs without taking on equity risk',
                  ]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 48 }}>
            <Eyebrow light>Why It Matters</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 14 }}>
              Inflation doesn't pause <em style={S.accent}>when you retire.</em>
            </h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              A thirty-year retirement can see the dollar lose more than half its purchasing power. Here is what that means for retirement income planning.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="ov-risk-grid">
            <div style={S.cardDark}>
              <h3 style={S.h3Dark}>Fixed Income Erosion</h3>
              <p style={{ ...S.bodyDark, fontSize: 14, marginTop: 14 }}>
                A retiree who locks in a 4% yield on a bond portfolio today may feel secure — but if inflation runs at 3%, the real return is only 1%. Factor in taxes and the true purchasing power may be negative. Over decades, this gap between nominal and real returns silently depletes retirement capital.
              </p>
              <FeatureList dark features={[
                'Nominal returns can mask negative real purchasing power',
                'A 4% yield minus 3% inflation minus taxes = effectively negative',
                'The gap widens every year — and retirement may last thirty years',
              ]} />
            </div>
            <div style={S.cardDark}>
              <h3 style={S.h3Dark}>Rising Expenses in Retirement</h3>
              <p style={{ ...S.bodyDark, fontSize: 14, marginTop: 14 }}>
                Not all expenses inflate equally. Healthcare, long-term care, and housing costs have historically risen faster than the headline CPI. A retiree whose income is entirely fixed faces a growing gap between what they receive and what they need to spend — a gap that widens with every passing year.
              </p>
              <FeatureList dark features={[
                'Healthcare inflation outpaces general inflation by a wide margin',
                'Long-term care costs have doubled roughly every 15 years',
                'Fixed income streams need a growth component to keep pace',
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'center', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <Eyebrow>The Oceanview Solution</Eyebrow>
                <h2 style={{ ...S.h2, marginBottom: 14 }}>
                  Growth potential that <em style={{ fontStyle: 'italic', color: '#2494C1' }}>keeps pace with rising costs.</em>
                </h2>
              </div>
              <p style={S.body}>
                Oceanview Fixed Indexed Annuities link growth to market indexes like the S&P 500 — providing upside potential that traditional fixed-income vehicles cannot offer. With index-linked crediting strategies that include caps, participation rates, or spreads, the account captures a portion of market gains while maintaining a guaranteed zero floor.
              </p>
              <FeatureList features={[
                'Index-linked crediting with caps, participation rates, or spreads tied to S&P 500, Nasdaq-100, and Russell 2000',
                'Growth potential beyond traditional CDs and savings accounts — designed to outpace inflation over time',
                'Tax-deferred compounding amplifies real returns — no annual tax drag on growth',
                'A.M. Best A (Excellent) rating — financial strength you can rely on for the long term',
              ]} />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 8 }}>
                <PillMint onClick={() => { window.location.hash = 'harbourview-fia' }}>Explore Harbourview FIA</PillMint>
                <PillGhost onClick={() => { window.location.hash = 'products' }}>View All Products</PillGhost>
              </div>
            </div>
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <img src="assets/older-couple-1.png" alt="Retirees planning for the future" loading="lazy" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Put It Into Practice"
            title="Build growth potential"
            titleAccent="into every retirement plan."
            body="Oceanview FIAs offer index-linked crediting strategies that provide upside potential — so your clients' purchasing power can grow alongside the markets, with zero-floor protection on the downside."
            cta="Explore Products"
            onClick={() => { window.location.hash = 'products' }}
          />
        </div>
      </section>
    </main>
  )
}