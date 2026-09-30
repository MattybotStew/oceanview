import { FileText, BarChart2, Layers, Map } from 'lucide-react'
import PartnerLandingPage from './PartnerLandingPage.jsx'

const data = {
  partner: 'lpl',

  hero: {
    eyebrow: 'For LPL Financial Advisors',
    subtitle: 'Dependable retirement solutions built to perform — and simple enough to explain in any client meeting.',
    image: 'assets/hero-beach-couple.jpg',
    productAnchor: 'lpl-products',
    resourceAnchor: 'lpl-resources',
    ctaPrimary: 'Explore Products',
    ctaSecondary: 'Download Resources',
  },

  products: {
    sectionId: 'lpl-products',
    introBody: 'Whether your client is focused on predictable guaranteed growth or index-linked upside with principal protection, Oceanview has a solution built for them.',
    items: [
      {
        name: 'Harbourview FIA',
        eyebrow: 'Fixed Indexed Annuity',
        description: 'Designed for clients seeking both asset protection from market volatility and growth potential from market gains — with principal never directly exposed to market loss.',
        features: [
          'Principal protected from market downturns',
          'Interest crediting linked to market index performance',
          'Multiple crediting strategy options',
          'Tax-deferred accumulation',
        ],
        image: 'assets/older-couple-1.png',
        imageAlt: 'Couple reviewing retirement plan',
        imageRight: true,
        ctaLabel: 'View Product Details',
      },
      {
        name: 'Horizon MYGA',
        eyebrow: 'Multi-Year Guaranteed Annuity',
        description: 'A Single Premium Deferred Annuity for clients seeking a straightforward retirement savings accumulation vehicle — offering principal protection, a guaranteed interest rate, and tax-deferred earnings.',
        features: [
          'Guaranteed interest rate for the full contract term',
          'Principal protection from market fluctuations',
          'Tax-deferred accumulation',
          'Lifetime income options available',
        ],
        image: 'assets/family.png',
        imageAlt: 'Family planning for the future',
        imageRight: false,
        ctaLabel: 'Learn More About MYGAs',
      },
    ],
  },

  caseStudy: {
    image: 'assets/hero-couple.jpg',
  },

  resources: {
    sectionId: 'lpl-resources',
    salesDeskName: 'Simplicity Sales Desk',
    salesDeskPhone: '18558057684',
    salesDeskPhoneFormatted: '1-855-805-7684',
    categories: [
      { heading: 'Client Brochures', Icon: FileText,  items: [
        { label: 'Client Brochure', title: 'Harbourview FIA Client Brochure', href: 'https://oceanviewlife.my.salesforce.com/sfc/p/6g000005gt9s/a/Pd000005NleT/ISTBE3iEZCusPX0Kw2yhO0orYuaQ2vRFL4H_kKn1EYc' },
        { label: 'Client Brochure', title: 'Horizon MYGA Client Brochure', href: 'https://oceanviewlife.my.salesforce.com/sfc/p/6g000005gt9s/a/Pd00000246AX/O2HX0EE.HswuTmNYG36FTNl1dX29M4w278uIjhcVZUQ' },
      ]},
      { heading: 'Rate Sheets',      Icon: BarChart2, items: [
        { label: 'Rate Sheet', title: 'Harbourview FIA Client Rate Sheet', href: 'https://oceanviewlife.my.salesforce.com/sfc/p/6g000005gt9s/a/Pd0000023ma1/yN2kYFFCSXMjHySOKS2n14P_eTfLTpw2SrQOJukFjnY' },
        { label: 'Rate Sheet', title: 'Harbourview FIA Client Rate Sheet - California', href: 'https://oceanviewlife.my.salesforce.com/sfc/p/6g000005gt9s/a/Pd0000023mWn/AWEJoneUHfcYoDZ0vMESPYQrzMJj0MPz1Tfs5lgh.1s' },
        { label: 'Rate Sheet', title: 'Horizon MYGA Client Rate Sheet', href: 'https://oceanviewlife.my.salesforce.com/sfc/p/6g000005gt9s/a/Pd0000025Rfx/ouxSlXncX2mj5MjTlikjw0975xmLM2HB_belSDkog0Q' },
        { label: 'Rate Sheet', title: 'Horizon MYGA Client Rate Sheet - California', href: 'https://oceanviewlife.my.salesforce.com/sfc/p/6g000005gt9s/a/Pd0000025Rcj/Wk5f0fjP82xwDuZLAxIqgPeG_xDZMYiMRsMC6UV7jFA' },
      ]},
      { heading: 'Sales Tools',      Icon: Layers,    items: [
        { label: 'Allocation Strategy', title: 'Anchoring Allocations', href: 'https://oceanviewtemp.wpenginepowered.com/wp-content/uploads/2025/07/5MYGA-5FIA-Sales-Tool-Oceanview-Anchoring-Allocations.pdf' },
        { label: 'Retirement Planning', title: 'The New 60/40 Approach', href: 'https://oceanviewtemp.wpenginepowered.com/wp-content/uploads/2025/07/OceanviewLifeandAnnuity_New6040_Sept202024_Agents-3.pdf' },
        { label: 'Crediting Strategy', title: 'S&P 500 Index Crediting Strategy', href: 'https://oceanviewtemp.wpenginepowered.com/wp-content/uploads/2025/07/Harbourview-Oceanview-SP-500-Strategy-Slip-Sheet-2.pdf' },
        { label: 'Rate Strategy', title: 'Rates That Keep Pace', href: 'https://oceanviewlife.my.salesforce.com/sfc/p/6g000005gt9s/a/Pd000002Vz9J/eEx1zHE.JrxMBQgOzv6nrNB_5u.7fN_ASMhojqwtJEE' },
        { label: 'Risk Control', title: 'S&P 500 Daily Risk Control 10% Vol Strategy', href: 'https://oceanviewlife.my.salesforce.com/sfc/p/6g000005gt9s/a/Pd000002VzAv/CGbDg3sy.bhVtyHHMmtYQIqENqPX4CFCyAnmHmrDU7A' },
      ]},
      { heading: 'Additional',       Icon: Map,        items: [{ label: 'Wholesaler Map', title: 'Simplicity Wholesaler Map' }] },
    ],
  },

  supportContacts: null,

  cta: {
    eyebrow: 'Get in Touch',
    body: 'Complete a general inquiry or reach our sales team directly — a dedicated representative will follow up.',
    primaryLabel: 'Contact Us',
  },
}

export default function LPLLandingPage() {
  return <PartnerLandingPage data={data} />
}
