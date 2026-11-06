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
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    addItem({
      id:    product.id,
      slug:  product.slug,
      name:  product.name,
      price,
      image: product.images[0],
      size:  selectedSize,
      color: selectedColor ?? (product.colors[0]?.name ?? ''),
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const tabs: { key: TabKey; label: string; content: string }[] = [
    { key: 'description', label: 'Description', content: product.description },
    { key: 'material',    label: 'Material',    content: product.material },
    { key: 'fit',         label: 'Fit',         content: product.fit },
    { key: 'care',        label: 'Care',        content: product.care },
  ];

  return (
    <div className="bg-background min-h-screen">

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 md:px-10 pt-28 pb-4">
        <nav className="font-body text-xs text-secondaryText flex items-center gap-2 flex-wrap">
          <Link href="/"    className="hover:text-primaryBlack transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-primaryBlack transition-colors">Shop</Link>
          <span>/</span>
          <Link href={`/shop?category=${product.category}`} className="hover:text-primaryBlack transition-colors">
            {categoryLabels[product.category]}
          </Link>
          <span>/</span>
          <span className="text-primaryBlack">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="container mx-auto px-6 md:px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Gallery ───────────────────────────────── */}
          <div className="sticky top-24">
            <div className="aspect-[3/4] bg-white overflow-hidden mb-3 img-zoom">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-24 overflow-hidden border-2 transition-all duration-200 ${
                      activeImage === i ? 'border-primaryBlack' : 'border-transparent opacity-50 hover:opacity-80'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Info ──────────────────────────────────── */}
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-5">
              {product.isNew && (
                <span className="font-body text-[9px] tracking-[0.2em] uppercase bg-primaryBlack text-white px-3 py-1">New</span>
              )}
              {product.isBestSeller && (
                <span className="font-body text-[9px] tracking-[0.2em] uppercase bg-accent text-white px-3 py-1">Best Seller</span>
              )}
            </div>

            <h1 className="font-heading text-[clamp(36px,4vw,54px)] text-primaryBlack mb-2 leading-tight">
              {product.name}
            </h1>
            <p className="font-body text-[11px] text-secondaryText tracking-[0.2em] uppercase mb-6">
              {categoryLabels[product.category]}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-body text-2xl font-semibold text-primaryBlack">{formatPrice(price)}</span>
              {product.salePrice && (
                <>
                  <span className="font-body text-base text-secondaryText line-through">{formatPrice(product.price)}</span>
                  <span className="font-body text-xs text-white bg-accent px-2 py-0.5">
                    Save {formatPrice(product.price - product.salePrice)}
                  </span>
                </>
              )}
            </div>

            {/* Colour */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-secondaryText mb-3">
                  Colour: <span className="text-primaryBlack">{selectedColor ?? 'Select'}</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      title={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
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
                <p className={`font-body text-[10px] tracking-[0.2em] uppercase ${sizeError ? 'text-red-500' : 'text-secondaryText'}`}>
                  Size: <span className={sizeError ? 'text-red-500' : 'text-primaryBlack'}>
                    {selectedSize ?? (sizeError ? 'Please select' : 'Select')}
                  </span>
                </p>
                <Link
                  href="/size-guide"
                  className="font-body text-[10px] text-secondaryText underline underline-offset-4 hover:text-primaryBlack transition-colors"
                >
                  Size Guide
                </Link>
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
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-secondaryText mb-3">Quantity</p>
              <div className="flex items-center border border-primaryBlack/20 w-fit">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="w-10 h-10 font-body text-lg flex items-center justify-center hover:bg-primaryBlack/5 transition-colors" aria-label="Decrease">−</button>
                <span className="w-10 text-center font-body text-sm">{quantity}</span>
                <button onClick={() => setQuantity((q) => Math.min(10, q + 1))} className="w-10 h-10 font-body text-lg flex items-center justify-center hover:bg-primaryBlack/5 transition-colors" aria-label="Increase">+</button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={handleAddToBag}
                className={`flex-1 font-body text-[11px] tracking-[0.25em] uppercase py-4 transition-colors ${
                  added ? 'bg-accent text-white' : 'bg-primaryBlack text-white hover:bg-secondaryBlack'
                }`}
              >
                {added ? '✓ Added to Bag' : 'Add to Bag'}
              </button>
              <button
                aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                onClick={() => toggle(product.id)}
                className="border border-primaryBlack/20 w-14 flex items-center justify-center hover:border-primaryBlack transition-colors"
              >
                <HeartIcon className={`w-5 h-5 ${wishlisted ? 'text-red-500' : 'text-primaryBlack'}`} filled={wishlisted} />
              </button>
            </div>

            <button
              className="w-full font-body text-[11px] tracking-[0.25em] uppercase py-4 border border-primaryBlack/25 text-secondaryText hover:border-primaryBlack hover:text-primaryBlack transition-colors mb-7"
              onClick={() => alert('Checkout coming soon. Currently Cash on Delivery only. (Demo)')}
            >
              Buy Now
            </button>

            {/* Shipping info */}
            <div className="border-t border-primaryBlack/10 pt-6 space-y-2 mb-8">
              <p className="font-body text-xs text-secondaryText">🚚 <span className="text-primaryBlack">Free delivery</span> on orders over PKR 5,000. <span className="text-secondaryText/50">(Demo)</span></p>
              <p className="font-body text-xs text-secondaryText">💳 <span className="text-primaryBlack">Cash on Delivery</span> available. <span className="text-secondaryText/50">(Demo)</span></p>
              <p className="font-body text-xs text-secondaryText">🔄 <span className="text-primaryBlack">Easy returns</span> within 7 days. <span className="text-secondaryText/50">(Demo)</span></p>
            </div>

            {/* Tabs */}
            <div className="border-t border-primaryBlack/10">
              <div className="flex gap-5 border-b border-primaryBlack/10 mb-5">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`font-body text-[10px] tracking-[0.15em] uppercase pb-3 border-b-2 transition-colors ${
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

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-10">
            <div className="mb-10">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-2">You May Also Like</p>
              <h2 className="font-heading text-4xl text-primaryBlack">Related Pieces</h2>
            </div>
            <ProductGridSection products={related} columns={4} />
          </div>
        </section>
      )}
    </div>
  );
};
