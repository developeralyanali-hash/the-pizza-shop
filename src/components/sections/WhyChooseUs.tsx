// src/components/business/WhyChooseUs.tsx
import Image from "next/image";
import {
  Clock,
  Star,
  ShieldCheck,
  Utensils,
  Truck,
  Wifi,
} from "lucide-react";

const badges = [
  { icon: Clock, text: "30 Min Delivery" },
  { icon: Star, text: "4.8★ Rated" },
  { icon: ShieldCheck, text: "100% Halal" },
  { icon: Utensils, text: "Fresh Made Daily" },
  { icon: Truck, text: "Fast Delivery" },
  { icon: Wifi, text: "Comfortable Dining" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-32">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[180px]" />
        <div className="absolute -left-24 top-1/3 h-[320px] w-[320px] rounded-full bg-orange-600/12 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-orange-500/12 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_55%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="relative z-10 mx-auto mb-8 max-w-2xl text-center md:mb-12 lg:mb-16">

          {/* TOP BADGE (IMPROVED - ABOUT US) */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--primary))]/30 bg-[rgb(var(--primary))]/10 px-4 py-2 text-xs backdrop-blur-xl md:mb-4 md:text-sm">
            <Star className="h-4 w-4 fill-[rgb(var(--primary))] text-[rgb(var(--primary))]" />
            <span className="font-bold text-white">
              ABOUT US • The Pizza Shop Story
            </span>
          </div>

          {/* HEADING (REMOVED LOCALIZATION, MORE PREMIUM BRAND VOICE) */}
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-orange-500/15 blur-2xl" />
            <h2 className="relative font-['Anton'] text-3xl leading-tight text-white md:text-5xl">
              Crafted With
              <span className="bg-gradient-to-r from-[#FF4D00] to-[#FF8A00] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,77,0,0.6)]">
                {" "}Passion & Flavor
              </span>
            </h2>
          </div>

        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT CONTENT */}
          <div className="space-y-8 text-center lg:text-left">

            {/* SUBTEXT (IMPROVED FLOW + PREMIUM TONE) */}
            <div className="space-y-4">

              <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                At <span className="font-bold text-white">The Pizza Shop</span>, we don’t just cook food — we craft experiences.
                Every pizza, burger, and shawarma is made fresh with
                <span className="font-semibold text-white"> high-quality ingredients</span> and consistent care.
              </p>

              <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                Our goal is simple: deliver
                <span className="font-bold text-[rgb(var(--primary))]"> fresh, hot, and satisfying meals</span>
                that make every visit worth remembering — whether it’s lunch, dinner, or a late-night craving.
              </p>

            </div>

            {/* INFO BOX (IMPROVED READABILITY) */}
            <div className="rounded-2xl border border-orange-500/15 bg-gradient-to-r from-white/[0.05] via-white/[0.03] to-transparent p-5 backdrop-blur-xl">

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
                Perfect For
              </p>

              <p className="text-base text-gray-100">
                Quick Bites • Family Meals •{" "}
                <span className="font-medium text-orange-400">
                  Late Night Cravings
                </span>{" "}
                • Hangouts
              </p>

            </div>

            {/* BADGES (MORE CLEAN + RESPONSIVE LOOK) */}
            <div className="grid max-w-2xl grid-cols-2 gap-3 pt-2 sm:gap-4 lg:grid-cols-3">

              {badges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/30 hover:bg-white/[0.10] hover:shadow-[0_0_25px_rgba(249,115,22,0.12)]"
                  >

                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-orange-500/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative flex-shrink-0 rounded-lg bg-orange-500/15 p-2 transition-colors duration-300 group-hover:bg-orange-500/25">
                      <Icon className="h-4 w-4 text-orange-500" />
                    </div>

                    <span className="relative text-[13px] font-medium leading-tight text-gray-100 sm:text-sm">
                      {badge.text}
                    </span>

                  </div>
                );
              })}

            </div>

          </div>

          {/* RIGHT IMAGE (FIXED BADGE OVERLAY - LESS STICKY + MORE PREMIUM) */}
          <div className="relative">

            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-orange-500/15 via-orange-500/8 to-orange-500/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

              <div className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[500px] lg:h-[580px]">

                <Image
                  src="/images/che.jpg"
                  alt="The Pizza Shop Kitchen Experience"
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5" />

                {/* CLEANER IMAGE BADGE (FIXED STICKY LOOK) */}
                <div className="absolute bottom-6 left-1/2 w-[200px] -translate-x-1/2 rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-center backdrop-blur-xl shadow-lg lg:left-8 lg:translate-x-0 lg:text-left">

                  <p className="text-3xl font-bold text-white">1000+</p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-orange-400">
                    Happy Customers Served
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}