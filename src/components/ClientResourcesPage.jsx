import PageHero from './PageHero.jsx'
import CTABanner from './CTABanner.jsx'
import { TextLink } from './Buttons.jsx'
import { FileText, Download, BookOpen, TrendingUp, BarChart2, HelpCircle } from 'lucide-react'

const RESOURCES = [
  {
    Icon: TrendingUp,
    eyebrow: "Rates",
    title: "Current Rates",
    desc: "Up-to-date crediting rates for all Oceanview fixed and fixed-indexed annuity products.",
    href: "#rates",
  },
  {
    Icon: BarChart2,
    eyebrow: "Comparison",
    title: "How Oceanview MYGAs Compare",
    desc: "Side-by-side comparison of our Multi-Year Guaranteed Annuities versus competitors and other savings vehicles.",
    href: "#compare",
  },
  {
    Icon: FileText,
    eyebrow: "Case Studies",
    title: "Client Case Studies",
    desc: "Real-world examples of how Oceanview annuities have helped clients achieve long-term retirement goals.",
    href: "#case-studies",
  },
  {
    Icon: Download,
    eyebrow: "Downloads",
    title: "Product Downloads",
    desc: "Brochures, rate sheets, applications, and regulatory filings available for immediate download.",
    href: "#downloads",
  },
  {
    Icon: BookOpen,
    eyebrow: "Reference",
    title: "Annuity Glossary",
    desc: "Plain-language definitions for annuity and insurance terms your clients will encounter.",
    href: "#glossary",
  },
  {
    Icon: HelpCircle,
    eyebrow: "Support",
    title: "FAQs",
    desc: "Answers to the most common questions about our products, policies, and the application process.",
    href: "#faq",
  },
];

function ResourceCard({ Icon, eyebrow, title, desc, href }) {
  return (
    <a href={href} style={{ textDecoration: "none" }} className="ov-resource-card">
      <div style={{
        background: "#fff",
        borderRadius: 16,
        padding: "32px 28px 28px",
        border: "1px solid rgba(13,31,78,.07)",
        boxShadow: "0 2px 12px rgba(13,31,78,.05)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        height: "100%",
        boxSizing: "border-box",
        transition: "transform .18s ease, box-shadow .18s ease",
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 10,
          background: "var(--ov-surface-tint)",
          border: "1px solid rgba(36,148,193,.15)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <Icon size={20} color="#2494C1" strokeWidth={1.75} />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10, letterSpacing: "1.2px", textTransform: "uppercase", color: "#2494C1" }}>
            {eyebrow}
          </div>
          <h3 style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 400, fontSize: 22, color: "var(--ov-navy-900)", margin: 0, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
            {title}
          </h3>
          <p style={{ fontFamily: "var(--ov-ff-sans)", fontSize: 14, lineHeight: 1.65, color: "var(--ov-grey-600)", margin: 0 }}>
            {desc}
          </p>
        </div>
        <div style={{ marginTop: 4 }}>
          <span style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 13, color: "var(--ov-navy-600)", display: "inline-flex", alignItems: "center", gap: 6 }}>
            Explore <span style={{ transition: "transform .18s ease" }} className="ov-resource-arrow">→</span>
          </span>
        </div>
      </div>
    </a>
  );
}

export default function ClientResourcesPage() {
  return (
    <main>
      <PageHero
        image="assets/couple-walking.png"
        eyebrow="Client Resources"
        title="Everything you need"
        titleAccent="in one place."
        subtitle="Rates, downloads, comparisons, and reference tools — built to support every client conversation."
      />

      <section style={{ background: "var(--ov-surface-tint)" }} className="ov-section">
        <div className="ov-container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }} className="ov-resources-grid">
            {RESOURCES.map(r => <ResourceCard key={r.title} {...r} />)}
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: "#fff" }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Need Help?"
            title="Can't find what you're"
            titleAccent="looking for?"
            body="Our client services team is available to help with product questions, policy details, and anything else you need."
            cta="Contact Us"
            onClick={() => { window.location.hash = 'contact'; }}
          />
        </div>
      </section>
    </main>
  );
}
