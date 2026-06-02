// CompanyPage.jsx — About / Company page
const companyStyles = {
  section:      { background: "#fff", padding: "80px 0" },
  sectionTint:  { background: "var(--ov-bg)", padding: "80px 0" },

  // ── Highlights ────────────────────────────────────────────────────────────
  highlightHeading: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(36px, 4.2vw, 60px)", textAlign: "center",
    color: "#233D7C", letterSpacing: "-0.02em", lineHeight: 1.1,
    margin: "0 0 56px",
  },
  highlightRow: { display: "flex", gap: 64, alignItems: "flex-start" },
  highlightImg: {
    width: 420, height: 420, borderRadius: 16,
    objectFit: "cover", flexShrink: 0, display: "block",
  },
  cardsCol: { flex: 1, display: "flex", flexDirection: "column", gap: 10 },
  card: { background: "#F1FBFF", borderRadius: 16, padding: "26px 30px 30px" },
  cardTitle: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: 24, color: "#0D1F4E", letterSpacing: "-0.015em",
    lineHeight: 1.16, margin: "0 0 18px",
  },
  cardBody: {
    fontFamily: "var(--ov-ff-sans)", fontSize: 17,
    color: "rgba(51,51,51,0.8)", lineHeight: 1.6, margin: 0,
  },

  // ── Mission strip ─────────────────────────────────────────────────────────
  missionStrip: { background: "#0D1F4E", padding: "72px 0" },
  missionText: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(20px, 2.2vw, 28px)", color: "#F2FCFF",
    lineHeight: 1.55, maxWidth: "68ch", margin: "0 auto", textAlign: "center",
  },

  // ── Two-col ────────────────────────────────────────────────────────────────
  twoCol: { display: "flex", gap: 80, alignItems: "center" },
  twoColImg: {
    width: 420, height: 420, borderRadius: 24,
    objectFit: "cover", flexShrink: 0, display: "block",
  },
  colText: { flex: 1, display: "flex", flexDirection: "column", gap: 32 },
  colHeading: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(30px, 3.4vw, 48px)", color: "#0D1F4E",
    letterSpacing: "-0.01em", lineHeight: 1.2, margin: 0,
  },
  colBody: {
    fontFamily: "var(--ov-ff-sans)", fontSize: 17,
    color: "#4A5568", lineHeight: 1.6, margin: 0,
  },

  // ── Buttons ────────────────────────────────────────────────────────────────
  btnRow: { display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" },
  btnOutline: {
    padding: "12px 24px", borderRadius: 200,
    border: "1px solid #0D1F4E", background: "#fff",
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600,
    fontSize: 13, color: "#0D1F4E", cursor: "pointer",
  },
  btnLink: {
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600,
    fontSize: 15, color: "#1A3070", background: "none",
    border: "none", cursor: "pointer", padding: 0,
  },

  // ── Differentiators grid ───────────────────────────────────────────────────
  diffsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: 40,
  },
  diffItem: { display: "flex", flexDirection: "column", gap: 10 },
  diffDot: {
    width: 32, height: 32, borderRadius: "50%",
    background: "rgba(36,148,193,0.12)",
    display: "flex", alignItems: "center", justifyContent: "center",
    marginBottom: 6,
  },
  diffTitle: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: 20, color: "#0D1F4E", margin: 0,
  },
  diffBody: {
    fontFamily: "var(--ov-ff-sans)", fontSize: 14,
    lineHeight: 1.65, color: "#4A5568", margin: 0,
  },
};

const HIGHLIGHTS = [
  {
    title: "Committed to Enhancing Retirement Savings and Protecting Policyholders",
    body: "Oceanview focuses on providing high-quality retirement savings and income products. Our services offer policyholders financial protection over the life of their policies.",
  },
  {
    title: "Comprehensive Suite of Retirement Products",
    body: "Oceanview has developed a suite of retirement products, including multi-year guaranteed annuities (MYGAs) and fixed indexed annuities (FIAs) to meet the demands of retirees and pre-retirees.",
  },
  {
    title: "Bringing Retirement Savings to You",
    body: "Oceanview's retirement savings products are offered and distributed nationally through a network of agents, advisors, banks, and broker-dealers. Talk to your financial professional or call our Sales Team today.",
  },
];

const DIFFS = [
  { title: "Financial Strength",       body: "Holds an A (Excellent) rating from A.M. Best, demonstrating a solid financial foundation." },
  { title: "Simplicity & Transparency",body: "Products designed without unnecessary complexity or hidden clauses." },
  { title: "Competitive Rates",        body: "Among the industry's most competitive rates for retirement savings growth." },
  { title: "Personalized Solutions",   body: "Tailored approaches developed through collaboration with financial professionals." },
  { title: "Peace of Mind",            body: "Prioritizing a seamless customer experience and your long-term financial well-being." },
];

function CompanyPage() {
  return (
    <main>
      <PageHero
        image="assets/lighthouse.jpg"
        eyebrow="Since 1987"
        title="Committed to your financially secure retirement."
      />

      {/* ── Highlights ─────────────────────────────────────────────────────── */}
      <section style={companyStyles.section}>
        <div className="ov-container">
          <h2 style={companyStyles.highlightHeading}>
            Oceanview Life &amp; Annuity<br />Company Highlights
          </h2>
          <div style={companyStyles.highlightRow}>
            <img src="assets/family.png" alt="Family" style={companyStyles.highlightImg} />
            <div style={companyStyles.cardsCol}>
              {HIGHLIGHTS.map(h => (
                <div key={h.title} style={companyStyles.card}>
                  <h3 style={companyStyles.cardTitle}>{h.title}</h3>
                  <p style={companyStyles.cardBody}>{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission strip ──────────────────────────────────────────────────── */}
      <section style={companyStyles.missionStrip}>
        <div className="ov-container">
          <p style={companyStyles.missionText}>
            "Our mission is to empower individuals on their journey toward a financially secure
            retirement by providing straightforward and reliable annuity solutions — through
            competitive rates, unwavering financial strength, and personalized service tailored
            to your unique needs."
          </p>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────────────────────── */}
      <section style={companyStyles.section}>
        <div className="ov-container">
          <div style={companyStyles.twoCol}>
            <img src="assets/couple-walking.png" alt="Couple walking" style={companyStyles.twoColImg} />
            <div style={companyStyles.colText}>
              <h2 style={companyStyles.colHeading}>About Oceanview Life and Annuity Company</h2>
              <p style={companyStyles.colBody}>
                Oceanview Life and Annuity Company stands as a reliable source of top-tier fixed
                and fixed-indexed annuity offerings. Our paramount objective is to offer a sense
                of security and financial stability to both our agents, who recommend our
                annuities to their clients, and our policyholders as they strive to achieve
                their financial objectives.
              </p>
              <div style={companyStyles.btnRow}>
                <button style={companyStyles.btnOutline}>More About Us</button>
                <button style={companyStyles.btnLink}>Read our 2024 Annual Report →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── A.M. Best Rating ───────────────────────────────────────────────── */}
      <section style={companyStyles.sectionTint}>
        <div className="ov-container">
          <div style={companyStyles.twoCol}>
            <div style={companyStyles.colText}>
              <h2 style={companyStyles.colHeading}>Rated "A" Excellent by A.M. Best.</h2>
              <p style={companyStyles.colBody}>
                Oceanview Life and Annuity Company holds an A (Excellent) Financial Strength
                Rating from A.M. Best — recognition of our balance-sheet strength, operating
                performance, and prudent enterprise risk management.
              </p>
              <button style={companyStyles.btnLink}>Read the latest A.M. Best report →</button>
            </div>
            <img src="assets/older-couple-1.png" alt="Oceanview clients" style={companyStyles.twoColImg} />
          </div>
        </div>
      </section>

      {/* ── Experience the Difference ──────────────────────────────────────── */}
      <section style={companyStyles.section}>
        <div className="ov-container">
          <h2 style={{ ...companyStyles.highlightHeading, color: "#0D1F4E", marginBottom: 48 }}>
            Experience the Difference
          </h2>
          <div style={companyStyles.diffsGrid}>
            {DIFFS.map(d => (
              <div key={d.title} style={companyStyles.diffItem}>
                <div style={companyStyles.diffDot}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7L5.5 10.5L12 3.5" stroke="#2494C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={companyStyles.diffTitle}>{d.title}</h3>
                <p style={companyStyles.diffBody}>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { CompanyPage });
