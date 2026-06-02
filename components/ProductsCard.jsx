// ProductsCard.jsx — Tabbed product card (MYGAs / FIAs)
const productsStyles = {
  section: { background: "var(--ov-bg)" },
  grid: { display: "flex", gap: 64, alignItems: "center" },
  eyebrow: {
    fontFamily: "var(--ov-ff-eyebrow)", fontWeight: 600, fontSize: 13,
    letterSpacing: ".12em", textTransform: "uppercase",
    color: "var(--ov-navy-600)", marginBottom: 22,
  },
  h2: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.08,
    color: "var(--ov-navy-900)", letterSpacing: "-0.01em",
    margin: "0 0 22px", textWrap: "balance",
  },
  body: {
    fontSize: 16.5, lineHeight: 1.7, color: "var(--ov-grey-600)",
    margin: "0 0 22px", maxWidth: "48ch",
  },
  card: {
    background: "#fff", borderRadius: 12, padding: "32px 36px 24px",
    boxShadow: "var(--ov-shadow-card)", border: "1px solid rgba(13,31,78,.05)",
    width: "100%",
  },
  tabs: {
    display: "flex", gap: 6, marginBottom: 22,
    borderBottom: "1px solid rgba(13,31,78,.10)",
    width: "100%",
  },
  tab: {
    padding: "12px 20px", border: 0, background: "none",
    fontFamily: "var(--ov-ff-eyebrow)", fontWeight: 600, fontSize: 14,
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
  productInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    flex: 1,
    minWidth: 0,
  },
  productName: {
    fontFamily: "var(--ov-ff-sans)",
    fontSize: 16,
    fontWeight: 600,
    color: "var(--ov-navy-900)",
  },
  productYears: {
    fontFamily: "var(--ov-ff-sans)",
    fontSize: 13,
    color: "var(--ov-grey-500)",
    fontWeight: 400,
  },
  rateContainer: {
    display: "flex",
    alignItems: "center",
    gap: 18,
    flexShrink: 0,
  },
  rate: {
    fontFamily: "var(--ov-ff-display)", 
    fontSize: 20,
    color: "var(--ov-teal-600)",
    fontWeight: 500, 
  },
  arrow: { 
    fontFamily: "var(--ov-ff-sans)",
    color: "var(--ov-navy-600)", 
    fontSize: 18,
    transition: "transform .15s ease",
  },
};

const PRODUCTS = {
  myga: {
    title: "Multi-Year Guaranteed Annuities",
    sub: "Experience guaranteed returns and secure retirement income with a Multi-Year Guaranteed Annuity from Oceanview.",
    items: [
      { name: "Harbourview",       rate: "5.20%",          years: "5-Year" },
      { name: "Sky Harbourview",   rate: "5.10%",          years: "7-Year" },
      { name: "Harbourview Plus",  rate: "4.95%",          years: "3-Year" },
    ],
  },
  fia: {
    title: "Fixed Indexed Annuities",
    sub: "Pursue growth tied to a market index with the assurance of principal protection.",
    items: [
      { name: "Crescendo",       rate: "Index Cap 9.5%",  years: "10-Year" },
      { name: "Crescendo Plus",  rate: "Index Cap 11.0%", years: "10-Year + Bonus" },
    ],
  },
};

function ProductsCard() {
  const [tab, setTab] = React.useState("myga");
  const data = PRODUCTS[tab];
  
  return (
    <section style={productsStyles.section} className="ov-section ov-products-section">
      <div className="ov-container">
        <div style={productsStyles.grid} className="ov-products-grid">
          <div style={{ flex: 1 }}>
            <div style={productsStyles.eyebrow}>Our Products</div>
            <h2 style={productsStyles.h2}>Built around what retirement actually looks like.</h2>
            <p style={productsStyles.body}>
              Two complementary annuity families — Multi-Year Guaranteed and Fixed Indexed — each
              designed to balance protection, growth, and tax-deferred efficiency.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <PillNavy>Compare Products</PillNavy>
              <TextLink>Talk to a professional</TextLink>
            </div>
          </div>
          <div style={{ ...productsStyles.card, flex: 1 }} className="ov-products-card">
            <div style={productsStyles.tabs} className="ov-products-tabs">
              {[["myga", "MYGAs"], ["fia", "FIAs"]].map(([k, l]) => (
                <button
                  key={k}
                  className={`ov-products-tab${tab === k ? " ov-products-tab-active" : ""}`}
                  style={{
                    ...productsStyles.tab,
                    ...(tab === k ? productsStyles.tabActive : {}),
                  }}
                  onClick={() => setTab(k)}
                >
                  {l}
                </button>
              ))}
            </div>
            <div style={productsStyles.cardTitle} className="ov-products-card-title">{data.title}</div>
            <p style={productsStyles.cardSub} className="ov-products-card-sub">{data.sub}</p>
            {data.items.map((it) => (
              <div
                key={it.name}
                style={productsStyles.row}
                className="ov-product-row"
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
                <div style={productsStyles.productInfo}>
                  <span style={productsStyles.productName} className="ov-product-name">{it.name}</span>
                  <span style={productsStyles.productYears} className="ov-product-years">{it.years}</span>
                </div>
                <div style={productsStyles.rateContainer}>
                  <span style={productsStyles.rate} className="ov-product-rate">{it.rate}</span>
                  <span style={productsStyles.arrow} className="product-arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}

Object.assign(window, { ProductsCard });