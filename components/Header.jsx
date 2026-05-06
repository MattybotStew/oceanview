// Header.jsx — Ticker + nav with mega-dropdown panels (2026 Figma design)
const { useState, useRef } = React;

// ─── NAV DATA ─────────────────────────────────────────────────────────────────
const NAV_DROPDOWNS = {
  About: {
    type: "tabbed",
    tabs: [
      {
        label: "Our Story",
        eyebrow: "SINCE 1987",
        heading: "A legacy built on trust",
        body: "Founded with a simple mission — make retirement planning accessible and clear for every American family.",
        tags: ["30+ Years", "A-Rated", "Family-Owned"],
        cta: { label: "Read our story", href: "#our-story" },
      },
      {
        label: "Leadership",
        eyebrow: "OUR PEOPLE",
        heading: "Experienced leadership",
        body: "Our executive team brings decades of insurance and financial services expertise to guide Oceanview's vision.",
        cta: { label: "Meet the team", href: "#leadership" },
      },
      {
        label: "Board of Directors",
        eyebrow: "GOVERNANCE",
        heading: "Independent oversight",
        body: "Deep expertise in finance, risk management, and regulatory compliance ensures sound decision-making at every level.",
        cta: { label: "View the board", href: "#board" },
      },
      {
        label: "Newsroom",
        eyebrow: "LATEST UPDATES",
        heading: "News & announcements",
        body: "Press releases, media coverage, and company milestones — all in one place.",
        cta: { label: "Visit newsroom", href: "#newsroom" },
      },
      {
        label: "Careers",
        eyebrow: "JOIN US",
        heading: "Build your future here",
        body: "Join a team of talented professionals dedicated to helping Americans achieve financial security in retirement.",
        cta: { label: "See open roles", href: "#careers" },
      },
    ],
  },
  Products: {
    type: "tabbed",
    tabs: [
      {
        label: "Multi-Year Guaranteed Annuities",
        eyebrow: "GUARANTEED RETURNS",
        heading: "Multi-Year Guaranteed Annuities",
        body: "Experience guaranteed returns and secure retirement income with a Multi-Year Guaranteed Annuity from Oceanview.",
        links: [
          { label: "Harbourview", href: "#harbourview", desc: "The Harbourview Multi-Year Guaranteed Annuity offers clients a guaranteed premium, guaranteed yield, and the benefits of tax deferral." },
          { label: "Sky Harbourview", href: "#sky-harbourview", desc: "The Sky Harbourview Multi-Year Guaranteed Annuity offers clients a guaranteed premium, guaranteed yield, as well as the benefits of tax-deferred growth and a death benefit for your beneficiaries." },
        ],
      },
      {
        label: "Fixed Indexed Annuity",
        eyebrow: "INDEXED GROWTH",
        heading: "Fixed Indexed Annuity",
        body: "Asset protection against market volatility with growth potential from market gains.",
        links: [
          { label: "Harbourview", href: "#fia-harbourview" },
          { label: "Fixed Interest", href: "#fixed-interest" },
          { label: "CapLock", href: "#caplock" },
        ],
      },
    ],
  },
  "Client Resources": {
    type: "simple",
    dropAlign: "right",
    links: [
      { label: "Case Studies", href: "#case-studies" },
      { label: "Downloads", href: "#downloads" },
      { label: "Glossary", href: "#glossary" },
      { label: "Rates", href: "#rates" },
      { label: "How Oceanview MYGAs Compare", href: "#compare" },
    ],
  },
  Insights: {
    type: "simple",
    dropAlign: "right",
    links: [
      { label: "Retirement Risk Series", href: "#retirement-risk" },
      { label: "Life Events Series", href: "#life-events" },
      { label: "White Papers", href: "#white-papers" },
    ],
  },
};

// ─── STYLES ───────────────────────────────────────────────────────────────────
const S = {
  ticker: {
    background: "var(--ov-surface-tint)", height: 32,
    display: "flex", alignItems: "center", justifyContent: "center",
    overflow: "hidden", fontSize: 13, fontFamily: "var(--ov-ff-body)",
  },
  tickerInner: { display: "flex", gap: 36, alignItems: "center", whiteSpace: "nowrap" },
  tick: { display: "inline-flex", gap: 8, alignItems: "center", color: "var(--ov-grey-800)" },
  tickLbl: { fontWeight: 500 },
  tickVal: { fontVariantNumeric: "tabular-nums" },
  up:   { color: "var(--ov-success)", fontWeight: 600 },
  down: { color: "var(--ov-danger)",  fontWeight: 600 },

  bar:   { background: "var(--ov-navy-500)", height: 64, display: "flex", alignItems: "center" },
  inner: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" },

  logo: {
    display: "inline-flex", alignItems: "center", gap: 10, color: "#fff",
    fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 22,
    letterSpacing: ".005em", cursor: "pointer",
  },
  navGroup: { display: "flex", alignItems: "center", gap: 4 },
  navBtn: {
    padding: "8px 14px", borderRadius: 4, cursor: "pointer",
    color: "#fff", background: "none", border: 0,
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13,
    letterSpacing: ".10em", transition: "background .15s ease", whiteSpace: "nowrap",
  },
  audChip: {
    padding: "8px 14px", borderRadius: 4,
    background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)",
    color: "#fff", marginLeft: 6, cursor: "pointer",
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13, letterSpacing: ".10em",
  },

  dropPanel: {
    background: "#fff", borderRadius: 12,
    boxShadow: "0 24px 60px 0 rgba(13,31,78,0.12)",
    overflow: "hidden", display: "flex",
  },
  sidebar: {
    width: 220, flexShrink: 0, background: "#F0EEE9",
    borderRight: "1px solid rgba(13,31,78,0.12)",
    display: "flex", flexDirection: "column",
  },
  sideBtn: {
    height: 52, width: "100%", flexShrink: 0,
    display: "flex", alignItems: "flex-start",
    paddingTop: 15.5, paddingLeft: 14, paddingRight: 12,
    background: "none", border: "none", borderLeft: "2px solid transparent",
    cursor: "pointer", textAlign: "left",
  },
  sideBtnInner: {
    display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%",
  },
  sideBtnLabel: {
    fontFamily: "var(--ov-ff-sans)", fontWeight: 500,
    fontSize: 14, color: "var(--ov-navy-900)", lineHeight: "21px",
    flex: 1, minWidth: 0,
  },

  content: {
    flex: 1, padding: 30, display: "flex", flexDirection: "column", minWidth: 420,
  },
  contentTop: { display: "flex", flexDirection: "column", gap: 24 },
  eyebrow: {
    fontFamily: "var(--ov-ff-sans)", fontWeight: 500,
    fontSize: 10, color: "#2494C1", letterSpacing: "1.2px", textTransform: "uppercase",
  },
  panelHeading: {
    fontFamily: "var(--ov-ff-serif)", fontWeight: 600,
    fontSize: 22, color: "var(--ov-navy-900)", lineHeight: "27.5px", margin: 0,
  },
  panelBody: {
    fontFamily: "var(--ov-ff-sans)", fontWeight: 400,
    fontSize: 14, color: "#595959", lineHeight: "23.1px", margin: 0,
  },
  divider: { height: 1, background: "rgba(13,31,78,0.12)", flexShrink: 0 },
  tags: { display: "flex", gap: 6, flexWrap: "wrap" },
  tag: {
    background: "rgba(13,31,78,0.06)", borderRadius: 99, padding: "3px 9px",
    fontFamily: "var(--ov-ff-sans)", fontWeight: 500,
    fontSize: 11, color: "#1A3070", lineHeight: "16.5px", whiteSpace: "nowrap",
  },
  ctaLink: {
    display: "inline-flex", alignItems: "center", gap: 4,
    fontFamily: "var(--ov-ff-sans)", fontWeight: 500,
    fontSize: 13, color: "var(--ov-navy-900)", lineHeight: "19.5px", textDecoration: "none",
  },
};

// ─── DROPDOWN SUBCOMPONENTS ────────────────────────────────────────────────────

function ProductLink({ link, onClose }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={link.href}
      onClick={onClose}
      style={{
        display: "flex", flexDirection: "column", textDecoration: "none",
        borderLeft: hov ? "1px solid #70BABF" : "2px solid transparent",
        paddingLeft: hov ? 20 : 0,
        transition: "padding .12s ease, border-color .12s ease",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: link.desc ? 12 : 0 }}>
        <span style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 500, fontSize: 15, color: hov ? "#70BABF" : "#1A3070", lineHeight: "21px" }}>
          {link.label}
        </span>
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: hov ? "#70BABF" : "#1A3070", lineHeight: "22.5px" }}>→</span>
      </div>
      {link.desc && (
        <p style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 400, fontSize: 13, color: "var(--ov-grey-600)", lineHeight: "21.45px", margin: 0 }}>
          {link.desc}
        </p>
      )}
    </a>
  );
}

function SimpleLink({ link, onClose }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={link.href}
      onClick={onClose}
      style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        fontFamily: "var(--ov-ff-sans)", fontWeight: 500, fontSize: 15,
        color: hov ? "#70BABF" : "#1A3070", lineHeight: "21px",
        textDecoration: "none", cursor: "pointer",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <span>{link.label}</span>
      <span style={{ fontFamily: "Inter, sans-serif" }}>→</span>
    </a>
  );
}

function TabbedContent({ tab, onClose }) {
  const hasCta   = !!tab.cta;
  const hasLinks = tab.links && tab.links.length > 0;
  return (
    <div style={{ ...S.content, justifyContent: hasCta ? "space-between" : "center" }}>
      <div style={S.contentTop}>
        <span style={S.eyebrow}>{tab.eyebrow}</span>
        <h3 style={S.panelHeading}>{tab.heading}</h3>
        <p style={S.panelBody}>{tab.body}</p>
        {tab.tags && (
          <div style={S.tags}>
            {tab.tags.map(t => <span key={t} style={S.tag}>{t}</span>)}
          </div>
        )}
        {hasLinks && tab.links.map(link => (
          <React.Fragment key={link.label}>
            <div style={S.divider} />
            <ProductLink link={link} onClose={onClose} />
          </React.Fragment>
        ))}
      </div>
      {hasCta && (
        <a href={tab.cta.href} onClick={onClose} style={S.ctaLink}>{tab.cta.label} →</a>
      )}
    </div>
  );
}

function TabbedDropdown({ config, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <div style={S.dropPanel}>
      <div style={S.sidebar}>
        {config.tabs.map((t, i) => {
          const active = i === activeIdx;
          return (
            <button
              key={t.label}
              style={{ ...S.sideBtn, background: active ? "#fff" : "none" }}
              onMouseEnter={() => setActiveIdx(i)}
            >
              <div style={S.sideBtnInner}>
                <span style={S.sideBtnLabel}>{t.label}</span>
                <span style={{
                  fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: "21px",
                  color: active ? "#2494C1" : "var(--ov-navy-900)",
                  opacity: active ? 1 : 0.5,
                }}>→</span>
              </div>
            </button>
          );
        })}
      </div>
      <TabbedContent tab={config.tabs[activeIdx]} onClose={onClose} />
    </div>
  );
}

function SimpleDropdown({ config, onClose }) {
  return (
    <div style={{ ...S.dropPanel, minWidth: 420 }}>
      <div style={{ padding: 30, display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
        {config.links.map((link, i) => (
          <React.Fragment key={link.label}>
            {i > 0 && <div style={S.divider} />}
            <SimpleLink link={link} onClose={onClose} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function NavItem({ name, config, onNav, active }) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);

  const keepOpen  = () => { clearTimeout(timer.current); setOpen(true); };
  const schedClose = () => { timer.current = setTimeout(() => setOpen(false), 200); };

  if (!config) {
    return (
      <button
        style={S.navBtn}
        onClick={() => onNav && onNav(name)}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.08)"}
        onMouseLeave={e => e.currentTarget.style.background = "none"}
      >{name}</button>
    );
  }

  const align = config.dropAlign === "right" ? { right: 0 } : { left: 0 };
  // paddingTop bridges the visual gap so mouse stays in the hit area
  const dropWrapStyle = { position: "absolute", top: "100%", paddingTop: 8, zIndex: 200, ...align };

  return (
    <div style={{ position: "relative" }}>
      <button
        style={{
          ...S.navBtn,
          background: open ? "rgba(255,255,255,.08)" : "none",
          borderBottom: active === name ? "2px solid #70BABF" : "2px solid transparent",
        }}
        onMouseEnter={keepOpen}
        onMouseLeave={schedClose}
      >{name}</button>
      {open && (
        <div style={dropWrapStyle} onMouseEnter={keepOpen} onMouseLeave={schedClose}>
          {config.type === "tabbed"
            ? <TabbedDropdown config={config} onClose={() => setOpen(false)} />
            : <SimpleDropdown config={config} onClose={() => setOpen(false)} />
          }
        </div>
      )}
    </div>
  );
}

// ─── TICKER ───────────────────────────────────────────────────────────────────
function Ticker() {
  const items = [
    ["S&P 500",        "6840",  "+0.06%", true],
    ["NASDAQ 100",    "24753",  "+0.06%", true],
    ["Russell 2000",   "1759",  "+1.34%", true],
    ["VIX",              "21",  "+2.27%", true],
    ["10Y US Treasury", "4.05", "-0.17%", false],
  ];
  return (
    <div style={S.ticker}>
      <div style={S.tickerInner}>
        {items.map(([k, v, c, up]) => (
          <span key={k} style={S.tick}>
            <span style={S.tickLbl}>{k}</span>
            <span style={S.tickVal}>{v}</span>
            <span style={up ? S.up : S.down}>{c}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <span style={S.logo}>
      <img src="assets/oceanview-logo-white.png" alt="Oceanview" style={{ height: 32, width: "auto" }}
        onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "inline"; }}
      />
      <span style={{ display: "none" }}>Oceanview</span>
    </span>
  );
}

// ─── HEADER ───────────────────────────────────────────────────────────────────
const NAV_ITEMS = ["About", "Products", "Client Resources", "Insights", "Blog"];
const AUD_ITEMS = ["Individuals", "Professionals"];

function Header({ active = "Home", onNav }) {
  return (
    <header style={{ position: "relative", zIndex: 100 }}>
      <Ticker />
      <div style={S.bar}>
        <div className="ov-container" style={S.inner}>
          <span onClick={() => onNav && onNav("Home")} style={{ cursor: "pointer" }}>
            <Logo />
          </span>
          <div style={S.navGroup}>
            {NAV_ITEMS.map(n => (
              <NavItem key={n} name={n} config={NAV_DROPDOWNS[n] || null} onNav={onNav} active={active} />
            ))}
            {AUD_ITEMS.map(a => (
              <button key={a} style={S.audChip} onClick={() => onNav && onNav(a)}>{a}</button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Header, Ticker, Logo });
