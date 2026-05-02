import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { Product } from "@/lib/types";
import { createClient } from "@/lib/supabase/server";

async function getProducts(): Promise<Product[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: true });
  return (data as Product[]) ?? [];
}

export default async function Products() {
  const products = await getProducts();
  return (
    <>
      <Navbar />
      <section className="bg-surface-container-low px-8 pt-20 pb-12 border-b border-outline/10">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block mb-4">
              Industrial Grade Standards
            </span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              ALL
              <br />
              PRODUCTS
            </h2>
            <p className="text-on-surface-variant body-lg max-w-md">
              Precision-engineered adhesive solutions for heavy-duty industrial
              packaging and D2C fulfillment logistics.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Filter by Category
              </label>
              <select className="bg-surface border-0 ring-1 ring-outline/20 focus:ring-2 focus:ring-primary-container px-6 py-4 min-w-[240px] font-bold uppercase text-xs">
                <option>All Tapes</option>
                <option>BOPP Packaging</option>
                <option>Reinforced Filament</option>
                <option>Masking Precision</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-surface">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-[4/5] bg-surface-container-highest relative overflow-hidden mb-6">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  data-alt="Close up of a roll of heavy duty brown industrial packing tape against a clean white industrial background with sharp shadows"
                  src={
                    product.image_url ??
                    "https://via.placeholder.com/400x500?text=No+Image"
                  }
                />
                <div className="absolute top-0 left-0 bg-on-surface text-surface px-4 py-2 font-bold text-[10px] tracking-widest uppercase">
                  SKU: {product.sku}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tighter">
                  {product.name}
                </h3>
                <div className="flex gap-2">
                  <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 text-[10px] font-bold uppercase tracking-tighter">
                    45 MICRONS
                  </span>
                  <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 text-[10px] font-bold uppercase tracking-tighter">
                    72MM X 65M
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm line-clamp-2">
                  {product.description}
                </p>
                <Link
                  href={`/products/${product.slug}`}
                  className="flex items-center justify-center w-full border-2 border-on-surface py-4 text-xs font-black uppercase tracking-widest hover:bg-primary-container hover:border-primary-container transition-colors"
                >
                  VIEW SPECIFICATIONS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-primary-container py-32 px-8">
        <div className="max-w-[1920px] mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
            CUSTOM PRODUCTION
            <br />
            AVAILABLE
          </h2>
          <p className="text-on-primary-fixed text-xl max-w-2xl mx-auto mb-12 font-medium">
            Need specific microns or custom branding? We manufacture bespoke
            adhesive solutions for industrial giants.
          </p>
          <button className="bg-on-surface text-surface px-12 py-6 font-black uppercase tracking-widest text-lg hover:scale-105 transition-transform">
            REQUEST BULK QUOTE
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
