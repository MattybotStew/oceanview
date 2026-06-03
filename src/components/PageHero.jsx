// PageHero.jsx — Inner-page hero: same card, height, and content positioning as homepage Hero
import { PillMint, PillNavy } from './Buttons.jsx'
import HeroShaper from './HeroShaper.jsx'

export default function PageHero({ image, eyebrow, title, subtitle, ctaPrimary, onPrimary, ctaSecondary, onSecondary }) {
  return (
    <div className="ov-hero-wrapper" style={{ marginBottom: 40 }}>
      <section style={{ paddingTop: 20, paddingBottom: 0 }}>
        <div className="ov-hero-card" style={{ background: "var(--ov-navy-1000)" }}>
          {image
            ? <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
            : <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(113,186,191,0.15) 0%, transparent 70%)", zIndex: 0 }} />
          }
          {image && (
            <div className="ov-hero-scrim" style={{ position: "absolute", inset: 0, background: "linear-gradient(85deg, rgba(0,0,0,0.80) 2.63%, rgba(102,102,102,0.00) 65.98%)", zIndex: 1 }} />
          )}
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url("assets/Noise.png")`, backgroundRepeat: "repeat", backgroundSize: "200px", opacity: 0.8, pointerEvents: "none", zIndex: 2 }} />
          <HeroShaper />
          <div className="ov-hero-content">
            {eyebrow && (
              <div style={{ display: 'inline-flex', alignSelf: 'flex-start', background: 'var(--ov-navy-900)', borderRadius: 200, padding: '6px 16px', fontFamily: 'var(--ov-ff-eyebrow)', fontWeight: 600, fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: '#F2FCFF' }}>
                {eyebrow}
              </div>
            )}
            <h1 className="ov-hero-title" style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 800, fontSize: "clamp(28px, 4vw, 63px)", lineHeight: 1.1, color: "#F2FCFF", margin: 0, textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
              {title}
            </h1>
            {subtitle && (
              <p style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: "clamp(14px, 1.5vw, 20px)", lineHeight: 1.4, color: "#F2FCFF", margin: 0, textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
                {subtitle}
              </p>
            )}
            {(ctaPrimary || ctaSecondary) && (
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {ctaPrimary  && <PillMint hero onClick={onPrimary}  style={{ background: "#fff", color: "var(--ov-navy-900)" }}>{ctaPrimary}</PillMint>}
                {ctaSecondary && <PillNavy hero onClick={onSecondary}>{ctaSecondary}</PillNavy>}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
