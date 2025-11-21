import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";

const Hero = () => {
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

      <div className="container relative z-10 mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-8rem)]">
          {/* Left content */}
          <div className="space-y-8 lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Launching Soon</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
                Launching
                <br />
                <span className="text-primary">Across Nepal</span>
                <br />
                Soon.
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground font-medium max-w-md">
                A new way to find and host apartments—built for Nepal.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base font-semibold px-8 shadow-lg hover:shadow-xl transition-all">
                Become an Early Host Partner
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold px-8 border-2">
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
