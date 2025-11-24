'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// 👇 Logo Data
const logos = [
  'https://corporategiftstkc.com/cdn/shop/files/Untitled_design_12_48a6ffce-db0c-4f73-8baf-540c7c361389-removebg-preview_1_medium.png?v=1747042770',
  'https://corporategiftstkc.com/cdn/shop/files/Untitled_design_12_48a6ffce-db0c-4f73-8baf-540c7c361389-removebg-preview_1_medium.png?v=1747042770',
  'https://corporategiftstkc.com/cdn/shop/files/Untitled_design_12_48a6ffce-db0c-4f73-8baf-540c7c361389-removebg-preview_1_medium.png?v=1747042770',
  'https://corporategiftstkc.com/cdn/shop/files/Untitled_design_12_48a6ffce-db0c-4f73-8baf-540c7c361389-removebg-preview_1_medium.png?v=1747042770',
  'https://corporategiftstkc.com/cdn/shop/files/Untitled_design_12_48a6ffce-db0c-4f73-8baf-540c7c361389-removebg-preview_1_medium.png?v=1747042770',
  'https://corporategiftstkc.com/cdn/shop/files/Untitled_design_12_48a6ffce-db0c-4f73-8baf-540c7c361389-removebg-preview_1_medium.png?v=1747042770',
  'https://corporategiftstkc.com/cdn/shop/files/Untitled_design_12_48a6ffce-db0c-4f73-8baf-540c7c361389-removebg-preview_1_medium.png?v=1747042770',
];

// 👇 CountUp Hook Inside Same File
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

export default function TrustedPartners() {
  return (
    <section className='py-12 bg-white'>
      {/* Heading & Subtitle */}
      <div className='text-center mb-10'>
        <h2 className='text-4xl font-bold text-gray-900 relative inline-block'>
          <span className='border-l-4 border-black mr-2 inline-block h-8'></span>
          Trusted Partners
        </h2>
        <p className='text-gray-600 mt-3'>
          Trusted by Industry Leaders, Chosen for Excellence.
        </p>
      </div>

      {/* Logo Slider */}
      <div className='max-w-8xl mx-auto'>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          loop={true}
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className='trusted-swiper flex items-center'
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className='flex justify-center items-center'>
                <Image
                  src={logo}
                  alt='partner-logo'
                  width={140}
                  height={60}
                  className='object-contain grayscale hover:grayscale-0 transition'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Stats */}
      <div className='max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 text-center gap-8'>
        <div>
          <h3 className='text-5xl font-bold text-black'>{useCountUp(500)}+</h3>
          <p className='text-gray-700 font-medium mt-3'>Happy Clients</p>
        </div>

        <div>
          <h3 className='text-5xl font-bold text-black'>
            {useCountUp(80000)}+
          </h3>
          <p className='text-gray-700 font-medium mt-3'>Gifts Delivered</p>
        </div>

        <div>
          <h3 className='text-5xl font-bold text-black'>{useCountUp(1500)}+</h3>
          <p className='text-gray-700 font-medium mt-3'>
            Premium Quality Products
          </p>
        </div>
      </div>
    </section>
  );
}
