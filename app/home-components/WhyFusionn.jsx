'use client';

import Image from 'next/image';

export default function WhyFusionn() {
  return (
    <section className="relative bg-[#EADFCF] overflow-hidden py-32">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 items-center">

        
        {/* LEFT CONTENT */}
        <div className="relative z-2 max-w-xl">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#5A2E0F] text-sm font-semibold tracking-widest uppercase">
              Why Fusionn
            </span>
            <span className="w-16 h-[2px] bg-[#C89B63] block" />
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-light text-[#3A2416] leading-snug mb-8">
            One brand.
            <br />
            <span className="font-medium">Many ways to celebrate.</span>
          </h2>

          {/* Paragraphs */}
          <p className="text-[#5E4A3B] text-base leading-relaxed mb-5">
            Fusionn brings together thoughtfully crafted meals, premium corporate
            gifting, and handcrafted chocolates — all under one refined brand
            experience.
          </p>

          <p className="text-[#5E4A3B] text-base leading-relaxed">
            Whether it’s everyday nourishment, meaningful gifting, or indulgent
            celebrations, Fusionn is designed to elevate every moment with quality,
            care, and consistency.
          </p>

        </div>


        {/* RIGHT CIRCLE IMAGE */}
        <div className="relative hidden lg:flex justify-center items-center">
          <div className="w-[460px] h-[460px] rounded-full bg-[#D4BCA2]
            overflow-hidden flex items-center justify-center">

            <Image
              src="/dummy-images/hero.png" // replace with your image
              alt="Why Fusionn"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
