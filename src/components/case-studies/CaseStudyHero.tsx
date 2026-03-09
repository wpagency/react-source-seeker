
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export const CaseStudyHero = () => {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge variant="outline" className="mb-4">Success Stories</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Client <span className="text-gradient">Case Studies</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how we've helped businesses transform their digital presence with measurable results and lasting impact.
        </p>
      </motion.div>
    </div>
  );
};


