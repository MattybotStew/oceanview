import { useState } from 'react'
import { PillMint, PillGhost } from './Buttons.jsx'
import { Eyebrow } from './common.jsx'
import CTABanner from './CTABanner.jsx'
import HeroShaper from './HeroShaper.jsx'
import { Check } from 'lucide-react'

const S = {
  h1: {
    fontFamily: 'var(--ov-ff-display)',
    fontWeight: 400,
    fontSize: 'clamp(38px,5.5vw,72px)',
    color: '#F2FCFF',
    letterSpacing: '-0.03em',
    lineHeight: 1.03,
    margin: 0,
  },
  h2: {
    fontFamily: 'var(--ov-ff-display)',
    fontWeight: 400,
    fontSize: 'clamp(26px, 3vw, 40px)',
    color: '#0D1F4E',
    letterSpacing: '-0.025em',
    lineHeight: 1.12,
    margin: 0,
  },
  h2Light: {
    fontFamily: 'var(--ov-ff-display)',
    fontWeight: 400,
    fontSize: 'clamp(26px, 3vw, 40px)',
    color: '#F2FCFF',
    letterSpacing: '-0.025em',
    lineHeight: 1.12,
    margin: 0,
  },
  accent: { fontStyle: 'italic', color: '#70BABF' },
  accentBlue: { fontStyle: 'italic', color: '#2494C1' },
  body: {
    fontFamily: 'var(--ov-ff-sans)',
    fontSize: 15,
    color: '#4A5568',
    lineHeight: 1.7,
    margin: 0,
  },
  bodyDark: {
    fontFamily: 'var(--ov-ff-sans)',
    fontSize: 15,
    color: 'rgba(242,252,255,.65)',
    lineHeight: 1.7,
    margin: 0,
  },
}

const inputStyle = {
  fontFamily: 'var(--ov-ff-sans)',
  fontSize: 15,
  color: '#0D1F4E',
  border: '1.5px solid rgba(13,31,78,.15)',
  borderRadius: 10,
  padding: '12px 16px',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  background: '#fff',
  transition: 'border-color .15s, box-shadow .15s',
}

function EmailSignup() {
  const [form, setForm] = useState({ name: '', email: '', consent: false })
  const [done, setDone] = useState(false)
  const [focused, setFocus] = useState(null)
  const set = (k) => (e) =>
    setForm((f) => ({
      ...f,
      [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }))
  const focus = (k) => ({
    onFocus: () => setFocus(k),
    onBlur: () => setFocus(null),
    style: {
      ...inputStyle,
      ...(focused === k
        ? { borderColor: '#2494C1', boxShadow: '0 0 0 3px rgba(36,148,193,.12)' }
        : {}),
    },
  })

  if (done) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '24px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            background: 'rgba(36,148,193,.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Check size={24} color="#2494C1" strokeWidth={2.5} />
        </div>
        <p
          style={{
            fontFamily: 'var(--ov-ff-display)',
            fontSize: 22,
            color: '#0D1F4E',
            letterSpacing: '-0.01em',
            margin: 0,
          }}
        >
          You're on the list.
        </p>
        <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', margin: 0 }}>
          We'll be in touch with retirement insights and company news.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setDone(true)
      }}
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
    >
      <p style={{ ...S.body, marginBottom: 4 }}>
        Join our email list for occasional updates and educational content.
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }} className="nsg-email-row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: '1 1 160px' }}>
          <label
            htmlFor="nsg-name"
            style={{
              fontFamily: 'var(--ov-ff-sans)',
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              color: '#4A5568',
            }}
          >
            Name
          </label>
          <input
            id="nsg-name"
            required
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={set('name')}
            {...focus('name')}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: '1 1 200px' }}>
          <label
            htmlFor="nsg-email"
            style={{
              fontFamily: 'var(--ov-ff-sans)',
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '.08em',
              textTransform: 'uppercase',
              color: '#4A5568',
            }}
          >
            Email
          </label>
          <input
            id="nsg-email"
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={set('email')}
            {...focus('email')}
          />
        </div>
      </div>
      <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer' }}>
        <input
          required
          type="checkbox"
          checked={form.consent}
          onChange={set('consent')}
          style={{ marginTop: 3, flexShrink: 0, accentColor: '#2494C1' }}
        />
        <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#4A5568', lineHeight: 1.55 }}>
          By submitting this form, you agree to receive communications from Oceanview Life and
          Annuity Company. You may unsubscribe at any time.
        </span>
      </label>
      <PillMint type="submit" style={{ alignSelf: 'flex-start' }}>
        Sign Up
      </PillMint>
    </form>
  )
}

export default function NationalSeniorGamesPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="ov-hero-wrapper" style={{ marginBottom: 40 }}>
        <section style={{ paddingTop: 20, paddingBottom: 0 }}>
          <div className="ov-hero-card" style={{ background: 'var(--ov-navy-1000)' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url(assets/hero-beach-couple.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0,
              }}
            />
            <div
              className="ov-hero-scrim"
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(85deg, rgba(0,31,84,.82) 0%, rgba(0,31,84,.4) 60%, transparent 100%)',
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url(assets/Noise.png)',
                backgroundRepeat: 'repeat',
                backgroundSize: '200px',
                opacity: 0.6,
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
            <HeroShaper />
            <div className="ov-hero-content" style={{ zIndex: 3 }}>
              {/* NSGA logo / co-brand lockup goes here once usage rights and the asset are
                  confirmed with the client — sponsorship pages normally carry the partner mark. */}
              <Eyebrow light>National Senior Games Association</Eyebrow>
              <h1 className="ov-hero-title" style={S.h1}>
                Celebrating the{' '}
                <em style={S.accent}>Long Game</em>
              </h1>
              <p style={{ ...S.bodyDark, maxWidth: '48ch', fontSize: 'clamp(14px,1.4vw,17px)' }}>
                Oceanview Life and Annuity Company is proud to sponsor the National Senior Games
                Association and support a community built on preparation, perseverance, healthy
                living and the joy of staying active.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <PillMint hero onClick={() => { window.location.hash = 'individuals' }}>
                  Explore Retirement Resources
                </PillMint>
                <PillGhost
                  light
                  hero
                  onClick={() => { window.location.hash = 'about' }}
                >
                  Learn About Oceanview
                </PillGhost>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Section 1: Why support (navy) ────────────────────────────────── */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 56, maxWidth: 720 }}>
            <Eyebrow light>National Senior Games</Eyebrow>
            {/* Heading is the opening sentence of the Web Copy V2 hero body copy, promoted to a
                display heading (the sentence was removed from the paragraph below to avoid reading
                twice). Confirm treatment with client/compliance before launch. */}
            <h2 style={{ ...S.h2Light, marginBottom: 14 }}>
              Every chapter can be full of{' '}
              <em style={S.accent}>purpose, progress and possibility.</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
                From first-time competitors to lifelong athletes, participants across the country
                show what it means to keep moving, keep challenging yourself and keep showing up for
                the goals that matter.
              </p>
              <p style={{ ...S.bodyDark, maxWidth: '58ch' }}>
                At Oceanview, we believe the same long-game mindset applies to retirement. Planning
                ahead, staying focused and making thoughtful decisions can help create greater
                confidence for the road ahead.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              alignItems: 'center',
            }}
            className="nsg-split"
          >
            <div>
              <Eyebrow light>Why We Sponsor</Eyebrow>
              <h2 style={{ ...S.h2Light, marginBottom: 18 }}>
                Proud to Support Active Aging, Community and{' '}
                <em style={S.accent}>Competition</em>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={S.bodyDark}>
                  The National Senior Games Association brings together athletes, families,
                  volunteers and supporters who believe that age is not a finish line. Through local,
                  state and national competitions, the Senior Games community celebrates fitness,
                  friendship, achievement and the power of pursuing new goals at every stage of life.
                </p>
                <p style={S.bodyDark}>
                  Oceanview is honored to be part of that spirit. We are inspired by the athletes who
                  train with purpose, compete with heart and remind us that the next chapter can be
                  one of the most rewarding.
                </p>
              </div>
            </div>
            <img
              src="assets/couple-walking.png"
              alt="Active adults enjoying an outdoor walk"
              style={{
                width: '100%',
                aspectRatio: '4/3',
                objectFit: 'cover',
                borderRadius: 20,
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Section 2: Long game ─────────────────────────────────────────── */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              alignItems: 'center',
            }}
            className="nsg-split nsg-split-reverse"
          >
            <img
              src="assets/family.png"
              alt="Family celebrating together"
              style={{
                width: '100%',
                aspectRatio: '4/3',
                objectFit: 'cover',
                borderRadius: 20,
                display: 'block',
              }}
            />
            <div>
              <Eyebrow>Retirement Planning</Eyebrow>
              <h2 style={{ ...S.h2, marginBottom: 18 }}>
                The Long Game{' '}
                <em style={S.accentBlue}>Matters</em>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={S.body}>
                  Every athlete knows that meaningful goals are built over time. Training,
                  consistency, patience and preparation all play a role. Retirement planning can work
                  the same way.
                </p>
                <p style={S.body}>
                  Whether your next chapter includes travel, family, competition, volunteering, new
                  hobbies or more time for the people and activities you love, it is important to
                  understand your financial options and plan based on your individual circumstances.
                </p>
                <p style={S.body}>
                  Oceanview Life and Annuity Company offers retirement savings and income solutions
                  designed to help individuals prepare for retirement based on their financial goals
                  and needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: About Oceanview ───────────────────────────────────── */}
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              alignItems: 'center',
            }}
            className="nsg-split"
          >
            <div>
              <Eyebrow>About Oceanview</Eyebrow>
              <h2 style={{ ...S.h2, marginBottom: 18 }}>
                About Oceanview Life and Annuity Company
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
                <p style={S.body}>
                  Oceanview Life and Annuity Company is focused on helping people plan for retirement
                  through retirement savings and income products. Oceanview offers a suite of annuity
                  products, including multi-year guaranteed annuities and fixed indexed annuities,
                  distributed nationally through agents, advisors, banks and broker-dealers.
                </p>
                <p style={S.body}>
                  We are committed to providing straightforward retirement solutions designed to meet a
                  variety of consumer needs, personalized service and long-term support for
                  policyholders and the financial professionals who serve them.
                </p>
              </div>
              <PillMint onClick={() => { window.location.hash = 'about' }}>
                Learn More About Oceanview
              </PillMint>
            </div>
            {/* Placeholder brand image (shared with About page) — swap for NSG-specific or
                client-approved photography when assets arrive. */}
            <img
              src="assets/lighthouse.jpg"
              alt="Lighthouse on the coastline"
              style={{
                width: '100%',
                aspectRatio: '4/3',
                objectFit: 'cover',
                borderRadius: 20,
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Section 4: Email capture ─────────────────────────────────────── */}
      <section id="nsg-signup" style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              alignItems: 'start',
            }}
            className="nsg-split"
          >
            <div>
              <Eyebrow>Stay Connected</Eyebrow>
              <h2 style={{ ...S.h2, marginBottom: 14 }}>
                Stay Connected with{' '}
                <em style={S.accentBlue}>Oceanview</em>
              </h2>
              <p style={S.body}>
                Get consumer-focused retirement insights, company news and helpful resources from
                Oceanview Life and Annuity Company.
              </p>
            </div>
            <div
              style={{
                background: 'var(--ov-surface-tint)',
                border: '1px solid rgba(36,148,193,.15)',
                borderRadius: 16,
                padding: '28px 24px',
              }}
            >
              <EmailSignup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Closing brand statement ───────────────────────────── */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div
            style={{
              maxWidth: 760,
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Eyebrow light style={{ justifyContent: 'center' }}>Our Commitment</Eyebrow>
            <h2 style={{ ...S.h2Light, marginBottom: 18 }}>
              Keep Moving Toward What{' '}
              <em style={S.accent}>Matters</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
              <p style={S.bodyDark}>
                The Senior Games celebrate more than competition. They celebrate commitment,
                connection and the belief that meaningful goals are worth pursuing at every age.
              </p>
              <p style={S.bodyDark}>
                Oceanview is proud to support that belief — on the field, on the court, in the pool,
                on the track and throughout the road ahead.
              </p>
            </div>
            <PillMint onClick={() => { window.location.hash = 'individuals' }}>
              Explore Retirement Resources
            </PillMint>
          </div>
        </div>
      </section>

      {/* ── CTA banner ───────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <CTABanner
            eyebrow="Get Started"
            title="Plan your next chapter"
            titleAccent="with confidence."
            body="Explore retirement resources designed to help you prepare for the goals that matter most."
            cta="Explore Retirement Resources"
            onClick={() => { window.location.hash = 'individuals' }}
          />
        </div>
      </section>

      {/* ── Compliance disclosure ────────────────────────────────────────── */}
      <section style={{ background: '#F7F8FA', padding: '40px 0 56px' }}>
        <div className="ov-container">
          <div
            style={{
              maxWidth: 860,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              fontFamily: 'var(--ov-ff-sans)',
              fontSize: 12,
              lineHeight: 1.6,
              color: '#6B7280',
            }}
          >
            <p style={{ margin: 0, fontWeight: 600, color: '#4A5568', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 11 }}>
              Important disclosures
            </p>
            <p style={{ margin: 0 }}>
              This material is intended for general educational and informational purposes only and
              should not be considered investment, tax or legal advice. Oceanview Life and Annuity
              Company and its representatives do not provide tax or legal advice. Please consult your
              financial, tax or legal professional regarding your individual situation.
            </p>
            <p style={{ margin: 0 }}>
              The Harbourview MYGA (Generic Policy Form ICC19 OLA SPDA) and Harbourview FIA (Generic
              Policy Form ICC19 OLA FIA) are single premium deferred annuities. May not be available
              in all states.
            </p>
            <p style={{ margin: 0 }}>
              Annuities are long-term insurance products designed for retirement purposes and have
              certain limitations. Guarantees are subject to the claims-paying ability of the issuing
              insurance company. Annuities are products of the insurance industry and are not
              guaranteed by any bank or credit union, not insured by the FDIC, NCUA/NCUSIF or any
              other federal government agency, not a deposit and may lose value. May only be offered
              by a licensed insurance agent.
            </p>
            <p style={{ margin: 0 }}>
              Annuities issued by Oceanview Life and Annuity Company, 1331 17th Street, Suite 1050,
              Denver, CO 80202. In California, doing business as Oceanview Life and Annuity Insurance
              Company.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
