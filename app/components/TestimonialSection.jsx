'use client';

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Customer",
      img: "/images/user.webp",
      review:
        "The cakes and cookies from Fusionn Bakers are delightful! Perfect taste and presentation.",
      rating: 5,
    },
    {
      name: "Riya Patel",
      role: "Event Planner",
      img: "/images/user.webp",
      review:
        "Beautiful hampers and brilliant service. Their premium chocolates are a must-have!",
      rating: 5,
    },
    {
      name: "Karthik Rao",
      role: "Corporate Client",
      img: "/images/user.webp",
      review:
        "Professional packaging, premium taste, and incredible gifting experience.",
      rating: 5,
    },
    {
      name: "Sana Khan",
      role: "Home Baker",
      img: "/images/user.webp",
      review:
        "Loved the quality and presentation, perfect for gifting and events.",
      rating: 5,
    },
  ];

  return (
    <section className="py-14 bg-[#FFF8F2] text-[#6B3A24] relative overflow-hidden">
      {/* Light Glows */}
      <div className="absolute top-0 left-12 w-24 h-24 bg-[#ffebd0] blur-[60px] rounded-full"></div>
      <div className="absolute bottom-0 right-16 w-28 h-28 bg-[#ffe3c2] blur-[75px] rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#80451F]">
          What Customers Say
        </h2>
        <p className="text-gray-600 mt-2 text-sm italic">
          Loved by chocolate & gifting lovers
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3300 }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            700: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white border border-[#F5DCC4] shadow-sm rounded-[20px] p-6 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <p className="text-[15px] leading-relaxed italic text-[#5B2E1C]">
                  “{t.review}”
                </p>

                <div className="mt-4 flex justify-center">
                  {Array(t.rating).fill("").map((_, idx) => (
                    <span key={idx} className="text-[#C47643] text-lg">★</span>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-[#F1C9A8] shadow-sm">
                    <Image src={t.img} alt={t.name} width={64} height={64} className="object-cover" />
                  </div>
                  <h3 className="mt-3 text-[15px] font-semibold text-[#80451F]">{t.name}</h3>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
