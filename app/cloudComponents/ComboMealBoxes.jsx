"use client";
import Image from "next/image";

export default function ComboMealBoxes() {
  const combos = [
    { img: "/images/combo_lunch.jpg", title: "Corporate Lunch Box", price: "₹199", desc: "Perfect for office meals" },
    { img: "/images/combo_lunch.jpg", title: "Family Feast Combo", price: "₹499", desc: "Serves 3–4 people" },
    { img: "/images/combo_lunch.jpg", title: "Party Pack", price: "₹999", desc: "Ideal for celebrations" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F8F4EA] to-[#EFE8D9] text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-[58px] md:text-[82px] font-light text-[#B2AFA8] leading-[0.9]">
            Combo & Meal
            <br />
            <span className="text-[#A7A39C]">Boxes</span>
          </h2>

          <p className="text-gray-600 text-lg mt-4">
            Freshly cooked handcrafted meal combos for every craving 🍱
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {combos.map((c, i) => (
            <div
              key={i}
              className="group rounded-3xl bg-white/90 border border-[#E5E3DD] backdrop-blur-sm shadow-[0_20px_40px_rgba(0,0,0,0.08)]
              hover:shadow-[0_28px_55px_rgba(0,0,0,0.14)] transition-all duration-500"
            >

              {/* Image */}
              <div className="relative h-[260px] overflow-hidden rounded-t-3xl">
                <Image
                  src={c.img}
                  alt={c.title}
                  width={900}
                  height={900}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Price Badge */}
                <span className="absolute top-4 left-4 bg-white/90 border border-gray-200 
                backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                  Starting at {c.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{c.desc}</p>

                {/* Divider */}
                <div className="mt-5 mb-4 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                {/* Button */}
                <button className="w-full py-3 rounded-full font-semibold
                bg-gradient-to-r from-[#B8CD84] to-[#D7E6A6]
                hover:shadow-[0_10px_25px_rgba(184,205,132,0.45)]
                transition-all duration-400 hover:-translate-y-[2px] active:scale-95">
                  Order Now
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
