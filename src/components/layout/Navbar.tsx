export default function Navbar() {
  return (
    <nav className="bg-[#fcf9f8] top-0 sticky z-50 w-full">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-3xl">
            factory
          </span>
          <span className="font-black uppercase tracking-tighter text-3xl text-on_surface dark:text-black">
            SIGNET TAPES
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a
            className="font-black uppercase tracking-tighter text-sm text-on_surface border-b-4 border-primary_container"
            href="#"
          >
            PRODUCTS
          </a>
          <a
            className="font-black uppercase tracking-tighter text-sm text-on_surface/60 hover:text-on_surface transition-colors"
            href="#"
          >
            BULK ORDERS
          </a>
          <a
            className="font-black uppercase tracking-tighter text-sm text-on_surface/60 hover:text-on_surface transition-colors"
            href="#"
          >
            ABOUT
          </a>
          <button className="bg-primary_container text-on_primary_fixed font-black uppercase px-6 py-3 tracking-tighter active:scale-95 transition-transform">
            GET QUOTE
          </button>
        </div>
      </div>
    </nav>
  );
}
