import { ShopClient } from '../../components/ShopClient';

export const instant = false;

export const metadata = {
  title: 'Shop — SPOGMAI',
  description: 'Explore the full SPOGMAI collection. Premium T-shirts, trousers, and formal shirts.',
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
      ? 'Best Sellers'
      : category === 'tshirts'
      ? 'T-Shirts'
      : category === 'pants'
      ? 'Pants & Trousers'
      : category === 'formal'
      ? 'Formal Shirts'
      : 'All Products';

  return (
    <div className="bg-background min-h-screen">

      {/* Page Header */}
      <div className="bg-primaryBlack text-white pt-32 pb-14">
        <div className="container mx-auto px-6">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">
            SPOGMAI Collection
          </p>
          <h1 className="font-heading text-6xl md:text-7xl">{pageTitle}</h1>
          <p className="font-body text-xs text-white/40 mt-4">
            Demo catalogue — all products and prices are for demonstration purposes only.
          </p>
        </div>
      </div>

      {/* Shop Content */}
      <div className="container mx-auto px-6 py-14">
        <ShopClient
          initialCategory={category}
          initialQuery={q}
          initialFilter={filter}
        />
      </div>
    </div>
  );
}
