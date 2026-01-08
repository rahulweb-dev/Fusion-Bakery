import CloudKitchenHero from '@/app/cloudComponents/CloudKitchenHero';
import ComboMealBoxes from '@/app/cloudComponents/ComboMealBoxes';
import CuisinesBrowse from '@/app/cloudComponents/CuisinesBrowse'
import KitchenInsights from '@/app/cloudComponents/kitchen-insights';
import TrustedPartners from '@/app/corporateComponents/TrustedPartners';
import React from 'react'
import Image from 'next/image';
export default function page() {
  const Cloudbanners = [
    {
      image:
        'https://corporategiftstkc.com/cdn/shop/files/Diwali_Website_Banners_PC_1.png?v=1761810497&width=1800',
      title: 'Gift It Once. Stay Remembered All Year.',
      subtitle:
        'Diaries, calendars & desk accessories that inspire productivity all year long',
      buttonText: 'Explore Now',
      buttonLink: '#products',
    },
    {
      image:
        'https://corporategiftstkc.com/cdn/shop/files/website-banner-2_2.jpg?v=1746699864&width=1800',
      title: 'Gift It Once. Stay Remembered All Year.',
      subtitle:
        'Diaries, calendars & desk accessories that inspire productivity all year long',
      buttonText: 'Explore Now',
      buttonLink: '#products',
    },
  ];
  return (
    <div><CloudKitchenHero /><CuisinesBrowse />
      {/* <BannerSlider slides={Cloudbanners} /> */}
      {/* <WhyChooseUs /> */}
      <section className="w-full bg-[#8C9A6B4D] py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 lg:px-10">

          {/* LEFT CONTENT */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="text-[12px] tracking-[2px] font-semibold text-[#6B7A45]">
                ABOUT OUR KITCHEN
              </span>
              <span className="h-[1px] w-10 bg-[#6B7A45]" />
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-[34px] md:text-[44px] leading-tight font-light tracking-wide text-gray-900">
              Freshly Cooked With Care — <br />
              Made For Every Occasion
            </h2>

            {/* Paragraph */}
            <p className="mt-4 text-gray-600 max-w-xl leading-relaxed text-[15px]">
              We believe great food is more than just taste — it’s warmth, comfort and
              togetherness. Our dishes are prepared in a hygienic cloud kitchen using
              fresh ingredients, traditional recipes and carefully balanced flavours.
            </p>

            {/* Feature List */}
            <div className="mt-8 space-y-6">

              <div className="flex gap-4">
                <span className="text-[#6B7A45] text-3xl">🥗</span>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Fresh & Quality Ingredients
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    Every meal is prepared using hand-picked vegetables, premium spices
                    and authentic flavours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-[#6B7A45] text-3xl">👨‍🍳</span>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Expert Chefs & Hygienic Kitchen
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    Our trained chefs follow strict safety standards to ensure
                    clean and wholesome food.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-[#6B7A45] text-3xl">🚚</span>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    On-Time Delivery Anywhere
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    We deliver fresh meals to homes, offices and events — right on time.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE / VISUAL */}
          <div className="relative flex justify-center">
            <div className="absolute top-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[460px] md:h-[460px] rounded-full bg-[#F2E8DE]" />
            <Image
              src="/about-kitchen.jpg"
              alt="About Our Kitchen"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />

          </div>

        </div>
      </section>
      <section className="w-full bg-[#8C9A6BB2] py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 lg:px-10">

          {/* RIGHT IMAGE + HALO + CURVED TEXT */}
          <div className="relative flex justify-center">

            {/* Soft Circle Background */}
            <div className="absolute top-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[460px] md:h-[460px] rounded-full bg-[#F2E8DE]" />


          </div>
          {/* LEFT CONTENT */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="text-[12px] tracking-[2px] font-semibold text-[#C7A24B]">
                WHY OUR COMPANY
              </span>
              <span className="h-[1px] w-10 bg-[#C7A24B]" />
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-[34px] md:text-[44px] leading-tight font-light tracking-wide text-gray-900">
              HOW A SWEET FAIRY <br />
              WORLD IS CREATED
            </h2>

            {/* Feature List */}
            <div className="mt-8 space-y-6">

              {/* Item */}
              <div className="flex gap-4">
                <span className="text-[#C7A24B] text-3xl">🎂</span>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Natural Ingredients
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod
                    tempor incididunt
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <span className="text-[#C7A24B] text-3xl">🍫</span>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Exquisite Tastes
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod
                    tempor incididunt
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <span className="text-[#C7A24B] text-3xl">🧇</span>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Use All Types of Chocolate
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod
                    tempor incididunt
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      <ComboMealBoxes />
      <KitchenInsights />
      <TrustedPartners />
    </div>
  )
}
