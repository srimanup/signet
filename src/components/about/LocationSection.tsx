export default function LocationSection() {
  return (
    <section className="py-40 px-8 bg-on_surface text-surface">
      <div className="max-w-[1920px] mx-auto grid grid-cols-12 gap-0">
        {/* Address panel */}
        <div className="col-span-12 lg:col-span-4 p-12 border-l border-surface/20 flex flex-col justify-between">
          <div>
            <h3 className="font-black text-5xl uppercase tracking-tighter mb-8">
              GLOBAL
              <br />
              DISPATCH.
            </h3>
            <p className="text-surface/60 max-w-xs mb-12">
              Visit our industrial complex or schedule a technical audit of our
              production lines.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary_container">
                location_on
              </span>
              <p className="font-bold text-sm uppercase tracking-widest">
                Signet Tapes Industrial Park,
                <br />
                Phase II, Cherlapally, Hyderabad,
                <br />
                Telangana - 500051
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary_container">
                mail
              </span>
              <p className="font-bold text-sm uppercase tracking-widest">
                industrial@signettapes.com
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div
          className="col-span-12 lg:col-span-8 bg-surface_container min-h-[500px] grayscale"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_vXVSZTsszGKUfZS9V5TS2HwDttE5MMiSbMnQxjSclF7y6uinaPzIBZ4TVuSLf0pxDIKdik7BH9vrylMWZYSzqjrqZhdAqfib7VxGvmeIOoVFFk92zWTVxpDbfzI8HhMKw2bKor387eLGmdaWG69gQ0o47WpCQTGQ1_CZDg71IEEPJm-P2aL1lGE4Zm7Xb-bE0zz-wd3E1Mj_fz1LPumYLkiVnlW-o2pEXv5V4GJUw98i5aB8ydEWQ-cXFw7ocWeCWYbbOm4J')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </section>
  );
}
