// Footer.jsx — Dark navy footer: email signup + link columns + legal
import { useState } from 'react'

const footerStyles = {
  wrap: {
    background: "#001233",
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
    color: "#fff", fontFamily: "var(--ov-ff-body)", fontSize: 16, outline: "none",
  },
  submit: {
    height: 44, padding: "0 22px", borderRadius: 200, border: 0,
    background: "#fff", color: "var(--ov-navy-1000)",
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 14,
    cursor: "pointer", whiteSpace: "nowrap", transition: "opacity .15s ease",
  },
  ack: { fontSize: 12, lineHeight: 1.5, color: "rgba(255,255,255,.5)", margin: 0 },

  // Link columns
  top: {
    display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr 1fr", gap: 40,
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
    fontSize: 12, lineHeight: 1.6, color: "rgba(255,255,255,.42)",
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

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const cols = [
    ["Products", [
      { label: "Harbourview MYGA",           href: "#harbourview-myga"     },
      { label: "Horizon MYGA",               href: "#horizon-myga"         },
      { label: "Current Rate Fixed Annuity", href: "#current-rate-fia"     },
      { label: "Harbourview FIA",            href: "#harbourview-fia"       },
      { label: "CapLock",                    href: "#caplock"               },
      { label: "Topsider",                   href: "#topsider"              },
    ]],
    ["Company", [
      { label: "Our Story",          href: "#our-story"    },
      { label: "Leadership",         href: "#leadership"   },
      { label: "Board of Directors", href: "#board"        },
      { label: "Newsroom",           href: "#newsroom"     },
      { label: "Careers",            href: "#careers"      },
    ]],
    ["Client Resources", [
      { label: "Case Studies",               href: "#case-studies" },
      { label: "Downloads",                  href: "#downloads"    },
      { label: "Glossary",                   href: "#glossary"     },
      { label: "Rates",                      href: "#rates"        },
      { label: "How Oceanview MYGAs Compare",href: "#compare"      },
    ]],
    ["Insights", [
      { label: "Retirement Risk Series", href: "#retirement-risk" },
      { label: "Life Events Series",     href: "#life-events"     },
      { label: "White Papers",           href: "#white-papers"    },
      { label: "Contact",                href: "#contact"         },
    ]],
  ];
  return (
    <footer style={footerStyles.wrap}>
      <div className="ov-container">

        {/* Email signup */}
        <div id="footer-newsletter" style={footerStyles.signup} className="ov-footer-signup">
          <div style={footerStyles.signupCopy}>
            <h2 style={{ ...footerStyles.signupTitle, fontWeight: 700 }}>Sign up for our newsletter.</h2>
            <p style={footerStyles.signupSub}>
              Product updates, market commentary, and planning ideas from the Oceanview team.
            </p>
          </div>
          <form style={footerStyles.form} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div style={footerStyles.formRow} className="ov-footer-form-row">
              <input style={footerStyles.input} name="firstName" id="footer-first-name" autoComplete="given-name" placeholder="First name" required />
              <input style={footerStyles.input} name="email" id="footer-email" type="email" autoComplete="email" placeholder="Email address" required />
              <button type="submit" style={footerStyles.submit}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {submitted ? "Subscribed!" : "Sign Me Up"}
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
              <img src="assets/oceanview-logo-white.png" alt="Oceanview" style={{ height: 39.859, width: "auto" }}
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
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button style={footerStyles.socialBtn} aria-label="Facebook"
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button style={footerStyles.socialBtn} aria-label="X / Twitter"
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
            </div>
          </div>
          {cols.map(([t, items]) => (
            <div key={t}>
              <div style={footerStyles.colTitle}>{t}</div>
              <ul style={footerStyles.ul}>
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      style={{ ...footerStyles.li, textDecoration: 'none', display: 'block' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.7)")}
                    >{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom legal row */}
        <div style={footerStyles.bottom}>
          <span>© 2026 Oceanview Life and Annuity Company. All rights reserved.</span>
          <span style={{ display: "flex", gap: 18 }}>
            <a href="#privacy" style={{ color: "inherit", textDecoration: "none" }}>Privacy Notice</a>
            <a href="#terms" style={{ color: "inherit", textDecoration: "none" }}>Terms of Use</a>
            <a href="#accessibility" style={{ color: "inherit", textDecoration: "none" }}>Accessibility</a>
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
