'use client';

import Image from 'next/image';

const highlights = [
  {
    title: 'Cloud Kitchen',
    desc: 'Freshly prepared meals crafted with quality ingredients and delivered with consistency.',
    img: '/images/highlight-kitchen.jpg',
  },
  {
    title: 'Corporate Gifting',
    desc: 'Premium, thoughtfully curated gift solutions designed for impactful brand experiences.',
    img: '/images/highlight-gifts.jpg',
  },
  {
    title: 'Handcrafted Chocolates',
    desc: 'Artisanal chocolates made in small batches with rich flavors and elegant finishes.',
    img: '/images/highlight-chocolates.jpg',
  },
];

export default function FeaturedHighlights() {
  return (
    <section className="bg-[#FBF8F2] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-[64px] md:text-[96px] font-light
          text-[#B5B5B5] leading-none mb-24">
          Featured Highlights
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="border border-[#B79C85] bg-transparent"
            >
              {/* IMAGE */}
              <div className="h-[280px] w-full relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-[#3A2416] text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-[#6B5A4A] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="flex justify-center mt-24">
          <button
            className="px-16 py-4 rounded-xl
            border border-[#6E6E6E]
            text-[#1A1A1A] font-medium
            hover:bg-[#1A1A1A] hover:text-white
            transition-all"
          >
            View all
          </button>
        </div>

      </div>
    </section>
  );
}
