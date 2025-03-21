import { HTMLAttributes } from "react";

export interface AnimatedTextProps extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  delay?: number;
}
