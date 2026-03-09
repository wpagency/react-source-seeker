
import React from "react";
import { DocumentHead } from "@/components/DocumentHead";
import { ReimaginedServiceLayout } from "@/components/ui/reimagined-service-layout";
import { Users, Brain, Heart, Zap, MousePointer, Smartphone } from "lucide-react";
import Layout from "@/components/Layout";

const UXDesignPage = () => {
  const benefits = [
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: "Psychology-Driven Design",
      description: "We understand how users think, feel, and behave. Our designs tap into psychological principles to create intuitive, engaging experiences that feel natural."
    },
    {
      icon: <MousePointer className="w-8 h-8 text-purple-400" />,
      title: "Conversion-Focused UX",
      description: "Beautiful design that serves a purpose. Every interaction is crafted to guide users toward your business goals while providing genuine value."
    },
    {
      icon: <Heart className="w-8 h-8 text-green-400" />,
      title: "Emotional Connection",
      description: "We create experiences that users remember and recommend. Emotional design that builds brand loyalty and turns users into advocates."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Research",
      description: "Deep user research to understand needs, behaviors, and pain points"
    },
    {
      number: "2",
      title: "Strategy",
      description: "Strategic UX planning that aligns user needs with business goals"
    },
    {
      number: "3",
      title: "Design",
      description: "Creating intuitive, beautiful interfaces that users love to use"
    },
    {
      number: "4",
      title: "Test",
      description: "Continuous testing and refinement for optimal user experience"
    }
  ];

  const results = [
    { value: "85%", label: "User Satisfaction Increase" },
    { value: "60%", label: "Task Completion Improvement" },
    { value: "70%", label: "Error Reduction" },
    { value: "45%", label: "Faster Task Completion" }
  ];

  const testimonial = {
    content: "The UX redesign transformed our app completely. User engagement is up 300%, support tickets are down 60%, and our App Store rating jumped from 3.2 to 4.8 stars. Users finally love our product.",
    author: "Rachel Thompson",
    role: "Product Manager",
    company: "FinanceFlow App"
  };

  return (
    <Layout showFooter={true} showNavbar={true}>
      <DocumentHead
        title="UX/UI Design Services - Create Experiences Users Love"
        description="User-centered design that improves engagement, reduces friction, and drives business results. UX/UI design that users actually enjoy using."
      />
      <ReimaginedServiceLayout
        title="UX Design That Users Love"
        subtitle="Creating Experiences That Feel Effortless"
        description="We design digital experiences that users don't just use - they love. Intuitive interfaces that reduce friction, increase engagement, and turn complex tasks into delightful moments."
        heroMetric="85%"
        heroMetricLabel="User Satisfaction Increase"
        icon={<Users className="w-10 h-10 text-white" />}
        
        problemTitle="Your Users Are Struggling (And Leaving)"
        problemDescription="Confusing interfaces, complex workflows, and frustrating experiences are driving users away. Poor UX doesn't just hurt user satisfaction - it directly impacts your bottom line through reduced engagement and higher churn rates."
        
        solutionTitle="Experiences That Feel Like Magic"
        solutionDescription="We create interfaces that feel intuitive from the first click. Users accomplish their goals effortlessly, without thinking about the interface. The result? Higher engagement, better retention, and happier customers."
        
        benefits={benefits}
        processSteps={processSteps}
        results={results}
        testimonial={testimonial}
        
        ctaTitle="Ready to Transform Your User Experience?"
        ctaDescription="Let's create digital experiences that users genuinely enjoy and recommend. Stop losing users to poor UX - start delighting them instead."
      />
    </Layout>
  );
};

export default UXDesignPage;


