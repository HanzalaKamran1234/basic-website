"use client";

import Link from 'next/link';
import { useWishlist } from '../../context/store';
import { products } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';
import { useState } from 'react';
import { QuickView } from '../../components/QuickView';
import type { Product } from '../../data/products';

export default function WishlistPage() {
  const { ids } = useWishlist();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const wishlisted = products.filter((p) => ids.includes(p.id));

  if (wishlisted.length === 0) {
    return (
      <div className="bg-background min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20">
        <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-4">Wishlist</p>
        <h1 className="font-heading text-5xl text-primaryBlack mb-4">Nothing saved yet.</h1>
        <p className="font-body text-secondaryText text-sm max-w-sm leading-relaxed mb-10">
          Tap the heart icon on any product to save it here for later.
        </p>
        <Link
          href="/shop"
          className="inline-block font-body text-[11px] tracking-[0.3em] uppercase bg-primaryBlack text-white px-12 py-4 hover:bg-secondaryBlack transition-colors"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-28 pb-24">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-14">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-2">Saved</p>
          <h1 className="font-heading text-[clamp(44px,6vw,72px)] text-primaryBlack leading-none">
            Your Wishlist
          </h1>
          <p className="font-body text-sm text-secondaryText mt-3">
            {wishlisted.length} {wishlisted.length === 1 ? 'piece' : 'pieces'} saved
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlisted.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>
      </div>

      <QuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
}
