// ProductsPage.jsx — Products catalog (mobile-first)
import { useState, useEffect, useRef } from 'react'
import PageHero from './PageHero.jsx'
import CTABanner from './CTABanner.jsx'

const PS = {
  // ── Two-level sticky nav (Figma 6940-103) ─────────────────────────────
  // top: 96px = --ov-header-h so it sticks below the sticky header
  navOuter:   { background: "#fff", position: "sticky", top: "var(--ov-header-h)", zIndex: 50, boxShadow: "0 1px 0 #e8e5e5" },

  // Category row (top)
  catRow:     { display: "flex", overflowX: "auto", WebkitOverflowScrolling: "touch" },
  catTab:     { flex: "1 0 0", minWidth: 160, display: "flex", flexDirection: "column", alignItems: "center", gap: 13, padding: "16px 12px 17px", textDecoration: "none", transition: "border-color .15s" },
  catTabActive:{ borderBottom: "3px solid #2494C1", paddingBottom: 19 },
  catTabInactive:{ borderBottom: "1px solid #e8e5e5" },
  catLabel:   { fontFamily: "var(--ov-ff-display)", fontWeight: 800, fontSize: "clamp(11px,1vw,13px)", letterSpacing: ".04em", textTransform: "uppercase", color: "#233D7C", textAlign: "center", lineHeight: 1.1, whiteSpace: "nowrap" },
  catSub:     { fontFamily: "var(--ov-ff-sans)", fontWeight: 400, fontSize: "clamp(11px,.9vw,13px)", color: "rgba(51,51,51,0.8)", textAlign: "center", lineHeight: "28.8px", whiteSpace: "nowrap" },

  // Product row (bottom)
  prdRow:     { display: "flex", borderBottom: "1px solid #e8e5e5", overflowX: "auto", WebkitOverflowScrolling: "touch" },
  prdTab:     { flex: "1 0 0", minWidth: 100, height: 51, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px", borderRight: "1px solid #e8e5e5", fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13, color: "#001F54", textDecoration: "none", whiteSpace: "nowrap", textTransform: "capitalize", transition: "background .15s" },
  prdTabActive:{ background: "rgba(226,241,242,0.6)" },
  prdTabInactive:{ background: "transparent" },

  // ── Section shell ──────────────────────────────────────────────────────
  sectionWhite: { background: "#fff" },
  sectionTint:  { background: "var(--ov-surface-tint)" },

  // ── Category intro row (mobile: col) ───────────────────────────────────
  introRow:    { display: "flex", flexDirection: "column", gap: 32, alignItems: "flex-start" },
  introImg:    { width: "100%", aspectRatio: "4/3", borderRadius: 20, objectFit: "cover", objectPosition: "center top", display: "block", flexShrink: 0 },
  introText:   { display: "flex", flexDirection: "column", gap: 22, flex: 1 },

  eyebrowRow:  { display: "flex", alignItems: "center", gap: 6, marginBottom: 14 },
  eyebrowLine: { width: 18, height: 1, background: "#2494C1", flexShrink: 0 },
  eyebrow:     { fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.2px", textTransform: "uppercase", color: "#2494C1" },
  h2:          { fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(26px, 3vw, 40px)", color: "#0D1F4E", letterSpacing: "-0.025em", lineHeight: 1.12, margin: 0 },
  body:        { fontFamily: "var(--ov-ff-sans)", fontSize: 15, color: "#4A5568", lineHeight: 1.65, margin: 0 },

  // ── Key Features teal card ─────────────────────────────────────────────
  kfCard:      { background: "#fff", borderRadius: 12, padding: "18px 24px 20px" },
  kfLabel:     { fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.2px", textTransform: "uppercase", color: "#2494C1", marginBottom: 12 },
  kfItem:      { display: "flex", gap: 8, alignItems: "flex-start", padding: "9px 0", borderTop: "1px solid rgba(36,148,193,.12)" },
  kfText:      { fontFamily: "var(--ov-ff-sans)", fontSize: 14, color: "#4A5568", lineHeight: 1.55, margin: 0 },

  // ── Product cards grid (mobile: col) ───────────────────────────────────
  cardsGrid:   { display: "flex", flexDirection: "column", gap: 24 },
  card:        { background: "#fff", border: "1px solid rgba(13,31,78,.08)", borderRadius: 16, padding: "28px 32px 32px", display: "flex", flexDirection: "column", gap: 18, boxShadow: "0 2px 12px rgba(13,31,78,.04)", height: "100%", boxSizing: "border-box" },
  cardEyebrow: { fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.2px", textTransform: "uppercase", color: "#2494C1", marginBottom: 10 },
  cardH3:      { fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(18px, 1.8vw, 22px)", color: "#0D1F4E", letterSpacing: "-0.015em", lineHeight: 1.2, margin: 0 },
  cardBody:    { fontFamily: "var(--ov-ff-sans)", fontSize: 14, color: "#4A5568", lineHeight: 1.65, margin: 0, flex: 1 },
  cardBullets: { background: "rgba(112,186,191,.15)", borderRadius: 10, padding: "14px 18px" },
  cbLabel:     { fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.2px", textTransform: "uppercase", color: "#2494C1", marginBottom: 10 },
  cbItem:      { display: "flex", gap: 8, alignItems: "flex-start", padding: "8px 0", borderTop: "1px solid rgba(36,148,193,.10)" },
  cbText:      { fontFamily: "var(--ov-ff-sans)", fontSize: 13, color: "#4A5568", lineHeight: 1.5, margin: 0 },

  // ── Bottom CTA ─────────────────────────────────────────────────────────
  ctaPanel:    { background: "var(--ov-surface-tint)", borderRadius: 20, padding: "clamp(48px,6vw,72px) clamp(24px,5vw,56px)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 20 },
  ctaH2:       { fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(26px,3vw,40px)", color: "#0D1F4E", letterSpacing: "-0.025em", lineHeight: 1.12, margin: 0 },
  ctaBody:     { fontFamily: "var(--ov-ff-sans)", fontSize: 15, color: "#4A5568", lineHeight: 1.65, maxWidth: "52ch", margin: 0 },
  ctaBtns:     { display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" },
};

const CHECK = (
  <svg width="8" height="9" viewBox="0 0 8 9" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
    <path d="M1 4.5L3 6.5L7 2.5" stroke="#2494C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function PrdEyebrow({ children }) {
  return (
    <div style={PS.eyebrowRow}>
      <div style={PS.eyebrowLine}/>
      <span style={PS.eyebrow}>{children}</span>
    </div>
  );
}

function KeyFeaturesCard({ features, teal }) {
  return (
    <div style={{ ...PS.kfCard, background: teal ? "rgba(112,186,191,.18)" : "#fff" }}>
      <div style={PS.kfLabel}>Key Features</div>
      {features.map((f, i) => (
        <div key={i} style={PS.kfItem}>{CHECK}<p style={PS.kfText}>{f}</p></div>
      ))}
    </div>
  );
}

function ProductCard({ eyebrow, heading, body, bullets }) {
  return (
    <div style={PS.card}>
      <div>
        <div style={PS.cardEyebrow}>{eyebrow}</div>
        <h3 style={PS.cardH3}>{heading}</h3>
      </div>
      <p style={PS.cardBody}>{body}</p>
      <div style={PS.cardBullets}>
        <div style={PS.cbLabel}>Ideal for individuals who</div>
        {bullets.map((b, i) => (
          <div key={i} style={PS.cbItem}>{CHECK}<p style={PS.cbText}>{b}</p></div>
        ))}
      </div>
    </div>
  );
}

// ── Data ────────────────────────────────────────────────────────────────────

const CAT1_FEATURES = [
  "Guaranteed interest rate for a set term",
  "Predictable, tax-deferred accumulation",
  "Straightforward structure, clear outcomes",
];

const CAT2_FEATURES = [
  "Guaranteed interest during the initial period",
  "Built-in flexibility for future growth options",
  "Designed for changing retirement needs",
];

const CAT3_FEATURES = [
  "Guaranteed interest rate for a set term",
  "Predictable, tax-deferred accumulation",
  "Straightforward structure, clear outcomes",
];

const PRODUCTS = {
  harbourviewMYGA: {
    eyebrow: "Harbourview MYGA",
    heading: "Guaranteed interest with straightforward accumulation",
    body: "A fixed annuity designed for individuals seeking predictable growth through a guaranteed interest rate over a defined period — with no exposure to market volatility.",
    bullets: [
      "Value predictable growth with a guaranteed interest rate",
      "Prefer a simple, clearly defined accumulation approach",
      "Are seeking stability as part of a broader retirement strategy",
      "Want to limit exposure to market-related variability",
    ],
  },
  horizonMYGA: {
    eyebrow: "Horizon MYGA",
    heading: "A clear path to predictable, guaranteed growth",
    body: "Provides guaranteed interest for a set term, offering stable and predictable growth without exposure to market fluctuations — suited for those who want simplicity and certainty.",
    bullets: [
      "Are looking for straightforward, guaranteed growth over a set term",
      "Prioritize clarity and consistency in their retirement planning",
      "Prefer a fixed interest structure with clearly defined outcomes",
      "Want an easy-to-understand accumulation solution",
    ],
  },
  currentRate: {
    eyebrow: "Current Rate Fixed Annuity",
    heading: "Guaranteed growth today with flexibility for the future",
    body: "Begins with a guaranteed interest rate, providing predictable growth during the initial period — with options to adjust your approach as retirement goals evolve.",
    bullets: [
      "Want guaranteed interest during an initial period",
      "May want flexibility to adjust their growth approach in the future",
      "Prefer starting with a fixed strategy while keeping options open",
      "Are planning for retirement in an evolving market environment",
    ],
  },
  harbourviewFIA: {
    eyebrow: "Harbourview FIA",
    heading: "Balanced growth potential with principal protection",
    body: "Offers the opportunity for interest credits based on the performance of a market index, while providing protection of principal from market downturns.",
    bullets: [
      "Are seeking growth potential linked to a market index",
      "Value protection of principal from market downturns",
      "Prefer a balanced, long-term accumulation approach",
      "Want multiple crediting options within a structured framework",
    ],
  },
  capLock: {
    eyebrow: "CapLock",
    heading: "Defined growth parameters with clarity and structure",
    body: "A fixed indexed annuity designed to provide index-linked interest credits within clearly defined limits — transparency around how interest may be credited.",
    bullets: [
      "Prefer clearly defined growth parameters",
      "Value transparency around how interest may be credited",
      "Are comfortable with structured limits in exchange for clarity",
      "Want a disciplined approach to indexed growth potential",
    ],
  },
  topsider: {
    eyebrow: "Topsider",
    heading: "Upside-focused growth potential with built-in protection",
    body: "Designed to emphasize upside potential through index-linked interest crediting — for those focused on accumulation within a structured, protected framework.",
    bullets: [
      "Are focused on upside growth potential within a protected structure",
      "Understand that indexed strategies operate within defined limits",
      "Are comfortable with variability in interest credits year to year",
      "Want an accumulation-focused indexed annuity option",
    ],
  },
};

const CATEGORIES = [
  { id: "fixed-annuities",  label: "Fixed Annuities",                  sub: "Predictable growth with guaranteed interest",                href: "#prd-cat-fixed-annuities" },
  { id: "fixed-with-flex",  label: "Fixed Annuities with Flexibility", sub: "Guaranteed today with future growth options",                href: "#prd-cat-fixed-with-flex" },
  { id: "fixed-indexed",    label: "Fixed Indexed Annuities",          sub: "Growth potential tied to market indexes with protection",    href: "#prd-cat-fixed-indexed" },
];

// scroll-margin-top = header (72px) + nav (~148px) + breathing room (16px)
const SCROLL_MARGIN = "236px";

const NAV_PRODUCTS = [
  { label: "Harbourview MYGA",           href: "#prd-harbourview-myga", cat: "fixed-annuities" },
  { label: "Horizon MYGA",               href: "#prd-horizon-myga",     cat: "fixed-annuities" },
  { label: "Current Rate Fixed Annuity", href: "#prd-current-rate",     cat: "fixed-with-flex" },
  { label: "Harbourview FIA",            href: "#prd-harbourview-fia",  cat: "fixed-indexed" },
  { label: "CapLock",                    href: "#prd-caplock",          cat: "fixed-indexed" },
  { label: "Topsider",                   href: "#prd-topsider",         cat: "fixed-indexed" },
];

// ── Page ────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState("prd-harbourview-myga")
  const activeCategory = NAV_PRODUCTS.find(p => p.href === `#${activeProduct}`)?.cat ?? "fixed-annuities"

  useEffect(() => {
    // Watch product cards to track the active product tab
    const productIds = NAV_PRODUCTS.map(p => p.href.slice(1))
    const observers = productIds.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveProduct(id) },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <main>
      <PageHero
        image="assets/hero-beach-couple.jpg"
        eyebrow="Our Products"
        title="Retirement solutions designed for clarity and confidence."
        subtitle="Guaranteed interest, flexible options, and growth potential — with principal protection at every step."
        ctaPrimary="Compare Products"
      />

      {/* ── Two-level sticky product nav (Figma 6940-103) ──────────── */}
      <nav style={PS.navOuter} aria-label="Products">
        <div className="ov-container">

          {/* Category row */}
          <div style={PS.catRow}>
            {CATEGORIES.map(cat => {
              const isActive = cat.id === activeCategory
              return (
                <a
                  key={cat.id}
                  href={cat.href}
                  style={{ ...PS.catTab, ...(isActive ? PS.catTabActive : PS.catTabInactive) }}
                >
                  <span style={PS.catLabel}>{cat.label}</span>
                  <span style={PS.catSub}>{cat.sub}</span>
                </a>
              )
            })}
          </div>

          {/* Product row */}
          <div style={PS.prdRow}>
            {NAV_PRODUCTS.map(p => {
              const isActive = `#${activeProduct}` === p.href
              return (
                <a
                  key={p.href}
                  href={p.href}
                  style={{ ...PS.prdTab, ...(isActive ? PS.prdTabActive : PS.prdTabInactive) }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "rgba(226,241,242,0.35)" }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent" }}
                >
                  {p.label}
                </a>
              )
            })}
          </div>

        </div>
      </nav>

      {/* ══ Section 1 — Fixed Annuities ════════════════════════════════ */}
      <section id="prd-cat-fixed-annuities" style={{ ...PS.sectionWhite, scrollMarginTop: SCROLL_MARGIN }} className="ov-section prd-section">
        <div className="ov-container">

          {/* Intro: text left, image right */}
          <div style={PS.introRow} className="prd-intro-row prd-intro-img-right">
            <img src="assets/family.png" alt="Couple planning retirement" style={PS.introImg} className="prd-intro-img"/>
            <div style={PS.introText}>
              <div>
                <PrdEyebrow>Fixed Annuities</PrdEyebrow>
                <h2 style={PS.h2}>Predictable growth with guaranteed interest</h2>
              </div>
              <p style={PS.body}>Fixed annuities are designed for individuals seeking stability and certainty as part of their retirement strategy. These products provide a guaranteed interest rate for a defined period, offering predictable, tax-deferred growth without exposure to market fluctuations.</p>
              <p style={PS.body}>They are often used by those who value simplicity, consistency, and knowing what to expect over time.</p>
              <KeyFeaturesCard features={CAT1_FEATURES} teal/>
            </div>
          </div>

          {/* Product grid: 2 cards */}
          <div style={{ ...PS.cardsGrid, marginTop: 56 }} className="prd-cards-grid prd-cards-2col">
            <div id="prd-harbourview-myga" style={{ scrollMarginTop: SCROLL_MARGIN }}><ProductCard {...PRODUCTS.harbourviewMYGA}/></div>
            <div id="prd-horizon-myga"     style={{ scrollMarginTop: SCROLL_MARGIN }}><ProductCard {...PRODUCTS.horizonMYGA}/></div>
          </div>

        </div>
      </section>

      {/* ══ Section 2 — Fixed Annuities with Flexibility ═══════════════ */}
      <section id="prd-cat-fixed-with-flex" style={{ ...PS.sectionTint, scrollMarginTop: SCROLL_MARGIN }} className="ov-section prd-section">
        <div className="ov-container">

          {/* Intro: image left, text right */}
          <div style={PS.introRow} className="prd-intro-row prd-intro-img-left">
            <img src="assets/older-couple-1.png" alt="Couple with flexibility in retirement" style={PS.introImg} className="prd-intro-img"/>
            <div style={PS.introText}>
              <div>
                <PrdEyebrow>Fixed Annuities with Flexibility</PrdEyebrow>
                <h2 style={PS.h2}>Guaranteed growth today with the ability to adapt tomorrow</h2>
              </div>
              <p style={PS.body}>Designed for individuals who want guaranteed interest now while preserving the option to adjust their growth approach down the road.</p>
              <KeyFeaturesCard features={CAT2_FEATURES}/>
            </div>
          </div>

          {/* Single product card */}
          <div id="prd-current-rate" style={{ marginTop: 56, scrollMarginTop: SCROLL_MARGIN }}>
            <ProductCard {...PRODUCTS.currentRate}/>
          </div>

        </div>
      </section>

      {/* ══ Section 3 — Fixed Indexed Annuities ════════════════════════ */}
      <section id="prd-cat-fixed-indexed" style={{ ...PS.sectionWhite, scrollMarginTop: SCROLL_MARGIN }} className="ov-section prd-section">
        <div className="ov-container">

          {/* Intro: text left, image right */}
          <div style={PS.introRow} className="prd-intro-row prd-intro-img-right">
            <img src="assets/lighthouse.jpg" alt="Fixed indexed annuities" style={PS.introImg} className="prd-intro-img"/>
            <div style={PS.introText}>
              <div>
                <PrdEyebrow>Fixed Indexed Annuities</PrdEyebrow>
                <h2 style={PS.h2}>Growth potential linked to market indexes with principal protection</h2>
              </div>
              <p style={PS.body}>Fixed indexed annuities are designed for individuals seeking growth potential tied to a market index — while maintaining protection of principal from market downturns. They are often used by those who value simplicity, consistency, and knowing what to expect over time.</p>
              <KeyFeaturesCard features={CAT3_FEATURES} teal/>
            </div>
          </div>

          {/* Product grid: 3 cards */}
          <div style={{ ...PS.cardsGrid, marginTop: 56 }} className="prd-cards-grid prd-cards-3col">
            <div id="prd-harbourview-fia" style={{ scrollMarginTop: SCROLL_MARGIN }}><ProductCard {...PRODUCTS.harbourviewFIA}/></div>
            <div id="prd-caplock"         style={{ scrollMarginTop: SCROLL_MARGIN }}><ProductCard {...PRODUCTS.capLock}/></div>
            <div id="prd-topsider"        style={{ scrollMarginTop: SCROLL_MARGIN }}><ProductCard {...PRODUCTS.topsider}/></div>
          </div>

        </div>
      </section>

      {/* ══ CTABanner ══════════════════════════════════════════════════ */}
      <section className="ov-section" style={{ background: "var(--ov-surface-tint)" }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Harbourview FIA"
            title="Ready to explore"
            titleAccent="the Harbourview FIA?"
            body="Talk to a financial professional or contact our team to find the strategy that fits your retirement goals."
            cta="Get Started"
            onClick={() => { window.location.hash = 'contact' }}
          />
        </div>
      </section>
    </main>
  );
}
