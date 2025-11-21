'use client';
import { useSelect } from '../context/SelectContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar({ openCart }) {
  const [active, setActive] = useState('Home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { select, updateSelect } = useSelect();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // MENU LOGIC
  const menu = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    select === 'Cloud Kitchen'
      ? { name: 'Food', href: '/food' }
      : { name: 'Products', href: '/products' },
    { name: 'Custom Orders', href: '/custom-orders' },
    { name: 'Customised Cake', href: '/custom-cake' },
    { name: 'Contact', href: '/contact' },
  ];

  // Navbar Hide on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-4 left-0 z-50 w-full flex justify-center px-3 sm:px-4 transition-all duration-300 ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
      >
        <div className='bg-white shadow-lg border border-gray-200 rounded-full backdrop-blur-md flex items-center w-full max-w-[1400px] py-3 px-5 md:px-8 lg:px-10'>
          {/* LOGO */}
          <Link href='/' className='shrink-0'>
            <Image
              src='/images/logo.png'
              alt='KS Bakers'
              width={120}
              height={50}
              className='cursor-pointer w-24 md:w-28'
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className='hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 grow justify-center font-medium text-gray-700 text-[14px] lg:text-[16px]'>
            {menu.map((item) => (
              <li key={item.name} className='relative'>
                <Link
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className={`flex items-center gap-1 transition ${
                    active === item.name
                      ? 'text-[#B55328] font-semibold'
                      : 'hover:text-[#B55328]'
                  }`}
                >
                  {item.name}
                </Link>

                {active === item.name && (
                  <span className='absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] w-7 bg-[#B55328] rounded-full'></span>
                )}
              </li>
            ))}
          </ul>

          {/* RIGHT ICONS + SELECT */}
          <div className='hidden md:flex items-center gap-4 ml-auto'>
            {/* SELECT */}
            <div className='bg-[#6A1B9A] hover:bg-[#4A1070] text-white font-semibold rounded-xl shadow-md px-3 lg:px-5 py-2 transition whitespace-nowrap'>
              <select
                value={select}
                onChange={(e) => updateSelect(e.target.value)}
                className='bg-transparent outline-none cursor-pointer'
              >
                <option value='Chocolate'>Chocolate</option>
                <option value='Cloud Kitchen'>Cloud Kitchen</option>
              </select>
            </div>

            {/* ❤️ WISHLIST */}
            <Link href='/wishlist' className='relative text-xl cursor-pointer'>
              ❤️
              {wishlist.length > 0 && (
                <span className='absolute -top-2 -right-2 text-[10px] bg-red-500 text-white px-1.5 rounded-full'>
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* 🛍 CART */}
            <Link
              href='/cart'
              onClick={openCart}
              className='relative text-xl cursor-pointer'
            >
              🛍️
              {cartCount > 0 && (
                <span className='absolute -top-2 -right-2 text-[10px] bg-black text-white px-1.5 rounded-full'>
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className='md:hidden text-3xl text-[#B55328] ml-auto'
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <>
          <div
            className='fixed inset-0 bg-black/60 backdrop-blur-md z-40 animate-fadeIn'
            onClick={() => setMobileOpen(false)}
          ></div>

          <div className='fixed top-0 right-0 h-full w-[85%] sm:w-[60%] bg-white shadow-xl rounded-l-[40px] p-7 pt-14 z-50 animate-slideInPremium flex flex-col'>
            {/* HEADER */}
            <div className='flex items-center justify-between mb-10'>
              <Image
                src='/images/logo.png'
                alt='Logo'
                width={120}
                height={50}
              />

              <button
                onClick={() => setMobileOpen(false)}
                className='w-12 h-12 text-3xl bg-white/80 rounded-2xl border border-gray-200 shadow text-[#B55328]'
              >
                ✕
              </button>
            </div>

            {/* MOBILE SELECT */}
            <div className='block w-full py-4 mb-5 rounded-2xl bg-[#6A1B9A] hover:bg-[#4A1070] text-white text-lg text-center font-semibold'>
              <select
                value={select}
                onChange={(e) => updateSelect(e.target.value)}
                className='bg-transparent outline-none text-center cursor-pointer'
              >
                <option value='Chocolate'>Chocolate</option>
                <option value='Cloud Kitchen'>Cloud Kitchen</option>
              </select>
            </div>

            {/* MENU ITEMS */}
            <ul className='space-y-5 text-lg font-medium text-gray-900 flex-1 overflow-y-auto pb-10'>
              {menu.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActive(item.name);
                      setMobileOpen(false);
                    }}
                    className='block px-5 py-4 rounded-2xl bg-white shadow border border-gray-200'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* ❤️ + 🛍 ICONS IN MOBILE */}
            <div className='flex items-center justify-center gap-7 text-2xl my-7'>
              <Link
                href='/wishlist'
                onClick={() => setMobileOpen(false)}
                className='relative'
              >
                ❤️
                {wishlist.length > 0 && (
                  <span className='absolute -top-2 -right-2 text-[10px] bg-red-500 text-white px-1.5 rounded-full'>
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link
                href='/cart'
                onClick={() => {
                  setMobileOpen(false);
                  openCart();
                }}
                className='relative'
              >
                🛍️
                {cartCount > 0 && (
                  <span className='absolute -top-2 -right-2 text-[10px] bg-black text-white px-1.5 rounded-full'>
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* ANIMATIONS */}
          <style>{`
            @keyframes slideInPremium {
              from { transform: translateX(100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-slideInPremium { animation: slideInPremium 0.35s ease-out forwards; }
            .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
          `}</style>
        </>
      )}
    </>
  );
}
