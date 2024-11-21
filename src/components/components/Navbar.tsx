"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { GoBriefcase } from "react-icons/go";
import { LuGamepad2 } from "react-icons/lu";
import { FloatingDock } from "../ui/floating-dock";

const navItems = [
  { icon: <AiOutlineHome className="w-6 h-6" />, name: "Home" },
  { icon: <AiOutlineInfoCircle className="w-6 h-6" />, name: "About Us" },
  { icon: <GoBriefcase className="w-6 h-6" />, name: "Test" },
  { icon: <LuGamepad2 className="w-6 h-6" />, name: "Test 2" },
];

const NavIcon = ({
  icon,
  name,
  isActive,
  onHover,
}: {
  icon: React.ReactNode;
  name: string;
  isActive: boolean;
  onHover: () => void;
}) => (
  <div
    className="relative bg-[#191919] rounded-[10px] text-white/50 border-y-[0.075rem] border-[#404040b1] hover:bg-[#222222]"
    onMouseEnter={onHover}
  >
    <div className="text-limea-300 px-[10px] py-[9px] w-full h-full">
      {icon}
    </div>
    {isActive && (
      <motion.div
        className="font-normal absolute bottom-full px-3 w-max bg-[#191919] left-1/2 rounded-md"
        initial={{ opacity: 0, translateX: "-50%" }}
        animate={{ opacity: 1, translateY: -20 }}
      >
        {name}
      </motion.div>
    )}
  </div>
);

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const links = [
    {
      title: "Home",
      icon: (
        <AiOutlineHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "About us",
      icon: (
        <AiOutlineInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Test",
      icon: (
        <GoBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Test 2",
      icon: (
        <LuGamepad2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <motion.nav
      initial={{ translateY: 100, opacity: 0 }}
      animate={{
        translateY: 0,
        opacity: 1,
        transition: { delay: 1.2, duration: 0.2, ease: "easeInOut" },
      }}
      className="absolute bottom-0 w-screen pb-[20px] flex justify-center"
    >
      <div>
        <FloatingDock items={links} />
      </div>
    </motion.nav>
  );
};

export default Navbar;
