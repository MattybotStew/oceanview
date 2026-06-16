// Page.jsx — Top-level shell: hash router + global header/CTA/footer
import { useState, useEffect } from 'react'
import TickerBar from './TickerBar.jsx'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Highlights from './Highlights.jsx'
import ProductsCard from './ProductsCard.jsx'
import AboutBlock from './AboutBlock.jsx'
import StatsStrip from './StatsStrip.jsx'
import CTABanner from './CTABanner.jsx'
import Footer from './Footer.jsx'
import BackToTop from './BackToTop.jsx'
import FAQPage from './FAQPage.jsx'
import StubPage from './StubPage.jsx'
import LeadershipPage from './LeadershipPage.jsx'
import ProductsPage from './ProductsPage.jsx'
import CompanyPage from './CompanyPage.jsx'
import ClientResourcesPage from './ClientResourcesPage.jsx'
import InsightsPage from './InsightsPage.jsx'
import ProfessionalsPage from './ProfessionalsPage.jsx'
import SalesToolsPage from './SalesToolsPage.jsx'
import AgentFAQsPage from './AgentFAQsPage.jsx'
import ContactPage from './ContactPage.jsx'
import LPLLandingPage from './LPLLandingPage.jsx'
import CeteraLandingPage from './CeteraLandingPage.jsx'
import BlogPage from './BlogPage.jsx'
import BlogArticlePage from './BlogArticlePage.jsx'
import HarbourviewFIAPage from './HarbourviewFIAPage.jsx'
import HarbourviewMYGAPage from './HarbourviewMYGAPage.jsx'
import SkyHarbourviewMYGAPage from './SkyHarbourviewMYGAPage.jsx'
import HorizonMYGAPage from './HorizonMYGAPage.jsx'
import CurrentRateFIAPage from './CurrentRateFIAPage.jsx'
import CapLockFIAPage from './CapLockFIAPage.jsx'
import TopsiderFIAPage from './TopsiderFIAPage.jsx'
import BoardPage from './BoardPage.jsx'
import NewsroomPage from './NewsroomPage.jsx'
import WhitePapersPage from './WhitePapersPage.jsx'
import CaseStudiesPage from './CaseStudiesPage.jsx'
import RetirementRiskPage from './RetirementRiskPage.jsx'
import LifeEventsPage from './LifeEventsPage.jsx'
import DownloadsPage from './DownloadsPage.jsx'
import OurStoryPage from './OurStoryPage.jsx'
import IndividualsPage from './IndividualsPage.jsx'
import StateApprovalPage from './StateApprovalPage.jsx'
import DisclaimersPage from './DisclaimersPage.jsx'
import PrivacyPage from './PrivacyPage.jsx'
import TermsPage from './TermsPage.jsx'
import AccessibilityPage from './AccessibilityPage.jsx'
import AgentPortalPage from './AgentPortalPage.jsx'
import DesignPage from './DesignPage.jsx'

const STUB_ROUTES = {
  // Top-level nav
  // About sub-pages
  // "board" and "newsroom" handled as real pages below
  // Insights sub-pages — retirement-risk and life-events are real pages
  // Professionals sub-pages
  // agent-faqs and sales-tools are real pages — handled in switch below
};

const ROUTE_TO_NAV = {
  "about": "About", "products": "Products",
  "client-resources": "Client Resources", "insights": "Insights",
  "faq": "FAQ", "blog": "Blog", "blog-annuity-timing": "Blog", "leadership": "About", "board": "About", "newsroom": "About",
  "white-papers": "Insights", "case-studies": "Client Resources",
  "retirement-risk": "Insights", "life-events": "Insights",
  "downloads": "Client Resources", "our-story": "About", "individuals": "",
  "state-approval": "Professionals",
  "disclaimers": "", "privacy": "", "terms": "", "accessibility": "", "design": "",
  "professionals": "Professionals", "sales-tools": "Professionals",
  "agent-faqs": "Professionals", "lpl-landing": "Professionals", "cetera-landing": "Professionals",
};

const PAGE_ROUTES = new Set([
  "", "home", "products", "about", "client-resources", "insights", "faq",
  "blog", "blog-annuity-timing", "leadership", "board", "newsroom", "white-papers", "case-studies",
  "retirement-risk", "life-events", "downloads", "our-story", "individuals", "state-approval",
  "professionals", "sales-tools", "agent-faqs",
  "contact", "lpl-landing", "cetera-landing",
  "disclaimers", "privacy", "terms", "accessibility", "agent-portal", "design",
  // product pages — canonical routes
  "harbourview-myga", "horizon-myga", "sky-harbourview-myga",
  "current-rate-fia", "harbourview-fia",
  "caplock", "topsider",
  // legacy aliases kept for any existing links
  "harbourview", "sky-harbourview", "fia-harbourview",
  ...Object.keys(STUB_ROUTES),
]);

function HomePage({ goto }) {
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

export default function Page() {
  const getRoute = () => ((window.location.hash.replace("#", "").split("?")[0]) || "home").toLowerCase();

  const [route, setRoute] = useState(getRoute);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onHash = () => {
      const newRoute = getRoute();
      if (!PAGE_ROUTES.has(newRoute)) return; // in-page anchor — let browser scroll natively
      setRoute(newRoute);
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dynamic page title + meta description
  useEffect(() => {
    const titles = {
      "": "Oceanview Life and Annuity",
      "home": "Oceanview Life and Annuity",
      "products": "Products — Oceanview",
      "about": "About — Oceanview",
      "client-resources": "Client Resources — Oceanview",
      "insights": "Insights — Oceanview",
      "faq": "FAQ — Oceanview",
      "blog": "Blog — Oceanview",
      "blog-annuity-timing": "When Is the Best Time to Consider Buying an Annuity? — Oceanview",
      "leadership": "Leadership — Oceanview",
      "board": "Board of Directors — Oceanview",
      "newsroom": "Newsroom — Oceanview",
      "white-papers": "White Papers — Oceanview",
      "case-studies": "Case Studies — Oceanview",
      "retirement-risk": "Retirement Risk — Oceanview",
      "life-events": "Life Events — Oceanview",
      "downloads": "Downloads — Oceanview",
      "our-story": "Our Story — Oceanview",
      "individuals": "Individuals — Oceanview",
      "professionals": "Professionals — Oceanview",
      "contact": "Contact — Oceanview",
      "disclaimers": "Disclaimers — Oceanview",
      "privacy": "Privacy Notice — Oceanview",
      "terms": "Terms of Use — Oceanview",
      "accessibility": "Accessibility — Oceanview",
      "agent-portal":  "Agent Portal — Oceanview",
      "design": "Design System — Oceanview",
    };
    const descriptions = {
      "": "Oceanview Life and Annuity offers fixed and fixed-indexed annuities designed to protect and grow your retirement savings. A-rated by A.M. Best.",
      "home": "Oceanview Life and Annuity offers fixed and fixed-indexed annuities designed to protect and grow your retirement savings. A-rated by A.M. Best.",
      "products": "Explore Oceanview's full lineup of fixed and fixed-indexed annuities — guaranteed growth, principal protection, and flexible income options.",
      "about": "Learn about Oceanview Life and Annuity Company — our mission, history since 1987, A.M. Best A rating, and commitment to retirement security.",
      "client-resources": "Resources for Oceanview policyholders — case studies, downloads, rates, comparisons, glossary, and more.",
      "insights": "Retirement planning insights, research, and educational content from Oceanview Life and Annuity.",
      "faq": "Frequently asked questions about Oceanview annuities, products, account management, and company information.",
      "blog": "Articles and perspectives on retirement planning, annuities, and financial security from Oceanview.",
      "blog-annuity-timing": "A practical look at when it makes sense to consider buying an annuity, from approaching retirement to reassessing income needs.",
      "leadership": "Meet Oceanview's executive leadership team — decades of experience in insurance and financial services.",
      "board": "Oceanview's board of directors brings deep expertise in finance, risk management, and regulatory compliance.",
      "newsroom": "Press releases, media coverage, and company announcements from Oceanview Life and Annuity.",
      "professionals": "Tools, resources, and support for financial professionals and insurance agents working with Oceanview.",
      "contact": "Get in touch with Oceanview Life and Annuity — customer service, agent support, and general inquiries.",
      "individuals": "Retirement solutions for individuals — explore how Oceanview annuities can protect and grow your savings.",
      "accessibility": "Oceanview Life and Annuity is committed to making OceanviewLife.com accessible to everyone, in line with WCAG 2.0 AA standards.",
      "agent-portal": "Secure login for licensed Oceanview agents — manage client accounts, submit new business, and access sales tools.",
      "design": "Oceanview Design System — complete reference for colors, typography, buttons, links, shadows, pills, forms, layout, and component patterns.",
    };
    document.title = titles[route] || "Oceanview Life and Annuity";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = descriptions[route] || "Oceanview Life and Annuity Company — fixed and fixed-indexed annuities for retirement security. A-rated by A.M. Best.";
  }, [route]);

  const goto = (r) => {
    const slug = (r === "Home" || r === "home") ? "" : r.toLowerCase().replace(/\s+/g, "-");
    window.location.hash = slug;
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const renderPage = () => {
    if (STUB_ROUTES[route]) {
      const { title, eyebrow } = STUB_ROUTES[route];
      return <StubPage title={title} eyebrow={eyebrow} />;
    }
    switch (route) {
      case "products":          return <ProductsPage />;
      // product detail pages
      case "harbourview-myga":      return <HarbourviewMYGAPage />;
      case "harbourview":           return <HarbourviewMYGAPage />;       // legacy alias
      case "horizon-myga":          return <HorizonMYGAPage />;
      case "sky-harbourview-myga":  return <SkyHarbourviewMYGAPage />;
      case "sky-harbourview":       return <SkyHarbourviewMYGAPage />;   // legacy alias
      case "current-rate-fia":      return <CurrentRateFIAPage />;
      case "harbourview-fia":       return <HarbourviewFIAPage />;
      case "fia-harbourview":       return <HarbourviewFIAPage />;       // legacy alias
      case "caplock":               return <CapLockFIAPage />;
      case "topsider":              return <TopsiderFIAPage />;
      case "board":              return <BoardPage />;
      case "newsroom":           return <NewsroomPage />;
      case "white-papers":       return <WhitePapersPage />;
      case "case-studies":       return <CaseStudiesPage />;
      case "retirement-risk":    return <RetirementRiskPage />;
      case "life-events":        return <LifeEventsPage />;
      case "downloads":          return <DownloadsPage />;
      case "our-story":          return <OurStoryPage />;
      case "individuals":        return <IndividualsPage />;
      case "state-approval":     return <StateApprovalPage />;
      case "disclaimers":        return <DisclaimersPage />;
      case "privacy":            return <PrivacyPage />;
      case "terms":              return <TermsPage />;
      case "accessibility":      return <AccessibilityPage />;
      case "agent-portal":       return <AgentPortalPage />;
      case "design":             return <DesignPage />;
      case "about":             return <CompanyPage />;
      case "client-resources":  {
        const tabParam = window.location.hash.includes('?tab=') ? window.location.hash.split('?tab=')[1]?.split('&')[0] : null;
        return <ClientResourcesPage tab={tabParam} />;
      }
      case "insights":          return <InsightsPage />;
      case "professionals":     return <ProfessionalsPage />;
      case "sales-tools":       return <SalesToolsPage />;
      case "agent-faqs":        return <AgentFAQsPage />;
      case "contact":           return <ContactPage />;
      case "blog":               return <BlogPage />;
      case "blog-annuity-timing": return <BlogArticlePage />;
      case "lpl-landing":        return <LPLLandingPage />;
      case "cetera-landing":     return <CeteraLandingPage />;
      case "faq":               return <FAQPage />;
      case "leadership":        return <LeadershipPage />;
      default:                  return <HomePage goto={goto} />;
    }
  };

  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{
          overflow: "hidden",
          maxHeight: scrolled ? 0 : 32,
          transition: "max-height 0.25s ease",
        }}>
          <TickerBar />
        </div>
        <Header active={ROUTE_TO_NAV[route] || ""} onNav={goto} />
      </div>
      <div id="main-content" tabIndex={-1} style={{ outline: "none" }}>
        {renderPage()}
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}
