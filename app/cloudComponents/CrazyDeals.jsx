"use client";

import Item from "../Corporate-components/Item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CrazyDeals() {
  const deals = [
    { name: "Egg Bhurji Gravy", rating: 4.3, price: 30, oldPrice: 150, off: "80% OFF", img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png" },
    { name: "Palak Paneer", rating: 4.5, price: 30, oldPrice: 150, off: "80% OFF", img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png" },
    { name: "South Indian Filter Coffee", rating: 4.1, price: 52, oldPrice: 172, off: "70% OFF", img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png" },
    { name: "Egg Curry", rating: 4.0, price: 50, oldPrice: 150, off: "67% OFF", img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png" },
    { name: "Cookie Fudge Ice Cream", rating: 4.6, price: 52, oldPrice: 172, off: "70% OFF", img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png" },
    { name: "Spiced Toast", rating: 4.2, price: 70, oldPrice: 190, off: "72% OFF", img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png" },
  ];

  return (
    <section className="px-3 sm:px-6 md:px-12 py-10 md:py-14 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 md:mb-10 flex-wrap gap-3">
        <div>
          <h2 className="text-[22px] sm:text-[28px] md:text-[35px] font-extrabold text-gray-900 tracking-tight">
            Crazy Deals For You 🔥
          </h2>

          <p className="text-[12px] sm:text-sm text-pink-600 font-medium mt-1 animate-pulse">
            Limited Time Offers · Grab Before It’s Gone
          </p>
        </div>

        <button
          className="text-sm sm:text-[15px] px-5 py-2 rounded-full font-semibold 
          bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 
          shadow-lg shadow-pink-300/40 transition-all active:scale-[0.93]"
        >
          View All Deals ↗
        </button>
      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 2200, pauseOnMouseEnter: true }}
        navigation={true}
        spaceBetween={15}
        slidesPerView={1}
        breakpoints={{
          350: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-6"
      >
        {deals.map((item, i) => (
          <SwiperSlide key={i} className="hover:-translate-y-2 transition-all duration-500">
            <Item
              image={item.img}
              name={item.name}
              new_price={item.price}
              old_price={item.oldPrice}
              discount={item.off}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
