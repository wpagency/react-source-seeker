import React from "react";
import { DocumentHead } from "@/components/DocumentHead";
import { Section } from "@/components/ui/section";
import Layout from "@/components/Layout";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Zap, Shield, Clock, CheckCircle, MapPin, Phone } from "lucide-react";
import { StoryReveal } from "@/components/ui/interactive-story";
import { Card3D } from "@/components/ui/dimensional";

const benefits = [
  {
    icon: <MessageCircle className="w-6 h-6 text-green-400" />,
    title: "Free Strategy Session",
    description: "30-minute consultation to discuss your goals and challenges"
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    title: "Quick Response",
    description: "We'll get back to you within 24 hours, usually much sooner"
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    title: "No Pressure",
    description: "Honest advice even if we're not the right fit for your project"
  }
];

const process = [
  {
    step: "01",
    title: "Initial Conversation",
    description: "We'll discuss your goals, challenges, and vision for success",
    icon: <MessageCircle className="w-6 h-6 text-blue-400" />
  },
  {
    step: "02", 
    title: "Strategy Session",
    description: "Deep dive into your business to craft the perfect approach",
    icon: <Calendar className="w-6 h-6 text-purple-400" />
  },
  {
    step: "03",
    title: "Custom Proposal",
    description: "Detailed plan with timeline, investment, and expected results",
    icon: <CheckCircle className="w-6 h-6 text-green-400" />
  }
];

const faqs = [
  {
    question: "What's the typical timeline for a project?",
    answer: "Most projects take 4-8 weeks, depending on complexity. We'll give you a detailed timeline during our initial consultation."
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "Yes! We work with everyone from ambitious startups to established enterprises. Every business deserves great digital experiences."
  },
  {
    question: "What's included in the free consultation?",
    answer: "We'll review your current situation, discuss your goals, and provide actionable insights - even if we don't work together."
  },
  {
    question: "How do you handle project communication?",
    answer: "You'll have direct access to your project team through Slack, regular video calls, and a dedicated project dashboard."
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer: "We offer a 100% satisfaction guarantee. We'll revise until you're completely happy with the results."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer various support packages to ensure your digital assets continue to perform optimally."
  }
];

export default function ContactPage() {
  return (
    <Layout>
      <DocumentHead
        title="Let's Build Something Amazing Together - Contact Source Seeker"
        description="Ready to transform your digital presence? Get in touch for a free strategy session and discover how we can help grow your business."
      />

      {/* Hero Section */}
      <Section spacing="large" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pt-32">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <MessageCircle className="w-10 h-10 text-white" />
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
        </motion.div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <StoryReveal key={index} delay={0.2 + index * 0.1}>
                <Card3D 
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center h-full"
                  intensity={5}
                  glare={true}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {benefit.description}
                  </p>
                </Card3D>
              </StoryReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <StoryReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Simple, straightforward process designed to understand your needs and deliver exceptional results.
            </p>
          </div>
        </StoryReveal>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <StoryReveal key={index} delay={index * 0.1}>
                <Card3D 
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 h-full"
                  intensity={5}
                  glare={true}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-white font-bold text-xl border border-white/10">
                      {item.step}
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </Card3D>
              </StoryReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Information and Form */}
      <Section 
        spacing="large" 
        className="bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05)_0%,transparent_70%)]" />
        
        <div className="max-w-6xl mx-auto">
          <StoryReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
          </StoryReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <StoryReveal>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
              Common <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <StoryReveal key={index} delay={index * 0.1}>
                  <Card3D 
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 h-full"
                    intensity={3}
                    glare={true}
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-white/70">
                      {faq.answer}
                    </p>
                  </Card3D>
                </StoryReveal>
              ))}
            </div>
          </div>
        </StoryReveal>
      </Section>

      {/* Map & Locations Section */}
      <Section className="bg-gradient-to-b from-slate-950 to-black">
        <StoryReveal>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Global <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Presence</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                With teams across multiple time zones, we're always available to support your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  city: "San Francisco",
                  country: "United States",
                  address: "101 California St, San Francisco, CA",
                  icon: <MapPin className="w-6 h-6 text-blue-400" />
                },
                {
                  city: "London",
                  country: "United Kingdom",
                  address: "10 Finsbury Square, London, EC2A 1AF",
                  icon: <MapPin className="w-6 h-6 text-purple-400" />
                },
                {
                  city: "Singapore",
                  country: "Singapore",
                  address: "1 Raffles Place, Singapore 048616",
                  icon: <MapPin className="w-6 h-6 text-green-400" />
                }
              ].map((location, index) => (
                <StoryReveal key={index} delay={index * 0.1}>
                  <Card3D 
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center"
                    intensity={3}
                    glare={true}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        {location.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {location.city}
                    </h3>
                    <p className="text-white/60 text-sm mb-2">
                      {location.country}
                    </p>
                    <p className="text-white/40 text-xs">
                      {location.address}
                    </p>
                  </Card3D>
                </StoryReveal>
              ))}
            </div>
          </div>
        </StoryReveal>
      </Section>
    </Layout>
  );
}

