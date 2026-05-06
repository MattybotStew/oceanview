// FAQPage.jsx — FAQ page with hero + accordion list
const faqStyles = {
  hero: {
    position: "relative", minHeight: 360,
    display: "flex", alignItems: "center",
    color: "#F2FCFF", overflow: "hidden", isolation: "isolate",
  },
  heroBg: {
    position: "absolute", inset: 0,
    backgroundImage: "url(assets/faq-hero.jpg)",
    backgroundSize: "cover", backgroundPosition: "center", zIndex: -2,
  },
  heroScrim: {
    position: "absolute", inset: 0, zIndex: -1,
    background: "linear-gradient(180deg, rgba(13,31,78,.55), rgba(13,31,78,.78))",
  },
  inner:   { padding: "72px 0" },
  eyebrow: {
    fontFamily: "var(--ov-ff-eyebrow)", fontWeight: 600, fontSize: 13,
    letterSpacing: ".12em", textTransform: "uppercase",
    marginBottom: 14, color: "rgba(255,255,255,.78)",
  },
  h1: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(40px, 5.6vw, 76px)", lineHeight: 1.0,
    letterSpacing: "-0.01em", margin: 0, color: "#F2FCFF",
  },
  body:    { background: "var(--ov-bg)", padding: "80px 0 32px" },
  list:    { maxWidth: 820, margin: "0 auto" },
  item:    { borderTop: "1px solid rgba(13,31,78,.10)" },
  q: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "26px 4px", cursor: "pointer",
    fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 21,
    color: "var(--ov-navy-900)", border: 0, background: "none",
    width: "100%", textAlign: "left",
  },
  a: {
    padding: "0 4px 26px", fontSize: 16, lineHeight: 1.7,
    color: "var(--ov-grey-600)", maxWidth: "62ch",
  },
  tog: { fontFamily: "Inter, system-ui", fontSize: 22, color: "var(--ov-navy-600)" },
};

const FAQS = [
  ["What is an annuity?",
   "An annuity is a contract between you and an insurance company designed to provide a stream of income, often during retirement. With a fixed annuity, the insurance company guarantees both the principal and a minimum interest rate."],
  ["What products are available through Oceanview?",
   "Oceanview offers Multi-Year Guaranteed Annuities (MYGAs) such as Harbourview and Sky Harbourview, and Fixed Indexed Annuities (FIAs) such as Crescendo and Crescendo Plus."],
  ["How is my money protected?",
   "All guarantees are backed by the financial strength and claims-paying ability of Oceanview Life and Annuity Company, which holds an A (Excellent) Financial Strength Rating from A.M. Best."],
  ["Is the interest tax-deferred?",
   "Yes. Earnings inside an annuity grow on a tax-deferred basis until withdrawn. Withdrawals may be subject to ordinary income tax and, if taken before age 59½, an additional 10% federal tax."],
  ["Where can I find a professional?",
   "Use the Find a Professional locator on the site, or contact our Client Services team for a referral to an independent insurance professional in your area."],
];

function FAQPage() {
  const [open, setOpen] = React.useState(0);
  return (
    <main>
      <section style={faqStyles.hero}>
        <div style={faqStyles.heroBg} />
        <div style={faqStyles.heroScrim} />
        <div className="ov-container" style={faqStyles.inner}>
          <div style={faqStyles.eyebrow}>Frequently Asked</div>
          <h1 style={faqStyles.h1}>Answers to common questions.</h1>
        </div>
      </section>
      <section style={faqStyles.body}>
        <div className="ov-container">
          <div style={faqStyles.list}>
            {FAQS.map(([q, a], i) => (
              <div key={q} style={faqStyles.item}>
                <button style={faqStyles.q} onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{q}</span>
                  <span style={faqStyles.tog}>{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <div style={faqStyles.a}>{a}</div>}
              </div>
            ))}
          </div>
        </div>
        <CTAPanel />
      </section>
    </main>
  );
}

Object.assign(window, { FAQPage });
