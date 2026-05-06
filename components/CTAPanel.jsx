// CTAPanel.jsx — Soft sky tint "Get Started with Oceanview" panel
const ctaPanelStyles = {
  section: { padding: "96px 0", background: "var(--ov-bg)" },
  panel: {
    background: "var(--ov-surface-tint)", borderRadius: 16,
    padding: "76px 64px", textAlign: "center",
  },
  eyebrow: {
    fontFamily: "var(--ov-ff-eyebrow)", fontWeight: 600, fontSize: 13,
    letterSpacing: ".12em", textTransform: "uppercase",
    color: "var(--ov-navy-600)", marginBottom: 18,
  },
  h2: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(34px, 4.4vw, 60px)", lineHeight: 1.05,
    color: "var(--ov-navy-900)", margin: "0 auto 36px",
    maxWidth: "20ch", textWrap: "balance",
  },
  ctas: { display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" },
};

function CTAPanel() {
  return (
    <section style={ctaPanelStyles.section}>
      <div className="ov-container">
        <div style={ctaPanelStyles.panel}>
          <div style={ctaPanelStyles.eyebrow}>Get started</div>
          <h2 style={ctaPanelStyles.h2}>Take the next step with a company you can trust.</h2>
          <div style={ctaPanelStyles.ctas}>
            <PillMint hero>Get Started</PillMint>
            <PillGhost>Find a Professional</PillGhost>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CTAPanel });
