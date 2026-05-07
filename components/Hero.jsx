// Hero.jsx — Rounded card hero with slider, dots underneath, auto-scroll

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
    marginBottom: 40, // Add bottom margin to prevent overlap
  },
  section: {
    paddingTop: 20,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    overflow: "visible", // Changed from 'hidden' to prevent clipping
  },
  card: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    zIndex: 1,
    borderRadius: 32,
  },
  bg: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 0.5s ease-in-out",
    zIndex: 0,
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
    padding: "60px 40px", // Add padding inside the card
  },
  h1: {
    fontFamily: "var(--ov-ff-display)",
    fontWeight: 800,
    fontSize: "clamp(28px, 8vw, 63px)", // Smaller on mobile
    lineHeight: 1.1,
    color: "#F2FCFF",
    margin: 0,
    marginBottom: 16,
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  subtitle: {
    fontFamily: "var(--ov-ff-sans)",
    fontWeight: 600,
    fontSize: "clamp(14px, 4vw, 20px)", // Smaller on mobile
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

let currentSlide = 0;
let autoScrollInterval = null;

function updateHeroSlide(container, slideIndex) {
  const slide = heroSlides[slideIndex];
  const bgDiv = container.querySelector('.ov-hero-bg');
  const titleEl = container.querySelector('.ov-hero-title');
  const subtitleEl = container.querySelector('.ov-hero-subtitle');
  const primaryBtn = container.querySelector('.ov-hero-primary');
  const secondaryBtn = container.querySelector('.ov-hero-secondary');
  const dots = document.querySelectorAll('.ov-hero-dot');

  if (bgDiv) bgDiv.style.backgroundImage = `url(${slide.image})`;
  if (titleEl) titleEl.textContent = slide.title;
  if (subtitleEl) subtitleEl.textContent = slide.subtitle;
  if (primaryBtn) primaryBtn.textContent = slide.ctaPrimary;
  if (secondaryBtn) secondaryBtn.textContent = slide.ctaSecondary;

  dots.forEach((dot, idx) => {
    if (idx === slideIndex) {
      dot.style.backgroundColor = "#2494C1";
      dot.style.width = "22px";
      dot.style.height = "8px";
      dot.style.borderRadius = "4px";
      dot.style.opacity = "1";
    } else {
      dot.style.backgroundColor = "#CFD5EA";
      dot.style.width = "8px";
      dot.style.height = "8px";
      dot.style.borderRadius = "50%";
      dot.style.opacity = "1";
    }
  });
}

function nextSlide(container) {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  updateHeroSlide(container, currentSlide);
}

function prevSlide(container) {
  currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
  updateHeroSlide(container, currentSlide);
}

function startAutoScroll(container) {
  if (autoScrollInterval) clearInterval(autoScrollInterval);
  autoScrollInterval = setInterval(() => nextSlide(container), 6000);
}

function stopAutoScroll() {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }
}

function resetAutoScroll(container) {
  stopAutoScroll();
  startAutoScroll(container);
}

function initHero(container) {
  if (!container) return;
  
  const heroSection = container.closest('.ov-hero-section') || container.parentElement?.parentElement;
  const prevBtn = document.querySelector('.ov-hero-prev');
  const nextBtn = document.querySelector('.ov-hero-next');
  const dots = document.querySelectorAll('.ov-hero-dot');

  startAutoScroll(container);

  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoScroll);
    heroSection.addEventListener('mouseleave', () => startAutoScroll(container));
  }

  if (prevBtn) {
    prevBtn.onclick = (e) => { 
      e.preventDefault();
      prevSlide(container); 
      resetAutoScroll(container); 
    };
  }
  if (nextBtn) {
    nextBtn.onclick = (e) => { 
      e.preventDefault();
      nextSlide(container); 
      resetAutoScroll(container); 
    };
  }

  dots.forEach((dot, idx) => {
    dot.onclick = (e) => {
      e.preventDefault();
      currentSlide = idx;
      updateHeroSlide(container, currentSlide);
      resetAutoScroll(container);
    };
  });
}

function Hero({ onPrimary, onSecondary }) {
  const currentContent = heroSlides[currentSlide];

  const bgStyle = {
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${currentContent.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 0.5s ease-in-out",
    zIndex: 0,
  };

  return (
    <div className="ov-hero-wrapper" style={heroStyles.wrapper}>
      <section className="ov-hero-section" style={heroStyles.section}>
        <div className="ov-hero-card" style={heroStyles.card}>
          <div className="ov-hero-bg" style={bgStyle} />
          <div style={heroStyles.scrim} className="ov-hero-scrim" />
          <div style={heroStyles.noise} />
          <div className="ov-hero-content" style={heroStyles.content}>
            <h1 className="ov-hero-title" style={heroStyles.h1}>
              {currentContent.title}
            </h1>
            <p className="ov-hero-subtitle" style={heroStyles.subtitle}>
              {currentContent.subtitle}
            </p>
            <div style={heroStyles.ctas}>
              <PillMint hero onClick={onPrimary} className="ov-hero-primary" style={{ background: "#fff", color: "var(--ov-navy-900)" }}>
                {currentContent.ctaPrimary}
              </PillMint>
              <PillNavy hero onClick={onSecondary} className="ov-hero-secondary">
                {currentContent.ctaSecondary}
              </PillNavy>
            </div>
          </div>

          <HeroShaper />
        </div>

        <div style={heroStyles.dotsContainer}>
          <button className="ov-hero-prev" style={heroStyles.arrowBtn} aria-label="Previous slide">
            <svg width="12.6" height="12.6" viewBox="0 0 16 16" fill="none">
              <path d="M10 4L6 8L10 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className="ov-hero-dot"
              style={idx === currentSlide ? { ...heroStyles.dot, ...heroStyles.dotActive } : heroStyles.dot}
              data-index={idx}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
          <button className="ov-hero-next" style={heroStyles.arrowBtn} aria-label="Next slide">
            <svg width="12.6" height="12.6" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

// Add responsive styles to prevent overlap on mobile
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .ov-hero-wrapper {
      padding: 0 20px !important;
      margin-bottom: 40px !important;
    }
    
    /* Mobile adjustments */
    @media (max-width: 768px) {
      .ov-hero-wrapper {
        margin-bottom: 60px !important;
      }
      
      .ov-hero-content {
        padding: 40px 24px !important;
      }
      
      .ov-hero-title {
        font-size: clamp(28px, 7vw, 42px) !important;
        margin-bottom: 12px !important;
      }
      
      .ov-hero-subtitle {
        font-size: clamp(14px, 3.5vw, 16px) !important;
        margin-bottom: 24px !important;
      }
      
      .ov-hero-card {
        min-height: auto !important;
      }
    }
    
    /* Small mobile */
    @media (max-width: 480px) {
      .ov-hero-wrapper {
        margin-bottom: 40px !important;
      }
      
      .ov-hero-content {
        padding: 30px 20px !important;
      }
      
      .ov-hero-title {
        font-size: clamp(24px, 6vw, 32px) !important;
      }
    }
  `;
  document.head.appendChild(style);
}

// Initialize after DOM is ready
if (typeof window !== 'undefined') {
  const OriginalHero = Hero;
  
  window.Hero = function(props) {
    return OriginalHero(props);
  };
  
  const initHeroOnDomReady = () => {
    const heroCard = document.querySelector('.ov-hero-card');
    if (heroCard && !heroCard.hasAttribute('data-slider-initialized')) {
      initHero(heroCard);
      heroCard.setAttribute('data-slider-initialized', 'true');
    }
  };
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroOnDomReady);
  } else {
    setTimeout(initHeroOnDomReady, 100);
  }
  
  Object.assign(window, { Hero: window.Hero });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Hero;
}