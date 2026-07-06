"use client";

import Link from "next/link";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Popular Items", href: "#menu" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-black border-t border-white/10">

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">

        {/* BRAND */}
        <div className="text-center mb-12">

          <h2 className="font-['Anton'] text-3xl md:text-4xl text-white">
            The Pizza Shop
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Freshly baked pizzas, crafted for real hunger — served hot, fast, and late into the night.
          </p>

          <p className="mt-2 text-xs md:text-sm text-[rgb(var(--primary))] font-semibold">
            Made with passion • Served with speed • Loved by locals
          </p>

        </div>

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* TRUST (LEFT) */}
          <div className="text-center md:text-left">

            <h3 className="text-white font-semibold mb-4 text-lg">
              Why People Trust Us
            </h3>

            <div className="space-y-2 text-sm text-gray-300">

              <p>⭐ 4.8 Average Rating</p>
              <p>👥 1000+ Happy Customers</p>
              <p>🔥 Fresh Ingredients Daily</p>
              <p>🚀 Fast Delivery Service</p>

            </div>

          </div>

          {/* CTA (CENTER) */}
          <div className="text-center">

            <h3 className="text-white font-semibold mb-4 text-lg">
              Order Now
            </h3>

            <p className="text-sm text-gray-400 mb-6">
              Fast delivery in 25–30 minutes. Fresh, hot & made to order.
            </p>

            <div className="flex flex-col gap-3">

              <a
                href="https://wa.me/923018408177"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF4D00] to-[#FF8A00] px-4 py-3 text-white font-bold shadow-[0_0_25px_rgba(255,77,0,0.35)] hover:scale-[1.02] transition"
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+923018408177"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white hover:border-orange-500/40 transition"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                Call Now
              </a>

            </div>
          </div>

          {/* QUICK LINKS (RIGHT - FIXED COLUMN LAYOUT) */}
          <div className="text-center md:text-right">

            <h3 className="text-white font-semibold mb-4 text-lg">
              Quick Links
            </h3>

            {/* COLUMN FIX */}
            <div className="flex flex-col gap-3 items-center md:items-end">

              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  {link.name}
                </Link>
              ))}

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-white/10" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">

          <p>
            © {new Date().getFullYear()} The Pizza Shop. All rights reserved.
          </p>

          <p className="text-[rgb(var(--primary))] font-semibold">
            Built for real food lovers ❤️
          </p>

        </div>

      </div>
    </footer>
  );
}