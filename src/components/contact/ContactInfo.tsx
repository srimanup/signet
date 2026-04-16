export default function ContactInfo() {
  return (
    <div className="lg:col-span-5 space-y-20">
      {/* Factory Address */}
      <div>
        <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-outline mb-8">
          Factory Headquarters
        </h3>
        <div className="space-y-4">
          <p className="text-3xl font-bold tracking-tight text-on_surface leading-tight">
            Plot No. 42, Industrial Area Phase II, <br />
            Okhla, New Delhi, <br />
            India - 110020
          </p>
          <div className="pt-6">
            <a
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline underline-offset-8"
              href="#"
            >
              <span className="material-symbols-outlined">map</span>
              VIEW ON MAP
            </a>
          </div>
        </div>
      </div>

      {/* Direct Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-outline mb-4">
            Sales Inquiries
          </h4>
          <p className="text-xl font-bold text-on_surface">
            sales@signettapes.com
          </p>
          <p className="text-xl font-medium text-on_surface_variant">
            +91 98110 XXXXX
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-outline mb-4">
            Support
          </h4>
          <p className="text-xl font-bold text-on_surface">
            support@signettapes.com
          </p>
          <p className="text-xl font-medium text-on_surface_variant">
            1800-TAPES-IND
          </p>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="bg-surface_container p-10 border-t-8 border-primary_container">
        <h4 className="text-xl font-black uppercase tracking-tighter mb-4 text-on_surface">
          Immediate Assistance?
        </h4>
        <p className="text-on_surface_variant mb-8">
          Connect directly with our floor manager for technical specifications
          and lead times.
        </p>
        <a
          className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-5 px-8 font-black uppercase tracking-widest text-sm hover:brightness-110 transition-all"
          href="#"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            chat
          </span>
          WHATSAPP SUPPORT
        </a>
      </div>

      {/* Industrial Image */}
      <div className="aspect-video bg-surface_container overflow-hidden">
        <img
          alt="Close-up of a high-speed industrial tape manufacturing machine with metallic rollers and yellow caution tape in a clean factory"
          className="w-full h-full object-cover grayscale contrast-125"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZh7Chlr2IqM46pBxaIhUhmMKuUERPWnWFBM9rykqD4MuoNTOf83F50VTPiiVHPCE01ZV6zuHpb4ZmRACpH7tCrRDQJES33XnWgR7n8UcFy6at0BYVkNsPqLbOAgDAUTiFSr6MM4atJUiW-a8vhKhm8tXAn0v-vQzv8GNJLqzNXst3k6ywRelTNDJqim4u_iSAdCfnmtw37KzZ2ao0FBoTkOEDHfmspMftZh57YusLZC9a7Oemli3msChdL558xXnmbja_nH0l"
        />
      </div>
    </div>
  );
}
