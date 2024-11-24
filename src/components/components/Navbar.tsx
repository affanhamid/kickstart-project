"use client";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserTie, FaSchool } from "react-icons/fa";
import { BsPersonCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { navbarVariants } from "@/utils/animations";
import { Logo } from "./Logo";

export const Navbar = () => {
  const links = [
    {
      title: "Home",
      icon: <AiOutlineHome className="h-6 w-6" />,
      href: "/",
    },
    {
      title: "For Parents",
      icon: <FaUserTie className="h-6 w-6" />,
      href: "/parents",
    },
    {
      title: "For Academies",
      icon: <FaSchool className="h-6 w-6" />,
      href: "/academies",
    },
    {
      title: "For Tutors",
      icon: <BsPersonCheckFill className="h-6 w-6" />,
      href: "/apply",
    },
  ];

  return (
    <motion.nav
      className="fixed z-30 top-0 p-4 w-full flex justify-center "
      variants={navbarVariants}
      initial="initial"
      animate="animate"
    >
      <ul
        className="flex justify-around items-center w-3/4 gap-10 px-10 py-3 backdrop-blur-lg rounded-lg text-white"
        style={{ boxShadow: "0 0px 15px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="flex-1 text-xl">
          <Logo />
        </div>
        {links.map((link, index) => (
          <li key={index} className="flex flex-col items-center">
            <a
              href={link.href}
              className="flex flex-col items-center text-neutral-300 hover:text-white transition duration-200"
            >
              <span className="p-2 bg-transparent rounded-full  transition duration-200">
                {link.icon}
              </span>
              <span className="mt-1 text-sm font-medium">{link.title}</span>
            </a>
          </li>
        ))}
        <a
          className="bg-white text-black px-3 py-2 rounded-lg"
          href="https://wa.me/+447413837007?text=I'm%20interested%20in%learning%more%about%kickstart"
        >
          Register Now
        </a>
      </ul>
    </motion.nav>
  );
};
