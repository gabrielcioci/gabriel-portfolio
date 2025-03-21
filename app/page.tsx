import { ContactDrawer } from "@/components/ContactDrawer/ContactDrawer";
import { DescriptionSection } from "@/components/DescriptionSection/DescriptionSection";
import { ExperienceSection } from "@/components/ExperienceSection/ExperienceSection";
import { FixedSection } from "@/components/FixedSection/FixedSection";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { MouseSpotlight } from "@/components/MouseSpotlight/MouseSpotlight";
import { TestimonialSection } from "@/components/TestimonialSection/TestimonialSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <MouseSpotlight />
      <div className="container mx-auto p-6 relative xl:flex w-full text-white z-10">
        <FixedSection className="xl:w-2/6" />
        <div className="xl:ml-auto xl:w-3/6 gap-48 flex pb-[10vh] xl:pt-[40vh] xl:pb-[20vh] flex-col items-center">
          <DescriptionSection />
          <ExperienceSection />
          <TestimonialSection />
          <AboutSection />
          <ContactDrawer />
        </div>
      </div>
    </div>
  );
}
