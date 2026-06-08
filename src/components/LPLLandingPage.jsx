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
        comingSoon: true,
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
      { heading: 'Client Brochures', Icon: FileText,  items: [{ label: 'Client Brochure', title: 'Harbourview FIA Client Brochure' }] },
      { heading: 'Rate Sheets',      Icon: BarChart2, items: [
        { label: 'Rate Sheet',             title: 'Harbourview FIA Client Rate Sheet' },
        { label: 'Rate Sheet — California', title: 'Harbourview FIA Client Rate Sheet (CA)' },
      ]},
      { heading: 'Sales Tools',      Icon: Layers,    items: [
        { label: 'Allocation Strategy',   title: 'Anchoring Allocations' },
        { label: 'Retirement Planning',    title: 'The New 60/40 Approach' },
        { label: 'Crediting Strategy',     title: 'S&P 500 Index Crediting Strategy' },
        { label: 'Rate Strategy',          title: 'Rates That Keep Pace' },
        { label: 'Risk Control',           title: 'S&P 500 Daily Risk Control 10% Vol Strategy' },
      ]},
      { heading: 'Additional',       Icon: Map,        items: [{ label: 'Wholesaler Map', title: 'Simplicity Wholesaler Map' }] },
    ],
  },

  supportContacts: null,

  cta: {
    eyebrow: 'Get in Touch',
    body: 'Complete a general inquiry or reach our sales team directly — a dedicated representative will follow up.',
    primaryLabel: 'Contact Us',
    secondaryLabel: 'Browse Sales Tools',
  },
}

export default function LPLLandingPage() {
  return <PartnerLandingPage data={data} />
}
