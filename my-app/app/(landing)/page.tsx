import HeroSection from "./components/home/hero";
import Categories from "./components/home/categories";
import Products from "./components/home/products";
import { gelAllCategories } from "../services/category.service";
import { getAllProducts } from "../services/product.service";
export default async function Home() {
  const [categories, products] = await Promise.all([
    gelAllCategories(),
    getAllProducts(),
  ]);
  return (
    <main>
    <HeroSection />
    <Categories categories={categories} />
    <Products products={products} />
    </main>
  );
}

