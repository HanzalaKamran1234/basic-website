"use client";

import { useState } from 'react';
import Link from 'next/link';
import { HeartIcon, EyeIcon } from './icons';
import type { Product } from '../data/products';
import { formatPrice } from '../data/products';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [wishlisted, setWishlisted] = useState(false);
  const [hovered, setHovered] = useState(false);

  const img1 = product.images[0];
  const img2 = product.images[1] ?? product.images[0];

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-white aspect-[3/4] mb-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hovered ? img2 : img1}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-primaryBlack text-white font-body text-[9px] tracking-[0.2em] uppercase px-2 py-1">
              New
            </span>
          )}
          {product.salePrice && (
            <span className="bg-accent text-white font-body text-[9px] tracking-[0.2em] uppercase px-2 py-1">
              Sale
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={() => setWishlisted((v) => !v)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
        >
          <HeartIcon
            className={`w-4 h-4 transition-colors ${wishlisted ? 'text-red-500 fill-red-500' : 'text-primaryBlack'}`}
            filled={wishlisted}
          />
        </button>

        {/* Quick view overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-primaryBlack/90 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => onQuickView?.(product)}
            className="w-full flex items-center justify-center gap-2 font-body text-white text-xs tracking-[0.15em] uppercase hover:text-accent transition-colors"
          >
            <EyeIcon className="w-3.5 h-3.5" />
            Quick View
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="px-0.5">
        <Link href={`/shop/${product.slug}`} className="block group/link">
          <h3 className="font-heading text-primaryBlack text-lg leading-tight group-hover/link:text-secondaryText transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Colors */}
        {product.colors.length > 0 && (
          <div className="flex gap-1.5 mt-1.5 mb-2">
            {product.colors.slice(0, 4).map((color) => (
              <span
                key={color.name}
                title={color.name}
                className="w-3 h-3 rounded-full border border-black/10 inline-block"
                style={{ backgroundColor: color.hex }}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-secondaryText text-[10px] font-body leading-none self-center">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          {product.salePrice ? (
            <>
              <span className="font-body text-sm font-semibold text-primaryBlack">
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
    </div>
  );
};
