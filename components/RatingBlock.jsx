// RatingBlock.jsx — A.M. Best "A" Excellent rating

const ratingStyles = {
  section: {
    background: "var(--ov-bg)",
  },
  grid: { 
    display: "flex", 
    gap: 80, 
    alignItems: "center" 
  },
  photoWrap: {
    borderRadius: 24,
    overflow: "hidden",
    width: "clamp(260px, 30vw, 420px)",
    aspectRatio: "1 / 1",
    flexShrink: 0,
  },
  photo: { 
    width: "100%", 
    height: "100%", 
    objectFit: "cover", 
    display: "block" 
  },
  h2: {
    fontFamily: "var(--ov-ff-display)", 
    fontWeight: 400,
    fontSize: "clamp(30px, 3.6vw, 48px)", 
    lineHeight: 1.2,
    color: "var(--ov-navy-900)", 
    letterSpacing: "-0.01em",
    margin: "0 0 24px", 
  },
  body: {
    fontSize: 17, 
    lineHeight: 1.6, 
    color: "var(--ov-grey-600)",
    margin: "0 0 18px", 
    // REMOVED: maxWidth: "52ch",  // This was limiting the width
    width: "100%",  // Allow full width within the container
  },
};

function RatingBlock() {
  return (
    <section style={ratingStyles.section} className="ov-section">
      <div className="ov-container">
        <div style={ratingStyles.grid} className="ov-rating-grid">
          <div>
            <h2 style={ratingStyles.h2}>Rated "A" Excellent by A.M. Best.</h2>
            <p style={ratingStyles.body}>
              Oceanview Life and Annuity Company holds an A (Excellent) Financial Strength Rating from
              A.M. Best — recognition of our balance-sheet strength, operating performance, and
              prudent enterprise risk management.
            </p>
            <TextLink>Read the latest A.M. Best report</TextLink>
          </div>
          <div style={ratingStyles.photoWrap}>
            <img 
              style={ratingStyles.photo} 
              src="assets/ratingMain.png" 
              alt="Couple walking together"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Global registration
if (typeof window !== 'undefined') {
  Object.assign(window, { RatingBlock });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RatingBlock;
}