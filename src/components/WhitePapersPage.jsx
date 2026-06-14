import { useState } from 'react'
import { TextLink } from './Buttons.jsx'
import CTABanner from './CTABanner.jsx'

const CATEGORIES = ["All", "Retirement Risk", "Life Events", "Market Outlook", "Product Research"];

const CAT_COLORS = {
  "Retirement Risk":   { bg: "rgba(193,92,44,.10)",   color: "#A04A1A" },
  "Life Events":       { bg: "rgba(42,124,79,.10)",   color: "#1E6B42" },
  "Market Outlook":    { bg: "rgba(36,148,193,.10)",  color: "#1A7FAA" },
  "Product Research":  { bg: "rgba(112,186,191,.18)", color: "#1A8B8F" },
};

const PAPERS = [
  {
    category: "Retirement Risk",
    date: "May 2026",
    title: "Sequence-of-Returns Risk: How Fixed Annuities Provide a Buffer",
    desc: "An in-depth look at how early portfolio losses permanently impair retirement income — and how a guaranteed floor changes the math.",
    pages: 14,
  },
  {
    category: "Retirement Risk",
    date: "Apr 2026",
    title: "Longevity Risk and the Case for Guaranteed Income",
    desc: "Americans are living longer than actuarial tables predicted. This paper examines how advisors are restructuring income plans to address the risk of outliving assets.",
    pages: 18,
  },
  {
    category: "Retirement Risk",
    date: "Mar 2026",
    title: "Inflation and the Fixed Annuity: Separating Fact from Fiction",
    desc: "A data-driven examination of how fixed and fixed-indexed annuities have performed relative to inflation across multiple interest rate cycles.",
    pages: 12,
  },
  {
    category: "Life Events",
    date: "May 2026",
    title: "Planning for Retirement: A Step-by-Step Guide for Pre-Retirees",
    desc: "Designed for clients within 5 years of retirement, this guide walks through the key decisions — from Social Security timing to income layering strategies.",
    pages: 22,
  },
  {
    category: "Life Events",
    date: "Feb 2026",
    title: "Divorce and Annuities: What Clients Need to Know",
    desc: "A practical overview of how annuity contracts are handled in divorce proceedings, including QDRO applicability, surrender charge considerations, and rollover options.",
    pages: 10,
  },
  {
    category: "Life Events",
    date: "Jan 2026",
    title: "Inheritance and Wealth Transfer: Using Annuities as a Legacy Tool",
    desc: "How MYGAs and FIAs can be structured to maximize the death benefit passed to beneficiaries while maintaining tax-deferred growth during the accumulation phase.",
    pages: 16,
  },
  {
    category: "Market Outlook",
    date: "Jun 2026",
    title: "2026 Mid-Year Fixed Annuity Rate Outlook",
    desc: "Our research team analyzes current Treasury yields, Fed policy expectations, and crediting rate trends to project where MYGA rates are headed in the second half of 2026.",
    pages: 8,
  },
  {
    category: "Market Outlook",
    date: "Q1 2026",
    title: "The New 60/40: Rethinking Portfolio Allocation in a Higher-Rate Environment",
    desc: "With bonds competing again, how do fixed annuities fit alongside a traditional balanced portfolio? This paper examines the tradeoffs across five model portfolios.",
    pages: 20,
  },
  {
    category: "Product Research",
    date: "Apr 2026",
    title: "MYGA vs. CD: A Comprehensive Comparison for Advisors",
    desc: "Side-by-side analysis of multi-year guaranteed annuities and certificates of deposit across tax treatment, liquidity, FDIC vs. insurance guarantees, and net yield.",
    pages: 11,
  },
  {
    category: "Product Research",
    date: "Mar 2026",
    title: "Understanding Index Crediting Strategies in Fixed Indexed Annuities",
    desc: "A plain-language breakdown of the most common crediting methods — annual point-to-point, monthly averaging, and performance-triggered — with illustrated examples.",
    pages: 15,
  },
  {
    category: "Product Research",
    date: "Feb 2026",
    title: "CapLock vs. Traditional FIA: When a Locked Cap Changes the Math",
    desc: "This paper models projected accumulation scenarios under locked vs. annually reset cap structures across 10-year periods and varying index environments.",
    pages: 13,
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

function PaperCard({ category, date, title, desc, pages }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(13,31,78,.07)", boxShadow: "0 2px 12px rgba(13,31,78,.04)", display: "flex", flexDirection: "column", height: "100%", overflow: "hidden", transition: "transform .18s ease, box-shadow .18s ease" }} className="ov-blog-card">
      {/* Color bar */}
      <div style={{ height: 4, background: CAT_COLORS[category]?.color ?? "#2494C1", flexShrink: 0 }} />
      <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <CategoryPill label={category} />
          <span style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 12, color: "var(--ov-grey-500)" }}>{date}</span>
        </div>
        <h3 style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 19, color: "var(--ov-navy-900)", margin: 0, letterSpacing: "-0.015em", lineHeight: 1.25, flex: 1 }}>
          {title}
        </h3>
        <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 13.5, lineHeight: 1.65, color: "var(--ov-grey-600)", margin: 0 }}>
          {desc}
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }}>
          <span style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 12, color: "var(--ov-grey-500)" }}>{pages} pages</span>
          <TextLink onClick={() => window.location.hash = 'downloads'} style={{ fontSize: 13 }}>Download PDF</TextLink>
        </div>
      </div>
    </div>
  );
}

export default function WhitePapersPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? PAPERS
    : PAPERS.filter(p => p.category === activeCategory);

  return (
    <main>
      {/* Hero — professionals style */}
      <section style={{ background: "#fff", padding: "80px 0 64px", textAlign: "center" }}>
        <div className="ov-container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: "#2494C1", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.4px", textTransform: "uppercase", color: "#2494C1" }}>Insights</span>
          </div>
          <h1 style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(32px, 4.5vw, 62px)", letterSpacing: "-0.025em", lineHeight: 1.08, color: "#0D1F4E", margin: "0 auto 24px", maxWidth: "20ch" }}>
            White Papers
          </h1>
          <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: "clamp(15px, 1.4vw, 17px)", lineHeight: 1.65, color: "#4A5568", margin: "0 auto", maxWidth: "52ch" }}>
            In-depth research on retirement risk, life planning events, market conditions, and Oceanview product analysis — written for financial professionals.
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
            {filtered.map(p => <PaperCard key={p.title} {...p} />)}
          </div>

          {filtered.length === 0 && (
            <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 15, color: "var(--ov-grey-600)", textAlign: "center", padding: "60px 0" }}>
              No papers in this category yet.
            </p>
          )}

        </div>
      </section>

      <section className="ov-section" style={{ background: "#fff" }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Put It Into Practice"
            title="Find the right annuity"
            titleAccent="for your clients."
            body="Competitive guaranteed rates, principal protection, and a dedicated service team — backed by an A (Excellent) A.M. Best rating."
            cta="Explore Products"
            onClick={() => { window.location.hash = 'products'; }}
          />
        </div>
      </section>
    </main>
  );
}
