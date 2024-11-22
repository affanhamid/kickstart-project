export const logoVariants = {
  initial: { translateY: -100 },
  animate: { translateY: 0, transition: { duration: 1, ease: "circInOut" } },
};

export const contactUsVariants = {
  hidden: {
    y: 100, // Start off-screen
    opacity: 0,
  },
  visible: {
    y: 0, // Slide to its final position
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const popoverVariants = {
  hidden: {
    opacity: 0,
    y: 50, // Slide down initially
  },
  visible: {
    opacity: 1,
    y: 0, // Slide up to final position
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: 50, // Slide back down on exit
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const headerLine1Variants = {
  initial: { y: 100, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: "circInOut",
    },
  }),
};

export const headerLine2Variants = {
  initial: { y: 100, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 1 + i * 0.05,
      duration: 0.6,
      ease: "circInOut",
    },
  }),
};

export const footerTypewriterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 2, duration: 1 } },
};

export const navbarVariants = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const schoolsVariants = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const backgroundVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: "circInOut" } },
};

export const marqueeVariants = (
  contentWidth: number,
  containerWidth: number,
) => ({
  animate: {
    x: [0, -contentWidth + containerWidth], // Adjust for container width
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 50, // Set a fixed duration or calculate based on speed
        ease: "linear",
      },
    },
  },
});
