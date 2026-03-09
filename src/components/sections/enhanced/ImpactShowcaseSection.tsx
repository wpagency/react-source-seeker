import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Users, DollarSign, Clock, ArrowRight, Star, Award, CheckCircle } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { StoryReveal, FloatingElement } from "@/components/ui/interactive-story";
import { Card3D } from "@/components/ui/dimensional";
import { RippleButton, ShimmerButton } from "@/components/ui/micro-interactions";

export const ImpactShowcaseSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      company: "Roseville Landscape Supply",
      industry: "Landscape Materials",
      challenge: "Low online visibility and difficulty attracting local customers in the competitive Roseville area",
      solution: "Comprehensive local SEO strategy with targeted Google Ads campaigns and conversion-focused website",
      results: [
        { metric: "Search Rankings", value: "Top 3", icon: <TrendingUp className="w-5 h-5" /> },
        { metric: "Local Traffic", value: "+150%", icon: <Users className="w-5 h-5" /> },
        { metric: "Ad CTR", value: "+150%", icon: <DollarSign className="w-5 h-5" /> },
        { metric: "Conversion Rate", value: "+80%", icon: <Clock className="w-5 h-5" /> }
      ],
      testimonial: "The work done is of first quality, professional in his area and is always attentive to the requirements of the client. Committed to do the best.",
      author: "Sandra B.",
      role: "Store Manager",
      company2: "Roseville Landscape Material Supply",
      image: "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      company: "ATCs for All",
      industry: "Art Community Platform",
      challenge: "Outdated vBulletin platform with poor user experience and limited functionality for art trading",
      solution: "Complete platform migration to XenForo with custom swap gallery and WordPress integration",
      results: [
        { metric: "Data Migration", value: "100%", icon: <TrendingUp className="w-5 h-5" /> },
        { metric: "User Experience", value: "Enhanced", icon: <Users className="w-5 h-5" /> },
        { metric: "Load Times", value: "-60%", icon: <DollarSign className="w-5 h-5" /> },
        { metric: "User Engagement", value: "Improved", icon: <Clock className="w-5 h-5" /> }
      ],
      testimonial: "I would like to thank you for all the work you put in recreating ATCs for All. Our Forum is so much easier for members to read, and navigates like the old one! The creation of the Swap gallery, which is searchable, was pure genius.",
      author: "Carole Cadek",
      role: "Owner",
      company2: "ATCsForAll.com",
      image: "https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      company: "Roseville Company",
      industry: "Technology",
      challenge: "Slow WordPress website with poor performance metrics and difficult maintenance",
      solution: "Migration to Astro with headless CMS for optimal performance and easy content management",
      results: [
        { metric: "Page Load", value: "-90%", icon: <TrendingUp className="w-5 h-5" /> },
        { metric: "Lighthouse Score", value: "98/100", icon: <Users className="w-5 h-5" /> },
        { metric: "Bounce Rate", value: "-25%", icon: <DollarSign className="w-5 h-5" /> },
        { metric: "Organic Traffic", value: "+15%", icon: <Clock className="w-5 h-5" /> }
      ],
      testimonial: "The migration to Astro transformed our website completely. It's blazing fast, easy to manage, and our customers love the improved experience.",
      author: "Sandra B.",
      role: "Store Manager",
      company2: "Roseville Company",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <Section className="bg-gradient-to-b from-slate-950 to-black relative overflow-hidden py-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <StoryReveal>
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"
            >
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white/80">Client Success Stories</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Results</span> for Real Businesses
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              See how we've transformed businesses across industries with our strategic approach and technical expertise.
            </p>
          </div>
        </StoryReveal>

        {/* Case Study Selector */}
        <StoryReveal delay={0.2}>
          <div className="flex justify-center mb-12 flex-wrap gap-4">
            {caseStudies.map((study, index) => (
              <RippleButton
                key={index}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCase === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
                onClick={() => setSelectedCase(index)}
                rippleColor="rgba(255, 255, 255, 0.2)"
              >
                {study.company}
              </RippleButton>
            ))}
          </div>
        </StoryReveal>

        {/* Case Study Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCase}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Left: Challenge & Solution */}
            <StoryReveal direction="left">
              <div className="space-y-8">
                <Card3D className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <FloatingElement distance={5} duration={3}>
                      <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-red-400" />
                      </div>
                    </FloatingElement>
                    <h3 className="text-2xl font-bold text-white">The Challenge</h3>
                  </div>
                  <p className="text-white/70 text-lg mb-6">
                    {caseStudies[selectedCase].challenge}
                  </p>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <FloatingElement distance={5} duration={3.5} delay={0.5}>
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-blue-400" />
                      </div>
                    </FloatingElement>
                    <h3 className="text-2xl font-bold text-white">Our Solution</h3>
                  </div>
                  <p className="text-white/70 text-lg">
                    {caseStudies[selectedCase].solution}
                  </p>
                </Card3D>

                {/* Testimonial */}
                <Card3D className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FloatingElement key={i} distance={3} duration={2 + i * 0.5} delay={i * 0.1}>
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </FloatingElement>
                    ))}
                  </div>
                  <blockquote className="text-white/90 text-lg italic mb-6">
                    "{caseStudies[selectedCase].testimonial}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {caseStudies[selectedCase].author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-medium">{caseStudies[selectedCase].author}</div>
                      <div className="text-white/60 text-sm">{caseStudies[selectedCase].role}, {caseStudies[selectedCase].company2}</div>
                    </div>
                  </div>
                </Card3D>
              </div>
            </StoryReveal>

            {/* Right: Results */}
            <StoryReveal direction="right" delay={0.2}>
              <Card3D className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  The Results
                </h3>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {caseStudies[selectedCase].results.map((result, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/5 rounded-xl p-6 text-center hover-lift"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <FloatingElement distance={5} duration={3 + index * 0.5}>
                        <div className="flex justify-center mb-3 text-green-400">
                          {result.icon}
                        </div>
                      </FloatingElement>
                      <motion.div 
                        className="text-3xl font-bold text-white mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.8,
                          delay: 0.3 + index * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                      >
                        {result.value}
                      </motion.div>
                      <div className="text-white/60 text-sm">
                        {result.metric}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl overflow-hidden">
                  <motion.img 
                    src={caseStudies[selectedCase].image} 
                    alt={caseStudies[selectedCase].company} 
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link to="/case-studies">
                    <ShimmerButton
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                      shimmerColor="rgba(255, 255, 255, 0.3)"
                    >
                      View Full Case Study
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </ShimmerButton>
                  </Link>
                </motion.div>
              </Card3D>
            </StoryReveal>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
};

