// Hero.jsx — Rounded card hero matching 2026 Figma design (node 7139:269)
const heroStyles = {
  section: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0,
    display: "flex",
    justifyContent: "center",
  },
  card: {
    position: "relative",
    borderRadius: 30,
    overflow: "hidden",
    width: "100%",
    maxWidth: 1400,
  },
  bg: {
    position: "absolute", inset: 0,
    backgroundImage: "url(assets/hero-beach-couple.jpg)",
    backgroundSize: "cover", backgroundPosition: "center",
    zIndex: 0,
  },
  scrim: {
    position: "absolute", inset: 0, zIndex: 1,
    background: "linear-gradient(to right, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.28) 45%, rgba(0,0,0,0) 75%)",
  },
  h1: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 800,
    fontSize: 63, lineHeight: 1.0,
    color: "#F2FCFF", margin: 0,
  },
  subtitle: {
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600,
    fontSize: 20, lineHeight: 1.4,
    color: "#F2FCFF", margin: 0,
  },
  ctas: { display: "flex", gap: 21 },
};

function Hero({ onPrimary, onSecondary }) {
  return (
    <section style={heroStyles.section}>
      <div style={heroStyles.card} className="ov-hero-card">
        <div style={heroStyles.bg} />
        <div style={heroStyles.scrim} />
        <div className="ov-hero-content">
          <h1 style={heroStyles.h1}>Plan today for the tomorrow you deserve</h1>
          <p style={heroStyles.subtitle}>Guaranteed interest, flexible options, and growth potential — with principal protection at every step.</p>
          <div style={heroStyles.ctas}>
            <PillMint hero onClick={onPrimary}>Get Started</PillMint>
            <PillNavy hero onClick={onSecondary}>View Products</PillNavy>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
