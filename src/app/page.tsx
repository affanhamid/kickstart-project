"use client";
import Image from "next/image";
import backgroundImage from "../../public/cloud-bg.webp";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { GoBriefcase } from "react-icons/go";
import { LuGamepad2 } from "react-icons/lu";
import { Spline_Sans_Mono } from "next/font/google";

import { motion } from "framer-motion";

const easeFunction = "circInOut";
const bezierEase = [0.22, 1, 0.36, 1];
const fastDuration = 0.8;
const slowDuration = 1.2;

const spline = Spline_Sans_Mono({
  weight: "400",
  subsets: ["latin"],
  style: ["italic"],
});

const VerticalLine = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{
        scaleY: 1,
        transition: { duration: slowDuration, ease: easeFunction },
      }}
      style={{ originY: 0 }}
      className="bg-white/20 h-screen w-[1.5px]"
    ></motion.div>
  );
};

const HorizontalLine = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: 1,
        transition: {
          delay: 0.8,
          duration: fastDuration,
          ease: bezierEase,
        },
      }}
      className="bg-white/20 w-[460px] h-[1.5px]"
    ></motion.div>
  );
};

const NavIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="bg-[#191919] px-[10px] py-[9px] rounded-[10px] text-white/50 border-y-[0.075rem] border-[#404040b1]">
      {icon}
    </div>
  );
};

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{
          scale: 1,
          transition: { duration: slowDuration, ease: easeFunction },
        }}
        className="absolute top-0 left-0 bottom-0 right-0"
      >
        <Image
          src={backgroundImage}
          width={1024}
          height={720}
          className="w-full h-full object-cover"
          alt="clouds"
        />
      </motion.div>

      <div className="absolute bg-transparent top-0 left-0 bottom-0 right-0 px-[290px] flex justify-between">
        <VerticalLine />
        <VerticalLine />
        <VerticalLine />
        <VerticalLine />
        <VerticalLine />
      </div>
      <div className="absolute top-0 left-0 bottom-0 right-0 pt-[215px] pb-[285px] flex flex-col items-center justify-between">
        <HorizontalLine />
        <HorizontalLine />
      </div>
      <div className="absolute bg-transparent top-0 left-0 bottom-0 right-0 flex justify-center items-center">
        <motion.div
          initial={{ scale: 0, translateY: -40 }}
          animate={{
            scale: 1,
            translateY: -40,
            transition: {
              delay: 0.8,
              duration: fastDuration,
              ease: easeFunction,
            },
          }}
          className="w-[560px] aspect-square border border-white/40 rounded-full"
        />
      </div>
      <div
        className="absolute top-0 left-0 bottom-0 right-0"
        style={{
          backgroundImage:
            "radial-gradient(50% 50%, rgb(26, 26, 26) 0%, rgb(0, 0, 0) 100%)",
          opacity: "75%",
        }}
      ></div>

      <div className="absolute bg-transparent top-0 left-0 bottom-0 right-0 flex justify-center items-center">
        <div className="flex flex-col text-[#9F9FAD] gap-1 items-center pt-10">
          <h1 className="text-8xl">
            <span className="tracking-[5px]">KICKSTART</span> <br />
            <span>EDUCATION</span>
          </h1>
          <p
            className={`text-accent text-xl font-light pb-32 text-center max-w-[45ch] ${spline.className}`}
          >
            Educating the next generation of stars
          </p>
        </div>
      </div>

      <motion.nav
        initial={{ translateY: 100 }}
        animate={{
          translateY: 0,
          transition: {
            delay: 0.8,
            duration: fastDuration,
            ease: easeFunction,
          },
        }}
        className="absolute bottom-0 w-screen pb-[20px] flex justify-center"
      >
        <div className="mx-3 flex h-fit w-fit min-w-0 items-end gap-[10px] rounded-[20px] border-y-[0.075rem] border-[#404040b1] bg-[#00000051] p-[10px] backdrop-blur-[15px]">
          <NavIcon icon={<AiOutlineHome className="w-6 h-6" />} />
          <NavIcon icon={<AiOutlineInfoCircle className="w-6 h-6" />} />
          <NavIcon icon={<GoBriefcase className="w-6 h-6" />} />
          <NavIcon icon={<LuGamepad2 className="w-6 h-6" />} />
        </div>
      </motion.nav>
    </main>
  );
}
