"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/cartStore";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const openCart = useCartStore((state) => state.openCart);

  const items = useCartStore((state) => state.items);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A] border-b border-[#1f1f1f]">
      <div className="container flex items-center justify-between py-4">

        {/* LOGO */}
        <div className="text-xl md:text-2xl font-bold">
          The Pizza Shop
        </div>

        {/* DESKTOP NAV */}
       <nav className="hidden md:flex items-center gap-8 text-[#A1A1AA]">

  <Link
    href={pathname === "/" ? "#home" : "/#home"}
    className="hover:text-white transition"
  >
    Home
  </Link>

  <Link
    href="/menu"
    className="hover:text-white transition"
  >
    Menu
  </Link>

  <Link
    href={pathname === "/" ? "#contact" : "/#contact"}
    className="hover:text-white transition"
  >
    Contact
  </Link>

</nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* WHATSAPP */}
          <a
            href="https://wa.me/923018408177"
            target="_blank"
            className="hidden md:flex btn btn-primary"
          >
            <FaWhatsapp />
            <span className="ml-2">
              Order
            </span>
          </a>

          {/* CART */}
          <button
            onClick={openCart}
            className="relative text-xl cursor-pointer"
          >
            <FaShoppingCart />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* MOBILE MENU */}
          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="md:hidden text-xl"
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#1f1f1f] bg-[#111111]">
          <div className="container py-4 flex flex-col gap-4">
          <Link
  href={pathname === "/" ? "#home" : "/#home"}
  onClick={() => setMenuOpen(false)}
>
  Home
</Link>

<Link
  href="/menu"
  onClick={() => setMenuOpen(false)}
>
  Menu
</Link>

<Link
  href={pathname === "/" ? "#contact" : "/#contact"}
  onClick={() => setMenuOpen(false)}
>
  Contact
</Link>

            <a
              href="https://wa.me/923018408177"
              target="_blank"
              className="btn btn-primary w-full"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}