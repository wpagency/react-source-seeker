
import React from "react";
import { DocumentHead } from "@/components/DocumentHead";
import { Section } from "@/components/ui/section";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  HelpCircle, 
  Clock, 
  DollarSign, 
  Users, 
  Code, 
  Globe, 
  MessageSquare,
  CheckCircle,
  ArrowRight 
} from "lucide-react";

export default function FAQ() {
  const faqCategories = [
    {
      id: "general",
      title: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "What services does Source Seeker.space offer?",
          answer: "We specialize in web design, web development, e-commerce solutions, mobile app development, UX/UI design, SEO optimization, and digital consulting. Our team creates custom solutions tailored to your business needs."
        },
        {
          question: "How long has Source Seeker.space been in business?",
          answer: "We have been serving clients since 2009, bringing over 15 years of experience in web development and digital solutions. Our team has successfully completed 250+ projects for clients worldwide."
        },
        {
          question: "Do you work with businesses of all sizes?",
          answer: "Yes, we work with startups, small businesses, and large enterprises. Our flexible approach allows us to scale our services to meet the unique needs and budgets of different business sizes."
        }
      ]
    },
    {
      id: "process",
      title: "Project Process",
      icon: Clock,
      questions: [
        {
          question: "What is your typical project timeline?",
          answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during our initial consultation."
        },
        {
          question: "How do you handle project communication?",
          answer: "We maintain regular communication through weekly updates, project management tools, and scheduled calls. You'll have direct access to your project manager and can track progress in real-time."
        },
        {
          question: "What happens after my project is completed?",
          answer: "We provide ongoing support and maintenance options. This includes security updates, content changes, technical support, and feature enhancements as your business grows."
        }
      ]
    },
    {
      id: "pricing",
      title: "Pricing & Payment",
      icon: DollarSign,
      questions: [
        {
          question: "How do you price your projects?",
          answer: "We provide custom quotes based on project requirements, complexity, and timeline. After understanding your needs, we'll provide a detailed proposal with transparent pricing and no hidden fees."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers, credit cards, and PayPal. Payment is typically structured in milestones - 50% upfront, 25% at midpoint, and 25% upon completion."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, for larger projects we offer flexible payment plans to help manage your cash flow. We can discuss custom payment schedules during our consultation."
        }
      ]
    },
    {
      id: "technical",
      title: "Technical Questions",
      icon: Code,
      questions: [
        {
          question: "What technologies do you use?",
          answer: "We use modern technologies including React, Node.js, WordPress, Shopify, and various frameworks. We choose the best technology stack based on your specific requirements and future scalability needs."
        },
        {
          question: "Will my website be mobile-friendly?",
          answer: "Absolutely! All our websites are built with responsive design, ensuring they work perfectly on desktop, tablet, and mobile devices. Mobile optimization is a standard part of our development process."
        },
        {
          question: "Do you provide website hosting?",
          answer: "We can recommend reliable hosting providers and help with setup, but we don't provide hosting services directly. This allows you to choose the hosting solution that best fits your needs and budget."
        }
      ]
    },
    {
      id: "support",
      title: "Support & Maintenance",
      icon: Users,
      questions: [
        {
          question: "What kind of support do you provide?",
          answer: "We offer various support packages including technical support, content updates, security monitoring, and regular backups. Support can be hourly, monthly retainer, or annual packages."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "For urgent issues, we aim to respond within 2-4 hours during business hours. Non-urgent requests are typically handled within 24-48 hours. Emergency support is available for critical issues."
        },
        {
          question: "Can you help with website updates and changes?",
          answer: "Yes, we can handle all types of updates - from simple content changes to major feature additions. We also provide training so your team can manage basic updates independently."
        }
      ]
    }
  ];

  return (
    <Layout>
      <DocumentHead
        title="Frequently Asked Questions"
        description="Find answers to common questions about our web development services, pricing, process, and support."
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-crystal-950 via-quantum-950 to-cosmic-950 relative overflow-hidden py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-500/50 to-transparent" />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
            }}
          />
        ))}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="w-20 h-20 bg-aurora-gradient rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-neon-500/30">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-300 via-electric-400 to-aurora-400 bg-clip-text text-transparent">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl text-crystal-300 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, process, and how we can help your business grow.
          </p>
        </motion.div>
      </Section>

      {/* FAQ Content */}
      <Section className="bg-gradient-to-b from-crystal-950 to-quantum-950">
        <div className="max-w-5xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-quantum-gradient/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-electric-500/30">
                  <category.icon className="w-8 h-8 text-neon-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {category.title}
                </h2>
              </div>

              {/* Questions */}
              <div className="bg-gradient-to-br from-crystal-900/40 via-quantum-900/40 to-cosmic-900/40 backdrop-blur-md border border-electric-500/20 rounded-3xl p-8 md:p-12">
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${category.id}-${faqIndex}`}
                      className="bg-crystal-900/30 backdrop-blur-sm rounded-2xl border border-electric-500/10 px-6"
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-electric-300 transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-crystal-200 leading-relaxed pt-2 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          ))}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-br from-neon-500/10 via-electric-500/5 to-aurora-500/10 backdrop-blur-md border border-neon-500/30 rounded-3xl p-12"
          >
            <MessageSquare className="w-16 h-16 text-neon-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-crystal-300 text-lg mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you with any questions about our services or how we can help your business succeed.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 bg-aurora-gradient text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-neon-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-5 h-5" />
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}


