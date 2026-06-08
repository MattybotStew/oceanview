import LegalPage, { Section, LegalS as S } from './LegalPage.jsx'

export default function DisclaimersPage() {
  return (
    <LegalPage
      title="Disclaimers"
      subtitle="Important disclosures regarding Oceanview products, materials, and services. Please read carefully before making any financial decisions."
      copyright={<>© 2026 Oceanview Life and Annuity Company. All rights reserved. Content subject to change without notice. For questions about these disclosures, contact us at <a href="mailto:info@oceanviewlife.com" style={{ color: '#2494C1' }}>info@oceanviewlife.com</a>.</>}
    >
      {/* General */}
      <Section eyebrow="General" heading="Company Information &amp; General Disclosures">
        <p style={S.body}>Annuities issued by Oceanview Life and Annuity Company, 1331 17th St., Suite 1050, Denver, CO 80202. In California, the company operates as Oceanview Life and Annuity Insurance Company pursuant to its doing-business-as registration.</p>
        <p style={S.caps}>ANNUITIES ARE PRODUCTS OF THE INSURANCE INDUSTRY AND ARE NOT GUARANTEED BY ANY BANK NOR INSURED BY THE FDIC OR NCUA/NCUSIF OR ANY OTHER FEDERAL GOVERNMENTAL AGENCY. MAY LOSE VALUE. NO BANK OR CREDIT UNION GUARANTEE. NOT A DEPOSIT. NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY.</p>
        <p style={S.body}>Annuities are not bank deposits and are not insured by any federal government agency. Annuities are subject to insurance regulatory oversight and are backed by the claims-paying ability and financial strength of the issuing company. Guarantees are subject to the claim-paying ability of the issuing insurance company.</p>
        <p style={S.body}>Annuities require a licensed insurance agent for purchase and are intended as long-term retirement savings vehicles. Withdrawals made prior to age 59½ may be subject to a 10% federal tax penalty. Withdrawals exceeding the contract's free withdrawal provision may be subject to surrender charges. Surrender charges reduce the contract's accumulation value.</p>
        <p style={S.body}>Fixed and fixed-indexed annuities are not designed for short-term savings. Before making a purchase decision, please consult with a licensed financial professional who can review your individual circumstances and objectives.</p>
      </Section>

      <div style={S.divider} />

      {/* Index */}
      <Section eyebrow="Index" heading="Index and Product Disclosures">
        <h3 style={S.h3}>S&P 500 Index</h3>
        <p style={S.body}>The S&P 500 Index is a product of S&P Dow Jones Indices LLC ("SPDJI"), and has been licensed for use by Oceanview Life and Annuity Company. Standard & Poor's® and S&P® are registered trademarks of Standard & Poor's Financial Services LLC; Dow Jones® is a registered trademark of Dow Jones Trademark Holdings LLC. Oceanview annuity products are not sponsored, endorsed, sold, or promoted by SPDJI, Dow Jones, S&P, or their respective affiliates, and none of these parties make any representation regarding the advisability of purchasing such products. It is not possible to invest directly in an index.</p>
        <p style={S.caps}>NEITHER S&P DOW JONES INDICES NOR ITS THIRD PARTY LICENSORS GUARANTEE THE ADEQUACY, ACCURACY, TIMELINESS, AND/OR THE COMPLETENESS OF THE S&P 500 INDEX OR ANY DATA INCLUDED THEREIN OR ANY COMMUNICATIONS WITH RESPECT THERETO. S&P DOW JONES INDICES AND ITS THIRD PARTY LICENSORS SHALL NOT BE SUBJECT TO ANY DAMAGES OR LIABILITY FOR ANY ERRORS, OMISSIONS, OR DELAYS THEREIN.</p>
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
    </LegalPage>
  )
}
