import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Order, OrderItemWithProduct } from "@/lib/types";

const STATUS_STYLES: Record<string, string> = {
  pending: "bg-surface_container text-on_surface_variant",
  paid: "bg-primary_container text-on_primary_fixed",
  processing: "bg-primary_container text-on_primary_fixed",
  shipped: "bg-on_surface text-primary_container",
  delivered: "bg-on_surface text-surface",
  cancelled: "bg-error text-white",
};

export default async function OrdersPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: orders } = await supabase
    .from("orders")
    .select("*, order_items(*, product:products(name, sku, image_url))")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="bg-surface text-on_surface font-sans">
      <Navbar />
      <main className="max-w-[1920px] mx-auto px-8 py-20 min-h-screen">
        {/* Header */}
        <div className="mb-16 border-b-2 border-on_surface/10 pb-8">
          <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase block mb-4">
            Your Account
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            ORDER HISTORY
          </h1>
        </div>

        {/* Empty state */}
        {(!orders || orders.length === 0) && (
          <div className="text-center py-40">
            <span className="material-symbols-outlined text-8xl text-on_surface/10 block mb-8">
              inventory_2
            </span>
            <p className="font-black uppercase text-2xl text-on_surface/30 tracking-tighter">
              No orders yet
            </p>
            <a
              href="/product"
              className="inline-block mt-8 bg-primary_container text-on_primary_fixed px-8 py-4 font-black uppercase tracking-widest hover:brightness-110 transition-all"
            >
              START ORDERING
            </a>
          </div>
        )}

        {/* Orders list */}
        <div className="space-y-4">
          {orders?.map(
            (order: Order & { order_items: OrderItemWithProduct[] }) => (
              <div
                key={order.id}
                className="bg-surface_container_low border-l-4 border-on_surface/10"
              >
                {/* Order header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between px-8 py-6 gap-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-on_surface_variant mb-1">
                        Order ID
                      </p>
                      <p className="font-black text-sm uppercase tracking-tight">
                        {order.id.slice(0, 8).toUpperCase()}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-on_surface_variant mb-1">
                        Date
                      </p>
                      <p className="font-bold text-sm">
                        {new Date(order.created_at).toLocaleDateString(
                          "en-IN",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-on_surface_variant mb-1">
                        Amount
                      </p>
                      <p className="font-black text-sm">
                        ₹{(order.amount / 100).toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest w-fit ${
                      STATUS_STYLES[order.status] ?? STATUS_STYLES.pending
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                {/* Order items */}
                <div className="border-t border-on_surface/10 divide-y divide-on_surface/5">
                  {order.order_items?.map((item: OrderItemWithProduct) => (
                    <div
                      key={item.id}
                      className="px-8 py-4 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-surface_container flex-shrink-0">
                          {item.product?.image_url && (
                            <img
                              src={item.product.image_url}
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div>
                          <p className="font-black uppercase text-sm tracking-tight">
                            {item.product?.name ?? "Product"}
                          </p>
                          <p className="text-[10px] font-bold text-on_surface_variant uppercase tracking-widest">
                            SKU: {item.product?.sku} • QTY: {item.quantity}
                          </p>
                          {item.config && (
                            <p className="text-[10px] text-on_surface_variant/60 uppercase">
                              {Object.entries(item.config)
                                .map(([k, v]) => `${k}: ${v}`)
                                .join(" • ")}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="font-black text-sm shrink-0">
                        ₹
                        {((item.price * item.quantity) / 100).toLocaleString(
                          "en-IN",
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
