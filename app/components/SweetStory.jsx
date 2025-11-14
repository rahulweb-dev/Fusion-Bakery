import Image from 'next/image';
import React from 'react';

export default function SweetStory() {
  return (
    <section className='bg-[#FFF6EB] py-20 px-6 lg:px-20'>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14 items-center'>
        {/* LEFT SIDE */}
        <div className='space-y-6'>
          {/* Badge */}
          <div className='inline-block px-6 py-3 bg-white rounded-full border border-[#c9b79b] shadow-sm text-[#5f3b12] font-semibold'>
            Meet Fusion Bakery
          </div>

          {/* Heading */}
          <h2 className='text-5xl lg:text-6xl font-extrabold leading-tight text-[#6A3A1A]'>
            Our <br /> Sweet <br /> Story
          </h2>

          {/* Description */}
          <p className='text-lg leading-relaxed text-gray-700 border-l-4 border-[#FF5E5E] pl-4'>
            At Fusion Bakery, we specialize in creating custom cakes that make
            every celebration truly unforgettable.
          </p>

          {/* Button */}
          <button className='px-8 py-3 bg-[#6A3A1A] text-white rounded-lg hover:bg-[#572f15] transition'>
            About Us
          </button>
        </div>

        {/* CENTER IMAGE BLOCK */}
        <div className='relative flex justify-center'>
          {/* Cake Card */}
          <div className='bg-gradient-to-b from-[#B2743D] to-[#683E1E] rounded-3xl p-4 shadow-xl w-[320px] lg:w-[380px]'>
            <Image
              src='/images/cake.webp' // replace with your cake image
              alt='Fusion Cake'
              width={400}
              height={400}
              className='rounded-2xl'
            />
          </div>

          {/* Stamp Badge */}
          <Image
            src='/images/or.avif'
            alt='Original'
            width={90}
            height={90}
            className='absolute -top-6 -right-6'
          />
        </div>

        {/* RIGHT SIDE TEXT + BOX */}
        <div className='space-y-8'>
          <p className='text-gray-700 text-lg leading-relaxed'>
            From weddings to birthdays, Fusion Bakery crafts personalized cakes
            to make every moment sweeter.
            <br />
            <br />
            Your perfect cake, designed just for you
          </p>

          {/* Feature Box */}
          <div className='p-8 border border-[#b57d57] rounded-[30px] bg-[#FFF6EB]'>
            <div className='flex items-start gap-4'>
              {/* Icon */}
              <Image
                src='/images/Icon.png'
                width={40}
                height={40}
                alt='Gift Icon'
              />

              {/* Text */}
              <p className='text-[#6A3A1A] text-xl leading-relaxed font-semibold'>
                Customize your combo. <br /> Standard pricing applies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
