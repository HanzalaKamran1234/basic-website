import { ShopClient } from '../../components/ShopClient';

export const instant = false;

export const metadata = {
  title: 'Shop — SPOGMAI Architectural Archive',
  description: 'Explore the full SPOGMAI collection. Precision T-shirts, contemporary trousers, and tailored shirts.',
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface ShopPageProps {
  searchParams: SearchParams;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const sp = await searchParams;

  const category = typeof sp.category === 'string' ? sp.category : '';
  const q = typeof sp.q === 'string' ? sp.q : '';
  const filter = typeof sp.filter === 'string' ? sp.filter : '';

  const pageTitle =
    filter === 'new'
      ? 'New Arrivals'
      : filter === 'bestseller'
      ? 'Signature Best Sellers'
      : category === 'tshirts'
      ? 'T-Shirts & Basics'
      : category === 'pants'
      ? 'Contemporary Trousers'
      : category === 'formal'
      ? 'Tailored & Casual Shirts'
      : 'The Complete Archive';

  return (
    <div className="bg-surface min-h-screen text-on-surface flex flex-col">
      {/* Editorial Page Header */}
      <section className="w-full bg-primary-container border-b border-outline-variant/20 pt-36 pb-16 px-margin md:px-margin-desktop">
        <div className="max-w-5xl space-y-space-xs">
          <span className="font-label-caps-sm text-label-caps-sm text-tertiary tracking-[0.28em] uppercase block">
            SPOGMAI SARTORIAL ARCHIVE
          </span>
          <h1 className="font-display-hero text-headline-lg md:text-[68px] md:leading-[76px] text-primary-fixed font-normal tracking-tight">
            {pageTitle}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant font-light max-w-xl pt-1">
            Precision-cut menswear engineered with architectural restraint. All garments are crafted for perennial longevity and daily dignity.
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="w-full px-margin md:px-margin-desktop py-space-xl flex-1">
        <ShopClient
          initialCategory={category}
          initialQuery={q}
          initialFilter={filter}
        />
      </section>
    </div>
  );
}
