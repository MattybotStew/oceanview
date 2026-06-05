// CTAPanel.jsx — Homepage closing CTA — dark navy, dual audience
import { PillMint, PillGhost } from './Buttons.jsx'

const S = {
  section: {
    background: "var(--ov-navy-1000)",
  },
  inner: {
    textAlign: "center",
    padding: "80px 40px",
    maxWidth: 720,
    margin: "0 auto",
  },
  eyebrow: {
    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
    marginBottom: 28,
  },
  eyebrowLine: { width: 18, height: 1, background: "rgba(112,186,191,.6)", flexShrink: 0 },
  eyebrowText: {
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10,
    letterSpacing: "1.4px", textTransform: "uppercase", color: "#70BABF",
  },
  h2: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(34px, 4.4vw, 58px)", lineHeight: 1.05,
    color: "#F2FCFF", margin: "0 auto 20px",
    letterSpacing: "-0.02em",
  },
  accent: { fontStyle: "italic", color: "#70BABF" },
  subtitle: {
    fontFamily: "var(--ov-ff-sans)", fontWeight: 400,
    fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.65,
    color: "rgba(242,252,255,.62)",
    margin: "0 auto 44px", maxWidth: "54ch",
  },
  ctas: { display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" },
};

export default function CTAPanel() {
  return (
    <section style={S.section} className="ov-section">
      <div className="ov-container">
        <div style={S.inner}>
          <div style={S.eyebrow}>
            <div style={S.eyebrowLine} />
            <span style={S.eyebrowText}>Get Started</span>
            <div style={S.eyebrowLine} />
          </div>
          <h2 style={S.h2}>
            Find the right solution{" "}
            <em style={S.accent}>for your clients.</em>
          </h2>
          <p style={S.subtitle}>
            Competitive guaranteed rates, principal protection, and a dedicated service team —
            all backed by an A (Excellent) A.M. Best rating.
          </p>
          <div style={S.ctas}>
            <PillMint hero>Explore Products</PillMint>
            <PillGhost light hero>Contact Sales</PillGhost>
          </div>
        </div>
      </div>
    </section>
  );
}
