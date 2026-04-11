import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative min-h-[921px] flex items-center overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="w-full md:w-2/3 h-full grayscale hover:grayscale-0 transition-all duration-700 opacity-20 md:opacity-100">
          <img
            className="w-full h-full object-cover"
            alt="Close-up of industrial adhesive tape rolls being stacked in a modern bright warehouse with sharp focus on texture"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5rJh5jVKoxVxzlG5GBee5u0hv2gua3mkgv_FZkQU3MN1L0csOgUUulPbVmbovaQq5i1BHg17tN52bl0w1QX_9T2Lwu3RktK29vu-PJIxphwfN6KYgHKnzRtFFrSbEVBz2r0280ps9u-4UwvT0ZH6lmjOz6_KWQPy7pPbGxX7zN7njoo813RPdWJCLgZM3pY1fefbNkB0yuGq4VxStruHzCLRxwJ2id0cmAwZgSkceoH3jJkGwxJTzrclbWU4hfH5CagXoAHdp"
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-8 py-20">
        <div className="max-w-4xl">
          <div className="inline-block bg-on_surface text-primary_container px-4 py-2 mb-8 font-black uppercase tracking-[0.2em] text-xs">
            ESTD 1994 • INDUSTRIAL GRADE
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter mb-8 text-on_surface">
            GET YOUR BRAND ON{" "}
            <span className="text-primary_container block md:inline">
              EVERY BOX
            </span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-12">
            <div className="max-w-md">
              <p className="text-xl md:text-2xl font-bold uppercase mb-8 border-l-8 border-primary_container pl-6 leading-tight">
                Custom printed tapes starting from just 1 box. Professional
                grade adhesion for India&apos;s top D2C brands.
              </p>
              <Link
                href="/hero-product"
                className="bg-primary_container text-on_primary_fixed font-black text-2xl uppercase px-12 py-6 hover:bg-on_surface hover:text-primary_container transition-all group flex items-center gap-4"
              >
                START CUSTOMIZING
                <span className="material-symbols-outlined font-black">
                  arrow_forward
                </span>
              </Link>
            </div>

            <div className="flex-1 border-t border-on_surface/10 pt-4">
              <span className="font-black text-7xl opacity-10 block mb-2">
                #01
              </span>
              <span className="text-xs font-black tracking-widest uppercase text-on_surface/40">
                Market leader in custom adhesive solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
