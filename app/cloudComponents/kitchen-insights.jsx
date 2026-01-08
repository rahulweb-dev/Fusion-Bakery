"use client";
import Image from "next/image";

export default function KitchenInsights() {
  return (
    <section className="bg-[#FAF4EA] text-black pb-24">

      {/* HERO — Classic Cinematic Banner */}
      <div className="relative w-full h-[360px] md:h-[520px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          poster="/images/combo_lunch.jpg"
          className="object-cover w-full h-full scale-105"
        >
          <source src="https://www.boxupgifting.com/cdn/shop/files/quinn_wmi7f9j2thoue96gtooi4yzt.mp4#t=0.1" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-light tracking-wide leading-tight">
            Inside Our Kitchen
            <span className="block text-sm md:text-lg font-normal mt-2 opacity-90">
              Crafting Fresh Food with Care & Passion
            </span>
          </h1>
        </div>
      </div>

      {/* ICON STRIP — Clean & Classic */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {[
          { img: "/icons/kitchen.png", text: "100% Hygienic Kitchen" },
          { img: "/icons/coffee.png", text: "Fresh Ingredients Daily" },
          { img: "/icons/chef.png", text: "Experienced Chefs" },
          { img: "/icons/family.png", text: "Safe & Sealed Packaging" },
        ].map((d, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 bg-[#DCE1D2] border border-[#E8E3D6] rounded-2xl py-6 shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
          >
            <Image src={d.img} alt={d.text} width={80} height={80} />
            <p className="font-semibold text-lg text-[#5C5345]">{d.text}</p>
          </div>
        ))}
      </div>

      {/* SECTION 1 — Cooking Process */}
      <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        <video
          autoPlay
          loop
          muted
          className="rounded-3xl shadow-[0_25px_45px_rgba(0,0,0,0.18)] w-full h-[340px] md:h-[420px] object-cover"
        >
          <source src="https://www.boxupgifting.com/cdn/shop/files/quinn_wmi7f9j2thoue96gtooi4yzt.mp4#t=0.1" type="video/mp4" />
        </video>

        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#7A4A1F]">
            Fresh • Clean • Professional
          </h2>

          <p className="text-gray-600 leading-relaxed mt-4">
            Every dish in our cloud kitchen is prepared under strict hygiene
            standards using sanitized equipment, fresh produce, premium oils,
            and packed in tamper-proof packaging — ensuring safety from
            kitchen to doorstep.
          </p>

          <button className="mt-7 bg-gradient-to-r from-[#D8C39A] to-[#BFA26E] hover:from-[#C9AF7C] hover:to-[#A78B5B]
          text-black font-semibold px-7 py-3 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.18)]
          transition-all hover:-translate-y-[2px] active:scale-95">
            Order Now 🍱
          </button>
        </div>
      </div>

      {/* SECTION 2 — Packaging */}
      <div className="max-w-6xl mx-auto px-6 mt-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#7A4A1F]">
            Your Food Stays Safe — From Kitchen to Table
          </h2>

          <p className="text-gray-600 leading-relaxed mt-4">
            We use insulated, leak-proof and eco-friendly packaging that keeps
            meals fresh and temperature-controlled until they reach you —
            preserving taste, aroma, and nutrition.
          </p>
        </div>

        <video
          autoPlay
          loop
          muted
          className="rounded-3xl shadow-[0_25px_45px_rgba(0,0,0,0.18)] w-full h-[340px] md:h-[420px] object-cover"
        >
          <source src="https://www.boxupgifting.com/cdn/shop/files/quinn_wmi7f9j2thoue96gtooi4yzt.mp4#t=0.1" type="video/mp4" />
        </video>
      </div>

    </section>
  );
}
