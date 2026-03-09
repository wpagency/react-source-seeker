import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Calendar, User, Shield, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/types/blog";
import { StoryReveal } from "@/components/ui/interactive-story";
import { ShimmerButton } from "@/components/ui/micro-interactions";

interface BlogFeaturedPostProps {
  featuredPost: BlogPost;
}

export const BlogFeaturedPost: React.FC<BlogFeaturedPostProps> = ({ featuredPost }) => {
  // Determine if this is a security-related post
  const isSecurityPost = featuredPost.categories.some(cat => 
    ['Security', 'Privacy', 'Data Breach', 'Cybersecurity'].includes(cat)
  );

  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16">
      <StoryReveal>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center space-x-2 mb-8">
            {isSecurityPost ? (
              <div className="flex items-center space-x-2 text-red-400">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Security Alert</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2 text-green-400">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Featured Article</span>
              </div>
            )}
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 hover:border-white/20 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.categories.map((category) => (
                    <Badge key={category} variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                      {category}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-white/60 text-sm mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.slug}`}>
                  <ShimmerButton
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                    shimmerColor="rgba(255, 255, 255, 0.3)"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </ShimmerButton>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl border border-white/10 overflow-hidden">
                  <img 
                    src={featuredPost.featuredImage} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </StoryReveal>
    </section>
  );
};

