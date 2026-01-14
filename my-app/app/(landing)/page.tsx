import HeroSection from "./components/home/hero";
import Categories from "./components/home/categories";
import Products from "./components/home/products";
export default function Home() {
  return (
    <main>
    <HeroSection />
    <Categories />
    <Products />
    </main>
  );
}