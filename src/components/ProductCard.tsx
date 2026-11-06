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
  const [hovered, setHovered]     = useState(false);
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
      size:  product.sizes[0] ?? 'M',
      color: product.colors[0]?.name ?? '',
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div
      className="group flex flex-col bg-surface-container-low border border-outline-variant/20 hover:border-tertiary/40 transition-colors duration-500 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image container with 4:5 luxury aspect ratio ──── */}
      <Link
        href={`/shop/${product.slug}`}
        className="relative overflow-hidden aspect-[4/5] bg-surface-container-lowest block"
      >
        {/* Primary image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img1}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />

        {/* Alternate hover image cross-fade if available */}
        {img2 !== img1 && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={img2}
            alt={`${product.name} alternate angle`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badges */}
        <div className="absolute top-space-sm left-space-sm flex flex-col gap-1 z-10">
          {product.isNew && (
            <span className="bg-primary-container/85 backdrop-blur-sm px-space-sm py-1 font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-wider">
              NEW RELEASE
            </span>
          )}
          {product.salePrice && (
            <span className="bg-primary-container/85 backdrop-blur-sm px-space-sm py-1 font-label-caps-sm text-label-caps-sm text-tertiary-fixed uppercase tracking-wider">
              ARCHIVE SALE
            </span>
          )}
          {product.isBestSeller && !product.isNew && (
            <span className="bg-primary-container/85 backdrop-blur-sm px-space-sm py-1 font-label-caps-sm text-label-caps-sm text-on-surface uppercase tracking-wider">
              SIGNATURE
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          className="absolute top-space-sm right-space-sm w-9 h-9 bg-primary-container/80 backdrop-blur-sm flex items-center justify-center text-on-surface hover:text-tertiary transition-colors z-10"
        >
          <HeartIcon
            className={`w-4 h-4 transition-colors ${
              wishlisted ? 'text-tertiary fill-current' : 'text-on-surface-variant group-hover:text-on-surface'
            }`}
            filled={wishlisted}
          />
        </button>

        {/* Quick Sizes & Actions Overlay Bar */}
        <div
          className={`absolute inset-x-0 bottom-0 bg-primary-container/95 border-t border-outline-variant/30 p-space-sm transform transition-transform duration-300 z-10 flex items-center justify-between ${
            hovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex items-center gap-space-xs text-on-surface font-label-caps-sm text-label-caps-sm">
            <span className="text-on-surface-variant mr-1 tracking-wider">SIZES:</span>
            {product.sizes.slice(0, 4).map((s) => (
              <span key={s} className="hover:text-tertiary px-0.5 tracking-wider">
                {s}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleQuickView}
              title="Quick View"
              className="text-on-surface-variant hover:text-tertiary p-1 transition-colors"
            >
              <EyeIcon className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleAddToBag}
              className={`font-label-caps-sm text-label-caps-sm uppercase tracking-widest px-2.5 py-1 transition-colors ${
                justAdded
                  ? 'bg-tertiary text-on-tertiary'
                  : 'bg-surface-container-high text-on-surface hover:bg-tertiary hover:text-on-tertiary'
              }`}
            >
              {justAdded ? '✓ ADDED' : '+ BAG'}
            </button>
          </div>
        </div>
      </Link>

      {/* ── Garment Details ────────────────────────────── */}
      <div className="p-space-md flex flex-col justify-between flex-1 space-y-space-xs">
        <div>
          {/* Category / Fabric label */}
          <p className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-wider mb-1 line-clamp-1">
            {product.material.split('—')[0]?.trim() || product.category.toUpperCase()}
          </p>

          {/* Product Title */}
          <Link href={`/shop/${product.slug}`} className="block">
            <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-tertiary transition-colors duration-300 font-normal leading-snug line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Pricing & Colour Swatches */}
        <div className="pt-space-xs flex items-center justify-between border-t border-outline-variant/15 mt-space-xs">
          <div className="flex items-baseline gap-2">
            {product.salePrice ? (
              <>
                <span className="font-body-md text-body-md text-tertiary font-light">
                  {formatPrice(product.salePrice)}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant/60 line-through">
                  {formatPrice(product.price)}
                </span>
              </>
            ) : (
              <span className="font-body-md text-body-md text-on-surface font-light">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          {/* Colour dots */}
          {product.colors.length > 0 && (
            <div className="flex items-center gap-1.5">
              {product.colors.slice(0, 3).map((c) => (
                <span
                  key={c.name}
                  title={c.name}
                  className="w-2.5 h-2.5 inline-block border border-outline-variant/50"
                  style={{ backgroundColor: c.hex }}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="font-caption text-caption text-on-surface-variant">
                  +{product.colors.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
