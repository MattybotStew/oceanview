// ProductsCard.jsx — Tabbed product card (MYGAs / FIAs)
const productsStyles = {
  section: { padding: "104px 0", background: "var(--ov-bg)" },
  grid: { display: "flex", gap: 80, alignItems: "center" },
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
    color: "var(--ov-grey-400)", cursor: "pointer",
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
    fontWeight: 500, 
    fontSize: 15, 
    color: "var(--ov-navy-900)",
    cursor: "pointer", 
    transition: "padding-left .15s ease",
    width: "100%",
    gap: 16, // Add gap between elements
  },
  productName: {
    fontSize: 16,
    fontWeight: 600,
    color: "var(--ov-navy-900)",
    whiteSpace: "nowrap", // Prevent wrapping
  },
  productYears: {
    fontSize: 14,
    color: "var(--ov-grey-500)",
    fontWeight: 400,
    whiteSpace: "nowrap", // Prevent wrapping
  },
  rate: {
    fontFamily: "var(--ov-ff-display)", 
    fontSize: 20,
    color: "var(--ov-teal-600)", 
    fontWeight: 500, 
    fontVariantNumeric: "tabular-nums",
    whiteSpace: "nowrap", // Prevent wrapping
  },
  arrow: { 
    fontFamily: "Inter, system-ui, sans-serif", 
    color: "var(--ov-navy-600)", 
    fontSize: 18,
    transition: "transform .15s ease",
    whiteSpace: "nowrap", // Prevent wrapping
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
    <section style={productsStyles.section} className="ov-products-section">
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
            <div style={productsStyles.tabs}>
              {[["myga", "MYGAs"], ["fia", "FIAs"]].map(([k, l]) => (
                <button 
                  key={k}
                  style={{ 
                    ...productsStyles.tab, 
                    ...(tab === k ? productsStyles.tabActive : {}) 
                  }}
                  onClick={() => setTab(k)}
                >
                  {l}
                </button>
              ))}
            </div>
            <div style={productsStyles.cardTitle}>{data.title}</div>
            <p style={productsStyles.cardSub}>{data.sub}</p>
            {data.items.map((it) => (
              <div 
                key={it.name} 
                style={productsStyles.row}
                className="ov-product-row"
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = "12px";
                  const arrow = e.currentTarget.querySelector('.product-arrow');
                  if (arrow) arrow.style.transform = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = "0";
                  const arrow = e.currentTarget.querySelector('.product-arrow');
                  if (arrow) arrow.style.transform = "translateX(0)";
                }}
              >
                <span style={productsStyles.productName}>{it.name}</span>
                <span style={productsStyles.productYears}>{it.years}</span>
                <span style={productsStyles.rate}>{it.rate}</span>
                <span style={productsStyles.arrow} className="product-arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Responsive styles - keep everything inline on mobile */}
      <style>{`
        @media (max-width: 800px) {
          .ov-products-grid {
            flex-direction: column !important;
            gap: 48px !important;
          }
          .ov-products-grid > div {
            width: 100% !important;
          }
          .ov-products-card {
            padding: 24px 20px !important;
          }
          .ov-products-card button {
            flex: 1;
            font-size: 13px !important;
            padding: 10px 12px !important;
          }
          
          /* Keep all items inline horizontally on mobile */
          .ov-product-row {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
            flex-wrap: nowrap !important;
            gap: 8px !important;
          }
          
          .ov-product-row span {
            white-space: nowrap !important;
          }
        }
        
        @media (max-width: 600px) {
          .ov-product-row {
            font-size: 13px !important;
          }
          
          .ov-product-row span:first-child {
            font-size: 13px !important;
          }
          
          .ov-product-row span:nth-child(2) {
            font-size: 11px !important;
          }
          
          .ov-product-row span:nth-child(3) {
            font-size: 14px !important;
          }
        }
        
        @media (max-width: 480px) {
          .ov-products-section {
            padding: 64px 0 !important;
          }
          .ov-products-card {
            padding: 20px 16px !important;
          }
          .ov-product-row {
            padding: 12px 0 !important;
            gap: 6px !important;
          }
          
          .ov-product-row span:first-child {
            font-size: 12px !important;
          }
          
          .ov-product-row span:nth-child(2) {
            font-size: 10px !important;
          }
          
          .ov-product-row span:nth-child(3) {
            font-size: 13px !important;
          }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { ProductsCard });