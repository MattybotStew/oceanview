import { useState } from 'react'
import { Download } from 'lucide-react'
import CTABanner from './CTABanner.jsx'

const PRODUCTS = [
  { key: 'hv-myga',    label: 'Harbourview MYGA' },
  { key: 'sky-myga',   label: 'Sky Harbourview MYGA' },
  { key: 'horizon',    label: 'Horizon MYGA' },
  { key: 'hv-fia',     label: 'Harbourview FIA' },
  { key: 'caplock',    label: 'CapLock FIA' },
  { key: 'topsider',   label: 'Topsider FIA' },
  { key: 'cr-fia',     label: 'Current Rate FIA' },
]

// States not available in any product
const UNAVAILABLE = new Set(['New York', 'Connecticut'])

// CA requires state-specific disclosures but is available
const CA_NOTE = new Set(['California'])

const STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois',
  'Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts',
  'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
  'New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota',
  'Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina',
  'South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington',
  'West Virginia','Wisconsin','Wyoming',
]

function StatusBadge({ state }) {
  if (UNAVAILABLE.has(state)) {
    return <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#A04A1A', background: 'rgba(193,92,44,.10)', borderRadius: 200, padding: '2px 8px', whiteSpace: 'nowrap' }}>Not Available</span>
  }
  if (CA_NOTE.has(state)) {
    return <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#1A7FAA', background: 'rgba(36,148,193,.10)', borderRadius: 200, padding: '2px 8px', whiteSpace: 'nowrap' }}>CA Disclosures</span>
  }
  return <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#1E6B42', background: 'rgba(42,124,79,.10)', borderRadius: 200, padding: '2px 8px', whiteSpace: 'nowrap' }}>Available</span>
}

function Check({ available }) {
  if (!available) return <span style={{ color: 'rgba(13,31,78,.2)', fontSize: 16, lineHeight: 1, display: 'block', textAlign: 'center' }}>—</span>
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="6.5" stroke="#2494C1" strokeOpacity=".3" />
        <path d="M4.5 7L6.5 9L9.5 5" stroke="#2494C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default function StateApprovalPage() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All') // All | Available | Not Available

  const filtered = STATES.filter(s => {
    const matchesQuery = s.toLowerCase().includes(query.toLowerCase())
    const isAvailable = !UNAVAILABLE.has(s)
    if (filter === 'Available' && !isAvailable) return false
    if (filter === 'Not Available' && isAvailable) return false
    return matchesQuery
  })

  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>For Professionals</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '22ch' }}>
            State Approval Chart
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto 32px', maxWidth: '52ch' }}>
            Oceanview annuities are available in 49 states and the District of Columbia. Products are not available in New York or Connecticut.
          </p>
          <button style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: '1.5px solid rgba(36,148,193,.3)', borderRadius: 8, padding: '10px 20px', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#2494C1', cursor: 'pointer' }}>
            <Download size={13} strokeWidth={2} />
            Download Full Chart (PDF)
          </button>
        </div>
      </section>

      {/* Status summary strip */}
      <div style={{ background: 'var(--ov-navy-1000)', padding: '20px 0' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }} className="pdt-stats-row">
            {[
              { value: '49', label: 'States available + DC' },
              { value: '2',  label: 'States not available (NY, CT)' },
              { value: '7',  label: 'Products in the lineup' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, paddingLeft: i > 0 ? 40 : 0, borderLeft: i > 0 ? '1px solid rgba(255,255,255,.08)' : 'none' }}>
                <span style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 36, color: '#F2FCFF', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</span>
                <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(242,252,255,.45)', maxWidth: 120, lineHeight: 1.4 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">

          {/* Controls */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 28, flexWrap: 'wrap', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search state…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#0D1F4E', border: '1.5px solid rgba(13,31,78,.15)', borderRadius: 8, padding: '9px 14px', outline: 'none', background: '#fff', width: 200 }}
            />
            {['All', 'Available', 'Not Available'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 12,
                  padding: '8px 16px', borderRadius: 200, border: '1.5px solid',
                  cursor: 'pointer', transition: 'all .15s',
                  background: filter === f ? 'var(--ov-navy-900)' : '#fff',
                  color: filter === f ? '#fff' : 'var(--ov-navy-900)',
                  borderColor: filter === f ? 'var(--ov-navy-900)' : 'rgba(13,31,78,.15)',
                }}
              >{f}</button>
            ))}
          </div>

          {/* Grid table */}
          <div style={{ overflowX: 'auto', borderRadius: 12, border: '1px solid rgba(13,31,78,.08)', background: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--ov-ff-sans)', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'var(--ov-navy-1000)' }}>
                  <th style={{ textAlign: 'left', padding: '14px 20px', fontWeight: 600, color: 'rgba(242,252,255,.5)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', minWidth: 180 }}>State</th>
                  <th style={{ textAlign: 'center', padding: '14px 12px', fontWeight: 600, color: 'rgba(242,252,255,.5)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', minWidth: 80 }}>Status</th>
                  {PRODUCTS.map(p => (
                    <th key={p.key} style={{ textAlign: 'center', padding: '14px 10px', fontWeight: 600, color: 'rgba(242,252,255,.65)', fontSize: 11, letterSpacing: '.06em', whiteSpace: 'nowrap', minWidth: 110 }}>{p.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((state, i) => {
                  const unavail = UNAVAILABLE.has(state)
                  return (
                    <tr key={state} style={{ borderBottom: '1px solid rgba(13,31,78,.06)', background: unavail ? 'rgba(193,92,44,.03)' : i % 2 === 0 ? '#fff' : 'rgba(13,31,78,.015)' }}>
                      <td style={{ padding: '13px 20px', fontWeight: 600, color: '#0D1F4E' }}>{state}</td>
                      <td style={{ padding: '13px 12px', textAlign: 'center' }}><StatusBadge state={state} /></td>
                      {PRODUCTS.map(p => (
                        <td key={p.key} style={{ padding: '13px 10px' }}>
                          <Check available={!unavail} />
                        </td>
                      ))}
                    </tr>
                  )
                })}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={PRODUCTS.length + 2} style={{ padding: '32px 20px', textAlign: 'center', color: '#9CA3AF', fontSize: 14 }}>No states match your search.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#9CA3AF', marginTop: 16, lineHeight: 1.6 }}>
            California requires state-specific disclosure documents for all products. Contact your Oceanview representative for CA-specific application packages. Product availability subject to change — confirm current approvals before submitting business.
          </p>
        </div>
      </section>

      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Questions?"
            title="Need a state-specific application"
            titleAccent="or disclosure document?"
            body="Our sales team can provide the correct application package for any state and distribution channel. Reach us directly or through your wholesaler."
            cta="Contact Sales"
            onClick={() => { window.location.hash = 'contact'; }}
          />
        </div>
      </section>
    </main>
  )
}
