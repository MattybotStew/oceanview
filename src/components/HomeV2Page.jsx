// HomeV2Page.jsx — New homepage review surface (unlisted #home-v2).
// Prod-parity sections reuse live homepage components unchanged.
// Wireframe-only blocks (audience routing, retirement resources) use the same
// tokens/cards as Highlights — no bespoke layouts. Live # / #home frozen.
import Hero from './Hero.jsx'
import StatsStrip from './StatsStrip.jsx'
import ProductsCard from './ProductsCard.jsx'
import AboutBlock from './AboutBlock.jsx'
import CTABanner from './CTABanner.jsx'
import { Eyebrow } from './common.jsx'
import { PillMint, TextLink } from './Buttons.jsx'

const card = {
  background: '#F1FBFF',
  borderRadius: 16,
  padding: '28px 30px 32px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid rgba(13,31,78,.08)',
}

const cardTitle = {
  fontFamily: 'var(--ov-ff-display)',
  fontWeight: 400,
  fontSize: 24,
  lineHeight: 1.16,
  color: 'var(--ov-navy-800)',
  letterSpacing: '-0.36px',
  margin: '0 0 16px',
}

const cardBody = {
  fontFamily: 'var(--ov-ff-sans)',
  fontWeight: 400,
  fontSize: 17,
  lineHeight: 1.6,
  color: 'var(--ov-grey-600)',
  margin: '0 0 24px',
  flex: 1,
}

const sectionH2 = {
  fontFamily: 'var(--ov-ff-display)',
  fontWeight: 400,
  fontSize: 'clamp(30px, 3.6vw, 48px)',
  lineHeight: 1.08,
  color: 'var(--ov-navy-900)',
  letterSpacing: '-0.01em',
  margin: '0 0 20px',
}

const sectionBody = {
  fontFamily: 'var(--ov-ff-sans)',
  fontSize: 'clamp(15px, 1.4vw, 17px)',
  lineHeight: 1.65,
  color: 'var(--ov-grey-600)',
  margin: '0 0 32px',
  maxWidth: '62ch',
}

const RESOURCES = [
  {
    title: 'How Fixed Annuities Work',
    body: 'Understand guarantees, interest crediting and predictable accumulation.',
    cta: 'Learn About Fixed Annuities',
    hash: 'products',
  },
  {
    title: 'Annuity Pros & Cons',
    body: 'Explore benefits, tradeoffs and questions to consider.',
    cta: 'Explore the Pros & Cons',
    hash: 'faq',
  },
  {
    title: 'Understanding Fixed Indexed Annuities',
    body: 'Principal protection and index-linked interest-crediting potential.',
    cta: 'Learn About Fixed Indexed Annuities',
    hash: 'fia-overview',
  },
]

function navTo(hash) {
  window.location.hash = hash
  window.scrollTo({ top: 0, behavior: 'instant' })
}

export default function HomeV2Page({ goto }) {
  const go = (slug) => {
    if (goto) goto(slug)
    else navTo(slug)
  }

  return (
    <main className="home-v2-page">
      {/* Static hero — first slide only (live home keeps full carousel) */}
      <Hero
        staticSlide={0}
        slideOverride={{ image: 'assets/home-v2-hero.jpg' }}
        onPrimary={() => go('products')}
        onSecondary={() => go('contact')}
      />

      {/* V2: white stats strip (trust / proof — light variant for hero handoff) */}
      <StatsStrip variant="light" />

      {/* Wireframe: audience routing (replaces Highlights layout; prod card styling) */}
      <section style={{ background: '#fff' }} className="ov-section">
        <div className="ov-container">
          <Eyebrow>How Can We Help?</Eyebrow>
          <h2 style={sectionH2}>How can we help?</h2>
          <p style={sectionBody}>
            Whether you&apos;re planning for your own retirement or helping clients prepare for theirs, find the Oceanview information and resources designed for you.
          </p>
          <div className="home-v2-audience-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div style={card}>
              <h3 style={cardTitle}>Planning for Retirement</h3>
              <p style={cardBody}>
                Learn how annuities work, compare your options and explore resources designed to help you make more informed retirement decisions.
              </p>
              <PillMint className="home-v2-card-cta" onClick={() => go('individuals')}>Explore for Individuals</PillMint>
            </div>
            <div style={card}>
              <h3 style={cardTitle}>Financial Professionals</h3>
              <p style={cardBody}>
                Access current rates, product information, sales tools, appointment resources and Oceanview sales support for serving your clients.
              </p>
              <PillMint className="home-v2-card-cta" onClick={() => go('professionals')}>For Financial Professionals</PillMint>
            </div>
          </div>
        </div>
      </section>

      {/* Prod: products band */}
      <ProductsCard />

      {/* Prod: about + A.M. Best */}
      <AboutBlock />

      {/* Wireframe: retirement resources (prod card + tint band styling) */}
      <section style={{ background: 'var(--ov-surface-tint)' }} className="ov-section">
        <div className="ov-container">
          <Eyebrow>Retirement Resources</Eyebrow>
          <h2 style={sectionH2}>Make a more informed annuity decision.</h2>
          <p style={sectionBody}>
            Explore straightforward resources designed to help you understand annuity options, potential benefits, tradeoffs and questions worth asking.
          </p>
          <div className="home-v2-resource-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 28 }}>
            {RESOURCES.map(({ title, body, cta, hash }) => (
              <div key={title} style={{ ...card, background: '#fff' }}>
                <h3 style={{ ...cardTitle, fontSize: 19 }}>{title}</h3>
                <p style={{ ...cardBody, fontSize: 15, marginBottom: 16 }}>{body}</p>
                <TextLink onClick={() => go(hash)}>{cta}</TextLink>
              </div>
            ))}
          </div>
          <PillMint className="home-v2-card-cta" onClick={() => go('insights')}>Explore Retirement Resources</PillMint>
        </div>
      </section>

      {/* Prod: closing CTA banner */}
      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Get Started"
            title="Protect your retirement"
            titleAccent="with confidence."
            body="Competitive guaranteed rates, principal protection, and a dedicated service team — backed by an A (Excellent) A.M. Best rating."
            cta="Explore Products"
            onClick={() => go('products')}
          />
        </div>
      </section>
    </main>
  )
}
