
import React from "react";
import { DocumentHead } from "@/components/DocumentHead";
import UnifiedNavbar from "@/components/layout/navbar/UnifiedNavbar";
import { Footer } from "@/components/layout/Footer";
import { MinimalPortfolioHero } from "@/components/portfolio/MinimalPortfolioHero";
import { PortfolioServiceCards } from "@/components/portfolio/PortfolioServiceCards";
import { TransformationSection } from "@/components/portfolio/TransformationSection";
import { TimelineSection } from "@/components/portfolio/TimelineSection";
import { PortfolioCTA } from "@/components/portfolio/PortfolioCTA";
import { transformationCards, timelineProjects } from "@/data/portfolioData";

const Portfolio = () => {
  return (
    <>
      <DocumentHead 
        title="Our Portfolio - Success Stories"
        description="Explore our portfolio of successful projects including e-commerce platforms, web applications, mobile apps, and digital solutions that drive real results."
        keywords="portfolio, case studies, web development, app development, digital projects, Source Seeker, success stories"
        ogTitle="Portfolio | Source Seeker.space - Success Stories That Inspire"
        ogDescription="Discover our award-winning projects and the transformative results we've delivered for clients across industries."
        structuredData={{
          "@type": "CreativeWork",
          "name": "Source Seeker.space Portfolio",
          "creator": {
            "@type": "Organization",
            "name": "Source Seeker.space"
          },
          "description": "Portfolio showcasing successful digital projects and solutions"
        }}
      />
      
      <div className="min-h-screen bg-slate-950">
        <UnifiedNavbar />
        
        <MinimalPortfolioHero />
        
        <PortfolioServiceCards />
        
        <TransformationSection transformationCards={transformationCards} />
        
        <TimelineSection timelineProjects={timelineProjects} />

        <PortfolioCTA />

        <Footer />
      </div>
    </>
  );
};

export default Portfolio;


