"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart, useWishlist } from '../context/store';
import { HeartIcon } from './icons';
import type { Product } from '../data/products';
import { formatPrice, getRelatedProducts, categoryLabels } from '../data/products';
import { ProductGridSection } from './ProductGridSection';

interface ProductClientProps {
  product: Product;
}

type TabKey = 'description' | 'material' | 'fit' | 'care';

export const ProductClient: React.FC<ProductClientProps> = ({ product }) => {
  const { addItem }     = useCart();
  const { toggle, has } = useWishlist();

  const [activeImage,   setActiveImage]   = useState(0);
  const [selectedSize,  setSelectedSize]  = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity,      setQuantity]      = useState(1);
  const [sizeError,     setSizeError]     = useState(false);
  const [added,         setAdded]         = useState(false);
  const [activeTab,     setActiveTab]     = useState<TabKey>('description');

  const wishlisted = has(product.id);
  const related    = getRelatedProducts(product, 4);
  const price      = product.salePrice ?? product.price;

  const handleAddToBag = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addItem({
      id:       product.id,
      slug:     product.slug,
      name:     product.name,
      price,
      image:    product.images[0],
      size:     selectedSize,
      color:    selectedColor ?? (product.colors[0]?.name ?? ''),
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const tabs: { key: TabKey; label: string; content: string }[] = [
    { key: 'description', label: 'DESCRIPTION', content: product.description },
    { key: 'material',    label: 'MATERIAL & WEAVE', content: product.material },
    { key: 'fit',         label: 'FIT & PROPORTIONS', content: product.fit },
    { key: 'care',        label: 'GARMENT CARE', content: product.care },
  ];

  return (
    <div className="bg-surface min-h-screen text-on-surface flex flex-col">
      {/* ── Breadcrumb Bar ─────────────────────────────────── */}
      <div className="w-full bg-primary-container border-b border-outline-variant/20 pt-32 pb-4 px-margin md:px-margin-desktop">
        <nav aria-label="Breadcrumb" className="font-label-caps-sm text-label-caps-sm text-on-surface-variant flex items-center gap-2 flex-wrap uppercase tracking-wider">
          <Link href="/" className="hover:text-tertiary transition-colors">
            HOME
          </Link>
          <span className="text-outline-variant/50">/</span>
          <Link href="/shop" className="hover:text-tertiary transition-colors">
            ARCHIVE
          </Link>
          <span className="text-outline-variant/50">/</span>
          <Link
            href={`/shop?category=${product.category}`}
            className="hover:text-tertiary transition-colors"
          >
            {categoryLabels[product.category]}
          </Link>
          <span className="text-outline-variant/50">/</span>
          <span className="text-on-surface">{product.name}</span>
        </nav>
      </div>

      {/* ── Main Product Detail Grid ────────────────────────── */}
      <section className="w-full px-margin md:px-margin-desktop py-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">

          {/* Left Column: Multi-view Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-space-md">
            {/* Main Stage Image */}
            <div className="relative aspect-[4/5] bg-surface-container-lowest overflow-hidden border border-outline-variant/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />

              {/* Status Badge */}
              <div className="absolute top-space-md left-space-md flex flex-col gap-1 z-10">
                {product.isNew && (
                  <span className="bg-primary-container/90 px-space-sm py-1 font-label-caps-sm text-label-caps-sm text-tertiary tracking-widest uppercase">
                    NEW RELEASE
                  </span>
                )}
                {product.salePrice && (
                  <span className="bg-primary-container/90 px-space-sm py-1 font-label-caps-sm text-label-caps-sm text-tertiary-fixed tracking-widest uppercase">
                    ARCHIVE ARCHIVE SALE
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex gap-space-sm overflow-x-auto pb-2 scrollbar-none">
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-20 h-24 overflow-hidden border transition-all shrink-0 ${
                      activeImage === i
                        ? 'border-tertiary opacity-100'
                        : 'border-outline-variant/30 opacity-60 hover:opacity-90'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${product.name} angle ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Garment Specification (5 cols) */}
          <div className="lg:col-span-5 space-y-space-lg lg:sticky lg:top-28">
            <div className="space-y-space-xs border-b border-outline-variant/20 pb-space-lg">
              <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-[0.28em] block">
                {categoryLabels[product.category]} • ATELIER № {product.id.toUpperCase()}
              </span>

              <h1 className="font-headline-lg text-headline-lg md:text-[40px] md:leading-[48px] text-primary-fixed font-normal tracking-tight">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-space-sm pt-space-xs">
                {product.salePrice ? (
                  <>
                    <span className="font-headline-sm text-headline-sm text-tertiary font-normal">
                      {formatPrice(product.salePrice)}
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant/60 line-through">
                      {formatPrice(product.price)}
                    </span>
                  </>
                ) : (
                  <span className="font-headline-sm text-headline-sm text-on-surface font-normal">
                    {formatPrice(product.price)}
                  </span>
                )}
                <span className="font-caption text-caption text-on-surface-variant uppercase tracking-widest pl-2">
                  TAX INCLUDED • DEMO STOREFRONT CATALOGUE
                </span>
              </div>
            </div>

            {/* Description Summary */}
            <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
              {product.description}
            </p>

            {/* Colour Selector */}
            {product.colors.length > 0 && (
              <div className="space-y-space-xs">
                <span className="font-label-caps-sm text-label-caps-sm text-on-surface-variant uppercase tracking-wider block">
                  COLOUR PALETTE: <span className="text-on-surface">{selectedColor ?? product.colors[0]?.name}</span>
                </span>
                <div className="flex items-center gap-space-sm">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      title={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-8 h-8 border transition-all ${
                        (selectedColor ?? product.colors[0]?.name) === c.name
                          ? 'border-tertiary scale-110 shadow-md'
                          : 'border-outline-variant/50 hover:border-outline'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector with Validation */}
            <div className="space-y-space-xs">
              <div className="flex items-center justify-between">
                <span className={`font-label-caps-sm text-label-caps-sm uppercase tracking-wider block ${
                  sizeError ? 'text-error font-medium' : 'text-on-surface-variant'
                }`}>
                  SELECT PROPORTION: {selectedSize ? <span className="text-on-surface">{selectedSize}</span> : <span className={sizeError ? 'text-error' : ''}>REQUIRED</span>}
                </span>

                <Link
                  href="/size-guide"
                  className="font-label-caps-sm text-label-caps-sm text-tertiary hover:underline uppercase tracking-widest"
                >
                  SIZE GUIDE →
                </Link>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSelectedSize(s);
                      setSizeError(false);
                    }}
                    className={`min-w-12 h-12 px-space-sm font-label-caps-sm text-label-caps-sm uppercase tracking-wider border transition-colors ${
                      selectedSize === s
                        ? 'bg-tertiary text-on-tertiary border-tertiary'
                        : 'bg-surface-container-low border-outline-variant/30 text-on-surface hover:border-tertiary/60'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {sizeError && (
                <p className="font-caption text-caption text-error tracking-wider uppercase pt-1">
                  Please select your required garment size before adding to bag.
                </p>
              )}
            </div>

            {/* Quantity Selector & CTAs */}
            <div className="space-y-space-sm pt-space-xs">
              <div className="flex items-center gap-space-md">
                <span className="font-label-caps-sm text-label-caps-sm text-on-surface-variant uppercase tracking-wider">
                  QUANTITY:
                </span>
                <div className="flex items-center border border-outline-variant/40 bg-surface-container-low">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-on-surface hover:text-tertiary transition-colors"
                  >
                    −
                  </button>
                  <span className="w-10 text-center font-label-caps-sm text-label-caps-sm text-on-surface">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-on-surface hover:text-tertiary transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-space-sm pt-space-xs">
                <button
                  onClick={handleAddToBag}
                  className={`flex-1 py-space-md font-label-caps-md text-label-caps-md uppercase tracking-[0.2em] transition-all duration-300 ${
                    added
                      ? 'bg-tertiary text-on-tertiary'
                      : 'bg-primary-fixed text-primary-container hover:bg-tertiary hover:text-on-tertiary'
                  }`}
                >
                  {added ? '✓ ADDED TO BAG' : 'ADD TO SHOPPING BAG'}
                </button>

                <button
                  onClick={() => toggle(product.id)}
                  aria-label={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                  className="w-14 h-14 border border-outline-variant/40 flex items-center justify-center text-on-surface hover:text-tertiary transition-colors bg-surface-container-low"
                >
                  <HeartIcon
                    className={`w-5 h-5 ${wishlisted ? 'text-tertiary fill-current' : ''}`}
                    filled={wishlisted}
                  />
                </button>
              </div>
            </div>

            {/* Accordion Specification Tabs */}
            <div className="border-t border-outline-variant/20 pt-space-md">
              <div className="flex border-b border-outline-variant/20 overflow-x-auto scrollbar-none">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`font-label-caps-sm text-label-caps-sm uppercase tracking-widest pb-space-sm px-space-sm transition-colors border-b-2 -mb-[2px] whitespace-nowrap ${
                      activeTab === tab.key
                        ? 'border-tertiary text-on-surface'
                        : 'border-transparent text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="py-space-md text-on-surface-variant font-body-sm text-body-sm font-light leading-relaxed">
                {tabs.find((t) => t.key === activeTab)?.content}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Related Archive Pieces ──────────────────────────── */}
      {related.length > 0 && (
        <section className="w-full bg-surface-container-low border-t border-outline-variant/20 px-margin md:px-margin-desktop py-space-2xl mt-space-xl">
          <div className="flex items-end justify-between pb-space-lg border-b border-outline-variant/20 mb-space-xl">
            <div>
              <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-[0.28em] block mb-1">
                COMPLEMENTARY PIECES
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal">
                Related Archive Pieces
              </h2>
            </div>
            <Link
              href="/shop"
              className="font-label-caps-sm text-label-caps-sm text-tertiary hover:underline uppercase tracking-widest"
            >
              VIEW ALL ARCHIVES →
            </Link>
          </div>

          <ProductGridSection products={related} columns={4} />
        </section>
      )}
    </div>
  );
};
