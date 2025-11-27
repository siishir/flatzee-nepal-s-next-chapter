import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        'template_9cid66s',
        {
          email: email,
          type: 'newsletter_signup'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Thanks! We'll keep you updated on our launch.");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 relative mx-6 lg:mx-12 bg-slate-50 rounded-3xl">
      <div className="container relative z-10 mx-auto px-8 lg:px-16">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Stay Updated</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight text-foreground">
            Be the first to
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              know
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Get notified when Flatzee launches near you
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Newsletter signup */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white shadow-inner">
                <span className="text-lg font-bold">📧</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
                Newsletter
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Get Launch Updates</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Be the first to know when we launch in your city across Nepal.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 px-4 rounded-xl"
              />
              <Button 
                type="submit" 
                size="lg"
                className="w-full px-6 rounded-xl font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Updates"}
              </Button>
            </form>
          </div>

          {/* Host CTA - Highlighted */}
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 border-t-4 border-t-emerald-400 hover:shadow-lg transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center text-white shadow-inner">
                <span className="text-lg font-bold">🏠</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase">
                Early Access
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Become an Early Host</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Join our early host program and unlock lowered fees and intial support.
            </p>
            
            <Link to="/early-host" onClick={() => window.scrollTo(0, 0)}>
              <Button 
                size="lg" 
                className="w-full rounded-full font-semibold bg-emerald-600 hover:bg-emerald-700 text-white border-0"
              >
                Apply as Host
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
