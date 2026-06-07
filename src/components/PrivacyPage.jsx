// PrivacyPage — Privacy Notice for Oceanview Life and Annuity Company

const S = {
  eyebrowRow:  { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 },
  eyebrowLine: { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' },
  h2:          { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(20px,2vw,28px)', color: '#0D1F4E', letterSpacing: '-0.015em', lineHeight: 1.2, margin: '0 0 16px' },
  h3:          { fontFamily: 'var(--ov-ff-sans)', fontWeight: 700, fontSize: 13, color: '#0D1F4E', letterSpacing: '.04em', margin: '24px 0 8px', textTransform: 'uppercase' },
  body:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.75, margin: '0 0 16px' },
  divider:     { height: 1, background: 'rgba(13,31,78,.08)', margin: '48px 0' },
  ul:          { fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.75, paddingLeft: 20, margin: '0 0 16px' },
}

function Section({ eyebrow, heading, children }) {
  return (
    <div>
      <div style={S.eyebrowRow}>
        <div style={S.eyebrowLine} />
        <span style={S.eyebrow}>{eyebrow}</span>
      </div>
      <h2 style={S.h2}>{heading}</h2>
      {children}
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="ov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 18, height: 1, background: '#2494C1', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' }}>Legal</span>
          </div>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px,4.5vw,56px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '0 auto 20px', maxWidth: '20ch' }}>
            Privacy Notice
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(14px,1.3vw,16px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '52ch' }}>
            Effective January 1, 2025. How Oceanview Life and Annuity Company collects, uses, and protects your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#fff', padding: '0 0 80px' }}>
        <div className="ov-container">
          <div style={{ maxWidth: 780 }}>

            <Section eyebrow="Overview" heading="Our Commitment to Your Privacy">
              <p style={S.body}>Oceanview Life and Annuity Company ("Oceanview," "we," "us," or "our") is committed to protecting the privacy and security of your personal information. This Privacy Notice describes how we collect, use, share, and protect information about individuals who visit our website, contact us, or are applicants, policyholders, or beneficiaries of our products.</p>
              <p style={S.body}>This notice applies to Oceanview Life and Annuity Company, 1331 17th St., Suite 1050, Denver, CO 80202, and its affiliates operating under the Oceanview brand.</p>
            </Section>

            <div style={S.divider} />

            <Section eyebrow="Collection" heading="Information We Collect">
              <p style={S.body}>We collect personal information from a variety of sources, including directly from you, from your financial professional, and from third parties such as consumer reporting agencies.</p>
              <h3 style={S.h3}>Information You Provide</h3>
              <ul style={S.ul}>
                <li>Name, address, date of birth, and Social Security number</li>
                <li>Contact information including phone number and email address</li>
                <li>Financial information including income, assets, and account details</li>
                <li>Beneficiary and joint owner designations</li>
                <li>Health information where required for certain products</li>
                <li>Information submitted through contact forms, email signup, or correspondence</li>
              </ul>
              <h3 style={S.h3}>Information Collected Automatically</h3>
              <ul style={S.ul}>
                <li>IP address, browser type, and device information</li>
                <li>Pages visited, time spent on site, and referring URLs</li>
                <li>Cookie data and similar tracking technologies</li>
              </ul>
              <h3 style={S.h3}>Information from Third Parties</h3>
              <ul style={S.ul}>
                <li>Consumer reporting agencies and identity verification services</li>
                <li>Financial professionals and insurance agents who submit business on your behalf</li>
                <li>Government agencies and public records</li>
              </ul>
            </Section>

            <div style={S.divider} />

            <Section eyebrow="Use" heading="How We Use Your Information">
              <p style={S.body}>We use your personal information to operate our business and fulfill our obligations to you, including:</p>
              <ul style={S.ul}>
                <li>Processing applications and issuing annuity contracts</li>
                <li>Administering policies, processing payments, and calculating benefits</li>
                <li>Communicating about your policy, account, or requests</li>
                <li>Complying with legal, regulatory, and contractual obligations</li>
                <li>Preventing fraud and verifying identity</li>
                <li>Improving our website, products, and services</li>
                <li>Sending marketing communications where you have opted in</li>
              </ul>
              <p style={S.body}>We do not sell your personal information to third parties for their own marketing purposes.</p>
            </Section>

            <div style={S.divider} />

            <Section eyebrow="Sharing" heading="How We Share Your Information">
              <p style={S.body}>We may share your personal information with the following categories of parties, where necessary to operate our business:</p>
              <h3 style={S.h3}>Service Providers</h3>
              <p style={S.body}>Third-party vendors and service providers who perform functions on our behalf, such as policy administration, data processing, IT services, and customer communications. These parties are contractually required to protect your information and use it only for the services they provide to us.</p>
              <h3 style={S.h3}>Financial Professionals</h3>
              <p style={S.body}>Licensed insurance agents, advisors, and broker-dealers who have sold or service your Oceanview policy may receive information about your account as necessary to fulfill their service obligations.</p>
              <h3 style={S.h3}>Affiliates</h3>
              <p style={S.body}>Companies affiliated with Oceanview, including Bayview Asset Management entities, where permitted by applicable law and necessary for business operations.</p>
              <h3 style={S.h3}>Legal and Regulatory</h3>
              <p style={S.body}>Regulatory bodies, law enforcement agencies, courts, and other parties where required by law, legal process, or to protect the rights and safety of Oceanview and others.</p>
            </Section>

            <div style={S.divider} />

            <Section eyebrow="Security" heading="How We Protect Your Information">
              <p style={S.body}>Oceanview maintains administrative, technical, and physical safeguards designed to protect your personal information against unauthorized access, use, disclosure, alteration, and destruction. These safeguards include encryption of sensitive data in transit and at rest, access controls limiting employee access to information they need to perform their roles, regular security assessments, and employee training on privacy and data security.</p>
              <p style={S.body}>No method of data transmission or storage is 100% secure. If you have reason to believe that your information has been compromised, please contact us immediately at the address below.</p>
            </Section>

            <div style={S.divider} />

            <Section eyebrow="Cookies" heading="Cookies and Tracking Technologies">
              <p style={S.body}>Our website uses cookies and similar technologies to improve your browsing experience, analyze site traffic, and support our marketing activities. Cookies are small data files stored on your device.</p>
              <h3 style={S.h3}>Types of Cookies We Use</h3>
              <ul style={S.ul}>
                <li><strong>Essential cookies:</strong> Required for the website to function. These cannot be disabled.</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site (e.g., Google Analytics). You may opt out via your browser settings.</li>
                <li><strong>Marketing cookies:</strong> Used to deliver relevant advertising. You may opt out via industry opt-out tools such as the NAI opt-out page.</li>
              </ul>
              <p style={S.body}>Most browsers allow you to control cookies through their settings. Disabling cookies may affect the functionality of certain features of our website.</p>
            </Section>

            <div style={S.divider} />

            <Section eyebrow="Your Rights" heading="Your Privacy Rights">
              <p style={S.body}>Depending on your state of residence, you may have certain rights regarding your personal information, including the right to access, correct, or delete your personal information, and the right to opt out of certain uses of your information. Residents of California have additional rights under the California Consumer Privacy Act (CCPA).</p>
              <p style={S.body}>To exercise your rights or submit a privacy-related request, contact us using the information below. We will respond within the time frame required by applicable law.</p>
              <h3 style={S.h3}>Marketing Opt-Out</h3>
              <p style={S.body}>If you have subscribed to Oceanview email communications, you may unsubscribe at any time by clicking the unsubscribe link in any email or by contacting us directly. Opting out of marketing communications does not affect our ability to send you transactional or administrative messages about your policy.</p>
            </Section>

            <div style={S.divider} />

            <Section eyebrow="Retention" heading="How Long We Retain Your Information">
              <p style={S.body}>We retain your personal information for as long as necessary to fulfill the purposes described in this notice, comply with legal and regulatory obligations, resolve disputes, and enforce our agreements. For annuity policyholders, records may be retained for the life of the contract plus any required retention period under applicable state and federal law.</p>
            </Section>

            <div style={S.divider} />

            <Section eyebrow="Updates" heading="Changes to This Notice">
              <p style={S.body}>We may update this Privacy Notice from time to time to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will update the effective date at the top of this notice. We encourage you to review this notice periodically.</p>
            </Section>

            <div style={S.divider} />

            <Section eyebrow="Contact" heading="Contact Us">
              <p style={S.body}>For questions, requests, or concerns regarding this Privacy Notice or our data practices, please contact us:</p>
              <p style={S.body}>
                <strong>Oceanview Life and Annuity Company</strong><br />
                Attn: Privacy Officer<br />
                1331 17th St., Suite 1050<br />
                Denver, CO 80202<br />
                <a href="mailto:privacy@oceanviewlife.com" style={{ color: '#2494C1' }}>privacy@oceanviewlife.com</a>
              </p>
            </Section>

            <div style={S.divider} />

            <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#9CA3AF', lineHeight: 1.65 }}>
              © 2026 Oceanview Life and Annuity Company. All rights reserved. This notice applies to oceanviewlife.com and all Oceanview digital properties.
            </p>

          </div>
        </div>
      </section>
    </main>
  )
}
