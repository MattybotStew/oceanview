import { useState } from 'react'
import { PillGhost, PillWhite } from './Buttons.jsx'
import CTABanner from './CTABanner.jsx'
import { Eyebrow } from './common.jsx'
import { Shield, TrendingUp, BarChart2, ArrowUpFromLine, RefreshCw, Download } from 'lucide-react'
import ApplicationsExplorer from './ApplicationsExplorer.jsx'
import { APPLICATION_PRODUCTS, BROCHURE_DOCS, SERVICE_FORMS } from '../data/documents.js'

const DOC_TABS = [
  { id: 'brochures', label: 'Brochures' },
  { id: 'specs', label: 'Product Spec Sheets' },
  { id: 'applications', label: 'Applications' },
  { id: 'forms', label: 'Forms & Disclosures' },
]
const VALID_TABS = DOC_TABS.map(t => t.id)
const VALID_PRODUCTS = APPLICATION_PRODUCTS.map(p => p.id)
const VALID_CHANNELS = ['imo', 'fi']

const SPEC_SHEETS = BROCHURE_DOCS.filter(d => /spec sheet/i.test(d.title))
const SLIP_SHEETS = BROCHURE_DOCS.filter(d => /slip sheet/i.test(d.title))
const DISCLOSURES = APPLICATION_PRODUCTS.flatMap(p =>
  (p.docs || []).map(d => ({ label: p.name, title: d.label, url: d.url }))
)

const S = {
  h2:   { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  lede: { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: '60ch' },
}

function getHashParams() {
  const hash = window.location.hash || ''
  const i = hash.indexOf('?')
  return new URLSearchParams(i >= 0 ? hash.slice(i + 1) : '')
}

function BrochureCard({ icon: Icon, tag, title, body, dark, tint, url }) {
  const cardOverride = dark
    ? { background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', boxShadow: 'none' }
    : tint
    ? { background: 'rgba(112,186,191,0.2)', border: '1px solid rgba(112,186,191,.25)', boxShadow: 'none' }
    : {}
  const open = () => { if (url) window.open(url, '_blank', 'noopener,noreferrer') }
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
        {url
          ? (dark
              ? <PillWhite style={{ fontSize: 13 }} onClick={open}>Download PDF</PillWhite>
              : <PillGhost style={{ fontSize: 13 }} onClick={open}>Download PDF</PillGhost>)
          : <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: dark ? 'rgba(242,252,255,.45)' : '#9CA3AF' }}>PDF coming soon</span>}
      </div>
    </div>
  )
}

const MYGA_BROCHURES = [
  {
    icon: Shield,
    tag: 'Multi-Year Guaranteed Annuity',
    title: 'Harbourview MYGA Product Brochure',
    docTitle: 'Harbourview MYGA Brochure',
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
    docTitle: 'Sky Harbourview MYGA Brochure',
    body: 'An overview of the Sky Harbourview MYGA — guaranteed returns, tax-deferred growth, and a death benefit for beneficiaries included at no additional cost.',
  },
]

const FLEX_BROCHURES = [
  {
    icon: RefreshCw,
    tag: 'Fixed Annuities with Flexibility',
    title: 'Current Rate Fixed Annuity Brochure',
    docTitle: 'CurrentRate MYGA Brochure',
    body: 'An overview of the Current Rate Fixed Annuity — guaranteed interest today with the flexibility to adjust your growth approach as retirement goals evolve.',
  },
  {
    icon: TrendingUp,
    tag: 'Fixed Annuities with Flexibility',
    title: 'Harbourview Fixed Indexed Annuity Brochure',
    docTitle: 'Harbourview FIA Brochure',
    body: 'An overview of the Harbourview FIA — index-linked interest crediting with 100% principal protection, multiple crediting strategies, and flexible term options.',
  },
]

const FIA_BROCHURES = [
  {
    icon: BarChart2,
    tag: 'Fixed Indexed Annuity',
    title: 'CapLock Fixed Indexed Annuity Brochure',
    docTitle: 'CapLock FIA Brochure',
    body: 'An overview of CapLock — clearly defined index crediting parameters with transparency around how interest is credited to the contract.',
  },
  {
    icon: ArrowUpFromLine,
    tag: 'Fixed Indexed Annuity',
    title: 'Topsider Fixed Indexed Annuity Brochure',
    body: 'An overview of Topsider — an accumulation-focused fixed indexed annuity built to emphasize upside growth potential within a protected framework.',
  },
]

// Live brochure / spec / slip-sheet downloads (Salesforce links), keyed by document title.
const DOWNLOAD_BY_TITLE = Object.fromEntries(BROCHURE_DOCS.map(d => [d.title, d.url]))

function DocRow({ label, title, url }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '16px 20px', background: '#fff', border: '1px solid rgba(13,31,78,.09)', borderRadius: 10 }}>
      <div>
        {label && <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.1px', textTransform: 'uppercase', color: '#2494C1', marginBottom: 4 }}>{label}</div>}
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14, color: '#0D1F4E', lineHeight: 1.35 }}>{title}</div>
      </div>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'none', border: '1.5px solid rgba(36,148,193,.3)', borderRadius: 8, padding: '8px 16px', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#2494C1', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0, textDecoration: 'none' }}
        >
          <Download size={13} strokeWidth={2} />
          PDF
        </a>
      ) : (
        <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: '#9CA3AF', whiteSpace: 'nowrap', flexShrink: 0 }}>Coming soon</span>
      )}
    </div>
  )
}

function BrochuresPanel() {
  const bands = [
    { bg: '#fff', eyebrow: 'Fixed Annuities', title: 'MYGA & Fixed Annuity Brochures', lede: 'Client-ready overviews for our multi-year guaranteed annuity and fixed annuity products.', items: MYGA_BROCHURES, tint: true },
    { bg: 'var(--ov-surface-tint)', eyebrow: 'Fixed Annuities with Flexibility', title: 'Flexible growth brochures', lede: 'Current Rate and Harbourview FIA — the same grouping used in the product navigation.', items: FLEX_BROCHURES, tint: true },
    { bg: 'var(--ov-navy-1000)', eyebrow: 'Fixed Indexed Annuities', title: 'FIA Brochures', lede: 'Overviews of our index-linked annuity products — clear explanations of how each product works and who it suits.', items: FIA_BROCHURES, dark: true },
  ]
  return (
    <>
      {bands.map(band => {
        const dark = !!band.dark
        return (
          <section key={band.title} style={{ background: band.bg }} className="ov-section">
            <div className="ov-container">
              <div style={{ marginBottom: 40 }}>
                <Eyebrow light={dark}>{band.eyebrow}</Eyebrow>
                <h2 style={{ ...S.h2, color: dark ? '#F2FCFF' : '#0D1F4E', marginBottom: 10 }}>{band.title}</h2>
                <p style={{ ...S.lede, color: dark ? 'rgba(242,252,255,.62)' : '#4A5568' }}>{band.lede}</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }} className="lpl-pillars-grid">
                {band.items.map(item => {
                  const url = item.docTitle ? DOWNLOAD_BY_TITLE[item.docTitle] : undefined
                  return <BrochureCard key={item.title} {...item} dark={dark} tint={band.tint} url={url} />
                })}
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}

function SpecsPanel() {
  return (
    <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
      <div className="ov-container" style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div>
          <Eyebrow>Product Spec Sheets</Eyebrow>
          <h2 style={{ ...S.h2, color: '#0D1F4E', margin: '4px 0 10px' }}>Product specification sheets</h2>
          <p style={{ ...S.lede, color: '#4A5568', marginBottom: 20 }}>
            Contract specifications for each Oceanview annuity product.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {SPEC_SHEETS.map(d => <DocRow key={d.title} title={d.title} url={d.url} />)}
          </div>
        </div>
        <div>
          <Eyebrow>Crediting Strategies</Eyebrow>
          <h2 style={{ ...S.h2, color: '#0D1F4E', margin: '4px 0 10px' }}>Strategy slip sheets</h2>
          <p style={{ ...S.lede, color: '#4A5568', marginBottom: 20 }}>
            One-page explanations of the index crediting strategies available across our FIA lineup.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {SLIP_SHEETS.map(d => <DocRow key={d.title} title={d.title} url={d.url} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

function FormsPanel() {
  return (
    <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
      <div className="ov-container" style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div>
          <Eyebrow>Disclosures &amp; General</Eyebrow>
          <h2 style={{ ...S.h2, color: '#0D1F4E', margin: '4px 0 10px' }}>Disclosures &amp; general materials</h2>
          <p style={{ ...S.lede, color: '#4A5568', marginBottom: 20 }}>
            State and product disclosure documents, plus general sales-approach materials.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {DISCLOSURES.map(d => <DocRow key={`${d.label}-${d.title}`} label={d.label} title={d.title} url={d.url} />)}
          </div>
        </div>
        <div>
          <Eyebrow>Service Forms</Eyebrow>
          <h2 style={{ ...S.h2, color: '#0D1F4E', margin: '4px 0 10px' }}>Post-issue service forms</h2>
          <p style={{ ...S.lede, color: '#4A5568', marginBottom: 20 }}>
            Forms for beneficiary changes, withdrawals, transfers, tax elections, and estate processing.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }} className="ov-downloads-grid">
            {SERVICE_FORMS.map(d => <DocRow key={d.title} title={d.title} url={d.url} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function BrochuresPage() {
  const params = getHashParams()
  const tabParam = params.get('tab')
  const productParam = params.get('product')
  const channelParam = params.get('channel')

  const [tab, setTab] = useState(VALID_TABS.includes(tabParam) ? tabParam : 'brochures')
  const initialProduct = VALID_PRODUCTS.includes(productParam) ? productParam : 'all'
  const initialChannel = VALID_CHANNELS.includes(channelParam) ? channelParam : 'all'

  const handleTabChange = (id) => {
    setTab(id)
    history.replaceState(null, '', `${window.location.pathname}#brochures?tab=${id}`)
  }

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
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,17px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '56ch' }}>
            Product brochures, specification sheets, state-specific application packages, and service forms — ready to view or download as PDF.
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
                id={`brochures-tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls={`brochures-panel-${t.id}`}
                type="button"
                className="ov-contact-tab"
                tabIndex={tab === t.id ? 0 : -1}
                onClick={() => handleTabChange(t.id)}
                onKeyDown={(e) => {
                  const idx = DOC_TABS.findIndex(x => x.id === t.id)
                  let next = null
                  if (e.key === 'ArrowRight') next = (idx + 1) % DOC_TABS.length
                  else if (e.key === 'ArrowLeft') next = (idx - 1 + DOC_TABS.length) % DOC_TABS.length
                  else if (e.key === 'Home') next = 0
                  else if (e.key === 'End') next = DOC_TABS.length - 1
                  else return
                  e.preventDefault()
                  document.getElementById(`brochures-tab-${DOC_TABS[next].id}`)?.focus()
                }}
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

      <div role="tabpanel" id={`brochures-panel-${tab}`} aria-labelledby={`brochures-tab-${tab}`} tabIndex={0}>
        {tab === 'brochures' && <BrochuresPanel />}
        {tab === 'specs' && <SpecsPanel />}
        {tab === 'applications' && (
          <section style={{ background: '#fff' }} className="ov-section">
            <div className="ov-container">
              <ApplicationsExplorer initialProduct={initialProduct} initialChannel={initialChannel} />
            </div>
          </section>
        )}
        {tab === 'forms' && <FormsPanel />}
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
