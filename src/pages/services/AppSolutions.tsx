
import React from "react";
import { DocumentHead } from "@/components/DocumentHead";
import { ReimaginedServiceLayout } from "@/components/ui/reimagined-service-layout";
import { Code, Zap, Shield, Rocket, Database, Cloud } from "lucide-react";
import Layout from "@/components/Layout";

const AppSolutionsPage = () => {
  const benefits = [
    {
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      title: "Scalable Architecture",
      description: "Built to grow with your business. Our applications handle increased traffic and features seamlessly as your success expands."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols protect your data and users. Compliance-ready architecture meets industry standards."
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-400" />,
      title: "Modern Technology",
      description: "Cutting-edge frameworks and cloud infrastructure ensure optimal performance, reliability, and future-proof solutions."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description: "Understanding your business challenges and defining technical requirements"
    },
    {
      number: "2",
      title: "Architecture",
      description: "Designing scalable, secure system architecture for long-term success"
    },
    {
      number: "3",
      title: "Development",
      description: "Agile development with continuous testing and client collaboration"
    },
    {
      number: "4",
      title: "Launch",
      description: "Seamless deployment with ongoing support and optimization"
    }
  ];

  const results = [
    { value: "500%", label: "Efficiency Improvement" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "60%", label: "Faster Development" },
    { value: "100%", label: "Client Retention" }
  ];

  const testimonial = {
    content: "Our custom application has revolutionized how we operate. What used to take hours now happens in minutes. The ROI was evident within the first month of launch.",
    author: "David Chen",
    role: "Operations Director",
    company: "StreamFlow Logistics"
  };

  return (
    <Layout showFooter={true} showNavbar={true}>
      <DocumentHead
        title="Custom App Development & SaaS Solutions - Built for Growth"
        description="Scalable custom applications and SaaS platforms that solve real business challenges and drive operational efficiency."
      />
      <ReimaginedServiceLayout
        title="Custom Apps That Scale"
        subtitle="Software Solutions Built for Tomorrow"
        description="We don't build generic apps. We craft intelligent software solutions that solve your unique business challenges while scaling effortlessly with your growth."
        heroMetric="500%"
        heroMetricLabel="Average Efficiency Gain"
        icon={<Code className="w-10 h-10 text-white" />}
        
        problemTitle="Off-the-Shelf Doesn't Fit Your Business"
        problemDescription="Generic software forces you to adapt your processes to fit their limitations. You end up with workarounds, inefficiencies, and frustrated teams. Your business is unique - your software should be too."
        
        solutionTitle="Custom Software That Fits Like a Glove"
        solutionDescription="We build applications that work exactly how your business operates. No compromises, no workarounds. Just powerful, intuitive software that makes your team more productive and your operations more efficient."
        
        benefits={benefits}
        processSteps={processSteps}
        results={results}
        testimonial={testimonial}
        
        ctaTitle="Ready to Build Your Competitive Advantage?"
        ctaDescription="Let's create custom software that transforms how you work and gives you the edge over competitors stuck with generic solutions."
      />
    </Layout>
  );
};

export default AppSolutionsPage;


