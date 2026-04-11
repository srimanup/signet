import ProductGallery from "@/components/hero-product/ProductGallery";
import TapeCustomizer from "@/components/hero-product/TapeCustomizer";
import ProductConfigurator from "@/components/hero-product/ProductConfigurator";

export default function HeroProduct() {
  return (
    <main className="max-w-[1920px] mx-auto px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      {/* Left column */}
      <div className="lg:col-span-7 flex flex-col gap-12">
        <ProductGallery />
        <TapeCustomizer />
      </div>

      {/* Right column */}
      <ProductConfigurator />
    </main>
  );
}
