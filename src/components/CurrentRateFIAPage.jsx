import ProductDetailPage from './ProductDetailPage.jsx'

const PRODUCT = {
  category: "Multi-Year Guaranteed Annuity",
  categoryShort: "CurrentRate® MYGA",
  name: "CurrentRate® MYGA",
  heroTitle: "Start with certainty. Adjust with rates over time.",
  heroSubtitle: "CurrentRate® MYGA is a five-year fixed annuity designed for clients who want principal protection and a clearly defined way for their credited interest rate to respond to the interest-rate environment over time.",
  tagline: "Start with certainty. Adjust with rates over time.",
  image: "assets/current-rate-hero.jpg",
  heroCtaLabel: "View Current Rate",
  heroPrimaryId: "current-rates",
  heroCtaSecondary: "Download Product Brochure",
  heroSecondaryHash: "brochures",

  navLabels: {
    currentRates: "Current CurrentRate MYGA Rate",
    contractProvides: "Why Consider CurrentRate MYGA?",
    howItWorks: "How CurrentRate Works",
    rateGuarantee: "How the Treasury Component Is Determined",
    lockSplit: "What CurrentRate Does—and Does Not—Do",
    whyGuaranteedCap: "A Different Way to Think About Rate Uncertainty",
    capDistinction: "What to Consider",
    allocationWarning: "You Don’t Have to Predict Where Rates Are Going",
    simpleExample: "CurrentRate MYGA or Harbourview MYGA?",
    keyTerms: "CurrentRate MYGA At a Glance",
    riders: "Riders / Waivers",
    surrenderOptions: "What Happens After Five Years?",
    incomeOptions: "Accessing Your Money",
  },

  stats: [
    { value: "$20K",          label: "Min. Premium",        sectionId: "key-terms" },
    { value: "5 Years",       label: "Guarantee Period",    sectionId: "key-terms" },
    { value: "10%",           label: "Free Withdrawal/Yr",  sectionId: "income-options" },
    { value: "1.00%",         label: "Guaranteed Spread",   sectionId: "key-terms" },
    { value: "Ages 0–89",     label: "Issue Age",           sectionId: "key-terms" },
  ],

  currentRates: {
    eyebrow: "Current CurrentRate MYGA Rate",
    heading: "First-year certainty. Annual updates after that.",
    sub: "Current First-Year Declared Rate",
    terms: ["5-Year Contract"],
    rate: "X.XX%",
    detail: "The first-year rate is declared at issue and guaranteed for the first contract year. Beginning in year two, the credited interest rate is determined annually using: 1-Year U.S. Treasury Rate + 1.00% Guaranteed Spread. The Treasury component may increase or decrease with market conditions. The guaranteed spread is established at issue and remains fixed during the five-year guarantee period. The combined credited rate will not be less than the guaranteed minimum interest rate stated in the contract.",
    effectiveDate: "Effective [DATE]",
  },

  whatIs: {
    eyebrow: "Product overview",
    heading: "What Is CurrentRate MYGA?",
    paragraphs: [
      "CurrentRate is a single-premium deferred fixed annuity designed for long-term retirement accumulation. The minimum premium is $20,000.",
      "Like a traditional MYGA, CurrentRate provides principal protection from direct stock-market losses, subject to contract terms and the claims-paying ability of Oceanview.",
      "What makes it different is how the interest rate works after the first year.",
      "A traditional MYGA generally establishes one rate for the entire selected guarantee period.",
      "CurrentRate establishes the first-year rate at issue and then uses a contract-defined methodology to determine a new credited rate each year for the remainder of the five-year guarantee period.",
      "That gives you certainty about how future rates will be determined—even though the exact future rates are not known today.",
      "You receive a declared interest rate guaranteed for the first contract year. Beginning in year two, the credited rate is determined annually using a contract-defined formula tied to the 1-Year U.S. Treasury Rate plus a guaranteed spread, subject to the contract’s guaranteed minimum.",
    ],
  },

  contractProvides: {
    eyebrow: "Why CurrentRate MYGA",
    heading: "Why Consider CurrentRate MYGA?",
    sub: "Principal protection, a declared first year, and a contract-defined way for later credited rates to respond.",
    items: [
      { title: "First-Year Certainty", body: "The declared interest rate established at issue is guaranteed for the first contract year." },
      { title: "Annual Rate Responsiveness", body: "Beginning in year two, the credited rate is updated annually according to the methodology defined in the contract." },
      { title: "A Transparent Rate Formula", body: "The annual credited rate after year one uses a 1-Year U.S. Treasury component plus a guaranteed spread." },
      { title: "A Guaranteed Minimum", body: "The credited rate will not be less than the guaranteed minimum interest rate stated in the contract." },
      { title: "Principal Protection", body: "Contract value is not directly exposed to stock-market losses, subject to contract terms and Oceanview’s claims-paying ability." },
      { title: "Tax-Deferred Accumulation", body: "Interest in a nonqualified annuity generally accumulates tax-deferred until distributed." },
      { title: "Annual Withdrawal Access", body: "After the first contract year, up to 10% of the prior contract anniversary value may be withdrawn annually without surrender charges, subject to contract terms." },
    ],
    download: { title: "Download Product Brochure", sub: "CurrentRate MYGA product brochure" },
  },

  howItWorks: {
    eyebrow: "How CurrentRate Works",
    heading: "How CurrentRate Works",
    sub: "Year 1 is a declared rate. Years 2–5 use the contract formula.",
    steps: [
      "Year 1 — Your first-year rate is known. A declared interest rate is established when the contract is issued and guaranteed for the first contract year.",
      "Years 2–5 — Your rate is determined annually. For each subsequent contract year, the credited rate is determined using the methodology defined in the contract.",
      "1-Year U.S. Treasury Component + Guaranteed Spread = Annual Credited Rate.",
      "The 1-Year U.S. Treasury component reflects the applicable market-based benchmark described in the contract. The guaranteed spread is established at issue and remains fixed during the five-year guarantee period.",
      "The resulting credited rate may be higher or lower from one year to the next, but will not be less than the contract’s guaranteed minimum interest rate. Oceanview applies the methodology automatically according to the contract provisions.",
    ],
  },

  rateGuarantee: {
    eyebrow: "Rate methodology",
    heading: "How the Treasury Component Is Determined",
    sub: "The contract defines the benchmark. You do not calculate the annual credited rate yourself.",
    points: [
      "The contract defines the Floating Rate Component using the average 1-Year U.S. Treasury rate for the 10 business days immediately preceding the contract anniversary.",
      "Oceanview determines the applicable benchmark according to the contract. If the benchmark is discontinued, substantially changed or otherwise requires substitution, a comparable or successor rate may be used according to the contract and applicable regulatory requirements.",
    ],
    rateNote: "You do not need to monitor rates or calculate the annual credited rate yourself.",
  },

  lockSplit: {
    eyebrow: "What the design does",
    heading: "What CurrentRate Does—and Does Not—Do",
    sub: "CurrentRate provides a defined methodology. It does not predict interest rates.",
    guaranteed: {
      title: "What CurrentRate does",
      body: "CurrentRate provides a defined methodology. You know at issue how credited rates after the first year will be determined. Rates can move higher. If the applicable Treasury component increases, the annual credited rate may increase according to the contract formula.",
    },
    notGuaranteed: {
      title: "What CurrentRate does not do",
      body: "CurrentRate does not predict interest rates. Future credited rates are not known at issue. Rates can move lower. If the applicable Treasury component decreases, the annual credited rate may decrease, subject to the guaranteed minimum. Rates are not guaranteed to increase. A future credited rate may be lower than the first-year declared rate. CurrentRate does not guarantee that credited rates will track market rates exactly. The formula does not guarantee that credited rates will track, match or move in direct proportion to changes in interest rates.",
    },
  },

  whyGuaranteedCap: {
    eyebrow: "Rate uncertainty",
    heading: "A Different Way to Think About Rate Uncertainty",
    sub: "A common question when considering a fixed annuity is: “What if I lock in today and interest rates change later?” CurrentRate approaches that question differently. Instead of requiring the entire five-year interest-rate path to be established at issue, the product combines certainty today (a declared first-year rate), a defined methodology for tomorrow (annual credited-rate determinations beginning in year two), and a guaranteed floor (a contractual minimum below which the credited rate will not fall). The value of the design is not knowing where rates will go. It is knowing how your contract will respond.",
    worthExploring: {
      heading: "When CurrentRate May Be Worth Exploring",
      intro: "CurrentRate may be worth discussing if you find yourself saying: “I want fixed-annuity protection, but I’m not sure I want to commit to one interest rate for the entire five years.” You may value:",
      bullets: [
        "Principal protection from direct market losses",
        "A declared first-year rate",
        "A transparent methodology for future credited rates",
        "Some responsiveness to the future interest-rate environment",
        "A guaranteed minimum interest rate",
        "Tax-deferred accumulation, where applicable",
        "A defined five-year time horizon",
        "You should also be comfortable with the fact that credited rates after year one can change annually and may move lower as well as higher.",
      ],
    },
  },

  capDistinction: {
    complianceLabel: "What to Consider",
    heading: "Rate Responsiveness Has a Tradeoff",
    body: "CurrentRate allows the credited rate to adjust annually after the first contract year. That provides greater responsiveness to the future rate environment than a traditional MYGA whose rate remains fixed for the full guarantee period. But that responsiveness means the complete five-year rate path is not known at issue. That is the exchange. For someone who values knowing the complete rate in advance, a traditional multi-year guaranteed approach may deserve consideration.",
    protection: {
      title: "Greater responsiveness to future rates",
      body: "The credited rate can adjust annually after the first contract year, using the methodology defined in the contract.",
    },
    tradeoff: {
      title: "Less certainty about the exact rate in future years",
      body: "The complete five-year rate path is not known at issue. A future credited rate may be higher or lower than the first-year declared rate, subject to the guaranteed minimum.",
    },
  },

  allocationWarning: {
    eyebrow: "The decision",
    heading: "You Don’t Have to Predict Where Rates Are Going",
    body: "The decision does not have to depend on correctly forecasting future interest rates. CurrentRate offers another way to approach the uncertainty. That distinction can help shift the decision from “Where do I think rates are going?” to “Which rate structure better fits the job I need this money to do?”",
    questions: [
      "You know: the first-year declared rate.",
      "You know: the methodology used after year one.",
      "You know: the guaranteed spread.",
      "You know: the contractual minimum.",
      "You do not know: the exact Treasury component in future years.",
      "You do not know: whether future credited rates will be higher or lower.",
    ],
  },

  simpleExample: {
    eyebrow: "Compare",
    heading: "CurrentRate MYGA or Harbourview MYGA?",
    sub: "Two approaches to fixed-annuity interest. Both products provide fixed-annuity principal protection and long-term accumulation. The difference is how the interest rate is determined over time.",
    scenarios: [
      {
        title: "CurrentRate MYGA",
        body: "Annual Rate Responsiveness. Know the first-year rate and the methodology that will determine credited rates in years two through five. May be worth considering when the priority is: “I want some connection to future interest rates.”",
      },
      {
        title: "Harbourview MYGA",
        body: "Multi-Year Rate Certainty. Know the applicable rate for the selected guarantee period from the beginning. May be worth considering when the priority is: “I want to know my rate in advance.”",
      },
      {
        title: "Which matters more to you?",
        body: "Knowing the rate for the full period—or allowing the rate to adjust as interest rates change? Compare CurrentRate & Harbourview.",
      },
    ],
  },

  keyTerms: {
    eyebrow: "At a glance",
    heading: "CurrentRate MYGA At a Glance",
    sub: "Feature summary for the five-year CurrentRate MYGA.",
    items: [
      { label: "Product Type", value: "Single Premium Deferred Annuity" },
      { label: "Guarantee Period", value: "5 years" },
      { label: "Minimum Premium", value: "$20,000 Qualified or Nonqualified" },
      { label: "Issue Age", value: "Ages 0–89, last birthday" },
      { label: "Year 1", value: "Declared interest rate established at issue and guaranteed for the first contract year" },
      { label: "Years 2–5", value: "Credited rate determined annually using the contract-defined 1-Year U.S. Treasury component plus guaranteed spread" },
      { label: "Guaranteed Spread", value: "1.00%" },
      { label: "Guaranteed Minimum", value: "As stated in the contract" },
      { label: "Free Withdrawals", value: "After first contract year, up to 10% of prior contract anniversary value annually" },
      { label: "Market Value Adjustment", value: "Applies where applicable to withdrawals subject to surrender charges; not applicable in California" },
      { label: "Riders / Waivers", value: "No nursing home or terminal illness riders" },
      { label: "Death Benefit", value: "If the owner dies before annuity payments begin, the named beneficiary or beneficiaries receive the applicable death benefit. The death benefit is the greater of contract value without surrender charges, or Minimum Surrender Value. The death benefit is not subject to a surrender charge. Taxes may apply." },
    ],
    download: { title: "Product Disclosure", sub: "Forms & documents and state availability" },
  },

  riders: {
    eyebrow: "Riders / Waivers",
    heading: "Riders / Waivers",
    sub: "CurrentRate MYGA does not include the waiver riders offered on some other Oceanview contracts.",
    items: [
      { title: "No nursing home or terminal illness riders", body: "No nursing home or terminal illness riders." },
    ],
  },

  surrenderOptions: {
    eyebrow: "End of the guarantee period",
    heading: "What Happens After Five Years?",
    sub: "The end of the initial guarantee period creates another decision point. At least 30 days and no more than 45 days before the guarantee period ends, Oceanview provides notice of the upcoming end date and information about the terms applicable to a subsequent guarantee period. Depending on the options available at that time, you may elect to:",
    items: [
      { title: "Continue", body: "Continue the contract for the same guarantee period." },
      { title: "Surrender", body: "Surrender the contract without surrender charges or an applicable Market Value Adjustment during the election period." },
      { title: "Create Income", body: "Apply the contract value to an available settlement option." },
      { title: "Select Another Available Guarantee Period", body: "Continue the contract using another guarantee period Oceanview makes available at that time." },
      { title: "Take a Partial Withdrawal", body: "Withdraw part of the value without surrender charges or MVA during the applicable election period and apply the remaining value to another available guarantee period." },
    ],
    footnote: "If no election is made, the contract continues for the same guarantee period, subject to contract terms. A new surrender-charge period begins if the contract is continued.",
  },

  incomeOptions: {
    eyebrow: "Access",
    heading: "Accessing Your Money",
    sub: "Free withdrawals, surrender charges, market value adjustment, and required minimum distributions.",
    items: [
      { title: "Free Withdrawals", body: "After the first contract year, you may take multiple withdrawals totaling up to 10% of the contract value from the prior contract anniversary without surrender charges. The unused free-withdrawal amount is not cumulative and cannot be carried forward into a future contract year. Withdrawals reduce contract value and may have tax consequences." },
      { title: "Surrender Charges", body: "CurrentRate is designed as a long-term retirement product. If you surrender the contract or withdraw more than the available free-withdrawal amount during the surrender-charge period, a surrender charge may apply. The amount received upon a full surrender is the contract’s Cash Surrender Value as determined according to the contract." },
      { title: "What is an MVA?", body: "For applicable contracts, a Market Value Adjustment may apply during the surrender-charge period when the contract is surrendered or a withdrawal exceeds the available free-withdrawal amount. An MVA can increase or decrease the surrender value depending on changes in market interest rates and the formula described in the contract. The MVA does not apply upon death, annuitization or after the surrender-charge period. MVA provisions do not apply in California." },
      { title: "Required Minimum Distributions", body: "For contracts funded with tax-qualified money, Required Minimum Distributions taken after the first contract year are not subject to surrender charges, subject to contract terms." },
    ],
    disclaimer: "Important Information. This material is intended for general educational purposes and does not provide individualized investment, tax or legal advice or recommend the purchase or replacement of any financial product. CurrentRate® MYGA is a five-year single premium deferred annuity designed for long-term retirement purposes. Product features, rates, guarantees, limitations, surrender provisions, form numbers and availability may vary by state. The first-contract-year interest rate is declared at issue and guaranteed for that contract year. Beginning in the second contract year, the credited interest rate is determined annually using the methodology defined in the contract, including a market-based component tied to the 1-Year U.S. Treasury Rate plus a guaranteed spread. Credited rates after the first contract year may increase or decrease and are not guaranteed to increase. They may be lower than the first-year declared rate. The credited rate will not be less than the guaranteed minimum interest rate specified in the contract. The interest-crediting methodology does not guarantee that credited rates will track, match or move in direct proportion to changes in interest rates. Refer to the contract for complete interest-crediting provisions. Guarantees are subject to the claims-paying ability of Oceanview Life and Annuity Company. Withdrawals in excess of applicable free-withdrawal amounts may be subject to surrender charges and a Market Value Adjustment. An MVA may increase or decrease the amount received depending on market interest-rate changes and the contract formula. MVA provisions do not apply in California. Withdrawals reduce contract value and may have tax consequences. Taxable distributions may be subject to ordinary income tax. Certain taxable distributions before age 59½ may also be subject to an additional federal tax unless an exception applies. Annuities purchased within an IRA or another tax-qualified retirement arrangement do not provide additional tax deferral because the underlying account is already tax-deferred. Other contractual guarantees and insurance features should be evaluated independently. Oceanview Life and Annuity Company and its representatives do not provide tax or legal advice. Consult qualified tax and legal professionals regarding your individual circumstances. CurrentRate is not available in New York or Vermont. Annuities are products of the insurance industry. They are not guaranteed by a bank or credit union, are not insured by the FDIC, NCUA/NCUSIF or any other federal government agency, are not deposits and may lose value. CurrentRate fixed annuity contracts, including form ICC26 OLA SPDA – CurrentRate or state variations, are issued by Oceanview Life and Annuity Company, 1331 17th Street, Suite 1050, Denver, CO 80202. In California, Oceanview does business as Oceanview Life and Annuity Insurance Company.",
  },

  tailBlocks: [
    {
      id: "understand-mygas",
      navLabel: "Want to Understand MYGAs First?",
      eyebrow: "Annuities, Explained",
      heading: "How Multi-Year Guaranteed Annuities Work",
      sub: "Learn how fixed annuities and MYGAs work, including interest crediting, guarantees, withdrawals and what happens later in the life of the contract.",
      paragraphs: ["Learn How MYGAs Work"],
    },
    {
      id: "compare-harbourview",
      navLabel: "Comparing a Traditional MYGA Approach?",
      eyebrow: "Harbourview MYGA",
      heading: "Comparing a Traditional MYGA Approach?",
      paragraphs: [
        "If knowing the applicable rate for the entire selected guarantee period is more important than annual rate responsiveness, explore Harbourview MYGA.",
        "Explore Harbourview MYGA. Compare Harbourview & CurrentRate.",
      ],
    },
    {
      id: "why-oceanview",
      navLabel: "Why Oceanview?",
      eyebrow: "Why Oceanview?",
      heading: "Clear solutions. Competitive value. Long-term focus.",
      sub: "Oceanview focuses on fixed annuity solutions and the responsibilities that come with providing long-term retirement guarantees.",
      items: [
        { title: "Straightforward by Design", body: "CurrentRate’s interest-crediting methodology is defined in the contract so you can understand how future annual rates will be determined." },
        { title: "Competitive Value", body: "Oceanview seeks to provide meaningful value across different retirement needs and interest-rate environments." },
        { title: "Financial Strength", body: "Oceanview Life and Annuity Company is rated A (Excellent) by AM Best with a Stable outlook. The A rating is the third highest of AM Best’s 15 financial strength rating categories." },
        { title: "A Long-Term View", body: "The product is designed around the entire five-year period—not simply the rate available on day one." },
      ],
      footnote: "Discover the Oceanview Difference",
    },
    {
      id: "for-professionals",
      navLabel: "For Financial Professionals",
      eyebrow: "For Financial Professionals",
      heading: "CurrentRate MYGA Resources",
      sub: "Access materials to support product evaluation and the client conversation.",
      items: [
        { title: "Current Rate Information", body: "Product Brochure, Product Disclosure, Forms & Documents, and State Availability." },
        { title: "Compare CurrentRate & Harbourview", body: "Client Conversation Tools and CurrentRate Training." },
        { title: "Discuss a Case With Sales", body: "Agent Portal." },
      ],
    },
  ],

  cta: {
    heading: "See what CurrentRate offers today.",
    sub: "Current First-Year Declared Rate X.XX%. Effective [DATE].",
    buttonLabel: "View CurrentRate Rate Information",
  },
}

export default function CurrentRateFIAPage() {
  return <ProductDetailPage product={PRODUCT} />
}
