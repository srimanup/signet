import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Product } from "@/lib/types";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductConfigurator from "@/components/hero-product/ProductConfigurator";
import TapeCustomizer from "@/components/hero-product/TapeCustomizer";

async function getProduct(slug: string): Promise<Product | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;
  return data as Product;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) notFound();

  return (
    <div className="bg-surface text-on_surface font-sans selection:bg-primary_container selection:text-on_primary_fixed">
      <Navbar />
      <main className="max-w-[1920px] mx-auto px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left column */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          {/* Main image */}
          <div className="bg-surface_container w-full aspect-[4/3] flex items-center justify-center p-12">
            {product.image_url ? (
              <img
                className="w-full h-full object-cover shadow-2xl"
                src={product.image_url}
                alt={product.name}
              />
            ) : (
              <span className="material-symbols-outlined text-8xl text-on_surface/10">
                inventory_2
              </span>
            )}
          </div>

          {/* Only show customizer for custom printed tape */}
          {product.sku === "CP-BOPP-2024" && <TapeCustomizer />}

          {/* Technical details */}
          <div className="space-y-6">
            <h2 className="text-4xl font-black uppercase tracking-tight">
              PRODUCT SPECIFICATIONS
            </h2>
            <p className="text-on_surface_variant max-w-xl leading-relaxed">
              {product.description}
            </p>

            {product.specs && (
              <div className="grid grid-cols-2 gap-4 border-t border-outline pt-8">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key}>
                    <span className="block text-[10px] font-bold tracking-widest text-on_surface_variant uppercase mb-1">
                      {key.replace(/_/g, " ")}
                    </span>
                    <span className="text-lg font-bold uppercase">{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right column — configurator */}
        <ProductConfigurator product={product} />
      </main>
      <Footer />
    </div>
  );
}
