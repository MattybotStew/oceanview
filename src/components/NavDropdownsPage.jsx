// NavDropdownsPage.jsx — Unlisted showcase: all desktop mega-menus open & stacked
// Route: #nav-dropdowns  ·  Uses live Header dropdown components + NAV_DROPDOWNS data
// For handoff / design review (e.g. Devn) — not linked in primary nav
import { NAV_DROPDOWNS, TabbedDropdown, SimpleDropdown } from './Header.jsx'

const noop = () => {}

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
    margin: '0 0 40px',
    maxWidth: '62ch',
  },
  mono: {
    fontFamily: 'ui-monospace, monospace',
    fontSize: 13,
    background: 'rgba(13,31,78,0.06)',
    padding: '2px 6px',
    borderRadius: 4,
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
  panelWrap: {
    // Match in-header panel presentation; fixed position removed so they stack in flow
    display: 'inline-block',
    maxWidth: '100%',
    verticalAlign: 'top',
  },
  navBarMock: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    background: 'var(--ov-navy-500)',
    borderRadius: '8px 8px 0 0',
    padding: '10px 14px',
    marginBottom: 0,
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
}

function Group({ name, children, note }) {
  return (
    <section style={S.group}>
      <h2 style={S.groupTitle}>{name}</h2>
      {note && <p style={S.groupMeta}>{note}</p>}
      {children}
    </section>
  )
}

function PanelShot({ label, children }) {
  return (
    <div style={S.panelBlock}>
      {label && <div style={S.panelLabel}>{label}</div>}
      <div style={S.navBarMock}>
        <span style={S.navChip}>{label?.split('·')[0]?.trim() || 'Nav'}</span>
      </div>
      <div style={S.panelWrap}>{children}</div>
    </div>
  )
}

export default function NavDropdownsPage() {
  const about = NAV_DROPDOWNS.About
  const products = NAV_DROPDOWNS.Products
  const client = NAV_DROPDOWNS['Client Resources']
  const insights = NAV_DROPDOWNS.Insights

  return (
    <div style={S.page}>
      <div style={S.inner}>
        <h1 style={S.title}>Nav dropdowns — open &amp; stacked</h1>
        <p style={S.lead}>
          Unlisted review page for desktop mega-menus. Uses the <strong>same components and data</strong> as the live header
          (<span style={S.mono}>Header.jsx</span> / <span style={S.mono}>NAV_DROPDOWNS</span>).
          Tabbed menus are shown once per sidebar tab so every detail panel is visible without hovering.
          Route: <span style={S.mono}>#nav-dropdowns</span>
        </p>

        <Group
          name="About"
          note="Tabbed mega-menu — one open panel per sidebar item (tabs locked for screenshots)."
        >
          {about.tabs.map((tab, i) => (
            <PanelShot key={tab.label} label={`About · ${tab.label}`}>
              <TabbedDropdown
                config={about}
                onClose={noop}
                initialTab={i}
                lockTab
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
              />
            </PanelShot>
          ))}
        </Group>

        <Group
          name="Client Resources"
          note="Simple list dropdown."
        >
          <PanelShot label="Client Resources">
            <SimpleDropdown config={client} onClose={noop} />
          </PanelShot>
        </Group>

        <Group
          name="Insights"
          note="Simple list dropdown."
        >
          <PanelShot label="Insights">
            <SimpleDropdown config={insights} onClose={noop} />
          </PanelShot>
        </Group>
      </div>
    </div>
  )
}
