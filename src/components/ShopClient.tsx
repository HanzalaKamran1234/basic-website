"use client";

import { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { QuickView } from './QuickView';
import { FilterIcon, SearchIcon, CloseIcon } from './icons';
import {
  products,
  categoryLabels,
  formatPrice,
  type Product,
  type ProductCategory,
  type ProductSize,
} from '../data/products';

type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'name';

interface ShopClientProps {
  initialCategory?: string;
  initialQuery?: string;
  initialFilter?: string;
}

export const ShopClient: React.FC<ShopClientProps> = ({
  initialCategory = '',
  initialQuery = '',
  initialFilter = '',
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [inputValue, setInputValue] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | ''>(
    (initialCategory as ProductCategory) || ''
  );
  const [selectedSizes, setSelectedSizes] = useState<ProductSize[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const allSizes: ProductSize[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const toggleSize = (size: ProductSize) =>
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );

  const filtered = useMemo(() => {
    let list = [...products];

    // Filter preset
    if (initialFilter === 'new') list = list.filter((p) => p.isNew);
    if (initialFilter === 'bestseller') list = list.filter((p) => p.isBestSeller);

    // Category
    if (selectedCategory) list = list.filter((p) => p.category === selectedCategory);

    // Sizes
    if (selectedSizes.length > 0)
      list = list.filter((p) => selectedSizes.some((s) => p.sizes.includes(s)));

    // Search
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          categoryLabels[p.category].toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
        break;
      case 'price-desc':
        list.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
        break;
      case 'name':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // newest — isNew first
        list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return list;
  }, [selectedCategory, selectedSizes, query, sortBy, initialFilter]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(inputValue);
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedSizes([]);
    setQuery('');
    setInputValue('');
    setSortBy('newest');
  };

  const hasActiveFilters =
    selectedCategory || selectedSizes.length > 0 || query;

  return (
    <>
      {/* ── Toolbar ──────────────────────────────────────── */}
      <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
        {/* Search */}
        <form onSubmit={handleSearch} className="flex items-center gap-2 border border-primaryBlack/15 bg-white px-4 py-2.5 flex-1 max-w-xs">
          <SearchIcon className="w-4 h-4 text-secondaryText shrink-0" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search products…"
            className="font-body text-sm flex-1 bg-transparent focus:outline-none placeholder-secondaryText/60"
          />
          {inputValue && (
            <button
              type="button"
              onClick={() => { setInputValue(''); setQuery(''); }}
              className="text-secondaryText hover:text-primaryBlack"
            >
              <CloseIcon className="w-3 h-3" />
            </button>
          )}
        </form>

        <div className="flex items-center gap-3 ml-auto">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase border border-primaryBlack/20 px-4 py-2.5 hover:border-primaryBlack transition-colors"
          >
            <FilterIcon className="w-4 h-4" />
            Filter
          </button>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="font-body text-xs tracking-[0.1em] border border-primaryBlack/20 bg-white px-3 py-2.5 focus:outline-none focus:border-primaryBlack cursor-pointer"
          >
            <option value="newest">Sort: Newest</option>
            <option value="price-asc">Sort: Price Low–High</option>
            <option value="price-desc">Sort: Price High–Low</option>
            <option value="name">Sort: A–Z</option>
          </select>
        </div>
      </div>

      {/* ── Layout ───────────────────────────────────────── */}
      <div className="flex gap-8 items-start">

        {/* ── Filter Sidebar ─────────────────────────────── */}
        <aside
          className={`shrink-0 w-56 ${filterOpen ? 'block' : 'hidden'} md:block`}
        >
          <div className="sticky top-28 space-y-8">
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="font-body text-xs text-accent tracking-[0.15em] uppercase underline underline-offset-4 hover:text-primaryBlack transition-colors"
              >
                Clear All Filters
              </button>
            )}

            {/* Category */}
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-secondaryText mb-3">
                Category
              </p>
              <div className="space-y-1.5">
                {(['', 'tshirts', 'pants', 'formal'] as const).map((cat) => (
                  <button
                    key={cat || 'all'}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left font-body text-sm py-1.5 px-0 transition-colors ${
                      selectedCategory === cat
                        ? 'text-primaryBlack font-semibold'
                        : 'text-secondaryText hover:text-primaryBlack'
                    }`}
                  >
                    {cat === '' ? 'All Products' : categoryLabels[cat]}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-secondaryText mb-3">
                Size
              </p>
              <div className="flex flex-wrap gap-2">
                {allSizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleSize(s)}
                    className={`w-10 h-10 font-body text-xs border transition-colors ${
                      selectedSizes.includes(s)
                        ? 'bg-primaryBlack text-white border-primaryBlack'
                        : 'bg-white text-primaryBlack border-primaryBlack/20 hover:border-primaryBlack'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Price range (static display, demo) */}
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-secondaryText mb-3">
                Price Range
              </p>
              <p className="font-body text-sm text-primaryBlack">
                {formatPrice(2999)} — {formatPrice(8999)}
              </p>
              <p className="font-body text-xs text-secondaryText/60 mt-1">
                Demo — price filter coming soon.
              </p>
            </div>
          </div>
        </aside>

        {/* ── Product Grid ───────────────────────────────── */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-6">
            <p className="font-body text-xs text-secondaryText">
              {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-heading text-3xl text-primaryBlack mb-3">No products found</p>
              <p className="font-body text-sm text-secondaryText mb-6">
                Try adjusting your filters or search term.
              </p>
              <button
                onClick={clearFilters}
                className="font-body text-xs tracking-[0.2em] uppercase border border-primaryBlack px-8 py-3 hover:bg-primaryBlack hover:text-white transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={setQuickViewProduct}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick View */}
      <QuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  );
};
