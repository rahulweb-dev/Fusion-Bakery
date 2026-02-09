'use client';
import { useSelect } from '../../context/SelectContext';

import CloudKitchen from '../../components/About/cloudKitchen';
import AboutCorporate1 from '../../components/About/AboutCorporate-gifts';
import VisionMission from '../../components/VisionMission';
import CoreValues from '../../components/CoreValues';
import Image from "next/image";


export default function AboutPage() {
  const { select } = useSelect();

  return (
    <div className='mt-30'>
      {/* {select === 'Cloud Kitchen' ? <CloudKitchen /> : <AboutCorporate1 />} */}
      <AboutHero />
      <OriginStory />
      <JourneyExpansion />
      <WhatWeDo />
      <VisionMission />
      <CoreValues />
      <LeadershipTeam />
      <ClosingPromise />

    </div>
  );
}


export function AboutHero() {
  return (
    <section className="relative bg-[#FBF6EE] py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Top Content */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-amber-700">
            About Fusionn
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
            Our Story — Crafted with{" "}
            <span className="text-amber-700">Purpose</span>
          </h1>

          <p className="mt-5 text-[17px] leading-relaxed text-gray-600">
            FUSIONN began as a quiet act of service during the pandemic.
            Today, it stands as a brand that blends food, gifting and
            craftsmanship — thoughtfully and responsibly.
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-full bg-amber-700 px-7 py-3 text-sm font-medium text-white hover:bg-amber-800 transition">
              Explore Our Journey
            </button>
            <button className="rounded-full border border-gray-300 px-7 py-3 text-sm text-gray-700 hover:bg-white transition">
              Meet the Founders
            </button>
          </div>
        </div>

        {/* Image + Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Hero Image */}
          <div className="relative h-[320px] md:h-[380px] rounded-3xl overflow-hidden shadow-sm">
            <Image
              src="https://i.pinimg.com/1200x/80/af/b0/80afb0e8aa2c32d624416ee376feae06.jpg"   // replace with your image
              alt="Crafting chocolate"
              fill
              className="object-cover"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {[
              ["🍫", "50+", "Corporate Partners"],
              ["🎁", "20+", "Curated Lines"],
              ["👨‍🍳", "10K+", "Meals Served"],
              ["✨", "100%", "Handcrafted"],
            ].map(([icon, value, label]) => (
              <div key={label} className="flex items-start gap-3">
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-2xl font-semibold text-gray-900">
                    {value}
                  </p>
                  <p className="text-sm text-gray-500">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}




export function OriginStory() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <span className="text-sm tracking-widest uppercase text-amber-700">
          Our Origin
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
          Where It All Began
        </h2>

        <p className="mt-6 text-[17px] leading-relaxed text-gray-700">
          During the pandemic, while large-scale initiatives supported communities,
          we noticed an overlooked group — elderly individuals seeking nourishing,
          home-style meals with dignity.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          What began as a humble cloud kitchen soon earned trust, connection
          and a deeper purpose.
        </p>

        <blockquote className="mt-10 border-l-4 border-amber-600 pl-6 italic text-gray-700">
          “FUSIONN didn’t begin as a business — it began as a service from the heart.”
        </blockquote>
      </div>
    </section>
  );
}



export function JourneyExpansion() {
  return (
    <section className="relative py-28 bg-[#FFFBF5] overflow-hidden">
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-72 w-72 -translate-y-1/2 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-start">
        
        {/* Left: Story Content */}
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-amber-700">
            Growth & Evolution
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl font-semibold leading-tight text-gray-900">
            From a Kitchen to a{" "}
            <span className="text-amber-700">Trusted Brand</span>
          </h2>

          <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
            In 2025, FUSIONN expanded its vision by acquiring{" "}
            <span className="font-medium text-amber-700">RENEE BAKERS</span> — a
            respected name in premium chocolates and refined corporate gifting.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            This marked a defining chapter in our journey — uniting culinary
            care, craftsmanship, and thoughtful experiences under one
            purposeful identity.
          </p>

          {/* Subtle divider */}
          <div className="mt-8 h-[2px] w-16 rounded-full bg-amber-600/40" />
        </div>

        {/* Right: Highlight Card */}
        <div className="relative rounded-2xl border border-gray-200 bg-white p-10 shadow-sm">
          {/* Accent line */}
          <span className="absolute top-0 left-8 h-1 w-16 rounded-full bg-amber-600" />

          <h3 className="mt-6 text-lg font-medium text-gray-900">
            Thoughtful Growth. Purposeful Expansion.
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Every step forward was guided by intent — not scale.  
            Growth came from trust, care, and a commitment to doing things the
            right way.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We believe expansion should strengthen values, not dilute them.
          </p>
        </div>
      </div>
    </section>
  );
}





export function WhatWeDo() {
  const services = [
    {
      title: "Wholesome Cloud Kitchen Services",
      desc: "Nutritious meals inspired by tradition, prepared with care and consistency for everyday nourishment.",
      img: "/images/cloud-kitchen.jpg", // optional
    },
    {
      title: "Premium Corporate Chocolates",
      desc: "Handcrafted chocolates created for meaningful moments, refined gifting, and lasting impressions.",
      img: "/images/corporate-chocolates.jpg",
    },
    {
      title: "Curated Corporate Gifting",
      desc: "Purpose-driven gifting solutions that reflect warmth, craftsmanship, and thoughtful intent.",
      img: "/images/corporate-gifting.jpg",
    },
  ];

  return (
    <section className="relative py-28 bg-[#FFFBF5]">
      {/* soft ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-amber-700">
            What We Do
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-900">
            Our Offerings
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Thoughtfully crafted services that blend nourishment, gifting,
            and meaningful human connection.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-6">
                <span className="inline-block h-2 w-2 rounded-full bg-amber-600 mb-4" />

                <h3 className="text-lg font-medium text-gray-900">
                  {s.title}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                  {s.desc}
                </p>
              </div>

              {/* subtle bottom accent */}
              <div className="mt-6 h-[2px] w-10 rounded-full bg-amber-600/40 transition group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





export function Philosophy() {
  return (
    <section className="py-24 bg-gray-950 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-sm tracking-widest uppercase text-amber-300">
          Our Philosophy
        </span>

        <h2 className="mt-5 text-3xl md:text-4xl font-semibold">
          Guided by Intention
        </h2>

        <blockquote className="mt-8 text-xl italic text-amber-200 leading-relaxed">
          “Where tradition meets innovation — and craftsmanship becomes
          meaningful experience.”
        </blockquote>
      </div>
    </section>
  );
}


export function LeadershipTeam() {
  const members = [
    {
      name: "Vemuri Sireesha",
      role: "Founder & Director",
      img: "https://i.pinimg.com/736x/9a/5b/07/9a5b079a7baad7d7d7264fef1ffbc91f.jpg",
    },
    {
      name: "Divya",
      role: "Founder & Director",
      img: "https://i.pinimg.com/1200x/b2/70/b5/b270b568e1e6fdc59819d24117a42ad1.jpg",
    },
    {
      name: "Vemuri Vaishnavi",
      role: "Chairman",
      img: "https://i.pinimg.com/736x/a3/ae/ac/a3aeac1628cd4e9b4ead5dc43864e813.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900">
            Board of Directors
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {members.map((m, i) => (
            <div
              key={i}
              className="relative h-[460px] rounded-[28px] overflow-hidden group"
            >
              {/* Red vertical panel */}
              <div className="absolute inset-y-0 left-0 w-[35%] bg-[#2C0804]" />

              {/* Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[90%] w-[75%] z-10">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover rounded-[22px]"
                  />
                </div>
              </div>

              {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent z-20" />

              {/* Name & Role */}
              <div className="absolute bottom-6 left-6 right-6 z-30 text-white">
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <p className="text-sm opacity-80">{m.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}



export function ClosingPromise() {
  return (
    <section className="relative py-24 text-center bg-gradient-to-b from-amber-50/30 to-white overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6">
        <span className="inline-block rounded-full border border-amber-300 bg-amber-50 px-4 py-1 text-sm font-medium tracking-wide text-amber-800">
          Our Promise
        </span>

        <h2 className="mt-6 text-3xl md:text-4xl font-extrabold leading-snug tracking-tight">
          FUSIONN is more than food. <br className="hidden md:block" />
          More than gifting.
        </h2>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          It’s a promise — crafted with heart, served with purpose.
        </p>

        {/* Highlighted closing bar */}
        <div className="mt-10 mx-auto max-w-md rounded-2xl border border-amber-200 bg-amber-50 px-5 py-3">
          <p className="text-amber-800 font-medium">
            Built on compassion. Sustained by trust. Driven by meaning.
          </p>
        </div>

        {/* Accent underline */}
        <div className="mt-6 mx-auto h-1 w-16 rounded-full bg-amber-600" />
      </div>
    </section>
  );
}
