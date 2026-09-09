// StatsStrip.jsx — Credibility stats bar between Highlights and Products
const STATS = [
  { value: "1987",        label: "Year Founded",     detail: "Committed to retirement security"    },
  { value: "A Excellent", label: "A.M. Best Rating", detail: "Exceptional financial strength"      },
  { value: "50 States",   label: "Licensed",         detail: "Serving advisors nationwide"         },
  { value: "0% Floor",    label: "On FIA Strategies", detail: "Principal protection guaranteed"    },
];

const THEMES = {
  default: {
    sectionBg: "var(--ov-navy-1000)",
    gridClass: "ov-stats-grid",
    valueColor: "#70BABF",
    labelColor: "#F2FCFF",
    detailColor: "rgba(242,252,255,.5)",
    dividerColor: "rgba(255,255,255,.08)",
  },
  light: {
    sectionBg: "#fff",
    gridClass: "ov-stats-grid ov-stats-grid--light",
    valueColor: "var(--ov-teal-600)",
    labelColor: "var(--ov-navy-900)",
    detailColor: "var(--ov-grey-600)",
    dividerColor: "var(--ov-border-faint)",
  },
};

export default function StatsStrip({ variant = "default" }) {
  const t = THEMES[variant] ?? THEMES.default;

  return (
    <section style={{ background: t.sectionBg }}>
      <div className="ov-container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
        }} className={t.gridClass}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              padding: "52px 40px",
              borderLeft: i > 0 ? `1px solid ${t.dividerColor}` : "none",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}>
              <div style={{
                fontFamily: "var(--ov-ff-display)",
                fontWeight: 800,
                fontSize: "clamp(22px, 2.4vw, 34px)",
                lineHeight: 1,
                color: t.valueColor,
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
                color: t.labelColor,
                marginTop: 4,
              }}>
                {s.label}
              </div>
              <div style={{
                fontFamily: "var(--ov-ff-sans)",
                fontSize: 13,
                color: t.detailColor,
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
