"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Muhammad Haad",
    role: "Local Guide · 68 reviews",
    avatar: "MH",
    rating: 5,
    time: "5 months ago",
    text: "The Pizza Shop! Located on Barki Road. I ordered their bachelor deal 3, which included fries, drink, and burger. Great value and taste.",
    food: 5,
    service: 3,
    orderType: "Delivery",
  },
  {
    id: 2,
    name: "Abdullah Sajid",
    role: "6 reviews",
    avatar: "AS",
    rating: 5,
    time: "5 months ago",
    text: "Consistent taste and budget-friendly meals. Staff is friendly and service is quick.",
    food: 5,
    service: 5,
    orderType: "Dine in",
  },
  {
    id: 3,
    name: "Mahrukh Ejaz",
    role: "6 reviews",
    avatar: "ME",
    rating: 5,
    time: "6 months ago",
    text: "One of the best fast food spots nearby with amazing burgers and shawarma.",
    food: 5,
    service: 5,
  },
  {
    id: 4,
    name: "M. Munir",
    role: "1 review",
    avatar: "MM",
    rating: 5,
    time: "2 years ago",
    text: "Fresh food, reliable quality, and great service every time.",
    food: 5,
    service: 5,
    orderType: "Dine in",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () =>
    setCurrent((p) => (p + 1) % reviews.length);

  const prev = () =>
    setCurrent((p) => (p - 1 + reviews.length) % reviews.length);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) < 50) return;

    if (diff > 0) next();
    else prev();
  };

  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-28">

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/15 blur-[160px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">

        {/* HEADER */}
        <div className="mx-auto mb-12 max-w-2xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs md:text-sm mb-4">
            <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
            <span className="font-bold text-white">
              REAL CUSTOMER EXPERIENCES
            </span>
          </div>

          <h2 className="font-['Anton'] text-3xl md:text-5xl text-white">
            Loved by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-[#FF8A00]">
              Food Lovers
            </span>
          </h2>

          {/* ✅ IMPROVED PREMIUM SUBTEXT (NEW) */}
          <div className="mt-4 space-y-2 text-sm md:text-lg text-gray-300 leading-relaxed">
            <p>
              Every review comes from real customers who ordered freshly made food —
              <span className="text-white font-semibold"> no fake ratings, no paid feedback</span>.
            </p>

            <p>
              From late-night cravings to family meals, our taste speaks louder than marketing.
            </p>

            <p>
              <span className="text-[rgb(var(--primary))] font-bold">
                Consistency, freshness, and flavor — that’s what keeps people coming back.
              </span>
            </p>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="relative flex items-center justify-center">

          <button
            onClick={prev}
            className="hidden md:flex absolute left-2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-orange-500/10"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute right-2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-orange-500/10"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>

          <div ref={containerRef} className="w-full max-w-3xl overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {reviews.map((r) => (
                <div key={r.id} className="w-full flex-shrink-0 px-2">

                  <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">

                    <Quote className="absolute right-5 top-5 h-14 w-14 text-orange-500/10" />

                    <div className="flex items-center gap-4">

                      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 font-bold text-white">
                        {r.avatar}
                      </div>

                      <div>
                        <h3 className="text-white font-semibold">{r.name}</h3>
                        <p className="text-xs text-gray-400">
                          {r.role} • {r.time}
                        </p>

                        <div className="flex gap-1 mt-2">
                          {[...Array(r.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-orange-500 fill-orange-500" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-sm md:text-base text-gray-300 leading-relaxed">
                      "{r.text}"
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {r.orderType && (
                        <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs text-orange-400 border border-orange-500/20">
                          {r.orderType}
                        </span>
                      )}

                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300 border border-white/10">
                        Food {r.food}★
                      </span>

                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300 border border-white/10">
                        Service {r.service}★
                      </span>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DOTS */}
        <div className="mt-10 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                current === i ? "w-8 bg-orange-500" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}