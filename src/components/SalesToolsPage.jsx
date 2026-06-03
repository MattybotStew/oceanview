import { useState } from 'react'
import PageHero from './PageHero.jsx'
import { PillMint, TextLink } from './Buttons.jsx'
import {
  TrendingUp, BarChart2, FileText, Users, Shield,
  RefreshCw, LayoutList, Layers, Target, PieChart,
  ArrowUpFromLine, Activity, LineChart,
} from 'lucide-react'

// ── Styles ────────────────────────────────────────────────────────────────────
const S = {
  sectionWhite: { background: '#fff' },
  sectionTint:  { background: 'var(--ov-surface-tint)' },

  eyebrowRow:  { display: 'flex', alignItems: 'center', gap: 6 },
  eyebrowLine: { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1' },
  h2:          { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  lede:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 16, color: '#4A5568', lineHeight: 1.7, margin: 0, maxWidth: '64ch' },

  sectionHead: { display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 },

  grid:        { display: 'flex', flexDirection: 'column', gap: 20 },

  card:        {
    background: '#fff', border: '1px solid rgba(13,31,78,.08)',
    borderRadius: 16, padding: '28px 28px 24px',
    display: 'flex', flexDirection: 'column', gap: 16,
    boxShadow: '0 2px 12px rgba(13,31,78,.04)',
    transition: 'transform .2s ease, box-shadow .2s ease',
  },
  cardTint: {
    background: 'var(--ov-surface-tint-2)', border: '1px solid rgba(13,31,78,.06)',
    borderRadius: 16, padding: '28px 28px 24px',
    display: 'flex', flexDirection: 'column', gap: 16,
    transition: 'transform .2s ease, box-shadow .2s ease',
  },

  iconTile: {
    width: 44, height: 44, borderRadius: 10,
    background: '#fff', border: '1px solid rgba(13,31,78,.10)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  iconTileTint: {
    width: 44, height: 44, borderRadius: 10,
    background: 'rgba(255,255,255,.75)', border: '1px solid rgba(36,148,193,.15)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },

  cardTag:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1' },
  cardH3:      { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(15px,1.4vw,18px)', color: '#0D1F4E', letterSpacing: '-0.01em', lineHeight: 1.25, margin: '4px 0 0' },
  cardBody:    { fontFamily: 'var(--ov-ff-sans)', fontSize: 13.5, color: '#4A5568', lineHeight: 1.6, margin: 0, flexGrow: 1 },
  divider:     { height: 1, background: 'rgba(13,31,78,.07)' },

  ctaPanel:    { background: 'var(--ov-surface-tint)', borderRadius: 20, padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20 },
  ctaH2:       { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  ctaBody:     { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.65, maxWidth: '52ch', margin: 0 },
}

// ── Sub-components ────────────────────────────────────────────────────────────
function Eyebrow({ children }) {
  return (
    <div style={S.eyebrowRow}>
      <div style={S.eyebrowLine} />
      <span style={S.eyebrow}>{children}</span>
    </div>
  )
}

function ResourceCard({ icon: Icon, tag, title, body, tint }) {
  const cardStyle = tint ? S.cardTint : S.card
  const tileStyle = tint ? S.iconTileTint : S.iconTile
  return (
    <div
      style={cardStyle}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(13,31,78,.11)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = ''
        e.currentTarget.style.boxShadow = tint ? '' : '0 2px 12px rgba(13,31,78,.04)'
      }}
    >
      <div style={tileStyle}>
        <Icon size={20} color="var(--ov-navy-500)" strokeWidth={1.75} />
      </div>
      <div>
        <div style={S.cardTag}>{tag}</div>
        <h3 style={S.cardH3}>{title}</h3>
      </div>
      <p style={S.cardBody}>{body}</p>
      <div style={S.divider} />
      <TextLink color="var(--ov-teal-600)">View Resource</TextLink>
    </div>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────
const MYGA_TOOLS = [
  {
    icon: TrendingUp,
    tag: 'MYGA Overview',
    title: 'Unlocking the Power of Multi-Year Guaranteed Annuities',
    body: 'Explores the opportunities available with Harbourview MYGAs — a starting point for MYGA conversations with clients.',
  },
  {
    icon: LayoutList,
    tag: 'Strategy',
    title: 'Laddering MYGAs',
    body: 'Illustrates the benefits of distributing premium across multiple MYGA durations to improve liquidity and rate flexibility.',
  },
  {
    icon: BarChart2,
    tag: 'Accumulation',
    title: 'Interest Rate Accumulation',
    body: 'Highlights the growth potential available with fixed rate opportunities across different holding periods.',
  },
  {
    icon: Shield,
    tag: 'Comparison',
    title: 'A Conservative Approach to Guaranteed Interest Accumulation',
    body: 'Compares fixed annuities to CDs and online savings accounts for clients seeking safe, predictable growth.',
  },
  {
    icon: FileText,
    tag: 'Comparison',
    title: 'CDs vs. MYGAs',
    body: 'A side-by-side analysis of certificates of deposit and multi-year guaranteed annuities — useful for client education.',
  },
  {
    icon: Users,
    tag: 'Client Scenario',
    title: 'MYGA Client Scenario: Income + Principal Protection',
    body: 'Positions MYGAs as a safe money alternative that can support additional retirement income while protecting principal.',
  },
  {
    icon: Users,
    tag: 'Client Scenario',
    title: 'MYGA Client Scenario: Leaving a Legacy',
    body: 'Explores how a MYGA can be used as part of a legacy planning strategy for clients focused on wealth transfer.',
  },
  {
    icon: Users,
    tag: 'Client Scenario',
    title: 'MYGA Client Scenario: Principal Protection + Guaranteed Return',
    body: 'Strategic positioning for CD and MYGA holders seeking both principal protection and a guaranteed rate of return.',
  },
]

const FIA_TOOLS = [
  {
    icon: RefreshCw,
    tag: 'Renewal Strategy',
    title: 'Rates That Keep Pace',
    body: 'Explains how renewal rates reflect market conditions at the time a new rate period begins — helping set client expectations.',
  },
  {
    icon: PieChart,
    tag: 'Allocation',
    title: 'The New 60/40 Approach',
    body: 'Examines modern retirement allocation strategies in dynamic markets and where fixed indexed annuities fit.',
  },
  {
    icon: Target,
    tag: 'Education Series',
    title: 'Introducing The Retirement Risk Series',
    body: 'An overview of four key risks in retirement — longevity, market, inflation, and sequence — and how FIAs address them.',
  },
  {
    icon: Layers,
    tag: 'Product Overview',
    title: "Introducing Oceanview's Suite of Crediting Strategies",
    body: 'Simplifies how Oceanview\'s range of index crediting strategies works — useful for early-stage client conversations.',
  },
  {
    icon: Users,
    tag: 'Client Scenario',
    title: 'Leaving a Legacy',
    body: 'Shows how a fixed indexed annuity can be used as part of a legacy and estate planning strategy.',
  },
  {
    icon: LineChart,
    tag: 'Performance',
    title: 'Index Growth Comparison: 2005–2025',
    body: 'A 20-year performance look at the S&P 500, Russell 2000, and Nasdaq-100 — providing historical context for index conversations.',
  },
  {
    icon: Shield,
    tag: 'Planning Tool',
    title: 'Principal Protection & Achieving Long-Term Financial Goals',
    body: 'Strategic positioning for clients focused on protecting what they have while still pursuing long-term financial objectives.',
  },
  {
    icon: BarChart2,
    tag: 'Allocation',
    title: 'Anchoring Allocations',
    body: 'Explores multi-product allocation strategies using FIAs as an anchor within a broader retirement portfolio.',
  },
  {
    icon: ArrowUpFromLine,
    tag: 'Recovery',
    title: 'Getting Back to the Surface',
    body: 'Analyzes how clients can recover from market losses and the role principal protection plays in that process.',
  },
  {
    icon: Activity,
    tag: 'Crediting Strategy',
    title: 'S&P 500 Crediting Strategy',
    body: 'Detailed overview of the S&P 500 index crediting strategy available within Oceanview FIA products.',
  },
  {
    icon: Activity,
    tag: 'Crediting Strategy',
    title: 'Russell 2000 Crediting Strategy',
    body: 'Covers the Russell 2000 crediting strategy — how it works, what to expect, and who it may suit.',
  },
  {
    icon: Activity,
    tag: 'Crediting Strategy',
    title: 'Nasdaq-100 Crediting Strategy',
    body: 'Detailed overview of the Nasdaq-100 index crediting strategy and its role in client portfolios.',
  },
  {
    icon: TrendingUp,
    tag: 'Strategy Options',
    title: 'S&P 500 Par Rate Strategy Options',
    body: 'Breaks down participation rate options tied to the S&P 500, including how participation affects credited interest.',
  },
  {
    icon: TrendingUp,
    tag: 'Strategy Options',
    title: 'S&P 500 Cap Rate Strategy Options',
    body: 'Outlines the cap rate options available within the S&P 500 crediting strategy and how caps are applied.',
  },
  {
    icon: Shield,
    tag: 'Risk Control',
    title: 'S&P 500 Daily Risk Control 5% Index',
    body: 'Overview of the S&P 500 Daily Risk Control 5% index strategy — designed to manage volatility within defined parameters.',
  },
  {
    icon: Shield,
    tag: 'Risk Control',
    title: 'S&P 500 Daily Risk Control 10% Index',
    body: 'Overview of the S&P 500 Daily Risk Control 10% index strategy and how the volatility target affects crediting.',
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────
export default function SalesToolsPage() {
  return (
    <main>
      <PageHero
        image="assets/hero-beach-couple.jpg"
        eyebrow="Sales Resources"
        title="FIA & MYGA Sales Tools"
        subtitle="Client-ready materials and advisor resources to support every annuity conversation."
        ctaPrimary="Agent Portal"
      />

      {/* ── MYGA section ───────────────────────────────────────────────── */}
      <section style={S.sectionWhite} className="ov-section">
        <div className="ov-container">
          <div style={S.sectionHead}>
            <Eyebrow>Multi-Year Guaranteed Annuities</Eyebrow>
            <h2 style={S.h2}>MYGA Sales Tools</h2>
            <p style={S.lede}>
              Resources designed to help advisors open MYGA conversations — from product
              overviews and laddering strategies to client scenarios built around real goals.
            </p>
          </div>
          <div style={S.grid} className="prd-cards-grid prd-cards-3col">
            {MYGA_TOOLS.map((t) => (
              <ResourceCard key={t.title} {...t} tint={false} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FIA section ────────────────────────────────────────────────── */}
      <section style={S.sectionTint} className="ov-section">
        <div className="ov-container">
          <div style={S.sectionHead}>
            <Eyebrow>Fixed Indexed Annuities</Eyebrow>
            <h2 style={S.h2}>FIA Sales Tools</h2>
            <p style={S.lede}>
              Strategy materials, crediting strategy guides, and planning tools for advisors
              presenting fixed indexed annuity solutions to their clients.
            </p>
          </div>
          <div style={S.grid} className="prd-cards-grid prd-cards-3col">
            {FIA_TOOLS.map((t) => (
              <ResourceCard key={t.title} {...t} tint={true} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <div style={S.ctaPanel}>
            <h2 style={S.ctaH2}>Need additional support?</h2>
            <p style={S.ctaBody}>
              Our Sales & Marketing team is available to help you find the right materials
              and support your client conversations. Reach us at 1-833-656-7455.
            </p>
            <PillMint onClick={() => { window.location.hash = 'agent-faqs' }}>
              View Agent FAQs
            </PillMint>
          </div>
        </div>
      </section>
    </main>
  )
}
