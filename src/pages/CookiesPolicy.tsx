
import React from "react";
import { DocumentHead } from "@/components/DocumentHead";
import { Section } from "@/components/ui/section";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Cookie, Shield, Settings, Database, Eye, Globe, FileText, Users } from "lucide-react";

export default function CookiesPolicy() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: FileText,
      content: [
        "This Cookies Policy explains how Source Seeker.space (\"we,\" \"our,\" or \"us\") uses cookies and similar technologies to recognize you when you visit our website at Source Seeker.space (\"Website\"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.",
        "By using our Website, you consent to our use of cookies in accordance with this Cookies Policy."
      ]
    },
    {
      id: "what-are-cookies",
      title: "What Are Cookies?",
      icon: Cookie,
      content: [
        "Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.",
        "Cookies set by the website owner (in this case, Source Seeker.space) are called \"first-party cookies.\" Cookies set by parties other than the website owner are called \"third-party cookies.\" Third-party cookies enable third-party features or functionality to be provided on or through the website."
      ]
    },
    {
      id: "why-we-use-cookies",
      title: "Why We Use Cookies",
      icon: Settings,
      content: [
        "We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as \"essential\" or \"strictly necessary\" cookies.",
        "Other cookies enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for advertising, analytics, and other purposes."
      ]
    },
    {
      id: "types-of-cookies",
      title: "Types of Cookies We Use",
      icon: Database,
      content: [
        {
          subtitle: "Essential Cookies",
          text: "These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas."
        },
        {
          subtitle: "Performance and Functionality Cookies",
          text: "These cookies are used to enhance the performance and functionality of our Website but are non-essential to its use."
        },
        {
          subtitle: "Analytics and Customization Cookies",
          text: "These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are."
        },
        {
          subtitle: "Advertising Cookies",
          text: "These cookies are used to make advertising messages more relevant to you and your interests. They also perform functions like preventing the same ad from continuously reappearing."
        }
      ]
    },
    {
      id: "cookie-control",
      title: "How to Control Cookies",
      icon: Eye,
      content: [
        {
          subtitle: "Browser Controls",
          text: "Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience."
        },
        {
          subtitle: "Cookie Preferences",
          text: "When you first visit our Website, you will be presented with a cookie banner that allows you to accept or decline non-essential cookies. You can change your preferences at any time."
        }
      ]
    },
    {
      id: "updates",
      title: "Policy Updates",
      icon: Globe,
      content: [
        "We may update this Cookies Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons.",
        "Please therefore re-visit this Cookies Policy regularly to stay informed about our use of cookies and related technologies."
      ]
    }
  ];

  return (
    <Layout>
      <DocumentHead
        title="Cookies Policy"
        description="Our cookies policy explains how we use cookies and similar technologies on our website."
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
            <Cookie className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-300 via-electric-400 to-aurora-400 bg-clip-text text-transparent">
            Cookies <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-crystal-300 max-w-3xl mx-auto leading-relaxed">
            Learn how we use cookies and similar technologies to enhance your browsing experience.
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
              Questions About Our Cookie Usage?
            </h2>
            <p className="text-crystal-300 text-lg mb-8 max-w-2xl mx-auto">
              If you have any questions about this Cookies Policy or our privacy practices, please don't hesitate to reach out to our team.
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


