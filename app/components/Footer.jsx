import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='relative overflow-hidden'>
      {/* Background (Creamy Texture) */}
      <div className='absolute inset-0 bg-[#F2AE84]'></div>

      {/* Soft Cookie Shadows */}
      <div className='absolute top-[-10%] left-[10%] w-[260px] h-[260px] bg-[#CFA574]/10 blur-[150px] rounded-full'></div>
      <div className='absolute bottom-[-15%] right-[15%] w-[320px] h-80 bg-[#B8834A]/10 blur-[160px] rounded-full'></div>

      {/* Content */}
      <div className='relative z-10 pt-20 pb-14 text-[#4C2A1A]'>
        {/* Logo + CTA */}
        <div className='container mx-auto px-6 lg:px-12 text-center mb-16'>
          <Image
            src='/images/logo.png'
            alt='Fusion Bakery Logo'
            width={160}
            height={80}
            className='mx-auto mb-6'
          />

          <Link
            href='/bulk-orders'
            className='inline-block bg-[#4C2A1A] hover:bg-[#3a2015] transition-all text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg'
          >
            🍪 Bulk Orders & Corporate Hampers →
          </Link>
        </div>

        {/* Footer Columns */}
        <div className='container mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12'>
          {[
            {
              title: 'Company',
              links: [
                ['Careers', '/careers'],
                ['About Us', '/about'],
                ['Blogs & News', '/blog'],
                ['Community', '/community'],
              ],
            },
            {
              title: 'Corporate Gifting',
              links: [
                ['Corporate Gifting', '/corporate-gifting'],
                ['Bulk Orders', '/bulk-orders'],
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
            <div
              key={i}
              className='bg-[#ffffff] border border-[#E4D7C3] shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-2xl p-6 hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] transition-all'
            >
              <h3 className='font-bold text-2xl mb-4 text-[#4C2A1A]'>
                {col.title}
              </h3>
              <ul className='space-y-3 text-[#5B3A29] text-lg'>
                {col.links.map(([name, href]) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className='hover:text-[#AD6B35] transition-colors'
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className='container mx-auto px-6 lg:px-12 mt-16 text-center'>
          <p className='text-lg font-medium mb-4 text-[#5B3A29]'>
            Follow us for sweet treats & updates 
          </p>

          <div className='flex justify-center gap-8 text-3xl text-[#4C2A1A]'>
            {[FaInstagram, FaFacebookF, FaYoutube, FaTiktok].map((Icon, i) => (
              <Link
                key={i}
                href='#'
                className='hover:text-[#AD6B35] transition-colors hover:scale-110'
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className='border-t border-[#E4D7C3] mt-14'></div>

        <div className='container mx-auto px-6 lg:px-12 mt-8 flex flex-wrap gap-6 text-[#6B4A3A] text-[15px]'>
          {[
            ['Sitemap', '/sitemap'],
            ['Privacy Policy', '/privacy-policy'],
            ['Terms & Conditions', '/terms'],
            ['Promotional Policies', '/promotions'],
          ].map(([name, link]) => (
            <Link
              key={name}
              href={link}
              className='hover:text-[#AD6B35] transition-colors'
            >
              {name}
            </Link>
          ))}

          <span className='ml-auto'>© Fusion {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
