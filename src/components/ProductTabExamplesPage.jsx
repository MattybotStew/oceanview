// ProductTabExamplesPage.jsx — Unlisted: 5 product-first sticky tab ideas
// Route: #product-tab-examples
// Nav chrome only — catalog body identical under each option. Full titles.
import { useState, useEffect, useRef } from 'react'

const CATEGORIES = [
  { id: 'fixed-annuities', label: 'Fixed Annuities', introId: 'cat-fixed-annuities' },
  { id: 'fixed-with-flex', label: 'Fixed Annuities with Flexibility', introId: 'cat-fixed-with-flex' },
  { id: 'fixed-indexed', label: 'Fixed Indexed Annuities', introId: 'cat-fixed-indexed' },
]

const PRODUCTS = [
  { id: 'harbourview-myga', label: 'Harbourview MYGA', cat: 'fixed-annuities' },
  { id: 'horizon-myga', label: 'Horizon MYGA', cat: 'fixed-annuities' },
  { id: 'sky-harbourview-myga', label: 'Sky Harbourview MYGA', cat: 'fixed-annuities' },
  { id: 'current-rate', label: 'Current Rate Fixed Annuity', cat: 'fixed-with-flex' },
  { id: 'harbourview-fia', label: 'Harbourview FIA', cat: 'fixed-with-flex' },
  { id: 'caplock', label: 'CapLock', cat: 'fixed-indexed' },
  { id: 'topsider', label: 'Topsider', cat: 'fixed-indexed' },
]

const OPTIONS = [
  { id: 'opt-1', title: 'Grouped strip' },
  { id: 'opt-2', title: 'Product row + parent eyebrow' },
  { id: 'opt-3', title: 'Labeled product groups' },
  { id: 'opt-4', title: 'Category prefix on products' },
  { id: 'opt-5', title: 'Products + parent filter' },
]

const N = {
  sticky: {
    position: 'sticky',
    top: 0,
    zIndex: 5,
    background: '#fff',
    boxShadow: '0 1px 0 #e8e5e5',
  },
  row: {
    display: 'flex',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none',
  },
  prd: {
    flex: '0 0 auto',
    height: 48,
    padding: '0 18px',
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
  },
  prdOn: {
    background: 'rgba(226,241,242,0.6)',
    borderBottomColor: '#2494C1',
  },
  divider: {
    flex: '0 0 auto',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px 0 14px',
    fontFamily: 'var(--ov-ff-display)',
    fontWeight: 800,
    fontSize: 10,
    letterSpacing: '.06em',
    textTransform: 'uppercase',
    color: '#2494C1',
    whiteSpace: 'nowrap',
    borderRight: '1px solid #e8e5e5',
    background: 'rgba(226,241,242,0.25)',
  },
  eyebrow: {
    padding: '8px 16px 0',
    fontFamily: 'var(--ov-ff-sans)',
    fontWeight: 600,
    fontSize: 10,
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    color: '#2494C1',
  },
  chip: {
    flex: '0 0 auto',
    padding: '8px 14px',
    margin: '8px 4px',
    borderRadius: 999,
    border: '1px solid rgba(13,31,78,0.12)',
    background: '#fff',
    fontFamily: 'var(--ov-ff-sans)',
    fontWeight: 600,
    fontSize: 12,
    color: 'var(--ov-navy-900)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  chipOn: {
    borderColor: '#2494C1',
    background: 'rgba(36,148,193,0.12)',
  },
  groupHead: {
    width: '100%',
    textAlign: 'left',
    border: 0,
    borderBottom: '1px solid #e8e5e5',
    background: 'rgba(226,241,242,0.25)',
    padding: '10px 16px',
    fontFamily: 'var(--ov-ff-display)',
    fontWeight: 800,
    fontSize: 11,
    letterSpacing: '.04em',
    textTransform: 'uppercase',
    color: '#233D7C',
    cursor: 'pointer',
  },
}

const S = {
  page: {
    minHeight: '100vh',
    background: 'var(--ov-surface-cream, #F0EEE9)',
    padding: '40px 24px 80px',
  },
  inner: { maxWidth: 1100, margin: '0 auto' },
  title: {
    fontFamily: 'var(--ov-ff-display)',
    fontWeight: 400,
    fontSize: 'clamp(28px, 3.5vw, 40px)',
    color: 'var(--ov-navy-900)',
    margin: '0 0 28px',
    letterSpacing: '-0.02em',
  },
  jump: { display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 },
  jumpBtn: {
    fontFamily: 'var(--ov-ff-sans)',
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: 'var(--ov-navy-900)',
    background: '#fff',
    border: '1px solid rgba(13,31,78,0.12)',
    borderRadius: 999,
    padding: '8px 14px',
    textDecoration: 'none',
  },
  section: { marginBottom: 56, scrollMarginTop: 96 },
  optTitle: {
    fontFamily: 'var(--ov-ff-display)',
    fontWeight: 400,
    fontSize: 22,
    color: 'var(--ov-navy-900)',
    margin: '0 0 14px',
    letterSpacing: '-0.02em',
  },
  frame: {
    background: '#fff',
    border: '1px solid rgba(13,31,78,0.10)',
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0 4px 24px rgba(13,31,78,0.06)',
  },
  frameBody: {
    height: 440,
    overflow: 'auto',
    position: 'relative',
    WebkitOverflowScrolling: 'touch',
  },
  hero: {
    padding: '24px 20px',
    background: 'linear-gradient(135deg, #0D1F4E 0%, #1A3070 100%)',
    color: '#F2FCFF',
    fontFamily: 'var(--ov-ff-display)',
    fontSize: 20,
    letterSpacing: '-0.02em',
  },
  catBlock: { padding: '24px 16px 8px', scrollMarginTop: 100 },
  catLabel: {
    fontFamily: 'var(--ov-ff-sans)',
    fontWeight: 600,
    fontSize: 10,
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    color: '#2494C1',
    marginBottom: 6,
  },
  card: {
    margin: '0 16px 12px',
    padding: '16px 18px',
    borderRadius: 12,
    border: '1px solid rgba(13,31,78,0.08)',
    background: 'rgba(112,186,191,0.12)',
    scrollMarginTop: 100,
    fontFamily: 'var(--ov-ff-display)',
    fontSize: 16,
    color: 'var(--ov-navy-900)',
  },
}

function scrollTo(root, id) {
  const el = root?.querySelector(`#${CSS.escape(id)}`)
  if (root && el) root.scrollTo({ top: el.offsetTop - 4, behavior: 'smooth' })
}

function useProductSpy(rootRef, prefix, onActive) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const observers = PRODUCTS.map(p => {
      const el = root.querySelector(`#${CSS.escape(prefix + p.id)}`)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) onActive(p) },
        { root, rootMargin: '-30% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [rootRef, prefix, onActive])
}

function CatalogBody({ prefix }) {
  return (
    <>
      <div style={S.hero}>Our Products</div>
      {CATEGORIES.map(cat => (
        <div key={cat.id} style={{ background: cat.id === 'fixed-with-flex' ? 'var(--ov-navy-1000)' : cat.id === 'fixed-indexed' ? 'var(--ov-surface-tint)' : '#fff' }}>
          <div id={`${prefix}${cat.introId}`} style={S.catBlock}>
            <div style={{ ...S.catLabel, color: cat.id === 'fixed-with-flex' ? '#70BABF' : '#2494C1' }}>{cat.label}</div>
          </div>
          {PRODUCTS.filter(p => p.cat === cat.id).map(p => (
            <div
              key={p.id}
              id={`${prefix}${p.id}`}
              style={{
                ...S.card,
                ...(cat.id === 'fixed-with-flex'
                  ? { background: 'rgba(255,255,255,.06)', borderColor: 'rgba(255,255,255,.12)', color: '#F2FCFF' }
                  : {}),
              }}
            >
              {p.label}
            </div>
          ))}
        </div>
      ))}
      <div style={{ height: 120, background: 'var(--ov-navy-1000)' }} />
    </>
  )
}

function DemoShell({ children, bodyRef }) {
  return (
    <div style={S.frame}>
      <div ref={bodyRef} style={S.frameBody}>{children}</div>
    </div>
  )
}

// 1 — Grouped strip: parent dividers + all product tabs
function Nav1({ prefix, rootRef }) {
  const [active, setActive] = useState(PRODUCTS[0].id)
  useProductSpy(rootRef, prefix, p => setActive(p.id))

  return (
    <nav style={N.sticky} aria-label="Products">
      <div style={N.row}>
        {CATEGORIES.map(cat => (
          <div key={cat.id} style={{ display: 'contents' }}>
            <button
              type="button"
              style={{ ...N.divider, cursor: 'pointer', border: 0 }}
              onClick={() => scrollTo(rootRef.current, prefix + cat.introId)}
            >
              {cat.label}
            </button>
            {PRODUCTS.filter(p => p.cat === cat.id).map(p => (
              <button
                key={p.id}
                type="button"
                style={{ ...N.prd, ...(active === p.id ? N.prdOn : {}) }}
                onClick={() => { setActive(p.id); scrollTo(rootRef.current, prefix + p.id) }}
              >
                {p.label}
              </button>
            ))}
          </div>
        ))}
      </div>
    </nav>
  )
}

// 2 — All products + parent eyebrow from scroll-spy
function Nav2({ prefix, rootRef }) {
  const [active, setActive] = useState(PRODUCTS[0])
  useProductSpy(rootRef, prefix, setActive)
  const cat = CATEGORIES.find(c => c.id === active.cat)

  return (
    <nav style={N.sticky} aria-label="Products">
      <div style={N.eyebrow}>{cat?.label}</div>
      <div style={N.row}>
        {PRODUCTS.map(p => (
          <button
            key={p.id}
            type="button"
            style={{ ...N.prd, ...(active.id === p.id ? N.prdOn : {}) }}
            onClick={() => { setActive(p); scrollTo(rootRef.current, prefix + p.id) }}
          >
            {p.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

// 3 — One open product group at a time, full parent label as header
function Nav3({ prefix, rootRef }) {
  const [open, setOpen] = useState(CATEGORIES[0].id)
  const [active, setActive] = useState(PRODUCTS[0].id)
  useProductSpy(rootRef, prefix, p => {
    setActive(p.id)
    setOpen(p.cat)
  })

  return (
    <nav style={N.sticky} aria-label="Products">
      {CATEGORIES.map(cat => {
        const isOpen = open === cat.id
        return (
          <div key={cat.id}>
            <button
              type="button"
              style={{
                ...N.groupHead,
                borderBottomColor: isOpen ? '#2494C1' : '#e8e5e5',
                background: isOpen ? 'rgba(226,241,242,0.5)' : N.groupHead.background,
              }}
              aria-expanded={isOpen}
              onClick={() => {
                setOpen(cat.id)
                scrollTo(rootRef.current, prefix + cat.introId)
              }}
            >
              {isOpen ? '▼ ' : '▸ '}{cat.label}
            </button>
            {isOpen && (
              <div style={N.row}>
                {PRODUCTS.filter(p => p.cat === cat.id).map(p => (
                  <button
                    key={p.id}
                    type="button"
                    style={{ ...N.prd, ...(active === p.id ? N.prdOn : {}) }}
                    onClick={() => { setActive(p.id); scrollTo(rootRef.current, prefix + p.id) }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}

// 4 — Flat product row with full category prefix
function Nav4({ prefix, rootRef }) {
  const [active, setActive] = useState(PRODUCTS[0].id)
  useProductSpy(rootRef, prefix, p => setActive(p.id))
  const catLabel = id => CATEGORIES.find(c => c.id === id)?.label ?? ''

  return (
    <nav style={N.sticky} aria-label="Products">
      <div style={N.row}>
        {PRODUCTS.map(p => (
          <button
            key={p.id}
            type="button"
            style={{ ...N.prd, ...(active === p.id ? N.prdOn : {}) }}
            onClick={() => { setActive(p.id); scrollTo(rootRef.current, prefix + p.id) }}
          >
            {catLabel(p.cat)} / {p.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

// 5 — Parent filter chips + product tabs (full titles)
function Nav5({ prefix, rootRef }) {
  const [filter, setFilter] = useState('fixed-annuities')
  const [active, setActive] = useState(PRODUCTS[0].id)
  useProductSpy(rootRef, prefix, p => {
    setActive(p.id)
    setFilter(p.cat)
  })
  const list = PRODUCTS.filter(p => p.cat === filter)

  return (
    <nav style={N.sticky} aria-label="Products">
      <div style={{ ...N.row, padding: '0 8px', borderBottom: '1px solid #e8e5e5' }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            type="button"
            style={{ ...N.chip, ...(filter === cat.id ? N.chipOn : {}) }}
            onClick={() => {
              setFilter(cat.id)
              scrollTo(rootRef.current, prefix + cat.introId)
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div style={N.row}>
        {list.map(p => (
          <button
            key={p.id}
            type="button"
            style={{ ...N.prd, ...(active === p.id ? N.prdOn : {}) }}
            onClick={() => { setActive(p.id); scrollTo(rootRef.current, prefix + p.id) }}
          >
            {p.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

const NAVS = [Nav1, Nav2, Nav3, Nav4, Nav5]

function OptionDemo({ index, optId }) {
  const rootRef = useRef(null)
  const prefix = `o${index}-`
  const Nav = NAVS[index]

  return (
    <DemoShell bodyRef={rootRef}>
      <Nav prefix={prefix} rootRef={rootRef} />
      <CatalogBody prefix={prefix} />
    </DemoShell>
  )
}

export default function ProductTabExamplesPage() {
  return (
    <main style={S.page}>
      <div style={S.inner}>
        <h1 style={S.title}>Product tabs</h1>
        <nav style={S.jump} aria-label="Options">
          {OPTIONS.map((o, i) => (
            <a key={o.id} href={`#${o.id}`} style={S.jumpBtn}>{i + 1}. {o.title}</a>
          ))}
        </nav>
        {OPTIONS.map((o, i) => (
          <section key={o.id} id={o.id} style={S.section}>
            <h2 style={S.optTitle}>{i + 1}. {o.title}</h2>
            <OptionDemo index={i} optId={o.id} />
          </section>
        ))}
      </div>
    </main>
  )
}
