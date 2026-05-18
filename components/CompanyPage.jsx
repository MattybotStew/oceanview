// CompanyPage.jsx — About / Company page
function CompanyPage() {
  return (
    <main>
      <PageHero image="assets/lighthouse.jpg" eyebrow="Since 1987" title="A legacy built on trust." />
      <AboutBlock />
      <RatingBlock />
    </main>
  );
}

Object.assign(window, { CompanyPage });
