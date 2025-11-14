import Image from "next/image";
import React from "react";

export default function FreshServices() {
  const services = [
    {
      title: "Chocolates",
      desc: "Premium handcrafted chocolates with rich texture and delightful taste.",
      img: "/images/choco.jpg",
    },
    {
      title: "Cookies",
      desc: "Freshly baked cookies, crispy outside, soft and chewy inside.",
      img: "/images/cookies.jpg",
    },
    {
      title: "Cakes",
      desc: "Signature cakes designed for celebrations, crafted with perfection.",
      img: "/images/cakes.jpg",
    },
    {
      title: "Gifting",
      desc: "Beautifully curated gift hampers for every special moment.",
      img: "/images/gift.jpg",
    },
  ];

  return (
    <section className="py-24 bg-[#FFF7F2] relative overflow-hidden">

      {/* Background Gradient Blobs */}
      <div className="absolute -top-20 -left-10 w-80 h-80 bg-[#B55328]/20 rounded-full blur-[100px]"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#B55328]/10 rounded-full blur-[120px]"></div>

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
        <Image
          src="/images/cookie-icon.png"
          alt="Cookie Icon"
          width={70}
          height={70}
          className="mx-auto mb-4"
        />

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-wide drop-shadow">
          Our Fresh Services
        </h2>
        <p className="text-gray-500 mt-2 italic text-lg">
          Freshly made. Beautifully crafted. Lovingly delivered.
        </p>
      </div>

      {/* Card Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {services.map((s, index) => (
          <div
            key={index}
            className="
              p-8 rounded-3xl bg-white/60 backdrop-blur-xl
              border border-white/30 shadow-[0_8px_25px_rgba(0,0,0,0.07)]
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
              transition-all duration-500 relative group
              hover:-translate-y-3 hover:bg-white/80
            "
          >
            {/* Outer glow ring */}
            <div className="
              absolute inset-0 rounded-3xl
              bg-gradient-to-br from-[#B55328]/20 to-transparent
              opacity-0 group-hover:opacity-100 transition duration-500
              blur-2xl
            "></div>

            {/* Animated Circle Image */}
            <div className="relative w-44 h-44 mx-auto mb-6">
              {/* Glow Ring */}
              <div className="
                absolute inset-0 rounded-full border-[5px]
                border-transparent bg-gradient-to-tr from-[#B55328] to-transparent
                opacity-40 blur-md group-hover:opacity-70 group-hover:blur-lg
                transition-all duration-500
              ">
              </div>

              {/* Image */}
              <div className="
                w-full h-full rounded-full overflow-hidden shadow-xl relative z-10
                border-[6px] border-white/60 bg-white
              ">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-all duration-[700ms]"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#B55328] transition text-center">
              {s.title}
            </h3>

            {/* Elegant Divider */}
            <div className="w-20 mx-auto mt-3 mb-3 h-[3px] rounded-full bg-[#B55328]/40"></div>

            {/* Description */}
            <p className="text-gray-700 text-[15px] leading-relaxed px-2 text-center">
              {s.desc}
            </p>

            {/* Shine effect */}
            <div className="
              pointer-events-none absolute inset-0 rounded-3xl opacity-0 
              group-hover:opacity-30 transition duration-500
              bg-gradient-to-br from-white/40 to-transparent
            "></div>
          </div>
        ))}
      </div>
    </section>
  );
}
