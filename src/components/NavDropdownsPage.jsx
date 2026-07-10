// NavDropdownsPage.jsx — Unlisted showcase: desktop mega-menus + mobile drawer nav
// Route: #nav-dropdowns  ·  Live Header components / NAV_DROPDOWNS
// Desktop: every mega-menu open & stacked (tabbed menus once per tab)
// Mobile: phone-frame drawers with accordion sections expanded
import { useState, useEffect } from 'react'
import {
  NAV_DROPDOWNS,
  NAV_ITEMS,
  AUD_ITEMS,
  TabbedDropdown,
  SimpleDropdown,
  MobileNavContent,
  Logo,
} from './Header.jsx'

const noop = () => {}

// Match Header breakpoint: desktop nav hides at ≤1024px
const DESKTOP_MIN = 1025

const S = {
  page: {
    minHeight: '100vh',
    background: 'var(--ov-surface-cream, #F0EEE9)',
    padding: '48px 24px 80px',
  },
  inner: {
    maxWidth: 1100,
    margin: '0 auto',
  },
  title: {
    fontFamily: 'var(--ov-ff-display)',
    fontWeight: 400,
    fontSize: 'clamp(28px, 3.5vw, 42px)',
    color: 'var(--ov-navy-900)',
    margin: '0 0 12px',
    letterSpacing: '-0.02em',
  },
  lead: {
    fontFamily: 'var(--ov-ff-sans)',
    fontSize: 15,
    lineHeight: 1.65,
    color: 'var(--ov-grey-600)',
    margin: '0 0 20px',
    maxWidth: '64ch',
  },
  mono: {
    fontFamily: 'ui-monospace, monospace',
    fontSize: 13,
    background: 'rgba(13,31,78,0.06)',
    padding: '2px 6px',
    borderRadius: 4,
  },
  callout: {
    fontFamily: 'var(--ov-ff-sans)',
    fontSize: 13,
    lineHeight: 1.6,
    color: 'var(--ov-navy-900)',
    background: 'rgba(36,148,193,0.1)',
    border: '1px solid rgba(36,148,193,0.25)',
    borderRadius: 12,
    padding: '12px 16px',
    marginBottom: 28,
  },
  group: {
    marginBottom: 56,
  },
  groupTitle: {
    fontFamily: 'var(--ov-ff-sans)',
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    color: 'var(--ov-teal-600)',
    margin: '0 0 8px',
  },
  groupMeta: {
    fontFamily: 'var(--ov-ff-sans)',
    fontSize: 14,
    color: 'var(--ov-grey-600)',
    margin: '0 0 20px',
  },
  panelBlock: {
    marginBottom: 28,
  },
  panelLabel: {
    fontFamily: 'var(--ov-ff-sans)',
    fontWeight: 600,
    fontSize: 13,
    color: 'var(--ov-navy-900)',
    margin: '0 0 10px',
  },
  navBarMock: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    background: 'var(--ov-navy-500)',
    borderRadius: '8px 8px 0 0',
    padding: '10px 14px',
    marginBottom: 0,
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  navChip: {
    fontFamily: 'PP Mori, var(--ov-ff-sans)',
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#fff',
    padding: '6px 12px',
    borderRadius: 6,
    background: 'rgba(255,255,255,0.12)',
  },
  sectionH: {
    fontFamily: 'var(--ov-ff-display)',
    fontWeight: 400,
    fontSize: 'clamp(22px, 2.5vw, 30px)',
    color: 'var(--ov-navy-900)',
    margin: '0 0 8px',
    paddingTop: 8,
    borderTop: '1px solid rgba(13,31,78,0.1)',
  },
  mobileRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '17px 20px',
    background: '#F0EEE9',
    border: 'none',
    fontFamily: 'var(--ov-ff-sans)',
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--ov-navy-900)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    textAlign: 'left',
    boxSizing: 'border-box',
  },
  mobileDivider: {
    height: 1,
    background: 'rgba(13,31,78,0.06)',
    margin: '0 20px',
  },
  ctaPill: {
    display: 'block',
    width: '100%',
    padding: '14px 20px',
    background: '#F0EEE9',
    borderRadius: 8,
    fontFamily: 'var(--ov-ff-sans)',
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--ov-navy-900)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    textAlign: 'center',
    textDecoration: 'none',
    boxSizing: 'border-box',
  },
}

function Group({ name, children, note }) {
  return (
    <section style={S.group}>
      <h3 style={S.groupTitle}>{name}</h3>
      {note && <p style={S.groupMeta}>{note}</p>}
      {children}
    </section>
  )
}

function PanelShot({ label, children }) {
  const chip = label?.split('·')[0]?.trim() || 'Nav'
  return (
    <div style={S.panelBlock}>
      {label && <div style={S.panelLabel}>{label}</div>}
      <div style={S.navBarMock}>
        <span style={S.navChip}>{chip}</span>
      </div>
      <div className="nav-dd-scroll">{children}</div>
    </div>
  )
}

function ChevronUp() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 10L8 6L12 10" stroke="#233D7C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Full mobile drawer, all expandable sections open (live MobileNavContent) */
function MobileDrawerExpanded() {
  return (
    <div className="nav-dd-phone" aria-label="Mobile navigation drawer showcase">
      <div className="nav-dd-phone-chrome">
        <Logo />
        <span style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--ov-ff-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em' }}>
          MENU
        </span>
      </div>
      <div className="nav-dd-phone-body">
        {/* Drawer header (matches Header mobile) */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 20px', borderBottom: '1px solid rgba(13,31,78,0.08)', flexShrink: 0,
        }}>
          <Logo dark />
          <span style={{
            fontFamily: 'var(--ov-ff-sans)', fontSize: 12, fontWeight: 600,
            color: 'var(--ov-navy-600)', padding: 8,
          }}>✕</span>
        </div>

        <div style={{ flex: 1 }}>
          {NAV_ITEMS.map((name, i) => {
            const config = NAV_DROPDOWNS[name] || null
            return (
              <div key={name}>
                {i > 0 && <div style={S.mobileDivider} />}
                <div style={S.mobileRow}>
                  <span>{name}</span>
                  {config ? <ChevronUp /> : null}
                </div>
                {config ? (
                  <MobileNavContent config={config} onClose={noop} />
                ) : (
                  <div style={{ padding: '0 20px 12px 44px', fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: 'var(--ov-grey-600)' }}>
                    Direct link (no submenu) → <span style={S.mono}>#blog</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div style={{
          padding: '16px 20px 24px', borderTop: '1px solid rgba(13,31,78,0.08)',
          display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0,
        }}>
          {AUD_ITEMS.map(a => (
            <a key={a} href={`#${a.toLowerCase()}`} onClick={e => e.preventDefault()} style={S.ctaPill}>
              {a}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

/** One phone per top-level item with only that section expanded (for isolated review) */
function MobileSectionPhones() {
  return (
    <div className="nav-dd-mobile-grid">
      {NAV_ITEMS.filter(n => NAV_DROPDOWNS[n]).map(name => (
        <div key={name}>
          <div style={S.panelLabel}>Mobile · {name} expanded</div>
          <div className="nav-dd-phone" style={{ maxHeight: 'none' }}>
            <div className="nav-dd-phone-chrome">
              <span style={{ color: '#fff', fontFamily: 'var(--ov-ff-sans)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em' }}>
                {name.toUpperCase()}
              </span>
            </div>
            <div className="nav-dd-phone-body" style={{ maxHeight: 480 }}>
              <div style={S.mobileRow}>
                <span>{name}</span>
                <ChevronUp />
              </div>
              <MobileNavContent config={NAV_DROPDOWNS[name]} onClose={noop} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function useIsDesktopNav() {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= DESKTOP_MIN : true
  )
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${DESKTOP_MIN}px)`)
    const apply = () => setIsDesktop(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])
  return isDesktop
}

export default function NavDropdownsPage() {
  const isDesktopNav = useIsDesktopNav()
  const [view, setView] = useState('both') // desktop | mobile | both

  // Prefer the viewport-appropriate view when the page first loads / resizes
  useEffect(() => {
    setView(isDesktopNav ? 'desktop' : 'mobile')
  }, [isDesktopNav])

  const about = NAV_DROPDOWNS.About
  const products = NAV_DROPDOWNS.Products
  const client = NAV_DROPDOWNS['Client Resources']
  const insights = NAV_DROPDOWNS.Insights

  const showDesktop = view === 'desktop' || view === 'both'
  const showMobile = view === 'mobile' || view === 'both'

  return (
    <div style={S.page}>
      <div style={S.inner}>
        <h1 style={S.title}>Nav — desktop &amp; mobile</h1>
        <p style={S.lead}>
          Unlisted review of header navigation for handoff. Uses live <span style={S.mono}>Header.jsx</span> data
          and components. Desktop mega-menus are stacked open; mobile matches the hamburger drawer
          (breakpoint <span style={S.mono}>≤1024px</span>). Route: <span style={S.mono}>#nav-dropdowns</span>
        </p>

        <div style={S.callout}>
          Your viewport is currently treated as{' '}
          <strong>{isDesktopNav ? 'desktop nav (≥1025px)' : 'mobile nav (≤1024px)'}</strong>
          {' '}— same breakpoint as the live site. Switch views below to compare either layout on any screen size.
        </div>

        <div className="nav-dd-view-tabs" role="tablist" aria-label="Navigation view">
          {[
            { id: 'desktop', label: 'Desktop mega-menus' },
            { id: 'mobile', label: 'Mobile drawer' },
            { id: 'both', label: 'Both' },
          ].map(t => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={view === t.id}
              className={`nav-dd-view-tab${view === t.id ? ' is-active' : ''}`}
              onClick={() => setView(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {showDesktop && (
          <section aria-labelledby="nav-dd-desktop">
            <h2 id="nav-dd-desktop" style={S.sectionH}>Desktop mega-menus</h2>
            <p style={S.groupMeta}>
              Wide panels scroll horizontally on small screens; at ≤720px tabbed menus also stack (sidebar → horizontal chips).
            </p>

            <Group
              name="About"
              note="Tabbed mega-menu — one open panel per sidebar item (tabs locked)."
            >
              {about.tabs.map((tab, i) => (
                <PanelShot key={tab.label} label={`About · ${tab.label}`}>
                  <TabbedDropdown
                    config={about}
                    onClose={noop}
                    initialTab={i}
                    lockTab
                    className="nav-dd-stackable"
                  />
                </PanelShot>
              ))}
            </Group>

            <Group
              name="Products"
              note="Tabbed mega-menu with product links in the detail pane."
            >
              {products.tabs.map((tab, i) => (
                <PanelShot key={tab.label} label={`Products · ${tab.label}`}>
                  <TabbedDropdown
                    config={products}
                    onClose={noop}
                    initialTab={i}
                    lockTab
                    className="nav-dd-stackable"
                  />
                </PanelShot>
              ))}
            </Group>

            <Group name="Client Resources" note="Simple list dropdown.">
              <PanelShot label="Client Resources">
                <SimpleDropdown config={client} onClose={noop} />
              </PanelShot>
            </Group>

            <Group name="Insights" note="Simple list dropdown.">
              <PanelShot label="Insights">
                <SimpleDropdown config={insights} onClose={noop} />
              </PanelShot>
            </Group>
          </section>
        )}

        {showMobile && (
          <section aria-labelledby="nav-dd-mobile" style={{ marginTop: showDesktop ? 24 : 0 }}>
            <h2 id="nav-dd-mobile" style={S.sectionH}>Mobile drawer</h2>
            <p style={S.groupMeta}>
              Phone frame uses the same <span style={S.mono}>MobileNavContent</span> as the live hamburger menu.
              Full drawer shows every section expanded; grid below isolates each section.
            </p>

            <Group name="Full drawer (all expanded)" note="Scroll inside the frame — matches drawer body + audience CTAs.">
              <MobileDrawerExpanded />
            </Group>

            <Group name="Per-section expanded" note="Isolated views for screenshot / review.">
              <MobileSectionPhones />
            </Group>
          </section>
        )}
      </div>
    </div>
  )
}
