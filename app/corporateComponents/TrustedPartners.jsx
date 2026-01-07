'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const logos = [
  '/clients_logos/avasa.png',
  '/clients_logos/basis_reimaged.png',
  '/clients_logos/cl_jewelry.png',
  '/clients_logos/custom_aise.png',
  '/clients_logos/Keus.png',
  '/clients_logos/radha_toyota.png',
  '/clients_logos/ram_k_group.png',
  '/clients_logos/red.png',
  '/clients_logos/sagar_cement.png',
  '/clients_logos/sanskriti_pre_school.png',
  '/clients_logos/SKYDE_SOLTIONS-removebg-preview-min.png',
  '/clients_logos/the_shri_ram_aca.png',
  '/clients_logos/the_shriram_university_school.png',
  '/clients_logos/visual_hash_technology.png',
  '/clients_logos/Vr.png',
];

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
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
          <span className="inline-block border-l-4 border-black mr-3 h-8 align-middle" />
          Trusted Partners
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Trusted by Industry Leaders, Chosen for Excellence
        </p>
      </div>

      {/* Logo Slider */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          loop
          speed={5000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          allowTouchMove={false}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="opacity-90 hover:opacity-100 transition"
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex justify-center items-center px-6 py-4">
                <div className="w-full bg-white border rounded-2xl shadow-sm hover:shadow-md transition p-4 flex justify-center">
                  <Image
                    src={logo}
                    alt="partner-logo"
                    width={180}
                    height={90}
                    className="object-contain  hover:grayscale-0 transition"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Stats */}
      {/* <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition text-center">
          <h3 className="text-5xl font-extrabold text-black">
            {useCountUp(500)}+
          </h3>
          <p className="text-gray-700 font-semibold mt-3">Happy Clients</p>
        </div>

        <div className="p-6 rounded-2xl border bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition text-center">
          <h3 className="text-5xl font-extrabold text-black">
            {useCountUp(80000)}+
          </h3>
          <p className="text-gray-700 font-semibold mt-3">Gifts Delivered</p>
        </div>

        <div className="p-6 rounded-2xl border bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition text-center">
          <h3 className="text-5xl font-extrabold text-black">
            {useCountUp(1500)}+
          </h3>
          <p className="text-gray-700 font-semibold mt-3">
            Premium Quality Products
          </p>
        </div>
      </div> */}
    </section>
  );
}
