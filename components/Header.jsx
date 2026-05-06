// Header.jsx — Stock ticker + navy nav bar
const headerStyles = {
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
  nav: {
    display: "flex", alignItems: "center", gap: 4,
    fontFamily: "var(--ov-ff-eyebrow)", fontWeight: 600,
    fontSize: 11.5, letterSpacing: ".10em", textTransform: "uppercase", color: "#fff",
  },
  navItem: {
    padding: "8px 14px", borderRadius: 4, cursor: "pointer",
    color: "#fff", background: "none", border: 0, font: "inherit",
    transition: "background .15s ease",
  },
  audChip: {
    padding: "8px 14px", borderRadius: 4,
    background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)",
    color: "#fff", marginLeft: 6, cursor: "pointer", font: "inherit",
  },
};

function Ticker() {
  const items = [
    ["S&P 500",        "6840",  "+0.06%", true],
    ["NASDAQ 100",    "24753",  "+0.06%", true],
    ["Russell 2000",   "1759",  "+1.34%", true],
    ["VIX",              "21",  "+2.27%", true],
    ["10Y US Treasury", "4.05", "-0.17%", false],
  ];
  return (
    <div style={headerStyles.ticker}>
      <div style={headerStyles.tickerInner}>
        {items.map(([k, v, c, up]) => (
          <span key={k} style={headerStyles.tick}>
            <span style={headerStyles.tickLbl}>{k}</span>
            <span style={headerStyles.tickVal}>{v}</span>
            <span style={up ? headerStyles.up : headerStyles.down}>{c}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <span style={headerStyles.logo}>
      <img src="assets/oceanview-logo-white.png" alt="Oceanview" style={{ height: 32, width: "auto" }}
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "inline";
        }}
      />
      <span style={{ display: "none" }}>Oceanview</span>
    </span>
  );
}

function Header({ active = "Home", onNav }) {
  const navItems = ["About", "Products", "Client Resources", "Insights", "Blog"];
  const aud = ["Individuals", "Professionals"];
  return (
    <header>
      <Ticker />
      <div style={headerStyles.bar}>
        <div className="ov-container" style={headerStyles.inner}>
          <span onClick={() => onNav && onNav("Home")} style={{ cursor: "pointer" }}>
            <Logo />
          </span>
          <nav style={headerStyles.nav}>
            {navItems.map((n) => (
              <button key={n}
                style={{ ...headerStyles.navItem, opacity: active === n ? 1 : 0.85 }}
                onClick={() => onNav && onNav(n)}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
              >{n}</button>
            ))}
            {aud.map((a) => (
              <button key={a} style={headerStyles.audChip}
                onClick={() => onNav && onNav(a)}
              >{a}</button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Header, Ticker, Logo });
