import { PillMint, PillGhost } from './Buttons.jsx'
import { Clock } from 'lucide-react'
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

export default function LESApproachingRetirementPage() {
  return (
    <main>
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>Life Events Series</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '22ch' }}>
            Approaching Retirement
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '54ch' }}>
            The five-to-ten-year window before retirement is when priorities shift — from pure accumulation to balancing growth with protection. This is the ideal time to position assets for the income they will need to produce.
          </p>
        </div>
      </section>

      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={S.iconTile}>
                <Clock size={20} color="#2494C1" strokeWidth={1.75} />
              </div>
              <Eyebrow>5–10 Years Before the Finish Line</Eyebrow>
              <h2 style={S.h2}>
                The window when decisions <em style={S.accentLight}>carry the most weight.</em>
              </h2>
              <p style={S.body}>
                The pre-retirement window — roughly ages fifty-five to sixty-five — is when financial decisions have their greatest long-term impact. During accumulation, a market loss is uncomfortable but temporary; there are working years left to recover. But once the retirement date is in sight, every dollar of loss is a dollar of future income that cannot be replaced by working longer.
              </p>
              <p style={S.body}>
                This is the moment to shift a portion of assets from pure growth to protected vehicles that will perform through retirement — not just to it. The goal is not to abandon growth entirely, but to build a floor beneath the portfolio so that sequence-of-returns risk cannot derail the plan in the critical early retirement years.
              </p>
            </div>
            <div style={{ flex: '1 1 300px', minWidth: 0 }}>
              <div style={S.cardTeal}>
                <h3 style={S.h3}>Key Decisions in This Window</h3>
                <div style={{ marginTop: 16 }}>
                  <FeatureList features={[
                    'Lock in competitive MYGA rates now — before you retire and before rates potentially decline',
                    'Shift a portion of equity exposure to principal-protected FIA to reduce sequence risk',
                    'Begin structuring guaranteed income streams that will support essential expenses',
                    'Use tax-deferred growth to compound without annual drag during the final working years',
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
            <Eyebrow light>Why This Moment Matters</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 14 }}>
              The transition from accumulation <em style={S.accent}>to protection.</em>
            </h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              The five years before and after retirement are the most financially consequential of a lifetime. Here is what changes — and why protection becomes more important than pure return.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="ov-risk-grid">
            <div style={S.cardDark}>
              <h3 style={S.h3Dark}>The Sequence Risk Window Opens</h3>
              <p style={{ ...S.bodyDark, fontSize: 14, marginTop: 14 }}>
                In the five years before retirement, a significant portfolio decline has the same mathematical effect as a decline in the first year of retirement — it reduces the base from which future withdrawals will be taken. Protecting gains made during the accumulation years becomes as important as earning new ones.
              </p>
              <FeatureList dark features={[
                'A 20% loss at age 60 reduces the retirement income base permanently',
                'Recovery time is shrinking — working years left are limited',
                'Principal protection preserves what decades of saving have built',
              ]} />
            </div>
            <div style={S.cardDark}>
              <h3 style={S.h3Dark}>Income Planning Begins in Earnest</h3>
              <p style={{ ...S.bodyDark, fontSize: 14, marginTop: 14 }}>
                The pre-retirement years are the ideal time to begin structuring guaranteed income — not after retirement has already started. A MYGA purchased at sixty with a seven-year guarantee matures at sixty-seven, right when income needs become real. An FIA with an income rider purchased at fifty-eight has nearly a decade to accumulate before income begins.
              </p>
              <FeatureList dark features={[
                'MYGA terms can be timed to mature at the retirement date',
                'FIA income riders benefit from years of accumulation before activation',
                'Early positioning means more options and less pressure at retirement',
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
                  Position assets to perform <em style={{ fontStyle: 'italic', color: '#2494C1' }}>through retirement.</em>
                </h2>
              </div>
              <p style={S.body}>
                Oceanview MYGAs and FIAs are purpose-built for the pre-retirement transition. A MYGA locks in today's competitive rates for the full contract term — providing a predictable accumulation base. An FIA provides principal-protected market-linked growth — so assets can still participate in upside while being shielded from downside, right when protection matters most.
              </p>
              <FeatureList features={[
                'Harbourview MYGA: guaranteed rates for 3–10 years, competitive vs. CDs',
                'Harbourview FIA: zero-floor principal protection with index-linked growth',
                'Both products carry A.M. Best A (Excellent) rating for financial strength',
                'Tax-deferred growth preserves more of every gain for retirement income',
              ]} />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 8 }}>
                <PillMint onClick={() => { window.location.hash = 'products' }}>Explore Products</PillMint>
                <PillGhost onClick={() => { window.location.hash = 'contact' }}>Talk to a Professional</PillGhost>
              </div>
            </div>
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <img src="assets/couple-walking.png" alt="Couple approaching retirement" loading="lazy" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Put It Into Practice"
            title="The pre-retirement window"
            titleAccent="won't wait."
            body="Oceanview MYGAs and FIAs help your clients lock in today's rates, protect their gains, and build the guaranteed income foundation that retirement depends on."
            cta="Explore Products"
            onClick={() => { window.location.hash = 'products' }}
          />
        </div>
      </section>
    </main>
  )
}