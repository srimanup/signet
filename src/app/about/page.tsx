import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import TechnicalStrength from "@/components/about/TechnicalStrength";
import ManufacturingHub from "@/components/about/ManufacturingHub";
import LocationSection from "@/components/about/LocationSection";

export default function AboutPage() {
  return (
    <div className="bg-surface text-on_surface font-sans selection:bg-primary_container selection:text-on_primary_fixed">
      <Navbar />
      <main>
        <AboutHero />
        <TechnicalStrength />
        <ManufacturingHub />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
