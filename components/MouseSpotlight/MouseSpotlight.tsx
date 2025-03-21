"use client";

import { useEffect, useState } from "react";

export const MouseSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const scrollY = window.scrollY; // Get the current scroll position
      setMousePosition({
        x: e.clientX,
        y: e.clientY + scrollY, // Adjust the mouse position with the scroll offset
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full">
      {/* Grid itself */}
      <div
        className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#6b8f3d15_1px,transparent_1px),linear-gradient(to_bottom,#6b8f3d15_1px,transparent_1px)] bg-[size:56px_56px]"
        style={{
          maskImage: `radial-gradient(ellipse 20% 15% at ${mousePosition.x}px ${mousePosition.y}px, #000 20%, transparent 100%)`,
        }}
      />
    </div>
  );
};
