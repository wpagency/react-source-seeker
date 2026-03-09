
import React from "react";

// Blog post interface
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  excerpt: string;
  categories: string[];
  featuredImage: string;
  isFeatured: boolean;
  readingTime: number;
  content?: string;
  tags?: string[];
}

// Blog category interface
export interface BlogCategory {
  id: string;
  title: string;
  description: string;
  icon: React.FC<{ className?: string; size?: number }>;
  count: number;
}


