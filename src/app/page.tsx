"use client";
import Image from "next/image";
import backgroundImage from "../../public/background 8.jpg";
import Navbar from "@/components/components/Navbar";
import { Spline_Sans_Mono } from "next/font/google";
import CustomCursor from "@/components/components/CustomCursor";
import { motion } from "framer-motion";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Marquee from "@/components/components/Marquee";

const easeFunction = "circInOut";
const bezierEase = [0.22, 1, 0.36, 1];
const fastDuration = 0.8;
const slowDuration = 1.2;

const spline = Spline_Sans_Mono({
  weight: "400",
  subsets: ["latin"],
  style: ["italic"],
});

const VerticalLine = ({ direction }: { direction: boolean }) => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{
        scaleY: 1,
        transition: { duration: slowDuration, ease: easeFunction },
      }}
      style={{ originY: direction ? 0 : 1 }}
      className="bg-white/10 h-screen w-[1.5px]"
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
      className="bg-white/10 w-[600px] h-[1.5px]"
    ></motion.div>
  );
};

const AnimatedText = ({ text, variants }: { text: string; variants: any }) => {
  return (
    <motion.span
      initial="initial"
      animate="animate"
      className="inline-block overflow-hidden"
    >
      {text.split("").map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          variants={variants}
          custom={i}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Home() {
  const text1 = "KICKSTART";
  const text2 = "EDUCATION";
  const variants1 = {
    initial: (i: number) => ({
      y: 100 + 10 * i,
      rotate: 40,
    }),
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { delay: 0.05 * i, duration: 1, ease: easeFunction },
    }),
  };
  const variants2 = {
    initial: (i: number) => ({
      y: 100 + 10 * (9 - i),
      rotate: -40,
    }),
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { delay: 0.05 * (9 - i), duration: 1, ease: easeFunction },
    }),
  };

  const schools = [
    "Trinity",
    "Whitgift",
    "Hampton",
    "Royal Russell",
    "Kingston Grammar",
    "Harrow",
    "Tiffin",
    "Claremont",
    "City of London Freemen",
    "Epsom College",
    "Eltham College",
    "Wilsons Grammar",
    "Wallington Grammar",
    "St Johns Leatherhead",
    "Fulham Boys",
    "Croydon High",
    "Charterhouse",
    "Cranleigh",
    "RGS Guildford",
    "St Dunstans",
  ];
  return (
    <main className="w-screen h-screen overflow-hidden">
      <CustomCursor />
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
        <ShootingStars />
      </motion.div>

      <div className="absolute bg-transparent top-0 left-0 bottom-0 right-0 px-[250px] flex justify-between pointer-events-none">
        <VerticalLine direction={true} />
        <VerticalLine direction={false} />
        <VerticalLine direction={true} />
        <VerticalLine direction={false} />
        <VerticalLine direction={true} />
      </div>
      <div className="absolute top-0 left-0 bottom-0 right-0 pt-[215px] pb-[285px] flex flex-col items-center justify-between pointer-events-none">
        <HorizontalLine />
        <HorizontalLine />
      </div>
      <div className="absolute bg-transparent top-0 left-0 bottom-0 right-0 flex justify-center items-center pointer-events-none">
        <motion.div
          initial={{ scale: 0, translateY: -40 }}
          animate={{
            scale: 1,
            translateY: -40,
            transition: {
              delay: 0.5,
              duration: fastDuration,
              ease: easeFunction,
            },
          }}
          className="w-[600px] aspect-square border border-white/10 rounded-full"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 4,
            ease: "linear",
          },
        }}
      >
        <StarsBackground />
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 bottom-0 right-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(50% 50%, rgb(26, 26, 26) 0%, rgb(0, 0, 0) 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.4,
          transition: {
            duration: fastDuration,
            ease: easeFunction,
          },
        }}
      ></motion.div>

      <div className="absolute bg-transparent top-0 left-0 bottom-0 right-0 flex justify-center items-center pointer-events-none">
        <div className="flex flex-col text-[#9F9FAD] gap-1 items-center pt-10">
          <h1 className="text-8xl flex flex-col">
            <span className="tracking-[5px]">
              <AnimatedText text={text1} variants={variants1} />
            </span>
            <AnimatedText text={text2} variants={variants2} />
          </h1>
          <div className="w-[90%] mx-auto overflow-hidden">
            <motion.div
              className="w-full"
              initial={{ translateX: 520 }}
              animate={{
                translateX: 0,
                transition: {
                  delay: 1,
                  duration: 4,
                  ease: "linear",
                },
              }}
            >
              <Marquee items={schools} delay={5} />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, translateY: 20 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: {
                delay: 1,
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            className={`text-accent text-xl font-light pb-32 text-center max-w-[45ch] ${spline.className}`}
          >
            Educating the next generation of stars
          </motion.p>
        </div>
      </div>
      <Navbar />
    </main>
  );
}
