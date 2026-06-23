import ProductDetailPage from './ProductDetailPage.jsx'

const PRODUCT = {
  category: "Fixed Indexed Annuity",
  categoryShort: "Fixed Indexed",
  name: "Harbourview Fixed Indexed Annuity",
  tagline: "Balanced growth potential linked to market indexes, with 100% principal protection against market downturns. Multiple crediting strategies designed for long-term accumulation.",
  image: "assets/hero-beach-couple.jpg",
  heroCtaLabel: "View Strategies",

  stats: [
    { value: "$20K",          label: "Min. Premium",        sectionId: 'key-terms' },
    { value: "4",             label: "Index Strategies",    sectionId: 'crediting-strategies' },
    { value: "10%",           label: "Free Withdrawal/Yr",  sectionId: 'key-terms' },
    { value: "3–10",          label: "Term Options (Yrs)",  sectionId: 'key-terms' },
    { value: "A (Excellent)", label: "A.M. Best Rating" },
  ],

  contractProvides: {
    eyebrow: "Why Harbourview FIA",
    heading: "What your contract provides",
    sub: "Six core protections and benefits built into every Harbourview FIA contract.",
    items: [
      { title: "Growth Potential",    body: "Pursue maximum growth based on the performance of external market indices without direct market investment." },
      { title: "Premium Protection",  body: "Your contract premium is 100% principal protected against market downturns. Your floor is zero." },
      { title: "Access to Funds",     body: "After year one, access up to 10% of your contract value each year, penalty-free." },
      { title: "Wealth Transfer",     body: "Full contract value is available to your beneficiaries, penalty free at death, with spousal continuation option." },
      { title: "Tax Deferral",        body: "Defer taxes on contract growth, allowing for compounding accumulation until you choose to access funds." },
      { title: "Guarantees",          body: "Select a fixed interest rate guarantee declared annually by Oceanview, in addition to index crediting strategies." },
    ],
    download: { title: "Harbourview FIA Product Overview", sub: "Summary brochure with all contract details" },
  },

  creditingStrategies: {
    eyebrow: "Crediting Strategies",
    heading: "Choose your growth approach",
    sub: "Select from multiple index crediting strategies across four major indexes. Each strategy determines how interest is credited to your contract.",
    tabs: [
      {
        label: "S&P 500",
        strategies: [
          { name: "Annual Point to Point with Cap Rate",                    term: "1-Year Term" },
          { name: "Annual Point to Point with Participation Rate",          term: "1-Year Term" },
          { name: "2-Year Point to Point with Participation Rate",          term: "2-Year Term" },
          { name: "Monthly Average Annual Point to Point with Cap Rate",    term: "1-Year Term" },
          { name: "Daily Risk Control 5% — Participation Rate",            term: "Risk-Controlled" },
          { name: "Daily Risk Control 10% — Participation Rate",           term: "Risk-Controlled" },
        ],
      },
      {
        label: "Nasdaq-100",
        strategies: [
          { name: "Annual Point to Point with Cap Rate",                    term: "1-Year Term" },
          { name: "Annual Point to Point with Participation Rate",          term: "1-Year Term" },
          { name: "2-Year Point to Point with Participation Rate",          term: "2-Year Term" },
        ],
      },
      {
        label: "Russell 2000",
        strategies: [
          { name: "Annual Point to Point with Cap Rate",                    term: "1-Year Term" },
          { name: "Annual Point to Point with Participation Rate",          term: "1-Year Term" },
          { name: "2-Year Point to Point with Participation Rate",          term: "2-Year Term" },
          { name: "Daily Risk Control 10% — Participation Rate",           term: "Risk-Controlled" },
        ],
      },
      {
        label: "Fixed Interest",
        strategies: [
          { name: "Fixed Interest Rate",                                    term: "Annual" },
        ],
      },
    ],
    strategyLinks: [
      { label: "Learn more about S&P 500 strategies", href: "#sp500-strategy" },
      { label: "Learn more about Russell 2000 strategies", href: "#russell-strategy" },
      { label: "Learn more about Nasdaq-100 strategies", href: "#nasdaq-strategy" },
    ],
  },

  keyTerms: {
    eyebrow: "Contract Features",
    heading: "Key terms and specifications",
    sub: "Core parameters of the Harbourview Fixed Indexed Annuity contract.",
    items: [
      { label: "Minimum Premium",          value: "$20,000" },
      { label: "Issue Ages — 3 & 5-Year",  value: "Up to Age 89 + 364 days (non-qualified and qualified assets)" },
      { label: "Issue Ages — 7 & 10-Year", value: "Up to Age 84 + 364 days (non-qualified and qualified assets)" },
      { label: "Term Options",             value: "3, 5, 7, and 10 years" },
      { label: "Free Withdrawals",         value: "10% of Contract Value on or after first year of contract anniversary. Minimum withdrawal amount: $250" },
      { label: "Death Benefit",            value: "Account Value (no MVA or Surrender Charges), or Spousal Continuation option" },
      { label: "Free Look Period",         value: "20 days to cancel your contract. Upon cancellation, your full purchase payment is returned. Some states allow 30 days." },
      { label: "Market Value Adjustment",  value: "A positive or negative adjustment based on the interest rate environment at time of withdrawal. Applies to withdrawals exceeding the 10% free withdrawal before end of the initial guarantee period. Does not apply to death benefit, 10% free withdrawals, or annuitization." },
    ],
    download: { title: "Download Full Spec Sheet", sub: "Complete contract specifications and state availability" },
  },

  surrenderSchedule: {
    eyebrow: "Surrender Charges",
    heading: "Surrender charge schedule",
    sub: "Surrender charges apply to withdrawals exceeding the annual 10% free withdrawal allowance. Charges decrease each year and end at the close of the selected term.",
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
    footnote: "*Surrender charges apply to amounts withdrawn beyond the 10% free withdrawal allowance. A Market Value Adjustment (MVA) may also apply to excess withdrawals.",
  },

  riders: {
    eyebrow: "Riders",
    heading: "Built-in benefit provisions",
    sub: "The following riders are included at no additional charge, activated after the first contract anniversary.",
    items: [
      { title: "Nursing Home Confinement No Charge", body: "After the first contract anniversary, if the contract owner is confined to a nursing home for at least 90 consecutive days (or 90 days with no more than a 6-month break), any applicable MVA or surrender charges are waived on any withdrawal. Confinement must be medically necessary and prescribed by a qualified physician." },
      { title: "Terminal Illness No Charge",         body: "After the first contract anniversary, if the contract owner is terminally ill and not expected to live more than 12 months, any applicable MVA and surrender charges are waived on any withdrawal. Terminal illness must be diagnosed by a qualified physician after the contract's issue date." },
    ],
    footnote: "*Waiver of surrender and MVA charges based on final review of claim.",
  },

  surrenderOptions: {
    eyebrow: "Terms",
    heading: "End of surrender charge period",
    sub: "Options available to you when the surrender charge period concludes.",
    items: [
      { title: "Reallocate Among Crediting Strategies", body: "Choose to reallocate your contract value across any of the available crediting strategies at current declared rates." },
      { title: "Full Withdrawal",                       body: "Withdraw the full account value without surrender charges or Market Value Adjustment." },
      { title: "Elect an Income Option",                body: "Begin receiving income payments through one of the available settlement options." },
      { title: "Spousal Continuation",                  body: "For jointly owned contracts or a single-owner contract with a sole spouse beneficiary: in the event of death, the surviving spouse may assume all rights to the initial agreement, maintain tax-deferred status, and choose beneficiaries. Subject to certain conditions." },
    ],
    footnote: "*For most states, Harbourview FIA Policy Form: ICC19OLASPDA. Product features, options, form numbers, and availability may vary by state. This is a brief description meant for informational purposes only. Not individualized investment or financial advice.",
  },

  incomeOptions: {
    eyebrow: "Settlement Options",
    heading: "Income payment options",
    sub: "The Harbourview FIA can provide an income stream for a term of your choosing, including for the rest of your life.",
    items: [
      { title: "Life Only",                    body: "Equal monthly payments for the annuitant's remaining lifetime. Payments end with the payment due just before the annuitant's death." },
      { title: "Life with 10-Year Period Certain", body: "Equal monthly payments for the greater of 120 months or the annuitant's remaining lifetime — ensuring at least 10 years of payments regardless of when the annuitant passes." },
      { title: "Joint and Last Survivor",      body: "Payments continue during the lifetime of the annuitant and a designated second person. If both pass within 120 monthly periods of payments beginning, the remaining guaranteed payments continue to the beneficiary." },
    ],
    disclaimer: "*Once annuity payments have begun, no changes can be made. Product features and availability may vary by state. ANNUITIES ARE PRODUCTS OF THE INSURANCE INDUSTRY AND NOT GUARANTEED BY ANY BANK NOR INSURED BY FDIC OR NCUA/NCUSIF. MAY LOSE VALUE. NO BANK/CREDIT UNION GUARANTEE. NOT A DEPOSIT. NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY. MAY ONLY BE OFFERED BY A LICENSED INSURANCE AGENT. GUARANTEES ARE SUBJECT TO THE CLAIM-PAYING ABILITY OF THE ISSUING INSURANCE COMPANY. Oceanview Life and Annuity Company, 1331 17th St., Suite 1050, Denver, CO 80202. © 2026 Oceanview Life and Annuity Company. All Rights Reserved.",
  },

  cta: {
    heading: "Ready to explore the Harbourview FIA?",
    sub: "Talk to a financial professional or contact our team to find the strategy that fits your retirement goals.",
    buttonLabel: "Get Started",
  },
}

export default function HarbourviewFIAPage() {
  return <ProductDetailPage product={PRODUCT} />
}
