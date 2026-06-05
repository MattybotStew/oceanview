import PageHero from './PageHero.jsx'
import CTABanner from './CTABanner.jsx'
import { PillMint, PillGhost, TextLink } from './Buttons.jsx'

// ── Data ─────────────────────────────────────────────────────────────────────

const FEATURED = {
  eyebrow: "Featured Series",
  title: "The Six Risks That Can Undermine Any Retirement Plan",
  desc: "Sequence-of-returns risk, longevity risk, inflation, healthcare costs, tax exposure, and market volatility — our Retirement Risk Series examines each one and explains how fixed annuities address them.",
  img: "assets/four.jpg",
  href: "#retirement-risk",
  tag: "Retirement Risk Series",
};

const ARTICLES = [
  {
    eyebrow: "Life Events",
    title: "Life Events Series",
    desc: "Financial guidance for navigating divorce, inheritance, loss of a spouse, and late-career transitions.",
    img: "assets/family.png",
    href: "#life-events",
    readTime: "6 articles",
  },
  {
    eyebrow: "Research",
    title: "White Papers",
    desc: "In-depth analysis on annuity markets, retirement income strategies, and regulatory developments.",
    img: "assets/three.jpg",
    href: "#white-papers",
    readTime: "4 papers",
  },
  {
    eyebrow: "Retirement Risk",
    title: "Sequence-of-Returns Risk",
    desc: "Why the order of investment returns matters more than the average — and how annuities provide a hedge.",
    img: "assets/two.jpg",
    href: "#retirement-risk",
    readTime: "8 min read",
  },
  {
    eyebrow: "Life Events",
    title: "Navigating Divorce and Retirement Assets",
    desc: "How to handle annuities, qualified accounts, and income streams during and after a divorce.",
    img: "assets/hero-couple.jpg",
    href: "#life-events",
    readTime: "6 min read",
  },
  {
    eyebrow: "Analysis",
    title: "Fixed Annuities vs. CDs: A Clear-Eyed Comparison",
    desc: "Both offer guaranteed returns, but the differences in tax treatment, liquidity, and long-term value matter.",
    img: "assets/hero-beach-couple.jpg",
    href: "#white-papers",
    readTime: "5 min read",
  },
  {
    eyebrow: "Retirement Risk",
    title: "Longevity Risk and the Case for Lifetime Income",
    desc: "Americans are living longer than ever — here's how advisors can build portfolios that don't run out.",
    img: "assets/older-couple-1.png",
    href: "#retirement-risk",
    readTime: "7 min read",
  },
];

const EYEBROW_COLORS = {
  "Life Events":     "#7C5CBF",
  "Research":        "#2494C1",
  "Retirement Risk": "#C15C2C",
  "Analysis":        "#2A7C4F",
  "Featured Series": "#70BABF",
};

function eyebrowColor(label) {
  return EYEBROW_COLORS[label] || "#2494C1";
}

// ── Components ────────────────────────────────────────────────────────────────

function ArticleCard({ eyebrow, title, desc, img, href, readTime }) {
  const color = eyebrowColor(eyebrow);
  return (
    <a href={href} style={{ textDecoration: "none" }} className="ov-insight-card">
      <div style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(13,31,78,.07)",
        boxShadow: "0 2px 12px rgba(13,31,78,.05)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform .18s ease, box-shadow .18s ease",
      }}>
        <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9", flexShrink: 0 }}>
          <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .4s ease" }} className="ov-insight-img" />
          <div style={{ position: "absolute", top: 14, left: 14 }}>
            <span style={{ background: "#fff", borderRadius: 200, padding: "4px 12px", fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.2px", textTransform: "uppercase", color, boxShadow: "0 1px 4px rgba(0,0,0,.12)" }}>
              {eyebrow}
            </span>
          </div>
        </div>
        <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
          <h3 style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 20, color: "var(--ov-navy-900)", margin: 0, letterSpacing: "-0.015em", lineHeight: 1.25 }}>
            {title}
          </h3>
          <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 14, lineHeight: 1.65, color: "var(--ov-grey-600)", margin: 0, flex: 1 }}>
            {desc}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }}>
            {readTime && <span style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 12, color: "var(--ov-grey-500)" }}>{readTime}</span>}
            <span style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13, color: "var(--ov-navy-600)", display: "inline-flex", alignItems: "center", gap: 5, marginLeft: "auto" }}>
              Read <span className="ov-insight-arrow" style={{ transition: "transform .18s ease" }}>→</span>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        image="assets/older-couple-1.png"
        eyebrow="Insights"
        title="Ideas for a"
        titleAccent="more secure retirement."
        subtitle="Research, analysis, and practical guidance for advisors helping clients plan for the long term."
      />

      {/* ── Featured ──────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--ov-navy-1000)" }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: "flex", gap: 64, alignItems: "center" }} className="ov-insight-featured">
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 18, height: 1, background: "rgba(112,186,191,.6)", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.4px", textTransform: "uppercase", color: "#70BABF" }}>
                  {FEATURED.eyebrow}
                </span>
              </div>
              <h2 style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(26px, 3vw, 42px)", color: "#F2FCFF", letterSpacing: "-0.025em", lineHeight: 1.1, margin: 0 }}>
                {FEATURED.title}
              </h2>
              <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 15, lineHeight: 1.7, color: "rgba(242,252,255,.65)", margin: 0, maxWidth: "52ch" }}>
                {FEATURED.desc}
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
                <PillMint onClick={() => { window.location.hash = FEATURED.href.slice(1); }}>Read the Series</PillMint>
                <PillGhost light onClick={() => { window.location.hash = 'white-papers'; }}>View White Papers</PillGhost>
              </div>
            </div>
            <div style={{ width: "42%", flexShrink: 0, borderRadius: 20, overflow: "hidden", aspectRatio: "4/3" }} className="ov-insight-feat-img">
              <img src={FEATURED.img} alt={FEATURED.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Articles grid ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--ov-surface-tint)" }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(26px, 3vw, 38px)", color: "var(--ov-navy-900)", letterSpacing: "-0.02em", margin: "0 0 8px" }}>
              All Insights
            </h2>
            <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 15, color: "var(--ov-grey-600)", margin: 0 }}>
              Series, white papers, and standalone articles for advisors and their clients.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="ov-insights-grid">
            {ARTICLES.map(a => <ArticleCard key={a.title} {...a} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="ov-section" style={{ background: "#fff" }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Put It Into Practice"
            title="Retirement confidence starts"
            titleAccent="with the right strategy."
            body="Discover how Oceanview's annuity products help clients secure predictable income with principal protection."
            cta="Compare Products"
            onClick={() => { window.location.hash = 'products'; }}
          />
        </div>
      </section>
    </main>
  );
}
