"use client";
import { cn } from "@/lib/utils";
import { DockLabelType } from "./types";
import { AnimatePresence, motion } from "framer-motion";

export const DockLabel = ({
  children,
  className,
  isHovered,
}: DockLabelType) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-lime-300 dark:border-zinc-700 bg-lime-200 dark:bg-zinc-950 px-2 py-1 text-xs dark:text-white text-teal-900",
            className
          )}
          role="tooltip"
          style={{ x: "-50%" }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
