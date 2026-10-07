import { useEffect, useMemo, useRef, useState } from 'react'
import { Search, Download, ChevronDown, X, FileText } from 'lucide-react'
import { APPLICATION_PRODUCTS } from '../data/documents.js'

const TOTAL_PACKAGES = APPLICATION_PRODUCTS.reduce(
  (sum, p) => sum + p.channels.reduce((s, c) => s + c.states.length, 0),
  0
)

const CHANNELS = [
  { id: 'all', label: 'All channels' },
  { id: 'imo', label: 'IMO' },
  { id: 'fi', label: 'Financial Institution' },
]

function ColoradoModal({ onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    ref.current?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])
  return (
    <div
      className="ov-modal-scrim"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="co-modal-title"
        tabIndex={-1}
        className="ov-modal-card"
      >
        <button type="button" className="ov-modal-close" aria-label="Close" onClick={onClose}>
          <X size={18} strokeWidth={2} />
        </button>
        <div className="ov-modal-icon">
          <FileText size={20} strokeWidth={1.75} color="#2494C1" />
        </div>
        <h3 id="co-modal-title" style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 22, color: '#0D1F4E', letterSpacing: '-0.01em', margin: '0 0 10px' }}>
          Colorado application packages
        </h3>
        <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, lineHeight: 1.65, color: '#4A5568', margin: '0 0 20px' }}>
          We do not accept non-qualified funds in the state of Colorado. To continue with your download, please contact your Oceanview representative or wholesaler for the correct application package.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button type="button" className="ov-btn ov-btn--mint ov-btn--sm" onClick={onClose}>I Acknowledge</button>
          <button type="button" className="ov-btn ov-btn--ghost ov-btn--sm" onClick={onClose}>No Thanks</button>
        </div>
      </div>
    </div>
  )
}

function StateTile({ state, onAcknowledge }) {
  const inner = (
    <>
      <span className="ov-state-tile__code">{state.code}</span>
      <span className="ov-state-tile__name">{state.name}</span>
      <Download size={14} strokeWidth={2} className="ov-state-tile__icon" />
    </>
  )
  if (state.acknowledge) {
    return (
      <button type="button" className="ov-state-tile ov-state-tile--ack" title={state.name} onClick={() => onAcknowledge(state)}>
        {inner}
      </button>
    )
  }
  return (
    <a className="ov-state-tile" href={state.url} title={state.name} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  )
}

export default function ApplicationsExplorer({ initialProduct = 'all', initialChannel = 'all' }) {
  const [query, setQuery] = useState('')
  const [product, setProduct] = useState(initialProduct)
  const [channel, setChannel] = useState(initialChannel)
  const [collapsed, setCollapsed] = useState(() => new Set())
  const [coState, setCoState] = useState(null)

  useEffect(() => { setCollapsed(new Set()) }, [query, product, channel])

  const productOptions = useMemo(
    () => [{ id: 'all', label: 'All products' }, ...APPLICATION_PRODUCTS.map(p => ({ id: p.id, label: p.name }))],
    []
  )

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase()
    const out = []
    for (const p of APPLICATION_PRODUCTS) {
      if (product !== 'all' && p.id !== product) continue
      for (const ch of p.channels) {
        if (channel !== 'all' && ch.id !== channel) continue
        const states = ch.states.filter(s => {
          if (!q) return true
          return (
            s.name.toLowerCase().includes(q) ||
            s.code.toLowerCase().includes(q) ||
            p.name.toLowerCase().includes(q)
          )
        })
        if (!states.length) continue
        out.push({ key: `${p.id}:${ch.id}`, product: p, channel: ch, states })
      }
    }
    return out
  }, [query, product, channel])

  const shown = groups.reduce((sum, g) => sum + g.states.length, 0)

  const toggle = key => {
    setCollapsed(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1' }}>Applications</span>
        <h2 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(24px,3vw,36px)', color: '#0D1F4E', letterSpacing: '-0.02em', lineHeight: 1.15, margin: '8px 0 10px' }}>
          State-specific application packages
        </h2>
        <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.65, margin: 0, maxWidth: '68ch' }}>
          Select your state and distribution channel to download the correct application and disclosure package. Packages reflect the latest revisions on oceanviewlife.com.
        </p>
      </div>

      <div className="ov-apps-toolbar">
        <div className="ov-apps-search">
          <Search size={16} strokeWidth={2} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by state or product"
            aria-label="Search application packages by state or product"
          />
        </div>

        <div className="ov-apps-filters">
          <div className="ov-apps-filter">
            <span className="ov-apps-filter__label">Product</span>
            <div className="ov-apps-chips" role="group" aria-label="Filter by product">
              {productOptions.map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  className={`ov-apps-chip${product === opt.id ? ' is-active' : ''}`}
                  aria-pressed={product === opt.id}
                  onClick={() => setProduct(opt.id)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="ov-apps-filter">
            <span className="ov-apps-filter__label">Channel</span>
            <div className="ov-apps-chips" role="group" aria-label="Filter by distribution channel">
              {CHANNELS.map(c => (
                <button
                  key={c.id}
                  type="button"
                  className={`ov-apps-chip${channel === c.id ? ' is-active' : ''}`}
                  aria-pressed={channel === c.id}
                  onClick={() => setChannel(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="ov-apps-readout" aria-live="polite">
        Showing <strong>{shown}</strong> of {TOTAL_PACKAGES} application packages
      </p>

      {groups.length === 0 && (
        <div className="ov-apps-empty">
          No application packages match your search. Try a different state or product.
        </div>
      )}

      <div className="ov-apps-groups">
        {groups.map(g => {
          const open = !collapsed.has(g.key)
          return (
            <section key={g.key} className="ov-apps-group">
              <button
                type="button"
                className="ov-apps-group__head"
                aria-expanded={open}
                aria-controls={`apps-${g.key}`}
                onClick={() => toggle(g.key)}
              >
                <span className="ov-apps-group__title">
                  {g.product.name}
                  <span className={`ov-apps-tag${g.product.tag === 'FIA' ? ' ov-apps-tag--fia' : ''}`}>{g.product.tag}</span>
                  <span className="ov-apps-group__channel">{g.channel.name}</span>
                </span>
                <span className="ov-apps-group__meta">
                  {g.states.length} {g.states.length === 1 ? 'package' : 'packages'}
                  <ChevronDown size={16} strokeWidth={2} className={`ov-apps-group__chevron${open ? ' is-open' : ''}`} />
                </span>
              </button>
              <div id={`apps-${g.key}`} hidden={!open} className="ov-apps-group__body">
                <div className="ov-state-grid">
                  {g.states.map(s => (
                    <StateTile key={`${g.key}-${s.code}`} state={s} onAcknowledge={setCoState} />
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {coState && <ColoradoModal onClose={() => setCoState(null)} />}
    </div>
  )
}

export { TOTAL_PACKAGES }
