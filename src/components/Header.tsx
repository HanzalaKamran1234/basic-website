"use client";

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'T-Shirts', href: '/shop?category=tshirts' },
  { name: 'Pants', href: '/shop?category=pants' },
  { name: 'Formal Shirts', href: '/shop?category=formal' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-primaryBlack text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Brand wordmark */}
        <Link href="/" className="text-2xl font-heading tracking-widest text-white">
          SPOGMAI
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop icons */}
        <div className="hidden md:flex items-center gap-4 text-lg">
          <button aria-label="Search" className="hover:text-accent transition-colors">🔍</button>
          <button aria-label="Cart" className="hover:text-accent transition-colors">
            🛒 <span className="text-sm ml-0.5">0</span>
          </button>
          <button aria-label="Account" className="hover:text-accent transition-colors">👤</button>
          <button aria-label="Wishlist" className="hover:text-accent transition-colors">♡</button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-secondaryBlack px-4 pb-6 pt-2 flex flex-col gap-4 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-1 hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-5 pt-2 text-lg border-t border-white/10">
            <button aria-label="Search" className="hover:text-accent">🔍</button>
            <button aria-label="Cart" className="hover:text-accent">🛒 <span className="text-sm">0</span></button>
            <button aria-label="Account" className="hover:text-accent">👤</button>
            <button aria-label="Wishlist" className="hover:text-accent">♡</button>
          </div>
        </div>
      )}
    </header>
  );
};
