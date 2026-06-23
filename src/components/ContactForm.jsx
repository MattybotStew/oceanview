import { useState } from 'react'
import { PillMint, PillNavy } from './Buttons.jsx'
import { ChevronRight, Check } from 'lucide-react'

// ── Styles ────────────────────────────────────────────────────────────────────
const S = {
  h3:           { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(18px,1.8vw,22px)', color: '#0D1F4E', letterSpacing: '-0.015em', lineHeight: 1.2, margin: 0 },
  lede:         { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: 0 },

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

export default function ContactForm() {
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
