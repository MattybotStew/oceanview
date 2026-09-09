// HomeV2Page.jsx — Live homepage (# / #home / #home-v2).
// Copy sourced from "Oceanview Homepage copy draft[32].docx". Previous home: #home-legacy.
import { useState } from 'react'
import Hero from './Hero.jsx'
import StatsStrip from './StatsStrip.jsx'
import CTABanner from './CTABanner.jsx'
import { Eyebrow } from './common.jsx'
import { PillMint, PillGhost, TextLink } from './Buttons.jsx'

// ── Trust / proof bar (draft §2) ──────────────────────────────────────────────
const TRUST_STATS = [
  { value: 'A (Excellent)', label: 'Rated by AM Best*' },
  { value: '$XX.X Billion', label: 'Total Assets*' },
  { value: 'Focused on Annuities', label: 'Fixed & Fixed Indexed Solutions' },
  { value: 'Broad Distribution', label: 'Through Agents, Advisors, Banks & Broker-Dealers' },
]

// ── Products / rates (draft §4) ───────────────────────────────────────────────
const PRODUCTS = [
  {
    title: 'Fixed Annuities',
    subhead: 'Predictable interest for a defined period.',
    body: 'A fixed annuity can provide a declared interest rate and predictable accumulation without direct exposure to stock-market fluctuations.',
    cta: 'Explore Fixed Annuities',
    hash: 'products',
  },
  {
    title: 'Fixed Indexed Annuities',
    subhead: 'Protection with index-linked interest potential.',
    body: 'A fixed indexed annuity protects principal from direct market loss while offering interest-crediting potential based in part on the performance of a market index, subject to contract terms. You are not invested directly in the index.',
    cta: 'Explore Fixed Indexed Annuities',
    hash: 'fia-overview',
  },
]

// ── Why Oceanview (draft §5) ──────────────────────────────────────────────────
const PILLARS = [
  {
    title: 'Straightforward By Design',
    body: 'We work to make product features, rate mechanics and expectations easier to understand—so important retirement decisions can begin with greater clarity.',
  },
  {
    title: 'Competitive Value',
    body: 'Competitive rates matter. We pair them with product features and options designed to provide meaningful value for different retirement needs.',
  },
  {
    title: 'Financial Strength',
    body: 'An annuity is a long-term commitment. Oceanview\u2019s financial strength provides an important foundation for the guarantees and obligations behind our products.',
  },
  {
    title: 'A Long-Term View',
    body: 'Our focus extends beyond the day a policy is issued. We take a disciplined approach to product management and to the commitments we make to policyholders over time.',
  },
]

// ── Retirement resources (draft §6) ───────────────────────────────────────────
const RESOURCES = [
  {
    title: 'How Fixed Annuities Work',
    body: 'Understand how guarantees, interest crediting and predictable accumulation work.',
    cta: 'Learn About Fixed Annuities',
    hash: 'products',
  },
  {
    title: 'Annuity Pros & Cons',
    body: 'Explore potential benefits, important tradeoffs and questions to consider when evaluating an annuity.',
    cta: 'Explore the Pros & Cons',
    hash: 'faq',
  },
  {
    title: 'Understanding Fixed Indexed Annuities',
    body: 'Learn how principal protection and index-linked interest-crediting potential work together.',
    cta: 'Learn About Fixed Indexed Annuities',
    hash: 'fia-overview',
  },
]

function navTo(hash) {
  window.location.hash = hash
  window.scrollTo({ top: 0, behavior: 'instant' })
}

const signupInput = {
  flex: 1,
  minWidth: 0,
  height: 47,
  padding: '12px 16px',
  borderRadius: 8,
  border: '1px solid rgba(13,31,78,.15)',
  background: '#fff',
  fontFamily: 'var(--ov-ff-sans)',
  fontSize: 14,
  color: 'var(--ov-navy-900)',
  outline: 'none',
  boxSizing: 'border-box',
}

function HomeV2EmailSignup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: 'var(--ov-navy-800)', margin: 0 }}>
        Thanks&mdash;you&apos;re signed up.
      </p>
    )
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); if (name && email && consent) setSubmitted(true) }}
      style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
      aria-label="Newsletter signup"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="home-v2-signup-form">
        <label htmlFor="home-v2-name" className="sr-only">Name</label>
        <input
          id="home-v2-name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          style={signupInput}
        />
        <label htmlFor="home-v2-email" className="sr-only">Email</label>
        <input
          id="home-v2-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={signupInput}
        />
        <PillMint type="submit" style={{ height: 47, flexShrink: 0 }}>Sign Up</PillMint>
      </div>
      <label style={{ display: 'flex', gap: 16, alignItems: 'flex-start', cursor: 'pointer' }}>
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          style={{ width: 20, height: 20, marginTop: 2, flexShrink: 0, accentColor: '#2494C1' }}
        />
        <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.55 }}>
          I agree to receive communications from Oceanview Life and Annuity. I understand I can unsubscribe at any time. We respect your privacy. Your information will never be shared.
        </span>
      </label>
    </form>
  )
}

export default function HomeV2Page({ goto }) {
  const go = (slug) => {
    if (goto) goto(slug)
    else navTo(slug)
  }

  return (
    <main className="home-v2-page">
      {/* §1 Hero */}
      <Hero
        staticSlide={0}
        slideOverride={{
          eyebrow: 'FIXED & FIXED INDEXED ANNUITIES',
          eyebrowLight: true,
          titleLines: ['Clear annuity solutions for'],
          titleAccent: 'the retirement ahead.',
          inlineAccent: true,
          body: 'Oceanview offers fixed and fixed indexed annuities built around straightforward features, competitive value and a disciplined approach to long-term retirement solutions.',
          ctaPrimary: 'Explore Annuity Options',
          ctaSecondary: 'View Rates',
          image: 'assets/home-v2-hero.jpg',
        }}
        onPrimary={() => go('products')}
        onSecondary={() => go('client-resources?tab=rates')}
      />

      {/* §2 Trust / proof bar */}
      <StatsStrip variant="light" stats={TRUST_STATS} />

      {/* §3 Audience routing — centered display intro (editorial) */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div className="home-v2-intro home-v2-intro--center">
            <h2 className="home-v2-display">
              How can we help{' '}
              <em className="home-v2-accent--light">you plan ahead?</em>
            </h2>
            <p className="home-v2-lead home-v2-lead--flush">
              Whether you&apos;re planning for your own retirement or helping clients prepare for theirs, find the Oceanview information and resources designed for you.
            </p>
          </div>
          <div className="home-v2-audience-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 40 }}>
            <div className="home-v2-card">
              <h3 className="home-v2-card-title home-v2-card-title--bold">Planning for Retirement</h3>
              <p className="home-v2-card-body">
                Learn how annuities work, compare your options and explore resources designed to help you make more informed retirement decisions.
              </p>
              <PillMint className="home-v2-card-cta" onClick={() => go('individuals')}>Explore for Individuals</PillMint>
            </div>
            <div className="home-v2-card">
              <h3 className="home-v2-card-title home-v2-card-title--bold">Financial Professionals</h3>
              <p className="home-v2-card-body">
                Access current rates, product information, sales tools, appointment resources and Oceanview sales support for serving your clients.
              </p>
              <PillMint className="home-v2-card-cta" onClick={() => go('professionals')}>For Financial Professionals</PillMint>
            </div>
          </div>
        </div>
      </section>

      {/* §4 Products / rates */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <Eyebrow light style={{ marginBottom: 12 }}>Annuity Options</Eyebrow>
          <div className="home-v2-intro">
            <h2 className="home-v2-h2 home-v2-h2--dark">
              Different goals call for{' '}
              <em className="home-v2-accent--dark">different approaches.</em>
            </h2>
            <p className="home-v2-lead home-v2-lead--dark">
              Oceanview offers fixed and fixed indexed annuities designed to provide different approaches to predictability, protection and interest-crediting potential.
            </p>
          </div>
          <div className="home-v2-product-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {PRODUCTS.map(({ title, subhead, body, cta, hash }) => (
              <div key={title} className="home-v2-card home-v2-card--dark">
                <h3 className="home-v2-card-title home-v2-card-title--dark">{title}</h3>
                <p className="home-v2-product-subhead">{subhead}</p>
                <p className="home-v2-card-body home-v2-card-body--dark">{body}</p>
                <PillGhost light className="home-v2-card-cta" onClick={() => go(hash)}>{cta}</PillGhost>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §5 Why Oceanview — editorial pillar grid */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <Eyebrow style={{ marginBottom: 12 }}>Why Oceanview</Eyebrow>
          <div className="home-v2-intro">
            <h2 className="home-v2-h2">
              A <em className="home-v2-accent--light">focused</em> approach to retirement.
            </h2>
            <p className="home-v2-lead">
              We focus on fixed and fixed indexed annuities&mdash;solutions designed to support long-term retirement goals with greater clarity and confidence. That focus shapes how we approach our products, our financial commitments and the people who rely on them.
            </p>
          </div>
          <div className="lpl-pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 28 }}>
            {PILLARS.map(({ title, body }) => (
              <div key={title} className="home-v2-pillar">
                <h3 className="home-v2-card-title home-v2-card-title--pillar">{title}</h3>
                <p className="home-v2-card-body home-v2-card-body--pillar">{body}</p>
              </div>
            ))}
          </div>
          <TextLink onClick={() => go('about')}>Discover the Oceanview Difference</TextLink>
        </div>
      </section>

      {/* §6 Retirement resources */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <Eyebrow light style={{ marginBottom: 12 }}>Retirement Resources</Eyebrow>
          <div className="home-v2-intro">
            <h2 className="home-v2-h2 home-v2-h2--dark">
              Make a <em className="home-v2-accent--dark">more informed</em> annuity decision.
            </h2>
            <p className="home-v2-lead home-v2-lead--dark">
              Explore straightforward resources designed to help you understand annuity options, potential benefits, tradeoffs and questions worth asking.
            </p>
          </div>
          <div className="home-v2-resource-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 28 }}>
            {RESOURCES.map(({ title, body, cta, hash }) => (
              <div key={title} className="home-v2-card home-v2-card--white">
                <h3 className="home-v2-card-title home-v2-card-title--resource">{title}</h3>
                <p className="home-v2-card-body home-v2-card-body--sm">{body}</p>
                <TextLink onClick={() => go(hash)}>{cta}</TextLink>
              </div>
            ))}
          </div>
          <PillMint className="home-v2-card-cta" onClick={() => go('insights')}>Explore Retirement Resources</PillMint>
        </div>
      </section>

      {/* §7 Current rates CTA */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Current Rates"
            title="See what's"
            titleAccent="current."
            body="Explore current Oceanview fixed and fixed indexed annuity rates."
            cta="View Current Rates"
            onClick={() => go('client-resources?tab=rates')}
          />
        </div>
      </section>

      {/* §8 Newsletter signup */}
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <div
            style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)', gap: 48, alignItems: 'center' }}
            className="nsg-split home-v2-signup"
          >
            <div>
              <Eyebrow style={{ marginBottom: 12 }}>Stay Informed</Eyebrow>
              <div className="home-v2-intro">
                <h2 className="home-v2-display home-v2-display--signup">
                  Retirement insights,{' '}
                  <em className="home-v2-accent--light">made clearer.</em>
                </h2>
                <p className="home-v2-lead home-v2-lead--flush">
                  Get educational resources and perspectives from Oceanview to help you better understand annuities and retirement planning.
                </p>
              </div>
            </div>
            <HomeV2EmailSignup />
          </div>
        </div>
      </section>
    </main>
  )
}
