import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGallery from "@/components/hero-product/ProductGallery";
import TapeCustomizer from "@/components/hero-product/TapeCustomizer";
import ProductConfigurator from "@/components/hero-product/ProductConfigurator";

export default function ProductPage() {
  return (
    <div className="bg-surface text-on_surface font-sans selection:bg-primary_container selection:text-on_primary_fixed">
      <Navbar />
      <main className="max-w-[1920px] mx-auto px-8 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left column */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          <ProductGallery />
          <TapeCustomizer />
        </div>

        {/* Right column */}
        <ProductConfigurator />
      </main>
      <Footer />
    </div>
  );
}
