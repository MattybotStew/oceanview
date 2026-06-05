import { useState } from 'react'
import PageHero from './PageHero.jsx'
import { TextLink } from './Buttons.jsx'

// ── Data ─────────────────────────────────────────────────────────────────────

const FEATURED = {
  category: "Company News",
  date: "May 28, 2026",
  title: "Oceanview Receives A (Excellent) Rating from A.M. Best for the Third Consecutive Year",
  excerpt: "A.M. Best has affirmed Oceanview Life and Annuity Company's Financial Strength Rating of A (Excellent), citing our balance-sheet strength, consistent operating performance, and disciplined enterprise risk management.",
  img: "assets/lighthouse.jpg",
  href: "#blog-amBest",
};

const POSTS = [
  {
    category: "Product Updates",
    date: "Jun 2, 2026",
    title: "Harbourview FIA Now Available in All 50 States",
    excerpt: "Following regulatory approval in the remaining three states, our flagship Fixed Indexed Annuity is now accessible to advisors and their clients nationwide.",
    img: "assets/hero-beach-couple.jpg",
    href: "#blog-harbourview-fia",
  },
  {
    category: "Education",
    date: "May 20, 2026",
    title: "Understanding Fixed Indexed Annuities: A Guide for Financial Professionals",
    excerpt: "A plain-language overview of how FIAs work, how interest is credited, and how to position them in a client's retirement portfolio.",
    img: "assets/family.png",
    href: "#blog-fia-guide",
  },
  {
    category: "Market Commentary",
    date: "May 12, 2026",
    title: "Why Retirement Income Planning Has Never Been More Important",
    excerpt: "With interest rates stabilizing and longevity risk rising, fixed annuities are playing a larger role in advisor-built retirement portfolios.",
    img: "assets/four.jpg",
    href: "#blog-income-planning",
  },
  {
    category: "Rates",
    date: "May 1, 2026",
    title: "May 2026 Rate Update: Harbourview MYGA at 5.20%",
    excerpt: "Oceanview's Harbourview MYGA continues to offer some of the industry's most competitive guaranteed rates. View our full rate sheet for all products.",
    img: "assets/two.jpg",
    href: "#blog-may-rates",
  },
  {
    category: "Education",
    date: "Apr 22, 2026",
    title: "The Role of Annuities in a Balanced Retirement Portfolio",
    excerpt: "Fixed annuities and FIAs aren't replacements for equities — they're complements. Here's how advisors are using them to reduce sequence-of-returns risk.",
    img: "assets/older-couple-1.png",
    href: "#blog-balanced-portfolio",
  },
  {
    category: "Company News",
    date: "Apr 10, 2026",
    title: "Oceanview Expands Distribution Partnership Network",
    excerpt: "We've added three new national distribution partners this quarter, bringing Oceanview products to thousands of additional financial professionals.",
    img: "assets/three.jpg",
    href: "#blog-distribution",
  },
  {
    category: "Market Commentary",
    date: "Mar 28, 2026",
    title: "Protecting Against Longevity Risk: An Advisor's Perspective",
    excerpt: "Americans are living longer than actuarial tables predicted a decade ago. We spoke with three advisors about how they're adjusting retirement income plans.",
    img: "assets/hero-couple.jpg",
    href: "#blog-longevity",
  },
  {
    category: "Rates",
    date: "Apr 1, 2026",
    title: "April 2026 Rate Update: New FIA Cap Rates Now Live",
    excerpt: "Updated index cap rates are now in effect for Harbourview FIA and CapLock. The S&P 500 annual cap has been increased to 9.5%.",
    img: "assets/AdobeStock_1231908414@0.3x.jpg",
    href: "#blog-apr-rates",
  },
];

const CATEGORIES = ["All", "Company News", "Product Updates", "Education", "Market Commentary", "Rates"];

const CAT_COLORS = {
  "Company News":      { bg: "rgba(35,61,124,.08)",   color: "#233D7C" },
  "Product Updates":   { bg: "rgba(36,148,193,.10)",  color: "#1A7FAA" },
  "Education":         { bg: "rgba(42,124,79,.10)",   color: "#1E6B42" },
  "Market Commentary": { bg: "rgba(193,92,44,.10)",   color: "#A04A1A" },
  "Rates":             { bg: "rgba(112,186,191,.18)", color: "#1A8B8F" },
};

// ── Components ────────────────────────────────────────────────────────────────

function CategoryPill({ label }) {
  const style = CAT_COLORS[label] || { bg: "rgba(13,31,78,.07)", color: "#4A5568" };
  return (
    <span style={{ background: style.bg, color: style.color, borderRadius: 200, padding: "3px 10px", fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.1px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
      {label}
    </span>
  );
}

function PostCard({ category, date, title, excerpt, img, href }) {
  return (
    <a href={href} style={{ textDecoration: "none" }} className="ov-blog-card">
      <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(13,31,78,.07)", boxShadow: "0 2px 12px rgba(13,31,78,.04)", display: "flex", flexDirection: "column", height: "100%", transition: "transform .18s ease, box-shadow .18s ease" }}>
        <div style={{ aspectRatio: "16/9", overflow: "hidden", flexShrink: 0 }}>
          <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .4s ease" }} className="ov-blog-img" />
        </div>
        <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <CategoryPill label={category} />
            <span style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 12, color: "var(--ov-grey-500)" }}>{date}</span>
          </div>
          <h3 style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 19, color: "var(--ov-navy-900)", margin: 0, letterSpacing: "-0.015em", lineHeight: 1.25, flex: 1 }}>
            {title}
          </h3>
          <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 13.5, lineHeight: 1.65, color: "var(--ov-grey-600)", margin: 0 }}>
            {excerpt}
          </p>
          <span style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13, color: "var(--ov-navy-600)", display: "inline-flex", alignItems: "center", gap: 5, marginTop: 4 }}>
            Read more <span className="ov-blog-arrow" style={{ transition: "transform .18s ease" }}>→</span>
          </span>
        </div>
      </div>
    </a>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? POSTS
    : POSTS.filter(p => p.category === activeCategory);

  return (
    <main>
      <PageHero
        image="assets/hero-beach-couple.jpg"
        eyebrow="Latest from Oceanview"
        title="News, insights, and"
        titleAccent="industry perspective."
        subtitle="Company updates, product news, and commentary on the retirement income landscape."
      />

      {/* ── Featured post ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--ov-navy-1000)" }} className="ov-section">
        <div className="ov-container">
          <a href={FEATURED.href} style={{ textDecoration: "none", display: "block" }} className="ov-blog-featured">
            <div style={{ display: "flex", gap: 64, alignItems: "center" }} className="ov-blog-feat-inner">
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CategoryPill label={FEATURED.category} />
                  <span style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 12, color: "rgba(242,252,255,.45)" }}>{FEATURED.date}</span>
                </div>
                <h2 style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(24px, 2.8vw, 40px)", color: "#F2FCFF", letterSpacing: "-0.025em", lineHeight: 1.1, margin: 0 }}>
                  {FEATURED.title}
                </h2>
                <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 15, lineHeight: 1.7, color: "rgba(242,252,255,.62)", margin: 0, maxWidth: "52ch" }}>
                  {FEATURED.excerpt}
                </p>
                <span style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 14, color: "#70BABF", display: "inline-flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                  Read article <span className="ov-blog-feat-arrow" style={{ transition: "transform .18s ease" }}>→</span>
                </span>
              </div>
              <div style={{ width: "42%", flexShrink: 0, borderRadius: 20, overflow: "hidden", aspectRatio: "4/3" }} className="ov-blog-feat-img">
                <img src={FEATURED.img} alt={FEATURED.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .4s ease" }} className="ov-blog-feat-photo" />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ── Filter + grid ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--ov-surface-tint)" }} className="ov-section">
        <div className="ov-container">

          {/* Category filter */}
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

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="ov-blog-grid">
            {filtered.map(p => <PostCard key={p.title} {...p} />)}
          </div>

          {filtered.length === 0 && (
            <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 15, color: "var(--ov-grey-600)", textAlign: "center", padding: "60px 0" }}>
              No posts in this category yet.
            </p>
          )}

        </div>
      </section>
    </main>
  );
}
