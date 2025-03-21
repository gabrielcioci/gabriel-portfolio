import { LanguageGroupProps } from "./type";
import { Badge } from "../ui/badge";
import { languages } from "@/utils/languages";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Languages = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(divRef, { once: true, margin: "0px 0px -15%" });
  return (
    <motion.div
      className="mt-16"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      ref={divRef}>
      <h3 className="text-3xl font-medium text-teal-950 dark:text-white">
        Communication
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-6 gap-y-8">
        {Object.keys(languages).map((key: keyof LanguageGroupProps) => (
          <div key={key}>
            <h3 className="text-xl font-semibold text-teal-800 capitalize dark:text-white/80 mb-4">
              {key}
            </h3>
            {languages[key].map((lang) => (
              <div
                key={lang.name}
                className="flex items-center mb-2">
                <p className="text-slate-500 dark:text-slate-400">
                  {lang.name}
                </p>
                {lang.level && (
                  <Badge className="ml-2 px-2 text-xs bg-lime-200 border border-lime-300 dark:border-none dark:bg-lime-950 text-teal-900 pointer-events-none dark:text-lime-300 shadow-none">
                    {lang.level}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
