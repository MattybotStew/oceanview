import { useEffect } from 'react'
import { LayoutDashboard, FileText, Building2, ArrowRight } from 'lucide-react'

const LINKS = [
  { Icon: LayoutDashboard, label: 'Agent Portal',            desc: 'Manage client accounts, submit new business, and access sales materials.', route: 'agent-portal' },
  { Icon: FileText,        label: 'Sales Tools',             desc: 'Guides, comparison sheets, and client-ready materials for annuity conversations.', route: 'sales-tools' },
  { Icon: Building2,       label: 'LPL Advisor Resources',   desc: 'Resources built specifically for LPL-affiliated advisors.', route: 'lpl-landing' },
  { Icon: Building2,       label: 'Cetera Advisor Resources', desc: 'Resources built specifically for Cetera-affiliated advisors.', route: 'cetera-landing' },
]

function PopupLink({ Icon, label, desc, route, onClose }) {
  return (
    <a
      href={`#${route}`}
      onClick={(e) => { e.preventDefault(); window.location.hash = route; window.scrollTo({ top: 0, behavior: 'instant' }); onClose(); }}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 12px',
        borderRadius: 10, textDecoration: 'none', borderLeft: '2px solid transparent',
        transition: 'background .15s ease, border-color .15s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(36,148,193,.06)'; e.currentTarget.style.borderColor = '#70BABF' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'transparent' }}
    >
      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(36,148,193,.1)', border: '1px solid rgba(36,148,193,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={18} color="#2494C1" strokeWidth={1.75} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 15, color: '#1A3070' }}>{label}</span>
          <ArrowRight size={14} color="#1A3070" strokeWidth={2} style={{ flexShrink: 0 }} />
        </div>
        <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: 'var(--ov-grey-600)', lineHeight: 1.5, margin: '2px 0 0' }}>{desc}</p>
      </div>
    </a>
  )
}

export default function ProfessionalPopup({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 300,
        background: 'rgba(0,31,84,0.55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20,
        animation: 'ov-popup-fade-in 0.2s ease both',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Resources for financial professionals"
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff', borderRadius: 16, width: '100%', maxWidth: 480,
          boxShadow: '0 24px 60px 0 rgba(13,31,78,0.25)',
          padding: '32px 32px 24px',
          animation: 'ov-popup-scale-in 0.2s ease both',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 6 }}>
          <div>
            <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1', marginBottom: 8 }}>For Financial Professionals</div>
            <h2 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 24, color: '#0D1F4E', letterSpacing: '-0.02em', lineHeight: 1.15, margin: 0 }}>
              Resources built for you.
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, marginTop: -8, marginRight: -8, flexShrink: 0 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2L14 14M14 2L2 14" stroke="#233D7C" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 12 }}>
          {LINKS.map(l => <PopupLink key={l.label} {...l} onClose={onClose} />)}
        </div>

        <div style={{ borderTop: '1px solid rgba(13,31,78,.08)', marginTop: 12, paddingTop: 16 }}>
          <a
            href="#professionals"
            onClick={(e) => { e.preventDefault(); window.location.hash = 'professionals'; window.scrollTo({ top: 0, behavior: 'instant' }); onClose(); }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: 'var(--ov-navy-600)', textDecoration: 'none' }}
          >
            View all professional resources <ArrowRight size={13} strokeWidth={2} />
          </a>
        </div>
      </div>
    </div>
  )
}
