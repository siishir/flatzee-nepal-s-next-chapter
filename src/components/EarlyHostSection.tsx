import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const EarlyHostSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cityArea: "",
    readiness: "",
    units: "",
    propertyType: "",
    notes: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.cityArea || !formData.readiness || !formData.units || !formData.consent) {
      toast.error("Please fill in all required fields and accept the consent.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          city_area: formData.cityArea,
          readiness: formData.readiness,
          units: formData.units,
          property_type: formData.propertyType || "Not specified",
          notes: formData.notes || "No additional notes"
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        cityArea: "",
        readiness: "",
        units: "",
        propertyType: "",
        notes: "",
        consent: false
      });

      toast.success("Thank you! We've received your details. Our team will reach out before launch.");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-32 mx-6 lg:mx-12">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-tight">
              Be an early Flatzee host
            </h2>
            
            <p className="text-xl text-muted-foreground font-medium">
              Get 0% commission for the first 3 months after launch — and discounted host fees as an early partner.
            </p>

            <div className="space-y-4">
              <p className="text-lg text-foreground font-medium">
                Flatzee is launching across Nepal soon
              </p>
              
              <p className="text-muted-foreground">
                We're onboarding hosts before guests
              </p>

              <div className="space-y-2">
                <p className="font-bold text-foreground">Early host partners receive:</p>
                <ul className="space-y-1 text-muted-foreground ml-4">
                  <li>• Zero commission for the first 3 months</li>
                  <li>• Reduced commission rates afterward</li>
                  <li>• Priority onboarding and support</li>
                </ul>
              </div>

              <p className="text-sm text-muted-foreground italic">
                We are currently onboarding hosts only. Guest booking will open after launch.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="text"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cityArea">City / Area *</Label>
                <Input
                  id="cityArea"
                  type="text"
                  value={formData.cityArea}
                  onChange={(e) => handleInputChange("cityArea", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="readiness">Hosting Readiness *</Label>
                <Select value={formData.readiness} onValueChange={(value) => handleInputChange("readiness", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select readiness" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediately">Immediately</SelectItem>
                    <SelectItem value="1-3-months">Within 1–3 months</SelectItem>
                    <SelectItem value="exploring">Just exploring</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="units">Number of Units *</Label>
                <Select value={formData.units} onValueChange={(value) => handleInputChange("units", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select number of units" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2-5">2–5</SelectItem>
                    <SelectItem value="6-10">6–10</SelectItem>
                    <SelectItem value="10+">10+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertyType">Property Type</Label>
                <Select value={formData.propertyType} onValueChange={(value) => handleInputChange("propertyType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entire-apartment">Entire apartment</SelectItem>
                    <SelectItem value="serviced-apartment">Serviced apartment</SelectItem>
                    <SelectItem value="shared-rooms">Shared rooms / PG</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  placeholder="Any additional information..."
                  rows={3}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                />
                <Label htmlFor="consent" className="text-sm">
                  I agree to be contacted by Flatzee about early host partnership and launch updates. *
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Apply as Early Host"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyHostSection;