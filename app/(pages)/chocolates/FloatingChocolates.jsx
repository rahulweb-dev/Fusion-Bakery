"use client";
import { useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingChocolates({ items = [] }) {

  useLayoutEffect(() => {
    const follower = document.querySelector(".choco-follower");
    const others = gsap.utils.toArray(".choco-float:not(.choco-follower)");

    // ========= 1️⃣ Mouse-Follower Shadow =========
    const handleMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 25;
      const y = (e.clientY - window.innerHeight / 2) / 25;

      gsap.to(follower, {
        x,
        y,
        scale: 1.05,
        rotation: x * 0.6,
        duration: 0.35,
        ease: "power2.out",
      });
    };

    // ========= 2️⃣ Idle Floating for Background Chocolates =========
    others.forEach((el) => {
      const speed = el.dataset.speed || 2;

      gsap.to(el, {
        x: `+=${gsap.utils.random(-25, 25)}`,
        y: `+=${gsap.utils.random(-18, 18)}`,
        rotation: gsap.utils.random(-4, 4),
        duration: gsap.utils.random(2, 4),
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    // ========= 3️⃣ Section-Fade / Parallax Lighting =========
    const sections = document.querySelectorAll("[data-float-section]");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        end: "bottom 10%",
        scrub: 1,
        onUpdate(self) {
          const progress = self.progress;
          const color = section.dataset.light || "#C6A44B33";

          gsap.to(".floating-light", {
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            opacity: progress,
            duration: 0.3,
          });

          gsap.to(".choco-float", {
            opacity: gsap.utils.clamp(0.15, 1, progress * 1.4),
            duration: 0.3,
          });
        },
      });
    });

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {/* Section glow */}
      <div className="floating-light fixed inset-0 pointer-events-none z-[3] opacity-0" />

      {/* Floating layer */}
      <div className="pointer-events-none fixed inset-0 z-[4]">
        {items.map((item, i) => (
          <Image
            key={i}
            src={item.src}
            width={item.w}
            height={item.h}
            alt="choco"
            className={`choco-float absolute opacity-0 ${item.className} ${
              i === 0 ? "choco-follower" : ""
            }`}
            data-speed={item.speed}
          />
        ))}
      </div>
    </>
  );
}
