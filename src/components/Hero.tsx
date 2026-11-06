// src/components/Hero.tsx
import Image from 'next/image';

export const Hero = () => (
  <section className="relative bg-background py-20 overflow-hidden">
    <div className="container mx-auto flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-heading text-5xl md:text-6xl text-primaryBlack mb-6">
        SPOGMAI
      </h1>
      <p className="font-body text-xl md:text-2xl text-secondaryText mb-8 max-w-xl">
        Wear the legacy. Premium men’s fashion crafted for the confident modern gentleman.
      </p>
      <a href="/shop" className="inline-block bg-primaryBlack text-white hover:bg-secondaryBlack transition-colors font-medium py-3 px-8 rounded-md">
        Shop Now
      </a>
    </div>
    {/* Hero image */}
    <div className="absolute inset-0 -z-10">
      <Image
        src="https://images.unsplash.com/photo-1520975301238-0e7c2c9a5b57?auto=format&fit=crop&w=1600&q=80"
        alt="Men's fashion model"
        fill
        priority
        className="object-cover opacity-20"
      />
    </div>
  </section>
);
