"use client";
import { useRef, useState } from "react";
import { DockItemType } from "./types";
import { motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { DockLabel } from "./DockLabel";
import { DockIcon } from "./DockIcon";

export const DockItem = ({
  item,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}: DockItemType) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  const getItemClass = () => {
    return cn(
      "relative inline-flex items-center justify-center rounded-full transition-border ease-in-out bg-zinc-50 dark:bg-zinc-900 border shadow-md",
      isHovered
        ? "border-teal-800 dark:border-lime-400"
        : "border-slate-200 dark:border-lime-100/10",
      item.className
    );
  };

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={item.onClick ? item.onClick : undefined}
      className={getItemClass()}
      tabIndex={0}
      role="button"
      aria-haspopup="true">
      <DockIcon isHovered={isHovered}>{item.icon}</DockIcon>
      <DockLabel isHovered={isHovered}>{item.label}</DockLabel>
    </motion.div>
  );
};
