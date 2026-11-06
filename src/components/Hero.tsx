"use client";

import Link from 'next/link';
import Image from 'next/image';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full bg-primary-container overflow-hidden"
      aria-label="SPOGMAI Hero — Wear the Legacy"
    >
      {/* ── Desktop: Side-by-side | Mobile: Stacked ───────────── */}
      <div className="flex flex-col lg:flex-row min-h-[90vh] lg:min-h-[94vh]">

        {/* ── LEFT: Text Column ─────────────────────────────────── */}
        <div className="
          relative z-10 flex flex-col justify-between
          w-full lg:w-[48%] xl:w-[44%]
          px-margin md:px-margin-desktop lg:pl-[6vw] xl:pl-[7vw] lg:pr-16
          pt-32 md:pt-36 pb-10 lg:py-20 lg:pt-36
          order-2 lg:order-1
        ">
          {/* Top editorial meta row */}
          <div className="flex items-center gap-space-sm mb-auto pb-space-lg">
            <span className="inline-block w-[6px] h-[6px] rounded-full bg-tertiary animate-pulse" />
            <span className="font-label-caps-md text-label-caps-md tracking-widest text-tertiary uppercase">
              AUTUMN / WINTER ARCHIVE
            </span>
          </div>

          {/* Centre: main editorial copy */}
          <div className="flex-1 flex flex-col justify-center space-y-space-lg">
            {/* Editorial label */}
            <p className="font-label-caps-sm text-label-caps-sm text-tertiary tracking-[0.3em] uppercase">
              SPOGMAI — THE MENSWEAR COLLECTION
            </p>

            {/* Primary headline */}
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-primary-fixed tracking-tight font-normal leading-none">
              WEAR THE{' '}
              <span className="italic font-light text-tertiary">LEGACY.</span>
            </h1>

            {/* Supporting copy */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md font-light tracking-wide leading-relaxed">
              A considered approach to modern menswear. Refined essentials for those who value timeless style.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-space-md pt-space-sm">
              <Link
                href="/shop"
                className="inline-flex items-center gap-space-sm px-space-xl py-space-md bg-primary-fixed text-primary-container font-label-caps-md text-label-caps-md tracking-[0.2em] uppercase transition-all duration-300 hover:bg-tertiary hover:text-on-tertiary shadow-xl group"
              >
                <span>EXPLORE COLLECTION</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-space-xs px-space-xl py-space-md bg-transparent text-primary-fixed font-label-caps-md text-label-caps-md tracking-[0.2em] uppercase transition-all duration-300 hover:text-tertiary border border-outline-variant/40 hover:border-tertiary/60"
              >
                <span>OUR PHILOSOPHY</span>
              </Link>
            </div>
          </div>

          {/* Bottom: editorial footer bar */}
          <div className="w-full pt-space-lg border-t border-outline-variant/30 grid grid-cols-2 gap-space-md mt-space-2xl">
            <div>
              <span className="font-caption text-caption text-on-surface-variant/70 uppercase block tracking-widest">
                COLLECTION
              </span>
              <span className="font-label-caps-md text-label-caps-md text-on-surface uppercase tracking-wider">
                ESSENTIAL SILHOUETTES
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
          </div>
        </div>

        {/* ── RIGHT: Image Column ───────────────────────────────── */}
        <div className="
          relative
          w-full lg:w-[52%] xl:w-[56%]
          aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-auto
          order-1 lg:order-2
          overflow-hidden
          bg-[#0d0d0d]
        ">
          {/* Editorial photograph — object-contain keeps full composition visible */}
          <Image
            src="/hero-campaign.jpg"
            alt="SPOGMAI sartorial editorial campaign — premium contemporary menswear"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 56vw"
            className="object-contain object-center lg:object-right"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />

          {/* Subtle left-edge feather — image blends into text panel on desktop */}
          <div className="
            hidden lg:block
            absolute inset-y-0 left-0 w-28
            bg-gradient-to-r from-primary-container to-transparent
            pointer-events-none z-10
          " />

          {/* Top vignette */}
          <div className="
            absolute inset-x-0 top-0 h-20
            bg-gradient-to-b from-primary-container/50 to-transparent
            pointer-events-none z-10
          " />

          {/* Bottom vignette (desktop) */}
          <div className="
            hidden lg:block
            absolute inset-x-0 bottom-0 h-24
            bg-gradient-to-t from-primary-container/70 to-transparent
            pointer-events-none z-10
          " />

          {/* Mobile bottom fade — seamless transition to text section */}
          <div className="
            lg:hidden absolute inset-x-0 bottom-0 h-28
            bg-gradient-to-t from-primary-container to-transparent
            pointer-events-none z-10
          " />

          {/* Editorial tag — desktop only */}
          <div className="absolute top-6 right-6 hidden lg:flex flex-col items-end gap-1 z-20">
            <span className="font-label-caps-sm text-label-caps-sm text-on-surface-variant/50 uppercase tracking-widest">
              HAUTE PRÊT-À-PORTER
            </span>
            <span className="font-label-caps-sm text-label-caps-sm text-tertiary/60 uppercase tracking-widest">
              PERENNIAL MENSWEAR
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
