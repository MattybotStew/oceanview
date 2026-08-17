// BlogProtectionClientArticlePage.jsx — Client article for the Protection for What's Next campaign
// Route: #blog-retirement-protection-client
import { PillMint, PillGhost } from './Buttons.jsx'
import CTABanner from './CTABanner.jsx'
import { Eyebrow, assetUrl } from './common.jsx'

const S = {
  h1:   { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px,4vw,42px)', color: '#233D7C', letterSpacing: '-0.02em', lineHeight: 1.2, margin: 0 },
  date: { fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#6B7280', margin: 0 },
  body: { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, lineHeight: 1.7, color: '#4A5568', margin: 0 },
  h3:   { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(22px,2.4vw,26px)', color: '#233D7C', letterSpacing: '-0.01em', lineHeight: 1.25, margin: '0 0 8px' },
  quote:{ fontFamily: 'var(--ov-ff-display)', fontSize: 17, fontStyle: 'italic', color: '#1A3070', lineHeight: 1.55, margin: '0 0 12px' },
}

const QUESTIONS = [
  {
    title: 'Predictable income',
    question: 'Do you know how much of your expected retirement income is predictable and how much may change from year to year?',
  },
  {
    title: 'Market resilience',
    question: 'Could your plan continue to cover essential expenses during a prolonged market decline without forcing an unwanted change in strategy?',
  },
  {
    title: 'Interest-rate uncertainty',
    question: 'Have you considered how changing interest rates could affect your savings, reinvestment decisions and income plan?',
  },
  {
    title: 'Income that lasts',
    question: 'Have you considered how long your retirement income may need to last, including the possibility of living longer than expected?',
  },
  {
    title: 'A balanced role for every dollar',
    question: 'Have you decided how much of your savings should be available for near-term needs, positioned for growth, protected from market swings or used to support income?',
  },
]

const CHECKUP_PDF = assetUrl('assets/downloads/retirement-protection-checkup.pdf')

export default function BlogProtectionClientArticlePage() {
  return (
    <main>
      <section style={{ background: '#fff', padding: 'clamp(72px,9vw,112px) 0 80px' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start' }} className="ov-article-layout">
            <article style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div>
                <button
                  type="button"
                  onClick={() => { window.location.hash = 'blog' }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 0, padding: 0, marginBottom: 20, fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: 'var(--ov-navy-600)', cursor: 'pointer' }}
                >
                  ← Back to Blog
                </button>
                <Eyebrow>Retirement Planning</Eyebrow>
                <h1 style={{ ...S.h1, maxWidth: 680, marginBottom: 16 }}>
                  Five Questions to Ask About Protecting Your Retirement Plan
                </h1>
                <p style={S.date}>September 1, 2026</p>
              </div>

              <p style={S.body}>
                A strong retirement plan is about more than how savings can grow. It is also about what you
                can count on, what may change and where a thoughtful conversation with your financial
                professional may help.
              </p>
              <p style={S.body}>
                These five questions — drawn from Oceanview&rsquo;s Retirement Protection Checkup — are
                intended for general educational purposes. There are no right or wrong answers. A
                &ldquo;Partly&rdquo; or &ldquo;Not yet&rdquo; response does not mean your plan is off track;
                it simply highlights an area where additional discussion may be useful.
              </p>

              <div style={{ aspectRatio: '3/2', borderRadius: 16, overflow: 'hidden' }}>
                <img
                  src={assetUrl('assets/family.png')}
                  loading="lazy"
                  alt="Family planning together for retirement"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {QUESTIONS.map((q, i) => (
                <div key={q.title} style={{ paddingTop: i > 0 ? 8 : 0, borderTop: i > 0 ? '1px solid rgba(13,31,78,.08)' : 'none' }}>
                  <h3 style={S.h3}>{q.title}</h3>
                  <p style={S.quote}>&ldquo;{q.question}&rdquo;</p>
                </div>
              ))}

              <p style={{ ...S.body, fontSize: 13, color: '#6B7280' }}>
                Share the Checkup with your financial professional and use the question most relevant to
                your situation. Before deciding on any strategy, review potential benefits, tradeoffs,
                liquidity, time horizon, guarantees and costs together.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <PillMint onClick={() => window.open(CHECKUP_PDF, '_blank', 'noopener,noreferrer')}>
                  Download the Checkup
                </PillMint>
                <PillGhost onClick={() => { window.location.hash = 'contact' }}>
                  Talk to a professional
                </PillGhost>
              </div>
            </article>

            <aside className="ov-article-sidebar" style={{ width: 320, flexShrink: 0, position: 'sticky', top: 'calc(var(--ov-header-h, 72px) + 24px)' }}>
              <div style={{ background: 'var(--ov-navy-1000)', borderRadius: 12, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 18, color: '#F2FCFF', letterSpacing: '-0.01em', lineHeight: 1.3, margin: 0 }}>
                  Explore retirement resources designed for individuals.
                </p>
                <PillMint onClick={() => { window.location.hash = 'individuals' }}>
                  Retirement Resources
                </PillMint>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <CTABanner
            eyebrow="Get Started"
            title="Questions about your"
            titleAccent="retirement plan?"
            body="Connect with a financial professional or contact Oceanview to learn more about retirement savings and income solutions."
            cta="Contact Us"
            onClick={() => { window.location.hash = 'contact' }}
          />
        </div>
      </section>
    </main>
  )
}
