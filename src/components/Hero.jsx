// Hero.jsx — Rounded card hero with slider, dots underneath, auto-scroll
import { useState, useEffect, useRef } from 'react'
import { PillMint, PillNavy } from './Buttons.jsx'

function HeroShaper({ fill = "#ffffff" }) {
  return (
    <div className="ov-hero-shaper" style={{
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "93%",
      lineHeight: 0,
      zIndex: 10,
      pointerEvents: "none",
    }}>
      <svg viewBox="0 0 400 60" preserveAspectRatio="none" width="100%" height="60" style={{ display: "block" }}>
        <path fill={fill} d="M0 60 Q200 0 400 60 Z"/>
      </svg>
    </div>
  );
}

const heroStyles = {
  wrapper: {
    maxWidth: "var(--ov-container, 1600px)",
    margin: "0 auto",
    padding: "0 20px",
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
    height: "clamp(500px, 60vh, 800px)",
    zIndex: 1,
    borderRadius: 32,
  },
  scrim: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(85deg, rgba(0,0,0,0.80) 2.63%, rgba(102,102,102,0.00) 65.98%)",
    zIndex: 1,
  },
  noise: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url("assets/Noise.png")`,
    backgroundRepeat: "repeat",
    backgroundSize: "200px",
    opacity: 0.8,
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
    marginBottom: 16,
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  subtitle: {
    fontFamily: "var(--ov-ff-sans)",
    fontWeight: 600,
    fontSize: "clamp(14px, 4vw, 20px)",
    lineHeight: 1.4,
    color: "#F2FCFF",
    margin: 0,
    marginBottom: 32,
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
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
    width: 30.6,
    height: 30.6,
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
    title: "Plan today for the tomorrow you deserve",
    subtitle: "Smart annuity solutions built for long-term financial confidence and flexibility.",
    image: "assets/hero-couple.jpg",
    ctaPrimary: "View Products",
    ctaSecondary: "Contact Us",
  },
  {
    title: "Secure your retirement with confidence",
    subtitle: "Fixed and fixed-indexed annuities designed for long-term financial stability.",
    image: "assets/two.jpg",
    ctaPrimary: "Explore Annuities",
    ctaSecondary: "Learn More",
  },
  {
    title: "Growth potential, principal protected",
    subtitle: "Participate in market gains without the risk of losing your initial investment.",
    image: "assets/three.jpg",
    ctaPrimary: "View Products",
    ctaSecondary: "Contact Us",
  },
  {
    title: "Your legacy starts today",
    subtitle: "Flexible options to build wealth and pass it on to those you love.",
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

  const bgStyle = {
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${slide.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 0.5s ease-in-out",
    zIndex: 0,
  };

  return (
    <div className="ov-hero-wrapper" style={heroStyles.wrapper}>
      <section
        className="ov-hero-section"
        style={heroStyles.section}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="ov-hero-card" style={heroStyles.card}>
          <div className="ov-hero-bg" style={bgStyle} />
          <div style={heroStyles.scrim} className="ov-hero-scrim" />
          <div style={heroStyles.noise} />
          <div className="ov-hero-content" style={heroStyles.content}>
            <h1 className="ov-hero-title" style={heroStyles.h1}>
              {slide.title}
            </h1>
            <p className="ov-hero-subtitle" style={heroStyles.subtitle}>
              {slide.subtitle}
            </p>
            <div style={heroStyles.ctas}>
              <PillMint hero onClick={onPrimary} style={{ background: "#fff", color: "var(--ov-navy-900)" }}>
                {slide.ctaPrimary}
              </PillMint>
              <PillNavy hero onClick={onSecondary}>
                {slide.ctaSecondary}
              </PillNavy>
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
              style={idx === currentSlide ? { ...heroStyles.dot, ...heroStyles.dotActive } : heroStyles.dot}
              aria-label={`Go to slide ${idx + 1}`}
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
