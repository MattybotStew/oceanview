// ProtectionForWhatsNextPage.jsx — "Protection for What's Next" campaign landing
// Route: #protection-for-whats-next  (unlisted — campaign destination, no main-nav link)
// Two 2026 resources for financial professionals: the Retirement Protection
// Conversation Guide + the Retirement Protection Checkup.
import { PillMint, PillGhost, PillWhite } from './Buttons.jsx'
import { Eyebrow, assetUrl } from './common.jsx'
import CTABanner from './CTABanner.jsx'
import HeroShaper from './HeroShaper.jsx'
import {
  FileText, ClipboardCheck, MessageSquare, Ear, HelpCircle, Link2,
  ShieldCheck, Users, Check,
} from 'lucide-react'

const S = {
  h1:        { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(38px,5.5vw,72px)', color: '#F2FCFF', letterSpacing: '-0.03em', lineHeight: 1.03, margin: 0 },
  h2:        { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  h2Light:   { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#F2FCFF', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  accent:    { fontStyle: 'italic', color: '#70BABF' },
  accentBlue:{ fontStyle: 'italic', color: '#2494C1' },
  body:      { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: 0 },
  bodyDark:  { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: 'rgba(242,252,255,.65)', lineHeight: 1.7, margin: 0 },
  whiteCard: { background: '#fff', border: '1px solid rgba(13,31,78,.07)', borderRadius: 14, padding: '28px 28px 26px', display: 'flex', flexDirection: 'column', gap: 14, boxShadow: '0 2px 8px rgba(13,31,78,.04)', height: '100%', boxSizing: 'border-box' },
  darkCard:  { background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: '26px 26px 28px', display: 'flex', flexDirection: 'column', gap: 12, height: '100%', boxSizing: 'border-box' },
  tealCard:  { background: 'rgba(112,186,191,0.2)', border: '1px solid rgba(112,186,191,.25)', borderRadius: 14, padding: '28px 28px 26px', display: 'flex', flexDirection: 'column', gap: 12, height: '100%', boxSizing: 'border-box' },
  iconTile:  { width: 44, height: 44, borderRadius: 10, background: 'var(--ov-surface-tint)', border: '1px solid rgba(36,148,193,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
}

// PDF assets live in public/assets/downloads/ — replace with final compliance-approved files when they ship.
const DOWNLOADS = {
  guide:   assetUrl('assets/downloads/retirement-protection-conversation-guide.pdf'),
  checkup: assetUrl('assets/downloads/retirement-protection-checkup.pdf'),
  toolkit: assetUrl('assets/downloads/retirement-protection-toolkit.pdf'),
}

// Free Unsplash photography: Fa1znL9snyY, DQdilc0v6u8, bCdAVooTNm0, and XIdcEnBVHfI.
const CAMPAIGN_IMAGES = {
  hero:       assetUrl('assets/pwn-hero-beach.jpg'),
  planning:   assetUrl('assets/pwn-retirement-planning.jpg'),
  advisor:    assetUrl('assets/pwn-advisor-conversation.jpg'),
  transition: assetUrl('assets/pwn-client-conversation.jpg'),
}

const handleDownload = (key) => {
  const url = DOWNLOADS[key]
  if (url) window.open(url, '_blank', 'noopener,noreferrer')
}

function CheckItem({ children, dark }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
      <Check size={16} color={dark ? '#70BABF' : '#2494C1'} strokeWidth={2.4} style={{ flexShrink: 0, marginTop: 2 }} />
      <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, lineHeight: 1.6, color: dark ? 'rgba(242,252,255,.72)' : '#4A5568' }}>{children}</span>
    </div>
  )
}

// Five recommended opening questions + follow-ups (drawn from the Conversation
// Guide and client Checkup).
const QUESTIONS = [
  {
    title: 'Predictable income',
    question: 'Do you know how much of your expected retirement income is predictable and how much may change from year to year?',
    clarify: 'Which expenses would you most want covered by income you can predict?',
    note: 'This question can help distinguish reliable income sources from withdrawals or other income that may vary.',
  },
  {
    title: 'Market resilience',
    question: 'Could your plan continue to cover essential expenses during a prolonged market decline without forcing an unwanted change in strategy?',
    clarify: 'What would you most want to avoid changing if markets declined early in retirement?',
    note: 'This conversation may help identify concerns involving essential expenses, liquidity, withdrawal timing and the possible role of protected assets.',
  },
  {
    title: 'Interest-rate uncertainty',
    question: 'Have you considered how changing interest rates could affect your savings, reinvestment decisions and income plan?',
    clarify: 'Would you prefer a known rate, some ability to respond to future rate changes or different approaches for different portions?',
    note: 'This question can shift the discussion from predicting rates to understanding time horizon, liquidity needs and the value the client places on rate certainty.',
  },
  {
    title: 'Income that lasts',
    question: 'Have you considered how long your retirement income may need to last, including the possibility of living longer than expected?',
    clarify: 'How would the plan need to work if retirement lasted 25 or 30 years?',
    note: 'This conversation may surface longevity assumptions, survivor-income needs and differences between early- and later-retirement expenses.',
  },
  {
    title: 'A balanced role for every dollar',
    question: 'Have you decided how much of your savings should be available for near-term needs, positioned for growth, protected from market swings or used to support income?',
    clarify: 'What should remain liquid, what should be protected and what can stay positioned for longer-term growth?',
    note: 'This question can help the client consider whether different portions of savings have clear and realistic roles.',
  },
]

export default function ProtectionForWhatsNextPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="ov-hero-wrapper" style={{ marginBottom: 40 }}>
        <section style={{ paddingTop: 20, paddingBottom: 0 }}>
          <div className="ov-hero-card pwn-hero" style={{ background: 'var(--ov-navy-1000)' }}>
            <div
              className="pwn-hero-bg"
              style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${CAMPAIGN_IMAGES.hero})`,
                backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0,
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
              <Eyebrow light>Protection for What&rsquo;s Next</Eyebrow>
              <h1 className="ov-hero-title" style={S.h1}>
                Better retirement conversations begin with{' '}
                <em style={S.accent}>better questions.</em>
              </h1>
              <div className="pwn-hero-body" style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: '58ch' }}>
                <p style={{ ...S.bodyDark, fontSize: 'clamp(14px,1.4vw,17px)' }}>
                  Retirement planning often focuses on how savings can grow. Protection matters, too.
                </p>
                <p style={{ ...S.bodyDark, fontSize: 'clamp(14px,1.4vw,17px)' }}>
                  This September, use Oceanview&rsquo;s Retirement Protection Conversation Guide and
                  Retirement Protection Checkup to help clients consider what they understand clearly,
                  what they can rely on and what may deserve a closer look.
                </p>
              </div>
              <div className="pwn-hero-ctas" style={{ display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'flex-start' }}>
                <div className="pwn-hero-cta" style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
                  <PillMint hero onClick={() => handleDownload('guide')}>Download the Conversation Guide</PillMint>
                  <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 11, color: 'rgba(242,252,255,.6)' }}>For financial professional use only</span>
                </div>
                <div className="pwn-hero-cta" style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
                  <PillGhost light hero onClick={() => handleDownload('checkup')}>Download the Client Checkup</PillGhost>
                  <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 11, color: 'rgba(242,252,255,.6)' }}>Share with clients</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Two resources ─────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ maxWidth: 620, marginBottom: 44 }}>
            <Eyebrow light>For Financial Professionals</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 12 }}>
              Two resources. One <em style={S.accent}>better conversation.</em>
            </h2>
            <p style={S.bodyDark}>The Conversation Guide and Checkup are designed to work together.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, alignItems: 'stretch' }} className="pwn-resources-grid">
            {/* Guide */}
            <div style={S.whiteCard}>
              <div style={S.iconTile}>
                <FileText size={20} color="#2494C1" strokeWidth={1.75} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 19, color: '#0D1F4E', letterSpacing: '-0.01em', margin: 0 }}>
                  Retirement Protection Conversation Guide
                </h3>
                <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1px', textTransform: 'uppercase', color: '#2494C1' }}>For financial professional use only</span>
              </div>
              <p style={{ ...S.body, fontWeight: 600, color: '#1A3070' }}>Prepare for the conversation.</p>
              <p style={S.body}>Use the Guide to:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <CheckItem>Ask each retirement-protection question</CheckItem>
                <CheckItem>Recognize uncertainty, assumptions and competing priorities</CheckItem>
                <CheckItem>Clarify the client&rsquo;s underlying need</CheckItem>
                <CheckItem>Transition toward an appropriate next conversation</CheckItem>
              </div>
              <p style={S.body}>
                The goal is not to score the client or rush to a product. It is to uncover priorities,
                clarify tradeoffs and earn permission for a deeper planning discussion.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: 8 }}>
                <PillGhost onClick={() => handleDownload('guide')}>Download the Guide</PillGhost>
              </div>
            </div>

            {/* Checkup */}
            <div style={S.whiteCard}>
              <div style={S.iconTile}>
                <ClipboardCheck size={20} color="#2494C1" strokeWidth={1.75} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 19, color: '#0D1F4E', letterSpacing: '-0.01em', margin: 0 }}>
                  Retirement Protection Checkup
                </h3>
                <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1px', textTransform: 'uppercase', color: '#2494C1' }}>Client-shareable educational resource</span>
              </div>
              <p style={{ ...S.body, fontWeight: 600, color: '#1A3070' }}>Give clients a place to start.</p>
              <p style={S.body}>
                Share the Checkup before or during a client meeting. Its five questions help clients
                identify where their retirement plan feels clear and where additional discussion may
                be useful.
              </p>
              <p style={S.body}>
                There are no right or wrong answers. A &ldquo;Partly&rdquo; or &ldquo;Not yet&rdquo;
                response does not mean the client&rsquo;s plan is off track &mdash; it simply identifies
                an area where questions, tradeoffs or possible next steps may deserve attention.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: 8 }}>
                <PillGhost onClick={() => handleDownload('checkup')}>Download the Client Checkup</PillGhost>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why protection conversations matter ───────────────────────────── */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}
            className="nsg-split"
          >
            <div>
              <Eyebrow>Why It Matters</Eyebrow>
              <h2 style={{ ...S.h2, marginBottom: 18 }}>
                Protection belongs in the{' '}
                <em style={S.accentBlue}>retirement conversation.</em>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={S.body}>
                  Clients often arrive with questions about returns and allocation. The Conversation Guide
                  helps you shift the discussion toward what they understand clearly, what they can rely on
                  and where additional planning may help — without rushing to a product.
                </p>
                <p style={S.body}>
                  The Checkup gives clients a simple, educational way to reflect on predictable income,
                  market uncertainty, interest rates, longevity and the role of different portions of their
                  savings.
                </p>
              </div>
            </div>
            <img
              src={CAMPAIGN_IMAGES.planning}
              alt="Retired couple reviewing financial documents together at home"
              style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 20, display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── Built for your next client meeting ────────────────────────────── */}
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}
            className="nsg-split nsg-split-reverse"
          >
            <img
              src={CAMPAIGN_IMAGES.advisor}
              alt="Financial professional guiding clients through a conversation"
              style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 20, display: 'block' }}
            />
            <div>
              <Eyebrow>How Advisors Use It</Eyebrow>
              <h2 style={{ ...S.h2, marginBottom: 18 }}>
                Built for the{' '}
                <em style={S.accentBlue}>meeting room.</em>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={S.body}>
                  Share the Checkup before or during a client meeting. Use one question at a time, listen for
                  what matters most and clarify the priority before comparing possible approaches.
                </p>
                <p style={S.body}>
                  The Guide includes recommended follow-ups, transition language and a four-step process —
                  Ask, Listen, Clarify, Connect — so the conversation stays centered on the client.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
                <PillMint onClick={() => handleDownload('guide')}>Download the Guide</PillMint>
                <PillGhost onClick={() => handleDownload('checkup')}>Share the Checkup</PillGhost>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ask. Listen. Clarify. Connect. + Five questions ──────────────── */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 48, maxWidth: 620 }}>
            <Eyebrow>Four-Step Process</Eyebrow>
            <h2 style={{ ...S.h2, marginBottom: 14 }}>
              Ask. Listen. Clarify. <em style={S.accentBlue}>Connect.</em>
            </h2>
            <p style={S.body}>
              Use a simple four-step process to keep the conversation centered on the client.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 64 }} className="lpl-pillars-grid">
            {[
              { Icon: MessageSquare, title: 'Ask', body: 'Use the Checkup question as written.' },
              { Icon: Ear,           title: 'Listen', body: 'Notice uncertainty, assumptions and competing priorities.' },
              { Icon: HelpCircle,    title: 'Clarify', body: 'Ask one follow-up question before discussing possible solutions.' },
              { Icon: Link2,         title: 'Connect', body: 'Reflect what you heard and ask permission to explore strategies that may address the client\u2019s concern.' },
            ].map((s) => (
              <div key={s.title} style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '24px 0', borderTop: '2px solid rgba(36,148,193,.2)' }}>
                <div style={S.iconTile}>
                  <s.Icon size={20} color="#2494C1" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 19, color: '#0D1F4E', letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 8px' }}>{s.title}</h3>
                  <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13.5, color: '#4A5568', lineHeight: 1.65, margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: 680, marginBottom: 44 }}>
            <Eyebrow>Five Questions to Explore</Eyebrow>
            <h2 style={{ ...S.h2, marginBottom: 12 }}>
              Five questions to <em style={S.accentBlue}>explore.</em>
            </h2>
            <p style={S.body}>
              Use each question to open a client conversation, then the follow-up to go a level deeper.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {QUESTIONS.map((q, i) => (
              <div
                key={q.title}
                style={{
                  display: 'flex', gap: 20, padding: '26px 0', alignItems: 'flex-start',
                  borderTop: i === 0 ? 'none' : '1px solid rgba(13,31,78,.08)',
                }}
              >
                <div
                  style={{
                    width: 40, height: 40, borderRadius: '50%', flexShrink: 0, marginTop: 2,
                    background: 'var(--ov-surface-tint)', border: '1px solid rgba(36,148,193,.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--ov-ff-display)', fontSize: 18, color: '#2494C1',
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 22, color: '#0D1F4E', letterSpacing: '-0.01em', margin: '0 0 8px' }}>
                    {q.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 17, fontStyle: 'italic', color: '#1A3070', lineHeight: 1.55, margin: '0 0 14px' }}>
                    &ldquo;{q.question}&rdquo;
                  </p>
                  <div style={{ background: 'rgba(112,186,191,0.14)', borderLeft: '3px solid #2494C1', borderRadius: 8, padding: '12px 16px', marginBottom: 12 }}>
                    <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.1px', textTransform: 'uppercase', color: '#2494C1', display: 'block', marginBottom: 4 }}>
                      Clarify with
                    </span>
                    <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#0D1F4E', lineHeight: 1.6, margin: 0 }}>
                      {q.clarify}
                    </p>
                  </div>
                  <p style={S.body}>{q.note}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ ...S.body, fontSize: 13, color: '#6B7280', marginTop: 24, maxWidth: '72ch' }}>
            The five questions and recommended follow-ups are drawn from Oceanview&rsquo;s Conversation
            Guide and client Checkup.
          </p>
        </div>
      </section>

      {/* ── Use one question ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}
            className="nsg-split"
          >
            <div>
              <Eyebrow>How to Use It</Eyebrow>
              <h2 style={{ ...S.h2, marginBottom: 16 }}>
                Use one question to earn a <em style={S.accentBlue}>better next conversation.</em>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={S.body}>
                  The client does not need to complete all five questions at once. Begin with the topic
                  most relevant to the client&rsquo;s current situation. Listen for what matters most,
                  clarify the priority and ask whether it would be helpful to compare possible approaches.
                </p>
              </div>

              <p style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.09em', textTransform: 'uppercase', color: '#2494C1', margin: '28px 0 12px' }}>
                Suggested transition
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ background: '#fff', border: '1px solid rgba(112,186,191,.25)', borderLeft: '3px solid #2494C1', borderRadius: 10, padding: '14px 18px' }}>
                  <p style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 16, fontStyle: 'italic', color: '#0D1F4E', lineHeight: 1.6, margin: 0 }}>
                    &ldquo;What I am hearing is that protecting <em style={{ color: '#2494C1' }}>[priority]</em> is especially important to you. Is that accurate?&rdquo;
                  </p>
                </div>
                <div style={{ background: '#fff', border: '1px solid rgba(112,186,191,.25)', borderLeft: '3px solid #2494C1', borderRadius: 10, padding: '14px 18px' }}>
                  <p style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 16, fontStyle: 'italic', color: '#0D1F4E', lineHeight: 1.6, margin: 0 }}>
                    &ldquo;Would it be helpful to compare a few strategies designed to address that concern?&rdquo;
                  </p>
                </div>
              </div>

              <p style={{ ...S.body, marginTop: 24, maxWidth: '68ch' }}>
                Before deciding whether anything fits, review the potential benefits, tradeoffs,
                liquidity, time horizon, guarantees and costs.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
                <PillMint onClick={() => handleDownload('guide')}>Download the Conversation Guide</PillMint>
                <PillGhost onClick={() => handleDownload('checkup')}>Share the Client Checkup</PillGhost>
              </div>
            </div>
            <img
              src={CAMPAIGN_IMAGES.transition}
              alt="Retired couple reviewing retirement planning together at home"
              style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 20, display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── Continue the conversation ─────────────────────────────────────── */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ maxWidth: 620, marginBottom: 44 }}>
            <Eyebrow light>Continue the Conversation</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 12 }}>
              Keep the momentum <em style={S.accent}>going.</em>
            </h2>
            <p style={S.bodyDark}>Go deeper with a short article &mdash; one for professionals, one to share with clients.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, alignItems: 'stretch' }} className="pwn-articles-grid">
            {/* For financial professionals */}
            <div style={S.darkCard}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={20} color="#70BABF" strokeWidth={1.75} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1px', textTransform: 'uppercase', color: '#70BABF' }}>For financial professionals</span>
                <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 21, color: '#F2FCFF', letterSpacing: '-0.01em', lineHeight: 1.25, margin: 0 }}>
                  Retirement Protection Starts with Better Questions
                </h3>
              </div>
              <p style={S.bodyDark}>
                Learn how to use the Conversation Guide and Checkup to uncover priorities, clarify
                tradeoffs and move toward a more meaningful retirement-planning discussion.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: 8 }}>
                <PillWhite onClick={() => { window.location.hash = 'blog-retirement-protection-agent' }}>
                  Read the Agent Article
                </PillWhite>
              </div>
            </div>

            {/* To share with clients */}
            <div style={S.whiteCard}>
              <div style={S.iconTile}>
                <Users size={20} color="#2494C1" strokeWidth={1.75} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1px', textTransform: 'uppercase', color: '#2494C1' }}>To share with clients</span>
                <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 21, color: '#0D1F4E', letterSpacing: '-0.01em', lineHeight: 1.25, margin: 0 }}>
                  Five Questions to Ask About Protecting Your Retirement Plan
                </h3>
              </div>
              <p style={S.body}>
                Help clients consider predictable income, market uncertainty, changing interest rates,
                longevity and the role of different portions of their savings.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: 8 }}>
                <PillGhost onClick={() => { window.location.hash = 'blog-retirement-protection-client' }}>
                  Read the Client Article
                </PillGhost>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <CTABanner
            eyebrow="Protection for What's Next"
            title="Start with one client."
            titleAccent="Start with one question."
            body="Download the Conversation Guide, share the Checkup and use the question most relevant to your next client conversation. Guide for you. Checkup for your clients."
            cta="Download the Toolkit"
            onClick={() => handleDownload('toolkit')}
          />
        </div>
      </section>

      {/* ── Compliance disclosure ─────────────────────────────────────────── */}
      <section style={{ background: '#F7F8FA', padding: '40px 0 56px' }}>
        <div className="ov-container">
          <div style={{ maxWidth: 860, display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'var(--ov-ff-sans)', fontSize: 12, lineHeight: 1.6, color: '#6B7280' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#4A5568', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 11 }}>
              Important disclosures
            </p>
            <p style={{ margin: 0 }}>
              For financial professional use only. This page and the Retirement Protection Conversation
              Guide are intended as general educational and conversation-planning resources and do not
              replace a complete fact-finding, suitability or best-interest review.
            </p>
            <p style={{ margin: 0 }}>
              The Retirement Protection Checkup is intended for general educational purposes only and
              does not constitute a recommendation to purchase or replace any financial product.
            </p>
            <p style={{ margin: 0 }}>
              Annuities are long-term insurance contracts and may not be appropriate for all clients.
              Product features, availability, surrender charges, possible market value adjustments,
              crediting terms, rider charges, income options and other limitations vary by contract.
              Guarantees are subject to the claims-paying ability of the issuing insurance company.
              Annuities are not bank deposits, not guaranteed by any bank and not insured by the FDIC,
              NCUA/NCUSIF or any other federal government agency. Annuities may only be offered by a
              licensed insurance agent.
            </p>
            <p style={{ margin: 0 }}>
              Oceanview Life and Annuity Company, 1331 17th Street, Suite 1050, Denver, CO 80202.
              In California, doing business as Oceanview Life and Annuity Insurance Company.
            </p>
          </div>
        </div>
      </section>






    </main>
  )
}

