const testimonials = [
  {
    quote:
      "Signet's custom tape changed our branding game. The print quality is crisp and never rubs off.",
    name: "Rahul Varma",
    role: "Founder, UrbanPack",
    accent: "border-on_surface",
    bg: "bg-surface_container_lowest",
  },
  {
    quote:
      "Best industrial adhesion we've tested for 5-ply boxes. Zero returns due to tape failure.",
    name: "Sneha Kapoor",
    role: "Logistics Head, LuxeD2C",
    accent: "border-primary_container",
    bg: "bg-surface",
  },
  {
    quote:
      "Factory direct pricing made custom branding affordable even for our small batch drops.",
    name: "Arjun Mehta",
    role: "Owner, The Shoe Lab",
    accent: "border-on_surface",
    bg: "bg-surface_container_lowest",
  },
  {
    quote:
      "Reliable delivery timelines and great customer support for custom artwork adjustments.",
    name: "Priya Dass",
    role: "Operations, EcoWare",
    accent: "border-primary_container",
    bg: "bg-surface",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-6 text-primary_container">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-sm"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-surface py-32 px-8 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <h2 className="text-center text-primary_container font-black text-[12vw] uppercase opacity-10 leading-none mb-[-4vw] tracking-tighter select-none">
          PARTNERSHIPS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-collapse">
          {testimonials.map((t) => (
            <div key={t.name} className={`border-t-4 ${t.accent} ${t.bg} p-10`}>
              <StarRating />
              <p className="font-bold uppercase leading-tight mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-surface_container" />
                <div>
                  <p className="text-xs font-black uppercase">{t.name}</p>
                  <p className="text-[10px] font-bold text-on_surface/40 uppercase">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
