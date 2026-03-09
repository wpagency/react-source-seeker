
import React from "react";
import { DocumentHead } from "@/components/DocumentHead";
import { ReimaginedServiceLayout } from "@/components/ui/reimagined-service-layout";
import { Lightbulb, Target, Rocket, Shield, TrendingUp, Zap } from "lucide-react";
import Layout from "@/components/Layout";

const ConsultingPage = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Strategic Clarity",
      description: "Cut through the noise and confusion. We provide clear, actionable strategies that align your technology investments with business objectives."
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      title: "Accelerated Growth",
      description: "Avoid costly mistakes and delays. Our expertise helps you implement the right solutions faster, giving you a competitive advantage."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Risk Mitigation",
      description: "Protect your investments with proven strategies. We identify potential pitfalls before they become expensive problems."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Assess",
      description: "Comprehensive evaluation of your current digital landscape and challenges"
    },
    {
      number: "2",
      title: "Strategize",
      description: "Develop clear roadmaps that prioritize high-impact initiatives"
    },
    {
      number: "3",
      title: "Guide",
      description: "Hands-on support during implementation with expert guidance"
    },
    {
      number: "4",
      title: "Optimize",
      description: "Continuous improvement and adaptation as your business evolves"
    }
  ];

  const results = [
    { value: "290%", label: "ROI Improvement" },
    { value: "60%", label: "Faster Implementation" },
    { value: "85%", label: "Strategy Success Rate" },
    { value: "40%", label: "Cost Reduction" }
  ];

  const testimonial = {
    content: "Their strategic guidance saved us from making a $500K mistake and helped us choose the right technology stack. The roadmap they created became our blueprint for digital transformation success.",
    author: "Michael Chen",
    role: "CTO",
    company: "InnovateTech Solutions"
  };

  return (
    <Layout showFooter={true} showNavbar={true}>
      <DocumentHead
        title="Digital Strategy & Technology Consulting - Expert Guidance for Growth"
        description="Strategic consulting that accelerates digital transformation. Expert guidance to navigate complex technology decisions and drive business growth."
      />
      <ReimaginedServiceLayout
        title="Strategic Consulting That Delivers"
        subtitle="Expert Guidance for Digital Transformation"
        description="Navigate complex technology decisions with confidence. Our strategic consulting provides the clarity and direction you need to accelerate growth and avoid costly mistakes."
        heroMetric="290%"
        heroMetricLabel="Average ROI Improvement"
        icon={<Lightbulb className="w-10 h-10 text-white" />}
        
        problemTitle="Technology Decisions Keep You Up at Night"
        problemDescription="The digital landscape is complex and constantly changing. Wrong technology choices can cost hundreds of thousands and set you back years. You need expert guidance to navigate the options and make decisions with confidence."
        
        solutionTitle="Clear Strategy, Confident Decisions"
        solutionDescription="We bring decades of experience to help you cut through the complexity. Get strategic clarity on technology investments, digital transformation roadmaps, and implementation strategies that actually work."
        
        benefits={benefits}
        processSteps={processSteps}
        results={results}
        testimonial={testimonial}
        
        ctaTitle="Ready to Make Strategic Technology Decisions?"
        ctaDescription="Stop second-guessing your technology investments. Get expert guidance that provides clarity, reduces risk, and accelerates your digital transformation."
      />
    </Layout>
  );
};

export default ConsultingPage;


