import { useState } from 'react'
import Hero from './Hero.jsx'
import { Eyebrow } from './common.jsx'
import { PillMint, PillGhost, TextLink } from './Buttons.jsx'

function go(hash) {
  window.location.hash = hash
}

const TRUST = [
  { value: 'A (Excellent)', label: 'AM Best Financial Strength Rating*' },
  { value: '$XX.X Billion', label: 'Total Assets*' },
  { value: 'Focused on Annuities', label: 'Fixed & Fixed Indexed Solutions' },
]

const ANNUITIES = [
  {
    title: 'Harbourview MYGA',
    body: 'Lock in a guaranteed rate for a defined period. Choose from multiple guarantee periods for predictable interest, principal protection and tax-deferred accumulation, subject to contract terms.',
    cta: 'Explore Harbourview MYGA',
    hash: 'harbourview-myga',
  },
  {
    title: 'CurrentRate MYGA',
    body: 'Start with certainty. Adjust with rates over time. Receive a declared first-year interest rate. Beginning in year two, the annual rate is determined using the contract-defined 1-Year U.S. Treasury component plus a 1.00% guaranteed spread, subject to the contract’s guaranteed minimum.',
    cta: 'Explore CurrentRate MYGA',
    hash: 'current-rate-fia',
  },
  {
    title: 'Harbourview FIA',
    body: 'Protection with a broader choice of interest-crediting strategies. Protect principal from losses caused by negative index performance while maintaining the opportunity to earn interest through a range of index-linked and fixed-interest strategies, subject to contract terms.',
    cta: 'Explore Harbourview FIA',
    hash: 'harbourview-fia',
  },
  {
    title: 'CapLock FIA',
    body: 'Know your cap from the start. Select from Cap Rate Guarantee Strategies that establish the applicable cap rate at issue and keep it unchanged for the full 5- or 7-year surrender-charge period. Indexed interest, if any, depends on index performance and contract terms.',
    cta: 'Explore CapLock FIA',
    hash: 'caplock',
  },
]

const RATES = [
  {
    title: 'Harbourview MYGA',
    label: 'Current APY',
    rate: 'X.XX%',
    term: '[Select Guarantee Period]',
    note: null,
  },
  {
    title: 'CurrentRate MYGA',
    label: 'Current First-Year Declared Rate',
    rate: 'X.XX%',
    term: '5-Year Contract',
    note: 'Beginning in year two, the annual rate is determined using the contract-defined 1-Year U.S. Treasury component plus a 1.00% guaranteed spread, subject to the guaranteed minimum.',
  },
  {
    title: 'Harbourview FIA',
    label: 'Current S&P 500 Annual Point-to-Point Cap Rate',
    rate: 'X.XX%',
    term: '[Select 3-, 5-, 7- or 10-Year Term]',
    note: 'The cap is the maximum indexed interest that may be credited for the applicable strategy and crediting period. It is not a guaranteed rate of return. Indexed interest depends on S&P 500 performance and contract terms.',
  },
  {
    title: 'CapLock FIA',
    label: 'Current Guaranteed S&P 500 Annual Point-to-Point Cap Rate',
    rate: 'X.XX%',
    term: '[Select 5- or 7-Year Term]',
    note: 'The applicable Cap Rate Guarantee Strategy cap is established at issue and remains unchanged for the full surrender-charge period. The cap is not a guaranteed rate of return; indexed interest depends on S&P 500 performance and contract terms.',
  },
]

const PILLARS = [
  {
    title: 'Straightforward by Design',
    body: 'Understand what is guaranteed, what can change and how your contract works.',
  },
  {
    title: 'Competitive Value',
    body: 'Competitive rates and product features designed to address different long-term retirement needs.',
  },
  {
    title: 'Financial Strength',
    body: 'Oceanview is rated A (Excellent) by AM Best.* Financial strength is an important consideration because annuity guarantees depend on the claims-paying ability of the issuing insurance company.',
  },
]

const MORE = [
  {
    title: 'I have a retirement situation in mind.',
    body: 'Explore real-world questions about maturities, market risk, timelines, income, family goals and other retirement decisions.',
    cta: 'Retirement Planning in Practice',
    hash: 'life-events',
  },
  {
    title: 'I want to understand how annuities work.',
    body: 'Explore plain-language guides to annuities, MYGAs, FIAs, guarantees, withdrawals and other important concepts.',
    cta: 'Annuities, Explained',
    hash: 'insights',
  },
  {
    title: 'I’m looking for planning tools.',
    body: 'Explore checklists, guides and practical resources designed to support deeper retirement-planning conversations.',
    cta: 'Planning Guides & Tools',
    hash: 'client-resources',
  },
]

const NEXT = [
  { label: 'View Current Rates', hash: 'client-resources?tab=rates', primary: true },
  { label: 'Explore Oceanview Annuities', hash: 'products' },
  { label: 'Client Portal', hash: 'contact' },
]

const card = {
  background: '#fff',
  border: '1px solid rgba(13,31,78,.07)',
  borderRadius: 16,
  padding: '28px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
}

const h3 = {
  fontFamily: 'var(--ov-ff-display)',
  fontWeight: 400,
  fontSize: 22,
  color: '#0D1F4E',
  letterSpacing: '-0.015em',
  lineHeight: 1.2,
  margin: 0,
}

const body = {
  fontFamily: 'var(--ov-ff-sans)',
  fontSize: 15,
  color: '#4A5568',
  lineHeight: 1.7,
  margin: 0,
}

function EmailSignup() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  if (done) {
    return (
      <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: 'var(--ov-navy-800)', margin: 0 }}>
        Thanks — you’re signed up.
      </p>
    )
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); if (email) setDone(true) }}
      style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}
      aria-label="Stay informed"
    >
      <label htmlFor="individuals-email" className="sr-only">Email Address</label>
      <input
        id="individuals-email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        style={{
          flex: '1 1 220px',
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
        }}
      />
      <PillMint type="submit" style={{ height: 47, flexShrink: 0 }}>Sign Up</PillMint>
    </form>
  )
}

export default function IndividualsPage() {
  return (
    <main>
      <Hero
        staticSlide={0}
        slideOverride={{
          eyebrow: '',
          eyebrowLight: true,
          titleLines: ['Fixed annuity solutions for the retirement you’re building.'],
          titleAccent: '',
          inlineAccent: false,
          body: 'Explore Oceanview fixed and fixed indexed annuities designed to provide different approaches to predictability, protection and interest-crediting potential.',
          ctaPrimary: 'View Current Rates',
          ctaSecondary: 'Explore Annuities',
          image: 'assets/hero-couple.jpg',
        }}
        onPrimary={() => go('client-resources?tab=rates')}
        onSecondary={() => go('products')}
      />

      <section style={{ background: '#fff' }}>
        <div className="ov-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }} className="ov-stats-grid ov-stats-grid--light">
            {TRUST.map((s, i) => (
              <div key={s.label} style={{ padding: '40px 28px', borderLeft: i > 0 ? '1px solid var(--ov-border-faint)' : 'none', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 800, fontSize: 'clamp(20px, 2.2vw, 30px)', lineHeight: 1.15, color: 'var(--ov-navy-900)', letterSpacing: '-0.02em' }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: 'var(--ov-grey-600)', marginTop: 8, lineHeight: 1.45 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <Eyebrow style={{ marginBottom: 12 }}>Oceanview Annuities</Eyebrow>
          <h2 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px,3.2vw,44px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: '0 0 14px', maxWidth: '22ch' }}>
            Explore solutions designed for different retirement needs.
          </h2>
          <p style={{ ...body, maxWidth: '68ch', marginBottom: 32 }}>
            Whether you value a guaranteed rate, want interest that can adjust over time or are looking for protection with index-linked potential, Oceanview offers several ways to give retirement savings a more defined role.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }} className="ov-concern-grid">
            {ANNUITIES.map((p) => (
              <div key={p.title} style={card}>
                <h3 style={h3}>{p.title}</h3>
                <p style={{ ...body, flex: 1 }}>{p.body}</p>
                <TextLink onClick={() => go(p.hash)}>{p.cta}</TextLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <Eyebrow style={{ marginBottom: 12 }}>Current Rates</Eyebrow>
          <h2 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px,3.2vw,44px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: '0 0 14px' }}>
            See what’s available today.
          </h2>
          <p style={{ ...body, maxWidth: '68ch', marginBottom: 32 }}>
            Review current rates and crediting terms across Oceanview fixed and fixed indexed annuities. A current rate or cap is one part of the decision. Consider your goals, time horizon, liquidity needs and how you want this portion of your retirement savings to work.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 28 }} className="ov-concern-grid">
            {RATES.map((r) => (
              <div key={r.title} style={card}>
                <h3 style={h3}>{r.title}</h3>
                <p style={{ ...body, fontSize: 13, letterSpacing: '.04em', textTransform: 'uppercase', fontWeight: 600 }}>{r.label}</p>
                <div style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 800, fontSize: 40, color: '#0D1F4E', letterSpacing: '-0.03em', lineHeight: 1 }}>{r.rate}</div>
                <p style={body}>{r.term}</p>
                <p style={{ ...body, fontSize: 13 }}>Effective [DATE]</p>
                {r.note && <p style={{ ...body, fontSize: 14 }}>{r.note}</p>}
              </div>
            ))}
          </div>
          <TextLink onClick={() => go('client-resources?tab=rates')}>View All Current Rates</TextLink>
        </div>
      </section>

      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <Eyebrow light style={{ marginBottom: 12 }}>Why Oceanview</Eyebrow>
          <h2 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px,3.2vw,44px)', color: '#F2FCFF', letterSpacing: '-0.025em', lineHeight: 1.12, margin: '0 0 14px', maxWidth: '18ch' }}>
            Clear solutions. Competitive value. Long-term focus.
          </h2>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 16, color: 'rgba(242,252,255,.72)', lineHeight: 1.7, margin: '0 0 32px', maxWidth: '68ch' }}>
            Oceanview focuses on fixed annuities. We bring together straightforward product design, competitive value and financial strength with a disciplined approach to the long-term commitments behind our policies.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 28 }} className="ov-concern-grid">
            {PILLARS.map((p) => (
              <div key={p.title} style={{ ...card, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)' }}>
                <h3 style={{ ...h3, color: '#F2FCFF' }}>{p.title}</h3>
                <p style={{ ...body, color: 'rgba(242,252,255,.72)' }}>{p.body}</p>
              </div>
            ))}
          </div>
          <TextLink color="#70BABF" onClick={() => go('about')}>Discover the Oceanview Difference</TextLink>
        </div>
      </section>

      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <Eyebrow style={{ marginBottom: 12 }}>Looking for More?</Eyebrow>
          <h2 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px,3.2vw,44px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: '0 0 14px', maxWidth: '18ch' }}>
            Explore the question that brought you here.
          </h2>
          <p style={{ ...body, maxWidth: '68ch', marginBottom: 32 }}>
            Whether you want to understand an annuity feature or think through a specific retirement situation, Oceanview offers straightforward resources when you want to go deeper.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="ov-concern-grid">
            {MORE.map((item) => (
              <div key={item.title} style={card}>
                <h3 style={{ ...h3, fontSize: 20 }}>{item.title}</h3>
                <p style={{ ...body, flex: 1 }}>{item.body}</p>
                <TextLink onClick={() => go(item.hash)}>{item.cta}</TextLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <h2 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px,3.2vw,40px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: '0 0 24px' }}>
            What would you like to do next?
          </h2>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {NEXT.map((n) => (
              n.primary
                ? <PillMint key={n.label} onClick={() => go(n.hash)}>{n.label}</PillMint>
                : <PillGhost key={n.label} onClick={() => go(n.hash)}>{n.label}</PillGhost>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 48, alignItems: 'center' }} className="nsg-split">
            <div>
              <Eyebrow style={{ marginBottom: 12 }}>Stay Informed</Eyebrow>
              <h2 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px,3.2vw,44px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: '0 0 14px' }}>
                Retirement insights, made clearer.
              </h2>
              <p style={body}>
                Get educational resources and perspectives from Oceanview to help you better understand annuities and retirement planning.
              </p>
            </div>
            <EmailSignup />
          </div>
        </div>
      </section>

    </main>
  )
}
