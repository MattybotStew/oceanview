import { PillMint, PillGhost } from './Buttons.jsx'
import { Clock, BarChart2, Gift, Briefcase } from 'lucide-react'
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

const EVENTS = [
  {
    Icon: Clock,
    eyebrow: 'Life Event 1',
    title: 'Approaching Retirement',
    subtitle: '5–10 years before the finish line',
    body: "Priorities shift from pure accumulation to balancing growth with protection. This window is the ideal time to position assets in vehicles that will perform through retirement — not just to it.",
    features: [
      'Lock in competitive rates now with a MYGA before retiring',
      'Shift a portion of equity exposure to principal-protected FIA',
      'Begin structuring guaranteed income streams',
    ],
    product: 'Harbourview FIA · Harbourview MYGA',
  },
  {
    Icon: BarChart2,
    eyebrow: 'Life Event 2',
    title: 'Market Volatility',
    subtitle: 'When markets move sharply',
    body: 'Market downturns trigger anxiety — and often panic-driven decisions that lock in losses. Clients who move into a zero-floor FIA stop the bleeding and stay positioned for recovery.',
    features: [
      'Zero-floor protection eliminates downside market participation',
      'Indexed crediting captures gains without locking in losses',
      'Removes the emotional burden of watching daily market swings',
    ],
    product: 'Harbourview FIA · CapLock FIA',
  },
  {
    Icon: Gift,
    eyebrow: 'Life Event 3',
    title: 'Financial Windfall',
    subtitle: 'Inheritance, sale proceeds, or settlement funds',
    body: 'Sudden wealth requires thoughtful management. A MYGA locks in today\'s rates immediately, while an FIA provides growth potential and principal safety for clients who need time to plan.',
    features: [
      'Immediate principal protection from day one',
      'Tax-deferred growth preserves the full windfall value',
      'Flexible term lengths match the client\'s planning horizon',
    ],
    product: 'Harbourview MYGA · Sky Harbourview MYGA',
  },
  {
    Icon: Briefcase,
    eyebrow: 'Life Event 4',
    title: 'Career Transitions',
    subtitle: 'Job changes, retirement, and 401(k) rollovers',
    body: '401(k) rollovers represent one of the largest single-event asset movements in a client\'s financial life. A direct rollover to an IRA-held annuity provides continuity and eliminates reinvestment risk.',
    features: [
      'Direct IRA rollover — no tax consequences if handled correctly',
      'Competitive rates vs. employer plan money market or stable value',
      'Guaranteed accumulation while the client evaluates next steps',
    ],
    product: 'Horizon MYGA · Harbourview FIA',
  },
]

export default function LifeEventsPage() {
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
            Life Events Series
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '54ch' }}>
            Major life transitions create pivotal financial decisions. Explore how Oceanview annuities are built to meet clients exactly where they are.
          </p>
        </div>
      </section>

      {/* 4 Events — navy section */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 56 }}>
            <Eyebrow light>Four Key Life Events</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 14 }}>
              How major transitions <em style={S.accent}>shape financial futures.</em>
            </h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              Life events increase financial awareness, open minds to new approaches, and create access to assets that need thoughtful management. These four moments represent the highest-opportunity conversations for advisors.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="ov-risk-grid">
            {EVENTS.map((e, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={S.iconTile}>
                    <e.Icon size={20} color="#70BABF" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#70BABF', marginBottom: 4 }}>{e.eyebrow}</div>
                    <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 22, color: '#F2FCFF', letterSpacing: '-0.01em', lineHeight: 1.2, margin: 0 }}>{e.title}</h3>
                  </div>
                </div>
                <p style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: '#70BABF', margin: 0 }}>{e.subtitle}</p>
                <p style={{ ...S.bodyDark, fontSize: 14 }}>{e.body}</p>
                <FeatureList dark features={e.features} />
                <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 14 }}>
                  <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(242,252,255,.4)', marginRight: 8 }}>Products:</span>
                  <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#70BABF', fontWeight: 600 }}>{e.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory approach */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'center', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <img src="assets/family.png" alt="Family planning for the future" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
            </div>
            <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <Eyebrow>Advisor Guidance</Eyebrow>
                <h2 style={{ ...S.h2, marginBottom: 14 }}>
                  Five principles for <em style={{ fontStyle: 'italic', color: '#2494C1' }}>navigating life events.</em>
                </h2>
              </div>
              <FeatureList features={[
                'Increased financial awareness makes clients more receptive to change',
                'Life transitions provide access to funds that need active management',
                'Clients actively seek guidance at these decision-making moments',
                'Openness to new approaches is highest right after a major event',
                'The value of professional expertise is most visible in transition',
              ]} />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 8 }}>
                <PillMint onClick={() => { window.location.hash = 'products' }}>Explore Products</PillMint>
                <PillGhost onClick={() => { window.location.hash = 'case-studies' }}>View Case Studies</PillGhost>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Put It Into Practice"
            title="Match every life event"
            titleAccent="to the right product."
            body="From pre-retirement rollovers to financial windfalls, Oceanview FIAs and MYGAs are built to meet clients where they are — with principal protection and competitive guaranteed rates."
            cta="Explore Products"
            onClick={() => { window.location.hash = 'products'; }}
          />
        </div>
      </section>
    </main>
  )
}
