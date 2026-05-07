// Footer.jsx — Dark navy footer: email signup + link columns + legal
const footerStyles = {
  wrap: {
    background: "var(--ov-navy-1000)",
    color: "rgba(255,255,255,.72)",
    padding: "56px 0 28px",
  },

  // Email capture row
  signup: {
    display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 56,
    alignItems: "center", paddingBottom: 36,
    borderBottom: "1px solid rgba(255,255,255,.12)",
  },
  signupCopy: { display: "flex", flexDirection: "column", gap: 6 },
  signupEyebrow: {
    fontFamily: "var(--ov-ff-eyebrow)", fontWeight: 600, fontSize: 12,
    letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.7)",
  },
  signupTitle: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(22px, 3vw, 28px)",
    lineHeight: 1.15, color: "#fff", margin: 0, textWrap: "balance",
  },
  signupSub: {
    fontSize: 13.5, lineHeight: 1.55, color: "rgba(255,255,255,.62)",
    margin: 0, maxWidth: "44ch",
  },
  form:    { display: "flex", flexDirection: "column", gap: 10 },
  formRow: { display: "flex", gap: 10 },
  input: {
    flex: 1, height: 44, padding: "0 14px", borderRadius: 6,
    border: "1px solid rgba(255,255,255,.18)", background: "rgba(255,255,255,.06)",
    color: "#fff", fontFamily: "var(--ov-ff-body)", fontSize: 14, outline: "none",
  },
  submit: {
    height: 44, padding: "0 22px", borderRadius: 200, border: 0,
    background: "#fff", color: "var(--ov-navy-1000)",
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 14,
    cursor: "pointer", whiteSpace: "nowrap", transition: "opacity .15s ease",
  },
  ack: { fontSize: 11.5, lineHeight: 1.5, color: "rgba(255,255,255,.5)", margin: 0 },

  // Link columns
  top: {
    display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr", gap: 56,
    padding: "44px 0 36px", borderBottom: "1px solid rgba(255,255,255,.12)",
  },
  logoBlock: {
    color: "#fff", fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 24,
    display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 14,
  },
  blurb: {
    fontSize: 13, lineHeight: 1.65, maxWidth: "36ch", color: "rgba(255,255,255,.62)",
  },
  colTitle: {
    fontFamily: "var(--ov-ff-eyebrow)", fontWeight: 600, fontSize: 12,
    letterSpacing: ".12em", textTransform: "uppercase", color: "#fff", marginBottom: 14,
  },
  ul: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 },
  li: { fontSize: 13.5, color: "rgba(255,255,255,.7)", cursor: "pointer", lineHeight: 1.5 },

  // Bottom row
  bottom: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    paddingTop: 22, fontSize: 12, color: "rgba(255,255,255,.55)",
    flexWrap: "wrap", gap: 18,
  },
  legal: {
    fontSize: 11, lineHeight: 1.6, color: "rgba(255,255,255,.42)",
    marginTop: 18, maxWidth: "100%",
  },
  social: { display: "flex", gap: 12, alignItems: "center", marginTop: 16 },
  socialBtn: {
    width: 30, height: 30, borderRadius: "50%",
    border: "1px solid rgba(255,255,255,.2)",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    color: "#fff", fontSize: 12, cursor: "pointer", background: "transparent",
    transition: "border-color .15s ease, background .15s ease",
  },
};

function Footer() {
  const [submitted, setSubmitted] = React.useState(false);
  const cols = [
    ["Products",   ["Multi-Year Guaranteed Annuities", "Fixed Indexed Annuities", "Crescendo", "Harbourview"]],
    ["Company",    ["About", "Leadership", "Press", "Careers"]],
    ["Resources",  ["FAQ", "Forms", "Contact", "Find a Professional"]],
  ];
  return (
    <footer style={footerStyles.wrap}>
      <div className="ov-container">

        {/* Email signup */}
        <div style={footerStyles.signup} className="ov-footer-signup">
          <div style={footerStyles.signupCopy}>
            <span style={footerStyles.signupEyebrow}>Stay in the know</span>
            <h2 style={footerStyles.signupTitle}>Smart insights, delivered.</h2>
            <p style={footerStyles.signupSub}>
              Product updates, market commentary, and planning ideas from the Oceanview team.
            </p>
          </div>
          <form style={footerStyles.form} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div style={footerStyles.formRow} className="ov-footer-form-row">
              <input style={footerStyles.input} placeholder="First name" required />
              <input style={footerStyles.input} type="email" placeholder="Email address" required />
              <button type="submit" style={footerStyles.submit}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {submitted ? "Subscribed ✓" : "Sign Me Up"}
              </button>
            </div>
            <p style={footerStyles.ack}>
              By subscribing, you agree to receive communications from Oceanview. Unsubscribe anytime.
            </p>
          </form>
        </div>

        {/* Link columns */}
        <div style={footerStyles.top} className="ov-footer-cols">
          <div>
            <div style={footerStyles.logoBlock}>
              <img src="assets/oceanview-logo-white.png" alt="Oceanview" style={{ height: 28, width: "auto" }}
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
            <p style={footerStyles.blurb}>
              Oceanview Life and Annuity Company offers fixed and fixed-indexed annuities designed
              for long-term retirement security.
            </p>
            <div style={footerStyles.social}>
              <button style={footerStyles.socialBtn} aria-label="LinkedIn"
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >in</button>
              <button style={footerStyles.socialBtn} aria-label="Facebook"
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >f</button>
              <button style={footerStyles.socialBtn} aria-label="X"
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >𝕏</button>
            </div>
          </div>
          {cols.map(([t, items]) => (
            <div key={t}>
              <div style={footerStyles.colTitle}>{t}</div>
              <ul style={footerStyles.ul}>
                {items.map((i) => (
                  <li key={i} style={footerStyles.li}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.7)")}
                  >{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom legal row */}
        <div style={footerStyles.bottom}>
          <span>© 2026 Oceanview Life and Annuity Company. All rights reserved.</span>
          <span style={{ display: "flex", gap: 18 }}>
            <span style={{ cursor: "pointer" }}>Privacy Notice</span>
            <span style={{ cursor: "pointer" }}>Terms of Use</span>
            <span style={{ cursor: "pointer" }}>Accessibility</span>
          </span>
        </div>
        <p style={footerStyles.legal}>
          Annuities are issued by Oceanview Life and Annuity Company (OLAC) or Oceanview Life and
          Annuity Insurance Company (OLAIC), domiciled in Colorado and Arizona, respectively.
          Annuities are insurance products, not deposits, and are not insured or guaranteed by the
          FDIC or any other federal agency. Guarantees are based on the financial strength and
          claims-paying ability of the issuing company. Tax-deferred growth is not equivalent to
          current income, and withdrawals from annuity contracts may be subject to ordinary income
          tax and, if taken before age 59½, an additional 10% federal tax. This material is for
          informational purposes only and is not a recommendation.
        </p>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
