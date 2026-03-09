
import React from "react";
import Layout from "@/components/Layout";
import { DocumentHead } from "@/components/DocumentHead";
import { Section } from "@/components/ui/section";
import { CaseStudyHero } from "@/components/case-studies/CaseStudyHero";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { CaseStudyCTA } from "@/components/case-studies/CaseStudyCTA";
import { caseStudies } from "@/data/caseStudiesData";

const CaseStudies = () => {
  return (
    <Layout>
      <DocumentHead
        title="Case Studies - Client Success Stories"
        description="Explore our detailed case studies showcasing successful projects in SEO, web development, and platform migrations. See how we've helped clients achieve their digital goals."
        keywords="case studies, client success, SEO results, web development, platform migration, digital marketing"
      />

      <Section spacing="large" className="pt-32">
        <CaseStudyHero />

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>

        <CaseStudyCTA />
      </Section>
    </Layout>
  );
};

export default CaseStudies;


