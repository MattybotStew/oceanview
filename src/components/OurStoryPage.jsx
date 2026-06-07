import CTABanner from './CTABanner.jsx'

const S = {
  eyebrowRow:       { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 },
  eyebrowLine:      { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow:          { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' },
  eyebrowLineLight: { width: 18, height: 1, background: 'rgba(112,186,191,.6)', flexShrink: 0 },
  eyebrowLight:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#70BABF' },
  h2:               { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px,3.2vw,44px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  h2Light:          { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px,3.2vw,44px)', color: '#F2FCFF', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  accent:           { fontStyle: 'italic', color: '#70BABF' },
  accentBlue:       { fontStyle: 'italic', color: '#2494C1' },
  body:             { fontFamily: 'var(--ov-ff-sans)', fontSize: 16, color: '#4A5568', lineHeight: 1.75, margin: 0 },
  bodyDark:         { fontFamily: 'var(--ov-ff-sans)', fontSize: 16, color: 'rgba(242,252,255,.65)', lineHeight: 1.75, margin: 0 },
}

function Eyebrow({ light, children }) {
  return (
    <div style={S.eyebrowRow}>
      <div style={light ? S.eyebrowLineLight : S.eyebrowLine} />
      <span style={light ? S.eyebrowLight : S.eyebrow}>{children}</span>
    </div>
  )
}

// ── Timeline ──────────────────────────────────────────────────────────────────
const MILESTONES = [
  {
    year: '1987',
    heading: 'Founded in Phoenix',
    body: 'Oceanview Life and Annuity Company is established with a focused mandate: offer straightforward, guaranteed annuity products to Americans planning for retirement. From the start, the company commits to financial strength over growth-at-any-cost.',
  },
  {
    year: '1990s',
    heading: 'Building the distribution network',
    body: 'Over the following decade, Oceanview expands its agent and advisor relationships across the country. The company establishes the distributor-first model that still defines how we work today — investing in the professionals who serve clients directly.',
  },
  {
    year: '2004',
    heading: 'First Fixed Indexed Annuity',
    body: 'Oceanview introduces its first FIA product, offering clients index-linked growth potential with a guaranteed zero-percent floor. The Harbourview line is born — built around principal protection as a non-negotiable feature.',
  },
  {
    year: '2012',
    heading: 'Partnership with Bayview Asset Management',
    body: 'Oceanview becomes part of the Bayview Asset Management family, gaining access to institutional capital strength while preserving its independent operating identity and commitment to the annuity market. The partnership deepens our capacity to honor long-term obligations.',
  },
  {
    year: '2017',
    heading: 'Thirty years. Still singular.',
    body: 'On our 30th anniversary, Oceanview remains one of the few carriers in the country focused exclusively on fixed annuity solutions. While competitors diversified, we doubled down — expanding the product lineup while maintaining the simplicity our advisors rely on.',
  },
  {
    year: '2021',
    heading: 'A (Excellent) rating affirmed',
    body: 'A.M. Best affirms Oceanview\'s Financial Strength Rating of A (Excellent), citing balance-sheet strength, consistent operating performance, and disciplined enterprise risk management. The rating reflects nearly 35 years of conservative, principled growth.',
  },
  {
    year: 'Today',
    heading: 'Serving advisors in all 50 states',
    body: 'Oceanview is licensed nationwide, distributed through thousands of agents, advisors, banks, and broker-dealers. The mission is unchanged: give every client access to reliable, transparent retirement savings products — and give every advisor the tools and support to deliver them.',
  },
]

function Timeline() {
  return (
    <div style={{ position: 'relative', paddingLeft: 32 }}>
      {/* Vertical line */}
      <div style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 1, background: 'rgba(36,148,193,.2)' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
        {MILESTONES.map((m, i) => (
          <div key={i} style={{ position: 'relative' }}>
            {/* Dot */}
            <div style={{ position: 'absolute', left: -36, top: 6, width: 9, height: 9, borderRadius: '50%', background: '#2494C1', border: '2px solid #fff', boxShadow: '0 0 0 3px rgba(36,148,193,.2)' }} />
            <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 700, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: '#2494C1', marginBottom: 8 }}>{m.year}</div>
            <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(18px,1.8vw,24px)', color: '#0D1F4E', letterSpacing: '-0.015em', lineHeight: 1.2, margin: '0 0 10px' }}>{m.heading}</h3>
            <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: 0, maxWidth: '62ch' }}>{m.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: '1987', label: 'Year founded' },
  { value: 'A',    label: 'A.M. Best rating' },
  { value: '50',   label: 'States licensed' },
  { value: '35+',  label: 'Years of service' },
]

export default function OurStoryPage() {
  return (
    <main>

      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>Since 1987</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '18ch' }}>
            Our Story
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '52ch' }}>
            Nearly four decades of one singular mission — providing Americans with reliable, transparent retirement savings products they can count on for life.
          </p>
        </div>
      </section>

      {/* Opening narrative */}
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <Eyebrow>The Foundation</Eyebrow>
              <h2 style={{ ...S.h2, marginBottom: 24 }}>
                Built on a promise <em style={S.accentBlue}>kept every year.</em>
              </h2>
            </div>
            <div style={{ flex: '1 1 340px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={S.body}>
                Oceanview Life and Annuity Company was founded in 1987 with a straightforward belief: retirement savers deserve products that are honest, durable, and easy to understand. Not complex instruments engineered for yield — but dependable contracts built to last.
              </p>
              <p style={S.body}>
                That philosophy has never changed. While the financial industry grew more complicated around us, we stayed focused. Fixed annuities. Guaranteed rates. Principal protection. No detours.
              </p>
              <p style={S.body}>
                Today, Oceanview is backed by Bayview Asset Management and rated A (Excellent) by A.M. Best — but the character of the company is the same as it was at founding: conservative by conviction, transparent by design, and singular in purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div style={{ background: 'var(--ov-navy-1000)', padding: '0' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', borderRadius: 0 }} className="pdt-stats-row">
            {STATS.map((s, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px 20px', borderLeft: i > 0 ? '1px solid rgba(255,255,255,.07)' : 'none', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,3.5vw,48px)', color: '#F2FCFF', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(242,252,255,.45)', marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 56 }}>
            <Eyebrow>Our History</Eyebrow>
            <h2 style={S.h2}>Nearly four decades <em style={S.accentBlue}>in the making.</em></h2>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Bayview section */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 72, alignItems: 'center', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <Eyebrow light>Backed by Bayview</Eyebrow>
                <h2 style={{ ...S.h2Light, marginBottom: 0 }}>
                  Institutional strength.<br /><em style={S.accent}>Independent character.</em>
                </h2>
              </div>
              <p style={S.bodyDark}>
                Since 2012, Oceanview has operated as part of the Bayview Asset Management family — one of the country's most experienced alternative investment managers with a long history in mortgage and structured credit markets.
              </p>
              <p style={S.bodyDark}>
                The partnership gives Oceanview institutional capital depth and sophisticated asset-liability management, while preserving the focused, advisor-first operating model that defines who we are. Bayview's backing is what allows us to offer competitive rates while maintaining the financial strength our policyholders depend on.
              </p>
            </div>
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <img src="assets/AdobeStock_1231908414@0.3x.jpg" alt="Oceanview headquarters" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
            <Eyebrow>Our Mission</Eyebrow>
            <h2 style={{ ...S.h2, marginBottom: 28 }}>
              Empowering Americans toward a <em style={S.accentBlue}>financially secure retirement.</em>
            </h2>
            <p style={{ ...S.body, fontSize: 17, maxWidth: '58ch', margin: '0 auto' }}>
              We partner with financial professionals to deliver straightforward, reliable annuity solutions — products built around competitive rates, financial strength, and a service experience that puts the advisor and client first.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Meet the Team"
            title="The people behind"
            titleAccent="the promise."
            body="Our executive team and board bring decades of insurance, finance, and regulatory expertise to every decision we make."
            cta="Meet Our Leadership"
            onClick={() => { window.location.hash = 'leadership'; }}
          />
        </div>
      </section>

    </main>
  )
}
