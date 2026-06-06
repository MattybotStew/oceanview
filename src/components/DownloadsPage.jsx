import { Download } from 'lucide-react'
import CTABanner from './CTABanner.jsx'

// ── Shared styles ─────────────────────────────────────────────────────────────
const S = {
  eyebrowRow:  { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 },
  eyebrowLine: { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' },
  h2:          { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(24px,2.8vw,36px)', color: '#0D1F4E', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 10px' },
  groupLabel:  { fontFamily: 'var(--ov-ff-sans)', fontWeight: 700, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: '#0D1F4E' },
  body:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.65, margin: 0 },
}

function Eyebrow({ children }) {
  return (
    <div style={S.eyebrowRow}>
      <div style={S.eyebrowLine} />
      <span style={S.eyebrow}>{children}</span>
    </div>
  )
}

// ── Download row ──────────────────────────────────────────────────────────────
function DownloadRow({ label, title }) {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '16px 20px', background: '#fff', border: '1px solid rgba(13,31,78,.09)', borderRadius: 10, transition: 'border-color .15s, box-shadow .15s', cursor: 'default' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(36,148,193,.35)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(13,31,78,.06)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(13,31,78,.09)'; e.currentTarget.style.boxShadow = '' }}
    >
      <div>
        {label && <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.1px', textTransform: 'uppercase', color: '#2494C1', marginBottom: 4 }}>{label}</div>}
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14, color: '#0D1F4E', lineHeight: 1.35 }}>{title}</div>
      </div>
      <button style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'none', border: '1.5px solid rgba(36,148,193,.3)', borderRadius: 8, padding: '8px 16px', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#2494C1', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0, transition: 'border-color .15s, background .15s' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(36,148,193,.07)'; e.currentTarget.style.borderColor = '#2494C1' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'rgba(36,148,193,.3)' }}
      >
        <Download size={13} strokeWidth={2} />
        PDF
      </button>
    </div>
  )
}

// ── Product group ─────────────────────────────────────────────────────────────
function ProductGroup({ name, tag, items }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <span style={S.groupLabel}>{name}</span>
        {tag && <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: tag === 'FIA' ? '#1A7FAA' : '#1E6B42', background: tag === 'FIA' ? 'rgba(36,148,193,.10)' : 'rgba(42,124,79,.10)', borderRadius: 200, padding: '2px 9px' }}>{tag}</span>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map(item => <DownloadRow key={item.title} {...item} />)}
      </div>
    </div>
  )
}

// ── Form group ────────────────────────────────────────────────────────────────
function FormGroup({ heading, forms }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 700, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 10, paddingBottom: 10, borderBottom: '1px solid rgba(13,31,78,.08)' }}>
        {heading}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {forms.map(f => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '11px 16px', borderRadius: 8, border: '1px solid rgba(13,31,78,.07)', background: '#F0F9FC', transition: 'border-color .15s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(36,148,193,.25)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(13,31,78,.07)'}
          >
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13.5, color: '#0D1F4E' }}>{f}</span>
            <Download size={13} color="#2494C1" strokeWidth={2} style={{ flexShrink: 0, cursor: 'pointer' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────
const PRODUCT_GROUPS = [
  {
    name: 'Harbourview FIA',
    tag: 'FIA',
    items: [
      { label: 'Client Brochure',       title: 'Harbourview Fixed Indexed Annuity Brochure' },
      { label: 'Product Spec Sheet',    title: 'Harbourview FIA Product Spec Sheet' },
      { label: 'Crediting Strategy',    title: 'S&P 500 Annual Point-to-Point — Slip Sheet' },
      { label: 'Crediting Strategy',    title: 'Nasdaq-100 Annual Point-to-Point — Slip Sheet' },
      { label: 'Crediting Strategy',    title: 'Russell 2000 Annual Point-to-Point — Slip Sheet' },
    ],
  },
  {
    name: 'CapLock FIA',
    tag: 'FIA',
    items: [
      { label: 'Client Brochure',       title: 'CapLock Fixed Indexed Annuity Brochure' },
      { label: 'Product Spec Sheet',    title: 'CapLock FIA Product Spec Sheet' },
    ],
  },
  {
    name: 'Harbourview MYGA',
    tag: 'MYGA',
    items: [
      { label: 'Client Brochure',       title: 'Harbourview MYGA Brochure' },
      { label: 'Product Spec Sheet',    title: 'Harbourview MYGA Product Spec Sheet' },
    ],
  },
  {
    name: 'Sky Harbourview MYGA',
    tag: 'MYGA',
    items: [
      { label: 'Client Brochure',       title: 'Sky Harbourview MYGA Brochure' },
      { label: 'Product Spec Sheet',    title: 'Sky Harbourview MYGA Product Spec Sheet' },
    ],
  },
  {
    name: 'Horizon MYGA',
    tag: 'MYGA',
    items: [
      { label: 'Client Brochure',       title: 'Horizon MYGA Brochure' },
      { label: 'Product Spec Sheet',    title: 'Horizon MYGA Product Spec Sheet' },
    ],
  },
]

const DISCLOSURE_DOCS = [
  { label: 'State Disclosure — CA',     title: 'California Annuity Disclosure Document' },
  { label: 'State Disclosure — Non-CA', title: 'Non-California Annuity Disclosure Document' },
  { label: 'Sales Approach',            title: 'The New 60/40 Approach — Consumer Guide' },
]

const SERVICE_FORM_GROUPS = [
  {
    heading: 'Beneficiary',
    forms: [
      'Beneficiary Change Request',
      'Additional Beneficiary Designation',
      'Trusted Contact Person Designation',
    ],
  },
  {
    heading: 'Withdrawals & Surrenders',
    forms: [
      'Partial Withdrawal Request',
      'Full Surrender Request',
      'Automatic Withdrawal Setup',
    ],
  },
  {
    heading: 'Identity & Contact',
    forms: [
      'Name Change Request',
      'Address Change / Contact Update',
      'Non-US Citizen Affidavit',
    ],
  },
  {
    heading: 'Transfers',
    forms: [
      'ACORD Transfer Form',
      'Transfer of Contract Values',
    ],
  },
  {
    heading: 'Tax & RMDs',
    forms: [
      'W-4P — Tax Withholding Election',
      'W-4R — Tax Withholding on Lump Sum',
      'Required Minimum Distribution (RMD) Setup',
      'Qualified Charitable Distribution (QCD)',
    ],
  },
  {
    heading: 'Estate & Claims',
    forms: [
      'Death Claim Form',
      'Inherited Contract Setup',
      'Trust Verification Form',
    ],
  },
  {
    heading: 'Post-Issue Services',
    forms: [
      'Direct Deposit Authorization',
      'Duplicate Contract Request',
      'Annual Statement Request',
    ],
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────
export default function DownloadsPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>Client Resources</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '22ch' }}>
            Downloads
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '52ch' }}>
            Product brochures, spec sheets, strategy slip sheets, and post-issue service forms — ready to download as PDF.
          </p>
        </div>
      </section>

      {/* Product Materials */}
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 48 }}>
            <Eyebrow>Product Materials</Eyebrow>
            <h2 style={S.h2}>Brochures &amp; Spec Sheets</h2>
            <p style={{ ...S.body, marginTop: 8, maxWidth: '60ch' }}>
              Client-ready brochures, product specification sheets, and crediting strategy slip sheets for every Oceanview annuity.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40 }} className="ov-downloads-grid">
            {PRODUCT_GROUPS.map(g => <ProductGroup key={g.name} {...g} />)}
          </div>

          {/* Disclosures + General */}
          <div style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid rgba(13,31,78,.08)' }}>
            <div style={{ ...S.groupLabel, marginBottom: 12 }}>Disclosures &amp; General Materials</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {DISCLOSURE_DOCS.map(d => <DownloadRow key={d.title} {...d} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Service Forms */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 48 }}>
            <Eyebrow>Service Forms</Eyebrow>
            <h2 style={S.h2}>Post-Issue Administration</h2>
            <p style={{ ...S.body, marginTop: 8, maxWidth: '60ch' }}>
              Forms for beneficiary changes, withdrawals, transfers, tax elections, and estate processing. Submit completed forms to your Oceanview service representative.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40 }} className="ov-downloads-grid">
            {SERVICE_FORM_GROUPS.map(g => <FormGroup key={g.heading} {...g} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Need Help?"
            title="Can't find what you're looking for?"
            titleAccent=""
            body="Our service team can locate specific state forms, co-branded materials, or any document not listed here. Reach us directly or through your wholesaler."
            cta="Contact Us"
            onClick={() => { window.location.hash = 'contact'; }}
          />
        </div>
      </section>
    </main>
  )
}
