const metrics = [
  {
    icon: "precision_manufacturing",
    value: "45+",
    label: "Micron Precision",
    description:
      "Ultra-accurate coating thickness ensuring maximum tensile strength in every roll.",
    className:
      "bg-surface p-12 border-l-8 border-primary_container h-full flex flex-col justify-between aspect-square",
    valueClass: "text-7xl font-black tracking-tighter text-on_surface",
    labelClass:
      "text-lg font-bold uppercase tracking-tight text-on_surface_variant",
    descClass: "text-sm mt-4 text-on_surface_variant/70",
    iconClass: "text-4xl mb-8",
  },
  {
    icon: "verified",
    value: "10K+",
    label: "Brands Empowered",
    description:
      "Providing the sealing foundation for India's leading D2C and manufacturing giants.",
    className:
      "bg-on_surface text-surface p-12 h-full flex flex-col justify-between aspect-square",
    valueClass: "text-7xl font-black tracking-tighter text-primary_container",
    labelClass: "text-lg font-bold uppercase tracking-tight opacity-70",
    descClass: "text-sm mt-4 opacity-50",
    iconClass: "text-4xl mb-8 text-primary_container",
  },
  {
    icon: "high_quality",
    value: "100%",
    label: "QC Compliance",
    description:
      "Rigorous multi-stage stress testing from raw material to finished product.",
    className:
      "bg-surface p-12 h-full flex flex-col justify-between aspect-square",
    valueClass: "text-7xl font-black tracking-tighter text-on_surface",
    labelClass:
      "text-lg font-bold uppercase tracking-tight text-on_surface_variant",
    descClass: "text-sm mt-4 text-on_surface_variant/70",
    iconClass: "text-4xl mb-8",
  },
  {
    icon: "speed",
    value: "24H",
    label: "Lead Time",
    description:
      "Industry-leading turnaround for bulk custom orders, dispatched directly from the floor.",
    className:
      "bg-primary_container text-on_primary_fixed p-12 h-full flex flex-col justify-between aspect-square",
    valueClass: "text-7xl font-black tracking-tighter",
    labelClass: "text-lg font-bold uppercase tracking-tight",
    descClass: "text-sm mt-4 font-medium",
    iconClass: "text-4xl mb-8",
  },
];

export default function TechnicalStrength() {
  return (
    <section className="bg-surface_container_low py-40 px-8">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex justify-between items-end mb-24 border-b-2 border-on_surface/10 pb-8">
          <h3 className="text-on_surface font-black text-5xl uppercase tracking-tighter">
            TECHNICAL
            <br />
            STRENGTH
          </h3>
          <p className="font-bold text-primary tracking-widest uppercase text-sm">
            Metrics of Trust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.value} className={m.className}>
              <span className={`material-symbols-outlined ${m.iconClass}`}>
                {m.icon}
              </span>
              <div>
                <h4 className={m.valueClass}>{m.value}</h4>
                <p className={m.labelClass}>{m.label}</p>
                <p className={m.descClass}>{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
