// Rates page content — source: staging /rates/ (published values) + product pages.
// Products with no published rates use the `requestRates` state.

export const HERO = {
  eyebrow: "Client Resources",
  title: "Current Annuity Rates",
  subtitle: "Every published rate for every Oceanview product, in one place.",
  note: "Rates are subject to change. Confirm availability and state approvals with the Sales Desk.",
}

export const INDEX = [
  { id: "harbourview-myga", label: "Harbourview MYGA" },
  { id: "horizon-myga", label: "Horizon MYGA" },
  { id: "currentrate-myga", label: "CurrentRate MYGA" },
  { id: "sky-harbourview-myga", label: "Sky Harbourview MYGA" },
  { id: "harbourview-fia", label: "Harbourview FIA" },
  { id: "caplock-fia", label: "CapLock FIA" },
  { id: "topsider-fia", label: "Topsider FIA" },
]

export const MYGA_PRODUCTS = [
  {
    id: "harbourview-myga",
    group: "Fixed Annuities",
    name: "Harbourview MYGA",
    desc: "Multi-Year Guaranteed Annuity rates for 2, 3, 4, 5, 6, 7 and 10-year surrender charge periods.",
    terms: ["2-Year", "3-Year", "4-Year", "5-Year", "6-Year", "7-Year", "10-Year"],
    bands: [
      { label: "Standard ($20K+)", values: ["4.80%", "4.95%", "5.35%", "5.15%", "5.75%", "5.30%", "5.85%"] },
      { label: "Select ($70K+)", values: ["5.15%", "5.30%", "5.70%", "5.50%", "6.10%", "5.65%", "6.20%"] },
      { label: "Premier ($100K+)", values: ["5.15%", "5.30%", "5.70%", "5.50%", "6.10%", "5.65%", "6.20%"] },
    ],
    note: "Rates effective as of the current rate schedule. Subject to change.",
    rateSheet: true,
  },
  {
    id: "horizon-myga",
    group: "Fixed Annuities",
    name: "Horizon MYGA",
    desc: "Guarantee periods of 3, 5, 7 and 10 years. Horizon rates are quoted at application.",
    terms: ["3-Year", "5-Year", "7-Year", "10-Year"],
    bands: [
      { label: "Standard ($20K+)", values: ["—", "—", "—", "—"] },
      { label: "Select ($70K+)", values: ["—", "—", "—", "—"] },
      { label: "Premier ($100K+)", values: ["—", "—", "—", "—"] },
    ],
    note: "Current Horizon rates are provided by the Sales Desk at the time of application and confirmed on the rate sheet.",
    rateSheet: true,
    requestRates: true,
    detail: "Available terms: 3, 5, 7 and 10 years · Bands: Standard ($20K+), Select ($70K+), Premier ($100K+)",
  },
  {
    id: "currentrate-myga",
    group: "Fixed Annuities",
    name: "CurrentRate MYGA",
    desc: "CurrentRate Multi-Year Guaranteed Annuity rates, 5-year surrender charge period.",
    terms: ["5-Year"],
    bands: [{ label: "Standard ($20K+)", values: ["6.50%"] }],
    note: "Rates effective as of the current rate schedule. Subject to change.",
    rateSheet: true,
  },
  {
    id: "sky-harbourview-myga",
    group: "Fixed Annuities",
    name: "Sky Harbourview MYGA",
    desc: "Sky Harbourview Multi-Year Guaranteed Annuity rates for 3, 5, 7 and 10-year surrender charge periods.",
    terms: ["3-Year", "5-Year", "7-Year", "10-Year"],
    bands: [
      { label: "Standard ($20K+)", values: ["4.85%", "5.40%", "5.70%", "5.90%"] },
      { label: "Select ($70K+)", values: ["5.20%", "5.75%", "6.05%", "6.25%"] },
      { label: "Premier ($100K+)", values: ["5.20%", "5.75%", "6.05%", "6.25%"] },
    ],
    note: "Rates effective as of the current rate schedule. Subject to change.",
    rateSheet: true,
  },
]

export const FIA_PRODUCTS = [
  {
    id: "harbourview-fia",
    group: "Fixed Indexed Annuities",
    name: "Harbourview FIA",
    desc: "Cap and participation rates across major market indices.",
    terms: ["3 Year", "5 Year", "7 Year", "10 Year"],
    groups: [
      {
        label: "Participation Rates",
        rows: [
          { strategy: "S&P 500 Annual Point-to-Point w/ Participation Rate", values: ["60.00%", "65.00%", "65.00%", "65.00%"] },
          { strategy: "S&P 500 2-Year Annual Point-to-Point w/ Participation Rate", values: ["75.00%", "75.00%", "70.00%", "75.00%"] },
          { strategy: "S&P 500 Daily Risk Control 5% Excess Return Annual Point-to-Point w/ Participation Rate", values: ["140.00%", "140.00%", "160.00%", "180.00%"] },
          { strategy: "S&P 500 Daily Risk Control 10% Excess Return Annual Point-to-Point w/ Participation Rate", values: ["70.00%", "70.00%", "80.00%", "90.00%"] },
        ],
      },
      {
        label: "Cap Rates",
        rows: [
          { strategy: "S&P 500 Monthly Average w/ Cap Rate", values: ["4.00%", "5.00%", "6.00%", "7.00%"] },
          { strategy: "S&P 500 Annual Point-to-Point w/ Cap Rate", values: ["7.00%", "8.40%", "8.50%", "8.50%"] },
          { strategy: "Russell 2000 Annual Point-to-Point w/ Cap Rate", values: ["7.00%", "8.40%", "8.50%", "8.50%"] },
          { strategy: "Nasdaq-100 Annual Point-to-Point w/ Cap Rate", values: ["7.00%", "8.40%", "8.50%", "8.50%"] },
          { strategy: "MSCI World Annual Point-to-Point w/ Cap Rate", values: ["7.00%", "8.40%", "8.50%", "8.50%"] },
        ],
      },
      {
        label: "Fixed Rate",
        rows: [
          { strategy: "Fixed Rate", values: ["7.75%*", "7.25%*", "8.60%*", "9.05%*"] },
        ],
      },
    ],
    note: "* Fixed rates apply to the first contract year. Rates effective as of the current rate schedule and subject to change.",
    rateSheet: true,
  },
  {
    id: "caplock-fia",
    group: "Fixed Indexed Annuities",
    name: "CapLock FIA",
    desc: "Cap and participation rates across major market indices.",
    terms: ["5 Year", "7 Year"],
    groups: [
      {
        label: "Guaranteed Cap Rates",
        rows: [
          { strategy: "S&P 500 Annual Point-to-Point w/ Cap Rate Guarantee*", values: ["9.50%", "9.45%"] },
          { strategy: "Nasdaq-100 Annual Point-to-Point w/ Cap Rate Guarantee*", values: ["9.50%", "9.45%"] },
          { strategy: "Russell 2000 Annual Point-to-Point w/ Cap Rate Guarantee*", values: ["9.50%", "9.45%"] },
        ],
      },
      {
        label: "Cap Rates",
        rows: [
          { strategy: "S&P 500 Annual Point-to-Point w/ Cap Rate", values: ["8.25%", "8.50%"] },
          { strategy: "Russell 2000 Annual Point-to-Point w/ Cap Rate", values: ["8.25%", "8.50%"] },
          { strategy: "Nasdaq-100 Annual Point-to-Point w/ Cap Rate", values: ["8.25%", "8.50%"] },
          { strategy: "S&P 500 Monthly Average w/ Cap Rate", values: ["5.00%", "5.00%"] },
        ],
      },
      {
        label: "Participation Rates",
        rows: [
          { strategy: "S&P 500 Annual Point-to-Point w/ Participation Rate", values: ["45.00%", "50.00%"] },
          { strategy: "S&P 500 2-Year Annual Point-to-Point w/ Participation Rate", values: ["55.00%", "60.00%"] },
          { strategy: "S&P 500 Daily Risk Control 5% Excess Return Annual Point-to-Point w/ Participation Rate", values: ["140.00%", "140.00%"] },
          { strategy: "S&P 500 Daily Risk Control 10% Excess Return Annual Point-to-Point w/ Participation Rate", values: ["70.00%", "70.00%"] },
        ],
      },
      {
        label: "Fixed Rate",
        rows: [{ strategy: "Fixed Rate", values: ["3.50%", "3.50%"] }],
      },
    ],
    note: "* Guaranteed cap rates for the selected Cap Rate Guarantee Strategy. Rates effective as of the current rate schedule and subject to change.",
    rateSheet: true,
  },
  {
    id: "topsider-fia",
    group: "Fixed Indexed Annuities",
    name: "Topsider FIA",
    desc: "Index crediting strategies across the S&P 500, Nasdaq-100 and Russell 2000, plus a fixed-interest strategy.",
    terms: ["Rate"],
    groups: [
      {
        label: "Index Strategies",
        rows: [
          { strategy: "S&P 500 — Annual Point to Point with Cap Rate", values: ["—"] },
          { strategy: "S&P 500 — Annual Point to Point with Participation Rate", values: ["—"] },
          { strategy: "S&P 500 — 2-Year Point to Point with Participation Rate", values: ["—"] },
          { strategy: "S&P 500 — Monthly Average Annual Point to Point with Cap Rate", values: ["—"] },
          { strategy: "S&P 500 — Daily Risk Control 5% Participation Rate", values: ["—"] },
          { strategy: "S&P 500 — Daily Risk Control 10% Participation Rate", values: ["—"] },
          { strategy: "Nasdaq-100 — Annual Point to Point with Cap Rate", values: ["—"] },
          { strategy: "Nasdaq-100 — Annual Point to Point with Participation Rate", values: ["—"] },
          { strategy: "Nasdaq-100 — 2-Year Point to Point with Participation Rate", values: ["—"] },
          { strategy: "Russell 2000 — Annual Point to Point with Cap Rate", values: ["—"] },
          { strategy: "Russell 2000 — Annual Point to Point with Participation Rate", values: ["—"] },
          { strategy: "Russell 2000 — Daily Risk Control 10% Participation Rate", values: ["—"] },
          { strategy: "Fixed Interest Rate", values: ["—"] },
        ],
      },
    ],
    note: "Current Topsider rates are provided by the Sales Desk at the time of application and confirmed on the rate sheet.",
    rateSheet: true,
    requestRates: true,
    detail: "13 index strategies across the S&P 500, Nasdaq-100 and Russell 2000, plus a fixed-interest strategy.",
  },
]

export const CHANGES = {
  eyebrow: "Rate updates",
  heading: "Rates change. This page is the source of truth.",
  body: "Published MYGA and FIA rates are updated here as they change. Product pages and comparison tools link back to this page so clients and advisors always see the current schedule.",
  points: [
    "One rates page for every product",
    "Rate sheets downloadable by product",
    "Product pages link here instead of duplicating tables",
  ],
  cta: "Contact Sales",
}

export const DISCLOSURES = [
  "Rates are subject to change without notice until the contract is issued. Rates shown are for new contracts and may vary by state, age, premium amount and distribution band.",
  "Guarantees are subject to the claims-paying ability of the issuing insurance company.",
  "Fixed indexed annuity caps and participation rates are declared for the applicable crediting period and may change at renewal unless guaranteed under the contract.",
  "Product features, rates, strategies, guarantees, form numbers and availability may vary by state. The issued contract and applicable disclosure materials govern.",
]
