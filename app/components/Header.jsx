'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Link from 'next/link';
import Image from 'next/image';

// ═══════════════════════════════════════════════════════════
// ICON COMPONENTS (Replace Emojis with Professional SVGs)
// ═══════════════════════════════════════════════════════════

const Icons = {
  Home: ({ active }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#4C2A1A" : "none"} stroke={active ? "#4C2A1A" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),

  Kitchen: ({ active, size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={active ? "currentColor" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),

  Gift: ({ active, size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  ),

  Chocolate: ({ active, size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  ),

  Heart: ({ active }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#E85D5D" : "none"} stroke={active ? "#E85D5D" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),

  Cart: ({ active }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#4C2A1A" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),

  User: ({ active }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#4C2A1A20" : "none"} stroke={active ? "#4C2A1A" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),

  ChevronDown: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
};

// ═══════════════════════════════════════════════════════════
// MAIN NAVBAR COMPONENT
// ═══════════════════════════════════════════════════════════

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const wishlistCount = wishlist.length;

  const isActive = (href) => pathname === href;

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const cur = window.scrollY;
      setIsScrolled(cur > 10);
      setIsVisible(cur < 20 || cur < lastScrollY);
      setLastScrollY(cur);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Navigation menu items
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Category segments
  const categories = [
    {
      id: 'kitchen',
      label: 'Cloud Kitchen',
      shortLabel: 'Kitchen',
      icon: Icons.Kitchen,
      href: '/food',
      isActive: pathname.startsWith('/food'),
    },
    {
      id: 'gifts',
      label: 'Corporate Gifts',
      shortLabel: 'Gifts',
      icon: Icons.Gift,
      href: '/products',
      isActive: pathname.startsWith('/products'),
    },
    {
      id: 'chocolates',
      label: 'Chocolates',
      shortLabel: 'Chocolates',
      icon: Icons.Chocolate,
      href: '/chocolates',
      isActive: pathname.startsWith('/chocolates'),
    },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          DESKTOP NAVIGATION
          ═══════════════════════════════════════════════════════════ */}
      <nav
        className={`
          fixed top-0 left-0 z-[100] w-full
          flex justify-center
          px-4 sm:px-6
          transition-all duration-500 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
          ${isScrolled ? 'pt-2' : 'pt-4'}
        `}
      >
        <div
          className={`
            relative flex items-center w-full max-w-[1400px]
            transition-all duration-500 ease-out
            ${isScrolled
              ? 'rounded-2xl py-2 px-4 sm:px-6'
              : 'rounded-2xl sm:rounded-3xl py-3 px-5 sm:px-8'
            }
          `}
        >
          {/* Background Layer */}
          <div
            className={`
              absolute inset-0 rounded-2xl sm:rounded-3xl
              transition-all duration-500
              ${isScrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_-5px_rgba(76,42,26,0.15)]'
                : 'bg-white/90 backdrop-blur-lg shadow-[0_12px_40px_-10px_rgba(76,42,26,0.12)]'
              }
              border border-[#D4A574]/20
            `}
          />

          {/* Chocolate Accent Line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4A574] to-transparent rounded-full opacity-60" />

          {/* ─────────────────────────────────────────────────────────
              LOGO
              ───────────────────────────────────────────────────────── */}
          <Link href="/" className="relative shrink-0 z-10 group">
            <div className="relative overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={120}
                height={45}
                className="w-24 sm:w-28 md:w-32 h-auto"
                priority
              />
            </div>
          </Link>

          {/* ─────────────────────────────────────────────────────────
              CATEGORY SEGMENT GROUP (Desktop)
              ───────────────────────────────────────────────────────── */}
          <div className="relative hidden lg:flex items-center ml-6 z-10">
            <div className="flex items-center gap-1 p-1 bg-[#FAF5F0] rounded-2xl border border-[#E8DDD4]">
              {categories.map((cat) => (
                <SegmentButton
                  key={cat.id}
                  label={cat.label}
                  icon={cat.icon}
                  active={cat.isActive}
                  onClick={() => router.push(cat.href)}
                />
              ))}
            </div>
          </div>

          {/* Mobile Category Dropdown */}
          <div className="relative hidden md:flex lg:hidden items-center ml-4 z-10">
            <CategoryDropdown
              categories={categories}
              currentPath={pathname}
              onSelect={(href) => router.push(href)}
            />
          </div>

          {/* ─────────────────────────────────────────────────────────
              CENTER MENU LINKS
              ───────────────────────────────────────────────────────── */}
          <ul className="relative hidden md:flex flex-1 justify-center items-center gap-2 z-10">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    relative px-4 py-2 rounded-xl
                    text-[14px] lg:text-[15px] font-medium
                    transition-all duration-300
                    ${isActive(item.href)
                      ? 'text-[#4C2A1A]'
                      : 'text-[#6B5344] hover:text-[#4C2A1A]'
                    }
                  `}
                >
                  {/* Active Background */}
                  {isActive(item.href) && (
                    <span className="absolute inset-0 bg-[#D4A574]/15 rounded-xl" />
                  )}

                  {/* Hover Background */}
                  <span className="absolute inset-0 bg-[#D4A574]/0 hover:bg-[#D4A574]/10 rounded-xl transition-colors duration-300" />

                  <span className="relative">{item.name}</span>

                  {/* Active Indicator Dot */}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#B55328] rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* ─────────────────────────────────────────────────────────
              RIGHT SECTION: Icons
              ───────────────────────────────────────────────────────── */}
          <div className="relative ml-auto flex items-center gap-1 sm:gap-2 z-10">
            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-[#D4A574]/40 to-transparent mx-2" />

            {/* Wishlist Icon */}
            <NavIcon
              href="/wishlist"
              count={wishlistCount}
              icon={<Icons.Heart active={isActive('/wishlist')} />}
              label="Wishlist"
              badgeColor="bg-gradient-to-br from-[#E85D5D] to-[#C74545]"
            />

            {/* Cart Icon */}
            <NavIcon
              href="/cart"
              count={cartCount}
              icon={<Icons.Cart active={isActive('/cart')} />}
              label="Cart"
              badgeColor="bg-gradient-to-br from-[#4C2A1A] to-[#3A1F14]"
            />
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE BOTTOM NAVIGATION
          ═══════════════════════════════════════════════════════════ */}
      <div className="fixed bottom-0 left-0 w-full z-[99] md:hidden">
        {/* Top Border Gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A574] to-transparent" />

        {/* Background */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" />

        {/* Navigation Items */}
        <div className="relative flex justify-around items-center py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
          <MobileNavItem
            href="/"
            icon={<Icons.Home active={isActive('/')} />}
            label="Home"
            active={isActive('/')}
          />

          <MobileNavItem
            href="/food"
            icon={<Icons.Kitchen active={pathname.startsWith('/food')} size={22} />}
            label="Kitchen"
            active={pathname.startsWith('/food')}
          />

          <MobileNavItem
            href="/products"
            icon={<Icons.Gift active={pathname.startsWith('/products')} size={22} />}
            label="Gifts"
            active={pathname.startsWith('/products')}
          />

          <MobileNavItem
            href="/chocolates"
            icon={<Icons.Chocolate active={pathname.startsWith('/chocolates')} size={22} />}
            label="Chocolates"
            active={pathname.startsWith('/chocolates')}
          />

          <MobileNavItem
            href="/contact"
            icon={<Icons.User active={isActive('/contact')} />}
            label="Contact"
            active={isActive('/contact')}
          />
        </div>
      </div>

      {/* Bottom spacing for mobile */}
      <div className="h-16 md:hidden" />
    </>
  );
}

// ═══════════════════════════════════════════════════════════
// SEGMENT BUTTON COMPONENT
// ═══════════════════════════════════════════════════════════

function SegmentButton({ label, icon: Icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        group relative flex items-center gap-2
        px-4 py-2 rounded-xl
        text-[13px] font-semibold
        transition-all duration-300
        ${active
          ? 'text-white'
          : 'text-[#5D4037] hover:text-[#4C2A1A]'
        }
      `}
    >
      {/* Active Background */}
      {active && (
        <span className="absolute inset-0 bg-gradient-to-r from-[#6B3D28] via-[#4C2A1A] to-[#3A1F14] rounded-xl shadow-lg shadow-[#4C2A1A]/30" />
      )}

      {/* Hover Background */}
      {!active && (
        <span className="absolute inset-0 bg-[#D4A574]/0 group-hover:bg-[#D4A574]/20 rounded-xl transition-colors duration-300" />
      )}

      {/* Glossy Effect for Active */}
      {active && (
        <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent rounded-t-xl" />
      )}

      {/* Icon */}
      <span className="relative">
        <Icon active={active} />
      </span>

      {/* Label */}
      <span className="relative whitespace-nowrap">{label}</span>
    </button>
  );
}

// ═══════════════════════════════════════════════════════════
// CATEGORY DROPDOWN (Tablet View)
// ═══════════════════════════════════════════════════════════

function CategoryDropdown({ categories, currentPath, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const current = categories.find((c) => c.isActive) || categories[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-4 py-2
          bg-gradient-to-r from-[#6B3D28] to-[#4C2A1A]
          text-white text-[13px] font-semibold
          rounded-xl shadow-md shadow-[#4C2A1A]/20
          transition-all duration-300
          hover:shadow-lg hover:shadow-[#4C2A1A]/30
        `}
      >
        <current.icon active={true} />
        <span>{current.shortLabel}</span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <Icons.ChevronDown />
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div className="absolute top-full left-0 mt-2 z-20 min-w-[200px] bg-white rounded-xl shadow-xl border border-[#E8DDD4] overflow-hidden">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelect(cat.href);
                  setIsOpen(false);
                }}
                className={`
                  flex items-center gap-3 w-full px-4 py-3
                  text-[14px] font-medium text-left
                  transition-all duration-200
                  ${cat.isActive
                    ? 'bg-[#D4A574]/20 text-[#4C2A1A]'
                    : 'text-[#5D4037] hover:bg-[#FAF5F0]'
                  }
                `}
              >
                <cat.icon active={cat.isActive} />
                <span>{cat.label}</span>
                {cat.isActive && (
                  <span className="ml-auto w-2 h-2 bg-[#B55328] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// NAV ICON COMPONENT
// ═══════════════════════════════════════════════════════════

function NavIcon({ href, icon, count, label, badgeColor }) {
  return (
    <Link
      href={href}
      className="relative p-2.5 rounded-xl text-[#5D4037] hover:text-[#4C2A1A] hover:bg-[#D4A574]/10 transition-all duration-300 group"
      aria-label={label}
    >
      {/* Icon */}
      <span className="relative block transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>

      {/* Badge */}
      {count > 0 && (
        <span
          className={`
            absolute -top-0.5 -right-0.5
            min-w-[18px] h-[18px]
            flex items-center justify-center
            text-[10px] font-bold text-white
            ${badgeColor}
            rounded-full
            shadow-lg
            animate-[pulse_2s_ease-in-out_infinite]
          `}
        >
          {count > 99 ? '99+' : count}
        </span>
      )}

      {/* Tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#4C2A1A] text-white text-[11px] rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        {label}
        {count > 0 && ` (${count})`}
      </span>
    </Link>
  );
}

// ═══════════════════════════════════════════════════════════
// MOBILE NAV ITEM COMPONENT
// ═══════════════════════════════════════════════════════════

function MobileNavItem({ href, icon, label, active }) {
  return (
    <Link
      href={href}
      className={`
        relative flex flex-col items-center gap-0.5
        px-3 py-1.5 rounded-2xl
        transition-all duration-300
        ${active
          ? 'text-[#4C2A1A]'
          : 'text-[#8B7355]'
        }
      `}
    >
      {/* Active Background Pill */}
      {active && (
        <span className="absolute inset-0 bg-[#D4A574]/20 rounded-2xl" />
      )}

      {/* Icon Container */}
      <span className={`relative transition-transform duration-300 ${active ? 'scale-110' : ''}`}>
        {icon}
      </span>

      {/* Label */}
      <span className={`relative text-[10px] font-medium ${active ? 'font-semibold' : ''}`}>
        {label}
      </span>

      {/* Active Dot Indicator */}
      {active && (
        <span className="absolute -bottom-0.5 w-1 h-1 bg-[#B55328] rounded-full" />
      )}
    </Link>
  );
}