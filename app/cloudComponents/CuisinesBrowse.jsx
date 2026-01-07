'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function CuisinesBrowse() {

  const tabs = ['Salads', 'Fries', 'Dessert', 'Healthy Bowl'];
  const [activeTab, setActiveTab] = useState('Salads');

  const cuisines = [
    // 🥗 SALADS
    { name: 'Greens', img: '/Green-salad.gif', category: 'Salads' },
    { name: 'Tofu', img: '/food/tofu.png', category: 'Salads' },
    { name: 'Paneer', img: '/food/paneer.png', category: 'Salads' },
    { name: 'Sprouts', img: '/food/sprouts.png', category: 'Salads' },
    { name: 'Fruit Salad', img: '/food/fruit-salad.png', category: 'Salads' },
    { name: 'Veg Salads', img: '/food/veg-salad.png', category: 'Salads' },
    { name: 'Sweet Corn', img: '/food/sweet-corn.png', category: 'Salads' },

    // 🍟 FRIES
    { name: 'Cheese Balls', img: '/food/cheese-balls.png', category: 'Fries' },
    { name: 'Masala Vada', img: '/food/masala-vada.png', category: 'Fries' },
    { name: 'Veg Fingers', img: '/food/veg-fingers.png', category: 'Fries' },

    // 🍰 DESSERT
    { name: 'Dark Chocolates', img: '/food/dark-chocolate.png', category: 'Dessert' },
    { name: 'Cookies', img: '/food/cookies.png', category: 'Dessert' },
    { name: 'Choco Chips', img: '/food/choco-chips.png', category: 'Dessert' },
    { name: 'Butter Cookies', img: '/food/butter-cookies.png', category: 'Dessert' },

    // 🥣 HEALTHY BOWL
    { name: 'Poha', img: '/food/poha.png', category: 'Healthy Bowl' },
    { name: 'Sandwich', img: '/food/sandwich.png', category: 'Healthy Bowl' },
    { name: 'Chena Masala', img: '/food/chena-masala.png', category: 'Healthy Bowl' },
    { name: 'Rajma Masala', img: '/food/rajma-masala.png', category: 'Healthy Bowl' },
    { name: 'Peanuts Masala', img: '/food/peanut-masala.png', category: 'Healthy Bowl' },
    { name: 'Millets Upma', img: '/food/millets-upma.png', category: 'Healthy Bowl' },
  ];

  const filtered = cuisines.filter(item => item.category === activeTab);

  return (
    <section className="py-14 mt-30 max-w-7xl mx-auto select-none relative">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-1">
        Browse Our Menu
      </h2>
      <p className="text-center text-gray-500 mb-8 text-sm md:text-[15px]">
        Healthy · Fresh · Delicious 🍽️
      </p>

      {/* -------- TABS -------- */}
      <div className="flex justify-center gap-3 md:gap-5 mb-8 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-4 py-2 rounded-full text-sm font-semibold transition-all
              border shadow-sm
              ${activeTab === tab
                ? 'bg-[#4C2A1A] text-white border-[#4C2A1A] shadow-lg scale-[1.03]'
                : 'bg-white text-gray-700 hover:bg-gray-100'}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* -------- SLIDER -------- */}
      <div className="relative px-3 md:px-12">
        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: '.nextBtn', prevEl: '.prevBtn' }}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 3 },
            480: { slidesPerView: 4 },
            640: { slidesPerView: 5 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 7 },
            1280: { slidesPerView: 8 },
          }}
        >
          {filtered.map((food, i) => (
            <SwiperSlide key={i} className="text-center">
              <div className="bg-white rounded-full mx-auto w-[90px] h-[90px] md:w-[110px] md:h-[110px] p-2
                shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Image
                  src={food.img}
                  width={120}
                  height={120}
                  alt={food.name}
                  className="w-full h-full object-contain rounded-3xl"
                />
              </div>
              <p className="mt-2 text-[13px] md:text-[15px] font-semibold text-gray-800">
                {food.name}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Buttons */}
        <button className="prevBtn absolute top-1/2 -translate-y-1/2 left-0
          w-10 h-10 flex justify-center items-center
          bg-white rounded-full border shadow hover:scale-110 transition">
          ❮
        </button>

        <button className="nextBtn absolute top-1/2 -translate-y-1/2 right-0
          w-10 h-10 flex justify-center items-center
          bg-white rounded-full border shadow hover:scale-110 transition">
          ❯
        </button>
      </div>
    </section>
  );
}
