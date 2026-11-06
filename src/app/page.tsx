import Link from 'next/link';
import { Hero } from '../components/Hero';
import { ProductGridSection } from '../components/ProductGridSection';
import { NewsletterForm } from '../components/NewsletterForm';
import { getNewArrivals, products } from '../data/products';

// Editorial photography assets for the magazine sections
const IMG_TSHIRT_CAT = 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85';
const IMG_SHIRT_CAT  = 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?auto=format&fit=crop&w=1200&q=85';
const IMG_PANTS_CAT  = 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=85';
const IMG_DETAIL_MACRO = 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=85';
const IMG_CAMPAIGN_PANO = 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=2000&q=85';

export default function Home() {
  const newArrivals = getNewArrivals().slice(0, 4);
  const fallbackArrivals = newArrivals.length >= 4 ? newArrivals : products.slice(0, 4);

  return (
    <div className="flex flex-col w-full text-on-surface bg-surface select-none">

      {/* ── 1. CINEMATIC HERO SECTION ──────────────────────── */}
      <Hero />

      {/* ── 2. CATEGORY EDITORIAL SECTION (ASYMMETRIC GRID) ─── */}
      <section className="w-full px-margin md:px-margin-desktop py-space-2xl bg-surface border-t border-outline-variant/15">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-xl border-b border-outline-variant/20 gap-space-md">
          <div>
            <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-[0.28em] block mb-space-xs">
              SECTION 01 / FORM &amp; FUNCTION
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal">
              Sartorial Categories
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md font-light">
            A structured dialogue between heavyweight silhouettes, pristine tailoring, and relaxed drape trousers.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop mt-space-xl">
          {/* Category 01: T-Shirts (5 cols) */}
          <Link
            href="/shop?category=tshirts"
            className="lg:col-span-5 flex flex-col justify-between group cursor-pointer bg-surface-container-low p-space-md transition-colors duration-500 hover:bg-surface-container border border-outline-variant/20 hover:border-tertiary/40"
          >
            <div className="relative overflow-hidden aspect-[4/5] w-full bg-surface-container-lowest">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_TSHIRT_CAT}
                alt="T-Shirts &amp; Oversized Basics"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-space-md left-space-md bg-primary-container/80 backdrop-blur-sm px-space-sm py-space-xs">
                <span className="font-label-caps-sm text-label-caps-sm text-tertiary tracking-widest">
                  № 01
                </span>
              </div>
              <div className="absolute bottom-space-md right-space-md bg-primary-container/90 px-space-sm py-space-xs">
                <span className="font-caption text-caption text-primary tracking-widest uppercase">
                  HEAVYWEIGHT COMBED COTTON
                </span>
              </div>
            </div>

            <div className="pt-space-lg space-y-space-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-tertiary transition-colors">
                  T-Shirts &amp; Oversized Basics
                </h3>
                <span className="text-tertiary transition-transform group-hover:translate-x-2">→</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light">
                Heavyweight organic fibers, drop-shoulder seams, and relaxed cuts calibrated for everyday presence.
              </p>
              <div className="pt-space-xs">
                <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-widest inline-block border-b border-tertiary/40 group-hover:border-tertiary pb-0.5">
                  VIEW CATEGORY →
                </span>
              </div>
            </div>
          </Link>

          {/* Category 02 & 03 Right Cluster (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-gutter-desktop">
            {/* Category 02: Tailored & Casual Shirts */}
            <Link
              href="/shop?category=formal"
              className="flex flex-col sm:flex-row group cursor-pointer bg-surface-container-low p-space-md transition-colors duration-500 hover:bg-surface-container gap-space-lg border border-outline-variant/20 hover:border-tertiary/40"
            >
              <div className="relative overflow-hidden aspect-[4/5] sm:w-1/2 w-full flex-shrink-0 bg-surface-container-lowest">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMG_SHIRT_CAT}
                  alt="Tailored &amp; Casual Shirts"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-space-md left-space-md bg-primary-container/80 backdrop-blur-sm px-space-sm py-space-xs">
                  <span className="font-label-caps-sm text-label-caps-sm text-tertiary tracking-widest">
                    № 02
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between py-space-sm sm:w-1/2">
                <div className="space-y-space-sm">
                  <span className="font-caption text-caption text-tertiary uppercase tracking-widest">
                    REFINED DRAPES
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-tertiary transition-colors">
                    Tailored &amp; Casual Shirts
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-light">
                    Architectural spread collars, seamless plackets, and breathable weaves sculpted for effortless layering.
                  </p>
                </div>
                <div className="pt-space-md">
                  <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-widest inline-block border-b border-tertiary/40 group-hover:border-tertiary pb-0.5">
                    VIEW CATEGORY →
                  </span>
                </div>
              </div>
            </Link>

            {/* Category 03: Contemporary Trousers */}
            <Link
              href="/shop?category=pants"
              className="flex flex-col sm:flex-row-reverse group cursor-pointer bg-surface-container-low p-space-md transition-colors duration-500 hover:bg-surface-container gap-space-lg border border-outline-variant/20 hover:border-tertiary/40"
            >
              <div className="relative overflow-hidden aspect-[4/5] sm:w-1/2 w-full flex-shrink-0 bg-surface-container-lowest">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMG_PANTS_CAT}
                  alt="Contemporary Trousers"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-space-md right-space-md bg-primary-container/80 backdrop-blur-sm px-space-sm py-space-xs">
                  <span className="font-label-caps-sm text-label-caps-sm text-tertiary tracking-widest">
                    № 03
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between py-space-sm sm:w-1/2">
                <div className="space-y-space-sm">
                  <span className="font-caption text-caption text-tertiary uppercase tracking-widest">
                    PROPORTION &amp; VOLUME
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-tertiary transition-colors">
                    Contemporary Trousers
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-light">
                    Single and double-pleated profiles, high-rise silhouettes, and brushed twills engineered with natural drape.
                  </p>
                </div>
                <div className="pt-space-md">
                  <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-widest inline-block border-b border-tertiary/40 group-hover:border-tertiary pb-0.5">
                    VIEW CATEGORY →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. NEW ARRIVALS SHOWCASE ────────────────────────── */}
      <section className="w-full px-margin md:px-margin-desktop py-space-2xl bg-surface-dim border-t border-outline-variant/15" id="new-arrivals">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-lg border-b border-outline-variant/20 gap-space-md mb-space-xl">
          <div className="space-y-space-xs">
            <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-[0.28em] block">
              CURATED EDIT
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal">
              New Arrivals
            </h2>
          </div>

          <div className="flex items-center gap-space-lg">
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Showing {fallbackArrivals.length} curated pieces
            </span>
            <Link
              href="/shop"
              className="font-label-caps-md text-label-caps-md text-tertiary uppercase tracking-widest hover:text-on-surface transition-colors flex items-center gap-space-xs"
            >
              <span>VIEW FULL ARCHIVE</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* 4 Flagship Garment Grid */}
        <ProductGridSection products={fallbackArrivals} columns={4} />
      </section>

      {/* ── 4. BRAND STORYTELLING ("DEFINED BY DETAIL") ──────── */}
      <section className="w-full bg-primary-container py-space-2xl px-margin md:px-margin-desktop border-t border-outline-variant/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Left: Tactile Photographic Close-up */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden aspect-[4/5] w-full bg-surface-container-lowest">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_DETAIL_MACRO}
                alt="Tactile macro detail photography"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Offset Architectural Caption Card */}
            <div className="mt-space-md lg:absolute lg:-bottom-space-lg lg:right-space-md bg-surface-container p-space-lg max-w-xs shadow-2xl border border-outline-variant/30">
              <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-widest block mb-1">
                CRAFT DISCIPLINE
              </span>
              <p className="font-body-sm text-body-sm text-on-surface font-light">
                Every garment features reinforced collar construction and precision-stitched seams designed to outlive passing trends.
              </p>
            </div>
          </div>

          {/* Right: Editorial Quote & Narrative */}
          <div className="lg:col-span-6 lg:pl-space-xl space-y-space-xl pt-space-lg lg:pt-0">
            <div className="space-y-space-md">
              <span className="font-label-caps-sm text-label-caps-sm text-tertiary tracking-[0.3em] uppercase block">
                EDITORIAL CAMPAIGN
              </span>
              <h2 className="font-headline-lg text-headline-lg md:text-[50px] md:leading-[58px] text-primary-fixed font-normal">
                “Style is not about following every trend. It is about knowing who you are.”
              </h2>
            </div>

            <div className="space-y-space-md text-on-surface-variant font-body-md text-body-md font-light leading-relaxed">
              <p>
                At SPOGMAI, we discard seasonal velocity in pursuit of perennial permanence. We treat fabric as an architectural medium: calculating the drape coefficient of heavyweight combed cottons, testing the resilience of structured yarns, and curating restrained palettes.
              </p>
              <p>
                Our garments do not shout for attention; they command presence through deliberate silhouette, razor-sharp tailoring, and tactile dignity.
              </p>
            </div>

            {/* Design Pillars */}
            <div className="pt-space-sm flex items-center gap-space-xl border-t border-outline-variant/20">
              <div>
                <span className="font-display-hero text-headline-sm text-tertiary font-normal block">
                  FORM
                </span>
                <span className="font-caption text-caption text-on-surface-variant uppercase tracking-widest block mt-1">
                  ARCHITECTURAL LINE
                </span>
              </div>
              <div>
                <span className="font-display-hero text-headline-sm text-tertiary font-normal block">
                  FOCUS
                </span>
                <span className="font-caption text-caption text-on-surface-variant uppercase tracking-widest block mt-1">
                  TACTILE LONGEVITY
                </span>
              </div>
              <div>
                <span className="font-display-hero text-headline-sm text-tertiary font-normal block">
                  SYSTEM
                </span>
                <span className="font-caption text-caption text-on-surface-variant uppercase tracking-widest block mt-1">
                  MODULAR HARMONY
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. BRAND PHILOSOPHY ("LESS, BUT BETTER") ─────────── */}
      <section className="w-full bg-surface-container-low py-space-2xl px-margin md:px-margin-desktop border-t border-outline-variant/15" id="philosophy">
        <div className="max-w-4xl mx-auto text-center space-y-space-md mb-space-2xl">
          <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-[0.3em]">
            THE ATELIER MANIFESTO
          </span>
          <h2 className="font-display-hero text-display-hero-mobile md:text-display-hero text-primary-fixed font-normal tracking-tight">
            LESS, BUT BETTER.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant font-light max-w-2xl mx-auto">
            A quiet revolution against disposable fashion. Three fundamental principles guide every seam, dart, and silhouette.
          </p>
        </div>

        {/* Three Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
          {/* Pillar 1 */}
          <div className="bg-surface-container p-space-xl space-y-space-md transition-all duration-300 hover:bg-surface-container-high border border-outline-variant/20 hover:border-tertiary/40">
            <div className="flex items-center justify-between pb-space-md border-b border-outline-variant/20">
              <span className="font-label-caps-md text-label-caps-md text-tertiary">PILLAR 01</span>
              <span className="font-label-caps-sm text-label-caps-sm text-tertiary/80 uppercase">SILHOUETTE</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-normal">
              The Architectural Silhouette
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
              Engineered around natural posture and movement. Relaxed volume balanced by structured shoulders and weighted hems that guarantee a sculpted line in motion.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-surface-container p-space-xl space-y-space-md transition-all duration-300 hover:bg-surface-container-high border border-outline-variant/20 hover:border-tertiary/40">
            <div className="flex items-center justify-between pb-space-md border-b border-outline-variant/20">
              <span className="font-label-caps-md text-label-caps-md text-tertiary">PILLAR 02</span>
              <span className="font-label-caps-sm text-label-caps-sm text-tertiary/80 uppercase">LONGEVITY</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-normal">
              Tactile Longevity
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
              Textiles selected not for synthetic sheen, but for how they mature over years. Long-staple cottons, double-twisted yarns, and European raw linens that gain character with age.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-surface-container p-space-xl space-y-space-md transition-all duration-300 hover:bg-surface-container-high border border-outline-variant/20 hover:border-tertiary/40">
            <div className="flex items-center justify-between pb-space-md border-b border-outline-variant/20">
              <span className="font-label-caps-md text-label-caps-md text-tertiary">PILLAR 03</span>
              <span className="font-label-caps-sm text-label-caps-sm text-tertiary/80 uppercase">HARMONY</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-normal">
              The Restrained Wardrobe
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
              A modular sartorial system. Every shade of charcoal, chalk, obsidian, and espresso is tuned to integrate seamlessly with all pieces across all seasons.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. PANORAMIC EDITORIAL CAMPAIGN ─────────────────── */}
      <section className="relative w-full min-h-[640px] flex items-center justify-center overflow-hidden bg-primary-container px-margin md:px-margin-desktop py-space-2xl border-t border-outline-variant/20">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMG_CAMPAIGN_PANO}
            alt="Panoramic Editorial Campaign"
            className="w-full h-full object-cover opacity-35 scale-100 transition-transform duration-1000 ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary-container/75" />
        </div>

        <div className="relative z-10 max-w-3xl text-center space-y-space-lg">
          <span className="font-label-caps-md text-label-caps-md text-tertiary tracking-[0.3em] uppercase block">
            EDITORIAL REFLECTION
          </span>
          <h2 className="font-display-hero text-headline-lg md:text-[64px] md:leading-[72px] text-primary-fixed font-normal">
            A NEW STANDARD OF EVERYDAY STYLE.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant font-light max-w-xl mx-auto leading-relaxed">
            Experience our garment lookbook curated with artisan notes, silhouette breakdowns, and considered craftsmanship.
          </p>
          <div className="pt-space-md">
            <Link
              href="/about"
              className="inline-flex items-center gap-space-sm px-space-xl py-space-md bg-transparent border border-outline-variant/60 text-primary-fixed hover:border-tertiary hover:text-tertiary transition-colors font-label-caps-md text-label-caps-md tracking-[0.2em] uppercase"
            >
              <span>EXPLORE THE EDITORIAL</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. NEWSLETTER CLUB ("STAY IN THE WORLD OF SPOGMAI") ── */}
      <section className="w-full bg-surface-container py-space-2xl px-margin md:px-margin-desktop border-t border-outline-variant/20">
        <div className="max-w-2xl mx-auto text-center space-y-space-lg">
          <div className="space-y-space-xs">
            <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-[0.28em] block">
              PRIVATE INVITATION
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary-fixed font-normal">
              Stay in the World of SPOGMAI
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
            Be first to receive seasonal drops, exclusive capsule previews, and archive releases across Pakistan.
          </p>

          <NewsletterForm />
        </div>
      </section>

    </div>
  );
}
