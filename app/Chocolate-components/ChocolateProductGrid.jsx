"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const products = [
  { name: "Chocolate Truffle", price: "9.99", img: "https://i.pinimg.com/1200x/20/dc/9e/20dc9ea67639a55fc598f7dbd47fdf55.jpg" },
  { name: "Delicious Cupcake", price: "7.99", img: "https://i.pinimg.com/736x/95/83/c6/9583c6db452c76e1f3a15386def671c6.jpg" },
  { name: "Cheese Classic Burger", price: "20.99", img: "https://i.pinimg.com/736x/a7/e5/03/a7e503932d1f9ce2091641832d7fab42.jpg" },
  { name: "Chocolate Mud Cake", price: "18.99", img: "https://i.pinimg.com/736x/17/31/06/bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp.jpg" },
  { name: "Special Edition Bonbons", price: "12.49", img: "https://i.pinimg.com/736x/17/31/06/bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp.jpg" },
];

export default function ChocolateProductSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full bg-white py-16 md:py-20 relative">

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-[34px] md:text-[44px] font-light">
          EXPLORE OUR CHOCOLATE TREATS
        </h2>

        <div className="mt-12 relative">

          {/* Custom Buttons */}
          <button ref={prevRef} className="swiper-prev-btn">◀</button>
          <button ref={nextRef} className="swiper-next-btn">▶</button>

          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            onInit={(swiper) => {
              // Attach navigation AFTER refs are available
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="pb-14"
          >
            {products.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="text-center bg-white rounded-3xl border shadow-xl overflow-hidden">

                  {/* Image container (fixed height) */}
                  <div className="relative w-full h-[240px] bg-[#F6F6F6]">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover rounded-t-3xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="px-4 py-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {p.name}
                    </h3>

                    <p className="text-gray-600 text-sm mt-1">
                      ${p.price}
                    </p>
                  </div>
                </div>
              </SwiperSlide>

            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-prev-btn,
        .swiper-next-btn {
          position: absolute;
          top: 40%;
          z-index: 30;
          width: 42px;
          height: 42px;
          border-radius: 999px;
          background: #fff;
          border: 1px solid #d6c7a3;
          color: #8b5b3e;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-prev-btn { left: -20px; }
        .swiper-next-btn { right: -20px; }
      `}</style>
    </section>
  );
}
