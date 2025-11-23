import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";
import CircularText from "@/components/CircularText";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const Hero = () => {
  const cities = [
    "Kathmandu",
    "Pokhara",
    "Lalitpur",
    "Bhaktapur",
    "Biratnagar",
    "Bharatpur",
    "Surkhet",
  ];
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.2);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white p-2"
    >
      <div className="relative mx-auto">
        {/* Circular text sitting behind the dark card, partially visible */}
        <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 hidden md:block z-0">
          <CircularText
            text="COMING SOON ACROSS NEPAL • FLATZEE •"
            onHover="speedUp"
            spinDuration={20}
            className="text-[10px] tracking-[0.25em] text-slate-400"
          />
        </div>

        {/* Dark announcement card */}
        <div className="relative overflow-hidden bg-[#020617] text-slate-50 rounded-[32px] mx-4 my-6 lg:mx-10">
          {/* Radial glow behind phone */}
          <div className="pointer-events-none absolute right-[-80px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-primary/25 blur-[120px] opacity-40" />
          
          {/* Subtle vertical accent bar on the left */}
          <div className="pointer-events-none absolute left-6 top-20 h-20 w-[3px] rounded-full bg-primary/30" />
          
          <div className="container relative z-10 mx-auto px-6 lg:px-20 pt-10 pb-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)] lg:translate-x-4">
            {/* Left content */}
            <div className="space-y-8 lg:pr-8">
              {/* Refined coming soon pill */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 shadow-[0_0_18px_rgba(85,99,235,0.35)] transition-all duration-700 ${
                  heroVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-primary/90">
                  Coming soon across Nepal
                </span>
              </div>

              {/* Messaging hierarchy */}
              <div className="space-y-3">
                <div className="space-y-3">
                  <div
                    className={`text-sm font-bold text-teal-400 uppercase tracking-wider transition-all duration-700 delay-200 ${
                      heroVisible
                        ? "animate-fade-in-left"
                        : "opacity-0 -translate-x-8"
                    }`}
                  >
                    INTRODUCING
                  </div>
                  <h1
                    className={`text-4xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tighter text-slate-50 transition-all duration-1000 delay-400 ${
                      heroVisible
                        ? "animate-slide-up"
                        : "opacity-0 translate-y-12"
                    }`}
                  >
                    Flatzee
                  </h1>
                </div>

                <div className="space-y-1">
                  <h3
                    className={`text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight text-slate-50 transition-all duration-700 delay-600 ${
                      heroVisible
                        ? "animate-fade-in-up"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    Apartments that swipe
                    <br />
                    like stories.
                  </h3>
                  
                  {/* Micro-tagline */}
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400 mt-1">
                    Nepal's first mobile-first apartment platform
                  </p>
                </div>

                <div className="space-y-2">
                  <p
                    className={`text-lg lg:text-xl text-slate-300 font-normal max-w-xl leading-relaxed transition-all duration-700 delay-700 ${
                      heroVisible
                        ? "animate-fade-in-up"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    Discover and list apartments across Nepal with a mobile-first
                    experience built for our cities.
                  </p>
                  <p
                    className={`text-sm text-slate-400 max-w-lg leading-relaxed transition-all duration-700 delay-800 ${
                      heroVisible
                        ? "animate-fade-in-up"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    Swipe through listings one at a time, with all the details
                    that matter.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div
                className={`space-y-4 pt-4 transition-all duration-700 delay-1000 ${
                  heroVisible
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/early-host" onClick={() => window.scrollTo(0, 0)}>
                    <Button
                      size="lg"
                      className="text-base font-bold px-8 py-5 shadow-2xl shadow-teal-500/30 bg-teal-500 hover:bg-teal-400 text-slate-950 transition-all"
                    >
                      Become an Early Host Partner
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base font-bold px-8 py-5 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-950 transition-all"
                  >
                    Get Launch Updates
                  </Button>
                </div>
                <p className="text-xs text-slate-400 px-2">
                  Limited launch-phase commission for early hosts.
                </p>
              </div>
            </div>

            {/* Right content - Phone mockup */}
            <div className="flex justify-center lg:justify-end items-center relative mt-8 lg:mt-0">
              <div
                className={`relative transition-all duration-1000 delay-300 ${
                  heroVisible
                    ? "animate-slide-in-right"
                    : "opacity-0 translate-x-12"
                }`}
              >
                {/* Phone with gentle scale */}
                <div className="relative z-10 scale-[1.08] lg:scale-[1.12]">
                  <PhoneMockup />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
