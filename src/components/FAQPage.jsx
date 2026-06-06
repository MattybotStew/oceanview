// FAQPage.jsx — FAQ page with hero + accordion list
import { useState } from 'react'
import PageHero from './PageHero.jsx'
import CTABanner from './CTABanner.jsx'

const faqStyles = {
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
  tog: { fontFamily: "var(--ov-ff-sans)", fontSize: 22, color: "var(--ov-navy-600)" },
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

export default function FAQPage() {
  const [open, setOpen] = useState(0);
  return (
    <main>
      <PageHero image="assets/faq-hero.jpg" eyebrow="Frequently Asked" title="Answers to" titleAccent="common questions." />
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
      </section>

      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Still Have Questions?"
            title="Talk to our"
            titleAccent="team directly."
            body="Our client services and sales teams are available to answer any questions about our products, rates, or the application process."
            cta="Contact Us"
            onClick={() => { window.location.hash = 'contact'; }}
          />
        </div>
      </section>
    </main>
  );
}
