"use client";
import { motion } from "framer-motion";

const Marquee = ({ items, delay }: { items: string[]; delay: number }) => {
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          delay: delay,
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative w-full h-[40px] overflow-hidden">
      <motion.div
        className="absolute whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        <h1 className="text-xl uppercase stroke-2 stroke-[#f4955c] flex items-center">
          {items.map((item, index) => (
            <span key={index} className="flex items-center">
              {item}
              {index < items.length - 1 && (
                <span className="text-blue-200 px-4">✦</span>
              )}
            </span>
          ))}
        </h1>
      </motion.div>
    </div>
  );
};

export default Marquee;
