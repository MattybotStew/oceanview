import ProductDetailPage from './ProductDetailPage.jsx'

const PRODUCT = {
  category: "Fixed Indexed Annuity",
  categoryShort: "Harbourview FIA",
  name: "Harbourview Fixed Indexed Annuity",
  heroTitle: "Protection with broader interest-crediting strategy choice.",
  heroSubtitle: "Harbourview Fixed Indexed Annuity is designed for clients who want to protect a portion of retirement savings from losses caused by negative index performance while maintaining the opportunity to earn interest through a range of index-linked and fixed-interest strategies. With multiple contract terms, indexes and crediting approaches, Harbourview provides greater choice in how an indexed allocation can be structured.",
  tagline: "Protection with broader interest-crediting strategy choice.",
  image: "assets/harbourview-fia-hero.jpg",
  imgFocus: "38% 40%",
  heroCtaLabel: "View Current Rates",
  heroPrimaryId: "current-rates",
  heroCtaSecondary: "Download Product Brochure",
  heroSecondaryHash: "brochures",

  currentRates: {
    eyebrow: "Current rates",
    heading: "Current Harbourview FIA Rates",
    sub: "See today’s interest-crediting opportunities. The cap is the maximum indexed interest that may be credited for the applicable strategy and crediting period. It is not a guaranteed rate of return. Indexed interest depends on index performance and contract terms.",
    terms: ["3-Year", "5-Year", "7-Year", "10-Year"],
    rate: "X.XX%",
    detail: "Current S&P 500® Annual Point-to-Point Cap Rate",
    effectiveDate: "Effective [DATE]",
  },

  whatIs: {
    eyebrow: "Product overview",
    heading: "What Is Harbourview FIA?",
    paragraphs: [
      "Harbourview FIA is a single-premium deferred fixed indexed annuity designed for long-term retirement accumulation.",
      "A fixed indexed annuity can earn interest based in part on the performance of an external market index. You do not invest directly in the index. Instead, Oceanview calculates indexed interest according to the crediting strategy selected and the terms of the contract. Caps, participation rates and other crediting terms can limit the amount of interest credited.",
      "If the selected index produces a negative result for the applicable measurement period, the indexed strategy does not receive a negative indexed-interest credit.",
      "That creates a different relationship between protection and potential: protection from negative index performance with the opportunity to earn index-linked interest.",
    ],
  },

  stats: [
    { value: "$20K",          label: "Min. Premium",        sectionId: "key-terms" },
    { value: "3–10",          label: "Term Options (Yrs)",  sectionId: "key-terms" },
    { value: "10%",           label: "Free Withdrawal/Yr",  sectionId: "key-terms" },
    { value: "A (Excellent)", label: "A.M. Best Rating" },
  ],

  contractProvides: {
    eyebrow: "Why Harbourview FIA",
    heading: "Why Consider Harbourview FIA?",
    sub: "Harbourview combines protection from negative index performance with a broader set of ways to structure an indexed allocation.",
    items: [
      { title: "Protection From Negative Index Performance", body: "Indexed strategies are designed so negative performance of the selected index does not create a negative indexed-interest credit, subject to contract terms." },
      { title: "Index-Linked Interest Potential", body: "Positive index performance may result in interest being credited according to the selected strategy and applicable contract terms." },
      { title: "Broader Strategy Choice", body: "Choose from multiple index-linked approaches, including cap-rate, participation-rate, multi-year and risk-control strategies, along with a fixed-interest option." },
      { title: "Multiple Time Horizons", body: "Harbourview is available with 3-, 5-, 7- and 10-year contract terms." },
      { title: "Tax-Deferred Accumulation", body: "Interest in a nonqualified annuity generally accumulates tax-deferred until distributed." },
      { title: "Annual Withdrawal Access", body: "After the first contract year, up to 10% of contract value may be withdrawn annually without surrender charges or a Market Value Adjustment, subject to contract terms." },
      { title: "Additional Waiver Protections", body: "Terminal Illness and Nursing Home Confinement Waivers are included at no additional charge, subject to contract requirements." },
    ],
    download: { title: "Harbourview FIA Product Brochure", sub: "Client brochure for product evaluation" },
  },

  howItWorks: {
    eyebrow: "How Harbourview FIA works",
    heading: "How Harbourview FIA Works",
    steps: [
      "Choose Your Contract Term. Select an available term based on the role, time horizon and liquidity needs of the money. 3 | 5 | 7 | 10 Years.",
      "Choose How Interest May Be Credited. Harbourview offers multiple ways to allocate contract value among available index-linked and fixed-interest strategies. Each strategy uses its own method for determining how much interest, if any, is credited. You may be able to allocate among more than one available strategy, subject to contract terms.",
      "Measure Index Performance. For an indexed strategy, the applicable market index is measured according to the terms of that strategy. The index is used only as part of the interest-crediting calculation. You are not directly invested in the index.",
      "Apply the Crediting Terms. Depending on the strategy, indexed interest may be limited by a cap rate (the maximum amount of indexed interest that can be credited for the applicable crediting period), a participation rate (the percentage of the calculated index gain used in determining indexed interest), or other strategy terms.",
      "Credit Interest. At the end of the applicable crediting period, Oceanview determines whether indexed interest is due under the selected strategy. Positive index performance does not guarantee that the full index gain will be credited. If the applicable calculation does not produce positive indexed interest, the indexed-interest credit may be zero.",
    ],
  },

  simpleExample: {
    eyebrow: "Understand the cap",
    heading: "Understand the Cap",
    sub: "A cap rate can be an important part of an FIA strategy. Suppose an annual point-to-point strategy has an applicable cap of 8%. The cap is not the rate of return. It is the maximum indexed interest that may be credited under the applicable strategy for that crediting period. This illustration is not a current rate.",
    scenarios: [
      { title: "+5%", body: "The indexed-interest credit could be 5%, subject to contract terms." },
      { title: "+12%", body: "The indexed-interest credit would be limited to the 8% cap." },
      { title: "−6%", body: "The indexed-interest credit would be 0% rather than −6%, subject to the applicable strategy and contract terms." },
    ],
  },

  whyGuaranteedCap: {
    eyebrow: "When it may fit",
    heading: "When Harbourview FIA May Be Worth Exploring",
    sub: "Harbourview may be worth discussing if you find yourself saying: “I want protection from market downturns, but I still want some opportunity to earn interest based on market-index performance.” Harbourview is designed as a long-term retirement solution. The fit depends on your goals, time horizon, liquidity needs and broader financial situation.",
    worthExploring: {
      heading: "You may value",
      bullets: [
        "Protection from losses caused by negative index performance",
        "Index-linked interest potential",
        "A broader range of crediting strategies",
        "Multiple contract-term choices",
        "A fixed-interest option",
        "Tax-deferred accumulation, where applicable",
        "Contract-based annual access",
        "Additional waiver protections",
      ],
    },
  },

  capDistinction: {
    complianceLabel: "A deliberate tradeoff",
    heading: "Protection Does Not Mean Unlimited Growth",
    body: "A fixed indexed annuity creates a deliberate tradeoff. That means Harbourview should not be evaluated by asking “How much of the market do I get?” A more useful question is: “Does this balance of protection and limited index-linked potential fit the job I need this money to do?”",
    protection: {
      title: "What you receive",
      body: "Protection from losses caused by negative performance of the selected index, subject to contract terms.",
    },
    tradeoff: {
      title: "What you give up or limit in exchange",
      body: "Full participation in positive index performance. Caps, participation rates and other terms may limit the indexed interest credited.",
    },
  },

  rateGuarantee: {
    eyebrow: "Choosing a strategy",
    heading: "Choosing a Crediting Strategy",
    sub: "There is no single strategy that is best in every market environment.",
    points: [
      "How is index performance measured? Annual point-to-point, multi-year and monthly-average approaches can produce different results.",
      "How is positive performance translated into interest? Caps, participation rates and other terms determine how index performance may translate into credited interest.",
      "Which terms can change? Some crediting terms may be declared or reset according to the contract.",
      "How long is the crediting period? A longer measurement period can mean waiting longer before the applicable indexed-interest calculation is completed.",
      "Would a fixed-interest allocation be useful? Harbourview also provides a fixed-interest strategy for clients who want part or all of the allocation to earn interest without reference to an external index.",
    ],
    rateNote: "Current crediting terms may change unless specifically guaranteed by the contract.",
  },

  creditingStrategies: {
    eyebrow: "Crediting approaches",
    heading: "A Broader Menu of Crediting Approaches",
    sub: "Harbourview’s primary distinction within the Oceanview FIA portfolio is choice. Available strategy approaches include: Annual Point-to-Point With Cap — measures index performance between the beginning and end of an annual crediting period, with positive indexed interest subject to an applicable cap. Annual Point-to-Point With Participation Rate — measures annual index performance and applies an applicable participation rate in determining indexed interest. Two-Year Point-to-Point With Participation Rate — measures index performance over a two-year crediting period and applies an applicable participation rate. Monthly Average With Cap — uses monthly index values as part of the annual interest-crediting calculation, subject to an applicable cap. Risk-Control Index Strategies — use designated risk-control indexes with applicable participation-rate terms. Fixed Interest Strategy — provides interest based on a fixed rate declared by Oceanview rather than index performance. Harbourview materials include strategies associated with the S&P 500®, Nasdaq-100® and Russell 2000®, along with the fixed-interest strategy.",
    tabs: [
      {
        label: "S&P 500",
        strategies: [
          { name: "Annual Point-to-Point With Cap", term: "1-Year Term" },
          { name: "Annual Point-to-Point With Participation Rate", term: "1-Year Term" },
          { name: "Two-Year Point-to-Point With Participation Rate", term: "2-Year Term" },
          { name: "Monthly Average With Cap", term: "1-Year Term" },
          { name: "Risk-Control Index Strategies", term: "Risk-Controlled" },
        ],
      },
      {
        label: "Nasdaq-100",
        strategies: [
          { name: "Annual Point-to-Point With Cap", term: "1-Year Term" },
          { name: "Annual Point-to-Point With Participation Rate", term: "1-Year Term" },
          { name: "Two-Year Point-to-Point With Participation Rate", term: "2-Year Term" },
        ],
      },
      {
        label: "Russell 2000",
        strategies: [
          { name: "Annual Point-to-Point With Cap", term: "1-Year Term" },
          { name: "Annual Point-to-Point With Participation Rate", term: "1-Year Term" },
          { name: "Two-Year Point-to-Point With Participation Rate", term: "2-Year Term" },
          { name: "Risk-Control Index Strategies", term: "Risk-Controlled" },
        ],
      },
      {
        label: "Fixed Interest",
        strategies: [
          { name: "Fixed Interest Strategy", term: "Annual" },
        ],
      },
    ],
  },

  keyTerms: {
    eyebrow: "At a glance",
    heading: "Harbourview FIA At a Glance",
    sub: "Feature summary for Harbourview Fixed Indexed Annuity.",
    items: [
      { label: "Product Type", value: "Single Premium Deferred Fixed Indexed Annuity" },
      { label: "Contract Terms", value: "3, 5, 7 and 10 years" },
      { label: "Minimum Premium", value: "$20,000 Qualified or Nonqualified" },
      { label: "Issue Age — 3 and 5 Years", value: "Up to age 89 + 364 days" },
      { label: "Issue Age — 7 and 10 Years", value: "Up to age 84 + 364 days" },
      { label: "Indexed Interest", value: "Determined according to selected index strategy and applicable crediting terms" },
      { label: "Strategy Approaches", value: "Cap, participation-rate, multi-year, monthly-average and risk-control approaches" },
      { label: "Fixed-Interest Strategy", value: "Available" },
      { label: "Free Partial Withdrawals", value: "After first 12 months, up to 10% of contract value annually" },
      { label: "Minimum Withdrawal", value: "$250" },
      { label: "Terminal Illness Waiver", value: "Included at no additional charge" },
      { label: "Nursing Home Confinement Waiver", value: "Included at no additional charge" },
      { label: "Market Value Adjustment", value: "Applies where applicable to withdrawals subject to surrender charges; not applicable in California" },
      { label: "Death Benefit", value: "Contract value without surrender charges or MVA, subject to contract terms" },
      { label: "Spousal Continuation", value: "Available, subject to contract terms" },
    ],
    download: { title: "Product Spec Sheet", sub: "Contract specifications and state availability" },
  },

  surrenderSchedule: {
    eyebrow: "Accessing your money",
    heading: "Surrender Charges",
    sub: "Harbourview FIA is designed for long-term retirement purposes. Withdrawals above the available free-withdrawal amount during the surrender-charge period may be subject to surrender charges. Surrender-charge periods correspond with the available 3-, 5-, 7- and 10-year contract terms and may vary by state. After the first contract year, up to 10% of contract value as of the most recent contract anniversary may be withdrawn annually without surrender charges or an MVA. The minimum withdrawal amount is $250. Withdrawals reduce contract value and may affect future interest and other contract benefits. Taxes may also apply.",
    terms: ["3-Year", "5-Year", "7-Year", "10-Year"],
    rows: [
      { year: 1,  charges: ["8%",  "9%",  "9%",  "10%"] },
      { year: 2,  charges: ["7%",  "8%",  "8%",  "9%"]  },
      { year: 3,  charges: ["6%",  "7%",  "7%",  "8%"]  },
      { year: 4,  charges: [null,  "6%",  "6%",  "7%"]  },
      { year: 5,  charges: [null,  "5%",  "5%",  "6%"]  },
      { year: 6,  charges: [null,  null,  "4%",  "5%"]  },
      { year: 7,  charges: [null,  null,  "3%",  "4%"]  },
      { year: 8,  charges: [null,  null,  null,  "3%"]  },
      { year: 9,  charges: [null,  null,  null,  "2%"]  },
      { year: 10, charges: [null,  null,  null,  "1%"]  },
    ],
    footnote: "Surrender-charge percentages may vary by state.",
    mva: {
      heading: "What is an MVA?",
      body: "A Market Value Adjustment may apply to withdrawals that are subject to surrender charges. The MVA can increase or decrease the surrender value of an applicable withdrawal depending on changes in market interest rates and the formula described in the contract.",
      note: "The MVA does not apply in California.",
      linkLabel: "Learn More About Market Value Adjustments",
      hash: "client-resources?tab=glossary",
    },
  },

  riders: {
    eyebrow: "Added protection",
    heading: "Added Protection When Life Changes",
    sub: "Harbourview includes two waiver provisions at no additional charge that may provide additional access following certain qualifying health events.",
    items: [
      { title: "Terminal Illness Waiver", body: "After the first contract anniversary, applicable surrender charges and MVA may be waived on a withdrawal if the contract owner is terminally ill and not expected to live more than 12 months. The terminal illness must be diagnosed by a qualified physician after the contract issue date, and proof must be provided to Oceanview." },
      { title: "Nursing Home Confinement Waiver", body: "After the first contract anniversary, applicable surrender charges and MVA may be waived on a withdrawal following qualifying nursing home confinement. The contract defines qualifying confinement and applicable medical and documentation requirements." },
      { title: "Required Minimum Distributions", body: "For qualified contracts, Required Minimum Distributions taken after the first contract year are treated as free withdrawals under the applicable contract provisions, even when they exceed the standard free-withdrawal amount." },
      { title: "Death Benefit", body: "If the applicable death-benefit provisions are triggered before annuity payments begin, the death benefit is based on the contract value and is not subject to surrender charges or a Market Value Adjustment. Spousal continuation may also be available, subject to contract terms." },
    ],
  },

  surrenderOptions: {
    eyebrow: "Compare",
    heading: "Harbourview FIA or CapLock FIA?",
    sub: "Two approaches to protection and index-linked interest potential. Both products can provide protection from losses caused by negative index performance while offering the opportunity to earn index-linked interest. The difference is where each product places the emphasis. Which matters more: broader strategy choice—or greater certainty around the cap?",
    items: [
      { title: "Harbourview FIA — Broader Strategy Choice", body: "A broader menu of indexes and interest-crediting approaches provides more ways to structure an allocation. May be worth considering when the priority is: “I want more choice in how the indexed portion of my money can earn interest.”" },
      { title: "CapLock FIA — Greater Predictability Around the Cap", body: "Selected Cap Rate Guarantee Strategies establish the applicable cap at issue and keep it unchanged for the full surrender-charge period. May be worth considering when the priority is: “I want to know an important crediting term from the start.”" },
    ],
    link: { label: "Compare Harbourview & CapLock", hash: "caplock" },
  },

  incomeOptions: {
    eyebrow: "Settlement options",
    heading: "Retirement Income Options",
    sub: "Harbourview includes settlement options if the contract is annuitized. Once an applicable guaranteed income option is elected, the payment schedule and amount may become irrevocable according to the contract.",
    items: [
      { title: "Life Only", body: "Payments for the annuitant’s lifetime." },
      { title: "Life with 10-Year Period Certain", body: "Lifetime payments with a 10-year period certain." },
      { title: "Joint and Last Survivor with 10-Year Period Certain", body: "Payments based on two lives, with a 10-year period certain." },
    ],
    disclaimer: "This material is intended for general educational purposes and does not provide individualized investment, tax or legal advice or recommend the purchase or replacement of any financial product. Harbourview Fixed Indexed Annuity is a single-premium deferred fixed indexed annuity designed for long-term retirement purposes. Product features, crediting strategies, rates, caps, participation rates, guarantees, surrender provisions, form numbers and availability may vary by state. Funds allocated to an index-linked strategy do not directly participate in or invest in the stock market or any index. Index performance does not include dividends that may be paid on securities comprising an index. Indexed interest depends on the performance of the selected index, applicable crediting strategy and contract terms and may be zero. Caps, participation rates and other crediting terms may limit the amount of indexed interest credited. Positive index performance does not guarantee that interest will be credited. Protection from negative index performance applies to the applicable indexed-interest calculation and should not be interpreted to mean that every withdrawal or surrender will return the full contract value. Withdrawals, surrender charges, a Market Value Adjustment and other contract provisions can affect the amount received. Certain caps, participation rates and other crediting terms may change according to the contract and are subject to applicable contractual minimums and maximums. Guarantees are subject to the claims-paying ability of Oceanview Life and Annuity Company. Withdrawals in excess of applicable free-withdrawal amounts may be subject to surrender charges and a Market Value Adjustment. An MVA may increase or decrease the amount received depending on market interest-rate changes and the contract formula. MVA provisions do not apply in California. The Terminal Illness and Nursing Home Confinement Waivers are subject to the eligibility requirements, definitions, timing provisions, documentation requirements and claim approval stated in the contract. Withdrawals reduce contract value and may affect future interest and other benefits. Taxable distributions may be subject to ordinary income tax. Certain taxable distributions before age 59½ may also be subject to an additional federal tax unless an exception applies. Annuities purchased within an IRA or another tax-qualified retirement arrangement do not provide additional tax deferral because the underlying account is already tax-deferred. Other contractual guarantees and insurance features should be evaluated independently. Oceanview Life and Annuity Company and its representatives do not provide tax or legal advice. Consult qualified tax and legal professionals regarding individual circumstances. Annuities are products of the insurance industry. They are not guaranteed by a bank or credit union, are not insured by the FDIC, NCUA/NCUSIF or any other federal government agency, are not deposits and may lose value. Harbourview Fixed Indexed Annuity contracts, including generic policy form ICC19 OLA FIA and state variations, are issued by Oceanview Life and Annuity Company, 1331 17th Street, Suite 1050, Denver, CO 80202. In California, Oceanview does business as Oceanview Life and Annuity Insurance Company.",
  },

  sectionOrder: ["creditingStrategies", "rateGuarantee", "simpleExample"],

  navLabels: {
    creditingStrategies: "Crediting approaches",
    rateGuarantee: "Choosing a strategy",
    simpleExample: "Understand the cap",
  },

  tailBlocks: [
    {
      id: "understand-fias",
      navLabel: "Want to Understand FIAs First?",
      eyebrow: "Annuities, Explained",
      heading: "Want to Understand FIAs First?",
      sub: "Learn how FIAs use market indexes as part of an interest-crediting calculation, how caps and participation rates work, what protection means and what to understand before choosing a strategy.",
      links: [
        { label: "How Fixed Indexed Annuities Work", detail: "Learn How Fixed Indexed Annuities Work", hash: "fia-overview" },
      ],
    },
    {
      id: "retirement-situations",
      navLabel: "Have a Retirement Situation in Mind?",
      eyebrow: "Retirement Planning in Practice",
      heading: "Have a Retirement Situation in Mind?",
      cards: [
        {
          title: "“I want protection from market downturns. Do I have to give up growth potential?”",
          body: "Explore the tradeoff between downside protection and continued interest-crediting potential—and the role an FIA may play in that conversation.",
          cta: "Explore This Situation",
          hash: "les-market-volatility",
        },
        {
          title: "“I want certainty and growth potential. Do I have to choose one?”",
          body: "Explore whether different portions of retirement savings may be able to serve different roles rather than requiring every dollar to do the same job.",
          cta: "Explore This Situation",
          hash: "retirement-risk",
        },
      ],
    },
    {
      id: "fia-resources",
      navLabel: "Harbourview FIA Resources",
      eyebrow: "For Financial Professionals",
      heading: "Harbourview FIA Resources",
      sub: "Access materials to support product evaluation and the client conversation.",
      links: [
        { label: "Current Rate Sheet", detail: "Current caps, participation rates, and fixed rates", hash: "client-resources?tab=rates" },
        { label: "Product Spec Sheet", detail: "Contract specifications and state availability", hash: "brochures" },
        { label: "Client Brochure", detail: "Harbourview FIA product brochure", hash: "brochures" },
        { label: "Crediting Strategy Materials", detail: "Strategy descriptions for the client conversation", hash: "client-resources?tab=downloads" },
        { label: "Forms & Documents", detail: "Applications and forms", hash: "brochures" },
      ],
    },
  ],

  cta: {
    heading: "Why Oceanview?",
    sub: "Clear solutions. Competitive value. Long-term focus. Oceanview focuses on fixed annuity solutions designed to help make important retirement decisions easier to understand. Oceanview Life and Annuity Company is rated A (Excellent) by AM Best with a Stable outlook. The A rating is the third highest of AM Best’s 15 financial strength rating categories.",
    buttonLabel: "Discover the Oceanview Difference",
  },
}

export default function HarbourviewFIAPage() {
  return <ProductDetailPage product={PRODUCT} />
}
