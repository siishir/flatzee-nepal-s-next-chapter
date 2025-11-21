import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";
import Logo from "./Logo";
import { MapPin } from "lucide-react";

const Hero = () => {
  const cities = ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur", "Biratnagar", "Bharatpur"];
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient shape */}
      <div className="absolute top-0 right-0 w-[60%] h-full opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-3xl" />
      </div>

      {/* Diagonal accent */}
      <div 
        className="absolute top-0 right-0 w-[70%] h-[120%] -rotate-12 translate-x-1/4 -translate-y-1/4 opacity-5"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)'
        }}
      />

      {/* Top Navigation */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12 py-8">
        <Logo />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-12rem)]">
          {/* Left content */}
          <div className="space-y-8 lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30 shadow-lg">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
              <span className="text-base font-bold text-primary">NEPAL-WIDE LAUNCH • Q2 2025</span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-sm font-bold text-secondary uppercase tracking-wider">Introducing</div>
                <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter">
                  Flatzee
                </h1>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-foreground/90">
                Nepal&apos;s First
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Vertical-Swipe
                </span>
                <br />
                Apartment Platform
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-xl leading-relaxed">
                Discover and list apartments across Nepal with a revolutionary mobile-first experience. Swipe through listings like stories.
              </p>
            </div>

            {/* Cities rolling */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <MapPin className="w-5 h-5 text-primary" />
              <div className="flex flex-wrap gap-2">
                {cities.map((city, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-full bg-muted text-sm font-semibold text-foreground border border-border"
                  >
                    {city}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-full bg-primary/10 text-sm font-bold text-primary border-2 border-primary/30">
                  +40 More Cities
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="text-lg font-bold px-10 py-6 shadow-2xl hover:shadow-primary/25 transition-all">
                Become an Early Host Partner
              </Button>
              <Button size="lg" variant="outline" className="text-lg font-bold px-10 py-6 border-2 hover:border-primary hover:text-primary">
                Get Launch Updates
              </Button>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="relative">
              <PhoneMockup />
              
              {/* Floating badge */}
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-lg p-4 border border-border/50 backdrop-blur-sm hidden lg:block">
                <p className="text-xs text-muted-foreground font-medium mb-1">Swipe Experience</p>
                <p className="text-2xl font-bold text-foreground">One listing<br />per screen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
