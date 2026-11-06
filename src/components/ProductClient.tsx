"use client";

import { useState } from 'react';
import Link from 'next/link';
import { HeartIcon } from './icons';
import type { Product } from '../data/products';
import { formatPrice, getRelatedProducts, categoryLabels } from '../data/products';
import { ProductGridSection } from './ProductGridSection';

interface ProductClientProps {
  product: Product;
}

type TabKey = 'description' | 'material' | 'fit' | 'care';

export const ProductClient: React.FC<ProductClientProps> = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>('description');

  const related = getRelatedProducts(product, 4);

  const handleAddToBag = () => {
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const tabs: { key: TabKey; label: string; content: string }[] = [
    { key: 'description', label: 'Description', content: product.description },
    { key: 'material', label: 'Material', content: product.material },
    { key: 'fit', label: 'Fit & Sizing', content: product.fit },
    { key: 'care', label: 'Care', content: product.care },
  ];

  const price = product.salePrice ?? product.price;

  return (
    <div className="bg-background min-h-screen">

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 pt-28 pb-4">
        <nav className="font-body text-xs text-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-primaryBlack transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-primaryBlack transition-colors">Shop</Link>
          <span>/</span>
          <Link
            href={`/shop?category=${product.category}`}
            className="hover:text-primaryBlack transition-colors"
          >
            {categoryLabels[product.category]}
          </Link>
          <span>/</span>
          <span className="text-primaryBlack">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Images ──────────────────────────────────── */}
          <div className="sticky top-24">
            {/* Main image */}
            <div className="aspect-[3/4] bg-white overflow-hidden mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                      activeImage === i ? 'border-primaryBlack' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Info ────────────────────────────────────── */}
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.isNew && (
                <span className="font-body text-xs tracking-[0.2em] uppercase bg-primaryBlack text-white px-3 py-1">
                  New
                </span>
              )}
              {product.isBestSeller && (
                <span className="font-body text-xs tracking-[0.2em] uppercase bg-accent text-white px-3 py-1">
                  Best Seller
                </span>
              )}
            </div>

            <h1 className="font-heading text-4xl md:text-5xl text-primaryBlack mb-2 leading-tight">
              {product.name}
            </h1>

            <p className="font-body text-xs text-secondaryText tracking-[0.2em] uppercase mb-6">
              {categoryLabels[product.category]}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-body text-2xl font-semibold text-primaryBlack">
                {formatPrice(price)}
              </span>
              {product.salePrice && (
                <span className="font-body text-base text-secondaryText line-through">
                  {formatPrice(product.price)}
                </span>
              )}
              {product.salePrice && (
                <span className="font-body text-xs text-white bg-accent px-2 py-0.5">
                  Save {formatPrice(product.price - product.salePrice)}
                </span>
              )}
            </div>

            {/* Color */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-secondaryText mb-3">
                  Colour: <span className="text-primaryBlack">{selectedColor ?? 'Select'}</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      title={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === c.name
                          ? 'border-primaryBlack scale-110'
                          : 'border-primaryBlack/15 hover:border-primaryBlack/40'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className={`font-body text-xs tracking-[0.2em] uppercase ${sizeError ? 'text-red-500' : 'text-secondaryText'}`}>
                  Size: <span className={sizeError ? 'text-red-500' : 'text-primaryBlack'}>
                    {selectedSize ?? (sizeError ? 'Please select a size' : 'Select')}
                  </span>
                </p>
                <button className="font-body text-xs text-secondaryText underline underline-offset-4 hover:text-primaryBlack transition-colors">
                  Size Guide
                </button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setSelectedSize(s); setSizeError(false); }}
                    className={`w-12 h-12 font-body text-sm border transition-colors ${
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

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-body text-xs tracking-[0.2em] uppercase text-secondaryText mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-primaryBlack/20 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 font-body text-lg flex items-center justify-center hover:bg-primaryBlack/5 transition-colors"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-10 text-center font-body text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  className="w-10 h-10 font-body text-lg flex items-center justify-center hover:bg-primaryBlack/5 transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={handleAddToBag}
                className={`flex-1 font-body text-xs tracking-[0.25em] uppercase py-4 transition-colors ${
                  added
                    ? 'bg-accent text-white'
                    : 'bg-primaryBlack text-white hover:bg-secondaryBlack'
                }`}
              >
                {added ? '✓ Added to Bag' : 'Add to Bag'}
              </button>
              <button
                aria-label="Add to wishlist"
                onClick={() => setWishlisted((v) => !v)}
                className="border border-primaryBlack/20 w-14 flex items-center justify-center hover:border-primaryBlack transition-colors"
              >
                <HeartIcon
                  className={`w-5 h-5 ${wishlisted ? 'text-red-500' : 'text-primaryBlack'}`}
                  filled={wishlisted}
                />
              </button>
            </div>

            {/* Buy Now */}
            <button
              className="w-full font-body text-xs tracking-[0.25em] uppercase py-4 border border-primaryBlack/30 text-secondaryText hover:border-primaryBlack hover:text-primaryBlack transition-colors mb-6"
              onClick={() => alert('Checkout coming soon. Currently Cash on Delivery only. (Demo)')}
            >
              Buy Now
            </button>

            {/* Shipping info */}
            <div className="border-t border-primaryBlack/10 pt-6 space-y-2">
              <p className="font-body text-xs text-secondaryText">
                🚚 <span className="text-primaryBlack">Free delivery</span> on orders over PKR 5,000. <span className="text-secondaryText/60">(Demo)</span>
              </p>
              <p className="font-body text-xs text-secondaryText">
                💳 <span className="text-primaryBlack">Cash on Delivery</span> available across Pakistan. <span className="text-secondaryText/60">(Demo)</span>
              </p>
              <p className="font-body text-xs text-secondaryText">
                🔄 <span className="text-primaryBlack">Easy returns</span> within 7 days. <span className="text-secondaryText/60">(Demo)</span>
              </p>
            </div>

            {/* Tabs */}
            <div className="border-t border-primaryBlack/10 mt-8 pt-6">
              <div className="flex gap-6 border-b border-primaryBlack/10 mb-5">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`font-body text-xs tracking-[0.15em] uppercase pb-3 border-b-2 transition-colors ${
                      activeTab === tab.key
                        ? 'border-primaryBlack text-primaryBlack'
                        : 'border-transparent text-secondaryText hover:text-primaryBlack'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <p className="font-body text-sm text-secondaryText leading-relaxed">
                {tabs.find((t) => t.key === activeTab)?.content}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Related Products ─────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <p className="text-accent tracking-[0.3em] text-xs uppercase font-body mb-2">
                You May Also Like
              </p>
              <h2 className="font-heading text-4xl text-primaryBlack">
                Related Pieces
              </h2>
            </div>
            <ProductGridSection products={related} columns={4} />
          </div>
        </section>
      )}
    </div>
  );
};
