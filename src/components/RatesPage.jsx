// RatesPage.jsx — Current Annuity Rates hub (all products)
import { Fragment } from 'react'
import { Download, Info } from 'lucide-react'
import { PillMint, PillGhost } from './Buttons.jsx'
import { HERO, INDEX, MYGA_PRODUCTS, FIA_PRODUCTS, CHANGES, DISCLOSURES } from '../data/ratesPage.js'

const S = {
  eyebrowRow: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 },
  eyebrowLine: { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow: { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' },
  h1: { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(34px,4.4vw,56px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#0D1F4E', margin: 0 },
  h2: { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(24px,2.4vw,32px)', color: '#0D1F4E', letterSpacing: '-0.02em', lineHeight: 1.15, margin: 0 },
  h3: { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 12, letterSpacing: '1px', textTransform: 'uppercase', color: '#2494C1', margin: 0 },
  body: { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: 0 },
  small: { fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#6B7280', lineHeight: 1.6, margin: 0 },
}

const th = { padding: '14px 16px', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(242,252,255,.6)' }
const td = { padding: '14px 16px', fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#4A5568', textAlign: 'center' }

function RateSheetLink({ label = 'Download rate sheet' }) {
  return (
    <a href="#" onClick={e => e.preventDefault()} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', border: '1.5px solid rgba(13,31,78,.18)', borderRadius: 8, padding: '9px 16px', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#233D7C', textDecoration: 'none', whiteSpace: 'nowrap' }}>
      <Download size={13} strokeWidth={2} /> {label}
    </a>
  )
}

function BandTable({ product }) {
  return (
    <div style={{ overflowX: 'auto', borderRadius: 12, border: '1px solid rgba(13,31,78,.09)', background: '#fff' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
        <thead>
          <tr style={{ background: 'var(--ov-navy-1000)' }}>
            <th style={{ ...th, textAlign: 'left', minWidth: 200 }}>Band / Term</th>
            {product.terms.map(t => <th key={t} style={{ ...th, textAlign: 'center' }}>{t}</th>)}
          </tr>
        </thead>
        <tbody>
          {product.bands.map((band, i) => (
            <tr key={band.label} style={{ background: i % 2 === 0 ? '#fff' : 'var(--ov-surface-tint)', borderTop: i === 0 ? 'none' : '1px solid rgba(13,31,78,.07)' }}>
              <td style={{ ...td, textAlign: 'left', fontWeight: 600, color: '#0D1F4E' }}>{band.label}</td>
              {band.values.map((v, j) => (
                <td key={j} style={{ ...td, color: v === '—' ? '#B6BFCB' : '#2494C1', fontFamily: 'var(--ov-ff-display)', fontSize: v === '—' ? 15 : 18, fontWeight: 600 }}>{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function StrategyTable({ product }) {
  return (
    <div style={{ overflowX: 'auto', borderRadius: 12, border: '1px solid rgba(13,31,78,.09)', background: '#fff' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
        <thead>
          <tr style={{ background: 'var(--ov-navy-1000)' }}>
            <th style={{ ...th, textAlign: 'left', minWidth: 340 }}>Crediting strategy</th>
            {product.terms.map(t => <th key={t} style={{ ...th, textAlign: 'center' }}>{t}</th>)}
          </tr>
        </thead>
        <tbody>
          {product.groups.map(group => (
            <Fragment key={group.label}>
              <tr style={{ background: 'rgba(36,148,193,.08)' }}>
                <td colSpan={product.terms.length + 1} style={{ ...S.eyebrow, padding: '10px 16px', color: '#1A7FAA' }}>{group.label}</td>
              </tr>
              {group.rows.map((row, i) => (
                <tr key={row.strategy} style={{ background: i % 2 === 0 ? '#fff' : 'var(--ov-surface-tint)', borderTop: '1px solid rgba(13,31,78,.06)' }}>
                  <td style={{ ...td, textAlign: 'left', color: '#0D1F4E', fontSize: 13 }}>{row.strategy}</td>
                  {row.values.map((v, j) => (
                    <td key={j} style={{ ...td, color: v === '—' ? '#B6BFCB' : '#2494C1', fontFamily: 'var(--ov-ff-display)', fontSize: v === '—' ? 15 : 17, fontWeight: 600 }}>{v}</td>
                  ))}
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function RequestCard({ product }) {
  return (
    <div style={{ background: '#fff', border: '1px solid rgba(36,148,193,.22)', borderRadius: 12, padding: '28px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
      <div style={{ maxWidth: 620 }}>
        <div style={{ ...S.eyebrow, color: '#1A7FAA', marginBottom: 8 }}>Rates quoted at application</div>
        <p style={{ ...S.body, fontSize: 15 }}>
          Current rates for this product are provided by the Sales Desk at the time of application. Request the current rate sheet or contact Sales to confirm today’s rates.
        </p>
        <p style={{ ...S.small, marginTop: 10 }}>{product.detail}</p>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <PillMint onClick={() => { window.location.hash = 'contact' }}>Request current rates</PillMint>
        <RateSheetLink />
      </div>
    </div>
  )
}

function ProductSection({ product, tint }) {
  return (
    <section id={product.id} className="ov-section" style={{ background: tint ? 'var(--ov-surface-tint)' : '#fff', scrollMarginTop: 130, borderTop: '1px solid rgba(13,31,78,.06)' }}>
      <div className="ov-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 20 }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ ...S.eyebrow, marginBottom: 8 }}>{product.group}</div>
            <h2 style={S.h2}>{product.name}</h2>
            <p style={{ ...S.body, marginTop: 10 }}>{product.desc}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, color: '#0D1F4E', background: 'rgba(112,186,191,.28)', borderRadius: 200, padding: '6px 14px', whiteSpace: 'nowrap' }}>
              {product.requestRates ? 'Quoted at application' : 'Current schedule'}
            </span>
            {product.rateSheet && !product.requestRates && <RateSheetLink />}
          </div>
        </div>

        {product.requestRates
          ? <RequestCard product={product} />
          : product.bands ? <BandTable product={product} /> : <StrategyTable product={product} />}

        <p style={{ ...S.small, marginTop: 12 }}>{product.note}</p>
      </div>
    </section>
  )
}

export default function RatesPage() {
  const jump = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main>
      {/* Hero */}
      <section className="ov-section" style={{ background: '#fff', paddingBottom: 48 }}>
        <div className="ov-container">
          <div style={{ maxWidth: 900 }}>
            <div style={S.eyebrowRow}><div style={S.eyebrowLine} /><span style={S.eyebrow}>{HERO.eyebrow}</span></div>
            <h1 style={S.h1}>{HERO.title}</h1>
            <p style={{ ...S.body, fontSize: 17, marginTop: 18, maxWidth: 720 }}>{HERO.subtitle}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20 }}>
              <Info size={15} color="#2494C1" style={{ flexShrink: 0 }} />
              <p style={{ ...S.small, fontSize: 13 }}>{HERO.note}</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
              <PillMint onClick={() => jump('harbourview-myga')}>View All Rates</PillMint>
              <PillGhost onClick={() => { window.location.hash = 'contact' }}>Contact Sales</PillGhost>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky product index */}
      <div style={{ position: 'sticky', top: 'var(--ov-header-h, 72px)', zIndex: 40, background: '#fff', borderTop: '1px solid rgba(13,31,78,.07)', borderBottom: '1px solid rgba(13,31,78,.10)' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', WebkitOverflowScrolling: 'touch', padding: '12px 0' }}>
            <span style={{ ...S.eyebrow, alignSelf: 'center', marginRight: 8, whiteSpace: 'nowrap' }}>Jump to</span>
            {INDEX.map(item => (
              <button key={item.id} onClick={() => jump(item.id)} style={{ background: 'transparent', border: '1px solid rgba(13,31,78,.16)', borderRadius: 200, padding: '7px 14px', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 12, color: '#0D1F4E', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MYGA */}
      {MYGA_PRODUCTS.map((p, i) => <ProductSection key={p.id} product={p} tint={i % 2 === 1} />)}

      {/* FIA */}
      {FIA_PRODUCTS.map((p, i) => <ProductSection key={p.id} product={p} tint={i % 2 === 0} />)}

      {/* Updates + CTA */}
      <section className="ov-section" style={{ background: '#001F54' }}>
        <div className="ov-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center' }} className="cmp-split">
            <div>
              <div style={{ ...S.eyebrow, color: '#70BABF', marginBottom: 10 }}>{CHANGES.eyebrow}</div>
              <h2 style={{ ...S.h2, color: '#F2FCFF' }}>{CHANGES.heading}</h2>
              <p style={{ ...S.body, color: 'rgba(242,252,255,.7)', marginTop: 14, maxWidth: 520 }}>{CHANGES.body}</p>
              <div style={{ marginTop: 24 }}>
                <PillMint onClick={() => { window.location.hash = 'contact' }}>{CHANGES.cta}</PillMint>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {CHANGES.points.map((p, i) => (
                <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(242,252,255,.06)', border: '1px solid rgba(242,252,255,.12)', borderRadius: 10, padding: '16px 20px' }}>
                  <span style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 16, color: '#70BABF' }}>0{i + 1}</span>
                  <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14, color: '#F2FCFF' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclosures */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ ...S.eyebrow, marginBottom: 12 }}>Important information</div>
            {DISCLOSURES.map(d => (
              <p key={d.slice(0, 40)} style={{ ...S.small, marginBottom: 10 }}>{d}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
