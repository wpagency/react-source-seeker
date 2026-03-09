
import React from 'react';
import { Link } from 'react-router-dom';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedPosts from '@/components/blog/RelatedPosts';
import type { BlogPost } from '@/types/blog';

interface BlogPostMetaProps {
  post: BlogPost;
  allPosts: BlogPost[];
}

export const BlogPostMeta: React.FC<BlogPostMetaProps> = ({ post, allPosts }) => {
  // Updated author data with generic team information
  const authorData = {
    name: post.author,
    role: post.authorRole,
    avatar: post.authorAvatar,
    bio: `Our ${post.author.toLowerCase()} brings together experts passionate about creating exceptional digital experiences and helping businesses grow through innovative solutions. We stay at the forefront of industry trends and best practices.`,
    location: "San Francisco, CA",
    joinDate: "January 2020",
    expertise: getExpertiseByTeam(post.author),
    socialLinks: {
      twitter: "https://twitter.com/Source Seeker",
      linkedin: "https://linkedin.com/company/Source Seeker",
      website: "https://example.com.space"
    },
    stats: {
      articlesWritten: getArticleCountByTeam(post.author),
      yearsExperience: 8
    }
  };

  function getExpertiseByTeam(team: string): string[] {
    switch (team) {
      case "Security Team":
        return ["Cybersecurity", "Threat Intelligence", "Data Protection", "Risk Assessment"];
      case "Design Team":
        return ["UI/UX Design", "Visual Design", "User Research", "Design Systems"];
      case "Development Team":
        return ["Web Development", "React", "Performance Optimization", "Best Practices"];
      case "Marketing Team":
        return ["SEO", "Digital Marketing", "Content Strategy", "Analytics"];
      case "AI Research Team":
        return ["Artificial Intelligence", "Machine Learning", "Tech Analysis", "Future Trends"];
      case "Threat Intelligence Team":
        return ["Threat Analysis", "Cyber Intelligence", "Security Research", "Risk Assessment"];
      default:
        return ["Web Development", "Digital Strategy", "User Experience", "Technology"];
    }
  }

  function getArticleCountByTeam(team: string): number {
    return allPosts.filter(p => p.author === team).length;
  }

  return (
    <>
      {/* Author Bio Section */}
      <div className="mt-16 pt-8 border-t border-white/10">
        <h3 className="text-2xl font-bold text-white mb-6">About the {post.author}</h3>
        <AuthorBio author={authorData} compact={true} />
      </div>
      
      <RelatedPosts currentPost={post} allPosts={allPosts} />
      
      <div className="mt-16 pt-8 border-t border-white/10">
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-xl p-8">
          <h3 className="text-xl font-medium text-white mb-4">Ready to improve your digital presence?</h3>
          <p className="text-white/70 mb-6">Let's discuss how we can help your business grow with our expert services.</p>
          <Link to="/contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium hover:shadow-lg transition-all inline-flex items-center">
            Get in touch
          </Link>
        </div>
      </div>
    </>
  );
};


