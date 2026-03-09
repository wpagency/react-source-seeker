import React, { useEffect } from "react";
import { DocumentHead } from "@/components/DocumentHead";
import { Section } from "@/components/ui/section";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { blogPosts, blogCategories } from "@/data/blogData";

export default function BlogCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [categoryId]);
  
  const category = blogCategories.find(cat => cat.id === categoryId);
  const postsInCategory = blogPosts.filter(post => 
    post.categories.includes(categoryId || '')
  );
  
  if (!category) {
    return (
      <Layout>
        <Section className="py-20">
          <div className="text-center">
            <h1 className="mb-6">Category Not Found</h1>
            <p className="mb-8">Sorry, the blog category you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn-primary">
              Back to Blog
            </Link>
          </div>
        </Section>
      </Layout>
    );
  }
  
  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  // Create the Icon element
  const CategoryIcon = category.icon;
  
  return (
    <Layout>
      <DocumentHead
        title={category.title}
        description={`Browse our collection of articles about ${category.title.toLowerCase()} - ${category.description}`}
      />

      {/* Hero Section */}
      <Section className="bg-card pt-32 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <div className="mb-6">
            <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all articles
            </Link>
          </div>
          
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CategoryIcon />
          </div>
          
          <h1 className="mb-4">{category.title}</h1>
          <p className="subtitle max-w-3xl mx-auto mb-6">
            {category.description}
          </p>
          <p className="text-muted-foreground">
            {postsInCategory.length} {postsInCategory.length === 1 ? 'article' : 'articles'}
          </p>
        </motion.div>
      </Section>
      
      {/* Articles List */}
      <Section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          {postsInCategory.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {postsInCategory.map((post, index) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
                  className="group"
                >
                  <div className="overflow-hidden rounded-xl mb-4 aspect-[16/9]">
                    <img 
                      src={post.featuredImage} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map(catId => {
                        const cat = blogCategories.find(c => c.id === catId);
                        return cat ? (
                          <Link 
                            key={catId}
                            to={`/blog/category/${catId}`}
                            className="text-xs uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded-full hover:bg-primary/20 transition-colors"
                          >
                            {cat.title}
                          </Link>
                        ) : null;
                      })}
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-2 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{post.readingTime} min read</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center">
                      <img 
                        src={post.authorAvatar || "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover mr-3"
                      />
                      <p className="text-xs">{post.author}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found in this category.</p>
            </div>
          )}
        </div>
      </Section>
    </Layout>
  );
}


