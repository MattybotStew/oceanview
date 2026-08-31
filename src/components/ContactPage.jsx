import { useState, useEffect } from 'react'
import { PillNavy } from './Buttons.jsx'
import {
  Phone, Mail, Printer, Building2, Clock, User,
  CreditCard, ArrowRightLeft, Globe, BookOpen,
  ExternalLink,
} from 'lucide-react'
import { Eyebrow } from './common.jsx'
import ContactForm from './ContactForm.jsx'

// ── Styles ────────────────────────────────────────────────────────────────────
const S = {
  // ── Page header (replaces hero) ──────────────────────────────────────
  pageHeaderInner: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20 },
  pageEyebrowRow:  { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 },
  pageEyebrowLine: { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  pageEyebrow:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1' },
  pageH1:          { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,62px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.08, margin: 0 },
  pageLede:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(15px,1.4vw,18px)', color: '#4A5568', lineHeight: 1.65, maxWidth: '54ch', margin: 0 },

  // ── Sticky product-style tab nav ─────────────────────────────────────
  ctNavOuter:    { background: '#fff', position: 'sticky', top: 'var(--ov-header-h, 72px)', zIndex: 50, boxShadow: '0 1px 0 #e8e5e5' },
  ctTabRow:      { display: 'flex', borderBottom: '1px solid #e8e5e5', overflowX: 'auto', WebkitOverflowScrolling: 'touch' },
  ctTab:         { flex: '1 0 0', minWidth: 140, height: 51, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px', borderTop: 'none', borderLeft: 'none', borderBottom: 'none', borderRight: '1px solid #e8e5e5', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#001F54', background: 'none', whiteSpace: 'nowrap', cursor: 'pointer', transition: 'background .15s', letterSpacing: '.01em' },
  ctTabActive:   { background: 'rgba(226,241,242,0.6)' },
  ctTabInactive: { background: 'transparent' },

  // ── Shared section ───────────────────────────────────────────────────
  sectionWhite: { background: '#fff' },
  sectionTint:  { background: 'var(--ov-surface-tint)' },

  h2:           { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  h3:           { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(18px,1.8vw,22px)', color: '#0D1F4E', letterSpacing: '-0.015em', lineHeight: 1.2, margin: 0 },
  lede:         { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: 0 },

  // ── Info cards ───────────────────────────────────────────────────────
  cardGrid:     { display: 'flex', flexDirection: 'column', gap: 16 },
  card:         { background: 'rgba(112,186,191,0.2)', border: '1px solid rgba(112,186,191,.25)', borderRadius: 16, padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', gap: 14 },
  cardTint:     { background: 'var(--ov-surface-tint-2)', border: '1px solid rgba(13,31,78,.06)', borderRadius: 16, padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', gap: 14 },
  iconTile:     { width: 44, height: 44, borderRadius: 10, background: '#fff', border: '1px solid rgba(13,31,78,.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  iconTileTint: { width: 44, height: 44, borderRadius: 10, background: 'rgba(255,255,255,.7)', border: '1px solid rgba(36,148,193,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  cardTag:      { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1' },
  cardBody:     { fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.65, margin: 0 },
  detailRow:    { display: 'flex', alignItems: 'center', gap: 10 },
  detailLabel:  { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, color: '#828282', letterSpacing: '.04em', minWidth: 48 },
  detailVal:    { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14, color: '#0D1F4E' },
  monoVal:      { fontFamily: 'var(--ov-ff-mono)', fontSize: 14, color: '#0D1F4E', letterSpacing: '.04em' },

  // ── Wire transfer block ──────────────────────────────────────────────
  wireBlock:    { background: 'rgba(255,255,255,.65)', borderRadius: 10, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 10 },
  wireRow:      { display: 'flex', gap: 16, alignItems: 'baseline', flexWrap: 'wrap' },
  wireLabel:    { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: '#828282', minWidth: 100 },
  wireVal:      { fontFamily: 'var(--ov-ff-mono)', fontWeight: 600, fontSize: 14, color: '#0D1F4E', letterSpacing: '.04em' },

  // ── Portal cards ─────────────────────────────────────────────────────
  bulletRow:    { display: 'flex', gap: 8, alignItems: 'flex-start' },
  bulletText:   { fontFamily: 'var(--ov-ff-sans)', fontSize: 13.5, color: '#4A5568', lineHeight: 1.55 },
  portalLink:   { display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#2494C1', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'none', marginTop: 4 },

  // ── Dark navy form section ───────────────────────────────────────────
  formGrid:     { display: 'grid', gridTemplateColumns: '55fr 45fr', gap: 64, alignItems: 'center' },
  formLeft:     { display: 'flex', flexDirection: 'column', gap: 28 },
  formRight:    { minWidth: 0 },
  darkEyebrowRow:  { display: 'flex', alignItems: 'center', gap: 6 },
  darkEyebrowLine: { width: 18, height: 1, background: 'rgba(112,186,191,.5)', flexShrink: 0 },
  darkEyebrow:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#70BABF' },
  darkH2:          { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px,3.4vw,44px)', color: '#F2FCFF', letterSpacing: '-0.025em', lineHeight: 1.1, margin: 0 },
  darkBody:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: 'rgba(242,252,255,0.65)', lineHeight: 1.7, margin: 0 },
  darkDetailRow:   { display: 'flex', flexDirection: 'row', gap: 40, flexWrap: 'wrap', marginTop: 4 },
  darkDetailItem:  { display: 'flex', flexDirection: 'column', gap: 2 },
  darkDetailLabel: { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#70BABF' },
  darkDetailVal:   { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 15, color: '#F2FCFF' },

  // ── Form card ────────────────────────────────────────────────────────
  formWrap:     { background: '#fff', borderRadius: 20, padding: 'clamp(28px,3vw,40px)', boxShadow: '0 12px 64px rgba(0,0,0,.28)' },
}

// ── Check icon ────────────────────────────────────────────────────────────────
const TICK = (
  <svg width="8" height="9" viewBox="0 0 8 9" fill="none" style={{ flexShrink: 0, marginTop: 4 }}>
    <path d="M1 4.5L3 6.5L7 2.5" stroke="#2494C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ── Sub-components ────────────────────────────────────────────────────────────
function ContactCard({ icon: Icon, tag, title, body, details, tint, action }) {
  const cs = tint ? S.cardTint : S.card
  const ts = tint ? S.iconTileTint : S.iconTile
  return (
    <div style={cs}>
      <div style={ts}>
        <Icon size={20} color="var(--ov-navy-500)" strokeWidth={1.75} />
      </div>
      <div>
        <div style={S.cardTag}>{tag}</div>
        <h3 style={{ ...S.h3, marginTop: 4 }}>{title}</h3>
      </div>
      {body && <p style={S.cardBody}>{body}</p>}
      {details && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {details.map((d, i) => (
            <div key={i} style={S.detailRow}>
              <span style={S.detailLabel}>{d.label}</span>
              <span style={d.mono ? S.monoVal : S.detailVal}>{d.value}</span>
            </div>
          ))}
        </div>
      )}
      {action && (
        <button
          style={S.portalLink}
          onClick={action.onClick}
          onMouseEnter={e => e.currentTarget.style.opacity = '.75'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          {action.label} <ExternalLink size={13} strokeWidth={2} />
        </button>
      )}
    </div>
  )
}

// ── Tab content panels ────────────────────────────────────────────────────────
function KeyContactsPanel() {
  return (
    <div style={S.cardGrid} className="prd-cards-grid prd-cards-3col">
      <ContactCard
        icon={Phone}
        tag="Sales Support"
        title="Sales Desk"
        body="Fastest way to get help with sales inquiries — product questions, case support, and advisor resources."
        details={[{ label: 'Phone', value: '1-833-656-7455' }]}
      />
      <ContactCard
        icon={Clock}
        tag="Policyholder Service"
        title="Customer Service"
        body="Policy questions, contract changes, withdrawals, and account support."
        details={[
          { label: 'Phone', value: '1-888-295-3815' },
          { label: 'Prompt', value: 'Option 2 → Option 1' },
          { label: 'Hours', value: 'Mon–Fri 8am–6pm EST' },
          { label: 'Fax', value: '1-888-417-3702' },
        ]}
      />
      <ContactCard
        icon={Mail}
        tag="New Business"
        title="New Business Department"
        body="Application submission, NIGO resolutions, and in-force policy inquiries."
        details={[
          { label: 'Phone', value: '1-888-295-3815' },
          { label: 'Fax', value: '1-888-417-3702' },
        ]}
        action={{ label: 'Submit via Agent Portal', onClick: () => window.open('https://professionals.oceanview.mccamish.com/agentportal#/login', '_blank') }}
      />
      <ContactCard
        icon={User}
        tag="IMO Support"
        title="IMO Relationship Support"
        body="Dedicated relationship support for IMO partners and marketing organizations."
        details={[
          { label: 'Contact', value: 'Jack' },
          { label: 'Phone', value: '720-679-9650' },
        ]}
        tint
      />
      <ContactCard
        icon={Phone}
        tag="Individual Planning"
        title="Planning Support for Individuals"
        body="Speak with a licensed advisor to learn more about annuity solutions and retirement planning options."
        details={[{ label: 'Phone', value: '1-855-457-1579' }]}
        tint
      />
      <ContactCard
        icon={Building2}
        tag="Headquarters"
        title="Corporate Address"
        body="Oceanview Life and Annuity Company"
        details={[
          { label: 'Address', value: '1331 17th St., Suite 1050' },
          { label: '', value: 'Denver, CO 80202' },
        ]}
        tint
      />
    </div>
  )
}

function PaymentPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }} className="prd-cards-grid prd-cards-2col">
      <div style={S.card}>
        <div style={S.iconTile}>
          <CreditCard size={20} color="var(--ov-navy-500)" strokeWidth={1.75} />
        </div>
        <div>
          <div style={S.cardTag}>Check Payments</div>
          <h3 style={{ ...S.h3, marginTop: 4 }}>Mailing a Check</h3>
        </div>
        <p style={S.cardBody}>Make all checks payable to Oceanview Life and Annuity Company. Include the policy or application number on the memo line.</p>
        <div style={S.wireBlock}>
          <div style={S.wireRow}>
            <span style={S.wireLabel}>Payable to</span>
            <span style={{ ...S.wireVal, fontFamily: 'var(--ov-ff-sans)' }}>Oceanview Life and Annuity Company</span>
          </div>
        </div>
      </div>

      <div style={S.card}>
        <div style={S.iconTile}>
          <ArrowRightLeft size={20} color="var(--ov-navy-500)" strokeWidth={1.75} />
        </div>
        <div>
          <div style={S.cardTag}>Wire Transfers</div>
          <h3 style={{ ...S.h3, marginTop: 4 }}>Wire Transfer Details</h3>
        </div>
        <p style={S.cardBody}>Use the details below when initiating a wire transfer. Include the policy or application number in the wire memo field.</p>
        <div style={S.wireBlock}>
          {[
            { label: 'Bank', value: 'Fifth Third Bank' },
            { label: 'ABA', value: '042000314', mono: true },
            { label: 'Account #', value: '7435324400', mono: true },
            { label: 'Address', value: '38 Fountain Square Plaza' },
            { label: '', value: 'Cincinnati, OH 45202' },
          ].map((r, i) => (
            <div key={i} style={S.wireRow}>
              <span style={S.wireLabel}>{r.label}</span>
              <span style={r.mono ? S.wireVal : { ...S.wireVal, fontFamily: 'var(--ov-ff-sans)', fontWeight: 400 }}>{r.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PortalsPanel() {
  const items = [
    {
      icon: Globe,
      tag: 'For Agents & Advisors',
      title: 'Agent Portal',
      body: 'Your all-in-one hub for managing your Oceanview business.',
      bullets: ['Submit new applications', 'Track case status', 'Access commission statements', 'Download marketing materials'],
      href: 'https://professionals.oceanview.mccamish.com/agentportal#/login',
      cta: 'Log in to Agent Portal',
    },
    {
      icon: User,
      tag: 'For Policyholders',
      title: 'Client Portal',
      body: 'Self-service tools for existing Oceanview policyholders.',
      bullets: ['View policy information', 'Make premium payments', 'Update beneficiary designations', 'Download policy documents'],
      href: 'https://customers.oceanview.mccamish.com/SelfServicePortal/#/login',
      cta: 'Log in to Client Portal',
    },
    {
      icon: BookOpen,
      tag: 'Sales Library',
      title: 'Resource Library',
      body: 'Marketing and product materials for financial professionals.',
      bullets: ['Product guides and brochures', 'Advisor presentations', 'Training videos', 'Current rate sheets'],
      route: 'sales-tools',
      cta: 'Browse Sales Tools',
    },
  ]

  return (
    <div style={S.cardGrid} className="prd-cards-grid prd-cards-3col">
      {items.map((item) => (
        <div key={item.title} style={S.card}>
          <div style={S.iconTile}>
            <item.icon size={20} color="var(--ov-navy-500)" strokeWidth={1.75} />
          </div>
          <div>
            <div style={S.cardTag}>{item.tag}</div>
            <h3 style={{ ...S.h3, marginTop: 4 }}>{item.title}</h3>
          </div>
          <p style={S.cardBody}>{item.body}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {item.bullets.map((b, i) => (
              <div key={i} style={S.bulletRow}>{TICK}<span style={S.bulletText}>{b}</span></div>
            ))}
          </div>
          <button
            style={{ ...S.portalLink, marginTop: 4 }}
            onClick={() => item.href ? window.open(item.href, '_blank') : (window.location.hash = item.route)}
            onMouseEnter={e => e.currentTarget.style.opacity = '.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            {item.cta} <ExternalLink size={13} strokeWidth={2} />
          </button>
        </div>
      ))}
    </div>
  )
}

function FormsPanel() {
  const categories = [
    {
      tag: 'Applications',
      title: 'Application Forms',
      body: 'New business and premium funding forms for all Oceanview annuity products.',
      bullets: ['New annuity applications', '1035 exchange forms', 'IRA rollover and transfer requests', 'Beneficiary designation forms'],
    },
    {
      tag: 'Agent Guides',
      title: 'Agent & Compliance Materials',
      body: 'Reference materials for appointed agents to support client-facing conversations.',
      bullets: ['Product comparison guides', 'Underwriting guidelines', 'Commission schedules', 'Compliance and suitability materials'],
    },
    {
      tag: 'Policy Service',
      title: 'In-Force Policy Forms',
      body: 'Forms for changes, requests, and transactions on existing policies.',
      bullets: ['Partial withdrawal requests', 'Systematic withdrawal setup', 'Owner and beneficiary changes', 'Surrender and settlement forms'],
    },
  ]
  return (
    <div style={S.cardGrid} className="prd-cards-grid prd-cards-3col">
      {categories.map((c) => (
        <div key={c.title} style={S.card}>
          <div style={S.iconTile}>
            <BookOpen size={20} color="var(--ov-navy-500)" strokeWidth={1.75} />
          </div>
          <div>
            <div style={S.cardTag}>{c.tag}</div>
            <h3 style={{ ...S.h3, marginTop: 4 }}>{c.title}</h3>
          </div>
          <p style={S.cardBody}>{c.body}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {c.bullets.map((b, i) => (
              <div key={i} style={S.bulletRow}>{TICK}<span style={S.bulletText}>{b}</span></div>
            ))}
          </div>
          <button
            style={{ ...S.portalLink, marginTop: 4 }}
            onClick={() => { window.location.hash = 'downloads' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Go to Downloads <ExternalLink size={13} strokeWidth={2} />
          </button>
        </div>
      ))}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
const TABS = [
  { id: 'contacts',  label: 'Key Contacts' },
  { id: 'payments',  label: 'Payment & Transfers' },
  { id: 'portals',   label: 'Portals & Online Access' },
  { id: 'forms',     label: 'Forms & Resources' },
]

function getTabFromHash() {
  const hash = window.location.hash;
  const match = hash.match(/[?&]tab=([^&]+)/);
  return match ? match[1] : null;
}

const VALID_TABS = ['contacts', 'payments', 'portals', 'forms'];

export default function ContactPage() {
  const initialTab = getTabFromHash();
  const [activeTab, setActiveTab] = useState(initialTab && VALID_TABS.includes(initialTab) ? initialTab : 'contacts');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    history.replaceState(null, '', `${window.location.pathname}#contact?tab=${tabId}`);
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main>

      {/* ── Page header ─────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: 'clamp(72px,9vw,112px) 0 48px' }}>
        <div className="ov-container">
          <div style={S.pageHeaderInner}>
            <div style={S.pageEyebrowRow}>
              <div style={S.pageEyebrowLine} />
              <span style={S.pageEyebrow}>Contact Us</span>
            </div>
            <h1 style={S.pageH1}>We're here to help.</h1>
            <p style={S.pageLede}>
              Reach our sales desk, customer service, or new business team — or find the tools you need below.
            </p>
            <div style={{ marginTop: 8 }}>
              <PillNavy onClick={scrollToForm}>Send us a message</PillNavy>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky tab nav ──────────────────────────────────────────────── */}
      <div style={S.ctNavOuter}>
        <div className="ov-container">
          <div role="tablist" aria-label="Contact sections" style={S.ctTabRow}>
            {TABS.map(t => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={activeTab === t.id}
                aria-controls={`tabpanel-${t.id}`}
                className="ov-contact-tab"
                style={{ ...S.ctTab, ...(activeTab === t.id ? S.ctTabActive : S.ctTabInactive) }}
                tabIndex={activeTab === t.id ? 0 : -1}
                onClick={() => handleTabChange(t.id)}
                onKeyDown={(e) => {
                  const idx = TABS.findIndex(tab => tab.id === t.id)
                  let next = null
                  if (e.key === 'ArrowRight') next = (idx + 1) % TABS.length
                  else if (e.key === 'ArrowLeft') next = (idx - 1 + TABS.length) % TABS.length
                  else if (e.key === 'Home') next = 0
                  else if (e.key === 'End') next = TABS.length - 1
                  else return
                  e.preventDefault()
                  document.getElementById(`tab-${TABS[next].id}`)?.focus()
                }}
                onMouseEnter={e => { if (activeTab !== t.id) e.currentTarget.style.background = 'rgba(226,241,242,0.35)' }}
                onMouseLeave={e => { if (activeTab !== t.id) e.currentTarget.style.background = 'transparent' }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab content ─────────────────────────────────────────────────── */}
      <section
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
        style={{ ...S.sectionWhite, outline: 'none' }}
        className="ov-section"
      >
        <div className="ov-container">
          {activeTab === 'contacts' && <KeyContactsPanel />}
          {activeTab === 'payments' && <PaymentPanel />}
          {activeTab === 'portals'  && <PortalsPanel />}
          {activeTab === 'forms'    && <FormsPanel />}
        </div>
      </section>

      {/* ── Inquiry form — dark navy ─────────────────────────────────────── */}
      <section id="contact-form" style={{ background: '#001040' }} className="ov-section">
        <div className="ov-container">
          <div style={S.formGrid} className="ct-form-grid">

            {/* Left — copy */}
            <div style={S.formLeft}>
              <div style={S.darkEyebrowRow}>
                <div style={S.darkEyebrowLine} />
                <span style={S.darkEyebrow}>General Inquiry</span>
              </div>
              <h2 style={S.darkH2}>Send us a message.</h2>
              <p style={S.darkBody}>
                Not sure who to contact? Fill out the form and we'll route your inquiry to the right team — typically within one business day.
              </p>
              <div style={S.darkDetailRow}>
                {[
                  { label: 'Sales Desk',        value: '1-833-656-7455' },
                  { label: 'Customer Service',  value: '1-888-295-3815' },
                  { label: 'New Business Fax',  value: '1-888-417-3702' },
                ].map(d => (
                  <div key={d.label} style={S.darkDetailItem}>
                    <span style={S.darkDetailLabel}>{d.label}</span>
                    <span style={S.darkDetailVal}>{d.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form card */}
            <div style={S.formRight}>
              <div style={S.formWrap}>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
