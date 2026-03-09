/**
 * SEO Optimization Utilities
 * 
 * This module provides functions to help optimize content for search engines,
 * particularly for blog posts and articles.
 */

/**
 * Generates structured data for a blog post in JSON-LD format
 */
export const generateBlogPostSchema = (post: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorRole: string;
  slug: string;
  featuredImage: string;
  categories: string[];
  tags?: string[];
  content?: string;
}) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://example.com.space';
  
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.featuredImage,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": post.authorRole
    },
    "publisher": {
      "@type": "Organization",
      "name": "Source Seeker.space",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`
    },
    "keywords": post.tags ? post.tags.join(", ") : post.categories.join(", ")
  };
};

/**
 * Generates meta tags for social sharing (Open Graph and Twitter)
 */
export const generateSocialMetaTags = (post: {
  title: string;
  excerpt: string;
  featuredImage: string;
  slug: string;
}) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://example.com.space';
  
  return {
    ogTitle: post.title,
    ogDescription: post.excerpt,
    ogImage: post.featuredImage,
    ogUrl: `${baseUrl}/blog/${post.slug}`,
    ogType: "article",
    twitterCard: "summary_large_image",
    twitterTitle: post.title,
    twitterDescription: post.excerpt,
    twitterImage: post.featuredImage
  };
};

/**
 * Extracts keywords from content for SEO optimization
 */
export const extractKeywords = (content: string): string[] => {
  if (!content) return [];
  
  // Remove HTML tags if present
  const plainText = content.replace(/<[^>]*>/g, ' ');
  
  // Split into words and clean up
  const words = plainText.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3);
  
  // Count word frequency
  const wordCounts: Record<string, number> = {};
  words.forEach(word => {
    if (!commonWords.includes(word)) {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    }
  });
  
  // Convert to array and sort by frequency
  const sortedWords = Object.entries(wordCounts)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);
  
  // Return top keywords
  return sortedWords.slice(0, 10);
};

/**
 * Generates a search-friendly URL slug from a title
 */
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

/**
 * Calculates reading time for content
 */
export const calculateReadingTime = (content: string): number => {
  if (!content) return 1;
  
  // Remove HTML tags if present
  const plainText = content.replace(/<[^>]*>/g, ' ');
  
  // Count words (average reading speed is ~200-250 words per minute)
  const words = plainText.split(/\s+/).length;
  const readingTime = Math.ceil(words / 225);
  
  return Math.max(1, readingTime); // Minimum 1 minute
};

/**
 * Optimizes headings for SEO by ensuring proper structure (H1 -> H2 -> H3)
 */
export const optimizeHeadings = (content: string): string => {
  if (!content) return '';
  
  // Ensure there's only one H1
  let h1Count = 0;
  let optimizedContent = content.replace(/<h1[^>]*>(.*?)<\/h1>/gi, (match) => {
    h1Count++;
    return h1Count === 1 ? match : match.replace(/<h1/g, '<h2').replace(/<\/h1>/g, '</h2>');
  });
  
  return optimizedContent;
};

// Common words to exclude from keyword extraction
const commonWords = [
  'the', 'and', 'that', 'have', 'for', 'not', 'with', 'you', 'this', 'but',
  'his', 'from', 'they', 'will', 'would', 'there', 'their', 'what', 'about',
  'which', 'when', 'make', 'like', 'time', 'just', 'know', 'take', 'people',
  'into', 'year', 'your', 'good', 'some', 'could', 'them', 'than', 'then',
  'look', 'only', 'come', 'over', 'think', 'also', 'back', 'after', 'work',
  'first', 'well', 'even', 'want', 'because', 'these', 'give', 'most'
];

export default {
  generateBlogPostSchema,
  generateSocialMetaTags,
  extractKeywords,
  generateSlug,
  calculateReadingTime,
  optimizeHeadings
};

