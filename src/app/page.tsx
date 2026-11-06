import Link from 'next/link';
import { Hero } from '../components/Hero';
import { NewsletterForm } from '../components/NewsletterForm';
import { ProductGridSection } from '../components/ProductGridSection';
import { getNewArrivals, getBestSellers } from '../data/products';

/* ─── Helpers ────────────────────────────────────────────── */
const UNSPLASH = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ─── Data ───────────────────────────────────────────────── */
const newArrivals = getNewArrivals();
const bestSellers = getBestSellers();

/* ─── Collections ────────────────────────────────────────── */
const collections = [
  {
    name: 'Premium T-Shirts',
    sub: 'Refined everyday essentials',
    href: '/shop?category=tshirts',
    img: UNSPLASH('photo-1521572163474-6864f9cf17ab'),
    span: 'md:col-span-1',
  },
  {
    name: "Men's Trousers",
    sub: 'Tailored for every occasion',
    href: '/shop?category=pants',
    img: UNSPLASH('photo-1473966968600-fa801b869a1a'),
    span: 'md:col-span-1',
  },
  {
    name: 'Formal Shirts',
    sub: 'Precision and presence',
    href: '/shop?category=formal',
    img: UNSPLASH('photo-1620799139507-2a76f79a2f4d'),
    span: 'md:col-span-1',
  },
];

/* ─── Social gallery ─────────────────────────────────────── */
const galleryIds = [
  'photo-1507003211169-0a1dd7228f2d',
  'photo-1552374196-1ab2a1c593e8',
  'photo-1512436991641-6745cdb1723f',
  'photo-1520975301238-0e7c2c9a5b57',
  'photo-1583743814966-8936f5b7be1a',
  'photo-1490114538077-0a7f8cb49891',
  'photo-1529720317453-c8da503f2051',
  'photo-1548036328-c9fa89d128fa',
];

/* ══════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ──────────────────────────────────────────── */}
      <Hero />

      {/* ── Featured Collections ──────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">

          {/* Section label */}
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-2">
                Curated for You
              </p>
              <h2 className="font-heading text-5xl md:text-6xl text-primaryBlack leading-none">
                Collections
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden md:flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-secondaryText hover:text-primaryBlack border-b border-current pb-0.5 transition-colors"
            >
              All Products
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {collections.map((col) => (
              <Link key={col.name} href={col.href} className={`group relative overflow-hidden block ${col.span}`}>
                <div className="aspect-[3/4] overflow-hidden bg-secondaryBlack">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={col.img}
                    alt={col.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primaryBlack/80 via-transparent to-transparent flex flex-col justify-end p-7">
                  <p className="font-body text-xs text-accent tracking-[0.25em] uppercase mb-1">{col.sub}</p>
                  <h3 className="font-heading text-3xl text-white mb-3">{col.name}</h3>
                  <span className="font-body text-xs text-white/70 tracking-[0.2em] uppercase border-b border-white/40 pb-0.5 w-fit group-hover:border-accent group-hover:text-white transition-colors">
                    Shop Now
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── New Arrivals ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-2">
                Just In
              </p>
              <h2 className="font-heading text-5xl md:text-6xl text-primaryBlack leading-none">
                New Arrivals
              </h2>
            </div>
            <Link
              href="/shop?filter=new"
              className="hidden md:flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-secondaryText hover:text-primaryBlack border-b border-current pb-0.5 transition-colors"
            >
              View All
            </Link>
          </div>
          <ProductGridSection products={newArrivals} columns={4} />
        </div>
      </section>

      {/* ── Brand Story ───────────────────────────────────── */}
      <section className="bg-primaryBlack text-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Text */}
          <div className="flex flex-col justify-center px-10 py-20 md:px-16 md:py-28 lg:px-24">
            <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-5">
              Our Heritage
            </p>
            <h2 className="font-heading text-5xl md:text-6xl leading-tight mb-8">
              Crafted for<br />the Confident<br />Man.
            </h2>
            <p className="font-body text-white/65 leading-relaxed text-base mb-8 max-w-sm">
              SPOGMAI was born from a conviction that menswear should be both intentional and effortless.
              Every silhouette is considered. Every fabric is chosen with purpose. We build clothing
              for the man who leads — in the boardroom, on the street, and in life.
            </p>
            <Link
              href="/about"
              className="font-body text-xs tracking-[0.25em] uppercase text-white border-b border-white/40 pb-0.5 w-fit hover:border-accent hover:text-accent transition-colors"
            >
              Our Story
            </Link>
          </div>
          {/* Image */}
          <div className="relative min-h-72 md:min-h-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={UNSPLASH('photo-1507679799987-c73779587ccf')}
              alt="SPOGMAI brand story"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primaryBlack/20" />
          </div>
        </div>
      </section>

      {/* ── Best Sellers ──────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-2">
                Most Wanted
              </p>
              <h2 className="font-heading text-5xl md:text-6xl text-primaryBlack leading-none">
                Best Sellers
              </h2>
            </div>
            <Link
              href="/shop?filter=bestseller"
              className="hidden md:flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-secondaryText hover:text-primaryBlack border-b border-current pb-0.5 transition-colors"
            >
              View All
            </Link>
          </div>
          <ProductGridSection products={bestSellers} columns={4} />
        </div>
      </section>

      {/* ── Campaign Section ──────────────────────────────── */}
      <section className="relative h-[70vh] min-h-96 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={UNSPLASH('photo-1543087903-1ac2ec7aa8c5', 1600)}
          alt="SPOGMAI The Legacy Edit campaign"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primaryBlack/55 flex items-center">
          <div className="container mx-auto px-6">
            <p className="text-accent tracking-[0.4em] text-xs uppercase font-body mb-4">
              New Season
            </p>
            <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-8">
              The Legacy<br />Edit.
            </h2>
            <Link
              href="/shop"
              className="inline-block font-body text-xs tracking-[0.3em] uppercase text-white border border-white/50 hover:border-white hover:bg-white hover:text-primaryBlack transition-all duration-300 px-10 py-4"
            >
              Explore the Edit
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why SPOGMAI ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-3">
              The Difference
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-primaryBlack">
              Why SPOGMAI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                num: '01',
                title: 'Premium Fabrics',
                desc: 'Only the finest natural fibres. Each piece is selected for longevity, comfort, and refined drape. We do not compromise on material.',
              },
              {
                num: '02',
                title: 'Timeless Design',
                desc: 'Styles that transcend trends. Our silhouettes are built to remain relevant season after season — classics elevated with a modern edge.',
              },
              {
                num: '03',
                title: 'Considered Craft',
                desc: 'Precision in every seam. From cut to finish, each garment reflects a commitment to quality that you can feel the moment you put it on.',
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="relative pl-6 border-l border-accent/40">
                <span className="font-heading text-7xl text-accent/20 absolute -top-4 -left-2 leading-none select-none">
                  {num}
                </span>
                <div className="pt-6">
                  <h3 className="font-heading text-2xl text-primaryBlack mb-3">{title}</h3>
                  <p className="font-body text-secondaryText text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-3">
              Voices
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-primaryBlack">
              What They Say
            </h2>
            <p className="font-body text-xs text-secondaryText mt-3">
              Placeholder testimonials — for demonstration purposes only.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: 'The fit is impeccable. SPOGMAI has completely changed how I approach getting dressed — every piece just works.',
                name: 'A. Rehman',
                label: 'Demo Review',
              },
              {
                quote: 'Elegant, modern, and always comfortable. I wear SPOGMAI to every important meeting. The quality speaks for itself.',
                name: 'J. Khan',
                label: 'Demo Review',
              },
              {
                quote: 'Finally a brand that understands what premium menswear should look like. The linen trousers are a masterpiece.',
                name: 'O. Farooq',
                label: 'Demo Review',
              },
            ].map(({ quote, name, label }) => (
              <blockquote
                key={name}
                className="bg-white p-8 border-t-2 border-accent"
              >
                <p className="font-heading text-xl text-primaryBlack italic leading-relaxed mb-6">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <cite className="font-body text-sm text-primaryBlack not-italic font-medium">
                    — {name}
                  </cite>
                  <span className="font-body text-xs text-secondaryText/60 bg-background px-2 py-0.5">
                    {label}
                  </span>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────── */}
      <section className="py-24 bg-primaryBlack text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-4">
            Join the Circle
          </p>
          <h2 className="font-heading text-5xl md:text-6xl mb-4">
            Stay in the Know
          </h2>
          <p className="font-body text-white/55 mb-10 max-w-md mx-auto text-sm leading-relaxed">
            New arrivals, exclusive offers, and style inspiration — delivered directly to you.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* ── Social Gallery ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center mb-10">
          <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-3">
            @spogmai
          </p>
          <h2 className="font-heading text-5xl text-primaryBlack">
            Follow Our Story
          </h2>
          <p className="font-body text-xs text-secondaryText mt-2">
            Placeholder imagery — for demonstration purposes only.
          </p>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-1">
          {galleryIds.map((id, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=70`}
              alt={`Style gallery ${i + 1}`}
              className="w-full aspect-square object-cover hover:opacity-75 transition-opacity duration-300 cursor-pointer"
            />
          ))}
        </div>
      </section>

    </div>
  );
}
