
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface RelatedPostsProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPost, allPosts }) => {
  // Find related posts based on shared categories
  const relatedPosts = allPosts
    .filter(post => 
      post.id !== currentPost.id && 
      post.categories.some(cat => currentPost.categories.includes(cat))
    )
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-16 pt-16 border-t border-white/10"
    >
      <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.slice(0, 2).map((category) => (
                <Badge key={category} variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                  {category}
                </Badge>
              ))}
            </div>
            
            <h4 className="text-lg font-bold text-white mb-3 line-clamp-2 leading-tight">
              {post.title}
            </h4>
            
            <p className="text-white/70 text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-xs text-white/60 mb-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readingTime} min</span>
                </div>
              </div>
            </div>
            
            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300"
            >
              Read Article
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default RelatedPosts;


