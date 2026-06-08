import LegalPage, { Section, LegalS as S } from './LegalPage.jsx'

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      subtitle="Effective January 1, 2025. By accessing oceanviewlife.com, you agree to the following terms and conditions."
      copyright="© 2026 Oceanview Life and Annuity Company. All rights reserved."
    >
      <Section eyebrow="Agreement" heading="Acceptance of Terms">
        <p style={S.body}>By accessing or using oceanviewlife.com (the "Site"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site. Oceanview Life and Annuity Company ("Oceanview") reserves the right to modify these terms at any time, and your continued use of the Site constitutes acceptance of any such modifications.</p>
        <p style={S.body}>These terms apply to all visitors, users, and others who access the Site, including financial professionals, potential clients, and individuals accessing materials in a research capacity.</p>
      </Section>

      <div style={S.divider} />

      <Section eyebrow="Purpose" heading="Nature of This Site">
        <p style={S.body}>This Site is operated by Oceanview Life and Annuity Company for informational and marketing purposes related to annuity products issued by Oceanview. The content on this Site does not constitute investment advice, tax advice, or legal advice, and should not be relied upon as such.</p>
        <p style={S.body}>Annuities are complex financial products. All information on this Site is general in nature and should be evaluated in the context of your individual circumstances with the assistance of a licensed financial professional and, where appropriate, a qualified tax or legal advisor.</p>
        <p style={S.body}>Oceanview products are available only through licensed insurance agents. Nothing on this Site constitutes an offer or solicitation to purchase any insurance or annuity product. Product availability, rates, and features vary by state and are subject to change without notice.</p>
      </Section>

      <div style={S.divider} />

      <Section eyebrow="Content" heading="Intellectual Property">
        <p style={S.body}>All content on this Site — including text, graphics, logos, images, illustrations, and software — is the property of Oceanview Life and Annuity Company or its licensors and is protected by applicable copyright, trademark, and other intellectual property laws.</p>
        <p style={S.body}>You may access and view the content on this Site for your personal, non-commercial use. You may not reproduce, distribute, modify, create derivative works, publicly display, or otherwise exploit any content from this Site without the prior written permission of Oceanview, except as expressly permitted by applicable law.</p>
        <p style={S.body}>Third-party trademarks and service marks that appear on this Site, including index names and ratings agency designations, are the property of their respective owners. Their appearance on this Site does not imply endorsement or affiliation.</p>
      </Section>

      <div style={S.divider} />

      <Section eyebrow="Limitations" heading="Disclaimers and Limitations of Liability">
        <h3 style={S.h3}>No Warranty</h3>
        <p style={S.body}>This Site and all content are provided "as is" without warranty of any kind, express or implied. Oceanview makes no representations or warranties regarding the accuracy, completeness, reliability, or timeliness of any information on the Site. Information, including rates and product details, is subject to change without notice.</p>
        <h3 style={S.h3}>Limitation of Liability</h3>
        <p style={S.body}>To the fullest extent permitted by law, Oceanview Life and Annuity Company, its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this Site or any content thereon, even if Oceanview has been advised of the possibility of such damages.</p>
        <h3 style={S.h3}>Forward-Looking Information</h3>
        <p style={S.body}>This Site may contain forward-looking statements or projections. Such statements are based on current expectations and assumptions and are subject to risks and uncertainties. Actual results may differ materially. Past performance — including historical index performance, illustrated rates, or credited interest examples — is not indicative of future results.</p>
      </Section>

      <div style={S.divider} />

      <Section eyebrow="Links" heading="Third-Party Links and Content">
        <p style={S.body}>This Site may contain links to external websites operated by third parties. These links are provided for convenience only. Oceanview does not control the content of external sites and is not responsible for their accuracy, legality, or practices. Linking to an external site does not constitute endorsement by Oceanview.</p>
        <p style={S.body}>If you access a third-party site from a link on this Site, you do so at your own risk and subject to that site's terms and conditions.</p>
      </Section>

      <div style={S.divider} />

      <Section eyebrow="Privacy" heading="Privacy">
        <p style={S.body}>Your use of this Site is also governed by our <a href="#privacy" style={{ color: '#2494C1' }}>Privacy Notice</a>, which is incorporated by reference into these Terms of Use. By using this Site, you consent to the data practices described in our Privacy Notice.</p>
      </Section>

      <div style={S.divider} />

      <Section eyebrow="Conduct" heading="Prohibited Uses">
        <p style={S.body}>You agree not to use this Site to:</p>
        <ul style={S.ul}>
          <li>Transmit any content that is unlawful, harmful, defamatory, or otherwise objectionable</li>
          <li>Attempt to gain unauthorized access to any portion of the Site or its related systems</li>
          <li>Scrape, crawl, or systematically extract content from the Site without express written permission</li>
          <li>Introduce malware, viruses, or other harmful code</li>
          <li>Violate any applicable local, state, national, or international law or regulation</li>
          <li>Impersonate any person or entity, or misrepresent your affiliation with Oceanview</li>
        </ul>
      </Section>

      <div style={S.divider} />

      <Section eyebrow="Governing Law" heading="Jurisdiction and Governing Law">
        <p style={S.body}>These Terms of Use shall be governed by and construed in accordance with the laws of the State of Colorado, without regard to its conflict of law principles. Any disputes arising from these terms or your use of the Site shall be resolved exclusively in the courts of Denver County, Colorado, and you consent to the personal jurisdiction of such courts.</p>
      </Section>

      <div style={S.divider} />

      <Section eyebrow="Contact" heading="Contact">
        <p style={S.body}>Questions about these Terms of Use may be directed to:</p>
        <p style={S.body}>
          <strong>Oceanview Life and Annuity Company</strong><br />
          1331 17th St., Suite 1050<br />
          Denver, CO 80202<br />
          <a href="mailto:info@oceanviewlife.com" style={{ color: '#2494C1' }}>info@oceanviewlife.com</a>
        </p>
      </Section>
    </LegalPage>
  )
}
