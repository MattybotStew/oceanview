// Header.jsx — Responsive header: desktop mega-dropdown + mobile drawer
import { useState, useRef, useEffect, Fragment } from 'react'

// ─── CHEVRON ──────────────────────────────────────────────────────────────────
function Chevron({ direction = "down", size = 16, color = "#FFF" }) {
  const paths = {
    down: "M4 6L8 10L12 6",
    up:   "M4 10L8 6L12 10",
    right:"M6 4L10 8L6 12",
    left: "M10 4L6 8L10 12",
  };
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none"
      style={{ marginLeft: 4, flexShrink: 0 }}>
      <path d={paths[direction]} stroke={color} strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── NAV DATA ─────────────────────────────────────────────────────────────────
const NAV_DROPDOWNS = {
  About: {
    type: "tabbed",
    tabs: [
      { label: "Our Story",          eyebrow: "SINCE 1987",       heading: "A legacy built on trust",       body: "Founded with a simple mission — make retirement planning accessible and clear for every American family.", tags: ["30+ Years","A-Rated","Family-Owned"], cta: { label: "Read our story",  href: "#our-story"  } },
      { label: "Leadership",          eyebrow: "OUR PEOPLE",       heading: "Experienced leadership",        body: "Our executive team brings decades of insurance and financial services expertise to guide Oceanview's vision.", cta: { label: "Meet the team",   href: "#leadership" } },
      { label: "Board of Directors",  eyebrow: "GOVERNANCE",       heading: "Independent oversight",         body: "Deep expertise in finance, risk management, and regulatory compliance ensures sound decision-making at every level.", cta: { label: "View the board",  href: "#board"      } },
      { label: "Newsroom",            eyebrow: "LATEST UPDATES",   heading: "News & announcements",          body: "Press releases, media coverage, and company milestones — all in one place.", cta: { label: "Visit newsroom",  href: "#newsroom"   } },
      { label: "Careers",             eyebrow: "JOIN US",          heading: "Build your future here",        body: "Join a team of talented professionals dedicated to helping Americans achieve financial security in retirement.", cta: { label: "See open roles",  href: "#careers"    } },
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
          { label: "Harbourview",      href: "#harbourview",     desc: "The Harbourview MYGA offers clients a guaranteed premium, guaranteed yield, and the benefits of tax deferral." },
          { label: "Sky Harbourview",  href: "#sky-harbourview", desc: "The Sky Harbourview MYGA offers guaranteed premium, guaranteed yield, tax-deferred growth, and a death benefit." },
        ],
      },
      {
        label: "Fixed Indexed Annuity",
        eyebrow: "INDEXED GROWTH",
        heading: "Fixed Indexed Annuity",
        body: "Asset protection against market volatility with growth potential from market gains.",
        links: [
          { label: "Harbourview",                  href: "#fia-harbourview" },
          { label: "S&P 500 Crediting Strategy",   href: "#sp500"          },
          { label: "Nasdaq-100 Crediting Strategy",href: "#nasdaq"         },
          { label: "Russell 2000 Crediting Strategy",href:"#russell"       },
          { label: "Fixed Interest Strategy",      href: "#fixed-interest" },
          { label: "Oceanview CapLock",            href: "#caplock"        },
        ],
      },
    ],
  },
  "Client Resources": {
    type: "simple",
    dropAlign: "right",
    links: [
      { label: "Case Studies",               href: "#case-studies" },
      { label: "Downloads",                  href: "#downloads"    },
      { label: "Glossary",                   href: "#glossary"     },
      { label: "Rates",                      href: "#rates"        },
      { label: "How Oceanview MYGAs Compare",href: "#compare"      },
    ],
  },
  Insights: {
    type: "simple",
    dropAlign: "right",
    links: [
      { label: "Retirement Risk Series", href: "#retirement-risk" },
      { label: "Life Events Series",     href: "#life-events"     },
      { label: "White Papers",           href: "#white-papers"    },
    ],
  },
};

// ─── STYLES ───────────────────────────────────────────────────────────────────
const S = {
  bar: {
    background: "var(--ov-navy-500)",
    height: 72,
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 1400,
    margin: "0 auto",
    padding: "0 20px",
  },
  logo: {
    display: "inline-flex",
    alignItems: "center",
    color: "#fff",
    cursor: "pointer",
    flexShrink: 0,
  },
  logoImage: { width: 205, height: "auto", display: "block" },
  navGroup:  { display: "flex", alignItems: "center", gap: 8 },
  navBtn: {
    padding: "8px 16px",
    borderRadius: 6,
    cursor: "pointer",
    color: "#FFF",
    background: "none",
    border: "none",
    fontFamily: "PP Mori, var(--ov-ff-sans)",
    fontSize: 13.7,
    fontWeight: 400,
    lineHeight: "14px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    transition: "background 0.2s ease, color 0.2s ease",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  audChip: {
    display: "flex",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#FFF",
    marginLeft: 8,
    cursor: "pointer",
    fontFamily: "PP Mori, var(--ov-ff-sans)",
    fontSize: 13.7,
    fontWeight: 400,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    transition: "background 0.2s ease",
    whiteSpace: "nowrap",
  },
  dropPanel: {
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 24px 60px 0 rgba(13,31,78,0.12)",
    overflow: "hidden",
    display: "flex",
  },
  sidebar: {
    width: 220,
    flexShrink: 0,
    background: "#F0EEE9",
    borderRight: "1px solid rgba(13,31,78,0.12)",
    display: "flex",
    flexDirection: "column",
  },
  sideBtn: {
    minHeight: 52,
    height: "auto",
    width: "100%",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    padding: "12px 12px 12px 14px",
    background: "none",
    border: "none",
    borderLeft: "2px solid transparent",
    cursor: "pointer",
    textAlign: "left",
    transition: "background 0.2s ease",
  },
  sideBtnInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  sideBtnLabel: {
    fontFamily: "var(--ov-ff-sans)",
    fontWeight: 500,
    fontSize: 14,
    color: "var(--ov-navy-900)",
    lineHeight: "21px",
    flex: 1,
    minWidth: 0,
  },
  content: {
    flex: 1,
    padding: 30,
    display: "flex",
    flexDirection: "column",
    minWidth: 420,
  },
  contentTop: { display: "flex", flexDirection: "column", gap: 24 },
  eyebrow: {
    fontFamily: "var(--ov-ff-sans)",
    fontWeight: 500,
    fontSize: 10,
    color: "var(--ov-navy-600)",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
  },
  panelHeading: {
    fontFamily: "var(--ov-ff-serif)",
    fontWeight: 600,
    fontSize: 22,
    color: "var(--ov-navy-900)",
    lineHeight: "27.5px",
    margin: 0,
  },
  panelBody: {
    fontFamily: "var(--ov-ff-sans)",
    fontWeight: 400,
    fontSize: 14,
    color: "#595959",
    lineHeight: "23.1px",
    margin: 0,
  },
  divider: { height: 1, background: "rgba(13,31,78,0.12)", flexShrink: 0 },
  tags: { display: "flex", gap: 6, flexWrap: "wrap" },
  tag: {
    background: "rgba(13,31,78,0.06)",
    borderRadius: 99,
    padding: "3px 9px",
    fontFamily: "var(--ov-ff-sans)",
    fontWeight: 500,
    fontSize: 11,
    color: "#1A3070",
    lineHeight: "16.5px",
    whiteSpace: "nowrap",
  },
  ctaLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    fontFamily: "var(--ov-ff-sans)",
    fontWeight: 500,
    fontSize: 13,
    color: "var(--ov-navy-900)",
    lineHeight: "19.5px",
    textDecoration: "none",
  },
};

// ─── DESKTOP DROPDOWN COMPONENTS ─────────────────────────────────────────────

function ProductLink({ link, onClose }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={link.href} onClick={onClose} style={{
      display: "flex", flexDirection: "column", textDecoration: "none",
      borderLeft: hov ? "2px solid #71BABF" : "2px solid transparent",
      paddingLeft: hov ? 12 : 0,
      transition: "padding 0.2s ease, border-color 0.2s ease",
    }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: link.desc ? 12 : 0 }}>
        <span style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 500, fontSize: 15, color: hov ? "#1976A0" : "#1A3070", lineHeight: "21px", transition: "color 0.2s ease" }}>
          {link.label}
        </span>
        <span style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 15, color: hov ? "#1976A0" : "#1A3070", transition: "color 0.2s ease" }}>→</span>
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
    <a href={link.href} onClick={onClose} style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      fontFamily: "var(--ov-ff-sans)", fontWeight: 500, fontSize: 15,
      color: hov ? "#1976A0" : "#1A3070", lineHeight: "21px",
      textDecoration: "none", cursor: "pointer",
      transition: "color 0.2s ease",
    }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <span>{link.label}</span>
      <span style={{ fontFamily: "var(--ov-ff-sans)" }}>→</span>
    </a>
  );
}

function TabbedContent({ tab, onClose }) {
  return (
    <div style={{ ...S.content, justifyContent: tab.cta ? "space-between" : "flex-start" }}>
      <div style={S.contentTop}>
        <span style={S.eyebrow}>{tab.eyebrow}</span>
        <h3 style={S.panelHeading}>{tab.heading}</h3>
        <p style={S.panelBody}>{tab.body}</p>
        {tab.tags && <div style={S.tags}>{tab.tags.map(t => <span key={t} style={S.tag}>{t}</span>)}</div>}
        {tab.links && tab.links.map(link => (
          <Fragment key={link.label}>
            <div style={S.divider}/>
            <ProductLink link={link} onClose={onClose}/>
          </Fragment>
        ))}
      </div>
      {tab.cta && <a href={tab.cta.href} onClick={onClose} style={S.ctaLink}>{tab.cta.label} →</a>}
    </div>
  );
}

function TabbedDropdown({ config, onClose, onEscape }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') { e.preventDefault(); onEscape?.(); return; }
    // ↑/↓ navigate sidebar tab buttons
    const sideEl = e.currentTarget.querySelector('[data-sidebar]');
    if (!sideEl) return;
    const btns = [...sideEl.querySelectorAll('button')];
    const idx  = btns.indexOf(document.activeElement);
    if (idx === -1) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); btns[Math.min(idx + 1, btns.length - 1)]?.focus(); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); btns[Math.max(idx - 1, 0)]?.focus(); }
  };

  return (
    <div style={S.dropPanel} onKeyDown={handleKeyDown} tabIndex={-1}>
      <div style={S.sidebar} data-sidebar>
        {config.tabs.map((t, i) => {
          const active = i === activeIdx;
          return (
            <button key={t.label} style={{ ...S.sideBtn, background: active ? "#fff" : "none" }}
              onMouseEnter={() => setActiveIdx(i)}
              onFocus={() => setActiveIdx(i)}
              onClick={() => {
                if (t.cta && t.cta.href) {
                  window.location.hash = t.cta.href.replace("#", "");
                  window.scrollTo({ top: 0, behavior: "instant" });
                  onClose();
                }
              }}>
              <div style={S.sideBtnInner}>
                <span style={S.sideBtnLabel}>{t.label}</span>
                <span style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 14, color: active ? "var(--ov-navy-600)" : "var(--ov-navy-900)", opacity: active ? 1 : 0.5, transition: "color 0.2s ease, opacity 0.2s ease" }}>→</span>
              </div>
            </button>
          );
        })}
      </div>
      <TabbedContent tab={config.tabs[activeIdx]} onClose={onClose}/>
    </div>
  );
}

function SimpleDropdown({ config, onClose, onEscape }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') { e.preventDefault(); onEscape?.(); return; }
    const links = [...e.currentTarget.querySelectorAll('a')];
    const idx   = links.indexOf(document.activeElement);
    if (idx === -1) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); links[Math.min(idx + 1, links.length - 1)]?.focus(); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); links[Math.max(idx - 1, 0)]?.focus(); }
  };

  return (
    <div style={{ ...S.dropPanel, minWidth: 420 }} onKeyDown={handleKeyDown} tabIndex={-1}>
      <div style={{ padding: 30, display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
        {config.links.map((link, i) => (
          <Fragment key={link.label}>
            {i > 0 && <div style={S.divider}/>}
            <SimpleLink link={link} onClose={onClose}/>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function NavItem({ name, config, onNav, active }) {
  const [open, setOpen]           = useState(false);
  const [focusPanel, setFocusPanel] = useState(false);
  const timer           = useRef(null);
  const triggerRef      = useRef(null);
  const panelRef        = useRef(null);
  const hasDropdown     = !!config;
  const keepOpen        = () => { clearTimeout(timer.current); setOpen(true); };
  const schedClose      = () => { timer.current = setTimeout(() => setOpen(false), 200); };
  const closeAndRefocus = () => { setOpen(false); triggerRef.current?.focus(); };

  // After ArrowDown opens the panel, focus its first interactive element
  useEffect(() => {
    if (open && focusPanel) {
      const first = panelRef.current?.querySelector('button, a[href]');
      first?.focus();
      setFocusPanel(false);
    }
  }, [open, focusPanel]);

  const handleTriggerKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown':
        if (hasDropdown) {
          e.preventDefault();
          if (!open) { setOpen(true); setFocusPanel(true); }
        }
        break;
      case 'ArrowUp':
        if (hasDropdown && open) { e.preventDefault(); closeAndRefocus(); }
        break;
      case 'Escape':
        if (open) { e.preventDefault(); closeAndRefocus(); }
        break;
      case 'ArrowRight':
      case 'ArrowLeft': {
        e.preventDefault();
        const group = triggerRef.current?.closest('.ov-nav-group');
        const items = [...(group?.querySelectorAll('button.ov-nav-btn, a.ov-nav-btn, a.ov-aud-chip') ?? [])];
        const i = items.indexOf(triggerRef.current);
        if (i === -1) break;
        const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + items.length) % items.length;
        items[next]?.focus();
        break;
      }
    }
  };

  if (!hasDropdown) {
    return (
      <a ref={triggerRef} className="ov-nav-btn" href={`#${name.toLowerCase()}`}
        style={{ ...S.navBtn, textDecoration: "none" }}
        onClick={(e) => { e.preventDefault(); onNav && onNav(name); }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
        onMouseLeave={e => e.currentTarget.style.background = "none"}
        onFocus={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
        onBlur={e => e.currentTarget.style.background = "none"}
        onKeyDown={handleTriggerKeyDown}>
        {name}
      </a>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <button ref={triggerRef} className="ov-nav-btn"
        style={{ ...S.navBtn, background: open ? "rgba(255,255,255,0.1)" : "none", borderBottom: active === name ? "2px solid #71BABF" : "2px solid transparent" }}
        aria-haspopup="true"
        aria-expanded={open}
        onMouseEnter={keepOpen} onMouseLeave={schedClose}
        onClick={() => { onNav && onNav(name); setOpen(false); }}
        onKeyDown={handleTriggerKeyDown}>
        {name}
        <Chevron direction={open ? "up" : "down"} color="#FFF"/>
      </button>
      {open && (
        <div ref={panelRef}
          style={{ position: "absolute", top: "100%", paddingTop: 12, zIndex: 200, left: "50%", transform: "translateX(-50%)" }}
          onMouseEnter={keepOpen} onMouseLeave={schedClose}>
          {config.type === "tabbed"
            ? <TabbedDropdown config={config} onClose={() => setOpen(false)} onEscape={closeAndRefocus}/>
            : <SimpleDropdown config={config} onClose={() => setOpen(false)} onEscape={closeAndRefocus}/>}
        </div>
      )}
    </div>
  );
}

// ─── MOBILE NAV COMPONENTS ────────────────────────────────────────────────────

function MobileNavContent({ config, onClose }) {
  if (!config) return null;

  const itemStyle = {
    display: "block",
    padding: "13px 20px 13px 44px",
    fontFamily: "var(--ov-ff-sans)",
    fontSize: 15,
    fontWeight: 400,
    color: "var(--ov-navy-900)",
    textDecoration: "none",
  };

  if (config.type === "simple") {
    return (
      <div style={{ paddingBottom: 8 }}>
        {config.links.map(link => (
          <a key={link.label} href={link.href} onClick={onClose} style={itemStyle}>{link.label}</a>
        ))}
      </div>
    );
  }

  if (config.type === "tabbed") {
    const hasSubLinks = config.tabs.some(t => t.links && t.links.length > 0);

    if (!hasSubLinks) {
      return (
        <div style={{ paddingBottom: 8 }}>
          {config.tabs.map(tab => (
            <a key={tab.label} href={tab.cta ? tab.cta.href : "#"} onClick={onClose} style={itemStyle}>
              {tab.label}
            </a>
          ))}
        </div>
      );
    }

    return (
      <div style={{ paddingBottom: 8 }}>
        {config.tabs.map((tab, i) => (
          <div key={tab.label}>
            {i > 0 && <div style={{ height: 1, background: "rgba(13,31,78,0.08)", margin: "6px 20px 6px 44px" }}/>}
            <div style={{ padding: "10px 20px 4px 44px", fontFamily: "var(--ov-ff-sans)", fontSize: 10, fontWeight: 600, color: "var(--ov-navy-600)", letterSpacing: "1.2px", textTransform: "uppercase" }}>
              {tab.label}
            </div>
            {tab.links.map(link => (
              <a key={link.label} href={link.href} onClick={onClose} style={itemStyle}>{link.label}</a>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return null;
}

function MobileNavItem({ name, config, expanded, onToggle, onClose, onNav }) {
  const rowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "17px 20px",
    background: expanded ? "#F0EEE9" : "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "var(--ov-ff-sans)",
    fontSize: 13,
    fontWeight: 600,
    color: "var(--ov-navy-900)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    textAlign: "left",
  };

  if (!config) {
    return <button style={rowStyle} onClick={() => { onNav && onNav(name); onClose(); }}>{name}</button>;
  }

  return (
    <div>
      <button style={rowStyle} onClick={onToggle}>
        <span>{name}</span>
        <Chevron direction={expanded ? "up" : "down"} color="#233D7C" size={16}/>
      </button>
      <div style={{ overflow: "hidden", maxHeight: expanded ? 900 : 0, transition: "max-height 0.3s ease" }}>
        <MobileNavContent config={config} onClose={onClose}/>
      </div>
    </div>
  );
}

// ─── LOGO ─────────────────────────────────────────────────────────────────────
export function Logo({ dark = false }) {
  return (
    <div style={S.logo}>
      <img
        src="assets/oceanview-logo-white.png"
        alt="Oceanview"
        style={{ ...S.logoImage, filter: dark ? "brightness(0)" : "none" }}
        onError={e => { e.target.style.display = "none"; e.target.parentElement.innerText = "Oceanview"; }}
      />
    </div>
  );
}

// ─── HEADER ───────────────────────────────────────────────────────────────────
const NAV_ITEMS = ["About", "Products", "Client Resources", "Insights", "Blog"];
const AUD_ITEMS = ["Individuals", "Professionals"];

export default function Header({ active = "Home", onNav }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);
  const toggleItem  = name => setMobileExpanded(prev => prev === name ? null : name);

  return (
    <>
    <a href="#main-content" className="ov-skip-link">Skip to main content</a>
    <header style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <div style={S.bar}>
        <div style={S.inner}>
          <div onClick={() => onNav && onNav("Home")} style={{ cursor: "pointer" }}>
            <Logo/>
          </div>

          {/* Desktop nav — hidden on mobile via .ov-desktop-nav CSS class */}
          <nav className="ov-desktop-nav ov-nav-group" style={S.navGroup} aria-label="Main navigation">
            {NAV_ITEMS.map(n => (
              <NavItem key={n} name={n} config={NAV_DROPDOWNS[n] || null} onNav={onNav} active={active}/>
            ))}
            {AUD_ITEMS.map(a => (
              <a key={a} className="ov-aud-chip" href={`#${a.toLowerCase()}`} style={{ ...S.audChip, textDecoration: "none" }}
                onClick={(e) => { e.preventDefault(); onNav && onNav(a); }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
                onFocus={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
                onBlur={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>
                {a}
              </a>
            ))}
          </nav>

          {/* Hamburger — shown on mobile via .ov-hamburger CSS class */}
          <button className="ov-hamburger" onClick={() => setMobileOpen(true)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer">
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
              <rect width="24" height="2" rx="1" fill="#fff"/>
              <rect y="8" width="24" height="2" rx="1" fill="#fff"/>
              <rect y="16" width="24" height="2" rx="1" fill="#fff"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div onClick={closeMobile} style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 199,
        opacity: mobileOpen ? 1 : 0,
        pointerEvents: mobileOpen ? "auto" : "none",
        transition: "opacity 0.3s ease",
      }}/>

      {/* Drawer */}
      <div id="mobile-nav-drawer" style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: "min(320px, 88vw)",
        background: "#fff",
        zIndex: 200,
        transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease",
        display: "flex", flexDirection: "column",
        boxShadow: "-4px 0 32px rgba(0,0,0,0.18)",
      }}>
        {/* Drawer header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid rgba(13,31,78,0.08)", flexShrink: 0 }}>
          <div onClick={closeMobile} style={{ cursor: "pointer" }}>
            <Logo dark/>
          </div>
          <button onClick={closeMobile} aria-label="Close menu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, minWidth: 44, minHeight: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 3L17 17M17 3L3 17" stroke="#233D7C" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          {NAV_ITEMS.map((name, i) => (
            <Fragment key={name}>
              {i > 0 && <div style={{ height: 1, background: "rgba(13,31,78,0.06)", margin: "0 20px" }}/>}
              <MobileNavItem
                name={name}
                config={NAV_DROPDOWNS[name] || null}
                expanded={mobileExpanded === name}
                onToggle={() => toggleItem(name)}
                onClose={closeMobile}
                onNav={onNav}
              />
            </Fragment>
          ))}
        </div>

        {/* CTA pills */}
        <div style={{ padding: "16px 20px 24px", borderTop: "1px solid rgba(13,31,78,0.08)", display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
          {AUD_ITEMS.map(a => (
            <a key={a} href={`#${a.toLowerCase()}`}
              onClick={(e) => { e.preventDefault(); onNav && onNav(a); closeMobile(); }}
              style={{ display: "block", width: "100%", padding: "14px 20px", background: "#F0EEE9", borderRadius: 8, fontFamily: "var(--ov-ff-sans)", fontSize: 13, fontWeight: 600, color: "var(--ov-navy-900)", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center", textDecoration: "none" }}>
              {a}
            </a>
          ))}
        </div>
      </div>
    </header>
    </>
  );
}
