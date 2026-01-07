"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ChocolateWhySection() {

  const chocolateRef = useRef(null);
  const aboutRef = useRef(null);

  useGSAP(() => {

    // Fade-in + slide up animation
    gsap.fromTo(
      chocolateRef.current,
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 100,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 100%",
          end: "top 60%",
          scrub: true,
          markers: true,
        }
      }
    );

    // Move diagonally while scrolling
    gsap.to(chocolateRef.current, {
      y: 200,
      x: -80,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 60%",
        end: "top 0%",
        scrub: true,
        markers: true,
      }
    });

  }, []);

  return (
    <section className="w-full bg-[#FBF5EF] py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 lg:px-10">

        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-3">
            <span className="text-[12px] tracking-[2px] font-semibold text-[#C7A24B]">
              WHY OUR COMPANY
            </span>
            <span className="h-[1px] w-10 bg-[#C7A24B]" />
          </div>

          <h2 className="mt-4 text-[34px] md:text-[44px] leading-tight font-light tracking-wide text-gray-900">
            HOW A SWEET FAIRY <br />
            WORLD IS CREATED
          </h2>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="text-[#C7A24B] text-3xl">🎂</span>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Natural Ingredients</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#C7A24B] text-3xl">🍫</span>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Exquisite Tastes</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-[#C7A24B] text-3xl">🧇</span>
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Use All Types of Chocolate
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE + ANIMATION */}
        <div ref={aboutRef} className="relative flex justify-center">

          {/* Background Circle */}
          <div className="absolute top-1/2 -translate-y-1/2 w-[380px] h-[380px] md:w-[460px] md:h-[460px] rounded-full bg-[#F2E8DE]" />

          {/* Animated Chocolate Image */}
          <Image
            ref={chocolateRef}
            src="https://i.pinimg.com/736x/61/94/87/6194879938dfd7715a57382aa8f4def8.jpg"
            alt="Chocolate Stack"
            width={520}
            height={520}
            priority
            className="relative z-10 w-[340px] md:w-[430px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
