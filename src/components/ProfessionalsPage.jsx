import { TextLink, PillMint, PillGhost } from './Buttons.jsx'
import CTABanner from './CTABanner.jsx'
import {
  FileText, BookOpen, LayoutDashboard,
  Download, Map, Layers,
  ShieldCheck, TrendingUp, Headphones,
} from 'lucide-react'

// ── Styles ────────────────────────────────────────────────────────────────────
const S = {
  eyebrowRow:       { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 },
  eyebrowLine:      { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow:          { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' },
  eyebrowLineLight: { width: 18, height: 1, background: 'rgba(112,186,191,.6)', flexShrink: 0 },
  eyebrowLight:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#70BABF' },

  h2:      { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px, 3.4vw, 46px)', letterSpacing: '-0.025em', lineHeight: 1.1, margin: 0 },
  accent:  { fontStyle: 'italic', color: '#70BABF' },
  accentBlue: { fontStyle: 'italic', color: '#2494C1' },
  body:    { fontFamily: 'var(--ov-ff-sans)', fontSize: 16, lineHeight: 1.7, color: '#4A5568', margin: 0 },
  bodyDark:{ fontFamily: 'var(--ov-ff-sans)', fontSize: 16, lineHeight: 1.7, color: 'rgba(242,252,255,.65)', margin: 0 },
}

function Eyebrow({ light, children }) {
  return (
    <div style={S.eyebrowRow}>
      <div style={light ? S.eyebrowLineLight : S.eyebrowLine} />
      <span style={light ? S.eyebrowLight : S.eyebrow}>{children}</span>
    </div>
  )
}

// ── Why Oceanview — 3 advisor-facing differentiators ─────────────────────────
const DIFFERENTIATORS = [
  {
    Icon: TrendingUp,
    title: "Competitive rates, consistently",
    body: "Our MYGA and FIA rates rank among the industry's highest — giving your clients a strong foundation for guaranteed growth.",
  },
  {
    Icon: ShieldCheck,
    title: "Simple products you can explain",
    body: "No hidden clauses, no unnecessary complexity. Every product is built to be understood, positioned, and trusted by your clients.",
  },
  {
    Icon: Headphones,
    title: "Dedicated advisor support",
    body: "From case design to in-force service, our wholesaler and support teams are built around the advisor relationship.",
  },
]

// ── Resource portal cards ─────────────────────────────────────────────────────
const PORTALS = [
  { Icon: FileText,        eyebrow: 'Sales Resources',    title: 'FIA & MYGA Sales Tools',       body: 'Guides, comparison sheets, and client-ready materials to support your annuity sales conversations.', route: 'sales-tools' },
  { Icon: LayoutDashboard, eyebrow: 'Account Management', title: 'Agent Portal',                 body: 'Your dashboard for managing client accounts, submitting new business, and accessing agent services.',  route: 'agent-portal' },
  { Icon: BookOpen,        eyebrow: 'Agent FAQs',         title: 'Frequently Asked Questions',   body: 'Answers to common questions about contracting, commissions, suitability, and new business.',           route: 'agent-faqs' },
  { Icon: Download,        eyebrow: 'Forms & Documents',  title: 'Downloads',                    body: 'Service forms, annuity packages, claims documents, and other key materials for immediate download.',   route: 'downloads' },
  { Icon: Map,             eyebrow: 'Product Availability', title: 'State Approval Chart',       body: 'Check which Oceanview annuity products are approved for sale in each state.',                          route: 'state-approval' },
  { Icon: Layers,          eyebrow: 'Client Materials',   title: 'Product Brochures',            body: 'Print-ready and digital brochures for every Oceanview annuity — designed to leave with your clients.', route: 'downloads' },
]

function PortalCard({ Icon, eyebrow, title, body, route }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid rgba(13,31,78,.07)',
      borderRadius: 16,
      padding: '28px 28px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      boxShadow: '0 2px 12px rgba(13,31,78,.04)',
      height: '100%',
      boxSizing: 'border-box',
      transition: 'transform .18s ease, box-shadow .18s ease',
    }}
      className="ov-portal-card"
    >
      <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--ov-surface-tint)', border: '1px solid rgba(36,148,193,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={20} color="#2494C1" strokeWidth={1.75} />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1' }}>{eyebrow}</div>
        <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 20, color: '#0D1F4E', letterSpacing: '-0.015em', lineHeight: 1.2, margin: 0 }}>{title}</h3>
        <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.65, margin: 0 }}>{body}</p>
      </div>
      <TextLink onClick={() => { window.location.hash = route }} color="var(--ov-teal-600)">Explore</TextLink>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ProfessionalsPage() {
  return (
    <main>

      {/* 1 ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>For Professionals</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px, 4.5vw, 62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '18ch' }}>
            Tools and support built for financial advisors.
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px, 1.4vw, 17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '52ch' }}>
            Everything you need to serve your clients — from sales resources to account management.
          </p>
        </div>
      </section>

      {/* 2 ── Why Oceanview ─────────────────────────────────────────────────── */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 80, alignItems: 'center' }} className="ov-prof-why-grid">
            <div style={{ flex: '0 0 42%' }}>
              <Eyebrow>Why Oceanview</Eyebrow>
              <h2 style={{ ...S.h2, color: '#0D1F4E', marginBottom: 20 }}>
                A partner built around <em style={S.accentBlue}>your practice.</em>
              </h2>
              <p style={S.body}>
                We focus exclusively on fixed annuity solutions — no distractions, no competing priorities.
                Everything we do is designed to make it easier for you to serve your clients and grow your book.
              </p>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
              {DIFFERENTIATORS.map((d, i) => (
                <div key={d.title} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', padding: '24px 0', borderTop: i > 0 ? '1px solid rgba(13,31,78,.08)' : 'none' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--ov-surface-tint)', border: '1px solid rgba(36,148,193,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <d.Icon size={20} color="#2494C1" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 15, color: '#0D1F4E', marginBottom: 4 }}>{d.title}</div>
                    <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.65, margin: 0 }}>{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── Resource portal ───────────────────────────────────────────────── */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 48 }}>
            <Eyebrow light>Advisor Resources</Eyebrow>
            <h2 style={{ ...S.h2, color: '#F2FCFF', maxWidth: '26ch' }}>
              Everything you need, <em style={S.accent}>in one place.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="ov-portal-grid">
            {PORTALS.map(p => <PortalCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* 4 ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Get Appointed"
            title="Ready to partner with"
            titleAccent="Oceanview?"
            body="Clear products, strong ratings, and dedicated support — for the professionals who count on us."
            cta="Contact Sales"
            onClick={() => { window.location.hash = 'contact' }}
          />
        </div>
      </section>

    </main>
  )
}
