import PageHero from './PageHero.jsx'
import { PillMint } from './Buttons.jsx'

const S = {
  section: { background: 'var(--ov-surface-tint)', padding: '80px 0 100px' },
  inner:   { maxWidth: 720, margin: '0 auto', textAlign: 'center' },
  card: {
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 24px 60px 0 rgba(13,31,78,0.10)',
    padding: '56px 48px',
    marginTop: 48,
  },
  lockIcon: {
    width: 56, height: 56,
    background: 'rgba(112,186,191,0.12)',
    borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 24px',
  },
  heading: {
    fontFamily: 'var(--ov-ff-display)',
    fontWeight: 400,
    fontSize: 'clamp(22px,2.5vw,30px)',
    color: 'var(--ov-navy-900)',
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
    margin: '0 0 12px',
  },
  body: {
    fontFamily: 'var(--ov-ff-sans)',
    fontSize: 15,
    lineHeight: 1.65,
    color: 'var(--ov-grey-600)',
    margin: '0 0 32px',
    maxWidth: '40ch',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  divider: { height: 1, background: 'rgba(13,31,78,.08)', margin: '40px 0' },
  helpText: {
    fontFamily: 'var(--ov-ff-sans)',
    fontSize: 13,
    color: 'var(--ov-grey-500)',
    lineHeight: 1.6,
  },
  helpLink: { color: 'var(--ov-teal-600)', fontWeight: 500, textDecoration: 'none' },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 24,
    marginTop: 48,
    textAlign: 'left',
  },
  featureCard: {
    background: '#fff',
    borderRadius: 12,
    padding: '24px 20px',
    border: '1px solid var(--ov-border-faint)',
  },
  featureTitle: {
    fontFamily: 'var(--ov-ff-sans)',
    fontWeight: 600,
    fontSize: 14,
    color: 'var(--ov-navy-900)',
    margin: '0 0 6px',
  },
  featureBody: {
    fontFamily: 'var(--ov-ff-sans)',
    fontSize: 13,
    lineHeight: 1.6,
    color: 'var(--ov-grey-600)',
    margin: 0,
  },
}

const FEATURES = [
  { title: 'Client Accounts',   body: 'View policy details, account values, and beneficiary information for all your clients.' },
  { title: 'New Business',      body: 'Submit applications, track pending cases, and manage e-signatures in one place.' },
  { title: 'Sales Materials',   body: 'Access current rate sheets, illustrations, and approved marketing materials.' },
]

export default function AgentPortalPage() {
  return (
    <main>
      <PageHero
        eyebrow="For Professionals"
        title="Agent Portal"
        titleAccent="Secure access for licensed agents."
        image="assets/lighthouse.jpg"
      />

      <section style={S.section}>
        <div className="ov-container">
          <div style={S.inner}>
            <div style={S.card}>
              <div style={S.lockIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="#2494C1" strokeWidth="1.75"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#2494C1" strokeWidth="1.75" strokeLinecap="round"/>
                  <circle cx="12" cy="16" r="1.5" fill="#2494C1"/>
                </svg>
              </div>
              <h2 style={S.heading}>Sign in to your agent dashboard</h2>
              <p style={S.body}>Manage client accounts, submit new business, and access agent resources — all in one secure location.</p>
              <PillMint hero onClick={() => window.open('https://portal.oceanviewlife.com', '_blank')}>
                Log In to Agent Portal
              </PillMint>
              <div style={S.divider} />
              <p style={S.helpText}>
                Need access? Contact your sales desk at{' '}
                <a href="mailto:info@oceanviewlife.com" style={S.helpLink}>info@oceanviewlife.com</a>
                {' '}or call <a href="tel:18003003307" style={S.helpLink}>1-800-300-3307</a>.
              </p>
            </div>

            <div style={S.featureGrid}>
              {FEATURES.map(f => (
                <div key={f.title} style={S.featureCard}>
                  <p style={S.featureTitle}>{f.title}</p>
                  <p style={S.featureBody}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
