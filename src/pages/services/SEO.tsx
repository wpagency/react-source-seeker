
import React from "react";
import { DocumentHead } from "@/components/DocumentHead";
import { ReimaginedServiceLayout } from "@/components/ui/reimagined-service-layout";
import { TrendingUp, Search, Target, BarChart, Globe, Award } from "lucide-react";
import Layout from "@/components/Layout";

const SEOPage = () => {
  const benefits = [
    {
      icon: <Search className="w-8 h-8 text-blue-400" />,
      title: "Dominant Rankings",
      description: "We don't just improve your rankings - we make you the authority in your industry. First-page positions for high-value keywords that drive qualified traffic."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Quality Traffic",
      description: "More visitors isn't enough - you need the right visitors. We attract prospects who are ready to buy, not just browse."
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-400" />,
      title: "Measurable ROI",
      description: "Every SEO investment is tracked and measured. Clear reporting shows exactly how organic traffic translates to revenue growth."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Audit",
      description: "Comprehensive analysis of your current SEO performance and opportunities"
    },
    {
      number: "2",
      title: "Strategy",
      description: "Custom SEO roadmap targeting your most valuable keywords and markets"
    },
    {
      number: "3",
      title: "Optimize",
      description: "Technical improvements, content creation, and authority building"
    },
    {
      number: "4",
      title: "Dominate",
      description: "Continuous optimization to maintain and expand your search dominance"
    }
  ];

  const results = [
    { value: "250%", label: "Traffic Increase" },
    { value: "85%", label: "First Page Rankings" },
    { value: "180%", label: "Lead Generation Boost" },
    { value: "95%", label: "Client Retention Rate" }
  ];

  const testimonial = {
    content: "Our organic traffic has increased by 400% in just 8 months. We're now ranking #1 for our most important keywords and generating more leads than ever before. The ROI has been incredible.",
    author: "James Wilson",
    role: "Marketing Director",
    company: "Professional Legal Services"
  };

  return (
    <Layout showFooter={true} showNavbar={true}>
      <DocumentHead
        title="SEO Services - Dominate Search Results & Drive Quality Traffic"
        description="Strategic SEO that delivers measurable results. Higher rankings, more qualified traffic, and increased revenue from organic search."
      />
      <ReimaginedServiceLayout
        title="SEO That Drives Revenue"
        subtitle="Dominate Search Results in Your Industry"
        description="We don't just improve rankings - we transform your online visibility into a revenue-generating machine that works 24/7 to attract your ideal customers."
        heroMetric="250%"
        heroMetricLabel="Average Traffic Increase"
        icon={<TrendingUp className="w-10 h-10 text-white" />}
        
        problemTitle="Your Competitors Are Stealing Your Customers"
        problemDescription="Every day potential customers search for your services and find your competitors instead. Poor search rankings mean lost revenue, while your competition captures the market share that should be yours."
        
        solutionTitle="Become the Authority in Your Space"
        solutionDescription="We position you as the go-to expert in your industry through strategic SEO. When people search for what you offer, they find you first - consistently, predictably, and profitably."
        
        benefits={benefits}
        processSteps={processSteps}
        results={results}
        testimonial={testimonial}
        
        ctaTitle="Ready to Dominate Your Market?"
        ctaDescription="Let's make your website the first thing prospects see when they search for your services. Stop losing customers to competitors with better SEO."
      />
    </Layout>
  );
};

export default SEOPage;


