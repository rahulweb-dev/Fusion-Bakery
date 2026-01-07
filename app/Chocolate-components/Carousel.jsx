"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const items = [
  { title: "Finest Pralines", img: "https://i.pinimg.com/736x/40/11/37/401137fa923ab683b74660512385f98e.jpg" },
  { title: "100% Chocolate", img: "https://i.pinimg.com/1200x/03/d4/b1/03d4b1563efdbd8325785d856f812bb9.jpg" },
  { title: "Chocolate Cakes", img: "https://i.pinimg.com/736x/50/87/0b/50870b77b0ab6ed969a9a43b2d4ddfbc.jpg" },
  { title: "Truffles Carames", img: "https://i.pinimg.com/1200x/fe/0a/7c/fe0a7c1e8c941d87daa0e814bc8eb05d.jpg" },
  { title: "Chocolate Candies", img: "https://i.pinimg.com/736x/9f/2e/34/9f2e34e8ff56eb5c187e30450c5da71e.jpg" },
];

export default function ChocolateCarousel() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Faded heading */}
        <h2 className="text-[58px] md:text-[88px] font-light text-[#e7dfd6] text-center -mb-6 select-none">
          EXCLUSIVE CHOCOLATE & TREATS
        </h2>

        <div className="mt-10 relative">

          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={32}
            slidesPerView={1.4}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="w-[300px] mx-auto">

                  {/* Fixed-size card */}
                  <div className="w-full h-[380px] bg-gray-100 overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Title row */}
                  <div className="mt-3 flex items-center justify-between">
                    <h3 className="text-[18px] font-light tracking-wide text-gray-800">
                      {item.title}
                    </h3>
                    <span className="text-[#c7a24b] text-lg">→</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Style buttons + dots */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: #ffffff;
          border: 1px solid #d6c7a3;
          color: #8b5b3e;
          font-weight: bold;
          box-shadow: 0 8px 22px rgba(0,0,0,.12);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px;
        }
        .swiper-pagination-bullet {
          border: 1px solid #b9b9b9;
          background: transparent;
          opacity: .6;
        }
        .swiper-pagination-bullet-active {
          background: #000;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
