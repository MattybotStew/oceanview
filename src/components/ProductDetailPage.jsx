// ProductDetailPage.jsx — Product detail template (Figma: 2026-Oceanview-Design / node 6951-569)
import { useState, useEffect } from 'react'
import { PillMint, PillGhost } from './Buttons.jsx'
import CTABanner from './CTABanner.jsx'
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

function CheckItem({ title, body, first }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '14px 0', borderTop: first ? 'none' : '1px solid rgba(13,31,78,.07)' }}>
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
    <div className="pdt-term-row" style={{ display: 'flex', gap: 24, borderTop: first ? 'none' : '1px solid rgba(13,31,78,.07)', alignItems: 'flex-start' }}>
      <div className="pdt-term-label" style={S.termLabel}>{label}</div>
      <div style={S.termValue}>{value}</div>
    </div>
  )
}

function StrategyRow({ name, term, last }) {
  const termColors = {
    '1-Year Term':    { bg: 'rgba(36,148,193,.08)',   color: '#1A7FAA' },
    '2-Year Term':    { bg: 'rgba(36,148,193,.08)',   color: '#1A7FAA' },
    'Risk-Controlled':{ bg: 'rgba(112,186,191,.15)',  color: '#1A8B8F' },
    'Annual':         { bg: 'rgba(36,148,193,.08)',   color: '#1A7FAA' },
    'Guaranteed Cap': { bg: 'rgba(225,196,59,.15)',   color: '#8B6F00' },
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

function SurrenderScheduleTable({ terms, rows }) {
  const colW = 110
  return (
    <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', width: '100%', borderRadius: 12, border: '1px solid rgba(13,31,78,.09)' }}>
      <div style={{ minWidth: `${60 + terms.length * colW + 48}px` }}>
        {/* Header row */}
        <div style={{ display: 'grid', gridTemplateColumns: `60px ${terms.map(() => `${colW}px`).join(' ')}`, background: 'var(--ov-navy-1000)', padding: '0 24px', borderRadius: '12px 12px 0 0' }}>
          <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(242,252,255,.45)', padding: '14px 0' }}>Year</div>
          {terms.map(t => (
            <div key={t} style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(242,252,255,.75)', padding: '14px 0', textAlign: 'center' }}>{t}</div>
          ))}
        </div>
        {/* Data rows */}
        {rows.map((row, ri) => (
          <div key={row.year} style={{ display: 'grid', gridTemplateColumns: `60px ${terms.map(() => `${colW}px`).join(' ')}`, padding: '0 24px', borderTop: ri === 0 ? 'none' : '1px solid rgba(13,31,78,.07)', background: ri % 2 === 0 ? '#fff' : 'rgba(13,31,78,.015)' }}>
            <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#6B7280', padding: '13px 0', display: 'flex', alignItems: 'center' }}>{row.year}</div>
            {row.charges.map((c, ci) => (
              <div key={ci} style={{ padding: '13px 0', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {c
                  ? <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14, color: '#0D1F4E', background: 'rgba(36,148,193,.08)', borderRadius: 6, padding: '4px 12px' }}>{c}</span>
                  : <span style={{ color: 'rgba(13,31,78,.18)', fontSize: 16, lineHeight: 1 }}>—</span>
                }
              </div>
            ))}
          </div>
        ))}
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
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, padding: '20px 24px', background: '#F0F9FC', border: '1px solid rgba(13,31,78,.09)', borderRadius: 10, marginTop: 16 }}>
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

// ── Rate Guarantee (MYGA) ─────────────────────────────────────────────────────
function RateGuaranteeSection({ rateGuarantee }) {
  return (
    <>
      <SectionHead {...rateGuarantee} />
      <div style={{ ...S.card }}>
        <div style={{ ...S.cardInner }}>
          {rateGuarantee.points.map((pt, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(13,31,78,.07)' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                <circle cx="7" cy="7" r="6.5" stroke="#2494C1" strokeOpacity="0.35"/>
                <path d="M4.5 7L6.5 9L9.5 5" stroke="#2494C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p style={{ ...S.itemBody, margin: 0 }}>{pt}</p>
            </div>
          ))}
        </div>
      </div>
      {rateGuarantee.rateNote && (
        <div style={{ marginTop: 16, padding: '16px 20px', background: 'rgba(36,148,193,.06)', border: '1px solid rgba(36,148,193,.15)', borderRadius: 10, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
            <circle cx="8" cy="8" r="7" stroke="#2494C1" strokeOpacity="0.5"/>
            <path d="M8 5v4M8 11v.5" stroke="#2494C1" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#1A7FAA', lineHeight: 1.6, margin: 0 }}>{rateGuarantee.rateNote}</p>
        </div>
      )}
    </>
  )
}

// ── Sidebar ───────────────────────────────────────────────────────────────────
const ALL_NAV_SECTIONS = [
  { id: 'contract-provides',   label: 'What your contract provides', key: 'contractProvides'    },
  { id: 'rate-guarantee',      label: 'Guaranteed rate details',     key: 'rateGuarantee'       },
  { id: 'crediting-strategies',label: 'Choose your growth approach', key: 'creditingStrategies' },
  { id: 'key-terms',           label: 'Key terms and specifications', key: 'keyTerms'            },
  { id: 'surrender-schedule',  label: 'Surrender charge schedule',   key: 'surrenderSchedule'   },
  { id: 'riders',              label: 'Built-in benefit provisions',  key: 'riders'              },
  { id: 'surrender-options',   label: 'End of surrender charge period', key: 'surrenderOptions' },
  { id: 'income-options',      label: 'Income payment options',       key: 'incomeOptions'       },
]

function Sidebar({ navSections, active, onNav }) {
  return (
    <aside style={{ width: 300, flexShrink: 0, position: 'sticky', top: 'calc(var(--ov-header-h, 72px) + 24px)', alignSelf: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <nav className="pdt-sidebar-nav" style={{ marginBottom: 24 }}>
          {navSections.map(s => {
            const isActive = active === s.id
            return (
              <button
                key={s.id}
                onClick={() => onNav(s.id)}
                className={`pdt-sidebar-nav-btn${isActive ? ' pdt-sidebar-nav-btn--active' : ''}`}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  background: isActive ? 'rgba(36,148,193,.08)' : 'none',
                  border: 'none', borderLeft: `3px solid ${isActive ? '#2494C1' : 'rgba(13,31,78,.10)'}`,
                  padding: '11px 16px', cursor: 'pointer',
                  fontFamily: 'var(--ov-ff-sans)', fontWeight: isActive ? 600 : 400,
                  fontSize: 13, color: isActive ? '#0D1F4E' : '#6B7280',
                  lineHeight: 1.45, transition: 'all .15s ease',
                }}
              >
                {s.label}
              </button>
            )
          })}
        </nav>
        <div className="pdt-sidebar-cta" style={{ background: 'var(--ov-navy-1000)', borderRadius: 12, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
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
  const navSections = ALL_NAV_SECTIONS.filter(s => !!product[s.key])

  const [activeTab, setActiveTab]         = useState(0)
  const [activeSection, setActiveSection] = useState('contract-provides')

  useEffect(() => {
    const ids = navSections.map(s => s.id)
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

  const { stats, contractProvides, rateGuarantee, creditingStrategies, keyTerms, surrenderSchedule, riders, surrenderOptions, incomeOptions, cta } = product

  return (
    <main>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="ov-hero-wrapper" style={{ marginBottom: 40 }}>
        <section style={{ paddingTop: 20, paddingBottom: 0 }}>
          <div className="ov-hero-card" style={{ background: 'var(--ov-navy-1000)' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(85deg, rgba(0,0,0,.82) 0%, rgba(0,31,84,.4) 60%, transparent 100%)', zIndex: 1 }} />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(assets/Noise.png)', backgroundRepeat: 'repeat', backgroundSize: '200px', opacity: 0.6, pointerEvents: 'none', zIndex: 2 }} />
            <HeroShaper />
            <div className="ov-hero-content" style={{ zIndex: 11 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.22)', borderRadius: 200, padding: '5px 12px', backdropFilter: 'blur(4px)', marginBottom: 4, alignSelf: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#F2FCFF', whiteSpace: 'nowrap' }}>{product.categoryShort || product.category}</span>
              </div>
              <h1 className="ov-hero-title" style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px,5.5vw,64px)', color: '#F2FCFF', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>
                {product.name}
              </h1>
              <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(14px,1.4vw,17px)', color: 'rgba(242,252,255,.72)', lineHeight: 1.65, margin: 0, maxWidth: '52ch' }}>
                {product.tagline}
              </p>
              <PillMint hero onClick={() => scrollTo('crediting-strategies')} style={{ alignSelf: 'flex-start' }}>{product.heroCtaLabel || 'Explore Strategies'}</PillMint>
            </div>
          </div>
        </section>
      </div>

      {/* ── Stats bar ─────────────────────────────────────────────────── */}
      <div style={{ background: '#fff', padding: '12px 0' }}>
        <div className="ov-container">
          <div style={{ background: 'var(--ov-navy-1000)', borderRadius: 16, padding: '0 32px', display: 'flex' }} className="pdt-stats-row">
            {stats.map((s, i) => (
              <button
                key={s.label}
                onClick={() => s.sectionId && scrollTo(s.sectionId)}
                style={{
                  flex: 1, padding: '18px 0', paddingLeft: i > 0 ? 28 : 0,
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,.08)' : 'none',
                  marginLeft: i > 0 ? 28 : 0,
                  background: 'none', border: 'none',
                  cursor: s.sectionId ? 'pointer' : 'default',
                  textAlign: 'left',
                }}
              >
                <div style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 800, fontSize: 'clamp(16px,1.8vw,24px)', color: '#70BABF', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 10, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(242,252,255,.55)', marginTop: 5 }}>{s.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2-col main content ────────────────────────────────────────────── */}
      <div style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start' }} className="pdt-layout">

            <Sidebar navSections={navSections} active={activeSection} onNav={scrollTo} />

            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 72 }}>

              {/* 1 — What your contract provides */}
              <section id="pdt-contract-provides" style={{ scrollMarginTop: 160 }}>
                <SectionHead {...contractProvides} />
                <div style={{ ...S.card }}>
                  <div style={{ ...S.cardInner, paddingBottom: 8 }}>
                    <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1', marginBottom: 12 }}>Key Features</div>
                    {contractProvides.items.map((item, i) => (
                      <CheckItem key={item.title} {...item} first={i === 0} />
                    ))}
                  </div>
                </div>
                {contractProvides.download && <DownloadRow {...contractProvides.download} />}
              </section>

              {/* 2 — Guaranteed rate (MYGAs) */}
              {rateGuarantee && (
                <section id="pdt-rate-guarantee" style={{ scrollMarginTop: 160 }}>
                  <RateGuaranteeSection rateGuarantee={rateGuarantee} />
                </section>
              )}

              {/* 3 — Choose your growth approach (FIAs) */}
              {creditingStrategies && <section id="pdt-crediting-strategies" style={{ scrollMarginTop: 160 }}>
                <SectionHead {...creditingStrategies} />

                {/* Index tabs */}
                <div className="pdt-strategy-tabs" style={{ display: 'flex', background: '#fff', border: '1px solid rgba(13,31,78,.09)', borderRadius: '10px 10px 0 0', overflow: 'hidden', marginBottom: 0 }}>
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
              </section>}

              {/* 4 — Key terms */}
              <section id="pdt-key-terms" style={{ scrollMarginTop: 160 }}>
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

              {/* 4 — Surrender charge schedule */}
              {surrenderSchedule && (
                <section id="pdt-surrender-schedule" style={{ scrollMarginTop: 160 }}>
                  <SectionHead {...surrenderSchedule} />
                  <SurrenderScheduleTable terms={surrenderSchedule.terms} rows={surrenderSchedule.rows} />
                  {surrenderSchedule.footnote && <p style={S.footnote}>{surrenderSchedule.footnote}</p>}
                </section>
              )}

              {/* 5 — Riders */}
              <section id="pdt-riders" style={{ scrollMarginTop: 160 }}>
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

              {/* 6 — Surrender options */}
              <section id="pdt-surrender-options" style={{ scrollMarginTop: 160 }}>
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

              {/* 7 — Income options */}
              <section id="pdt-income-options" style={{ scrollMarginTop: 160 }}>
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
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <CTABanner
            eyebrow="Get Started"
            title={cta.heading}
            body={cta.sub}
            cta={cta.buttonLabel}
            onClick={() => { window.location.hash = 'contact'; }}
          />
        </div>
      </section>

    </main>
  )
}
