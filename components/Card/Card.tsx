import { CardProps } from "./type";
import { cn } from "@/lib/utils";

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
      "relative rounded-3xl w-full border dark:border-lime-100/5 bg-white/30 backdrop-blur dark:bg-zinc-900/10 p-6",
        className
      )}>
      {children}
    </div>
  );
};

export default Card;
