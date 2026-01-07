"use client";
import Image from "next/image";

/* ===== DATA ===== */
const services = [
  {
    title: "Wholesome Cloud Kitchen",
    subtitle: "Healthy, hygienic, home-style meals",
  },
  {
    title: "Premium Corporate Chocolates",
    subtitle: "Crafted indulgence for special moments",
  },
  {
    title: "Curated Corporate Gifting",
    subtitle: "Thoughtful gifting that builds relationships",
  },
];

const values = [
  {
    title: "Quality & Care",
    desc: "Nutritious, hygienic food crafted with dignity and responsibility.",
    icon: "🥗",
  },
  {
    title: "Meaningful Gifting",
    desc: "Corporate gifting experiences that leave lasting impressions.",
    icon: "🎁",
  },
  {
    title: "Tradition & Innovation",
    desc: "Blending timeless values with modern creativity.",
    icon: "🔥",
  },
  {
    title: "People-First Growth",
    desc: "Empowering teams and customers through empathy.",
    icon: "🤝",
  },
];

const leaders = [
  { name: "Vemuri Sireesha", role: "Founder & Director" },
  { name: "Divya", role: "Founder & Director" },
  { name: "Vemuri Vaishnavi", role: "Chairman" },
];

export default function AboutSection() {
  return (
    <main className="bg-white text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f6f2ea] via-[#efe6d8] to-[#e7dccc]" />
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide">
            FUSIONN
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-700 leading-relaxed">
            Where tradition melts into innovation, <br />
            and service comes from the heart.
          </p>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-28 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm uppercase tracking-widest text-gray-500">
            Our Story
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-6">
            Born from Compassion. <br /> Grown with Purpose.
          </h2>
          <p className="text-gray-700 leading-loose text-lg">
            FUSIONN was born during the COVID-19 pandemic—when the world slowed
            down and humanity stepped up.
            <br /><br />
            We noticed a silent need: elderly and retired individuals unsure of
            where their next hygienic, home-style meal would come from. What
            began as a humble cloud kitchen serving 100–200 families was never a
            business—it was a service rooted in empathy.
          </p>
        </div>

        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Carefully prepared home-style food"
            width={600}
            height={500}
            className="rounded-3xl shadow-2xl object-cover"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#efe6d8] rounded-3xl -z-10" />
        </div>
      </section>

      {/* ================= BRAND JOURNEY ================= */}
      <section className="py-28 bg-[#fafafa] px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
              alt="Premium chocolates and gifting"
              width={600}
              height={500}
              className="rounded-3xl shadow-2xl object-cover"
            />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1f2933] rounded-3xl -z-10" />
          </div>

          <div>
            <span className="text-sm uppercase tracking-widest text-gray-500">
              Growth
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-6">
              From a Kitchen to a Brand
            </h2>
            <p className="text-gray-700 leading-loose text-lg">
              In 2025, FUSIONN expanded through the acquisition of
              <strong> RENEE BAKERS</strong>—a respected brand known for premium
              corporate chocolates and professionally trained chefs.
              <br /><br />
              This milestone transformed FUSIONN into a unified brand blending
              food, gifting, craftsmanship, and experience.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20">
          What We Do Today
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="group p-12 rounded-3xl border bg-white hover:bg-[#1f2933] hover:text-white transition-all duration-300 shadow-sm hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-300">
                {s.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-32 bg-[#1f2933] text-white text-center px-6">
        <p className="max-w-4xl mx-auto text-2xl md:text-3xl italic leading-relaxed">
          “Where tradition melts into innovation, and our passion becomes
          customer service.”
        </p>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-28 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="p-14 rounded-3xl border hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            To become a brand people trust, love, and remember—by turning food
            and gifting into moments that truly matter.
          </p>
        </div>

        <div className="p-14 rounded-3xl border hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            To serve with purpose, create with care, and build experiences that
            connect hearts and lives.
          </p>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-28 bg-[#fafafa] px-6">
        <h2 className="text-4xl font-bold text-center mb-20">
          The 4 Pillars of FUSIONN
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-10 bg-white rounded-3xl shadow-sm hover:shadow-2xl transition"
            >
              <div className="text-3xl mb-4">{v.icon}</div>
              <h4 className="text-xl font-semibold mb-3">{v.title}</h4>
              <p className="text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="py-28 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-20">Leadership Team</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {leaders.map((l, i) => (
            <div
              key={i}
              className="p-12 rounded-3xl border hover:shadow-2xl transition"
            >
              <h4 className="text-xl font-semibold">{l.name}</h4>
              <p className="mt-2 text-gray-600">{l.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="py-36 bg-black text-white text-center px-6">
        <p className="text-4xl font-semibold mb-6">
          FUSIONN is more than food. <br /> More than gifting.
        </p>
        <p className="text-xl text-gray-400">
          It’s a promise—crafted with heart, served with purpose.
        </p>
      </section>
    </main>
  );
}
