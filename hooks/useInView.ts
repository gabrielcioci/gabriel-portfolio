import { useState, useEffect, useRef } from "react";

const useInView = <T extends HTMLElement>(threshold = 0.1) => {
  const [inView, setInView] = useState(false);
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          setInView(true);
          observerInstance.disconnect();
        }
      },
      {
        threshold, // Trigger when a specified percentage of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, [threshold]);

  return [inView, elementRef] as const;
};

export default useInView;
