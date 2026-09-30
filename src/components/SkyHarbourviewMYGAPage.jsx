import ProductDetailPage from './ProductDetailPage.jsx'

const PRODUCT = {
  category: "Multi-Year Guaranteed Annuity",
  categoryShort: "Sky Harbourview MYGA",
  name: "Sky Harbourview Multi-Year Guaranteed Annuity",
  heroTitle: "Multi-year rate certainty through participating banks and credit unions.",
  heroSubtitle: "Sky Harbourview Multi-Year Guaranteed Annuity provides a guaranteed interest rate for the guarantee period selected at issue—helping give a portion of retirement savings a more predictable accumulation path.",
  tagline: "Multi-year rate certainty through participating banks and credit unions.",
  insertAfter: { howItWorks: ["riders"] },
  image: "assets/couple-walking.png",
  heroCtaLabel: "View Current Rates",
  heroPrimaryId: "current-rates",
  heroCtaSecondary: "Download Product Brochure",
  heroSecondaryHash: "brochures",

  navLabels: {
    currentRates: "Current rates",
    whatIs: "What is Sky Harbourview MYGA",
    contractProvides: "Why consider Sky Harbourview MYGA",
    howItWorks: "How Sky Harbourview works",
    simpleExample: "Match the guarantee period",
    whyGuaranteedCap: "When it may be worth exploring",
    capDistinction: "Rate certainty tradeoff",
    rateGuarantee: "Accessing your money",
    keyTerms: "At a glance",
    riders: "Added protection",
    surrenderOptions: "When the guarantee period ends",
    incomeOptions: "Retirement income options",
  },

  stats: [
    { value: "$20K",          label: "Min. Premium",         sectionId: "key-terms" },
    { value: "3–10",          label: "Guarantee Periods",    sectionId: "key-terms" },
    { value: "10%",           label: "Free Withdrawal/Yr",   sectionId: "rate-guarantee" },
    { value: "1%",            label: "Min. Guaranteed Rate", sectionId: "current-rates" },
    { value: "A (Excellent)", label: "A.M. Best Rating",     sectionId: "why-oceanview" },
  ],

  currentRates: {
    eyebrow: "Current rates",
    heading: "Current Sky Harbourview MYGA Rates",
    sub: "Lock in a guaranteed rate for a defined period.",
    terms: ["3-Year", "5-Year", "7-Year", "10-Year"],
    rate: "X.XX%",
    detail: "Current APY. The applicable crediting rate is established at policy issue for the guarantee period selected. At the end of the guarantee period, a new renewal rate may apply. The minimum guaranteed crediting rate is 1%. View All Sky Harbourview Rates.",
    effectiveDate: "Effective [DATE]",
  },

  whatIs: {
    eyebrow: "Product overview",
    heading: "What Is Sky Harbourview MYGA?",
    paragraphs: [
      "Sky Harbourview Multi-Year Guaranteed Annuity provides a guaranteed interest rate for the guarantee period selected at issue—helping give a portion of retirement savings a more predictable accumulation path.",
      "Available through participating banks and credit unions, Sky Harbourview combines traditional MYGA rate certainty with additional terminal illness and nursing home confinement protections at no additional charge.",
      "Sky Harbourview is a single-premium deferred fixed annuity distributed through participating banks and credit unions.",
      "A MYGA—Multi-Year Guaranteed Annuity—provides an interest rate guaranteed for a selected number of years.",
      "With Sky Harbourview, you choose an available 3-, 5-, 7- or 10-year guarantee period. The applicable interest rate is established when the policy is issued and remains in effect for that guarantee period.",
      "That can make the role of this portion of retirement savings relatively straightforward: Know the rate. Know the period.",
    ],
  },

  contractProvides: {
    eyebrow: "Why consider",
    heading: "Why Consider Sky Harbourview MYGA?",
    items: [
      { title: "Guaranteed Interest Rate", body: "Know the applicable interest rate for the guarantee period selected at issue." },
      { title: "Principal Protection", body: "Contract value is not directly exposed to stock-market losses, subject to contract terms and the claims-paying ability of Oceanview." },
      { title: "Multiple Time Horizons", body: "Choose from 3-, 5-, 7- and 10-year guarantee periods." },
      { title: "Tax-Deferred Accumulation", body: "Interest in a nonqualified annuity generally accumulates tax-deferred until distributed." },
      { title: "Annual Withdrawal Access", body: "After the first 12 months, up to 10% of account value is available for withdrawal annually without surrender charges, subject to contract terms. The minimum withdrawal amount is $250." },
      { title: "Additional Waiver Protections", body: "Terminal Illness and Nursing Home Confinement Waivers are included at no additional charge and may waive applicable surrender charges and Market Value Adjustments for qualifying withdrawals after the first contract anniversary." },
    ],
  },

  howItWorks: {
    eyebrow: "How it works",
    heading: "How Sky Harbourview Works",
    steps: [
      "Choose Your Guarantee Period. Select the available guarantee period that best aligns with the expected timeline for the money. 3 | 5 | 7 | 10 Years.",
      "Lock In the Applicable Rate. The crediting rate is established at policy issue for the guarantee period selected. That rate remains in effect during the guarantee period and does not automatically change if market interest rates move higher or lower.",
      "Let Interest Accumulate. Interest is credited according to the terms of the contract while the guaranteed rate remains in effect. A guaranteed rate can make the accumulation path easier to understand in advance, assuming no withdrawals or other contract activity affecting value.",
      "Access Money If Needed. After the first 12 months, the contract provides annual withdrawal access according to its terms. Withdrawals exceeding the available free-withdrawal amount may be subject to surrender charges and a Market Value Adjustment.",
      "Decide What Happens Next. When the guarantee period ends, you reach another decision point. You may have the opportunity to surrender, transfer or renew the contract for another available guarantee period at the then-current renewal rate. If no election is made, the contract renews at the then-current renewal rate, subject to contract terms.",
    ],
  },

  simpleExample: {
    eyebrow: "Timeline",
    heading: "Match the Guarantee Period to the Money’s Timeline",
    sub: "The highest available rate or longest available term is not necessarily the right starting point. Consider:",
    scenarios: [
      { title: "When might you need this money?", body: "Choose a guarantee period that aligns with the realistic timeline for the assets." },
      { title: "How much liquidity should remain elsewhere?", body: "An annuity generally should not replace emergency savings or money expected to be needed for ordinary near-term expenses." },
      { title: "How much certainty do you value?", body: "A guaranteed rate can provide greater predictability about how this portion of retirement savings may accumulate." },
      { title: "What might change before the period ends?", body: "Consider future spending, health, family needs and other circumstances that could affect your need for access." },
      { title: "What happens at the end?", body: "A MYGA guarantee period creates a future decision point—not necessarily a permanent decision." },
    ],
  },

  whyGuaranteedCap: {
    eyebrow: "When to explore",
    heading: "When Sky Harbourview May Be Worth Exploring",
    sub: "Sky Harbourview may be worth discussing if you find yourself saying: “I want to know what this money will earn for the next several years.” The fit depends on your broader financial situation, time horizon, liquidity needs and retirement objectives.",
    worthExploring: {
      heading: "You may value",
      bullets: [
        "A guaranteed interest rate for a defined period",
        "Principal protection from direct stock-market losses",
        "Multiple guarantee-period choices",
        "Tax-deferred accumulation, where applicable",
        "Contract-based annual withdrawal access",
        "Additional protection for qualifying terminal illness or nursing home confinement",
        "Access to the product through a participating bank or credit union",
      ],
    },
  },

  capDistinction: {
    complianceLabel: "Tradeoff",
    heading: "Rate Certainty Has a Tradeoff",
    body: "With Sky Harbourview, the applicable rate is guaranteed for the selected guarantee period. That provides certainty about the rate applied to the contract during that period. But if market interest rates rise, the contract does not automatically move to the higher rates that may become available. That is the exchange. For someone who values knowing the rate in advance, that tradeoff may fit the role of the money.",
    protection: {
      title: "Greater certainty about the rate",
      body: "The applicable rate is guaranteed for the selected guarantee period.",
    },
    tradeoff: {
      title: "Less flexibility to respond automatically to future rate increases",
      body: "If market interest rates rise, the contract does not automatically move to the higher rates that may become available.",
    },
  },

  rateGuarantee: {
    eyebrow: "Access",
    heading: "Accessing Your Money",
    points: [
      "Free Partial Withdrawals. After the first 12 months, up to 10% of account value is available for withdrawal annually without surrender charges. The minimum withdrawal amount is $250. A free withdrawal means the withdrawal is not subject to the applicable surrender charge. Taxes and other contract consequences may still apply.",
      "Surrender Charges. Sky Harbourview is designed as a long-term retirement product. Withdrawals above the available 10% free-withdrawal amount during the surrender-charge period may be subject to a surrender charge. The surrender-charge schedule depends on the guarantee period selected and may vary by state.",
      "Market Value Adjustment. What is an MVA? A Market Value Adjustment may apply to withdrawals that are subject to surrender charges. The MVA can increase or decrease the surrender value of an applicable withdrawal depending on changes in market interest rates and the formula described in the contract. The MVA does not apply in California. Learn More About Market Value Adjustments.",
    ],
  },

  keyTerms: {
    eyebrow: "At a glance",
    heading: "Sky Harbourview MYGA At a Glance",
    items: [
      { label: "Product Type", value: "Single Premium Deferred Annuity with Market Value Adjustment, where applicable" },
      { label: "Distribution", value: "Participating banks and credit unions" },
      { label: "Guarantee Periods", value: "3, 5, 7 and 10 years" },
      { label: "Minimum Premium", value: "$20,000 Qualified or Nonqualified" },
      { label: "Issue Age — 3 and 5 Years", value: "Up to age 89 + 364 days" },
      { label: "Issue Age — 7 and 10 Years", value: "Up to age 84 + 364 days" },
      { label: "Crediting Rate", value: "Established at issue for the selected guarantee period" },
      { label: "Minimum Guaranteed Crediting Rate", value: "1%" },
      { label: "Free Partial Withdrawals", value: "After first 12 months, up to 10% of account value annually" },
      { label: "Minimum Withdrawal", value: "$250" },
      { label: "Terminal Illness Waiver", value: "Included at no additional charge" },
      { label: "Nursing Home Confinement Waiver", value: "Included at no additional charge" },
      { label: "Market Value Adjustment", value: "Applies where applicable to withdrawals subject to surrender charges; not applicable in California" },
      { label: "Death Benefit", value: "Contract value without surrender charges or MVA, subject to contract terms" },
      { label: "Spousal Continuation", value: "Available, subject to contract terms" },
    ],
  },

  riders: {
    eyebrow: "Waivers",
    heading: "Added Protection When Life Changes",
    sub: "Retirement plans can change because life changes. Sky Harbourview includes two waiver provisions at no additional charge that may provide additional access if certain health events occur.",
    items: [
      { title: "Terminal Illness Waiver", body: "Additional access following a qualifying terminal illness. After the first contract anniversary, applicable surrender charges and Market Value Adjustments may be waived on a withdrawal if the contract owner is terminally ill and not expected to live more than 12 months. The terminal illness must be diagnosed by a qualified physician after the contract issue date, and proof must be provided to Oceanview. Included at no additional charge." },
      { title: "Nursing Home Confinement Waiver", body: "Additional access following qualifying nursing home confinement. After the first contract anniversary, applicable surrender charges and Market Value Adjustments may be waived on a withdrawal if the contract owner meets the contract’s requirements for nursing home confinement. Qualifying confinement is defined as at least 90 consecutive days, or at least 90 days with no more than a six-month break in confinement. The confinement must be medically necessary and prescribed by a qualified physician. Required proof must be furnished according to the contract. Included at no additional charge." },
    ],
  },

  surrenderOptions: {
    eyebrow: "End of guarantee period",
    heading: "What Happens When the Guarantee Period Ends?",
    sub: "Before the end of the guarantee period, Oceanview provides notice that the period is ending and information about the applicable renewal rate and available options. Depending on the contract and options available at that time, you may be able to:",
    items: [
      { title: "Renew", body: "Continue with another available guarantee period at the then-current renewal rate." },
      { title: "Withdraw", body: "Take some or all of the contract value according to the applicable end-of-period provisions." },
      { title: "Transfer", body: "Move eligible funds to another available financial product or annuity." },
      { title: "Reconsider the Timeline", body: "Select another available guarantee period if the role or timing of the money has changed." },
      { title: "Death Benefit", body: "If the applicable death-benefit provisions are triggered, the contract value is available without surrender charges or a Market Value Adjustment, subject to contract terms. Spousal continuation may also be available." },
    ],
    footnote: "The question at renewal is not only: “What is the new rate?” It is also: “What do I need this money to do next?”",
  },

  incomeOptions: {
    eyebrow: "Income",
    heading: "Retirement Income Options",
    sub: "Sky Harbourview includes settlement options if the contract is annuitized. Annuitization is one potential way to receive retirement income and may affect future access to the underlying contract value.",
    items: [
      { title: "Life Only", body: "Available if the contract is annuitized." },
      { title: "Life with 10-Year Period Certain", body: "Available if the contract is annuitized." },
      { title: "Joint and Last Survivor with 10-Year Period Certain", body: "Available if the contract is annuitized." },
    ],
  },

  tailBlocks: [
    {
      id: "compare-harbourview",
      navLabel: "Sky Harbourview and Harbourview",
      eyebrow: "Compare",
      heading: "Sky Harbourview and Harbourview MYGA",
      sub: "The same fundamental MYGA approach, offered through different distribution channels. Both Sky Harbourview and Harbourview MYGA provide a traditional multi-year guaranteed annuity structure built around a rate established for a defined guarantee period.",
      columns: [
        {
          title: "Sky Harbourview MYGA",
          body: "Available through participating banks and credit unions. Includes Terminal Illness and Nursing Home Confinement Waivers at no additional charge.",
        },
        {
          title: "Harbourview MYGA",
          body: "Available through Oceanview’s independent insurance distribution channel. Offers a broader selection of available guarantee periods.",
        },
      ],
      footnote: "Both products are designed around the same core client priority: Multi-year rate certainty.",
    },
    {
      id: "not-a-deposit",
      navLabel: "Not a deposit",
      eyebrow: "Distribution",
      heading: "An Insurance Product Offered Through a Financial Institution",
      paragraphs: [
        "Sky Harbourview may be offered through a bank or credit union, but it is an insurance product—not a bank or credit-union deposit.",
        "It is: Not FDIC-insured. Not NCUA/NCUSIF-insured. Not a deposit. Not guaranteed by the bank or credit union. Subject to the claims-paying ability of Oceanview Life and Annuity Company.",
        "Understanding that distinction is an important part of evaluating any annuity offered through a financial institution.",
      ],
    },
    {
      id: "rates-again",
      navLabel: "Review current rates",
      eyebrow: "Current rates",
      heading: "Current Rates",
      paragraphs: [
        "See what Sky Harbourview offers today.",
        "Review current APYs across the available 3-, 5-, 7- and 10-year guarantee periods.",
        "View Current Sky Harbourview Rates.",
        "Rates are subject to change until established according to the applicable contract and rate-lock provisions.",
      ],
    },
    {
      id: "understand-mygas",
      navLabel: "Understand MYGAs",
      eyebrow: "Annuities, explained",
      heading: "Want to Understand MYGAs First?",
      sub: "How Multi-Year Guaranteed Annuities Work",
      paragraphs: [
        "Learn how MYGAs work, including guaranteed rates, time horizons, withdrawals, surrender provisions and what happens when the guarantee period ends.",
        "Learn How MYGAs Work.",
      ],
    },
    {
      id: "why-oceanview",
      navLabel: "Why Oceanview",
      eyebrow: "Why Oceanview",
      heading: "Why Oceanview?",
      sub: "Clear solutions. Competitive value. Long-term focus. Oceanview focuses on fixed annuity solutions designed to make important retirement decisions easier to understand.",
      items: [
        { title: "Straightforward by Design", body: "Clearly defined product features and terms help make it easier to understand what a contract does and what to expect over time." },
        { title: "Competitive Value", body: "Oceanview seeks to provide competitive rates and meaningful value across a range of retirement needs." },
        { title: "Financial Strength", body: "Oceanview Life and Annuity Company is rated A (Excellent) by AM Best with a Stable outlook. The A rating is the third highest of AM Best’s 15 financial strength rating categories." },
        { title: "A Long-Term View", body: "An annuity relationship extends beyond the issue date. Oceanview supports policyholders and financial professionals throughout the life of the contract." },
      ],
      footnote: "Discover the Oceanview Difference.",
    },
    {
      id: "professionals",
      navLabel: "For financial professionals",
      eyebrow: "For financial professionals",
      heading: "Sky Harbourview MYGA Resources",
      sub: "Access materials to support product evaluation and the client conversation.",
      links: [
        { label: "Current Rate Sheet", hash: "client-resources?tab=rates" },
        { label: "Product Spec Sheet", hash: "brochures" },
        { label: "Client Brochure", hash: "brochures" },
        { label: "Forms & Documents", hash: "brochures" },
        { label: "State Availability", hash: "state-approval" },
        { label: "Annuities, Explained", hash: "insights" },
        { label: "Client Conversation Tools", hash: "sales-tools" },
        { label: "Contact Oceanview Sales", hash: "contact" },
      ],
    },
    {
      id: "important-information",
      navLabel: "Important information",
      eyebrow: "Important information",
      heading: "Important Information",
      paragraphs: [
        "This material is intended for general educational purposes and does not provide individualized investment, tax or legal advice or recommend the purchase or replacement of any financial product.",
        "Sky Harbourview Multi-Year Guaranteed Annuity is a single premium deferred annuity designed for long-term retirement purposes. Product features, rates, guarantees, surrender provisions, form numbers and availability may vary by state.",
        "The applicable crediting rate is established at policy issue for the guarantee period selected. At the end of a guarantee period, a new renewal rate may apply. Future renewal rates are not known in advance and may be higher or lower than the initial rate, subject to applicable contractual guarantees.",
        "The Terminal Illness and Nursing Home Confinement Waivers are subject to the eligibility requirements, definitions, timing provisions and documentation requirements stated in the contract.",
        "Guarantees are subject to the claims-paying ability of Oceanview Life and Annuity Company.",
        "Withdrawals in excess of applicable free partial withdrawal amounts may be subject to surrender charges and a Market Value Adjustment. An MVA may increase or decrease the amount received depending on market interest-rate changes and the contract formula. MVA provisions do not apply in California.",
        "Withdrawals reduce contract value and may reduce future interest or other contract benefits. Taxable distributions may be subject to ordinary income tax. Certain taxable distributions before age 59½ may also be subject to an additional federal tax unless an exception applies.",
        "Annuities purchased within an IRA or another tax-qualified retirement arrangement do not provide additional tax deferral because the underlying account is already tax-deferred. Other contractual guarantees and insurance features should be evaluated independently.",
        "Oceanview Life and Annuity Company and its representatives do not provide tax or legal advice. Consult qualified tax and legal professionals regarding your individual circumstances.",
        "Sky Harbourview is an insurance product. It is not guaranteed by any bank or credit union, is not insured by the FDIC, NCUA/NCUSIF or any other federal government agency, is not a deposit and may lose value.",
        "Annuities issued by Oceanview Life and Annuity Company, 1331 17th Street, Suite 1050, Denver, CO 80202. In California, Oceanview does business as Oceanview Life and Annuity Insurance Company.",
      ],
    },
  ],

  cta: {
    heading: "See what Sky Harbourview offers today.",
    sub: "Review current APYs across the available 3-, 5-, 7- and 10-year guarantee periods. Rates are subject to change until established according to the applicable contract and rate-lock provisions.",
    buttonLabel: "View Current Sky Harbourview Rates",
  },
}

export default function SkyHarbourviewMYGAPage() {
  return <ProductDetailPage product={PRODUCT} />
}
