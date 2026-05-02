"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/lib/store/cartStore";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Script from "next/script";

import { RazorpayOptions, RazorpayResponse } from "@/lib/types";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => { open: () => void };
  }
}

export default function CheckoutPage() {
  const { items, fetchCart, totalAmount } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      // Create order on our backend
      const res = await fetch("/api/orders/create", { method: "POST" });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error ?? "Failed to create order");

      // Launch Razorpay checkout
      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "SIGNET TAPES",
        description: "Industrial Adhesive Tape Order",
        order_id: data.razorpayOrderId,
        handler: async (response: RazorpayResponse) => {
          // Verify payment on our backend
          const verifyRes = await fetch("/api/orders/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              order_id: data.orderId,
            }),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            router.push(`/orders?success=true`);
          } else {
            setError("Payment verification failed. Please contact support.");
          }
        },
        prefill: {},
        theme: { color: "#FFD400" },
        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
      setLoading(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="bg-surface text-on_surface font-sans min-h-screen">
        <Navbar />
        <main className="max-w-[1920px] mx-auto px-8 py-20">
          <div className="mb-16 border-b-2 border-on_surface/10 pb-8">
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase block mb-4">
              Final Step
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              CHECKOUT
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Order summary */}
            <div className="lg:col-span-7 space-y-2">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-outline mb-6">
                Confirming Items
              </h2>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-surface_container_low px-6 py-4 gap-4"
                >
                  <div>
                    <p className="font-black uppercase tracking-tight">
                      {item.product?.name}
                    </p>
                    <p className="text-[10px] font-bold text-on_surface_variant uppercase tracking-widest">
                      QTY: {item.quantity}
                      {item.config &&
                        " • " +
                          Object.entries(item.config)
                            .map(([k, v]) => `${k}: ${v}`)
                            .join(" • ")}
                    </p>
                  </div>
                  <p className="font-black shrink-0">
                    ₹
                    {(
                      ((item.product?.price ?? 0) * item.quantity) /
                      100
                    ).toLocaleString("en-IN")}
                  </p>
                </div>
              ))}
            </div>

            {/* Payment panel */}
            <div className="lg:col-span-5">
              <div className="bg-on_surface text-surface p-10 sticky top-32">
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-8">
                  Payment
                </h2>

                <div className="flex justify-between items-end mb-10 border-b border-surface/10 pb-8">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-surface/60 uppercase mb-1">
                      Total Amount
                    </p>
                    <p className="text-4xl font-black">
                      ₹{(totalAmount() / 100).toLocaleString("en-IN")}
                    </p>
                  </div>
                  <p className="text-[10px] font-bold text-surface/40 uppercase tracking-widest">
                    Incl. GST
                  </p>
                </div>

                {error && (
                  <div className="bg-error/20 border-l-4 border-error px-4 py-3 mb-6">
                    <p className="text-[11px] font-bold uppercase text-error">
                      {error}
                    </p>
                  </div>
                )}

                <button
                  onClick={handlePayment}
                  disabled={loading || items.length === 0}
                  className="w-full bg-primary_container text-on_primary_fixed py-5 font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">
                        progress_activity
                      </span>
                      PROCESSING...
                    </>
                  ) : (
                    <>
                      PAY WITH RAZORPAY
                      <span className="material-symbols-outlined">lock</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 mt-6 text-[10px] font-bold tracking-widest opacity-40 uppercase">
                  <span className="material-symbols-outlined text-sm">
                    verified_user
                  </span>
                  Secured by Razorpay
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
