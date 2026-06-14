import { useState } from 'react'
import { TextLink } from './Buttons.jsx'
import CTABanner from './CTABanner.jsx'

const CATEGORIES = ["All", "FIA", "MYGA", "Income Planning", "Wealth Transfer"];

const CAT_COLORS = {
  "FIA":             { bg: "rgba(36,148,193,.10)",  color: "#1A7FAA" },
  "MYGA":            { bg: "rgba(42,124,79,.10)",   color: "#1E6B42" },
  "Income Planning": { bg: "rgba(193,92,44,.10)",   color: "#A04A1A" },
  "Wealth Transfer": { bg: "rgba(112,186,191,.18)", color: "#1A8B8F" },
};

const CASES = [
  {
    category: "Wealth Transfer",
    client: "John & Betty",
    product: "Harbourview FIA",
    title: "Leave a Legacy with the Harbourview FIA",
    desc: "A couple in their late 70s wanted to fund their grandchildren's university education but couldn't qualify for life insurance. Their advisor recommended the Harbourview FIA — and after 10 years their $100,000 grew to $213,065.",
    highlight: "$113,065 in earned interest over 10 years",
    tags: ["Principal Protection", "Death Benefit", "Tax-Deferred Growth"],
  },
  {
    category: "Income Planning",
    client: "Robert & Carol",
    product: "Harbourview MYGA",
    title: "Securing Retirement Income with a 5-Year MYGA Ladder",
    desc: "A couple approaching retirement wanted predictable income to bridge the gap before Social Security. Their advisor structured three Harbourview MYGAs with staggered maturities, locking in competitive rates and eliminating reinvestment risk.",
    highlight: "Guaranteed rate locked for each segment of a 3-5-7 year ladder",
    tags: ["Guaranteed Rate", "Income Bridge", "Laddering Strategy"],
  },
  {
    category: "FIA",
    client: "Patricia",
    product: "CapLock FIA",
    title: "Protecting a Rollover IRA During Volatile Markets",
    desc: "After retiring, Patricia rolled a $250,000 401(k) into a CapLock FIA. The locked participation cap provided upside exposure while eliminating downside risk — her account value never declined despite two significant index drawdowns.",
    highlight: "Zero loss in two consecutive down-market years",
    tags: ["Principal Protection", "Locked Cap Rate", "IRA Rollover"],
  },
  {
    category: "MYGA",
    client: "David",
    product: "Sky Harbourview MYGA",
    title: "Replacing a CD Portfolio with Higher-Yielding MYGAs",
    desc: "A recently retired engineer held $400,000 in maturing CDs earning under 1%. His advisor reallocated to a mix of Horizon and Sky Harbourview MYGAs, more than tripling the effective yield while maintaining liquidity through free withdrawal provisions.",
    highlight: "Effective yield tripled vs. comparable CDs",
    tags: ["CD Alternative", "Tax Deferral", "Free Withdrawals"],
  },
  {
    category: "Income Planning",
    client: "Linda",
    product: "Harbourview FIA",
    title: "Using an FIA to Delay Social Security and Maximize Benefits",
    desc: "By allocating a portion of her savings to a Harbourview FIA, Linda was able to fund living expenses from age 63 to 70 — allowing her to delay Social Security claiming and receive 76% more in monthly benefits for life.",
    highlight: "76% higher monthly Social Security benefit at 70 vs. 62",
    tags: ["Social Security Optimization", "Income Bridge", "FIA"],
  },
  {
    category: "Wealth Transfer",
    client: "The Nguyen Family",
    product: "Harbourview MYGA",
    title: "Trust-Owned Annuities and Multi-Generational Wealth Transfer",
    desc: "A high-net-worth family worked with an estate attorney to place a MYGA inside an irrevocable trust. The structured death benefit and tax-deferred compounding allowed wealth to pass to the next generation while reducing the estate tax exposure.",
    highlight: "Estimated 22% reduction in taxable estate value",
    tags: ["Estate Planning", "Irrevocable Trust", "Death Benefit"],
  },
];

function CategoryPill({ label }) {
  const style = CAT_COLORS[label] || { bg: "rgba(13,31,78,.07)", color: "#4A5568" };
  return (
    <span style={{ background: style.bg, color: style.color, borderRadius: 200, padding: "3px 10px", fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.1px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
      {label}
    </span>
  );
}

function CaseCard({ category, client, product, title, desc, highlight, tags }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(13,31,78,.07)", boxShadow: "0 2px 12px rgba(13,31,78,.04)", display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }} className="ov-blog-card">
      {/* Color bar */}
      <div style={{ height: 4, background: CAT_COLORS[category]?.color ?? "#2494C1", flexShrink: 0 }} />
      <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <CategoryPill label={category} />
          <span style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 12, color: "var(--ov-grey-500)" }}>{product}</span>
        </div>
        <h3 style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 19, color: "var(--ov-navy-900)", margin: 0, letterSpacing: "-0.015em", lineHeight: 1.25, flex: 1 }}>
          {title}
        </h3>
        <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 13.5, lineHeight: 1.65, color: "var(--ov-grey-600)", margin: 0 }}>
          {desc}
        </p>
        {/* Highlight callout */}
        <div style={{ background: "rgba(36,148,193,.07)", borderLeft: "3px solid #2494C1", borderRadius: "0 8px 8px 0", padding: "10px 14px" }}>
          <p style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13, color: "#1A7FAA", margin: 0, lineHeight: 1.4 }}>{highlight}</p>
        </div>
        {/* Tags */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
          {tags.map(tag => (
            <span key={tag} style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 11, fontWeight: 600, color: "var(--ov-grey-600)", background: "rgba(13,31,78,.05)", borderRadius: 4, padding: "3px 8px" }}>{tag}</span>
          ))}
        </div>
        <div style={{ marginTop: "auto", paddingTop: 8 }}>
          <TextLink onClick={() => window.location.hash = 'case-studies'} style={{ fontSize: 13 }}>Read Case Study</TextLink>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? CASES
    : CASES.filter(c => c.category === activeCategory);

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "#fff", padding: "80px 0 64px", textAlign: "center" }}>
        <div className="ov-container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: "#2494C1", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.4px", textTransform: "uppercase", color: "#2494C1" }}>Client Resources</span>
          </div>
          <h1 style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(32px, 4.5vw, 62px)", letterSpacing: "-0.025em", lineHeight: 1.08, color: "#0D1F4E", margin: "0 auto 24px", maxWidth: "20ch" }}>
            Case Studies
          </h1>
          <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: "clamp(15px, 1.4vw, 17px)", lineHeight: 1.65, color: "#4A5568", margin: "0 auto", maxWidth: "52ch" }}>
            Real-world scenarios showing how Oceanview FIA and MYGA products have helped clients protect principal, generate income, and build lasting legacies.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section style={{ background: "var(--ov-surface-tint)" }} className="ov-section">
        <div className="ov-container">

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13,
                  padding: "8px 18px", borderRadius: 200, border: "1.5px solid",
                  cursor: "pointer", transition: "all .15s ease",
                  background: activeCategory === cat ? "var(--ov-navy-900)" : "#fff",
                  color: activeCategory === cat ? "#fff" : "var(--ov-navy-900)",
                  borderColor: activeCategory === cat ? "var(--ov-navy-900)" : "rgba(13,31,78,.15)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="ov-blog-grid">
            {filtered.map(c => <CaseCard key={c.title} {...c} />)}
          </div>

          {filtered.length === 0 && (
            <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 15, color: "var(--ov-grey-600)", textAlign: "center", padding: "60px 0" }}>
              No case studies in this category yet.
            </p>
          )}

        </div>
      </section>

      <section className="ov-section" style={{ background: "#fff" }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Put It Into Practice"
            title="See which products fit"
            titleAccent="your clients' stories."
            body="Competitive guaranteed rates, principal protection, and a dedicated service team — backed by an A (Excellent) A.M. Best rating."
            cta="Explore Products"
            onClick={() => { window.location.hash = 'products'; }}
          />
        </div>
      </section>
    </main>
  );
}
