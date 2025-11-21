import { ChevronDown } from "lucide-react";
import apartmentImage from "@/assets/apartment-hero.jpg";

const PhoneMockup = () => {
  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="relative w-[320px] h-[650px] bg-black rounded-[3rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          {/* Listing content */}
          <div className="relative w-full h-full">
            {/* Apartment image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20">
              <img 
                src={apartmentImage} 
                alt="Modern Apartment"
                className="w-full h-full object-cover"
              />
              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            
            {/* Top search bar */}
            <div className="absolute top-6 left-4 right-4 z-10">
              <div className="bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
                <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-sm text-muted-foreground font-medium">Search location...</span>
              </div>
            </div>

            {/* Listing details overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
              <h3 className="text-2xl font-bold mb-1">Modern Apartment, Lazimpat</h3>
              <p className="text-sm text-white/80 mb-3 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Lazimpat, Kathmandu
              </p>
              <p className="text-lg font-bold">From NPR 2,300<span className="text-sm font-medium">/night</span></p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-24 right-6 z-10 animate-bounce">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                <ChevronDown className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Bottom navigation */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-border/10 px-6 py-3 flex items-center justify-between z-20">
              <div className="flex flex-col items-center gap-1">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span className="text-xs font-medium text-primary">Home</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <svg className="w-6 h-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="text-xs font-medium text-muted-foreground">Map</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <svg className="w-6 h-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-xs font-medium text-muted-foreground">Saved</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <svg className="w-6 h-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs font-medium text-muted-foreground">Profile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl" />
      </div>

      {/* Motion blur effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[280px] h-20 bg-primary/5 blur-xl rounded-full opacity-60" />
      </div>
    </div>
  );
};

export default PhoneMockup;
