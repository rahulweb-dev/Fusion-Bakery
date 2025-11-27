"use client";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi"; // 👈 Icons

export default function ContactPage() {
  return (
    <section className="min-h-screen  pb-10">

      {/* HEADER Section */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-extrabold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-gray-700 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Logos */}
      <div className="flex justify-center flex-wrap gap-10 pb-10">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="opacity-60">
            <Image src="/logo.png" width={100} height={40} alt="logo" />
          </div>
        ))}
      </div>

      {/* FORM + NEWSLETTER */}
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-10 pb-16">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Newsletter */}
        <div className="bg-[#E6C7A4] backdrop-blur-md p-7 rounded-3xl text-white flex flex-col justify-between">
          <h3 className="text-xl font-bold">Our Newsletters</h3>
          <p className="text-sm mt-2">
            Subscribe to get latest offers & updates
          </p>
          <input
            placeholder="Enter your email"
            className="w-full p-3 rounded-full bg-white/90 text-gray-800 mt-5 outline-none"
          />
          <button className="bg-black hover:bg-gray-800 mt-4 py-2 rounded-full font-semibold transition-all">
            Subscribe
          </button>
        </div>
      </div>

      {/* CONTACT INFO BOXES */}
      <div className="max-w-6xl mx-auto px-5 grid sm:grid-cols-3 gap-6 pb-16">

        {/* Phone */}
        <div className="bg-white p-7 rounded-3xl text-center shadow-md group hover:shadow-lg transition-all">
          <div className="flex justify-center">
            <FiPhoneCall className="text-[#5b837f] text-3xl mb-3" />
          </div>
          <p className="font-bold text-gray-700">(+876) 765 665</p>
          <p className="text-xs mt-2 text-gray-500">24/7 Inquiry Support</p>
        </div>

        {/* Email */}
        <div className="bg-white p-7 rounded-3xl text-center shadow-md group hover:shadow-lg transition-all">
          <div className="flex justify-center">
            <FiMail className="text-[#5b837f] text-3xl mb-3" />
          </div>
          <p className="font-bold text-gray-700">mail@influenca.id</p>
          <p className="text-xs mt-2 text-gray-500">Write to us anytime</p>
        </div>

        {/* Location */}
        <div className="bg-white p-7 rounded-3xl text-center shadow-md group hover:shadow-lg transition-all">
          <div className="flex justify-center">
            <FiMapPin className="text-[#5b837f] text-3xl mb-3" />
          </div>
          <p className="font-bold text-gray-700">Somajiguda, Hyderabad</p>
          <p className="text-xs mt-2 text-gray-500">Visit our corporate office</p>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="max-w-6xl mx-auto px-5 pb-20">
        <iframe
          className="rounded-3xl w-full h-[350px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31105.085784322386!2d78.450847!3d17.426498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973a9152ef5d%3A0x3c601cfc8ef878d0!2sSomajiguda%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1703589442249!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </section>
  );
}
