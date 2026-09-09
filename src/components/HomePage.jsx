// HomePage.jsx — Live homepage (frozen). Do NOT edit for the new V2 design.
// Previous homepage — retained at #home-legacy for reference.
// Live home is HomeV2Page.jsx at # / #home.
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
