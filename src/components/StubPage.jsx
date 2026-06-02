// StubPage.jsx — Generic inner page stub with PageHero + placeholder body
import PageHero from './PageHero.jsx'

const stubStyles = {
  body: { background: "var(--ov-bg)", padding: "80px 0 64px" },
  prose: { maxWidth: 680 },
  lead: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(20px, 2.4vw, 26px)", lineHeight: 1.45,
    color: "var(--ov-navy-900)", margin: "0 0 36px",
  },
  p: {
    fontFamily: "var(--ov-ff-sans)", fontSize: 16, lineHeight: 1.78,
    color: "var(--ov-grey-600)", margin: "0 0 20px",
  },
  divider: { height: 1, background: "rgba(13,31,78,.10)", margin: "48px 0" },
  chipRow: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 32 },
  chip: {
    padding: "8px 18px", borderRadius: 99,
    border: "1px solid rgba(13,31,78,.15)",
    fontFamily: "var(--ov-ff-sans)", fontSize: 13, fontWeight: 500,
    color: "var(--ov-navy-700)", background: "#fff",
  },
};

export default function StubPage({ title, eyebrow }) {
  return (
    <main>
      <PageHero eyebrow={eyebrow} title={title} />
      <section style={stubStyles.body}>
        <div className="ov-container">
          <div style={stubStyles.prose}>
            <p style={stubStyles.lead}>
              Helping Americans build retirement confidence — one decision at a time.
            </p>
            <p style={stubStyles.p}>
              Oceanview Life and Annuity Company has been committed to providing clear,
              accessible financial solutions since 1987. This page is actively being
              developed with information specific to {title}.
            </p>
            <p style={stubStyles.p}>
              Fixed and fixed-indexed annuities offer the predictability retirees need —
              guaranteed principal protection, tax-deferred growth, and income you can
              count on regardless of market conditions.
            </p>
            <div style={stubStyles.divider} />
            <p style={stubStyles.p}>
              For more information, please reach out to our Client Services team or
              speak with a licensed insurance professional in your area who can walk
              you through the options best suited to your retirement goals.
            </p>
            <div style={stubStyles.chipRow}>
              <span style={stubStyles.chip}>A (Excellent) — A.M. Best</span>
              <span style={stubStyles.chip}>Est. 1987</span>
              <span style={stubStyles.chip}>Colorado Domicile</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
