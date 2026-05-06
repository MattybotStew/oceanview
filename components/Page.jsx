// Page.jsx — Top-level router: Home / FAQ
function HomePage({ goto }) {
  return (
    <main>
      <Hero onPrimary={() => goto("FAQ")} onSecondary={() => goto("Products")} />
      <Highlights />
      <AboutBlock />
      <ProductsCard />
      <RatingBlock />
      <CTAPanel />
    </main>
  );
}

function Page() {
  const [route, setRoute] = React.useState("Home");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (r) => {
    const next = (r === "FAQ" || r === "Client Resources") ? "FAQ" : "Home";
    setRoute(next);
    window.scrollTo({ top: 0, behavior: "instant" });
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
        <Header active={route} onNav={goto} />
      </div>
      {route === "FAQ" ? <FAQPage /> : <HomePage goto={goto} />}
      <Footer />
    </React.Fragment>
  );
}

Object.assign(window, { HomePage, Page });