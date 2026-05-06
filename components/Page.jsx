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
  const goto = (r) => {
    const next = (r === "FAQ" || r === "Client Resources") ? "FAQ" : "Home";
    setRoute(next);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return (
    <React.Fragment>
      <TickerBar />
      <Header active={route} onNav={goto} />
      {route === "FAQ" ? <FAQPage /> : <HomePage goto={goto} />}
      <Footer />
    </React.Fragment>
  );
}

Object.assign(window, { HomePage, Page });