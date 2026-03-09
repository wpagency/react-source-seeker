import { AppleCard } from "@/components/ui/apple-card";
import { Mail, Clock, ArrowRight, MapPin, Phone, Calendar, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Card3D } from "@/components/ui/dimensional";
import { StoryReveal, FloatingElement } from "@/components/ui/interactive-story";

const ContactInfo = () => {
  return (
    <StoryReveal>
      <Card3D 
        className="h-full bg-gradient-to-br from-secondary/40 to-secondary/10"
        intensity={8}
        glare={true}
      >
        <h2 className="text-2xl font-medium mb-8">Contact Information</h2>
        
        <div className="space-y-8">
          {/* New Projects Email */}
          <div className="flex items-start">
            <FloatingElement distance={5} duration={3}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center mr-4 text-blue-400 border border-blue-500/20">
                <Mail className="w-5 h-5" />
              </div>
            </FloatingElement>
            <div>
              <p className="text-sm text-muted-foreground mb-1">New Projects</p>
              <a href="mailto:hello@example.com.space" className="text-lg hover:text-primary transition-colors group flex items-center">
                hello@example.com.space
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
          
          {/* Support Email */}
          <div className="flex items-start">
            <FloatingElement distance={5} duration={3.5} delay={0.5}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center mr-4 text-purple-400 border border-purple-500/20">
                <Mail className="w-5 h-5" />
              </div>
            </FloatingElement>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Help & Support</p>
              <a href="mailto:support@yourhandle.space" className="text-lg hover:text-primary transition-colors group flex items-center">
                support@yourhandle.space
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
          
          {/* Location */}
          <div className="flex items-start">
            <FloatingElement distance={5} duration={4} delay={1}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center mr-4 text-green-400 border border-green-500/20">
                <MapPin className="w-5 h-5" />
              </div>
            </FloatingElement>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Global Presence</p>
              <p className="text-lg">San Francisco • London • Singapore</p>
            </div>
          </div>
          
          {/* Response time */}
          <div className="flex items-start">
            <FloatingElement distance={5} duration={3.2} delay={1.5}>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 flex items-center justify-center mr-4 text-yellow-400 border border-yellow-500/20">
                <Clock className="w-5 h-5" />
              </div>
            </FloatingElement>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Response Time</p>
              <p className="text-lg">Within 24 hours</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-xl font-medium mb-6">Our Guarantees</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <Shield className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="font-medium text-white">100% Satisfaction Guarantee</p>
                <p className="text-sm text-white/60">We're not happy until you're thrilled with our work</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <Calendar className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <p className="font-medium text-white">Free Strategy Session</p>
                <p className="text-sm text-white/60">30-minute consultation to discuss your goals</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                <Phone className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <p className="font-medium text-white">Direct Access</p>
                <p className="text-sm text-white/60">Speak directly with our experts, not account managers</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/case-studies" className="group flex items-center text-primary hover:text-accent transition-colors">
              <span className="mr-2">View Our Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Card3D>
    </StoryReveal>
  );
};

export default ContactInfo;

