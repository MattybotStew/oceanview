// Hero.jsx — Full-bleed photo hero with gradient + serif h1 + dual CTA + wave shaper
const heroStyles = {
  wrap: {
    position: "relative", minHeight: 720,
    color: "#F2FCFF", overflow: "hidden", isolation: "isolate",
  },
  bg: {
    position: "absolute", inset: 0,
    backgroundImage: "url(assets/hero-couple.jpg)",
    backgroundSize: "cover", backgroundPosition: "center 30%", zIndex: -2,
  },
  scrim: {
    position: "absolute", inset: 0, zIndex: -1,
    background: [
      "linear-gradient(180deg, rgba(0,0,0,0) 42%, rgba(0,0,0,0.40) 80%, rgba(0,0,0,0.66) 100%)",
      "linear-gradient(180deg, rgba(35,61,124,0.10) 0%, rgba(35,61,124,0.30) 100%)",
    ].join(", "),
  },
  inner:   { paddingTop: 120, paddingBottom: 170 },
  eyebrow: {
    fontFamily: "var(--ov-ff-eyebrow)", fontWeight: 600, fontSize: 14,
    letterSpacing: ".10em", textTransform: "uppercase",
    marginBottom: 28, color: "#F2FCFF",
  },
  h1: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(40px, 6.6vw, 96px)", lineHeight: 1.0, letterSpacing: "-0.01em",
    maxWidth: "16ch", margin: "0 0 36px", color: "#F2FCFF", textWrap: "balance",
  },
  ctas:      { display: "flex", gap: 16, flexWrap: "wrap", marginTop: 18 },
  shaperWrap: { position: "absolute", left: 0, right: 0, bottom: -1, lineHeight: 0 },
};

function HeroShaper({ fill = "var(--ov-bg)" }) {
  return (
    <svg viewBox="0 0 2860 49" preserveAspectRatio="none" width="100%" height="64" style={{ display: "block" }}>
      <path fill={fill} d="M1653 45c-65.16 1.18-147.4 0.13-216.62-2.13-67.18-2.19-202.95-12.41-287.47-18.07-217.34-14.55-381.99-21.3-550.84-24.71-67.27-1.36-139.42-1.66-211.43-0.78-100.27 1.22-200.58 4.62-300.84 8.39-29.27 1.1-57.36 1.95-85.79 3.32V49h2860V31.04c-0.27-0.04-0.55-0.08-0.83-0.12-205.8-29.97-401.34-21.55-572.84-15.84-181.18 6.03-360.86 14.65-540.71 21.97-32.09 1.31-66.61 4.4-92.63 5.88V45z"/>
    </svg>
  );
}

function Hero({ onPrimary, onSecondary }) {
  return (
    <section style={heroStyles.wrap}>
      <div style={heroStyles.bg} />
      <div style={heroStyles.scrim} />
      <div className="ov-container" style={heroStyles.inner}>
        <div style={heroStyles.eyebrow}>Oceanview Life and Annuity</div>
        <h1 style={heroStyles.h1}>Plan today for the tomorrow you deserve</h1>
        <div style={heroStyles.ctas}>
          <PillMint hero onClick={onPrimary}>Get Started</PillMint>
          <PillNavy hero onClick={onSecondary}>View Products</PillNavy>
        </div>
      </div>
      <div style={heroStyles.shaperWrap}><HeroShaper /></div>
    </section>
  );
}

Object.assign(window, { Hero, HeroShaper });
