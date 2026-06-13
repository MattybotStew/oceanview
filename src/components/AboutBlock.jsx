// AboutBlock.jsx — Company about + A.M. Best rating (merged from RatingBlock)
import { PillGhost, TextLink } from './Buttons.jsx'

const S = {
  section: { background: "#fff" },
  grid: { display: "flex", gap: 80, alignItems: "center" },
  photoWrap: {
    borderRadius: 24,
    overflow: "hidden",
    width: "clamp(260px, 30vw, 450px)",
    aspectRatio: "4 / 5",
    flexShrink: 0,
    position: "relative",
  },
  photo: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  eyebrow: {
    display: "flex", alignItems: "center", gap: 8, marginBottom: 20,
  },
  eyebrowLine: { width: 18, height: 1, background: "#2494C1", flexShrink: 0 },
  eyebrowText: {
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10,
    letterSpacing: "1.4px", textTransform: "uppercase", color: "#2494C1",
  },
  h2: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.15,
    color: "var(--ov-navy-900)", letterSpacing: "-0.01em",
    margin: "0 0 20px",
  },
  body: {
    fontFamily: "var(--ov-ff-sans)",
    fontSize: 16.5, lineHeight: 1.7, color: "var(--ov-grey-600)",
    margin: "0 0 28px",
  },
  ratingCard: {
    display: "flex", alignItems: "center", gap: 16,
    background: "var(--ov-surface-tint)",
    border: "1px solid rgba(36,148,193,.15)",
    borderRadius: 12, padding: "16px 20px",
    marginBottom: 28,
  },
  ratingLetter: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 800,
    fontSize: 44, lineHeight: 1, color: "var(--ov-navy-900)", flexShrink: 0,
  },
  ratingDivider: { width: 1, alignSelf: "stretch", background: "rgba(13,31,78,.12)", flexShrink: 0 },
  ratingLabel: {
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13.5, color: "var(--ov-navy-900)",
  },
  ratingDetail: {
    fontFamily: "var(--ov-ff-sans)", fontSize: 12, color: "var(--ov-grey-600)", marginTop: 2,
  },
  ctas: { display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" },
};

export default function AboutBlock() {
  return (
    <section style={S.section} className="ov-section ov-about-section">
      <div className="ov-container">
        <div style={S.grid} className="ov-about-grid">
          <div style={S.photoWrap}>
            <img style={S.photo} src="assets/couple-walking.png" alt="Couple walking together" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={S.eyebrow}>
              <div style={S.eyebrowLine} />
              <span style={S.eyebrowText}>Since 1987</span>
            </div>
            <h2 style={S.h2}>
              A trusted partner for retirement security
            </h2>
            <p style={S.body}>
              Oceanview Life and Annuity Company stands as a reliable source of top-tier fixed
              and fixed-indexed annuity offerings. Our paramount objective is to offer financial
              security and stability to both the agents who recommend our products and the
              policyholders who count on them for retirement income.
            </p>

            {/* A.M. Best rating badge */}
            <div style={S.ratingCard}>
              <div style={S.ratingLetter}>A</div>
              <div style={S.ratingDivider} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={S.ratingLabel}>A.M. Best Rating: A (Excellent)</div>
                <div style={S.ratingDetail}>Financial Strength Rating — recognition of balance-sheet strength and prudent risk management</div>
              </div>
              <TextLink style={{ flexShrink: 0, fontSize: 13 }} onClick={() => { window.location.hash = 'about' }}>Read report</TextLink>
            </div>

            <div style={S.ctas}>
              <PillGhost onClick={() => { window.location.hash = 'about' }}>More About Us</PillGhost>
              <TextLink onClick={() => { window.location.hash = 'about' }}>Read our 2024 Annual Report</TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
