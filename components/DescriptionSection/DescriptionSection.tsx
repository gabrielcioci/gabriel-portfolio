"use client";
import { Coffee } from "lucide-react";
import { ArsenalDrawer } from "../ArsenalDrawer/ArsenalDrawer";
import ReactSVG from "@/public/icons/react.svg";
import NextSVG from "@/public/icons/nextdotjs.svg";
import JavascriptSVG from "@/public/icons/javascript.svg";
import TypescriptSVG from "@/public/icons/typescript.svg";
import NodeSVG from "@/public/icons/nodedotjs.svg";
import PostgresqlSVG from "@/public/icons/postgresql.svg";
import SassSvg from "@/public/icons/sass.svg";
import TailwingSVG from "@/public/icons/tailwindcss.svg";
import { CustomIcon } from "../CustomIcon";
import { SplitText } from "../SplitText/SplitText";
import AnimatedText from "../AnimatedText/AnimatedText";
import { motion } from "framer-motion";

export const DescriptionSection = () => {
  const iconClass = "text-lime-500/70 dark:text-lime-400";
  const icons = [
    {
      icon: (
        <CustomIcon
          svg={<ReactSVG />}
          className={iconClass}
        />
      ),
      label: "React",
    },
    {
      icon: (
        <CustomIcon
          svg={<NextSVG />}
          className={iconClass}
        />
      ),
      label: "NextJS",
    },
    {
      icon: (
        <CustomIcon
          svg={<JavascriptSVG />}
          className={iconClass}
        />
      ),
      label: "JavaScript ES6",
    },
    {
      icon: (
        <CustomIcon
          svg={<TypescriptSVG />}
          className={iconClass}
        />
      ),
      label: "TypeScript",
    },
    {
      icon: (
        <CustomIcon
          svg={<NodeSVG />}
          className={iconClass}
        />
      ),
      label: "Node",
    },
    {
      icon: (
        <CustomIcon
          svg={<PostgresqlSVG />}
          className={iconClass}
        />
      ),
      label: "PostgreSQL",
    },
    {
      icon: (
        <CustomIcon
          svg={<SassSvg />}
          className={iconClass}
        />
      ),
      label: "CSS/SASS",
    },
    {
      icon: (
        <CustomIcon
          svg={<TailwingSVG />}
          className={iconClass}
        />
      ),
      label: "Tailwind",
    },
  ];
  return (
    <div
      className="flex flex-col w-full"
      id="techstack">
      <AnimatedText
        text="What I do"
        className="text-5xl font-clash font-medium text-teal-950 dark:text-lime-300"
      />
      <SplitText className="mt-6 max-w-xl text-lg text-slate-500 dark:text-slate-400">
        I&apos;ve been coding professionally for over 6 years now and currently
        working as a Software Engineer specializing in Frontend development. But
        somehow, I also end up handling APIs, backend tasks, and business
        logic — guess I accidentally became a Full-Stack dev!
      </SplitText>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 1.5 }}>
        <p className="inline-flex mt-6 items-end sm:items-center text-lg text-slate-500 dark:text-slate-400">
          Here are few technologies that are cup of my coffee
          <Coffee className="ml-2 text-lime-500/70 dark:text-lime-300" />
        </p>
        <div className="flex flex-wrap gap-x-2 gap-y-2 sm:gap-x-10 sm:gap-y-4 sm:grid sm:grid-cols-2 mt-6 w-fit">
          {icons.map(({ icon, label }) => (
            <div
              key={label}
              className="py-2 px-4 flex items-center w-fit gap-2 rounded-full border border-zinc-200 bg-white/50 dark:border-lime-100/10 dark:bg-zinc-800/30 backdrop-blur-md">
              {icon}
              <p className="text-md text-slate-500 dark:text-slate-400">
                {label}
              </p>
            </div>
          ))}
        </div>
        <ArsenalDrawer />
      </motion.div>
    </div>
  );
};
