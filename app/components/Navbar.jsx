'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSelect } from '../context/SelectContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ModalSelect = dynamic(() => import('./ModalSelect'), { ssr: false });

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openSelectState, setOpenSelectState] = useState(false);

  const { select } = useSelect();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const wishlistCount = wishlist.length;

  // 🔐 Force selection before entering product/food pages
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const saved = localStorage.getItem('selectedState');
    if (!saved && (pathname === '/food' || pathname === '/products')) {
      setOpenSelectState(true);
    }
  }, [pathname]);

  // 📌 Active link highlight
  const isActive = (href) => pathname === href;

  // 📌 Hide Navigation on scroll
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => {
      setIsVisible(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menu = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    select === 'Cloud Kitchen'
      ? { name: 'Food', href: '/food' }
      : { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* TOP NAV */}
      <nav className={`fixed top-4 left-0 z-[100] w-full flex justify-center px-2 sm:px-4 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="bg-white shadow-xl border border-gray-200 rounded-full backdrop-blur-md flex items-center w-full max-w-[1350px] py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 lg:px-10">

          {/* LOGO */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image src="/images/logo.png" alt="Logo" width={120} height={60} className="cursor-pointer w-20 xs:w-24 sm:w-28 md:w-32 h-auto" />
          </Link>

          {/* MENU */}
          <ul className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-10 grow justify-center font-medium text-gray-700 text-[14px] lg:text-[16px]">
            {menu.map((item) => (
              <li key={item.name} className="relative">
                <Link href={item.href} className={`${isActive(item.href) ? 'text-[#B55328] font-semibold' : 'hover:text-[#B55328]'} transition`}>
                  {item.name}
                </Link>
                {isActive(item.href) && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#B55328] h-[3px] w-5 rounded-full"></span>}
              </li>
            ))}
          </ul>

          {/* ACTION ICONS */}
          <div className="ml-auto flex items-center gap-2 sm:gap-3 md:gap-4">

            {/* SELECT MODAL BUTTON */}
            <button
              onClick={() => setOpenSelectState(true)}
              className="bg-[#4C2A1A] text-white font-semibold rounded-xl shadow px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-[13px] md:text-[15px] whitespace-nowrap hover:bg-[#331a10]"
            >
              {select === 'Cloud Kitchen' ? '🍽️ Cloud Kitchen' : '🎁 Corporate Gifting'}
            </button>

            {/* WISHLIST */}
            <Link href="/wishlist" className="relative text-[20px] sm:text-[22px] md:text-[25px]">
              🤍
              {wishlistCount > 0 && <span className="absolute -top-1 -right-2 text-[9px] bg-red-600 text-white px-[5px] rounded-full">{wishlistCount}</span>}
            </Link>

            {/* CART */}
            <Link href="/cart" className="relative text-[20px] sm:text-[22px] md:text-[25px]">
              🛍️
              {cartCount > 0 && <span className="absolute -top-1 -right-2 text-[9px] bg-black text-white px-[5px] rounded-full">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </nav>

      {/* MODAL */}
      {openSelectState && (
        <ModalSelect openSelectState={openSelectState} setOpenSelectState={setOpenSelectState} />
      )}

      {/* BOTTOM NAV (Mobile Only) */}
      <div className="fixed bottom-0 left-0 w-full bg-[#FFF9F2] border-t border-[#E4D7C3] shadow-[0_-3px_10px_rgba(0,0,0,0.08)] z-[99] flex justify-around py-2 sm:py-2.5 md:hidden">
        <style>{`.active-tab { color:#4C2A1A !important; font-weight:600; transform:scale(1.1); }`}</style>

        <Link href="/" className={`flex flex-col items-center text-[12px] xs:text-[13px] transition-all ${isActive('/') ? 'active-tab' : 'text-[#000000a3]'}`}>
          <span className="text-[22px] xs:text-[24px]">🏠</span> Home
        </Link>

        <Link href={select === 'Cloud Kitchen' ? '/food' : '/products'} className={`flex flex-col items-center text-[12px] xs:text-[13px] transition-all ${isActive(select === 'Cloud Kitchen' ? '/food' : '/products') ? 'active-tab' : 'text-[#000000a3]'}`}>
          <span className="text-[22px] xs:text-[24px]">{select === 'Cloud Kitchen' ? '🍽️' : '🧁'}</span> {select === 'Cloud Kitchen' ? 'Food' : 'Products'}
        </Link>

        <Link href="/wishlist" className={`flex flex-col items-center text-[12px] xs:text-[13px] transition-all ${isActive('/wishlist') ? 'active-tab' : 'text-[#000000a3]'}`}>
          <span className="text-[22px] xs:text-[24px]">🤍</span> Wishlist
        </Link>

        <Link href="/profile" className={`flex flex-col items-center text-[12px] xs:text-[13px] transition-all ${isActive('/profile') ? 'active-tab' : 'text-[#000000a3]'}`}>
          <span className="text-[22px] xs:text-[24px]">👤</span> Profile
        </Link>
      </div>
    </>
  );
}
