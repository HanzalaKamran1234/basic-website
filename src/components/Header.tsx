"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart, useWishlist } from '../context/store';
import {
  SearchIcon,
  BagIcon,
  HeartIcon,
  MenuIcon,
  CloseIcon,
  ChevronDownIcon,
} from './icons';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'NEW ARRIVALS', href: '/shop?filter=new' },
  { label: 'T-SHIRTS',     href: '/shop?category=tshirts' },
  { label: 'SHIRTS',       href: '/shop?category=formal' },
  { label: 'PANTS',        href: '/shop?category=pants' },
  { label: 'COLLECTIONS',  href: '/shop' },
  { label: 'EDITORIAL',    href: '/about' },
];

export const Header: React.FC = () => {
  const router = useRouter();
  const { count: cartCount } = useCart();
  const { ids: wishlistIds } = useWishlist();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const wishlistCount = wishlistIds.length;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchOpen(false);
      setMobileOpen(false);
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-primary-container/95 backdrop-blur-md border-b border-outline-variant/40 shadow-xl'
            : 'bg-primary-container/90 backdrop-blur-md border-b border-outline-variant/30'
        }`}
      >
        <div className="h-20 w-full px-margin md:px-margin-desktop flex items-center justify-between gap-gutter">
          {/* ── Left: Mobile Hamburger & Wordmark ───────────── */}
          <div className="flex items-center gap-space-md lg:gap-space-lg">
            <button
              type="button"
              aria-label="Toggle navigation drawer"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-on-surface-variant hover:text-on-surface transition-colors p-1"
            >
              <MenuIcon className="w-5 h-5" />
            </button>

            <Link href="/" className="flex items-center gap-space-sm group select-none">
              <span className="font-headline-md text-headline-md tracking-widest text-on-surface uppercase group-hover:text-tertiary transition-colors duration-300">
                SPOGMAI
              </span>
            </Link>
          </div>

          {/* ── Centre: Desktop Navigation ─────────────────── */}
          <nav
            aria-label="Atelier Navigation"
            className="hidden lg:flex items-center gap-space-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-label-caps-md text-label-caps-md text-on-surface-variant hover:text-on-surface transition-colors duration-200 uppercase tracking-widest py-space-xs relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-tertiary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* ── Right: Currency & Utility Cluster ───────────── */}
          <div className="flex items-center gap-space-md">
            {/* Currency (Display only) */}
            <div
              title="Regional Currency: Pakistan (PKR)"
              className="hidden sm:flex items-center gap-1 text-on-surface-variant select-none pr-space-xs"
            >
              <span className="font-label-caps-sm text-label-caps-sm tracking-wider uppercase">
                PKR
              </span>
              <ChevronDownIcon className="w-3.5 h-3.5 opacity-60" />
            </div>

            {/* Search Trigger */}
            <button
              type="button"
              aria-label="Search catalog"
              onClick={() => setSearchOpen((prev) => !prev)}
              className="text-on-surface-variant hover:text-on-surface p-space-xs transition-colors flex items-center"
            >
              <SearchIcon className="w-5 h-5" />
            </button>

            {/* Wishlist Link with Live Counter */}
            <Link
              href="/wishlist"
              aria-label={`Wishlist: ${wishlistCount} item${wishlistCount === 1 ? '' : 's'}`}
              className="text-on-surface-variant hover:text-on-surface p-space-xs transition-colors relative flex items-center"
            >
              <HeartIcon className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 font-caption text-caption w-3.5 h-3.5 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-medium">
                  {wishlistCount > 99 ? '99+' : wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Link with Live Counter */}
            <Link
              href="/cart"
              aria-label={`Shopping bag: ${cartCount} item${cartCount === 1 ? '' : 's'}`}
              className="text-on-surface-variant hover:text-on-surface p-space-xs transition-colors relative flex items-center"
            >
              <BagIcon className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 font-caption text-caption w-3.5 h-3.5 rounded-full bg-tertiary text-on-tertiary font-semibold flex items-center justify-center">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* ── Slide-Down Search Overlay ─────────────────────── */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            searchOpen ? 'max-h-20 border-t border-outline-variant/30' : 'max-h-0'
          } bg-primary-container/98 backdrop-blur-md`}
        >
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-space-md h-16 max-w-2xl mx-auto px-margin md:px-0"
          >
            <SearchIcon className="w-4 h-4 text-on-surface-variant/60 shrink-0" />
            <input
              autoFocus={searchOpen}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by silhouette, garment, fabric, or keyword…"
              className="flex-1 bg-transparent text-on-surface placeholder:text-on-surface-variant/40 font-body-sm text-body-sm focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-on-surface-variant hover:text-on-surface text-xs uppercase tracking-wider"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              aria-label="Close search"
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery('');
              }}
              className="text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          </form>
        </div>
      </header>

      {/* ── Mobile Slide-Out Drawer ───────────────────────── */}
      <div
        className={`fixed inset-0 z-[60] bg-primary-container/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 left-0 z-[70] h-full w-[85vw] max-w-sm bg-primary-container text-on-surface border-r border-outline-variant/30 transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden flex flex-col ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-margin py-space-md border-b border-outline-variant/20">
          <Link
            href="/"
            className="font-headline-md text-2xl tracking-widest uppercase text-on-surface"
            onClick={() => setMobileOpen(false)}
          >
            SPOGMAI
          </Link>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setMobileOpen(false)}
            className="text-on-surface-variant hover:text-on-surface p-1 transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="p-margin border-b border-outline-variant/20">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-space-xs border border-outline-variant/40 px-3 py-2 bg-surface-container-low">
            <SearchIcon className="w-4 h-4 text-on-surface-variant/50 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search garments…"
              className="flex-1 bg-transparent text-on-surface placeholder:text-on-surface-variant/40 font-body-sm text-xs focus:outline-none"
            />
          </form>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-margin py-space-md space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between py-3.5 font-label-caps-md text-xs tracking-widest uppercase text-on-surface-variant hover:text-tertiary border-b border-outline-variant/10 transition-colors"
            >
              <span>{item.label}</span>
              <span className="text-on-surface-variant/40 text-sm">→</span>
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-between py-3.5 font-label-caps-md text-xs tracking-widest uppercase text-on-surface-variant hover:text-tertiary border-b border-outline-variant/10 transition-colors"
          >
            <span>CONTACT ATELIER</span>
            <span className="text-on-surface-variant/40 text-sm">→</span>
          </Link>
        </nav>

        {/* Drawer Bottom Utility */}
        <div className="p-margin border-t border-outline-variant/20 bg-surface-container-lowest flex items-center justify-between">
          <span className="font-label-caps-sm text-[10px] tracking-wider text-on-surface-variant/60 uppercase">
            REGION: PAKISTAN (PKR)
          </span>
          <div className="flex items-center gap-space-md">
            <Link
              href="/wishlist"
              onClick={() => setMobileOpen(false)}
              className="text-on-surface-variant hover:text-on-surface relative flex items-center"
            >
              <HeartIcon className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="ml-1 font-caption text-[10px] text-tertiary font-medium">
                  ({wishlistCount})
                </span>
              )}
            </Link>
            <Link
              href="/cart"
              onClick={() => setMobileOpen(false)}
              className="text-on-surface-variant hover:text-on-surface relative flex items-center"
            >
              <BagIcon className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="ml-1 font-caption text-[10px] text-tertiary font-semibold">
                  ({cartCount})
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
