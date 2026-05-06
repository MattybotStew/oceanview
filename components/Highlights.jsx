// Highlights.jsx — 4-tile section: "Committed to Enhancing Retirement Savings"
const highlightStyles = {
  section: { padding: "112px 0 96px", background: "var(--ov-bg)" },
  grid: { display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "start" },
  eyebrow: {
    fontFamily: "var(--ov-ff-eyebrow)", fontWeight: 600, fontSize: 13,
    letterSpacing: ".12em", textTransform: "uppercase",
    color: "var(--ov-navy-600)", marginBottom: 22,
  },
  h2: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: 1.06,
    color: "var(--ov-navy-900)", letterSpacing: "-0.01em",
    margin: "0 0 28px", textWrap: "balance",
  },
  lede: {
    fontSize: 17, lineHeight: 1.65, color: "var(--ov-grey-600)",
    margin: "0 0 36px", maxWidth: "44ch",
  },
  tiles: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 },
  tile: {
    background: "var(--ov-surface-tint-2)", padding: "24px 24px 26px",
    borderRadius: 10, border: "1px solid rgba(13,31,78,.06)",
  },
  tileTitle: {
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 16,
    lineHeight: 1.3, color: "var(--ov-navy-900)", margin: "0 0 8px",
  },
  tileBody: { fontSize: 13.5, lineHeight: 1.65, color: "var(--ov-grey-600)", margin: 0 },
  photoWrap: {
    position: "relative", borderRadius: 12, overflow: "hidden",
    aspectRatio: "5/6", boxShadow: "var(--ov-shadow-card)",
  },
  photo: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  cap: {
    position: "absolute", left: 24, bottom: 24, color: "#fff",
    fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 28,
    lineHeight: 1.1, maxWidth: "78%",
  },
};

const HIGHLIGHTS = [
  ["Comprehensive Suite of Retirement Products",
   "Multi-year guaranteed annuities (MYGAs) and fixed indexed annuities (FIAs) tailored to your goals."],
  ["Customer-Focused Solutions",
   "Customer service and competitive products that go beyond expectations to help your money work harder."],
  ["Stable & Reliable Industry Partner",
   "Backed by a strong, well-capitalized organization with a long-term, conservative approach."],
  ["Tax-Deferred Growth Potential",
   "Funds grow tax-deferred until withdrawal, preserving more of your hard-earned savings."],
];

function Highlights() {
  return (
    <section style={highlightStyles.section}>
      <div className="ov-container">
        <div style={highlightStyles.grid}>
          <div>
            <div style={highlightStyles.eyebrow}>Why Oceanview</div>
            <h2 style={highlightStyles.h2}>Committed to enhancing retirement savings.</h2>
            <p style={highlightStyles.lede}>
              Oceanview focuses on providing high-quality retirement savings and income products
              backed by a stable, well-capitalized partner.
            </p>
            <div style={highlightStyles.tiles}>
              {HIGHLIGHTS.map(([t, b]) => (
                <div key={t} style={highlightStyles.tile}>
                  <h3 style={highlightStyles.tileTitle}>{t}</h3>
                  <p style={highlightStyles.tileBody}>{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={highlightStyles.photoWrap}>
            <img style={highlightStyles.photo} src="assets/older-couple-1.png" alt="" />
            <div style={highlightStyles.cap}>A future you can count on.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Highlights });
