"use client";

import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function BeforeAfterBranding() {
  return (
    <section className="w-full py-16 bg-white px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Before / After Slider */}
        <div className="rounded-3xl shadow-xl overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Elevate Every Gift <br /> with Your Brand
          </h2>

          <p className="mt-4 text-lg text-gray-700">
            Swipe Left To See The After Branding Effect
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Showcase your brand with every gift. From simple essentials to
            personalized perfection, our corporate gifting integrates your logo
            to leave a lasting, professional impression.
          </p>
        </div>

      </div>
    </section>
  );
}
