import Image from 'next/image';
import React from 'react';

export default function GiftingSection() {
  return (
    <div className="relative w-full overflow-hidden font-[Inter]">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-b from-[#F7C7A5] to-[#E98C56]" />

      {/* ============================
          TITLE SECTION
      ============================ */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 text-center py-12 sm:py-16 space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#4A2C2A] tracking-wide drop-shadow-md">
          How to Order?
        </h1>

        <div className="text-[#4A2C2A] text-sm sm:text-base opacity-90 leading-relaxed max-w-xl mx-auto">
          <p>Customise your hamper with CocoCart.</p>
          <p>
            Chocolate is always the answer — and we are India’s largest chocolate gifting concierge.
          </p>
        </div>
      </div>

      {/* ============================
          STEPS SECTION
      ============================ */}
      <div className="relative z-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
          {[1, 2, 3].map((step, idx) => (
            <div
              key={idx}
              className="px-4 py-5 rounded-xl bg-white/25 backdrop-blur-xl shadow-lg 
              hover:shadow-2xl transition-all duration-300 border border-white/40 hover:scale-[1.03]"
            >
              <div className="flex justify-center mb-3">
                <Image
                  src="/Ellipse_34_1.avif"
                  alt={`Step ${step}`}
                  width={80}
                  height={80}
                  className="drop-shadow-xl w-16 sm:w-20"
                />
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-[#4A2C2A]">
                STEP {step}
              </h2>

              <p className="text-[#4A2C2A] text-xs sm:text-sm opacity-90 mt-2 leading-relaxed">
                {step === 1 &&
                  'Brief us on occasion, budget & delivery details.'}
                {step === 2 &&
                  'Pick your hamper & customise it with our gifting team.'}
                {step === 3 &&
                  'Enjoy doorstep delivery anywhere in India.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ============================
          PREMIUM GIFTING SECTION
      ============================ */}
      <div className="relative z-60 ">
        <div className="absolute inset-x-0 top-[70px] sm:top-[16px] h-[450px] sm:h-[650px] bg-[#F8C0A0] rounded-t-[45%]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          {/* Heading */}
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#4A2C2A] tracking-wide">
            NEED A THOUGHTFUL GIFT?
          </h2>

          <p className="text-center max-w-md mx-auto mt-2 text-[#4A2C2A] opacity-90 text-sm sm:text-base">
            Let our gifting experts curate a perfect hamper for any occasion.
          </p>

          {/* IMAGE + FORM */}
          <div className="mt-8 sm:mt-12 flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10">
            {/* Image Card */}
            <div className="relative w-[250px] sm:w-[290px] md:w-[320px] h-[350px] sm:h-[410px] md:h-[470px] overflow-hidden shadow-xl rounded-3xl border border-white/30">
              <Image
                src="/images/01.webp"
                alt="Gift"
                fill
                className="object-cover"
              />
            </div>

            {/* Form Card */}
            <div className="w-full max-w-sm bg-white/50 backdrop-blur-xl shadow-xl px-5 py-7 rounded-xl border border-white/50">
              <h3 className="text-xl font-bold text-[#4A2C2A] mb-2">
                Special Occasion Gifting
              </h3>

              <p className="text-[#4A2C2A] text-xs sm:text-sm opacity-90 mb-4">
                Get personalised gifting support curated by experts.
              </p>

              <div className="space-y-3">
                <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white/70 text-sm" />

                <div className="flex flex-col sm:flex-row gap-3">
                  <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white/70 text-sm" />
                  <input type="text" placeholder="Phone Number" className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white/70 text-sm" />
                </div>

                <input type="text" placeholder="Query" className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white/70 text-sm" />

                <textarea rows={3} placeholder="Additional Information" className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white/70 text-sm" />

                <button className="w-full bg-[#4A2C2A] text-white py-2 rounded-md text-sm font-semibold hover:bg-[#3d2523] transition">
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
