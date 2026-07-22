// ProductAccordionNav.jsx — Inline accordion sticky nav for Products catalog
// Locked pattern (Mae review): parents always visible + count badges;
// products inline under open parent; scroll-spy; auto-collapse past catalog band.
import { useState, useEffect, useRef, useCallback } from 'react'

const NS = {
  outer: {
    background: '#fff',
    position: 'sticky',
    zIndex: 50,
    boxShadow: '0 1px 0 #e8e5e5',
  },
  parentRow: {
    display: 'flex',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none',
    borderBottom: '1px solid #e8e5e5',
  },
  parentBtn: {
    flex: '1 0 0',
    minWidth: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '14px 12px',
    border: 0,
    background: 'none',
    cursor: 'pointer',
    fontFamily: 'var(--ov-ff-sans)',
    color: 'var(--ov-navy-900)',
  },
  chevron: {
    fontSize: 10,
    lineHeight: 1,
    color: 'var(--ov-teal-600)',
    flexShrink: 0,
  },
  parentLabel: {
    fontFamily: 'var(--ov-ff-display)',
    fontWeight: 800,
    fontSize: 'clamp(11px, 1vw, 13px)',
    letterSpacing: '.04em',
    textTransform: 'uppercase',
    lineHeight: 1.2,
    textAlign: 'center',
  },
  badge: {
    fontFamily: 'var(--ov-ff-sans)',
    fontWeight: 600,
    fontSize: 11,
    color: 'var(--ov-grey-600)',
    flexShrink: 0,
  },
  productRow: {
    display: 'flex',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none',
    borderBottom: '1px solid #e8e5e5',
  },
  productBtn: {
    flex: '0 0 auto',
    minWidth: 100,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    border: 0,
    borderRight: '1px solid #e8e5e5',
    borderBottom: '3px solid transparent',
    background: 'transparent',
    fontFamily: 'var(--ov-ff-sans)',
    fontWeight: 600,
    fontSize: 13,
    color: '#001F54',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background .15s, border-color .15s',
  },
  productActive: {
    background: 'rgba(226,241,242,0.6)',
    borderBottomColor: '#2494C1',
  },
}

/**
 * @param {object} props
 * @param {{ id: string, label: string, short?: string, introId: string }[]} props.categories
 * @param {{ id: string, label: string, cat: string, short?: string }[]} props.products
 * @param {string} [props.catalogEndId] — element after last product; past this → auto-collapse
 * @param {React.RefObject<HTMLElement|null>} [props.scrollRootRef] — scroll container (demo frame); default window
 * @param {string|number} [props.stickyTop]
 * @param {boolean} [props.compact] — shorter parent labels (mobile frame)
 * @param {string} [props.idPrefix] — prefix for DOM ids when demoing multiple instances
 */
export default function ProductAccordionNav({
  categories,
  products,
  catalogEndId,
  scrollRootRef,
  stickyTop = 'var(--ov-header-h, 72px)',
  compact = false,
  idPrefix = '',
}) {
  const [openCat, setOpenCat] = useState(categories[0]?.id ?? null)
  const [activeProduct, setActiveProduct] = useState(products[0]?.id ?? null)
  const [pastCatalog, setPastCatalog] = useState(false)
  const userCollapsedRef = useRef(false)
  const navRef = useRef(null)

  const resolveId = useCallback((id) => (idPrefix ? `${idPrefix}${id}` : id), [idPrefix])

  const getScrollRoot = useCallback(() => {
    return scrollRootRef?.current ?? null
  }, [scrollRootRef])

  const scrollToId = useCallback((id) => {
    const el = document.getElementById(resolveId(id))
    if (!el) return
    const root = getScrollRoot()
    if (root) {
      const top = el.offsetTop - 8
      root.scrollTo({ top, behavior: 'smooth' })
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [getScrollRoot, resolveId])

  const productsFor = (catId) => products.filter(p => p.cat === catId)

  // Scroll-spy: active product + open parent (unless user manually collapsed)
  useEffect(() => {
    const ids = products.map(p => resolveId(p.id))
    const observers = []

    ids.forEach((domId, i) => {
      const el = document.getElementById(domId)
      if (!el) return
      const root = getScrollRoot()
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return
          const product = products[i]
          setActiveProduct(product.id)
          setPastCatalog(false)
          if (!userCollapsedRef.current) {
            setOpenCat(product.cat)
          }
        },
        {
          root: root || null,
          rootMargin: '-30% 0px -55% 0px',
          threshold: 0,
        }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [products, getScrollRoot, resolveId])

  // Auto-collapse past catalog band (CTA / compliance)
  useEffect(() => {
    if (!catalogEndId) return
    const el = document.getElementById(resolveId(catalogEndId))
    if (!el) return
    const root = getScrollRoot()

    const check = () => {
      const rootEl = root
      const rootTop = rootEl ? rootEl.getBoundingClientRect().top : 0
      const rootHeight = rootEl ? rootEl.clientHeight : window.innerHeight
      const rect = el.getBoundingClientRect()
      // Past catalog when CTA top has moved into the upper half of the scrollport
      const past = rect.top < rootTop + rootHeight * 0.45
      setPastCatalog(past)
      if (past) {
        setOpenCat(null)
        userCollapsedRef.current = false
      }
    }

    const target = root || window
    target.addEventListener('scroll', check, { passive: true })
    check()
    return () => target.removeEventListener('scroll', check)
  }, [catalogEndId, getScrollRoot, resolveId])

  const handleParentClick = (catId) => {
    if (openCat === catId) {
      // Toggle collapse — scroll-spy must not immediately re-open
      setOpenCat(null)
      userCollapsedRef.current = true
      return
    }
    userCollapsedRef.current = false
    setOpenCat(catId)
    const cat = categories.find(c => c.id === catId)
    if (cat?.introId) scrollToId(cat.introId)
  }

  const handleProductClick = (product) => {
    userCollapsedRef.current = false
    setActiveProduct(product.id)
    setOpenCat(product.cat)
    setPastCatalog(false)
    scrollToId(product.id)
  }

  const expanded = openCat && !pastCatalog
  const openProducts = expanded ? productsFor(openCat) : []

  return (
    <nav
      ref={navRef}
      style={{ ...NS.outer, top: stickyTop }}
      aria-label="Product categories"
    >
      <div className="ov-container" style={{ paddingLeft: compact ? 12 : undefined, paddingRight: compact ? 12 : undefined }}>
        <div style={NS.parentRow} role="tablist" aria-label="Product families">
          {categories.map(cat => {
            const count = productsFor(cat.id).length
            const isOpen = openCat === cat.id && expanded
            const label = compact && cat.short ? cat.short : cat.label
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isOpen}
                aria-expanded={isOpen}
                aria-controls={isOpen ? `${idPrefix}prd-panel-${cat.id}` : undefined}
                id={`${idPrefix}prd-tab-${cat.id}`}
                onClick={() => handleParentClick(cat.id)}
                style={{
                  ...NS.parentBtn,
                  borderBottom: isOpen ? '3px solid #2494C1' : '3px solid transparent',
                  background: isOpen ? 'rgba(226,241,242,0.35)' : 'transparent',
                  padding: compact ? '12px 8px' : NS.parentBtn.padding,
                }}
              >
                <span style={NS.chevron} aria-hidden="true">{isOpen ? '▼' : '▸'}</span>
                <span style={{ ...NS.parentLabel, fontSize: compact ? 11 : NS.parentLabel.fontSize }}>
                  {label}
                </span>
                <span style={NS.badge}>({count})</span>
              </button>
            )
          })}
        </div>

        {expanded && openProducts.length > 0 && (
          <div
            id={`${idPrefix}prd-panel-${openCat}`}
            role="tabpanel"
            aria-labelledby={`${idPrefix}prd-tab-${openCat}`}
            style={NS.productRow}
          >
            {openProducts.map(p => {
              const isActive = p.id === activeProduct
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleProductClick(p)}
                  aria-current={isActive ? 'true' : undefined}
                  style={{
                    ...NS.productBtn,
                    ...(isActive ? NS.productActive : {}),
                    fontSize: compact ? 12 : 13,
                    padding: compact ? '0 14px' : NS.productBtn.padding,
                    minWidth: compact ? 88 : 100,
                  }}
                >
                  {p.short || p.label}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
