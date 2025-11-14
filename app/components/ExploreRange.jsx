import React from "react";
import Image from "next/image";

export default function ExploreRange() {
  const categories = [
    {
      title: "BREAD & ROLLS",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/04/LoavesRolls.jpg",
    },
    {
      title: "SNACKS",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/04/Snacking.jpg",
    },
    {
      title: "LUNCHBOX",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/04/Lunchbox.jpg",
    },
    {
      title: "ARTISAN",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/04/Artisan.jpg",
    },
    {
      title: "HEALTHY SOLUTIONS",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/04/Health.jpg",
    },
    {
      title: "VALUE PACKS",
      image: "https://www.bakersdelight.com.au/wp-content/uploads/2025/04/Health.jpg",
    },
  ];

  return (
    <section className="py-16 bg-[#faf3ed]">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-[#8b1e25] mb-12">
        Explore our range
      </h2>

      {/* Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-0">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="
              rounded-3xl overflow-hidden shadow-md bg-white 
              hover:shadow-xl transition cursor-pointer
            "
          >
            <div className="relative w-full h-56">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="py-6 bg-[#f2e8e4]">
              <h3 className="text-center text-xl font-bold text-[#8b1e25] tracking-wide">
                {cat.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
