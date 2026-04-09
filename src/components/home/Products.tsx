export default function Products() {
  return (
    <section className="bg-surface py-32 px-8">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            ENGINEERED
            <br />
            FOR STRENGTH
          </h2>
          <p className="max-w-xs text-sm font-bold uppercase tracking-wide text-on_surface/60 border-b-2 border-primary_container pb-4">
            Our tapes are tested for 45+ micron thickness and high tensile
            endurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Custom Printed — Large Feature */}
          <div className="md:col-span-8 group relative bg-surface_container h-[600px] overflow-hidden">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              alt="Professional custom printed packaging tape with a company logo wrapped around a cardboard box in a studio setting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJMkiLY1R6csAVR818mDq0pD1pYOvkmJYE2rSWPZgGpZp-sRIKXrpvayLJLaGcb15LPGXleCbpsete80EzY-c5Z5qPsmF-gosvRcAFe3fJAICmJDdcK9OncUBdO9sr1xxcEgRCb8ukSubPiKsuZv5jS3N5wsAGWBeJAxM5OamcLlO4NdutPTzEOQNbaRrLzIeeEUAnHtkfzfolkxS6p8-KLgjPNmU9N8AkTwOscBSvuS_9bZTo2sScoNxMWq-ClrprT5_WMfig"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-12 flex flex-col justify-end text-white">
              <span className="bg-primary_container text-on_primary_fixed w-fit px-4 py-1 font-black text-xs uppercase mb-4">
                BESTSELLER
              </span>
              <h3 className="text-5xl font-black uppercase mb-4">
                CUSTOM PRINTED
              </h3>
              <p className="max-w-md font-medium text-lg mb-8 opacity-80 uppercase tracking-wide">
                Elevate your unboxing experience. High-definition printing on
                45, 50, or 65 micron tape.
              </p>
              <button className="w-fit border-2 border-white px-8 py-4 font-black uppercase tracking-tighter hover:bg-white hover:text-black transition-colors">
                EXPLORE SPECS
              </button>
            </div>
          </div>

          {/* Crystal Clear */}
          <div className="md:col-span-4 bg-surface_container p-8 flex flex-col justify-between group">
            <div>
              <span className="text-on_surface/20 font-black text-8xl block leading-none">
                02
              </span>
              <h3 className="text-3xl font-black uppercase mt-4 mb-2">
                CRYSTAL CLEAR
              </h3>
              <p className="text-sm font-bold uppercase text-on_surface/60">
                High-adhesion transparent solutions for clean aesthetics.
              </p>
            </div>
            <div className="aspect-square bg-surface overflow-hidden mt-8">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                alt="Transparent packing tape roll on a white background, showing high clarity and industrial quality"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk4iyNvhT3UOtZGNax4qOQvqaetj0R6IkuwP1DdCUtFVxqbEjPaW92vz3WFZF-2qsjMwUE5byRjW_BB4xQHitgoe8z6G2C0yPWCWr-rXHIMyGZovJaKueE3z5gnoAAoj-DaBi4RwKoQJB-l090eMg2ie9Ht08Ov16ojv9Qr_ca5yBDPdfGBFed83evSKvj1tAEsq7v2X_zjdTCIUaPCexfxLOwONwEshhVH4efzcgW2M6AkGlFpTmnejQY4zloxx7by5n7e7QH"
              />
            </div>
          </div>

          {/* Industrial Brown */}
          <div className="md:col-span-4 bg-on_surface text-white p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-black uppercase mb-4 text-primary_container">
                INDUSTRIAL BROWN
              </h3>
              <p className="text-sm font-medium opacity-60 uppercase mb-8">
                The standard for heavy-duty shipping. Unbeatable
                price-to-strength ratio.
              </p>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-xs font-black uppercase tracking-widest">
                    THICKNESS
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest text-primary_container">
                    55 MICRONS
                  </span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-xs font-black uppercase tracking-widest">
                    WIDTH
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest text-primary_container">
                    48 MM / 72 MM
                  </span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-xs font-black uppercase tracking-widest">
                    CORE
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest text-primary_container">
                    REINFORCED
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bulk Savings */}
          <div className="md:col-span-8 bg-primary_container p-12 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="text-4xl font-black uppercase text-on_primary_fixed mb-4">
                BULK SAVINGS
              </h3>
              <p className="text-on_primary_fixed/80 font-bold uppercase tracking-tight">
                Orders over 100 boxes qualify for corporate pricing and
                dedicated logistics support.
              </p>
            </div>
            <button className="bg-on_surface text-white px-10 py-5 font-black uppercase text-xl shrink-0">
              VIEW WHOLESALE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
