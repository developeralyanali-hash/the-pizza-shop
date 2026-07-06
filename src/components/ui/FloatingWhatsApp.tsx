"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {

  const whatsappMessage = `👋 Hello The Pizza Shop!

I'd like some information before placing an order.

Could you please help me with:

🍕 Today's Deals
📋 Full Menu
📏 Pizza Sizes
🚚 Delivery Charges
⏱️ Estimated Delivery Time

Thank you!`;

  const whatsappUrl = `https://wa.me/923349489073?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 group">
      
      {/* ================= TOOLTIP (DESKTOP ONLY) ================= */}
      <div className="hidden md:block absolute right-16 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="relative">
          
          {/* glow background */}
          <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-lg" />

          <div className="relative bg-[#0f0f0f] border border-green-500/30 text-white text-xs px-4 py-2 rounded-lg shadow-[0_0_25px_rgba(34,197,94,0.25)] whitespace-nowrap">
            Need help? Contact us 👋
          </div>
        </div>
      </div>

      {/* ================= FLOATING BUTTON ================= */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full
        bg-gradient-to-br from-green-400 to-green-600
        shadow-[0_10px_30px_rgba(34,197,94,0.35)]
        hover:shadow-[0_15px_40px_rgba(34,197,94,0.55)]
        transition-all duration-300 active:scale-95"
      >
        {/* pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />

        {/* icon */}
        <FaWhatsapp size={24} className="text-white relative z-10" />
      </a>
    </div>
  );
}