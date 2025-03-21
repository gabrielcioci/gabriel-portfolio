"use client";

import { motion, SpringOptions, useMotionValue } from "framer-motion";
import { DockItem } from "./DockItem";
import { DockType, ItemType } from "./types";
import {
  CodeXmlIcon,
  GitPullRequestIcon,
  MailIcon,
  MoonIcon,
  ScrollTextIcon,
  SunIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import LinkedInSVG from "@/public/icons/linkedin.svg";
import GithubSVG from "@/public/icons/github.svg";
import Link from "next/link";
import { useContactContext } from "@/context/ContactContext";
import { useEffect, useState } from "react";
import useMobileScreen from "@/hooks/useMobileScreen";

export const Dock = ({ items, className }: DockType) => {
  const mouseX = useMotionValue(Infinity);
  const { resolvedTheme, setTheme } = useTheme();
  const { setOpen } = useContactContext();
  const [mounted, setMounted] = useState(false);

  const isMobile = useMobileScreen();

  const spring: SpringOptions = { mass: 0.1, stiffness: 150, damping: 12 };
  const magnification = isMobile ? 40 : 70;
  const distance = 200;
  const panelHeight = isMobile ? 52 : 64;
  const baseItemSize = isMobile ? 32 : 48;

  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();

  const iconClass = "w-5 h-5";

  const isLightTheme = resolvedTheme === "light";

  const dockItems: ItemType[] = [
    {
      icon: <CodeXmlIcon className={iconClass} />,
      label: "Tech Stack",
      onClick: () => router.push("/#techstack"),
    },
    {
      icon: <GitPullRequestIcon className={iconClass} />,
      label: "Work Experience",
      onClick: () => router.push("/#experience"),
    },
    {
      icon: <MailIcon className={iconClass} />,
      label: "Contact",
      onClick: () => setOpen(true),
    },
    {
      icon: <ScrollTextIcon className={iconClass} />,
      label: "About me",
      onClick: () => router.push("/#about"),
    },
    {
      icon: <LinkedInSVG className={iconClass} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ciocigabi/",
    },
    {
      icon: <GithubSVG className={iconClass} />,
      label: "GitHub",
      href: "https://github.com/gabrielcioci/",
    },
    {
      icon: mounted ? (
        isLightTheme ? (
          <MoonIcon className={iconClass} />
        ) : (
          <SunIcon className={iconClass} />
        )
      ) : undefined,
      label: isLightTheme ? "Dark Mode" : "Light Mode",
      onClick: () => setTheme(isLightTheme ? "dark" : "light"),
    },
  ];

  const itemsToRender = items ?? dockItems;

  return (
    <motion.div
      onMouseMove={({ pageX }) => {
        mouseX.set(pageX);
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
      }}
      className={cn(
        "fixed z-[15] bottom-4 dark:bg-zinc-900/70 bg-zinc-100/70 backdrop-blur left-1/2 transform -translate-x-1/2 flex items-end w-fit gap-4 rounded-full border-zinc-200 dark:border-lime-100/10 border pb-2 px-4",
        className
      )}
      style={{ height: panelHeight }}
      role="toolbar"
      aria-label="Application dock">
      {itemsToRender.map((item, index) =>
        item.href ? (
          <Link
            href={item.href}
            target="_blank"
            key={index}>
            <DockItem
              item={item}
              mouseX={mouseX}
              spring={spring}
              distance={distance}
              magnification={magnification}
              baseItemSize={baseItemSize}
            />
          </Link>
        ) : (
          <DockItem
            key={index}
            item={item}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          />
        )
      )}
    </motion.div>
  );
};
