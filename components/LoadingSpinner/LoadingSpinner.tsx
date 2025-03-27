import { cn } from "../../lib/utils";
import { LoadingProps } from "./types";

export const LoadingSpinner = ({ className }: LoadingProps) => {
  return (
    <div
      className={cn("relative w-6 h-6 animate-spin", className)}
      role="status">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50">
        <circle
          className="text-gray-200"
          fill="none"
          strokeWidth="6"
          stroke="currentColor"
          cx="25"
          cy="25"
          r="20"
        />
        <path
          className={`text-gray-700`}
          fill="none"
          strokeWidth="6"
          stroke="currentColor"
          d="M 25,5 A 20,20 0 0,1 25,45"
        />
      </svg>
    </div>
  );
};
