"use client";

import { useEffect } from "react";
import { useCartStore } from "@/lib/store/cartStore";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const {
    items,
    loading,
    fetchCart,
    updateQuantity,
    removeItem,
    totalAmount,
    totalItems,
  } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    fetchCart();
  }, []);

  const handleCheckout = () => {
    router.push("/checkout");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <span className="material-symbols-outlined text-4xl animate-spin text-primary">
          progress_activity
        </span>
      </div>
    );
  }

  return (
    <div className="bg-surface text-on_surface font-sans">
      <Navbar />
      <main className="max-w-[1920px] mx-auto px-8 py-20 min-h-screen">
        {/* Header */}
        <div className="mb-16 border-b-2 border-on_surface/10 pb-8 flex items-end justify-between">
          <div>
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase block mb-4">
              Your Selection
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              CART
            </h1>
          </div>
          <span className="font-black text-7xl opacity-10">{totalItems()}</span>
        </div>

        {/* Empty state */}
        {items.length === 0 && (
          <div className="text-center py-40">
            <span className="material-symbols-outlined text-8xl text-on_surface/10 block mb-8">
              shopping_cart
            </span>
            <p className="font-black uppercase text-2xl text-on_surface/30 tracking-tighter mb-8">
              Your cart is empty
            </p>
            <Link
              href="/product"
              className="inline-block bg-primary_container text-on_primary_fixed px-8 py-4 font-black uppercase tracking-widest hover:brightness-110 transition-all"
            >
              BROWSE PRODUCTS
            </Link>
          </div>
        )}

        {items.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Items */}
            <div className="lg:col-span-8 space-y-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-surface_container_low flex flex-col md:flex-row md:items-center gap-6 p-6"
                >
                  {/* Image */}
                  <div className="w-24 h-24 bg-surface_container flex-shrink-0">
                    {item.product?.image_url && (
                      <img
                        src={item.product.image_url}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <p className="font-black uppercase tracking-tight text-lg">
                      {item.product?.name}
                    </p>
                    <p className="text-[10px] font-bold text-on_surface_variant uppercase tracking-widest mt-1">
                      SKU: {item.product?.sku}
                    </p>
                    {item.config && (
                      <p className="text-xs text-on_surface_variant/70 uppercase mt-1">
                        {Object.entries(item.config)
                          .map(([k, v]) => `${k}: ${v}`)
                          .join(" • ")}
                      </p>
                    )}
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3 bg-surface p-1">
                    <button
                      className="w-9 h-9 flex items-center justify-center hover:bg-surface_container transition-colors"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <span className="material-symbols-outlined text-sm">
                        remove
                      </span>
                    </button>
                    <span className="font-black w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      className="w-9 h-9 flex items-center justify-center hover:bg-surface_container transition-colors"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>

                  {/* Price */}
                  <div className="text-right min-w-[100px]">
                    <p className="font-black text-lg">
                      ₹
                      {(
                        ((item.product?.price ?? 0) * item.quantity) /
                        100
                      ).toLocaleString("en-IN")}
                    </p>
                    <p className="text-[10px] text-on_surface_variant uppercase">
                      ₹
                      {((item.product?.price ?? 0) / 100).toLocaleString(
                        "en-IN",
                      )}{" "}
                      each
                    </p>
                  </div>

                  {/* Remove */}
                  <button
                    className="text-on_surface/30 hover:text-error transition-colors"
                    onClick={() => removeItem(item.id)}
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-4">
              <div className="bg-on_surface text-surface p-8 sticky top-32">
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 border-b border-surface/10 pb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="font-bold uppercase text-surface/60">
                      Subtotal ({totalItems()} items)
                    </span>
                    <span className="font-black">
                      ₹{(totalAmount() / 100).toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-bold uppercase text-surface/60">
                      Shipping
                    </span>
                    <span className="font-black text-primary_container">
                      TBD
                    </span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-surface/10 pt-4">
                    <span className="font-black uppercase">Total</span>
                    <span className="font-black text-xl">
                      ₹{(totalAmount() / 100).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-primary_container text-on_primary_fixed py-5 font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:brightness-110 active:scale-95 transition-all"
                >
                  PROCEED TO CHECKOUT
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>

                <p className="text-[10px] text-surface/30 text-center mt-4 uppercase tracking-widest">
                  GST invoice included
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
