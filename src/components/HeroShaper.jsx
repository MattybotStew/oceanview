// HeroShaper — white wave cutout pinned to the bottom of .ov-hero-card
// Renders inline SVG so `color: #fff` drives the currentColor fill.
// Use inside any .ov-hero-card div. Not used on the homepage hero.
export default function HeroShaper() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2860 49"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 'clamp(28px, 3.5vw, 52px)',
        display: 'block',
        color: '#fff',
        zIndex: 10,
        pointerEvents: 'none',
      }}
    >
      <path
        d="M 1653.49 45.783 C 1588.86 47.02 1506.21 45.585 1437.58 43.16 C 1370.09 40.734 1234.82 31.529 1150.18 25.49 C 933.411 9.553 767.833 3.465 599.396 0.892 C 531.907 -0.148 460.128 -0.841 303.702 2.129 C 147.275 5.099 0 14.8 0 14.8 L 0 49 L 2860 49 L 2860 34.003 C 2860 34.003 2654.1 17.868 2407.02 18.908 C 2294.92 19.254 2141.64 22.224 2023.82 29.994 C 1963.19 34.003 1874.54 39.002 1795.9 41.972 C 1718.12 45.09 1682.94 45.288 1653.49 45.783 Z"
        fill="currentColor"
      />
    </svg>
  )
}
