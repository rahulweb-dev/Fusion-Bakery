"use client";
import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    { icon: "/images/fresh.png", title: "Fresh Ingredients", text: "Only premium quality veggies & meats" },
    { icon: "/images/hygiene.png", title: "Hygiene Checked", text: "Certified and sanitized kitchen" },
    { icon: "/images/packaging.png", title: "Leak-Proof Packaging", text: "Eco-friendly & spill-proof" },
    { icon: "/images/247.png", title: "24/7 Availability", text: "Day and night service available" },
  ];

  return (
    <section className="py-16 bg-[#fff7ea]">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-12 text-[#7a3f00]">
          Why Choose Our Cloud Kitchen?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8 text-center">
          {features.map((f, i) => (
            <div key={i} className="bg-white shadow-md hover:shadow-xl transition-all rounded-xl p-4">
              <Image src={f.icon} alt={f.title} width={70} height={70} className="mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-[#7a3f00]">{f.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
