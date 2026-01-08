'use client';

import Link from 'next/link';

export default function OurOfferings() {
  return (
    <section className="bg-[#FBF7F1] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-[64px] md:text-[80px]
          font-light text-[#B7B4AF] mb-20">
          Our Offerings
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* CLOUD KITCHEN */}
          <OfferingCard
            title="Cloud kitchen"
            href="/cloud-kitchen"
            border="#8FAF9A"
            actionColor="#6F8F78"
            image="https://i.pinimg.com/736x/ef/9d/d8/ef9dd8adaf2d89b356ae89531c7ae517.jpg"
          />

          {/* CORPORATE GIFTING */}
          <OfferingCard
            title="Corporate gifting"
            href="/corporate-gifts"
            border="#E0B487"
            actionColor="#D5A26D"
            image="https://i.pinimg.com/736x/f2/79/3e/f2793e5b7117bd8e9168fb9087805e40.jpg"
          />

          {/* CHOCOLATES */}
          <OfferingCard
            title="Chocolates"
            href="/chocolates"
            border="#8C6B5A"
            actionColor="#6B4A3A"
            image="https://i.pinimg.com/736x/67/c0/b7/67c0b7cda5382f7a5c4e9bf182a839f7.jpg"
          />

        </div>
      </div>
    </section>
  );
}

/* =========================
   CARD COMPONENT
========================= */

function OfferingCard({ title, href, border, actionColor, image }) {
  return (
    <div
      className="group flex flex-col justify-between h-[420px]
      border rounded-sm overflow-hidden transition-all duration-500
      hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
      style={{ borderColor: border }}
    >
      {/* IMAGE SECTION */}
      <div
        className="relative flex-1 bg-center bg-cover
        transition-transform duration-700 group-hover:scale-[1.04]"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0
          bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        {/* TITLE */}
        <div className="absolute bottom-6 left-6 z-10">
          <p className="text-white text-xl font-medium tracking-wide">
            {title}
          </p>
        </div>
      </div>

      {/* ACTION BAR */}
      <Link
        href={href}
        className="relative flex items-center justify-center gap-3
        h-[72px] bg-white font-medium text-[15px]
        transition-all duration-300 group-hover:bg-[#FBF7F1]"
        style={{ color: actionColor }}
      >
        <span>Explore Now</span>
        <span className="text-xl transition-transform duration-300
          group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
}
