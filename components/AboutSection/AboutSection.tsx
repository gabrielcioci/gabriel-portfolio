"use client";
import useInView from "@/hooks/useInView";
import { Education } from "./Education";
import { Languages } from "./Languages";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
  const [inView, ref] = useInView<HTMLDivElement>();
  return (
    <div
      className="flex flex-col w-full"
      id="about">
      <div
        ref={ref}
        className={cn("fade-in-section", inView && "is-visible")}>
        <h2 className="text-5xl font-medium font-clash text-teal-950 dark:text-lime-300">
          About me
        </h2>
        <p className="mt-6 max-w-xl text-lg text-slate-500 dark:text-slate-400">
          I&apos;m currently based in the northern part of Romania, in the
          legendary region of Transylvania! You know, the land of Dracula, where
          garlic isn&apos;t just a cooking ingredient, it&apos;s a survival
          tool.
        </p>
      </div>
      <Education />
      <Languages />
    </div>
  );
};
