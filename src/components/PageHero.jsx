// PageHero.jsx — Inner-page hero: same card and content positioning as homepage Hero
import { PillMint, PillGhost } from './Buttons.jsx'
import HeroShaper from './HeroShaper.jsx'

export default function PageHero({ image, imgFocus, eyebrow, title, titleAccent, subtitle, ctaPrimary, onPrimary, ctaSecondary, onSecondary }) {
  return (
    <div className="ov-hero-wrapper" style={{ marginBottom: 40 }}>
      <section style={{ paddingTop: 20, paddingBottom: 0 }}>
        <div className="ov-hero-card" style={{ background: "var(--ov-navy-1000)" }}>
          {image
            ? <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: imgFocus || "center", zIndex: 0 }} />
            : <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(113,186,191,0.15) 0%, transparent 70%)", zIndex: 0 }} />
          }
          {image && (
            <div className="ov-hero-scrim" style={{ position: "absolute", inset: 0, background: "linear-gradient(85deg, rgba(0,0,0,.82) 0%, rgba(0,31,84,.4) 60%, transparent 100%)", zIndex: 1 }} />
          )}
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url("assets/Noise.png")`, backgroundRepeat: "repeat", backgroundSize: "200px", opacity: 0.6, pointerEvents: "none", zIndex: 2 }} />
          <HeroShaper />
          <div className="ov-hero-content">
            {eyebrow && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 18, height: 1, background: 'rgba(112,186,191,.65)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#70BABF' }}>
                  {eyebrow}
                </span>
              </div>
            )}
            <h1 className="ov-hero-title" style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 800, fontSize: "clamp(28px, 4vw, 63px)", lineHeight: 1.1, color: "#F2FCFF", margin: 0, textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
              {title && <>{title}{titleAccent && <><br /></>}</>}
              {titleAccent && <em style={{ fontStyle: 'italic', color: '#70BABF' }}>{titleAccent}</em>}
            </h1>
            {subtitle && (
              <p style={{ fontFamily: "var(--ov-ff-sans)", fontWeight: 400, fontSize: "clamp(14px, 1.4vw, 17px)", lineHeight: 1.6, color: "rgba(242,252,255,.82)", margin: 0, maxWidth: "46ch" }}>
                {subtitle}
              </p>
            )}
            {(ctaPrimary || ctaSecondary) && (
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {ctaPrimary   && <PillMint hero onClick={onPrimary}>{ctaPrimary}</PillMint>}
                {ctaSecondary && <PillGhost light hero onClick={onSecondary}>{ctaSecondary}</PillGhost>}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}