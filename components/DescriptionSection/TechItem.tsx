import useInView from "@/hooks/useInView";
import { TechItemType } from "./types";
import { cn } from "@/lib/utils";

export const TechItem = ({ label, icon }: TechItemType) => {
  const [inView, ref] = useInView<HTMLDivElement>();

  return (
    <div
      key={label}
      ref={ref}
      className={cn(
        "py-2 px-4 flex items-center w-fit gap-2 rounded-full border border-zinc-200 bg-white/50 dark:border-lime-100/10 dark:bg-zinc-800/30 backdrop-blur-md fade-in-section",
        inView && "is-visible"
      )}
      style={{transitionDelay: `${label.length * 0.05}s`}}>
      {icon}
      <p className="text-md text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
};
