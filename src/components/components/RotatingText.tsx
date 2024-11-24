"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const RotatingText = () => {
  const sentences = [
    "10 and 11+ Exam Preparation",
    "Interview Preparation",
    "Math Study Groups",
    "English Study Groups",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sentences.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div className="text-white relative h-10 overflow-hidden text-center text-xl w-[300px] my-5">
      <AnimatePresence>
        <motion.div
          key={sentences[current]}
          initial={{ y: "100%", opacity: 0 }} // Starts below
          animate={{ y: "0%", opacity: 1 }} // Moves into view
          exit={{ y: "-100%", opacity: 0 }} // Moves up and out
          transition={{ duration: 0.5 }}
          className="absolute w-full"
        >
          <p>{sentences[current]}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
