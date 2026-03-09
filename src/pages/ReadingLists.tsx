
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DocumentHead } from '@/components/DocumentHead';
import { Section } from '@/components/ui/section';
import Layout from '@/components/Layout';
import { useReadingLists } from '@/hooks/useReadingLists';
import { blogPosts } from '@/data/blogData';
import { List, Calendar, Eye, EyeOff, BookOpen } from 'lucide-react';
import ReadingListManager from '@/components/blog/ReadingListManager';
import BackToTop from '@/components/ui/BackToTop';

export default function ReadingLists() {
  const { readingLists } = useReadingLists();

  const getPostById = (postId: string) => {
    return blogPosts.find(post => post.id === postId);
  };

  return (
    <Layout>
      <DocumentHead
        title="Reading Lists - Source Seeker Blog"
        description="Organize and manage your favorite articles with custom reading lists."
      />

      {/* Hero Section */}
      <Section spacing="large" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08)_0%,transparent_70%)]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <List className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Reading
            <span className="block text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text">
              Lists
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Organize your favorite articles into custom collections for easy access and focused reading.
          </p>
          
          <ReadingListManager />
        </motion.div>
      </Section>

      {/* Reading Lists */}
      <Section className="bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto">
          {readingLists.length > 0 ? (
            <div className="space-y-12">
              {readingLists.map((list, index) => {
                const listPosts = list.posts
                  .map(postId => getPostById(postId))
                  .filter(Boolean);

                return (
                  <motion.div
                    key={list.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h2 className="text-2xl font-bold text-white">{list.name}</h2>
                          {list.isPublic ? (
                            <Eye className="w-5 h-5 text-green-400" />
                          ) : (
                            <EyeOff className="w-5 h-5 text-white/40" />
                          )}
                        </div>
                        {list.description && (
                          <p className="text-white/70 mb-2">{list.description}</p>
                        )}
                        <div className="flex items-center space-x-4 text-sm text-white/50">
                          <span>{listPosts.length} articles</span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>Updated {new Date(list.updatedAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {listPosts.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {listPosts.map((post) => {
                          if (!post) return null;
                          
                          return (
                            <div
                              key={post.id}
                              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors"
                            >
                              <div className="aspect-video bg-gradient-to-br from-green-500/20 to-blue-500/20 overflow-hidden">
                                <img 
                                  src={post.featuredImage} 
                                  alt={post.title}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="p-4">
                                <h3 className="font-medium text-white mb-2 line-clamp-2">
                                  <Link 
                                    to={`/blog/${post.slug}`}
                                    className="hover:text-green-300 transition-colors"
                                  >
                                    {post.title}
                                  </Link>
                                </h3>
                                <p className="text-sm text-white/60 line-clamp-2 mb-3">
                                  {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-xs text-white/40">
                                  <span>{post.author}</span>
                                  <span>{post.readingTime} min read</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <BookOpen className="w-12 h-12 text-white/40 mx-auto mb-3" />
                        <p className="text-white/60">This reading list is empty.</p>
                        <p className="text-sm text-white/40">Add articles to get started.</p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <List className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No Reading Lists Yet</h3>
              <p className="text-white/60 mb-6">Create your first reading list to organize your favorite articles.</p>
              <ReadingListManager />
            </motion.div>
          )}
        </div>
      </Section>

      <BackToTop />
    </Layout>
  );
}


