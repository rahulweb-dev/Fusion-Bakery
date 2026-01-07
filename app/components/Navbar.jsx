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

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const wishlistCount = wishlist.length;

  // Force selection before entering food/products
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('selectedState');

    if (!saved && (pathname === '/food' || pathname === '/products')) {
      setTimeout(() => {
        setOpenSelectState(true);
        document.body.style.overflow = 'hidden';
      }, 0);
    }
  }, [pathname]);

  const isActive = (href) => pathname === href;

  // Hide navbar on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsVisible(y < 20 || y < lastScrollY);
      setLastScrollY(y);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Category buttons
  const categories = [
    { id: 'kitchen', label: 'Cloud Kitchen', href: '/cloud-kitchen' },
    { id: 'gifts', label: 'Corporate Gifts', href: '/corporate-gifts' },
    { id: 'chocolates', label: 'Chocolates', href: '/chocolates' },
  ].map(c => ({ ...c, isActive: pathname.startsWith(c.href) }));

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
      {/* ===== TOP NAVBAR ===== */}
      <nav className={`fixed top-0 left-0 z-[100] w-full flex justify-center
        transition-all duration-300
        ${isVisible ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0'}`}>

        <div className="bg-white shadow-lg border border-gray-200 backdrop-blur-md
          flex items-center w-full max-w-[1440px]
          py-2.5 sm:py-3 px-3 sm:px-5 md:px-8 gap-3">

          {/* LOGO */}
          <Link href="/" className="shrink-0">
            <Image src="/images/logo.png" alt="Logo"
              width={110} height={40}
              className="w-24 sm:w-28 md:w-32 h-auto" />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-5 lg:gap-8 mx-auto
            font-medium text-gray-700 text-sm lg:text-base">
            {menu.map(item => (
              <li key={item.name} className="relative">
                <Link href={item.href}
                  className={`${isActive(item.href)
                    ? 'text-[#B55328] font-semibold'
                    : 'hover:text-[#B55328]'} transition`}>
                  {item.name}
                </Link>

                {isActive(item.href) && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2
                    bg-[#B55328] h-[3px] w-5 rounded-full"/>
                )}
              </li>
            ))}
          </ul>

          {/* CATEGORY BUTTONS (TABLET + DESKTOP) */}
          <div className="hidden lg:flex flex-wrap gap-2 ml-auto">
            <div className="flex flex-wrap gap-2 p-1
              bg-[#FAF5F0] rounded-2xl border border-[#E8DDD4]">
              {categories.map(cat => (
                <SegmentButton
                  key={cat.id}
                  label={cat.label}
                  active={cat.isActive}
                  onClick={() => router.push(cat.href)}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* MODAL */}
      <ModalSelect
        openSelectState={openSelectState}
        setOpenSelectState={setOpenSelectState}
      />

      {/* ===== MOBILE BOTTOM NAV ===== */}
      <div className="md:hidden fixed bottom-0 left-0 w-full
        bg-[#FFF9F2] border-t border-[#E4D7C3]
        shadow-[0_-4px_12px_rgba(0,0,0,.08)]
        z-[99] flex justify-around gap-1 py-2.5">

        <style>{`.active-tab{color:#4C2A1A;font-weight:700;transform:scale(1.08);}`}</style>

        <MobileTab href="/" active={isActive('/')}>🏠 Home</MobileTab>

        <MobileTab href="/cloud-kitchen" active={pathname.startsWith('/cloud-kitchen')}>
          🥘 Kitchen
        </MobileTab>

        <MobileTab href="/corporate-gifts" active={pathname.startsWith('/corporate-gifts')}>
          🎁 Gifts
        </MobileTab>

        <MobileTab href="/chocolates" active={pathname.startsWith('/chocolates')}>
          🍫 Chocolates
        </MobileTab>
      </div>
    </>
  );
}

/* ---------- COMPONENTS ---------- */

function SegmentButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-sm font-semibold
      transition-all duration-300
      ${active
        ? 'text-white bg-[#4C2A1A] shadow'
        : 'text-[#5D4037] hover:text-[#4C2A1A] bg-[#D4A574]/10'}`}>
      {label}
    </button>
  );
}

function MobileTab({ href, active, children }) {
  return (
    <Link href={href}
      className={`flex flex-col items-center text-xs
      ${active ? 'active-tab' : 'text-[#000000a8]'}`}>
      <span className="text-[22px] leading-none">
        {children.toString().split(' ')[0]}
      </span>
      <span>{children.toString().split(' ').slice(1).join(' ')}</span>
    </Link>
  );
}
