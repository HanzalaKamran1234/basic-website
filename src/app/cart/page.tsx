"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../context/store';
import { formatPrice } from '../../data/products';
import { CloseIcon } from '../../components/icons';

export default function CartPage() {
  const { items, count, subtotal, removeItem, updateQuantity, clearCart } = useCart();
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderSimulated, setOrderSimulated] = useState(false);

  const shipping = subtotal >= 5000 ? 0 : 250;
  const total    = subtotal + shipping;

  /* ── Empty State ───────────────────────────────────────── */
  if (count === 0) {
    return (
      <div className="bg-surface min-h-screen text-on-surface flex flex-col items-center justify-center px-margin py-36 text-center">
        <div className="mb-space-lg">
          <span className="font-display-hero text-[100px] text-outline-variant/30 leading-none select-none">
            ∅
          </span>
        </div>
        <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-[0.28em] mb-2 block">
          YOUR ARCHIVE BAG
        </span>
        <h1 className="font-headline-lg text-headline-lg text-primary-fixed mb-space-sm font-normal">
          Your bag is empty.
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed mb-space-xl">
          Discover our curated collection of architectural menswear and add foundational pieces designed to endure.
        </p>
        <Link
          href="/shop"
          className="px-space-xl py-space-md bg-tertiary text-on-tertiary font-label-caps-md text-label-caps-md tracking-[0.2em] uppercase hover:bg-primary-fixed transition-colors shadow-lg"
        >
          EXPLORE THE ARCHIVE
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-surface min-h-screen text-on-surface pt-36 pb-space-2xl px-margin md:px-margin-desktop">
      <div className="max-w-6xl mx-auto space-y-space-xl">

        {/* ── Header ───────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-outline-variant/20 pb-space-lg gap-space-sm">
          <div>
            <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-[0.28em] block mb-1">
              CLIENT SERVICES
            </span>
            <h1 className="font-display-hero text-headline-lg md:text-[54px] md:leading-[62px] text-primary-fixed font-normal tracking-tight">
              Shopping Bag
            </h1>
          </div>
          <div className="flex items-center gap-space-md">
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {count} {count === 1 ? 'garment' : 'garments'} selected
            </span>
            <button
              onClick={clearCart}
              className="font-label-caps-sm text-label-caps-sm text-on-surface-variant hover:text-tertiary uppercase tracking-widest transition-colors underline"
            >
              CLEAR BAG
            </button>
          </div>
        </div>

        {/* ── Cart Content ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">

          {/* Left Column: Line Items (7 cols) */}
          <div className="lg:col-span-7 space-y-space-md">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.size}-${item.color}`}
                className="flex gap-space-md bg-surface-container-low border border-outline-variant/20 p-space-md transition-colors hover:border-tertiary/40"
              >
                {/* Image */}
                <Link
                  href={`/shop/${item.slug}`}
                  className="shrink-0 overflow-hidden aspect-[4/5] w-24 sm:w-28 bg-surface-container-lowest block border border-outline-variant/20"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <Link
                        href={`/shop/${item.slug}`}
                        className="font-headline-sm text-headline-sm text-on-surface hover:text-tertiary transition-colors leading-snug line-clamp-1"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.id, item.size, item.color)}
                        aria-label="Remove item"
                        className="text-on-surface-variant hover:text-tertiary transition-colors p-1"
                      >
                        <CloseIcon className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-space-md font-label-caps-sm text-label-caps-sm text-on-surface-variant uppercase tracking-wider">
                      <span>SIZE: <strong className="text-on-surface">{item.size}</strong></span>
                      {item.color && (
                        <span>COLOUR: <strong className="text-on-surface">{item.color}</strong></span>
                      )}
                    </div>
                  </div>

                  {/* Quantity & Item Subtotal */}
                  <div className="flex items-center justify-between pt-space-sm border-t border-outline-variant/15 mt-space-sm">
                    {/* Qty Counter */}
                    <div className="flex items-center border border-outline-variant/40 bg-surface-container">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-on-surface hover:text-tertiary transition-colors"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-label-caps-sm text-label-caps-sm text-on-surface">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-on-surface hover:text-tertiary transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="font-body-md text-body-md text-on-surface font-light">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-space-sm">
              <Link
                href="/shop"
                className="inline-flex items-center gap-space-xs font-label-caps-sm text-label-caps-sm text-tertiary hover:underline uppercase tracking-widest"
              >
                ← CONTINUE BROWSING THE ARCHIVE
              </Link>
            </div>
          </div>

          {/* Right Column: Order Summary (5 cols) */}
          <div className="lg:col-span-5 bg-surface-container border border-outline-variant/30 p-space-xl space-y-space-lg lg:sticky lg:top-28">
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-normal border-b border-outline-variant/20 pb-space-sm">
              Order Summary
            </h2>

            <div className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex justify-between">
                <span>Subtotal ({count} items)</span>
                <span className="text-on-surface font-light">{formatPrice(subtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-on-surface font-light">
                  {shipping === 0 ? 'Demo — Waived' : formatPrice(shipping)}
                </span>
              </div>

              {shipping > 0 && (
                <p className="font-caption text-caption text-tertiary tracking-wider uppercase">
                  Demo estimate — shipping calculated at dispatch.
                </p>
              )}

              <div className="border-t border-outline-variant/20 pt-space-sm flex justify-between items-baseline font-body-lg text-body-lg text-on-surface">
                <span className="font-normal">Estimated Total</span>
                <span className="font-normal text-tertiary">{formatPrice(total)}</span>
              </div>
            </div>

            <div className="space-y-space-sm pt-space-xs">
              <button
                onClick={() => setCheckoutModalOpen(true)}
                className="w-full py-space-md bg-tertiary text-on-tertiary font-label-caps-md text-label-caps-md uppercase tracking-[0.2em] transition-colors hover:bg-primary-fixed"
              >
                PROCEED TO CHECKOUT
              </button>

              <p className="font-caption text-caption text-on-surface-variant/60 text-center uppercase tracking-wider">
                PAYMENT GATEWAYS: CASH ON DELIVERY &amp; BANK DISPATCH (DEMO MODE)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Demo Checkout Modal ──────────────────────────────── */}
      {checkoutModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-container/85 backdrop-blur-md"
          onClick={() => setCheckoutModalOpen(false)}
        >
          <div
            className="bg-surface-container border border-outline-variant/40 p-space-xl max-w-lg w-full text-on-surface space-y-space-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-space-sm">
              <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-widest">
                CHECKOUT SYSTEM PREVIEW
              </span>
              <button
                onClick={() => setCheckoutModalOpen(false)}
                className="text-on-surface-variant hover:text-on-surface p-1"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {orderSimulated ? (
              <div className="py-space-md text-center space-y-space-sm">
                <div className="w-12 h-12 border border-tertiary flex items-center justify-center mx-auto text-tertiary text-xl">
                  ✓
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary-fixed font-normal">
                  Simulated Order Recorded
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Thank you for testing the SPOGMAI storefront. Because this is a frontend demonstration, no real payment was processed, no delivery dispatch will occur, and your cart has been cleared.
                </p>
                <div className="pt-space-md">
                  <button
                    onClick={() => {
                      clearCart();
                      setCheckoutModalOpen(false);
                      setOrderSimulated(false);
                    }}
                    className="px-space-xl py-space-md bg-tertiary text-on-tertiary font-label-caps-sm text-label-caps-sm uppercase tracking-widest hover:bg-primary-fixed"
                  >
                    RETURN TO STORE
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-space-md">
                <h3 className="font-headline-sm text-headline-sm text-primary-fixed font-normal">
                  Demo Storefront Notice
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  The SPOGMAI shopping bag calculation and item state are fully active in your browser. Live payment processing and automated order fulfillment APIs are currently not connected to this deployment.
                </p>

                <div className="bg-surface-container-low p-space-md border border-outline-variant/20 space-y-1 font-body-sm text-body-sm">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Selected Items:</span>
                    <span className="text-on-surface">{count}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Simulated Total:</span>
                    <span className="text-tertiary">{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Delivery Mode:</span>
                    <span className="text-on-surface">Cash on Delivery (Pakistan)</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-space-sm pt-space-xs">
                  <button
                    onClick={() => setOrderSimulated(true)}
                    className="flex-1 py-space-md bg-tertiary text-on-tertiary font-label-caps-sm text-label-caps-sm uppercase tracking-widest hover:bg-primary-fixed transition-colors"
                  >
                    CONFIRM SIMULATION
                  </button>
                  <button
                    onClick={() => setCheckoutModalOpen(false)}
                    className="flex-1 py-space-md bg-surface-container-high border border-outline-variant/30 text-on-surface font-label-caps-sm text-label-caps-sm uppercase tracking-widest hover:border-tertiary transition-colors"
                  >
                    KEEP SHOPPING
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
