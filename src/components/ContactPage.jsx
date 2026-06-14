import { useState } from 'react'
import { PillMint, PillNavy } from './Buttons.jsx'
import {
  Phone, Mail, Printer, Building2, Clock, User,
  CreditCard, ArrowRightLeft, Globe, BookOpen,
  ExternalLink, ChevronRight, Check,
} from 'lucide-react'
import { Eyebrow } from './common.jsx'

// ── Styles ────────────────────────────────────────────────────────────────────
const S = {
  // ── Page header (replaces hero) ──────────────────────────────────────
  pageHeaderInner: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20 },
  pageEyebrowRow:  { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 },
  pageEyebrowLine: { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  pageEyebrow:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1' },
  pageH1:          { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(36px,5vw,64px)', color: '#0D1F4E', letterSpacing: '-0.03em', lineHeight: 1.08, margin: 0 },
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
  formTitle:    { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(22px,2.4vw,32px)', color: '#0D1F4E', letterSpacing: '-0.02em', lineHeight: 1.15, margin: 0 },
  stepIndicator:{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 },
  stepDot:      { width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 12 },
  stepLine:     { flex: 1, height: 1, background: 'rgba(13,31,78,.12)', maxWidth: 40 },

  fieldGroup:   { display: 'flex', flexDirection: 'column', gap: 20 },
  field:        { display: 'flex', flexDirection: 'column', gap: 6 },
  label:        { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase', color: '#4A5568' },
  input:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 16, color: '#0D1F4E', border: '1px solid rgba(13,31,78,.15)', borderRadius: 10, padding: '13px 16px', outline: 'none', width: '100%', boxSizing: 'border-box', transition: 'border-color .15s, box-shadow .15s', background: '#fff' },
  select:       { fontFamily: 'var(--ov-ff-sans)', fontSize: 16, color: '#0D1F4E', border: '1px solid rgba(13,31,78,.15)', borderRadius: 10, padding: '13px 16px', outline: 'none', width: '100%', boxSizing: 'border-box', background: '#fff', cursor: 'pointer', appearance: 'none', WebkitAppearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%234A5568' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' },
  textarea:     { fontFamily: 'var(--ov-ff-sans)', fontSize: 16, color: '#0D1F4E', border: '1px solid rgba(13,31,78,.15)', borderRadius: 10, padding: '13px 16px', outline: 'none', width: '100%', boxSizing: 'border-box', transition: 'border-color .15s, box-shadow .15s', resize: 'vertical', minHeight: 120 },
  inlineNote:   { background: 'rgba(36,148,193,.08)', border: '1px solid rgba(36,148,193,.2)', borderRadius: 10, padding: '14px 18px', fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#0D1F4E', lineHeight: 1.6 },
  checkRow:     { display: 'flex', gap: 12, alignItems: 'flex-start' },
  checkLabel:   { fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#4A5568', lineHeight: 1.55 },
  fieldRow2:    { display: 'flex', gap: 16, flexWrap: 'wrap' },
  successWrap:  { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16, padding: '32px 0' },
  successIcon:  { width: 56, height: 56, borderRadius: '50%', background: 'rgba(36,148,193,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' },
}

// ── US States ──────────────────────────────────────────────────────────────────
const US_STATES = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

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

// ── Progressive inquiry form ──────────────────────────────────────────────────
const INQUIRY_TYPES = [
  'Prospective Consumer',
  'Current Policy Holder',
  'Agent / Advisor',
  'Product Marketer',
  'Other',
]

const HEARD_OPTIONS = ['Google', 'Facebook', 'LinkedIn', 'Referral from Advisor', 'Referral from Friend', 'Other']

const AGENT_TYPES = new Set(['Agent / Advisor', 'Product Marketer'])

function StepDot({ n, active, done }) {
  const bg = done ? '#2494C1' : active ? '#0D1F4E' : 'rgba(13,31,78,.12)'
  const color = done || active ? '#fff' : '#828282'
  return (
    <div style={{ ...S.stepDot, background: bg, color }}>
      {done ? <Check size={13} strokeWidth={2.5} /> : n}
    </div>
  )
}

function InquiryForm() {
  const [step, setStep] = useState(1)
  const [inquiryType, setInquiryType] = useState('')
  const [isPolicyHolder, setIsPolicyHolder] = useState('')
  const [isAppointed, setIsAppointed] = useState('')
  const [npn, setNpn] = useState('')
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', state: '', zip: '', message: '', heardAbout: '', emailConsent: false })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const isAgent = AGENT_TYPES.has(inquiryType)
  const showPolicyHolderQ = inquiryType && !isAgent && inquiryType !== 'Other'
  const showAppointedQ = isAgent
  const showNPN = isAgent && isAppointed === 'yes'
  const policyHolderBlock = showPolicyHolderQ && isPolicyHolder === 'yes'

  const canContinue = inquiryType && (
    policyHolderBlock ? false :
    showPolicyHolderQ ? isPolicyHolder !== '' :
    showAppointedQ ? (isAppointed !== '' && (isAppointed === 'no' || (isAppointed === 'yes' && npn.length === 7))) :
    true
  )

  const setField = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const focusStyle = (name) => focusedField === name
    ? { borderColor: '#2494C1', boxShadow: '0 0 0 3px rgba(36,148,193,.12)' }
    : {}

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={S.successWrap}>
        <div style={S.successIcon}>
          <Check size={26} color="#2494C1" strokeWidth={2.5} />
        </div>
        <h3 style={{ ...S.h3, fontSize: 'clamp(20px,2vw,26px)' }}>Message received.</h3>
        <p style={{ ...S.lede, maxWidth: '44ch', textAlign: 'center' }}>
          Thank you for reaching out. A member of our team will follow up with you shortly.
        </p>
        <PillMint onClick={() => { setSubmitted(false); setStep(1); setInquiryType(''); setIsPolicyHolder(''); setIsAppointed(''); setNpn(''); setForm({ firstName: '', lastName: '', email: '', phone: '', state: '', zip: '', message: '', heardAbout: '', emailConsent: false }) }}>
          Submit Another Inquiry
        </PillMint>
      </div>
    )
  }

  return (
    <div>
      <div style={S.stepIndicator}>
        <StepDot n={1} active={step === 1} done={step > 1} />
        <div style={S.stepLine} />
        <StepDot n={2} active={step === 2} done={false} />
        <div style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#828282', marginLeft: 8 }}>
          Step {step} of 2 — {step === 1 ? 'Tell us about yourself' : 'Your contact information'}
        </div>
      </div>

      {step === 1 && (
        <div style={S.fieldGroup}>
          <div style={S.field}>
            <label style={S.label}>What brings you here? <span style={{ color: '#2494C1' }}>*</span></label>
            <select
              style={{ ...S.select, ...focusStyle('type'), color: inquiryType ? '#0D1F4E' : '#828282' }}
              value={inquiryType}
              onChange={e => { setInquiryType(e.target.value); setIsPolicyHolder(''); setIsAppointed(''); setNpn('') }}
              onFocus={() => setFocusedField('type')}
              onBlur={() => setFocusedField(null)}
            >
              <option value="" disabled>Select inquiry type</option>
              {INQUIRY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          {showPolicyHolderQ && (
            <div style={S.field}>
              <label style={S.label}>Are you a current Oceanview policyholder? <span style={{ color: '#2494C1' }}>*</span></label>
              <div style={{ display: 'flex', gap: 12 }}>
                {['yes', 'no'].map(v => (
                  <button
                    key={v}
                    onClick={() => setIsPolicyHolder(v)}
                    style={{
                      flex: 1, padding: '13px 0', border: `1.5px solid ${isPolicyHolder === v ? '#2494C1' : 'rgba(13,31,78,.15)'}`,
                      borderRadius: 10, background: isPolicyHolder === v ? 'rgba(36,148,193,.06)' : '#fff',
                      fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14,
                      color: isPolicyHolder === v ? '#2494C1' : '#4A5568', cursor: 'pointer', transition: 'all .15s',
                    }}
                  >
                    {v === 'yes' ? 'Yes' : 'No'}
                  </button>
                ))}
              </div>
            </div>
          )}

          {policyHolderBlock && (
            <div style={S.inlineNote}>
              <strong style={{ color: '#0D1F4E' }}>For policy information and account support,</strong> please call our Customer Service team directly at{' '}
              <strong style={{ color: '#2494C1' }}>1-888-295-3815</strong> (Option 2 → Option 1), available Monday–Friday, 8am–6pm EST.
            </div>
          )}

          {showAppointedQ && (
            <div style={S.field}>
              <label style={S.label}>Are you currently appointed with Oceanview? <span style={{ color: '#2494C1' }}>*</span></label>
              <div style={{ display: 'flex', gap: 12 }}>
                {['yes', 'no'].map(v => (
                  <button
                    key={v}
                    onClick={() => { setIsAppointed(v); setNpn('') }}
                    style={{
                      flex: 1, padding: '13px 0', border: `1.5px solid ${isAppointed === v ? '#2494C1' : 'rgba(13,31,78,.15)'}`,
                      borderRadius: 10, background: isAppointed === v ? 'rgba(36,148,193,.06)' : '#fff',
                      fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14,
                      color: isAppointed === v ? '#2494C1' : '#4A5568', cursor: 'pointer', transition: 'all .15s',
                    }}
                  >
                    {v === 'yes' ? 'Yes' : 'No'}
                  </button>
                ))}
              </div>
            </div>
          )}

          {showNPN && (
            <div style={S.field}>
              <label style={S.label}>Your National Producer Number (NPN) <span style={{ color: '#2494C1' }}>*</span></label>
              <input
                type="text"
                inputMode="numeric"
                maxLength={7}
                placeholder="7-digit NPN"
                value={npn}
                onChange={e => setNpn(e.target.value.replace(/\D/g, '').slice(0, 7))}
                onFocus={() => setFocusedField('npn')}
                onBlur={() => setFocusedField(null)}
                style={{ ...S.input, ...focusStyle('npn'), fontFamily: 'var(--ov-ff-mono)', letterSpacing: '.08em' }}
              />
              {npn.length > 0 && npn.length < 7 && (
                <span style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#828282' }}>{7 - npn.length} more digit{7 - npn.length !== 1 ? 's' : ''} needed</span>
              )}
            </div>
          )}

          {canContinue && (
            <PillMint onClick={() => setStep(2)} style={{ alignSelf: 'flex-start', marginTop: 8 }}>
              Continue <ChevronRight size={15} style={{ marginLeft: 4, verticalAlign: 'middle' }} />
            </PillMint>
          )}
        </div>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit}>
          <div style={S.fieldGroup}>
            <div style={{ ...S.fieldRow2 }}>
              {[['firstName', 'First Name'], ['lastName', 'Last Name']].map(([k, label]) => (
                <div key={k} style={{ ...S.field, flex: 1, minWidth: 160 }}>
                  <label style={S.label}>{label} <span style={{ color: '#2494C1' }}>*</span></label>
                  <input required type="text" value={form[k]} onChange={setField(k)} onFocus={() => setFocusedField(k)} onBlur={() => setFocusedField(null)} style={{ ...S.input, ...focusStyle(k) }} />
                </div>
              ))}
            </div>

            <div style={S.fieldRow2}>
              {[['email', 'Email', 'email'], ['phone', 'Phone', 'tel']].map(([k, label, type]) => (
                <div key={k} style={{ ...S.field, flex: 1, minWidth: 160 }}>
                  <label style={S.label}>{label} <span style={{ color: '#2494C1' }}>*</span></label>
                  <input required type={type} value={form[k]} onChange={setField(k)} onFocus={() => setFocusedField(k)} onBlur={() => setFocusedField(null)} style={{ ...S.input, ...focusStyle(k) }} />
                </div>
              ))}
            </div>

            <div style={S.fieldRow2}>
              <div style={{ ...S.field, flex: 2, minWidth: 160 }}>
                <label style={S.label}>State <span style={{ color: '#2494C1' }}>*</span></label>
                <select required value={form.state} onChange={setField('state')} onFocus={() => setFocusedField('state')} onBlur={() => setFocusedField(null)} style={{ ...S.select, ...focusStyle('state'), color: form.state ? '#0D1F4E' : '#828282' }}>
                  <option value="" disabled>Select state</option>
                  {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div style={{ ...S.field, flex: 1, minWidth: 100 }}>
                <label style={S.label}>Zip Code <span style={{ color: '#2494C1' }}>*</span></label>
                <input required type="text" inputMode="numeric" maxLength={5} value={form.zip} onChange={setField('zip')} onFocus={() => setFocusedField('zip')} onBlur={() => setFocusedField(null)} style={{ ...S.input, ...focusStyle('zip') }} />
              </div>
            </div>

            <div style={S.field}>
              <label style={S.label}>Question or Comment <span style={{ color: '#2494C1' }}>*</span></label>
              <textarea required value={form.message} onChange={setField('message')} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} style={{ ...S.textarea, ...(focusedField === 'message' ? { borderColor: '#2494C1', boxShadow: '0 0 0 3px rgba(36,148,193,.12)' } : {}) }} placeholder="How can we help?" />
            </div>

            <div style={S.field}>
              <label style={S.label}>How did you hear about us?</label>
              <select value={form.heardAbout} onChange={setField('heardAbout')} onFocus={() => setFocusedField('heard')} onBlur={() => setFocusedField(null)} style={{ ...S.select, ...focusStyle('heard'), color: form.heardAbout ? '#0D1F4E' : '#828282' }}>
                <option value="">Select an option</option>
                {HEARD_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <label style={{ ...S.checkRow, cursor: 'pointer' }}>
              <input type="checkbox" checked={form.emailConsent} onChange={setField('emailConsent')} style={{ marginTop: 2, flexShrink: 0, accentColor: '#2494C1' }} />
              <span style={S.checkLabel}>
                I agree to receive communications from Oceanview Life and Annuity. I understand I can unsubscribe at any time.
              </span>
            </label>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <PillNavy type="submit">Submit Inquiry</PillNavy>
              <button type="button" onClick={() => setStep(1)} style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#828282', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                ← Back
              </button>
            </div>
          </div>
        </form>
      )}
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

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('contacts')

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main>

      {/* ── Page header ─────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: 'clamp(72px,9vw,112px) 0 0' }}>
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
                onClick={() => setActiveTab(t.id)}
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
                <InquiryForm />
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
