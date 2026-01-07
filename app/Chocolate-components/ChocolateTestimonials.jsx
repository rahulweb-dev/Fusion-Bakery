"use client";
import Image from "next/image";

const testimonials = [
  {
    name: "Dana Eston",
    role: "Nesley Cake – Colorado",
    img: "/images/user-1.jpg",
    text: `Lorem ipsum dolor amet, consectetur adipisicing elit,
    sed sit do eiusmod tmeport incididunt ut labore et dolore aliqua..
    Ut enim minim veniam, quis nostrud exercitation ullamco laboris.`,
  },
  {
    name: "Dana Eston",
    role: "Nesley Cake – Colorado",
    img: "/images/user-2.jpg",
    text: `Lorem ipsum dolor amet, consectetur adipisicing elit,
    sed sit do eiusmod tmeport incididunt ut labore et dolore aliqua..
    Ut enim minim veniam, quis nostrud exercitation ullamco laboris.`,
  },
  {
    name: "Dana Eston",
    role: "Nesley Cake – Colorado",
    img: "/images/user-3.jpg",
    text: `Lorem ipsum dolor amet, consectetur adipisicing elit,
    sed sit do eiusmod tmeport incididunt ut labore et dolore aliqua..
    Ut enim minim veniam, quis nostrud exercitation ullamco laboris.`,
  },
];

export default function ChocolateTestimonials() {
  return (
    <section className="w-full bg-[#FBF5EF] py-16 md:py-24 text-center">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Label */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-[1px] w-10 bg-[#C7A24B]" />
          <span className="text-[12px] tracking-[2px] font-semibold text-[#C7A24B]">
            WHAT OUR CLIENT SAY
          </span>
          <span className="h-[1px] w-10 bg-[#C7A24B]" />
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-[34px] md:text-[44px] font-light tracking-wide text-gray-900">
          OUR TESTIMONIALS
        </h2>

        {/* Testimonial Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          {/* Left (faded) */}
          <div className="opacity-30">
            <Image
              src={testimonials[0].img}
              alt={testimonials[0].name}
              width={60}
              height={60}
              className="rounded-full mx-auto"
            />
            <p className="mt-3 text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
              {testimonials[0].text}
            </p>
            <h4 className="mt-3 font-semibold">{testimonials[0].name}</h4>
            <p className="text-gray-500 text-sm">{testimonials[0].role}</p>
          </div>

          {/* Center (highlight bubble) */}
          <div className="relative bg-white rounded-[40px] shadow-md py-8 px-6 max-w-lg mx-auto">
            <span className="absolute -top-6 left-6 text-5xl text-[#C7A24B]">“</span>

            <Image
              src={testimonials[1].img}
              alt={testimonials[1].name}
              width={70}
              height={70}
              className="rounded-full mx-auto"
            />

            <p className="mt-4 text-gray-700 leading-relaxed max-w-md mx-auto">
              {testimonials[1].text}
            </p>

            <h4 className="mt-4 font-semibold text-gray-900">
              {testimonials[1].name}
            </h4>

            <p className="text-gray-500 text-sm">{testimonials[1].role}</p>

            <span className="absolute -bottom-6 right-6 text-5xl text-[#C7A24B]">”</span>
          </div>

          {/* Right (faded) */}
          <div className="opacity-30">
            <Image
              src={testimonials[2].img}
              alt={testimonials[2].name}
              width={60}
              height={60}
              className="rounded-full mx-auto"
            />
            <p className="mt-3 text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
              {testimonials[2].text}
            </p>
            <h4 className="mt-3 font-semibold">{testimonials[2].name}</h4>
            <p className="text-gray-500 text-sm">{testimonials[2].role}</p>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-black" />
          <span className="h-2 w-2 rounded-full border border-gray-400" />
          <span className="h-2 w-2 rounded-full border border-gray-400" />
        </div>
      </div>
    </section>
  );
}
