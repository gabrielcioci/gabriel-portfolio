import Image from "next/image";
import Card from "../Card/Card";
import { testimonials } from "@/utils/testimonials";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export const TestimonialItem = ({
  item,
  delay,
  index,
}: {
  item: (typeof testimonials)[number];
  delay?: number;
  index: number;
}) => {
  const [inView, ref] = useInView<HTMLDivElement>();
  return (
    <Card ref={ref} className={cn("mt-3 slide-up", inView && "is-visible")} style={{ transitionDelay: `${(delay || 0) + index * 100}ms` }}>
      <p className="text-slate-500 dark:text-slate-400">{item.text}</p>
      <div className="flex items-center mt-10">
        <div>
          <p className="font-semibold text-teal-900 dark:text-white">
            — {item.name} 
          </p>
          <p className="text-slate-500 text-xs dark:text-slate-400">
            {item.role}
          </p>
        </div>
        <div className="w-10 h-10 overflow-hidden rounded-full relative ml-4">
          <Image
            src={item.image}
            alt={item.name}
            className="object-cover"
            fill
          />
        </div>
      </div>
    </Card>
  );
};
