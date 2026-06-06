import ProductDetailPage from './ProductDetailPage.jsx'

const PRODUCT = {
  category: "Multi-Year Guaranteed Annuity",
  categoryShort: "MYGA",
  name: "Horizon Multi-Year Guaranteed Annuity",
  tagline: "A clear path to predictable, guaranteed growth — with stable, tax-deferred accumulation over a defined term, and no exposure to market fluctuations.",
  image: "assets/hero-overlay.jpg",
  heroCtaLabel: "View Key Terms",

  stats: [
    { value: "$20K",          label: "Min. Premium",       sectionId: 'key-terms'  },
    { value: "3–10",          label: "Term Options (Yrs)", sectionId: 'key-terms'  },
    { value: "10%",           label: "Free Withdrawal/Yr", sectionId: 'key-terms'  },
    { value: "1%",            label: "Min. Guaranteed Rate"                        },
    { value: "A (Excellent)", label: "A.M. Best Rating"                            },
  ],

  contractProvides: {
    eyebrow: "Why Horizon MYGA",
    heading: "What your contract provides",
    sub: "Five core protections and benefits built into every Horizon MYGA contract.",
    items: [
      { title: "Principal Protection",     body: "Your premium is 100% protected. Market downturns cannot reduce your contract value — your floor is zero loss." },
      { title: "Guaranteed Interest Rate", body: "Your declared interest rate is set at policy issue and locked for the entire length of your chosen guarantee period — no surprises." },
      { title: "Tax-Deferred Earnings",    body: "Interest compounds tax-deferred until you choose to access funds, allowing more of your money to work for your retirement." },
      { title: "Access to Funds",          body: "After the first 12 months, access up to 10% of your account value each year without surrender charges or MVA." },
      { title: "Wealth Transfer",          body: "At death, contract value passes to your named beneficiaries. Spousal continuation option is available." },
    ],
    download: { title: "Horizon MYGA Product Overview", sub: "Summary brochure with all contract details" },
  },

  rateGuarantee: {
    eyebrow: "Rate Guarantee",
    heading: "Simplicity and certainty, by design.",
    sub: "Horizon is built for those who want straightforward, clearly defined accumulation. Your rate is locked at policy issue — no annual resets, no adjustments.",
    points: [
      "Rate is declared once at policy issue and remains fixed for your entire selected term",
      "Minimum guaranteed interest rate of 1% regardless of market conditions",
      "30-day advance notice before your guarantee period ends — choose to renew, surrender, or transfer",
      "Interest compounds annually, accelerating tax-deferred growth over the term",
    ],
    rateNote: "Current declared rates vary and are subject to change at time of application. Contact your financial professional or the Oceanview sales team for today's rates.",
  },

  keyTerms: {
    eyebrow: "Contract Features",
    heading: "Key terms and specifications",
    sub: "Core parameters of the Horizon Multi-Year Guaranteed Annuity contract.",
    items: [
      { label: "Minimum Premium",          value: "$20,000" },
      { label: "Issue Ages — 3 & 5-Year",  value: "Up to Age 89 + 364 days (non-qualified and qualified assets)" },
      { label: "Issue Ages — 7 & 10-Year", value: "Up to Age 84 + 364 days (non-qualified and qualified assets)" },
      { label: "Guarantee Period Options", value: "3, 5, 7, and 10 years" },
      { label: "Free Withdrawals",         value: "10% of Account Value on or after first 12 months, annually. Minimum withdrawal amount: $250" },
      { label: "RMDs",                     value: "Required minimum distributions available after the first contract year without surrender charges" },
      { label: "Death Benefit",            value: "Account Value (no MVA or Surrender Charges), or Spousal Continuation option" },
      { label: "Free Look Period",         value: "20 days to cancel your contract. Upon cancellation, your full purchase payment is returned. Some states allow 30 days." },
      { label: "Market Value Adjustment",  value: "A positive or negative adjustment based on the interest rate environment at time of withdrawal. Applies to withdrawals exceeding the 10% free withdrawal before end of the guarantee period. Does not apply to death benefit, 10% free withdrawals, or annuitization." },
    ],
    download: { title: "Download Full Spec Sheet", sub: "Complete contract specifications and state availability" },
  },

  surrenderSchedule: {
    eyebrow: "Surrender Charges",
    heading: "Surrender charge schedule",
    sub: "Surrender charges apply to withdrawals exceeding the annual 10% free withdrawal allowance during the guarantee period.",
    terms: ["3-Year", "5-Year", "7-Year", "10-Year"],
    rows: [
      { year: 1,  charges: ["4%",  "6%",  "8%",  "9%"]  },
      { year: 2,  charges: ["4%",  "6%",  "8%",  "9%"]  },
      { year: 3,  charges: ["0%",  "6%",  "8%",  "9%"]  },
      { year: 4,  charges: [null,  "3%",  "8%",  "9%"]  },
      { year: 5,  charges: [null,  "0%",  "6%",  "9%"]  },
      { year: 6,  charges: [null,  null,  "3%",  "9%"]  },
      { year: 7,  charges: [null,  null,  "0%",  "7%"]  },
      { year: 8,  charges: [null,  null,  null,  "5%"]  },
      { year: 9,  charges: [null,  null,  null,  "3%"]  },
      { year: 10, charges: [null,  null,  null,  "0%"]  },
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
    eyebrow: "End of Guarantee Period",
    heading: "Options at the end of your term",
    sub: "When your guarantee period concludes, you have several options available.",
    items: [
      { title: "Renew for Another Term",  body: "Continue earning with a new declared rate for a new guarantee period. Rates are declared based on then-current market conditions." },
      { title: "Full Withdrawal",         body: "Withdraw the full account value without surrender charges or Market Value Adjustment." },
      { title: "Elect an Income Option",  body: "Begin receiving income payments through one of the available settlement options." },
      { title: "Spousal Continuation",    body: "For jointly owned contracts or a single-owner contract with a sole spouse beneficiary: in the event of death, the surviving spouse may assume all rights to the initial agreement, maintain tax-deferred status, and choose beneficiaries. Subject to certain conditions." },
    ],
    footnote: "*Product features, options, form numbers, and availability may vary by state. This is a brief description meant for informational purposes only. Not individualized investment or financial advice.",
  },

  incomeOptions: {
    eyebrow: "Settlement Options",
    heading: "Income payment options",
    sub: "The Horizon MYGA can provide an income stream for a term of your choosing, including for the rest of your life.",
    items: [
      { title: "Life Only",                       body: "Equal monthly payments for the annuitant's remaining lifetime. Payments end with the payment due just before the annuitant's death." },
      { title: "Life with 10-Year Period Certain", body: "Equal monthly payments for the greater of 120 months or the annuitant's remaining lifetime — ensuring at least 10 years of payments regardless of when the annuitant passes." },
      { title: "Joint and Last Survivor",          body: "Payments continue during the lifetime of the annuitant and a designated second person. If both pass within 120 monthly periods of payments beginning, the remaining guaranteed payments continue to the beneficiary." },
    ],
    disclaimer: "*Once annuity payments have begun, no changes can be made. Product features and availability may vary by state. ANNUITIES ARE PRODUCTS OF THE INSURANCE INDUSTRY AND NOT GUARANTEED BY ANY BANK NOR INSURED BY FDIC OR NCUA/NCUSIF. MAY LOSE VALUE. NO BANK/CREDIT UNION GUARANTEE. NOT A DEPOSIT. NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY. MAY ONLY BE OFFERED BY A LICENSED INSURANCE AGENT. GUARANTEES ARE SUBJECT TO THE CLAIM-PAYING ABILITY OF THE ISSUING INSURANCE COMPANY. Oceanview Life and Annuity Company, 1331 17th St., Suite 1050, Denver, CO 80202. © 2026 Oceanview Life and Annuity Company. All Rights Reserved.",
  },

  cta: {
    heading: "Ready to explore the Horizon MYGA?",
    sub: "Talk to a financial professional or contact our team to find the right term and rate for your retirement timeline.",
    buttonLabel: "Get Started",
  },
}

export default function HorizonMYGAPage() {
  return <ProductDetailPage product={PRODUCT} />
}
