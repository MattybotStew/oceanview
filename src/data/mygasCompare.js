// Content for the How Oceanview MYGAs Compare page.
// Source: https://oceanviewlife.com/how-oceanview-mygas-compare/ (production parity).

export const RATES_AS_OF = "October 19, 2026"

export const HERO = {
  badge: "Client Resources",
  title: "How Oceanview MYGAs Compare",
  subtitle: "Transparent comparisons. Clear choices.",
  ctaPrimary: "View Current Rates",
  ctaSecondary: "Compare Product Features",
}

export const INTRO = {
  eyebrow: "Transparent comparisons",
  heading: "Clear choices, grounded in the same three questions.",
  paragraphs: [
    "If you’re comparing fixed-rate annuities, you’re likely focused on three things: rate, term, and confidence in the company behind the guarantee.",
    "Below is a snapshot comparison of AM Best A rated (or higher) insurance carriers offering the highest rates for 2, 3, and 4-year Multi-Year Guaranteed Annuities (MYGAs) for the stated date below. This view is designed to help you understand where Oceanview fits among similar options — and is not intended to represent a comprehensive market survey.",
  ],
  note: "A.M. Best Company is an independent rating agency that evaluates the financial strength and creditworthiness of insurance companies. Financial strength ratings are based on an insurer’s ability to meet its ongoing insurance obligations. Ratings are not a guarantee of future performance, are subject to change, and do not apply to any specific insurance policy, contract, or investment product.",
}

export const RATE_TABLES = [
  {
    id: "2-year",
    heading: "2-Year MYGA Comparison",
    scenario: "Scenario: Age 75, $80,000 premium, AM Best A or higher rating",
    rows: [
      { carrier: "Oceanview Life and Annuity", product: "Harbourview® 2 MYGA", rating: "A", term: "2 Years", rate: "5.15%", ov: true },
      { carrier: "MassMutual", product: "Premier Voyage 2 MYGA", rating: "A++", term: "2 Years", rate: "4.65%" },
      { carrier: "Americo", product: "Platinum Assure 2 MYGA", rating: "A", term: "2 Years", rate: "4.15%" },
    ],
  },
  {
    id: "3-year",
    heading: "3-Year MYGA Comparison",
    scenario: "Scenario: Age 75, $80,000 premium, AM Best A or higher rating",
    rows: [
      { carrier: "Athene", product: "Athene Max Rate 3", rating: "A+", term: "3 Years", rate: "5.75%" },
      { carrier: "Oxford Life", product: "Multi-Select 3", rating: "A", term: "3 Years", rate: "5.60%" },
      { carrier: "North American Company", product: "NAC Guarantee Plus 3", rating: "A+", term: "3 Years", rate: "5.45%" },
      { carrier: "Oceanview Life and Annuity", product: "Harbourview® 3 MYGA", rating: "A", term: "3 Years", rate: "5.30%", ov: true },
    ],
  },
  {
    id: "4-year",
    heading: "4-Year MYGA Comparison",
    scenario: "Scenario: Age 75, $80,000 premium, AM Best A or higher rating",
    rows: [
      { carrier: "Oxford Life", product: "Multi Select 4 MYGA", rating: "A", term: "4 Years", rate: "5.75%" },
      { carrier: "Oceanview Life and Annuity", product: "Harbourview® 4 MYGA", rating: "A", term: "4 Years", rate: "5.70%", ov: true },
      { carrier: "AIG", product: "American Pathway Fixed 4 Annuity", rating: "A", term: "4 Years", rate: "5.60%" },
    ],
  },
]

export const RATE_CONTEXT = "MYGA rates vary by age, premium amount, state, and term. The comparisons below are illustrative and reflect commonly quoted scenarios. Actual rates available to an individual may differ."

export const RATE_SOURCE = "The rates shown below are obtained from Annuity Rate Watch. These comparisons are updated weekly to reflect recent market conditions."

export const CONSIDERATIONS_HEADING = "How to Think About These Comparisons"
export const CONSIDERATIONS_SUB = "While rate matters, it’s only part of the decision. Consumers should also consider:"

export const CONSIDERATIONS = [
  "Underlying product features within each company’s MYGA",
  "Optional rider features",
  "The financial strength of the issuing insurer",
  "Clear, straightforward product design",
  "Access to penalty-free withdrawals",
  "Confidence that renewal terms will be fair and transparent",
]

export const CONSIDERATIONS_FOOTNOTE = "Oceanview MYGAs are designed to deliver security, simplicity, and competitive value — with straightforward designs and transparent terms."

export const NEXT_STEP = {
  heading: "What’s the Right Next Step for You?",
  sub: "Talk through the comparison with someone who works with these products every day.",
  cards: [
    {
      title: "Speak with a Licensed Oceanview Advisor",
      body: "Connect directly with a licensed Oceanview professional to review your goals and questions.",
      cta: "Get Started",
    },
    {
      title: "Connect with an Oceanview Specialist",
      body: "Have questions about product positioning, case design, or contracting? Our team is here to help.",
      cta: "Connect Now",
    },
  ],
  disclaimer: "No product recommendation is being made by this material.",
  cta: "Get Started",
}

export const DISCLOSURE_BULLETS = [
  `Rates shown are for illustrative purposes only and reflect data as of ${RATES_AS_OF}.`,
  "Rates, product availability, and terms may vary by state, age, and premium amount and are subject to change.",
  "Comparisons reflect a selected group of insurers meeting stated criteria and do not represent all available products in the market.",
  "Guarantees are backed by the claims paying ability of the issuing insurance company.",
  "Please consult a licensed insurance professional for complete product details and suitability considerations.",
  "This material is not intended as investment, legal, or tax advice.",
  "Competitor information is based on sources believed to be reliable; however, Oceanview does not guarantee the accuracy or completeness of such information.",
]

export const DISCLOSURE_PARAGRAPHS = [
  "Guarantees are based on the financial strength of the issuing carrier. The multi-year guarantee annuity product with form number ICC19 OLA SPDA, or variations of such, are issued by Oceanview Life and Annuity Company (d/b/a Oceanview Life and Annuity Insurance Company in California; NAIC# 68446). May not be available in all states. Not available in the state of New York. Policy form numbers and provisions may vary. Rates are guaranteed depending on the guarantee period selected at policy issue.",
  "OCEANVIEW ANNUITIES ARE PRODUCTS OF THE INSURANCE INDUSTRY AND NOT GUARANTEED BY ANY BANK NOR INSURED BY THE FDIC OR NCUA/NCUSIF OR ANY OTHER FEDERAL GOVERNMENTAL AGENCY. MAY LOSE VALUE. NO BANK/CREDIT UNION GUARANTEE. NOT A DEPOSIT. MAY ONLY BE OFFERED BY A LICENSED INSURANCE AGENT. GUARANTEES ARE SUBJECT TO THE CLAIM PAYING ABILITY OF THE ISSUING INSURANCE COMPANY.",
  "Annuities issued by Oceanview Life and Annuity Company, 1331 17th Street, Suite 1050, Denver, CO 80202. In California, doing business as Oceanview Life and Annuity Insurance Company www.oceanviewlife.com.",
  "Annuities are generally designed as long-term retirement solutions and have certain limitations. They are generally not intended to replace emergency funds, serve as income for day-to-day expenses, or support short-term savings goals. Please review the contract for full details.",
  "A.M. Best Rating as of February 11, 2026, is subject to change. A (Excellent) rating is third highest of fifteen possible rating classes for financial strength. The outlook assigned to these Credit Ratings is stable.",
  "This material is a general description intended for general public, educational use. Oceanview Life and Annuity Company is not providing investment advice for any individual or in any individual situation, and therefore nothing in this correspondence should be read as such.",
  "Withdrawals in excess of any Free Partial Withdrawal amounts are subject to a Surrender Charge and Market Value Adjustment (MVA). The MVA may have the effect of increasing or decreasing the Surrender Value of the withdrawal depending on the market interest rate changes.",
  "The IRS may impose a penalty for withdrawals prior to age 59 ½.",
  "Contracts purchased in an IRA or other tax-qualified plan provide no additional tax-deferral benefit, since they are already afforded tax-deferred status. All annuity features, risks, limitations, and costs should be considered prior to purchasing an annuity within a tax-qualified retirement plan. For non-qualified annuities, tax deferral is not available to corporations and certain other entities.",
  "While care was taken in compiling this information, the Company reserves the right to correct any typographical errors that may exist.",
  "Issue age for all deferred annuities is the age of the last birthday of the Owner. If joint owners, age of oldest determines commission payout.",
  "Rates, renewal caps, and declared interest rates, will always follow contract provisions relative to minimums and maximums stated. Oceanview determines, at its discretion, the rates, renewal caps and, declared interest rates above the contractual minimums that are guaranteed.",
]
