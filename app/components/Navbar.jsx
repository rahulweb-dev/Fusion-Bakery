"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", dropdown: true },
    { name: "Custom Orders", dropdown: true },
    { name: "Customised Cake", href: "/custom-cake" },
    { name: "Contact", dropdown: true },
  ];

  // Hide on scroll down → Show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setIsVisible(false);
      else setIsVisible(true);
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
          fixed top-4 left-0 z-50 w-full flex justify-center 
          px-3 sm:px-4 
          transition-all duration-300
          ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        <div
          className="
            bg-white shadow-lg border border-gray-200 
            rounded-full backdrop-blur-md
            flex items-center justify-between
            w-full max-w-[1350px]
            py-3 px-5 sm:px-8 lg:px-10
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
          <ul
            className="
              hidden md:flex items-center 
              gap-5 lg:gap-8 xl:gap-10 
              text-[15px] lg:text-[16px]
              font-medium text-gray-700 
              flex-grow justify-center
            "
          >
            {menu.map((item) => (
              <li key={item.name} className="relative">
                <button
                  onClick={() => setActive(item.name)}
                  className={`transition flex items-center gap-1 ${
                    active === item.name ? "text-[#B55328] font-semibold" : "hover:text-[#B55328]"
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

          {/* DESKTOP SHOP BUTTON */}
          <Link
            href="/shop"
            className="
              hidden md:flex items-center gap-2 
              bg-[#B55328] hover:bg-[#9c431f] 
              text-white rounded-xl font-semibold
              px-5 lg:px-7 py-2 transition
            "
          >
            <span className="text-sm">♡</span> Shop
          </Link>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden text-3xl text-[#B55328]"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      {mobileOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 animate-fadeIn"
            onClick={() => setMobileOpen(false)}
          ></div>

          {/* Drawer */}
          <div
            className="
              fixed top-0 right-0 h-full 
              w-[85%] sm:w-[60%]
              bg-gradient-to-b from-white/90 to-white/75
              backdrop-blur-xl shadow-xl
              rounded-l-[40px] border-l border-white/30
              p-7 pt-14 z-50 animate-slideInPremium
              flex flex-col
            "
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between mb-10">
              <Image src="/images/logo.png" alt="Logo" width={120} height={50} />

              <button
                onClick={() => setMobileOpen(false)}
                className="
                  bg-white/70 backdrop-blur-md rounded-2xl border border-gray-200
                  w-12 h-12 flex items-center justify-center text-3xl text-[#B55328]
                  shadow hover:scale-110 transition
                "
              >
                ✕
              </button>
            </div>

            {/* Mobile Menu Items */}
            <ul className="space-y-5 text-lg font-medium text-gray-900 flex-grow">
              {menu.map((item, i) => (
                <li
                  key={item.name}
                  className="animate-fadeSlide"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <button
                    onClick={() => {
                      setActive(item.name);
                      setMobileOpen(false);
                    }}
                    className="
                      w-full flex justify-between items-center
                      px-5 py-4 rounded-2xl 
                      bg-white/80 hover:bg-white shadow-sm
                      border border-gray-100 backdrop-blur-lg
                      transition active:scale-[0.98]
                    "
                  >
                    <span
                      className={`${
                        active === item.name ? "text-[#B55328] font-semibold" : ""
                      }`}
                    >
                      {item.name}
                    </span>

                    {item.dropdown && (
                      <span className="text-[#B55328] text-xl">▾</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href="/shop"
              onClick={() => setMobileOpen(false)}
              className="
                block mt-8 bg-[#B55328] text-white text-center 
                py-4 rounded-2xl font-semibold text-lg shadow-lg
                hover:bg-[#9c431f] transition
              "
            >
              ♡ Shop Now
            </Link>
          </div>

          {/* Animations */}
          <style>{`
            @keyframes slideInPremium {
              from { transform: translateX(100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes fadeSlide {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-slideInPremium { animation: slideInPremium 0.35s ease-out forwards; }
            .animate-fadeIn { animation: fadeIn 0.25s ease-out forwards; }
            .animate-fadeSlide { animation: fadeSlide 0.35s ease-out forwards; }
          `}</style>
        </>
      )}
    </>
  );
}
