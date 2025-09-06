import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { Space_Mono } from "next/font/google";

const spaceMono400 = Space_Mono({
  subsets: ["latin"],
  weight: "400",
  fallback: ['monospace'],
});

const AnimatedHeading = ({ text, className }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75vh', 'end center'],
  });

  return (
    <motion.h2
      ref={ref}
      style={{ opacity: scrollYProgress }}
      className={`${spaceMono400.className} ${className}`}
    >
      {text}
    </motion.h2>
  );
};
export default AnimatedHeading