"use client";
import { motion, useInView } from "framer-motion";
import { SplitTextProps } from "./type";
import { useRef } from "react";

export const SplitText = ({
  children,
  className,
  delay = 0,
}: SplitTextProps) => {
  const pRef = useRef<HTMLParagraphElement>(null);
  const isVisible = useInView(pRef, { once: true, margin: "0px 0px -15%" });
  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");
  return (
    <p
      ref={pRef}
      className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + index * 0.05 }}
          className="inline-block mr-1">
          {word}
        </motion.span>
      ))}
    </p>
  );
};
