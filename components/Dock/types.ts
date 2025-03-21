import { MotionValue, SpringOptions } from "framer-motion";
import { JSX, ReactNode } from "react";

export type DockIconType = {
  children: ReactNode;
  className?: string;
  isHovered: boolean;
};

export type ItemType = {
  icon?: JSX.Element;
  label: string;
  onClick?: () => void;
  href?: string;
  className?: string;
};

export type DockItemType = {
  item: ItemType;
  mouseX: MotionValue;
  spring: SpringOptions;
  distance: number;
  magnification: number;
  baseItemSize: number;
};

export type DockLabelType = {
  children: ReactNode;
  className?: string;
  isHovered: boolean;
};

export type DockType = {
  items?: ItemType[];
  className?: string;
};
