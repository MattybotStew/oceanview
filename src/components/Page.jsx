// Page.jsx — Top-level shell: hash router + global header/CTA/footer
import { useState, useEffect } from 'react'
import TickerBar from './TickerBar.jsx'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Highlights from './Highlights.jsx'
import ProductsCard from './ProductsCard.jsx'
import AboutBlock from './AboutBlock.jsx'
import StatsStrip from './StatsStrip.jsx'
import CTAPanel from './CTAPanel.jsx'
import Footer from './Footer.jsx'
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

const STUB_ROUTES = {
  // Top-level nav
  "individuals":      { title: "For Individuals",                 eyebrow: "Personal Planning"           },
  // About sub-pages
  "our-story":        { title: "Our Story",                       eyebrow: "Since 1987"                  },
  // "board" and "newsroom" handled as real pages below
  // Products — FIA (fia-harbourview, harbourview-myga, sky-harbourview, caplock have real pages)
  "sp500":            { title: "S&P 500 Crediting Strategy",      eyebrow: "Fixed Indexed Annuity"       },
  "nasdaq":           { title: "Nasdaq-100 Crediting Strategy",   eyebrow: "Fixed Indexed Annuity"       },
  "russell":          { title: "Russell 2000 Crediting Strategy", eyebrow: "Fixed Indexed Annuity"       },
  "fixed-interest":   { title: "Fixed Interest Strategy",         eyebrow: "Fixed Indexed Annuity"       },
  // Client Resources sub-pages
  "glossary":         { title: "Glossary",                        eyebrow: "Client Resources"            },
  "rates":            { title: "Rates",                           eyebrow: "Client Resources"            },
  "compare":          { title: "How Oceanview MYGAs Compare",     eyebrow: "Client Resources"            },
  // Insights sub-pages — retirement-risk and life-events are real pages
  // Professionals sub-pages
  "agent-portal":     { title: "Agent Portal",                    eyebrow: "For Professionals"            },
  "state-approval":   { title: "State Approval Chart",            eyebrow: "For Professionals"            },
  "product-brochures":{ title: "Product Brochures",               eyebrow: "For Professionals"            },
  // agent-faqs and sales-tools are real pages — handled in switch below
};

const ROUTE_TO_NAV = {
  "about": "About", "products": "Products",
  "client-resources": "Client Resources", "insights": "Insights",
  "faq": "FAQ", "blog": "Blog", "leadership": "About", "board": "About", "newsroom": "About",
  "white-papers": "Insights", "case-studies": "Client Resources",
  "retirement-risk": "Insights", "life-events": "Insights",
  "downloads": "Client Resources",
  "professionals": "Professionals", "sales-tools": "Professionals",
  "agent-faqs": "Professionals", "lpl-landing": "Professionals", "cetera-landing": "Professionals",
};

const PAGE_ROUTES = new Set([
  "", "home", "products", "about", "client-resources", "insights", "faq",
  "blog", "leadership", "board", "newsroom", "white-papers", "case-studies",
  "retirement-risk", "life-events", "downloads",
  "professionals", "sales-tools", "agent-faqs",
  "contact", "lpl-landing", "cetera-landing",
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
      <CTAPanel />
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
      case "about":             return <CompanyPage />;
      case "client-resources":  return <ClientResourcesPage />;
      case "insights":          return <InsightsPage />;
      case "professionals":     return <ProfessionalsPage />;
      case "sales-tools":       return <SalesToolsPage />;
      case "agent-faqs":        return <AgentFAQsPage />;
      case "contact":           return <ContactPage />;
      case "blog":               return <BlogPage />;
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
    </>
  );
}
