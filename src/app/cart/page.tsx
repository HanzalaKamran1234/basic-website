"use client";

import Link from 'next/link';
import { useCart } from '../../context/store';
import { formatPrice } from '../../data/products';
import { CloseIcon } from '../../components/icons';

export default function CartPage() {
  const { items, count, subtotal, removeItem, updateQuantity, clearCart } = useCart();

  const shipping = subtotal >= 5000 ? 0 : 250;
  const total    = subtotal + shipping;

  /* ── Empty state ─────────────────────────────────────── */
  if (count === 0) {
    return (
      <div className="bg-background min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20">
        <div className="mb-8">
          <span className="font-heading text-[120px] text-primaryBlack/5 leading-none select-none">∅</span>
        </div>
        <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-4">Your Bag</p>
        <h1 className="font-heading text-5xl text-primaryBlack mb-4">Empty for now.</h1>
        <p className="font-body text-secondaryText text-sm max-w-sm leading-relaxed mb-10">
          Your bag is waiting to be filled. Explore our collection and add the pieces that speak to you.
        </p>
        <Link
          href="/shop"
          className="inline-block font-body text-[11px] tracking-[0.3em] uppercase bg-primaryBlack text-white px-12 py-4 hover:bg-secondaryBlack transition-colors"
        >
          Shop Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-28 pb-24">
      <div className="container mx-auto px-6 md:px-10 max-w-5xl">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-2">Review</p>
            <h1 className="font-heading text-[clamp(44px,6vw,72px)] text-primaryBlack leading-none">
              Your Bag
            </h1>
          </div>
          <button
            onClick={clearCart}
            className="font-body text-[11px] tracking-[0.15em] uppercase text-secondaryText hover:text-primaryBlack underline underline-offset-4 transition-colors"
          >
            Clear all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">

          {/* ── Item list ──────────────────────────────── */}
          <div className="md:col-span-3 space-y-6">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-5 bg-white p-5">
                {/* Image */}
                <Link href={`/shop/${item.slug}`} className="shrink-0 overflow-hidden img-zoom w-24 h-32">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-2 mb-1">
                    <Link href={`/shop/${item.slug}`} className="font-heading text-lg text-primaryBlack hover:text-accent transition-colors leading-tight">
                      {item.name}
                    </Link>
                    <button
                      onClick={() => removeItem(item.id, item.size, item.color)}
                      aria-label="Remove item"
                      className="text-secondaryText hover:text-primaryBlack transition-colors shrink-0"
                    >
                      <CloseIcon className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="font-body text-xs text-secondaryText mb-1">
                    Size: <span className="text-primaryBlack">{item.size}</span>
                    {item.color && (
                      <> &nbsp;·&nbsp; Colour: <span className="text-primaryBlack">{item.color}</span></>
                    )}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    {/* Qty */}
                    <div className="flex items-center border border-primaryBlack/15">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                        className="w-9 h-9 font-body text-lg flex items-center justify-center hover:bg-primaryBlack/5 transition-colors"
                        aria-label="Decrease"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-body text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                        className="w-9 h-9 font-body text-lg flex items-center justify-center hover:bg-primaryBlack/5 transition-colors"
                        aria-label="Increase"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-body text-sm font-medium text-primaryBlack">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Order summary ───────────────────────────── */}
          <div className="md:col-span-2 bg-white p-7 sticky top-28">
            <h2 className="font-heading text-2xl text-primaryBlack mb-6">Order Summary</h2>

            <div className="space-y-3 font-body text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-secondaryText">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondaryText">Shipping</span>
                <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-secondaryText/60 italic">
                  Add {formatPrice(5000 - subtotal)} more for free shipping. (Demo)
                </p>
              )}
              <div className="border-t border-primaryBlack/10 pt-3 flex justify-between font-medium text-base">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            <button
              className="w-full font-body text-[11px] tracking-[0.3em] uppercase bg-primaryBlack text-white py-4 hover:bg-secondaryBlack transition-colors mb-3"
              onClick={() => alert('Checkout coming soon. Currently Cash on Delivery only. This is a demo.')}
            >
              Proceed to Checkout
            </button>
            <Link
              href="/shop"
              className="block text-center font-body text-[11px] tracking-[0.2em] uppercase text-secondaryText hover:text-primaryBlack transition-colors py-2"
            >
              Continue Shopping
            </Link>

            <p className="font-body text-[10px] text-secondaryText/40 text-center mt-5 leading-relaxed">
              Demo only — no orders are placed or processed.
              Cash on Delivery integration coming in a future phase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
