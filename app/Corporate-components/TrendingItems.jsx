"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

export default function TrendingItems() {
  const products = [
    { img: "https://corporategiftstkc.com/cdn/shop/files/client-gifting.jpg?v=1746778449&width=500", name: "1st Birthday Cake Topper Candle", price: 299, old: 399 },
    { img: "https://corporategiftstkc.com/cdn/shop/files/client-gifting.jpg?v=1746778449&width=500", name: "Baby Shark Birthday Candles", price: 229, old: 549 },
    { img: "https://corporategiftstkc.com/cdn/shop/files/client-gifting.jpg?v=1746778449&width=500", name: "Baby Shark Happy Birthday Candle", price: 348, old: 549 },
    { img: "https://corporategiftstkc.com/cdn/shop/files/client-gifting.jpg?v=1746778449&width=500", name: "Champagne Bottle Birthday Candle", price: 229, old: 500 },
    { img: "https://corporategiftstkc.com/cdn/shop/files/client-gifting.jpg?v=1746778449&width=500", name: "Colorflame Birthday Candles", price: 199, old: 299 },
  ];

  return (
    <section className="py-14 bg-[#F4EEE6]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[28px] sm:text-[32px] font-[700] text-[#2F2B28] relative">
            TRENDING GIFTS
            <span className="block w-16 h-[4px] bg-[#C8A26A] mt-1 rounded-full"></span>
          </h2>

          <Link
            href="/products"
            className="text-[#4C2A1A] font-medium flex items-center hover:text-[#8B5E34]"
          >
            Explore Now <span className="ml-[4px] text-[18px]">›</span>
          </Link>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1.4 },
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-6"
          >
            {products.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="bg-[#FAF7F3] rounded-[22px] p-6 border border-[#E6D8C4] shadow-sm hover:shadow-lg transition">
                  <div className="w-full h-[180px] flex justify-center items-center">
                    <Image src={p.img} alt={p.name} width={150} height={150} className="object-contain" />
                  </div>

                  <h3 className="text-[14px] font-semibold mt-3 text-[#4C2A1A] leading-tight">
                    {p.name}
                  </h3>

                  {/* Ratings */}
                  <div className="text-[#C8A26A] text-[17px] mt-1">★★★★★</div>

                  <div className="flex gap-3 items-center mt-1">
                    <span className="text-[#4C2A1A] font-bold text-[16px]">
                      ₹{p.price}
                    </span>
                    <span className="text-gray-400 line-through text-[14px]">
                      ₹{p.old}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Buttons */}
          <button className="prev-btn absolute left-[-10px] top-[40%] z-2 bg-[#C8A26A] text-white p-2 rounded-full shadow-lg hover:bg-[#8B5E34]">
            ‹
          </button>

          <button className="next-btn absolute right-[-10px] top-[40%] z-2 bg-[#C8A26A] text-white p-2 rounded-full shadow-lg hover:bg-[#8B5E34]">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
