// PageHero.jsx — Inner-page hero: same card and content positioning as homepage Hero
import { PillMint, PillGhost } from './Buttons.jsx'
import HeroShaper from './HeroShaper.jsx'

export default function PageHero({ image, imgFocus, badge, eyebrow, title, titleAccent, subtitle, ctaPrimary, onPrimary, ctaSecondary, onSecondary }) {
  return (
    <div className="ov-hero-wrapper" style={{ marginBottom: 40 }}>
      <section style={{ paddingTop: 20, paddingBottom: 0 }}>
        <div
          className="ov-hero-card"
          style={{
            backgroundColor: "var(--ov-navy-1000)",
            ...(image && { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: imgFocus || "center" }),
          }}
        >
          {!image && (
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(113,186,191,0.15) 0%, transparent 70%)", zIndex: 0 }} />
          )}
          {image && (
            <div
              className="ov-hero-scrim"
              style={{ position: "absolute", inset: 0, zIndex: 1, background: `url("assets/Noise.png") 0 0 / 200px, linear-gradient(85deg, rgba(0,31,84,.82) 0%, rgba(0,31,84,.4) 60%, transparent 100%)` }}
            />
          )}
          <HeroShaper />
            <div className="ov-hero-content">
              {badge && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,31,84,.45)', border: '1px solid rgba(255,255,255,.22)', borderRadius: 200, padding: '5px 12px', marginBottom: 4, alignSelf: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#F2FCFF', whiteSpace: 'nowrap' }}>{badge}</span>
                </div>
              )}
              {eyebrow && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 18, height: 1, background: 'rgba(112,186,191,.65)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#70BABF' }}>
                  {eyebrow}
                </span>
              </div>
            )}
            <h1 className="ov-hero-title" style={{ fontFamily: "var(--ov-ff-display)", fontWeight: 800, fontSize: "clamp(28px, 5.5vw, 63px)", lineHeight: 1.1, color: "#F2FCFF", margin: 0 }}>
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