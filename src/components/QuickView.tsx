"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart, useWishlist } from '../context/store';
import { CloseIcon, HeartIcon } from './icons';
import type { Product } from '../data/products';
import { formatPrice } from '../data/products';

interface QuickViewProps {
  product: Product | null;
  onClose: () => void;
}

const QuickViewContent: React.FC<{ product: Product; onClose: () => void }> = ({ product, onClose }) => {
  const { addItem }     = useCart();
  const { toggle, has } = useWishlist();

  const [selectedSize,  setSelectedSize]  = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [sizeError,     setSizeError]     = useState(false);
  const [added,         setAdded]         = useState(false);
  const [qty,           setQty]           = useState(1);

  const wishlisted = has(product.id);

  const handleAddToBag = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addItem({
      id:    product.id,
      slug:  product.slug,
      name:  product.name,
      price: product.salePrice ?? product.price,
      image: product.images[0],
      size:  selectedSize,
      color: selectedColor ?? (product.colors[0]?.name ?? ''),
      quantity: qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-space-lg py-space-md border-b border-outline-variant/30 shrink-0 bg-surface-container-low">
        <div className="flex items-center gap-space-sm">
          <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-widest">
            QUICK VIEW
          </span>
          <span className="text-outline-variant/60">•</span>
          <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="text-on-surface-variant hover:text-on-surface transition-colors p-1"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 overflow-y-auto max-h-[80vh]">
        {/* Image */}
        <div className="relative aspect-[4/5] bg-surface-container-lowest overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="p-space-lg flex flex-col justify-between space-y-space-md">
          <div className="space-y-space-sm">
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-normal">
              {product.name}
            </h2>

            <div className="flex items-baseline gap-space-sm">
              {product.salePrice ? (
                <>
                  <span className="font-body-lg text-body-lg text-tertiary font-light">
                    {formatPrice(product.salePrice)}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant/60 line-through">
                    {formatPrice(product.price)}
                  </span>
                </>
              ) : (
                <span className="font-body-lg text-body-lg text-on-surface font-light">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
              {product.description}
            </p>

            {/* Colour selection */}
            {product.colors.length > 0 && (
              <div className="pt-space-xs">
                <p className="font-label-caps-sm text-label-caps-sm text-on-surface-variant uppercase tracking-wider mb-2">
                  COLOUR: <span className="text-on-surface">{selectedColor ?? product.colors[0]?.name}</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      title={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-7 h-7 border transition-all ${
                        (selectedColor ?? product.colors[0]?.name) === c.name
                          ? 'border-tertiary scale-110 shadow-sm'
                          : 'border-outline-variant/40 hover:border-outline'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size selection */}
            <div className="pt-space-xs">
              <div className="flex items-center justify-between mb-2">
                <p className={`font-label-caps-sm text-label-caps-sm uppercase tracking-wider ${
                  sizeError ? 'text-error font-medium' : 'text-on-surface-variant'
                }`}>
                  SIZE: {selectedSize ? <span className="text-on-surface">{selectedSize}</span> : <span className={sizeError ? 'text-error' : ''}>REQUIRED</span>}
                </p>
                <Link
                  href="/size-guide"
                  onClick={onClose}
                  className="font-label-caps-sm text-label-caps-sm text-tertiary hover:underline tracking-widest uppercase"
                >
                  SIZE GUIDE
                </Link>
              </div>

              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSelectedSize(s);
                      setSizeError(false);
                    }}
                    className={`min-w-10 h-10 px-3 font-label-caps-sm text-label-caps-sm uppercase tracking-wider border transition-colors ${
                      selectedSize === s
                        ? 'bg-tertiary text-on-tertiary border-tertiary'
                        : 'bg-surface-container-high border-outline-variant/40 text-on-surface hover:border-tertiary/60'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {sizeError && (
                <p className="font-caption text-caption text-error tracking-wider uppercase mt-1.5">
                  Please select a size to proceed.
                </p>
              )}
            </div>

            {/* Quantity */}
            <div className="pt-space-xs flex items-center gap-space-md">
              <span className="font-label-caps-sm text-label-caps-sm text-on-surface-variant uppercase tracking-wider">
                QUANTITY:
              </span>
              <div className="flex items-center border border-outline-variant/40 bg-surface-container-low">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center text-on-surface hover:text-tertiary transition-colors"
                >
                  −
                </button>
                <span className="w-8 text-center font-label-caps-sm text-label-caps-sm text-on-surface">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="w-8 h-8 flex items-center justify-center text-on-surface hover:text-tertiary transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-space-md space-y-space-xs border-t border-outline-variant/20">
            <div className="flex gap-space-sm">
              <button
                onClick={handleAddToBag}
                className={`flex-1 py-space-md font-label-caps-md text-label-caps-md uppercase tracking-[0.2em] transition-all duration-300 ${
                  added
                    ? 'bg-tertiary text-on-tertiary'
                    : 'bg-primary-fixed text-primary-container hover:bg-tertiary hover:text-on-tertiary'
                }`}
              >
                {added ? '✓ ADDED TO BAG' : 'ADD TO BAG'}
              </button>

              <button
                onClick={() => toggle(product.id)}
                aria-label={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                className="w-12 h-12 border border-outline-variant/40 flex items-center justify-center text-on-surface hover:text-tertiary transition-colors bg-surface-container-high"
              >
                <HeartIcon
                  className={`w-5 h-5 ${wishlisted ? 'text-tertiary fill-current' : ''}`}
                  filled={wishlisted}
                />
              </button>
            </div>

            <Link
              href={`/shop/${product.slug}`}
              onClick={onClose}
              className="block text-center py-2 font-label-caps-sm text-label-caps-sm text-on-surface-variant hover:text-tertiary uppercase tracking-widest transition-colors"
            >
              VIEW FULL PRODUCT SPECIFICATION →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const QuickView: React.FC<QuickViewProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view: ${product.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-container/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-surface-container border border-outline-variant/40 text-on-surface max-w-2xl w-full shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <QuickViewContent key={product.id} product={product} onClose={onClose} />
      </div>
    </div>
  );
};
