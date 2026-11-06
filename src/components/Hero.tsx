"use client";

import Link from 'next/link';

// Editorial fashion backdrop (Unsplash high-resolution male fashion portrait in dark tailored overcoat)
const HERO_BG = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2000&q=85';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[90vh] md:min-h-[920px] flex flex-col justify-between overflow-hidden bg-primary-container px-margin md:px-margin-desktop py-space-xl pt-28"
      aria-label="SPOGMAI Hero — Wear the Legacy"
    >
      {/* ── Atmospheric Ambient Visual Backdrop ────────────── */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_BG}
          alt="SPOGMAI Sartorial Editorial Campaign"
          className="w-full h-full object-cover object-top opacity-50 scale-105 transition-transform duration-1000 ease-out hover:scale-100"
        />
        {/* Dark architectural gradients for maximum legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/70 to-primary-container/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/95 via-primary-container/60 to-transparent" />
      </div>

      {/* ── Editorial Top Meta Indicator ───────────────────── */}
      <div className="relative z-10 flex items-center justify-between w-full pt-space-md">
        <div className="flex items-center gap-space-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          <span className="font-label-caps-md text-label-caps-md tracking-widest text-tertiary uppercase">
            AUTUMN / WINTER ARCHIVE
          </span>
        </div>
        <div className="hidden md:flex items-center gap-space-lg text-on-surface-variant font-label-caps-sm text-label-caps-sm tracking-widest uppercase">
          <span>HAUTE PRÊT-À-PORTER</span>
          <span>•</span>
          <span>PERENNIAL MENSWEAR</span>
        </div>
      </div>

      {/* ── Monumental Hero Typography & Actions ────────────── */}
      <div className="relative z-10 max-w-4xl space-y-space-lg my-auto pt-space-xl pb-space-lg">
        <div className="space-y-space-xs">
          <p className="font-label-caps-lg text-label-caps-lg text-tertiary tracking-[0.3em] uppercase">
            MENSWEAR ARCHIVE
          </p>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-primary-fixed tracking-tight font-normal">
            WEAR THE <span className="italic font-light text-tertiary">LEGACY.</span>
          </h1>
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-light tracking-wide leading-relaxed">
          Modern essentials. Timeless identity. Precision tailoring engineered with architectural restraint and uncompromising discipline.
        </p>

        <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
          <Link
            href="/shop"
            className="px-space-xl py-space-md bg-primary-fixed text-primary-container font-label-caps-md text-label-caps-md tracking-[0.2em] uppercase transition-all duration-300 hover:bg-tertiary hover:text-on-tertiary flex items-center gap-space-sm group shadow-xl"
          >
            <span>EXPLORE COLLECTION</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          <Link
            href="/about"
            className="px-space-xl py-space-md bg-transparent text-primary-fixed font-label-caps-md text-label-caps-md tracking-[0.2em] uppercase transition-all duration-300 hover:text-tertiary relative group flex items-center gap-space-xs"
          >
            <span>DISCOVER OUR PHILOSOPHY</span>
            <span className="absolute bottom-2 left-space-xl right-space-xl h-[1px] bg-tertiary/40 group-hover:bg-tertiary transition-colors" />
          </Link>
        </div>
      </div>

      {/* ── Editorial Bottom Stats Bar ──────────────────────── */}
      <div className="relative z-10 w-full pt-space-lg border-t border-outline-variant/30 grid grid-cols-2 md:grid-cols-4 gap-space-md">
        <div>
          <span className="font-caption text-caption text-on-surface-variant/70 uppercase block tracking-widest">
            COLLECTION
          </span>
          <span className="font-label-caps-md text-label-caps-md text-on-surface uppercase tracking-wider">
            ESSENTIAL MEN&apos;S SILHOUETTES
          </span>
        </div>
        <div>
          <span className="font-caption text-caption text-on-surface-variant/70 uppercase block tracking-widest">
            CURATION
          </span>
          <span className="font-label-caps-md text-label-caps-md text-tertiary uppercase tracking-wider">
            PERENNIAL ARCHIVE
          </span>
        </div>
        <div className="hidden md:block">
          <span className="font-caption text-caption text-on-surface-variant/70 uppercase block tracking-widest">
            DISCIPLINE
          </span>
          <span className="font-label-caps-md text-label-caps-md text-on-surface uppercase tracking-wider">
            MONOLITHIC TAILORING
          </span>
        </div>
        <div className="text-right flex flex-col justify-end">
          <span className="font-caption text-caption text-on-surface-variant/70 uppercase block tracking-widest">
            PRÊT-À-PORTER
          </span>
          <span className="font-label-caps-md text-label-caps-md text-on-surface tracking-wider">
            PAKISTAN ARCHIVE
          </span>
        </div>
      </div>
    </section>
  );
};
