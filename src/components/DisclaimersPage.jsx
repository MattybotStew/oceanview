// DisclaimersPage — legal disclaimers for all Oceanview products and materials

const S = {
  eyebrowRow:  { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 },
  eyebrowLine: { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow:     { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' },
  h2:          { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(20px,2vw,28px)', color: '#0D1F4E', letterSpacing: '-0.015em', lineHeight: 1.2, margin: '0 0 16px' },
  h3:          { fontFamily: 'var(--ov-ff-sans)', fontWeight: 700, fontSize: 13, color: '#0D1F4E', letterSpacing: '.04em', margin: '24px 0 8px', textTransform: 'uppercase' },
  body:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.75, margin: '0 0 16px' },
  caps:        { fontFamily: 'var(--ov-ff-sans)', fontSize: 13, color: '#4A5568', lineHeight: 1.7, margin: '0 0 16px', fontWeight: 600 },
  divider:     { height: 1, background: 'rgba(13,31,78,.08)', margin: '48px 0' },
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

export default function DisclaimersPage() {
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
            Disclaimers
          </h1>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 'clamp(14px,1.3vw,16px)', lineHeight: 1.65, color: '#4A5568', margin: '0 auto', maxWidth: '52ch' }}>
            Important disclosures regarding Oceanview products, materials, and services. Please read carefully before making any financial decisions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#fff', padding: '0 0 80px' }}>
        <div className="ov-container">
          <div style={{ maxWidth: 780 }}>

            {/* General */}
            <Section eyebrow="General" heading="Company Information &amp; General Disclosures">
              <p style={S.body}>Annuities issued by Oceanview Life and Annuity Company, 1331 17th St., Suite 1050, Denver, CO 80202. In California, the company operates as Oceanview Life and Annuity Insurance Company pursuant to its doing-business-as registration.</p>
              <p style={S.caps}>ANNUITIES ARE PRODUCTS OF THE INSURANCE INDUSTRY AND ARE NOT GUARANTEED BY ANY BANK NOR INSURED BY THE FDIC OR NCUA/NCUSIF OR ANY OTHER FEDERAL GOVERNMENTAL AGENCY. MAY LOSE VALUE. NO BANK OR CREDIT UNION GUARANTEE. NOT A DEPOSIT. NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY.</p>
              <p style={S.body}>Annuities are not bank deposits and are not insured by any federal government agency. Annuities are subject to insurance regulatory oversight and are backed by the claims-paying ability and financial strength of the issuing company. Guarantees are subject to the claim-paying ability of the issuing insurance company.</p>
              <p style={S.body}>Annuities require a licensed insurance agent for purchase and are intended as long-term retirement savings solutions. They are not appropriate as emergency reserves, for meeting short-term savings goals, or for funding daily expenses. Early withdrawals before age 59½ may be subject to IRS tax penalties in addition to any applicable surrender charges.</p>
              <p style={S.body}>Oceanview Life and Annuity Company and its representatives do not provide tax or legal advice. Clients should consult with qualified tax and legal advisors regarding their individual circumstances.</p>
              <h3 style={S.h3}>A.M. Best Rating</h3>
              <p style={S.body}>As of December 2024, A.M. Best has assigned Oceanview a Financial Strength Rating of A (Excellent) with a stable outlook. This rating represents the third-highest of fifteen possible classifications. A.M. Best ratings are subject to change. For the latest rating information, visit ambest.com.</p>
              <h3 style={S.h3}>Tax-Qualified Plans</h3>
              <p style={S.body}>An annuity contract used to fund an IRA, 401(k), or other tax-qualified retirement plan provides no additional tax deferral benefit beyond that already provided by the qualified plan itself. Consider factors other than tax deferral — such as guaranteed rates, principal protection, and death benefits — when evaluating annuities for qualified plan funding.</p>
            </Section>

            <div style={S.divider} />

            {/* MYGA */}
            <Section eyebrow="Multi-Year Guaranteed Annuity" heading="MYGA Disclaimers">
              <h3 style={S.h3}>Client Disclosures</h3>
              <p style={S.body}>Guarantees are based on the claims-paying ability and financial strength of Oceanview Life and Annuity Company. Product form ICC19 OLA SPDA is issued in most states. Not available in the state of North Carolina. Check with your financial professional for availability in your state.</p>
              <p style={S.body}>Interest rates are guaranteed for the selected guarantee period at policy issue. After the initial guarantee period, renewal rates are declared at management's discretion within contractual minimums and maximums established at policy issuance. Withdrawals in excess of any free partial withdrawal amounts are subject to a surrender charge and market value adjustment (MVA).</p>
              <h3 style={S.h3}>Agent Disclosures</h3>
              <p style={S.body}>This material is for financial professional use only and is not intended for distribution to the general public. Within 30 days prior to the end of the initial interest guarantee period, policyholders will receive written notification detailing the expiration of the guarantee period and the rate(s) that will apply upon renewal.</p>
              <p style={S.body}>Issue age for all deferred annuities is the age at the last birthday of the Owner. If there are joint owners, the age of the oldest owner is used to determine commission payout.</p>
            </Section>

            <div style={S.divider} />

            {/* FIA */}
            <Section eyebrow="Fixed Indexed Annuity" heading="FIA Disclaimers">
              <h3 style={S.h3}>Client Disclosures</h3>
              <p style={S.body}>May not be available in all states. Not available in the state of New York or Vermont. Fixed indexed annuities are not securities, are not registered with the SEC, and are not subject to SEC regulation. Funds allocated to an index strategy do not directly participate in or invest in the stock market or any index.</p>
              <p style={S.body}>Interest credited under index strategies is based on changes in external market indexes and is subject to cap rates, participation rates, and/or spreads that limit the interest credited. These parameters are set at policy issue and may be reset at the beginning of subsequent crediting periods within contractual minimums and maximums. Withdrawals in excess of any free partial withdrawal amounts are subject to a surrender charge and market value adjustment (MVA).</p>
              <h3 style={S.h3}>Agent Disclosures</h3>
              <p style={S.body}>Financial professionals will be paid a commission on the sale of an annuity. This material is for financial professional use only and is not intended for distribution to the general public. Issue age for all deferred annuities is the age at the last birthday of the Owner. If there are joint owners, the age of the oldest owner is used to determine commission payout.</p>
            </Section>

            <div style={S.divider} />

            {/* Index disclosures */}
            <Section eyebrow="Index Strategies" heading="Third-Party Index Disclosures">
              <h3 style={S.h3}>S&amp;P 500 Index</h3>
              <p style={S.body}>The S&P 500 Index is a product of S&P Dow Jones Indices LLC and/or its affiliates ("SPDJI") and has been licensed for use by Oceanview Life and Annuity Company. Standard &amp; Poor's® and S&P® are registered trademarks of Standard &amp; Poor's Financial Services LLC; Dow Jones® is a registered trademark of Dow Jones Trademark Holdings LLC. Oceanview annuity products are not sponsored, endorsed, sold, or promoted by SPDJI, Dow Jones, S&amp;P, or their respective affiliates, and none of these parties make any representation regarding the advisability of purchasing such products. It is not possible to invest directly in an index.</p>
              <p style={S.caps}>NEITHER S&amp;P DOW JONES INDICES NOR ITS THIRD PARTY LICENSORS GUARANTEE THE ADEQUACY, ACCURACY, TIMELINESS, AND/OR THE COMPLETENESS OF THE S&P 500 INDEX OR ANY DATA INCLUDED THEREIN OR ANY COMMUNICATIONS WITH RESPECT THERETO. S&amp;P DOW JONES INDICES AND ITS THIRD PARTY LICENSORS SHALL NOT BE SUBJECT TO ANY DAMAGES OR LIABILITY FOR ANY ERRORS, OMISSIONS, OR DELAYS THEREIN.</p>
              <h3 style={S.h3}>Nasdaq-100 Index</h3>
              <p style={S.body}>Nasdaq®, Nasdaq-100 Index®, and Nasdaq-100® are registered trademarks of Nasdaq, Inc. (collectively, "Nasdaq") and are licensed for use by Oceanview Life and Annuity Company. The product(s) have not been passed on by Nasdaq as to their legality or suitability. The product(s) are not issued, endorsed, sold, or promoted by Nasdaq. Nasdaq makes no warranties and bears no liability with respect to the product(s). Past performance of an index is not an indication or guarantee of future results.</p>
              <h3 style={S.h3}>Russell 2000 Index</h3>
              <p style={S.body}>The Russell 2000® Index is a trademark of Frank Russell Company ("Russell") and has been licensed for use by Oceanview Life and Annuity Company. Oceanview annuity products are not in any way sponsored, endorsed, sold, or promoted by Russell or the London Stock Exchange Group ("LSE Group") and neither Russell nor the LSE Group has any liability with respect to such products or any index on which such products are based. Past performance of an index is not an indication or guarantee of future results.</p>
            </Section>

            <div style={S.divider} />

            {/* Sales tools */}
            <Section eyebrow="Sales Tools &amp; Materials" heading="Educational &amp; Sales Material Disclaimers">
              <p style={S.body}>Materials provided by Oceanview Life and Annuity Company are intended to provide educational information only regarding the features and mechanics of Oceanview products. Such materials should not be considered, and do not constitute, personalized investment advice. Oceanview Life and Annuity Company is not an investment adviser, nor is it registered as such with the SEC or any state securities regulatory authority.</p>
              <p style={S.body}>All examples used in sales materials and illustrations are hypothetical and are provided for illustrative purposes only. Hypothetical examples do not represent actual performance and are not a guarantee or projection of future results.</p>
              <p style={S.body}>An income annuity has no cash value. Once issued, it cannot be revoked, and the initial investment is not refundable and cannot be withdrawn or exchanged for another annuity product. Financial calculators and planning tools are provided as resources for independent use and are not intended to provide investment advice. Oceanview makes no guarantee regarding the applicability or accuracy of calculator results with respect to any individual's circumstances.</p>
            </Section>

            <div style={S.divider} />

            <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#9CA3AF', lineHeight: 1.65 }}>
              © 2026 Oceanview Life and Annuity Company. All rights reserved. Content subject to change without notice. For questions about these disclosures, contact us at <a href="mailto:info@oceanviewlife.com" style={{ color: '#2494C1' }}>info@oceanviewlife.com</a>.
            </p>

          </div>
        </div>
      </section>
    </main>
  )
}
