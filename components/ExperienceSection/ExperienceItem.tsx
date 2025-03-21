"use client";
import { ExperienceItemProps } from "./types";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

export const ExperienceItem = ({ item }: ExperienceItemProps) => {
  return (
    <AccordionItem
      value={"item-" + item.id}
      className="backdrop-blur mt-4 flex cursor-pointer flex-col rounded bg-white/30 dark:bg-zinc-800/10 hover:dark:shadow-md hover:shadow hover:shadow-zinc-300/10 border border-zinc-200/50 hover:border-zinc-200/70 dark:border-lime-100/[3%] dark:hover:border-lime-100/5 px-4 transition-all">
      <AccordionTrigger className="flex items-center hover:no-underline">
        <div className="flex flex-col sm:flex-row sm:items-center w-full">
          <div className="flex items-start sm:items-center gap-2">
            <div className="min-h-10 min-w-10 w-10 h-10 p-3 flex items-center rounded-full dark:bg-zinc-900 dark:ring-zinc-800 bg-white ring-1 ring-zinc-200/50">
              {typeof item.company_logo === "string" ? (
                <div className="relative w-8 h-8">
                  <Image
                    src={item.company_logo}
                    alt={item.company}
                    className="object-contain"
                    fill
                  />
                </div>
              ) : (
                item.company_logo
              )}
            </div>
            <div className="flex flex-col">
              <h2 className="dark:text-white text-md font-semibold text-teal-950">
                {item.role}
              </h2>
              <Link
                href={item.company_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm w-fit text-slate-400 hover:underline">
                @{item.company}
              </Link>
            </div>
          </div>
          <p className="ml-12 mr-2 mt-1 sm:mt-0 sm:ml-auto text-slate-500 dark:text-white text-xs">
            {item.start_date} — {item.end_date}
          </p>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col gap-2">
          <div>
            <h4 className="text-slate-600 dark:text-slate-200 text-sm">
              <strong>Industry:</strong> {item.industry}
            </h4>
          </div>
          <h4 className="text-slate-600 font-bold dark:text-slate-200 text-sm">
            Achievements
          </h4>
          <ul className="list-disc pl-6 space-y-1.5">
            {item?.achievements?.map((desc, idx) => (
              <li
                key={idx}
                className="text-sm text-slate-600 dark:text-slate-400">
                {desc}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 mt-1">
            {item.links?.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                target="_blank"
                className="text-sm flex items-center gap-1 text-slate-800 hover:text-lime-500 dark:text-white dark:hover:text-lime-200 transition-colors">
                <LinkIcon className="w-3 h-3" />
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center flex-wrap gap-2 mt-1">
            {item?.tech?.map((t, idx) => (
              <Badge
                className="bg-lime-200 border text-teal-950 border-lime-300 dark:border-none dark:bg-lime-950 dark:text-lime-300 pointer-events-none"
                key={idx}>
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
