export default function Process() {
  return (
    <section className="bg-surface_container py-32 px-8">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-24">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">
            THE SIGNET PROCESS
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            FROM DESIGN TO DELIVERY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-on_surface/10 z-0" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-on_surface text-primary_container flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-4xl">
                upload_file
              </span>
            </div>
            <h3 className="text-2xl font-black uppercase mb-4">
              1. UPLOAD ART
            </h3>
            <p className="text-sm font-bold uppercase text-on_surface/60 max-w-xs">
              Upload your brand logo or design. We accept PDF, AI, and high-res
              PNG formats.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-on_surface text-primary_container flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-4xl">draw</span>
            </div>
            <h3 className="text-2xl font-black uppercase mb-4">
              2. DIGITAL PROOF
            </h3>
            <p className="text-sm font-bold uppercase text-on_surface/60 max-w-xs">
              Our designers create a digital mockup for your approval within 24
              working hours.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-on_surface text-primary_container flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-4xl">
                conveyor_belt
              </span>
            </div>
            <h3 className="text-2xl font-black uppercase mb-4">3. SHIPMENT</h3>
            <p className="text-sm font-bold uppercase text-on_surface/60 max-w-xs">
              Once approved, we print and ship your custom boxes within 7-10
              business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
