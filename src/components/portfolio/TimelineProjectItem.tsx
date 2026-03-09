
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimelineProject {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  image: string;
  video?: string;
  metrics: { label: string; value: string; icon: React.ReactNode }[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface TimelineProjectItemProps {
  project: TimelineProject;
  index: number;
}

const projectVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const TimelineProjectItem: React.FC<TimelineProjectItemProps> = ({
  project,
  index
}) => {
  return (
    <motion.div
      className="relative pl-24"
      variants={projectVariants}
    >
      {/* Timeline dot */}
      <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-slate-950" />
      
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-bold text-white">{project.year}</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                {project.category}
              </span>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              {project.title}
            </h3>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-sm font-semibold text-red-400 mb-2">Challenge</h4>
                <p className="text-white/60 text-sm">{project.challenge}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Solution</h4>
                <p className="text-white/60 text-sm">{project.solution}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-green-400 mb-2">Results</h4>
                <p className="text-white/60 text-sm">{project.results}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-white/10 text-white/70 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              {project.liveUrl && (
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              )}
            </div>
          </div>
          
          <div>
            <div className="bg-white/5 rounded-xl p-6 mb-6">
              <h4 className="text-white font-semibold mb-4">Key Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                {project.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="flex justify-center mb-2 text-blue-400">
                      {metric.icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="text-xs text-white/60">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="aspect-video bg-white/5 rounded-xl flex items-center justify-center">
              <span className="text-white/40">Project Preview</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


