
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface CaseStudyCardProps {
  study: {
    id: string;
    title: string;
    category: string;
    website: string | null;
    clientOverview: string;
    challenges: string[];
    solutions: string[];
    results: string[];
    testimonial: {
      quote: string;
      author: string;
      title: string;
    };
    icon: React.ComponentType<{ className?: string }>;
  };
  index: number;
}

export const CaseStudyCard = ({ study, index }: CaseStudyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <study.icon className="w-5 h-5 text-primary" />
                </div>
                <Badge variant="secondary">{study.category}</Badge>
              </div>
              <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
              {study.website && (
                <div className="flex items-center gap-2 text-primary">
                  <ExternalLink className="w-4 h-4" />
                  <a 
                    href={study.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {study.website}
                  </a>
                </div>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-8 p-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Client Overview</h3>
            <p className="text-muted-foreground">{study.clientOverview}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Challenges</h3>
              <ul className="space-y-2">
                {study.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Our Solutions</h3>
              <ul className="space-y-2">
                {study.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Results Achieved</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {study.results.map((result, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-950/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                  <span className="text-sm text-green-700 dark:text-green-300">{result}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Client Testimonial</h3>
            <blockquote className="italic text-muted-foreground mb-4">
              "{study.testimonial.quote}"
            </blockquote>
            <footer className="text-sm">
              <strong>{study.testimonial.author}</strong>, {study.testimonial.title}
            </footer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};


