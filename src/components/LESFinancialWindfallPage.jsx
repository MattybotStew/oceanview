import { PillMint, PillGhost } from './Buttons.jsx'
import { Gift } from 'lucide-react'
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

export default function LESFinancialWindfallPage() {
  return (
    <main>
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <button
            type="button"
            onClick={() => { window.location.hash = 'life-events'; }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 0, padding: 0, marginBottom: 20, fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: 'var(--ov-navy-600)', cursor: 'pointer' }}
          >
            ← Back to Life Events Series
          </button>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>Life Events Series</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '22ch' }}>
            Financial Windfall
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '54ch' }}>
            Inheritance, sale proceeds, or settlement funds — sudden wealth requires thoughtful management. A MYGA locks in today's rates immediately, while an FIA provides growth potential and principal safety while clients take time to plan.
          </p>
        </div>
      </section>

      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={S.iconTile}>
                <Gift size={20} color="#2494C1" strokeWidth={1.75} />
              </div>
              <Eyebrow>Inheritance, Sale Proceeds, or Settlement Funds</Eyebrow>
              <h2 style={S.h2}>
                Sudden wealth needs <em style={S.accentLight}>time to plan.</em>
              </h2>
              <p style={S.body}>
                A financial windfall — whether from an inheritance, the sale of a business or property, or a legal settlement — is a moment of both opportunity and risk. The funds arrive all at once, often large enough to meaningfully change a retirement plan, but the recipient may not have an immediate strategy for deploying them. The pressure to act quickly can lead to decisions that are hard to undo.
              </p>
              <p style={S.body}>
                The smartest first move with a windfall is often the simplest: park it somewhere safe that still earns a competitive return, giving the recipient time to make a thoughtful long-term plan. A MYGA serves exactly this purpose — immediate principal protection from day one, a guaranteed rate, and a defined term that creates a natural planning window.
              </p>
            </div>
            <div style={{ flex: '1 1 300px', minWidth: 0 }}>
              <div style={S.cardTeal}>
                <h3 style={S.h3}>Windfall Management Principles</h3>
                <div style={{ marginTop: 16 }}>
                  <FeatureList features={[
                    'Immediate principal protection — no market risk from day one',
                    'Tax-deferred growth preserves the full windfall value for the planning period',
                    'Flexible term lengths (3–10 years) match the client\'s planning horizon',
                    'Avoid the pressure to invest all at once — a MYGA buys time for thoughtful decisions',
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
            <Eyebrow light>Why Windfalls Require a Strategy</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 14 }}>
              The biggest risk with sudden wealth <em style={S.accent}>is rushing.</em>
            </h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              Receiving a large sum triggers competing impulses — the desire to put it to work immediately, balanced against the fear of making a mistake. Here is why a protected vehicle is often the right first step.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="ov-risk-grid">
            <div style={S.cardDark}>
              <h3 style={S.h3Dark}>The Urgency Trap</h3>
              <p style={{ ...S.bodyDark, fontSize: 14, marginTop: 14 }}>
                When a large sum arrives, there is a natural instinct to deploy it immediately — to avoid the feeling that the money is sitting idle. But the fastest decision is rarely the best one. A MYGA removes this pressure by providing a competitive guaranteed rate from day one, so the money is not idle — it is earning a known return in a protected vehicle while the client develops their long-term strategy.
              </p>
              <FeatureList dark features={[
                'A MYGA earns a guaranteed competitive rate from the moment funds are deposited',
                'The return is known in advance — no market uncertainty during the planning period',
                'A defined term (3, 5, 7, or 10 years) creates a natural planning window',
              ]} />
            </div>
            <div style={S.cardDark}>
              <h3 style={S.h3Dark}>Tax-Efficient Deployment</h3>
              <p style={{ ...S.bodyDark, fontSize: 14, marginTop: 14 }}>
                A windfall may carry tax implications — capital gains on a property sale, income taxes on a settlement. Tax-deferred growth inside an annuity preserves the full value of the windfall without annual tax drag. The client can plan distributions strategically, potentially in lower-tax retirement years, rather than paying taxes on gains every year.
              </p>
              <FeatureList dark features={[
                'Tax-deferred compounding means no annual 1099 drag on growth',
                'Distributions can be planned for lower-tax retirement years',
                'The full windfall works for the client — not for the IRS every April',
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
                  Protect today. <em style={{ fontStyle: 'italic', color: '#2494C1' }}>Plan for tomorrow.</em>
                </h2>
              </div>
              <p style={S.body}>
                Oceanview MYGAs are an ideal landing place for a financial windfall. The Harbourview MYGA and Sky Harbourview MYGA both offer competitive guaranteed rates with immediate principal protection — so the windfall is safe from market risk and earning a known return from day one. For clients who also want growth potential alongside protection, the Harbourview FIA offers index-linked crediting with the same zero-floor guarantee.
              </p>
              <FeatureList features={[
                'Harbourview MYGA: guaranteed rates for 3–10 years, principal protected from day one',
                'Sky Harbourview MYGA: competitive rates with flexible term options',
                'Harbourview FIA: zero-floor protection with index-linked growth potential',
                'All backed by A.M. Best A (Excellent) rating — the strength to stand behind every guarantee',
              ]} />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 8 }}>
                <PillMint onClick={() => { window.location.hash = 'harbourview-myga' }}>Explore Harbourview MYGA</PillMint>
                <PillGhost onClick={() => { window.location.hash = 'sky-harbourview-myga' }}>View Sky Harbourview MYGA</PillGhost>
              </div>
            </div>
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <img src="assets/family.png" alt="Family receiving financial windfall" loading="lazy" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Put It Into Practice"
            title="Give windfalls a safe place"
            titleAccent="to earn while planning."
            body="Oceanview MYGAs lock in today's competitive rates with immediate principal protection — so your clients' sudden wealth is safe, earning, and ready when they are."
            cta="Explore Products"
            onClick={() => { window.location.hash = 'products' }}
          />
        </div>
      </section>
    </main>
  )
}