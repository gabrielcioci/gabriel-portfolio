"use client";

import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export const Education = () => {
  const [inView, ref] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="mt-16 relative">
      <div className="absolute right-0 -top-1/2 w-96 h-96 rounded-full bg-gradient-neutral opacity-20 dark:opacity-5 blur-[140px] -z-10" />
      <h3
        className={cn(
          "text-3xl font-medium text-teal-950 dark:text-white fade-in-section",
          inView && "is-visible"
        )}>
        Education
      </h3>
      <div
        className={cn(
          "p-4 animate-float rounded-lg flex items-center gap-1 bg-white/20 dark:bg-white dark:!bg-opacity-[2%] border backdrop-blur dark:border-lime-100/5 mt-8 fade-in-section",
          inView && "is-visible"
        )}>
        <div>
          <h4 className="text-lg font-medium text-teal-900 dark:text-white">
            Technical University of Cluj Napoca
          </h4>
          <p className="text-sm text-teal-950 dark:text-lime-300">
            Bachelor of Engineering - BE, Computer Science
          </p>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            2018 - 2022
          </span>
        </div>
      </div>
    </div>
  );
};
