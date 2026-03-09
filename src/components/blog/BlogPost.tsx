import React, { useEffect } from 'react';
import { DocumentHead } from '@/components/DocumentHead';
import { Section } from '@/components/ui/section';
import Layout from '@/components/Layout';
import { useParams, Link } from 'react-router-dom';
import { BlogService } from '@/services/blogService';
import ReadingProgress from '@/components/ui/ReadingProgress';
import BackToTop from '@/components/ui/BackToTop';
import { BlogPostHeader } from './BlogPostHeader';
import { BlogPostContent } from './BlogPostContent';
import { BlogPostMeta } from './BlogPostMeta';
import { Card3D } from '@/components/ui/dimensional';
import { StoryReveal } from '@/components/ui/interactive-story';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const post = slug ? BlogService.getPostBySlug(slug) : undefined;
  const allPosts = BlogService.getAllPosts();
  
  if (!post) {
    return (
      <Layout>
        <Section className="py-20">
          <div className="text-center">
            <h1 className="mb-6">Blog Post Not Found</h1>
            <p className="mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all">
              Back to Blog
            </Link>
          </div>
        </Section>
      </Layout>
    );
  }
  
  // Generate SEO metadata
  const seoDescription = BlogService.getSeoDescription(post);
  const keywords = BlogService.getKeywords(post).join(', ');
  
  // Check if this is a security-related post
  const isSecurityPost = post.categories.some(cat => 
    ['Security', 'Privacy', 'Data Breach', 'Cybersecurity'].includes(cat)
  );
  
  return (
    <Layout>
      <DocumentHead
        title={post.title}
        description={seoDescription}
        keywords={keywords}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        ogImage={post.featuredImage}
        ogType="article"
        twitterCard="summary_large_image"
      />

      <ReadingProgress />

      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-slate-950 to-slate-900 pt-32 pb-16">
        <BlogPostHeader post={post} />
      </Section>

      {/* Article Content */}
      <Section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16">
        <StoryReveal>
          <Card3D 
            className="max-w-4xl mx-auto px-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl"
            intensity={5}
            glare={true}
          >
            <BlogPostContent post={post} />
          </Card3D>
        </StoryReveal>
        <BlogPostMeta post={post} allPosts={allPosts} />
      </Section>

      <BackToTop />
    </Layout>
  );
}

