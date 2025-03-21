"use client";
import { experience } from "@/utils/experience";
import { ExperienceItem } from "./ExperienceItem";
import { Accordion } from "../ui/accordion";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export const ExperienceSection = () => {
  const [inView, ref] = useInView<HTMLDivElement>();
  return (
    <div
      className="flex flex-col relative w-full"
      id="experience">
      <div className="absolute right-0 top-[250px] w-96 h-96 rounded-full bg-gradient-neutral opacity-20 dark:opacity-5 blur-[140px] -z-10" />
      <div
        ref={ref}
        className={cn("fade-in-section", inView && "is-visible")}>
        <h2 className="text-5xl font-medium font-clash text-teal-950 dark:text-lime-300">
          Experience
        </h2>
        <p className="mt-6 max-w-xl text-lg text-slate-500 dark:text-slate-400">
          I have collaborated with industry leaders in both startups and
          enterprises to build high-quality products. Whether building from the
          ground up or joining at key phases to ensure success, I thrive in
          dynamic environments, delivering impactful results.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible={true}
        ref={ref}
        className="mt-6 z-5">
        {experience.map((item) => (
          <ExperienceItem
            key={item.id}
            item={item}
          />
        ))}
      </Accordion>
    </div>
  );
};
