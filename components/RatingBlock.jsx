// RatingBlock.jsx — A.M. Best "A" Excellent rating
const ratingStyles = {
  section: { padding: "96px 0", background: "var(--ov-bg)" },
  grid: { display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 64, alignItems: "center" },
  card: {
    background: "var(--ov-navy-500)", color: "#F2FCFF",
    padding: "44px 48px", borderRadius: 12, boxShadow: "var(--ov-shadow-card)",
    display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 18,
  },
  badge: {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    fontFamily: "var(--ov-ff-display)", fontWeight: 800,
    fontSize: 92, lineHeight: 1, color: "var(--ov-teal-400)",
  },
  badgeSub: {
    fontFamily: "var(--ov-ff-eyebrow)", fontWeight: 600, fontSize: 13,
    letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.78)",
  },
  h2: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(28px, 3.2vw, 44px)", lineHeight: 1.1,
    color: "var(--ov-navy-900)", margin: "0 0 18px", textWrap: "balance",
  },
  body: {
    fontSize: 16.5, lineHeight: 1.7, color: "var(--ov-grey-600)",
    margin: "0 0 12px", maxWidth: "52ch",
  },
};

function RatingBlock() {
  return (
    <section style={ratingStyles.section}>
      <div className="ov-container">
        <div style={ratingStyles.grid}>
          <div style={ratingStyles.card}>
            <div style={ratingStyles.badgeSub}>A.M. Best Rating</div>
            <div style={ratingStyles.badge}>A</div>
            <div style={{ fontSize: 14, opacity: 0.86, lineHeight: 1.5, fontStyle: "italic" }}>
              "Excellent" — affirmed for financial strength and operating performance.
            </div>
          </div>
          <div>
            <h2 style={ratingStyles.h2}>Rated "A" Excellent by A.M. Best.</h2>
            <p style={ratingStyles.body}>
              Oceanview Life and Annuity Company holds an A (Excellent) Financial Strength Rating from
              A.M. Best — recognition of our balance-sheet strength, operating performance, and
              prudent enterprise risk management.
            </p>
            <TextLink>Read the latest A.M. Best report</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { RatingBlock });
