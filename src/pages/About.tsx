
import React from "react";
import { DocumentHead } from "@/components/DocumentHead";
import Layout from "@/components/Layout";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutCTA } from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <DocumentHead
        title="About Source Seeker.space - 15 Years of Digital Excellence"
        description="Learn about our journey as a distributed team of digital specialists, delivering exceptional web solutions for 15 years through global collaboration and innovation."
        keywords="digital agency, web development, distributed team, global collaboration, 15 years experience"
        canonicalUrl="https://example.com.space/about"
      />

      <Layout>
        <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen pt-20">
          <AboutHero />
          <AboutStory />
          <AboutValues />
          <AboutCTA />
        </main>
      </Layout>
    </>
  );
}


