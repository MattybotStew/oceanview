// Page.jsx — Top-level shell: hash router + global header/CTA/footer
const STUB_ROUTES = {
  // Top-level nav
  "blog":             { title: "Blog",                            eyebrow: "Latest from Oceanview"       },
  "individuals":      { title: "For Individuals",                 eyebrow: "Personal Planning"           },
  "professionals":    { title: "For Professionals",               eyebrow: "Advisor Tools"               },
  // About sub-pages
  "our-story":        { title: "Our Story",                       eyebrow: "Since 1987"                  },
  "board":            { title: "Board of Directors",              eyebrow: "Governance"                  },
  "newsroom":         { title: "Newsroom",                        eyebrow: "Latest Updates"              },
  "careers":          { title: "Careers",                         eyebrow: "Join Us"                     },
  // Products — MYGA
  "harbourview":      { title: "Harbourview MYGA",                eyebrow: "Multi-Year Guaranteed Annuity" },
  "sky-harbourview":  { title: "Sky Harbourview MYGA",            eyebrow: "Multi-Year Guaranteed Annuity" },
  // Products — FIA
  "fia-harbourview":  { title: "Harbourview FIA",                 eyebrow: "Fixed Indexed Annuity"       },
  "sp500":            { title: "S&P 500 Crediting Strategy",      eyebrow: "Fixed Indexed Annuity"       },
  "nasdaq":           { title: "Nasdaq-100 Crediting Strategy",   eyebrow: "Fixed Indexed Annuity"       },
  "russell":          { title: "Russell 2000 Crediting Strategy", eyebrow: "Fixed Indexed Annuity"       },
  "fixed-interest":   { title: "Fixed Interest Strategy",         eyebrow: "Fixed Indexed Annuity"       },
  "caplock":          { title: "Oceanview CapLock",               eyebrow: "Fixed Indexed Annuity"       },
  // Client Resources sub-pages
  "case-studies":     { title: "Case Studies",                    eyebrow: "Client Resources"            },
  "downloads":        { title: "Downloads",                       eyebrow: "Client Resources"            },
  "glossary":         { title: "Glossary",                        eyebrow: "Client Resources"            },
  "rates":            { title: "Rates",                           eyebrow: "Client Resources"            },
  "compare":          { title: "How Oceanview MYGAs Compare",     eyebrow: "Client Resources"            },
  // Insights sub-pages
  "retirement-risk":  { title: "Retirement Risk Series",          eyebrow: "Insights"                    },
  "life-events":      { title: "Life Events Series",              eyebrow: "Insights"                    },
  "white-papers":     { title: "White Papers",                    eyebrow: "Insights"                    },
};

const ROUTE_TO_NAV = {
  "about": "About", "products": "Products",
  "client-resources": "Client Resources", "insights": "Insights",
  "faq": "FAQ", "blog": "Blog", "leadership": "About"
};

function HomePage({ goto }) {
  return (
    <main>
      <Hero onPrimary={() => goto("faq")} onSecondary={() => goto("products")} />
      <Highlights />
      <ProductsCard />
      <AboutBlock />
      <RatingBlock />
    </main>
  );
}

function Page() {
  const getRoute = () => (window.location.hash.replace("#", "") || "home").toLowerCase();

  const [route, setRoute] = React.useState(getRoute);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  React.useEffect(() => {
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
      case "about":             return <CompanyPage />;
      case "client-resources":  return <ClientResourcesPage />;
      case "insights":          return <InsightsPage />;
      case "faq":               return <FAQPage />;
      case "leadership":        return <window.LeadershipPage />;
      default:                  return <HomePage goto={goto} />;
    }
  };

  return (
    <React.Fragment>
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
      {renderPage()}
      <CTAPanel />
      <Footer />
    </React.Fragment>
  );
}

Object.assign(window, { HomePage, Page });