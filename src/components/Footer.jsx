// Footer.jsx — Dark navy footer matching Figma design (node 7157-1909)
import { useRef, useState } from 'react'

const S = {
  wrap: {
    background: '#001F54',
    color: 'rgba(255,255,255,.72)',
    padding: '56px 0 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inner: {
    width: '100%',
    maxWidth: 1200,
    display: 'flex',
    flexDirection: 'column',
    gap: 60,
    padding: '56px 24px',
  },

  // ── Section 1: Newsletter ─────────────────────────────────────────────
  signupRow: {
    display: 'grid',
    gridTemplateColumns: '488px 538px',
    justifyContent: 'space-between',
    paddingBottom: 60,
    borderBottom: '1px solid rgba(255,255,255,.12)',
    width: '100%',
  },
  signupLeft: {
    maxWidth: 488,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  eyebrow: {
    fontFamily: 'PP Mori',
    fontWeight: 600,
    fontSize: 10,
    lineHeight: '16.5px',
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,.6)',
  },
  signupTitle: {
    fontFamily: 'Cormorant Garamond, var(--ov-ff-display)',
    fontWeight: 500,
    fontSize: 28,
    lineHeight: '32.2px',
    color: '#F2FCFF',
    margin: 0,
  },
  signupBody: {
    fontFamily: 'PP Mori',
    fontWeight: 400,
    fontSize: 13.5,
    lineHeight: '20.92px',
    color: 'rgba(255,255,255,.62)',
    margin: 0,
    maxWidth: 488,
  },
  signupRight: {
    maxWidth: 538,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  formRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  input: {
    width: '100%',
    height: 47,
    padding: '12px 16px',
    borderRadius: 8,
    border: '1px solid rgba(255,255,255,.2)',
    background: '#fff',
    fontFamily: 'PP Mori',
    fontWeight: 400,
    fontSize: 14,
    color: '#000',
    outline: 'none',
    boxSizing: 'border-box',
  },
  inputPlaceholder: {
    color: 'rgba(0,0,0,.4)',
  },
  submit: {
    height: 47,
    padding: '0 44px',
    borderRadius: 200,
    border: 0,
    background: '#70BABF',
    color: '#001F54',
    fontFamily: 'PP Mori',
    fontWeight: 600,
    fontSize: 15.1,
    lineHeight: '16px',
    textTransform: 'capitalize',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity .15s ease',
  },
  consentRow: {
    display: 'flex',
    gap: 16,
    padding: '8px 0',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 2.5,
    border: '1px solid #767676',
    background: '#fff',
    flexShrink: 0,
    cursor: 'pointer',
    appearance: 'none',
    WebkitAppearance: 'none',
  },
  consentText: {
    fontFamily: 'PP Mori',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: '16.8px',
    color: '#F2FCFF',
    opacity: 0.6,
    margin: 0,
  },

  // ── Section 2: Link columns ────────────────────────────────────────────
  linkSection: {
    paddingBottom: 60,
    borderBottom: '1px solid rgba(255,255,255,.12)',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr 1fr 1fr 1fr',
    alignItems: 'start',
    gap: 32,
  },
  logoCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  logoWrap: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 71,
  },
  logoImg: {
    width: 214,
    height: 40,
  },
  blurb: {
    fontFamily: 'PP Mori',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: '21.45px',
    color: 'rgba(255,255,255,.62)',
    margin: 0,
    maxWidth: 276,
  },
  socialRow: {
    display: 'flex',
    gap: 12,
    paddingTop: 14,
  },
  socialBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    border: '1px solid rgba(255,255,255,.2)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#F2FCFF',
    fontSize: 12,
    fontFamily: 'PP Mori',
    cursor: 'pointer',
    background: 'transparent',
    transition: 'border-color .15s ease, background .15s ease',
  },
  linkCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  colTitle: {
    fontFamily: 'PP Mori',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: '18px',
    letterSpacing: '1.44px',
    textTransform: 'uppercase',
    color: '#F2FCFF',
    height: 18,
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  linkItem: {
    fontFamily: 'PP Mori',
    fontWeight: 400,
    fontSize: 13.5,
    lineHeight: '20.25px',
    color: 'rgba(255,255,255,.7)',
    cursor: 'pointer',
    textDecoration: 'none',
  },

  // ── Section 3: Legal ───────────────────────────────────────────────────
  legalSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    paddingBottom: 28,
  },
  copyrightRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  copyright: {
    fontFamily: 'PP Mori',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '18px',
    color: 'rgba(255,255,255,.55)',
  },
  legalLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  legalLink: {
    fontFamily: 'PP Mori',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '18px',
    color: 'rgba(255,255,255,.55)',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  disclaimer: {
    fontFamily: 'PP Mori',
    fontWeight: 400,
    fontSize: 11,
    lineHeight: '17.6px',
    color: 'rgba(255,255,255,.42)',
    margin: 0,
    maxWidth: 1200,
  },
};

export default function Footer({ hideSignup = false }) {
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const submitNewsletter = () => {
    if (!nameRef.current.reportValidity() || !emailRef.current.reportValidity()) return;
    setSubmitted(true);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitNewsletter();
    }
  };

  const navCols = [
    {
      title: 'Products',
      links: [
        { label: 'Harbourview MYGA',           href: '#harbourview-myga'     },
        { label: 'Horizon MYGA',               href: '#horizon-myga'         },
        { label: 'Sky Harbourview MYGA',       href: '#sky-harbourview-myga' },
        { label: 'Current Rate Fixed Annuity', href: '#current-rate-fia'     },
        { label: 'Harbourview FIA',            href: '#harbourview-fia'       },
        { label: 'CapLock',                    href: '#caplock'               },
        { label: 'Topsider',                   href: '#topsider'              },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Our Story',          href: '#our-story'    },
        { label: 'Leadership',         href: '#leadership'   },
        { label: 'Board of Directors', href: '#board'        },
        { label: 'Newsroom',           href: '#newsroom'     },
        { label: 'Careers',            href: 'https://careers.bayview.com/oceanview' },
      ],
    },
    {
      title: 'Client Resources',
      links: [
        { label: 'Case Studies',               href: '#client-resources?tab=case-studies' },
        { label: 'Downloads',                  href: '#client-resources?tab=downloads'    },
        { label: 'Product Brochures',          href: '#brochures'                         },
        { label: 'Glossary',                   href: '#client-resources?tab=glossary'     },
        { label: 'Rates',                      href: '#client-resources?tab=rates'        },
        { label: 'How Oceanview MYGAs Compare', href: '#client-resources?tab=comparisons'  },
        { label: 'Cookies Preferences',        href: '#privacy'                           },
      ],
    },
    {
      title: 'Insights',
      links: [
        { label: 'Retirement Risk Series',      href: '#retirement-risk' },
        { label: 'Life Events Series',          href: '#life-events'     },
        { label: 'White Papers',                href: '#white-papers'    },
        { label: 'Financial Professional Blog', href: '#blog'            },
      ],
    },
  ];

  return (
    <footer style={S.wrap}>
      <div style={S.inner}>

        {/* ── Section 1: Newsletter signup ────────────────────────────── */}
        {/* Hidden on pages with their own email capture (e.g. National Senior Games) to avoid
            two competing signup forms on one page. */}
        {!hideSignup && (
        <div id="footer-newsletter" style={S.signupRow} className="ov-footer-signup">
          <div style={S.signupLeft}>
            <div style={S.eyebrow}>Stay in the know</div>
            <h2 style={S.signupTitle}>Smart insights, delivered.</h2>
            <p style={S.signupBody}>
              Product updates, market commentary, and planning ideas from the Oceanview team.
            </p>
          </div>
          <div style={S.signupRight} role="form" aria-label="Newsletter signup">
            <div style={S.formRow} className="ov-footer-form-row">
              <label htmlFor="footer-first-name" className="sr-only">Name</label>
              <input
                ref={nameRef}
                style={S.input}
                name="name"
                id="footer-first-name"
                autoComplete="given-name"
                placeholder="Name"
                onKeyDown={handleEnterKey}
                required
              />
              <label htmlFor="footer-email" className="sr-only">Email</label>
              <input
                ref={emailRef}
                style={S.input}
                name="email"
                id="footer-email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                onKeyDown={handleEnterKey}
                required
              />
              <button type="button" style={S.submit} onClick={submitNewsletter}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                {submitted ? 'Signed Up!' : 'Get Started'}
              </button>
            </div>
            <div style={S.consentRow}>
              <label style={{ width: 22, height: 22, flexShrink: 0, position: 'relative' }}>
                <input type="checkbox" style={S.checkbox} />
              </label>
              <p style={S.consentText}>
                I agree to receive communications from Oceanview Life and Annuity. I understand I can unsubscribe at any time. We respect your privacy. Your information will never be shared.
              </p>
            </div>
          </div>
        </div>
        )}

        {/* ── Section 2: Link columns ────────────────────────────────── */}
        <div style={S.linkSection} className="ov-footer-cols">
          {/* Logo column */}
          <div style={S.logoCol}>
            <div style={S.logoWrap}>
              <img
                src="assets/oceanview-logo-white.png"
                alt="Oceanview"
                style={S.logoImg}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <p style={S.blurb}>
              Oceanview Life and Annuity Company offers fixed and fixed-indexed annuities designed for long-term retirement security.
            </p>
            <div style={S.socialRow}>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/oceanview-life-and-annuity/" target="_blank" rel="noopener noreferrer" style={S.socialBtn} aria-label="LinkedIn"
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="https://twitter.com/ovlifeannuity" target="_blank" rel="noopener noreferrer" style={S.socialBtn} aria-label="X / Twitter"
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {navCols.map(col => (
            <div key={col.title} style={S.linkCol}>
              <div style={S.colTitle}>{col.title}</div>
              <ul style={S.linkList}>
                {col.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={S.linkItem}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.7)')}
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Section 3: Legal ────────────────────────────────────────── */}
        <div style={S.legalSection}>
          <div style={S.copyrightRow} className="ov-footer-legal-row">
            <span style={S.copyright}>© 2026 Oceanview Life and Annuity Company. All rights reserved. 1331 17th St., Suite 1050, Denver, CO 80202</span>
            <div style={S.legalLinks} className="ov-footer-legal-links">
              <a href="#privacy" style={S.legalLink} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.55)'}>Privacy Notice</a>
              <a href="#disclaimers" style={S.legalLink} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.55)'}>Disclaimers</a>
              <a href="#accessibility" style={S.legalLink} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.55)'}>Accessibility</a>
              <a href={`${import.meta.env.BASE_URL}sitemap.xml`} style={S.legalLink} target="_blank" rel="noopener noreferrer" onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.55)'}>Sitemap</a>
              <a href="#contact" style={S.legalLink} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.55)'}>Contact</a>
            </div>
          </div>
          <p style={S.disclaimer}>
            Annuities are products of the insurance industry and not guaranteed by any bank nor insured by FDIC or NCUA/NCUSIF. May lose value. No bank/credit union guarantee. Not a deposit. Not insured by any federal government agency. May only be offered by a licensed insurance agent. Guarantees are subject to the claim paying ability of the issuing insurance company.
          </p>
        </div>

      </div>
    </footer>
  );
}