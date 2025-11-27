"use client";
import Image from "next/image";

export default function ComboMealBoxes() {
  const combos = [
    { img: "/images/combo_lunch.jpg", title: "Corporate Lunch Box", price: "₹199", desc: "Perfect for office meals" },
    { img: "/images/combo_lunch.jpg", title: "Family Feast Combo", price: "₹499", desc: "Serves 3–4 people" },
    { img: "/images/combo_lunch.jpg", title: "Party Pack", price: "₹999", desc: "Ideal for celebrations" },
  ];

  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-3">
          Combo & Meal Boxes
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Freshly cooked meal combos for every hunger 🍱
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {combos.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-[0_3px_16px_rgba(0,0,0,0.08)] 
              hover:shadow-[0_5px_20px_rgba(0,0,0,0.15)] hover:scale-[1.02] transition-all duration-500 group"
            >

              {/* Image Area */}
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={c.img}
                  alt={c.title}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Price Badge */}
                <span className="absolute top-3 right-3 bg-yellow-500 text-black text-sm font-bold px-3 py-1 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                  {c.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-2xl">{c.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{c.desc}</p>

                {/* Order Button */}
                <button
                  className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2.5 rounded-full
                  transition-all duration-300 hover:shadow-[0_3px_10px_rgba(255,193,7,0.5)] hover:scale-[1.02] active:scale-95"
                >
                  Order Now 🍽️
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
