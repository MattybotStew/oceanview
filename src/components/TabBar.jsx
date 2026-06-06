export default function TabBar({ tabs, active, onChange, style }) {
  return (
    <div style={{
      display: "flex", gap: 6,
      borderBottom: "1px solid rgba(13,31,78,.10)",
      width: "100%",
      overflowX: "auto",
      scrollbarWidth: "none",
      ...style,
    }}>
      {tabs.map(tab => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            style={{
              padding: "12px 20px",
              border: 0,
              background: "none",
              fontFamily: "var(--ov-ff-sans)",
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: isActive ? "var(--ov-navy-900)" : "var(--ov-grey-600)",
              cursor: "pointer",
              borderBottom: `2px solid ${isActive ? "var(--ov-teal-600)" : "transparent"}`,
              marginBottom: -1,
              transition: "color .15s ease",
              whiteSpace: "nowrap",
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
