import LegalPage, { Section, LegalS as S } from './LegalPage.jsx'

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility"
      subtitle="Oceanview is committed to making OceanviewLife.com accessible to everyone."
      copyright={<>© 2026 Oceanview Life and Annuity Company. All rights reserved.</>}
    >
      <Section eyebrow="Commitment" heading="Our Commitment">
        <p style={S.body}>Oceanview is dedicated to ensuring OceanviewLife.com is accessible to everyone. We are actively implementing improvements aligned with the World Wide Web Consortium's Web Content Accessibility Guidelines (WCAG) 2.0 Level AA standards. We recognize that accessibility is an ongoing effort and are continuously working to improve the experience for all users.</p>
      </Section>

      <div style={S.divider} />

      <Section eyebrow="Contact" heading="Accessibility Questions">
        <p style={S.body}>If you have a specific accessibility concern or need assistance accessing any content on OceanviewLife.com, please reach out to us directly. We're happy to help.</p>
        <p style={S.body}>Email us at <a href="mailto:info@oceanviewlife.com" style={{ color: '#2494C1' }}>info@oceanviewlife.com</a></p>
      </Section>
    </LegalPage>
  )
}
