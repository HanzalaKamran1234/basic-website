import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'T-Shirts', href: '/shop?tshirts' },
    { name: 'Pants', href: '/shop?pants' },
    { name: 'Formal Shirts', href: '/shop?formal' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-primaryBlack text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Brand wordmark */}
        <Link href="/" className="text-2xl font-heading text-white">
          SPOGMAI
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-accent transition-colors">
              {link.name}
            </Link>
          ))}
          {/* Icons */}
          <button aria-label="Search" className="hover:text-accent">
            🔍
          </button>
          <button aria-label="Cart" className="hover:text-accent">
            🛒<span className="ml-1">0</span>
          </button>
          <button aria-label="Account" className="hover:text-accent">
            👤
          </button>
          <button aria-label="Wishlist" className="hover:text-accent">
            ❤️
          </button>
        </nav>
        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>
      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-primaryBlack text-white p-4 space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="block hover:text-accent" onClick={() => setMobileOpen(false)}>
              {link.name}
            </Link>
          ))}
          <div className="flex space-x-4 mt-2">
            <button aria-label="Search" className="hover:text-accent">
              🔍
            </button>
            <button aria-label="Cart" className="hover:text-accent">
              🛒<span className="ml-1">0</span>
            </button>
            <button aria-label="Account" className="hover:text-accent">
              👤
            </button>
            <button aria-label="Wishlist" className="hover:text-accent">
              ❤️
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
