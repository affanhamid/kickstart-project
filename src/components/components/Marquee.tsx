"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { marqueeVariants } from "@/utils/animations";

export const Marquee = ({ items }: { items: string[] }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current && containerRef.current) {
      // Calculate the width of the content and the container
      setContentWidth(marqueeRef.current.scrollWidth);
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [items]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[40px] overflow-hidden"
    >
      <motion.div
        className="absolute whitespace-nowrap flex"
        variants={marqueeVariants(contentWidth, containerWidth)}
        animate="animate"
        ref={marqueeRef}
      >
        {/* Duplicate items for seamless scrolling */}
        {[...items].map((item, index) => (
          <span key={index} className="flex items-center mx-4">
            {item}
            {index < items.length - 1 && (
              <span className="text-blue-200 px-4">✦</span>
            )}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
