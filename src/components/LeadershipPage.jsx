import PageHero from './PageHero.jsx'
import CTABanner from './CTABanner.jsx'

const leadS = {
  introSection: { padding: "100px 0 60px" },
  gridSection:  { padding: "60px 0 120px", background: 'var(--ov-surface-tint)' },

  eyebrowRow:  { display: "flex", alignItems: "center", gap: 6, marginBottom: 9 },
  eyebrowLine: { width: 18, height: 1, background: "#2494C1", flexShrink: 0 },
  eyebrow:     { fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.2px", textTransform: "uppercase", color: "#2494C1" },

  h2:      { fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(28px, 3.4vw, 42px)", color: "#233D7C", letterSpacing: "-0.027em", lineHeight: 1.2, margin: "0 0 24px" },
  bodyLg:  { fontFamily: "var(--ov-ff-sans)", fontSize: 17, color: "#4A5568", lineHeight: 1.65, margin: 0, maxWidth: "800px" },

   grid:    { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 40 },
   card:    { display: "flex", flexDirection: "column", background: "#fff", borderRadius: 14, border: "1px solid rgba(13,31,78,.08)", overflow: "hidden" },
   imgWrap: { width: "100%", aspectRatio: "3 / 4", overflow: "hidden", background: "linear-gradient(135deg, #E9EBF5 0%, #D0D6EC 100%)", display: "flex", alignItems: "center", justifyContent: "center" },
  img:     { width: "100%", height: "100%", objectFit: "cover" },
  initials: { fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(28px, 4vw, 48px)", color: "#4472C4", opacity: 0.5 },

    cardBody: { padding: "24px 22px 20px" },
   name:    { fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 22, color: "#0D1F4E", margin: "0 0 8px", letterSpacing: "-0.01em" },
  role:    { fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13, color: "#2494C1", textTransform: "uppercase", letterSpacing: "0.5px", margin: "0 0 12px" },
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

const executiveTeam = [
  {
    name: "William Egan",
    role: "Chairman & Chief Executive Officer",
    bio: "Mr. Egan is a financial services executive with experience in both the insurance and asset management industries. From 2012 to 2019, he was a Managing Director at Daintree Capital Management, LP, responsible for developing Daintree's investment activities in the insurance and reinsurance industries.",
    img: null
  },
  {
    name: "Gregory Lang",
    role: "Chief Financial Officer",
    bio: "Mr. Lang has spent over 25 years focusing on the insurance industry. Prior to joining Oceanview, he worked at investment firms Glasseel LLC, BlueCrest Capital Management, and Suffolk Capital Management, investing in a variety of insurance and non-insurance financial companies.",
    img: null
  },
  {
    name: "Shari Gottlieb",
    role: "SVP, Treasury & Group Controller",
    bio: "Ms. Gottlieb joined Oceanview in 2022 from Bayview Asset Management, LLC, where she had been Assistant Treasurer since 2016. She was previously a Treasury Associate at Apollo Global Management, a residential mortgage REIT from 2011 through 2016.",
    img: null
  },
  {
    name: "Pete Rock",
    role: "Chief Compliance Officer",
    bio: "Pete began his career in insurance at Prudential in 1984, holding various leadership positions in compliance and operations. He has since served as Chief Compliance Officer for multiple broker dealers, insurance and annuity distribution organizations, and a large Fraternal Benefit Organization.",
    img: null
  },
  {
    name: "Rodney Manzanga",
    role: "Chief Risk Officer",
    bio: "Rodney has extensive international experience leading enterprise risk management functions. Most recently, he was Chief Risk Officer for Alstate Financial Products, with oversight over Strategic Risk, Culture Risk, and Model Risk programs. He is a Fellow of the Society of Actuaries.",
    img: null
  },
  {
    name: "Ben Faught",
    role: "VP & Chief Actuary",
    bio: "Ben Faught is a seasoned professional in the life insurance industry with over 10 years of experience. At Oceanview, Ben has been integral to pricing, valuation, asset liability management, and product management. He is a Fellow of the Society of Actuaries and a Certified Enterprise Risk Analyst.",
    img: null
  },
  {
    name: "Jim Ryan",
    role: "EVP, Distribution",
    bio: "Jim brings over 25 years of success and expertise building high-performance organizations in financial services, wealth management, operations, and investments. He has held senior sales leadership roles with Lincoln Financial, Voya Financial, Prudential Financial, and National Western Life.",
    img: null
  },
  {
    name: "Dan Gallina",
    role: "EVP, National Accounts",
    bio: "With over two decades of experience in the annuities industry, Dan has held pivotal positions in product development, sales leadership, and key account management at Pacific Life, Allianz Distributors, Genworth Financial, and National Western Life.",
    img: null
  },
  {
    name: "Troy Glover",
    role: "EVP, Operations",
    bio: "Troy Glover brings over a decade of expertise in global third-party governance, risk management, and procurement within the financial services and insurance sectors. His leadership spans teams of over 1,000 and includes P&L responsibility for a $200 million business unit.",
    img: null
  },
];

export default function LeadershipPage() {
  return (
    <div style={{ background: "#fff" }}>
      <PageHero
        image="assets/hero-couple.jpg"
        eyebrow="Leadership"
        title="The people behind the promise."
        subtitle="The experienced team driving every product decision, rating, and promise we make to our policyholders."
        ctaPrimary="Board of Directors"
        onPrimary={() => { window.location.hash = 'board'; }}
      />

      {/* 2. INTRO SECTION */}
      <section style={leadS.introSection}>
        <div className="ov-container">
          <LeadEyebrow>Our Leadership</LeadEyebrow>
          <h2 style={leadS.h2}>Guided by transparency, stewardship, and strength</h2>
          <p style={leadS.bodyLg}>
            At Oceanview Life and Annuity Company, our executive leadership team brings together decades of deep insurance industry
            expertise, specialized asset management capability, and a clear vision for sustainable, low-risk growth. We operate with
            structural efficiency—ensuring your long-term retirement promises are completely secure.
          </p>
        </div>
      </section>

      {/* 3. TEAM GRID */}
      <section style={leadS.gridSection}>
        <div className="ov-container">
        <div style={leadS.grid}>
          {executiveTeam.map((member, idx) => {
            const initials = member.name.split(" ").map(w => w[0]).filter((_, i, a) => i === 0 || i === a.length - 1).join("");
            return (
              <div key={idx} style={leadS.card}>
                <div style={leadS.imgWrap}>
                  {member.img
                    ? <img src={member.img} alt={`${member.name}`} loading="lazy" style={leadS.img} />
                    : <span style={leadS.initials}>{initials}</span>
                  }
                </div>
                <div style={leadS.cardBody}>
                  <h3 style={leadS.name}>{member.name}</h3>
                  <div style={leadS.role}>{member.role}</div>
                  <p style={leadS.bio}>{member.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </section>

      {/* 4. CTA */}
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
