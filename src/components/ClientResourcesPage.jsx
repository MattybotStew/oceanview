import { useState, useMemo, useEffect } from 'react'
import TabBar from './TabBar.jsx'
import CTABanner from './CTABanner.jsx'
import { TextLink } from './Buttons.jsx'
import { Download } from 'lucide-react'

const TABS = ["Rates", "Applications", "Comparisons", "Glossary"];

const S = {
  section:     { padding: "60px 0 80px" },
  eyebrowRow:  { display: "flex", alignItems: "center", gap: 8, marginBottom: 14 },
  eyebrowLine: { width: 18, height: 1, background: "#2494C1", flexShrink: 0 },
  eyebrow:     { fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.4px", textTransform: "uppercase", color: "#2494C1" },
  h2:          { fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(24px, 2.8vw, 36px)", color: "#0D1F4E", letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 12px" },
  body:        { fontFamily: "var(--ov-ff-sans)", fontSize: 15, color: "#4A5568", lineHeight: 1.65, margin: "0 0 12px" },
};

function Eyebrow({ children }) {
  return (
    <div style={S.eyebrowRow}>
      <div style={S.eyebrowLine} />
      <span style={S.eyebrow}>{children}</span>
    </div>
  );
}

// ── RATES ─────────────────────────────────────────────────────────────────────
const RATE_BANDS = [
  { band: "Premier ($100k+)", rates: ["4.95%", "5.20%", "4.90%", "4.85%", "4.75%", "5.10%", "4.65%"] },
  { band: "Senior ($50k+)",   rates: ["4.65%", "4.90%", "4.75%", "4.65%", "4.55%", "4.85%", "4.45%"] },
  { band: "Standard ($10k+)", rates: ["4.35%", "4.60%", "4.45%", "4.35%", "4.25%", "4.55%", "4.15%"] },
];
const RATE_TERMS = ["2 Yr", "3 Yr", "4 Yr", "5 Yr", "6 Yr", "7 Yr", "10 Yr"];

function RatesTab() {
  return (
    <div style={S.section}>
      <Eyebrow>Current Annuity Rates</Eyebrow>
      <h2 style={S.h2}>MYGA Rates</h2>
      <p style={{ ...S.body, marginBottom: 28 }}>
        Effective May 28, 2026. Subject to change without notice.
      </p>
      <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid rgba(13,31,78,.08)", background: "#fff" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--ov-ff-sans)", fontSize: 14, minWidth: 560 }}>
          <thead>
            <tr style={{ background: "var(--ov-navy-1000)" }}>
              <th style={{ textAlign: "left", padding: "14px 20px", fontWeight: 600, color: "rgba(242,252,255,.5)", fontSize: 11, letterSpacing: "0.8px", textTransform: "uppercase" }}>Band / Term</th>
              {RATE_TERMS.map(t => (
                <th key={t} style={{ textAlign: "center", padding: "14px 12px", fontWeight: 600, color: "rgba(242,252,255,.75)", fontSize: 11, letterSpacing: "0.8px", textTransform: "uppercase" }}>{t}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RATE_BANDS.map((row, i) => (
              <tr key={row.band} style={{ borderBottom: i < RATE_BANDS.length - 1 ? "1px solid rgba(13,31,78,.07)" : "none", background: i % 2 === 0 ? "#fff" : "var(--ov-surface-tint)" }}>
                <td style={{ padding: "16px 20px", fontWeight: 600, color: "#0D1F4E", fontSize: 13 }}>{row.band}</td>
                {row.rates.map((r, j) => (
                  <td key={j} style={{ padding: "16px 12px", textAlign: "center", color: "#2494C1", fontWeight: 700, fontFamily: "var(--ov-ff-display)", fontSize: 16 }}>{r}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 12, color: "#9CA3AF", margin: "12px 0 28px", lineHeight: 1.5 }}>
        Rates guaranteed for full term. 10% free withdrawal beginning year 2. Premier band requires $100k+ annual premium. Rates subject to change.
      </p>
      <button style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "none", border: "1.5px solid rgba(36,148,193,.3)", borderRadius: 8, padding: "10px 18px", fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13, color: "#2494C1", cursor: "pointer" }}>
        <Download size={13} strokeWidth={2} />
        Download Full Rate Sheet (PDF)
      </button>
    </div>
  );
}

// ── APPLICATIONS ──────────────────────────────────────────────────────────────
const APP_PRODUCTS = [
  "Harbourview MYGA",
  "Sky Harbourview MYGA",
  "Harbourview FIA",
  "CapLock FIA",
];

const CHANNELS = ["IMO", "Financial Institution"];

const STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois",
  "Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
  "Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada",
  "New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota",
  "Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington",
  "West Virginia","Wisconsin","Wyoming",
];

function ApplicationsTab() {
  const [product, setProduct]   = useState(APP_PRODUCTS[0]);
  const [channel, setChannel]   = useState("IMO");
  const [state, setState]       = useState("");

  const capLockFIOnly = product === "CapLock FIA";

  // CapLock is IMO-only — auto-correct if user switches
  useEffect(() => {
    if (capLockFIOnly && channel === "Financial Institution") setChannel("IMO");
  }, [product, capLockFIOnly, channel]);

  const ready = state !== "";

  const selectStyle = {
    fontFamily: "var(--ov-ff-sans)", fontSize: 15, color: "#0D1F4E",
    border: "1.5px solid rgba(13,31,78,.15)", borderRadius: 10,
    padding: "12px 16px", background: "#fff", outline: "none",
    width: "100%", boxSizing: "border-box", appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1L6 7L11 1' stroke='%239CA3AF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 14px center",
    paddingRight: 40,
    cursor: "pointer",
  };

  return (
    <div style={S.section}>
      <Eyebrow>Application Packages</Eyebrow>
      <h2 style={S.h2}>Find the right application</h2>
      <p style={{ ...S.body, marginBottom: 36 }}>
        Select a product, distribution channel, and state to retrieve the correct application package. All packages include the application, suitability questionnaire, and relevant state disclosures.
      </p>

      {/* Step 1 — Product */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#4A5568", marginBottom: 10 }}>
          1 · Product
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {APP_PRODUCTS.map(p => (
            <button
              key={p}
              onClick={() => setProduct(p)}
              style={{
                fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13,
                padding: "9px 18px", borderRadius: 200, border: "1.5px solid",
                cursor: "pointer", transition: "all .15s ease",
                background: product === p ? "var(--ov-navy-900)" : "#fff",
                color: product === p ? "#fff" : "var(--ov-navy-900)",
                borderColor: product === p ? "var(--ov-navy-900)" : "rgba(13,31,78,.15)",
              }}
            >{p}</button>
          ))}
        </div>
      </div>

      {/* Step 2 — Channel */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#4A5568", marginBottom: 10 }}>
          2 · Distribution Channel
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {CHANNELS.map(ch => {
            const disabled = capLockFIOnly && ch === "Financial Institution";
            const isActive = channel === ch;
            return (
              <button
                key={ch}
                onClick={() => !disabled && setChannel(ch)}
                title={disabled ? "CapLock FIA is available through IMO channel only" : undefined}
                style={{
                  fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13,
                  padding: "9px 18px", borderRadius: 200, border: "1.5px solid",
                  cursor: disabled ? "not-allowed" : "pointer", transition: "all .15s ease",
                  background: isActive ? "#2494C1" : "#fff",
                  color: isActive ? "#fff" : disabled ? "#CBD5E0" : "var(--ov-navy-900)",
                  borderColor: isActive ? "#2494C1" : disabled ? "rgba(13,31,78,.07)" : "rgba(13,31,78,.15)",
                  opacity: disabled ? 0.5 : 1,
                }}
              >{ch}</button>
            );
          })}
          {capLockFIOnly && (
            <span style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 12, color: "#9CA3AF", alignSelf: "center" }}>
              CapLock FIA is available through the IMO channel only.
            </span>
          )}
        </div>
      </div>

      {/* Step 3 — State */}
      <div style={{ marginBottom: 36, maxWidth: 380 }}>
        <div style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#4A5568", marginBottom: 10 }}>
          3 · State
        </div>
        <div style={{ position: "relative" }}>
          <select value={state} onChange={e => setState(e.target.value)} style={selectStyle}>
            <option value="">Select a state…</option>
            {STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* Result */}
      {ready ? (
        <div style={{ background: "rgba(36,148,193,.06)", border: "1.5px solid rgba(36,148,193,.25)", borderRadius: 12, padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#2494C1", marginBottom: 6 }}>
              Application Package
            </div>
            <div style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 20, color: "#0D1F4E", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
              {product} — {state}
            </div>
            <div style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 13, color: "#6B7280", marginTop: 4 }}>
              {channel} Channel · Includes application, suitability form & state disclosures
            </div>
          </div>
          <button style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#2494C1", border: "none", borderRadius: 10, padding: "12px 22px", fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 14, color: "#fff", cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}>
            <Download size={14} strokeWidth={2} />
            Download PDF
          </button>
        </div>
      ) : (
        <div style={{ border: "1.5px dashed rgba(13,31,78,.12)", borderRadius: 12, padding: "32px 28px", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 14, color: "#9CA3AF", margin: 0 }}>
            Select a product, channel, and state above to retrieve the application package.
          </p>
        </div>
      )}

      <div style={{ marginTop: 48, paddingTop: 40, borderTop: "1px solid rgba(13,31,78,.08)" }}>
        <div style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#4A5568", marginBottom: 16 }}>
          Service Forms (Post-Issue)
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 8 }}>
          {[
            "Beneficiary Change Request",
            "Trusted Contact Designation",
            "Partial Withdrawal Request",
            "Full Surrender Request",
            "Automatic Withdrawal Setup",
            "Name / Address Change",
            "Direct Deposit Authorization",
            "ACORD Transfer Form",
            "Transfer of Contract Values",
            "W-4P Tax Withholding",
            "W-4R Tax Withholding",
            "Required Minimum Distribution",
            "Qualified Charitable Distribution",
            "Death Claim Form",
            "Inherited Contract Setup",
            "Trust Verification Form",
          ].map(f => (
            <div key={f} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "12px 16px", background: "#fff", border: "1px solid rgba(13,31,78,.07)", borderRadius: 8 }}>
              <span style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 13, color: "#0D1F4E" }}>{f}</span>
              <Download size={13} color="#2494C1" strokeWidth={2} style={{ flexShrink: 0, cursor: "pointer" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── COMPARISONS ───────────────────────────────────────────────────────────────
const COMPARISONS = [
  {
    title: "Harbourview MYGA vs. Sky Harbourview MYGA",
    desc: "Side-by-side view of our two core MYGAs — term length, rate, and benefit differences explained.",
  },
  {
    title: "Harbourview MYGA vs. Sky Harbourview MYGA vs. Harbourview Plus",
    desc: "Three-way comparison of Oceanview's MYGA lineup across rate bands, terms, and accumulated value.",
  },
  {
    title: "Harbourview FIA vs. CapLock FIA",
    desc: "Compare Oceanview's two flagship FIA products across crediting strategies, cap rates, and guarantees.",
  },
];

function ComparisonsTab() {
  return (
    <div style={S.section}>
      <Eyebrow>Product Comparisons</Eyebrow>
      <h2 style={S.h2}>How our products compare</h2>
      <p style={{ ...S.body, marginBottom: 32 }}>Side-by-side breakdowns of Oceanview MYGAs and FIAs to help guide client conversations.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
        {COMPARISONS.map(c => (
          <div key={c.title} style={{ background: "#fff", border: "1px solid rgba(13,31,78,.08)", borderRadius: 14, padding: "28px 24px 22px", display: "flex", flexDirection: "column", gap: 14 }}>
            <h3 style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 18, color: "#0D1F4E", lineHeight: 1.25, margin: 0 }}>{c.title}</h3>
            <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 14, color: "#4A5568", lineHeight: 1.65, margin: 0, flex: 1 }}>{c.desc}</p>
            <TextLink color="var(--ov-teal-600)" style={{ fontSize: 13 }}>Compare Features</TextLink>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── GLOSSARY ──────────────────────────────────────────────────────────────────
const GLOSSARY_TERMS = [
  { term: "1035 Exchange", def: "The tax-exempt transfer of an existing annuity policy to a new annuity or life insurance policy, covering the same person." },
  { term: "Accumulation Period", def: "The phase of an annuity in which premium deposits and interest compounds, prior to the payout phase beginning." },
  { term: "Annuitant", def: "The person whose life is measured to determine annuity payments. Often the same as the contract owner." },
  { term: "Beneficiary", def: "The person entitled to receive death benefit proceeds upon the death of the annuitant or contract owner." },
  { term: "Cap Rate", def: "The maximum percent of an index's gain credited to an indexed annuity in a given crediting period." },
  { term: "Fixed Annuity", def: "Annuity with a guaranteed interest rate, no market exposure, and predictable risk-free growth over a defined term." },
  { term: "Free Withdrawal", def: "A provision allowing the contract owner to withdraw a specified percentage of the account value each year without surrender charges." },
  { term: "Market Value Adjustment (MVA)", def: "An adjustment applied to withdrawals taken during the surrender charge period, based on changes in interest rates." },
  { term: "Participation Rate", def: "A percentage of the index gain that the policyholder receives in a fixed indexed annuity crediting strategy." },
  { term: "Required Minimum Distribution (RMD)", def: "Minimum amount IRA-qualified accounts must withdraw per year per IRS rules, beginning at age 73." },
  { term: "Surrender Charge", def: "A fee applied to early withdrawals that declines over the surrender charge period until it reaches zero." },
  { term: "Tax Deferral", def: "The postponement of income taxes on annuity earnings until funds are withdrawn, allowing greater compounding over time." },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function GlossaryTab() {
  const [query, setQuery]   = useState("");
  const [letter, setLetter] = useState("");

  const filtered = useMemo(() => {
    return GLOSSARY_TERMS.filter(g => {
      const matchesLetter = !letter || g.term.toUpperCase().startsWith(letter);
      const matchesQuery  = !query.trim() || g.term.toLowerCase().includes(query.toLowerCase()) || g.def.toLowerCase().includes(query.toLowerCase());
      return matchesLetter && matchesQuery;
    });
  }, [query, letter]);

  return (
    <div style={S.section}>
      <Eyebrow>Annuity Glossary</Eyebrow>
      <h2 style={S.h2}>Key terms, defined</h2>
      <p style={{ ...S.body, marginBottom: 24 }}>Quick definitions of key terms you'll encounter in Oceanview contracts and client conversations.</p>

      <input
        type="text"
        placeholder="Search terms or definitions…"
        value={query}
        onChange={e => { setQuery(e.target.value); setLetter(""); }}
        style={{ width: "100%", boxSizing: "border-box", fontFamily: "var(--ov-ff-sans)", fontSize: 14, color: "#0D1F4E", padding: "12px 16px", border: "1.5px solid rgba(13,31,78,.15)", borderRadius: 10, outline: "none", marginBottom: 20, background: "#fff" }}
      />

      <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 36 }}>
        {ALPHABET.map(l => {
          const hasTerms = GLOSSARY_TERMS.some(g => g.term.toUpperCase().startsWith(l));
          return (
            <button
              key={l}
              onClick={() => { setLetter(letter === l ? "" : l); setQuery(""); }}
              style={{
                width: 30, height: 30, borderRadius: 6, border: "none",
                fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 12,
                cursor: hasTerms ? "pointer" : "default",
                background: letter === l ? "var(--ov-navy-900)" : hasTerms ? "var(--ov-surface-tint)" : "transparent",
                color: letter === l ? "#fff" : hasTerms ? "var(--ov-navy-900)" : "#CBD5E0",
                transition: "all .12s ease",
              }}
            >{l}</button>
          );
        })}
      </div>

      <div>
        {filtered.length > 0 ? filtered.map((g, i) => (
          <div key={g.term} style={{ padding: "20px 0", borderTop: "1px solid rgba(13,31,78,.08)" }}>
            <div style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 19, color: "#0D1F4E", marginBottom: 6 }}>{g.term}</div>
            <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 14, color: "#4A5568", lineHeight: 1.68, margin: 0 }}>{g.def}</p>
          </div>
        )) : (
          <p style={{ color: "#9CA3AF", fontFamily: "var(--ov-ff-sans)", fontSize: 15, padding: "32px 0" }}>No terms found.</p>
        )}
        {filtered.length > 0 && <div style={{ height: 1, background: "rgba(13,31,78,.08)", marginTop: 0 }} />}
      </div>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
function tabFromURL() {
  const qs = window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '';
  const tab = new URLSearchParams(qs).get('tab');
  return TABS.includes(tab) ? tab : 'Rates';
}

export default function ClientResourcesPage() {
  const [activeTab, setActiveTab] = useState(tabFromURL);

  useEffect(() => {
    const onHash = () => setActiveTab(tabFromURL());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const tabBg = { Rates: "var(--ov-surface-tint)", Applications: "#fff", Comparisons: "var(--ov-surface-tint)", Glossary: "#fff" };

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "#fff", padding: "80px 0 64px", textAlign: "center" }}>
        <div className="ov-container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: "#2494C1", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.4px", textTransform: "uppercase", color: "#2494C1" }}>Client Resources</span>
          </div>
          <h1 style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(32px, 4.5vw, 62px)", letterSpacing: "-0.025em", lineHeight: 1.08, color: "#0D1F4E", margin: "0 auto 24px", maxWidth: "22ch" }}>
            Client Resources
          </h1>
          <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: "clamp(15px, 1.4vw, 17px)", lineHeight: 1.65, color: "#4A5568", margin: "0 auto", maxWidth: "52ch" }}>
            Current rates, state application packages, product comparisons, and a full annuity glossary — everything you need to serve clients efficiently.
          </p>
        </div>
      </section>

      {/* Sticky tab bar */}
      <div style={{ background: "#fff", position: "sticky", top: 72, zIndex: 10, borderBottom: "1px solid rgba(13,31,78,.06)" }}>
        <div className="ov-container">
          <TabBar tabs={TABS} active={activeTab} onChange={setActiveTab} style={{ borderBottom: "none" }} />
        </div>
      </div>

      {/* Tab content */}
      <div style={{ background: tabBg[activeTab] ?? "#fff" }}>
        <div className="ov-container">
          {activeTab === "Rates"        && <RatesTab />}
          {activeTab === "Applications" && <ApplicationsTab />}
          {activeTab === "Comparisons"  && <ComparisonsTab />}
          {activeTab === "Glossary"     && <GlossaryTab />}
        </div>
      </div>

      <section className="ov-section" style={{ background: "#fff" }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Need Help?"
            title="Our sales team is ready"
            titleAccent="to support your next case."
            body="Questions about rates, applications, or product suitability? A dedicated Oceanview representative can walk you through the details."
            cta="Contact Sales"
            onClick={() => { window.location.hash = 'contact'; }}
          />
        </div>
      </section>
    </main>
  );
}
