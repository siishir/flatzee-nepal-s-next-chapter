import { ChevronDown } from "lucide-react";
import apartmentImage from "@/assets/apartment-hero.jpg";

const PhoneMockup = () => {
  return (
    <div className="relative">
      {/* iPhone frame – silver/light graphite finish */}
      <div className="relative w-[280px] h-[580px] rounded-[3.2rem] p-2 shadow-[0_28px_90px_rgba(0,0,0,0.4)] bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 border border-slate-300">
        {/* Screen */}
        <div className="relative w-full h-full rounded-[2.8rem] overflow-hidden bg-black">
          {/* Status bar */}
          <div className="absolute top-3 left-6 right-6 flex items-center justify-between z-40">
            <div className="text-white text-sm font-semibold">9:41</div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 border border-white/60 rounded-sm">
                <div className="w-3 h-1 bg-white rounded-sm m-0.5" />
              </div>
            </div>
          </div>

          {/* Search bar area */}
          <div className="absolute top-12 left-4 right-4 z-30">
            <div className="bg-white/12 backdrop-blur-xl border border-white/15 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.45)]">
              <svg
                className="w-5 h-5 text-white/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-sm text-white/85 font-medium">
                Search location…
              </span>
            </div>
          </div>

          {/* Listing card container with rounded corners */}
          <div className="absolute inset-x-4 top-24 bottom-28">
            <div className="relative h-full w-full rounded-3xl overflow-hidden bg-black/40 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              {/* Listing image */}
              <img
                src={apartmentImage}
                alt="2BHK Scenic apartment in Kathmandu"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              {/* Image progress dots */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                <span className="h-1.5 w-4 rounded-full bg-white" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              </div>

              {/* Listing content */}
              <div className="absolute left-4 right-4 bottom-4 z-20 space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    2BHK Scenic apartment in Kathmandu
                  </h3>

                  <div className="flex items-center gap-1.5 text-white/90">
                    <svg
                      className="w-3.5 h-3.5 text-white/80 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium">Kathmandu · Thamel</span>
                  </div>
                </div>

                {/* Price row with strong focus */}
                <div className="flex items-baseline justify-between pt-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-white/80">NPR</span>
                    <span className="text-3xl font-black text-[#10B981]">999</span>
                    <span className="text-sm text-white/70 font-medium">/ night</span>
                  </div>
                </div>
              </div>

              {/* Subtle next card indication */}
              <div className="absolute bottom-0 left-4 right-4 h-2 bg-gradient-to-t from-white/5 to-transparent rounded-b-3xl" />
            </div>
          </div>

          {/* Swipe indicator */}
          <div className="absolute bottom-28 right-6 z-20 animate-bounce">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-lg border border-white/20">
              <ChevronDown className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Tightened bottom navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-xl border-t border-white/10 px-6 py-3 flex items-center justify-between text-white/75 z-30">
            <div className="flex flex-col items-center gap-1">
              <svg
                className="w-6 h-6 text-[#5563EB]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <span className="text-[11px] font-medium text-[#5563EB]">
                Home
              </span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <span className="text-[11px]">Map</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-[11px]">Saved</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-[11px]">Profile</span>
            </div>
          </div>
        </div>

        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full border border-slate-600" />
      </div>

      {/* Subtle glow under phone */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[260px] h-20 bg-primary/20 blur-3xl opacity-50" />
      </div>
    </div>
  );
};

export default PhoneMockup;
