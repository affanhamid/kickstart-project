"use client";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState([-20, -20]);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos([e.pageY, e.pageX]);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });
  return (
    <div
      className="w-3 h-3 absolute z-50 pointer-events-none"
      style={{ top: pos[0], left: pos[1] }}
    >
      <div className="border-t border-l border-t-white border-l-white absolute top-0 left-0 bottom-0 right-0"></div>
      <div className="absolute top-0 left-0 bottom-0 right-0 w-0 h-0 border-solid border-r-white border-r-8 border-y-transparent border-y-8 border-l-0 transform rotate-45 translate-x-[4px]"></div>
    </div>
  );
};

export default CustomCursor;
