import PageHero from './PageHero.jsx'
import RatingBlock from './RatingBlock.jsx'
import CTABanner from './CTABanner.jsx'

const leadS = {
  introSection: { padding: "100px 0 60px" },
  gridSection:  { padding: "60px 0 120px" },

  eyebrowRow:  { display: "flex", alignItems: "center", gap: 6, marginBottom: 9 },
  eyebrowLine: { width: 18, height: 1, background: "#2494C1", flexShrink: 0 },
  eyebrow:     { fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.2px", textTransform: "uppercase", color: "#2494C1" },

  h2:      { fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(28px, 3.4vw, 42px)", color: "#233D7C", letterSpacing: "-0.027em", lineHeight: 1.2, margin: "0 0 24px" },
  bodyLg:  { fontFamily: "var(--ov-ff-sans)", fontSize: 17, color: "#4A5568", lineHeight: 1.65, margin: 0, maxWidth: "800px" },

  grid:    { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 40 },
  card:    { display: "flex", flexDirection: "column", background: "#fff" },
  imgWrap: { width: "100%", aspectRatio: "3 / 4", borderRadius: 16, overflow: "hidden", marginBottom: 16, background: "#F3F4F6" },
  img:     { width: "100%", height: "100%", objectFit: "cover" },

  name:    { fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 22, color: "#0D1F4E", margin: "0 0 4px", letterSpacing: "-0.01em" },
  role:    { fontFamily: "var(--ov-ff-sans)", fontWeight: 500, fontSize: 13, color: "#2494C1", textTransform: "uppercase", letterSpacing: "0.5px", margin: "0 0 12px" },
  bio:     { fontFamily: "var(--ov-ff-sans)", fontSize: 14, color: "#6B7280", lineHeight: 1.6, margin: 0 }
};

function LeadEyebrow({ children }) {
  return (
    <div style={leadS.eyebrowRow}>
      <div style={leadS.eyebrowLine} />
      <span style={leadS.eyebrow}>{children}</span>
    </div>
  );
}

// Sample Executive Data — Replace with actual leadership names/images
const executiveTeam = [
  {
    name: "William Robinson",
    role: "Chief Executive Officer",
    bio: "Over 25 years of insurance sector leadership specializing in fixed annuity asset-liability management and conservative capital deployment strategy.",
    img: "assets/leader-ceo.jpg"
  },
  {
    name: "Sarah Jenkins, CFA",
    role: "Chief Investment Officer",
    bio: "Oversees the execution of our high-quality investment portfolio, ensuring rigorous risk containment and legal reserve protection.",
    img: "assets/leader-cio.jpg"
  },
  {
    name: "David Vance",
    role: "Chief Operating Officer",
    bio: "Steers our digital administrative platform, driving frictionless electronic applications and dedicated distribution partner support systems.",
    img: "assets/leader-coo.jpg"
  },
  {
    name: "Elena Rostova",
    role: "Chief Compliance Officer",
    bio: "Manages state regulatory partnerships, governance structure compliance, and strict operational guidelines across all domiciles.",
    img: "assets/leader-cco.jpg"
  }
];

export default function LeadershipPage() {
  return (
    <div style={{ background: "#fff" }}>
      {/* 1. HERO SECTION */}
      <PageHero
        image="assets/hero-beach-couple.jpg"
        eyebrow="Leadership"
        title="The people behind the promise."
        subtitle="The experienced team driving every product decision, rating, and promise we make to our policyholders."
        ctaPrimary="Board Of Directors"
      />

      {/* 2. INTRO SECTION */}
      <section className="ov-container" style={leadS.introSection}>
        <LeadEyebrow>Our Leadership</LeadEyebrow>
        <h2 style={leadS.h2}>Guided by transparency, stewardship, and strength</h2>
        <p style={leadS.bodyLg}>
          At Oceanview Life and Annuity Company, our executive leadership team brings together decades of deep insurance industry
          expertise, specialized asset management capability, and a clear vision for sustainable, low-risk growth. We operate with
          structural efficiency—ensuring your long-term retirement promises are completely secure.
        </p>
      </section>

      {/* 3. TEAM GRID */}
      <section className="ov-container" style={leadS.gridSection}>
        <div style={leadS.grid}>
          {executiveTeam.map((member, idx) => (
            <div key={idx} style={leadS.card}>
              <div style={leadS.imgWrap}>
                <img
                  src={member.img}
                  alt={`${member.name} — ${member.role}`}
                  style={leadS.img}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <h3 style={leadS.name}>{member.name}</h3>
              <div style={leadS.role}>{member.role}</div>
              <p style={leadS.bio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. A.M. BEST FINANCIAL RATING BLOCK */}
      <RatingBlock />

      {/* 5. CTA */}
      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Partner With Us"
            title="Decades of expertise behind"
            titleAccent="every decision."
            body="Our leadership's commitment to conservative growth and rigorous risk management protects every policyholder we serve."
            cta="Compare Products"
            onClick={() => { window.location.hash = 'products' }}
          />
        </div>
      </section>
    </div>
  );
}
