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

  const wishlisted = has(product.id);

  const handleAddToBag = () => {
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    addItem({
      id:    product.id,
      slug:  product.slug,
      name:  product.name,
      price: product.salePrice ?? product.price,
      image: product.images[0],
      size:  selectedSize,
      color: selectedColor ?? (product.colors[0]?.name ?? ''),
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-7 py-5 border-b border-primaryBlack/10 shrink-0">
        <span className="font-body text-[10px] text-secondaryText tracking-[0.25em] uppercase">Quick View</span>
        <button onClick={onClose} aria-label="Close" className="text-secondaryText hover:text-primaryBlack transition-colors">
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Image */}
      <div className="aspect-[4/3] bg-white overflow-hidden shrink-0 img-zoom">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
      </div>

      {/* Info */}
      <div className="p-7 flex-1 flex flex-col gap-5">
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

        {/* Colour */}
        {product.colors.length > 0 && (
          <div>
            <p className="font-body text-[10px] text-secondaryText tracking-[0.15em] uppercase mb-2">
              Colour: <span className="text-primaryBlack">{selectedColor ?? 'Select'}</span>
            </p>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  title={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  className={`w-7 h-7 rounded-full border-2 transition-all ${
                    selectedColor === c.name ? 'border-primaryBlack scale-110' : 'border-primaryBlack/15'
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Size */}
        <div>
          <p className={`font-body text-[10px] tracking-[0.15em] uppercase mb-2 ${sizeError ? 'text-red-500' : 'text-secondaryText'}`}>
            Size: <span className={sizeError ? 'text-red-500' : 'text-primaryBlack'}>
              {selectedSize ?? (sizeError ? 'Please select' : 'Select')}
            </span>
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
        <div className="flex gap-3 mt-auto">
          <button
            onClick={handleAddToBag}
            className={`flex-1 font-body text-[10px] tracking-[0.2em] uppercase py-4 transition-colors ${
              added ? 'bg-accent text-white' : 'bg-primaryBlack text-white hover:bg-secondaryBlack'
            }`}
          >
            {added ? '✓ Added to Bag' : 'Add to Bag'}
          </button>
          <button
            aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            onClick={() => toggle(product.id)}
            className="border border-primaryBlack/20 w-12 flex items-center justify-center hover:border-primaryBlack transition-colors"
          >
            <HeartIcon className={`w-4 h-4 ${wishlisted ? 'text-red-500' : 'text-primaryBlack'}`} filled={wishlisted} />
          </button>
        </div>

        <Link
          href={`/shop/${product.slug}`}
          className="text-center font-body text-[10px] tracking-[0.15em] text-secondaryText hover:text-primaryBlack underline underline-offset-4 transition-colors"
          onClick={onClose}
        >
          View Full Details
        </Link>
      </div>
    </>
  );
};

export const QuickView: React.FC<QuickViewProps> = ({ product, onClose }) => {
  /* Lock scroll while open */
  useEffect(() => {
    if (product) document.body.style.overflow = 'hidden';
    else         document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [product]);

  if (!product) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[80] bg-primaryBlack/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
        style={{ animation: 'fadeIn 0.25s ease forwards' }}
      />

      {/* Panel */}
      <div
        className="fixed inset-y-0 right-0 z-[90] w-full max-w-md bg-background shadow-2xl overflow-y-auto flex flex-col"
        style={{ animation: 'revealR 0.4s cubic-bezier(0.16,1,0.3,1) forwards' }}
      >
        <QuickViewContent key={product.id} product={product} onClose={onClose} />
      </div>
    </>
  );
};
