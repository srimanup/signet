export default function TrustBar() {
  return (
    <section className="bg-surface_container_low py-12 px-8">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-on_surface/10">
        <div className="flex items-center gap-6 md:justify-center py-4 md:py-0">
          <span className="material-symbols-outlined text-4xl text-primary">
            precision_manufacturing
          </span>
          <div>
            <h3 className="font-black uppercase tracking-tight text-lg">
              MADE IN INDIA
            </h3>
            <p className="text-xs uppercase font-bold text-on_surface/60">
              Fully Integrated Production
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 md:justify-center py-4 md:py-0">
          <span className="material-symbols-outlined text-4xl text-primary">
            factory
          </span>
          <div>
            <h3 className="font-black uppercase tracking-tight text-lg">
              FACTORY DIRECT
            </h3>
            <p className="text-xs uppercase font-bold text-on_surface/60">
              No Middlemen. Best Pricing.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 md:justify-center py-4 md:py-0">
          <span className="material-symbols-outlined text-4xl text-primary">
            receipt_long
          </span>
          <div>
            <h3 className="font-black uppercase tracking-tight text-lg">
              GST INVOICE
            </h3>
            <p className="text-xs uppercase font-bold text-on_surface/60">
              18% Input Tax Credit Ready
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
