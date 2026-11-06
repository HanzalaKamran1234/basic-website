// No hooks or browser APIs – this is a Server Component
export const Hero = () => (
  <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-secondaryBlack text-white">
    {/* Placeholder background image (royalty-free, Unsplash) */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover object-top opacity-30"
    />

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 text-center">
      <p className="text-accent tracking-[0.3em] text-sm uppercase mb-4 font-body">
        Premium Men&rsquo;s Fashion
      </p>
      <h1 className="font-heading text-6xl md:text-8xl font-semibold tracking-wide mb-6">
        WEAR THE
        <br />
        LEGACY.
      </h1>
      <p className="font-body text-lg md:text-xl text-white/70 max-w-lg mx-auto mb-10">
        Refined menswear for the modern gentleman. Timeless pieces crafted with intention.
      </p>
      <a
        href="/shop"
        className="inline-block bg-white text-primaryBlack hover:bg-accent hover:text-white transition-colors duration-300 font-body font-medium tracking-widest uppercase text-sm py-4 px-10"
      >
        Shop Now
      </a>
    </div>
  </section>
);
