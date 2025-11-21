import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative w-full h-screen md:h-[110vh] flex items-center overflow-hidden'>
      {/* Background Image */}
      <Image
        src='/images/footer.webp'
        alt='Hero Background'
        fill
        priority
        className='object-cover scale-105'
      />

      {/* Overlay Gradient */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent'></div>

      {/* Content */}
      <div className='relative z-10 container mx-auto px-6 md:px-12 lg:px-20'>
        <div className='max-w-xl text-white space-y-6'>
          <h1 className='text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl'>
            Live Where Luxury <br /> Meets The Horizon
          </h1>

          <p className='text-lg md:text-xl text-white/90 leading-relaxed'>
            Experience the beauty of handcrafted moments, exquisite taste, and
            unforgettable celebrations.
          </p>

          <button
            className='
              mt-4 bg-white text-black px-10 py-3 rounded-full 
              font-semibold shadow-xl hover:bg-gray-200 transition 
              text-sm tracking-wide
            '
          >
            DISCOVER
          </button>
        </div>
      </div>

      {/* Bottom Smooth Wave */}
      <div className='absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none'></div>
    </section>
  );
}
