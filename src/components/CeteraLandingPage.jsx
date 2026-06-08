import { FileText, BarChart2, Layers, Mail, Phone } from 'lucide-react'
import PartnerLandingPage from './PartnerLandingPage.jsx'

const data = {
  partner: 'cetera',

  hero: {
    eyebrow: 'Cetera Financial Professional Resource Center',
    subtitle: 'Dependable retirement solutions built to perform — and simple enough to explain in any client meeting.',
    image: 'assets/hero-couple.jpg',
    productAnchor: 'cetera-products',
    resourceAnchor: 'cetera-resources',
    ctaPrimary: 'Explore Products',
    ctaSecondary: 'Download Resources',
  },

  products: {
    sectionId: 'cetera-products',
    introBody: 'Whether your client needs guaranteed growth, indexed upside with principal protection, or defined growth parameters — Oceanview has a solution built for them.',
    items: [
      {
        name: 'Harbourview MYGA',
        eyebrow: 'Multi-Year Guaranteed Annuity',
        description: 'A fixed annuity designed for clients seeking predictable growth through a guaranteed interest rate over a defined period — with no exposure to market volatility.',
        features: [
          'Guaranteed interest rate for the full contract term',
          'Principal protection from market fluctuations',
          'Predictable, tax-deferred accumulation',
          'Straightforward structure with clearly defined outcomes',
        ],
        image: 'assets/family.png',
        imageAlt: 'Family planning retirement',
        imageRight: true,
        ctaLabel: 'View Product Details',
      },
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
        imageRight: false,
        ctaLabel: 'View Product Details',
      },
      {
        name: 'CapLock FIA',
        eyebrow: 'Fixed Indexed Annuity',
        description: 'A fixed indexed annuity with clearly defined growth parameters — giving clients and advisors full transparency around how interest may be credited.',
        features: [
          'Clearly defined growth parameters and cap structure',
          'Principal protection from market downturns',
          'Transparency around how interest is credited',
          'Structured approach to indexed growth potential',
        ],
        image: 'assets/couple-walking.png',
        imageAlt: 'Couple walking, planning ahead',
        imageRight: true,
        ctaLabel: 'View Product Details',
      },
    ],
  },

  caseStudy: {
    image: 'assets/hero-beach-couple.jpg',
  },

  resources: {
    sectionId: 'cetera-resources',
    salesDeskName: 'Oceanview Sales Desk',
    salesDeskPhone: '18336567455',
    salesDeskPhoneFormatted: '1-833-656-7455',
    categories: [
      { heading: 'Client Brochures', Icon: FileText, items: [
        { label: 'Client Brochure', title: 'Harbourview MYGA Client Brochure' },
        { label: 'Client Brochure', title: 'Harbourview FIA Client Brochure' },
        { label: 'Client Brochure', title: 'CapLock FIA Client Brochure' },
      ]},
      { heading: 'Rate Sheets', Icon: BarChart2, items: [
        { label: 'Rate Sheet',              title: 'Harbourview FIA Client Rate Sheet' },
        { label: 'Rate Sheet — California', title: 'Harbourview FIA Client Rate Sheet (CA)' },
        { label: 'Rate Sheet',              title: 'Harbourview MYGA Client Rate Sheet' },
        { label: 'Rate Sheet — California', title: 'Harbourview MYGA Client Rate Sheet (CA)' },
        { label: 'Rate Sheet',              title: 'CapLock FIA Client Rate Sheet' },
        { label: 'Rate Sheet — California', title: 'CapLock FIA Client Rate Sheet (CA)' },
      ]},
      { heading: 'Sales Tools', Icon: Layers, items: [
        { label: 'Allocation Strategy', title: 'Anchoring Allocations' },
        { label: 'Retirement Planning', title: 'The New 60/40 Approach' },
        { label: 'Crediting Strategy',  title: 'S&P 500 Index Crediting Strategy' },
        { label: 'Rate Strategy',       title: 'Rates That Keep Pace' },
        { label: 'Risk Control',        title: 'S&P 500 Daily Risk Control 10% Vol Strategy' },
      ]},
    ],
  },

  supportContacts: [
    { icon: Mail,  label: 'Cetera Sales Desk',    name: 'Cetera Annuity Solutions', detail: 'annuitysolutions@cetera.com', sub: 'Platform and product support for Cetera advisors' },
    { icon: Phone, label: 'Wholesaler Support',   name: 'NFG Brokerage',             detail: '801-568-2626',               sub: 'annuityquotes@nfgbrokerage.com — illustrations & wholesaling' },
    { icon: Phone, label: 'Oceanview Sales Desk', name: 'Direct Sales Support',      detail: '1-833-656-7455',            sub: 'Product questions and advisor resources' },
  ],

  cta: {
    eyebrow: 'Get in Touch',
    body: 'Complete a general inquiry or reach our Cetera sales desk — a dedicated representative will follow up.',
    primaryLabel: 'Contact Us',
    secondaryLabel: 'Browse Sales Tools',
  },
}

export default function CeteraLandingPage() {
  return <PartnerLandingPage data={data} />
}
