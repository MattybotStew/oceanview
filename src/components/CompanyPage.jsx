import PageHero from './PageHero.jsx'
import CTABanner from './CTABanner.jsx'
import { PillGhost, PillNavy, TextLink } from './Buttons.jsx'
import { Eyebrow } from './common.jsx'

const S = {
  h2: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(32px, 3.2vw, 42px)", lineHeight: 1.2,
    letterSpacing: "-0.027em", color: "#233d7c", margin: 0,
  },
  h3: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 600,
    fontSize: 26, lineHeight: 1.2, color: "#0d1f4e", margin: 0,
  },
  accent: { fontStyle: "italic", color: "#70babf" },
  body: {
    fontFamily: "var(--ov-ff-sans)", fontSize: 14, lineHeight: 1.65,
    color: "#6b7280", margin: 0,
  },
  bodyLg: {
    fontFamily: "var(--ov-ff-sans)", fontSize: 17, lineHeight: 1.6,
    color: "#4a5568", margin: 0,
  },
  checkCard: {
    background: "rgba(112,186,191,0.2)",
    borderRadius: 12,
    padding: "19px 24px 20px",
    display: "flex", flexDirection: "column", gap: 12,
  },
  checkCardLabel: {
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10,
    letterSpacing: "1.2px", textTransform: "uppercase", color: "#2494c1",
  },
};

function CheckItem({ last, children }) {
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: 8,
      borderBottom: last ? "none" : "1px solid rgba(36,148,193,0.1)",
      padding: last ? "10px 0 0" : "10px 0 11px",
    }}>
      <svg width="8" height="9" viewBox="0 0 8 9" fill="none" style={{ flexShrink: 0, marginTop: 7 }}>
        <path d="M1 4.5L3.2 6.5L7 2.5" stroke="#2494c1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 14, lineHeight: 1.65, color: "#6b7280", margin: 0 }}>
        {children}
      </p>
    </div>
  );
}

function CheckItemBold({ last, label, body }) {
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: 8,
      borderBottom: last ? "none" : "1px solid rgba(36,148,193,0.1)",
      padding: last ? "10px 0 0" : "10px 0 11px",
    }}>
      <svg width="8" height="9" viewBox="0 0 8 9" fill="none" style={{ flexShrink: 0, marginTop: 7 }}>
        <path d="M1 4.5L3.2 6.5L7 2.5" stroke="#2494c1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 14, lineHeight: 1.65, color: "#6b7280", margin: 0 }}>
        <strong style={{ fontWeight: 600, color: "#4a5568" }}>{label} </strong>
        {body}
      </p>
    </div>
  );
}

export default function CompanyPage() {
  return (
    <main>

      {/* 1 — Hero */}
      <PageHero
        image="assets/AdobeStock_1231908414@0.3x.jpg"
        eyebrow="Since 1987"
        title="Retirement solutions designed for"
        titleAccent="clarity and confidence."
        subtitle="Guaranteed interest, flexible options, and growth potential — with principal protection at every step."
        ctaPrimary="Compare Products"
        onPrimary={() => { window.location.hash = 'products'; }}
      />

      {/* 2 — Experience the Difference */}
      <section style={{ background: "#fff", paddingTop: 80, paddingBottom: 60 }}>
        <div className="ov-container">
          <div style={{ display: "flex", gap: 80, alignItems: "flex-start" }} className="ov-about-diff-grid">
            {/* Left content */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 40 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <Eyebrow style={{ marginBottom: 0 }}>Who We Are</Eyebrow>
                <h2 style={S.h2}>
                  Experience{" "}
                  <em style={S.accent}>the difference</em>
                </h2>
              </div>
              <p style={S.body}>
                At Oceanview Life and Annuity Company, we go beyond traditional retirement savings
                by offering a uniquely straightforward and trustworthy approach. Here's what sets
                us apart:
              </p>
              <div style={S.checkCard}>
                <span style={S.checkCardLabel}>Why Oceanview</span>
                <CheckItemBold
                  label="Financial Strength You Can Trust:"
                  body={`Our "A" (Excellent) rating from A.M. Best showcases our solid financial foundation, providing you with confidence that your retirement savings are in stable hands.`}
                />
                <CheckItemBold
                  label="Simplicity and Transparency:"
                  body="We design our annuity products without unnecessary complexities or hidden clauses. This clarity lets you understand your investments fully and make decisions with ease."
                />
                <CheckItemBold
                  label="Competitive Rates for Maximum Growth:"
                  body="Our annuities offer some of the industry's most competitive rates, aiming to enhance the growth potential of your retirement savings."
                />
                <CheckItemBold
                  label="Personalized Solutions Tailored to You:"
                  body="We recognize that everyone's retirement journey is unique. By collaborating with financial professionals, we tailor our solutions to meet your specific needs."
                />
                <CheckItemBold
                  last
                  label="Commitment to Your Peace of Mind:"
                  body="Your financial well-being is our top priority. We strive to provide a seamless and reassuring experience as you plan for a secure future."
                />
              </div>
              <p style={S.body}>
                Experience the difference of partnering with a company that values simplicity,
                strength, and personalized service. Choose Oceanview and take confident steps
                toward a financially secure retirement.
              </p>
            </div>
            {/* Right photo */}
            <div style={{
              width: 480, height: 480, borderRadius: 16, overflow: "hidden",
              flexShrink: 0, alignSelf: "flex-start",
            }} className="ov-about-diff-photo">
              <img
                src="assets/older-couple-1.png"
                alt="Happy retired couple planning their financial future"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Our Mission & Our Approach (two feature columns) */}
      <section style={{ background: "#fff", paddingTop: 20, paddingBottom: 60 }}>
        <div className="ov-container">
          <div style={{ display: "flex", gap: 50, alignItems: "flex-start" }} className="ov-about-features-grid">
            {/* Left column */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 34 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <span style={S.checkCardLabel}>Our Mission</span>
                <h3 style={S.h3}>A singular focus on retirement security</h3>
              </div>
              <p style={S.body}>
                Founded in 1987, Oceanview was built around a single purpose: providing
                policyholders with reliable, transparent retirement savings products they can count
                on for life. We partner exclusively with financial professionals who share our
                commitment to helping clients achieve genuine security in retirement.
              </p>
              <div style={S.checkCard}>
                <span style={S.checkCardLabel}>We believe in</span>
                <CheckItem>Products designed without hidden clauses or unnecessary complexity</CheckItem>
                <CheckItem>Rates that consistently rank among the most competitive in the industry</CheckItem>
                <CheckItem>A zero-percent floor on indexed strategies — no principal at risk</CheckItem>
                <CheckItem last>Licensed in all 50 states with a nationwide network of trusted advisors</CheckItem>
              </div>
            </div>
            {/* Right column */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 34 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <span style={S.checkCardLabel}>Our Approach</span>
                <h3 style={S.h3}>Built on the advisor relationship</h3>
              </div>
              <p style={S.body}>
                We work exclusively through independent agents, advisors, banks, and broker-dealers.
                This means every product decision, every service investment, and every rate we set
                is designed to support the professionals who help clients plan for retirement —
                and the clients who depend on them.
              </p>
              <div style={S.checkCard}>
                <span style={S.checkCardLabel}>Our advisors receive</span>
                <CheckItem>A dedicated new business team from application to issuance</CheckItem>
                <CheckItem>In-force policy support throughout the client relationship</CheckItem>
                <CheckItem>Clear, straightforward product education and materials</CheckItem>
                <CheckItem last>A service team built around quick, reliable answers</CheckItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Our Story: photo left, content right */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="ov-container">
          <div style={{ display: "flex", gap: 80, alignItems: "center" }} className="ov-about-story-grid">
            {/* Photo */}
            <div style={{
              width: 420, height: 420, borderRadius: 24, overflow: "hidden",
              flexShrink: 0,
            }} className="ov-about-story-photo">
              <img
                src="assets/couple-walking.png"
                alt="Couple walking together"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            {/* Content */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 43 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <Eyebrow style={{ marginBottom: 0 }}>Since 1987</Eyebrow>
                <h2 style={S.h2}>
                  A trusted partner for{" "}
                  <em style={S.accent}>retirement security</em>
                </h2>
              </div>
              <p style={S.bodyLg}>
                Oceanview Life and Annuity Company stands as a reliable source of top-tier fixed
                and fixed-indexed annuity offerings. Our paramount objective is to offer a sense
                of security and financial stability to both our agents, who recommend our annuities
                to their clients, and our policyholders as they strive to achieve their financial
                objectives through our annuity products.
              </p>
              <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
                <PillGhost onClick={() => { window.location.hash = 'leadership'; }}>
                  Meet Our Leadership
                </PillGhost>
                <TextLink>Read our 2024 Annual Report</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — AM Best: content left, photo right */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="ov-container">
          <div style={{ display: "flex", gap: 80, alignItems: "center" }} className="ov-about-ambest-grid">
            {/* Content */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 39 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <Eyebrow style={{ marginBottom: 0 }}>Financial Strength</Eyebrow>
                <h2 style={S.h2}>
                  Rated{" "}
                  <em style={{ ...S.accent, color: "#2494c1" }}>"A" Excellent</em>
                  {" "}by A.M. Best
                </h2>
              </div>
              <p style={S.bodyLg}>
                Oceanview Life and Annuity Company holds an A (Excellent) Financial Strength
                Rating from A.M. Best — recognition of our balance-sheet strength, operating
                performance, and prudent enterprise risk management.
              </p>
              <TextLink>Read the latest A.M. Best report</TextLink>
            </div>
            {/* Photo */}
            <div style={{
              width: 420, height: 420, borderRadius: 24, overflow: "hidden",
              flexShrink: 0,
            }} className="ov-about-ambest-photo">
              <img
                src="assets/hero-beach-couple.jpg"
                alt="Couple on the beach"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6 — CTA banner (standard dark navy style) */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Get Started"
            title="Not sure which product is right for you?"
            body="Talk to a financial professional or contact our team to find the solution that fits your retirement goals."
            cta="Get Started"
            onClick={() => { window.location.hash = 'contact'; }}
          />
        </div>
      </section>

    </main>
  );
}
