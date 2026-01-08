'use client';

import Link from 'next/link';

export default function HomeHero() {
  return (
    <section
      className="relative w-full h-[92vh] min-h-[640px]
      bg-[url('/dummy-images/hero.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r
        from-[#E6D6C2]/95 via-[#E6D6C2]/80 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full
        flex flex-col justify-center px-6 md:px-10">

        <p className="text-[#5A3A1E] text-lg mb-3 tracking-wide">
          One brand
        </p>

        <h1 className="text-[#5A3A1E]
          text-4xl md:text-6xl font-semibold leading-tight max-w-xl">
          Many ways to celebrate
        </h1>

        <p className="mt-5 text-[#6B4A3A] text-base md:text-lg max-w-xl">
          From freshly cooked meals to premium corporate gifts
          and handcrafted chocolates — curated with care.
        </p>

        {/* CTA */}
        <Link
          href="/cloud-kitchen"
          className="mt-10 inline-flex items-center justify-center
          w-[220px] h-[58px] rounded-xl
          bg-[#2E2E2E] text-white font-medium
          hover:bg-black transition-all duration-300"
        >
          Explore
        </Link>
      </div>
    </section>
  );
}
