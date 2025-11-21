import { MapPin, Smartphone, Users, Zap, Shield, TrendingUp } from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "TikTok-Style Vertical Browsing",
      description: "Swipe up to see the next apartment. Full-screen listings with instant visual appeal. One listing per screen, zero clutter.",
      highlight: "Revolutionary UX",
      stats: "10x Faster Browsing"
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
      title: "Built for Nepal, By Nepal",
      description: "Understanding local rental culture, payment preferences, and documentation. NPR pricing, local language support, Nepal-specific features.",
      highlight: "100% Localized",
      stats: "500+ Early Signups"
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
    <section className="py-20 lg:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/50 to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Why Flatzee?</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
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

        {/* Main features grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Highlight badge */}
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30">
                <span className="text-xs font-bold text-secondary uppercase">{feature.highlight}</span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black mb-4 leading-tight">{feature.title}</h3>
              <p className="text-muted-foreground font-medium leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Stats */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-2xl font-black text-primary">{feature.stats}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {quickFeatures.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-muted/50 border border-border/50 hover:bg-card hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground font-medium">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Launch CTA */}
        <div className="mt-16 lg:mt-24 text-center">
          <div className="inline-block p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 border-2 border-primary/30">
            <h3 className="text-3xl lg:text-4xl font-black mb-4">
              Launching in <span className="text-primary">Q2 2025</span>
            </h3>
            <p className="text-lg text-muted-foreground font-medium mb-6">
              Join 500+ early partners waiting for launch day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="px-6 py-3 rounded-full bg-card border-2 border-border">
                <span className="text-sm font-bold">Phase 1: Kathmandu Valley</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-card border-2 border-border">
                <span className="text-sm font-bold">Phase 2: Major Cities</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-card border-2 border-border">
                <span className="text-sm font-bold">Phase 3: All Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
