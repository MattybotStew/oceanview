import { useState } from 'react'
import { ShieldCheck, Clock, TrendingUp, Check } from 'lucide-react'
import { PillMint, PillGhost } from './Buttons.jsx'
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
  iconTile:         { width: 48, height: 48, borderRadius: 12, background: 'rgba(36,148,193,.10)', border: '1px solid rgba(36,148,193,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
}

function Eyebrow({ light, children }) {
  return (
    <div style={S.eyebrowRow}>
      <div style={light ? S.eyebrowLineLight : S.eyebrowLine} />
      <span style={light ? S.eyebrowLight : S.eyebrow}>{children}</span>
    </div>
  )
}

function FeatureList({ items, dark }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 0', borderTop: i > 0 ? `1px solid ${dark ? 'rgba(255,255,255,.08)' : 'rgba(36,148,193,.12)'}` : 'none' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
            <circle cx="7" cy="7" r="6.5" stroke={dark ? '#70BABF' : '#2494C1'} strokeOpacity={dark ? '.5' : '.3'} />
            <path d="M4.5 7L6.5 9L9.5 5" stroke={dark ? '#70BABF' : '#2494C1'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 15, lineHeight: 1.6, color: dark ? 'rgba(242,252,255,.72)' : '#4A5568' }}>{item}</span>
        </div>
      ))}
    </div>
  )
}

// ── Concern cards ─────────────────────────────────────────────────────────────
const CONCERNS = [
  {
    Icon: Clock,
    heading: 'Will my savings last?',
    body: 'The risk of outliving your money is real — and growing. Americans are living longer, and traditional savings vehicles weren\'t designed for 20- or 30-year retirements. An annuity can provide income that lasts as long as you do.',
  },
  {
    Icon: TrendingUp,
    heading: 'What if markets drop?',
    body: 'A market downturn early in retirement can permanently reduce your income. Fixed and fixed indexed annuities provide guaranteed growth or a zero-percent floor on losses — so your retirement savings don\'t go backwards.',
  },
  {
    Icon: ShieldCheck,
    heading: 'Is my money safe?',
    body: 'Annuity contracts are backed by the financial strength of the issuing insurance company. Oceanview holds an A (Excellent) rating from A.M. Best, reflecting our balance-sheet strength and long history of meeting obligations to policyholders.',
  },
]

// ── Email signup ──────────────────────────────────────────────────────────────
const inputStyle = {
  fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#0D1F4E',
  border: '1.5px solid rgba(13,31,78,.15)', borderRadius: 10,
  padding: '12px 16px', outline: 'none', width: '100%',
  boxSizing: 'border-box', background: '#fff',
  transition: 'border-color .15s, box-shadow .15s',
}

function EmailSignup() {
  const [form, setForm]     = useState({ firstName: '', lastName: '', email: '', consent: false })
  const [done, setDone]     = useState(false)
  const [focused, setFocus] = useState(null)
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))
  const focus = k => ({ onFocus: () => setFocus(k), onBlur: () => setFocus(null), style: { ...inputStyle, ...(focused === k ? { borderColor: '#2494C1', boxShadow: '0 0 0 3px rgba(36,148,193,.12)' } : {}) } })

  if (done) return (
    <div style={{ textAlign: 'center', padding: '32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(36,148,193,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Check size={24} color="#2494C1" strokeWidth={2.5} />
      </div>
      <p style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 22, color: '#0D1F4E', letterSpacing: '-0.01em', margin: 0 }}>You're on the list.</p>
      <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', margin: 0 }}>We'll be in touch with retirement planning insights and rate updates.</p>
    </div>
  )

  return (
    <form onSubmit={e => { e.preventDefault(); setDone(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        {[['firstName', 'First Name'], ['lastName', 'Last Name']].map(([k, label]) => (
          <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: '1 1 140px' }}>
            <label style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: '#4A5568' }}>{label}</label>
            <input required type="text" value={form[k]} onChange={set(k)} {...focus(k)} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: '#4A5568' }}>Email</label>
        <input required type="email" value={form.email} onChange={set('email')} {...focus('email')} />
      </div>
      <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer' }}>
        <input required type="checkbox" checked={form.consent} onChange={set('consent')} style={{ marginTop: 3, flexShrink: 0, accentColor: '#2494C1' }} />
        <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#4A5568', lineHeight: 1.55 }}>
          I agree to receive communications from Oceanview Life and Annuity. I understand I can unsubscribe at any time.
        </span>
      </label>
      <PillMint type="submit" style={{ alignSelf: 'flex-start' }}>Join the List</PillMint>
    </form>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function IndividualsPage() {
  return (
    <main>

      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>Personal Planning</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '20ch' }}>
            Retirement savings you can count on.
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto 36px', maxWidth: '52ch' }}>
            Oceanview annuities offer guaranteed growth, principal protection, and tax-deferred accumulation — simple, dependable tools for securing your retirement income.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <PillMint hero onClick={() => { window.location.hash = 'products' }}>Explore Products</PillMint>
            <PillGhost onClick={() => { window.location.hash = 'contact' }}>Talk to Us</PillGhost>
          </div>
        </div>
      </section>

      {/* Common concerns */}
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 48, maxWidth: 560 }}>
            <Eyebrow>Common Questions</Eyebrow>
            <h2 style={{ ...S.h2, marginBottom: 14 }}>
              Real concerns. <em style={S.accentBlue}>Real answers.</em>
            </h2>
            <p style={S.body}>
              Most people approaching retirement share the same three worries. Oceanview annuities are designed to address each one directly.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="ov-concern-grid">
            {CONCERNS.map((c, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid rgba(13,31,78,.07)', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={S.iconTile}>
                  <c.Icon size={22} color="#2494C1" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 20, color: '#0D1F4E', letterSpacing: '-0.015em', lineHeight: 1.2, margin: '0 0 12px' }}>{c.heading}</h3>
                  <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14.5, color: '#4A5568', lineHeight: 1.7, margin: 0 }}>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MYGA */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 72, alignItems: 'center', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <img src="assets/older-couple-1.png" alt="Couple reviewing retirement plans" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
            </div>
            <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <Eyebrow light>Multi-Year Guaranteed Annuity</Eyebrow>
                <h2 style={{ ...S.h2Light, marginBottom: 0 }}>
                  A rate you can <em style={S.accent}>lock in and rely on.</em>
                </h2>
              </div>
              <p style={S.bodyDark}>
                A MYGA works like a CD — but with tax deferral and typically higher rates. You deposit a lump sum, lock in a guaranteed interest rate for a set term (2–10 years), and watch it grow without market exposure.
              </p>
              <FeatureList dark items={[
                'Guaranteed interest rate locked for the full contract term',
                'No market exposure — your balance only grows',
                'Tax-deferred accumulation until you withdraw',
                '10% annual free withdrawal beginning year 2',
                'Death benefit passes directly to named beneficiaries',
              ]} />
              <PillMint onClick={() => { window.location.hash = 'harbourview-myga' }} style={{ alignSelf: 'flex-start' }}>
                Explore MYGA Options
              </PillMint>
            </div>
          </div>
        </div>
      </section>

      {/* FIA */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 72, alignItems: 'center', flexWrap: 'wrap' }} className="ov-split-row prd-intro-img-right">
            <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <Eyebrow>Fixed Indexed Annuity</Eyebrow>
                <h2 style={{ ...S.h2, marginBottom: 0 }}>
                  Growth potential. <em style={S.accentBlue}>Zero downside.</em>
                </h2>
              </div>
              <p style={S.body}>
                A Fixed Indexed Annuity links your interest credits to the performance of a market index — like the S&P 500 — but with a guarantee that you can never lose principal due to market losses. When the index goes up, you participate. When it falls, your balance stays put.
              </p>
              <FeatureList items={[
                'Zero-floor protection — no principal loss from market downturns',
                'Interest credits tied to S&P 500, Nasdaq-100, or Russell 2000',
                'Tax-deferred growth with no annual tax bill on earnings',
                'Waivers for nursing home confinement and terminal illness',
                'Multiple crediting strategies to match your risk comfort',
              ]} />
              <PillMint onClick={() => { window.location.hash = 'harbourview-fia' }} style={{ alignSelf: 'flex-start' }}>
                Explore FIA Options
              </PillMint>
            </div>
            <div style={{ flex: '1 1 280px', minWidth: 0 }}>
              <img src="assets/family.png" alt="Family planning for the future" style={{ width: '100%', borderRadius: 20, display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Already a customer */}
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 40, maxWidth: 560 }}>
            <Eyebrow>Existing Policyholders</Eyebrow>
            <h2 style={{ ...S.h2, marginBottom: 14 }}>Already an Oceanview customer?</h2>
            <p style={S.body}>Access your account, download forms, or reach our service team directly.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="ov-concern-grid">
            {[
              { label: 'Client Portal', desc: 'View your account value, transaction history, and policy documents online.', cta: 'Access Portal', href: null },
              { label: 'Service Forms', desc: 'Download forms for beneficiary changes, withdrawals, transfers, and more.', cta: 'View Forms', hash: 'downloads' },
              { label: 'Contact Us', desc: 'Reach our service team by phone or email for questions about your policy.', cta: 'Get in Touch', hash: 'contact' },
            ].map(item => (
              <div key={item.label} style={{ background: '#fff', border: '1px solid rgba(13,31,78,.07)', borderRadius: 14, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 700, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: '#0D1F4E' }}>{item.label}</div>
                <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.65, margin: 0, flex: 1 }}>{item.desc}</p>
                <button
                  onClick={() => { if (item.hash) window.location.hash = item.hash }}
                  style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#2494C1', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', display: 'inline-flex', alignItems: 'center', gap: 5 }}
                >
                  {item.cta} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email signup */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start', flexWrap: 'wrap' }} className="ov-split-row">
            <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <Eyebrow light>Stay Informed</Eyebrow>
                <h2 style={{ ...S.h2Light, marginBottom: 0 }}>
                  Retirement insights <em style={S.accent}>in your inbox.</em>
                </h2>
              </div>
              <p style={S.bodyDark}>
                Rate updates, retirement planning guides, and consumer insights — delivered directly to you. No spam, unsubscribe anytime.
              </p>
            </div>
            <div style={{ flex: '1 1 320px', minWidth: 0 }}>
              <EmailSignup />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Get Started"
            title="Ready to secure your retirement"
            titleAccent="with guaranteed income?"
            body="Speak with a licensed financial professional about which Oceanview annuity fits your retirement goals, timeline, and risk comfort."
            cta="Contact Us"
            onClick={() => { window.location.hash = 'contact'; }}
          />
        </div>
      </section>

    </main>
  )
}
