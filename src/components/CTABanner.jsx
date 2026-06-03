// CTABanner — horizontal dark-navy banner CTA (Figma: 2026-Oceanview-Design / node 7394-10428)
// Usage: <CTABanner eyebrow="Product Name" title="Heading line one" titleAccent="italic accent" body="…" cta="Button" onClick={fn} />

const S = {
  wrap: {
    background: '#001F54',
    borderRadius: 16,
    padding: 'clamp(36px,4vw,56px) clamp(32px,5vw,80px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 48,
    flexWrap: 'wrap',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    flex: '1 1 320px',
    minWidth: 0,
  },
  eyebrowRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
  },
  eyebrowLine: {
    width: 18,
    height: 1,
    background: 'rgba(112,186,191,.5)',
    flexShrink: 0,
  },
  eyebrow: {
    fontFamily: 'var(--ov-ff-sans)',
    fontWeight: 600,
    fontSize: 10,
    letterSpacing: '1.4px',
    textTransform: 'uppercase',
    color: '#70BABF',
  },
  heading: {
    fontFamily: 'var(--ov-ff-display)',
    fontWeight: 800,
    fontSize: 'clamp(28px,3.2vw,42px)',
    letterSpacing: '-0.5px',
    lineHeight: 1.1,
    color: '#F2FCFF',
    margin: 0,
  },
  accent: {
    fontStyle: 'italic',
    color: '#70BABF',
  },
  body: {
    fontFamily: 'var(--ov-ff-sans)',
    fontSize: 15,
    lineHeight: 1.6,
    color: 'rgba(242,252,255,0.62)',
    margin: 0,
    maxWidth: '48ch',
    marginTop: 4,
  },
  btn: {
    flexShrink: 0,
    background: '#70BABF',
    color: '#001F54',
    border: 0,
    borderRadius: 200,
    padding: '18px 44px',
    fontFamily: 'var(--ov-ff-sans)',
    fontWeight: 800,
    fontSize: 14.2,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'transform .18s ease, box-shadow .18s ease, opacity .15s ease',
    letterSpacing: '.005em',
  },
}

export default function CTABanner({ eyebrow, title, titleAccent, body, cta = 'Get Started', onClick }) {
  return (
    <div style={S.wrap}>
      <div style={S.left}>
        {eyebrow && (
          <div style={S.eyebrowRow}>
            <div style={S.eyebrowLine} />
            <span style={S.eyebrow}>{eyebrow}</span>
          </div>
        )}
        <h2 style={S.heading}>
          {title}
          {titleAccent && <> <em style={S.accent}>{titleAccent}</em></>}
        </h2>
        {body && <p style={S.body}>{body}</p>}
      </div>
      <button
        style={S.btn}
        onClick={onClick}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(112,186,191,.35)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = ''
          e.currentTarget.style.boxShadow = ''
        }}
      >
        {cta}
      </button>
    </div>
  )
}
