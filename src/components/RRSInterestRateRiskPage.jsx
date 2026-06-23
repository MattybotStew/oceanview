import { PillMint, PillGhost } from './Buttons.jsx'
import { ShieldCheck } from 'lucide-react'
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

export default function RRSInterestRateRiskPage() {
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
            Interest Rate Risk
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '54ch' }}>
            Interest rate changes can erode the value of bond holdings and reduce income from savings vehicles. MYGAs lock in competitive rates for the full contract term — eliminating reinvestment risk entirely.
          </p>
        </div>
      </section>

      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={S.iconTile}>
                <ShieldCheck size={20} color="#2494C1" strokeWidth={1.75} />
              </div>
              <Eyebrow>What Is Interest Rate Risk?</Eyebrow>
              <h2 style={S.h2}>
                When rates move <em style={S.accentLight}>against your savings.</em>
              </h2>
              <p style={S.body}>
                Interest rate risk works in two directions — and both can hurt retirees. When rates rise, the market value of existing bond holdings falls. When rates fall, income from maturing CDs and bonds declines as those assets are reinvested at lower yields. Either way, the retiree who depends on fixed-income vehicles for safety can find that safety comes at a hidden cost.
              </p>
              <p style={S.body}>
                This is reinvestment risk: the possibility that when a CD or bond matures, the prevailing rates are lower than what the investor was earning before. A retiree laddering 1-year CDs at 5% today may face 2% rates at renewal — cutting their income by more than half with no change in their spending needs.
              </p>
            </div>
            <div style={{ flex: '1 1 300px', minWidth: 0 }}>
              <div style={S.cardTeal}>
                <h3 style={S.h3}>Key Interest Rate Risk Facts</h3>
                <div style={{ marginTop: 16 }}>
                  <FeatureList features={[
                    'When rates fall, maturing CDs and bonds must be reinvested at lower yields — cutting income',
                    'When rates rise, the market value of existing bond holdings declines — eroding principal',
                    'Short-term CDs expose savers to reinvestment risk every 6–12 months',
                    'MYGAs lock in a guaranteed rate for the full contract term — no reinvestment surprises',
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
              Rate volatility punishes <em style={S.accent}>short-term thinking.</em>
            </h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              Retirees who rely on CDs and money markets to protect principal often trade one risk for another. Here is how interest rate changes impact retirement income — and why a multi-year guarantee changes the math.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="ov-risk-grid">
            <div style={S.cardDark}>
              <h3 style={S.h3Dark}>The Reinvestment Trap</h3>
              <p style={{ ...S.bodyDark, fontSize: 14, marginTop: 14 }}>
                A retiree who builds a CD ladder for safety may feel protected — but every renewal date is a gamble on where rates will be. A 5% CD that renews at 2.5% cuts the retiree's income in half overnight. Over a multi-year retirement, the cumulative effect of repeated reinvestment at lower rates can dramatically reduce total retirement income.
              </p>
              <FeatureList dark features={[
                'Every CD renewal resets income at whatever rate the market offers',
                'A drop from 5% to 2.5% means half the income with no change in expenses',
                'Repeated reinvestment at declining rates compounds the loss over time',
              ]} />
            </div>
            <div style={S.cardDark}>
              <h3 style={S.h3Dark}>Bond Price Sensitivity</h3>
              <p style={{ ...S.bodyDark, fontSize: 14, marginTop: 14 }}>
                Bond prices move inversely to interest rates — and longer-duration bonds are more sensitive. A retiree holding a bond fund for income may see the fund's value decline by 5–10% or more when rates rise, creating a paper loss that becomes a real loss if the position must be sold to fund living expenses.
              </p>
              <FeatureList dark features={[
                'Bond prices fall when rates rise — paper losses become real if sold',
                'Longer-duration bonds are the most rate-sensitive',
                'MYGAs carry no market-value risk during the guarantee period',
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
                  Lock in today's rates <em style={{ fontStyle: 'italic', color: '#2494C1' }}>for the full term.</em>
                </h2>
              </div>
              <p style={S.body}>
                Oceanview Multi-Year Guaranteed Annuities eliminate interest rate risk by locking in a competitive guaranteed rate for the entire contract period — typically three to ten years. Unlike CDs that force reinvestment decisions every few months, MYGAs provide rate certainty through the full guarantee period, with no reinvestment risk and no market-value fluctuation.
              </p>
              <FeatureList features={[
                'Guaranteed rates locked for the full contract period — 3, 5, 7, or 10 years',
                'MYGA rates consistently competitive vs. comparable CDs — often higher',
                'No reinvestment risk during the guarantee period — income certainty',
                'A.M. Best A (Excellent) rating — the strength behind every rate guarantee',
              ]} />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 8 }}>
                <PillMint onClick={() => { window.location.hash = 'harbourview-myga' }}>Explore Harbourview MYGA</PillMint>
                <PillGhost onClick={() => { window.location.hash = 'sky-harbourview-myga' }}>View Sky Harbourview MYGA</PillGhost>
              </div>
            </div>
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <img src="assets/lighthouse.jpg" alt="Lighthouse representing stability" loading="lazy" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Put It Into Practice"
            title="Lock in competitive rates"
            titleAccent="with a MYGA."
            body="Oceanview MYGAs offer guaranteed rates for 3 to 10 years — eliminating reinvestment risk and providing the rate certainty that CDs and money markets cannot match."
            cta="Explore Products"
            onClick={() => { window.location.hash = 'products' }}
          />
        </div>
      </section>
    </main>
  )
}