"use client";
import { useRef } from "react";
import { AnimatedTextProps } from "./type";
import { motion, useInView } from "framer-motion";

const AnimatedText = ({
  text,
  className,
  tag = "h2",
  delay = 100,
  ...props
}: AnimatedTextProps) => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref, { once: true, margin: "0px 0px -15%" });

  const Tag = tag;

  return (
    <Tag
      className={className}
      {...props}>
      <motion.span
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut", delay: delay / 1000 }}
        className="inline-block">
        {text}
      </motion.span>
    </Tag>
  );
};

export default AnimatedText;
