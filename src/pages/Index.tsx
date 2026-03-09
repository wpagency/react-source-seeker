import React from "react";
import { DocumentHead } from "@/components/DocumentHead";
import { CleanModernHero } from "@/components/sections/CleanModernHero";
import { StreamlinedServices } from "@/components/sections/StreamlinedServices";
import { CleanStats } from "@/components/sections/CleanStats";
import { ProcessJourneySection } from "@/components/sections/enhanced/ProcessJourneySection";
import { ImpactShowcaseSection } from "@/components/sections/enhanced/ImpactShowcaseSection";
import { CleanCTA } from "@/components/sections/CleanCTA";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { errorLogger } from "@/utils/errorLogger";
import { InteractiveStory } from "@/components/ui/interactive-story";

const Index = () => {
  React.useEffect(() => {
    try {
      // Only run if we're in the browser
      if (typeof window === 'undefined') return;
      
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Source Seeker.space",
        "description": "Digital solutions that drive real business growth. We create websites, apps, and digital experiences that transform how you connect with customers.",
        "url": "https://example.com.space",
        "logo": "https://example.com.space/logo.png",
        "foundingDate": "2008",
        "serviceType": [
          "Web Development",
          "Mobile App Development", 
          "UI/UX Design", 
          "E-commerce Solutions",
          "SEO & Digital Marketing",
          "Digital Strategy Consulting"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500",
          "bestRating": "5"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-AGENCY",
          "contactType": "customer service",
          "email": "hello@example.com.space"
        }
      };

      let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } catch (error) {
      errorLogger.log(error as Error, 'Index page structured data setup');
    }
  }, []);

  return (
    <>
      <DocumentHead
        title="Source Seeker.space - Digital Solutions That Actually Work"
        description="We build fast, conversion-focused websites and applications that drive real business growth. No fluff, just results."
        keywords="web development, mobile apps, digital solutions, business growth, web design"
        ogTitle="Source Seeker.space - Digital Solutions That Actually Work"
        ogDescription="We build fast, conversion-focused websites and applications that drive real business growth. No fluff, just results."
        canonicalUrl="https://example.com.space"
      />
      
      <Layout useStoryWrapper={false}>
        <InteractiveStory>
          <motion.div 
            className="relative w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <CleanModernHero />
            <StreamlinedServices />
            <ProcessJourneySection />
            <CleanStats />
            <ImpactShowcaseSection />
            <CleanCTA />
          </motion.div>
        </InteractiveStory>
      </Layout>
    </>
  );
};

export default Index;

