import { PillMint, PillGhost } from './Buttons.jsx'
import { DollarSign } from 'lucide-react'
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

export default function RRSLongevityRiskPage() {
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
            Longevity Risk
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '54ch' }}>
            Americans are living longer than ever — and outliving retirement savings is now one of the most common threats to financial security. A guaranteed income stream removes this uncertainty.
          </p>
        </div>
      </section>

      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={S.iconTile}>
                <DollarSign size={20} color="#2494C1" strokeWidth={1.75} />
              </div>
              <Eyebrow>What Is Longevity Risk?</Eyebrow>
              <h2 style={S.h2}>
                The danger of outliving <em style={S.accentLight}>your savings.</em>
              </h2>
              <p style={S.body}>
                Longevity risk is the possibility that you live longer than your retirement assets last. It sounds like a good problem to have — and in many ways it is — but the financial consequences of running out of money at eighty-five or ninety are severe. A retirement plan that works for twenty years may fail at thirty. The only way to eliminate this uncertainty is with guaranteed lifetime income.
              </p>
              <p style={S.body}>
                The statistics bear this out. A sixty-five-year-old couple today has a significant probability that at least one spouse will live past ninety. For a retirement that spans three decades or more, the amount of capital required to sustain withdrawals indefinitely — without a guaranteed income component — is dramatically higher than most retirees assume.
              </p>
            </div>
            <div style={{ flex: '1 1 300px', minWidth: 0 }}>
              <div style={S.cardTeal}>
                <h3 style={S.h3}>Key Longevity Risk Facts</h3>
                <div style={{ marginTop: 16 }}>
                  <FeatureList features={[
                    'A 65-year-old couple has a high probability that one spouse reaches age 90 or beyond',
                    'Life expectancy has increased by roughly 10 years over the past half-century',
                    'A retirement plan funded for 20 years may fail if it needs to last 30 — the math changes dramatically',
                    'Guaranteed lifetime income removes longevity uncertainty entirely, regardless of how long you live',
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
              Living longer is a gift — <em style={S.accent}>running out isn't.</em>
            </h2>
            <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
              Longevity risk is unique among retirement threats: it's the one risk most people hope for. But wishful thinking does not fund a thirty-year retirement. Here is how the math works.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="ov-risk-grid">
            <div style={S.cardDark}>
              <h3 style={S.h3Dark}>The Capital Requirement Problem</h3>
              <p style={{ ...S.bodyDark, fontSize: 14, marginTop: 14 }}>
                Without a guaranteed income source, funding a thirty-year retirement requires a significantly larger nest egg than funding a twenty-year retirement. A retiree who withdraws systematically from a portfolio must plan for the longest possible lifespan — which means underspending for decades or risking depletion at the worst moment.
              </p>
              <FeatureList dark features={[
                'A 30-year retirement requires dramatically more capital than a 20-year plan',
                'Conservative withdrawal rates leave most retirees spending below what they could afford',
                'The uncertainty itself forces underspending — even if you never run out',
              ]} />
            </div>
            <div style={S.cardDark}>
              <h3 style={S.h3Dark}>The Income Certainty Solution</h3>
              <p style={{ ...S.bodyDark, fontSize: 14, marginTop: 14 }}>
                Guaranteed lifetime income changes the equation. Instead of planning for an unknown endpoint and hoping the money lasts, the retiree converts a portion of assets into a stream that continues for life — however long that is. The remaining portfolio can then be invested more efficiently, because the longevity tail is covered.
              </p>
              <FeatureList dark features={[
                'Lifetime income removes the endpoint uncertainty entirely',
                'The remaining portfolio can be invested without longevity constraints',
                'Monthly income continues regardless of how long retirement lasts',
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
                  Income you cannot outlive — <em style={{ fontStyle: 'italic', color: '#2494C1' }}>by design.</em>
                </h2>
              </div>
              <p style={S.body}>
                Oceanview annuities offer guaranteed lifetime income options that remove longevity risk from the retirement equation. Whether through a Fixed Indexed Annuity with an income rider or a Multi-Year Guaranteed Annuity with a predictable accumulation period, the goal is the same: income that continues for as long as the client lives.
              </p>
              <FeatureList features={[
                'Guaranteed lifetime income options available on multiple Oceanview products',
                'Predictable cash flow regardless of how long you live — no market dependency',
                'Principal never lost to market fluctuations — the zero floor protects the base',
                'A.M. Best A (Excellent) rating — financial strength that stands behind every income promise',
              ]} />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', paddingTop: 8 }}>
                <PillMint onClick={() => { window.location.hash = 'harbourview-fia' }}>Explore Harbourview FIA</PillMint>
                <PillGhost onClick={() => { window.location.hash = 'harbourview-myga' }}>View MYGA Options</PillGhost>
              </div>
            </div>
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <img src="assets/family.png" alt="Family enjoying retirement together" loading="lazy" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Put It Into Practice"
            title="Build income that lasts"
            titleAccent="for a lifetime."
            body="Oceanview FIAs and MYGAs offer guaranteed lifetime income options — so your clients never outlive their savings, no matter how long retirement lasts."
            cta="Explore Products"
            onClick={() => { window.location.hash = 'products' }}
          />
        </div>
      </section>
    </main>
  )
}