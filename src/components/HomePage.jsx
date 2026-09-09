// HomePage.jsx — Live homepage (frozen). Do NOT edit for the new V2 design.
// New homepage work lives in HomeV2Page.jsx on the unlisted #home-v2 route.
// See AGENTS.md / .clinerules for the constraint: live # / #home stays unchanged
// until sign-off. Shared Hero / tokens stay for inner pages.
import Hero from './Hero.jsx'
import Highlights from './Highlights.jsx'
import StatsStrip from './StatsStrip.jsx'
import ProductsCard from './ProductsCard.jsx'
import AboutBlock from './AboutBlock.jsx'
import CTABanner from './CTABanner.jsx'

export default function HomePage({ goto }) {
  return (
    <main>
      <Hero onPrimary={() => goto("products")} onSecondary={() => goto("contact")} />
      <Highlights />
      <StatsStrip />
      <ProductsCard />
      <AboutBlock />
      <section className="ov-section" style={{ background: "#fff" }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Get Started"
            title="Protect your retirement"
            titleAccent="with confidence."
            body="Competitive guaranteed rates, principal protection, and a dedicated service team — backed by an A (Excellent) A.M. Best rating."
            cta="Explore Products"
            onClick={() => { window.location.hash = 'products'; }}
          />
        </div>
      </section>
    </main>
  );
}
