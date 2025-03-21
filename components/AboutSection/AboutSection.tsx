"use client";
import AnimatedText from "../AnimatedText/AnimatedText";
import { Education } from "./Education";
import { Languages } from "./Languages";

export const AboutSection = () => {
  return (
    <div
      className="flex flex-col w-full"
      id="about">
      <AnimatedText
        text="About me"
        className="text-5xl font-medium font-clash text-teal-950 dark:text-lime-300"
      />
      <AnimatedText
        delay={300}
        text="I'm currently based in the northern part of Romania, in the
        legendary region of Transylvania! You know, the land of Dracula, where
        garlic isn't just a cooking ingredient, it's a survival tool."
        className="mt-6 max-w-xl text-lg text-slate-500 dark:text-slate-400"
      />
      <Education />
      <Languages />
    </div>
  );
};
