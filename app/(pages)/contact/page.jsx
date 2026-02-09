"use client";
import ContactForm from "./ContactForm";
import { FiPhoneCall, FiMail, FiMapPin, FiClock } from "react-icons/fi";

export default function ContactPage() {
  return (
    <section className="bg-[#faf7f2] min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-b from-[#2b1b14] to-[#3b231a] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <span className="text-sm tracking-widest uppercase text-[#c9a24d]">
            Get in Touch
          </span>
          <h1 className="text-5xl font-extrabold tracking-wide mt-3">
            Contact Us
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-white/80 leading-relaxed">
            Reach out to us for custom cakes, chocolate gifts, corporate hampers
            or any special celebrations. We’d love to serve you.
          </p>
        </div>
      </div>

      {/* FORM + NEWSLETTER CARD */}
      <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 bg-white rounded-3xl shadow-xl p-10">

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#2b1b14] mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-br from-[#2b1b14] to-[#3b231a] text-white rounded-3xl p-8 flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-xs tracking-widest uppercase text-[#c9a24d]">
                Newsletter
              </span>
              <h3 className="text-2xl font-semibold mt-2">
                Sweet Updates 🍫
              </h3>
              <p className="text-sm text-white/80 mt-3 leading-relaxed">
                Subscribe for exclusive offers, festive hampers and
                new chocolate launches.
              </p>
            </div>

            <div className="">
              <div className=" items-center ">
                <input
                  placeholder="Enter your email address"
                  className="px-6 py-4 text-gray-800 outline-none bg-white text-sm rounded-full  shadow-inner"
                />
                <button className="bg-[#c9a24d] hover:bg-[#b8933f] text-black font-semibold px-6 py-2 rounded-full transition mt-5 items-center">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="max-w-6xl mx-auto px-6 py-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <InfoCard
          icon={<FiPhoneCall />}
          title="+91 9XXXXXXXXX"
          desc="Call or WhatsApp us"
        />
        <InfoCard
          icon={<FiMail />}
          title="renneebakers@gmail.com"
          desc="Email support"
        />
        <InfoCard
          icon={<FiMapPin />}
          title="Somajiguda, Hyderabad"
          desc="Renee Bakers & Gifting"
        />
        <InfoCard
          icon={<FiClock />}
          title="10:00 AM – 10:00 PM"
          desc="Open all days"
        />
      </div>

      {/* MAP */}
      <div className="max-w-6xl mx-auto px-6 pb-28">
        <h2 className="text-3xl font-bold text-[#2b1b14] mb-8 text-center">
          Visit Our Store
        </h2>
        <iframe
  className="rounded-3xl w-full h-[400px] shadow-xl border-0"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.691189305709!2d78.3741729!3d17.4806455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9330736b4577%3A0x9f39c77bfc6c25fb!2sRenee%20Bakers%20%26%20Gifting!5e0!3m2!1sen!2sin!4v1700000000000"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
/>

      </div>

    </section>
  );
}

/* Reusable Info Card */
function InfoCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-2xl p-7 text-center shadow-md hover:shadow-xl transition-all">
      <div className="flex justify-center text-3xl text-[#c9a24d] mb-4">
        {icon}
      </div>
      <p className="font-semibold text-[#2b1b14]">{title}</p>
      <p className="text-sm text-gray-500 mt-1">{desc}</p>
    </div>
  );
}
