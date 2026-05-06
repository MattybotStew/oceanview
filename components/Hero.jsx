// Hero.jsx — Rounded card hero with slider, dots underneath, auto-scroll

function HeroShaper({ fill = "#ffffff" }) {
  return (
    <div style={{
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
  section: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  card: {
    position: "relative",
    borderRadius: 30,
    overflow: "hidden",
    width: "100%",
    maxWidth: 1400,
    zIndex: 1,
    backgroundColor: "#233D7C",
  },
  bg: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 0.5s ease-in-out",
    zIndex: 0,
    borderRadius: 30,
  },
  scrim: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%)",
    zIndex: 1,
    borderRadius: 30,
  },
  noise: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    backgroundRepeat: "repeat",
    backgroundSize: "200px",
    opacity: 0.08,
    pointerEvents: "none",
    zIndex: 1,
    borderRadius: 30,
  },
  content: {
    position: "relative",
    zIndex: 2,
    padding: "clamp(24px, 5vw, 60px) clamp(20px, 4vw, 48px)",
    maxWidth: "700px",
  },
  h1: {
    fontFamily: "var(--ov-ff-display)",
    fontWeight: 800,
    fontSize: "clamp(30px, 4.5vw, 63px)",
    lineHeight: 1.0,
    color: "#F2FCFF",
    margin: 0,
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  subtitle: {
    fontFamily: "var(--ov-ff-sans)",
    fontWeight: 600,
    fontSize: "clamp(14px, 1.5vw, 20px)",
    lineHeight: 1.4,
    color: "#F2FCFF",
    margin: 0,
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  ctas: {
    display: "flex",
    gap: 21,
  },
  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    marginTop: 24,
    marginBottom: 0,
    zIndex: 200,
    position: "relative",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "#233D7C",
    cursor: "pointer",
    transition: "all 0.2s ease",
    border: "none",
    padding: 0,
    opacity: 0.5,
  },
  dotActive: {
    backgroundColor: "#233D7C",
    width: 24,
    borderRadius: 12,
    opacity: 1,
  },
  arrows: {
    position: "absolute",
    left: 32,
    right: 32,
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    justifyContent: "space-between",
    zIndex: 3,
    pointerEvents: "none",
  },
  arrow: {
    background: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(8px)",
    border: "none",
    borderRadius: 40,
    width: 44,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: 28,
    fontWeight: 600,
    color: "#FFFFFF",
    pointerEvents: "auto",
    transition: "background 0.2s ease",
  },
};

const heroSlides = [
  {
    title: "Plan today for the tomorrow you deserve",
    subtitle: "Guaranteed interest, flexible options, and growth potential — with principal protection at every step.",
    image: "assets/hero-beach-couple.jpg",
    ctaPrimary: "Get Started",
    ctaSecondary: "View Products",
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
      dot.style.backgroundColor = "#233D7C";
      dot.style.width = "24px";
      dot.style.borderRadius = "12px";
      dot.style.opacity = "1";
    } else {
      dot.style.backgroundColor = "#233D7C";
      dot.style.width = "10px";
      dot.style.borderRadius = "50%";
      dot.style.opacity = "0.5";
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
  const prevBtn = container.querySelector('.ov-hero-prev');
  const nextBtn = container.querySelector('.ov-hero-next');
  const dots = document.querySelectorAll('.ov-hero-dot');
  const heroSection = container.closest('section');

  startAutoScroll(container);

  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoScroll);
    heroSection.addEventListener('mouseleave', () => startAutoScroll(container));
  }

  if (prevBtn) {
    prevBtn.onclick = () => { prevSlide(container); resetAutoScroll(container); };
  }
  if (nextBtn) {
    nextBtn.onclick = () => { nextSlide(container); resetAutoScroll(container); };
  }

  dots.forEach((dot, idx) => {
    dot.onclick = () => {
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
    borderRadius: 30,
  };

  return (
    <section style={heroStyles.section}>
      <div style={heroStyles.card} className="ov-hero-card">
        <div style={bgStyle} className="ov-hero-bg" />
        <div style={heroStyles.scrim} />
        <div style={heroStyles.noise} />
        <div className="ov-hero-content" style={heroStyles.content}>
          <h1 style={heroStyles.h1} className="ov-hero-title">
            {currentContent.title}
          </h1>
          <p style={heroStyles.subtitle} className="ov-hero-subtitle">
            {currentContent.subtitle}
          </p>
          <div style={heroStyles.ctas}>
            <PillMint hero onClick={onPrimary} className="ov-hero-primary">
              {currentContent.ctaPrimary}
            </PillMint>
            <PillNavy hero onClick={onSecondary} className="ov-hero-secondary">
              {currentContent.ctaSecondary}
            </PillNavy>
          </div>
        </div>

        <div style={heroStyles.arrows}>
          <button style={heroStyles.arrow} className="ov-hero-prev" aria-label="Previous slide">
            ‹
          </button>
          <button style={heroStyles.arrow} className="ov-hero-next" aria-label="Next slide">
            ›
          </button>
        </div>

        <HeroShaper />
      </div>

      <div style={heroStyles.dotsContainer}>
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            style={idx === currentSlide ? { ...heroStyles.dot, ...heroStyles.dotActive } : heroStyles.dot}
            className="ov-hero-dot"
            data-index={idx}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

if (typeof window !== 'undefined') {
  const originalRender = Hero;
  window.Hero = function(props) {
    const element = originalRender(props);
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.ov-hero-card');
        if (container && !container.hasAttribute('data-slider-initialized')) {
          initHero(container);
          container.setAttribute('data-slider-initialized', 'true');
        }
      });
    } else {
      setTimeout(() => {
        const container = document.querySelector('.ov-hero-card');
        if (container && !container.hasAttribute('data-slider-initialized')) {
          initHero(container);
          container.setAttribute('data-slider-initialized', 'true');
        }
      }, 100);
    }
    return element;
  };
  Object.assign(window, { Hero: window.Hero });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Hero;
}
