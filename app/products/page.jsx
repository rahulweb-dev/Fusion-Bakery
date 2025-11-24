import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-10">
        Corporate Gift, Corporate Gifting Ideas
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
