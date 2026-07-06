import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Clock, Flame, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h- md:min-h-screen flex items-center">

      {/* BG Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[200px] md:h-[600px] bg-[rgb(var(--primary))] blur- md:blur-[150px] opacity-[0.06] md:opacity-[0.12] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--primary))]/3 via-transparent to-transparent pointer-events-none" />

      <div className="section container flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 relative py-8 md:py-0">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left z-10 w-full">

          {/* TOP BADGE */}
          <div className="inline-flex items-center gap-2 bg-[rgb(var(--card))]/80 backdrop-blur-sm border border-[rgb(var(--primary))]/40 px-3 py-1.5 rounded-full text-xs mb-4">

            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>

            <span className="font-bold text-white">OPEN NOW</span>

            <span className="text-muted">•</span>

            <span className="text-white/90 flex items-center gap-1">
              <Clock className="w-3 h-3" /> Till 2 AM
            </span>
          </div>

          {/* SLOGAN */}
          <p className="text-[rgb(var(--primary))] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-3">
            THE PIZZA SHOP EXPERIENCE
          </p>

          {/* H1 */}
          <h1 className="font-['Anton'] tracking-tight leading-[1.05] text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl">
            Fresh From
            <span className="block mt-1 bg-gradient-to-br from-[#FF4D00] via-[#FF6A00] to-[#FF8A00] bg-clip-text text-transparent">
              The Pizza Shop Oven
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-4 max-w-xl mx-auto md:mx-0 text-[15px] md:text-lg leading-relaxed">

            <span className="block font-semibold text-white">
              Fresh dough, premium cheese & flame-baked flavor.
            </span>

            <span className="block mt-1 font-bold text-[rgb(var(--primary))]">
              Made fresh after every order • Hot delivery in around 30 minutes.
            </span>

          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/923349489073?text=${encodeURIComponent(
`🍕 Hello The Pizza Shop!

I'd like to place an order.

🛒 Items:
•

📍 Delivery Address:

👤 Name:

📞 Phone Number:

💳 Payment Method:
Cash / Online

Thank you!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-base font-bold min-h- w-full sm:w-auto group shadow-[0_4px_20px_rgba(255,77,0,0.35)] hover:shadow-[0_6px_30px_rgba(255,77,0,0.5)] active:scale-[0.98] transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Order Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              href="/menu"
              className="btn btn-secondary text-base font-bold min-h- w-full sm:w-auto border-2 hover:border-[rgb(var(--primary))]/50 active:scale-[0.98] transition-all"
            >
              <Flame className="w-5 h-5 mr-2 text-[rgb(var(--primary))]" />
              View Menu
            </Link>
          </div>

          {/* TRUST BADGES */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">

            <div className="flex items-center gap-2 bg-[rgb(var(--primary))]/10 px-3 py-2 rounded-lg border border-[rgb(var(--primary))]/30">
              <Star className="w-4 h-4 text-[rgb(var(--primary))] fill-[rgb(var(--primary))]" />
              <span className="text-sm font-bold text-white">4.8 Rating</span>
            </div>

            <div className="flex items-center gap-2 bg-[rgb(var(--primary))]/10 px-3 py-2 rounded-lg border border-[rgb(var(--primary))]/30">
              <span className="text-base">⚡</span>
              <span className="text-sm font-bold text-white">30 Min Delivery</span>
            </div>

            <div className="flex items-center gap-2 bg-[rgb(var(--primary))]/10 px-3 py-2 rounded-lg border border-[rgb(var(--primary))]/30">
              <span className="text-base">🔥</span>
              <span className="text-sm font-bold text-white">1000+ Orders Daily</span>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 w-full max-w-[320px] md:max-w-[550px]">

          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(var(--primary))] to-[#FF8A00] blur- md:blur-[100px] opacity-15 md:opacity-25 -z-10" />

            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-[rgb(var(--primary))]/30">

              <Image
                src="/images/hero.jpg"
                alt="Pizza Hero Image"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />

              {/* FLOATING LABEL */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[rgb(var(--bg))]/95 backdrop-blur-xl px-3 py-2 rounded-xl border border-[rgb(var(--primary))]/50 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

                <div className="flex items-center gap-2 whitespace-nowrap">

                  <Flame className="w-4 h-4 text-[rgb(var(--primary))]" />

                  <span className="text-xs sm:text-sm font-bold text-white">
                    Midnight Deal • Large Pizza + Drink
                  </span>

                  <span className="text-xs line-through text-muted">
                    1800
                  </span>

                  <span className="text-sm sm:text-lg font-['Anton'] text-[rgb(var(--primary))]">
                    1499
                  </span>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}