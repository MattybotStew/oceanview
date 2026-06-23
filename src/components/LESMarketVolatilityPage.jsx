import { PillMint, PillGhost } from './Buttons.jsx'
import { BarChart2 } from 'lucide-react'
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

export default function LESMarketVolatilityPage() {
  return (
    <main>
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>Life Events Series</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '22ch' }}>
            Market Volatility
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '54ch' }}>
            Market downturns trigger anxiety — and often panic-driven decisions that lock in losses. Clients who move into a zero-floor FIA stop the bleeding and stay positioned for the recovery.
          </p>
        </div>
      </section>

      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={S.iconTile}>
                <BarChart2 size={20} color="#2494C1" strokeWidth={1.75} />
              </div>
              <Eyebrow>When Markets Move Sharply</Eyebrow>
              <h2 style={S.h2}>
                Fear is the enemy of <em style={S.accentLight}>good decision-making.</em>
              </h2>
              <p style={S.body}>
                Market downturns are not just financial events — they are emotional events. When a portfolio drops 20% or more, the natural human response is to sell, to stop the pain. But selling during a downturn converts a temporary paper loss into a permanent real loss. And once out of the market, investors often stay in cash too long — missing the recovery that historically follows every correction.
              </p>
              <p style={S.body}>
                This is the behavioral cost of market volatility: it is not just the magnitude of the decline, but the panic-driven decisions that follow. A client who sells at the bottom and sits in cash for two years often does more damage to their retirement than the market decline itself.
              </p>
            </div>
            <div style={{ flex: '1 1 300px', minWidth: 0 }}>
              <div style={S.cardTeal}>
                <h3 style={S.h3}>The Volatility Problem</h3>
                <div style={{ marginTop: 16 }}>
                  <FeatureList features={[
                    'Investors who panic-sell during corrections lock in permanent losses',
                    'Missing just the best 10 days of a decade can cut returns in half',
                    'Cash-heavy portfolios after a market scare underperform inflation over time',
                    'The emotional toll of daily market watching leads to worse decisions, not better ones',
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
            <Eyebrow light>Why Volatile Markets Create Opportunity</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 14 }}>
              Downturns don't have to mean <em style={S.accent}>permanent damage.</em>
            </h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              A market decline is only destructive if the portfolio participates in the decline. When downside exposure is removed, a correction becomes a non-event for the protected portion — and the client is still positioned to capture gains when markets recover.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="ov-risk-grid">
            <div style={S.cardDark}>
              <h3 style={S.h3Dark}>The Behavior Gap</h3>
              <p style={{ ...S.bodyDark, fontSize: 14, marginTop: 14 }}>
                The difference between market returns and investor returns — what researchers call the behavior gap — is driven almost entirely by emotional decisions during volatile periods. Investors who move to a zero-floor FIA eliminate the emotional trigger: when the market drops, their account does not, so there is no impulse to sell at the worst moment.
              </p>
              <FeatureList dark features={[
                'The average investor underperforms the market by a wide margin due to timing errors',
                'Most of the gap occurs during volatile periods when emotions override planning',
                'Removing downside exposure removes the emotional trigger entirely',
              ]} />
            </div>
            <div style={S.cardDark}>
              <h3 style={S.h3Dark}>Staying Invested Without the Stress</h3>
              <p style={{ ...S.bodyDark, fontSize: 14, marginTop: 14 }}>
                The zero-floor design of an FIA means the account value never declines due to index losses — but still captures a portion of the gain when markets rise. This asymmetry eliminates the sequence-of-returns problem entirely for the protected portion, letting clients stay invested without the psychological weight of watching daily market swings.
              </p>
              <FeatureList dark features={[
                'Zero floor means zero loss due to market declines',
                'Index-linked crediting captures gains without locking in losses',
                'Clients stop watching daily market swings — because their account is not at risk',
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
                  Protection that lets clients <em style={{ fontStyle: 'italic', color: '#2494C1' }}>sleep at night.</em>
                </h2>
              </div>
              <p style={S.body}>
                Oceanview Fixed Indexed Annuities provide exactly what volatile markets demand: a zero floor that eliminates downside exposure, combined with index-linked crediting that captures upside. The Harbourview FIA and CapLock FIA both offer principal protection — meaning the account value can only go up or stay flat when the index declines, never down.
              </p>
              <FeatureList features={[
                'Zero-floor protection eliminates downside market participation entirely',
                'Indexed crediting captures gains when markets rise — without locking in losses when they fall',
                'Removes the emotional burden of watching daily market swings for retired clients',
                'A.M. Best A (Excellent) rating — financial strength through every market cycle',
              ]} />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 8 }}>
                <PillMint onClick={() => { window.location.hash = 'harbourview-fia' }}>Explore Harbourview FIA</PillMint>
                <PillGhost onClick={() => { window.location.hash = 'caplock' }}>View CapLock FIA</PillGhost>
              </div>
            </div>
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <img src="assets/hero-beach-couple.jpg" alt="Couple at ease during retirement" loading="lazy" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Put It Into Practice"
            title="Stop the downside"
            titleAccent="without missing the upside."
            body="Oceanview FIAs give your clients the confidence to stay invested — with zero-floor principal protection and index-linked growth potential backed by an A (Excellent) A.M. Best rating."
            cta="Explore Products"
            onClick={() => { window.location.hash = 'products' }}
          />
        </div>
      </section>
    </main>
  )
}