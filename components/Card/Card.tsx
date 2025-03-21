import { forwardRef } from "react";
import { CardProps } from "./types";
import { cn } from "@/lib/utils";

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, style }, ref) => {
    return (
      <div
        ref={ref}
        style={style}
        className={cn(
          "relative rounded-3xl w-full border dark:border-lime-100/5 bg-white/30 backdrop-blur dark:bg-zinc-900/10 p-6",
          className
        )}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
