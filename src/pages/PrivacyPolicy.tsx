
import React from "react";
import { DocumentHead } from "@/components/DocumentHead";
import { Section } from "@/components/ui/section";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Database, Users, Settings, FileText, Globe } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: FileText,
      content: [
        "Source Seeker.space (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your information when you use our website at Source Seeker.space (the \"Site\") and our services.",
        "By accessing or using our Site and services, you agree to the terms of this Privacy Policy. If you do not agree with our practices, please do not use our Site or services."
      ]
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Information You Provide to Us",
          text: "We may collect contact information including name, email address, phone number, and mailing address when you contact us, request a quote, or sign up for our newsletter. We also collect business information such as company name, position, industry, and project requirements."
        },
        {
          subtitle: "Information We Collect Automatically",
          text: "When you visit our Site, we automatically collect usage data about how you interact with our Site, device information including IP address and browser type, and information through cookies and similar technologies."
        }
      ]
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      icon: Settings,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our Site and services, process and respond to your inquiries, and send administrative information about our services."
        },
        {
          subtitle: "Communication & Personalization",
          text: "We may send marketing communications if you have opted in, personalize your experience on our Site, and generate insights about our audience and service effectiveness."
        },
        {
          subtitle: "Security & Compliance",
          text: "We use your information to protect against unauthorized access and other harmful activities, and to comply with legal obligations."
        }
      ]
    },
    {
      id: "sharing-information",
      title: "Sharing Your Information",
      icon: Users,
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party service providers who help us operate our business and deliver services to you."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required to do so by law or in response to valid requests by public authorities."
        },
        {
          subtitle: "Business Transfers",
          text: "If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
        },
        {
          subtitle: "With Your Consent",
          text: "We may share your information with third parties when you have provided your consent to do so."
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: Lock,
      content: [
        "We implement appropriate technical and organizational measures to protect the information we collect. However, no security system is impenetrable, and we cannot guarantee the absolute security of your information.",
        "We use industry-standard security measures including encryption, secure data transmission, and regular security audits to protect your personal information."
      ]
    },
    {
      id: "your-rights",
      title: "Your Rights and Choices",
      icon: Eye,
      content: [
        {
          subtitle: "Data Rights",
          text: "Depending on your location, you may have certain rights regarding your personal information, including access to your personal information, correction of inaccurate information, deletion of your information, and restriction of processing."
        },
        {
          subtitle: "Additional Rights",
          text: "You may also have rights to data portability, objection to processing, and withdrawal of consent. To exercise these rights, please contact us at hello@example.com.space."
        }
      ]
    },
    {
      id: "children-privacy",
      title: "Children's Privacy",
      icon: Shield,
      content: [
        "Our Site is not intended for children under 16. We do not knowingly collect personal information from children under 16.",
        "If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to delete such information."
      ]
    },
    {
      id: "changes-updates",
      title: "Changes to This Privacy Policy",
      icon: Globe,
      content: [
        "We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons.",
        "Please therefore re-visit this Privacy Policy regularly to stay informed about our privacy practices. The date at the top of this Privacy Policy indicates when it was last updated."
      ]
    }
  ];

  return (
    <Layout>
      <DocumentHead
        title="Privacy Policy"
        description="Our privacy policy explains how we collect, use, and protect your personal information when you use our website and services."
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
            <Shield className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-300 via-electric-400 to-aurora-400 bg-clip-text text-transparent">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-crystal-300 max-w-3xl mx-auto leading-relaxed">
            We are committed to protecting your privacy and ensuring transparency in how we handle your data.
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
              Questions About Our Privacy Practices?
            </h2>
            <p className="text-crystal-300 text-lg mb-8 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or our privacy practices, please don't hesitate to reach out to our team.
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


