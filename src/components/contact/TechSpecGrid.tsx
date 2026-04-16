const specs = [
  {
    icon: "verified",
    title: "ISO CERTIFIED",
    body: "Every roll manufactured meets international quality standards for tensile strength and adhesive longevity.",
    border: "border-b-4 md:border-b-0 md:border-r-4 border-primary_container",
  },
  {
    icon: "local_shipping",
    title: "PAN-INDIA LOGISTICS",
    body: "Direct-from-factory shipping with specialized transport for high-volume industrial consignments.",
    border: "border-b-4 md:border-b-0 md:border-r-4 border-primary_container",
  },
  {
    icon: "inventory",
    title: "CUSTOM MICRONS",
    body: "Don't settle for generic. We manufacture tapes to your specific micron and GSM requirements.",
    border: "",
  },
];

export default function TechSpecGrid() {
  return (
    <section className="bg-surface_container py-32 px-8 overflow-hidden">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
        {specs.map((s) => (
          <div key={s.title} className={`bg-surface p-12 ${s.border}`}>
            <span className="material-symbols-outlined text-5xl mb-6 text-primary block">
              {s.icon}
            </span>
            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">
              {s.title}
            </h4>
            <p className="text-on_surface_variant font-medium">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
