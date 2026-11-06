import Link from 'next/link';

const UNSPLASH = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const metadata = {
  title: 'About — SPOGMAI',
  description: 'The story behind SPOGMAI — premium menswear built on confidence, craft, and timeless design.',
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">

      {/* Page Hero */}
      <div className="relative h-[70vh] min-h-96 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={UNSPLASH('photo-1507003211169-0a1dd7228f2d', 1600)}
          alt="SPOGMAI brand"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primaryBlack/60 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-accent mb-3">
              Our Story
            </p>
            <h1 className="font-heading text-7xl md:text-9xl text-white leading-none">
              Wear the<br />Legacy.
            </h1>
          </div>
        </div>
      </div>

      {/* Story Section 1 */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-5">
                The Beginning
              </p>
              <h2 className="font-heading text-5xl text-primaryBlack mb-6 leading-tight">
                Built for the Confident Man.
              </h2>
              <p className="font-body text-secondaryText leading-relaxed mb-4">
                SPOGMAI was founded on a singular belief: that menswear should be both intentional and effortless.
                In a world of fast fashion and disposable trends, we set out to create something different —
                clothing that earns its place in a wardrobe for years, not seasons.
              </p>
              <p className="font-body text-secondaryText leading-relaxed">
                Every piece we create is chosen with care. Every fabric is considered. Every silhouette is
                refined until it reaches the standard we demand — one that respects the man wearing it and
                the time he invests in getting dressed.
              </p>
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={UNSPLASH('photo-1620799139507-2a76f79a2f4d')}
                alt="SPOGMAI craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-primaryBlack text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-3">
              What We Stand For
            </p>
            <h2 className="font-heading text-5xl md:text-6xl">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                num: '01',
                title: 'Uncompromising Quality',
                desc: 'We select only the finest natural fabrics — premium cottons, European linens, and refined wool blends. Quality is not a feature; it is the foundation.',
              },
              {
                num: '02',
                title: 'Timeless Aesthetic',
                desc: 'We do not chase trends. SPOGMAI is built for longevity — styles that make sense today, tomorrow, and in ten years. The antidote to disposable fashion.',
              },
              {
                num: '03',
                title: 'Intentional Design',
                desc: 'Every detail is deliberate. From collar construction to button placement, each design decision serves both function and form.',
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="border-t border-white/15 pt-8">
                <span className="font-heading text-6xl text-white/15 leading-none block mb-4">{num}</span>
                <h3 className="font-heading text-2xl mb-4">{title}</h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section 2 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div className="order-2 md:order-1 aspect-[4/5] overflow-hidden bg-background">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={UNSPLASH('photo-1552374196-1ab2a1c593e8')}
                alt="SPOGMAI style"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-5">
                Our Approach
              </p>
              <h2 className="font-heading text-5xl text-primaryBlack mb-6 leading-tight">
                Premium. Minimal. Purposeful.
              </h2>
              <p className="font-body text-secondaryText leading-relaxed mb-4">
                We believe the most powerful statement a man can make with clothing is restraint.
                Not restraint of ambition — restraint of excess. The right piece, worn with confidence,
                says everything.
              </p>
              <p className="font-body text-secondaryText leading-relaxed mb-8">
                SPOGMAI curates each collection with this in mind. No unnecessary embellishment.
                No trend-chasing. Just precise, beautifully constructed menswear that empowers the man
                wearing it.
              </p>
              <Link
                href="/shop"
                className="inline-block font-body text-xs tracking-[0.3em] uppercase bg-primaryBlack text-white px-10 py-4 hover:bg-secondaryBlack transition-colors"
              >
                Explore the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center border-t border-primaryBlack/10">
        <div className="container mx-auto px-6 max-w-2xl">
          <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-4">
            Get in Touch
          </p>
          <h2 className="font-heading text-4xl text-primaryBlack mb-6">
            Questions or Enquiries?
          </h2>
          <p className="font-body text-secondaryText mb-8 text-sm leading-relaxed">
            We&apos;d love to hear from you. Reach out for sizing advice, order information, or anything else.
          </p>
          <Link
            href="/contact"
            className="inline-block font-body text-xs tracking-[0.3em] uppercase border border-primaryBlack px-10 py-4 hover:bg-primaryBlack hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
