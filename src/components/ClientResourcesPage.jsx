import { useState, useMemo, useEffect } from 'react'
import PageHero from './PageHero.jsx'
import CTABanner from './CTABanner.jsx'
import { TextLink, PillGhost } from './Buttons.jsx'
import { Download } from 'lucide-react'
import { Eyebrow } from './common.jsx'

const NAV_ITEMS = [
  { id: 'downloads',    label: 'Downloads'    },
  { id: 'rates',        label: 'Rates'        },
  { id: 'comparisons',  label: 'Comparisons'  },
  { id: 'glossary',     label: 'Glossary'     },
  { id: 'case-studies', label: 'Case Studies' },
];

const S = {
  section:  { padding: "60px 0 80px" },
  h2:       { fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(24px, 2.8vw, 36px)", color: "#0D1F4E", letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 12px" },
  h3:       { fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: "clamp(18px, 2vw, 24px)", color: "#0D1F4E", letterSpacing: "-0.015em", lineHeight: 1.2, margin: "0 0 20px" },
  body:     { fontFamily: "var(--ov-ff-sans)", fontSize: 15, color: "#4A5568", lineHeight: 1.65, margin: "0 0 12px" },
  divider:  { height: 1, background: "rgba(13,31,78,.08)", margin: "48px 0" },
  subLabel: { fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#4A5568", marginBottom: 10 },
};

// ── DOWNLOADS ─────────────────────────────────────────────────────────────────

const BROCHURE_GROUPS = [
  {
    label: "Fixed Annuities",
    items: [
      { name: "Harbourview MYGA",      desc: "Multi-Year Guaranteed Annuity — competitive guaranteed rates across multiple terms.",    route: "harbourview-myga" },
      { name: "Horizon MYGA",          desc: "Straightforward guaranteed accumulation — predictable growth and tax deferral.",          route: "horizon-myga" },
      { name: "Sky Harbourview MYGA",   desc: "Enhanced MYGA with nursing home waiver and strong rate bands.",                         route: "sky-harbourview-myga" },
    ],
  },
  {
    label: "Fixed Annuities with Flexibility",
    items: [
      { name: "CurrentRate MYGA",       desc: "Flexible premium annuity with competitive current rates and annual reset.",              route: "current-rate-fia" },
      { name: "Harbourview FIA",        desc: "Balanced growth with principal protection and multiple indexing strategies.",            route: "harbourview-fia" },
    ],
  },
  {
    label: "Fixed Indexed Annuities",
    items: [
      { name: "CapLock Fixed Indexed",  desc: "Guaranteed cap rates and participation choices — zero market risk.",                     route: "caplock" },
      { name: "Topsider FIA",           desc: "Upside-focused index crediting strategies within a structured, protected framework.",    route: "topsider" },
    ],
  },
];

const APP_PACKETS = [
  { name: "MYGA Application Packet",  desc: "Includes application, suitability questionnaire, rate agreement." },
  { name: "FIA Application Packet",   desc: "Indexed annuity application & index disclosures." },
];

const SERVICE_FORMS = [
  "Change of Beneficiary",
  "Partial Withdrawal Request",
  "RMD Request Form",
  "Address Change / Contact",
  "Direct Deposit Authorization",
  "Full Surrender Request",
];

function BrochureCard({ name, desc, route }) {
  return (
    <div style={{ background: "#fff", borderRadius: 14, padding: "24px 22px 20px", display: "flex", flexDirection: "column", gap: 12, border: "1px solid rgba(13,31,78,.08)" }}>
      <div>
        <h3 style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 18, color: "#0D1F4E", lineHeight: 1.2, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{name}</h3>
        <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 13, color: "#6B7280", lineHeight: 1.6, margin: 0 }}>{desc}</p>
      </div>
      <div style={{ display: "flex", gap: 16, marginTop: "auto", paddingTop: 4, alignItems: "center" }}>
        <TextLink onClick={() => { window.location.hash = route; }} style={{ fontSize: 12 }}>View Page</TextLink>
        <PillGhost style={{ fontSize: 12, padding: "7px 14px", display: "inline-flex", alignItems: "center", gap: 6 }}>
          <Download size={11} strokeWidth={2} /> Download PDF
        </PillGhost>
      </div>
    </div>
  );
}

const dlSectionHead = {
  fontFamily: "var(--ov-ff-display)", fontWeight: 400,
  fontSize: "clamp(20px, 2.4vw, 26px)", color: "#233D7C",
  letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 16px",
};

function DownloadsTab() {
  return (
    <div style={S.section}>
      <Eyebrow>Product Brochures</Eyebrow>
      <h2 style={S.h2}>Brochures & spec sheets</h2>
      <p style={{ ...S.body, marginBottom: 4 }}>
        Product brochures, applications, and service forms for Oceanview products. Click to view or download PDFs.
      </p>
      <p style={{ fontFamily: "var(--ov-ff-sans)", fontStyle: "italic", fontSize: 13, color: "#9CA3AF", margin: "0 0 28px" }}>
        *All PDF forms reflect latest revisions (March 2026). For agent use only.
      </p>

      {BROCHURE_GROUPS.map((group, gi) => (
        <div key={group.label}>
          {gi > 0 && <div style={S.divider} />}
          <p style={dlSectionHead}>{group.label}</p>
          <div style={{ height: 1, background: "rgba(13,31,78,.12)", marginBottom: 32 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {group.items.map(b => <BrochureCard key={b.name} {...b} />)}
          </div>
        </div>
      ))}

      <div style={S.divider} />

      {/* Application Packets */}
      <p style={dlSectionHead}>Applications (MYGA / FIA Packets)</p>
      <div style={{ height: 1, background: "rgba(13,31,78,.12)", marginBottom: 32 }} />
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {APP_PACKETS.map(p => (
          <div key={p.name} style={{ flex: "1 0 260px", background: "#fff", borderRadius: 14, padding: "24px 22px 20px", display: "flex", flexDirection: "column", gap: 12, border: "1px solid rgba(13,31,78,.08)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
              <h3 style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 18, color: "#0D1F4E", lineHeight: 1.2, margin: "0 0 4px", letterSpacing: "-0.01em" }}>{p.name}</h3>
              <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 13, color: "#6B7280", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </div>
            <PillGhost style={{ alignSelf: "flex-start", marginTop: 8 }}>Download</PillGhost>
          </div>
        ))}
      </div>

      <div style={S.divider} />

      {/* Service Forms */}
      <p style={dlSectionHead}>Service Forms (Post-issue)</p>
      <div style={{ height: 1, background: "rgba(13,31,78,.12)", marginBottom: 32 }} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "space-between" }}>
        {SERVICE_FORMS.map(f => (
          <button key={f} style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13, color: "#0D1F4E", background: "#e2f1f2", border: "none", borderRadius: 200, padding: "11px 22px", cursor: "pointer" }}>
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── RATES ─────────────────────────────────────────────────────────────────────

const MYGA_BANDS = [
  { band: "Premier ($100k+)", rates: ["4.95%", "5.20%", "4.90%", "4.85%", "4.75%", "5.10%", "4.65%"] },
  { band: "Senior ($50k+)",   rates: ["4.65%", "4.90%", "4.75%", "4.65%", "4.55%", "4.85%", "4.45%"] },
  { band: "Standard ($10k+)", rates: ["4.35%", "4.60%", "4.45%", "4.35%", "4.25%", "4.55%", "4.15%"] },
];
const RATE_TERMS = ["2 Yr", "3 Yr", "4 Yr", "5 Yr", "6 Yr", "7 Yr", "10 Yr"];

const CA_BANDS = [
  { band: "Premier ($100k+)", rates: ["4.80%", "5.05%", "4.75%", "4.70%", "4.60%", "4.95%", "4.50%"] },
  { band: "Senior ($50k+)",   rates: ["4.50%", "4.75%", "4.60%", "4.50%", "4.40%", "4.70%", "4.30%"] },
  { band: "Standard ($10k+)", rates: ["4.20%", "4.45%", "4.30%", "4.20%", "4.10%", "4.40%", "4.00%"] },
];

const FIA_PRODUCTS = [
  {
    name: "Harbourview FIA",
    strategies: [
      { strategy: "S&P 500 Annual Point-to-Point", type: "Cap",           value: "10.00%"  },
      { strategy: "S&P 500 Monthly Average",       type: "Cap",           value: "12.00%"  },
      { strategy: "Nasdaq-100 Annual P-to-P",      type: "Cap",           value: "11.50%"  },
      { strategy: "Russell 2000 Annual P-to-P",    type: "Cap",           value: "10.50%"  },
      { strategy: "Fixed Strategy",                type: "Guaranteed",    value: "4.25%"   },
    ],
  },
  {
    name: "CapLock FIA",
    strategies: [
      { strategy: "S&P 500 Annual Point-to-Point", type: "Cap (Locked)",  value: "9.50%"   },
      { strategy: "S&P 500 2-Yr Point-to-Point",   type: "Cap (Locked)",  value: "18.00%"  },
      { strategy: "Nasdaq-100 Annual P-to-P",      type: "Cap (Locked)",  value: "11.00%"  },
      { strategy: "S&P 500 Par Rate",              type: "Participation", value: "45.00%"  },
      { strategy: "Fixed Strategy",                type: "Guaranteed",    value: "4.00%"   },
    ],
  },
];

const rateTableStyle = { width: "100%", borderCollapse: "collapse", fontFamily: "var(--ov-ff-sans)", fontSize: 14, minWidth: 520 };
const thBase = { padding: "14px 16px", fontWeight: 600, color: "rgba(242,252,255,.5)", fontSize: 11, letterSpacing: "0.8px", textTransform: "uppercase" };

function RateSubNav({ active, onChange }) {
  const tabs = ["MYGA Rates", "FIA Caps & Participation", "California Rates"];
  return (
    <div style={{ display: "flex", marginBottom: 32, borderBottom: "1px solid #e8e5e5", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
      {tabs.map(t => {
        const isActive = active === t;
        return (
          <button key={t} onClick={() => onChange(t)} style={{
            flex: "1 0 0",
            minWidth: 100,
            height: 51,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 24px",
            border: "none",
            borderRight: "1px solid #e8e5e5",
            fontFamily: "var(--ov-ff-sans)",
            fontWeight: 600,
            fontSize: 13,
            color: "#001F54",
            whiteSpace: "nowrap",
            cursor: "pointer",
            background: isActive ? "rgba(226,241,242,0.6)" : "transparent",
            transition: "background .15s",
          }}
            onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "rgba(226,241,242,0.35)"; }}
            onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
          >{t}</button>
        );
      })}
    </div>
  );
}

function MYGARates({ bands, terms, note }) {
  return (
    <>
      <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid rgba(13,31,78,.08)", background: "#fff" }}>
        <table style={rateTableStyle}>
          <thead>
            <tr style={{ background: "var(--ov-navy-1000)" }}>
              <th style={{ ...thBase, textAlign: "left" }}>Band / Term</th>
              {terms.map(t => <th key={t} style={{ ...thBase, textAlign: "center" }}>{t}</th>)}
            </tr>
          </thead>
          <tbody>
            {bands.map((row, i) => (
              <tr key={row.band} style={{ borderBottom: i < bands.length - 1 ? "1px solid rgba(13,31,78,.07)" : "none", background: i % 2 === 0 ? "#fff" : "var(--ov-surface-tint)" }}>
                <td style={{ padding: "16px", fontWeight: 600, color: "#0D1F4E", fontSize: 13 }}>{row.band}</td>
                {row.rates.map((r, j) => (
                  <td key={j} style={{ padding: "16px 12px", textAlign: "center", color: "#2494C1", fontWeight: 600, fontFamily: "var(--ov-ff-display)", fontSize: 16 }}>{r}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 12, color: "#9CA3AF", margin: "12px 0 28px", lineHeight: 1.5 }}>
        {note}
      </p>
      <button style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", border: "1.5px solid rgba(13,31,78,.2)", borderRadius: 8, padding: "10px 18px", fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13, color: "#233D7C", cursor: "pointer" }}>
        <Download size={13} strokeWidth={2} /> Download Full Rate Sheet (PDF)
      </button>
    </>
  );
}

function FIARates() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      {FIA_PRODUCTS.map(prod => (
        <div key={prod.name}>
          <h3 style={{ ...S.h3, marginBottom: 16 }}>{prod.name}</h3>
          <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid rgba(13,31,78,.08)", background: "#fff" }}>
            <table style={{ ...rateTableStyle, minWidth: 480 }}>
              <thead>
                <tr style={{ background: "var(--ov-navy-1000)" }}>
                  <th style={{ ...thBase, textAlign: "left" }}>Strategy</th>
                  <th style={{ ...thBase, textAlign: "center" }}>Type</th>
                  <th style={{ ...thBase, textAlign: "center" }}>Rate</th>
                </tr>
              </thead>
              <tbody>
                {prod.strategies.map((s, i) => (
                  <tr key={s.strategy} style={{ borderBottom: i < prod.strategies.length - 1 ? "1px solid rgba(13,31,78,.07)" : "none", background: i % 2 === 0 ? "#fff" : "var(--ov-surface-tint)" }}>
                    <td style={{ padding: "14px 16px", color: "#0D1F4E", fontSize: 13, fontWeight: 500 }}>{s.strategy}</td>
                    <td style={{ padding: "14px 12px", textAlign: "center", color: "#6B7280", fontSize: 12 }}>{s.type}</td>
                    <td style={{ padding: "14px 12px", textAlign: "center", color: "#2494C1", fontWeight: 600, fontFamily: "var(--ov-ff-display)", fontSize: 16 }}>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 12, color: "#9CA3AF", lineHeight: 1.5 }}>
        Cap rates and participation rates are declared at the start of each contract year and guaranteed for that term. Subject to change for new contracts.
      </p>
    </div>
  );
}

function RatesTab() {
  const [sub, setSub] = useState("MYGA Rates");

  return (
    <div style={S.section}>
      <Eyebrow>Current Annuity Rates</Eyebrow>
      <h2 style={S.h2}>Rates</h2>
      <p style={{ ...S.body, marginBottom: 28 }}>
        Effective May 28, 2026. Subject to change without notice. View guaranteed rates by product and distribution band.
      </p>

      <RateSubNav active={sub} onChange={setSub} />

      {sub === "MYGA Rates" && (
        <MYGARates
          bands={MYGA_BANDS}
          terms={RATE_TERMS}
          note="Rates guaranteed for full term. 10% free withdrawal beginning year 2. Premier band requires $100k+ annual premium."
        />
      )}
      {sub === "FIA Caps & Participation" && <FIARates />}
      {sub === "California Rates" && (
        <MYGARates
          bands={CA_BANDS}
          terms={RATE_TERMS}
          note="California rate filings may differ from general rates. Rates effective May 28, 2026. Subject to state-specific approval requirements."
        />
      )}
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
    title: "Harbourview MYGA vs. Sky Harbourview MYGA vs. CurrentRate",
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
          <div key={c.title} style={{ background: "rgba(112,186,191,0.2)", borderRadius: 14, padding: "28px 24px 22px", display: "flex", flexDirection: "column", gap: 14 }}>
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
  { term: "1035 Exchange",                   def: "The tax-exempt transfer of an existing annuity policy to a new annuity or life insurance policy, covering the same person." },
  { term: "Accumulation Period",             def: "The phase of an annuity in which premium deposits and interest compounds, prior to the payout phase beginning." },
  { term: "Annuitant",                       def: "The person whose life is measured to determine annuity payments. Often the same as the contract owner." },
  { term: "Beneficiary",                     def: "The person entitled to receive death benefit proceeds upon the death of the annuitant or contract owner." },
  { term: "Cap Rate",                        def: "The maximum percent of an index's gain credited to an indexed annuity in a given crediting period." },
  { term: "Fixed Annuity",                   def: "Annuity with a guaranteed interest rate, no market exposure, and predictable risk-free growth over a defined term." },
  { term: "Free Withdrawal",                 def: "A provision allowing the contract owner to withdraw a specified percentage of the account value each year without surrender charges." },
  { term: "Market Value Adjustment (MVA)",   def: "An adjustment applied to withdrawals taken during the surrender charge period, based on changes in interest rates." },
  { term: "Participation Rate",              def: "A percentage of the index gain that the policyholder receives in a fixed indexed annuity crediting strategy." },
  { term: "Required Minimum Distribution",   def: "Minimum amount IRA-qualified accounts must withdraw per year per IRS rules, beginning at age 73." },
  { term: "Surrender Charge",                def: "A fee applied to early withdrawals that declines over the surrender charge period until it reaches zero." },
  { term: "Tax Deferral",                    def: "The postponement of income taxes on annuity earnings until funds are withdrawn, allowing greater compounding over time." },
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
            <button key={l} onClick={() => { setLetter(letter === l ? "" : l); setQuery(""); }} style={{
              width: 30, height: 30, borderRadius: 6, border: "none",
              fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 12,
              cursor: hasTerms ? "pointer" : "default",
              background: letter === l ? "var(--ov-navy-900)" : hasTerms ? "var(--ov-surface-tint)" : "transparent",
              color: letter === l ? "#fff" : hasTerms ? "var(--ov-navy-900)" : "#CBD5E0",
              transition: "all .12s ease",
            }}>{l}</button>
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

// ── CASE STUDIES ─────────────────────────────────────────────────────────────

const CASE_STUDIES = [
  {
    tag: "Case Study",
    title: "Using MYGA for predictable retirement income",
    desc: "How a 68-year-old retiree replaced CD ladder income with a 5-year MYGA — locking in 5.20% guaranteed with zero market risk.",
    cta: "Read summary",
    ctaStyle: "outline",
  },
  {
    tag: "Guide",
    title: "FIA crediting strategies demystified",
    desc: "A plain-English breakdown of annual point-to-point, monthly average, and participation rate strategies for client conversations.",
    cta: "Download PDF guide",
    ctaStyle: "outline",
  },
  {
    tag: "Comparison",
    title: "CapLock vs. Harbourview FIA",
    desc: "Side-by-side analysis of Oceanview's two FIA products — when to recommend each based on client risk profile and time horizon.",
    cta: "View brief",
    ctaStyle: "outline",
  },
];

function CaseStudiesSection() {
  return (
    <div style={S.section}>
      <Eyebrow>Insights & Case Studies</Eyebrow>
      <h2 style={S.h2}>Real-world articles, market perspectives, and agent guides.</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginTop: 32 }}>
        {CASE_STUDIES.map(c => (
          <div key={c.title} style={{ background: "rgba(112,186,191,0.2)", borderRadius: 14, padding: "28px 24px 22px", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.2px", textTransform: "uppercase", color: "#2494C1" }}>{c.tag}</div>
            <h3 style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 18, color: "#0D1F4E", lineHeight: 1.25, margin: 0 }}>{c.title}</h3>
            <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 14, color: "#4A5568", lineHeight: 1.65, margin: 0, flex: 1 }}>{c.desc}</p>
            <TextLink color="var(--ov-teal-600)" style={{ fontSize: 13 }}>{c.cta}</TextLink>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── TAB NAV ───────────────────────────────────────────────────────────────────

const NAV_H = 51; // px — height of the sticky tab nav
const HEADER_H = 72; // px — site header height

const ctS = {
  ctNavOuter:  { background: '#fff', position: 'sticky', top: HEADER_H, zIndex: 50, boxShadow: '0 1px 0 #e8e5e5' },
  ctTabRow:    { display: 'flex', borderBottom: '1px solid #e8e5e5', overflowX: 'auto', WebkitOverflowScrolling: 'touch' },
  ctTab:       { flex: '1 0 0', minWidth: 140, height: 51, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px', borderTop: 'none', borderLeft: 'none', borderBottom: 'none', borderRight: '1px solid #e8e5e5', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#001F54', whiteSpace: 'nowrap', cursor: 'pointer', transition: 'background .15s', letterSpacing: '.01em' },
  ctTabActive:   { background: 'rgba(226,241,242,0.6)' },
  ctTabInactive: { background: 'transparent' },
};

function TabNav({ active, items }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    history.replaceState(null, '', `${window.location.pathname}#client-resources?tab=${id}`);
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_H - NAV_H;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div style={ctS.ctNavOuter}>
      <div className="ov-container">
        <div role="tablist" aria-label="Client Resources sections" style={ctS.ctTabRow}>
          {items.map((t, idx) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={isActive}
                aria-controls={`section-${t.id}`}
                className="ov-contact-tab"
                style={{ ...ctS.ctTab, ...(isActive ? ctS.ctTabActive : ctS.ctTabInactive) }}
                tabIndex={isActive ? 0 : -1}
                onClick={() => scrollTo(t.id)}
                onKeyDown={(e) => {
                  let next = null;
                  if (e.key === 'ArrowRight') next = (idx + 1) % items.length;
                  else if (e.key === 'ArrowLeft')  next = (idx - 1 + items.length) % items.length;
                  else if (e.key === 'Home')        next = 0;
                  else if (e.key === 'End')         next = items.length - 1;
                  else return;
                  e.preventDefault();
                  document.getElementById(`tab-${items[next].id}`)?.focus();
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(226,241,242,0.35)'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

const SECTION_BG = {
  downloads:    "var(--ov-surface-tint)",
  rates:        "var(--ov-surface-tint)",
  comparisons:  "#fff",
  glossary:     "var(--ov-surface-tint)",
  'case-studies': "#fff",
};

export default function ClientResourcesPage({ tab }) {
  const initialTab = NAV_ITEMS.find(n => n.id === tab) ? tab : 'downloads';
  const [activeSection, setActiveSection] = useState(initialTab);

  useEffect(() => {
    const observers = NAV_ITEMS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: `-${HEADER_H + NAV_H + 1}px 0px -55% 0px`, threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  useEffect(() => {
    if (!tab) return;
    const el = document.getElementById(tab);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_H - NAV_H;
      requestAnimationFrame(() => {
        window.scrollTo({ top, behavior: 'instant' });
      });
    }
  }, [tab]);

  return (
    <main>
      <PageHero
        image="assets/AdobeStock_1231908414@0.3x.jpg"
        eyebrow="Client Resources"
        title="Everything you need"
        titleAccent="to serve clients well."
        subtitle="Downloads, current rates, glossary, and product comparisons — all in one place. Designed to help you serve clients faster."
      />

      <TabNav active={activeSection} items={NAV_ITEMS} />

      {NAV_ITEMS.map(({ id }) => (
        <div key={id} id={id} style={{ background: SECTION_BG[id] }}>
          <div className="ov-container">
            {id === 'downloads'    && <DownloadsTab />}
            {id === 'rates'        && <RatesTab />}
            {id === 'comparisons'  && <ComparisonsTab />}
            {id === 'glossary'     && <GlossaryTab />}
            {id === 'case-studies' && <CaseStudiesSection />}
          </div>
        </div>
      ))}

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
