"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useWishlist } from '../../context/store';
import { products } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';
import { QuickView } from '../../components/QuickView';
import type { Product } from '../../data/products';

export default function WishlistPage() {
  const { ids } = useWishlist();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const count = ids.length;
  const wishlisted = products.filter((p) => ids.includes(p.id));

  if (wishlisted.length === 0) {
    return (
      <div className="bg-surface min-h-screen text-on-surface flex flex-col items-center justify-center px-margin py-36 text-center">
        <div className="mb-space-lg">
          <span className="font-display-hero text-[100px] text-outline-variant/30 leading-none select-none">
            ♡
          </span>
        </div>
        <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-[0.28em] mb-2 block">
          CLIENT CURATION
        </span>
        <h1 className="font-headline-lg text-headline-lg text-primary-fixed mb-space-sm font-normal">
          Your wishlist is empty.
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed mb-space-xl">
          Save your preferred garments from our archive to revisit their specifications, proportions, and availability.
        </p>
        <Link
          href="/shop"
          className="px-space-xl py-space-md bg-tertiary text-on-tertiary font-label-caps-md text-label-caps-md tracking-[0.2em] uppercase hover:bg-primary-fixed transition-colors shadow-lg"
        >
          EXPLORE THE ARCHIVE
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-surface min-h-screen text-on-surface pt-36 pb-space-2xl px-margin md:px-margin-desktop">
      <div className="max-w-7xl mx-auto space-y-space-xl">

        {/* ── Header ───────────────────────────────────────── */}
        <div className="border-b border-outline-variant/20 pb-space-lg flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
          <div>
            <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-[0.28em] block mb-1">
              CLIENT SERVICES
            </span>
            <h1 className="font-display-hero text-headline-lg md:text-[54px] md:leading-[62px] text-primary-fixed font-normal tracking-tight">
              Client Wishlist
            </h1>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {count} {count === 1 ? 'garment' : 'garments'} saved in your local curation
          </p>
        </div>

        {/* ── Product Grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
          {wishlisted.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>
      </div>

      <QuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}
