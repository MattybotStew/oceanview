// BlogArticlePage.jsx — Default blog article template (Figma: 2026-Oceanview-Design / node 7391-3634)
import { PillMint } from './Buttons.jsx'
import CTABanner from './CTABanner.jsx'
import { Download } from 'lucide-react'

const S = {
  eyebrowRow:  { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 },
  eyebrowLine: { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' },
  h1:          { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px,4vw,42px)', color: '#233D7C', letterSpacing: '-0.02em', lineHeight: 1.2, margin: 0 },
  date:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#6B7280', margin: 0 },
  body:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, lineHeight: 1.7, color: '#4A5568', margin: 0 },
  bodyBold:    { fontFamily: 'var(--ov-ff-sans)', fontWeight: 700, fontSize: 15, lineHeight: 1.7, color: '#4A5568', margin: 0 },
  h3:          { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(22px,2.4vw,26px)', color: '#233D7C', letterSpacing: '-0.01em', lineHeight: 1.25, margin: 0 },
  ul:          { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, lineHeight: 1.7, color: '#4A5568', margin: 0, paddingLeft: 22 },
}

function DownloadRow({ title, sub }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, padding: '20px 24px', background: '#fff', border: '1px solid rgba(13,31,78,.09)', borderRadius: 10 }}>
      <div>
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14, color: '#0D1F4E', marginBottom: 3 }}>{title}</div>
        {sub && <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#6B7280' }}>{sub}</div>}
      </div>
      <button style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: '1.5px solid rgba(36,148,193,.3)', borderRadius: 8, padding: '8px 16px', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#2494C1', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'border-color .15s, background .15s' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(36,148,193,.06)'; e.currentTarget.style.borderColor = '#2494C1' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'rgba(36,148,193,.3)' }}
      >
        <Download size={13} strokeWidth={2} />
        Download PDF
      </button>
    </div>
  )
}

export default function BlogArticlePage() {
  return (
    <main>
      <section style={{ background: '#fff', padding: 'clamp(72px,9vw,112px) 0 80px' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start' }} className="ov-article-layout">

            {/* ── Article body ──────────────────────────────────────────── */}
            <article style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 28 }}>

              <div>
                <div style={S.eyebrowRow}>
                  <div style={S.eyebrowLine} />
                  <span style={S.eyebrow}>Education</span>
                </div>
                <h1 style={{ ...S.h1, maxWidth: 640, marginBottom: 16 }}>When Is the Best Time to Consider Buying an Annuity?</h1>
                <p style={S.date}>May 28, 2026</p>
              </div>

              <p style={S.body}>
                If you're starting to think seriously about retirement, it's natural to ask: When is the appropriate time to buy an annuity?
              </p>
              <p style={S.body}>
                There's no single "right" age or moment that works for everyone. Instead, the appropriate time to consider buying an annuity often depends on your goals, your retirement timeline, and how you want to balance growth, protection, and income. Annuities are insurance products, and whether an annuity is appropriate depends on an individual's financial situation, objectives, and risk tolerance.
              </p>
              <p style={S.bodyBold}>Here's how to think about timing in a way that's general and practical.</p>

              <div style={{ aspectRatio: '3/2', borderRadius: 16, overflow: 'hidden' }}>
                <img
                  src="assets/hero-beach-couple.jpg"
                  loading="lazy"
                  alt="Couple walking on the beach"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              <h3 style={S.h3}>There Isn't One Perfect Time—But There Is a Right Time for You</h3>
              <p style={S.body}>
                Annuities are designed to support long-term retirement goals, not short-term decisions. Rather than focusing on market timing or age alone, it's more helpful to consider where you are in your retirement journey and what role you want an annuity to play. Annuities typically involve long-term commitments, and withdrawals may be subject to surrender charges or other limitations as described in the contract.
              </p>
              <p style={S.bodyBold}>Many people consider annuities during key transition points, such as:</p>
              <ul style={S.ul}>
                <li>Approaching retirement</li>
                <li>Entering retirement</li>
                <li>Reassessing income needs after retirement</li>
              </ul>

              <h3 style={S.h3}>Buying an Annuity Before Retirement</h3>
              <p style={S.bodyBold}>Some individuals choose to purchase an annuity several years before they plan to retire. Doing so may help:</p>
              <ul style={S.ul}>
                <li>Build tax-deferred value over time</li>
                <li>Add stability to a broader retirement strategy</li>
                <li>Prepare for predictable income later</li>
              </ul>
              <p style={S.body}>
                This approach is often appealing for people who want to reduce uncertainty as retirement gets closer, however, it depends on individual financial goals, liquidity needs, and time horizon.
              </p>

              <DownloadRow title="Harbourview FIA Product Overview" sub="Summary brochure with all contract details" />
            </article>

            {/* ── Sticky sidebar CTA ────────────────────────────────────── */}
            <aside className="ov-article-sidebar" style={{ width: 320, flexShrink: 0, position: 'sticky', top: 'calc(var(--ov-header-h, 72px) + 24px)' }}>
              <div style={{ background: 'var(--ov-navy-1000)', borderRadius: 12, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 18, color: '#F2FCFF', letterSpacing: '-0.01em', lineHeight: 1.3, margin: 0 }}>
                  Ready to learn more? Our team can walk you through the right strategy.
                </p>
                <PillMint onClick={() => { window.location.hash = 'contact' }}>Get Started</PillMint>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <CTABanner
            eyebrow="Get Started"
            title="Ready to explore the Harbourview FIA?"
            body="Talk to a financial professional or contact our team to find the strategy that fits your retirement goals."
            cta="Get Started"
            onClick={() => { window.location.hash = 'contact'; }}
          />
        </div>
      </section>
    </main>
  )
}
