// AboutBlock.jsx — Split layout: photo left, copy right
const aboutStyles = {
  section: { padding: "0", background: "#fff" },
  grid: { display: "flex", gap: 80, alignItems: "center" },
  photoWrap: {
    borderRadius: 16,
    overflow: "hidden",
    width: "clamp(260px, 30vw, 420px)",
    aspectRatio: "1 / 1",
    flexShrink: 0,
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
            <img style={aboutStyles.photo} src="assets/couple-walking.png" alt="" />
          </div>
          <div>
            <h2 style={aboutStyles.h2}>
              About Oceanview Life and Annuity Company
            </h2>
            <p style={aboutStyles.body}>
              Oceanview Life and Annuity Company stands as a reliable source of top-tier fixed and fixed-indexed annuity offerings. Our paramount objective is to offer a sense of security and financial stability to both our agents, who recommend our annuities to their clients, and our policyholders as they strive to achieve their financial objectives through our annuity products.
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
