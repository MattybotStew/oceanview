import ProductDetailPage from './ProductDetailPage.jsx'

const PRODUCT = {
  category: "Fixed Indexed Annuity",
  categoryShort: "CapLock™ FIA",
  name: "Oceanview CapLock™ Fixed Indexed Annuity",
  tagline: "Your cap. Your term. Locked. CapLock removes the uncertainty of changing caps by guaranteeing your declared cap rate for the entire surrender charge period.",
  image: "assets/lighthouse.jpg",
  heroCtaLabel: "View Strategies",

  stats: [
    { value: "$20K",          label: "Min. Premium",        sectionId: 'key-terms'           },
    { value: "5 & 7",         label: "Term Options (Yrs)",  sectionId: 'key-terms'           },
    { value: "10%",           label: "Free Withdrawal/Yr",  sectionId: 'key-terms'           },
    { value: "3",             label: "Locked Indexes",      sectionId: 'crediting-strategies' },
    { value: "A (Excellent)", label: "A.M. Best Rating"                                      },
  ],

  contractProvides: {
    eyebrow: "Why CapLock™ FIA",
    heading: "What your contract provides",
    sub: "Six core protections and benefits built into every CapLock FIA contract.",
    items: [
      { title: "Locked Cap Rate Guarantee", body: "Cap rates for Guaranteed Cap strategies are declared once at policy issue and remain fixed for your entire surrender charge period — no annual resets." },
      { title: "Premium Protection",        body: "Your contract premium is 100% principal protected against market downturns. Negative index performance results in zero interest — your floor is zero." },
      { title: "Growth Potential",          body: "Pursue index-linked growth based on the performance of external market indexes, subject to your selected cap or participation rate." },
      { title: "Access to Funds",           body: "After year one, access up to 10% of your contract value each year, penalty-free. RMDs are also available after the first contract year." },
      { title: "Wealth Transfer",           body: "Full contract value is available to your beneficiaries, penalty free at death, with spousal continuation option." },
      { title: "Tax Deferral",              body: "Defer taxes on contract growth, allowing for compounding accumulation until you choose to access funds." },
    ],
    download: { title: "CapLock FIA Product Overview", sub: "Summary brochure with all contract details" },
  },

  creditingStrategies: {
    eyebrow: "Crediting Strategies",
    heading: "Choose your growth approach",
    sub: "Select from Guaranteed Cap strategies — where your cap rate is locked at issue — or standard index strategies with annually declared rates.",
    tabs: [
      {
        label: "S&P 500",
        strategies: [
          { name: "Annual Point-to-Point with Cap Rate Guarantee",         term: "Guaranteed Cap" },
          { name: "Annual Point-to-Point with Cap Rate",                   term: "1-Year Term"    },
          { name: "Annual Point-to-Point with Participation Rate",         term: "1-Year Term"    },
          { name: "2-Year Point-to-Point with Participation Rate",         term: "2-Year Term"    },
          { name: "Monthly Average Annual Point-to-Point with Cap Rate",   term: "1-Year Term"    },
          { name: "Daily Risk Control 5% — Participation Rate",            term: "Risk-Controlled"},
          { name: "Daily Risk Control 10% — Participation Rate",           term: "Risk-Controlled"},
        ],
      },
      {
        label: "Nasdaq-100",
        strategies: [
          { name: "Annual Point-to-Point with Cap Rate Guarantee",         term: "Guaranteed Cap" },
          { name: "Annual Point-to-Point with Cap Rate",                   term: "1-Year Term"    },
          { name: "Annual Point-to-Point with Participation Rate",         term: "1-Year Term"    },
        ],
      },
      {
        label: "Russell 2000",
        strategies: [
          { name: "Annual Point-to-Point with Cap Rate Guarantee",         term: "Guaranteed Cap" },
          { name: "Annual Point-to-Point with Cap Rate",                   term: "1-Year Term"    },
          { name: "Annual Point-to-Point with Participation Rate",         term: "1-Year Term"    },
        ],
      },
      {
        label: "Fixed Interest",
        strategies: [
          { name: "Fixed Interest Rate",                                   term: "Annual"         },
        ],
      },
    ],
  },

  keyTerms: {
    eyebrow: "Contract Features",
    heading: "Key terms and specifications",
    sub: "Core parameters of the CapLock Fixed Indexed Annuity contract.",
    items: [
      { label: "Minimum Premium",          value: "$20,000 (qualified and non-qualified accounts)" },
      { label: "Issue Ages — 5-Year",      value: "Up to Age 89 + 364 days (non-qualified and qualified assets)" },
      { label: "Issue Ages — 7-Year",      value: "Up to Age 84 + 364 days (non-qualified and qualified assets)" },
      { label: "Term Options",             value: "5 and 7 years" },
      { label: "Free Withdrawals",         value: "10% of Contract Value on or after first contract anniversary. Minimum withdrawal amount: $250. RMDs also available after first year without surrender charges." },
      { label: "Cap Rate Guarantee Funds", value: "Available only at time of application. If a client reallocates out of a Cap Rate Guarantee Fund, they cannot reallocate back." },
      { label: "Death Benefit",            value: "Account Value (no MVA or Surrender Charges), or Spousal Continuation option" },
      { label: "Free Look Period",         value: "20 days to cancel your contract. Upon cancellation, your full purchase payment is returned. Some states allow 30 days." },
      { label: "Market Value Adjustment",  value: "A positive or negative adjustment based on the interest rate environment at time of withdrawal. Applies to withdrawals exceeding the 10% free withdrawal before end of the surrender charge period. Does not apply to death benefit, 10% free withdrawals, or annuitization. Not applicable in California." },
      { label: "Post-Surrender Transition", value: "After the surrender charge period, funds in Guaranteed Cap strategies automatically transition to non-guaranteed cap strategies at then-current declared rates." },
    ],
    download: { title: "Download Full Spec Sheet", sub: "Complete contract specifications and state availability" },
  },

  surrenderSchedule: {
    eyebrow: "Surrender Charges",
    heading: "Surrender charge schedule",
    sub: "Surrender charges apply to withdrawals exceeding the annual 10% free withdrawal allowance during the surrender charge period.",
    terms: ["5-Year", "7-Year"],
    rows: [
      { year: 1, charges: ["9%", "9%"] },
      { year: 2, charges: ["8%", "8%"] },
      { year: 3, charges: ["7%", "7%"] },
      { year: 4, charges: ["6%", "6%"] },
      { year: 5, charges: ["5%", "5%"] },
      { year: 6, charges: [null, "4%"] },
      { year: 7, charges: [null, "3%"] },
    ],
    footnote: "*Surrender charges apply to amounts withdrawn beyond the 10% free withdrawal allowance. A Market Value Adjustment (MVA) may also apply. MVA does not apply in California.",
  },

  riders: {
    eyebrow: "Riders",
    heading: "Built-in benefit provisions",
    sub: "The following riders are included at no additional charge, activated after the first contract anniversary.",
    items: [
      { title: "Nursing Home Confinement No Charge", body: "After the first contract anniversary, if the contract owner is confined to a nursing home for at least 90 consecutive days (or 90 days with no more than a 6-month break), any applicable MVA or surrender charges are waived on any withdrawal. Confinement must be medically necessary and prescribed by a qualified physician. Proof required during or within 90 days of confinement." },
      { title: "Terminal Illness No Charge",         body: "After the first contract anniversary, if the contract owner is terminally ill and not expected to live more than 12 months, any applicable MVA and surrender charges are waived on any withdrawal. Terminal illness must be diagnosed by a qualified physician after the contract's issue date." },
    ],
    footnote: "*Waiver of surrender and MVA charges based on final review of claim.",
  },

  surrenderOptions: {
    eyebrow: "Terms",
    heading: "End of surrender charge period",
    sub: "Options available to you when the surrender charge period concludes.",
    items: [
      { title: "Reallocate Among Crediting Strategies", body: "Choose to reallocate your contract value across any of the available crediting strategies at current declared rates. Note: Guaranteed Cap strategies are only available at original policy issue." },
      { title: "Full Withdrawal",                       body: "Withdraw the full account value without surrender charges or Market Value Adjustment." },
      { title: "Elect an Income Option",                body: "Begin receiving income payments through one of the available settlement options." },
      { title: "Spousal Continuation",                  body: "For jointly owned contracts or a single-owner contract with a sole spouse beneficiary: in the event of death, the surviving spouse may assume all rights to the initial agreement, maintain tax-deferred status, and choose beneficiaries. Subject to certain conditions." },
    ],
    footnote: "*For most states, CapLock FIA Policy Form: ICC21OLASFIACLK. Product features, options, form numbers, and availability may vary by state. Not available in New York or Vermont. This is a brief description meant for informational purposes only. Not individualized investment or financial advice.",
  },

  incomeOptions: {
    eyebrow: "Settlement Options",
    heading: "Income payment options",
    sub: "The CapLock FIA can provide an income stream for a term of your choosing, including for the rest of your life.",
    items: [
      { title: "Life Only",                       body: "Equal monthly payments for the annuitant's remaining lifetime. Payments end with the payment due just before the annuitant's death." },
      { title: "Life with 10-Year Period Certain", body: "Equal monthly payments for the greater of 120 months or the annuitant's remaining lifetime — ensuring at least 10 years of payments regardless of when the annuitant passes." },
      { title: "Joint and Last Survivor",          body: "Payments continue during the lifetime of the annuitant and a designated second person. If both pass within 120 monthly periods of payments beginning, the remaining guaranteed payments continue to the beneficiary." },
    ],
    disclaimer: "*Once annuity payments have begun, no changes can be made. Product features and availability may vary by state. Not available in New York or Vermont. ANNUITIES ARE PRODUCTS OF THE INSURANCE INDUSTRY AND NOT GUARANTEED BY ANY BANK NOR INSURED BY FDIC OR NCUA/NCUSIF. MAY LOSE VALUE. NO BANK/CREDIT UNION GUARANTEE. NOT A DEPOSIT. NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY. MAY ONLY BE OFFERED BY A LICENSED INSURANCE AGENT. GUARANTEES ARE SUBJECT TO THE CLAIM-PAYING ABILITY OF THE ISSUING INSURANCE COMPANY. Oceanview Life and Annuity Company, 1331 17th St., Suite 1050, Denver, CO 80202. © 2026 Oceanview Life and Annuity Company. All Rights Reserved.",
  },

  cta: {
    heading: "Ready to explore the CapLock FIA?",
    sub: "Talk to a financial professional or contact our team to lock in a cap rate strategy for your retirement goals.",
    buttonLabel: "Get Started",
  },
}

export default function CapLockFIAPage() {
  return <ProductDetailPage product={PRODUCT} />
}
