import { LanguageGroupProps } from "./types";
import { Badge } from "../ui/badge";
import { languages } from "@/utils/languages";
import useInView from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export const Languages = () => {
  const [inView, ref] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("mt-16 fade-in-section", inView && "is-visible")}>
      <h3 className="text-3xl font-medium text-teal-950 dark:text-white">
        Communication
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-6 gap-y-8">
        {Object.keys(languages).map((key: keyof LanguageGroupProps) => (
          <div key={key}>
            <h3 className="text-xl font-semibold text-teal-800 capitalize dark:text-white/80 mb-4">
              {key}
            </h3>
            {languages[key].map((lang) => (
              <div
                key={lang.name}
                className="flex items-center mb-2">
                <p className="text-slate-500 dark:text-slate-400">
                  {lang.name}
                </p>
                {lang.level && (
                  <Badge className="ml-2 px-2 text-xs bg-lime-200 border border-lime-300 dark:border-none dark:bg-lime-950 text-teal-900 pointer-events-none dark:text-lime-300 shadow-none">
                    {lang.level}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
