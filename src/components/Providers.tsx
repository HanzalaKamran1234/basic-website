"use client";
import { CartProvider, WishlistProvider } from '../context/store';
export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <CartProvider>
    <WishlistProvider>
      {children}
    </WishlistProvider>
  </CartProvider>
);
