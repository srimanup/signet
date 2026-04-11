export default function ProductGallery() {
  const thumbnails = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMBHj7u99nHsmaXJmq2HnExx88l-8Lv-AZcXVVujewX0w6tPUxuNRdm04_tIZvQqHvJ9LU7KuOQe2pHSDZvVcTddi3JOsjoWHjkFIt2K17rCl8wtMcmimfkfiOIRUKPcy_zAHb_Stnv_5ANjJE3NhlMuYZb55teWVGtVb3ICfoxEJqVisb7jVj7fNN06kF0C-nTePwTuh2Rw4Us8sJFzECBDCg_fEMpujqQT9gjDwP6Md3j8-0LfTIiVbNG6KtOOBkqlEtC4aJ",
      alt: "close up of industrial tape manufacturing machinery showing rollers and adhesive material",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuju_5OwDdHgNfH1ct40UChEkjn8M4XtkhcgDL9cFlXiKnW_P6RtSNNZuAVRp_FXu2CYx5nn8uFhzE_tWuWOsCVm7onv0ly8TqjoX0hBaiQrls0mqLZnW3YgaPOvASADMPuvAe7vVXXATL40rX9W4vhoFIuDXrdz06-dBi1s9ofwVBNixPqpjJ_FIOoebBOYc9fUzwESnZCFqpQCb4Sf6XBkmIneMlK6Npx0VAvQ-uGFNuS9hsjQGs0E_bEb1u9_h8WPcCFYw5",
      alt: "stack of industrial brown cardboard boxes sealed with branded custom printed packing tape",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCinFIQY7O-TUZZTPSl8ZPb_hAVL9NCquugxvK4JDF6wemfQ-c8cCpW9jNl22TLz4bpb1Fo0FkIXh4dGlw5pBNDYi4hRUYuOPsdmDvXfcNWbnAwxJ_cFj66XF4LpdHO5hYnWnPMT8Wb4w619ZZPSI1GFs2sRo8z94tXVRIrJ85d-C5RxSqhFnEBARdZC9IN4GuWsk9manllRwYXWgKO4JKUcRsc1SvTIJijuG0sneLl4s9Iv7vPhakkuQX_1fIoAuM_3b1y61DH",
      alt: "precise technical measurement of industrial tape roll width with high precision calipers",
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Main Image */}
      <div className="bg-surface_container w-full aspect-[4/3] flex items-center justify-center p-12">
        <img
          className="w-full h-full object-cover shadow-2xl"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2UlyAOsuUHIMP900XuuLAEgPD56nxYnS6NtgtlnKClYtmOiNIxPsxIO1J1nM0jss_R4fFyeoBZn70pigBGiTPvaCk-9nwyugYLFp5NGcvIqE42G7hFSMjjG4C1PaSKyY2k_-tOD7nRLn5J27VGp21etHfPthQukLtmWX55cDwo3nnl-G_dD9GVB4lMWiFtSv83tSYUPC-izb89DRJF4vjXTKV99Zjl7RHr9VtbWon7kdd4xVmitrp_WqeNbOl11eRjd-QMDcG"
          alt="industrial close-up of a roll of custom printed branding adhesive tape with yellow and black typography on white surface"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-4">
        {thumbnails.map((img) => (
          <div
            key={img.alt}
            className="bg-surface_container_low aspect-square p-4"
          >
            <img
              className="w-full h-full object-cover"
              src={img.src}
              alt={img.alt}
            />
          </div>
        ))}
      </div>

      {/* Technical Narrative */}
      <div className="space-y-6">
        <h2 className="text-4xl font-black uppercase tracking-tight">
          ENGINEERED INTEGRITY
        </h2>
        <p className="text-on_surface_variant max-w-xl leading-relaxed">
          Our Custom Printed BOPP (Biaxially Oriented Polypropylene) Tapes
          provide high-tack adhesive performance combined with precision-sharp
          flexographic printing. Essential for D2C brands prioritizing security
          and brand identity at every touchpoint.
        </p>
        <div className="grid grid-cols-2 gap-8 border-t border-outline pt-8">
          <div>
            <span className="block text-[10px] font-bold tracking-widest text-on_surface_variant uppercase mb-2">
              MATERIAL SPEC
            </span>
            <span className="text-lg font-bold">45 MICRON BOPP FILM</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold tracking-widest text-on_surface_variant uppercase mb-2">
              ADHESIVE SYSTEM
            </span>
            <span className="text-lg font-bold">
              HOT-MELT PRESSURE SENSITIVE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
