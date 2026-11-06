import Link from 'next/link';
import { Hero } from '../components/Hero';
import { NewsletterForm } from '../components/NewsletterForm';
import { ProductGridSection } from '../components/ProductGridSection';
import { getNewArrivals, getBestSellers } from '../data/products';

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=82`;

const newArrivals  = getNewArrivals();
const bestSellers  = getBestSellers();

/* ─── Collection data ────────────────────────────────────── */
const collections = [
  {
    num:    '01',
    label:  'The Essentials',
    name:   'T-Shirts',
    sub:    'Precision-cut basics, elevated.',
    href:   '/shop?category=tshirts',
    img:    U('photo-1521572163474-6864f9cf17ab'),
    aspect: 'aspect-[3/4]',
  },
  {
    num:    '02',
    label:  'The Form',
    name:   'Pants',
    sub:    'Tailored for every occasion.',
    href:   '/shop?category=pants',
    img:    U('photo-1473966968600-fa801b869a1a'),
    aspect: 'aspect-[3/5]',
  },
  {
    num:    '03',
    label:  'The Signature',
    name:   'Formal Shirts',
    sub:    'Precision and presence.',
    href:   '/shop?category=formal',
    img:    U('photo-1620799139507-2a76f79a2f4d'),
    aspect: 'aspect-[3/4]',
  },
];

/* ─── Social gallery IDs ─────────────────────────────────── */
const galleryIds = [
  'photo-1507003211169-0a1dd7228f2d',
  'photo-1552374196-1ab2a1c593e8',
  'photo-1583743814966-8936f5b7be1a',
  'photo-1548036328-c9fa89d128fa',
  'photo-1490114538077-0a7f8cb49891',
  'photo-1529720317453-c8da503f2051',
  'photo-1512436991641-6745cdb1723f',
  'photo-1520975301238-0e7c2c9a5b57',
];

/* ════════════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ════ A — HERO ════════════════════════════════════ */}
      <Hero />

      {/* ════ D — COLLECTION DISCOVERY ════════════════════ */}
      <section className="py-28 md:py-36 bg-background overflow-hidden">
        <div className="container mx-auto px-6 md:px-10">

          {/* Section header */}
          <div className="flex items-end justify-between mb-16 reveal">
            <div>
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-3">
                Curated for You
              </p>
              <h2 className="font-heading text-[clamp(42px,6vw,80px)] text-primaryBlack leading-none">
                Collections
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden md:flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase text-secondaryText hover:text-primaryBlack underline-draw transition-colors pb-0.5"
            >
              All Products
            </Link>
          </div>

          {/* Asymmetric 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {/* Col 1 — tall */}
            <div className="reveal reveal-group">
              <CollectionCard col={collections[0]} />
            </div>
            {/* Col 2 — taller + offset top */}
            <div className="reveal md:mt-16 reveal-group">
              <CollectionCard col={collections[1]} />
            </div>
            {/* Col 3 */}
            <div className="reveal reveal-group">
              <CollectionCard col={collections[2]} />
            </div>
          </div>
        </div>
      </section>

      {/* ════ E — NEW ARRIVALS ════════════════════════════ */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-14 reveal">
            <div>
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-3">Just In</p>
              <h2 className="font-heading text-[clamp(42px,6vw,80px)] text-primaryBlack leading-none">
                New Arrivals
              </h2>
            </div>
            <Link
              href="/shop?filter=new"
              className="hidden md:block font-body text-[11px] tracking-[0.2em] uppercase text-secondaryText hover:text-primaryBlack underline-draw pb-0.5 transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="reveal">
            <ProductGridSection products={newArrivals} columns={4} />
          </div>
        </div>
      </section>

      {/* ════ H — BRAND STORY ═════════════════════════════ */}
      <section className="bg-primaryBlack text-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/* Text side */}
          <div className="flex flex-col justify-center px-10 py-24 md:px-16 lg:px-24 reveal">
            <div className="w-8 h-px bg-accent mb-8" />
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-6">
              Our Philosophy
            </p>
            <h2 className="font-heading text-[clamp(44px,5vw,72px)] leading-[1.0] mb-8">
              Clothing worn<br />
              <em className="italic text-accent">with intention.</em>
            </h2>
            <p className="font-body text-white/55 leading-relaxed text-[15px] mb-8 max-w-[360px]">
              SPOGMAI was built on a conviction that menswear should be simultaneously
              intentional and effortless. Every fabric is considered. Every silhouette refined.
              We build for the man who leads with confidence.
            </p>
            <Link
              href="/about"
              className="font-body text-[11px] tracking-[0.25em] uppercase text-white underline-draw pb-0.5 w-fit hover:text-accent transition-colors"
            >
              Read Our Story
            </Link>
          </div>
          {/* Image side */}
          <div className="relative min-h-80 md:min-h-0 overflow-hidden img-zoom">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={U('photo-1507679799987-c73779587ccf')}
              alt="SPOGMAI brand story"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primaryBlack/25" />
          </div>
        </div>
      </section>

      {/* ════ F — CAMPAIGN ════════════════════════════════ */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={U('photo-1543087903-1ac2ec7aa8c5', 1600)}
          alt="SPOGMAI The Legacy Edit campaign"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primaryBlack/50" />

        {/* Campaign text — bottom-left editorial placement */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24">
          <div className="container mx-auto px-6 md:px-10">
            <p className="font-body text-[10px] tracking-[0.5em] uppercase text-accent mb-5 reveal">
              New Season
            </p>
            <h2
              className="font-heading text-white leading-none mb-8 reveal"
              style={{ fontSize: 'clamp(60px, 11vw, 160px)' }}
            >
              The Legacy<br />
              <em className="italic">Edit.</em>
            </h2>
            <div className="reveal">
              <Link
                href="/shop"
                className="inline-block font-body text-[11px] tracking-[0.3em] uppercase text-white border border-white/40 hover:border-white hover:bg-white hover:text-primaryBlack transition-all duration-300 px-10 py-4"
              >
                Explore the Edit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════ G — BEST SELLERS ════════════════════════════ */}
      <section className="py-28 md:py-36 bg-background">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-14 reveal">
            <div>
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-3">
                Most Wanted
              </p>
              <h2 className="font-heading text-[clamp(42px,6vw,80px)] text-primaryBlack leading-none">
                Best Sellers
              </h2>
            </div>
            <Link
              href="/shop?filter=bestseller"
              className="hidden md:block font-body text-[11px] tracking-[0.2em] uppercase text-secondaryText hover:text-primaryBlack underline-draw pb-0.5 transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="reveal">
            <ProductGridSection products={bestSellers} columns={4} />
          </div>
        </div>
      </section>

      {/* ════ I — QUALITY / WHY SPOGMAI ══════════════════ */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            {/* Image */}
            <div className="relative overflow-hidden img-zoom reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={U('photo-1548036328-c9fa89d128fa')}
                alt="SPOGMAI fabric and craft detail"
                className="w-full aspect-[4/5] object-cover"
              />
              {/* Ghost roman numeral overlay */}
              <span
                className="absolute bottom-6 right-6 font-heading text-[120px] text-white/10 leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                I
              </span>
            </div>

            {/* Content */}
            <div className="reveal">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-5">
                The Difference
              </p>
              <h2 className="font-heading text-[clamp(44px,5vw,68px)] text-primaryBlack leading-tight mb-10">
                Why<br />SPOGMAI
              </h2>

              <div className="space-y-10">
                {[
                  { n: '01', t: 'Premium Fabrics',   d: 'Only the finest natural fibres. Each piece selected for longevity, comfort, and refined drape.' },
                  { n: '02', t: 'Timeless Design',    d: 'Silhouettes that transcend seasons. Built to remain relevant — classics elevated with a modern edge.' },
                  { n: '03', t: 'Considered Craft',   d: 'Precision in every seam. Each garment reflects a commitment to quality you feel the moment you wear it.' },
                ].map(({ n, t, d }) => (
                  <div key={n} className="flex gap-6 group">
                    <span className="font-heading text-5xl text-accent/25 leading-none shrink-0 group-hover:text-accent/50 transition-colors duration-500">
                      {n}
                    </span>
                    <div className="border-l border-primaryBlack/10 pl-6 pt-1">
                      <h3 className="font-heading text-xl text-primaryBlack mb-2">{t}</h3>
                      <p className="font-body text-secondaryText text-sm leading-relaxed">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ TESTIMONIALS ════════════════════════════════ */}
      <section className="py-24 bg-background border-t border-primaryBlack/5">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-14 reveal">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-3">Voices</p>
            <h2 className="font-heading text-[clamp(40px,5vw,68px)] text-primaryBlack">What They Say</h2>
            <p className="font-body text-[11px] text-secondaryText/50 mt-3">
              Placeholder testimonials — for demonstration only.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto reveal-group">
            {[
              { q: 'The fit is impeccable. SPOGMAI has completely changed how I approach getting dressed — every piece just works.',    n: 'A. Rehman', l: 'Demo' },
              { q: 'Elegant, modern, always comfortable. I wear SPOGMAI to every important meeting. The quality speaks for itself.',    n: 'J. Khan',   l: 'Demo' },
              { q: 'Finally a brand that understands premium menswear. The linen trousers are exceptional — I get compliments daily.', n: 'O. Farooq', l: 'Demo' },
            ].map(({ q, n, l }) => (
              <blockquote
                key={n}
                className="reveal bg-white p-8 md:p-9 border-t-2 border-accent relative"
              >
                <span className="font-heading text-[72px] text-accent/15 absolute top-4 left-6 leading-none select-none" aria-hidden="true">&ldquo;</span>
                <p className="font-heading text-lg md:text-xl text-primaryBlack italic leading-relaxed mt-6 mb-6">
                  &ldquo;{q}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <cite className="font-body text-sm text-primaryBlack not-italic font-medium">— {n}</cite>
                  <span className="font-body text-[10px] text-secondaryText/40 tracking-widest uppercase bg-background px-2 py-0.5">{l}</span>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ════ J — NEWSLETTER ══════════════════════════════ */}
      <section className="py-28 bg-primaryBlack text-white">
        <div className="container mx-auto px-6 md:px-10 text-center max-w-2xl mx-auto reveal">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-5">
            Join the Circle
          </p>
          <h2 className="font-heading text-[clamp(44px,5vw,72px)] mb-5 leading-tight">
            Stay in<br />the Know
          </h2>
          <p className="font-body text-white/50 mb-10 text-sm leading-relaxed max-w-sm mx-auto">
            New arrivals, exclusive access, and style inspiration — delivered to you first.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* ════ SOCIAL GALLERY ══════════════════════════════ */}
      <section className="bg-white pt-20 pb-0">
        <div className="text-center mb-10 container mx-auto px-6 reveal">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-3">@spogmai</p>
          <h2 className="font-heading text-[clamp(36px,4vw,56px)] text-primaryBlack">Follow Our Story</h2>
          <p className="font-body text-[11px] text-secondaryText/50 mt-2">
            Placeholder imagery — demonstration only.
          </p>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8">
          {galleryIds.map((id, i) => (
            <div key={i} className="overflow-hidden img-zoom aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=70`}
                alt={`Style gallery ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

/* ─── Collection Card ─────────────────────────────────────── */
function CollectionCard({ col }: {
  col: { num: string; label: string; name: string; sub: string; href: string; img: string; aspect: string }
}) {
  return (
    <Link href={col.href} className="group block relative overflow-hidden">
      <div className={`${col.aspect} overflow-hidden bg-secondaryBlack img-zoom`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={col.img}
          alt={col.name}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
        />
      </div>

      {/* Ghost number behind image */}
      <span
        className="absolute top-4 right-4 font-heading text-[80px] text-white/[0.07] leading-none select-none pointer-events-none z-0"
        aria-hidden="true"
      >
        {col.num}
      </span>

      {/* Gradient + content */}
      <div className="absolute inset-0 bg-gradient-to-t from-primaryBlack/85 via-primaryBlack/20 to-transparent flex flex-col justify-end p-7 z-10">
        <p className="font-body text-[9px] tracking-[0.4em] uppercase text-accent mb-1.5">
          {col.num} — {col.label}
        </p>
        <h3 className="font-heading text-3xl text-white mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
          {col.name}
        </h3>
        <p className="font-body text-xs text-white/60 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {col.sub}
        </p>
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-white/60 group-hover:text-white underline-draw pb-0.5 w-fit transition-colors">
          Shop Now
        </span>
      </div>
    </Link>
  );
}
