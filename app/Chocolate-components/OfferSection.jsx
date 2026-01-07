"use client";
import Image from "next/image";

export default function OfferSection() {
  return (
    <section className="w-full bg-[#8B5B3E] py-16 md:py-24 relative overflow-hidden">

      {/* Subtle leaf background pattern */}
      <div className="absolute inset-0 opacity-[0.15] bg-[url('/images/leaf-pattern.png')] bg-right bg-contain bg-no-repeat" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 lg:px-10">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="https://i.pinimg.com/1200x/ff/8c/e4/ff8ce4594276ae5152065e8abf997606.jpg" // replace with yours
            alt="Chocolate Dessert"
            width={600}
            height={520}
            priority
            className="object-contain w-[420px] md:w-[500px]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white">

          {/* Tag */}
          <div className="flex items-center gap-3">
            <span className="text-[12px] tracking-[2px] font-semibold">WHAT WE OFFER</span>
            <span className="h-[1px] w-10 bg-white" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-[34px] md:text-[44px] leading-tight font-light tracking-wide">
            EXCLUSIVE TREATS FOR <br />
            YOUR SPECIAL <br />
            MOMENTS
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod
            tempor incididunt ut labore et  aliqua.
          </p>

          {/* Checklist */}
          <ul className="mt-6 space-y-3 text-[15px]">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-[#E9C998] text-xl">✔</span>
                Lorem ipsum dolor amet aliqua.
              </li>
            ))}
          </ul>

          {/* Button */}
          <button className="mt-8 inline-flex items-center gap-3 px-6 py-2 border border-white rounded-sm tracking-wide">
            LEARN MORE
          </button>
        </div>
      </div>

    </section>
  );
}



