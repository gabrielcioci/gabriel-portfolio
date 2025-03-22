"use client";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";
import { CustomIcon } from "../CustomIcon";
import { arsenalData } from "@/utils/arsenal";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export const ArsenalDrawer = () => {
  const [inView, ref] = useInView<HTMLButtonElement>();
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="text"
          ref={ref}
          className={cn(
            "mt-4 w-fit px-0 text-md fade-in-section",
            inView && "is-visible"
          )}
          style={{transitionDelay: "1s"}}>
          <CodeIcon className="w-4 h-4 mr-2" />
          See my full arsenal
        </Button>
      </DrawerTrigger>
      <DrawerTitle className="sr-only">Full Arsenal</DrawerTitle>
      <DrawerContent className="bg-slate-100 dark:bg-zinc-900/10 backdrop-blur">
        <div className="container px-8 md:px-0 pt-12 pb-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 ">
            {Object.keys(arsenalData).map((key) => (
              <div
                key={key}
                className="justify-start">
                <h3 className="text-xl text-teal-950 dark:text-white font-bold">
                  {key}
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="mt-4 flex flex-col gap-2">
                    {arsenalData[key].map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center gap-1">
                        <CustomIcon
                          svg={item.icon}
                          className="w-4 h-4 text-lime-500 dark:text-lime-400"
                        />
                        <h4 className="dark:text-slate-400 text-slate-600 text-sm font-semibold">
                          {item.name}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs mt-12 text-slate-400 dark:text-slate-600">
            *Some micro frameworks are not included
          </p>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
