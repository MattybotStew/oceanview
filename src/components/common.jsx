// ── Shared component primitives used across multiple pages ──────────────────

export function Eyebrow({ light, children, style }) {
  const lineColor    = light ? 'rgba(112,186,191,.6)' : '#2494C1'
  const textColor    = light ? '#70BABF' : '#2494C1'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, ...style }}>
      <div style={{ width: 18, height: 1, background: lineColor, flexShrink: 0 }} />
      <span style={{
        fontFamily: 'var(--ov-ff-sans)',
        fontWeight: 600,
        fontSize: 10,
        letterSpacing: '1.4px',
        textTransform: 'uppercase',
        color: textColor,
      }}>
        {children}
      </span>
    </div>
  )
}
