// ProductsPage.jsx — Products catalog
import { useState, useEffect } from 'react'
import PageHero from './PageHero.jsx'
import CTABanner from './CTABanner.jsx'
import { TextLink } from './Buttons.jsx'
import { Eyebrow } from './common.jsx'

const PS = {
  // ── Two-level sticky nav ───────────────────────────────────────────────────
  navOuter:     { background: "#fff", position: "sticky", top: "var(--ov-header-h, 72px)", zIndex: 50, boxShadow: "0 1px 0 #e8e5e5" },
  catRow:       { display: "flex", overflowX: "auto", WebkitOverflowScrolling: "touch" },
  catTab:       { flex: "1 0 0", minWidth: 160, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "14px 12px 15px", textDecoration: "none", transition: "border-color .15s" },
  catTabActive: { borderBottom: "3px solid #2494C1", paddingBottom: 19 },
  catTabInact:  { borderBottom: "1px solid #e8e5e5" },
  catLabel:     { fontFamily: "var(--ov-ff-display)", fontWeight: 800, fontSize: "clamp(11px,1vw,13px)", letterSpacing: ".04em", textTransform: "uppercase", color: "#233D7C", textAlign: "center", lineHeight: 1.1, whiteSpace: "nowrap" },
  catSub:       { fontFamily: "var(--ov-ff-sans)", fontWeight: 400, fontSize: "clamp(11px,.9vw,13px)", color: "rgba(51,51,51,0.7)", textAlign: "center", lineHeight: 1.2, whiteSpace: "nowrap" },
  prdRow:       { display: "flex", borderBottom: "1px solid #e8e5e5", overflowX: "auto", WebkitOverflowScrolling: "touch" },
  prdTab:       { flex: "1 0 0", minWidth: 100, height: 51, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px", borderRight: "1px solid #e8e5e5", fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13, color: "#001F54", textDecoration: "none", whiteSpace: "nowrap", transition: "background .15s" },
  prdTabActive: { background: "rgba(226,241,242,0.6)" },
  prdTabInact:  { background: "transparent" },

  // ── Shared section styles ──────────────────────────────────────────────────
  sectionWhite: { background: "#fff" },
  sectionTint:  { background: "var(--ov-surface-tint)" },
  sectionDark:  { background: "var(--ov-navy-1000)" },

  // ── Intro row ──────────────────────────────────────────────────────────────
  introRow:  { display: "flex", flexDirection: "column", gap: 32, alignItems: "flex-start" },
  introImg:  { width: "100%", aspectRatio: "4/3", borderRadius: 20, objectFit: "cover", objectPosition: "center top", display: "block", flexShrink: 0 },
  introText: { display: "flex", flexDirection: "column", gap: 20, flex: 1 },

  h2:      { fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(26px, 3vw, 40px)", color: "#0D1F4E", letterSpacing: "-0.025em", lineHeight: 1.12, margin: 0 },
  h2Dark:  { color: "#F2FCFF" },
  body:    { fontFamily: "var(--ov-ff-sans)", fontSize: 15, color: "#4A5568", lineHeight: 1.65, margin: 0 },
  bodyDark:{ fontFamily: "var(--ov-ff-sans)", fontSize: 15, color: "rgba(242,252,255,.65)", lineHeight: 1.65, margin: 0 },

  // ── Product cards ──────────────────────────────────────────────────────────
  cardsGrid:   { display: "flex", flexDirection: "column", gap: 24 },
  card:        { background: "#fff", border: "1px solid rgba(13,31,78,.08)", borderRadius: 16, padding: "28px 32px 32px", display: "flex", flexDirection: "column", gap: 16, boxShadow: "0 2px 12px rgba(13,31,78,.04)", height: "100%", boxSizing: "border-box" },
  cardHeader:  { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" },
  cardEyebrow: { fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.2px", textTransform: "uppercase", color: "#2494C1", marginBottom: 8 },
  cardH3:      { fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(18px, 1.8vw, 22px)", color: "#0D1F4E", letterSpacing: "-0.015em", lineHeight: 1.2, margin: 0 },
  cardBody:    { fontFamily: "var(--ov-ff-sans)", fontSize: 14, color: "#4A5568", lineHeight: 1.65, margin: 0, flex: 1 },
  rateBadge:   { background: "var(--ov-surface-tint)", border: "1px solid rgba(36,148,193,.2)", borderRadius: 8, padding: "8px 14px", flexShrink: 0, textAlign: "right" },
  rateBadgeVal:{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 22, color: "var(--ov-teal-600)", lineHeight: 1 },
  rateBadgeLbl:{ fontFamily: "var(--ov-ff-sans)", fontSize: 11, color: "#4A5568", marginTop: 3, whiteSpace: "nowrap" },
  cardBullets: { background: "rgba(112,186,191,.12)", borderRadius: 10, padding: "14px 18px" },
  cbLabel:     { fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.2px", textTransform: "uppercase", color: "#2494C1", marginBottom: 10 },
  cbItem:      { display: "flex", gap: 8, alignItems: "flex-start", padding: "7px 0", borderTop: "1px solid rgba(36,148,193,.10)" },
  cbText:      { fontFamily: "var(--ov-ff-sans)", fontSize: 13, color: "#4A5568", lineHeight: 1.5, margin: 0 },
};

const CHECK = (
  <svg width="8" height="9" viewBox="0 0 8 9" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
    <path d="M1 4.5L3 6.5L7 2.5" stroke="#2494C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Clean inline feature list — replaces the card-within-a-card
function FeatureList({ features, dark }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {features.map((f, i) => (
        <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 0", borderTop: i > 0 ? `1px solid ${dark ? "rgba(255,255,255,.08)" : "rgba(36,148,193,.12)"}` : "none" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="7" cy="7" r="6.5" stroke={dark ? "#70BABF" : "#2494C1"} strokeOpacity={dark ? "0.5" : "0.3"}/>
            <path d="M4.5 7L6.5 9L9.5 5" stroke={dark ? "#70BABF" : "#2494C1"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 14, lineHeight: 1.6, color: dark ? "rgba(242,252,255,.72)" : "#4A5568" }}>{f}</span>
        </div>
      ))}
    </div>
  );
}

function ProductCard({ eyebrow, heading, body, bullets, rate, rateTerm, href }) {
  return (
    <div style={PS.card}>
      <div style={PS.cardHeader}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={PS.cardEyebrow}>{eyebrow}</div>
          <h3 style={PS.cardH3}>{heading}</h3>
        </div>
        {rate && (
          <div style={PS.rateBadge}>
            <div style={PS.rateBadgeVal}>{rate}</div>
            <div style={PS.rateBadgeLbl}>{rateTerm}</div>
          </div>
        )}
      </div>
      <p style={PS.cardBody}>{body}</p>
      <div style={PS.cardBullets}>
        <div style={PS.cbLabel}>Ideal for individuals who</div>
        {bullets.map((b, i) => (
          <div key={i} style={PS.cbItem}>{CHECK}<p style={PS.cbText}>{b}</p></div>
        ))}
      </div>
      {href && <TextLink style={{ marginTop: "auto", paddingTop: 8, fontSize: 13 }} onClick={() => { window.location.hash = href.replace('#',''); window.scrollTo({top:0,behavior:'instant'}); }}>Learn more</TextLink>}
    </div>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

const CAT1_FEATURES = [
  "Guaranteed interest rate locked in for the full term",
  "Predictable, tax-deferred accumulation with no market exposure",
  "Straightforward structure — know exactly what to expect",
];
const CAT2_FEATURES = [
  "Guaranteed interest during the initial crediting period",
  "Built-in flexibility to adjust your approach as goals evolve",
  "Clear, defined structure with options for the future",
];
const CAT3_FEATURES = [
  "Interest credits linked to a market index — no direct investment",
  "Zero-percent floor protects principal from market downturns",
  "Multiple crediting strategies to match different risk profiles",
];

const PRODUCTS = {
  harbourviewMYGA: {
    href: "#harbourview-myga",
    eyebrow: "Harbourview MYGA", rate: "5.20%", rateTerm: "5-Year Guaranteed",
    heading: "Guaranteed interest with straightforward accumulation",
    body: "A fixed annuity designed for individuals seeking predictable growth through a guaranteed interest rate over a defined period — with no exposure to market volatility.",
    bullets: ["Value predictable growth with a guaranteed interest rate", "Prefer a simple, clearly defined accumulation approach", "Are seeking stability as part of a broader retirement strategy", "Want to limit exposure to market-related variability"],
  },
  horizonMYGA: {
    href: "#horizon-myga",
    eyebrow: "Horizon MYGA", rate: "5.10%", rateTerm: "7-Year Guaranteed",
    heading: "A clear path to predictable, guaranteed growth",
    body: "Provides guaranteed interest for a set term, offering stable and predictable growth without exposure to market fluctuations — suited for those who want simplicity and certainty.",
    bullets: ["Are looking for straightforward, guaranteed growth over a set term", "Prioritize clarity and consistency in their retirement planning", "Prefer a fixed interest structure with clearly defined outcomes", "Want an easy-to-understand accumulation solution"],
  },
  currentRate: {
    href: "#current-rate-fia",
    eyebrow: "Current Rate Fixed Annuity", rate: "4.95%", rateTerm: "3-Year Initial Rate",
    heading: "Guaranteed growth today with flexibility for the future",
    body: "Begins with a guaranteed interest rate, providing predictable growth during the initial period — with options to adjust your approach as retirement goals evolve.",
    bullets: ["Want guaranteed interest during an initial period", "May want flexibility to adjust their growth approach in the future", "Prefer starting with a fixed strategy while keeping options open", "Are planning for retirement in an evolving market environment"],
  },
  harbourviewFIA: {
    href: "#harbourview-fia",
    eyebrow: "Harbourview FIA", rate: "9.5%", rateTerm: "S&P 500 Index Cap",
    heading: "Balanced growth potential with principal protection",
    body: "Offers the opportunity for interest credits based on the performance of a market index, while providing protection of principal from market downturns.",
    bullets: ["Are seeking growth potential linked to a market index", "Value protection of principal from market downturns", "Prefer a balanced, long-term accumulation approach", "Want multiple crediting options within a structured framework"],
  },
  capLock: {
    href: "#caplock",
    eyebrow: "CapLock", rate: "11.0%", rateTerm: "Index Cap (Bonus)",
    heading: "Defined growth parameters with clarity and structure",
    body: "A fixed indexed annuity designed to provide index-linked interest credits within clearly defined limits — transparency around how interest may be credited.",
    bullets: ["Prefer clearly defined growth parameters", "Value transparency around how interest may be credited", "Are comfortable with structured limits in exchange for clarity", "Want a disciplined approach to indexed growth potential"],
  },
  topsider: {
    href: "#topsider",
    eyebrow: "Topsider", rate: null, rateTerm: null,
    heading: "Upside-focused growth potential with built-in protection",
    body: "Designed to emphasize upside potential through index-linked interest crediting — for those focused on accumulation within a structured, protected framework.",
    bullets: ["Are focused on upside growth potential within a protected structure", "Understand that indexed strategies operate within defined limits", "Are comfortable with variability in interest credits year to year", "Want an accumulation-focused indexed annuity option"],
  },
};

const CATEGORIES = [
  { id: "fixed-annuities", label: "Fixed Annuities",                  sub: "Predictable growth · guaranteed interest",             href: "#prd-cat-fixed-annuities" },
  { id: "fixed-with-flex", label: "Fixed Annuities with Flexibility", sub: "Guaranteed today · growth potential",                   href: "#prd-cat-fixed-with-flex" },
  { id: "fixed-indexed",   label: "Fixed Indexed Annuities",          sub: "CapLock · Topsider",                                    href: "#prd-cat-fixed-indexed" },
];

const SCROLL_MARGIN = "240px";

const NAV_PRODUCTS = [
  { label: "Harbourview MYGA",           href: "#prd-harbourview-myga", cat: "fixed-annuities" },
  { label: "Horizon MYGA",               href: "#prd-horizon-myga",     cat: "fixed-annuities" },
  { label: "Current Rate Fixed Annuity", href: "#prd-current-rate",     cat: "fixed-with-flex" },
  { label: "Harbourview FIA",            href: "#prd-harbourview-fia",  cat: "fixed-with-flex" },
  { label: "CapLock",                    href: "#prd-caplock",          cat: "fixed-indexed" },
  { label: "Topsider",                   href: "#prd-topsider",         cat: "fixed-indexed" },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState("prd-harbourview-myga");
  const activeCategory = NAV_PRODUCTS.find(p => p.href === `#${activeProduct}`)?.cat ?? "fixed-annuities";

  useEffect(() => {
    const ids = NAV_PRODUCTS.map(p => p.href.slice(1));
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveProduct(id); },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <main>
      <PageHero
        image="assets/hero-beach-couple.jpg"
        eyebrow="Our Products"
        title="Retirement solutions designed for"
        titleAccent="clarity and confidence."
        subtitle="Guaranteed interest, flexible options, and growth potential — with principal protection at every step."
        ctaPrimary="Compare Products"
      />

      {/* ── Two-level sticky nav ─────────────────────────────────────────── */}
      <nav style={PS.navOuter} aria-label="Products">
        <div className="ov-container">
          <div style={PS.catRow}>
            {CATEGORIES.map(cat => {
              const isActive = cat.id === activeCategory;
              return (
                <a key={cat.id} href={cat.href} style={{ ...PS.catTab, ...(isActive ? PS.catTabActive : PS.catTabInact) }}>
                  <span style={PS.catLabel}>{cat.label}</span>
                  <span style={PS.catSub}>{cat.sub}</span>
                </a>
              );
            })}
          </div>
          <div style={PS.prdRow}>
            {NAV_PRODUCTS.map(p => {
              const isActive = `#${activeProduct}` === p.href;
              return (
                <a key={p.href} href={p.href}
                  style={{ ...PS.prdTab, ...(isActive ? PS.prdTabActive : PS.prdTabInact) }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "rgba(226,241,242,0.35)"; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
                >
                  {p.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ══ 1 — Fixed Annuities (white) ══════════════════════════════════ */}
      <section id="prd-cat-fixed-annuities" style={{ ...PS.sectionWhite, scrollMarginTop: SCROLL_MARGIN }} className="ov-section prd-section">
        <div className="ov-container">
          <div style={PS.introRow} className="prd-intro-row prd-intro-img-right">
            <img src="assets/family.png" alt="Family planning retirement" style={PS.introImg} className="prd-intro-img"/>
            <div style={PS.introText}>
              <div>
                <Eyebrow>Fixed Annuities</Eyebrow>
                <h2 style={PS.h2}>Predictable growth with <em style={{ fontStyle: "italic", color: "#2494C1" }}>guaranteed interest</em></h2>
              </div>
              <p style={PS.body}>Fixed annuities provide a guaranteed interest rate for a defined period, offering predictable, tax-deferred growth with no exposure to market fluctuations. Built for those who value simplicity and knowing exactly what to expect.</p>
              <FeatureList features={CAT1_FEATURES} />
            </div>
          </div>
          <div style={{ ...PS.cardsGrid, marginTop: 56 }} className="prd-cards-grid prd-cards-2col">
            <div id="prd-harbourview-myga" style={{ scrollMarginTop: SCROLL_MARGIN }}><ProductCard {...PRODUCTS.harbourviewMYGA}/></div>
            <div id="prd-horizon-myga"     style={{ scrollMarginTop: SCROLL_MARGIN }}><ProductCard {...PRODUCTS.horizonMYGA}/></div>
          </div>
        </div>
      </section>

      {/* ══ 2 — Fixed Annuities with Flexibility (dark navy) ════════════ */}
      <section id="prd-cat-fixed-with-flex" style={{ ...PS.sectionDark, scrollMarginTop: SCROLL_MARGIN }} className="ov-section prd-section">
        <div className="ov-container">
          <div style={PS.introRow} className="prd-intro-row prd-intro-img-left">
            <img src="assets/older-couple-1.png" alt="Couple planning retirement with flexibility" style={PS.introImg} className="prd-intro-img"/>
            <div style={PS.introText}>
              <div>
                <Eyebrow light>Fixed Annuities with Flexibility</Eyebrow>
                <h2 style={{ ...PS.h2, ...PS.h2Dark }}>Guaranteed growth today, <em style={{ fontStyle: "italic", color: "#70BABF" }}>with room to adapt.</em></h2>
              </div>
              <p style={PS.bodyDark}>Guaranteed interest with the ability to pursue additional growth — whether through a flexible fixed rate structure or index-linked crediting with principal protection.</p>
              <FeatureList features={CAT2_FEATURES} dark />
            </div>
          </div>
          <div style={{ ...PS.cardsGrid, marginTop: 56 }} className="prd-cards-grid prd-cards-2col">
            <div id="prd-current-rate"    style={{ scrollMarginTop: SCROLL_MARGIN }}><ProductCard {...PRODUCTS.currentRate}/></div>
            <div id="prd-harbourview-fia" style={{ scrollMarginTop: SCROLL_MARGIN }}><ProductCard {...PRODUCTS.harbourviewFIA}/></div>
          </div>
        </div>
      </section>

      {/* ══ 3 — Fixed Indexed Annuities (tint) ══════════════════════════ */}
      <section id="prd-cat-fixed-indexed" style={{ ...PS.sectionTint, scrollMarginTop: SCROLL_MARGIN }} className="ov-section prd-section">
        <div className="ov-container">
          <div style={PS.introRow} className="prd-intro-row prd-intro-img-right">
            <img src="assets/lighthouse.jpg" alt="Fixed indexed annuities" style={PS.introImg} className="prd-intro-img"/>
            <div style={PS.introText}>
              <div>
                <Eyebrow>Fixed Indexed Annuities</Eyebrow>
                <h2 style={PS.h2}>Growth potential linked to market indexes, <em style={{ fontStyle: "italic", color: "#2494C1" }}>principal protected.</em></h2>
              </div>
              <p style={PS.body}>Fixed indexed annuities credit interest based on the performance of a market index — while a zero-percent floor ensures your clients never lose principal to market downturns.</p>
              <FeatureList features={CAT3_FEATURES} />
            </div>
          </div>
          <div style={{ ...PS.cardsGrid, marginTop: 56 }} className="prd-cards-grid prd-cards-2col">
            <div id="prd-caplock"   style={{ scrollMarginTop: SCROLL_MARGIN }}><ProductCard {...PRODUCTS.capLock}/></div>
            <div id="prd-topsider" style={{ scrollMarginTop: SCROLL_MARGIN }}><ProductCard {...PRODUCTS.topsider}/></div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════════════════ */}
      <section className="ov-section" style={{ background: "#fff" }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Get Started"
            title="Find the right annuity"
            titleAccent="for your clients."
            body="Our team can help you match the right product to your client's retirement timeline, risk profile, and income goals."
            cta="Contact Sales"
            onClick={() => { window.location.hash = 'contact'; }}
          />
        </div>
      </section>
    </main>
  );
}
