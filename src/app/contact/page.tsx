import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import QuoteForm from "@/components/contact/QuoteForm";
import TechSpecGrid from "@/components/contact/TechSpecGrid";

export default function ContactPage() {
  return (
    <div className="bg-surface text-on_surface font-sans selection:bg-primary_container selection:text-on_primary_fixed">
      <Navbar />
      <main className="min-h-screen">
        <ContactHero />

        <section className="py-24 px-8 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <ContactInfo />
            <QuoteForm />
          </div>
        </section>

        <TechSpecGrid />
      </main>
      <Footer />
    </div>
  );
}
