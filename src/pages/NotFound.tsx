
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DocumentHead } from "@/components/DocumentHead";
import { Section } from "@/components/ui/section";
import Layout from "@/components/Layout";
import { Home, ArrowLeft, Search, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <DocumentHead
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Let us help you find what you need."
      />

      <Section className="bg-gradient-to-br from-crystal-950 via-quantum-950 to-cosmic-950 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-500/50 to-transparent" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
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

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 bg-aurora-gradient rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-neon-500/30">
              <Compass className="w-16 h-16 text-white" />
            </div>
            
            <motion.h1 
              className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-neon-300 via-electric-400 to-aurora-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              404
            </motion.h1>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Oops! Page Not Found
            </h2>
            
            <p className="text-xl text-crystal-300 max-w-2xl mx-auto leading-relaxed mb-12">
              The page you're looking for seems to have wandered off into the digital void. 
              Don't worry though - let's get you back on track!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-aurora-gradient text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-2xl shadow-neon-500/20"
                >
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center gap-2 bg-gradient-to-br from-crystal-900/40 via-quantum-900/40 to-cosmic-900/40 backdrop-blur-md border border-electric-500/20 text-white px-8 py-4 rounded-2xl font-semibold hover:border-neon-500/40 transition-all duration-300"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Go Back
                </button>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-crystal-900/40 via-quantum-900/40 to-cosmic-900/40 backdrop-blur-md border border-electric-500/20 rounded-3xl p-8 mt-16"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2">
                <Search className="w-5 h-5 text-neon-400" />
                Looking for something specific?
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Services", path: "/#services" },
                  { name: "About", path: "/about" },
                  { name: "Contact", path: "/contact" },
                  { name: "Blog", path: "/blog" }
                ].map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="block p-4 bg-crystal-900/30 backdrop-blur-sm rounded-xl border border-electric-500/10 text-center text-crystal-200 hover:text-white hover:border-neon-500/30 transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}


