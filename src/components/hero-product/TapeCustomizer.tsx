"use client";

import { useRef, useState } from "react";

const TAPE_COLORS = ["#ffffff", "#fdf2e9", "#c8c6c5"];
const PRINT_COLORS = ["#000000", "#715d00", "#ba1a1a"];

// Default SVG pattern as a data URL (geometric diagonal pattern)
const DEFAULT_PATTERN =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yMCAyMEwxMCAzMEwwIDIwbDEwLTEwIDIwIDEwek0zMCAxMEwyMCAyMEwxMCAxMGwxMC0xMCAxMCAxMHpNMzAgMzBMMjAgNDBMMTAgMzBsMTAtMTAgMjAgMTB6Ii8+PC9nPjwvc3ZnPg==";

export default function TapeCustomizer() {
  const [tapeColor, setTapeColor] = useState("#ffffff");
  const [spacing, setSpacing] = useState(120);
  const [patternSrc, setPatternSrc] = useState(DEFAULT_PATTERN);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setPatternSrc(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="bg-surface_container_low p-8 border border-outline">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-black uppercase tracking-tighter">
          Live Preview Customizer
        </h3>
        <span className="text-[10px] font-bold tracking-widest text-on_surface_variant uppercase">
          Interactive Proofing v1.0
        </span>
      </div>

      {/* Tape Preview Canvas */}
      <div className="relative w-full overflow-hidden bg-surface_container h-48 flex items-center justify-center border-y border-outline mb-10">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div
          className="w-full h-24 relative shadow-lg overflow-hidden flex items-center"
          style={{
            backgroundColor: tapeColor,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <div
            className="absolute inset-0 w-[200%] h-full"
            style={{
              backgroundImage: `url('${patternSrc}')`,
              backgroundSize: `${spacing}px auto`,
              backgroundRepeat: "repeat-x",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-1 bg-black/5" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-black/10" />
        </div>
        <div className="absolute top-4 left-4 bg-on_surface text-surface px-2 py-1 text-[10px] font-bold">
          48MM SIMULATION
        </div>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left controls */}
        <div className="space-y-6">
          {/* Upload */}
          <div>
            <label className="block text-[10px] font-black tracking-widest uppercase mb-3">
              Upload Branding Asset
            </label>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-outline bg-surface_container_lowest hover:border-primary cursor-pointer transition-all">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <span className="material-symbols-outlined text-on_surface_variant mb-2">
                  add_photo_alternate
                </span>
                <p className="text-[10px] font-bold uppercase tracking-tight">
                  Select Logo (SVG/PNG)
                </p>
              </div>
              <input
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                type="file"
                onChange={handleLogoUpload}
              />
            </label>
          </div>

          {/* Color pickers */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-black tracking-widest uppercase mb-3">
                Tape Color
              </label>
              <div className="flex gap-2 items-center">
                {TAPE_COLORS.map((c) => (
                  <button
                    key={c}
                    className={`w-8 h-8 border border-outline ${tapeColor === c ? "ring-2 ring-primary ring-offset-2" : ""}`}
                    style={{ backgroundColor: c }}
                    onClick={() => setTapeColor(c)}
                  />
                ))}
                <input
                  type="color"
                  className="w-8 h-8 p-0 border-0 bg-transparent cursor-pointer"
                  value={tapeColor}
                  onChange={(e) => setTapeColor(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black tracking-widest uppercase mb-3">
                Print Color
              </label>
              <div className="flex gap-2 items-center">
                {PRINT_COLORS.map((c) => (
                  <button
                    key={c}
                    className="w-8 h-8 border border-outline"
                    style={{ backgroundColor: c }}
                  />
                ))}
                <input
                  type="color"
                  className="w-8 h-8 p-0 border-0 bg-transparent cursor-pointer"
                  defaultValue="#000000"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right controls */}
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-3">
              <label className="text-[10px] font-black tracking-widest uppercase">
                Repeat Spacing
              </label>
              <span className="text-[10px] font-bold">{spacing}px</span>
            </div>
            <input
              type="range"
              min={40}
              max={400}
              value={spacing}
              onChange={(e) => setSpacing(Number(e.target.value))}
              className="w-full h-1 bg-outline cursor-pointer appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
            />
          </div>

          <div className="bg-primary_container/10 p-4 border-l-4 border-primary_container">
            <p className="text-[10px] font-bold leading-tight uppercase opacity-80 italic">
              Note: Live preview is for visual reference. Final alignment and
              sizing will be refined by our design team post-order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
