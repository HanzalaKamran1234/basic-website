"use client";

import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { QuickView } from './QuickView';
import type { Product } from '../data/products';

interface ProductGridSectionProps {
  products: Product[];
  columns?: 2 | 3 | 4;
}

export const ProductGridSection: React.FC<ProductGridSectionProps> = ({
  products,
  columns = 4,
}) => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const colClass =
    columns === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : columns === 3
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <>
      <div className={`grid ${colClass} gap-6`}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={setQuickViewProduct}
          />
        ))}
      </div>
      <QuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  );
};
