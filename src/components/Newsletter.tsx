import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks! We'll keep you updated on our launch.");
      setEmail("");
    }
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Be the first to know
          </h2>
          <p className="text-lg text-muted-foreground font-medium mb-8">
            Get notified when Flatzee launches near you.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 px-6 text-base rounded-full border-2"
            />
            <Button 
              type="submit" 
              size="lg"
              className="px-8 rounded-full font-semibold whitespace-nowrap"
            >
              Get Updates
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
