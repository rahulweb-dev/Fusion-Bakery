'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function CrazyDeals() {
  const deals = [
    {
      name: 'Egg Bhurji Gravy',
      restaurant: 'Dayal Da Dhaba',
      rating: 4.3,
      time: '34 min',
      price: 30,
      oldPrice: 150,
      off: '80% OFF',
      img: '/food/egg.png',
    },
    {
      name: 'Palak Paneer',
      restaurant: 'Dayal Da Dhaba',
      rating: 4.5,
      time: '34 min',
      price: 30,
      oldPrice: 150,
      off: '80% OFF',
      img: '/food/palak.png',
    },
    {
      name: 'South Indian Filter Coffee',
      restaurant: 'Zimero Ice Creams',
      rating: 4.1,
      time: '43 min',
      price: 52,
      oldPrice: 172,
      off: '70% OFF',
      img: '/food/coffee.png',
    },
    {
      name: 'Egg Curry',
      restaurant: 'Delhi Darbar Dhaba',
      rating: 4.0,
      time: '37 min',
      price: 50,
      oldPrice: 150,
      off: '67% OFF',
      img: '/food/eggcurry.png',
    },
    {
      name: 'Cookie Fudge Ice Cream',
      restaurant: 'Zimero Ice Creams',
      rating: 4.6,
      time: '43 min',
      price: 52,
      oldPrice: 172,
      off: '70% OFF',
      img: '/food/cookie.png',
    },
    {
      name: 'Spiced Toast',
      restaurant: 'Cha Bar',
      rating: 4.2,
      time: '49 min',
      price: 70,
      oldPrice: 190,
      off: '72% OFF',
      img: '/food/sandwich.png',
    },
  ];

  return (
    <section className='px-4 md:px-10 py-12'>
      {/* ⭐ HEADING + CTA */}
      <div className='flex justify-between items-center mb-8'>
        <div>
          <h2 className='text-[25px] sm:text-[32px] md:text-[36px] font-extrabold text-gray-900'>
            Crazy Deals For You
          </h2>
          <p className='text-sm text-pink-600 font-medium flex items-center gap-1'>
            🔥 Don’t Miss These Limited Time Offers
          </p>
        </div>

        <button className='text-pink-700 hover:text-white hover:bg-pink-600 border border-pink-300 px-4 py-2 rounded-full text-sm font-semibold shadow-sm transition-all active:scale-[0.96]'>
          View All ➜
        </button>
      </div>

      {/* 🎉 SWIPER */}
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{ delay: 2500 }}
        spaceBetween={15}
        slidesPerView={2}
        breakpoints={{
          350: { slidesPerView: 2 },
          480: { slidesPerView: 2.5 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className='pb-4'
      >
        {deals.map((item, i) => (
          <SwiperSlide key={i}>
            <div className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100'>
              {/* 📌 IMAGE SECTION */}
              <div className='relative w-full h-[140px] md:h-40 overflow-hidden rounded-t-2xl group'>
                <Image
                  src={item.img}
                  fill
                  alt={item.name}
                  className='object-cover group-hover:scale-110 transition duration-300'
                />

                {/* ✨ Badges */}
                <span className='absolute bottom-2 left-2 text-[10px] sm:text-xs backdrop-blur-md bg-white/70 text-pink-700 font-bold py-[3px] px-2 rounded-full shadow'>
                  🛵 Delivery
                </span>

                <span className='absolute top-2 right-2 text-[10px] sm:text-xs bg-green-600 text-white font-bold py-[3px] px-2 rounded-full shadow'>
                  {item.off}
                </span>
              </div>

              {/* 📌 DETAILS */}
              <div className='p-3'>
                <p className='font-bold text-gray-900 text-[14px] sm:text-[16px] line-clamp-1'>
                  {item.name}
                </p>
                <p className='text-[12px] sm:text-[13px] text-gray-500'>
                  {item.restaurant}
                </p>

                <div className='flex justify-between items-center text-[12px] sm:text-[13px] mt-1 text-gray-600'>
                  <span className='flex items-center gap-1 font-semibold text-yellow-600'>
                    ⭐ {item.rating}
                  </span>
                  <span className='text-gray-500'>⏱ {item.time}</span>
                </div>

                <p className='mt-2 font-bold text-pink-700 text-[14px] sm:text-[16px]'>
                  ₹{item.price}
                  <span className='line-through text-gray-400 ml-2 text-[12px] sm:text-[13px]'>
                    ₹{item.oldPrice}
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
