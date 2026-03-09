import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Card3D } from "@/components/ui/dimensional";
import { StoryReveal } from "@/components/ui/interactive-story";
import { ShimmerButton } from "@/components/ui/micro-interactions";
import { Check, Send, ChevronDown } from "lucide-react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    budget: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formState.name || !formState.email || !formState.message || !formState.service) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", formState);
      toast.success("Message sent successfully! We'll be in touch soon.");
      
      setIsSuccess(true);
      
      // Reset form after showing success state
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          service: "",
          message: "",
          budget: ""
        });
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: "web-development", label: "Web Development" },
    { value: "app-saas", label: "App/SaaS Solutions" },
    { value: "seo-marketing", label: "SEO & Marketing" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "ux-design", label: "UX/UI Design" },
    { value: "tech-consulting", label: "Tech Consulting" },
    { value: "other", label: "Other" }
  ];

  const budgets = [
    { value: "under5k", label: "Under $5,000" },
    { value: "5k-10k", label: "$5,000 - $10,000" },
    { value: "10k-25k", label: "$10,000 - $25,000" },
    { value: "25k-50k", label: "$25,000 - $50,000" },
    { value: "50k+", label: "$50,000+" },
    { value: "not-sure", label: "Not sure yet" }
  ];

  return (
    <StoryReveal>
      <Card3D 
        className="bg-gradient-to-br from-card to-secondary/5 backdrop-blur-xl"
        intensity={5}
        glare={true}
      >
        <h2 className="text-2xl font-medium mb-6">Send Us a Message</h2>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium flex items-center">
                Full Name <span className="text-red-400 ml-1">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-white"
                placeholder="Your name"
                required
                disabled={isSubmitting || isSuccess}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium flex items-center">
                Email Address <span className="text-red-400 ml-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-white"
                placeholder="you@example.com"
                required
                disabled={isSubmitting || isSuccess}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-medium flex items-center">
              Service Interest <span className="text-red-400 ml-1">*</span>
            </label>
            <div className="relative">
              <select
                id="service"
                value={formState.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors appearance-none text-white"
                required
                disabled={isSubmitting || isSuccess}
              >
                <option value="" disabled className="bg-slate-800 text-white">Select a service</option>
                {services.map((service) => (
                  <option key={service.value} value={service.value} className="bg-slate-800 text-white">
                    {service.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-none w-5 h-5" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium flex items-center">
              Project Details <span className="text-red-400 ml-1">*</span>
            </label>
            <textarea
              id="message"
              value={formState.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 bg-secondary/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-vertical text-white"
              placeholder="Tell us about your project goals, timeline, and specific requirements..."
              required
              disabled={isSubmitting || isSuccess}
            ></textarea>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="budget" className="text-sm font-medium">
              Project Budget
            </label>
            <div className="relative">
              <select
                id="budget"
                value={formState.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors appearance-none text-white"
                disabled={isSubmitting || isSuccess}
              >
                <option value="" disabled className="bg-slate-800 text-white">Select a budget range</option>
                {budgets.map((budget) => (
                  <option key={budget.value} value={budget.value} className="bg-slate-800 text-white">
                    {budget.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-none w-5 h-5" />
            </div>
          </div>
          
          <div className="pt-4">
            <ShimmerButton
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting || isSuccess}
              shimmerColor="rgba(255, 255, 255, 0.3)"
              autoShimmer={!isSubmitting && !isSuccess}
            >
              <span className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </span>
            </ShimmerButton>
          </div>
          
          <div className="text-xs text-white/50 pt-2">
            <p>We respect your privacy. Your information will never be shared with third parties.</p>
          </div>
        </form>
      </Card3D>
    </StoryReveal>
  );
};

export default ContactForm;

