"use client";

export default function QuoteForm() {
  return (
    <div className="lg:col-span-7 bg-on_surface text-surface p-12 md:p-20 relative">
      <div className="absolute top-0 right-0 p-8">
        <span className="text-[120px] font-black leading-none opacity-5 select-none">
          01
        </span>
      </div>

      <h3 className="text-4xl font-black uppercase tracking-tighter mb-12 border-l-8 border-primary_container pl-8">
        Quote Specification
      </h3>

      <form className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-surface/60">
              Full Name
            </label>
            <input
              className="w-full bg-transparent border-0 border-b-2 border-surface/20 focus:border-primary_container focus:ring-0 text-xl font-bold py-4 px-0 placeholder:text-surface/20 transition-colors"
              placeholder="EX: ARJUN MEHTA"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-surface/60">
              Phone Number
            </label>
            <input
              className="w-full bg-transparent border-0 border-b-2 border-surface/20 focus:border-primary_container focus:ring-0 text-xl font-bold py-4 px-0 placeholder:text-surface/20 transition-colors"
              placeholder="+91 XXXX-XXXXXX"
              type="tel"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-surface/60">
            Business Name
          </label>
          <input
            className="w-full bg-transparent border-0 border-b-2 border-surface/20 focus:border-primary_container focus:ring-0 text-xl font-bold py-4 px-0 placeholder:text-surface/20 transition-colors"
            placeholder="EX: GLOBAL LOGISTICS PVT LTD"
            type="text"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-surface/60">
            Requirement Details (SKU, Quantity, Microns)
          </label>
          <textarea
            className="w-full bg-transparent border-0 border-b-2 border-surface/20 focus:border-primary_container focus:ring-0 text-xl font-bold py-4 px-0 placeholder:text-surface/20 transition-colors resize-none"
            placeholder="DESCRIBE YOUR INDUSTRIAL NEED..."
            rows={4}
          />
        </div>

        <div className="pt-8">
          <button
            type="submit"
            className="w-full bg-primary_container text-on_primary_fixed py-6 font-black uppercase tracking-[0.2em] text-lg hover:bg-white transition-all group flex items-center justify-center gap-4"
          >
            SUBMIT QUOTE REQUEST
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
              arrow_forward
            </span>
          </button>
          <p className="text-[10px] font-medium text-surface/40 mt-6 text-center tracking-widest uppercase">
            GST Invoice available for all corporate orders. Response time &lt; 4
            hours.
          </p>
        </div>
      </form>
    </div>
  );
}
