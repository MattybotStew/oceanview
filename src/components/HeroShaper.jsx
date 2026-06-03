export default function HeroShaper() {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '93%',
      lineHeight: 0,
      zIndex: 10,
      pointerEvents: 'none',
    }}>
      <svg viewBox="0 0 400 60" preserveAspectRatio="none" width="100%" height="60" style={{ display: 'block' }}>
        <path fill="#ffffff" d="M0 60 Q200 0 400 60 Z" />
      </svg>
    </div>
  )
}
