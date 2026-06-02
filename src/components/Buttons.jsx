// Buttons.jsx — Pill CTAs and text links
const buttonStyles = {
  baseHero: {
    border: 0, padding: "20px 36px", borderRadius: 200,
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 14.8,
    cursor: "pointer", letterSpacing: ".005em",
    transition: "transform .18s ease, box-shadow .18s ease, background .2s ease, color .2s ease",
  },
  baseSm: {
    border: 0, padding: "12px 28px", borderRadius: 200,
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 14,
    cursor: "pointer",
    transition: "transform .18s ease, box-shadow .18s ease, background .2s ease, color .2s ease",
  },
  ghost: {
    border: "1px solid var(--ov-navy-900)", padding: "11px 22px", borderRadius: 200,
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13,
    background: "#fff", color: "var(--ov-navy-900)", cursor: "pointer",
    transition: "transform .18s ease, box-shadow .18s ease, background .2s ease, color .2s ease",
  },
  textLink: {
    fontFamily: "var(--ov-ff-body)", fontWeight: 600, fontSize: 15,
    color: "var(--ov-navy-600)", display: "inline-flex", alignItems: "center", gap: 8,
    background: "none", border: 0, padding: 0, cursor: "pointer",
  },
};

export function PillMint({ children, hero, onClick, style }) {
  const base = hero ? buttonStyles.baseHero : buttonStyles.baseSm;
  const isWhite = style?.background === "#fff";
  return (
    <button onClick={onClick} style={{ ...base, background: "var(--ov-teal-400)", color: "var(--ov-navy-1000)", ...style }}
      onMouseEnter={(e) => {
        const b = e.currentTarget;
        b.style.transform = "translateY(-2px)";
        if (isWhite) {
          b.style.background = "var(--ov-navy-900)";
          b.style.color = "#fff";
          b.style.boxShadow = "0 8px 32px rgba(255,255,255,0.45)";
        } else {
          b.style.boxShadow = "0 8px 24px rgba(107,186,191,0.5)";
        }
      }}
      onMouseLeave={(e) => {
        const b = e.currentTarget;
        b.style.transform = "";
        b.style.boxShadow = "";
        if (isWhite) {
          b.style.background = "#fff";
          b.style.color = "var(--ov-navy-900)";
        }
      }}
    >{children}</button>
  );
}

export function PillNavy({ children, hero, onClick, style }) {
  const base = hero ? buttonStyles.baseHero : buttonStyles.baseSm;
  return (
    <button onClick={onClick} style={{ ...base, background: "var(--ov-navy-500)", color: "#F2FCFF", ...style }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,255,255,0.45)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >{children}</button>
  );
}

export function PillGhost({ children, onClick, style }) {
  return (
    <button onClick={onClick} style={{ ...buttonStyles.ghost, ...style }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.background = "var(--ov-navy-900)";
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(13,31,78,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.color = "var(--ov-navy-900)";
        e.currentTarget.style.boxShadow = "";
      }}
    >{children}</button>
  );
}

export function TextLink({ children, onClick, color, style }) {
  return (
    <button onClick={onClick} style={{ ...buttonStyles.textLink, color: color || "var(--ov-navy-600)", ...style }}
      onMouseEnter={(e) => { e.currentTarget.querySelector("span:last-child").style.transform = "translateX(4px)"; }}
      onMouseLeave={(e) => { e.currentTarget.querySelector("span:last-child").style.transform = ""; }}
    >
      <span>{children}</span>
      <span style={{ fontFamily: "var(--ov-ff-sans)", letterSpacing: "-0.01em", display: "inline-block", transition: "transform .18s ease" }}>→</span>
    </button>
  );
}
