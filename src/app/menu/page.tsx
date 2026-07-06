"use client";

import { useState } from "react";
import Image from "next/image";
import { menuData, MenuItem } from "@/data/menu";
import { useCartStore } from "@/store/cartStore";
import { Plus, Zap } from "lucide-react";

const categories = ["All", "Pizza", "Burger", "Sandwich", "Wraps", "Deals", "Drinks", "Sides"] as const;
type Category = typeof categories[number];

export default function MenuPage() {
  const addItem = useCartStore((state) => state.addItem);
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredItems =
    activeCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  return (
    <main className="container py-12 md:py-20 relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-[rgb(var(--primary))] blur-[120px] md:blur-[160px] opacity-[0.12]" />
      </div>

      {/* HEADER */}
      <div className="text-center mb-10 md:mb-14 relative">

        {/* HEADING GLOW */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] md:w-[420px] h-[120px] md:h-[160px] bg-[rgb(var(--primary))] blur-[120px] opacity-20 -z-10" />

        <h1 className="text-4xl md:text-6xl font-['Anton'] leading-tight">
          Explore Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-[#FF8A00] drop-shadow-[0_0_30px_rgba(255,77,0,0.5)]">
            Full Menu
          </span>
        </h1>

        {/* PREMIUM SUBTEXT (3 LINES) */}
        <p className="text-gray-300 mt-4 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
          Freshly prepared meals made to order with premium ingredients.
          <span className="block text-white font-semibold mt-1">
            From cheesy pizzas to spicy burgers and wraps — everything is crafted for real flavor.
          </span>
          <span className="block text-[rgb(var(--primary))] font-bold mt-1">
            Fast delivery. Hot food. Always fresh in 30 minutes.
          </span>
        </p>
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex gap-2 md:gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 md:px-6 py-2 md:py-2.5 rounded-xl font-bold text-sm md:text-base whitespace-nowrap transition-all flex items-center gap-2 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-[#FF4D00] to-[#FF8A00] text-white shadow-[0_4px_20px_rgba(255,77,0,0.35)]"
                : "bg-[rgb(var(--card))] border border-white/10 text-white hover:border-[rgb(var(--primary))]/50"
            }`}
          >
            {cat}
            <span className="text-xs opacity-70 font-semibold">
              {cat === "All"
                ? menuData.length
                : menuData.filter((i) => i.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* MENU GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

        {filteredItems.map((item: MenuItem) => (
          <div
            key={item.id}
            className="group relative bg-gradient-to-br from-[rgb(var(--card))]/90 to-[rgb(var(--card))]/60 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-[rgb(var(--primary))]/40 transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,77,0,0.25)] overflow-hidden"
          >

            {/* IMAGE */}
            <div className="relative h-[180px] md:h-[210px] w-full overflow-hidden">

              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {item.isPopular && (
                <div className="absolute top-3 left-3 bg-[rgb(var(--primary))] text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg">
                  Popular
                </div>
              )}
            </div>

            {/* INFO */}
            <div className="p-4 md:p-5">

              <span className="text-xs text-[rgb(var(--primary))] uppercase tracking-widest font-bold">
                {item.category}
              </span>

              <h3 className="text-lg font-bold text-white mt-1 leading-snug">
                {item.name}
              </h3>

              <p className="text-xs md:text-sm text-gray-400 mt-2 line-clamp-2 min-h-[40px]">
                {item.description}
              </p>

              <p className="text-2xl font-['Anton'] text-[rgb(var(--primary))] mt-3">
                Rs {item.price}
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col gap-2 mt-4">

                <a
                  href={`https://wa.me/923018408177?text=${encodeURIComponent(
`🍕 Hello The Pizza Shop!

I'd like to order the following item:

🍽 Item:
${item.name}

💰 Price:
Rs ${item.price}

🔢 Quantity:
1

━━━━━━━━━━━━━━

👤 Name:

📞 Phone Number:

📍 Delivery Address:

📝 Special Instructions:

Please confirm my order.

Thank you!`
)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-[#FF4D00] to-[#FF8A00] text-white text-sm md:text-base font-bold h-11 md:h-10 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(255,77,0,0.4)] hover:shadow-[0_6px_30px_rgba(255,77,0,0.6)] active:scale-[0.98] transition-all"
                >
                  <Zap className="w-4 h-4" />
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
                  className="w-full bg-[rgb(var(--card))] border-2 border-white/10 hover:border-[rgb(var(--primary))] text-white text-sm md:text-base font-bold h-11 md:h-10 rounded-xl flex items-center justify-center gap-2 hover:bg-[rgb(var(--primary))]/10 active:scale-[0.98] transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Add to Cart
                </button>

              </div>
            </div>
          </div>
        ))}

      </div>

      {/* EMPTY STATE */}
      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            No items available in this category right now.
          </p>
        </div>
      )}

    </main>
  );
}