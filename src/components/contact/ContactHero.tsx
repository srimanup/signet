export default function ContactHero() {
  return (
    <section className="bg-surface_container_low py-20 px-8">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-8">
          <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase block mb-4">
            Industrial Grade Adhesives
          </span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-on_surface">
            Request a <br />
            <span className="text-primary_container bg-on_surface px-4">
              Quote
            </span>
          </h2>
        </div>

        <div className="md:col-span-4">
          <p className="text-on_surface_variant text-lg max-w-md border-l-4 border-primary_container pl-6 py-2">
            Precision-engineered tapes for India&apos;s manufacturing
            powerhouse. Get custom pricing for bulk orders and industrial
            specifications.
          </p>
        </div>
      </div>
    </section>
  );
}
