import { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Hero from "../components/Hero";
import { Space_Mono } from "next/font/google";
import portfolio from "../data/db.json";
import Clients from "../components/Clients";

const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const items = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const spaceMono700 = Space_Mono({
  subsets: ["latin"],
  weight: "700",
});

const spaceMono400 = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function IndexPage({ isFirstMount }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75vh", "end 20vh"],
  });

  return (
    <motion.section exit={{ opacity: 0 }} className="bg-stone-800">
      {isFirstMount && <InitialTransition />}
      <div className="h-60vh">
        <Hero />
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={content(isFirstMount)}
        className="bg-stone-800 text-zinc-50"
      >
        <motion.h1
          variants={title}
          className={`text-5xl lg:text-7xl xl:text-9xl py-24 m-8 text-center ${spaceMono700.className}`}
        >
          We craft custom made software that engages
        </motion.h1>
        <h1 className={`w-full text-2xl sm:text-3xl lg:text-5xl text-stone-300 mt-8 lg:mt-36 px-8 lg:px-24 ${spaceMono400.className}`}>Our clients</h1>
        <Clients baseVelocity={-1} margin="mt-12 lg:mt-24">Jump2Sport.hr TripleJump d.o.o. JMS d.o.o. Infodesign d.o.o. Tire Calligraphy SPID</Clients>
        <Clients baseVelocity={1} margin="mb-12 lg:mb-24">144 Kuk Sul Do Zagreb Tring Energetika d.o.o. Rigeta d.o.o. Župić&partneri d.o.o.</Clients>
        <motion.h1
          variants={title}
          ref={ref}
          style={{ opacity: scrollYProgress }}
          className={`w-full text-3xl text-right lg:text-5xl p-8 lg:p-24 ${spaceMono400.className}`}
        >
          Selected works
        </motion.h1>
        <motion.section
          variants={items}
          className="bg-stone-900 text-zinc-100 body-font"
        >
          <div className="container px-5 pt-12 mx-auto">
            <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
              {portfolio.map((item, index) => {
                if (index % 2 !== 0) {
                  return <OddItem key={index} {...item} />;
                }
                return <EvenItem key={index} {...item} />;
              })}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </motion.section>
  );
}

const OddItem = ({ img, category, name, url, description }) => (
  <div className="flex flex-col mb-8 sm:flex-row py-10">
    <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
      <a
        href={url}
        className="relative block overflow-hidden rounded shadow-slate-700 shadow-lg h-auto w-full"
      >
        <Image
          alt="item"
          className="block object-cover object-center"
          src={img}
          width={885}
          height={500}
        />
      </a>
    </div>
    <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-20">
      <h3 className="mb-2 text-sm font-semibold leading-none text-left text-cyan-400 uppercase">
        {category}
      </h3>
      <h2
        className={`mb-6 text-2xl sm:text-left md:text-4xl ${spaceMono400.className}`}
      >
        {name}
      </h2>
      <p className="mt-6 sm:text-left text-sm lg:text-base text-stone-400">{description}</p>
    </div>
  </div>
);

const EvenItem = ({ img, category, name, url, description }) => (
  <div className="flex flex-col mb-8 sm:flex-row py-10">
    <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
      <a
        href={url}
        className="relative block overflow-hidden rounded shadow-slate-700 shadow-lg h-auto w-full"
      >
        <Image
          alt="item"
          className="block object-cover object-center"
          src={img}
          width={885}
          height={500}
        />
      </a>
    </div>
    <div className="flex flex-col justify-center items-end mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-20">
      <h3 className="mb-2 text-sm font-semibold leading-none text-left text-cyan-400 uppercase">
        {category}
      </h3>
      <h2
        className={`mb-6 text-2xl text-right md:text-4xl ${spaceMono400.className}`}
      >
        {name}
      </h2>
      <p className="mt-6 text-sm lg:text-base text-right text-stone-400">{description}</p>
    </div>
  </div>
);

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
  useState(() => {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="absolute z-50 flex items-center justify-center w-full bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
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
    </motion.div>
  );
};
