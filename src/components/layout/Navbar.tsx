"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `font-black uppercase tracking-tighter text-sm transition-colors ${
      pathname === path
        ? "text-on_surface border-b-4 border-primary_container"
        : "text-on_surface/60 hover:text-on_surface"
    }`;

  return (
    <nav className="bg-[#fcf9f8] top-0 sticky z-50 w-full">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-3xl">
            factory
          </span>
          <Link
            href="/"
            className="font-black uppercase tracking-tighter text-3xl text-on_surface dark:text-black"
          >
            SIGNET TAPES
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <Link className={linkClass("/products")} href="/products">
            PRODUCTS
          </Link>

          <Link className={linkClass("/hero-product")} href="/hero-product">
            CUSTOMIZE
          </Link>

          <Link className={linkClass("/about")} href="/about">
            ABOUT
          </Link>

          <Link
            className="bg-primary_container text-on_primary_fixed font-black uppercase px-6 py-3 tracking-tighter active:scale-95 transition-transform"
            href="/contact"
          >
            GET QUOTE
          </Link>
        </div>
      </div>
    </nav>
  );
}
