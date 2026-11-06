"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart, useWishlist } from '../context/store';
import { HeartIcon, EyeIcon } from './icons';
import type { Product } from '../data/products';
import { formatPrice } from '../data/products';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { toggle, has } = useWishlist();
  const { addItem }     = useCart();
  const [hovered, setHovered]   = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const wishlisted = has(product.id);
  const img1 = product.images[0];
  const img2 = product.images[1] ?? product.images[0];

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(product.id);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickView?.(product);
  };

  const handleAddToBag = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id:    product.id,
      slug:  product.slug,
      name:  product.name,
      price: product.salePrice ?? product.price,
      image: img1,
      size:  product.sizes[0],
      color: product.colors[0]?.name ?? '',
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image ──────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-white aspect-[3/4] mb-4">
        {/* Primary image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img1}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-[1.03]' : 'opacity-100 scale-100'
          }`}
        />
        {/* Secondary image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img2}
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
          }`}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <span className="font-body text-[9px] tracking-[0.2em] uppercase bg-primaryBlack text-white px-2.5 py-1">
              New
            </span>
          )}
          {product.salePrice && (
            <span className="font-body text-[9px] tracking-[0.2em] uppercase bg-accent text-white px-2.5 py-1">
              Sale
            </span>
          )}
          {product.isBestSeller && !product.isNew && (
            <span className="font-body text-[9px] tracking-[0.2em] uppercase bg-primaryBlack/80 text-white px-2.5 py-1">
              Best Seller
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm transition-all duration-200 ${
            hovered || wishlisted ? 'opacity-100' : 'opacity-0'
          } hover:bg-white`}
        >
          <HeartIcon
            className={`w-4 h-4 transition-colors ${wishlisted ? 'text-red-500' : 'text-primaryBlack'}`}
            filled={wishlisted}
          />
        </button>

        {/* Hover overlay — Quick View + Add to Bag */}
        <div
          className={`absolute bottom-0 left-0 right-0 flex flex-col gap-0 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <button
            onClick={handleQuickView}
            className="flex items-center justify-center gap-2 bg-white/95 backdrop-blur-sm text-primaryBlack font-body text-[10px] tracking-[0.2em] uppercase py-3 hover:bg-background transition-colors"
          >
            <EyeIcon className="w-3.5 h-3.5" />
            Quick View
          </button>
          <button
            onClick={handleAddToBag}
            className={`font-body text-[10px] tracking-[0.2em] uppercase py-3.5 transition-colors ${
              justAdded
                ? 'bg-accent text-white'
                : 'bg-primaryBlack text-white hover:bg-secondaryBlack'
            }`}
          >
            {justAdded ? '✓ Added' : 'Add to Bag'}
          </button>
        </div>
      </div>

      {/* ── Info ───────────────────────────────────────── */}
      <div>
        {/* Colour dots */}
        {product.colors.length > 0 && (
          <div className="flex gap-1.5 mb-2">
            {product.colors.slice(0, 5).map((c) => (
              <span
                key={c.name}
                title={c.name}
                className="w-3 h-3 rounded-full border border-primaryBlack/15 shrink-0"
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        )}

        <h3 className="font-heading text-lg text-primaryBlack leading-snug group-hover:text-secondaryText transition-colors duration-300 mb-1">
          {product.name}
        </h3>

        <div className="flex items-baseline gap-2">
          {product.salePrice ? (
            <>
              <span className="font-body text-sm font-medium text-primaryBlack">
                {formatPrice(product.salePrice)}
              </span>
              <span className="font-body text-xs text-secondaryText line-through">
                {formatPrice(product.price)}
              </span>
            </>
          ) : (
            <span className="font-body text-sm text-primaryBlack">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
