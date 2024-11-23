"use client";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserTie, FaSchool } from "react-icons/fa";
import { BsPersonCheckFill } from "react-icons/bs";
import { FloatingDock } from "../ui/floating-dock";
import { motion } from "framer-motion";
import { navbarVariants } from "@/utils/animations";

export const Navbar = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <AiOutlineHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "For Parents",
      icon: (
        <FaUserTie className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/parents",
    },
    {
      title: "For Academies",
      icon: (
        <FaSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/academies",
    },
    {
      title: "Apply to be a Tutor",
      icon: (
        <BsPersonCheckFill className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/apply",
    },
  ];

  return (
    <motion.nav
      className="absolute z-30 bottom-0 w-screen pb-[20px] flex justify-center"
      variants={navbarVariants}
      initial="initial"
      animate="animate"
    >
      <FloatingDock items={links} />
    </motion.nav>
  );
};
