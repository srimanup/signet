export default function Footer() {
  return (
    <footer className="bg-on_surface text-primary_container w-full pt-40 pb-20 px-8">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-6">
            <h2 className="text-7xl md:text-9xl font-black uppercase leading-[0.8] tracking-tighter text-white mb-8">
              SIGNET
              <br />
              TAPES
            </h2>
            <p className="text-white/60 font-bold uppercase max-w-md">
              Industrial-grade adhesive solutions for the next generation of
              Indian e-commerce. Precision-engineered since 1994.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4">
                RESOURCES
              </h4>
              {["PRODUCTS", "BULK ORDERS", "ABOUT"].map((link) => (
                <a
                  key={link}
                  className="font-sans font-medium uppercase tracking-[0.05em] text-[12px] text-white/60 hover:text-primary_container underline underline-offset-4 transition-all"
                  href="#"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4">
                SUPPORT
              </h4>
              {["CONTACT", "WHATSAPP SUPPORT", "FAQ"].map((link) => (
                <a
                  key={link}
                  className="font-sans font-medium uppercase tracking-[0.05em] text-[12px] text-white/60 hover:text-primary_container underline underline-offset-4 transition-all"
                  href="#"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4">
                SOCIAL
              </h4>
              {["INSTAGRAM", "LINKEDIN"].map((link) => (
                <a
                  key={link}
                  className="font-sans font-medium uppercase tracking-[0.05em] text-[12px] text-white/60 hover:text-primary_container underline underline-offset-4 transition-all"
                  href="#"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end w-full gap-12 border-t border-white/10 pt-12">
          <div className="font-sans font-medium uppercase tracking-[0.05em] text-[12px] text-white/60 max-w-xs">
            © 2024 SIGNET TAPES INDUSTRIAL. GST INVOICE AVAILABLE. MADE IN
            INDIA.
          </div>
          <div className="flex gap-8">
            {["verified", "local_shipping", "payments"].map((icon) => (
              <span key={icon} className="material-symbols-outlined text-4xl">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
