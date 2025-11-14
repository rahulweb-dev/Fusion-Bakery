import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer.webp" // <-- ADD your footer bg image here
          alt="Footer background"
          fill
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Decorative Gradient Bubbles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#d15d5d]/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#a92727]/40 blur-[140px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 pt-20 pb-10">

        {/* 3-Column Footer Links */}
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">

          {/* Column 1 */}
          <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 shadow-xl">
            <h3 className="font-bold text-2xl mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-white/90 text-lg">
              <li className="hover:text-pink-300 transition">Careers</li>
              <li className="hover:text-pink-300 transition">About us</li>
              <li className="hover:text-pink-300 transition">Blogs & news</li>
              <li className="hover:text-pink-300 transition">Community</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 shadow-xl">
            <h3 className="font-bold text-2xl mb-4 text-white">Bakery</h3>
            <ul className="space-y-3 text-white/90 text-lg">
              <li className="hover:text-pink-300 transition">Our products</li>
              <li className="hover:text-pink-300 transition">Locations</li>
              <li className="hover:text-pink-300 transition">Recipes</li>
              <li className="hover:text-pink-300 transition">Franchising</li>
              <li className="hover:text-pink-300 transition">Fundraising</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 shadow-xl">
            <h3 className="font-bold text-2xl mb-4 text-white">Support</h3>
            <ul className="space-y-3 text-white/90 text-lg">
              <li className="hover:text-pink-300 transition">FAQs</li>
              <li className="hover:text-pink-300 transition">Contact us</li>
              <li className="hover:text-pink-300 transition">Dough Getters</li>
              <li className="hover:text-pink-300 transition">Security awareness</li>
            </ul>
          </div>

        </div>

        {/* Social Icons */}
        <div className="container mx-auto px-6 lg:px-12 mt-16">
          <div className="flex items-center gap-6 text-3xl">
            <span className="text-xl font-medium text-white/80">Follow us</span>

            <FaInstagram className="cursor-pointer hover:text-pink-300 transition" />
            <FaFacebookF className="cursor-pointer hover:text-pink-300 transition" />
            <FaYoutube className="cursor-pointer hover:text-pink-300 transition" />
            <FaTiktok className="cursor-pointer hover:text-pink-300 transition" />
          </div>
        </div>

        {/* Bottom Links */}
        <div className="container mx-auto px-6 lg:px-12 mt-14 flex flex-wrap gap-6 text-white/70 text-sm">
          <span className="hover:text-white transition cursor-pointer">Sitemap</span>
          <span className="hover:text-white transition cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white transition cursor-pointer">Terms & Conditions</span>
          <span className="hover:text-white transition cursor-pointer">Promotional Terms & Conditions</span>

          <span className="ml-auto">
            © Fusion Bakery 2025
          </span>
        </div>

      </div>

    </footer>
  );
}
