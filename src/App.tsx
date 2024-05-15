import NavBar from "./components/shared/nav-bar";
import Hero from "./components/shared/hero";
import Footer from "./components/shared/footer";
import ProductCard from "./components/shared/product-card";
import Products from "../data/products.json";

function App() {
  return (
    <>
      <NavBar />
      <div className="bg-accent/70">
        <Hero />
      </div>
      <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="bg-accent/70 relative">
        <Footer />
      </div>
    </>
  );
}

export default App;
