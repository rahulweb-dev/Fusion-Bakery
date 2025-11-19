import Image from 'next/image';
import React from 'react';

export default function GiftingSection() {
  return (
    <div className='relative w-full overflow-hidden font-[Inter]'>
      {/* BACKGROUND GRADIENT */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#F7C7A5] to-[#E98C56]' />

      {/* ============================
          TITLE SECTION
      ============================ */}
      <div className='relative z-20 max-w-3xl mx-auto px-4 sm:px-6 text-center py-16 sm:py-24 space-y-5'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A2C2A] tracking-wide drop-shadow-md'>
          How to Order?
        </h1>

        <div className='text-[#4A2C2A] text-sm sm:text-base md:text-lg opacity-90 space-y-2 leading-relaxed px-2'>
          <p>
            Customisation, the finishing touch guaranteed to set you apart from
            the crowds.
          </p>
          <p>Customise your hamper with CocoCart.</p>
          <p>
            Chocolate is always the answer — and we are India’s largest
            chocolate gifting concierge.
          </p>
        </div>
      </div>

      {/* ============================
          STEPS SECTION
      ============================ */}
      <div className='relative z-20 max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center mt-8'>
          {[1, 2, 3].map((step, idx) => (
            <div
              key={idx}
              className='px-4 py-6 sm:px-6 sm:py-8 rounded-2xl bg-white/20 backdrop-blur-lg shadow-lg 
                         hover:shadow-2xl transition-all duration-300 border border-white/40 hover:scale-[1.03]'
            >
              <div className='flex justify-center mb-4'>
                <Image
                  src='/Ellipse_34_1.avif'
                  alt={`Step ${step}`}
                  width={100}
                  height={100}
                  className='drop-shadow-xl w-20 sm:w-24'
                />
              </div>

              <h2 className='text-lg sm:text-xl font-bold text-[#4A2C2A] tracking-wide'>
                STEP {step}
              </h2>

              <p className='text-[#4A2C2A] text-xs sm:text-sm opacity-90 leading-relaxed mt-2 px-2'>
                {step === 1 &&
                  'Brief the gifting concierge on occasion, budget & delivery details.'}
                {step === 2 &&
                  'Pick the hamper, customise the goodies & let our gifting team perfect it.'}
                {step === 3 &&
                  'Enjoy doorstep delivery of your premium chocolate hamper anywhere in India.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ============================
          PREMIUM GIFTING SECTION
      ============================ */}
      <div className='relative z-30 mt-32 sm:mt-40'>
        <div className='absolute inset-x-0 top-[-100px] sm:top-[-150px] h-[600px] sm:h-[850px] bg-[#F8C0A0] rounded-t-[50%]' />

        <div className='relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32'>
          {/* Heading */}
          <h2 className='text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4A2C2A] tracking-wide drop-shadow-sm'>
            NEED A THOUGHTFUL GIFT?
          </h2>

          <p className='text-center max-w-xl mx-auto mt-3 text-[#4A2C2A] opacity-90 text-sm sm:text-base'>
            Let our gifting experts curate a perfect hamper for any occasion —
            personal or corporate.
          </p>

          {/* IMAGE + FORM */}
          <div className='mt-10 sm:mt-14 flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-16'>
            {/* LEFT IMAGE CARD */}
            <div className='relative w-[260px] sm:w-[300px] md:w-[340px] h-[400px] sm:h-[460px] md:h-[520px] overflow-hidden shadow-2xl  rounded-tl-[48px] rounded-tr-[48px] rounded-bl-[48px] rounded-br-2xl border border-white/40 backdrop-blur-md'>
              <Image
                src='/giftbox.avif'
                alt='Gift'
                fill
                className='object-cover'
              />
            </div>

            {/* RIGHT FORM CARD */}
            <div
              className='w-full max-w-md bg-white/40 backdrop-blur-lg shadow-xl 
                            px-5 sm:px-8 py-8 sm:py-10 rounded-2xl border border-white/50'
            >
              <h3 className='text-xl sm:text-2xl font-bold text-[#4A2C2A] mb-2 sm:mb-3 tracking-wide'>
                Special Occasion Gifting
              </h3>

              <p className='text-[#4A2C2A] text-xs sm:text-sm opacity-90 leading-relaxed'>
                Get personalised gifting support from our expert team — crafted
                with care.
              </p>

              <div className='mt-5 space-y-4'>
                <input
                  type='text'
                  placeholder='Name'
                  className='w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-xs sm:text-sm bg-white/70'
                />

                <div className='flex flex-col sm:flex-row gap-3'>
                  <input
                    type='email'
                    placeholder='Email'
                    className='w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-xs sm:text-sm bg-white/70'
                  />
                  <input
                    type='text'
                    placeholder='Phone Number'
                    className='w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-xs sm:text-sm bg-white/70'
                  />
                </div>

                <input
                  type='text'
                  placeholder='Query'
                  className='w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-xs sm:text-sm bg-white/70'
                />

                <textarea
                  rows={3}
                  placeholder='Additional Information'
                  className='w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-xs sm:text-sm bg-white/70'
                />

                <button className='w-full bg-[#4A2C2A] text-white py-2 rounded-md text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#3d2523] transition'>
                  SUBMIT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
