import { CSSProperties, ReactNode } from "react";

export type CardProps = {
  className?: string;
  children: ReactNode;
  mouse?: { x: number; y: number };
  style: CSSProperties;
};
