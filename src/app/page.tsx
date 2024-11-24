"use client";
import {
  Marquee,
  StarsBackground,
  ShootingStars,
  AuroraBackground,
  RotatingText,
} from "@/components";
import { motion } from "framer-motion";
import {
  headerLine1Variants,
  headerLine2Variants,
  schoolsVariants,
  backgroundVariants,
} from "@/utils/animations";

export default function Home() {
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
    <motion.div
      className="relative w-full h-full"
      variants={backgroundVariants}
      initial="initial"
      animate="animate"
    >
      <AuroraBackground>
        <ShootingStars />
        <StarsBackground />

        <section className="flex flex-col text-white items-center pt-10">
          <header className="text-center">
            <p className="text-lg border w-max mx-auto px-3 py-1 rounded-full mb-5 border-white/40">
              Trusted by 200+ parents
            </p>
            <h1 className="text-7xl font-bold tracking-[0.5px] flex flex-col">
              <span className="flex justify-center overflow-hidden">
                {"Educating the Next".split("").map((letter, index) => (
                  <motion.span
                    key={`line1-${index}`}
                    className="inline-block"
                    variants={headerLine1Variants}
                    custom={index}
                    initial="initial"
                    animate="animate"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>

              {/* Second Line */}
              <span className="flex justify-center overflow-hidden">
                {"Generation of Stars".split("").map((letter, index) => (
                  <motion.span
                    key={`line2-${index}`}
                    className="inline-block"
                    variants={headerLine2Variants}
                    custom={index}
                    initial="initial"
                    animate="animate"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
            </h1>
          </header>

          <RotatingText />
          <motion.div
            className="text-center w-[70%] text-xl"
            variants={schoolsVariants}
            initial="initial"
            animate="animate"
          >
            <Marquee items={schools} />
          </motion.div>
        </section>
      </AuroraBackground>
    </motion.div>
  );
}
