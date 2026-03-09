import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { StoryReveal, FloatingElement } from "@/components/ui/interactive-story";

const ContactHero = () => {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-36 relative overflow-hidden">
      {/* Add a top border that matches the navbar bottom border for seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10 opacity-0" />
      
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08)_0%,transparent_70%)]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        
        {/* Floating elements */}
        <FloatingElement distance={20} duration={6}>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-blue-500/10 opacity-20"></div>
        </FloatingElement>
        
        <FloatingElement distance={15} duration={8} delay={1}>
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full border border-purple-500/10 opacity-20"></div>
        </FloatingElement>
      </div>

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <StoryReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium">Let's Connect</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Let's Build Something
            <span className="block text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text">
              Amazing Together
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to transform your digital presence? Let's start with a conversation about your goals and how we can help you achieve them.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <a href="mailto:hello@example.com.space" className="text-white hover:text-blue-300 transition-colors">
                hello@example.com.space
              </a>
            </div>
            
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-3">
              <Phone className="w-5 h-5 text-green-400" />
              <a href="tel:+15555555555" className="text-white hover:text-green-300 transition-colors">
                +1 (555) 555-5555
              </a>
            </div>
          </div>
        </StoryReveal>
      </div>
    </div>
  );
};

export default ContactHero;

