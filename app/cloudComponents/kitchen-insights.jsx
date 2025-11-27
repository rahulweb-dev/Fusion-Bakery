"use client";
import Image from "next/image";

export default function KitchenInsights() {
  return (
    <section className="bg-[#fff9f2] text-black pb-20">

      {/* Hero Video Section */}
      <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          poster="/images/combo_lunch.jpg"
          className="object-cover w-full h-full"
        >
          <source src="https://www.boxupgifting.com/cdn/shop/files/quinn_wmi7f9j2thoue96gtooi4yzt.mp4#t=0.1" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            Inside Our Kitchen 🧑‍🍳🔥
          </h1>
        </div>
      </div>

      {/* Hygiene & Quality Icons */}
      <div className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { img: "/images/100_Hygienic.jpg", text: "100% Hygienic" },
          { img: "/images/100_Hygienic.jpg", text: "Fresh Daily" },
          { img: "/images/100_Hygienic.jpg", text: "Expert Chefs" },
          { img: "/images/100_Hygienic.jpg", text: "Safe Packaging" },
        ].map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <Image src={d.img} alt={d.text} width={80} height={80} />
            <p className="font-semibold text-lg">{d.text}</p>
          </div>
        ))}
      </div>

      {/* Cooking Process + CTA */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <video
          autoPlay
          loop
          muted
          className="rounded-2xl shadow-xl h-[320px] md:h-[400px] w-full object-cover"
        >
          <source src="https://www.boxupgifting.com/cdn/shop/files/quinn_wmi7f9j2thoue96gtooi4yzt.mp4#t=0.1" type="video/mp4" />
        </video>

        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#7a3f00]">
            Fresh. Clean. Professional.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Every dish cooked in our cloud kitchen follows strict hygiene
            protocols using sanitized tools, fresh vegetables, premium oils,
            and packaged in tamper-proof containers ensuring safety from kitchen to doorstep.
          </p>
          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-all">
            Order Now 🍱
          </button>
        </div>
      </div>

      {/* Packaging Video Section */}
      <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#7a3f00]">
            Your Food Stays Safe
          </h2>
          <p className="text-gray-600 leading-relaxed">
            From hot meals to cold desserts — we use insulated, leak-proof,
            and eco-friendly packaging that maintains temperature and
            freshness till it reaches your table.
          </p>
        </div>

        <video
          autoPlay
          loop
          muted
          className="rounded-2xl shadow-xl h-[320px] md:h-[400px] w-full object-cover"
        >
          <source src="https://www.boxupgifting.com/cdn/shop/files/quinn_wmi7f9j2thoue96gtooi4yzt.mp4#t=0.1" type="video/mp4" />
        </video>
      </div>

    </section>
  );
}
