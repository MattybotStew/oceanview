import { TextLink } from './Buttons.jsx'
import CTABanner from './CTABanner.jsx'
import {
  TrendingUp, BarChart2, FileText, Users, Shield,
  RefreshCw, LayoutList, Layers, Target, PieChart,
  ArrowUpFromLine, Activity, LineChart,
} from 'lucide-react'

// ── Shared ────────────────────────────────────────────────────────────────────
const S = {
  eyebrowRow:       { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 },
  eyebrowLine:      { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow:          { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' },
  eyebrowLineLight: { width: 18, height: 1, background: 'rgba(112,186,191,.6)', flexShrink: 0 },
  eyebrowLight:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#70BABF' },
  h2:               { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  lede:             { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: '60ch' },
}

function Eyebrow({ light, children }) {
  return (
    <div style={S.eyebrowRow}>
      <div style={light ? S.eyebrowLineLight : S.eyebrowLine} />
      <span style={light ? S.eyebrowLight : S.eyebrow}>{children}</span>
    </div>
  )
}

// ── Card ──────────────────────────────────────────────────────────────────────
function ResourceCard({ icon: Icon, tag, title, body, dark }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid rgba(13,31,78,.07)',
      borderRadius: 14,
      padding: '24px 22px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      boxShadow: '0 2px 8px rgba(13,31,78,.04)',
      height: '100%',
      boxSizing: 'border-box',
      transition: 'transform .18s ease, box-shadow .18s ease',
    }} className="ov-tool-card">
      <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--ov-surface-tint)', border: '1px solid rgba(36,148,193,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={18} color="#2494C1" strokeWidth={1.75} />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1' }}>{tag}</span>
        <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 17, color: '#0D1F4E', letterSpacing: '-0.01em', lineHeight: 1.25, margin: 0 }}>{title}</h3>
        <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13.5, color: '#4A5568', lineHeight: 1.6, margin: 0 }}>{body}</p>
      </div>
      <TextLink color="var(--ov-teal-600)" style={{ fontSize: 13, marginTop: 2 }}>View Resource</TextLink>
    </div>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────
const MYGA_TOOLS = [
  { icon: TrendingUp,  tag: 'MYGA Overview',   title: 'Unlocking the Power of Multi-Year Guaranteed Annuities',          body: 'Explores the opportunities available with Harbourview MYGAs — a starting point for MYGA conversations with clients.' },
  { icon: LayoutList,  tag: 'Strategy',        title: 'Laddering MYGAs',                                                  body: 'Illustrates the benefits of distributing premium across multiple MYGA durations to improve liquidity and rate flexibility.' },
  { icon: BarChart2,   tag: 'Accumulation',    title: 'Interest Rate Accumulation',                                       body: 'Highlights the growth potential available with fixed rate opportunities across different holding periods.' },
  { icon: Shield,      tag: 'Comparison',      title: 'A Conservative Approach to Guaranteed Interest Accumulation',      body: 'Compares fixed annuities to CDs and online savings accounts for clients seeking safe, predictable growth.' },
  { icon: FileText,    tag: 'Comparison',      title: 'CDs vs. MYGAs',                                                    body: 'A side-by-side analysis of certificates of deposit and multi-year guaranteed annuities — useful for client education.' },
  { icon: Users,       tag: 'Client Scenario', title: 'MYGA Client Scenario: Income + Principal Protection',              body: 'Positions MYGAs as a safe money alternative that can support additional retirement income while protecting principal.' },
  { icon: Users,       tag: 'Client Scenario', title: 'MYGA Client Scenario: Leaving a Legacy',                          body: 'Explores how a MYGA can be used as part of a legacy planning strategy for clients focused on wealth transfer.' },
  { icon: Users,       tag: 'Client Scenario', title: 'MYGA Client Scenario: Principal Protection + Guaranteed Return',   body: 'Strategic positioning for CD and MYGA holders seeking both principal protection and a guaranteed rate of return.' },
]

const FIA_TOOLS = [
  { icon: RefreshCw,        tag: 'Renewal Strategy',    title: 'Rates That Keep Pace',                                       body: 'Explains how renewal rates reflect market conditions at the time a new rate period begins — helping set client expectations.' },
  { icon: PieChart,         tag: 'Allocation',          title: 'The New 60/40 Approach',                                     body: 'Examines modern retirement allocation strategies in dynamic markets and where fixed indexed annuities fit.' },
  { icon: Target,           tag: 'Education Series',    title: 'Introducing The Retirement Risk Series',                     body: 'An overview of four key risks in retirement — longevity, market, inflation, and sequence — and how FIAs address them.' },
  { icon: Layers,           tag: 'Product Overview',    title: "Introducing Oceanview's Suite of Crediting Strategies",      body: "Simplifies how Oceanview's range of index crediting strategies works — useful for early-stage client conversations." },
  { icon: Users,            tag: 'Client Scenario',     title: 'Leaving a Legacy',                                           body: 'Shows how a fixed indexed annuity can be used as part of a legacy and estate planning strategy.' },
  { icon: LineChart,        tag: 'Performance',         title: 'Index Growth Comparison: 2005–2025',                         body: 'A 20-year performance look at the S&P 500, Russell 2000, and Nasdaq-100 — providing historical context for index conversations.' },
  { icon: Shield,           tag: 'Planning Tool',       title: 'Principal Protection & Achieving Long-Term Financial Goals', body: 'Strategic positioning for clients focused on protecting what they have while still pursuing long-term financial objectives.' },
  { icon: BarChart2,        tag: 'Allocation',          title: 'Anchoring Allocations',                                      body: 'Explores multi-product allocation strategies using FIAs as an anchor within a broader retirement portfolio.' },
  { icon: ArrowUpFromLine,  tag: 'Recovery',            title: 'Getting Back to the Surface',                                body: 'Analyzes how clients can recover from market losses and the role principal protection plays in that process.' },
  { icon: Activity,         tag: 'Crediting Strategy',  title: 'S&P 500 Crediting Strategy',                                 body: 'Detailed overview of the S&P 500 index crediting strategy available within Oceanview FIA products.' },
  { icon: Activity,         tag: 'Crediting Strategy',  title: 'Russell 2000 Crediting Strategy',                            body: 'Covers the Russell 2000 crediting strategy — how it works, what to expect, and who it may suit.' },
  { icon: Activity,         tag: 'Crediting Strategy',  title: 'Nasdaq-100 Crediting Strategy',                              body: 'Detailed overview of the Nasdaq-100 index crediting strategy and its role in client portfolios.' },
  { icon: TrendingUp,       tag: 'Strategy Options',    title: 'S&P 500 Par Rate Strategy Options',                          body: 'Breaks down participation rate options tied to the S&P 500, including how participation affects credited interest.' },
  { icon: TrendingUp,       tag: 'Strategy Options',    title: 'S&P 500 Cap Rate Strategy Options',                          body: 'Outlines the cap rate options available within the S&P 500 crediting strategy and how caps are applied.' },
  { icon: Shield,           tag: 'Risk Control',        title: 'S&P 500 Daily Risk Control 5% Index',                        body: 'Overview of the S&P 500 Daily Risk Control 5% index strategy — designed to manage volatility within defined parameters.' },
  { icon: Shield,           tag: 'Risk Control',        title: 'S&P 500 Daily Risk Control 10% Index',                       body: 'Overview of the S&P 500 Daily Risk Control 10% index strategy and how the volatility target affects crediting.' },
]

// ── Page ──────────────────────────────────────────────────────────────────────
export default function SalesToolsPage() {
  return (
    <main>

      {/* 1 ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>Sales Resources</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px, 4.5vw, 62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '18ch' }}>
            FIA & MYGA Sales Tools
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px, 1.4vw, 17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '52ch' }}>
            Client-ready materials and advisor resources to support every annuity conversation.
          </p>
        </div>
      </section>

      {/* 2 ── MYGA tools ────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 40 }}>
            <Eyebrow>Multi-Year Guaranteed Annuities</Eyebrow>
            <h2 style={{ ...S.h2, color: '#0D1F4E', marginBottom: 10 }}>MYGA Sales Tools</h2>
            <p style={{ ...S.lede, color: '#4A5568' }}>
              Overview guides, comparison materials, and client scenarios for advisors
              presenting MYGA solutions.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="ov-tools-grid">
            {MYGA_TOOLS.map(t => <ResourceCard key={t.title} {...t} />)}
          </div>
        </div>
      </section>

      {/* 3 ── FIA tools ─────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 40 }}>
            <Eyebrow light>Fixed Indexed Annuities</Eyebrow>
            <h2 style={{ ...S.h2, color: '#F2FCFF', marginBottom: 10 }}>FIA Sales Tools</h2>
            <p style={{ ...S.lede, color: 'rgba(242,252,255,.62)' }}>
              Strategy materials, crediting strategy guides, and planning tools for advisors
              presenting fixed indexed annuity solutions.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="ov-tools-grid">
            {FIA_TOOLS.map(t => <ResourceCard key={t.title} {...t} />)}
          </div>
        </div>
      </section>

      {/* 4 ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Support"
            title="Need additional"
            titleAccent="support?"
            body="Our Sales & Marketing team is available to help you find the right materials. Reach us at 1-833-656-7455."
            cta="View Agent FAQs"
            onClick={() => { window.location.hash = 'agent-faqs' }}
          />
        </div>
      </section>

    </main>
  )
}
