import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DocumentHead } from "@/components/DocumentHead";
import { Section } from "@/components/ui/section";
import Layout from "@/components/Layout";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { blogPosts } from "@/data/blogPosts";
import { BookOpen, Search, Filter, Calendar, Tag, Shield, Clock } from "lucide-react";
import NewsletterSignup from "@/components/ui/NewsletterSignup";
import { BlogFeaturedPost } from "@/components/blog/BlogFeaturedPost";
import { BlogHero } from "@/components/blog/BlogHero";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StoryReveal } from "@/components/ui/interactive-story";
import { Card3D } from "@/components/ui/dimensional";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"date" | "reading-time">("date");
  const [showSecurityOnly, setShowSecurityOnly] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  // Extract categories from the categories array in each post
  const categories = Array.from(new Set(blogPosts.flatMap(post => post.categories)));

  // Check URL parameters for filters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');
    const searchParam = params.get('search');
    const securityParam = params.get('security');
    
    if (categoryParam) setSelectedCategory(categoryParam);
    if (searchParam) setSearchTerm(searchParam);
    if (securityParam === 'true') setShowSecurityOnly(true);
  }, []);

  const filteredPosts = blogPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
      
      const matchesCategory = !selectedCategory || post.categories.includes(selectedCategory);
      
      const matchesSecurity = !showSecurityOnly || post.categories.some(cat => 
        ['Security', 'Privacy', 'Data Breach', 'Cybersecurity'].includes(cat)
      );
      
      return matchesSearch && matchesCategory && matchesSecurity;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return a.readingTime - b.readingTime;
      }
    });

  const featuredPost = blogPosts.find(post => post.isFeatured) || blogPosts[0];

  return (
    <Layout>
      <DocumentHead
        title="Insights & Resources - Source Seeker Blog"
        description="Stay ahead with expert insights on web development, digital marketing, and business growth strategies from the Source Seeker team."
      />

      <BlogHero />

      {featuredPost && <BlogFeaturedPost featuredPost={featuredPost} />}

      {/* Search and Filter Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16">
        <StoryReveal>
          <div className="max-w-4xl mx-auto px-6">
            <Card3D
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8"
              intensity={5}
            >
              <div className="flex flex-col gap-6">
                {/* Search and Sort */}
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search articles, authors, or topics..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-green-400"
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant={sortBy === "date" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSortBy("date")}
                      className={sortBy === "date" ? "bg-gradient-to-r from-green-500 to-blue-600" : "border-white/20 text-white hover:bg-white/5"}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Latest
                    </Button>
                    <Button
                      variant={sortBy === "reading-time" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSortBy("reading-time")}
                      className={sortBy === "reading-time" ? "bg-gradient-to-r from-green-500 to-blue-600" : "border-white/20 text-white hover:bg-white/5"}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Quick Read
                    </Button>
                    <Button
                      variant={showSecurityOnly ? "default" : "outline"}
                      size="sm"
                      onClick={() => setShowSecurityOnly(!showSecurityOnly)}
                      className={showSecurityOnly ? "bg-gradient-to-r from-red-500 to-orange-600" : "border-white/20 text-white hover:bg-white/5"}
                    >
                      <Shield className="w-4 h-4 mr-2" />
                      Security
                    </Button>
                  </div>
                </div>
                
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedCategory === null ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(null)}
                    className={selectedCategory === null ? "bg-gradient-to-r from-green-500 to-blue-600" : "border-white/20 text-white hover:bg-white/5"}
                  >
                    All Categories
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category ? "bg-gradient-to-r from-green-500 to-blue-600" : "border-white/20 text-white hover:bg-white/5"}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </Card3D>
          </div>
        </StoryReveal>
      </section>

      {/* Blog Posts */}
      <Section className="bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="space-y-12">
              <StoryReveal>
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {searchTerm || selectedCategory || showSecurityOnly ? 'Search Results' : 'Latest Articles'}
                  </h2>
                  <p className="text-white/70 text-lg">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
                    {selectedCategory && ` in ${selectedCategory}`}
                    {showSecurityOnly && ' related to security'}
                  </p>
                </div>
              </StoryReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.filter(post => post.id !== featuredPost?.id).map((post, index) => (
                  <StoryReveal key={post.id} delay={index * 0.1}>
                    <BlogPostCard post={post} />
                  </StoryReveal>
                ))}
              </div>
            </div>
          ) : (
            <StoryReveal>
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-white/40 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-white/60 mb-6">Try adjusting your search or filter criteria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                    setShowSecurityOnly(false);
                  }}
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Reset Filters
                </Button>
              </div>
            </StoryReveal>
          )}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <NewsletterSignup />
      </Section>
    </Layout>
  );
}

