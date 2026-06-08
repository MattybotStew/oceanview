import { useState } from 'react'
import PageHero from './PageHero.jsx'
import CTABanner from './CTABanner.jsx'
import { ChevronDown } from 'lucide-react'
import { Eyebrow } from './common.jsx'

// ── Styles ────────────────────────────────────────────────────────────────────
const S = {
  sectionWhite: { background: '#fff' },
  sectionTint:  { background: 'var(--ov-surface-tint)' },

  introWrap:   { display: 'flex', flexDirection: 'column', gap: 12, maxWidth: '64ch', marginBottom: 56 },
  h2:          { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(26px,3vw,40px)', color: '#0D1F4E', letterSpacing: '-0.025em', lineHeight: 1.12, margin: 0 },
  lede:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 16, color: '#4A5568', lineHeight: 1.7, margin: 0 },

  // Category card
  catCard:     { background: '#fff', border: '1px solid rgba(13,31,78,.08)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(13,31,78,.04)' },
  catHeader:   { padding: '22px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', userSelect: 'none', gap: 16 },
  catTitle:    { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(17px,1.6vw,20px)', color: '#0D1F4E', letterSpacing: '-0.01em', lineHeight: 1.2, margin: 0 },
  catCount:    { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '.08em', color: '#2494C1', background: 'rgba(36,148,193,.1)', borderRadius: 100, padding: '3px 10px', flexShrink: 0 },
  catBody:     { borderTop: '1px solid rgba(13,31,78,.07)' },

  // FAQ item
  faqItem:     { borderBottom: '1px solid rgba(13,31,78,.07)' },
  faqQ:        { padding: '18px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, cursor: 'pointer', userSelect: 'none' },
  faqQText:    { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14, color: '#0D1F4E', lineHeight: 1.45, margin: 0, flex: 1 },
  faqA:        { padding: '0 28px 20px 28px' },
  faqAText:    { fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.7, margin: 0 },

  // Contact cards
  contactGrid: { display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 },
  contactCard: { background: 'var(--ov-surface-tint-2)', borderRadius: 12, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 4 },
  contactLabel:{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#2494C1' },
  contactVal:  { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 20, color: '#0D1F4E', letterSpacing: '-0.01em' },
  contactSub:  { fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#4A5568' },

}

// ── FAQ data ──────────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    title: 'Agent Appointment & Licensing',
    items: [
      { q: 'What types of products does Oceanview sell?', a: 'Oceanview sells only annuity products — Fixed Indexed Annuities (FIAs) and Multi-Year Guaranteed Annuities (MYGAs). No life insurance or other product lines.' },
      { q: 'When is a background check initiated?', a: 'Background checks are initiated upon receipt of contracting paperwork.' },
      { q: 'Are there state-specific appointment requirements?', a: 'Yes. Pennsylvania requires a pre-appointment prior to solicitation. Oceanview is not approved for sale in New York or Vermont. Non-qualified policies are not accepted in Colorado.' },
      { q: 'Is dual contracting permitted?', a: 'No. Dual contracting is not permitted with Oceanview.' },
      { q: 'What is required on applications?', a: 'An Agent Producer Number (NPN) is required on all applications.' },
    ],
  },
  {
    title: 'Commission Structure',
    items: [
      { q: 'How and when are commissions paid?', a: 'Commissions are paid daily via Electronic Funds Transfer (EFT), with a minimum threshold of $5. Processing typically takes 2–3 business days.' },
      { q: 'Can commissions be assigned to an agency?', a: 'Yes. Commission assignments are allowed — agencies can receive payments on behalf of agents.' },
      { q: 'How do I access commission statements?', a: 'Commission statements are available through the Agent Portal at professionals.oceanview.mccamish.com/agentportal.' },
      { q: 'Who do I contact about commissions?', a: 'The Commissions Department can be reached at 1-888-295-3815.' },
    ],
  },
  {
    title: 'Underwriting & Compliance',
    items: [
      { q: 'How often is AML training required?', a: 'AML training is required every 2 years, per state requirements. All CE requirements and AML must be current prior to appointment.' },
      { q: 'Where is product training provided?', a: 'Product training is provided through RegEd. Oceanview accepts all AML education providers.' },
    ],
  },
  {
    title: 'Contract Features',
    items: [
      { q: 'Who controls the contract rights?', a: 'Contracts are owner-driven — the owner controls all contract rights.' },
      { q: 'What is the free-look period?', a: 'The free-look period is typically 20 days from contract delivery, and 30 days for replacement contracts.' },
      { q: 'When does a contract become effective?', a: 'The effective date is when the application is approved and funds are received. For MYGAs, the effective date is when final funds are received.' },
      { q: 'When are FIAs issued?', a: 'FIAs are issued only on Thursdays.' },
      { q: 'Do clients receive any benefit during leap years?', a: 'Yes. Clients receive extra interest credited during leap years.' },
    ],
  },
  {
    title: 'Ownership & Beneficiaries',
    items: [
      { q: 'Is non-spousal joint ownership allowed?', a: 'Non-spousal joint ownership is permitted on a case-by-case review basis.' },
      { q: 'Can non-natural persons own a contract?', a: 'Yes. Nonprofits, trusts, 501(c)(3)s, and corporations may own contracts. A Trust Verification Form is required for trust-owned contracts.' },
      { q: 'Are Power of Attorney arrangements accepted?', a: 'Yes. Powers of Attorney are reviewed by Legal/Compliance and a copy is required on file.' },
      { q: 'Are per stirpes designations allowed?', a: 'Yes. Per stirpes beneficiary designations are permitted.' },
      { q: 'Can beneficiaries annuitize a contract?', a: 'Yes. Beneficiaries may annuitize contracts upon the owner\'s death.' },
    ],
  },
  {
    title: 'Premium & Funding',
    items: [
      { q: 'Is there a maximum premium without approval?', a: 'The standard maximum is $1,000,000. Amounts exceeding this require an exception form.' },
      { q: 'How long is the rate lock period?', a: 'MYGA rate locks are valid for 60 days from the application sign date. FIA rate locks are valid for 66 days. If a rate decreases and 14 or more calendar days have passed, a new application is required.' },
      { q: 'Are partial 1035 exchanges accepted?', a: 'Yes. Partial 1035 exchanges are accepted.' },
      { q: 'What funding methods are accepted?', a: 'Wire transfers are accepted. Third-party checks are not accepted. P.O. Boxes cannot be used as the resident address.' },
    ],
  },
  {
    title: 'IRA & Tax-Qualified Plans',
    items: [
      { q: 'Does Oceanview administer SIMPLE or SEP IRAs?', a: 'No. SIMPLE and SEP IRAs are not administered, but funds from these plan types are accepted.' },
      { q: 'Are inherited or beneficiary IRAs allowed?', a: 'Yes. Both spousal and non-spousal inherited/beneficiary IRAs are allowed.' },
      { q: 'Are Roth Conversions accepted?', a: 'Yes. Roth Conversions are accepted and require a specific form.' },
      { q: 'Are there non-qualified stretch options?', a: 'Yes. Non-Qualified Stretch contracts are offered. Tax consultation is recommended for complex arrangements.' },
    ],
  },
  {
    title: 'Withdrawals & Maturity',
    items: [
      { q: 'Are withdrawals allowed in the first year?', a: 'Partial withdrawals in the first contract year are subject to surrender charges and a Market Value Adjustment (MVA). This also applies to RMD withdrawals in the first year.' },
      { q: 'When can interest-only withdrawals be taken?', a: 'Interest-only withdrawals are allowed after the first contract anniversary.' },
      { q: 'What free withdrawal amount is available annually?', a: 'A 10% free withdrawal is available each contract year without surrender charges.' },
      { q: 'What systematic withdrawal options are available?', a: 'Systematic withdrawals can be set up on a monthly, quarterly, semi-annual, or annual basis. The minimum amount is $250.' },
      { q: 'When do contracts mature?', a: 'MYGA contracts mature on January 1 following the owner\'s age 95, or at the end of the guarantee period, whichever is later. FIA contracts mature on the contract anniversary following age 100.' },
    ],
  },
  {
    title: 'Renewal Process',
    items: [
      { q: 'When is a renewal notice sent?', a: 'Oceanview sends a renewal notice 40 days prior to the end of the guarantee period.' },
      { q: 'What are the renewal options?', a: 'At renewal, the owner may: renew for the same term, select a new term, surrender the contract, transfer funds, or elect settlement. No new paperwork is required for same-period renewals, and the contract number remains unchanged.' },
      { q: 'Is a free withdrawal available during renewal?', a: 'Yes. A 10% free withdrawal is available during the first year of any renewed guarantee period.' },
      { q: 'Can a contract be surrendered without charges during renewal?', a: 'Yes. Surrender is allowed during the renewal window without surrender charges or MVA.' },
      { q: 'What happens if no renewal decision is made?', a: 'If no action is taken, the contract automatically renews for the same term.' },
    ],
  },
  {
    title: 'New Business Submission',
    items: [
      { q: 'How can new business be submitted?', a: 'New business can be submitted via fax (1-888-417-3702), through the Agent Portal, or by overnight or regular mail.' },
      { q: 'How are NIGO (not-in-good-order) items handled?', a: 'NIGO letters are sent via email every 10 days. Return options for missing items include fax, Agent Portal, or mail.' },
      { q: 'Is a policy delivery receipt required?', a: 'Yes. A policy delivery receipt is required.' },
    ],
  },
]

const CONTACTS = [
  { label: 'New Business & Commissions', value: '1-888-295-3815', sub: 'Mon–Fri, business hours' },
  { label: 'Sales & Marketing', value: '1-833-656-7455', sub: 'Advisor support line' },
  { label: 'New Business Fax', value: '1-888-417-3702', sub: 'Document submission' },
]

// ── Components ────────────────────────────────────────────────────────────────
function FAQCategory({ title, items }) {
  const [open, setOpen] = useState(false)
  const [openItems, setOpenItems] = useState({})

  const toggle = (i) => setOpenItems(prev => ({ ...prev, [i]: !prev[i] }))

  return (
    <div style={S.catCard}>
      <div
        style={S.catHeader}
        onClick={() => setOpen(o => !o)}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(13,31,78,.025)'}
        onMouseLeave={e => e.currentTarget.style.background = ''}
      >
        <h3 style={S.catTitle}>{title}</h3>
        <span style={S.catCount}>{items.length} questions</span>
        <ChevronDown
          size={18}
          color="#4A5568"
          strokeWidth={2}
          style={{ flexShrink: 0, transition: 'transform .2s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </div>
      {open && (
        <div style={S.catBody}>
          {items.map((item, i) => (
            <div key={i} style={{ ...S.faqItem, borderBottom: i === items.length - 1 ? 'none' : S.faqItem.borderBottom }}>
              <div
                style={S.faqQ}
                onClick={() => toggle(i)}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(13,31,78,.02)'}
                onMouseLeave={e => e.currentTarget.style.background = ''}
              >
                <p style={S.faqQText}>{item.q}</p>
                <ChevronDown
                  size={16}
                  color="#2494C1"
                  strokeWidth={2}
                  style={{ flexShrink: 0, transition: 'transform .2s ease', transform: openItems[i] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </div>
              {openItems[i] && (
                <div style={S.faqA}>
                  <p style={S.faqAText}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AgentFAQsPage() {
  return (
    <main>
      <PageHero
        image="assets/lighthouse.jpg"
        eyebrow="For Professionals"
        title="Agent" titleAccent="FAQs."
        subtitle="Answers to the most common questions about contracting, commissions, products, and new business."
      />

      {/* ── FAQ sections ───────────────────────────────────────────────── */}
      <section style={S.sectionWhite} className="ov-section">
        <div className="ov-container">
          <div style={S.introWrap}>
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <h2 style={S.h2}>Everything you need to work with Oceanview.</h2>
            <p style={S.lede}>
              Browse by category or expand all sections to find answers about agent
              appointment, commission structure, underwriting, contracts, and more.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {CATEGORIES.map((cat) => (
              <FAQCategory key={cat.title} title={cat.title} items={cat.items} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact info ───────────────────────────────────────────────── */}
      <section style={S.sectionTint} className="ov-section">
        <div className="ov-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: '52ch', marginBottom: 32 }}>
            <Eyebrow>Contact</Eyebrow>
            <h2 style={S.h2}>Still have questions?</h2>
            <p style={S.lede}>Reach our team directly — we're here to support your business.</p>
          </div>
          <div style={S.contactGrid} className="prd-cards-grid prd-cards-3col">
            {CONTACTS.map((c) => (
              <div key={c.label} style={S.contactCard}>
                <div style={S.contactLabel}>{c.label}</div>
                <div style={S.contactVal}>{c.value}</div>
                <div style={S.contactSub}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Agent Portal"
            title="Ready to get"
            titleAccent="to work?"
            body="Manage clients, submit applications, and download commission statements — all in one place."
            cta="Agent Portal"
            onClick={() => window.open('https://professionals.oceanview.mccamish.com/agentportal#/login', '_blank')}
          />
        </div>
      </section>
    </main>
  )
}
