import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Shield, AlertTriangle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { blogCategories } from '@/data/blogCategories';
import BlogPostShare from '@/components/blog/BlogPostShare';
import BookmarkButton from '@/components/blog/BookmarkButton';
import ReadingListManager from '@/components/blog/ReadingListManager';
import type { BlogPost } from '@/types/blog';
import { StoryReveal } from '@/components/ui/interactive-story';

interface BlogPostHeaderProps {
  post: BlogPost;
}

export const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ post }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Determine if this is a security-related post
  const isSecurityPost = post.categories.some(cat => 
    ['Security', 'Privacy', 'Data Breach', 'Cybersecurity'].includes(cat)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4"
    >
      <div className="mb-6 flex items-center justify-between">
        <Link to="/blog" className="inline-flex items-center text-white/60 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all articles
        </Link>
        
        <div className="flex items-center space-x-2">
          <BookmarkButton postId={post.id} />
          <ReadingListManager postId={post.id} />
          <BlogPostShare 
            title={post.title}
            url={`/blog/${post.slug}`}
            excerpt={post.excerpt}
          />
        </div>
      </div>
      
      {/* Security Alert Banner for security-related posts */}
      {isSecurityPost && (
        <StoryReveal>
          <div className="mb-8 bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Security Alert</h3>
              <p className="text-white/80 text-sm">
                This article contains important security information that may affect your online accounts or digital safety.
                Please review the recommendations carefully.
              </p>
            </div>
          </div>
        </StoryReveal>
      )}
      
      <div className="mb-6 flex items-center justify-center md:justify-start flex-wrap gap-2">
        {post.categories.map(categoryId => {
          const category = blogCategories.find(c => c.id === categoryId) || 
                          { id: categoryId, title: categoryId };
          return (
            <Link 
              key={categoryId} 
              to={`/blog/category/${category.id}`}
              className="text-xs uppercase tracking-wider bg-green-500/20 text-green-300 px-3 py-1 rounded-full hover:bg-green-500/30 transition-colors border border-green-500/30"
            >
              {category.title}
            </Link>
          );
        })}
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-normal text-center md:text-left leading-tight">
        {post.title}
      </h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 mb-8">
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={post.authorAvatar} alt={post.author} />
            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-white">{post.author}</p>
            <p className="text-sm text-white/60">{post.authorRole}</p>
          </div>
        </div>
        
        <div className="flex space-x-6">
          <div className="flex items-center text-sm text-white/60">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center text-sm text-white/60">
            <Clock className="w-4 h-4 mr-2" />
            <span>{post.readingTime} min read</span>
          </div>
          {isSecurityPost && (
            <div className="flex items-center text-sm text-red-300">
              <Shield className="w-4 h-4 mr-2" />
              <span>Security Advisory</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 mb-6 rounded-xl overflow-hidden">
        <img 
          src={post.featuredImage} 
          alt={post.title}
          className="w-full h-auto object-cover aspect-[16/9]"
        />
      </div>
    </motion.div>
  );
};

