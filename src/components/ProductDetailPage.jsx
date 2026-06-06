// ProductDetailPage.jsx — Product detail template (Figma: 2026-Oceanview-Design / node 6951-569)
import { useState, useEffect } from 'react'
import { PillMint, PillGhost } from './Buttons.jsx'
import HeroShaper from './HeroShaper.jsx'
import { Download, ChevronRight } from 'lucide-react'

// ── Shared styles ─────────────────────────────────────────────────────────────
const S = {
  eyebrowRow:       { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 },
  eyebrowLine:      { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow:          { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' },
  sectionH2:        { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(22px,2.4vw,32px)', color: '#0D1F4E', letterSpacing: '-0.02em', lineHeight: 1.15, margin: 0 },
  sectionSub:       { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: '12px 0 0' },
  card:             { background: '#fff', border: '1px solid rgba(13,31,78,.09)', borderRadius: 12 },
  cardInner:        { padding: '24px 28px' },
  itemTitle:        { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14, color: '#0D1F4E', flexShrink: 0 },
  itemBody:         { fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.65, margin: 0 },
  termLabel:        { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#0D1F4E', flexShrink: 0, width: 220, paddingTop: 14, paddingBottom: 14 },
  termValue:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#4A5568', lineHeight: 1.65, flex: 1, paddingTop: 14, paddingBottom: 14 },
  footnote:         { fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#9CA3AF', lineHeight: 1.6, marginTop: 12 },
  disclaimer:       { fontFamily: 'var(--ov-ff-sans)', fontSize: 11, color: '#9CA3AF', lineHeight: 1.6, marginTop: 24 },
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionHead({ eyebrow, heading, sub }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={S.eyebrowRow}>
        <div style={S.eyebrowLine} />
        <span style={S.eyebrow}>{eyebrow}</span>
      </div>
      <h2 style={S.sectionH2}>{heading}</h2>
      {sub && <p style={S.sectionSub}>{sub}</p>}
    </div>
  )
}

function CheckItem({ title, body, last }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '16px 0', borderTop: last ? 'none' : '1px solid rgba(13,31,78,.07)', borderBottom: '1px solid rgba(13,31,78,.07)' }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
        <circle cx="7" cy="7" r="6.5" stroke="#2494C1" strokeOpacity="0.35"/>
        <path d="M4.5 7L6.5 9L9.5 5" stroke="#2494C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <p style={{ ...S.itemBody, margin: 0 }}>
        {title && <strong style={{ color: '#0D1F4E', fontWeight: 600 }}>{title}: </strong>}
        {body}
      </p>
    </div>
  )
}

function TermRow({ label, value, first }) {
  return (
    <div style={{ display: 'flex', gap: 24, borderTop: first ? 'none' : '1px solid rgba(13,31,78,.07)', alignItems: 'flex-start' }}>
      <div style={S.termLabel}>{label}</div>
      <div style={S.termValue}>{value}</div>
    </div>
  )
}

function StrategyRow({ name, term, last }) {
  const termColors = {
    '1-Year Term':   { bg: 'rgba(36,148,193,.08)',  color: '#1A7FAA' },
    '2-Year Term':   { bg: 'rgba(36,148,193,.08)',  color: '#1A7FAA' },
    'Risk-Controlled':{ bg: 'rgba(112,186,191,.15)', color: '#1A8B8F' },
    'Annual':        { bg: 'rgba(36,148,193,.08)',  color: '#1A7FAA' },
  }
  const tc = termColors[term] || { bg: 'rgba(13,31,78,.06)', color: '#4A5568' }
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: last ? 'none' : '1px solid rgba(13,31,78,.07)', gap: 16 }}>
      <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#0D1F4E' }}>{name}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <span style={{ background: tc.bg, color: tc.color, borderRadius: 200, padding: '4px 12px', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.02em', whiteSpace: 'nowrap' }}>{term}</span>
        <ChevronRight size={14} color="#9CA3AF" />
      </div>
    </div>
  )
}

function DefinitionItem({ title, body, last }) {
  return (
    <div style={{ padding: '16px 0', borderBottom: last ? 'none' : '1px solid rgba(13,31,78,.07)' }}>
      <div style={{ ...S.itemTitle, marginBottom: 6 }}>{title}</div>
      <p style={{ ...S.itemBody, margin: 0 }}>{body}</p>
    </div>
  )
}

function DownloadRow({ title, sub }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '20px 24px', background: '#fff', border: '1px solid rgba(13,31,78,.09)', borderRadius: 10, marginTop: 16 }}>
      <div>
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14, color: '#0D1F4E', marginBottom: 3 }}>{title}</div>
        {sub && <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#6B7280' }}>{sub}</div>}
      </div>
      <button style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: '1.5px solid rgba(36,148,193,.3)', borderRadius: 8, padding: '8px 16px', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#2494C1', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'border-color .15s, background .15s' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(36,148,193,.06)'; e.currentTarget.style.borderColor = '#2494C1' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'rgba(36,148,193,.3)' }}
      >
        <Download size={13} strokeWidth={2} />
        Download PDF
      </button>
    </div>
  )
}

// ── Sidebar ───────────────────────────────────────────────────────────────────
const NAV_SECTIONS = [
  { id: 'contract-provides',   label: 'What your contract provides' },
  { id: 'crediting-strategies',label: 'Choose your growth approach' },
  { id: 'key-terms',           label: 'Key terms and specifications' },
  { id: 'riders',              label: 'Built-in benefit provisions' },
  { id: 'surrender-options',   label: 'End of surrender charge period' },
  { id: 'income-options',      label: 'Income payment options' },
]

function Sidebar({ active, onNav }) {
  return (
    <aside style={{ width: 300, flexShrink: 0 }}>
      <div style={{ position: 'sticky', top: 'calc(var(--ov-header-h, 72px) + 24px)', display: 'flex', flexDirection: 'column', gap: 0 }}>
        <nav style={{ marginBottom: 24 }}>
          {NAV_SECTIONS.map(s => {
            const isActive = active === s.id
            return (
              <button
                key={s.id}
                onClick={() => onNav(s.id)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  background: isActive ? 'rgba(36,148,193,.07)' : 'none',
                  border: 'none', borderLeft: `2px solid ${isActive ? '#2494C1' : 'rgba(13,31,78,.10)'}`,
                  padding: '12px 16px', cursor: 'pointer',
                  fontFamily: 'var(--ov-ff-sans)', fontWeight: isActive ? 600 : 400,
                  fontSize: 13, color: isActive ? '#2494C1' : '#4A5568',
                  lineHeight: 1.45, transition: 'all .15s ease',
                }}
              >
                {s.label}
              </button>
            )
          })}
        </nav>
        <div style={{ background: 'var(--ov-navy-1000)', borderRadius: 12, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 18, color: '#F2FCFF', letterSpacing: '-0.01em', lineHeight: 1.3, margin: 0 }}>
            Ready to learn more? Our team can walk you through the right strategy.
          </p>
          <PillMint onClick={() => { window.location.hash = 'contact' }}>Get Started</PillMint>
        </div>
      </div>
    </aside>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function ProductDetailPage({ product }) {
  const [activeTab, setActiveTab]       = useState(0)
  const [activeSection, setActiveSection] = useState('contract-provides')

  useEffect(() => {
    const ids = NAV_SECTIONS.map(s => s.id)
    const observers = ids.map(id => {
      const el = document.getElementById(`pdt-${id}`)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-20% 0px -70% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(`pdt-${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const { stats, contractProvides, creditingStrategies, keyTerms, riders, surrenderOptions, incomeOptions, cta } = product

  return (
    <main>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="ov-hero-wrapper" style={{ marginBottom: 0 }}>
        <section style={{ paddingTop: 20, paddingBottom: 0 }}>
          <div className="ov-hero-card" style={{ background: 'var(--ov-navy-1000)' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(85deg, rgba(0,0,0,.82) 0%, rgba(0,31,84,.4) 60%, transparent 100%)', zIndex: 1 }} />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(assets/Noise.png)', backgroundRepeat: 'repeat', backgroundSize: '200px', opacity: 0.6, pointerEvents: 'none', zIndex: 2 }} />
            <HeroShaper />
            <div className="ov-hero-content" style={{ zIndex: 3 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.22)', borderRadius: 200, padding: '6px 14px', backdropFilter: 'blur(4px)', marginBottom: 4 }}>
                <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#F2FCFF' }}>{product.category}</span>
              </div>
              <h1 className="ov-hero-title" style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px,5.5vw,64px)', color: '#F2FCFF', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
                {product.name}
              </h1>
              <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(14px,1.4vw,17px)', color: 'rgba(242,252,255,.72)', lineHeight: 1.65, margin: 0, maxWidth: '52ch' }}>
                {product.tagline}
              </p>
              <PillMint hero onClick={() => scrollTo('crediting-strategies')}>{product.heroCtaLabel || 'Explore Strategies'}</PillMint>
            </div>
          </div>
        </section>
      </div>

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <div style={{ background: '#fff', borderBottom: '1px solid rgba(13,31,78,.08)' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', padding: '28px 0' }} className="pdt-stats-row">
            {stats.map((s, i) => (
              <div key={s.label} style={{ flex: 1, paddingLeft: i > 0 ? 32 : 0, borderLeft: i > 0 ? '1px solid rgba(13,31,78,.10)' : 'none', marginLeft: i > 0 ? 32 : 0 }}>
                <div style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(20px,2.2vw,30px)', color: '#0D1F4E', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.8px', textTransform: 'uppercase', color: '#6B7280', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2-col main content ────────────────────────────────────────────── */}
      <div style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start' }} className="pdt-layout">

            <Sidebar active={activeSection} onNav={scrollTo} />

            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 72 }}>

              {/* 1 — What your contract provides */}
              <section id="pdt-contract-provides" style={{ scrollMarginTop: 100 }}>
                <SectionHead {...contractProvides} />
                <div style={{ ...S.card }}>
                  <div style={{ ...S.cardInner, paddingBottom: 0 }}>
                    <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1', marginBottom: 4 }}>Key Features</div>
                  </div>
                  <div style={{ padding: '0 28px 8px' }}>
                    {contractProvides.items.map((item, i) => (
                      <CheckItem key={item.title} {...item} last={i === contractProvides.items.length - 1} />
                    ))}
                  </div>
                </div>
                {contractProvides.download && <DownloadRow {...contractProvides.download} />}
              </section>

              {/* 2 — Choose your growth approach */}
              <section id="pdt-crediting-strategies" style={{ scrollMarginTop: 100 }}>
                <SectionHead {...creditingStrategies} />

                {/* Index tabs */}
                <div style={{ display: 'flex', background: '#fff', border: '1px solid rgba(13,31,78,.09)', borderRadius: '10px 10px 0 0', overflow: 'hidden', marginBottom: 0 }}>
                  {creditingStrategies.tabs.map((tab, i) => (
                    <button
                      key={tab.label}
                      onClick={() => setActiveTab(i)}
                      style={{
                        flex: 1, padding: '14px 8px', border: 'none', borderBottom: `2px solid ${activeTab === i ? '#2494C1' : 'transparent'}`,
                        background: activeTab === i ? 'rgba(36,148,193,.05)' : 'none',
                        fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13,
                        color: activeTab === i ? '#2494C1' : '#6B7280', cursor: 'pointer',
                        transition: 'all .15s', whiteSpace: 'nowrap',
                      }}
                    >{tab.label}</button>
                  ))}
                </div>
                <div style={{ border: '1px solid rgba(13,31,78,.09)', borderTop: 'none', borderRadius: '0 0 10px 10px', overflow: 'hidden' }}>
                  {creditingStrategies.tabs[activeTab].strategies.map((s, i) => (
                    <StrategyRow key={s.name} {...s} last={i === creditingStrategies.tabs[activeTab].strategies.length - 1} />
                  ))}
                </div>
              </section>

              {/* 3 — Key terms */}
              <section id="pdt-key-terms" style={{ scrollMarginTop: 100 }}>
                <SectionHead {...keyTerms} />
                <div style={S.card}>
                  <div style={{ padding: '8px 28px' }}>
                    {keyTerms.items.map((item, i) => (
                      <TermRow key={item.label} {...item} first={i === 0} />
                    ))}
                  </div>
                </div>
                {keyTerms.download && <DownloadRow {...keyTerms.download} />}
              </section>

              {/* 4 — Riders */}
              <section id="pdt-riders" style={{ scrollMarginTop: 100 }}>
                <SectionHead {...riders} />
                <div style={S.card}>
                  <div style={{ padding: '8px 28px' }}>
                    {riders.items.map((item, i) => (
                      <DefinitionItem key={item.title} {...item} last={i === riders.items.length - 1} />
                    ))}
                  </div>
                </div>
                {riders.footnote && <p style={S.footnote}>{riders.footnote}</p>}
              </section>

              {/* 5 — Surrender options */}
              <section id="pdt-surrender-options" style={{ scrollMarginTop: 100 }}>
                <SectionHead {...surrenderOptions} />
                <div style={S.card}>
                  <div style={{ padding: '8px 28px' }}>
                    {surrenderOptions.items.map((item, i) => (
                      <DefinitionItem key={item.title} {...item} last={i === surrenderOptions.items.length - 1} />
                    ))}
                  </div>
                </div>
                {surrenderOptions.footnote && <p style={S.footnote}>{surrenderOptions.footnote}</p>}
              </section>

              {/* 6 — Income options */}
              <section id="pdt-income-options" style={{ scrollMarginTop: 100 }}>
                <SectionHead {...incomeOptions} />
                <div style={S.card}>
                  <div style={{ padding: '8px 28px' }}>
                    {incomeOptions.items.map((item, i) => (
                      <DefinitionItem key={item.title} {...item} last={i === incomeOptions.items.length - 1} />
                    ))}
                  </div>
                </div>
                {incomeOptions.disclaimer && <p style={S.disclaimer}>{incomeOptions.disclaimer}</p>}
              </section>

            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--ov-surface-tint)', textAlign: 'center' }} className="ov-section">
        <div className="ov-container" style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px,3.6vw,48px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.1, margin: '0 0 16px' }}>
            {cta.heading}
          </h2>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 16, color: '#4A5568', lineHeight: 1.65, margin: '0 0 36px' }}>{cta.sub}</p>
          <PillMint hero onClick={() => { window.location.hash = 'contact' }}>{cta.buttonLabel}</PillMint>
        </div>
      </section>

    </main>
  )
}
