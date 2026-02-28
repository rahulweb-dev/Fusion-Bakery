"use client"
import { useState, useMemo } from "react"
import Image from "next/image"

const products = [
  {
    id: 1,
    title: "The Grand Indulgence Box",
    description: "Luxury pastries & truffles.",
    price: 2499,
    image: "/images/product-1.jpeg",
    tag: "All Occasions",
    bestSeller: true,
  },
  {
    id: 2,
    title: "Golden Truffle Collection",
    description: "Belgian chocolate indulgence.",
    price: 1899,
    image: "/images/product-2.jpeg",
    tag: "Thank You",
    bestSeller: true,
  },
  {
    id: 3,
    title: "Dark Chocolate Brownie Box",
    description: "Rich fudgy brownies.",
    price: 999,
    image: "/images/product-3.jpeg",
    tag: "Thank You",
    bestSeller: true,
  },
  {
    id: 4,
    title: "Parisian Macaron Tower",
    description: "French macarons tower.",
    price: 2199,
    image: "/images/product-4.jpeg",
    tag: "Celebrations",
    bestSeller: true,
  },
  {
    id: 5,
    title: "Artisan Cookie Ensemble",
    description: "Hand-iced artisan cookies.",
    price: 1499,
    image: "/images/product-5.jpeg",
    tag: "Celebrations",
  },
  {
    id: 6,
    title: "Frosted Cupcake Delight",
    description: "Premium buttercream cupcakes.",
    price: 1299,
    image: "/images/product-6.jpeg",
    tag: "Birthdays",
  },
  {
    id: 7,
    title: "Classic Pastry Selection",
    description: "Timeless pastry elegance.",
    price: 1699,
    image: "/images/product-7.jpeg",
    tag: "Festive",
  },
  {
    id: 8,
    title: "Petite Fours Gift Box",
    description: "Miniature cake sophistication.",
    price: 1799,
    image: "/images/product-8.jpeg",
    tag: "All Occasions",
  },
]

const categories = [
  "All",
  "All Occasions",
  "Birthdays",
  "Festive",
  "Celebrations",
  "Thank You",
]

export default function GiftBoxesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortOption, setSortOption] = useState("default")

  const filteredProducts = useMemo(() => {
    let updated = [...products]

    // Category filter
    if (selectedCategory !== "All") {
      updated = updated.filter(
        (item) => item.tag === selectedCategory
      )
    }

    // Sorting
    if (sortOption === "low-high") {
      updated.sort((a, b) => a.price - b.price)
    } else if (sortOption === "high-low") {
      updated.sort((a, b) => b.price - a.price)
    }

    return updated
  }, [selectedCategory, sortOption])

  return (
    <div className="bg-[#f6f3ef] min-h-screen px-6 md:px-12 py-10">

      {/* ===== Filters ===== */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <p className="text-sm text-gray-600">
          Showing {filteredProducts.length} gift boxes
        </p>

        <div className="flex gap-4">
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-lg px-4 py-2 text-sm bg-white"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          {/* Price Sort */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border rounded-lg px-4 py-2 text-sm bg-white"
          >
            <option value="default">Sort By</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* ===== Product Grid ===== */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <div className="relative h-60">
              {product.bestSeller && (
                <span className="absolute top-3 left-3 bg-[#e6a87c] text-white text-xs px-3 py-1 rounded-full z-2">
                  Best Seller
                </span>
              )}

              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover "
              />
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">
                {product.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {product.description}
              </p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-[#7c4a2f]">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-500">
                  {product.tag}
                </span>
              </div>

              <div className="flex gap-3">
                {/* <button className="flex-1 bg-[#7c4a2f] text-white py-2 rounded-lg text-sm hover:bg-[#633a25] transition">
                  Add to Cart
                </button> */}

                <button className="flex-1 border py-2 rounded-lg text-sm hover:bg-gray-100 transition">
                 Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}