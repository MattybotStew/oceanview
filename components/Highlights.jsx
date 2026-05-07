// Highlights.jsx — Figma node 7271:1840
const highlightStyles = {
  section: {
    background: "#fff",
  },
  heading: {
    fontFamily: "var(--ov-ff-display)",
    fontWeight: 400,
    fontSize: "clamp(36px, 4.2vw, 60px)",
    lineHeight: 1.1,
    color: "#233D7C",
    textAlign: "center",
    letterSpacing: "-1.14px",
    margin: "0 0 56px",
  },
  layout: {
    display: "flex",
    gap: 64,
    alignItems: "flex-start",
  },
  photoWrap: {
    borderRadius: 16,
    overflow: "hidden",
    width: "clamp(260px, 30vw, 420px)",
    aspectRatio: "1 / 1",
    flexShrink: 0,
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    flex: 1,
  },
  card: {
    background: "#F1FBFF",
    borderRadius: 16,
    padding: "28px 30px 30px",
  },
  cardTitle: {
    fontFamily: "var(--ov-ff-display)",
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 1.16,
    color: "var(--ov-navy-800)",
    letterSpacing: "-0.36px",
    margin: "0 0 16px",
  },
  cardBody: {
    fontFamily: "var(--ov-ff-sans)",
    fontWeight: 400,
    fontSize: 17,
    lineHeight: 1.6,
    color: "var(--ov-grey-600)",
    margin: 0,
  },
};

const HIGHLIGHTS = [
  {
    title: "Committed to Enhancing Retirement Savings and Protecting Policyholders",
    body: "Oceanview focuses on providing high-quality retirement savings and income products. Our services offer the policy owners financial protection over the life of their policies.",
  },
  {
    title: "Comprehensive Suite of Retirement Products",
    body: "Oceanview has developed a suite of retirement products, including multi-year guaranteed annuities (MYGAs) and fixed indexed annuities (FIAs) to meet the demands of retirees and pre-retirees.",
  },
  {
    title: "Bringing Retirement Savings to You",
    body: "Oceanview's retirement savings products are offered and distributed nationally through a network of agents, advisors, banks, and broker-dealers. Talk to your financial professional or call our Sales Team today for more information!",
  },
];

function Highlights() {
  return (
    <section style={highlightStyles.section} className="ov-section">
      <div className="ov-container">
        <h2 style={highlightStyles.heading}>
          Oceanview Life &amp; Annuity<br />Company Highlights
        </h2>
        <div style={highlightStyles.layout} className="ov-highlights-grid">
          <div style={highlightStyles.photoWrap}>
            <img style={highlightStyles.photo} src="assets/family.png" alt="" />
          </div>
          <div style={highlightStyles.cards}>
            {HIGHLIGHTS.map(({ title, body }) => (
              <div key={title} style={highlightStyles.card}>
                <h3 style={highlightStyles.cardTitle}>{title}</h3>
                <p style={highlightStyles.cardBody}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Highlights });
