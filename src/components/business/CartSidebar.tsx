"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { FaTimes, FaTrash, FaWhatsapp } from "react-icons/fa";
import { Plus, Minus, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function CartSidebar() {
  const {
    isOpen,
    closeCart,
    items,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
  } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const FREE_DELIVERY_THRESHOLD = 1500;
  const remainingForFree = FREE_DELIVERY_THRESHOLD - total;
  const progressPercent = Math.min((total / FREE_DELIVERY_THRESHOLD) * 100, 100);

  // =========================
  // IMPROVED WHATSAPP MESSAGE (KEY UPGRADE)
  // =========================
  const whatsappMessage = `🍕 *NEW ORDER*

Hello The Pizza Shop!

I'd like to place the following order:

${items
  .map(
    (item) =>
`• ${item.name}
  Qty: ${item.quantity}
  Total: Rs ${item.price * item.quantity}`
  )
  .join("\n\n")}

━━━━━━━━━━━━━━

💰 Order Total:
Rs ${total}

🚚 Delivery:
${total >= FREE_DELIVERY_THRESHOLD ? "FREE Delivery 🎉" : "Standard Delivery"}

━━━━━━━━━━━━━━

👤 Name:

📞 Phone Number:

📍 Delivery Address:

💳 Payment Method:
Cash / Online

📝 Special Instructions:

━━━━━━━━━━━━━━

Please confirm my order and share the estimated delivery time.

Thank you! 🍕`;

  const whatsappUrl = `https://wa.me/923018408177?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      {/* BACKDROP */}
      {isOpen && (
        <div
          onClick={closeCart}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#0A0A0A] border-l border-white/5 shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-5 border-b border-white/5 bg-[#111]">
          <h2 className="text-xl font-['Anton'] text-white">YOUR CART</h2>
          <button
            onClick={closeCart}
            className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center"
          >
            <FaTimes className="text-white/70" />
          </button>
        </div>

        {/* ITEMS */}
        <div className="p-4 space-y-3 overflow-y-auto h-[calc(100vh-320px)]">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-14 h-14 text-white/10 mb-3" />
              <p className="text-white/60 font-semibold">Cart is empty</p>
              <p className="text-xs text-white/30 mt-1">
                Add items from menu to start ordering
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="bg-[#1a1a1a]/60 border border-white/5 p-3 rounded-xl flex gap-3"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[rgb(var(--primary))] font-bold">
                    Rs {item.price}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2 bg-black/40 rounded-lg p-1">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-7 h-7 bg-white/5 rounded flex items-center justify-center"
                      >
                        <Minus className="w-3 h-3" />
                      </button>

                      <span className="text-sm w-6 text-center text-white">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-7 h-7 bg-white/5 rounded flex items-center justify-center"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 bg-red-500/10 rounded flex items-center justify-center"
                    >
                      <FaTrash className="text-red-500 w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        {items.length > 0 && (
          <div className="absolute bottom-0 w-full p-4 border-t border-white/5 bg-[#111] space-y-3">
            <div className="flex justify-between text-sm text-white/70">
              <span>Total</span>
              <span className="font-['Anton'] text-2xl text-[rgb(var(--primary))]">
                Rs {total}
              </span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#FF4D00] to-[#FF8A00] text-white font-bold h-12 rounded-xl flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              Place Order on WhatsApp
            </a>

            <button
              onClick={clearCart}
              className="w-full text-xs text-white/40 hover:text-white/70"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}