import { TextLink, PillNavy } from './Buttons.jsx'
import CTABanner from './CTABanner.jsx'
import {
  FileText, BookOpen, LayoutDashboard,
  Download, Map, Layers,
} from 'lucide-react'

// ── Styles ───────────────────────────────────────────────────────────────────
const PS = {
  sectionWhite: { background: '#fff' },
  sectionTint:  { background: 'var(--ov-surface-tint)' },

  pageHeaderInner: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20 },
  pageEyebrowRow:  { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 },
  pageEyebrowLine: { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  pageEyebrow:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1' },
  pageH1:          { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(36px,5vw,64px)', color: '#0D1F4E', letterSpacing: '-0.03em', lineHeight: 1.08, margin: 0 },
  pageLede:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,18px)', color: '#4A5568', lineHeight: 1.65, maxWidth: '54ch', margin: 0 },

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
      {/* ── Page header ──────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: 'clamp(72px,9vw,112px) 0' }}>
        <div className="ov-container">
          <div style={PS.pageHeaderInner}>
            <div style={PS.pageEyebrowRow}>
              <div style={PS.pageEyebrowLine} />
              <span style={PS.pageEyebrow}>For Professionals</span>
            </div>
            <h1 style={PS.pageH1}>Tools and support built for financial advisors.</h1>
            <p style={PS.pageLede}>
              Everything you need to serve your clients — from sales resources to account management.
            </p>
          </div>
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

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Get Started"
            title="Ready to partner with"
            titleAccent="Oceanview?"
            body="Clear products, strong ratings, and dedicated support for the professionals who count on us."
            cta="Get Started"
            onClick={() => { window.location.hash = 'contact' }}
          />
        </div>
      </section>
    </main>
  )
}
