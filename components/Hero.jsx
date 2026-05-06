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
  section: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  card: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    zIndex: 1,
    borderRadius: 30,
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
    background: "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%)",
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
  },
  h1: {
    fontFamily: "var(--ov-ff-display)",
    fontWeight: 800,
    fontSize: "clamp(32px, 5.2vw, 63px)",
    lineHeight: 1.05,
    color: "#F2FCFF",
    margin: 0,
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  subtitle: {
    fontFamily: "var(--ov-ff-sans)",
    fontWeight: 600,
    fontSize: "clamp(16px, 1.9vw, 20px)",
    lineHeight: 1.45,
    color: "#F2FCFF",
    margin: 0,
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  ctas: {
    display: "flex",
    gap: 16,
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
    width: 34,
    height: 34,
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
  const heroSection = container.closest('section');
  const prevBtn = heroSection ? heroSection.querySelector('.ov-hero-prev') : container.querySelector('.ov-hero-prev');
  const nextBtn = heroSection ? heroSection.querySelector('.ov-hero-next') : container.querySelector('.ov-hero-next');
  const dots = document.querySelectorAll('.ov-hero-dot');

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

        <HeroShaper />
      </div>

      <div style={heroStyles.dotsContainer}>
        <button style={heroStyles.arrowBtn} className="ov-hero-prev" aria-label="Previous slide">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 4L6 8L10 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            style={idx === currentSlide ? { ...heroStyles.dot, ...heroStyles.dotActive } : heroStyles.dot}
            className="ov-hero-dot"
            data-index={idx}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
        <button style={heroStyles.arrowBtn} className="ov-hero-next" aria-label="Next slide">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
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
