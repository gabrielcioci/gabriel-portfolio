"use client";
import { testimonials } from "@/utils/testimonials";
import { TestimonialItem } from "./TestimonialItem";
import { Button } from "../ui/button";
import LinkedInSVG from "@/public/icons/linkedin.svg";
import Link from "next/link";
import AnimatedText from "../AnimatedText/AnimatedText";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const firstColumnItems = testimonials.filter((_, index) => index % 2 === 0);
const secondColumnItems = testimonials.filter((_, index) => index % 2 === 1);

export const TestimonialSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { once: true, margin: "0px 0px -15%" });
  const secondColumnDelay = 0.5;
  return (
    <div
      className="flex flex-col w-full relative"
      id="testimonials">
      <div className="absolute right-1/3 top-1/4 w-96 h-96 rounded-full bg-gradient-blue opacity-10 dark:opacity-5 blur-[140px] -z-10" />
      <AnimatedText
        text="People I've worked with"
        className="text-5xl font-medium font-clash text-teal-950 dark:text-lime-300"
      />
      <div
        ref={ref}
        className="grid grid-cols-12 md:gap-3 mt-6">
        <div className="col-span-12 md:col-span-6">
          {firstColumnItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.2,
              }}>
              <TestimonialItem item={item} />
            </motion.div>
          ))}
        </div>
        <div className="col-span-12 md:col-span-6">
          {secondColumnItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: secondColumnDelay + index * 0.2,
              }}>
              <TestimonialItem item={item} />
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 1,
        }}>
        <Link
          href="https://www.linkedin.com/in/ciocigabi/details/recommendations/"
          target="_blank"
          className="w-fit">
          <Button
            variant="text"
            className="px-0 cursor-pointer mt-4 text-md">
            <LinkedInSVG className="w-5 h-5 mr-2" /> See LinkedIn
            recommendations
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};
