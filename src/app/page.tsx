import { Hero } from '../components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────── */}
      <Hero />

      {/* ── Featured Collections ─────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-accent tracking-[0.3em] text-xs uppercase font-body mb-2">Collections</p>
          <h2 className="font-heading text-4xl text-center mb-10">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Premium T-Shirts', 'Men\'s Trousers', 'Formal Shirts'].map((name, i) => (
              <div key={i} className="bg-white rounded shadow-sm p-10 text-center hover:shadow-md transition-shadow">
                <div className="w-full h-48 bg-secondaryBlack/10 mb-4 rounded" />
                <h3 className="font-heading text-xl">{name}</h3>
                <p className="text-secondaryText text-sm mt-1">Explore the range</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best-selling Products ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-accent tracking-[0.3em] text-xs uppercase font-body mb-2">Top Picks</p>
          <h2 className="font-heading text-4xl text-center mb-10">Best-selling Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {['Classic White Tee', 'Slim Fit Trousers', 'Oxford Formal Shirt', 'Linen Chinos'].map((name, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="w-full h-64 bg-background mb-3 overflow-hidden">
                  <div className="w-full h-full bg-secondaryBlack/5 group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h4 className="font-heading text-lg">{name}</h4>
                <p className="text-secondaryText text-sm">PKR 2,999</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── New Arrivals ──────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-accent tracking-[0.3em] text-xs uppercase font-body mb-2">Just In</p>
          <h2 className="font-heading text-4xl text-center mb-10">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {['Summer Linen Shirt', 'Relaxed Cargo', 'Polo Essential', 'Tailored Blazer'].map((name, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="w-full h-64 bg-white mb-3 overflow-hidden relative">
                  <div className="w-full h-full bg-secondaryBlack/5 group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-3 left-3 bg-primaryBlack text-white text-xs py-1 px-2 tracking-wide font-body">NEW</span>
                </div>
                <h4 className="font-heading text-lg">{name}</h4>
                <p className="text-secondaryText text-sm">PKR 3,499</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Story ───────────────────────────────────── */}
      <section className="py-24 bg-primaryBlack text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-4">Our Story</p>
          <h2 className="font-heading text-4xl md:text-5xl mb-6">Crafted for the Confident Man</h2>
          <p className="font-body text-white/70 leading-relaxed text-lg">
            SPOGMAI was born from a passion for timeless, modern menswear. Every piece is selected with care — built for the man who values quality, heritage, and effortless sophistication. We believe clothing should be more than what you wear; it should be a statement of who you are.
          </p>
        </div>
      </section>

      {/* ── Editorial Campaign ────────────────────────────── */}
      <section className="relative h-72 md:h-[500px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&w=1600&q=80"
          alt="SPOGMAI seasonal campaign"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primaryBlack/50 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-3">New Season</p>
            <h2 className="font-heading text-5xl md:text-7xl">The Legacy Edit</h2>
          </div>
        </div>
      </section>

      {/* ── Why Choose SPOGMAI ───────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-accent tracking-[0.3em] text-xs uppercase font-body mb-2">Why Us</p>
          <h2 className="font-heading text-4xl text-center mb-12">Why Choose SPOGMAI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              { title: 'Premium Quality', desc: 'Only the finest fabrics. Each piece is crafted for longevity and comfort.' },
              { title: 'Timeless Design', desc: 'Styles that transcend trends — built to remain relevant season after season.' },
              { title: 'Ethical Sourcing', desc: 'Responsibly sourced materials with respect for people and the environment.' },
            ].map(({ title, desc }, i) => (
              <div key={i}>
                <div className="w-12 h-12 border border-accent mx-auto mb-4 flex items-center justify-center">
                  <span className="text-accent font-heading text-xl">{i + 1}</span>
                </div>
                <h3 className="font-heading text-xl mb-2">{title}</h3>
                <p className="text-secondaryText text-sm font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-accent tracking-[0.3em] text-xs uppercase font-body mb-2">Reviews</p>
          <h2 className="font-heading text-4xl text-center mb-10">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { quote: 'The fit and feel are unmatched. SPOGMAI has become my go-to brand for formal events.', name: 'Alex R.' },
              { quote: 'Elegant, modern, and always comfortable. I get compliments every time I wear it.', name: 'Jamal K.' },
            ].map(({ quote, name }, i) => (
              <blockquote key={i} className="p-8 bg-white shadow-sm border-l-2 border-accent">
                <p className="font-heading text-xl italic text-primaryBlack mb-4">&ldquo;{quote}&rdquo;</p>
                <cite className="text-sm text-secondaryText font-body not-italic">— {name}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────── */}
      <section className="py-20 bg-primaryBlack text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-2">Newsletter</p>
          <h2 className="font-heading text-4xl mb-4">Stay in the Know</h2>
          <p className="font-body text-white/60 mb-8 max-w-md mx-auto">
            Be the first to hear about new arrivals, exclusive offers, and style inspiration.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="bg-accent text-white hover:bg-white hover:text-primaryBlack transition-colors font-body font-medium tracking-widest uppercase text-sm py-3 px-8"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ── Instagram / Social ───────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-2">@spogmai</p>
          <h2 className="font-heading text-4xl mb-8">Follow Our Story</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'photo-1507003211169-0a1dd7228f2d',
              'photo-1552374196-1ab2a1c593e8',
              'photo-1512436991641-6745cdb1723f',
              'photo-1520975301238-0e7c2c9a5b57',
              'photo-1583743814966-8936f5b7be1a',
              'photo-1490114538077-0a7f8cb49891',
              'photo-1529720317453-c8da503f2051',
              'photo-1517841905240-472988babdf9',
            ].map((id, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=70`}
                alt={`Style inspiration ${i + 1}`}
                className="w-full h-40 md:h-56 object-cover hover:opacity-80 transition-opacity cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
