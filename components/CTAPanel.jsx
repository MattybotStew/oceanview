// CTAPanel.jsx — Soft sky tint "Get Started with Oceanview" panel

const ctaPanelStyles = {
  section: {
    background: "var(--ov-bg)",
  },
  panel: {
    background: "var(--ov-surface-tint)", 
    borderRadius: 16,
    padding: "76px 64px", 
    textAlign: "center",
  },
  eyebrow: {
    fontFamily: "var(--ov-ff-eyebrow)", 
    fontWeight: 600, 
    fontSize: 13,
    letterSpacing: ".12em", 
    textTransform: "uppercase",
    color: "var(--ov-navy-600)", 
    marginBottom: 18,
  },
  h2: {
    fontFamily: "var(--ov-ff-display)", 
    fontWeight: 400,
    fontSize: "clamp(34px, 4.4vw, 60px)", 
    lineHeight: 1.05,
    color: "var(--ov-navy-900)", 
    margin: "0 auto 24px",
    maxWidth: "20ch", 
    textWrap: "balance",
  },
  subtitle: {
    fontFamily: "var(--ov-ff-sans)",
    fontWeight: 400,
    fontSize: "clamp(18px, 2vw, 22px)",
    lineHeight: 1.4,
    color: "var(--ov-grey-600)",
    margin: "0 auto 40px",
    maxWidth: "52ch",
  },
  ctas: { 
    display: "flex", 
    gap: 16, 
    justifyContent: "center", 
    flexWrap: "wrap" 
  },
};

function CTAPanel() {
  return (
    <section style={ctaPanelStyles.section} className="ov-section">
      <div className="ov-container">
        <div style={ctaPanelStyles.panel}>
          <h2 style={ctaPanelStyles.h2}>
            Get Started with Oceanview Life and Annuity
          </h2>
          <p style={ctaPanelStyles.subtitle}>A Dedicated Partner for Financial Professionals.</p>
          <div style={ctaPanelStyles.ctas}>
            <PillNavy hero>Get Started</PillNavy>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CTAPanel });