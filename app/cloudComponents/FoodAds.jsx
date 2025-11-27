"use client";
import Image from "next/image";

export default function FoodAds() {
  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Left Two Images */}
        <div className="grid grid-rows-2 gap-4 h-[300px] sm:h-[500px] lg:h-[480px]">
          
          <div className="rounded-2xl overflow-hidden w-full h-full">
            <Image
              src="/images/banner.jpg"
              alt="Burger"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden w-full h-full">
            <Image
              src="/images/banner.jpg"
              alt="Special Menu"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Center Big Banner */}
        <div className="rounded-2xl relative overflow-hidden col-span-1 sm:col-span-2 lg:col-span-2 w-full h-[220px] sm:h-[350px] lg:h-[480px] flex items-center justify-between px-5 sm:px-8 bg-black text-white">
          
          {/* Text */}
          <div className="z-20 max-w-[200px] sm:max-w-[260px]">
            <p className="text-sm opacity-80">Premium Quality</p>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-snug mb-6">
              Filet mignon
            </h2>

            <button className="bg-green-600 hover:bg-green-700 transition-all px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              Explore <span className="text-lg">➜</span>
            </button>
          </div>

          {/* Background and Right Image */}
          <span className="absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-center opacity-50"></span>
        </div>

        {/* Right Poster */}
        <div className="rounded-2xl overflow-hidden w-full h-[300px] sm:h-[500px] lg:h-[480px]">
          <Image
            src="/images/banner.jpg"
            alt="Burger Poster"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
