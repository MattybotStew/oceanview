import PageHero from './PageHero.jsx'
import { PillMint, PillNavy, TextLink } from './Buttons.jsx'
import {
  FileText, BookOpen, LayoutDashboard,
  Download, Map, Layers,
} from 'lucide-react'

// ── Styles ───────────────────────────────────────────────────────────────────
const PS = {
  sectionWhite: { background: '#fff' },
  sectionTint:  { background: 'var(--ov-surface-tint)' },

  eyebrowRow:  { display: 'flex', alignItems: 'center', gap: 6 },
  eyebrowLine: { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1' },
  h2:          { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px, 3vw, 40px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  lede:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 16, color: '#4A5568', lineHeight: 1.7, margin: 0, maxWidth: '68ch' },

  // Portal card grid
  grid:        { display: 'flex', flexDirection: 'column', gap: 24 },

  card:        {
    background: '#fff', border: '1px solid rgba(13,31,78,.08)',
    borderRadius: 16, padding: '32px 32px 28px',
    display: 'flex', flexDirection: 'column', gap: 20,
    boxShadow: '0 2px 12px rgba(13,31,78,.04)',
    transition: 'transform .2s ease, box-shadow .2s ease',
  },

  iconTile:    {
    width: 48, height: 48, borderRadius: 10,
    background: '#fff', border: '1px solid rgba(13,31,78,.10)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },

  cardEyebrow: { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1', marginBottom: 6 },
  cardH3:      { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(18px, 1.8vw, 22px)', color: '#0D1F4E', letterSpacing: '-0.015em', lineHeight: 1.2, margin: 0 },
  cardBody:    { fontFamily: 'var(--ov-ff-sans)', fontSize: 14.5, color: '#4A5568', lineHeight: 1.65, margin: 0, flexGrow: 1 },

  divider:     { width: '100%', height: 1, background: 'rgba(13,31,78,.07)', margin: 0 },

  ctaPanel:    { background: 'var(--ov-surface-tint)', borderRadius: 20, padding: 'clamp(48px,6vw,72px) clamp(24px,5vw,56px)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20 },
  ctaH2:       { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  ctaBody:     { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.65, maxWidth: '52ch', margin: 0 },
  ctaBtns:     { display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' },
}

// ── Sub-components ────────────────────────────────────────────────────────────
function Eyebrow({ children }) {
  return (
    <div style={PS.eyebrowRow}>
      <div style={PS.eyebrowLine} />
      <span style={PS.eyebrow}>{children}</span>
    </div>
  )
}

function PortalCard({ icon: Icon, eyebrow, title, body, route }) {
  const navigate = () => { window.location.hash = route }
  return (
    <div
      style={PS.card}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = '0 24px 60px rgba(13,31,78,.12)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = ''
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(13,31,78,.04)'
      }}
    >
      <div style={PS.iconTile}>
        <Icon size={22} color="var(--ov-navy-500)" strokeWidth={1.75} />
      </div>
      <div>
        <div style={PS.cardEyebrow}>{eyebrow}</div>
        <h3 style={PS.cardH3}>{title}</h3>
      </div>
      <p style={PS.cardBody}>{body}</p>
      <div style={PS.divider} />
      <TextLink onClick={navigate} color="var(--ov-teal-600)">Learn More</TextLink>
    </div>
  )
}

// ── Portal data ───────────────────────────────────────────────────────────────
const PORTALS = [
  {
    icon: FileText,
    eyebrow: 'Sales Resources',
    title: 'FIA & MYGA Sales Tools',
    body: 'Informational guides, comparison sheets, and client-ready materials to support your annuity sales conversations.',
    route: 'sales-tools',
  },
  {
    icon: BookOpen,
    eyebrow: 'Industry Insights',
    title: 'Financial Professionals Blog',
    body: 'Timely articles, product updates, and retirement planning strategies tailored for advisors and intermediaries.',
    route: 'blog',
  },
  {
    icon: LayoutDashboard,
    eyebrow: 'Account Management',
    title: 'Agent Portal',
    body: 'Your all-in-one dashboard for managing client accounts, submitting applications, and accessing agent services.',
    route: 'agent-portal',
  },
  {
    icon: Download,
    eyebrow: 'Forms & Documents',
    title: 'Downloads',
    body: 'Service forms, annuity packages, claims documents, and other key materials available for immediate download.',
    route: 'downloads',
  },
  {
    icon: Map,
    eyebrow: 'Product Availability',
    title: 'State Approval Chart',
    body: 'Quickly check which Oceanview annuity products are currently approved for sale in each state.',
    route: 'state-approval',
  },
  {
    icon: Layers,
    eyebrow: 'Client Materials',
    title: 'Product Brochures',
    body: 'Print-ready and digital product brochures for every Oceanview annuity — designed to leave with your clients.',
    route: 'product-brochures',
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ProfessionalsPage() {
  return (
    <main>
      <PageHero
        image="assets/hero-overlay.jpg"
        eyebrow="For Professionals"
        title="Tools and support built for financial advisors."
        subtitle="Everything you need to serve your clients — from sales resources to account management."
        ctaPrimary="Get Started"
        ctaSecondary="Contact Us"
      />

      {/* ── Intro ──────────────────────────────────────────────────────── */}
      <section style={PS.sectionWhite} className="ov-section">
        <div className="ov-container" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Eyebrow>Advisor Resources</Eyebrow>
          <h2 style={PS.h2}>
            Dedicated tools, support, and services<br />
            for financial professionals.
          </h2>
          <p style={{ ...PS.lede, marginTop: 8 }}>
            Oceanview Life and Annuity offers a suite of resources designed to help
            financial professionals evaluate, present, and manage fixed annuity solutions
            for their clients — with clarity and confidence at every step.
          </p>
        </div>
      </section>

      {/* ── Portal card grid ───────────────────────────────────────────── */}
      <section style={PS.sectionTint} className="ov-section">
        <div className="ov-container">
          <div style={PS.grid} className="prd-cards-grid prd-cards-3col">
            {PORTALS.map((p) => (
              <PortalCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA panel ──────────────────────────────────────────────────── */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <div style={PS.ctaPanel}>
            <h2 style={PS.ctaH2}>Ready to get started with Oceanview?</h2>
            <p style={PS.ctaBody}>
              Partner with a company focused on fixed annuity solutions — clear products,
              strong financial foundation, and dedicated support for the professionals who count on us.
            </p>
            <div style={PS.ctaBtns}>
              <PillMint>Get Started</PillMint>
              <PillNavy>Contact Our Team</PillNavy>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
