import { PillMint, PillGhost } from './Buttons.jsx'
import { Briefcase } from 'lucide-react'
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

export default function LESCareerTransitionsPage() {
  return (
    <main>
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>Life Events Series</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '22ch' }}>
            Career Transitions
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '54ch' }}>
            Job changes, retirement, and 401(k) rollovers represent some of the largest single-event asset movements in a client's financial life. A direct rollover to an IRA-held annuity provides continuity and eliminates reinvestment risk.
          </p>
        </div>
      </section>

      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={S.iconTile}>
                <Briefcase size={20} color="#2494C1" strokeWidth={1.75} />
              </div>
              <Eyebrow>Job Changes, Retirement, and 401(k) Rollovers</Eyebrow>
              <h2 style={S.h2}>
                When a career move triggers <em style={S.accentLight}>a pivotal financial decision.</em>
              </h2>
              <p style={S.body}>
                A job change or retirement is more than a career event — it is a financial event that often involves moving a lifetime of accumulated retirement savings. The 401(k) rollover is one of the largest single-asset decisions a client will ever make, and the destination for those funds will shape their retirement for decades.
              </p>
              <p style={S.body}>
                When a client leaves an employer, they typically have several options: leave the funds in the old plan, roll them into a new employer's plan, take a taxable distribution, or roll them into an IRA. For clients seeking guaranteed accumulation and principal protection, an IRA-held annuity provides a destination that eliminates reinvestment risk and offers competitive guaranteed rates.
              </p>
            </div>
            <div style={{ flex: '1 1 300px', minWidth: 0 }}>
              <div style={S.cardTeal}>
                <h3 style={S.h3}>Key Rollover Considerations</h3>
                <div style={{ marginTop: 16 }}>
                  <FeatureList features={[
                    'Direct IRA rollover — no tax consequences if handled correctly',
                    'Competitive guaranteed rates vs. employer plan money market or stable value options',
                    'Guaranteed accumulation while the client evaluates their next steps',
                    'Eliminates reinvestment risk — rate is locked for the full contract term',
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
            <Eyebrow light>Why Rollovers Deserve Extra Care</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 14 }}>
              The destination of your rollover <em style={S.accent}>shapes the next 20 years.</em>
            </h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              A 401(k) rollover is not just a transfer — it is a decision about what role those assets will play in retirement. Here is why the default option is rarely the best one.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="ov-risk-grid">
            <div style={S.cardDark}>
              <h3 style={S.h3Dark}>The Default Problem</h3>
              <p style={{ ...S.bodyDark, fontSize: 14, marginTop: 14 }}>
                Many departing employees leave their 401(k) in the old employer's plan by default — not because it is the best option, but because it is the easiest. Old plans often have limited investment choices, higher fees than IRA alternatives, and may lack guaranteed-rate options. The inertia of doing nothing can cost tens of thousands in lost growth over a multi-decade retirement.
              </p>
              <FeatureList dark features={[
                'Old employer plans may have limited investment options and higher fees',
                'Leaving funds in a former employer\'s plan means less control over the assets',
                'IRA-held annuities offer guaranteed rates that most 401(k) plans do not',
              ]} />
            </div>
            <div style={S.cardDark}>
              <h3 style={S.h3Dark}>Continuity Without Reinvestment Risk</h3>
              <p style={{ ...S.bodyDark, fontSize: 14, marginTop: 14 }}>
                A direct rollover to an IRA-held MYGA provides something no employer plan money market or stable value fund can match: a guaranteed competitive rate locked for the full contract term. The client knows exactly what their accumulation will be at maturity, with no reinvestment decisions to make and no rate uncertainty during the guarantee period.
              </p>
              <FeatureList dark features={[
                'Guaranteed rate locked for 3–10 years — no reinvestment surprises',
                'Principal protected from market loss — zero-floor security',
                'Tax-deferred growth continues within the IRA wrapper',
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
                  Roll over with confidence — <em style={{ fontStyle: 'italic', color: '#2494C1' }}>not with uncertainty.</em>
                </h2>
              </div>
              <p style={S.body}>
                Oceanview MYGAs and FIAs are available as IRA-held annuities, making them an ideal destination for a 401(k) rollover. The Horizon MYGA offers competitive guaranteed rates for clients who want predictable accumulation with no market risk. The Harbourview FIA provides index-linked growth potential with the same zero-floor protection — for clients who want to stay connected to market upside while protecting their rollover from losses.
              </p>
              <FeatureList features={[
                'Horizon MYGA: competitive guaranteed rates, principal protected, IRA-eligible',
                'Harbourview FIA: zero-floor protection with index-linked growth, IRA-eligible',
                'Both backed by A.M. Best A (Excellent) rating — financial strength that matters',
                'Direct rollover process — no tax consequences when handled correctly',
              ]} />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 8 }}>
                <PillMint onClick={() => { window.location.hash = 'horizon-myga' }}>Explore Horizon MYGA</PillMint>
                <PillGhost onClick={() => { window.location.hash = 'harbourview-fia' }}>View Harbourview FIA</PillGhost>
              </div>
            </div>
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <img src="assets/couple-walking.png" alt="Couple planning career transition and retirement" loading="lazy" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Put It Into Practice"
            title="Make every rollover"
            titleAccent="a confident decision."
            body="Oceanview annuity products are IRA-eligible — providing a guaranteed-rate destination for 401(k) rollovers with principal protection and competitive returns backed by an A (Excellent) A.M. Best rating."
            cta="Explore Products"
            onClick={() => { window.location.hash = 'products' }}
          />
        </div>
      </section>
    </main>
  )
}