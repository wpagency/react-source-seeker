
import React from "react";
import { motion } from "framer-motion";
import { TimelineProjectItem } from "./TimelineProjectItem";

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

interface CinematicTimelineProps {
  projects: TimelineProject[];
}

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

export const CinematicTimeline: React.FC<CinematicTimelineProps> = ({
  projects
}) => {
  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={timelineVariants}
    >
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50" />
      
      <div className="space-y-24">
        {projects.map((project, index) => (
          <TimelineProjectItem
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};


