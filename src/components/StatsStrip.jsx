// StatsStrip.jsx — Credibility stats bar between Highlights and Products
const STATS = [
  { value: "1987",        label: "Year Founded",     detail: "Committed to retirement security"    },
  { value: "A Excellent", label: "A.M. Best Rating", detail: "Exceptional financial strength"      },
  { value: "50 States",   label: "Licensed",         detail: "Serving advisors nationwide"         },
  { value: "0% Floor",    label: "On FIA Strategies", detail: "Principal protection guaranteed"    },
];

export default function StatsStrip() {
  return (
    <section style={{ background: "var(--ov-navy-1000)" }}>
      <div className="ov-container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
        }} className="ov-stats-grid">
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              padding: "52px 40px",
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,.08)" : "none",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}>
              <div style={{
                fontFamily: "var(--ov-ff-display)",
                fontWeight: 800,
                fontSize: "clamp(22px, 2.4vw, 34px)",
                lineHeight: 1,
                color: "#70BABF",
                letterSpacing: "-0.02em",
              }}>
                {s.value}
              </div>
              <div style={{
                fontFamily: "var(--ov-ff-sans)",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                color: "#F2FCFF",
                marginTop: 4,
              }}>
                {s.label}
              </div>
              <div style={{
                fontFamily: "var(--ov-ff-sans)",
                fontSize: 13,
                color: "rgba(242,252,255,.5)",
                lineHeight: 1.5,
              }}>
                {s.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
