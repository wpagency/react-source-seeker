
import React from "react";
import { DocumentHead } from "@/components/DocumentHead";
import { ReimaginedServiceLayout } from "@/components/ui/reimagined-service-layout";
import { ShoppingCart, CreditCard, TrendingUp, Users, Package, Globe } from "lucide-react";
import Layout from "@/components/Layout";

const EcommercePage = () => {
  const benefits = [
    {
      icon: <CreditCard className="w-8 h-8 text-blue-400" />,
      title: "Conversion Optimization",
      description: "Every element of your store is designed to turn browsers into buyers. Streamlined checkout, persuasive product pages, and psychological triggers that boost sales."
    },
    {
      icon: <Package className="w-8 h-8 text-purple-400" />,
      title: "Seamless Management",
      description: "Intuitive admin panels that make managing products, orders, and customers effortless. Spend less time on admin, more time growing your business."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "Global Scalability",
      description: "Built to handle traffic spikes and international expansion. Multi-currency, multi-language support with lightning-fast performance worldwide."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Strategy",
      description: "Understanding your products, market, and customers to create a winning approach"
    },
    {
      number: "2",
      title: "Design",
      description: "Creating conversion-focused store designs that showcase your products beautifully"
    },
    {
      number: "3",
      title: "Build",
      description: "Developing your store with advanced features and seamless integrations"
    },
    {
      number: "4",
      title: "Optimize",
      description: "Continuous testing and improvement to maximize sales and performance"
    }
  ];

  const results = [
    { value: "350%", label: "Average Revenue Increase" },
    { value: "45%", label: "Higher Conversion Rate" },
    { value: "2.1s", label: "Page Load Speed" },
    { value: "99.9%", label: "Uptime Reliability" }
  ];

  const testimonial = {
    content: "Since launching our new e-commerce store, our online sales have tripled. The checkout process is so smooth, and customers love the experience. Best investment we've made.",
    author: "Maria Rodriguez",
    role: "Founder",
    company: "Bella Home Designs"
  };

  return (
    <Layout showFooter={true} showNavbar={true}>
      <DocumentHead
        title="E-commerce Development - Online Stores That Sell More"
        description="High-converting e-commerce stores built to maximize sales. Custom online shopping experiences that turn visitors into loyal customers."
      />
      <ReimaginedServiceLayout
        title="E-commerce That Sells"
        subtitle="Online Stores Built for Revenue Growth"
        description="We create e-commerce experiences that don't just look good - they sell more. Every element is optimized to turn visitors into customers and customers into repeat buyers."
        heroMetric="350%"
        heroMetricLabel="Average Revenue Increase"
        icon={<ShoppingCart className="w-10 h-10 text-white" />}
        
        problemTitle="Your Online Store Is Losing Sales"
        problemDescription="Most e-commerce sites have conversion rates under 3%. Complicated checkout processes, poor product presentation, and slow loading times are costing you sales every day. Every lost visitor is lost revenue."
        
        solutionTitle="Stores That Convert Like Crazy"
        solutionDescription="We build e-commerce experiences that turn browsers into buyers. Streamlined user journeys, persuasive product pages, and frictionless checkout processes that maximize every visitor's potential value."
        
        benefits={benefits}
        processSteps={processSteps}
        results={results}
        testimonial={testimonial}
        
        ctaTitle="Ready to Maximize Your Online Revenue?"
        ctaDescription="Let's build an e-commerce store that doesn't just showcase your products, but actively sells them 24/7 with optimized conversion rates."
      />
    </Layout>
  );
};

export default EcommercePage;


