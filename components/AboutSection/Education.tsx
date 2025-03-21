import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Education = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(divRef, { once: true, margin: "0px 0px -15%" });
  return (
    <div
      ref={divRef}
      className="mt-16 relative">
      <div className="absolute right-0 -top-1/2 w-96 h-96 rounded-full bg-gradient-neutral opacity-20 dark:opacity-5 blur-[140px] -z-10" />
      <motion.h3
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        className="text-3xl font-medium text-teal-950 dark:text-white">
        Education
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
        className="p-4 animate-float rounded-lg flex items-center gap-1 bg-white/20 dark:bg-white dark:bg-opacity-[2%] border backdrop-blur dark:border-lime-100/5 mt-8">
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
      </motion.div>
    </div>
  );
};
