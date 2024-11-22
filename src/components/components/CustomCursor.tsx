"use client";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -20, y: -20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="w-3 h-3 fixed z-50 pointer-events-none"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        top: 0,
        left: 0,
      }}
    >
      <div className="border-t border-l border-t-white border-l-white absolute top-0 left-0 bottom-0 right-0"></div>
      <div className="absolute top-0 left-0 bottom-0 right-0 w-0 h-0 border-solid border-r-white border-r-8 border-y-transparent border-y-8 border-l-0 transform rotate-45 translate-x-[4px]"></div>
    </div>
  );
};

export default CustomCursor;
