import LegalPage, { Section, LegalS as S } from './LegalPage.jsx'

const contactCard = {
  background: 'rgba(112,186,191,0.10)',
  border: '1px solid rgba(112,186,191,0.30)',
  borderRadius: 12,
  padding: '28px 32px',
  marginTop: 24,
}

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility"
      subtitle="We're committed to making OceanviewLife.com usable by everyone, regardless of ability or technology."
      copyright={<>© 2026 Oceanview Life and Annuity Company. All rights reserved.</>}
    >
      <Section eyebrow="Our Commitment" heading="Commitment to Accessibility">
        <p style={S.body}>Oceanview Life and Annuity Company is dedicated to ensuring that OceanviewLife.com is accessible to all visitors, including those with disabilities. We believe everyone deserves equal access to information about their financial future.</p>
        <p style={S.body}>We are actively implementing improvements aligned with the <strong>World Wide Web Consortium's Web Content Accessibility Guidelines (WCAG) 2.0 Level AA</strong> standards. We recognize that accessibility is an ongoing effort and are continuously working to improve the experience for all users.</p>
      </Section>

      <div style={S.divider} />

      <Section eyebrow="Standards" heading="Guidelines We Follow">
        <p style={S.body}>Our accessibility efforts are guided by WCAG 2.0 Level AA, which covers a wide range of recommendations for making web content more accessible. These guidelines address four key principles:</p>
        <ul style={S.ul}>
          <li><strong>Perceivable</strong> — Information and interface components must be presentable to users in ways they can perceive.</li>
          <li><strong>Operable</strong> — Interface components and navigation must be operable by keyboard and other assistive inputs.</li>
          <li><strong>Understandable</strong> — Information and operation of the interface must be understandable.</li>
          <li><strong>Robust</strong> — Content must be robust enough to be interpreted by a wide variety of assistive technologies.</li>
        </ul>
      </Section>

      <div style={S.divider} />

      <Section eyebrow="Ongoing Work" heading="Continuous Improvement">
        <p style={S.body}>We audit OceanviewLife.com regularly and address accessibility issues as they are identified. Our ongoing efforts include:</p>
        <ul style={S.ul}>
          <li>Ensuring sufficient color contrast across all page elements</li>
          <li>Providing text alternatives for non-text content</li>
          <li>Designing all interactive elements to be keyboard navigable</li>
          <li>Testing with screen readers and other assistive technologies</li>
          <li>Reviewing new content and features for accessibility before launch</li>
        </ul>
        <p style={S.body}>While we strive for full WCAG 2.0 AA conformance, some third-party content or tools embedded on our site may not yet meet all guidelines. We work with our partners to address these gaps over time.</p>
      </Section>

      <div style={S.divider} />

      <Section eyebrow="Get Help" heading="Contact Us About Accessibility">
        <p style={S.body}>If you experience difficulty accessing any content on OceanviewLife.com, or have suggestions for how we can improve accessibility, we want to hear from you.</p>
        <div style={contactCard}>
          <p style={{ ...S.body, marginBottom: 4, fontWeight: 600, color: '#0D1F4E' }}>Email our team</p>
          <a href="mailto:info@oceanviewlife.com" style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#2494C1', fontWeight: 500, textDecoration: 'none' }}>
            info@oceanviewlife.com
          </a>
          <p style={{ ...S.body, marginTop: 16, marginBottom: 0 }}>Please describe the accessibility barrier you encountered and the page URL where it occurred. We aim to respond within 2 business days.</p>
        </div>
      </Section>
    </LegalPage>
  )
}
