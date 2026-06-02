// CompanyPage.jsx — About / Company page

const cmpS = {
  twoCol:      { display: "flex", gap: 80, alignItems: "center" },
  twoColImg:   { width: 420, height: 420, borderRadius: 24, objectFit: "cover", flexShrink: 0, display: "block" },
  twoColImgLg: { width: 480, height: 480, borderRadius: 16, objectFit: "cover", flexShrink: 0, display: "block" },
  colText:     { flex: 1, display: "flex", flexDirection: "column", gap: 32 },

  eyebrowRow:  { display: "flex", alignItems: "center", gap: 6, marginBottom: 9 },
  eyebrowLine: { width: 18, height: 1, background: "#2494C1", flexShrink: 0 },
  eyebrow:     { fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.2px", textTransform: "uppercase", color: "#2494C1" },

  h2:   { fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(28px, 3.4vw, 42px)", color: "#233D7C", letterSpacing: "-0.027em", lineHeight: 1.2, margin: "0 0 9px" },
  h3:   { fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 26, color: "#0D1F4E", letterSpacing: "-0.01em", lineHeight: 1.2, margin: 0 },
  body: { fontFamily: "var(--ov-ff-sans)", fontSize: 14, color: "#6B7280", lineHeight: 1.65, margin: 0 },
  bodyLg: { fontFamily: "var(--ov-ff-sans)", fontSize: 17, color: "#4A5568", lineHeight: 1.6, margin: 0 },

  bulletCard:      { background: "rgba(112,186,191,0.2)", borderRadius: 12, padding: "19px 24px 20px", display: "flex", flexDirection: "column" },
  bulletCardLabel: { fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.2px", textTransform: "uppercase", color: "#2494C1", marginBottom: 12 },
  bulletItem:      { display: "flex", gap: 8, alignItems: "flex-start", paddingTop: 10, paddingBottom: 11, borderBottom: "1px solid rgba(36,148,193,0.1)" },
  bulletItemLast:  { display: "flex", gap: 8, alignItems: "flex-start", paddingTop: 10 },
  bulletText:      { fontFamily: "var(--ov-ff-sans)", fontSize: 14, color: "#6B7280", lineHeight: 1.65, margin: 0 },

  textGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "start" },
  textCol:  { display: "flex", flexDirection: "column", gap: 34 },

  btnRow:     { display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" },
  btnOutline: { padding: "12px 24px", borderRadius: 200, border: "1px solid #0D1F4E", background: "#fff", fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13, color: "#0D1F4E", cursor: "pointer" },
  btnLink:    { fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 15, color: "#1A3070", background: "none", border: "none", cursor: "pointer", padding: 0 },
};

function CmpEyebrow({ children }) {
  return (
    <div style={cmpS.eyebrowRow}>
      <div style={cmpS.eyebrowLine} />
      <span style={cmpS.eyebrow}>{children}</span>
    </div>
  );
}

function ExperienceHeading({ as: Tag = "h2" }) {
  return (
    <Tag style={Tag === "h2" ? cmpS.h2 : cmpS.h3}>
      Experience{" "}
      <em style={{ color: "#70BABF", fontStyle: "italic" }}>the difference</em>
    </Tag>
  );
}

const CHECK = (
  <svg width="8" height="9" viewBox="0 0 8 9" fill="none" style={{ flexShrink: 0, marginTop: 4 }}>
    <path d="M1 4.5L3 6.5L7 2.5" stroke="#2494C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function BulletCard({ label, bullets }) {
  return (
    <div style={cmpS.bulletCard}>
      {label && <div style={cmpS.bulletCardLabel}>{label}</div>}
      {bullets.map((b, i) => (
        <div key={i} style={i === bullets.length - 1 ? cmpS.bulletItemLast : cmpS.bulletItem}>
          {CHECK}
          <p style={cmpS.bulletText}>{b}</p>
        </div>
      ))}
    </div>
  );
}

function ExperienceBulletCard() {
  const items = [
    { label: "Financial Strength You Can Trust", text: `Our "A" (Excellent) rating from A.M. Best showcases our solid financial foundation, providing you with the confidence that your retirement savings are in stable hands.` },
    { label: "Simplicity and Transparency", text: "We design our annuity products without unnecessary complexities or hidden clauses. This clarity allows you to understand your investments fully and make decisions with ease." },
    { label: "Competitive Rates for Maximum Growth", text: `Our annuities offer some of the industry's most competitive rates, aiming to enhance the growth potential of your retirement savings.` },
    { label: "Personalized Solutions Tailored to You", text: "We recognize that everyone's retirement journey is unique. By collaborating with financial professionals, we tailor our solutions to meet your specific needs and goals." },
    { label: "Commitment to Your Peace of Mind", text: "Your financial well-being is our top priority. We strive to provide a seamless and reassuring experience as you plan for a secure future." },
  ];
  return (
    <div style={cmpS.bulletCard}>
      {items.map((b, i) => (
        <div key={i} style={i === items.length - 1 ? cmpS.bulletItemLast : cmpS.bulletItem}>
          {CHECK}
          <p style={cmpS.bulletText}>
            <strong style={{ fontWeight: 600 }}>{b.label}:</strong>{" "}{b.text}
          </p>
        </div>
      ))}
    </div>
  );
}

const MYGA_COLS = [
  {
    eyebrow: "Harbourview MYGA",
    heading: "Guaranteed interest with straightforward accumulation",
    body: "Our suite of MYGA products brings extensive financial expertise to the table, guaranteeing that every annuity and retirement investment is handled with the care and respect it deserves.",
    cardLabel: "Ideal for individuals who",
    bullets: [
      "Value predictable growth with a guaranteed interest rate",
      "Prefer a simple, clearly defined accumulation approach",
      "Are seeking stability as part of a broader retirement strategy",
      "Want to limit exposure to market-related variability",
    ],
  },
  {
    eyebrow: "Horizon MYGA",
    heading: "A clear path to predictable, guaranteed growth",
    body: "Provides guaranteed interest for a set term, offering stable and predictable growth without exposure to market fluctuations. Well suited for individuals who want simplicity and certainty as they plan for future income needs.",
    cardLabel: "Ideal for individuals who",
    bullets: [
      "Are looking for straightforward, guaranteed growth over a set term",
      "Prioritize clarity and consistency in their retirement planning",
      "Prefer a fixed interest structure with clearly defined outcomes",
      "Want an easy-to-understand accumulation solution",
    ],
  },
];

function CompanyPage() {
  return (
    <main>
      <PageHero
        image="assets/AdobeStock_1231908414@0.3x.jpg"
        eyebrow="Since 1987"
        title="Retirement solutions designed for clarity and confidence"
        subtitle="Guaranteed interest, flexible options, and growth potential — with principal protection at every step."
        ctaPrimary="Compare Products"
      />

      {/* ── Experience the difference ─────────────────────────────────────────── */}
      <section style={{ background: "#fff" }} className="ov-section">
        <div className="ov-container">
          <div style={cmpS.twoCol} className="ov-company-exp-grid">
            <div style={cmpS.colText}>
              <div>
                <CmpEyebrow>Fixed Annuities</CmpEyebrow>
                <ExperienceHeading />
              </div>
              <p style={cmpS.body}>
                At Oceanview Life and Annuity Company, we go beyond traditional retirement savings
                by offering a uniquely straightforward and trustworthy approach. Here's what sets
                us apart:
              </p>
              <ExperienceBulletCard />
              <p style={cmpS.body}>
                Experience the difference of partnering with a company that values simplicity,
                strength, and personalized service. Choose Oceanview and take confident steps
                toward a financially secure retirement.
              </p>
            </div>
            <img
              src="assets/family.png"
              alt="Couple planning their financial future"
              style={cmpS.twoColImgLg}
              className="ov-company-exp-img"
            />
          </div>
        </div>
      </section>

      {/* ── MYGA overview ────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--ov-surface-tint)" }} className="ov-section">
        <div className="ov-container">
          <div style={cmpS.textGrid} className="ov-company-myga-grid">
            {MYGA_COLS.map((col) => (
              <div key={col.eyebrow} style={cmpS.textCol}>
                <div>
                  <CmpEyebrow>{col.eyebrow}</CmpEyebrow>
                  <h3 style={cmpS.h3}>{col.heading}</h3>
                </div>
                <p style={cmpS.body}>{col.body}</p>
                <BulletCard label={col.cardLabel} bullets={col.bullets} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff" }} className="ov-section">
        <div className="ov-container">
          <div style={cmpS.twoCol} className="ov-company-about-grid">
            <img
              src="assets/couple-walking.png"
              alt="Couple walking"
              style={cmpS.twoColImg}
              className="ov-company-about-img"
            />
            <div style={cmpS.colText}>
              <div>
                <CmpEyebrow>About Us</CmpEyebrow>
                <ExperienceHeading />
              </div>
              <p style={cmpS.bodyLg}>
                Oceanview Life and Annuity Company stands as a reliable source of top-tier fixed
                and fixed-indexed annuity offerings. Our paramount objective is to offer a sense
                of security and financial stability to both our agents, who recommend our
                annuities to their clients, and our policyholders as they strive to achieve
                their financial objectives through our annuity products.
              </p>
              <div style={cmpS.btnRow}>
                <button style={cmpS.btnOutline}>More About Us</button>
                <button style={cmpS.btnLink}>Read our 2024 Annual Report →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── A.M. Best ────────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--ov-surface-tint)" }} className="ov-section">
        <div className="ov-container">
          <div style={cmpS.twoCol} className="ov-company-rating-grid">
            <div style={cmpS.colText}>
              <div>
                <CmpEyebrow>Financial Strength</CmpEyebrow>
                <ExperienceHeading />
              </div>
              <p style={cmpS.bodyLg}>
                Oceanview Life and Annuity Company holds an A (Excellent) Financial Strength
                Rating from A.M. Best — recognition of our balance-sheet strength, operating
                performance, and prudent enterprise risk management.
              </p>
              <button style={cmpS.btnLink}>Read the latest A.M. Best report →</button>
            </div>
            <img
              src="assets/ambest.png"
              alt="A.M. Best A Excellent Financial Strength Rating"
              style={{ ...cmpS.twoColImg, objectFit: "contain", background: "transparent" }}
              className="ov-company-rating-img"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { CompanyPage });
