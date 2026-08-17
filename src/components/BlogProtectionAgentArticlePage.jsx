// BlogProtectionAgentArticlePage.jsx — Agent article for the Protection for What's Next campaign
// Route: #blog-retirement-protection-agent
import { PillMint, PillGhost } from './Buttons.jsx'
import CTABanner from './CTABanner.jsx'
import { Eyebrow, assetUrl } from './common.jsx'
import { Download } from 'lucide-react'

const S = {
  h1:   { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px,4vw,42px)', color: '#233D7C', letterSpacing: '-0.02em', lineHeight: 1.2, margin: 0 },
  date: { fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#6B7280', margin: 0 },
  body: { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, lineHeight: 1.7, color: '#4A5568', margin: 0 },
  h3:   { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(22px,2.4vw,26px)', color: '#233D7C', letterSpacing: '-0.01em', lineHeight: 1.25, margin: 0 },
  ul:   { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, lineHeight: 1.7, color: '#4A5568', margin: 0, paddingLeft: 22 },
}

const GUIDE_PDF = assetUrl('assets/downloads/retirement-protection-conversation-guide.pdf')
const CHECKUP_PDF = assetUrl('assets/downloads/retirement-protection-checkup.pdf')

function DownloadRow({ title, sub, href }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, padding: '20px 24px', background: '#fff', border: '1px solid rgba(13,31,78,.09)', borderRadius: 10 }}>
      <div>
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14, color: '#0D1F4E', marginBottom: 3 }}>{title}</div>
        {sub && <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#6B7280' }}>{sub}</div>}
      </div>
      <button
        type="button"
        onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
        style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: '1.5px solid rgba(36,148,193,.3)', borderRadius: 8, padding: '8px 16px', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#2494C1', cursor: 'pointer', whiteSpace: 'nowrap' }}
      >
        <Download size={13} strokeWidth={2} />
        Download PDF
      </button>
    </div>
  )
}

export default function BlogProtectionAgentArticlePage() {
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
                <Eyebrow>Financial Professionals</Eyebrow>
                <h1 style={{ ...S.h1, maxWidth: 680, marginBottom: 16 }}>
                  Retirement Protection Starts with Better Questions
                </h1>
                <p style={S.date}>September 1, 2026</p>
              </div>

              <p style={S.body}>
                Retirement planning conversations often begin with growth — returns, allocation and accumulation.
                Protection deserves a place in the conversation, too. When clients can articulate what they
                understand clearly, what they can rely on and what may deserve a closer look, advisors earn
                permission for a deeper planning discussion.
              </p>
              <p style={S.body}>
                Oceanview&rsquo;s Retirement Protection Conversation Guide and client Checkup are designed to
                work together: the Guide prepares you for the meeting; the Checkup gives clients a simple,
                educational starting point.
              </p>

              <div style={{ aspectRatio: '3/2', borderRadius: 16, overflow: 'hidden' }}>
                <img
                  src={assetUrl('assets/older-couple-1.png')}
                  loading="lazy"
                  alt="Advisor and client reviewing a retirement plan"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              <h3 style={S.h3}>Ask. Listen. Clarify. Connect.</h3>
              <p style={S.body}>
                Use the Checkup question as written. Listen for uncertainty, assumptions and competing
                priorities. Ask one follow-up before discussing possible solutions. Then reflect what you
                heard and ask permission to explore strategies that may address the client&rsquo;s concern.
              </p>
              <ul style={S.ul}>
                <li>Begin with the topic most relevant to the client&rsquo;s situation — not all five questions at once</li>
                <li>Clarify the priority before comparing approaches</li>
                <li>Review benefits, tradeoffs, liquidity, time horizon, guarantees and costs before deciding whether anything fits</li>
              </ul>

              <DownloadRow
                title="Retirement Protection Conversation Guide"
                sub="For financial professional use only"
                href={GUIDE_PDF}
              />
              <DownloadRow
                title="Retirement Protection Checkup"
                sub="Client-shareable educational resource"
                href={CHECKUP_PDF}
              />

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <PillMint onClick={() => { window.location.hash = 'protection-for-whats-next' }}>
                  View the campaign page
                </PillMint>
                <PillGhost onClick={() => window.open(GUIDE_PDF, '_blank', 'noopener,noreferrer')}>
                  Download the Guide
                </PillGhost>
              </div>
            </article>

            <aside className="ov-article-sidebar" style={{ width: 320, flexShrink: 0, position: 'sticky', top: 'calc(var(--ov-header-h, 72px) + 24px)' }}>
              <div style={{ background: 'var(--ov-navy-1000)', borderRadius: 12, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 18, color: '#F2FCFF', letterSpacing: '-0.01em', lineHeight: 1.3, margin: 0 }}>
                  Get the Guide and Checkup in one place.
                </p>
                <PillMint onClick={() => { window.location.hash = 'protection-for-whats-next' }}>
                  Protection for What&rsquo;s Next
                </PillMint>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <CTABanner
            eyebrow="Protection for What's Next"
            title="Download the full"
            titleAccent="Retirement Protection Toolkit"
            body="Guide for you. Checkup for your clients. Use the question most relevant to your next meeting."
            cta="Download Toolkit"
            onClick={() => window.open(assetUrl('assets/downloads/retirement-protection-toolkit.pdf'), '_blank', 'noopener,noreferrer')}
          />
        </div>
      </section>
    </main>
  )
}
