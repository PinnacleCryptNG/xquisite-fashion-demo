import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductInfo } from "@/components/product/ProductInfo";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Piece not found" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.slug);

  return (
    <div className="bg-ivory pt-24 sm:pt-28">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-16">
        <ProductGallery name={product.name} images={product.images} />
        <ProductInfo product={product} />
      </div>

      <section className="border-t border-charcoal/10 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-serif text-3xl font-light tracking-tight text-charcoal sm:text-4xl">
              You may also like
            </h2>
            <Link
              href="/shop"
              className="font-sans text-[11px] tracking-[0.2em] uppercase text-stone hover:text-charcoal"
            >
              Shop all
            </Link>
          </div>
          <ProductGrid products={related} />
        </div>
      </section>
    </div>
  );
}
