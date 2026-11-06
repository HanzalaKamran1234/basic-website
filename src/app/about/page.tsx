import Link from 'next/link';

const ABOUT_HERO_IMG = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1800&q=85';
const ABOUT_CRAFT_IMG = 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?auto=format&fit=crop&w=1200&q=85';

export const metadata = {
  title: 'Our Story & Philosophy — SPOGMAI',
  description: 'The philosophy behind SPOGMAI — architectural menswear built on restraint, discipline, and perennial quality.',
};

export default function AboutPage() {
  return (
    <div className="bg-surface min-h-screen text-on-surface flex flex-col">
      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="relative w-full min-h-[70vh] flex items-end overflow-hidden bg-primary-container px-margin md:px-margin-desktop pb-space-2xl pt-36">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ABOUT_HERO_IMG}
            alt="SPOGMAI Sartorial Atelier"
            className="w-full h-full object-cover object-top opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-surface/40" />
        </div>

        <div className="relative z-10 max-w-4xl space-y-space-sm">
          <span className="font-label-caps-sm text-label-caps-sm text-tertiary tracking-[0.28em] uppercase block">
            ATELIER PHILOSOPHY
          </span>
          <h1 className="font-display-hero text-headline-lg md:text-[80px] md:leading-[88px] text-primary-fixed font-normal tracking-tight">
            Wear the <span className="italic font-light text-tertiary">Legacy.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant font-light max-w-xl pt-2">
            Menswear engineered with architectural restraint. Designed to outlive fleeting seasonal trends and earn a permanent place in a discerning wardrobe.
          </p>
        </div>
      </section>

      {/* ── Story Narrative ─────────────────────────────────── */}
      <section className="w-full px-margin md:px-margin-desktop py-space-2xl border-t border-outline-variant/15 bg-surface">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          <div className="lg:col-span-7 space-y-space-md">
            <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-[0.28em] block">
              ORIGIN &amp; PURPOSE
            </span>
            <h2 className="font-headline-lg text-headline-lg md:text-[48px] md:leading-[56px] text-primary-fixed font-normal">
              Built for Intentional Presence.
            </h2>
            <div className="space-y-space-sm text-on-surface-variant font-body-md text-body-md font-light leading-relaxed">
              <p>
                SPOGMAI was conceived around a single conviction: modern menswear should be deliberate, refined, and enduring. In a landscape dominated by rapid disposable trends, we champion sartorial discipline.
              </p>
              <p>
                Every silhouette is developed through rigorous proportional study. From the precise shoulder drop of our 320 GSM combed tees to the sculpted drape of our pleated trousers, we design garments that respect the wearer and elevate daily living.
              </p>
              <p>
                We do not pursue excessive adornment. Instead, our pieces command recognition through clean geometry, tactile integrity, and quiet confidence.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-surface-container-low overflow-hidden border border-outline-variant/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ABOUT_CRAFT_IMG}
              alt="Artisan tailoring textile detail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Core Values ─────────────────────────────────────── */}
      <section className="w-full bg-surface-container-low px-margin md:px-margin-desktop py-space-2xl border-t border-outline-variant/15">
        <div className="max-w-5xl mx-auto space-y-space-2xl">
          <div className="text-center space-y-space-xs max-w-2xl mx-auto">
            <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-[0.28em] block">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary-fixed font-normal">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
            <div className="bg-surface-container p-space-xl space-y-space-sm border border-outline-variant/20">
              <span className="font-display-hero text-headline-md text-tertiary block font-light">
                01
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-normal">
                Uncompromising Quality
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                We select natural, heavyweight fibers, durable weave structures, and refined yarns. Quality is not a marketing feature; it is the core foundation.
              </p>
            </div>

            <div className="bg-surface-container p-space-xl space-y-space-sm border border-outline-variant/20">
              <span className="font-display-hero text-headline-md text-tertiary block font-light">
                02
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-normal">
                Perennial Aesthetic
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                We design outside the churn of seasonal fashion calendars. Our garments are engineered to look as relevant in a decade as they do today.
              </p>
            </div>

            <div className="bg-surface-container p-space-xl space-y-space-sm border border-outline-variant/20">
              <span className="font-display-hero text-headline-md text-tertiary block font-light">
                03
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-normal">
                Intentional Restraint
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                Every detail is deliberate. From clean plackets to weighted hems, our design process removes the superfluous to let pure form speak.
              </p>
            </div>
          </div>

          <div className="pt-space-lg text-center">
            <Link
              href="/shop"
              className="inline-block px-space-xl py-space-md bg-tertiary text-on-tertiary font-label-caps-md text-label-caps-md tracking-[0.2em] uppercase hover:bg-primary-fixed transition-colors"
            >
              EXPLORE THE CURRENT COLLECTION →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
