// ProductsPage.jsx — Products landing page
function ProductsPage() {
  return (
    <main>
      <PageHero image="assets/hero-beach-couple.jpg" eyebrow="Our Products" title="Annuities built for retirement security." />
      <ProductsCard />
    </main>
  );
}

Object.assign(window, { ProductsPage });
