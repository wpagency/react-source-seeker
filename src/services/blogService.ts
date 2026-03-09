import { blogPosts } from '@/data/blogPosts';
import { blogCategories } from '@/data/blogCategories';
import type { BlogPost, BlogCategory } from '@/types/blog';
import { calculateReadingTime, extractKeywords } from '@/utils/seoOptimizer';

export class BlogService {
  private static posts: BlogPost[] = blogPosts;
  private static categories: BlogCategory[] = blogCategories;

  // Get all posts
  static getAllPosts(): BlogPost[] {
    return this.posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  // Get post by slug
  static getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts.find(post => post.slug === slug);
  }

  // Get posts by category
  static getPostsByCategory(categorySlug: string): BlogPost[] {
    return this.posts.filter(post => 
      post.categories?.some(cat => cat.toLowerCase() === categorySlug.toLowerCase())
    ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  // Get posts by tag
  static getPostsByTag(tag: string): BlogPost[] {
    return this.posts.filter(post => 
      post.tags?.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
    ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  // Get featured posts
  static getFeaturedPosts(limit: number = 3): BlogPost[] {
    return this.posts
      .filter(post => post.isFeatured)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  }

  // Get recent posts
  static getRecentPosts(limit: number = 5): BlogPost[] {
    return this.posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  }

  // Get related posts
  static getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
    const related = this.posts.filter(post => {
      if (post.slug === currentPost.slug) return false;
      
      // Check if posts share categories or tags
      const sameCategory = currentPost.categories?.some(cat => 
        post.categories?.includes(cat)
      ) || false;
      const sharedTags = currentPost.tags?.some(tag => 
        post.tags?.includes(tag)
      ) || false;
      
      return sameCategory || sharedTags;
    });

    return related
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  }

  // Get security-related posts
  static getSecurityPosts(): BlogPost[] {
    return this.posts.filter(post => 
      post.categories.some(cat => 
        ['Security', 'Privacy', 'Data Breach', 'Cybersecurity'].includes(cat)
      )
    ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  // Search posts
  static searchPosts(query: string): BlogPost[] {
    const searchTerm = query.toLowerCase();
    return this.posts.filter(post => 
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.content?.toLowerCase().includes(searchTerm) ||
      post.tags?.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      post.categories.some(cat => cat.toLowerCase().includes(searchTerm))
    ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  // Get all categories
  static getAllCategories(): BlogCategory[] {
    return this.categories;
  }

  // Get category by id
  static getCategoryBySlug(categoryId: string): BlogCategory | undefined {
    return this.categories.find(category => category.id === categoryId);
  }

  // Get all unique tags
  static getAllTags(): string[] {
    const allTags = this.posts.reduce((tags: string[], post) => {
      if (post.tags) {
        tags.push(...post.tags);
      }
      return tags;
    }, []);

    return [...new Set(allTags)].sort();
  }

  // Get posts count by category
  static getPostsCountByCategory(): Record<string, number> {
    return this.posts.reduce((counts, post) => {
      post.categories?.forEach(category => {
        counts[category] = (counts[category] || 0) + 1;
      });
      return counts;
    }, {} as Record<string, number>);
  }

  // Get reading time estimate
  static getReadingTime(content: string): number {
    return calculateReadingTime(content);
  }

  // Get keywords for a post
  static getKeywords(post: BlogPost): string[] {
    if (post.tags && post.tags.length > 0) {
      return post.tags;
    }
    
    if (post.content) {
      return extractKeywords(post.content);
    }
    
    return post.categories;
  }

  // Get SEO-friendly description
  static getSeoDescription(post: BlogPost): string {
    // Use excerpt if available, otherwise generate from content
    if (post.excerpt) {
      return post.excerpt.length > 160 ? post.excerpt.substring(0, 157) + '...' : post.excerpt;
    }
    
    if (post.content) {
      const plainText = post.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      return plainText.length > 160 ? plainText.substring(0, 157) + '...' : plainText;
    }
    
    return `Read about ${post.title} by ${post.author} on Source Seeker.space blog.`;
  }
}

