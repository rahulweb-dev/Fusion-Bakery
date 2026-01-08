"use client";

import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function BeforeAfterBranding() {
  return (
    <section className="w-full py-16  px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Before / After Slider */}
        <div className="rounded-3xl shadow-lg border border-[#E6D8C4] overflow-hidden bg-[#FAF7F3]">
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src="https://corporategiftstkc.com/cdn/shop/files/slider_banner_1.jpg?v=1747211433&width=800"
                alt="Before"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="https://corporategiftstkc.com/cdn/shop/files/slider_banner-1_1.jpg?v=1747211434&width=800"
                alt="After"
              />
            }
            position={50}
            style={{ width: "100%", height: "450px" }}
          />
        </div>

        {/* Right Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F2B28] leading-tight">
            Elevate Every Gift <br /> with Your Brand
          </h2>

          <span className="mt-2 w-20 h-[4px] rounded-full bg-[#C8A26A]" />

          <p className="mt-4 text-lg text-[#4C2A1A]">
            Swipe left to see the after-branding transformation ✨
          </p>

          <p className="mt-4 text-[#2F2B28] text-lg leading-relaxed">
            From subtle elegance to premium personalization, every gift becomes
            a powerful brand moment. We integrate your identity with precision
            to create meaningful impressions for clients, partners, and teams.
          </p>

          <button className="mt-6 w-fit px-6 py-3 rounded-xl
            bg-gradient-to-r from-[#C8A26A] to-[#8B5E34]
            text-white font-medium shadow-md hover:shadow-lg transition">
            Explore Branding Options
          </button>
        </div>

      </div>
    </section>
  );
}
