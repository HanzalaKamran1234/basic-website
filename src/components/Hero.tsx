"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';

/* Two carefully chosen editorial Unsplash IDs */
const IMG_MAIN = 'https://images.unsplash.com/photo-1536766820879-059fec98ec0a?auto=format&fit=crop&w=1600&q=85';
const IMG_SIDE = 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=900&q=80';

export const Hero: React.FC = () => {
  const lineRef  = useRef<HTMLDivElement>(null);

  /* Trigger line animation after mount */
  useEffect(() => {
    const timer = setTimeout(() => {
      lineRef.current?.classList.add('opacity-100', 'h-20');
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-primaryBlack"
      aria-label="SPOGMAI hero — Wear the Legacy"
    >
      {/* ── Background image — full bleed ─────────────────── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IMG_MAIN}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-40"
        style={{ animation: 'fadeIn 1.4s ease forwards' }}
      />

      {/* Gradient — left side darker for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-primaryBlack via-primaryBlack/70 to-primaryBlack/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-primaryBlack/80 via-transparent to-transparent" />

      {/* ── Side editorial image panel ─────────────────────── */}
      <div
        className="absolute right-0 top-0 h-full w-[42%] hidden lg:block overflow-hidden"
        style={{ animation: 'fadeIn 1.6s 0.4s ease both' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG_SIDE}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Left-side gradient blending into dark background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primaryBlack via-primaryBlack/50 to-transparent" />
      </div>

      {/* ── Content ───────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-[640px]">

          {/* Collection label */}
          <p
            className="font-body text-accent text-[10px] tracking-[0.5em] uppercase mb-7 opacity-0"
            style={{ animation: 'fadeUp 0.6s 0.3s cubic-bezier(0.16,1,0.3,1) forwards' }}
          >
            Collection — 2026
          </p>

          {/* Main headline — staggered lines */}
          <h1 className="font-heading text-white leading-[0.88] mb-8 overflow-hidden">
            <span
              className="block text-[clamp(68px,10vw,130px)] opacity-0"
              style={{ animation: 'fadeUp 0.75s 0.5s cubic-bezier(0.16,1,0.3,1) forwards' }}
            >
              WEAR
            </span>
            <span
              className="block text-[clamp(68px,10vw,130px)] opacity-0"
              style={{ animation: 'fadeUp 0.75s 0.65s cubic-bezier(0.16,1,0.3,1) forwards' }}
            >
              THE
            </span>
            <span
              className="block text-[clamp(68px,10vw,130px)] italic text-accent opacity-0"
              style={{ animation: 'fadeUp 0.75s 0.8s cubic-bezier(0.16,1,0.3,1) forwards' }}
            >
              LEGACY.
            </span>
          </h1>

          {/* Supporting copy */}
          <p
            className="font-body text-white/55 text-base md:text-lg max-w-[380px] leading-relaxed mb-10 opacity-0"
            style={{ animation: 'fadeUp 0.7s 1.0s cubic-bezier(0.16,1,0.3,1) forwards' }}
          >
            Refined menswear for the modern man. Every piece designed with intention, built to endure.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0"
            style={{ animation: 'fadeUp 0.7s 1.15s cubic-bezier(0.16,1,0.3,1) forwards' }}
          >
            <Link
              href="/shop"
              className="inline-block bg-white text-primaryBlack font-body font-semibold text-[11px] tracking-[0.25em] uppercase py-4 px-10 hover:bg-accent hover:text-white transition-colors duration-300"
            >
              Shop Collection
            </Link>
            <Link
              href="/about"
              className="inline-block border border-white/30 text-white font-body text-[11px] tracking-[0.25em] uppercase py-4 px-10 hover:border-white hover:bg-white/5 transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────── */}
      <div
        className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-3 opacity-0"
        style={{ animation: 'fadeIn 1s 1.4s ease forwards' }}
        aria-hidden="true"
      >
        <span className="font-body text-[9px] tracking-[0.4em] uppercase text-white/30 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="w-px h-14 bg-gradient-to-b from-white/30 to-transparent" />
      </div>

      {/* ── Collection label vertical text ────────────────── */}
      <div
        className="absolute left-6 bottom-16 hidden xl:flex flex-col items-center gap-3 opacity-0"
        style={{ animation: 'fadeIn 1s 1.6s ease forwards' }}
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-accent/50" />
        <span className="font-body text-[9px] tracking-[0.4em] uppercase text-accent/60 [writing-mode:vertical-lr]">
          SPOGMAI × 2026
        </span>
      </div>
    </section>
  );
};
