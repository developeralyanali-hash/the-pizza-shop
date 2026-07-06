"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { FaTimes } from "react-icons/fa";

export default function OrderPopup({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { items, clearCart } = useCartStore();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const total = items.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

  const handleConfirm = () => {
    // ❗ VALIDATION (CRITICAL FIX)
    if (!name.trim() || !phone.trim()) {
      setError("Name and phone number are required");
      return;
    }

    if (items.length === 0) {
      setError("Cart is empty");
      return;
    }

    setError("");

    const orderItems = items
      .map(
        (i) =>
          `${i.name} x ${i.quantity} = Rs ${i.price * i.quantity}`
      )
      .join("%0A");

    const message =
      `*🍕 New Order - The Pizza Shop*%0A%0A` +
      `👤 Name: ${name}%0A` +
      `📞 Phone: ${phone}%0A` +
      `🏠 Address: ${address || "N/A"}%0A` +
      `📝 Notes: ${notes || "N/A"}%0A%0A` +
      `🛒 Items:%0A${orderItems}%0A%0A` +
      `💰 Total: Rs ${total}`;

    const whatsappURL = `https://wa.me/923018408177?text=${message}`;

    window.open(whatsappURL, "_blank");

    clearCart();
    onClose();

    // reset form
    setName("");
    setPhone("");
    setAddress("");
    setNotes("");
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#111111] w-[90%] max-w-md p-5 rounded-xl">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Complete Order</h2>
          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* ERROR */}
        {error && (
          <div className="bg-red-500/20 text-red-400 p-2 rounded mb-3 text-sm">
            {error}
          </div>
        )}

        {/* FORM */}
        <div className="space-y-3">

          <input
            placeholder="Full Name *"
            className="w-full p-2 bg-[#1a1a1a] rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Phone Number *"
            className="w-full p-2 bg-[#1a1a1a] rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            placeholder="Delivery Address"
            className="w-full p-2 bg-[#1a1a1a] rounded"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <textarea
            placeholder="Notes (optional)"
            className="w-full p-2 bg-[#1a1a1a] rounded"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        {/* TOTAL */}
        <div className="mt-4 flex justify-between text-sm">
          <span>Total:</span>
          <span className="font-bold text-orange-400">
            Rs {total}
          </span>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleConfirm}
          className="w-full mt-4 btn btn-primary"
        >
          Confirm Order on WhatsApp
        </button>
      </div>
    </div>
  );
}