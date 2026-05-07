// Buttons.jsx — Pill CTAs and text links
const buttonStyles = {
  baseHero: {
    border: 0, padding: "20px 36px", borderRadius: 200,
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 14.8,
    cursor: "pointer", letterSpacing: ".005em", transition: "opacity .15s ease",
  },
  baseSm: {
    border: 0, padding: "12px 28px", borderRadius: 200,
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 14,
    cursor: "pointer", transition: "opacity .15s ease",
  },
  ghost: {
    border: "1px solid var(--ov-navy-900)", padding: "11px 22px", borderRadius: 200,
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13,
    background: "#fff", color: "var(--ov-navy-900)", cursor: "pointer",
    transition: "background .15s ease, color .15s ease",
  },
  textLink: {
    fontFamily: "var(--ov-ff-body)", fontWeight: 600, fontSize: 15,
    color: "var(--ov-navy-600)", display: "inline-flex", alignItems: "center", gap: 8,
    background: "none", border: 0, padding: 0, cursor: "pointer",
  },
};

function PillMint({ children, hero, onClick, style }) {
  const base = hero ? buttonStyles.baseHero : buttonStyles.baseSm;
  return (
    <button onClick={onClick} style={{ ...base, background: "var(--ov-teal-400)", color: "var(--ov-navy-1000)", ...style }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >{children}</button>
  );
}

function PillNavy({ children, hero, onClick, style }) {
  const base = hero ? buttonStyles.baseHero : buttonStyles.baseSm;
  return (
    <button onClick={onClick} style={{ ...base, background: "var(--ov-navy-500)", color: "#F2FCFF", ...style }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >{children}</button>
  );
}

function PillGhost({ children, onClick, style }) {
  return (
    <button onClick={onClick} style={{ ...buttonStyles.ghost, ...style }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--ov-navy-900)"; e.currentTarget.style.color = "#fff"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "var(--ov-navy-900)"; }}
    >{children}</button>
  );
}

function TextLink({ children, onClick, color, style }) {
  return (
    <button onClick={onClick} style={{ ...buttonStyles.textLink, color: color || "var(--ov-navy-600)", ...style }}>
      <span>{children}</span>
      <span style={{ fontFamily: "var(--ov-ff-sans)", letterSpacing: "-0.01em" }}>→</span>
    </button>
  );
}

Object.assign(window, { PillMint, PillNavy, PillGhost, TextLink });
