"use client";
import { testimonials } from "@/utils/testimonials";
import { TestimonialItem } from "./TestimonialItem";
import { Button } from "../ui/button";
import LinkedInSVG from "@/public/icons/linkedin.svg";
import Link from "next/link";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const firstColumnItems = testimonials.filter((_, index) => index % 2 === 0);
const secondColumnItems = testimonials.filter((_, index) => index % 2 === 1);

export const TestimonialSection = () => {
  const [inView, ref] = useInView<HTMLDivElement>();
  const secondColumnDelay = 500;
  return (
    <div
      className="flex flex-col w-full relative"
      ref={ref}
      id="testimonials">
      <div className="absolute right-1/3 top-1/4 w-96 h-96 rounded-full bg-gradient-blue opacity-10 dark:opacity-5 blur-[140px] -z-10" />
      <h3
        className={cn(
          "text-5xl font-medium font-clash text-teal-950 dark:text-lime-300 fade-in-section",
          inView && "is-visible"
        )}>
        People I&apos;ve worked with
      </h3>
      <div className="grid grid-cols-12 md:gap-3 mt-6">
        <div className="col-span-12 md:col-span-6">
          {firstColumnItems.map((item, index) => (
            <TestimonialItem
              key={index}
              item={item}
              index={index}
            />
          ))}
        </div>
        <div className="col-span-12 md:col-span-6">
          {secondColumnItems.map((item, index) => (
            <TestimonialItem
              item={item}
              key={index}
              index={index}
              delay={secondColumnDelay}
            />
          ))}
        </div>
      </div>
      <div className={cn("fade-in-section", inView && "is-visible")}>
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
      </div>
    </div>
  );
};
