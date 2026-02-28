import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#281D15] text-white font-[Inter]">

      {/* Soft lights */}
      <div className="absolute -top-10 left-10 w-36 h-36 bg-[#A77452]/20 blur-[90px] rounded-full"></div>
      <div className="absolute -bottom-10 right-14 w-40 h-40 bg-[#C18A62]/20 blur-[110px] rounded-full"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 lg:px-10 py-10">

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[
            {
              title: 'Company',
              links: [
                ['About Us', '/about'],
                ['Careers', '/careers'],
                ['Blogs & News', '/blog'],
                ['Community', '/community'],
              ],
            },
            {
              title: 'Corporate Gifting',
              links: [
                ['Corporate Gifting', '/corporate-gifting'],
                ['Gifts', '/corporate-gifting/gifts'],
                ['Festive Hampers', '/festive-hampers'],
                ['Return Gifts', '/return-gifts'],
                ['Custom Gift Boxes', '/custom-boxes'],
              ],
            },
            {
              title: 'Support',
              links: [
                ['FAQs', '/faqs'],
                ['Contact Us', '/contact'],
                ['Dough Getters', '/dough-getters'],
                ['Security Awareness', '/security'],
              ],
            },
          ].map((col, i) => (
            <div key={i}>
              <h3 className="font-bold text-[19px] mb-3 tracking-wide">{col.title}</h3>

              <ul className="space-y-[6px] text-[15px]">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="hover:text-[#8B5B3E] transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="text-center mb-8">
          <p className="text-[15px] font-medium mb-2">
            Follow us for sweet treats & updates
          </p>

          <div className="flex justify-center gap-6 text-[20px]">
            {[FaInstagram, FaFacebookF, FaYoutube, FaTiktok].map((Icon, i) => (
              <Link
                href="#"
                key={i}
                className="hover:text-[#8B5B3E] hover:scale-105 transition-all"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C5A482] pt-5 flex flex-wrap items-center gap-4 text-[13.5px] text-white">
          {[
            ['Sitemap', '/sitemap'],
            ['Privacy Policy', '/privacy-policy'],
            ['Terms & Conditions', '/terms'],
            ['Promotional Policies', '/promotions'],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="hover:text-[#8B5B3E] transition-colors"
            >
              {label}
            </Link>
          ))}

          <span className="ml-auto">© Fusion {new Date().getFullYear()}</span>
        </div>

        {/* Powered by Broaddcast - RIGHT SIDE */}
        <div className="mt-4 flex justify-end items-center gap-2 opacity-90 hover:opacity-100 transition">
          <span className="text-[14px] font-medium">Powered by</span>
          <Link
            href="https://www.broaddcast.com"
            target="_blank"
            className="flex items-center"
          >
            <Image
              src="/images/BroaddCast Updated Logo 2022-01.png"
              alt="Broaddcast Logo"
              width={120}
              height={45}
              className="object-contain"
            />
          </Link>
        </div>

      </div>
    </footer>
  );
}
