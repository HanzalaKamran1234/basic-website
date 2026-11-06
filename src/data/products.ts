// src/data/products.ts
// ─────────────────────────────────────────────────────────────
// DEMO DATA — All products, prices, and details shown here are
// placeholder content for demonstration purposes only.
// They do not represent actual SPOGMAI inventory, confirmed
// pricing, or available stock.
// ─────────────────────────────────────────────────────────────

export type ProductCategory = 'tshirts' | 'pants' | 'formal';
export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type ProductColor = { name: string; hex: string };

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  salePrice?: number;
  images: string[];          // Unsplash URLs
  colors: ProductColor[];
  sizes: ProductSize[];
  isNew?: boolean;
  isBestSeller?: boolean;
  description: string;
  material: string;
  fit: string;
  care: string;
}

const UNSPLASH = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const products: Product[] = [
  // ── T-SHIRTS ──────────────────────────────────────────────
  {
    id: 'ts-001',
    slug: 'classic-white-essential-tee',
    name: 'Classic White Essential Tee',
    category: 'tshirts',
    price: 2999,
    images: [
      UNSPLASH('photo-1521572163474-6864f9cf17ab'),
      UNSPLASH('photo-1583743814966-8936f5b7be1a'),
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#080808' },
      { name: 'Ash Grey', hex: '#B0ADA8' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: false,
    isBestSeller: true,
    description:
      'A foundational piece designed for effortless everyday wear. Cut from premium pima cotton with a refined, structured silhouette that sits perfectly across the shoulders.',
    material: '100% Pima Cotton (200 GSM) — Demo specification',
    fit: 'Regular fit. Model is 6\'1" and wears size M.',
    care: 'Machine wash cold. Do not tumble dry. Iron on low.',
  },
  {
    id: 'ts-002',
    slug: 'midnight-black-structured-tee',
    name: 'Midnight Black Structured Tee',
    category: 'tshirts',
    price: 3499,
    images: [
      UNSPLASH('photo-1618354691438-25bc04584c23'),
      UNSPLASH('photo-1529374255404-311a2a4f1fd9'),
    ],
    colors: [
      { name: 'Black', hex: '#080808' },
      { name: 'Navy', hex: '#1B2A4A' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
    isBestSeller: false,
    description:
      'An elevated take on the classic tee. The structured collar and reinforced stitching give this piece a sharp, deliberate edge that moves from day to evening.',
    material: '95% Cotton, 5% Elastane (220 GSM) — Demo specification',
    fit: 'Slim fit. Model is 6\'0" and wears size L.',
    care: 'Machine wash cold. Reshape and lay flat to dry.',
  },
  {
    id: 'ts-003',
    slug: 'oversized-linen-blend-tee',
    name: 'Oversized Linen-Blend Tee',
    category: 'tshirts',
    price: 3999,
    salePrice: 2999,
    images: [
      UNSPLASH('photo-1489987707025-afc232f7ea0f'),
      UNSPLASH('photo-1552374196-c4e7ffc6e126'),
    ],
    colors: [
      { name: 'Sand', hex: '#C9B99A' },
      { name: 'Olive', hex: '#6B6B4A' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
    isBestSeller: false,
    description:
      'Relaxed and refined. The linen-cotton blend delivers a natural drape and breathability that makes this the essential warm-weather tee for the considered dresser.',
    material: '55% Linen, 45% Cotton — Demo specification',
    fit: 'Oversized fit. Model is 6\'1" and wears size M.',
    care: 'Hand wash recommended. Dry flat.',
  },
  {
    id: 'ts-004',
    slug: 'polo-essential-short-sleeve',
    name: 'Polo Essential',
    category: 'tshirts',
    price: 4499,
    images: [
      UNSPLASH('photo-1620799140408-edc6dcb6d633'),
      UNSPLASH('photo-1583743089695-4b816a340f82'),
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Navy', hex: '#1B2A4A' },
      { name: 'Burgundy', hex: '#6D1A25' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: false,
    isBestSeller: true,
    description:
      'A polo of genuine character. The two-button placket, ribbed collar, and tailored body placement make this a wardrobe essential that works equally in and out of the office.',
    material: '100% Supima Cotton Piqué — Demo specification',
    fit: 'Classic fit. Model is 6\'0" and wears size L.',
    care: 'Machine wash cold. Tumble dry low.',
  },

  // ── PANTS ─────────────────────────────────────────────────
  {
    id: 'pt-001',
    slug: 'slim-fit-chinos-sand',
    name: 'Slim Fit Chinos — Sand',
    category: 'pants',
    price: 5999,
    images: [
      UNSPLASH('photo-1473966968600-fa801b869a1a'),
      UNSPLASH('photo-1596755389378-c31d21fd1273'),
    ],
    colors: [
      { name: 'Sand', hex: '#C9B99A' },
      { name: 'Navy', hex: '#1B2A4A' },
      { name: 'Olive', hex: '#6B6B4A' },
      { name: 'Black', hex: '#080808' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: false,
    isBestSeller: true,
    description:
      'The definitive everyday chino. A clean, contemporary cut with a straight leg opening and mid-rise waist that sits cleanly under any shirt or jacket.',
    material: '98% Cotton, 2% Elastane — Demo specification',
    fit: 'Slim fit. Model is 6\'1" and wears size M (32"W).',
    care: 'Machine wash cold. Hang to dry.',
  },
  {
    id: 'pt-002',
    slug: 'relaxed-linen-trousers',
    name: 'Relaxed Linen Trousers',
    category: 'pants',
    price: 6499,
    salePrice: 4999,
    images: [
      UNSPLASH('photo-1555689502-c4b22d76c56f'),
      UNSPLASH('photo-1517841905240-472988babdf9'),
    ],
    colors: [
      { name: 'Ecru', hex: '#EDE8DF' },
      { name: 'Stone', hex: '#9E9178' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
    isBestSeller: false,
    description:
      'Wide-leg, effortlessly elegant. The natural linen weave breathes beautifully while maintaining structure. A refined choice for warm evenings and relaxed Fridays.',
    material: '100% European Linen — Demo specification',
    fit: 'Relaxed fit with tapered hem.',
    care: 'Dry clean recommended. Iron while damp.',
  },
  {
    id: 'pt-003',
    slug: 'tailored-wool-blend-trousers',
    name: 'Tailored Wool-Blend Trousers',
    category: 'pants',
    price: 8999,
    images: [
      UNSPLASH('photo-1490114538077-0a7f8cb49891'),
      UNSPLASH('photo-1507003211169-0a1dd7228f2d'),
    ],
    colors: [
      { name: 'Charcoal', hex: '#3A3A3A' },
      { name: 'Navy', hex: '#1B2A4A' },
      { name: 'Camel', hex: '#C19A6B' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: false,
    isBestSeller: true,
    description:
      'Precision tailoring meets refined fabric. The mid-weight wool blend drapes with authority, finished with a double-pleat front and side-adjusters for a sharp, articulate silhouette.',
    material: '70% Wool, 30% Polyester — Demo specification',
    fit: 'Tailored fit. Model wears size 32"W.',
    care: 'Dry clean only.',
  },
  {
    id: 'pt-004',
    slug: 'cargo-utility-pants-black',
    name: 'Cargo Utility Pants',
    category: 'pants',
    price: 6999,
    images: [
      UNSPLASH('photo-1552374196-1ab2a1c593e8'),
      UNSPLASH('photo-1529720317453-c8da503f2051'),
    ],
    colors: [
      { name: 'Black', hex: '#080808' },
      { name: 'Khaki', hex: '#8D7A5F' },
      { name: 'Olive', hex: '#6B6B4A' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
    isBestSeller: false,
    description:
      'Function and form in precise balance. The structured cargo pockets are designed flush to the leg, keeping the silhouette clean while providing practical storage.',
    material: '100% Cotton Ripstop — Demo specification',
    fit: 'Regular fit with straight leg.',
    care: 'Machine wash cold. Tumble dry low.',
  },

  // ── FORMAL SHIRTS ─────────────────────────────────────────
  {
    id: 'fs-001',
    slug: 'oxford-white-dress-shirt',
    name: 'Oxford White Dress Shirt',
    category: 'formal',
    price: 5499,
    images: [
      UNSPLASH('photo-1620799139507-2a76f79a2f4d'),
      UNSPLASH('photo-1512436991641-6745cdb1723f'),
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Blue', hex: '#7395AE' },
      { name: 'Pink', hex: '#D4A5A5' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: false,
    isBestSeller: true,
    description:
      'The essential dress shirt, executed with precision. The spread collar, mother-of-pearl buttons, and long-staple cotton weave make this a cornerstone of a considered wardrobe.',
    material: '100% Long-Staple Egyptian Cotton — Demo specification',
    fit: 'Slim fit. Model is 6\'1" and wears size L.',
    care: 'Machine wash cold. Iron while slightly damp.',
  },
  {
    id: 'fs-002',
    slug: 'navy-pinstripe-formal-shirt',
    name: 'Navy Pinstripe Formal Shirt',
    category: 'formal',
    price: 5999,
    images: [
      UNSPLASH('photo-1548036328-c9fa89d128fa'),
      UNSPLASH('photo-1520975301238-0e7c2c9a5b57'),
    ],
    colors: [
      { name: 'Navy', hex: '#1B2A4A' },
      { name: 'Charcoal', hex: '#3A3A3A' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
    isBestSeller: false,
    description:
      'An authoritative statement for the board room and beyond. The fine pinstripe pattern and French-cuff detailing signal intent without announcement.',
    material: '100% Poplin Cotton — Demo specification',
    fit: 'Tailored fit.',
    care: 'Machine wash cold on delicate cycle. Press with medium iron.',
  },
  {
    id: 'fs-003',
    slug: 'mandarin-collar-linen-shirt',
    name: 'Mandarin Collar Linen Shirt',
    category: 'formal',
    price: 4999,
    salePrice: 3999,
    images: [
      UNSPLASH('photo-1529374255404-311a2a4f1fd9'),
      UNSPLASH('photo-1540553016722-983e48a2cd10'),
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Sand', hex: '#C9B99A' },
      { name: 'Sky', hex: '#B0C4D8' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
    isBestSeller: false,
    description:
      'A modern formal piece without the traditional collar. The mandarin neckline gives a clean, contemporary finish that works with tailored trousers or smart chinos.',
    material: '100% Linen — Demo specification',
    fit: 'Regular fit.',
    care: 'Hand wash recommended. Iron while damp.',
  },
  {
    id: 'fs-004',
    slug: 'classic-black-tuxedo-shirt',
    name: 'Classic Black Tuxedo Shirt',
    category: 'formal',
    price: 7999,
    images: [
      UNSPLASH('photo-1507679799987-c73779587ccf'),
      UNSPLASH('photo-1480429370139-e0132c086e2a'),
    ],
    colors: [
      { name: 'Black', hex: '#080808' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: false,
    isBestSeller: true,
    description:
      'The definitive eveningwear shirt. Wing collar, pleated bib, and hand-stitched buttons — every detail considered, every element deliberate.',
    material: '100% Poplin Cotton — Demo specification',
    fit: 'Slim fit. French cuffs (cufflinks required).',
    care: 'Dry clean recommended.',
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (category: ProductCategory) =>
  products.filter((p) => p.category === category);

export const getNewArrivals = () =>
  products.filter((p) => p.isNew);

export const getBestSellers = () =>
  products.filter((p) => p.isBestSeller);

export const getRelatedProducts = (product: Product, limit = 4) =>
  products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);

export const formatPrice = (pkr: number) =>
  `PKR ${pkr.toLocaleString('en-PK')}`;

export const categoryLabels: Record<ProductCategory, string> = {
  tshirts: 'T-Shirts',
  pants: 'Pants',
  formal: 'Formal Shirts',
};
