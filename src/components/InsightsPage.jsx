// InsightsPage.jsx — Insights & series page
import PageHero from './PageHero.jsx'

const insightsStyles = {
  body: { background: "var(--ov-bg)", padding: "80px 0" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: 32,
  },
  card: {
    background: "#fff", borderRadius: 12, overflow: "hidden",
    boxShadow: "0 2px 12px rgba(13,31,78,0.07)",
  },
  cardImg: { width: "100%", height: 200, objectFit: "cover", display: "block" },
  cardBody: { padding: "28px 28px 32px", display: "flex", flexDirection: "column", gap: 10 },
  cardEyebrow: {
    fontFamily: "var(--ov-ff-eyebrow)", fontWeight: 600, fontSize: 11,
    letterSpacing: ".10em", textTransform: "uppercase", color: "var(--ov-navy-600)",
  },
  cardTitle: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 22,
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

const SERIES = [
  {
    eyebrow: "Series",
    title: "Retirement Risk Series",
    desc: "A deep dive into the six core risks that can undermine retirement income — and how fixed annuities can help manage each one.",
    img: "assets/four.jpg",
    href: "#retirement-risk",
  },
  {
    eyebrow: "Series",
    title: "Life Events Series",
    desc: "Guidance for navigating major financial transitions — from divorce and inheritance to loss of a spouse and late-career pivots.",
    img: "assets/family.png",
    href: "#life-events",
  },
  {
    eyebrow: "White Papers",
    title: "White Papers",
    desc: "In-depth research and analysis on annuity markets, retirement income strategies, and regulatory developments.",
    img: "assets/three.jpg",
    href: "#white-papers",
  },
];

export default function InsightsPage() {
  return (
    <main>
      <PageHero image="assets/older-couple-1.png" eyebrow="Insights" title="Ideas for a more secure retirement." />
      <section style={insightsStyles.body}>
        <div className="ov-container">
          <div style={insightsStyles.grid}>
            {SERIES.map(s => (
              <div key={s.title} style={insightsStyles.card}>
                <img src={s.img} alt={s.title} style={insightsStyles.cardImg}
                  onError={e => { e.target.style.background = "var(--ov-navy-200)"; e.target.removeAttribute("src"); }} />
                <div style={insightsStyles.cardBody}>
                  <span style={insightsStyles.cardEyebrow}>{s.eyebrow}</span>
                  <h3 style={insightsStyles.cardTitle}>{s.title}</h3>
                  <p style={insightsStyles.cardDesc}>{s.desc}</p>
                  <a href={s.href} style={insightsStyles.cardLink}>Read more →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
