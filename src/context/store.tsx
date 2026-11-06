"use client";

import { useContext, createContext, useSyncExternalStore, useMemo, useCallback } from 'react';

/* ─── Types ──────────────────────────────────────────────── */
export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;        // effective price (salePrice ?? price)
  image: string;
  size: string;
  color: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string, size: string, color: string) => void;
  updateQuantity: (id: string, size: string, color: string, qty: number) => void;
  clearCart: () => void;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'spogmai_cart';
const CART_EVENT = 'spogmai_cart_event';

/* ─── External Store helpers for Cart ─────────────────────── */
function subscribeCart(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', callback);
  window.addEventListener(CART_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(CART_EVENT, callback);
  };
}

function getCartSnapshot(): string {
  if (typeof window === 'undefined') return '[]';
  try {
    return localStorage.getItem(STORAGE_KEY) || '[]';
  } catch {
    return '[]';
  }
}

function getCartServerSnapshot(): string {
  return '[]';
}

function persistCart(items: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event(CART_EVENT));
  } catch { /* ignore */ }
}

/* ─── Provider ───────────────────────────────────────────── */
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const rawCart = useSyncExternalStore(subscribeCart, getCartSnapshot, getCartServerSnapshot);

  const items = useMemo(() => {
    try {
      return JSON.parse(rawCart) as CartItem[];
    } catch {
      return [];
    }
  }, [rawCart]);

  const key = (item: Pick<CartItem, 'id' | 'size' | 'color'>) =>
    `${item.id}__${item.size}__${item.color}`;

  const addItem = useCallback((item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    try {
      const current = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as CartItem[];
      const k = key(item);
      const existing = current.find((i) => key(i) === k);
      let next: CartItem[];
      if (existing) {
        next = current.map((i) =>
          key(i) === k ? { ...i, quantity: i.quantity + (item.quantity ?? 1) } : i
        );
      } else {
        next = [...current, { ...item, quantity: item.quantity ?? 1 }];
      }
      persistCart(next);
    } catch { /* ignore */ }
  }, []);

  const removeItem = useCallback((id: string, size: string, color: string) => {
    try {
      const current = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as CartItem[];
      const next = current.filter((i) => key(i) !== key({ id, size, color }));
      persistCart(next);
    } catch { /* ignore */ }
  }, []);

  const updateQuantity = useCallback((id: string, size: string, color: string, qty: number) => {
    try {
      const current = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as CartItem[];
      if (qty < 1) {
        persistCart(current.filter((i) => key(i) !== key({ id, size, color })));
        return;
      }
      const next = current.map((i) =>
        key(i) === key({ id, size, color }) ? { ...i, quantity: qty } : i
      );
      persistCart(next);
    } catch { /* ignore */ }
  }, []);

  const clearCart = useCallback(() => {
    persistCart([]);
  }, []);

  const count = useMemo(() => items.reduce((s, i) => s + i.quantity, 0), [items]);
  const subtotal = useMemo(() => items.reduce((s, i) => s + i.price * i.quantity, 0), [items]);

  return (
    <CartContext.Provider value={{ items, count, addItem, removeItem, updateQuantity, clearCart, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
};

/* ─── Wishlist ───────────────────────────────────────────── */
interface WishlistContextValue {
  ids: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);
const WISH_KEY = 'spogmai_wishlist';
const WISH_EVENT = 'spogmai_wishlist_event';

function subscribeWishlist(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', callback);
  window.addEventListener(WISH_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(WISH_EVENT, callback);
  };
}

function getWishlistSnapshot(): string {
  if (typeof window === 'undefined') return '[]';
  try {
    return localStorage.getItem(WISH_KEY) || '[]';
  } catch {
    return '[]';
  }
}

function getWishlistServerSnapshot(): string {
  return '[]';
}

function persistWishlist(ids: string[]) {
  try {
    localStorage.setItem(WISH_KEY, JSON.stringify(ids));
    window.dispatchEvent(new Event(WISH_EVENT));
  } catch { /* ignore */ }
}

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const rawIds = useSyncExternalStore(subscribeWishlist, getWishlistSnapshot, getWishlistServerSnapshot);

  const ids = useMemo(() => {
    try {
      return JSON.parse(rawIds) as string[];
    } catch {
      return [];
    }
  }, [rawIds]);

  const toggle = useCallback((id: string) => {
    try {
      const current = JSON.parse(localStorage.getItem(WISH_KEY) || '[]') as string[];
      const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
      persistWishlist(next);
    } catch { /* ignore */ }
  }, []);

  const has = useCallback((id: string) => ids.includes(id), [ids]);

  return (
    <WishlistContext.Provider value={{ ids, toggle, has }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used inside <WishlistProvider>');
  return ctx;
};
