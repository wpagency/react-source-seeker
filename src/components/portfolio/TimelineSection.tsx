
import React from "react";
import { motion } from "framer-motion";
import { CinematicTimeline } from "./CinematicTimeline";

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

interface TimelineSectionProps {
  timelineProjects: TimelineProject[];
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  timelineProjects
}) => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Journey of Success
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Follow our timeline of transformative projects that have redefined 
            industries and created lasting impact.
          </p>
        </motion.div>
        
        <CinematicTimeline projects={timelineProjects} />
      </div>
    </section>
  );
};


