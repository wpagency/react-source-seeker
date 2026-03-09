import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tag, AlertTriangle, CheckCircle, Info, Shield } from 'lucide-react';
import type { BlogPost } from '@/types/blog';
import { StoryReveal } from '@/components/ui/interactive-story';

interface BlogPostContentProps {
  post: BlogPost;
}

export const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
  // Function to process markdown-like content with custom formatting
  const processContent = (content: string) => {
    if (!content) return null;
    
    // Split content by sections (# headings)
    const sections = content.split(/(?=^# )/gm);
    
    return sections.map((section, index) => {
      // Process headings
      let processedSection = section.replace(/^# (.*$)/gm, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">$1</h2>');
      processedSection = processedSection.replace(/^## (.*$)/gm, '<h3 class="text-xl font-bold text-white mt-6 mb-3">$1</h3>');
      processedSection = processedSection.replace(/^### (.*$)/gm, '<h4 class="text-lg font-bold text-white mt-5 mb-2">$1</h4>');
      
      // Process lists
      processedSection = processedSection.replace(/^\* (.*$)/gm, '<li class="ml-6 mb-2 text-white/80">$1</li>');
      processedSection = processedSection.replace(/^- (.*$)/gm, '<li class="ml-6 mb-2 text-white/80">$1</li>');
      processedSection = processedSection.replace(/^• (.*$)/gm, '<li class="ml-6 mb-2 text-white/80">$1</li>');
      
      // Wrap lists
      processedSection = processedSection.replace(/<li class="ml-6 mb-2 text-white\/80">(.*?)<\/li>(?:\s*<li class="ml-6 mb-2 text-white\/80">.*?<\/li>)*/gs, 
        '<ul class="list-disc mb-6">$&</ul>');
      
      // Process blockquotes
      processedSection = processedSection.replace(/^> (.*$)/gm, 
        '<blockquote class="border-l-4 border-blue-400 pl-4 py-2 my-4 text-white/80 italic">$1</blockquote>');
      
      // Process callout boxes
      processedSection = processedSection.replace(/\[!NOTE\](.*?)(?=\[!|$)/gs, (match, content) => {
        return `<div class="flex p-4 mb-6 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <div class="text-blue-400 mr-3 flex-shrink-0 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <div class="text-white/80">${content.trim()}</div>
        </div>`;
      });
      
      processedSection = processedSection.replace(/\[!WARNING\](.*?)(?=\[!|$)/gs, (match, content) => {
        return `<div class="flex p-4 mb-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
          <div class="text-yellow-400 mr-3 flex-shrink-0 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <div class="text-white/80">${content.trim()}</div>
        </div>`;
      });
      
      processedSection = processedSection.replace(/\[!SECURITY\](.*?)(?=\[!|$)/gs, (match, content) => {
        return `<div class="flex p-4 mb-6 bg-green-500/10 border border-green-500/30 rounded-lg">
          <div class="text-green-400 mr-3 flex-shrink-0 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <div class="text-white/80">${content.trim()}</div>
        </div>`;
      });
      
      processedSection = processedSection.replace(/\[!TIP\](.*?)(?=\[!|$)/gs, (match, content) => {
        return `<div class="flex p-4 mb-6 bg-purple-500/10 border border-purple-500/30 rounded-lg">
          <div class="text-purple-400 mr-3 flex-shrink-0 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <div class="text-white/80">${content.trim()}</div>
        </div>`;
      });
      
      // Process paragraphs (any line that's not already processed)
      processedSection = processedSection.replace(/^(?!<[h|u|l|b|d])(.*$)/gm, (match) => {
        if (match.trim() === '') return '';
        return `<p class="text-white/80 leading-relaxed mb-4">${match}</p>`;
      });
      
      // Process bold text
      processedSection = processedSection.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
      
      // Process italic text
      processedSection = processedSection.replace(/\*(.*?)\*/g, '<em class="text-white/90 italic">$1</em>');
      
      return (
        <StoryReveal key={index} delay={index * 0.1}>
          <div dangerouslySetInnerHTML={{ __html: processedSection }} />
        </StoryReveal>
      );
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="prose prose-lg prose-invert max-w-none blog-content"
      >
        {post.content ? (
          <div className="blog-content">
            {processContent(post.content)}
          </div>
        ) : (
          <>
            <p className="text-xl text-white/80 leading-relaxed">
              {post.excerpt}
            </p>
            <p>
              This is placeholder content for the article. In a real-world implementation, 
              this would be replaced with the full content of the blog post.
            </p>
            <h2>Key Points</h2>
            <ul>
              <li>First important point about {post.title.split(':')[0]}</li>
              <li>Second key consideration for implementation</li>
              <li>Statistics and data supporting the main argument</li>
              <li>Practical steps for readers to take</li>
            </ul>
            <p>
              The full implementation of this article would include detailed explanations, 
              examples, case studies, and actionable advice related to the topic.
            </p>
          </>
        )}
      </motion.div>
      
      {post.tags && post.tags.length > 0 && (
        <div className="mt-16 pt-8 border-t border-white/10">
          <h3 className="text-xl text-white mb-6">Related Topics</h3>
          <div className="flex flex-wrap gap-3">
            {post.tags.map(tag => (
              <Link 
                key={tag} 
                to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm bg-white/10 text-white/90 px-4 py-2 rounded-full hover:bg-white/20 transition-colors border border-white/20 flex items-center"
              >
                <Tag className="w-3 h-3 inline-block mr-1" />
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

