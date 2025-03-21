import { cn } from "@/lib/utils";
import { ReactElement } from "react";

interface CustomIconProps {
  svg: ReactElement;
  className?: string;
}

export const CustomIcon = ({ svg, className }: CustomIconProps) => {
  return <div className={cn("h-6 w-6", className)}>{svg}</div>;
};
