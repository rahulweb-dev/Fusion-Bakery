import Image from 'next/image';
import React from 'react';

export default function GiftingSection() {
  return (
    <div className="relative w-full overflow-hidden font-[Inter]">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4EEE6] to-[#E6D8C4]" />

      {/* TITLE SECTION */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 text-center py-12 sm:py-16 space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2F2B28] tracking-wide">
          How to Order?
        </h1>

        <div className="text-[#4C2A1A] text-sm sm:text-base opacity-90 leading-relaxed max-w-xl mx-auto">
          <p>Customize your hamper with our corporate gifting experts.</p>
          <p>
            Elegant, thoughtful, premium gifting — curated for every occasion.
          </p>
        </div>
      </div>

      {/* STEPS SECTION */}
      <div className="relative  max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
          {[1, 2, 3].map((step, idx) => (
            <div
              key={idx}
              className="px-4 py-5 rounded-xl bg-[#FAF7F3]/80 backdrop-blur-xl
              shadow-lg border border-[#E6D8C4]
              hover:shadow-2xl hover:border-[#C8A26A] transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="flex justify-center mb-3">
                <Image
                  src="/Ellipse_34_1.avif"
                  alt={`Step ${step}`}
                  width={80}
                  height={80}
                  className="drop-shadow-xl w-16 sm:w-20 rounded-full"
                />
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-[#2F2B28]">
                STEP {step}
              </h2>

              <p className="text-[#4C2A1A] text-xs sm:text-sm opacity-90 mt-2 leading-relaxed">
                {step === 1 && 'Share occasion, budget & delivery details.'}
                {step === 2 && 'Choose your hamper & customize branding.'}
                {step === 3 && 'Enjoy premium doorstep delivery PAN India.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PREMIUM GIFTING SECTION */}
      <div className="relative">
        <div className="absolute inset-x-0 top-[70px] sm:top-[16px] h-[450px] sm:h-[650px] 
          bg-[#F4EEE6] rounded-t-[45%]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#2F2B28] tracking-wide">
            NEED A THOUGHTFUL GIFT?
          </h2>

          <p className="text-center max-w-md mx-auto mt-2 text-[#4C2A1A] opacity-90 text-sm sm:text-base">
            Let our experts curate premium personalized hampers.
          </p>

          {/* IMAGE + FORM */}
          <div className="mt-8 sm:mt-12 flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10">

            {/* Image Card */}
            <div className="relative w-[250px] sm:w-[290px] md:w-[320px] h-[350px] sm:h-[410px] md:h-[470px]
              overflow-hidden shadow-xl rounded-3xl border border-[#E6D8C4] bg-[#FAF7F3]">
              <Image src="/images/01.webp" alt="Gift" fill className="object-cover" />
            </div>

            {/* Form Card */}
            <div className="w-full max-w-sm bg-[#FAF7F3]/80 backdrop-blur-xl shadow-xl px-5 py-7 
              rounded-xl border border-[#E6D8C4]">
              
              <h3 className="text-xl font-bold text-[#2F2B28] mb-2">
                Special Occasion Gifting
              </h3>

              <p className="text-[#4C2A1A] text-xs sm:text-sm opacity-90 mb-4">
                Get personalized gifting support from our experts.
              </p>

              <div className="space-y-3">
                <input type="text" placeholder="Name" className="w-full border border-[#D4C7AD] rounded-md px-3 py-2 bg-white text-sm" />
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <input type="email" placeholder="Email" className="w-full border border-[#D4C7AD] rounded-md px-3 py-2 bg-white text-sm" />
                  <input type="text" placeholder="Phone Number" className="w-full border border-[#D4C7AD] rounded-md px-3 py-2 bg-white text-sm" />
                </div>

                <input type="text" placeholder="Query" className="w-full border border-[#D4C7AD] rounded-md px-3 py-2 bg-white text-sm" />

                <textarea rows={3} placeholder="Additional Information" className="w-full border border-[#D4C7AD] rounded-md px-3 py-2 bg-white text-sm" />

                <button className="w-full py-2 rounded-md text-sm font-semibold
                  bg-gradient-to-r from-[#C8A26A] to-[#8B5E34]
                  text-white hover:shadow-lg transition">
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
