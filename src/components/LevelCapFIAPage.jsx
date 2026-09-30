import ProductDetailPage from './ProductDetailPage.jsx'

const PRODUCT = {
  category: "Fixed Indexed Annuity",
  categoryShort: "LevelCap™ FIA",
  name: "Oceanview LevelCap™ Fixed Indexed Annuity",
  heroTitle: "Steady cap. Full term.",
  heroSubtitle: "LevelCap Fixed Indexed Annuity is designed for clients who want principal protection and index-linked interest potential—with greater predictability around an important part of the interest-crediting formula. With selected Cap Rate Guarantee Strategies, the applicable cap rate is established at policy issue and remains unchanged for the full 5- or 7-year surrender-charge period. No annual cap re-declarations. No mid-term cap adjustments. The index can still perform differently from year to year. The amount of indexed interest credited is not guaranteed. The cap stays level.",
  tagline: "Steady cap. Full term. With selected Cap Rate Guarantee Strategies, the applicable cap rate is established at policy issue and remains unchanged for the full 5- or 7-year surrender-charge period.",
  image: "assets/levelcap-hero.png",
  heroCtaLabel: "View Current Rates",
  heroPrimaryId: "current-rates",

  currentRates: {
    eyebrow: "Current rates",
    heading: "Current LevelCap FIA Rates",
    sub: "Know an important crediting term from the start. For a selected Cap Rate Guarantee Strategy, the applicable cap is established at policy issue and remains unchanged for the full surrender-charge period. The cap establishes the maximum indexed interest that may be credited under the applicable strategy for a crediting period. It is not a guaranteed rate of return. Whether interest is credited depends on index performance and the terms of the strategy.",
    terms: ["5-Year", "7-Year"],
    rate: "X.XX%",
    detail: "Current Guaranteed S&P 500® Annual Point-to-Point Cap Rate · placeholder, not a live rate",
    effectiveDate: "Effective [DATE]",
  },

  whatIs: {
    eyebrow: "Product overview",
    heading: "What Is LevelCap FIA?",
    paragraphs: [
      "LevelCap is a single-premium deferred fixed indexed annuity with Cap Rate Guarantee Strategies. A fixed indexed annuity can earn interest based in part on the performance of an external market index without directly investing contract value in that index.",
      "With many FIA strategies, the cap used in determining indexed interest may change at future renewal periods according to the contract. LevelCap takes a different approach for selected strategies. The cap is established once. For a Cap Rate Guarantee Strategy, the cap declared at policy issue remains the same throughout the applicable surrender-charge period. That provides greater certainty around one part of the interest-crediting calculation while index performance—and therefore the amount of indexed interest ultimately credited—remains unknown.",
    ],
  },

  lockSplit: {
    eyebrow: "What LevelCap keeps level",
    heading: "Guaranteed vs not guaranteed",
    guaranteed: {
      title: "Guaranteed — the cap rate",
      body: "Established at policy issue for a selected Cap Rate Guarantee Strategy and unchanged for the full applicable surrender-charge period.",
    },
    notGuaranteed: {
      title: "Not guaranteed — the outcome",
      body: "The applicable index can rise or fall. Indexed interest, if any, depends on the performance of the selected index strategy and is subject to the applicable cap. LevelCap creates predictability around the cap—not around future index performance. The cap remains fixed for the 5- or 7-year period, while actual credited interest depends on index performance and can be zero.",
    },
  },

  howItWorks: {
    eyebrow: "How LevelCap works",
    heading: "Five steps",
    steps: [
      "Choose a contract term. LevelCap is available with a 5-year or 7-year term. The 5-year product is available through issue age 89 + 364 days. The 7-year product is available through issue age 84 + 364 days. The minimum single premium is $20,000 for qualified and nonqualified funds.",
      "Select a Cap Rate Guarantee Strategy. At application, you may select from available Cap Rate Guarantee Strategies associated with the S&P 500®, Nasdaq-100®, or Russell 2000®. The applicable guaranteed cap is established when the policy is issued and remains level during the surrender-charge period. Cap Rate Guarantee Strategies are available only at application.",
      "Measure index performance each year. The applicable index is measured according to the terms of the annual point-to-point strategy. Dividends are excluded from the index calculation. You do not own or invest directly in the index.",
      "Apply the guaranteed cap. If the applicable index calculation produces positive performance, indexed interest may be credited according to the strategy, subject to the guaranteed cap. The guaranteed cap establishes the maximum indexed interest that may be credited.",
      "Begin the next crediting period. The index-performance calculation begins again for the next annual crediting period. The index result may change. The amount of indexed interest credited may change. The guaranteed cap does not.",
    ],
  },

  simpleExample: {
    eyebrow: "Illustration",
    heading: "A simple example",
    sub: "Assume a hypothetical Cap Rate Guarantee Strategy has a 9% guaranteed cap. This example is hypothetical and is intended only to demonstrate how a cap works. It does not represent current LevelCap rates or guarantee future indexed interest. The following year, the index is measured again. The cap remains 9% throughout the applicable guarantee period.",
    scenarios: [
      { title: "Index +5%", body: "Up to 5% indexed interest may be credited, subject to contract terms." },
      { title: "Index +14%", body: "The indexed-interest credit would be limited by the 9% cap." },
      { title: "0% or a negative result", body: "No positive indexed interest would result from that index performance for the applicable period." },
    ],
  },

  whyGuaranteedCap: {
    eyebrow: "Why a level cap",
    heading: "Why does a level cap matter?",
    sub: "With an annually declared cap strategy, you may know the cap that applies today without knowing exactly what cap will apply in future crediting periods. LevelCap changes that part of the equation. At issue, you know which Cap Rate Guarantee Strategy you selected, the applicable cap rate, and how long that cap is guaranteed. What you do not know is how the index will perform or how much indexed interest will ultimately be credited. That creates greater predictability around an important crediting term—not a guaranteed investment outcome.",
    worthExploring: {
      heading: "When LevelCap may be worth exploring",
      intro: "LevelCap may be worth discussing if you find yourself saying: “I understand the index can change—but I would like to know the cap that will apply throughout the term.” You may value:",
      bullets: [
        "Principal protection",
        "Index-linked interest potential",
        "Familiar market indexes",
        "A cap known at issue",
        "No annual cap re-declarations on selected guarantee strategies",
        "A 5- or 7-year time horizon",
        "Tax-deferred accumulation, where applicable",
        "Contract-based withdrawal access",
        "Additional waiver protections",
      ],
    },
  },

  capDistinction: {
    complianceLabel: "Important distinction",
    heading: "The cap is guaranteed. Indexed interest is not.",
    body: "A guaranteed cap does not mean a guaranteed rate of return, a guaranteed amount of indexed interest, that the index will increase, or that the contract will earn the cap every year. The cap remains unchanged while actual credited interest depends on index performance and can be zero.",
    protection: {
      title: "What you receive",
      body: "Greater certainty around the cap used for a selected strategy. LevelCap combines protection and index-linked interest potential.",
    },
    tradeoff: {
      title: "What you limit in exchange",
      body: "Indexed interest above that cap. LevelCap does not provide unlimited participation in positive index performance. If the applicable index calculation exceeds the guaranteed cap during a measurement period, the indexed-interest credit remains limited by the cap.",
    },
  },

  allocationWarning: {
    eyebrow: "Allocation warning",
    heading: "Selecting a guarantee strategy is an important decision",
    body: "Cap Rate Guarantee Strategies are available only at application. If you later reallocate contract value out of a Cap Rate Guarantee Strategy and into another available strategy, that value cannot be reallocated back into one of the guarantee strategies during the surrender-charge period.",
    questions: [
      "How important is having the cap known in advance?",
      "Does the selected index fit the intended role of the allocation?",
      "How comfortable are you with index-performance uncertainty?",
      "How likely are you to want to change strategies later?",
      "Does the 5- or 7-year time horizon fit your expected need for the money?",
    ],
  },

  stats: [
    { value: "$20K",          label: "Min. Premium",        sectionId: "key-terms" },
    { value: "5 & 7",         label: "Term Options (Yrs)",  sectionId: "key-terms" },
    { value: "10%",           label: "Free Withdrawal/Yr",  sectionId: "key-terms" },
    { value: "3",             label: "Guarantee Indexes",   sectionId: "crediting-strategies" },
    { value: "A (Excellent)", label: "A.M. Best Rating" },
  ],

  contractProvides: {
    eyebrow: "Why consider LevelCap",
    heading: "Why consider LevelCap FIA?",
    sub: "Greater predictability around the cap, with index-linked interest potential and principal protection.",
    items: [
      { title: "Greater predictability around the cap", body: "Know the applicable cap for a selected Cap Rate Guarantee Strategy at issue rather than waiting for future annual cap declarations." },
      { title: "Index-linked interest potential", body: "Interest may be credited annually based on the performance of the selected index strategy, subject to the guaranteed cap and other contract terms." },
      { title: "Familiar index choices", body: "Cap Rate Guarantee Strategies are available using the S&P 500® Annual Point-to-Point, Nasdaq-100® Annual Point-to-Point, and Russell 2000® Annual Point-to-Point." },
      { title: "5- and 7-year terms", body: "Select the applicable contract period based on the expected role and time horizon for the money." },
      { title: "Principal protection", body: "Negative performance of the applicable market index does not reduce principal through the indexed-interest calculation, subject to contract terms." },
      { title: "Tax-deferred accumulation", body: "Interest in a nonqualified annuity generally accumulates tax-deferred until distributed." },
      { title: "Annual withdrawal access", body: "After the first contract year, up to 10% of account value as of the most recent contract anniversary may be withdrawn annually without surrender charges or an MVA. The minimum withdrawal amount is $250." },
      { title: "Additional waiver protections", body: "Nursing Home Confinement and Terminal Illness Waivers are included at no additional charge, subject to applicable contract requirements." },
    ],
  },

  creditingStrategies: {
    eyebrow: "Crediting strategies",
    heading: "Cap Rate Guarantee strategies",
    sub: "LevelCap provides three Cap Rate Guarantee Strategy choices. Each establishes its applicable cap at policy issue and keeps that cap unchanged for the surrender-charge period. Additional crediting strategies are also available. Caps, participation rates, and other terms for those additional strategies are not necessarily guaranteed for the full surrender-charge period.",
    tabs: [
      {
        label: "S&P 500",
        strategies: [
          { name: "Annual Point-to-Point with Cap Rate Guarantee", term: "Guaranteed Cap" },
          { name: "Annual Point-to-Point with Cap", term: "Additional" },
          { name: "Annual Point-to-Point with Participation Rate", term: "Additional" },
          { name: "2-Year Point-to-Point with Participation Rate", term: "Additional" },
          { name: "Monthly Average with Cap Rate", term: "Additional" },
          { name: "Daily Risk Control 5% USD Excess Return — Participation Rate", term: "Additional" },
          { name: "Daily Risk Control 10% USD Excess Return — Participation Rate", term: "Additional" },
        ],
      },
      {
        label: "Nasdaq-100",
        strategies: [
          { name: "Annual Point-to-Point with Cap Rate Guarantee", term: "Guaranteed Cap" },
          { name: "Annual Point-to-Point with Cap", term: "Additional" },
        ],
      },
      {
        label: "Russell 2000",
        strategies: [
          { name: "Annual Point-to-Point with Cap Rate Guarantee", term: "Guaranteed Cap" },
          { name: "Annual Point-to-Point with Cap", term: "Additional" },
        ],
      },
      {
        label: "Fixed Interest",
        strategies: [
          { name: "Fixed Interest Strategy", term: "Additional" },
        ],
      },
    ],
  },

  keyTerms: {
    eyebrow: "At a glance",
    heading: "LevelCap FIA at a glance",
    sub: "Core parameters of the LevelCap Fixed Indexed Annuity contract.",
    items: [
      { label: "Product Type", value: "Single Premium Deferred Fixed Indexed Annuity with Cap Rate Guarantee Strategies" },
      { label: "Contract Terms", value: "5 and 7 years" },
      { label: "Minimum Premium", value: "$20,000 qualified or nonqualified" },
      { label: "Issue Age — 5-Year", value: "Up to age 89 + 364 days" },
      { label: "Issue Age — 7-Year", value: "Up to age 84 + 364 days" },
      { label: "Guaranteed-Cap Strategies", value: "S&P 500®, Nasdaq-100®, and Russell 2000® Annual Point-to-Point" },
      { label: "Cap Guarantee", value: "Applicable cap established at issue and unchanged for the surrender-charge period" },
      { label: "Indexed Interest", value: "Determined annually based on index performance and strategy terms; subject to the applicable cap" },
      { label: "Additional Crediting Strategies", value: "Available. Caps, participation rates, and other terms are not necessarily guaranteed for the full surrender-charge period." },
      { label: "Free Partial Withdrawals", value: "After the first contract year, up to 10% of account value as of the most recent contract anniversary may be withdrawn annually without surrender charges or a Market Value Adjustment. Minimum withdrawal: $250. Withdrawals reduce contract value and may affect future interest and other contract benefits. Taxes may also apply." },
      { label: "Required Minimum Distributions", value: "For qualified contracts, RMDs after the first contract year are available without surrender charges or an MVA, subject to the contract." },
      { label: "Cap Rate Guarantee Funds", value: "Available only at application. If contract value is reallocated out of a Cap Rate Guarantee Strategy, it cannot be reallocated back into one of the Guarantee Strategies during that surrender-charge period." },
      { label: "Market Value Adjustment", value: "May apply to withdrawals or surrenders exceeding the available free-withdrawal amount during the surrender-charge period. The MVA may increase or decrease surrender value based on changes in market interest rates since issue and the formula described in the contract. The MVA does not apply in California." },
      { label: "Death Benefit", value: "If the applicable death-benefit provisions are triggered before annuitization, beneficiaries receive the full contract value without surrender charges or a Market Value Adjustment, subject to contract terms. A spousal continuation option is also available." },
      { label: "Free Look Period", value: "20 days" },
      { label: "Availability", value: "Not available in New York or Vermont. California versions are non-MVA. Available through select financial institutions and approved firms." },
    ],
  },

  surrenderSchedule: {
    eyebrow: "Surrender charges",
    heading: "Surrender charges",
    sub: "LevelCap is designed for long-term retirement purposes. Withdrawals exceeding the applicable free-withdrawal amount during the surrender-charge period may be subject to surrender charges. Surrender charges may vary by state. California versions are non-MVA.",
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
    footnote: "5-year surrender-charge period: 9% | 8% | 7% | 6% | 5%. 7-year surrender-charge period: 9% | 8% | 7% | 6% | 5% | 4% | 3%.",
  },

  riders: {
    eyebrow: "Waivers",
    heading: "Added protection when life changes",
    sub: "LevelCap includes two waiver provisions at no additional charge. Complete eligibility, documentation, and MVA treatment are governed by the contract.",
    items: [
      { title: "Nursing Home Confinement Waiver", body: "After the first contract year, qualifying nursing home confinement may provide access to funds without applicable surrender charges, subject to contract requirements." },
      { title: "Terminal Illness Waiver", body: "After the first contract year, a qualifying terminal illness may provide access to funds without applicable surrender charges, subject to contract requirements." },
    ],
  },

  surrenderOptions: {
    eyebrow: "After the term",
    heading: "What happens when the surrender-charge period ends?",
    sub: "At the end of the applicable surrender-charge period, you may be able to reallocate, withdraw, or create income. The guaranteed-cap period ends. The level-cap guarantee does not continue indefinitely.",
    items: [
      { title: "Reallocate", body: "Move contract value among available crediting strategies." },
      { title: "Withdraw", body: "Withdraw the full account value without surrender charges or an MVA." },
      { title: "Create income", body: "Elect an available settlement option. Electing a settlement option may affect future access to the underlying contract value." },
      { title: "Guaranteed-cap period ends", body: "If the contract remains in force, funds remaining in a Cap Rate Guarantee Strategy transition to a non-guaranteed cap strategy subject to the then-current declared rates and contract terms." },
    ],
    footnote: "LevelCap Fixed Indexed Annuity contracts, including Single Premium Fixed Indexed Annuity Contract ICC19 OLA FIA and state variations, are issued by Oceanview Life and Annuity Company, 1331 17th Street, Suite 1050, Denver, CO 80202. In California, Oceanview does business as Oceanview Life and Annuity Insurance Company. Not available in New York or Vermont. California versions are non-MVA. Guarantees are subject to the claims-paying ability of Oceanview Life and Annuity Company.",
  },

  incomeOptions: {
    eyebrow: "Settlement options",
    heading: "Retirement income options",
    sub: "LevelCap includes settlement options if the contract is annuitized. Electing a settlement option may affect future access to the underlying contract value.",
    items: [
      { title: "Life Only", body: "Payments for the annuitant’s life." },
      { title: "Life with 10-Year Period Certain", body: "Life income with a 10-year period certain." },
      { title: "Joint and Last Survivor with 10-Year Period Certain", body: "Joint and last survivor income with a 10-year period certain." },
    ],
    disclaimer: "This material is intended for general educational purposes and does not provide individualized investment, tax, or legal advice or recommend the purchase or replacement of any financial product. A guaranteed cap is not a guaranteed rate of return and does not guarantee that interest will be credited. Funds allocated to an index-linked strategy do not directly participate in or invest in the stock market or any index. Index performance used for the Cap Rate Guarantee Strategies excludes dividends. Annuities are products of the insurance industry. They are not guaranteed by a bank or credit union, are not insured by the FDIC, NCUA/NCUSIF, or any other federal government agency, are not deposits, and may lose value. Oceanview Life and Annuity Company is rated A (Excellent) by AM Best with a Stable outlook. The A rating is the third highest of AM Best’s 15 financial strength rating categories.",
  },

  cta: {
    heading: "Ready to explore LevelCap FIA?",
    sub: "LevelCap makes an important distinction clear: the applicable cap for a selected Cap Rate Guarantee Strategy can remain level even though future index performance and indexed interest remain uncertain.",
    buttonLabel: "Get Started",
  },
}

export default function LevelCapFIAPage() {
  return <ProductDetailPage product={PRODUCT} />
}
