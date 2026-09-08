// AlzheimersAwarenessPage.jsx — "Planning Ahead for Alzheimer's and Dementia" consumer guide landing
// Route: #alzheimers-awareness  (unlisted — consumer education destination, no main-nav link)
// Content source: Oceanview_Alzheimers_Dementia_Web_Copy_Only.docx (web copy only).
// Photography: free Unsplash images localized in public/assets/ova-*.jpg.
//   ova-hero.jpg  = unsplash.com/photos/Cc10IJDoj78 (photo-1554331292-735256644d5f) — "couple
//                   sitting on pathway".
//   ova-family.jpg = unsplash.com/photos/Ul4CxTdRG_A (photo-1758612898305-7c9e13ee21b1) —
//                   "grandfather and grandson taking a selfie on the couch".
//   ova-planning.jpg = (photo-1450101499163-c8848c66ca85) — reviewing/signing documents.
//   ova-finances.jpg = (photo-1576477987917-9d056d379228) — later-life financial planning.
// Built on the standard landing skeleton (mirrors National Senior Games): photo-card hero → navy
// intro → white/tint image-text splits → stat pillars → email capture → navy closing statement →
// CTABanner → grey disclosures. Educational resource; product references are examples, not advice.
import { useState } from 'react'
import { PillMint, PillGhost } from './Buttons.jsx'
import { Eyebrow, assetUrl } from './common.jsx'
import CTABanner from './CTABanner.jsx'
import HeroShaper from './HeroShaper.jsx'
import { Download, Check } from 'lucide-react'

const S = {
  h1: {
    fontFamily: 'var(--ov-ff-display)', fontWeight: 800, fontSize: 'clamp(28px, 5.5vw, 63px)',
    color: '#F2FCFF', lineHeight: 1.08, margin: 0,
  },
  h2: {
    fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)',
    color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0,
  },
  h2Light: {
    fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)',
    color: '#F2FCFF', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0,
  },
  accent:    { fontStyle: 'italic', color: '#70BABF' },
  accentBlue:{ fontStyle: 'italic', color: '#2494C1' },
  body:      { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: 0 },
  bodyDark:  { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: 'rgba(242,252,255,.68)', lineHeight: 1.7, margin: 0 },
}

// Stub PDF lives in public/assets/downloads/ — replace with the final printable guide when it ships.
const PDF_URL = assetUrl('assets/downloads/alzheimers-awareness-white-paper.pdf')

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
const handleDownload = () => window.open(PDF_URL, '_blank', 'noopener,noreferrer')

// Figures drawn verbatim from the source doc (Alzheimer's Association, 2026 Facts & Figures).
const STATS = [
  { value: '7+ million', label: 'Americans are living with Alzheimer\u2019s disease.' },
  { value: 'Nearly 13 million', label: 'Family members and friends provide unpaid care.' },
  { value: '$409 billion', label: 'Estimated U.S. cost of Alzheimer\u2019s and other dementias in 2026.' },
  { value: '19B+ hours', label: 'of unpaid care provided by family and friends \u2014 valued at more than $446 billion.' },
]

// Ten chapter topics from the guide's "In this guide" contents.
const GUIDE_TOPICS = [
  'Start planning early',
  'Build your team',
  'Legal & health care documents',
  'Care & costs',
  'Local care worksheet',
  'Organize finances',
  'Financial safeguards',
  'Retirement resources',
  'Beneficiaries & action plan',
  'Help & resources',
]

// The six questions the guide says a thoughtful plan can help answer (navy intro).
const PLAN_QUESTIONS = [
  'Who can help manage financial or health care decisions?',
  'How might care be provided \u2014 and how might it be paid for?',
  'Where can important financial, legal and insurance information be found?',
  'How can income, savings and insurance work together?',
  'What safeguards can help protect against mistakes, fraud or financial exploitation?',
  'How can loved ones provide support without having to guess what you would have wanted?',
]

// Standard image-text split layout shared by every image section on the landing.
const IMG = { width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 20, display: 'block' }
const SPLIT = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }


// ── Consumer email capture ────────────────────────────────────────────────────
const inputStyle = {
  fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#0D1F4E',
  border: '1.5px solid rgba(13,31,78,.15)', borderRadius: 10, padding: '12px 16px',
  outline: 'none', width: '100%', boxSizing: 'border-box', background: '#fff',
  transition: 'border-color .15s, box-shadow .15s',
}

function EmailSignup() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', consent: false })
  const [done, setDone] = useState(false)
  const [focused, setFocus] = useState(null)
  const set = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))
  const focus = (k) => ({
    onFocus: () => setFocus(k),
    onBlur: () => setFocus(null),
    style: {
      ...inputStyle,
      ...(focused === k ? { borderColor: '#2494C1', boxShadow: '0 0 0 3px rgba(36,148,193,.12)' } : {}),
    },
  })

  if (done) {
    return (
      <div style={{ textAlign: 'center', padding: '24px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(36,148,193,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Check size={24} color="#2494C1" strokeWidth={2.5} />
        </div>
        <p style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 22, color: '#0D1F4E', letterSpacing: '-0.01em', margin: 0 }}>
          You&rsquo;re on the list.
        </p>
        <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', margin: 0 }}>
          We&rsquo;ll be in touch with consumer-focused insights and company news.
        </p>
      </div>
    )
  }

  const label = { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: '#4A5568' }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setDone(true) }}
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
    >
      <p style={{ ...S.body, marginBottom: 4 }}>
        Join our email list for occasional, consumer-focused updates and educational content. This
        list is not intended for agents.
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: '1 1 160px' }}>
          <label htmlFor="alz-name" style={label}>Name</label>
          <input id="alz-name" required type="text" autoComplete="name" value={form.name} onChange={set('name')} {...focus('name')} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: '1 1 200px' }}>
          <label htmlFor="alz-email" style={label}>Email</label>
          <input id="alz-email" required type="email" autoComplete="email" value={form.email} onChange={set('email')} {...focus('email')} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxWidth: 320 }}>
        <label htmlFor="alz-phone" style={label}>Phone <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
        <input id="alz-phone" type="tel" autoComplete="tel" value={form.phone} onChange={set('phone')} {...focus('phone')} />
      </div>
      <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer' }}>
        <input required type="checkbox" checked={form.consent} onChange={set('consent')} style={{ marginTop: 3, flexShrink: 0, accentColor: '#2494C1' }} />
        <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#4A5568', lineHeight: 1.55 }}>
          By submitting this form, you agree to receive communications from Oceanview Life and
          Annuity Company. You may unsubscribe at any time.
        </span>
      </label>
      <PillMint type="submit" style={{ alignSelf: 'flex-start' }}>Sign Up</PillMint>
    </form>
  )
}

function CheckItem({ children, light }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
      <Check size={16} color={light ? '#70BABF' : '#2494C1'} strokeWidth={2.4} style={{ flexShrink: 0, marginTop: 3 }} />
      <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, lineHeight: 1.6, color: light ? 'rgba(242,252,255,.72)' : '#4A5568' }}>{children}</span>
    </div>
  )
}


export default function AlzheimersAwarenessPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <div className="ov-hero-wrapper" style={{ marginBottom: 40 }}>
        <section style={{ paddingTop: 20, paddingBottom: 0 }}>
          <div className="ov-hero-card pwn-hero" style={{ background: 'var(--ov-navy-1000)' }}>
            <div
              className="pwn-hero-bg"
              style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${assetUrl('assets/ova-hero.jpg')})`,
                backgroundSize: 'cover', backgroundPosition: '68% 42%', zIndex: 0,
              }}
            />
            <div
              className="ov-hero-scrim"
              style={{
                position: 'absolute', inset: 0, zIndex: 1,
                background: 'linear-gradient(85deg, rgba(0,31,84,.86) 0%, rgba(0,31,84,.42) 60%, transparent 100%)',
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
              <Eyebrow light>Alzheimer&rsquo;s &amp; Dementia &middot; Consumer Guide</Eyebrow>
              <h1 className="ov-hero-title" style={S.h1}>
                Planning Ahead for <em style={S.accent}>Alzheimer&rsquo;s and Dementia.</em>
              </h1>
              <div className="pwn-hero-body" style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: '60ch' }}>
                <p style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(20px,2.2vw,28px)', color: '#F2FCFF', lineHeight: 1.25, margin: 0 }}>
                  A Practical Guide to Financial Readiness.
                </p>
                <p style={{ ...S.bodyDark, fontSize: 'clamp(14px,1.4vw,17px)', maxWidth: '56ch' }}>
                  Preserve choice. Clarify your wishes. Make the road ahead easier for the people you love.
                </p>
              </div>
              <div className="pwn-hero-ctas" style={{ display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'flex-start' }}>
                <div className="pwn-hero-cta" style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
                  <PillMint hero onClick={handleDownload}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      <Download size={17} /> Download printable guide (PDF)
                    </span>
                  </PillMint>
                  <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 11, color: 'rgba(242,252,255,.6)' }}>Updated September 2026 &middot; Print or share</span>
                </div>
                <div className="pwn-hero-cta" style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
                  <PillGhost light hero onClick={() => scrollToId('inside')}>See what&rsquo;s inside</PillGhost>
                  <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 11, color: 'rgba(242,252,255,.6)' }}>Preview the ten chapters below</span>
                </div>
              </div>
              <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: 'rgba(242,252,255,.6)', margin: 0, maxWidth: '62ch', lineHeight: 1.5 }}>
                This guide is intended for educational purposes only and is not a recommendation to
                purchase any financial product, insurance policy, legal service, or health care service.
              </p>
            </div>
          </div>
        </section>
      </div>


      {/* ── Section 1: Planning can provide clarity (navy intro) ─────────── */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ maxWidth: 760 }}>
            <Eyebrow light>Planning Ahead for Alzheimer&rsquo;s &amp; Dementia</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 20 }}>
              Planning can provide <em style={S.accent}>clarity in an uncertain time.</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={S.bodyDark}>
                Thinking about Alzheimer&rsquo;s disease or another form of dementia can be difficult. But
                planning for the possibility of cognitive change does not mean expecting the worst. It
                means taking practical steps today to preserve your choices, protect your financial
                well-being and make future responsibilities clearer for the people you trust.
              </p>
              <p style={S.bodyDark}>
                This guide is for individuals, families and caregivers who want to prepare before a
                diagnosis — or take thoughtful action following a diagnosis or signs of cognitive change.
                A good plan can help answer important questions.
              </p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 44px', marginTop: 44 }} className="lpl-pillars-grid">
            {PLAN_QUESTIONS.map((q) => <CheckItem key={q} light>{q}</CheckItem>)}
          </div>
        </div>
      </section>


      {/* ── Section 2: Why planning matters (white split) ────────────────── */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={SPLIT} className="nsg-split nsg-split-reverse">
            {/* Image on the left of the split — approved Unsplash photo, see header note. */}
            <img src={assetUrl('assets/ova-family.jpg')} alt="A family sharing a relaxed, warm moment together at home" style={IMG} />
            <div>
              <Eyebrow>Why Planning Matters</Eyebrow>
              <h2 style={{ ...S.h2, marginBottom: 18 }}>
                A diagnosis that reaches <em style={S.accentBlue}>beyond health.</em>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
                <p style={S.body}>
                  Alzheimer&rsquo;s and other dementias can change memory, judgment, communication and the
                  ability to complete daily activities — reshaping family life and finances alike. The type
                  and amount of help a person needs may change over time, and many families use more than
                  one form of care as circumstances evolve.
                </p>
                <p style={S.body}>
                  Facing a diagnosis can feel overwhelming. But proactive planning does not mean expecting
                  the worst. Taking practical steps today can help preserve choice, protect financial
                  well-being and make the road ahead clearer for the people you love.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <PillMint onClick={handleDownload}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <Download size={16} /> Download the guide
                  </span>
                </PillMint>
                <PillGhost onClick={() => scrollToId('inside')}>See what&rsquo;s inside</PillGhost>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why planning matters — by the numbers (tint stats) ─── */}
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ maxWidth: 640, marginBottom: 44 }}>
            <Eyebrow>The Scope of the Challenge</Eyebrow>
            <h2 style={{ ...S.h2, marginBottom: 12 }}>
              A challenge that touches <em style={S.accentBlue}>millions of families.</em>
            </h2>
            <p style={S.body}>
              Behind the numbers are individuals and families making difficult decisions about care, work,
              housing, money and the future.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }} className="lpl-pillars-grid">
            {STATS.map((s) => (
              <div key={s.value} style={{ background: '#fff', border: '1px solid rgba(13,31,78,.07)', borderRadius: 14, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 14, boxShadow: '0 2px 8px rgba(13,31,78,.04)', height: '100%', boxSizing: 'border-box' }}>
                <div style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(30px,3.4vw,44px)', lineHeight: 1.05, color: '#0D1F4E', letterSpacing: '-0.02em' }}>
                  {s.value}
                </div>
                <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.55, margin: 0 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#6B7280', margin: '20px 0 0' }}>
            Source: Alzheimer&rsquo;s Association. [1]
          </p>
        </div>
      </section>


      {/* ── Section 4: What's inside (white split) ───────────────────────── */}
      <section id="inside" style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={SPLIT} className="nsg-split">
            <div>
              <Eyebrow>A Practical Guide to Financial Readiness</Eyebrow>
              <h2 style={{ ...S.h2, marginBottom: 16 }}>
                What&rsquo;s <em style={S.accentBlue}>inside.</em>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
                <p style={S.body}>
                  Ten practical chapters walk through how to prepare for the possibility of cognitive
                  change — from choosing who will help make decisions, to putting the right legal and
                  health care documents in place, to organizing and protecting the financial household.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 28px', marginBottom: 32 }} className="lpl-pillars-grid">
                {GUIDE_TOPICS.map((t) => <CheckItem key={t}>{t}</CheckItem>)}
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <PillMint onClick={handleDownload}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <Download size={16} /> Download printable guide (PDF)
                  </span>
                </PillMint>
                <PillGhost onClick={() => { window.location.hash = 'contact' }}>Talk with a Licensed Professional</PillGhost>
              </div>
            </div>
            <img src={assetUrl('assets/ova-planning.jpg')} alt="A hand writing and signing planning documents" style={IMG} />
          </div>
        </div>
      </section>

      {/* ── Section 5: How Oceanview may support the broader plan (tint split) ── */}
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <div style={SPLIT} className="nsg-split nsg-split-reverse">
            <img src={assetUrl('assets/ova-finances.jpg')} alt="An older couple reviewing their finances together at a table" style={IMG} />
            <div>
              <Eyebrow>About Oceanview</Eyebrow>
              <h2 style={{ ...S.h2, marginBottom: 18 }}>
                Oceanview may support <em style={S.accentBlue}>the broader plan.</em>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={S.body}>
                  Oceanview Life and Annuity Company offers fixed and fixed indexed annuity products that
                  may be considered as one component of a broader retirement-income strategy — depending on
                  the contract and options selected, possibly helping protect a portion of retirement
                  savings, provide tax-deferred accumulation or create a source of retirement income. [9]
                </p>
                <p style={S.body}>
                  An annuity should always be considered within the individual&rsquo;s full financial
                  picture — including income, liquidity, care needs, insurance coverage, tax circumstances
                  and legacy objectives. A licensed financial professional can help determine whether an
                  annuity is appropriate.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '24px 0 28px', paddingTop: 24, borderTop: '1px solid rgba(13,31,78,.1)' }}>
                <p style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#0D1F4E', margin: 0, letterSpacing: '.02em' }}>
                  Depending on the contract, an annuity may help with
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
                  {['Retirement accumulation', 'A source of predictable income', 'Certain guarantees that may help protect value', 'Longevity planning'].map((t) => <CheckItem key={t}>{t}</CheckItem>)}
                </div>
                <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#6B7280', margin: 0 }}>
                  Product references in this guide are examples, not recommendations.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <PillMint onClick={() => { window.location.hash = 'fia-overview' }}>Explore Oceanview Products</PillMint>
                <PillGhost onClick={() => { window.location.hash = 'contact' }}>Talk with a Licensed Professional</PillGhost>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── Section 6: Email capture (white split) ───────────────────────── */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ ...SPLIT, alignItems: 'start' }} className="nsg-split">
            <div>
              <Eyebrow>Stay Informed</Eyebrow>
              <h2 style={{ ...S.h2, marginBottom: 14 }}>
                Planning resources, <em style={S.accentBlue}>when you need them.</em>
              </h2>
              <p style={S.body}>
                Get consumer-focused insights and educational resources to help you and your family plan
                with confidence. This list is not intended for agents.
              </p>
            </div>
            <div style={{ background: 'var(--ov-surface-tint)', border: '1px solid rgba(13,31,78,.06)', borderRadius: 16, padding: '28px 24px' }}>
              <EmailSignup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Closing brand statement (navy) ────────────────────── */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <Eyebrow light style={{ justifyContent: 'center' }}>Planning Ahead</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 18 }}>
              Planning ahead is <em style={S.accent}>an act of care.</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
              <p style={S.bodyDark}>
                No plan can remove all the uncertainty associated with Alzheimer&rsquo;s or another dementia.
                But a thoughtful plan can preserve choices, reduce avoidable financial risks and give loved
                ones a clearer understanding of what to do.
              </p>
              <p style={S.bodyDark}>
                Start with a conversation. Choose the people you trust. Put your wishes in writing. Organize
                the information others may eventually need — then work with qualified professionals to create
                a plan that reflects your circumstances.
              </p>
            </div>
            <PillMint onClick={handleDownload}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Download size={16} /> Download the printable guide
              </span>
            </PillMint>
          </div>
        </div>
      </section>

      {/* ── CTA banner ───────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <CTABanner
            eyebrow="Planning Ahead for Alzheimer&rsquo;s and Dementia"
            title="The sooner you start,"
            titleAccent="the more choices you keep."
            body="Download the complete guide to print the worksheets and work through the 30-day action plan — on your own timeline."
            cta="Download printable guide (PDF)"
            onClick={handleDownload}
          />
        </div>
      </section>

      {/* ── Compliance disclosure ────────────────────────────────────────── */}
      <section style={{ background: '#F7F8FA', padding: '40px 0 56px' }}>
        <div className="ov-container">
          <div style={{ maxWidth: 860, display: 'flex', flexDirection: 'column', gap: 12, fontFamily: 'var(--ov-ff-sans)', fontSize: 12, lineHeight: 1.6, color: '#6B7280' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#4A5568', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 11 }}>
              Important information
            </p>
            <p style={{ margin: 0 }}>
              This guide discusses planning considerations related to Alzheimer&rsquo;s disease and other
              dementias. References to financial products are intended solely as examples of financial
              resources that may be available in certain circumstances and should not be interpreted as
              recommendations. Product suitability depends on individual facts and circumstances.
            </p>
            <p style={{ margin: 0 }}>
              This material is a general description intended for educational purposes only. It is not
              intended to provide, and should not be interpreted as, medical, legal, tax, investment,
              estate-planning or long-term care advice. Individual circumstances and state laws vary.
              Consult appropriately qualified professionals before taking action.
            </p>
            <p style={{ margin: 0 }}>
              The Harbourview MYGA (Generic Policy Form ICC19 OLA SPDA) and Harbourview FIA (Generic
              Policy Form ICC19 OLA FIA) are single premium deferred annuities. May not be available in all
              states. Oceanview annuities are products of the insurance industry and are not guaranteed by
              any bank nor insured by the FDIC or NCUA/NCUSIF or any other federal governmental agency. May
              lose value. No bank/credit union guarantee. Not a deposit. May only be offered by a licensed
              insurance agent. Guarantees are subject to the claim paying ability of the issuing insurance
              company. Annuities issued by Oceanview Life and Annuity Company, 1331 17th Street, Suite
              1050, Denver, CO 80202. In California, doing business as Oceanview Life and Annuity Insurance
              Company. www.oceanviewlife.com.
            </p>
            <p style={{ margin: 0 }}>
              Annuities are generally designed as long-term retirement solutions and have certain
              limitations. They are generally not intended to replace emergency funds, serve as income for
              day-to-day expenses, or support short-term savings goals. Please refer to the contract for
              complete details, including features, limitations, and charges. Withdrawals in excess of any
              Free Partial Withdrawal amounts are subject to a surrender charge and Market Value Adjustment
              (MVA). The IRS may impose a penalty for withdrawals prior to age 59 1/2. Withdrawals may also
              be subject to ordinary income tax. Contracts purchased in an IRA or other tax-qualified plan
              provide no additional tax-deferral benefit.
            </p>
            <p style={{ margin: 0, fontWeight: 600, color: '#4A5568', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 11, paddingTop: 8 }}>
              Sources
            </p>
            {[
              'Alzheimer\u2019s Association. 2026 Alzheimer\u2019s Disease Facts and Figures. alz.org',
              'Alzheimer\u2019s Association. Planning Ahead for Legal Matters; Legal Documents. alz.org',
              'National Institute on Aging. Legal and Financial Planning; Advance Care Planning. nia.nih.gov',
              'Medicare. Long-Term Care Coverage. medicare.gov',
              'Administration for Community Living. Buying Long-Term Care Insurance. acl.gov',
              'National Institute on Aging. Managing Money Problems for People With Dementia. nia.nih.gov',
              'Consumer Financial Protection Bureau. Managing Someone Else\u2019s Money; Protecting Older Adults from Fraud and Financial Exploitation. consumerfinance.gov',
              'National Association of Insurance Commissioners. Buyer\u2019s Guide to Fixed Deferred Annuities. content.naic.org',
              'Oceanview Life and Annuity Company. Company and product information. oceanviewlife.com',
              'National Institute on Aging. Getting Your Affairs in Order Checklist. nia.nih.gov',
            ].map((s, i) => (
              <p key={i} style={{ margin: 0 }}>
                {i + 1}. {s}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

