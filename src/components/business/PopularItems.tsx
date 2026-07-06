"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, Star, Zap } from "lucide-react";
import { menuData } from "@/data/menu";
import { useCartStore } from "@/store/cartStore";
import { motion } from "framer-motion";

export default function PopularItems() {
  const addItem = useCartStore((state) => state.addItem);
  const popularItems = menuData.filter((item) => item.isPopular === true);

  return (
    <section id="menu" className="section container relative overflow-x-hidden">

      {/* BG */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] md:w-[800px] h-[400px] md:h-[800px] bg-[rgb(var(--primary))] blur-[100px] md:blur-[200px] opacity-[0.15] md:opacity-[0.18]" />
      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 md:mb-12 relative z-10"
      >
        <div className="inline-flex items-center gap-2 bg-[rgb(var(--primary))]/10 border border-[rgb(var(--primary))]/30 px-4 py-2 rounded-full text-xs md:text-sm mb-3 md:mb-4">
          <Star className="w-4 h-4 text-[rgb(var(--primary))] fill-[rgb(var(--primary))]" />
          <span className="font-bold text-white">
            Loved by 1000+ Happy Customers • 4.8★ Rating
          </span>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[350px] h-[80px] md:h-[120px] bg-[rgb(var(--primary))] blur-[60px] md:blur-[100px] opacity-25 md:opacity-30 -z-10" />

          <h2 className="text-3xl md:text-5xl font-['Anton'] leading-tight relative">
            Most Ordered
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-[#FF8A00] drop-shadow-[0_0_25px_rgba(255,77,0,0.6)]">
              {" "}Pizza Picks
            </span>
          </h2>
        </div>

        <p className="text-muted mt-3 md:mt-4 text-base md:text-lg max-w-2xl mx-auto">
          These dishes are the <span className="text-white font-semibold">most loved by our customers</span>.
          <span className="text-[rgb(var(--primary))] font-bold"> Fresh, hot & delivered in 30 minutes.</span>
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">

        {popularItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group relative bg-gradient-to-br from-[rgb(var(--card))]/90 to-[rgb(var(--card))]/60 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-[rgb(var(--primary))]/40 transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,77,0,0.25)] overflow-hidden"
          >
            <div className="relative h-[200px] md:h-[240px] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={`${item.name} - The Pizza Shop`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                quality={90}
              />
            </div>

            <div className="p-4 md:p-5 flex flex-col">

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[rgb(var(--primary))] uppercase tracking-widest font-bold">
                  {item.category}
                </span>

                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-[rgb(var(--primary))] fill-[rgb(var(--primary))]" />
                  <span className="text-xs font-bold text-white">4.8</span>
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                {item.name}
              </h3>

              <p className="text-xs md:text-sm text-muted mt-1.5 min-h-[2.5rem] line-clamp-2">
                {item.description || "Freshly made pizza loaded with cheese & flavor"}
              </p>

              <div className="mt-3 mb-4">
                <p className="text-2xl md:text-3xl font-['Anton'] text-[rgb(var(--primary))]">
                  Rs {item.price}
                </p>
              </div>

              <div className="flex flex-col gap-2">

                <a
                  href={`https://wa.me/923349489073?text=${encodeURIComponent(
`🍕 Hello The Pizza Shop!

I'd like to order:

📦 Item:
• ${item.name}

💰 Price:
Rs ${item.price}

📍 Delivery Address:

👤 Name:

📞 Phone Number:

💳 Payment Method:
Cash / Online

Thank you!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-[#FF4D00] to-[#FF8A00] text-white text-sm md:text-base font-bold h-11 md:h-10 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(255,77,0,0.4)] hover:shadow-[0_6px_30px_rgba(255,77,0,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
                >
                  <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Order Now
                </a>

                <button
                  onClick={() =>
                    addItem({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.image,
                    })
                  }
                  className="w-full bg-[rgb(var(--card))] border-2 border-white/10 hover:border-[rgb(var(--primary))] text-white text-sm md:text-base font-bold h-11 md:h-10 rounded-xl flex items-center justify-center gap-2 hover:bg-[rgb(var(--primary))]/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
                >
                  <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                  Add to Cart
                  <span className="text-xs bg-[rgb(var(--primary))]/20 text-[rgb(var(--primary))] px-2 py-0.5 rounded-md font-bold">
                    +1
                  </span>
                </button>

              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-8 md:mt-14 relative z-10"
      >
        <Link
          href="/menu"
          className="btn btn-secondary text-base md:text-lg min-h- inline-flex items-center gap-2 group border-2 hover:border-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))]/10"
        >
          View Full Menu
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />

          <span className="bg-[rgb(var(--primary))]/20 text-[rgb(var(--primary))] px-2 py-0.5 rounded-md text-xs md:text-sm font-bold">
            {menuData.length} Items
          </span>
        </Link>
      </motion.div>

    </section>
  );
}