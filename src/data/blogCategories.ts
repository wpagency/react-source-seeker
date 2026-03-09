
import React from "react";
import { Code, Zap, FileText, TrendingUp, Layout, ShoppingCart, Shield, BarChart } from "lucide-react";
import { BlogCategory } from "@/types/blog";

// Blog categories with icon factories
export const blogCategories: BlogCategory[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Expert guides, tutorials, and insights on modern web development practices.",
    icon: (props) => React.createElement(Code, { className: "text-primary", size: 24, ...props }),
    count: 15
  },
  {
    id: "seo-strategy",
    title: "SEO Strategy",
    description: "Data-driven approaches to improve your search visibility and drive organic traffic.",
    icon: (props) => React.createElement(TrendingUp, { className: "text-primary", size: 24, ...props }),
    count: 12
  },
  {
    id: "performance",
    title: "Performance",
    description: "Techniques to make your website lightning-fast, improving user experience.",
    icon: (props) => React.createElement(Zap, { className: "text-primary", size: 24, ...props }),
    count: 10
  },
  {
    id: "case-studies",
    title: "Case Studies",
    description: "Detailed breakdowns of our most successful client projects and results.",
    icon: (props) => React.createElement(FileText, { className: "text-primary", size: 24, ...props }),
    count: 6
  },
  {
    id: "wordpress",
    title: "WordPress",
    description: "Tips, tricks and expert guidance for the world's most popular CMS.",
    icon: (props) => React.createElement(Layout, { className: "text-primary", size: 24, ...props }),
    count: 8
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "Strategies for building and growing successful online stores.",
    icon: (props) => React.createElement(ShoppingCart, { className: "text-primary", size: 24, ...props }),
    count: 11
  },
  {
    id: "security",
    title: "Website Security",
    description: "Best practices to protect your website from vulnerabilities and attacks.",
    icon: (props) => React.createElement(Shield, { className: "text-primary", size: 24, ...props }),
    count: 7
  },
  {
    id: "business",
    title: "Business Growth",
    description: "Digital strategies to help your business scale and increase revenue.",
    icon: (props) => React.createElement(BarChart, { className: "text-primary", size: 24, ...props }),
    count: 9
  }
];


