// Server Component — editorial hero with two CTAs
export const Hero = () => (
  <section className="relative min-h-screen flex items-end overflow-hidden bg-primaryBlack">
    {/* Background image */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=85"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover object-center opacity-55"
    />

    {/* Dark gradient at bottom for text legibility */}
    <div className="absolute inset-0 bg-gradient-to-t from-primaryBlack via-primaryBlack/40 to-transparent" />

    {/* Content — left-aligned, editorial */}
    <div className="relative z-10 container mx-auto px-4 md:px-8 pb-20 md:pb-28 lg:pb-36">
      <div className="max-w-2xl">
        <p className="font-body text-accent text-xs tracking-[0.4em] uppercase mb-5">
          New Collection — 2026
        </p>

        <h1 className="font-heading text-white leading-none mb-6">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">WEAR</span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">THE</span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-accent">LEGACY.</span>
        </h1>

        <p className="font-body text-white/60 text-base md:text-lg max-w-md leading-relaxed mb-10">
          Refined menswear for the modern gentleman. Every piece designed with intention, crafted to endure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/shop"
            className="inline-block bg-white text-primaryBlack font-body font-semibold text-xs tracking-[0.2em] uppercase py-4 px-10 hover:bg-accent hover:text-white transition-colors duration-300"
          >
            Shop Collection
          </a>
          <a
            href="/about"
            className="inline-block border border-white/40 text-white font-body text-xs tracking-[0.2em] uppercase py-4 px-10 hover:border-white hover:bg-white/5 transition-colors duration-300"
          >
            Our Story
          </a>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 right-8 md:right-12 hidden md:flex flex-col items-center gap-2 text-white/30">
      <span className="font-body text-[9px] tracking-[0.3em] uppercase rotate-90 origin-center">Scroll</span>
      <div className="w-px h-12 bg-white/20" />
    </div>
  </section>
);
