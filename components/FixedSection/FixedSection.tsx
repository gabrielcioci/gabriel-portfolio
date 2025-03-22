"use client";
import { DownloadCloudIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useContactContext } from "@/context/ContactContext";

export const FixedSection = ({ className }: { className?: string }) => {
  const { setOpen } = useContactContext();
  return (
    <div
      className={cn(
        className,
        "h-[100dvh] flex flex-col justify-center xl:fixed"
      )}>
      <div className="w-40 h-40 md:w-48 md:h-48 mb-8 border-8 border-zinc-100 dark:border-zinc-900 ring-2 ring-teal-900/20 dark:ring-lime-300 rounded-full relative overflow-hidden">
        <Image
          src="/avatar/av.png"
          alt="avatar"
          fill
        />
      </div>
      <p className="text-slate-500 dark:text-lime-200">
        404: Boring Developer Not Found
      </p>
      <h1 className="text-7xl md:text-8xl -ml-1 font-semibold font-clash uppercase text-teal-950 dark:text-white">
        Gabriel
      </h1>
      <h3 className="font-semibold text-xl text-teal-800 dark:text-slate-300">
        Software Engineer
      </h3>
      <div className="flex gap-4 mt-8 items-center">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setOpen(true)}
            className="group max-w-fit text-md flex items-center relative px-6">
            <Mail className="w-6 h-6 absolute opacity-0 -left-6 group-hover:opacity-100 bg-zinc-100 dark:bg-zinc-900 p-1 rounded group-hover:-left-3 transition-all ease-in-out" />
            Got a project?
          </Button>
          <a
            href="/Gabriel_Cioci_resume.pdf"
            target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="px-3">
              <DownloadCloudIcon className="w-4 h-4 mr-1" />
              Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
