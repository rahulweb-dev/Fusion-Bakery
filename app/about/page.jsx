'use client';
import { useSelect } from '../context/SelectContext';

import CloudKitchen from '../components/About/cloudKitchen';
import AboutCorporate1 from '../components/About/AboutCorporate-gifts';
import VisionMission from '../components/VisionMission';
import CoreValues from '../components/CoreValues';


export default function AboutPage() {
  const { select } = useSelect();

  return (
    <div className='mt-30'>
      {/* {select === 'Cloud Kitchen' ? <CloudKitchen /> : <AboutCorporate1 />} */}
      <AboutHero />
      <OriginStory />
      <JourneyExpansion />
      <WhatWeDo />
      <Philosophy />
      <VisionMission />
      <CoreValues />
      <LeadershipTeam />
      <ClosingPromise />

    </div>
  );
}
export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white py-24">
      {/* Decorative blur shapes */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <span className="inline-block rounded-full border border-amber-300 bg-amber-50 px-4 py-1 text-sm font-medium tracking-wide text-amber-700">
          About FUSIONN
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
          Our Story — Born from Compassion, <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Grown with Purpose
          </span>
        </h1>

        <p className="mt-4 mx-auto max-w-3xl text-lg text-gray-600">
          FUSIONN began as a humble act of service during the pandemic — today,
          it stands as a brand that blends food, gifting, craftsmanship and
          meaningful experiences, crafted with heart and intention.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-amber-600 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-200 transition hover:bg-amber-700">
            Explore Our Journey
          </button>
          <button className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50">
            Meet the Founders
          </button>
        </div>

        {/* Impact Stats */}
        <div className="mt-12 grid grid-cols-2 gap-6 rounded-2xl border bg-white/80 p-6 shadow-md backdrop-blur md:grid-cols-4">
          <div>
            <p className="text-3xl font-bold text-amber-700">10K+</p>
            <p className="text-sm text-gray-600">Meals Served</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-700">50+</p>
            <p className="text-sm text-gray-600">Corporate Partners</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-700">20+</p>
            <p className="text-sm text-gray-600">Curated Product Lines</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-700">100%</p>
            <p className="text-sm text-gray-600">Handcrafted with Care</p>
          </div>
        </div>
      </div>
    </section>
  );
}



export function OriginStory() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-amber-50/30">
      {/* Decorative blurred shapes */}
      <div className="pointer-events-none absolute -top-10 right-0 h-60 w-60 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Section Tag */}
        <span className="inline-block rounded-full border border-amber-300 bg-amber-50 px-4 py-1 text-sm font-medium tracking-wide text-amber-700">
          Our Origin Story
        </span>

        <h2 className="mt-6 text-3xl font-extrabold tracking-tight md:text-4xl">
          Where It All Began
        </h2>

        {/* Lead Paragraph */}
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          During the COVID-19 pandemic, while large-scale drives supported the
          underprivileged, we noticed an overlooked group — elderly and retired
          individuals unsure of their next healthy, home-style meal.
        </p>

        {/* Timeline Card */}
        <div className="mt-10 relative rounded-2xl border bg-white/90 p-8 shadow-lg backdrop-blur">
          {/* Timeline line */}
          <span className="absolute left-6 top-6 h-10 w-1 rounded-full bg-amber-400" />

          <p className="pl-6 text-gray-800 text-lg leading-relaxed">
            What started as a humble cloud kitchen serving{" "}
            <span className="font-semibold text-amber-700">100–200 families</span>,
            soon earned trust, love and purpose.
          </p>

          {/* Quote highlight */}
          <div className="mt-6 rounded-xl border-l-4 border-amber-500 bg-amber-50 px-4 py-3">
            <p className="italic text-amber-800">
              “FUSIONN didn’t begin as a business — it began as a service from the heart.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



export function JourneyExpansion() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-amber-50/20 to-white">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute top-0 left-0 h-72 w-72 -translate-x-1/3 -translate-y-1/3 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-amber-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2 items-center">
        {/* Text Content */}
        <div>
          <span className="inline-block rounded-full border border-amber-300 bg-amber-50 px-4 py-1 text-sm font-medium tracking-wide text-amber-800">
            Growth & Evolution
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight">
            From a Kitchen to a{" "}
            <span className="bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
              Trusted Brand
            </span>
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            In 2025, FUSIONN expanded its vision by acquiring{" "}
            <span className="font-semibold text-amber-700">RENEE BAKERS</span> —
            a reputed brand known for premium corporate chocolates and
            professionally trained chefs.
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            Together, we built a unified identity that blends{" "}
            <span className="font-medium">food, gifting, craftsmanship and meaningful experiences</span>.
          </p>

          {/* Highlight Bar */}
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-amber-600" />
            <p className="text-sm font-medium text-amber-800">
              A milestone rooted in purpose — not scale.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative rounded-2xl border bg-white p-8 shadow-lg">
          {/* Accent stripe */}
          <span className="absolute -top-2 right-6 h-10 w-1.5 rounded-full bg-amber-500" />

          <h3 className="text-lg font-semibold">
            Thoughtful Growth. Purposeful Expansion.
          </h3>

          <p className="mt-2 text-gray-600 leading-relaxed">
            What began with compassion is now a brand built on trust — powered
            by craftsmanship, quality and human connection.
          </p>

          {/* Optional Image Placeholder */}
          <div className="mt-6 rounded-xl border bg-gray-50 p-4 text-center text-sm text-gray-500">
            {/* Replace with <Image /> if you add visuals later */}
            Brand Collaboration — FUSIONN × RENEE BAKERS
          </div>
        </div>
      </div>
    </section>
  );
}



export function WhatWeDo() {
  const services = [
    {
      title: "Wholesome Cloud Kitchen Services",
      desc: "Nutritious, homestyle meals crafted with care and thoughtfulness.",
    },
    {
      title: "Premium Corporate Chocolates",
      desc: "Handcrafted artisan chocolates curated for meaningful gifting.",
    },
    {
      title: "Curated Corporate Gifting Solutions",
      desc: "Purpose-driven gifting that blends craftsmanship and experience.",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-amber-50/20">
      {/* decorative shapes */}
      <div className="pointer-events-none absolute -top-10 left-0 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <span className="inline-block rounded-full border border-amber-300 bg-amber-50 px-4 py-1 text-sm font-medium tracking-wide text-amber-800">
          Our Work & Offerings
        </span>

        <h2 className="mt-6 text-3xl md:text-4xl font-extrabold tracking-tight">
          What We Do
        </h2>

        <p className="mt-3 max-w-3xl mx-auto text-gray-700">
          Every offering is built on compassion, craftsmanship and meaningful experience.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border bg-white/90 p-8 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Accent badge */}
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-600 group-hover:bg-orange-600 transition" />
                <p className="text-sm font-medium text-amber-700">
                  Service {i + 1}
                </p>
              </div>

              <h3 className="mt-4 text-lg font-semibold leading-snug">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom highlight */}
              <div className="mt-6 rounded-xl bg-amber-50 py-2 text-sm text-amber-800 border border-amber-200">
                Crafted with care, delivered with purpose.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




export function Philosophy() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />

      {/* subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block rounded-full border border-amber-400/40 bg-amber-100/5 px-4 py-1 text-sm font-medium tracking-wide text-amber-300">
          Purpose • Craft • Integrity
        </span>

        <h2 className="mt-6 text-3xl md:text-4xl font-extrabold tracking-tight">
          Our Philosophy
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Tradition meets tomorrow — where warmth, creativity and precision
          come together in everything we craft and deliver.
        </p>

        {/* Quote block */}
        <div className="mt-10 relative mx-auto max-w-3xl rounded-2xl border border-amber-200/20 bg-white/5 px-6 py-6 backdrop-blur">
          {/* Accent line */}
          <span className="absolute -top-3 left-1/2 h-6 w-1 rounded-full bg-amber-400" />

          <blockquote className="text-lg italic text-amber-200 leading-relaxed">
            “Where tradition melts into innovation — and our passion becomes
            meaningful customer experience.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export function LeadershipTeam() {
  const members = [
    { name: "Vemuri Sireesha", role: "Founder & Director" },
    { name: "Divya", role: "Founder & Director" },
    { name: "Vemuri Vaishnavi", role: "Chairman" },
  ];

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-amber-50/20">
      {/* Decorative blur accents */}
      <div className="pointer-events-none absolute -top-10 left-0 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full border border-amber-300 bg-amber-50 px-4 py-1 text-sm font-medium tracking-wide text-amber-800">
            Leadership & Governance
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight">
            Leadership Team
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-gray-700">
            The people who guide our purpose, culture and commitment to excellence.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {members.map((m, i) => (
            <div
              key={i}
              className="group rounded-2xl border bg-white/90 p-8 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-xl text-center"
            >
              {/* Avatar / Initial Badge */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold text-lg border border-amber-300">
                {getInitials(m.name)}
              </div>

              <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>

              <span className="mt-1 inline-block rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700 border border-amber-200">
                {m.role}
              </span>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                Championing values of compassion, craftsmanship and purposeful growth.
              </p>

              <div className="mt-6 h-1 w-12 mx-auto rounded-full bg-amber-500 group-hover:w-16 transition-all" />
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
