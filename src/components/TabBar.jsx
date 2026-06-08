import { useRef, useCallback } from 'react'

export default function TabBar({ tabs, active, onChange, style, ariaLabel = 'Content tabs' }) {
  const tabRefs = useRef([])

  const focusTab = useCallback((index) => {
    tabRefs.current[index]?.focus()
  }, [])

  const handleKeyDown = (e, index) => {
    let next = null
    const len = tabs.length

    switch (e.key) {
      case 'ArrowRight':
        next = (index + 1) % len
        break
      case 'ArrowLeft':
        next = (index - 1 + len) % len
        break
      case 'Home':
        next = 0
        break
      case 'End':
        next = len - 1
        break
      default:
        return
    }

    e.preventDefault()
    focusTab(next)
    // Optionally activate on arrow navigation
    // onChange(tabs[next])
  }

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      aria-orientation="horizontal"
      style={{
        display: "flex", gap: 6,
        borderBottom: "1px solid rgba(13,31,78,.10)",
        width: "100%",
        overflowX: "auto",
        scrollbarWidth: "none",
        ...style,
      }}
    >
      {tabs.map((tab, i) => {
        const isActive = tab === active
        return (
          <button
            key={tab}
            ref={el => { tabRefs.current[i] = el }}
            id={`tab-${i}`}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab)}
            onKeyDown={(e) => handleKeyDown(e, i)}
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
        )
      })}
    </div>
  )
}
