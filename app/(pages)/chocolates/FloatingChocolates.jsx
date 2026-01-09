"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function FloatingChocolates({ items = [] }) {
  const followerRef = useRef(null);

  useLayoutEffect(() => {
    if (!followerRef.current) return;

    // Center transform
    gsap.set(followerRef.current, {
      xPercent: -50,
      yPercent: -50,
    });

    const move = (e) => {
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* FOLLOWER (ONLY FIRST ITEM) */}
      {items[0] && (
        <div
          ref={followerRef}
          className="absolute top-20 left-0"
        >
          <Image
            src={items[0].src}
            width={items[0].w}
            height={items[0].h}
            alt="chocolate"
            className="drop-shadow-2xl"
          />
        </div>
      )}

      {/* STATIC FLOATING (OPTIONAL) */}
      {items.slice(1).map((item, i) => (
        <div
          key={i}
          className={`absolute ${item.className}`}
        >
          <Image
            src={item.src}
            width={item.w}
            height={item.h}
            alt="chocolate"
            className="opacity-70"
          />
        </div>
      ))}
    </div>
  );
}
