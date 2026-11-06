"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  SearchIcon, BagIcon, HeartIcon, AccountIcon,
  MenuIcon, CloseIcon,
} from './icons';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'T-Shirts', href: '/shop?category=tshirts' },
  { name: 'Pants', href: '/shop?category=pants' },
  { name: 'Formal Shirts', href: '/shop?category=formal' },
  { name: 'Our Story', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <>
      {/* ── Main header ──────────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-primaryBlack shadow-lg'
            : 'bg-primaryBlack'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-20">

          {/* Left — mobile hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-white hover:text-accent transition-colors p-1"
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>

          {/* Centre — wordmark (mobile) / left-aligned nav + wordmark (desktop) */}
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="font-heading text-white text-2xl md:text-3xl tracking-[0.2em] hover:text-accent transition-colors"
            >
              SPOGMAI
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-white font-body text-xs tracking-[0.12em] uppercase transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right — icons */}
          <div className="flex items-center gap-4 md:gap-5">
            <button
              aria-label="Search"
              className="text-white/80 hover:text-white transition-colors hidden md:block"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <SearchIcon className="w-[18px] h-[18px]" />
            </button>

            <Link
              href="/account"
              aria-label="Account"
              className="text-white/80 hover:text-white transition-colors hidden md:block"
            >
              <AccountIcon className="w-[18px] h-[18px]" />
            </Link>

            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="text-white/80 hover:text-white transition-colors hidden md:block"
            >
              <HeartIcon className="w-[18px] h-[18px]" />
            </Link>

            <Link
              href="/cart"
              aria-label="Shopping bag — 0 items"
              className="text-white/80 hover:text-white transition-colors relative"
            >
              <BagIcon className="w-[18px] h-[18px]" />
              <span className="absolute -top-2 -right-2 bg-accent text-white text-[9px] font-body font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-white/10 bg-primaryBlack px-4 md:px-8 py-3">
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-3 max-w-xl mx-auto">
              <SearchIcon className="w-4 h-4 text-white/50 shrink-0" />
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products…"
                className="flex-1 bg-transparent text-white placeholder-white/40 font-body text-sm focus:outline-none"
              />
              <button
                type="button"
                onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                className="text-white/50 hover:text-white transition-colors"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </header>

      {/* ── Mobile full-screen drawer ─────────────────────── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-primaryBlack/60 transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed top-0 left-0 z-[70] h-full w-[85vw] max-w-sm bg-primaryBlack text-white transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Link href="/" className="font-heading text-2xl tracking-[0.2em]" onClick={() => setMobileOpen(false)}>
            SPOGMAI
          </Link>
          <button
            aria-label="Close menu"
            className="text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile search */}
        <div className="px-6 py-4 border-b border-white/10">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-3">
            <SearchIcon className="w-4 h-4 text-white/50 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products…"
              className="flex-1 bg-transparent text-white placeholder-white/40 font-body text-sm focus:outline-none"
            />
          </form>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-6 py-6" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block py-3 font-body text-sm tracking-[0.15em] uppercase text-white/80 hover:text-accent border-b border-white/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer footer icons */}
        <div className="px-6 py-5 border-t border-white/10 flex items-center gap-6">
          <Link href="/account" aria-label="Account" className="text-white/70 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
            <AccountIcon className="w-5 h-5" />
          </Link>
          <Link href="/wishlist" aria-label="Wishlist" className="text-white/70 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
            <HeartIcon className="w-5 h-5" />
          </Link>
          <Link href="/cart" aria-label="Cart" className="text-white/70 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
            <BagIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
};
