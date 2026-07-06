"use client";

import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

const contactCards = [
  {
    title: "Call Now",
    icon: Phone,
    value: "+92 301 8408177",
    subtext: "Tap to call instantly",
    href: "tel:+923018408177",
  },
  {
    title: "WhatsApp Order",
    icon: MessageCircleIcon,
    value: "0328-1413617",
    subtext: "Quick ordering via chat",
    href: "https://wa.me/923281413617",
    external: true,
  },
];

function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M19.11 17.21c-.3-.15-1.77-.87-2.05-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.63-.92-2.24-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.38-.27.3-1.05 1.03-1.05 2.52 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35z" />
      <path d="M16.03 3C8.84 3 3 8.73 3 15.8c0 2.27.62 4.48 1.8 6.4L3 29l7.04-1.82a13.16 13.16 0 0 0 5.99 1.44h.01c7.18 0 13.02-5.73 13.02-12.8C29.06 8.73 23.22 3 16.03 3zm0 23.42h-.01a10.9 10.9 0 0 1-5.55-1.51l-.4-.24-4.18 1.08 1.12-4.07-.26-.42a10.54 10.54 0 0 1-1.64-5.46c0-5.84 4.88-10.6 10.91-10.6 6.02 0 10.92 4.76 10.92 10.6 0 5.85-4.9 10.62-10.91 10.62z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black py-20 lg:py-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/15 blur-[180px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">

        {/* HEADER */}
        <div className="mx-auto mb-12 max-w-2xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs md:text-sm mb-4">
            <Phone className="h-4 w-4 text-orange-500" />
            <span className="font-bold text-white">
              ORDER DIRECTLY — FAST RESPONSE
            </span>
          </div>

          <h2 className="font-['Anton'] text-3xl md:text-5xl text-white">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-[#FF8A00]">
              Touch
            </span>
          </h2>

          <p className="mt-4 text-sm md:text-lg text-gray-300 leading-relaxed">
            No waiting, no forms — just direct ordering.
            <span className="text-white font-semibold">
              {" "}Call or WhatsApp and get your food started instantly.
            </span>
            <span className="text-orange-400 font-bold">
              {" "}We’re open till 2 AM.
            </span>
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">

          {/* LEFT */}
          <div className="space-y-4">

            {contactCards.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition-all hover:border-orange-500/40 hover:bg-white/[0.08]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-500 group-hover:bg-orange-500/20">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm font-semibold text-white">
                      {item.value}
                    </p>

                    <p className="text-xs text-gray-400">
                      {item.subtext}
                    </p>
                  </div>

                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-orange-400" />
                </a>
              );
            })}

            {/* VISIT CARD */}
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-500">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Visit Us</h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  Barki Road, Lahore <br />
                  Near Paragon City
                </p>

                <a
                  href="https://maps.google.com/?q=Barki+Road+Lahore"
                  target="_blank"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300"
                >
                  Open in Maps
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* HOURS */}
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-500">
                <Clock className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  Opening Hours
                </h3>

                <p className="text-2xl font-bold text-orange-400">
                  11 AM – 2 AM
                </p>

                <p className="text-sm text-gray-400">
                  Open 7 Days a Week
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT MAP */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-orange-500/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-orange-500/30">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                className="h-[320px] w-full lg:h-[420px]"
                loading="lazy"
              />

              <div className="absolute top-4 left-4 rounded-full bg-black/70 px-4 py-2 text-xs text-white backdrop-blur-xl">
                📍 Live Location
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}