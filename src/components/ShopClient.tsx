"use client";

import { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { QuickView } from './QuickView';
import { FilterIcon, SearchIcon, CloseIcon } from './icons';
import {
  products,
  categoryLabels,
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
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const allSizes: ProductSize[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const toggleSize = (size: ProductSize) =>
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );

  const filtered = useMemo(() => {
    let list = [...products];

    // Filter preset from URL
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
    Boolean(selectedCategory) || selectedSizes.length > 0 || Boolean(query);

  return (
    <div className="space-y-space-xl">
      {/* ── Desktop & Mobile Filter Bar ───────────────────── */}
      <div className="border-b border-outline-variant/20 pb-space-lg space-y-space-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('')}
              className={`font-label-caps-sm text-label-caps-sm uppercase tracking-widest px-space-md py-space-sm transition-colors border ${
                selectedCategory === ''
                  ? 'bg-tertiary text-on-tertiary border-tertiary'
                  : 'bg-surface-container-low text-on-surface-variant border-outline-variant/30 hover:border-outline hover:text-on-surface'
              }`}
            >
              ALL ({products.length})
            </button>
            <button
              onClick={() => setSelectedCategory('tshirts')}
              className={`font-label-caps-sm text-label-caps-sm uppercase tracking-widest px-space-md py-space-sm transition-colors border ${
                selectedCategory === 'tshirts'
                  ? 'bg-tertiary text-on-tertiary border-tertiary'
                  : 'bg-surface-container-low text-on-surface-variant border-outline-variant/30 hover:border-outline hover:text-on-surface'
              }`}
            >
              T-SHIRTS
            </button>
            <button
              onClick={() => setSelectedCategory('formal')}
              className={`font-label-caps-sm text-label-caps-sm uppercase tracking-widest px-space-md py-space-sm transition-colors border ${
                selectedCategory === 'formal'
                  ? 'bg-tertiary text-on-tertiary border-tertiary'
                  : 'bg-surface-container-low text-on-surface-variant border-outline-variant/30 hover:border-outline hover:text-on-surface'
              }`}
            >
              SHIRTS
            </button>
            <button
              onClick={() => setSelectedCategory('pants')}
              className={`font-label-caps-sm text-label-caps-sm uppercase tracking-widest px-space-md py-space-sm transition-colors border ${
                selectedCategory === 'pants'
                  ? 'bg-tertiary text-on-tertiary border-tertiary'
                  : 'bg-surface-container-low text-on-surface-variant border-outline-variant/30 hover:border-outline hover:text-on-surface'
              }`}
            >
              TROUSERS
            </button>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-wrap items-center gap-space-sm">
            {/* Search Input Form */}
            <form onSubmit={handleSearch} className="relative flex-1 sm:w-64">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search archive..."
                className="w-full bg-surface-container-low border border-outline-variant/30 text-on-surface text-body-sm px-space-md py-space-xs pl-8 placeholder:text-on-surface-variant/40 focus:outline-none focus:border-tertiary transition-colors"
              />
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60">
                <SearchIcon className="w-3.5 h-3.5" />
              </span>
              {inputValue && (
                <button
                  type="button"
                  onClick={() => {
                    setInputValue('');
                    setQuery('');
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface p-1"
                >
                  <CloseIcon className="w-3 h-3" />
                </button>
              )}
            </form>

            {/* Sort Selector */}
            <div className="flex items-center gap-space-xs">
              <span className="hidden sm:inline font-label-caps-sm text-label-caps-sm text-on-surface-variant tracking-wider uppercase">
                SORT:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-surface-container-low border border-outline-variant/30 text-on-surface font-label-caps-sm text-label-caps-sm px-space-sm py-space-xs focus:outline-none focus:border-tertiary uppercase tracking-wider"
              >
                <option value="newest">CURATED / NEW</option>
                <option value="price-asc">PRICE: LOW TO HIGH</option>
                <option value="price-desc">PRICE: HIGH TO LOW</option>
                <option value="name">ALPHABETICAL (A-Z)</option>
              </select>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              type="button"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-1.5 px-space-sm py-space-xs bg-surface-container-low border border-outline-variant/30 text-on-surface font-label-caps-sm text-label-caps-sm uppercase tracking-wider"
            >
              <FilterIcon className="w-3.5 h-3.5" />
              <span>SIZES</span>
            </button>
          </div>
        </div>

        {/* Size Filters (Desktop Always, Mobile Collapsible) */}
        <div
          className={`${
            mobileFilterOpen ? 'block' : 'hidden'
          } lg:flex items-center justify-between pt-space-xs gap-space-md border-t border-outline-variant/10`}
        >
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-label-caps-sm text-label-caps-sm text-on-surface-variant tracking-wider uppercase mr-2">
              FILTER BY SIZE:
            </span>
            {allSizes.map((s) => (
              <button
                key={s}
                onClick={() => toggleSize(s)}
                className={`w-9 h-9 font-label-caps-sm text-label-caps-sm uppercase tracking-wider border transition-colors ${
                  selectedSizes.includes(s)
                    ? 'bg-tertiary text-on-tertiary border-tertiary'
                    : 'bg-surface-container-low border-outline-variant/30 text-on-surface hover:border-tertiary/60'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="font-body-sm text-body-sm text-on-surface-variant pt-2 lg:pt-0">
            Showing <span className="text-on-surface font-normal">{filtered.length}</span> of {products.length} garments
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 flex-wrap pt-space-xs">
            <span className="font-label-caps-sm text-label-caps-sm text-tertiary tracking-widest uppercase">
              ACTIVE FILTERS:
            </span>

            {selectedCategory && (
              <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 bg-surface-container border border-outline-variant/40 text-on-surface font-label-caps-sm text-label-caps-sm uppercase tracking-wider">
                {categoryLabels[selectedCategory]}
                <button
                  onClick={() => setSelectedCategory('')}
                  className="hover:text-tertiary"
                  aria-label="Remove category filter"
                >
                  ×
                </button>
              </span>
            )}

            {selectedSizes.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 px-space-sm py-0.5 bg-surface-container border border-outline-variant/40 text-on-surface font-label-caps-sm text-label-caps-sm uppercase tracking-wider"
              >
                SIZE: {s}
                <button
                  onClick={() => toggleSize(s)}
                  className="hover:text-tertiary"
                  aria-label={`Remove size ${s} filter`}
                >
                  ×
                </button>
              </span>
            ))}

            {query && (
              <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 bg-surface-container border border-outline-variant/40 text-on-surface font-label-caps-sm text-label-caps-sm tracking-wider">
                &ldquo;{query}&rdquo;
                <button
                  onClick={() => {
                    setQuery('');
                    setInputValue('');
                  }}
                  className="hover:text-tertiary"
                  aria-label="Remove search term"
                >
                  ×
                </button>
              </span>
            )}

            <button
              onClick={clearFilters}
              className="font-label-caps-sm text-label-caps-sm text-tertiary hover:underline uppercase tracking-widest ml-2"
            >
              CLEAR ALL
            </button>
          </div>
        )}
      </div>

      {/* ── Product Grid or Empty State ───────────────────── */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center space-y-space-md border border-outline-variant/20 bg-surface-container-low max-w-xl mx-auto p-space-xl">
          <span className="font-label-caps-sm text-label-caps-sm text-tertiary uppercase tracking-widest block">
            NO SPECIFICATIONS FOUND
          </span>
          <h3 className="font-headline-md text-headline-md text-on-surface font-normal">
            No matching pieces in this edit
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant font-light max-w-md mx-auto">
            Try adjusting your search criteria or removing active category and size constraints to view other items in the archive.
          </p>
          <div className="pt-space-sm">
            <button
              onClick={clearFilters}
              className="px-space-xl py-space-md bg-tertiary text-on-tertiary font-label-caps-md text-label-caps-md tracking-[0.2em] uppercase hover:bg-primary-fixed transition-colors"
            >
              RESET ALL FILTERS
            </button>
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      <QuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};
