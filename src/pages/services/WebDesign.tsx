
import React from "react";
import { DocumentHead } from "@/components/DocumentHead";
import { ReimaginedServiceLayout } from "@/components/ui/reimagined-service-layout";
import { Palette, Zap, Users, TrendingUp, Eye, Smartphone } from "lucide-react";
import Layout from "@/components/Layout";

const WebDesignPage = () => {
  const benefits = [
    {
      icon: <Eye className="w-8 h-8 text-blue-400" />,
      title: "Strategic Visual Design",
      description: "Every pixel serves a purpose. We create designs that not only look stunning but drive specific business outcomes and user actions."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: "Mobile-First Excellence",
      description: "With 60% of traffic from mobile devices, we ensure your design performs flawlessly across all screen sizes and devices."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Conversion Optimization",
      description: "Data-driven design decisions that turn visitors into customers. Every element is tested and optimized for maximum impact."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description: "Deep dive into your brand, goals, and audience to create a strategic foundation"
    },
    {
      number: "2",
      title: "Strategy",
      description: "Develop a comprehensive design strategy aligned with your business objectives"
    },
    {
      number: "3",
      title: "Design",
      description: "Create stunning, conversion-focused designs that reflect your brand perfectly"
    },
    {
      number: "4",
      title: "Optimize",
      description: "Test, refine, and perfect every element for maximum performance and impact"
    }
  ];

  const results = [
    { value: "240%", label: "Average Conversion Increase" },
    { value: "95%", label: "Client Satisfaction Rate" },
    { value: "2.1s", label: "Average Load Time" },
    { value: "98", label: "PageSpeed Score" }
  ];

  const testimonial = {
    content: "Source Seeker completely transformed our online presence. Our new website not only looks incredible but has increased our leads by 300%. The attention to detail and strategic thinking is unmatched.",
    author: "Sarah Mitchell",
    role: "CEO",
    company: "TechVision Inc"
  };

  return (
    <Layout showFooter={true} showNavbar={true}>
      <DocumentHead
        title="Professional Web Design Services - Convert Visitors Into Customers"
        description="Strategic web design that drives results. Beautiful, conversion-optimized websites that engage users and grow your business."
      />
      <ReimaginedServiceLayout
        title="Web Design That Converts"
        subtitle="Where Beauty Meets Business Results"
        description="We don't just create pretty websites. We craft strategic digital experiences that turn visitors into customers and customers into advocates."
        heroMetric="240%"
        heroMetricLabel="Average Conversion Increase"
        icon={<Palette className="w-10 h-10 text-white" />}
        
        problemTitle="Your Website Isn't Working Hard Enough"
        problemDescription="Most websites are digital brochures that look nice but don't drive business results. Visitors come, look around, and leave without taking action. Your design should be your best salesperson, working 24/7 to convert visitors into customers."
        
        solutionTitle="Strategic Design That Sells"
        solutionDescription="We create websites that combine stunning aesthetics with psychological triggers, clear user journeys, and conversion optimization. Every element is designed with intent - to guide visitors toward your business goals while creating an unforgettable brand experience."
        
        benefits={benefits}
        processSteps={processSteps}
        results={results}
        testimonial={testimonial}
        
        ctaTitle="Ready to Transform Your Online Presence?"
        ctaDescription="Let's create a website that doesn't just look amazing, but drives real business growth and connects with your audience on a deeper level."
      />
    </Layout>
  );
};

export default WebDesignPage;


