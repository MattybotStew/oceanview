// Hero.jsx — Rounded card hero with slider
import { useState, useEffect, useRef } from 'react'
import { PillMint, PillGhost } from './Buttons.jsx'
import HeroShaper from './HeroShaper.jsx'

function SlideEyebrow({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ width: 18, height: 1, background: 'rgba(112,186,191,.65)', flexShrink: 0 }} />
      <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#70BABF' }}>
        {children}
      </span>
    </div>
  );
}

const heroStyles = {
  wrapper: {
    marginBottom: 40,
  },
  section: {
    paddingTop: 20,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    overflow: "visible",
  },
  card: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    zIndex: 1,
    borderRadius: 32,
  },
  scrim: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(85deg, rgba(0,0,0,.82) 0%, rgba(0,31,84,.4) 60%, transparent 100%)",
    zIndex: 1,
  },
  noise: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url("assets/Noise.png")`,
    backgroundRepeat: "repeat",
    backgroundSize: "200px",
    opacity: 0.6,
    pointerEvents: "none",
    zIndex: 1,
  },
  content: {
    zIndex: 2,
    position: "relative",
    padding: "60px 40px",
  },
  h1: {
    fontFamily: "var(--ov-ff-display)",
    fontWeight: 800,
    fontSize: "clamp(28px, 8vw, 63px)",
    lineHeight: 1.1,
    color: "#F2FCFF",
    margin: 0,
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  body: {
    fontFamily: "var(--ov-ff-sans)",
    fontWeight: 400,
    fontSize: "clamp(14px, 1.4vw, 17px)",
    lineHeight: 1.6,
    color: "rgba(242,252,255,.82)",
    margin: 0,
    maxWidth: "46ch",
  },
  ctas: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },
  dotsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 20,
    marginBottom: 0,
    zIndex: 10,
    position: "relative",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "#CFD5EA",
    cursor: "pointer",
    transition: "all 0.2s ease",
    border: "none",
    padding: 0,
    flexShrink: 0,
  },
  dotActive: {
    backgroundColor: "#2494C1",
    width: 22,
    height: 8,
    borderRadius: 4,
  },
  arrowBtn: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "#233D7C",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "background 0.2s ease",
  },
};

const heroSlides = [
  {
    eyebrow: "Retirement Solutions",
    titleLines: ["Plan today for", "the tomorrow"],
    titleAccent: "you deserve.",
    body: "Smart annuity solutions built for long-term financial confidence and flexibility.",
    image: "assets/hero-couple.jpg",
    ctaPrimary: "View Products",
    ctaSecondary: "Contact Us",
  },
  {
    eyebrow: "Fixed Indexed Annuities",
    titleLines: ["Secure your"],
    titleAccent: "retirement with confidence.",
    body: "Fixed and fixed-indexed annuities designed for long-term financial stability.",
    image: "assets/two.jpg",
    ctaPrimary: "Explore Annuities",
    ctaSecondary: "Learn More",
  },
  {
    eyebrow: "Principal Protection",
    titleLines: ["Growth potential,"],
    titleAccent: "principal protected.",
    body: "Participate in market gains without the risk of losing your initial investment.",
    image: "assets/three.jpg",
    ctaPrimary: "View Products",
    ctaSecondary: "Contact Us",
  },
  {
    eyebrow: "Legacy Planning",
    titleLines: ["Your legacy"],
    titleAccent: "starts today.",
    body: "Flexible options to build wealth and pass it on to those you love.",
    image: "assets/four.jpg",
    ctaPrimary: "Get Started",
    ctaSecondary: "Learn More",
  },
];

export default function Hero({ onPrimary, onSecondary }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (idx) => setCurrentSlide(idx);
  const next = () => setCurrentSlide(s => (s + 1) % heroSlides.length);
  const prev = () => setCurrentSlide(s => (s - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setCurrentSlide(s => (s + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const handlePrev = () => { prev(); setPaused(true); setTimeout(() => setPaused(false), 6000); };
  const handleNext = () => { next(); setPaused(true); setTimeout(() => setPaused(false), 6000); };
  const handleDot  = (i) => { goTo(i); setPaused(true); setTimeout(() => setPaused(false), 6000); };

  const slide = heroSlides[currentSlide];

  return (
    <div className="ov-hero-wrapper" style={heroStyles.wrapper}>
      <section
        className="ov-hero-section"
        style={heroStyles.section}
        aria-roledescription="carousel"
        aria-label="Featured announcements"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div aria-live="polite" aria-atomic="true" style={{
          position: "absolute", width: 1, height: 1, padding: 0,
          margin: -1, overflow: "hidden", clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap", border: 0,
        }}>
          {`Slide ${currentSlide + 1} of ${heroSlides.length}: ${slide.titleLines.join(' ')} ${slide.titleAccent}`}
        </div>

        <div className="ov-hero-card" style={heroStyles.card}>
          {heroSlides.map((s, idx) => (
            <div key={idx} className="ov-hero-bg" style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${s.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: idx === currentSlide ? 1 : 0,
              transition: "opacity 0.6s ease-in-out",
              zIndex: 0,
            }} />
          ))}
          <div style={heroStyles.scrim} className="ov-hero-scrim" />
          <div style={heroStyles.noise} />

          <div className="ov-hero-content" style={heroStyles.content}>
            <SlideEyebrow>{slide.eyebrow}</SlideEyebrow>
            <h1 className="ov-hero-title" style={heroStyles.h1}>
              {slide.titleLines.map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
              <em style={{ fontStyle: 'italic', color: '#70BABF' }}>{slide.titleAccent}</em>
            </h1>
            <p style={heroStyles.body}>{slide.body}</p>
            <div style={heroStyles.ctas}>
              <PillMint hero onClick={onPrimary}>{slide.ctaPrimary}</PillMint>
              <PillGhost light hero onClick={onSecondary}>{slide.ctaSecondary}</PillGhost>
            </div>
          </div>

          <HeroShaper />
        </div>

        <div style={heroStyles.dotsContainer}>
          <button onClick={handlePrev} style={heroStyles.arrowBtn} aria-label="Previous slide">
            <svg width="12.6" height="12.6" viewBox="0 0 16 16" fill="none">
              <path d="M10 4L6 8L10 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDot(idx)}
              className="ov-hero-dot"
              style={idx === currentSlide ? { ...heroStyles.dot, ...heroStyles.dotActive, position: "relative" } : { ...heroStyles.dot, position: "relative" }}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === currentSlide ? "slide" : undefined}
            />
          ))}
          <button onClick={handleNext} style={heroStyles.arrowBtn} aria-label="Next slide">
            <svg width="12.6" height="12.6" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
