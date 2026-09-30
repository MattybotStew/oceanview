import { useState } from 'react'
import { PillGhost, PillWhite } from './Buttons.jsx'
import CTABanner from './CTABanner.jsx'
import { Eyebrow } from './common.jsx'
import { Shield, TrendingUp, BarChart2, ArrowUpFromLine, RefreshCw, Download } from 'lucide-react'
import { PRODUCT_GROUPS, DISCLOSURE_DOCS, SERVICE_FORM_GROUPS } from './DownloadsPage.jsx'

const DOC_TABS = [
  { id: 'brochures', label: 'Brochures' },
  { id: 'specs', label: 'Product Spec Sheets' },
  { id: 'packs', label: 'App Packs' },
  { id: 'other', label: 'Other' },
]

const SPEC_ROWS = PRODUCT_GROUPS.flatMap(g =>
  g.items.filter(item => item.label === 'Product Spec Sheet').map(item => ({ ...item, group: g.name }))
)

const APP_PACK_ROWS = [
  { label: 'MYGA', title: 'MYGA Application Packet' },
  { label: 'FIA', title: 'FIA Application Packet' },
]

const OTHER_GROUPS = [
  { heading: 'Disclosures & General', rows: DISCLOSURE_DOCS.map(d => ({ title: d.title })) },
  ...SERVICE_FORM_GROUPS.map(g => ({ heading: g.heading, rows: g.forms.map(title => ({ title })) })),
]

const S = {
  h2:   { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  lede: { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: '60ch' },
}

function BrochureCard({ icon: Icon, tag, title, body, dark, tint }) {
  const cardOverride = dark
    ? { background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', boxShadow: 'none' }
    : tint
    ? { background: 'rgba(112,186,191,0.2)', border: '1px solid rgba(112,186,191,.25)', boxShadow: 'none' }
    : {}
  return (
    <div style={{
      background: '#fff',
      border: '1px solid rgba(13,31,78,.07)',
      borderRadius: 14,
      padding: '24px 22px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      boxShadow: '0 2px 8px rgba(13,31,78,.04)',
      height: '100%',
      boxSizing: 'border-box',
      ...cardOverride,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 10,
        background: dark ? 'rgba(255,255,255,.08)' : 'var(--ov-surface-tint)',
        border: dark ? '1px solid rgba(255,255,255,.12)' : '1px solid rgba(36,148,193,.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <Icon size={18} color={dark ? '#70BABF' : '#2494C1'} strokeWidth={1.75} />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: dark ? '#70BABF' : '#2494C1' }}>{tag}</span>
        <h3 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 17, color: dark ? '#F2FCFF' : '#0D1F4E', letterSpacing: '-0.01em', lineHeight: 1.25, margin: 0 }}>{title}</h3>
        <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 13.5, color: dark ? 'rgba(242,252,255,.65)' : '#4A5568', lineHeight: 1.6, margin: 0 }}>{body}</p>
      </div>
      <div style={{ paddingTop: 4 }}>
        {dark
          ? <PillWhite style={{ fontSize: 13 }}>Download PDF</PillWhite>
          : <PillGhost style={{ fontSize: 13 }}>Download PDF</PillGhost>}
      </div>
    </div>
  )
}

const MYGA_BROCHURES = [
  {
    icon: Shield,
    tag: 'Multi-Year Guaranteed Annuity',
    title: 'Harbourview MYGA Product Brochure',
    body: 'An overview of the Harbourview Multi-Year Guaranteed Annuity — guaranteed interest, term options, withdrawal provisions, and key contract features.',
  },
  {
    icon: Shield,
    tag: 'Multi-Year Guaranteed Annuity',
    title: 'Horizon MYGA Product Brochure',
    body: 'An overview of the Horizon MYGA — predictable, tax-deferred growth through a guaranteed interest rate over a defined accumulation period.',
  },
  {
    icon: Shield,
    tag: 'Multi-Year Guaranteed Annuity',
    title: 'Sky Harbourview MYGA Product Brochure',
    body: 'An overview of the Sky Harbourview MYGA — guaranteed returns, tax-deferred growth, and a death benefit for beneficiaries included at no additional cost.',
  },
]

const FLEX_BROCHURES = [
  {
    icon: RefreshCw,
    tag: 'Fixed Annuities with Flexibility',
    title: 'Current Rate Fixed Annuity Brochure',
    body: 'An overview of the Current Rate Fixed Annuity — guaranteed interest today with the flexibility to adjust your growth approach as retirement goals evolve.',
  },
  {
    icon: TrendingUp,
    tag: 'Fixed Annuities with Flexibility',
    title: 'Harbourview Fixed Indexed Annuity Brochure',
    body: 'An overview of the Harbourview FIA — index-linked interest crediting with 100% principal protection, multiple crediting strategies, and flexible term options.',
  },
]

const FIA_BROCHURES = [
  {
    icon: BarChart2,
    tag: 'Fixed Indexed Annuity',
    title: 'CapLock Fixed Indexed Annuity Brochure',
    body: 'An overview of CapLock — clearly defined index crediting parameters with transparency around how interest is credited to the contract.',
  },
  {
    icon: ArrowUpFromLine,
    tag: 'Fixed Indexed Annuity',
    title: 'Topsider Fixed Indexed Annuity Brochure',
    body: 'An overview of Topsider — an accumulation-focused fixed indexed annuity built to emphasize upside growth potential within a protected framework.',
  },
]

function DocRow({ label, title, group }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '16px 20px', background: '#fff', border: '1px solid rgba(13,31,78,.09)', borderRadius: 10 }}>
      <div>
        {(group || label) && <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.1px', textTransform: 'uppercase', color: '#2494C1', marginBottom: 4 }}>{group ? `${group} · ${label}` : label}</div>}
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14, color: '#0D1F4E', lineHeight: 1.35 }}>{title}</div>
      </div>
      <button type="button" style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'none', border: '1.5px solid rgba(36,148,193,.3)', borderRadius: 8, padding: '8px 16px', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#2494C1', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}>
        <Download size={13} strokeWidth={2} />
        PDF
      </button>
    </div>
  )
}

export default function BrochuresPage() {
  const [tab, setTab] = useState('brochures')

  return (
    <main>

      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>Client Resources</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,62px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 24px', maxWidth: '18ch' }}>
            Brochures, Applications &amp; Forms
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '52ch' }}>
            Product brochures, specification sheets, application packets, and service forms — ready to view or download as PDF.
          </p>
        </div>
      </section>

      <div style={{ background: '#fff', position: 'sticky', top: 'var(--ov-header-h, 72px)', zIndex: 50, boxShadow: '0 1px 0 #e8e5e5' }}>
        <div className="ov-container">
          <div role="tablist" aria-label="Document categories" style={{ display: 'flex', borderBottom: '1px solid #e8e5e5', overflowX: 'auto' }}>
            {DOC_TABS.map(t => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                type="button"
                onClick={() => setTab(t.id)}
                style={{
                  flex: '1 0 auto',
                  minWidth: 140,
                  height: 51,
                  border: 'none',
                  borderRight: '1px solid #e8e5e5',
                  background: tab === t.id ? 'rgba(226,241,242,0.6)' : 'transparent',
                  fontFamily: 'var(--ov-ff-sans)',
                  fontWeight: 600,
                  fontSize: 13,
                  color: '#001F54',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  padding: '0 20px',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div role="tabpanel" id="brochures-panel-brochures" hidden={tab !== 'brochures'}>
      {/* Fixed Annuities */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 40 }}>
            <Eyebrow>Fixed Annuities</Eyebrow>
            <h2 style={{ ...S.h2, color: '#0D1F4E', marginBottom: 10 }}>MYGA &amp; Fixed Annuity Brochures</h2>
            <p style={{ ...S.lede, color: '#4A5568' }}>
              Client-ready overviews for our multi-year guaranteed annuity and fixed annuity products.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }} className="lpl-pillars-grid">
            {MYGA_BROCHURES.map(b => <BrochureCard key={b.title} {...b} tint />)}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 40 }}>
            <Eyebrow>Fixed Annuities with Flexibility</Eyebrow>
            <h2 style={{ ...S.h2, color: '#0D1F4E', marginBottom: 10 }}>Flexible growth brochures</h2>
            <p style={{ ...S.lede, color: '#4A5568' }}>
              Current Rate and Harbourview FIA — the same grouping used in the product navigation.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }} className="lpl-pillars-grid">
            {FLEX_BROCHURES.map(b => <BrochureCard key={b.title} {...b} tint />)}
          </div>
        </div>
      </section>

      {/* Fixed Indexed Annuities */}
      <section style={{ background: 'var(--ov-navy-1000)' }} className="ov-section">
        <div className="ov-container">
          <div style={{ marginBottom: 40 }}>
            <Eyebrow light>Fixed Indexed Annuities</Eyebrow>
            <h2 style={{ ...S.h2, color: '#F2FCFF', marginBottom: 10 }}>FIA Brochures</h2>
            <p style={{ ...S.lede, color: 'rgba(242,252,255,.62)' }}>
              Overviews of our index-linked annuity products — clear explanations of how each product works and who it suits.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }} className="lpl-pillars-grid">
            {FIA_BROCHURES.map(b => <BrochureCard key={b.title} {...b} dark />)}
          </div>
        </div>
      </section>
      </div>

      <div role="tabpanel" id="brochures-panel-specs" hidden={tab !== 'specs'}>
        <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
          <div className="ov-container" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ ...S.lede, color: '#0D1F4E', background: '#fff', border: '1px solid rgba(13,31,78,.09)', borderRadius: 10, padding: '14px 18px' }}>
              Topsider FIA and Current Rate Fixed Annuity have brochures and no product spec sheet in this library. Confirm with the client whether those files exist before adding rows.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {SPEC_ROWS.map(row => <DocRow key={row.title} {...row} />)}
            </div>
          </div>
        </section>
      </div>

      <div role="tabpanel" id="brochures-panel-packs" hidden={tab !== 'packs'}>
        <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
          <div className="ov-container" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {APP_PACK_ROWS.map(row => <DocRow key={row.title} {...row} />)}
          </div>
        </section>
      </div>

      <div role="tabpanel" id="brochures-panel-other" hidden={tab !== 'other'}>
        <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
          <div className="ov-container" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {OTHER_GROUPS.map(group => (
              <div key={group.heading}>
                <h2 style={{ ...S.h2, fontSize: 22, color: '#0D1F4E', marginBottom: 12 }}>{group.heading}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {group.rows.map(row => <DocRow key={row.title} title={row.title} />)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Questions?"
            title="Not sure which product"
            titleAccent="is right for you?"
            body="Our team can help match the right annuity to your retirement goals. Talk to a licensed financial professional or contact us directly."
            cta="Contact Us"
            onClick={() => { window.location.hash = 'contact' }}
          />
        </div>
      </section>

    </main>
  )
}
