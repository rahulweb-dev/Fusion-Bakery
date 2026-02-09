"use client";
import Image from "next/image";

export default function CloudKitchenHero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/chocolates/cloud-kitchen.webp" // 👉 your background image
        alt="Cloud kitchen food background"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl  px-30  text-white">
        <p className="text-lg opacity-90 tracking-wide">
          Introducing
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mt-2">
          Fusion Cloud Kitchen
        </h1>

        <p className="mt-5 text-base md:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
          Delicious meals prepared daily using quality ingredients,
          freshly cooked and delivered hot to your doorstep.
        </p>

        <button className="mt-10 px-10 py-3 rounded-full bg-[#E1F2B3] text-black font-semibold hover:bg-[#F1FFC9] transition">
          Order Now
        </button>
      </div>

    </section>
  );
}
