import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Products() {
  return (
    <>
      <Navbar />
      <section className="bg-surface-container-low px-8 pt-20 pb-12 border-b border-outline/10">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block mb-4">
              Industrial Grade Standards
            </span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              ALL
              <br />
              PRODUCTS
            </h2>
            <p className="text-on-surface-variant body-lg max-w-md">
              Precision-engineered adhesive solutions for heavy-duty industrial
              packaging and D2C fulfillment logistics.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Filter by Category
              </label>
              <select className="bg-surface border-0 ring-1 ring-outline/20 focus:ring-2 focus:ring-primary-container px-6 py-4 min-w-[240px] font-bold uppercase text-xs">
                <option>All Tapes</option>
                <option>BOPP Packaging</option>
                <option>Reinforced Filament</option>
                <option>Masking Precision</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-surface">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          <div className="group">
            <div className="aspect-[4/5] bg-surface-container-highest relative overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="Close up of a roll of heavy duty brown industrial packing tape against a clean white industrial background with sharp shadows"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0JDzbY2UcBEbKzbN9RvOHKgSgPc_6IYgaBTLrdhUH4uhwvJmMdkHTzIAYtKd8UMnzrY8AuoGvy2S-nvimIg9rHTJzZyxeTdHBOyAgEfAqfkE5xIjgAwaT-UVbJw3zwy-T1NIUqcgnLVjJnIuDMd73j7CwjR1tQ0siMrX9GsvLqk58ryCLf73lOWu_Qk_Wtl_-OC_T9Hvf0S8vdL4rXlG1TJTCZRIkuAitC-crVYzF4zAFACiMM6_Gzjmfw014gYUjOv_QeQOq"
              />
              <div className="absolute top-0 left-0 bg-on-surface text-surface px-4 py-2 font-bold text-[10px] tracking-widest uppercase">
                SKU: ST-BOPP-01
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase tracking-tighter">
                BOPP HEAVY DUTY BROWN
              </h3>
              <div className="flex gap-2">
                <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 text-[10px] font-bold uppercase tracking-tighter">
                  45 MICRONS
                </span>
                <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 text-[10px] font-bold uppercase tracking-tighter">
                  72MM X 65M
                </span>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-2">
                High-tensile strength acrylic adhesive tape designed for
                corrugated box sealing under extreme stress.
              </p>
              <button className="w-full border-2 border-on-surface py-4 text-xs font-black uppercase tracking-widest hover:bg-primary-container hover:border-primary-container transition-colors">
                VIEW SPECIFICATIONS
              </button>
            </div>
          </div>
          <div className="group">
            <div className="aspect-[4/5] bg-surface-container-highest relative overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="Professional grade white masking tape rolls stacked neatly on a gray concrete industrial floor with harsh top lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBabjdCtuaNLqN1SQBX4TXbM0it1o1g3_SYTywSYhp-olC2nS7yEGlF2RtX4r453VLh8FcXt8BR7yxty6bbBcESHeo5w23qHobjkE4-YL5S1umWzfYdaxpdzqq3jdABcIZuAhPy3rR-z0LO3DrQS3TOcQmdmmyDBzjVEAEHsdeabyhDtAiq_VZg1APA6i7qY8tTjFsrxQPu7hZJqVxouEOA8Ivv1tKG9QJTEwRb-BKjzfat7nDgCWYt-naDkxtoXbIhhKusG9ul"
              />
              <div className="absolute top-0 left-0 bg-on-surface text-surface px-4 py-2 font-bold text-[10px] tracking-widest uppercase">
                SKU: ST-MSK-40
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase tracking-tighter">
                PRECISION MASKING TAPE
              </h3>
              <div className="flex gap-2">
                <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 text-[10px] font-bold uppercase tracking-tighter">
                  140 MICRONS
                </span>
                <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 text-[10px] font-bold uppercase tracking-tighter">
                  24MM X 50M
                </span>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-2">
                Heat resistant crepe paper tape providing sharp paint lines and
                zero residue after 24 hours.
              </p>
              <button className="w-full border-2 border-on-surface py-4 text-xs font-black uppercase tracking-widest hover:bg-primary-container hover:border-primary-container transition-colors">
                VIEW SPECIFICATIONS
              </button>
            </div>
          </div>
          <div className="group">
            <div className="aspect-[4/5] bg-surface-container-highest relative overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="Reinforced cross-weave filament tape on a roll highlighting the fiberglass texture with strong backlighting on a dark surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRvBWf7K-jh3aWJgZX2VW-hts-K710ZRZY3SiSba-ifgAIh7xB0BX-hyQ-KAmSBncwkSQ8Xo-8YDtEnVKNW_Qr0A-WBWc2AfcYm5Em6PlLjamOiEA4pVe0ZTkdwfPbpSY_FvQGUxgxTucY1D-1k7upO52KmFlSPoO4lYm4slckkvQILXYqI_Q1Onm4rxIv6a-9NbeIBiRJT7AlKulidWsbKIjYKgQDRytY7rS1x1w3Eoby3uC0jBE_D34s16vFhhF8oBwzJRVc"
              />
              <div className="absolute top-0 left-0 bg-on-surface text-surface px-4 py-2 font-bold text-[10px] tracking-widest uppercase">
                SKU: ST-FIL-RX
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase tracking-tighter">
                REINFORCED FILAMENT
              </h3>
              <div className="flex gap-2">
                <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 text-[10px] font-bold uppercase tracking-tighter">
                  180 MICRONS
                </span>
                <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 text-[10px] font-bold uppercase tracking-tighter">
                  48MM X 50M
                </span>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-2">
                Cross-weave fiberglass reinforcement for heavy palletizing and
                structural bundling applications.
              </p>
              <button className="w-full border-2 border-on-surface py-4 text-xs font-black uppercase tracking-widest hover:bg-primary-container hover:border-primary-container transition-colors">
                VIEW SPECIFICATIONS
              </button>
            </div>
          </div>
          <div className="group">
            <div className="aspect-[4/5] bg-surface-container-highest relative overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="Transparent clear packing tape roll showing high clarity and quality adhesive layer on a technical blueprint background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeGoERLg-jvuoh-i36sUVIQaaJs5OoyovRFAAN2CbIq32zuqiTBNn2F4P-j55nMQ_3ng6eb1fm1iBGLvkXKlBoiy4TLns7j72UXZVuZmGVgV-7qb78fQ2LR0o75N3HwWtC4_IpEEQXuOSo1OiZ4s9RZN1o4TztKzmGSLb2MeXvADSAwB4cKGBY_S4a0xSx1j9YkbxcMSjTB0N89Wk386w5fuwEgt0B5ar4uXz8exDb6RMEYXlcJ1Y18uVEG71JpqhccWCQI1k6"
              />
              <div className="absolute top-0 left-0 bg-on-surface text-surface px-4 py-2 font-bold text-[10px] tracking-widest uppercase">
                SKU: ST-BOPP-CL
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase tracking-tighter">
                BOPP CRYSTAL CLEAR
              </h3>
              <div className="flex gap-2">
                <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 text-[10px] font-bold uppercase tracking-tighter">
                  40 MICRONS
                </span>
                <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 text-[10px] font-bold uppercase tracking-tighter">
                  48MM X 100M
                </span>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-2">
                Ultra-clear adhesive for branding-conscious packaging where
                aesthetics and strength are paramount.
              </p>
              <button className="w-full border-2 border-on-surface py-4 text-xs font-black uppercase tracking-widest hover:bg-primary-container hover:border-primary-container transition-colors">
                VIEW SPECIFICATIONS
              </button>
            </div>
          </div>
          <div className="group">
            <div className="aspect-[4/5] bg-surface-container-highest relative overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="Duct tape roll with silver metallic texture showing the woven cloth fabric in high detail under industrial spotlight"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxC7emMznJbveeQt--cAPF3D-MC9jrJYQt3tFp2fEHOG-bddVvcLepmSakJVZLKfcky7Qz_M6U44TJpGHRrtXu-jdcLh1rNN66gYlZVEXP2CDsa_2QIXFI8sxsX_nPgWGWADqrMlEJ2xcs2ZBzc2WNG4EtRH19cbGeEfVR-4h4iJxVR07Cj0whkw9Shwk_p2U3llxKC_6pfhHqNGbX3FN2U71NAVmD8UNSo6f_bsuLAW7ozc3FvSaTuVV_75ACq1OBIYpMyGIK"
              />
              <div className="absolute top-0 left-0 bg-on-surface text-surface px-4 py-2 font-bold text-[10px] tracking-widest uppercase">
                SKU: ST-DCT-SV
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase tracking-tighter">
                INDUSTRIAL CLOTH DUCT
              </h3>
              <div className="flex gap-2">
                <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 text-[10px] font-bold uppercase tracking-tighter">
                  230 MICRONS
                </span>
                <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 text-[10px] font-bold uppercase tracking-tighter">
                  48MM X 25M
                </span>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-2">
                Waterproof, high-tack silver cloth tape for temporary repairs
                and heavy sealing in construction.
              </p>
              <button className="w-full border-2 border-on-surface py-4 text-xs font-black uppercase tracking-widest hover:bg-primary-container hover:border-primary-container transition-colors">
                VIEW SPECIFICATIONS
              </button>
            </div>
          </div>
          <div className="group">
            <div className="aspect-[4/5] bg-surface-container-highest relative overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                data-alt="Double sided industrial mounting tape showing the protective red liner partially peeled on a dark technical surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFgbvybtupGX_PQ1ckEgguI2y-AXCNyUk9lmM__gAAbmvTkBxhGwWSQ97yY_wwkWdELMqImIlEtvcNgK-1b1cZ9FDubufipPNSLYaYhZTq6Y_ceGfuYO4HIDchxytGdbUGSJMvbliFfGwJKHsTlwERDW3857Civ5rnZa1VwSANgokCj6zuhZFAwV_UTSlB0Z7Y7P3pt1PfzF9Q6kK330GOT1PgJX0l1XynxQaMFqfvUmtz8KJHtKJpeK-Uj6m9JnXMlG8MPX7u"
              />
              <div className="absolute top-0 left-0 bg-on-surface text-surface px-4 py-2 font-bold text-[10px] tracking-widest uppercase">
                SKU: ST-DBL-VHB
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase tracking-tighter">
                HIGH BOND DOUBLE SIDED
              </h3>
              <div className="flex gap-2">
                <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 text-[10px] font-bold uppercase tracking-tighter">
                  1000 MICRONS
                </span>
                <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-1 text-[10px] font-bold uppercase tracking-tighter">
                  12MM X 10M
                </span>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-2">
                Acrylic foam tape with exceptional shear strength for permanent
                mounting and bonding applications.
              </p>
              <button className="w-full border-2 border-on-surface py-4 text-xs font-black uppercase tracking-widest hover:bg-primary-container hover:border-primary-container transition-colors">
                VIEW SPECIFICATIONS
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-container py-32 px-8">
        <div className="max-w-[1920px] mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
            CUSTOM PRODUCTION
            <br />
            AVAILABLE
          </h2>
          <p className="text-on-primary-fixed text-xl max-w-2xl mx-auto mb-12 font-medium">
            Need specific microns or custom branding? We manufacture bespoke
            adhesive solutions for industrial giants.
          </p>
          <button className="bg-on-surface text-surface px-12 py-6 font-black uppercase tracking-widest text-lg hover:scale-105 transition-transform">
            REQUEST BULK QUOTE
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
