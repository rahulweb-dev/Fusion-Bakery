'use client';

import React from 'react';
import Image from 'next/image';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'Aarav Sharma',
      role: 'Customer',
      img: '/images/user.webp',
      review:
        'The cakes and cookies from Fusionn Bakers are absolutely delightful! Perfect taste, premium quality, and beautiful presentation.',
    },
    {
      name: 'Riya Patel',
      role: 'Event Planner',
      img: '/images/user.webp',
      review:
        'Amazing service! The gifting hampers looked stunning and the chocolates tasted heavenly. Highly recommended!',
    },
    {
      name: 'Karthik Rao',
      role: 'Corporate Client',
      img: '/images/user.webp',
      review:
        'Our corporate gifting order was handled professionally. The packaging and taste were top-notch. Fantastic experience!',
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-b from-[#FFF8F4] to-white'>
      {/* Heading */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide'>
          What Our Customers Say
        </h2>
        <p className='text-gray-500 mt-2 italic'>
          Trusted by thousands of happy customers
        </p>
      </div>

      {/* SWIPER TESTIMONIAL SLIDER */}
      <div className='max-w-4xl mx-auto px-6'>
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          effect='fade'
          loop={true}
          className='pb-10'
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className='bg-white/70 backdrop-blur-xl shadow-xl rounded-3xl p-10 text-center border border-gray-100'>
                {/* Profile Image */}
                <div className='w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md border-4 border-white/40'>
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={96}
                    height={96}
                    className='object-cover'
                  />
                </div>

                {/* Review Text */}
                <p className='mt-6 text-gray-700 text-[17px] leading-relaxed italic'>
                  “{t.review}”
                </p>

                {/* Name */}
                <h3 className='mt-6 text-xl font-bold text-[#B55328]'>
                  {t.name}
                </h3>
                <p className='text-gray-500 text-sm'>{t.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
