'use client';
import { IoIosHome } from "react-icons/io";
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSelect } from '../context/SelectContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import AutoScrollText from '../cloudComponents/AutoScrollText';
import { AiOutlineHome } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { MdCategory } from "react-icons/md";

const ModalSelect = dynamic(() => import('./ModalSelect'), { ssr: false });

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openSelectState, setOpenSelectState] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  // null | 'food' | 'gifts' | 'chocolates'

  const { select } = useSelect();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  /* ===========================
     FORCE SELECTION MODAL
  ============================ */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const saved = localStorage.getItem('selectedState');
    if (!saved && (pathname === '/food' || pathname === '/products')) {
      setOpenSelectState(true);
      document.body.style.overflow = 'hidden';
    }
  }, [pathname]);

  /* ===========================
     NAVBAR SCROLL BEHAVIOR
  ============================ */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 40) {
        setIsVisible(true);
      } else if (currentY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  /* ===========================
     CATEGORY BUTTONS
  ============================ */
  const categories = [
    { id: 'kitchen', label: 'Cloud Kitchen', href: '/cloud-kitchen' },
    { id: 'gifts', label: 'Corporate Gifts', href: '/corporate-gifts' },
    { id: 'chocolates', label: 'Chocolates', href: '/chocolates' },
  ].map(c => ({ ...c, isActive: pathname.startsWith(c.href) }));

  /* ===========================
     MENUS (DEFINE FIRST!)
  ============================ */
  const cloudKitchenMenu = [
    { name: 'Menu', href: '/cloud-kitchen/menu' },
    { name: 'Combos', href: '/cloud-kitchen/combos' },
    { name: 'Subscriptions', href: '/cloud-kitchen/subscriptions' },
  ];

  const giftsMenu = [
    { name: 'Gift Hampers', href: '/corporate-gifts' },
    { name: 'Gifts', href: '/corporate-gifts/gifts' },
    { name: 'Custom Branding', href: '/corporate-gifts/custom' },
  ];

  const chocolatesMenu = [
    { name: 'All Chocolates', href: '/chocolates' },
    { name: 'Gift Boxes', href: '/chocolates/gift-boxes' },
    { name: 'Premium Range', href: '/chocolates/premium' },
  ];

  const defaultMenu = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    // select === 'Cloud Kitchen'
    //   ? { name: 'Food', href: '/food' }
    //   : { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  const mobileMenus = {
    food: [
      { name: 'Menu', href: '/cloud-kitchen/menu' },
      { name: 'Combos', href: '/food/combos' },
      { name: 'Subscriptions', href: '/food/subscriptions' },
    ],
    gifts: [
      { name: 'Gift Hampers', href: '/corporate-gifts' },
      { name: 'Bulk Orders', href: '/corporate-gifts/bulk' },
      { name: 'Custom Branding', href: '/corporate-gifts/custom' },
    ],
    chocolates: [
      { name: 'All Chocolates', href: '/chocolates' },
      { name: 'Gift Boxes', href: '/chocolates/gifts' },
      { name: 'Premium Range', href: '/chocolates/premium' },
    ],
  };



  /* ===========================
     PICK MENU BY ROUTE
  ============================ */
  const sectionMenu =
    pathname.startsWith('/cloud-kitchen') || pathname.startsWith('/food')
      ? cloudKitchenMenu
      : pathname.startsWith('/corporate-gifts')
        ? giftsMenu
        : pathname.startsWith('/chocolates')
          ? chocolatesMenu
          : defaultMenu;

  return (
    <>
      {/* ===== TOP SCROLL TEXT ===== */}
      <AutoScrollText />

      {/* ===== NAVBAR ===== */}
      <nav
        className={`fixed top-[44px] left-0 z-[100] w-full flex justify-center
        transition-all duration-300 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <div
          className="bg-white/85 backdrop-blur-xl
          border border-[#E8DDD4]
          shadow-[0_10px_35px_rgba(0,0,0,0.08)]
          flex items-center w-full max-w-full
          h-[114px] px-4 sm:px-6 md:px-8 gap-4"
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center h-full shrink-0">
            <Image src="/images/logo.png" alt="Logo"
              width={110} height={40}
              className="w-24 sm:w-28 md:w-52 h-auto" />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 mx-auto
            font-medium text-gray-700 text-sm lg:text-base">
            {sectionMenu.map(item => (
              <li key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={`${pathname === item.href
                    ? 'text-[#B55328] font-semibold'
                    : 'hover:text-[#B55328]'} transition`}
                >
                  {item.name}
                </Link>

                {pathname === item.href && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2
                    bg-[#B55328] h-[2px] w-6 rounded-full opacity-80" />
                )}
              </li>
            ))}
          </ul>

          {/* CATEGORY BUTTONS */}
          <div className="hidden lg:flex ml-auto">
            <div className="flex gap-2 p-1.5
              bg-[#FAF5F0]/80 backdrop-blur
              rounded-2xl border border-[#E8DDD4]">
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

      <div className="md:hidden fixed bottom-0 left-0 w-full z-[99]">

        {/* EXPANDED MENU */}
        {mobileSection && (
          <div className="bg-white border-t border-[#E4D7C3]
      shadow-[0_-10px_25px_rgba(0,0,0,.15)]
      rounded-t-3xl overflow-hidden">

            {/* HEADER */}
            <div className="flex items-center gap-3 px-4 py-4 border-b">
              <button
                onClick={() => setMobileSection(null)}
                className="text-xl"
              >
                <IoIosHome />
              </button>

              <span className="font-semibold text-base capitalize">
                {mobileSection === 'food'
                  ? 'Food'
                  : mobileSection === 'gifts'
                    ? 'Instamart'
                    : 'Categories'}
              </span>
            </div>

            {/* MENU ITEMS */}
            <div className="divide-y max-h-[260px] overflow-y-auto">
              {mobileMenus[mobileSection].map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileSection(null)}
                  className="block px-5 py-4 text-sm font-medium hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* MAIN BOTTOM BAR */}
        <div className="bg-[#FFF9F2]/95 backdrop-blur-xl
    border-t border-[#E4D7C3]
    shadow-[0_-6px_20px_rgba(0,0,0,.12)]
    flex justify-around py-3">

          <MobileMainTab href="/" icon=<IoIosHome /> label="Home" />

          <button onClick={() => setMobileSection('food')}>
            <MobileMainTab
              icon={<BiFoodMenu size={22} />}
              label="Cloud Kitchen"
            />
          </button>

          <button onClick={() => setMobileSection('gifts')}>
            <MobileMainTab
              icon={<BsBag size={22} />}
              label="Corporate Gifts"
            />
          </button>

          <button onClick={() => setMobileSection('chocolates')}>
            <MobileMainTab
              icon={<MdCategory size={22} />}
              label="Chocolates"
            />
          </button>
        </div>
      </div>



    </>
  );
}

/* ===========================
   SUB COMPONENTS
=========================== */

function SegmentButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4  py-2 rounded-xl text-sm font-semibold transition-all
        ${active
          ? 'text-white bg-[#4C2A1A] shadow-md'
          : 'text-[#5D4037] hover:bg-[#D4A574]/20'}`}
    >
      {label}
    </button>
  );
}

function MobileMainTab({ href, icon, label }) {
  const content = (
    <div className="flex flex-col items-center text-xs text-gray-700">
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

