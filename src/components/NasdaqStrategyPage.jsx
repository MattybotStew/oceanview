import { PillMint, PillGhost } from './Buttons.jsx'
import { Zap } from 'lucide-react'
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

const STRATEGIES = [
  { name: 'Annual Point to Point with Cap Rate',           term: '1-Year Term', desc: 'Measures Nasdaq-100 performance from one anniversary to the next. Growth is credited up to a declared annual cap rate.' },
  { name: 'Annual Point to Point with Participation Rate', term: '1-Year Term', desc: 'Credits a declared percentage of the tech-weighted index gain each year — no cap ceiling, participation rate applies instead.' },
  { name: '2-Year Point to Point with Participation Rate', term: '2-Year Term', desc: 'Captures Nasdaq-100 performance over a two-year window, allowing for smoother participation across technology market cycles.' },
]

export default function NasdaqStrategyPage() {
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
            Nasdaq-100 Index Strategy
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '54ch' }}>
            Three crediting strategies linked to the Nasdaq-100 Index — participation in technology and innovation-led growth, with guaranteed principal protection on the Harbourview Fixed Indexed Annuity.
          </p>
        </div>
      </section>

      {/* Section 1: About the Index */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={S.iconTile}>
                <Zap size={20} color="#2494C1" strokeWidth={1.75} />
              </div>
              <Eyebrow>About the Index</Eyebrow>
              <h2 style={S.h2}>
                Technology and innovation, <em style={S.accentLight}>with a protected floor.</em>
              </h2>
              <p style={S.body}>
                The Nasdaq-100 tracks the 100 largest non-financial companies listed on the Nasdaq exchange — a list dominated by technology, consumer technology, and innovation-driven businesses. Companies like Apple, Microsoft, Nvidia, Amazon, and Alphabet represent significant weight in the index, making it the benchmark most aligned with the modern innovation economy.
              </p>
              <p style={S.body}>
                Technology-heavy indexes historically outperform broad market indexes over long periods, but they can also experience sharper corrections. For a Fixed Indexed Annuity, this dynamic is advantageous: in strong years, the Nasdaq-100 can deliver higher credited rates than a broad market index; in down years, the zero-floor guarantee means the account simply credits zero, preserving the accumulated value.
              </p>
            </div>
            <div style={{ flex: '1 1 300px', minWidth: 0 }}>
              <div style={S.cardTeal}>
                <h3 style={S.h3}>Nasdaq-100 Key Facts</h3>
                <div style={{ marginTop: 16 }}>
                  <FeatureList features={[
                    '100 of the largest non-financial Nasdaq-listed companies — heavily weighted toward technology and innovation sectors',
                    'Has historically delivered higher long-term returns than the S&P 500 over most multi-decade periods',
                    'Greater sector concentration means larger swings — both up and down — than diversified broad-market indexes',
                    'Three crediting strategies available on the Harbourview FIA, covering 1-year and 2-year measurement windows',
                    'Zero-floor guarantee converts down-year risk into a simple zero credit — no loss to principal',
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
              Three ways to participate in <em style={S.accent}>Nasdaq-100 growth.</em>
            </h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              Each strategy measures Nasdaq-100 performance differently. Select based on the client's preference for a cap-rate ceiling vs. uncapped participation, and their comfort with a 1-year vs. 2-year crediting window.
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

      {/* Section 3: Why Nasdaq-100 */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'center', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <Eyebrow>Why This Index</Eyebrow>
                <h2 style={{ ...S.h2, marginBottom: 14 }}>
                  Innovation-driven upside, <em style={{ fontStyle: 'italic', color: '#2494C1' }}>with zero market risk.</em>
                </h2>
              </div>
              <p style={S.body}>
                Technology companies have driven a disproportionate share of equity market returns over the last two decades. The Nasdaq-100 gives clients a way to participate in that growth story — without the risk of a market correction destroying years of accumulated retirement savings. In a year when the Nasdaq-100 drops 30%, a Harbourview FIA contract linked to it simply credits zero and holds its value, ready to participate fully in the next up year.
              </p>
              <FeatureList features={[
                'Technology sector concentration historically generates higher long-term returns than broad-market indexes',
                'Sharp corrections in tech-heavy indexes credit zero on the FIA — no loss, just a pause',
                'Cap and participation rates are declared before the strategy period begins, so expectations are clear',
                'Combine with S&P 500 or Russell 2000 strategies on the same contract for sector diversification',
              ]} />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 8 }}>
                <PillMint onClick={() => { window.location.hash = 'harbourview-fia' }}>Explore Harbourview FIA</PillMint>
                <PillGhost onClick={() => { window.location.hash = 'contact' }}>Talk to a Specialist</PillGhost>
              </div>
            </div>
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <img src="assets/hero-beach-couple.jpg" alt="Couple planning retirement" loading="lazy" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
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
            body="The Harbourview FIA offers Nasdaq-100, S&P 500, Russell 2000, and Fixed Interest strategies — giving clients the flexibility to build the right index mix for their retirement goals."
            cta="View the Harbourview FIA"
            onClick={() => { window.location.hash = 'harbourview-fia' }}
          />
        </div>
      </section>
    </main>
  )
}
