import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const prtfolioDb = [
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
    <motion.section exit={{ opacity: 0 }}>
      {isFirstMount && <InitialTransition />}

      <motion.div initial="initial" animate="animate" variants={content(isFirstMount)} className="space-y-12">
        <motion.h1 variants={title} className="text-6xl font-black py-32 text-center">
          Dvasadva is a business which makes rich digital experiences.
        </motion.h1>
        <motion.h1 variants={title} className="text-6xl font-black py-32 text-center">
          At the moment this site is work in progress.
        </motion.h1>
        <motion.h1 variants={title} className="text-3xl font-black text-center">
          Expect more soon. In the meantime, check out some of our work.
        </motion.h1>
        <motion.section variants={items} className="text-gray-700 body-font">
          <div className="container px-5 pt-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              {prtfolioDb.map((item, index) => (
                <Item key={index} {...item} />
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </motion.section>
  );
}

const Item = ({ img, category, name, url }) => (
  <div className="w-full p-4 lg:w-1/4 md:w-1/2">
    <a href={url} className="relative block h-48 overflow-hidden rounded border">
      <Image alt="item" className="block object-cover object-center w-full h-full" src={img} layout="fill" />
    </a>
    <div className="mt-4">
      <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">{category}</h3>
      <h2 className="text-lg font-medium text-gray-900 title-font">{name} </h2>
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
  React.useState(() => {
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
