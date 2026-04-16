const pillars = [
  {
    title: "Centralized Hub",
    body: "Located at the heart of Telangana's industrial corridor, our facility serves as a critical junction for supply chain logistics across the Indian subcontinent.",
  },
  {
    title: "Zero-Intermediary Model",
    body: "By controlling 100% of the manufacturing process in-house, we eliminate the markups of middlemen, passing direct cost savings to our industrial partners.",
  },
  {
    title: "Sustainable Engineering",
    body: "Our facility utilizes low-emission coating processes and recycled material integration to minimize our environmental footprint while maintaining peak performance.",
  },
];

export default function ManufacturingHub() {
  return (
    <section className="py-40 px-8 bg-surface overflow-hidden">
      <div className="max-w-[1920px] mx-auto grid grid-cols-12 gap-12 items-center">
        {/* Image */}
        <div className="col-span-12 lg:col-span-6 relative">
          <img
            alt="Interior of a large modern warehouse in Hyderabad with organized racking systems and bright industrial lighting"
            className="w-full aspect-[4/5] object-cover grayscale brightness-75"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcqo3d7t3SIXn4vNnYDuyT9lYqXBxBYg1lcXoT0wuDYLW14UzDjceqvQzcX4nxhsLBYbtvCi_cNpOHY8s5THNeIgVdqgt9rWDUbfiL0tC3cgMLSRGa74imCxCr0M0pCzpe9eJU9Y7aFtQl3UdoMbornmRcSkIQZDmqM464XAYwMG6Yi2OTfyPWtmtQzMA3fhRIwbLZzRpziUrpaLxuaHGijbxyzKNzdfc4BLxSMiKOO09Qj1tJRDUETnUmjYDuvO35z7JINaZv"
          />
          <div className="absolute -bottom-10 -right-10 bg-surface_container p-12 w-64 h-64 flex items-center justify-center">
            <div className="text-center">
              <span className="block font-black text-6xl">01</span>
              <span className="block text-xs font-bold text-primary tracking-widest uppercase">
                Manufacturing Center
              </span>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="col-span-12 lg:col-span-5 lg:ml-auto">
          <h3 className="text-on_surface font-black text-6xl uppercase tracking-tighter leading-none mb-12">
            MANUFACTURED IN HYDERABAD.
          </h3>
          <div className="space-y-8">
            {pillars.map((p) => (
              <div key={p.title}>
                <h5 className="text-primary font-black uppercase text-sm tracking-widest mb-2">
                  {p.title}
                </h5>
                <p className="text-on_surface_variant leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
