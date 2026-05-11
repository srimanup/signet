import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import TrustBar from "@/components/home/TrustBar";

export default function Home() {
  return (
    <div className="bg-surface text-on_surface font-sans selection:bg-primary_container selection:text-on_primary_fixed">
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <Process />
        <Testimonials />
      </main>
      {/* <BottomNav /> */}
    </div>
  );
}
