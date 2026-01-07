"use client";
import Image from "next/image";

export default function ChocolateAboutSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 lg:px-10">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="https://i.pinimg.com/1200x/c8/05/1e/c8051ec3e7c5fba47bbbe651a14561ac.jpg" // <-- replace with your image
            alt="Chocolate blocks"
            width={650}
            height={500}
            priority
            className="w-full max-w-[540px] h-auto object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-gray-700">

          {/* Section Tag */}
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-semibold tracking-[2px] text-[#C6A44B]">
              ABOUT OUR COMPANY
            </span>
            <span className="h-[1px] w-10 bg-[#C6A44B]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-[34px] md:text-[44px] leading-tight tracking-wide text-gray-900">
            WE CREATE <br />
            INCREDIBLY TASTY <br />
            CHOCOLATE
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            eiusmod tempor incididunt ut labore et dolore magna aliqua, quis
            nostrud exercitation ullamco aliquip.
          </p>

          {/* Signature */}
          <div className="mt-8">
            <Image
              src="https://i.pinimg.com/1200x/cd/55/03/cd5503193e58cf6a68308c035a28a91b.jpg" // <-- add your signature image
              alt="Founder Signature"
              width={200}
              height={80}
              className="w-40 h-auto"
            />

            <p className="mt-2 text-[11px] tracking-[2px] font-semibold text-gray-600">
              FOUNDER OF COMPANY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
