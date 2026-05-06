// AboutBlock.jsx — Split layout: photo left, copy right
const aboutStyles = {
  section: { padding: "104px 0", background: "var(--ov-surface-tint-2)" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 80, alignItems: "center" },
  photoWrap: {
    borderRadius: 12, overflow: "hidden",
    aspectRatio: "4/5", boxShadow: "var(--ov-shadow-card)",
  },
  photo: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  eyebrow: {
    fontFamily: "var(--ov-ff-eyebrow)", fontWeight: 600, fontSize: 13,
    letterSpacing: ".12em", textTransform: "uppercase",
    color: "var(--ov-navy-600)", marginBottom: 22,
  },
  h2: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.08,
    color: "var(--ov-navy-900)", letterSpacing: "-0.01em",
    margin: "0 0 24px", textWrap: "balance",
  },
  body: {
    fontSize: 17, lineHeight: 1.7, color: "var(--ov-grey-600)",
    margin: "0 0 18px", maxWidth: "52ch",
  },
  ctas: { display: "flex", gap: 14, marginTop: 28 },
};

function AboutBlock() {
  return (
    <section style={aboutStyles.section}>
      <div className="ov-container">
        <div style={aboutStyles.grid}>
          <div style={aboutStyles.photoWrap}>
            <img style={aboutStyles.photo} src="assets/older-couple-2.png" alt="" />
          </div>
          <div>
            <div style={aboutStyles.eyebrow}>About Oceanview</div>
            <h2 style={aboutStyles.h2}>
              A reliable source of top-tier fixed and fixed-indexed annuities.
            </h2>
            <p style={aboutStyles.body}>
              Oceanview Life and Annuity Company stands as a reliable source of top-tier fixed and
              fixed-indexed annuity offerings. Our paramount objective is to offer a sense of security
              and financial stability to both our agents and our policyholders.
            </p>
            <p style={aboutStyles.body}>
              Backed by a long-term, conservative investment approach, we focus on durable returns and
              service that goes beyond expectations.
            </p>
            <div style={aboutStyles.ctas}>
              <PillGhost>More About Us</PillGhost>
              <TextLink>Read our 2024 Annual Report</TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AboutBlock });
