"use client";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { FaUserTie, FaSchool } from "react-icons/fa";
import { BsPersonCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { navbarVariants } from "@/utils/animations";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <>
      <motion.nav
        className="fixed z-30 top-0 p-4 w-full flex justify-between sm:justify-center items-center backdrop-blur-lg"
        variants={navbarVariants}
        initial="initial"
        animate="animate"
      >
        {/* Additional Logo Outside Hamburger Menu */}
        <div className="flex items-center text-xl text-white sm:hidden">
          <Logo />
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="text-white sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <AiOutlineClose className="h-8 w-8" />
          ) : (
            <AiOutlineMenu className="h-8 w-8" />
          )}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-8 backdrop-blur-lg p-3 rounded-lg shadow-lg text-white items-center w-3/4">
          <li className="flex-1 text-xl">
            <Logo />
          </li>
          {links.map((link, index) => (
            <li key={index} className="flex flex-col items-center">
              <a
                href={link.href}
                className="flex flex-col items-center text-neutral-300 hover:text-white transition duration-200"
              >
                <span className="p-2 bg-transparent rounded-full transition duration-200">
                  {link.icon}
                </span>
                <span className="mt-1">{link.title}</span>
              </a>
            </li>
          ))}
          <li>
            <a
              className="bg-white text-black px-3 py-2 rounded-lg"
              href="https://wa.me/+447413837007?text=I'm%20interested%20in%learning%more%about%kickstart"
            >
              Register Now
            </a>
          </li>
        </ul>
      </motion.nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-black z-40 transition-transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white z-50"
          onClick={() => setMenuOpen(false)}
        >
          <AiOutlineClose className="h-8 w-8" />
        </button>

        <ul className="backdrop-blur-lg p-5 text-white flex flex-col gap-6">
          {/* Mobile-specific Logo */}
          <li className="text-2xl mb-4">
            <Logo />
          </li>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="flex items-center gap-3 text-lg hover:text-gray-400 transition duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.icon}
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <a
              className="bg-white text-black px-4 py-2 rounded-lg text-center block"
              href="https://wa.me/+447413837007?text=I'm%20interested%20in%learning%more%about%kickstart"
              onClick={() => setMenuOpen(false)}
            >
              Register Now
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
