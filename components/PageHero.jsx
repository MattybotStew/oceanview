// PageHero.jsx — Shared inner-page hero: same rounded card, scrim + noise as homepage slider
const pageHeroStyles = {
  wrapper: {
    maxWidth: "var(--ov-container, 1600px)",
    margin: "0 auto",
    padding: "0 20px",
    marginBottom: 40,
  },
  section: {
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    borderRadius: 32,
    minHeight: 340,
    display: "flex",
    alignItems: "center",
    background: "var(--ov-navy-1000)",
  },
  shimmer: {
    position: "absolute", inset: 0,
    background: "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(113,186,191,0.15) 0%, transparent 70%)",
    zIndex: 0,
  },
  scrim: {
    position: "absolute", inset: 0,
    background: "linear-gradient(85deg, rgba(0,0,0,0.80) 2.63%, rgba(102,102,102,0.00) 65.98%)",
    zIndex: 1,
  },
  noise: {
    position: "absolute", inset: 0,
    backgroundImage: `url("assets/Noise.png")`,
    backgroundRepeat: "repeat",
    backgroundSize: "200px",
    opacity: 0.8,
    pointerEvents: "none",
    zIndex: 2,
  },
  content: {
    position: "relative", zIndex: 3,
    padding: "60px 40px",
  },
  eyebrow: {
    fontFamily: "var(--ov-ff-eyebrow)", fontWeight: 600, fontSize: 13,
    letterSpacing: ".12em", textTransform: "uppercase",
    color: "rgba(255,255,255,.72)", marginBottom: 14,
  },
  h1: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 800,
    fontSize: "clamp(28px, 8vw, 63px)", lineHeight: 1.1,
    color: "#F2FCFF", margin: 0, marginBottom: 16,
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  subtitle: {
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600,
    fontSize: "clamp(14px, 4vw, 20px)", lineHeight: 1.4,
    color: "#F2FCFF", margin: "0 0 32px",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  ctas: { display: "flex", gap: 12, flexWrap: "wrap" },
};

function PageHero({ image, eyebrow, title, subtitle, ctaPrimary, onPrimary, ctaSecondary, onSecondary }) {
  return (
    <div style={pageHeroStyles.wrapper}>
      <section style={pageHeroStyles.section}>
        <div style={pageHeroStyles.card}>
          {image
            ? <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
            : <div style={pageHeroStyles.shimmer} />
          }
          {image && <div style={pageHeroStyles.scrim} />}
          <div style={pageHeroStyles.noise} />
          <div style={pageHeroStyles.content}>
            {eyebrow && <div style={pageHeroStyles.eyebrow}>{eyebrow}</div>}
            <h1 style={{ ...pageHeroStyles.h1, marginBottom: subtitle || ctaPrimary || ctaSecondary ? 16 : 0 }}>{title}</h1>
            {subtitle && <p style={{ ...pageHeroStyles.subtitle, marginBottom: ctaPrimary || ctaSecondary ? 32 : 0 }}>{subtitle}</p>}
            {(ctaPrimary || ctaSecondary) && (
              <div style={pageHeroStyles.ctas}>
                {ctaPrimary  && <PillMint hero onClick={onPrimary}  style={{ background: "#fff", color: "var(--ov-navy-900)" }}>{ctaPrimary}</PillMint>}
                {ctaSecondary && <PillNavy hero onClick={onSecondary}>{ctaSecondary}</PillNavy>}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { PageHero });
