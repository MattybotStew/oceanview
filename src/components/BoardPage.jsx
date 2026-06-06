import { useState } from 'react'
import CTABanner from './CTABanner.jsx'

const S = {
  section: { padding: "80px 0 100px", background: "#fff" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "48px 40px",
  },
  card: { display: "flex", flexDirection: "column" },
  divider: { width: 32, height: 2, background: "#2494C1", marginBottom: 16, borderRadius: 2 },
  name: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(18px, 1.8vw, 22px)", color: "#0D1F4E",
    margin: "0 0 6px", letterSpacing: "-0.01em", lineHeight: 1.2,
  },
  bio: {
    fontFamily: "var(--ov-ff-sans)", fontSize: 14, color: "#6B7280",
    lineHeight: 1.68, margin: "0 0 18px", flex: 1,
  },
  readBioBtn: {
    alignSelf: "flex-start",
    fontFamily: "var(--ov-ff-sans)", fontSize: 13, fontWeight: 600,
    color: "#2494C1", background: "none", border: "1px solid #2494C1",
    borderRadius: 99, padding: "6px 16px", cursor: "pointer",
    letterSpacing: "0.1px",
  },
  expanded: {
    fontFamily: "var(--ov-ff-sans)", fontSize: 14, color: "#4A5568",
    lineHeight: 1.68, margin: "12px 0 0", paddingTop: 12,
    borderTop: "1px solid rgba(13,31,78,0.08)",
  },
};

const boardMembers = [
  {
    name: "Mark Heppenstall",
    bio: "Mr. Heppenstall has more than 35 years of fixed-income and insurance asset management experience, with an established track record of success for institutional investors. Mr. Heppenstall served as President and Chief Investment Officer of Penn Mutual Asset Management, a $40 billion asset manager specializing in fixed-income and alternative assets investment activity.",
  },
  {
    name: "Larry J. Adams",
    bio: "Larry J. Adams is a seasoned leadership executive with extensive experience in the insurance and financial services industry. He currently serves as Interim CEO of Medi-Lake Laboratory, LLC, and is President & COO of Longevity Care, Inc., an insurtech startup he co-founded. Previously, he was SVP & Chief Agency Officer at Ohio National Financial Services and VP of Sales and Marketing at Protective Life Insurance Company.",
  },
  {
    name: "Robert M. Beuerlein, FSA, MAAA, CERA",
    bio: "Robert M. Beuerlein is a consulting actuary with RM Beuerlein Consulting since 2013. Previously, he spent 22 years with AIG Life & Retirement Companies as SVP and Chief Actuary. He served as President of both the American Academy of Actuaries and the Society of Actuaries, and chaired the 2019 Technical Panel on Assumptions and Methods for the Social Security Advisory Board.",
  },
  {
    name: "Brian Bomstein",
    bio: "Brian Bomstein serves as Director and General Counsel at Bayview Asset Management, LLC since 2020, overseeing the Corporate Legal and Compliance Departments, Litigation, and the Internal Audit Department. He serves on multiple corporate Boards within the Bayview family of companies. He holds a J.D., Cum Laude, from the University of Miami School of Law and a B.A. from Vanderbilt University.",
  },
  {
    name: "John H. Fischer, CFA",
    bio: "John H. Fischer was Chief Financial Officer of Bayview Asset Management, LLC until his retirement in January 2019. He joined Bayview in December 1990, bringing experience from his prior role as VP and Treasurer of Atlantic Gulf Communities Corporation. He holds an MBA in Finance and a B.S. in Business Administration from the University of Florida, and is a Chartered Financial Analyst.",
  },
  {
    name: "Michael J. King",
    bio: "Michael J. King is a mortgage banking professional with over 47 years of experience. Most recently, he served as SVP of the Mortgage Division for AuburnBank, managing underwriting, processing, and production with annual volume of $2.5 billion. He served as President of the Mortgage Bankers Association of Alabama from 2015 to 2016. He holds a BSBA from Auburn University Montgomery.",
  },
  {
    name: "David B. O'Maley, CLU, ChFC, MSFS",
    bio: "David B. O'Maley is Chairman of OnFlight, Inc., an Embraer Authorized Service Center and aircraft charter company. He previously served as Chairman, President, and CEO of Ohio National Financial Services from 1994 to 2010, and spent 24 years with Life of Virginia. He holds a bachelor's from Florida Atlantic University and a master's in financial services from The American College.",
  },
  {
    name: "Lori Oswald",
    bio: "Lori Oswald brings over 30 years of experience in financial services. She retired from Protective Life Corporation, where she managed Accounting Shared Services, Financial Operations, Budgeting, and Financial Reporting. Her prior experience includes roles at Regions Bank and PricewaterhouseCoopers. She holds a degree in Accounting from Georgetown University and is a Certified Public Accountant.",
  },
  {
    name: "Leslie Smith",
    bio: "Leslie Smith joined Bayview in 2004 and oversees Silver Hill Funding, Bayview's small-balance commercial lending division, and all commercial loan servicing operations. She has managed top-50 correspondent relationships and led Silver Hill's expansion into Spanish and German markets. She holds an MBA from Nova Southeastern University and a B.S. from Florida International University.",
  },
];

function BoardCard({ name, bio }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = bio.length > 220;
  const preview = isLong && !expanded ? bio.slice(0, 220).trimEnd() + "…" : bio;

  return (
    <div style={S.card}>
      <div style={S.divider} />
      <h3 style={S.name}>{name}</h3>
      <p style={S.bio}>{preview}</p>
      {isLong && (
        <button style={S.readBioBtn} onClick={() => setExpanded(e => !e)}>
          {expanded ? "Show less" : "Read Bio"}
        </button>
      )}
    </div>
  );
}

export default function BoardPage() {
  return (
    <div style={{ background: "#fff" }}>
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>Board of Directors</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px, 4.5vw, 62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '20ch' }}>
            Independent oversight. Proven expertise.
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px, 1.4vw, 17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '52ch' }}>
            Our independent Board brings together decades of financial services expertise to provide rigorous governance and strategic oversight of Oceanview Life and Annuity Company.
          </p>
        </div>
      </section>

      <section style={S.section}>
        <div className="ov-container">
          <div style={S.grid}>
            {boardMembers.map((m, i) => (
              <BoardCard key={i} name={m.name} bio={m.bio} />
            ))}
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Work With Us"
            title="Backed by experienced leadership"
            titleAccent="built for the long term."
            body="Our board brings decades of insurance, finance, and regulatory expertise — giving advisors and clients the confidence of a well-governed company."
            cta="Contact Us"
            onClick={() => { window.location.hash = 'contact'; }}
          />
        </div>
      </section>
    </div>
  );
}
