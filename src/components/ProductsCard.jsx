// ProductsCard.jsx — Tabbed product card (MYGAs / FIAs) — dark navy treatment
import { useState } from 'react'
import { PillMint, TextLink } from './Buttons.jsx'
import TabBar from './TabBar.jsx'

const S = {
  section: { background: "var(--ov-navy-1000)" },
  grid: { display: "flex", gap: 64, alignItems: "center" },
  eyebrow: {
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10,
    letterSpacing: "1.4px", textTransform: "uppercase",
    color: "#70BABF", marginBottom: 22,
    display: "flex", alignItems: "center", gap: 8,
  },
  eyebrowLine: { width: 18, height: 1, background: "rgba(112,186,191,.6)", flexShrink: 0 },
  h2: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.08,
    color: "#F2FCFF", letterSpacing: "-0.01em",
    margin: "0 0 22px", textWrap: "balance",
  },
  body: {
    fontSize: 16.5, lineHeight: 1.7, color: "rgba(242,252,255,.65)",
    margin: "0 0 28px", maxWidth: "48ch",
    fontFamily: "var(--ov-ff-sans)",
  },
  card: {
    background: "#fff", borderRadius: 16, padding: "32px 36px 24px",
    width: "100%",
  },
  tabs: {
    display: "flex", gap: 6, marginBottom: 22,
    borderBottom: "1px solid rgba(13,31,78,.10)",
    width: "100%",
  },
  tab: {
    padding: "12px 20px", border: 0, background: "none",
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 14,
    letterSpacing: ".08em", textTransform: "uppercase",
    color: "var(--ov-grey-600)", cursor: "pointer",
    borderBottom: "2px solid transparent", marginBottom: -1,
    transition: "color .15s ease",
    flex: 1,
  },
  tabActive: { color: "var(--ov-navy-900)", borderBottomColor: "var(--ov-teal-600)" },
  cardTitle: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 26,
    color: "var(--ov-navy-900)", margin: "6px 0 6px",
  },
  cardSub: {
    fontSize: 13.5, lineHeight: 1.6, color: "var(--ov-grey-600)", margin: "0 0 18px",
    fontFamily: "var(--ov-ff-sans)",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0",
    borderTop: "1px solid rgba(13,31,78,.10)",
    cursor: "pointer",
    transition: "padding-left .15s ease",
    width: "100%",
    gap: 12,
    flexWrap: "nowrap",
  },
  productInfo: { display: "flex", flexDirection: "column", gap: 4, flex: 1, minWidth: 0 },
  productName: { fontFamily: "var(--ov-ff-sans)", fontSize: 16, fontWeight: 600, color: "var(--ov-navy-900)" },
  productYears: { fontFamily: "var(--ov-ff-sans)", fontSize: 13, color: "var(--ov-grey-500)", fontWeight: 400 },
  rateContainer: { display: "flex", alignItems: "center", gap: 18, flexShrink: 0 },
  rate: { fontFamily: "var(--ov-ff-display)", fontSize: 20, color: "var(--ov-teal-600)", fontWeight: 400 },
  arrow: { fontFamily: "var(--ov-ff-sans)", color: "var(--ov-navy-600)", fontSize: 18, transition: "transform .15s ease" },
};

const PRODUCTS = {
  myga: {
    title: "Multi-Year Guaranteed Annuities",
    sub: "Experience guaranteed returns and secure retirement income with a Multi-Year Guaranteed Annuity from Oceanview.",
    items: [
      { name: "Harbourview",       rate: "5.20%",          years: "5-Year",  hash: "harbourview-myga" },
      { name: "Sky Harbourview",   rate: "5.10%",          years: "7-Year",  hash: "sky-harbourview-myga" },
      { name: "Harbourview Plus",  rate: "4.95%",          years: "3-Year",  hash: "harbourview-myga" },
    ],
  },
  fia: {
    title: "Fixed Indexed Annuities",
    sub: "Pursue growth tied to a market index with the assurance of principal protection.",
    items: [
      { name: "Crescendo",       rate: "Index Cap 9.5%",  years: "10-Year", hash: "caplock" },
      { name: "Crescendo Plus",  rate: "Index Cap 11.0%", years: "10-Year + Bonus", hash: "topsider" },
    ],
  },
};

export default function ProductsCard() {
  const [tab, setTab] = useState("myga");
  const data = PRODUCTS[tab];

  return (
    <section style={S.section} className="ov-section ov-products-section">
      <div className="ov-container">
        <div style={S.grid} className="ov-products-grid">
          <div style={{ flex: 1 }}>
            <div style={S.eyebrow}>
              <div style={S.eyebrowLine} />
              Our Products
            </div>
            <h2 style={S.h2}>Built around what retirement actually looks like.</h2>
            <p style={S.body}>
              Two complementary annuity families — Multi-Year Guaranteed and Fixed Indexed — each
              designed to balance protection, growth, and tax-deferred efficiency.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <PillMint onClick={() => { window.location.hash = 'products' }}>Compare Products</PillMint>
              <TextLink color="rgba(242,252,255,.65)" onClick={() => { window.location.hash = 'contact' }}>Talk to a professional</TextLink>
            </div>
          </div>
          <div style={{ ...S.card, flex: 1 }} className="ov-products-card">
            <TabBar
              tabs={["MYGAs", "FIAs"]}
              active={tab === "myga" ? "MYGAs" : "FIAs"}
              onChange={l => setTab(l === "MYGAs" ? "myga" : "fia")}
              style={{ marginBottom: 22 }}
            />
            <div style={S.cardTitle} className="ov-products-card-title">{data.title}</div>
            <p style={S.cardSub} className="ov-products-card-sub">{data.sub}</p>
            {data.items.map((it) => (
                <div
                  key={it.name}
                  style={{ ...S.row, cursor: "pointer" }}
                  className="ov-product-row"
                  onClick={() => { window.location.hash = it.hash }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = "12px";
                    const arrow = e.currentTarget.querySelector(".product-arrow");
                    if (arrow) arrow.style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = "0";
                    const arrow = e.currentTarget.querySelector(".product-arrow");
                    if (arrow) arrow.style.transform = "translateX(0)";
                  }}
                >
                <div style={S.productInfo}>
                  <span style={S.productName} className="ov-product-name">{it.name}</span>
                  <span style={S.productYears} className="ov-product-years">{it.years}</span>
                </div>
                <div style={S.rateContainer}>
                  <span style={S.rate} className="ov-product-rate">{it.rate}</span>
                  <span style={S.arrow} className="product-arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
