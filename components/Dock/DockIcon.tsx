"use client";
import { cn } from "@/lib/utils";
import { DockIconType } from "./types";

export const DockIcon = ({ children, className, isHovered }: DockIconType) => {
  return (
    <div
      className={cn(
        isHovered
          ? "text-teal-800 dark:text-lime-400"
          : "text-slate-600 dark:text-white",
        "flex items-center justify-center transition-all ease-in-out",
        className
      )}>
      {children}
    </div>
  );
};
