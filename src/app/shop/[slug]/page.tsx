import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '../../../data/products';
import { ProductClient } from '../../../components/ProductClient';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Not Found — SPOGMAI' };
  return {
    title: `${product.name} — SPOGMAI`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductClient product={product} />;
}
