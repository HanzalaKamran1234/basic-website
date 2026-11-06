"use client";

import { useState } from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-primary-container border-t border-tertiary/20 pt-space-2xl pb-space-xl text-on-surface">
      <div className="w-full px-margin md:px-margin-desktop">
        {/* ── 5-Column Architectural Grid ───────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter-desktop mb-space-2xl">
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div className="space-y-space-sm">
              <Link
                href="/"
                className="font-headline-md text-headline-md tracking-widest text-on-surface uppercase block hover:text-tertiary transition-colors"
              >
                SPOGMAI
              </Link>
              <p className="font-label-caps-md text-label-caps-md text-tertiary tracking-widest uppercase">
                WEAR THE LEGACY.
              </p>
            </div>
            <div className="mt-space-lg">
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs leading-relaxed font-light">
                Haute couture tailoring engineered with architectural restraint and uncompromising discipline.
              </p>
            </div>
          </div>

          {/* Col 2: Collections */}
          <div className="space-y-space-md">
            <span className="font-label-caps-md text-label-caps-md text-tertiary tracking-widest uppercase block border-b border-outline-variant/20 pb-space-xs">
              COLLECTIONS
            </span>
            <ul className="space-y-space-sm">
              <li>
                <Link
                  href="/shop?category=tshirts"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Premium T-Shirts
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=formal"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Tailored Shirts
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=pants"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Relaxed Trousers
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?filter=new"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  All Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Client Services */}
          <div className="space-y-space-md">
            <span className="font-label-caps-md text-label-caps-md text-tertiary tracking-widest uppercase block border-b border-outline-variant/20 pb-space-xs">
              CLIENT SERVICES
            </span>
            <ul className="space-y-space-sm">
              <li>
                <Link
                  href="/cart"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Shopping Bag
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Size & Fit Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/wishlist"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Saved Wishlist
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Inquiries & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: About Atelier */}
          <div className="space-y-space-md">
            <span className="font-label-caps-md text-label-caps-md text-tertiary tracking-widest uppercase block border-b border-outline-variant/20 pb-space-xs">
              ABOUT
            </span>
            <ul className="space-y-space-sm">
              <li>
                <Link
                  href="/about"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Architectural Craft
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  Atelier Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="space-y-space-md">
            <span className="font-label-caps-md text-label-caps-md text-tertiary tracking-widest uppercase block border-b border-outline-variant/20 pb-space-xs">
              NEWSLETTER
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed font-light">
              Stay in the world of SPOGMAI. Receive seasonal releases and exclusive private viewings.
            </p>

            {submitted ? (
              <div className="pt-space-xs">
                <p className="font-label-caps-sm text-tertiary uppercase tracking-wider">
                  Privilege Registered
                </p>
                <p className="font-caption text-caption text-on-surface-variant/60 mt-1">
                  (Demo only — no emails are currently stored)
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="relative mt-space-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-transparent border-0 border-b border-outline-variant/40 pb-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-tertiary transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-0 bottom-space-xs font-label-caps-sm text-label-caps-sm text-tertiary hover:text-on-surface transition-colors tracking-widest uppercase"
                >
                  JOIN
                </button>
              </form>
            )}
            <p className="font-caption text-caption text-on-surface-variant/50 tracking-wider uppercase">
              Discreet communications only.
            </p>
          </div>
        </div>

        {/* ── Bottom Atelier Registry Bar ─────────────────── */}
        <div className="pt-space-lg border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-space-md text-center md:text-left">
          <div className="flex items-center gap-space-sm">
            <span className="font-caption text-caption text-on-surface-variant/80 uppercase tracking-widest">
              &copy; 2026 SPOGMAI DIGITAL FLAGSHIP. ALL RIGHTS RESERVED.
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-space-lg">
            <span className="font-caption text-caption text-on-surface-variant/60 uppercase tracking-widest">
              DEMONSTRATION ARCHIVE
            </span>
            <span className="font-caption text-caption text-tertiary uppercase tracking-widest">
              REGION: PAKISTAN (PKR)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
