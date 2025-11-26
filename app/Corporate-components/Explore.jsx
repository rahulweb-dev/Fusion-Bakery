"use client";

import Item from "./Item";

export default function ExploreProducts() {
  const products = [
    { image: "/products/cake1.webp", name: "Belgium Chocolate Cake", new_price: 499, old_price: 699 },
    { image: "/products/cake2.webp", name: "Cookie Crunch Box", new_price: 399, old_price: 550 },
    { image: "/products/cake3.webp", name: "Almond Choco Bar", new_price: 299, old_price: 399 },
    { image: "/products/cake4.webp", name: "Luxury Gift Hamper", new_price: 999, old_price: 1399 },
 
  ];

  return (
    <section className="py-16 bg-[#FBF4EC] font-[Inter]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#532E1C] tracking-wide">
            Explore Our Products
          </h2>
          <p className="mt-2 text-gray-600 text-[15px] max-w-md mx-auto leading-relaxed">
            Discover premium desserts & artisanal chocolate hampers crafted with love.
          </p>
          <div className="mt-6 h-[3px] w-24 mx-auto bg-[#C89A72] rounded-full"></div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between bg-[#FFFFFC] border border-[#F0E3D6] rounded-lg px-5 py-3 shadow-sm mb-10">
          <span className="text-[14px] font-medium text-[#5A3D2E]">
            Showing {products.length} Products
          </span>
          
          <select className="px-3 py-[6px] border border-[#D6C4B4] text-gray-700 text-[14px] rounded-md bg-[#FFFEFC]">
            <option>Recommended</option>
            <option>Price: Low → High</option>
            <option>Price: High → Low</option>
            <option>Newest First</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {products.map((p, i) => (
            <Item
              key={i}
              image={p.image}
              name={p.name}
              new_price={p.new_price}
              old_price={p.old_price}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
