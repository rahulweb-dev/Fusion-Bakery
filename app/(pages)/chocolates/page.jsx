"use client"

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef, useLayoutEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloatingChocolates from './FloatingChocolates';
import ChocolateHero from '@/app/Chocolate-components/ChocolateHero';
import ChocolateProducts from '@/app/Chocolate-components/ChocolateProducts';


export default function page() {
  return (
    <div>
      <section data-float-section data-light="#C6A44B33" id="hero" className="relative ...">
        <ChocolateHero />
        {/* <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
          <Image
            src="https://lepure.in/cdn/shop/files/bd_desktop.png?v=1754906333&width=2000"
            alt="Celebration Chocolate Bar"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="relative z-2 max-w-6xl w-full px-6 md:px-10 flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-white text-4xl md:text-6xl font-light leading-tight">
                Introducing <br />
                <span className="font-semibold">Celebration Bars</span>
              </h1>

              <p className="text-gray-200 mt-4 text-lg">
                The perfect gift for every occasion
              </p>

              <button className="mt-8 bg-[#6b0f1a] hover:bg-[#8b1321] text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition">
                EXPLORE NOW
              </button>
            </div>
          </div>
        </section> */}

      </section>
      <ChocolateAboutSection />
      {/* <ChocolateProducts /> */}
      <FloatingChocolates
        items={[
          { src: "/chocolates/choco1.png", w: 120, h: 120, speed: 3, className: "top-10 left-10" },

        ]}
      />
      <ChocolateCarousel />
      <ChocolateWhySection />
      <OfferSection />
      <ChocolateTestimonials /></div>
  )
}


export function ChocolateAboutSection() {
  gsap.registerPlugin(ScrollTrigger);


  const boxRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "bottom 20%",
        end: "200% 100%",
        scrub: 2.5,
        // markers: true
      }
    });

    tl
      .to(boxRef.current, { x: 700, y: 1400, ease: "none", duration: 2.5 })
  }, []);


  return (
    <section data-float-section data-light="#FFBFA833" id="about">
      <section className="w-full bg-white py-16 md:py-20" ref={sectionRef}>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 lg:px-10">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/3.png" // <-- replace with your image
              alt="Chocolate blocks"
              width={650}
              height={500}
              priority

              ref={boxRef}
              className="w-full max-w-[540px] h-auto object-contain z-2"
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
      </section></section>
  );
}


const products = [
  { name: "Chocolate Truffle", price: "9.99", img: "https://i.pinimg.com/1200x/20/dc/9e/20dc9ea67639a55fc598f7dbd47fdf55.jpg" },
  { name: "Delicious Cupcake", price: "7.99", img: "https://i.pinimg.com/736x/95/83/c6/9583c6db452c76e1f3a15386def671c6.jpg" },
  { name: "Cheese Classic Burger", price: "20.99", img: "https://i.pinimg.com/736x/a7/e5/03/a7e503932d1f9ce2091641832d7fab42.jpg" },
  { name: "Chocolate Mud Cake", price: "18.99", img: "https://i.pinimg.com/736x/17/31/06/bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp.jpg" },
  { name: "Special Edition Bonbons", price: "12.49", img: "https://i.pinimg.com/736x/17/31/06/bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp.jpg" },
];


export function ChocolateCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Faded heading */}
        <h2 className="text-[58px] md:text-[88px] font-light text-[#e7dfd6] text-center -mb-6 select-none">
          EXCLUSIVE CHOCOLATE & TREATS
        </h2>

        <div className="mt-12 relative">

          {/* Custom Buttons */}
          <button ref={prevRef} className="swiper-prev-btn">◀</button>
          <button ref={nextRef} className="swiper-next-btn">▶</button>

          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            onInit={(swiper) => {
              // Attach navigation AFTER refs are available
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="pb-14"
          >
            {products.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="text-center bg-white rounded-3xl border shadow-xl overflow-hidden">

                  {/* Image container (fixed height) */}
                  <div className="relative w-full h-[240px] bg-[#F6F6F6]">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover rounded-t-3xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="px-4 py-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {p.name}
                    </h3>

                    <p className="text-gray-600 text-sm mt-1">
                      ₹{p.price}
                    </p>
                  </div>
                </div>
              </SwiperSlide>

            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-prev-btn,
        .swiper-next-btn {
          position: absolute;
          top: 40%;
          z-index: 30;
          width: 42px;
          height: 42px;
          border-radius: 999px;
          background: #fff;
          border: 1px solid #d6c7a3;
          color: #8b5b3e;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-prev-btn { left: -20px; }
        .swiper-next-btn { right: -20px; }
      `}</style>
    </section>
  );
}



export function ChocolateWhySection() {
  return (
    <section className="w-full bg-[#FBF5EF] py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 lg:px-10">

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

        {/* RIGHT IMAGE + HALO + CURVED TEXT */}
        <div className="relative flex justify-center">

          {/* Soft Circle Background */}
          <div className="absolute top-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[460px] md:h-[460px] rounded-full bg-[#F2E8DE]" />


        </div>
      </div>
    </section>
  );
}


export function OfferSection() {
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

export function ChocolateTestimonials() {
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




