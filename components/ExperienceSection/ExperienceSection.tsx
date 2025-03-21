"use client";
import { experience } from "@/utils/experience";
import { ExperienceItem } from "./ExperienceItem";
import AnimatedText from "../AnimatedText/AnimatedText";
import { SplitText } from "../SplitText/SplitText";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [experienceOpen, setExperienceOpen] = useState<number | null>(null);
  const isVisible = useInView(ref, { once: true, margin: "0px 0px -15%" });
  return (
    <div
      className="flex flex-col relative w-full"
      id="experience">
      <div className="absolute right-0 top-[250px] w-96 h-96 rounded-full bg-gradient-neutral opacity-20 dark:opacity-5 blur-[140px] -z-10" />
      <AnimatedText
        text="Experience"
        className="text-5xl font-medium font-clash text-teal-950 dark:text-lime-300"
      />
      <SplitText className="mt-6 max-w-xl text-lg text-slate-500 dark:text-slate-400">
        I have collaborated with industry leaders in both startups and
        enterprises to build high-quality products. Whether building from the
        ground up or joining at key phases to ensure success, I thrive in
        dynamic environments, delivering impactful results.
      </SplitText>
      <div
        ref={ref}
        className="mt-6 gap-4 flex flex-col">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 1 + index * 0.2,
            }}>
            <ExperienceItem
              item={item}
              isOpen={experienceOpen === item.id}
              setOpen={setExperienceOpen}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
