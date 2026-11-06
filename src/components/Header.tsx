"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/store';
import {
  SearchIcon, BagIcon, HeartIcon, AccountIcon,
  MenuIcon, CloseIcon,
} from './icons';

const navLinks = [
  { name: 'New Arrivals', href: '/shop?filter=new' },
  { name: 'Shop',         href: '/shop' },
  { name: 'T-Shirts',     href: '/shop?category=tshirts' },
  { name: 'Pants',        href: '/shop?category=pants' },
  { name: 'Formal Shirts',href: '/shop?category=formal' },
  { name: 'Our Story',    href: '/about' },
];

export const Header: React.FC = () => {
  const router = useRouter();
  const { count } = useCart();
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled,   setScrolled]     = useState(false);
  const [searchOpen, setSearchOpen]   = useState(false);
  const [searchQuery,setSearchQuery]  = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchOpen(false);
      setMobileOpen(false);
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const headerBase = scrolled
    ? 'bg-primaryBlack/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]'
    : 'bg-transparent';

  return (
    <>
      {/* ════════════ MAIN HEADER ════════════ */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBase}`}>

        {/* ── Top bar ───────────────────────── */}
        <div className="container mx-auto flex items-center justify-between px-5 md:px-10 h-[64px] md:h-[72px]">

          {/* Mobile hamburger */}
          <button
            aria-label="Open navigation menu"
            className="md:hidden text-white/80 hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon className="w-5 h-5" />
          </button>

          {/* Left — wordmark + desktop nav */}
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="font-heading text-white text-[22px] md:text-[26px] tracking-[0.25em] hover:text-accent transition-colors duration-300 select-none"
            >
              SPOGMAI
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="underline-draw text-white/70 hover:text-white font-body text-[11px] tracking-[0.14em] uppercase transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right — icons */}
          <div className="flex items-center gap-5 md:gap-6">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className="hidden md:block text-white/70 hover:text-white transition-colors duration-200"
            >
              <SearchIcon className="w-[17px] h-[17px]" />
            </button>

            <Link
              href="/account"
              aria-label="Account"
              className="hidden md:block text-white/70 hover:text-white transition-colors duration-200"
            >
              <AccountIcon className="w-[17px] h-[17px]" />
            </Link>

            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="hidden md:block text-white/70 hover:text-white transition-colors duration-200"
            >
              <HeartIcon className="w-[17px] h-[17px]" />
            </Link>

            <Link
              href="/cart"
              aria-label={`Shopping bag — ${count} item${count === 1 ? '' : 's'}`}
              className="text-white/70 hover:text-white transition-colors duration-200 relative"
            >
              <BagIcon className="w-[17px] h-[17px]" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2.5 bg-accent text-white text-[9px] font-body font-semibold w-[18px] h-[18px] rounded-full flex items-center justify-center leading-none">
                  {count > 99 ? '99+' : count}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* ── Search overlay ─────────────────── */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            searchOpen ? 'max-h-16 border-t border-white/10' : 'max-h-0'
          } bg-primaryBlack/95 backdrop-blur-md`}
        >
          <form onSubmit={handleSearch} className="flex items-center gap-3 px-10 h-14 max-w-2xl mx-auto">
            <SearchIcon className="w-4 h-4 text-white/40 shrink-0" />
            <input
              autoFocus={searchOpen}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products…"
              className="flex-1 bg-transparent text-white placeholder-white/30 font-body text-sm focus:outline-none"
            />
            <button
              type="button"
              onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
              className="text-white/40 hover:text-white transition-colors"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          </form>
        </div>
      </header>

      {/* ════════════ MOBILE DRAWER ════════════ */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-primaryBlack/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed top-0 left-0 z-[70] h-full w-[82vw] max-w-[340px] bg-primaryBlack text-white transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden flex flex-col ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer top */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08]">
          <Link
            href="/"
            className="font-heading text-[22px] tracking-[0.25em] text-white"
            onClick={() => setMobileOpen(false)}
          >
            SPOGMAI
          </Link>
          <button
            aria-label="Close menu"
            className="text-white/50 hover:text-white transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile search */}
        <div className="px-6 py-4 border-b border-white/[0.06]">
          <form onSubmit={handleSearch} className="flex items-center gap-3 border border-white/[0.12] px-3 py-2.5">
            <SearchIcon className="w-4 h-4 text-white/40 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products…"
              className="flex-1 bg-transparent text-white placeholder-white/30 font-body text-xs focus:outline-none"
            />
          </form>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-6 py-5" aria-label="Mobile navigation">
          <ul>
            {navLinks.map((link, i) => (
              <li key={link.name} style={{ animationDelay: `${i * 50}ms` }}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-4 font-body text-xs tracking-[0.2em] uppercase text-white/70 hover:text-white border-b border-white/[0.06] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                  <span className="text-white/20">→</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="flex items-center justify-between py-4 font-body text-xs tracking-[0.2em] uppercase text-white/70 hover:text-white border-b border-white/[0.06] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Contact
                <span className="text-white/20">→</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Drawer footer */}
        <div className="px-6 py-5 border-t border-white/[0.08] flex items-center gap-6">
          <Link href="/account" aria-label="Account" className="text-white/50 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
            <AccountIcon className="w-[18px] h-[18px]" />
          </Link>
          <Link href="/wishlist" aria-label="Wishlist" className="text-white/50 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
            <HeartIcon className="w-[18px] h-[18px]" />
          </Link>
          <Link href="/cart" aria-label="Cart" className="text-white/50 hover:text-white transition-colors relative" onClick={() => setMobileOpen(false)}>
            <BagIcon className="w-[18px] h-[18px]" />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-accent text-white text-[8px] font-body font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <p className="ml-auto font-body text-[10px] text-white/20 tracking-widest uppercase">
            Wear the Legacy.
          </p>
        </div>
      </div>
    </>
  );
};
