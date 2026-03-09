import React from "react";
import { DocumentHead } from "@/components/DocumentHead";
import { Section } from "@/components/ui/section";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Shield, FileText, Scale, Users, Lock, AlertTriangle } from "lucide-react";

export default function TermsOfService() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: FileText,
      content: [
        "Welcome to Source Seeker.space. These Terms of Service (\"Terms\") govern your use of the Source Seeker.space website at Source Seeker.space (\"Site\") and any related services offered by Source Seeker.space (\"we,\" \"our,\" or \"us\").",
        "By accessing or using our Site and services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Site or services."
      ]
    },
    {
      id: "use",
      title: "Use of Our Site and Services",
      icon: Users,
      content: [
        {
          subtitle: "Eligibility",
          text: "You must be at least 18 years old and capable of forming a binding contract to use our Site and services. By using our Site, you represent and warrant that you meet these requirements."
        },
        {
          subtitle: "Account Responsibility", 
          text: "If you create an account, you are responsible for maintaining the confidentiality of your account information, including your password. You are also responsible for all activities that occur under your account."
        },
        {
          subtitle: "Acceptable Use",
          text: "You agree not to use our Site or services in any way that violates applicable laws, transmits spam or promotional material, impersonates others, or restricts other users' enjoyment of the Site."
        }
      ]
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      icon: Shield,
      content: [
        {
          subtitle: "Our Content",
          text: "The Site and its contents are owned by Source Seeker.space and protected by copyright, trademark, and other intellectual property laws."
        },
        {
          subtitle: "Limited License",
          text: "We grant you a limited, non-exclusive, non-transferable license to access and use our Site for personal, non-commercial purposes."
        },
        {
          subtitle: "Your Content",
          text: "When you provide content to our Site, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content."
        }
      ]
    },
    {
      id: "service-terms",
      title: "Service Terms",
      icon: Scale,
      content: [
        {
          subtitle: "Project Agreements",
          text: "Our services are provided under separate project agreements. These Terms do not govern the specific terms of our services."
        },
        {
          subtitle: "Fees and Payment",
          text: "Payment terms for our services will be specified in project agreements. Unless otherwise stated, all fees are non-refundable and quoted in US dollars."
        }
      ]
    },
    {
      id: "disclaimers",
      title: "Disclaimers & Liability",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "No Warranties",
          text: "THE SITE IS PROVIDED \"AS IS\" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE."
        },
        {
          subtitle: "Limitation of Liability",
          text: "IN NO EVENT WILL WE BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE SITE."
        }
      ]
    },
    {
      id: "legal",
      title: "Legal & Changes",
      icon: Lock,
      content: [
        {
          subtitle: "Governing Law",
          text: "These Terms are governed by the laws of the State of California. Any legal proceedings shall be instituted in San Francisco."
        },
        {
          subtitle: "Changes to Terms",
          text: "We may revise these Terms at any time. All changes are effective immediately when posted. Your continued use means you accept the changes."
        }
      ]
    }
  ];

  return (
    <Layout>
      <DocumentHead
        title="Terms of Service"
        description="Our terms of service outline the rules, guidelines, and obligations that govern the use of our website and services."
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
            <Scale className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-300 via-electric-400 to-aurora-400 bg-clip-text text-transparent">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-xl md:text-2xl text-crystal-300 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our website and services.
          </p>
          <div className="mt-8 text-crystal-400">
            <p>Last updated: May 18, 2025</p>
          </div>
        </motion.div>
      </Section>

      {/* Content Sections */}
      <Section className="bg-gradient-to-b from-crystal-950 to-quantum-950">
        <div className="max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-16 relative"
            >
              {/* Section Card */}
              <div className="bg-gradient-to-br from-crystal-900/40 via-quantum-900/40 to-cosmic-900/40 backdrop-blur-md border border-electric-500/20 rounded-3xl p-8 md:p-12 group hover:border-neon-500/40 transition-all duration-500">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-aurora-gradient opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500" />
                
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-16 h-16 bg-quantum-gradient/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-electric-500/30">
                    <section.icon className="w-8 h-8 text-neon-400" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>

                {/* Section Content */}
                <div className="space-y-6 relative z-10">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {typeof item === 'string' ? (
                        <p className="text-crystal-200 text-lg leading-relaxed">
                          {item}
                        </p>
                      ) : (
                        <div className="bg-crystal-900/30 backdrop-blur-sm rounded-2xl p-6 border border-electric-500/10">
                          <h3 className="text-xl font-semibold text-electric-300 mb-3">
                            {item.subtitle}
                          </h3>
                          <p className="text-crystal-200 leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-br from-neon-500/10 via-electric-500/5 to-aurora-500/10 backdrop-blur-md border border-neon-500/30 rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-crystal-300 text-lg mb-8 max-w-2xl mx-auto">
              If you have any questions about these Terms of Service, please don't hesitate to reach out to our team.
            </p>
            <motion.a
              href="mailto:hello@example.com.space"
              className="inline-flex items-center gap-2 bg-aurora-gradient text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-neon-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}


