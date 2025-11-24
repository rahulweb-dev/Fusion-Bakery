'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BannerSlider({ slides }) {
  return (
    <div className='w-full max-w-[1400px] mx-auto px-3'>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={false}
        className='rounded-3xl overflow-hidden'
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className='relative h-[380px] md:h-[520px] w-full'>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className='object-cover'
              />

              {/* Text Content */}
              <div className='absolute inset-0 flex flex-col justify-center px-6 md:px-14 lg:px-20'>
                <h2 className='text-3xl md:text-5xl font-extrabold leading-tight text-yellow-300 drop-shadow-lg mb-3 max-w-[600px]'>
                  {slide.title}
                </h2>
                <p className='text-white text-lg md:text-xl mb-6 max-w-[500px]'>
                  {slide.subtitle}
                </p>

                {slide.buttonText && (
                  <a
                    href={slide.buttonLink}
                    className='bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-semibold px-6 py-2 rounded-full shadow-lg hover:opacity-90 w-fit'
                  >
                    {slide.buttonText}
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
