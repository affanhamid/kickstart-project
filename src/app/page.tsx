"use client";
import {
  Marquee,
  StarsBackground,
  ShootingStars,
  AuroraBackground,
  Navbar,
  Logo,
} from "@/components";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  footerTypewriterVariants,
  headerLine1Variants,
  headerLine2Variants,
  logoVariants,
  navbarVariants,
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

        <motion.div
          className="absolute top-7 left-8 text-xl font-bold text-white"
          variants={logoVariants}
          initial="initial"
          animate="animate"
        >
          <Logo />
        </motion.div>

        <section className="flex flex-col text-white items-center pt-10">
          <header className="text-center">
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

          <motion.div
            className="text-center w-[70%] text-xl"
            variants={schoolsVariants}
            initial="initial"
            animate="animate"
          >
            <p className="text-lg pt-6 mb-2">Trusted by 200+ parents from:</p>
            <Marquee items={schools} />
          </motion.div>
        </section>

        <motion.footer
          className="text-xl text-gray-200 font-light pt-6 italic flex gap-1 justify-start w-[550px]"
          variants={footerTypewriterVariants}
          initial="initial"
          animate="animate"
        >
          <span>Empowering our students with </span>
          <Typewriter
            options={{
              strings: [
                "10 and 11+ Exam Preparation",
                "Interview Preparation",
                "Math Study Groups",
                "English Study Groups",
              ],
              autoStart: true,
              loop: true,
              delay: 75, // Speed of typing
              deleteSpeed: 50, // Speed of deleting text
            }}
          />
        </motion.footer>
      </AuroraBackground>
    </motion.div>
  );
}
