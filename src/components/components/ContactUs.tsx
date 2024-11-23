"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { popoverVariants, contactUsVariants } from "@/utils/animations";

export const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContactInfo = () => setIsOpen(!isOpen);

  // Define custom animation variants for the popover
  return (
    <motion.div
      className="fixed z-30 bottom-4 right-4 flex flex-col items-end"
      initial="hidden"
      animate="visible"
      variants={contactUsVariants}
    >
      {/* Contact Info Sliding Div */}
      {isOpen && (
        <motion.div
          variants={popoverVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="mb-4 w-80 p-6 rounded-xl backdrop-blur-md bg-white/20 dark:bg-black/40 shadow-lg"
        >
          <h3 className="font-bold text-lg mb-2 text-white">Contact Us</h3>
          <div className="flex items-center gap-2 text-white mb-2">
            <IoMail className="text-lg" />
            <p className="text-sm">zain.mirza@kstutors.com</p>
          </div>
          <div className="flex items-center gap-2 text-white">
            <FaPhone className="text-lg" />
            <p className="text-sm">+44 7413 837007</p>
          </div>
        </motion.div>
      )}

      {/* Circular Button */}
      <button
        onClick={toggleContactInfo}
        className="w-12 h-12 rounded-full bg-black shadow-lg text-white flex items-center justify-center 
                   hover:bg-black/50 transition-all duration-200 focus:outline-none"
        aria-label="Contact Us"
      >
        <FaRegCommentDots className="text-xl" />
      </button>
    </motion.div>
  );
};
