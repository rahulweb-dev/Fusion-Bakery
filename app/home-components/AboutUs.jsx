'use client';

import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="relative bg-[#E5D6C3] overflow-hidden py-32">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* LEFT – CIRCLE IMAGE */}
        <div className="relative hidden lg:flex justify-start items-center">
          <div className="w-[520px] h-[520px] rounded-full bg-[#D1B79B]
            overflow-hidden flex items-center justify-center">

            <Image
              src="/images/01.webp" // replace with your image
              alt="About Fusionn"
              width={700}
              height={700}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="relative z-10 max-w-xl ml-auto">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#5A2E0F] text-sm font-semibold tracking-widest uppercase">
              About Us
            </span>
            <span className="w-16 h-[2px] bg-[#C89B63] block" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-light text-[#3A2416] leading-snug mb-10">
            Crafted with care.
            <br />
            <span className="font-medium">Delivered with purpose.</span>
          </h2>

          {/* POINTS */}
          <ul className="space-y-6">

            <li className="flex items-start gap-4">
              <span className="w-2.5 h-2.5 mt-2 rounded-full bg-[#C89B63]" />
              <p className="text-[#5E4A3B] text-base leading-relaxed">
                Thoughtfully curated offerings across fresh meals, premium corporate
                gifting, and handcrafted chocolates — all under one refined brand.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="w-2.5 h-2.5 mt-2 rounded-full bg-[#C89B63]" />
              <p className="text-[#5E4A3B] text-base leading-relaxed">
                Built on quality, consistency, and attention to detail to ensure every
                experience feels intentional and elevated.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="w-2.5 h-2.5 mt-2 rounded-full bg-[#C89B63]" />
              <p className="text-[#5E4A3B] text-base leading-relaxed">
                Designed to create meaningful moments — whether it’s everyday
                nourishment, thoughtful gifting, or celebratory indulgence.
              </p>
            </li>

          </ul>
        </div>


      </div>
    </section>
  );
}
