'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function CuisinesBrowse() {
  const cuisines = [
    {
      name: 'Biryani',
      img: 'https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png',
    },
    { name: 'Pizza', img: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png' },
    { name: 'Healthy Dishes', img: 'https://lh3.googleusercontent.com/UtztOIwf2WwKA5niteUVe8qP57GlzRihQ5SFEpW54Atf4xMUjbp7vf5Mm7lYzntr0fYWXnXFsjm4N8IRzAbqTJdqaUWfxnWhePVe4mGZ=s300-rw' },
    { name: 'Chaap', img: 'https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png' },
    { name: 'Coffee', img: 'https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png' },
    { name: 'Dosa', img: 'https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png' },
    { name: 'Icecream', img: 'https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png' },
    { name: 'Juice', img: 'https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png' },
    { name: 'Lassi', img: 'https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png' },
    { name: 'Butter Chicken', img: 'https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png' },
    { name: 'Burger', img: 'https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png' },
    { name: 'Cake', img: 'https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png' },
    { name: 'Chaat', img: 'https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png' },
    { name: 'Dal', img: 'https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png' },
    { name: 'Fries', img: '/food/fries.png' },
    { name: 'Idli', img: '/food/idli.png' },
    { name: 'Khichdi', img: '/food/khichdi.png' },
    { name: 'Momos', img: '/food/momos.png' },
  ];

  return (
    <section className='py-14 mt-30 max-w-7xl mx-auto select-none relative'>
      <h2 className='text-center text-3xl md:text-4xl font-bold text-gray-900 mb-1'>
        Browse by Cuisines
      </h2>
      <p className='text-center text-gray-500 mb-10 text-sm md:text-[15px]'>
        Explore a variety of delicious dishes 🍽️
      </p>

      <div className='relative px-3 md:px-12'>
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
          {cuisines.map((food, i) => (
            <SwiperSlide key={i} className='text-center'>
              <div className='bg-white rounded-full mx-auto w-[90px] h-[90px] md:w-[115px] md:h-[115px] p-2 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                <Image
                  src={food.img}
                  width={120}
                  height={120}
                  alt={food.name}
                  className='w-full h-full object-contain'
                />
              </div>
              <p className='mt-2 text-[13px] md:text-[15px] font-semibold text-gray-800'>
                {food.name}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Gradient Buttons */}
        <button className='prevBtn absolute z-10 top-1/2 -translate-y-1/2 left-0 w-10 h-10 flex justify-center items-center bg-gradient-to-r from-white to-pink-50 rounded-full shadow-lg hover:scale-110 transition text-pink-600 text-lg border border-pink-200'>
          ❮
        </button>
        <button className='nextBtn z-10 absolute top-1/2 -translate-y-1/2 right-0 w-10 h-10 flex justify-center items-center bg-gradient-to-l from-white to-pink-50 rounded-full shadow-lg hover:scale-110 transition text-pink-600 text-lg border border-pink-200'>
          ❯
        </button>
      </div>
    </section>
  );
}
