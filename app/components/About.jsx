import Image from 'next/image';
import React from 'react';

export default function AboutSection() {
  return (
    <section className='relative w-full overflow-hidden bg-[#fdf7f4]'>
      {/* Soft background blobs */}
      <div className='absolute top-10 left-0 w-60 h-60 bg-[#B55328]/10 blur-3xl rounded-full'></div>
      <div className='absolute bottom-10 right-20 w-72 h-72 bg-[#B55328]/10 blur-3xl rounded-full'></div>

      <div className='flex flex-col md:flex-row items-stretch relative z-10'>
        {/* LEFT SIDE CONTENT - Glassy Card */}
        <div
          className='w-full md:w-1/2 bg-white/40 backdrop-blur-xl 
                        px-8 md:px-16 py-16 
                        flex items-center shadow-lg relative'
        >
          {/* Curved wave shape divider */}
          <div className='hidden md:block absolute top-0 right-[-50px] h-full w-[100px] bg-[#fdf7f4]'>
            <svg
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              className='h-full w-full'
            >
              <path d='M100 0 C40 50 40 50 100 100 Z' fill='#fdf7f4' />
            </svg>
          </div>

          <div className='max-w-xl relative z-20'>
            {/* Heading */}
            <h2 className='text-3xl md:text-4xl font-extrabold text-[#5b3b34] tracking-wide'>
              ABOUT <span className='text-[#B55328]'>Fusionn</span> BAKERS
            </h2>

            {/* Subtitle */}
            <p className='text-xl italic mt-2 font-serif text-[#6b4d44] opacity-90'>
              Discovery Story Since 2025
            </p>

            {/* Body text */}
            <p className='mt-8 leading-relaxed text-[16px] text-[#5b4640] opacity-90'>
              Fusionn Bakers established in 2019. We specialize in homemade &
              handcrafted personalized chocolate gifting according to the
              customers needs. We manufacture artisan chocolates, cookies,
              gifting hampers & celebration cakes.
            </p>

            <p className='mt-6 leading-relaxed text-[16px] text-[#5b4640] opacity-90'>
              We offer various flavors, shapes, and combinations for all special
              occasions, made with pure ingredients and crafted with love &
              perfection.
            </p>

            {/* Signature */}
            <p className='mt-10 font-semibold text-sm tracking-wider text-[#B55328]'>
              JONT NICOLIN — CEO
            </p>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className='w-full md:w-1/2 relative h-[350px] md:h-auto'>
          <Image
            src='/images/about-baker.jpg'
            alt='Baker Image'
            fill
            className='object-cover'
          />

          {/* Dark overlay */}
          <div className='absolute inset-0 bg-black/40 mix-blend-multiply'></div>
        </div>
      </div>
    </section>
  );
}
