import ProductDetailPage from './ProductDetailPage.jsx'

const PRODUCT = {
  category: "Multi-Year Guaranteed Annuity",
  categoryShort: "Harbourview MYGA",
  name: "Harbourview Multi-Year Guaranteed Annuity",
  heroTitle: "Know your rate. Know your period.",
  heroSubtitle: "Harbourview Multi-Year Guaranteed Annuity provides a guaranteed interest rate for the guarantee period selected at issue—helping give a portion of retirement savings a more predictable accumulation path. Choose from multiple guarantee periods to match the timeline of the money and the role you want it to play.",
  tagline: "Know your rate. Know your period.",
  image: "assets/harbourview-myga-hero.jpg",
  imgFocus: "center",
  heroCtaLabel: "View Current Rates",
  heroPrimaryId: "current-rates",
  heroCtaSecondary: "Download Product Brochure",
  heroSecondaryHash: "brochures",

  navLabels: {
    currentRates: "Current rates",
    whatIs: "What is Harbourview MYGA",
    contractProvides: "Why consider Harbourview MYGA",
    howItWorks: "How Harbourview MYGA works",
    simpleExample: "Match the guarantee period",
    whyGuaranteedCap: "When it may be worth exploring",
    capDistinction: "What to consider",
    keyTerms: "At a glance",
    riders: "Accessing your money",
    surrenderOptions: "When the guarantee period ends",
    incomeOptions: "Retirement income options",
  },

  stats: [
    { value: "$20K",          label: "Min. Premium",         sectionId: "key-terms" },
    { value: "2–10",          label: "Guarantee Periods",    sectionId: "key-terms" },
    { value: "10%",           label: "Free Withdrawal/Yr",   sectionId: "key-terms" },
    { value: "1%",            label: "Min. Guaranteed Rate", sectionId: "key-terms" },
    { value: "A (Excellent)", label: "A.M. Best Rating",     sectionId: "why-oceanview" },
  ],

  currentRates: {
    eyebrow: "Current rates",
    heading: "Current Harbourview MYGA Rates",
    sub: "Lock in a guaranteed rate for a defined period.",
    terms: ["2-Year", "3-Year", "4-Year", "5-Year", "6-Year", "7-Year", "10-Year"],
    rate: "X.XX%",
    detail: "Current APY. Rates may vary by guarantee period and premium amount. The applicable crediting rate is established at issue for the guarantee period selected. View All Harbourview Rates.",
    effectiveDate: "Effective [DATE]",
  },

  whatIs: {
    eyebrow: "Product overview",
    heading: "What Is Harbourview MYGA?",
    paragraphs: [
      "Harbourview MYGA is a single-premium deferred fixed annuity designed for long-term retirement accumulation.",
      "A MYGA—Multi-Year Guaranteed Annuity—provides an interest rate guaranteed for a selected number of years.",
      "With Harbourview, the applicable rate is established when the contract is issued and remains in effect for the selected guarantee period.",
      "That makes one of the most important questions relatively straightforward: “What will this portion of my retirement savings earn during the guarantee period?”",
    ],
  },

  contractProvides: {
    eyebrow: "Why consider",
    heading: "Why Consider Harbourview MYGA?",
    items: [
      { title: "Guaranteed Interest Rate", body: "Know the applicable interest rate for the guarantee period selected at issue." },
      { title: "Principal Protection", body: "Your contract value is not directly exposed to stock-market losses, subject to contract terms and the claims-paying ability of Oceanview." },
      { title: "Choice of Timeline", body: "Select from available 2-, 3-, 4-, 5-, 6-, 7- and 10-year guarantee periods." },
      { title: "Tax-Deferred Accumulation", body: "Interest in a nonqualified annuity generally accumulates tax-deferred until distributed." },
      { title: "Annual Withdrawal Access", body: "After the first 12 months, up to 10% of account value is available for withdrawal annually without surrender charges, subject to contract terms." },
      { title: "A Defined Future Decision Point", body: "When the guarantee period ends, you have an opportunity to reconsider what you want the money to do next." },
    ],
  },

  howItWorks: {
    eyebrow: "How it works",
    heading: "How Harbourview MYGA Works",
    steps: [
      "Choose Your Guarantee Period. Select an available guarantee period based on your goals, expected time horizon and liquidity needs. 2 | 3 | 4 | 5 | 6 | 7 | 10 Years.",
      "Lock In the Applicable Rate. The crediting rate is established at issue for the guarantee period selected. That rate does not automatically change during the guarantee period if market interest rates move higher or lower.",
      "Let Interest Accumulate. Interest is credited according to the contract while the applicable guaranteed rate remains in effect. Assuming no withdrawals or other activity affecting contract value, a guaranteed rate can make the accumulation path easier to understand in advance.",
      "Access Money If Needed. After the first 12 months, the contract provides annual withdrawal access according to its terms. Withdrawals beyond the free amount may be subject to surrender charges and a Market Value Adjustment.",
      "Decide What Happens Next. At the end of the guarantee period, you reach a new decision point. Depending on the options available at that time, you may be able to surrender, transfer or renew the contract for another guarantee period at the then-current renewal rate.",
    ],
  },

  simpleExample: {
    eyebrow: "Timeline",
    heading: "Match the Guarantee Period to the Money’s Timeline",
    sub: "A longer guarantee period can provide more years of rate certainty. But that does not mean every retirement dollar should be committed for the same amount of time. Before selecting a guarantee period, consider:",
    scenarios: [
      { title: "When might you need this money?", body: "A guarantee period should align with the realistic timeline for the portion of savings being committed." },
      { title: "How much liquidity should remain elsewhere?", body: "An annuity generally should not replace emergency savings or money expected to be needed for ordinary near-term expenses." },
      { title: "How valuable is knowing the rate in advance?", body: "A fixed rate can provide greater certainty about the accumulation path." },
      { title: "What happens when the guarantee period ends?", body: "Think beyond today's rate. Consider what role the money may need to play at the next decision point." },
    ],
  },

  whyGuaranteedCap: {
    eyebrow: "When to explore",
    heading: "When Harbourview MYGA May Be Worth Exploring",
    sub: "Harbourview may be worth discussing if you find yourself saying: “I want to know what this money will earn for the next several years.” The fit depends on your broader financial situation, time horizon, liquidity needs and retirement objectives.",
    worthExploring: {
      heading: "You may value",
      bullets: [
        "A guaranteed interest rate",
        "Principal protection from direct stock-market losses",
        "A choice of multiple time horizons",
        "Tax-deferred accumulation, where applicable",
        "Defined contract-based access",
        "A clear future decision point",
      ],
    },
  },

  capDistinction: {
    complianceLabel: "What to consider",
    heading: "Rate Certainty Has a Tradeoff",
    body: "The Harbourview rate is guaranteed for the selected guarantee period. If market interest rates rise during that period, your contract does not automatically move to the higher rates that may become available. That is the exchange:",
    protection: {
      title: "Greater certainty about today’s rate",
      body: "For someone who values knowing the rate in advance, that may be an acceptable tradeoff.",
    },
    tradeoff: {
      title: "Less flexibility to respond automatically to future rate increases",
      body: "For someone who places greater value on future rate responsiveness, another approach may deserve consideration.",
    },
  },

  riders: {
    eyebrow: "Access",
    heading: "Accessing Your Money",
    items: [
      { title: "Free Partial Withdrawals", body: "After the first 12 months, up to 10% of account value may be withdrawn annually without surrender charges. The minimum withdrawal amount is $250. A free withdrawal means the withdrawal is not subject to the applicable surrender charge. Other consequences, including taxes and contract-value reductions, may still apply." },
      { title: "Surrender Charges", body: "Harbourview MYGA is designed as a long-term retirement product. Withdrawals exceeding the contract’s free-withdrawal allowance during the surrender-charge period may be subject to surrender charges. The applicable surrender schedule depends on the guarantee period selected and may vary by state." },
      { title: "Market Value Adjustment", body: "What is an MVA? A Market Value Adjustment may apply to withdrawals that are subject to surrender charges. The MVA can increase or decrease the surrender value of the applicable withdrawal depending on market interest rates and the formula described in the contract. The MVA does not apply in California. Learn More About Market Value Adjustments." },
    ],
  },

  surrenderOptions: {
    eyebrow: "End of guarantee period",
    heading: "What Happens When the Guarantee Period Ends?",
    sub: "The end of a MYGA guarantee period is not simply an expiration date. It is a new retirement-planning decision point. Oceanview notifies contract owners before the guarantee period ends and provides information about the applicable renewal rate and available options. Depending on the contract and options available at that time, you may be able to:",
    items: [
      { title: "Renew", body: "Continue with another available guarantee period at the then-current renewal rate." },
      { title: "Withdraw", body: "Take some or all of the contract value according to the applicable end-of-period provisions." },
      { title: "Transfer", body: "Move eligible funds to another available financial product or annuity." },
      { title: "Reconsider the Timeline", body: "Choose a different guarantee period if your needs have changed." },
      { title: "Death Benefit", body: "If the owner dies, the applicable death benefit is the contract value without surrender charges or an MVA, subject to contract terms. Spousal continuation may also be available." },
    ],
    footnote: "The better question at renewal is not simply: “What is the new rate?” It is: “What do I need this money to do next?” Explore: My MYGA Guarantee Period Is Ending. What Should I Do Next?",
  },

  incomeOptions: {
    eyebrow: "Income",
    heading: "Retirement Income Options",
    sub: "Harbourview MYGA includes settlement options if the contract is annuitized. Annuitization is one potential way to receive income and may affect future access to the underlying contract value.",
    items: [
      { title: "Life Only", body: "Payments for the annuitant’s life." },
      { title: "Life with 10-Year Period Certain", body: "Life income with a 10-year period certain." },
      { title: "Joint and Last Survivor with 10-Year Period Certain", body: "Joint and last survivor income with a 10-year period certain." },
    ],
  },

  keyTerms: {
    eyebrow: "At a glance",
    heading: "Harbourview MYGA At a Glance",
    items: [
      { label: "Product Type", value: "Single Premium Deferred Annuity" },
      { label: "Guarantee Periods", value: "2, 3, 4, 5, 6, 7 and 10 years" },
      { label: "Minimum Premium", value: "$20,000 Qualified or Nonqualified" },
      { label: "Issue Age — 2 through 6 Years", value: "Up to age 89 + 364 days" },
      { label: "Issue Age — 7 and 10 Years", value: "Up to age 84 + 364 days" },
      { label: "Crediting Rate", value: "Established at issue for the selected guarantee period" },
      { label: "Minimum Guaranteed Crediting Rate", value: "1%" },
      { label: "Free Partial Withdrawals", value: "After first 12 months, up to 10% of account value annually" },
      { label: "Minimum Withdrawal", value: "$250" },
      { label: "Market Value Adjustment", value: "Applies where applicable to withdrawals subject to surrender charges; not applicable in California" },
      { label: "Death Benefit", value: "Contract value without surrender charges or MVA, subject to contract terms" },
      { label: "Spousal Continuation", value: "Available, subject to contract terms" },
    ],
  },

  tailBlocks: [
    {
      id: "compare-currentrate",
      navLabel: "Harbourview or CurrentRate",
      eyebrow: "Compare",
      heading: "Harbourview MYGA or CurrentRate MYGA?",
      sub: "Two approaches to fixed-annuity interest. Both products provide fixed-annuity principal protection and long-term accumulation, but they take different approaches to the interest rate.",
      columns: [
        {
          title: "Harbourview MYGA",
          kicker: "Multi-Year Rate Certainty",
          body: "Know the applicable rate for the selected guarantee period. May be worth considering when the client priority is: “I want to know my rate in advance.”",
        },
        {
          title: "CurrentRate MYGA",
          kicker: "Annual Rate Responsiveness",
          body: "Know the first-year rate and the contract-defined methodology that determines the credited rate annually beginning in year two. May be worth considering when the client priority is: “I want some connection to future interest rates.”",
        },
      ],
      footnote: "Which matters more to you: knowing the rate for the full guarantee period—or allowing the rate to adjust as interest rates change? Compare Harbourview & CurrentRate.",
    },
    {
      id: "rates-again",
      navLabel: "Review current rates",
      eyebrow: "Current rates",
      heading: "Current Rates",
      paragraphs: [
        "See what Harbourview MYGA offers today.",
        "Review current APYs by guarantee period and premium amount.",
        "View Current Harbourview MYGA Rates.",
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
        "Learn how a MYGA works, including guarantee periods, interest crediting, withdrawals, surrender provisions and what happens when the guarantee period ends.",
        "Learn How MYGAs Work.",
      ],
    },
    {
      id: "situations",
      navLabel: "Retirement situations",
      eyebrow: "Retirement planning in practice",
      heading: "Have a Retirement Situation in Mind?",
      items: [
        { title: "“I won’t need this money for five years. What should I do with it?”", body: "Explore how a defined time horizon can help turn a general savings decision into a more deliberate retirement-planning choice. Explore This Situation." },
        { title: "“My MYGA guarantee period is ending. What should I do next?”", body: "Explore the questions that can help you determine what role the money needs to play after the current guarantee ends. Explore This Situation." },
      ],
    },
    {
      id: "why-oceanview",
      navLabel: "Why Oceanview",
      eyebrow: "Why Oceanview",
      heading: "Why Oceanview?",
      sub: "Clear solutions. Competitive value. Long-term focus. Oceanview focuses on fixed annuity solutions designed to help make important retirement decisions easier to understand.",
      items: [
        { title: "Straightforward by Design", body: "Clearly defined product features and terms can make it easier to understand what the contract does—and what to expect over time." },
        { title: "Competitive Value", body: "Oceanview seeks to provide competitive rates and meaningful value across a range of retirement needs." },
        { title: "Financial Strength", body: "Oceanview Life and Annuity Company is rated A (Excellent) by AM Best with a Stable outlook. The A rating is the third highest of AM Best’s 15 financial strength rating categories." },
        { title: "Long-Term Commitment", body: "An annuity relationship extends beyond the issue date. Oceanview supports policyholders and financial professionals throughout the life of the contract." },
      ],
      footnote: "Discover the Oceanview Difference.",
    },
    {
      id: "professionals",
      navLabel: "For financial professionals",
      eyebrow: "For financial professionals",
      heading: "Harbourview MYGA Resources",
      sub: "Access materials to support product evaluation and the client conversation.",
      paragraphs: [
        "Current Rate Sheet. Product Spec Sheet. Client Brochure. Forms & Documents. State Availability. Compare Harbourview & CurrentRate. Client Conversation Tools. Discuss a Case With Sales. Agent Portal.",
      ],
    },
    {
      id: "important-information",
      navLabel: "Important information",
      eyebrow: "Important information",
      heading: "Important Information",
      paragraphs: [
        "This material is intended for general educational purposes and does not provide individualized investment, tax or legal advice or recommend the purchase or replacement of any financial product.",
        "The Harbourview Multi-Year Guaranteed Annuity is a single premium deferred annuity designed for long-term retirement purposes. Product features, form numbers, rates, guarantees, surrender provisions and availability may vary by state.",
        "Rates are guaranteed for the guarantee period selected at policy issue, subject to the terms of the contract. At the end of a guarantee period, a new renewal rate may apply. Future renewal rates are not known in advance and may be higher or lower than the initial rate, subject to applicable contractual guarantees.",
        "Guarantees are subject to the claims-paying ability of Oceanview Life and Annuity Company.",
        "Withdrawals in excess of applicable free partial withdrawal amounts may be subject to surrender charges and a Market Value Adjustment. An MVA may increase or decrease the amount received depending on market interest rates and the contract formula. MVA provisions do not apply in California.",
        "Withdrawals reduce contract value and may reduce future interest or other contract benefits. Taxable distributions may be subject to ordinary income tax. Certain taxable distributions before age 59½ may also be subject to an additional federal tax unless an exception applies.",
        "Annuities purchased within an IRA or another tax-qualified retirement arrangement do not provide additional tax deferral because the underlying account is already tax-deferred. Other contractual guarantees and insurance features should be evaluated independently.",
        "Oceanview Life and Annuity Company and its representatives do not provide tax or legal advice. Consult qualified tax and legal professionals regarding your individual circumstances.",
        "Annuities are products of the insurance industry. They are not guaranteed by a bank or credit union, are not insured by the FDIC, NCUA/NCUSIF or any other federal government agency, are not deposits and may lose value.",
        "Annuities issued by Oceanview Life and Annuity Company, 1331 17th Street, Suite 1050, Denver, CO 80202. In California, Oceanview does business as Oceanview Life and Annuity Insurance Company.",
      ],
    },
  ],

  cta: {
    heading: "See what Harbourview MYGA offers today.",
    sub: "Review current APYs by guarantee period and premium amount. Rates are subject to change until established according to the applicable contract and rate-lock provisions.",
    buttonLabel: "View Current Harbourview MYGA Rates",
  },
}

export default function HarbourviewMYGAPage() {
  return <ProductDetailPage product={PRODUCT} />
}
