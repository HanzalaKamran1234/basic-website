"use client";

import { useState } from 'react';
import Link from 'next/link';
import { CloseIcon, HeartIcon } from './icons';
import type { Product } from '../data/products';
import { formatPrice } from '../data/products';

interface QuickViewProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickView: React.FC<QuickViewProps> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [sizeError, setSizeError] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[80] bg-primaryBlack/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 z-[90] w-full max-w-md bg-background shadow-2xl overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-primaryBlack/10">
          <span className="font-body text-xs text-secondaryText tracking-[0.2em] uppercase">Quick View</span>
          <button onClick={onClose} aria-label="Close" className="text-secondaryText hover:text-primaryBlack transition-colors">
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Image */}
        <div className="aspect-[4/3] bg-white overflow-hidden shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div className="p-6 flex-1 flex flex-col gap-4">
          <div>
            <h2 className="font-heading text-2xl text-primaryBlack">{product.name}</h2>
            <div className="flex items-center gap-2 mt-1">
              {product.salePrice ? (
                <>
                  <span className="font-body font-semibold text-primaryBlack">{formatPrice(product.salePrice)}</span>
                  <span className="font-body text-xs text-secondaryText line-through">{formatPrice(product.price)}</span>
                </>
              ) : (
                <span className="font-body text-primaryBlack">{formatPrice(product.price)}</span>
              )}
            </div>
          </div>

          {/* Color */}
          {product.colors.length > 0 && (
            <div>
              <p className="font-body text-xs text-secondaryText tracking-[0.15em] uppercase mb-2">
                Colour: {selectedColor ?? 'Select'}
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    title={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${
                      selectedColor === c.name ? 'border-primaryBlack scale-110' : 'border-transparent border-black/15'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size */}
          <div>
            <p className={`font-body text-xs tracking-[0.15em] uppercase mb-2 ${sizeError ? 'text-red-500' : 'text-secondaryText'}`}>
              Size: {selectedSize ?? (sizeError ? 'Please select a size' : 'Select')}
            </p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => { setSelectedSize(s); setSizeError(false); }}
                  className={`w-10 h-10 font-body text-xs border transition-colors ${
                    selectedSize === s
                      ? 'bg-primaryBlack text-white border-primaryBlack'
                      : 'bg-white text-primaryBlack border-primaryBlack/20 hover:border-primaryBlack'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-auto pt-2">
            <button
              onClick={handleAddToCart}
              className={`flex-1 font-body text-xs tracking-[0.2em] uppercase py-4 transition-colors ${
                added
                  ? 'bg-accent text-white'
                  : 'bg-primaryBlack text-white hover:bg-secondaryBlack'
              }`}
            >
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>
            <button
              aria-label="Wishlist"
              onClick={() => setWishlisted((v) => !v)}
              className="border border-primaryBlack/20 w-12 flex items-center justify-center hover:border-primaryBlack transition-colors"
            >
              <HeartIcon className={`w-4 h-4 ${wishlisted ? 'text-red-500 fill-red-500' : 'text-primaryBlack'}`} filled={wishlisted} />
            </button>
          </div>

          <Link
            href={`/shop/${product.slug}`}
            className="text-center font-body text-xs tracking-[0.15em] text-secondaryText hover:text-primaryBlack underline underline-offset-4 transition-colors"
            onClick={onClose}
          >
            View Full Details
          </Link>
        </div>
      </div>
    </>
  );
};
