import { Hero } from "@/components/home/Hero";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { UnrivaledExpertise } from "@/components/home/UnrivaledExpertise";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { GlobalNetwork } from "@/components/home/GlobalNetwork";
import { SustainabilityPreview } from "@/components/home/SustainabilityPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeCTA } from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <UnrivaledExpertise />
      <WhatWeDo />
      <div id="terminal-network">
        <GlobalNetwork />
      </div>
      <SustainabilityPreview />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
