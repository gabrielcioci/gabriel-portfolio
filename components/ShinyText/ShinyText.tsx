import { cn } from "@/lib/utils";
import { ShinyTextProps } from "./types";

export const ShinyText = ({ text, className }: ShinyTextProps) => {
  return (
    <div
      className={cn("bg-clip-text inline-block animate-shine", className)}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>
      {text}
    </div>
  );
};
