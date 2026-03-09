
import React from "react";
import { motion } from "framer-motion";
import { ThreeDCardTransformations } from "./ThreeDCardTransformations";

interface TransformationSectionProps {
  transformationCards: Array<{
    id: string;
    title: string;
    content: React.ReactNode;
  }>;
}

export const TransformationSection: React.FC<TransformationSectionProps> = ({
  transformationCards
}) => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Before & After Transformations
          </h2>
          <p className="text-xl text-white/70">
            See the dramatic improvements we deliver for our clients
          </p>
        </motion.div>
        
        <ThreeDCardTransformations items={transformationCards} />
      </div>
    </section>
  );
};


