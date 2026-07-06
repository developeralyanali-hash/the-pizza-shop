import { MapPin, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="border-b border-[#1f1f1f] bg-[#050505]/95 backdrop-blur-md">
      <div className="container">
        <div className="flex items-center justify-between h-9 sm:h-11 px-2 sm:px-6 lg:px-4">

          {/* LEFT - Location */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-white">
            <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-[rgb(var(--primary))]/30 bg-[rgb(var(--primary))]/15">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-[rgb(var(--primary))]" />
            </div>

            <span className="text-[11px] sm:text-sm font-semibold tracking-wide">
              Gujranwala
            </span>
          </div>

          {/* CENTER SPACER */}
          <div className="flex-1" />

          {/* RIGHT - Contact */}
          <a
            href="tel:+923349489073"
            className="group flex items-center gap-1.5 sm:gap-2 text-white transition-colors duration-300 hover:text-[rgb(var(--primary))]"
          >
            <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-[rgb(var(--primary))]/30 bg-[rgb(var(--primary))]/15 transition-all duration-300 group-hover:bg-[rgb(var(--primary))]/25">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-[rgb(var(--primary))]" />
            </div>

            <span className="text-[11px] sm:text-sm font-semibold tracking-wide whitespace-nowrap">
              +923349489073
            </span>
          </a>

        </div>
      </div>
    </div>
  );
}