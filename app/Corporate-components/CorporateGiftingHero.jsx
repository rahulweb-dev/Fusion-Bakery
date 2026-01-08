'use client';

import Link from 'next/link';

export default function CorporateGiftingHero() {
  return (
    <section
      className="relative w-full min-h-[520px] flex items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://corporategiftstkc.com/cdn/shop/files/Contact-us_1.jpg?v=1746859389&width=1800')",
      }}
    >
      {/* Optional soft overlay for text readability */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Decorative Circles */}
      <div className="absolute left-[-120px] top-[-80px] w-[420px] h-[420px] rounded-full bg-white/25" />
      <div className="absolute right-[10%] bottom-[-120px] w-[360px] h-[360px] rounded-full bg-white/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-medium text-gray-800 mb-4">
            Let’s Create the Perfect Gift Together
          </p>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-[#1C1C1C] leading-tight max-w-xl">
            Talk To Our Corporate Gifting Expert
          </h1>

          <p className="mt-5 text-gray-700 text-base md:text-lg max-w-xl">
            Our expert will tailor solutions to your needs and handle
            everything from start to finish.
          </p>

          <Link
            href="/corporate-gifts"
            className="inline-flex mt-8 px-8 py-3 rounded-full
            bg-[#F2E4CC] text-[#1C1C1C] font-semibold
            hover:bg-[#ead8bb] transition"
          >
            Book A Call
          </Link>
        </div>

      </div>
    </section>
  );
}
