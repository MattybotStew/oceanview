import LegalPage, { Section, LegalS as S } from './LegalPage.jsx'

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Notice"
      subtitle="Effective January 1, 2025. How Oceanview Life and Annuity Company collects, uses, and protects your personal information."
      copyright="© 2026 Oceanview Life and Annuity Company. All rights reserved. This notice applies to oceanviewlife.com and all Oceanview digital properties."
    >
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
          <li>Financial information, including income, net worth, and investment objectives</li>
          <li>Employment and beneficiary information</li>
          <li>Contact preferences and communication records</li>
        </ul>
        <h3 style={S.h3}>Information from Third Parties</h3>
        <ul style={S.ul}>
          <li>Consumer reporting agency data used for identity verification and fraud prevention</li>
          <li>Information from your financial professional regarding investment objectives and suitability</li>
          <li>Medical information (where required for certain annuity riders or underwriting)</li>
        </ul>
      </Section>

      <div style={S.divider} />

      <Section eyebrow="Use" heading="How We Use Your Information">
        <p style={S.body}>We use your personal information for the following business purposes:</p>
        <ul style={S.ul}>
          <li>Processing applications, issuing policies, and administering annuity contracts</li>
          <li>Communicating with you about your policy, including statements, confirmations, and regulatory notices</li>
          <li>Verifying your identity and preventing fraud and unauthorized transactions</li>
          <li>Complying with legal and regulatory obligations, including tax reporting and anti-money-laundering requirements</li>
          <li>Improving our products, services, and website experience</li>
          <li>Marketing our products and services (with your consent where required by law)</li>
        </ul>
      </Section>

      <div style={S.divider} />

      <Section eyebrow="Sharing" heading="How We Share Your Information">
        <p style={S.body}>We do not sell your personal information. We may share your information as follows:</p>
        <ul style={S.ul}>
          <li><strong>With your financial professional:</strong> To service your policy and provide ongoing account support.</li>
          <li><strong>With service providers:</strong> Companies that perform services on our behalf, such as printing, mailing, data processing, and IT support, under contractual confidentiality obligations.</li>
          <li><strong>As required by law:</strong> To comply with legal requirements, court orders, or regulatory requests.</li>
          <li><strong>In connection with a business transaction:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as a business asset.</li>
        </ul>
      </Section>

      <div style={S.divider} />

      <Section eyebrow="Security" heading="How We Protect Your Information">
        <p style={S.body}>We maintain administrative, technical, and physical safeguards designed to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include encryption of data in transit and at rest, access controls, employee training, and regular security assessments.</p>
        <p style={S.body}>Despite our efforts, no security measures are perfect or impenetrable. We cannot guarantee the absolute security of your information.</p>
      </Section>

      <div style={S.divider} />

      <Section eyebrow="Cookies" heading="Cookies and Online Tracking">
        <p style={S.body}>Our website may use cookies and similar technologies to improve your browsing experience and support analytics and marketing activities. Cookies are small data files stored on your device.</p>
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
    </LegalPage>
  )
}
