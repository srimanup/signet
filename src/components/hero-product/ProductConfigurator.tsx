"use client";

import { useState } from "react";

const WIDTHS = ["38MM", "48MM", "72MM"];
const LENGTHS = ["65 METERS", "100 METERS"];

export default function ProductConfigurator() {
  const [selectedWidth, setSelectedWidth] = useState("38MM");
  const [selectedLength, setSelectedLength] = useState("65 METERS");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="lg:col-span-5 flex flex-col gap-12 sticky top-32">
      {/* Product Title */}
      <div>
        <span className="bg-primary_container text-on_primary_fixed px-3 py-1 text-[10px] font-black tracking-widest uppercase mb-4 inline-block">
          SKU: CP-BOPP-2024
        </span>
        <h1 className="text-5xl font-black uppercase tracking-tighter leading-none mb-4">
          Custom Printed BOPP Tape
        </h1>
        <p className="text-on_surface_variant font-medium">
          Bespoke branding. Maximum security. Industrial grade.
        </p>
      </div>

      <div className="space-y-10">
        {/* Selectors */}
        <div className="space-y-6">
          {/* Width */}
          <div>
            <label className="block text-[10px] font-black tracking-[0.1em] text-on_surface uppercase mb-4">
              Roll Width (mm)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {WIDTHS.map((w) => (
                <button
                  key={w}
                  onClick={() => setSelectedWidth(w)}
                  className={`border-2 py-4 font-bold text-sm transition-colors ${
                    selectedWidth === w
                      ? "border-primary_container bg-primary_container text-on_primary_fixed"
                      : "border-outline hover:border-on_surface"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* Length */}
          <div>
            <label className="block text-[10px] font-black tracking-[0.1em] text-on_surface uppercase mb-4">
              Roll Length (m)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {LENGTHS.map((l) => (
                <button
                  key={l}
                  onClick={() => setSelectedLength(l)}
                  className={`border-2 py-4 font-bold text-sm transition-colors ${
                    selectedLength === l
                      ? "border-primary_container bg-primary_container text-on_primary_fixed"
                      : "border-outline hover:border-on_surface"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-[10px] font-black tracking-[0.1em] text-on_surface uppercase mb-4">
              Quantity (Boxes)
            </label>
            <div className="flex items-center gap-4 bg-surface_container_low p-2 w-fit">
              <button
                className="w-10 h-10 flex items-center justify-center hover:bg-surface_container"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <span className="material-symbols-outlined">remove</span>
              </button>
              <input
                type="number"
                value={quantity}
                min={1}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value)))
                }
                className="bg-transparent border-none w-12 text-center font-black text-xl focus:ring-0 focus:outline-none"
              />
              <button
                className="w-10 h-10 flex items-center justify-center hover:bg-surface_container"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Panel */}
        <div className="bg-on_surface text-surface p-8 space-y-6 shadow-2xl">
          <div className="flex justify-between items-end">
            <div>
              <span className="block text-[10px] font-black tracking-widest text-surface/60 uppercase mb-1">
                ESTIMATED TOTAL
              </span>
              <span className="text-4xl font-black tracking-tighter">
                ₹14,250.00
              </span>
            </div>
            <div className="text-right">
              <span className="block text-[10px] font-black tracking-widest text-surface/60 uppercase mb-1">
                DELIVERY
              </span>
              <span className="text-sm font-bold text-primary_container">
                7-10 BUSINESS DAYS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <button className="w-full bg-primary_container text-on_primary_fixed py-5 font-black uppercase tracking-widest flex items-center justify-center gap-3 active:scale-95 transition-transform">
              PROCEED TO CHECKOUT
            </button>
            <button className="w-full border-2 border-surface/20 text-surface py-5 font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-surface/10 transition-colors">
              <span className="material-symbols-outlined">request_quote</span>
              GET BULK QUOTE
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[10px] font-bold tracking-widest opacity-60">
            <span className="material-symbols-outlined text-sm">
              verified_user
            </span>
            TAX INVOICE INCLUDED
          </div>
        </div>
      </div>
    </div>
  );
}
