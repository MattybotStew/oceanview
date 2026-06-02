// ClientResourcesPage.jsx — Client Resources page
import PageHero from './PageHero.jsx'

const crStyles = {
  body: { background: "var(--ov-bg)", padding: "80px 0" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 24,
  },
  card: {
    background: "#fff", borderRadius: 12, padding: "32px 28px",
    boxShadow: "0 2px 12px rgba(13,31,78,0.07)",
    display: "flex", flexDirection: "column", gap: 10,
  },
  cardTitle: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 20,
    color: "var(--ov-navy-900)", margin: 0,
  },
  cardDesc: {
    fontFamily: "var(--ov-ff-sans)", fontSize: 14, lineHeight: 1.65,
    color: "var(--ov-grey-600)", margin: 0,
  },
  cardLink: {
    fontFamily: "var(--ov-ff-sans)", fontWeight: 500, fontSize: 13,
    color: "var(--ov-navy-600)", textDecoration: "none", marginTop: 8,
  },
};

const RESOURCES = [
  { title: "Case Studies",  href: "#case-studies",  desc: "Real-world examples of how Oceanview annuities have helped clients achieve long-term retirement goals." },
  { title: "Downloads",     href: "#downloads",     desc: "Product brochures, rate sheets, and regulatory filings available for immediate download." },
  { title: "Glossary",      href: "#glossary",      desc: "Plain-language definitions for annuity and insurance terms you'll encounter when planning for retirement." },
  { title: "Rates",         href: "#rates",         desc: "Current crediting rates for all Oceanview fixed and fixed-indexed annuity products." },
  { title: "How Oceanview MYGAs Compare", href: "#compare", desc: "Side-by-side comparison of our Multi-Year Guaranteed Annuities versus competitors and other savings vehicles." },
];

export default function ClientResourcesPage() {
  return (
    <main>
      <PageHero image="assets/couple-walking.png" eyebrow="Client Resources" title="Everything you need in one place." />
      <section style={crStyles.body}>
        <div className="ov-container">
          <div style={crStyles.grid}>
            {RESOURCES.map(r => (
              <div key={r.title} style={crStyles.card}>
                <h3 style={crStyles.cardTitle}>{r.title}</h3>
                <p style={crStyles.cardDesc}>{r.desc}</p>
                <a href={r.href} style={crStyles.cardLink}>Explore →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
