import { Hero } from "@/components/home/Hero";
import { GlobalNetwork } from "@/components/home/GlobalNetwork";
import { CompanyOverview } from "@/components/home/CompanyOverview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { StoryJourney } from "@/components/home/StoryJourney";
import { SustainabilityPreview } from "@/components/home/SustainabilityPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeCTA } from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GlobalNetwork />
      <CompanyOverview />
      <ServicesPreview />
      <StoryJourney />
      <SustainabilityPreview />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
