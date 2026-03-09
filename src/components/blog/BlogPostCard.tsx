import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Shield, AlertCircle } from 'lucide-react';
import { BlogPost as BlogPostType } from '@/types/blog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card3D } from '@/components/ui/dimensional';

interface BlogPostCardProps {
  post: BlogPostType;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  // Determine if this is a security-related post
  const isSecurityPost = post.categories.some(cat => 
    ['Security', 'Privacy', 'Data Breach', 'Cybersecurity'].includes(cat)
  );

  return (
    <Card3D
      className="h-full"
      intensity={8}
      glare={true}
    >
      <article className="group bg-gradient-to-br from-crystal-900/40 via-quantum-900/40 to-cosmic-900/40 backdrop-blur-md border border-electric-500/20 rounded-3xl overflow-hidden hover:border-neon-500/40 transition-all duration-300 h-full flex flex-col">
        {/* Featured Image */}
        <div className="relative overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Categories */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {post.categories.slice(0, 2).map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="bg-crystal-900/80 backdrop-blur-sm border-electric-500/30 text-xs text-white"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Security Badge or Featured Badge */}
          <div className="absolute top-4 right-4">
            {isSecurityPost ? (
              <Badge className="bg-red-500/80 text-white text-xs flex items-center gap-1">
                <Shield className="w-3 h-3" />
                Security Alert
              </Badge>
            ) : post.isFeatured && (
              <Badge className="bg-aurora-gradient text-white text-xs">
                Featured
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Meta Information */}
          <div className="flex items-center gap-4 mb-4 text-sm text-crystal-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime} min</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-neon-300 transition-colors">
            <Link to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-crystal-300 mb-4 line-clamp-3 leading-relaxed flex-grow">
            {post.excerpt}
          </p>

          {/* Author and Read More */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.authorAvatar} alt={post.author} />
                <AvatarFallback className="text-xs">{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">{post.author}</p>
                <p className="text-xs text-crystal-400">{post.authorRole}</p>
              </div>
            </div>

            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-neon-400 hover:text-neon-300 transition-colors group"
            >
              Read more
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    </Card3D>
  );
}

