import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLenis } from '@studio-freight/react-lenis'

const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {

  const [lenisReady, setLenisReady] = useState(false);
  const lenis = useLenis()

  useEffect(() => {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (lenis) {
      setLenisReady(true);
    }
  }, [lenis]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black z-50 ${lenisReady ? "hidden" : "block"}`}
      />
      {lenisReady && (
        < motion.div
          className="absolute z-50 flex items-center justify-center w-full bg-black"
          initial="initial"
          animate="animate"
          variants={blackBox}
          onAnimationStart={() => { lenis.stop(); }}
          onAnimationComplete={() => { lenis.start(); }}
        >
          <motion.svg variants={textContainer} className="absolute z-50 flex">
            <pattern
              id="pattern"
              patternUnits="userSpaceOnUse"
              width={750}
              height={800}
              className="text-white"
            >
              <rect className="w-full h-full fill-current" />
              <motion.rect
                variants={text}
                className="w-full h-full text-stone-600 fill-current"
              />
            </pattern>
            <text
              className="text-4xl font-bold"
              textAnchor="middle"
              x="50%"
              y="50%"
              style={{ fill: "url(#pattern)" }}
            >
              dvasadva
            </text>
          </motion.svg>
        </motion.div >
      )}
    </>
  );
};

export default InitialTransition