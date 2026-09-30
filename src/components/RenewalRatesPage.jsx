// RenewalRatesPage.jsx — Harbourview FIA renewal rates campaign landing
// Route: #renewal-rates  (unlisted — campaign destination, no main-nav link)
// Copy: Renewal Rates Landing Page web copy Draft v1
import { PillMint, PillGhost } from './Buttons.jsx'
import { Eyebrow, assetUrl } from './common.jsx'
import CTABanner from './CTABanner.jsx'
import HeroShaper from './HeroShaper.jsx'
import { Activity, ClipboardCheck, SlidersHorizontal, Check } from 'lucide-react'

const S = {
  h1:       { fontFamily: 'var(--ov-ff-display)', fontWeight: 800, fontSize: 'clamp(28px, 5.5vw, 63px)', color: '#F2FCFF', lineHeight: 1.1, margin: 0 },
  h2:       { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  h2Light:  { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#F2FCFF', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  accent:   { fontStyle: 'italic', color: '#70BABF' },
  accentBlue: { fontStyle: 'italic', color: '#2494C1' },
  body:     { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: 0 },
  bodyDark: { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: 'rgba(242,252,255,.65)', lineHeight: 1.7, margin: 0 },
  whiteCard:{ background: '#fff', border: '1px solid rgba(13,31,78,.07)', borderRadius: 14, padding: '28px 28px 26px', display: 'flex', flexDirection: 'column', gap: 12, boxShadow: '0 2px 8px rgba(13,31,78,.04)', height: '100%', boxSizing: 'border-box' },
  iconTile: { width: 44, height: 44, borderRadius: 10, background: 'var(--ov-surface-tint)', border: '1px solid rgba(36,148,193,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
}

const STEPS = [
  { n: '1', title: 'Monitor', icon: Activity, body: 'We continuously monitor market conditions and the opportunities available to support FIA crediting terms.' },
  { n: '2', title: 'Review', icon: ClipboardCheck, body: 'At each renewal period, we review then-current market conditions, available opportunities and applicable contract terms.' },
  { n: '3', title: 'Adjust', icon: SlidersHorizontal, body: 'Renewal rates may move higher or lower as conditions, available opportunities and contract terms change.' },
]

const QUESTIONS = [
  { q: 'How are renewal rates determined?', a: "Understand the carrier's process and the factors that can affect future rates." },
  { q: 'What has the historical experience been?', a: 'Review available renewal data rather than relying only on the initial offering.' },
  { q: 'What expectations should the client have?', a: 'Make clear that future rates can change and are not guaranteed at the initial level.' },
  { q: 'How will the carrier communicate what happens next?', a: 'Understand how and when the carrier communicates renewal rates, timing and available options.' },
]

const go = (hash) => { window.location.hash = hash }

export default function RenewalRatesPage() {
  return (
    <main>
      <div className="ov-hero-wrapper" style={{ marginBottom: 40 }}>
        <section style={{ paddingTop: 20, paddingBottom: 0 }}>
          <div className="ov-hero-card pwn-hero" style={{ background: 'var(--ov-navy-1000)' }}>
            <div
              className="pwn-hero-bg"
              style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${assetUrl('assets/renewal-rates-hero.png')})`,
                backgroundSize: 'cover', backgroundPosition: '58% 28%', zIndex: 0,
              }}
            />
            <div
              className="ov-hero-scrim"
              style={{
                position: 'absolute', inset: 0, zIndex: 1,
                background: 'linear-gradient(85deg, rgba(0,31,84,.84) 0%, rgba(0,31,84,.42) 62%, transparent 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${assetUrl('assets/Noise.png')})`, backgroundRepeat: 'repeat',
                backgroundSize: '200px', opacity: 0.6, pointerEvents: 'none', zIndex: 2,
              }}
            />
            <HeroShaper />
            <div className="ov-hero-content" style={{ zIndex: 3 }}>
              <Eyebrow light>Harbourview FIA Renewal Experience</Eyebrow>
              <h1 className="ov-hero-title" style={S.h1}>
                A Different Way to <em style={S.accent}>Compete</em>
              </h1>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: '58ch' }}>
                <p style={{ ...S.bodyDark, fontSize: 'clamp(16px,1.5vw,18px)', fontWeight: 600, color: '#F2FCFF' }}>
                  The Initial Rate is Only Part of the Story
                </p>
                <p style={{ ...S.bodyDark, fontSize: 'clamp(14px,1.4vw,17px)' }}>
                  When evaluating a fixed indexed annuity, the terms available at issue matter. But for a contract designed to last years, what happens at renewal matters too.
                </p>
                <p style={{ ...S.bodyDark, fontSize: 'clamp(14px,1.4vw,17px)' }}>
                  Oceanview reviews Harbourview FIA renewal rates each period based on then-current market conditions—so each new rate period reflects the opportunities available at that time, not simply the market environment that existed when the contract was issued.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
                <PillMint hero onClick={() => go('brochures')}>Download Rates That Keep Pace</PillMint>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <div style={{ maxWidth: 720, marginBottom: 36 }}>
            <Eyebrow>Renewal experience</Eyebrow>
            <h2 style={{ ...S.h2, marginBottom: 14 }}>
              A Renewal Track Record You Can <em style={S.accentBlue}>Evaluate</em>
            </h2>
            <p style={S.body}>
              Historical renewal data gives financial professionals another perspective when evaluating how a carrier has approached renewal rate setting over time.
            </p>
          </div>
          <div className="lpl-pillars-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
            <div style={S.whiteCard}>
              <div style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(40px,4vw,56px)', color: '#2494C1', letterSpacing: '-0.03em', lineHeight: 1 }}>98.2%</div>
              <p style={S.body}>For the measured Harbourview FIA population, average renewal cap rates were 98.2% of initial cap rates.</p>
            </div>
            <div style={S.whiteCard}>
              <div style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(40px,4vw,56px)', color: '#2494C1', letterSpacing: '-0.03em', lineHeight: 1 }}>10.8%</div>
              <p style={S.body}>10.8% of contracts received a higher cap rate at their renewal anniversary.</p>
            </div>
          </div>
          <div style={{ background: 'var(--ov-surface-tint)', borderRadius: 14, padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p style={{ ...S.body, fontWeight: 600, color: '#0D1F4E' }}>Important context:</p>
            <p style={S.body}>Past anniversary cap-rate experience is not a guarantee of future results. Renewal cap rates may be higher or lower than original rates depending on market conditions and applicable contract terms.</p>
            <p style={S.body}>The statistics above reflect aggregate historical experience and are not intended to represent the experience of any individual contract.</p>
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: 'var(--ov-navy-1000)' }}>
        <div className="ov-container">
          <div style={{ maxWidth: 680, marginBottom: 36 }}>
            <Eyebrow light>Process</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 14 }}>
              How Oceanview Sets and Reviews <em style={S.accent}>Renewal Rates</em>
            </h2>
            <p style={S.bodyDark}>Oceanview reviews Harbourview FIA renewal rates each period based on then-current market conditions.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="lpl-pillars-grid">
            {STEPS.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.n} style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: '26px 26px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ ...S.iconTile, background: 'rgba(112,186,191,.15)', borderColor: 'rgba(112,186,191,.25)' }}>
                    <Icon size={20} color="#70BABF" strokeWidth={1.75} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 22, color: '#F2FCFF', margin: 0 }}>{step.n}. {step.title}</h3>
                  <p style={S.bodyDark}>{step.body}</p>
                </div>
              )
            })}
          </div>
          <p style={{ ...S.bodyDark, marginTop: 28, maxWidth: 720 }}>
            <strong style={{ color: '#F2FCFF', fontWeight: 600 }}>Clear expectations. Renewal rates reviewed over time.</strong>{' '}
            Renewal rates are determined at the applicable renewal period and may differ from the rates available when a contract was issued.
          </p>
        </div>
      </section>

      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <div style={{ maxWidth: 720, marginBottom: 32 }}>
            <Eyebrow>Context</Eyebrow>
            <h2 style={{ ...S.h2, marginBottom: 14 }}>
              What the Track Record Means — and What It <em style={S.accentBlue}>Doesn&rsquo;t</em>
            </h2>
            <p style={S.body}>Historical renewal experience is useful when it is presented with clear context. The numbers can inform a carrier evaluation, but they cannot predict a future renewal rate.</p>
          </div>
          <div className="lpl-pillars-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
            <div style={S.whiteCard}>
              <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 22, color: '#0D1F4E', margin: 0 }}>What It Shows</h3>
              <p style={S.body}>Actual historical Harbourview FIA renewal cap-rate experience across the contracts and strategies included in the measured population.</p>
              <p style={S.body}>It provides another data point for evaluating Oceanview&rsquo;s historical approach to renewal rate setting.</p>
            </div>
            <div style={S.whiteCard}>
              <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 22, color: '#0D1F4E', margin: 0 }}>What It Doesn&rsquo;t Show</h3>
              <p style={{ ...S.body, fontWeight: 600, color: '#1A3070' }}>A guaranteed future cap rate.</p>
              <p style={S.body}>Future renewal rates may be higher or lower than initial or prior rates based on market conditions, product terms and applicable contract provisions. Individual contract experience may vary.</p>
            </div>
          </div>
          <p style={{ ...S.body, fontWeight: 600, color: '#0D1F4E', maxWidth: 720 }}>
            A historical track record can inform the conversation. It cannot predict future renewal rates.
          </p>
        </div>
      </section>

      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <div style={{ maxWidth: 720, marginBottom: 28 }}>
            <Eyebrow>For financial professionals</Eyebrow>
            <h2 style={{ ...S.h2, marginBottom: 14 }}>
              Why Renewal Practices Belong in the <em style={S.accentBlue}>Conversation</em>
            </h2>
            <p style={S.body}>The initial rate is one important factor. Renewal practices provide another perspective on how a carrier approaches value over time.</p>
            <p style={{ ...S.body, marginTop: 12 }}>For financial professionals evaluating an FIA, consider asking:</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 820 }}>
            {QUESTIONS.map((item) => (
              <div key={item.q} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <Check size={16} color="#2494C1" strokeWidth={2.4} style={{ flexShrink: 0, marginTop: 4 }} />
                <div>
                  <p style={{ ...S.body, fontWeight: 600, color: '#0D1F4E' }}>{item.q}</p>
                  <p style={S.body}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <div
            className="nsg-split"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
              gap: 48,
              alignItems: 'center',
            }}
          >
            <img
              src={assetUrl('assets/harbourview-myga-hero.jpg')}
              alt="Couple preparing a meal together in the kitchen"
              style={{
                width: '100%',
                minHeight: 280,
                height: '100%',
                objectFit: 'cover',
                borderRadius: 14,
                display: 'block',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <Eyebrow>Resource</Eyebrow>
              <h2 style={S.h2}>
                Take a Closer Look at Rates That <em style={S.accentBlue}>Keep Pace</em>
              </h2>
              <p style={S.body}>
                Our Rates That Keep Pace resource brings the renewal story together in one concise tool—from historical Harbourview FIA renewal experience to how Oceanview reviews rates as market conditions change.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <PillMint onClick={() => go('brochures')}>Download Rates That Keep Pace</PillMint>
                <PillGhost onClick={() => go('harbourview-fia')}>Explore Harbourview FIA</PillGhost>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <CTABanner
            eyebrow="The Oceanview Approach"
            title="Clear expectations at issue."
            titleAccent="Renewal rates reviewed over time."
            body="Explore Harbourview FIA product information, current rates and resources designed to help make the client conversation clearer."
            cta="Explore Harbourview FIA"
            onClick={() => go('harbourview-fia')}
            secondary={(
              <PillGhost light hero onClick={() => { window.location.href = 'tel:+18336567455' }}>
                Talk with Oceanview Sales (833) 656-7455
              </PillGhost>
            )}
          />
        </div>
      </section>
    </main>
  )
}
