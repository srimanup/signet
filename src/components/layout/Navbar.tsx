"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useCartStore } from "@/lib/store/cartStore";
import type { User } from "@supabase/supabase-js";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const { fetchCart, totalItems } = useCartStore();
  const supabase = createClient();
  const router = useRouter();

  // useEffect(() => {
  //   supabase.auth.getUser().then(({ data }) => {
  //     setUser(data.user);
  //     if (data.user) fetchCart();
  //   });

  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setUser(session?.user ?? null);
  //     if (session?.user) fetchCart();
  //   });

  //   return () => subscription.unsubscribe();
  // }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  // const cartCount = totalItems();

  return (
    <nav className="bg-[#fcf9f8] top-0 sticky z-50 w-full border-b border-on_surface/5">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-3xl">
            factory
          </span>
          <span className="font-black uppercase tracking-tighter text-3xl text-on_surface">
            SIGNET TAPES
          </span>
        </Link>

        {/* Nav links — desktop */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            className="font-black uppercase tracking-tighter text-sm text-on_surface/60 hover:text-on_surface transition-colors"
            href="/hero-product"
          >
            CUSTOMIZE
          </Link>
          <Link
            className="font-black uppercase tracking-tighter text-sm text-on_surface/60 hover:text-on_surface transition-colors"
            href="/products"
          >
            PRODUCTS
          </Link>
          <Link
            className="font-black uppercase tracking-tighter text-sm text-on_surface/60 hover:text-on_surface transition-colors"
            href="/contact"
          >
            BULK ORDERS
          </Link>
          <Link
            className="font-black uppercase tracking-tighter text-sm text-on_surface/60 hover:text-on_surface transition-colors"
            href="/about"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="bg-primary_container text-on_primary_fixed font-black uppercase px-6 py-3 tracking-tighter active:scale-95 transition-transform"
          >
            GET QUOTE
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-2">
          {/* Cart */}
          <Link
            href="/cart"
            className="relative w-11 h-11 flex items-center justify-center hover:bg-surface_container transition-colors"
            aria-label="Cart"
          >
            <span className="material-symbols-outlined text-on_surface">
              shopping_cart
            </span>
            {/* {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary_container text-on_primary_fixed text-[9px] font-black flex items-center justify-center leading-none">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )} */}
          </Link>

          {/* Orders — only when logged in */}
          {user && (
            <Link
              href="/orders"
              className="w-11 h-11 flex items-center justify-center hover:bg-surface_container transition-colors"
              aria-label="Order history"
              title="Order history"
            >
              <span className="material-symbols-outlined text-on_surface">
                receipt_long
              </span>
            </Link>
          )}

          {/* Login / Logout */}
          {user ? (
            <button
              onClick={handleLogout}
              className="w-11 h-11 flex items-center justify-center hover:bg-surface_container transition-colors"
              aria-label="Sign out"
              title="Sign out"
            >
              <span className="material-symbols-outlined text-on_surface">
                logout
              </span>
            </button>
          ) : (
            <Link
              href="/login"
              className="w-11 h-11 flex items-center justify-center hover:bg-surface_container transition-colors"
              aria-label="Sign in"
              title="Sign in"
            >
              <span className="material-symbols-outlined text-on_surface">
                account_circle
              </span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
