import PageHero from './PageHero.jsx'
import { PillGhost, PillMint, TextLink } from './Buttons.jsx'
import CTABanner from './CTABanner.jsx'
import { ShieldCheck, TrendingUp, Lock, Users, Globe, Zap } from 'lucide-react'

// ── Shared styles ─────────────────────────────────────────────────────────────
const S = {
  // Eyebrow
  eyebrowRow:  { display: "flex", alignItems: "center", gap: 8, marginBottom: 16 },
  eyebrowLine: { width: 18, height: 1, background: "#2494C1", flexShrink: 0 },
  eyebrow:     { fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.4px", textTransform: "uppercase", color: "#2494C1" },
  eyebrowLight:{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.4px", textTransform: "uppercase", color: "#70BABF" },
  eyebrowLineLight: { width: 18, height: 1, background: "rgba(112,186,191,.6)", flexShrink: 0 },

  // Typography
  h2:     { fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.12, letterSpacing: "-0.025em", margin: "0 0 20px" },
  h2Dark: { color: "#F2FCFF" },
  h2Light:{ color: "#0D1F4E" },
  accent: { fontStyle: "italic", color: "#70BABF" },
  body:   { fontFamily: "var(--ov-ff-sans)", fontSize: 16.5, lineHeight: 1.7, color: "#4A5568", margin: 0 },
  bodyDark:{ fontFamily: "var(--ov-ff-sans)", fontSize: 16.5, lineHeight: 1.7, color: "rgba(242,252,255,.65)", margin: 0 },

  // Layout
  twoCol: { display: "flex", gap: 80, alignItems: "center" },
  btnRow: { display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", marginTop: 32 },
};

function Eyebrow({ light, children }) {
  return (
    <div style={S.eyebrowRow}>
      <div style={light ? S.eyebrowLineLight : S.eyebrowLine} />
      <span style={light ? S.eyebrowLight : S.eyebrow}>{children}</span>
    </div>
  );
}

// ── Why Oceanview — differentiator cards ──────────────────────────────────────
const PILLARS = [
  {
    Icon: ShieldCheck,
    title: "Financial Strength",
    body: "An A (Excellent) rating from A.M. Best — recognition of our balance-sheet strength and prudent risk management.",
  },
  {
    Icon: TrendingUp,
    title: "Competitive Rates",
    body: "Consistently among the industry's most competitive guaranteed rates on both MYGA and FIA products.",
  },
  {
    Icon: Lock,
    title: "Principal Protection",
    body: "A zero-percent floor on indexed strategies means your clients can pursue growth without risking their principal.",
  },
  {
    Icon: Zap,
    title: "Simplicity by Design",
    body: "No hidden clauses, no unnecessary complexity. Products built to be understood, explained, and trusted.",
  },
  {
    Icon: Users,
    title: "Advisor-First Service",
    body: "A dedicated team built around the advisor relationship — from new business to in-force policy support.",
  },
  {
    Icon: Globe,
    title: "Nationwide Reach",
    body: "Licensed in all 50 states and distributed through a broad network of agents, advisors, and broker-dealers.",
  },
];

function PillarCard({ Icon, title, body }) {
  return (
    <div style={{
      background: "rgba(255,255,255,.05)",
      border: "1px solid rgba(255,255,255,.08)",
      borderRadius: 16,
      padding: "32px 28px",
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 10,
        background: "rgba(112,186,191,.15)",
        border: "1px solid rgba(112,186,191,.25)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <Icon size={20} color="#70BABF" strokeWidth={1.75} />
      </div>
      <div>
        <div style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 15, color: "#F2FCFF", marginBottom: 8 }}>
          {title}
        </div>
        <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 14, lineHeight: 1.65, color: "rgba(242,252,255,.55)", margin: 0 }}>
          {body}
        </p>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CompanyPage() {
  return (
    <main>

      {/* 1 ── Hero ──────────────────────────────────────────────────────────── */}
      <PageHero
        image="assets/AdobeStock_1231908414@0.3x.jpg"
        eyebrow="Since 1987"
        title="Retirement solutions designed for"
        titleAccent="clarity and confidence."
        subtitle="Guaranteed interest, flexible options, and growth potential — with principal protection at every step."
        ctaPrimary="Compare Products"
      />

      {/* 2 ── Company story ─────────────────────────────────────────────────── */}
      <section style={{ background: "#fff" }} className="ov-section">
        <div className="ov-container">
          <div style={S.twoCol} className="ov-company-about-grid">
            <img
              src="assets/couple-walking.png"
              alt="Couple walking together"
              style={{ width: 440, height: 520, borderRadius: 24, objectFit: "cover", flexShrink: 0, display: "block" }}
              className="ov-company-about-img"
            />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
              <div>
                <Eyebrow>Who We Are</Eyebrow>
                <h2 style={{ ...S.h2, ...S.h2Light }}>
                  A singular focus on{" "}
                  <em style={S.accent}>retirement security.</em>
                </h2>
              </div>
              <p style={S.body}>
                Founded in 1987, Oceanview Life and Annuity Company was built around a single
                purpose: providing policyholders with reliable, transparent retirement savings
                products they can count on for life.
              </p>
              <p style={S.body}>
                We partner exclusively with financial professionals — agents, advisors, banks,
                and broker-dealers — who share our commitment to helping clients achieve
                genuine financial security in retirement. Every product we design, every
                rate we set, and every service decision we make reflects that mission.
              </p>
              <div style={S.btnRow}>
                <PillGhost>Meet Our Leadership</PillGhost>
                <TextLink>Read our 2024 Annual Report</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── Why Oceanview — dark navy, 3×2 card grid ─────────────────────── */}
      <section style={{ background: "var(--ov-navy-1000)" }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 52 }}>
            <Eyebrow light>Why Oceanview</Eyebrow>
            <h2 style={{ ...S.h2, ...S.h2Dark, maxWidth: "22ch" }}>
              Built differently,{" "}
              <em style={S.accent}>for a reason.</em>
            </h2>
            <p style={{ ...S.bodyDark, maxWidth: "54ch" }}>
              We focus exclusively on fixed annuity solutions — so every product decision
              reflects a singular commitment to the retirement market.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }} className="ov-company-pillars-grid">
            {PILLARS.map((p) => <PillarCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* 4 ── A.M. Best — bold centered accent ──────────────────────────────── */}
      <section style={{ background: "var(--ov-surface-tint)", overflow: "hidden", position: "relative" }} className="ov-section">
        {/* Watermark "A" */}
        <div aria-hidden="true" style={{
          position: "absolute",
          right: "-2%",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--ov-ff-display)",
          fontWeight: 800,
          fontSize: "clamp(280px, 30vw, 480px)",
          lineHeight: 1,
          color: "rgba(36,148,193,.07)",
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "-0.05em",
        }}>A</div>

        <div className="ov-container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 640 }}>
            <Eyebrow>Financial Strength</Eyebrow>
            <h2 style={{ ...S.h2, ...S.h2Light }}>
              Rated{" "}
              <em style={{ ...S.accent, color: "#2494C1" }}>"A" Excellent</em>
              {" "}by A.M. Best.
            </h2>
            <p style={{ ...S.body, marginBottom: 28 }}>
              Oceanview holds an A (Excellent) Financial Strength Rating from A.M. Best —
              the insurance industry's leading independent rating authority. This recognition
              reflects our balance-sheet strength, consistent operating performance, and
              prudent enterprise risk management.
            </p>
            <p style={{ ...S.body, marginBottom: 36 }}>
              For your clients, it means one thing: the company behind their annuity has the
              financial foundation to honor every commitment it makes.
            </p>
            <TextLink>Read the latest A.M. Best report</TextLink>
          </div>
        </div>
      </section>

      {/* 5 ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="ov-section" style={{ background: "#fff" }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Get Started"
            title="Retirement solutions backed by"
            titleAccent="decades of strength."
            body="Financial confidence you can trust — with the transparency and stability your clients deserve."
            cta="Compare Products"
            onClick={() => { window.location.hash = 'products'; }}
          />
        </div>
      </section>

    </main>
  );
}
