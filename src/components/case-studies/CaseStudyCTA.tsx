
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CaseStudyCTA = () => {
  return (
    <motion.div 
      className="text-center mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h2>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        Let's discuss how we can help transform your digital presence and achieve similar results for your business.
      </p>
      <Button size="lg" asChild>
        <a href="/contact">Start Your Project</a>
      </Button>
    </motion.div>
  );
};


