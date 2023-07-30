import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "../components/Hero";

const prtfolioDb = [
  {
    name: "Croatian Screenwriters & Playwrights Guild",
    category: "ARTISTS GUILD",
    img: "/spid.jpg",
    url: "https://spid.com.hr",
  },
  {
    name: "Infodesign",
    category: "SOFTWARE COMPANY",
    img: "/infodesign.jpg",
    url: "https://infodesign.hr",
  },
  {
    name: "144",
    category: "MARKETING AGENCY",
    img: "/144.jpg",
    url: "https://144.hr",
  },
  {
    name: "Jasaragić, Mamut and Stojan",
    category: "LAW FIRM",
    img: "/jms.jpg",
    url: "https://jms.hr",
  },
  {
    name: "Tire Calligraphy",
    category: "LIFESTYLE BRAND",
    img: "/tirecalli.jpg",
    url: "https://tirecalli.com",
  },
  {
    name: "Kuk Sul Do",
    category: "MARTIAL ARTS SCHOOL",
    img: "/ksd.jpg",
    url: "https://ksdzagreb.com",
  },
  {
    name: "Tring Energetika",
    category: "ENERGY COMPANY",
    img: "/tring.jpg",
    url: "https://tring-energetika.hr",
  },
  {
    name: "Rigeta",
    category: "MEAT PRODUCTION COMPANY",
    img: "/rigeta.jpg",
    url: "https://rigeta.hr",
  },
  {
    name: "Župić i partneri",
    category: "LAW FIRM",
    img: "/zupicpartneri.jpg",
    url: "https://zupicipartneri.hr",
  },
];

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

export default function IndexPage({ isFirstMount }) {
  return (
    <motion.section exit={{ opacity: 0 }} className="bg-stone-800">
      {isFirstMount && <InitialTransition />}
      <div className="h-60vh">
        <Hero />
      </div>
      <motion.div initial="initial" animate="animate" variants={content(isFirstMount)} className="space-y-12 bg-stone-800 text-zinc-50">
        <motion.h1 variants={title} className="text-5xl font-black py-24 m-8 text-center">
          We create rich digital experiences
        </motion.h1>
        <motion.h1 variants={title} className="w-full text-2xl font-bold text-center sm:text-3xl md:text-4xl py-14">
          Selected works
        </motion.h1>
        <motion.section variants={items} className="bg-stone-900 text-zinc-100 body-font">
          <div className="container px-5 pt-12 mx-auto">
            <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
              {prtfolioDb.map((item, index) => {
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

const OddItem = ({ img, category, name, url }) => (
  <div className="flex flex-col mb-8 sm:flex-row py-10">
    <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
      <a href={url} className="relative block overflow-hidden rounded shadow-slate-700 shadow-lg h-auto w-full">
        <Image alt="item" className="block object-cover object-center" src={img} width={885} height={500} />
      </a>
    </div>
    <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-20">
      <h3 className="mb-2 text-sm font-semibold leading-none text-left text-cyan-400 uppercase">{category}</h3>
      <h2 className="mt-2 text-2xl sm:text-left md:text-4xl">{name}</h2>
    </div>
  </div>
);

const EvenItem = ({ img, category, name, url }) => (
  <div className="flex flex-col mb-8 sm:flex-row py-10">
    <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
      <a href={url} className="relative block overflow-hidden rounded shadow-slate-700 shadow-lg h-auto w-full">
        <Image alt="item" className="block object-cover object-center" src={img} width={885} height={500} />
      </a>
    </div>
    <div className="flex flex-col justify-center items-end mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-20">
      <h3 className="mb-2 text-sm font-semibold leading-none text-left text-cyan-400 uppercase">{category}</h3>
      <h2 className="mt-2 text-2xl text-right md:text-4xl">{name}</h2>
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
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="absolute z-50 flex items-center justify-center w-full bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() => document.body.classList.remove("overflow-hidden")}
    >
      <motion.svg variants={textContainer} className="absolute z-50 flex">
        <pattern id="pattern" patternUnits="userSpaceOnUse" width={750} height={800} className="text-white">
          <rect className="w-full h-full fill-current" />
          <motion.rect variants={text} className="w-full h-full text-gray-600 fill-current" />
        </pattern>
        <text className="text-4xl font-bold" textAnchor="middle" x="50%" y="50%" style={{ fill: "url(#pattern)" }}>
          dvasadva
        </text>
      </motion.svg>
    </motion.div>
  );
};
