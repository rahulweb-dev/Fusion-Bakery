"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menu = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', dropdown: true },
    { name: 'Custom Orders', dropdown: true },
    { name: 'Customised Cake', href: '/custom-cake' },
    { name: 'Contact', dropdown: true },
  ];

  // --------------------------
  // HIDE ON SCROLL DOWN
  // SHOW ON SCROLL UP
  // --------------------------
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // hide navbar
      } else {
        setIsVisible(true); // show navbar
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* NAVBAR WRAPPER */}
      <nav
        className={`
          w-full flex justify-center fixed top-4 left-0 z-50 px-3 sm:px-0
          transition-all duration-300
          ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        <div
          className="
            bg-white shadow-lg border border-gray-200 
            rounded-full 
            flex items-center 
            py-3 px-5 sm:px-8 md:px-10 
            gap-3 sm:gap-6 md:gap-10 
            backdrop-blur-sm
            max-w-6xl w-full sm:w-[92%] md:w-[80%]
            transition-all duration-300
          "
        >
          {/* LOGO */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="KS Bakers"
              width={110}
              height={40}
              className="cursor-pointer w-24 md:w-28"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700 flex-grow justify-center">
            {menu.map((item) => (
              <li key={item.name} className="relative">
                <button
                  onClick={() => setActive(item.name)}
                  className={`flex items-center gap-1 transition ${
                    active === item.name
                      ? "text-[#B55328] font-semibold"
                      : "hover:text-[#B55328]"
                  }`}
                >
                  {item.name}
                  {item.dropdown && <span className="text-sm">▾</span>}
                </button>

                {active === item.name && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] w-8 bg-[#B55328] rounded-full"></span>
                )}
              </li>
            ))}
          </ul>

          {/* SHOP BUTTON */}
          <Link
            href="/shop"
            className="
              hidden md:flex items-center gap-2 
              bg-[#B55328] hover:bg-[#9c431f] transition
              text-white px-6 py-2 rounded-xl font-semibold
            "
          >
            <span className="text-sm">♡</span> Shop
          </Link>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden text-3xl text-[#B55328] ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className="
            fixed top-[90px] left-0 w-full z-40
            bg-white shadow-lg border-t border-gray-200 
            p-6 space-y-5 animate-slideDown
          "
        >
          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActive(item.name);
                setMobileOpen(false);
              }}
              className="
                block w-full text-left text-lg text-gray-700 
                font-medium flex items-center justify-between
                py-2
              "
            >
              <span>{item.name}</span>
              {item.dropdown && <span className="text-sm">▾</span>}
            </button>
          ))}

          {/* Mobile Shop Button */}
          <Link
            href="/shop"
            className="
              block bg-[#B55328] text-white text-center 
              py-3 rounded-xl font-semibold mt-4
            "
            onClick={() => setMobileOpen(false)}
          >
            ♡ Shop
          </Link>
        </div>
      )}

      {/* Animation */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease-out;
        }
      `}</style>
    </>
  );
}
