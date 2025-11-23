import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

interface NewsletterModalProps {
  onClose: () => void;
}

const NewsletterModal = ({ onClose }: NewsletterModalProps) => {
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
      onClose();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-2">Get Launch Updates</h2>
      <p className="text-muted-foreground mb-6">Be the first to know</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 px-4 rounded-lg"
        />
        <Button 
          type="submit" 
          size="lg"
          className="w-full rounded-lg font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Get Updates"}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterModal;