export default function AboutHero() {
  return (
    <section className="relative bg-surface px-8 pt-32 pb-20 overflow-hidden">
      <div className="max-w-[1920px] mx-auto grid grid-cols-12 gap-0">
        <div className="col-span-12 lg:col-span-8">
          <span className="text-primary font-black tracking-[0.2em] text-sm block mb-4">
            THE INDUSTRIAL STANDARD
          </span>
          <h2 className="text-on_surface font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase mb-12">
            ARCHITECTS OF
            <br />
            ADHESION.
          </h2>
        </div>

        <div className="col-span-12 lg:col-span-4 self-end pb-12">
          <p className="text-on_surface_variant text-xl leading-relaxed max-w-md">
            At SIGNET TAPES, we don&apos;t just manufacture adhesive solutions;
            we engineer the structural integrity that drives India&apos;s
            industrial growth.
          </p>
        </div>
      </div>

      <div className="mt-20 relative h-[600px] w-full bg-surface_container">
        <img
          alt="Wide shot of a modern, clean industrial tape manufacturing facility with high-precision machinery and warm overhead lighting"
          className="w-full h-full object-cover grayscale"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2fQJjVMiU0rxPvUXcmd-1qSwtXNm3FdIyPlBHFylPlWx4INOW5PiTC08mb1nTdcT9uPgpuc6wDbsdpdAz4tycvA2TtXdoIw3hlhajtM5ynzoKyFnlBBu7XDTMqwO8IBcSQfrPr9-yaSkLX9eseeE58aEQfSGSw-3oJxFMlwnsksSHIpVgaHAZ_1tJFAOX8B-sT-VkuPmG1YeG9MZtZ2_InABE0To6qC2QGufHIKBun66AIS1MSljuhkSncO8N-ZiLH2LhQq_f"
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        <div className="absolute bottom-12 left-12 bg-on_surface text-surface p-8 max-w-sm">
          <p className="font-black text-4xl tracking-tighter uppercase mb-2">
            FACTORY DIRECT
          </p>
          <p className="text-sm tracking-widest uppercase opacity-70">
            HYDERABAD, INDIA
          </p>
        </div>
      </div>
    </section>
  );
}
