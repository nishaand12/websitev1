import React from 'react';
import { cn } from "@/lib/utils";

export const GridBackground = ({
  className = "",
  children,
}) => {
  return (
    <div className={cn("h-screen w-full bg-black bg-dot-white/[0.2] relative flex items-center justify-center", className)}>
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
};