import { MapPin, Smartphone, Users, Zap, Shield, TrendingUp } from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Vertical Swipe Experience",
      description: "A new way to explore homes. Scroll seamlessly — one full-screen apartment at a time. Zero distractions. Zero clutter. Just pure, immersive browsing that helps you decide faster. Designed like stories, not listings. Every swipe reveals a new apartment with images, essentials, and pricing — instantly. No endless grids. No tiny cards. Just bold, swipe-based discovery built for modern mobile users.",
      highlight: "Revolutionary UX",
      stats: "Browse 10× Faster"
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Smart Location-First Search",
      description: "Drop a pin anywhere in Nepal. See available apartments in that exact area. Real-time map integration with neighborhood insights.",
      highlight: "Hyper-Local",
      stats: "46+ Cities Covered"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Built for Nepal, By Nepali",
      description: "Understanding local rental culture, payment preferences, and documentation. NPR pricing, local language support, Nepal-specific features.",
      highlight: "100% Localized",
      stats: "100+ Early Signups"
    }
  ];

  const quickFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Host Verification",
      description: "Quick approval process for hosts"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Payments",
      description: "Multiple payment methods including eSewa, Khalti"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Dynamic Pricing Tools",
      description: "Smart suggestions for competitive pricing"
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative mx-6 lg:mx-12">
      <div className="container relative z-10 mx-auto px-8 lg:px-16">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Why Flatzee?</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight text-foreground">
            Not Just Another
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Rental Platform
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            We&apos;re reimagining apartment discovery for Nepal&apos;s mobile-first generation
          </p>
        </div>

        {/* Clean grid layout for features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase">
                  {feature.highlight}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {feature.description.length > 120 ? feature.description.substring(0, 120) + '...' : feature.description}
              </p>
              <div className="text-lg font-black text-primary">{feature.stats}</div>
            </div>
          ))}
        </div>

        {/* Additional features */}
        <div className="grid md:grid-cols-3 gap-6">
          {quickFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Launch CTA */}
        <div className="mt-16 lg:mt-24 text-center">
          <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary to-secondary text-white shadow-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-sm font-bold text-white uppercase tracking-wider">Coming Soon</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-black mb-4 text-white">
              Launching in <span className="text-yellow-300">Q1 2026</span>
            </h3>
            <p className="text-lg text-white/90 font-medium mb-8">
              Join 100+ early partners waiting for launch day
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="px-6 py-3 rounded-full bg-white/20 border border-white/30">
                <span className="text-sm font-bold text-white">Phase 1: Empower Hosts</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-white/20 border border-white/30">
                <span className="text-sm font-bold text-white">Phase 2: Welcome Guests</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-white/20 border border-white/30">
                <span className="text-sm font-bold text-white">Phase 3: Transform Rentals in Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
