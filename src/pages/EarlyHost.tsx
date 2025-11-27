import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowLeft, CheckCircle, Users, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import UniqueFooter from "@/components/UniqueFooter";
import PageTransition from "@/components/PageTransition";

const EarlyHost = () => {
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

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Launch-Phase Rewards",
      description: "Enjoy special benefits and the lowest hosting fees during our launch period"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Discounted Rates",
      description: "Reduced host fees for early partners after launch"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Priority Support",
      description: "Faster onboarding and dedicated host assistance"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Early Access",
      description: "List your property ahead of the public launch and secure early visibility"
    }
  ];


  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Header */}
        <header className="p-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </header>

        {/* Hero + Form Section */}
        <section className="px-6 py-12 lg:py-20">
          <div className="container mx-auto max-w-6xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 border border-teal-200 mb-6">
                <span className="text-sm font-bold text-teal-700 uppercase tracking-wider">Early Partner Program</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black mb-6 text-foreground leading-tight">
                Be an early
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Flatzee host</span>
              </h1>

              <p className="text-xl text-muted-foreground font-medium mb-6 max-w-3xl mx-auto">
                Join as an Early Host Partner and enjoy special launch-phase benefits, reduced fees, and priority listing boost — designed to help you get your first bookings faster.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-sm font-medium text-slate-700">
                  Currently onboarding hosts only • Guest booking opens after launch
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* Form Section with Primary Background */}
        <section className="bg-slate-900 px-6 py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Left Content */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-3xl lg:text-4xl font-black text-white">
                  Join the waitlist
                </h2>

                <div className="space-y-4">
                  <p className="text-lg text-white font-medium">
                    Flatzee is launching across Nepal soon
                  </p>

                  <p className="text-slate-300">
                    We're onboarding hosts before guests to ensure quality listings from day one.
                  </p>

                  <div className="p-4 rounded-xl bg-teal-500/20 border border-teal-400/30">
                    <p className="text-sm text-teal-200 font-medium">
                      💡 Early hosts get exclusive benefits and priority support during our launch phase.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
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
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
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
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
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

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="consent" className="text-sm leading-relaxed">
                        I agree to be contacted by Flatzee about early host partnership and launch updates. *
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-6 text-lg font-bold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Apply as Early Host"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 py-16">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl lg:text-4xl font-black text-center mb-12 text-foreground">
              Early host partners receive
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <UniqueFooter />
      </div>
    </PageTransition>
  );
};

export default EarlyHost;