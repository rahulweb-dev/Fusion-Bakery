"use client";

import Image from "next/image";

export default function GiftCategoryCard({ image, label, title, subtext }) {
  return (
    <div className="relative group overflow-hidden rounded-3xl shadow-lg cursor-pointer transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/5 to-white/0"></div>

      {/* Text Content */}
      <div className="absolute top-6 left-6 text-white w-[80%]">
        {/* Label */}
        <span className="px-4 py-1 rounded-full bg-white/90 text-pink-700 font-semibold text-[11px] backdrop-blur-md shadow-md group-hover:bg-pink-600 group-hover:text-white transition">
          {label}
        </span>

        {/* Title */}
        <h3 className="mt-4 text-[22px] md:text-[26px] font-extrabold leading-tight drop-shadow-xl">
          {title}
        </h3>

        {/* CTA */}
        <p className="mt-3 text-sm font-semibold underline underline-offset-4 decoration-white/70 group-hover:decoration-pink-500 decoration-2 transition">
          {subtext}
        </p>
      </div>
    </div>
  );
}
