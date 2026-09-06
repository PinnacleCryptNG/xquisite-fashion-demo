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
import { shopHref } from "@/data/shop-collections";

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

  const related = getRelatedProducts(product.slug, 3);
  const backHref = shopHref({ collection: product.category });

  return (
    <div className="bg-ivory pt-24 sm:pt-28">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Link
          href={backHref}
          className="mt-2 inline-flex min-h-11 items-center font-sans text-[11px] tracking-[0.2em] text-stone uppercase transition-colors duration-500 hover:text-charcoal"
        >
          ← Continue shopping
        </Link>

        <div className="grid items-start gap-12 py-8 sm:py-12 lg:grid-cols-5 lg:gap-16 lg:py-16 xl:gap-20">
          <div className="lg:col-span-3">
            <ProductGallery name={product.name} images={product.images} />
          </div>
          <div className="lg:col-span-2">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>

      <section
        aria-labelledby="related-heading"
        className="px-5 pt-8 pb-20 sm:px-8 sm:pt-12 sm:pb-24 lg:px-12 lg:pb-28"
      >
        <div className="mx-auto max-w-[1600px]">
          <h2
            id="related-heading"
            className="mb-10 font-serif text-3xl font-light tracking-tight text-charcoal sm:mb-14 sm:text-4xl"
          >
            You may also like.
          </h2>
          <ProductGrid
            products={related}
            className="gap-x-3.5 gap-y-12 sm:gap-x-7 sm:gap-y-16 lg:gap-x-10 xl:grid-cols-3"
          />
        </div>
      </section>
    </div>
  );
}
