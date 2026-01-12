import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import portfolio from "../data/db.json";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import AnimatedHeading from "../components/AnimatedHeading";
import { EvenItem, OddItem } from "../components/Items";
import InitialTransition from "../components/InitialTransition";
import Expertise from "../components/Expertise";
import { useFirstMount } from "./__root";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

const content = (isFirstMount: boolean) => ({
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
} as const;

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
} as const;

function IndexPage() {
  const { isFirstMount } = useFirstMount();

  return (
    <motion.section exit={{ opacity: 0 }} className="bg-stone-800">
      {isFirstMount && <InitialTransition />}
      <div className="h-[60vh]">
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
          className="text-5xl lg:text-7xl xl:text-9xl py-24 m-8 text-center font-space-mono font-bold"
        >
          We craft custom made software that engages
        </motion.h1>
        <AnimatedHeading
          className="w-full text-3xl text-right lg:text-5xl p-8 lg:p-24"
          text="What can we offer?"
        />
        <Expertise />
        <AnimatedHeading
          className="w-full text-2xl sm:text-3xl lg:text-5xl text-stone-300 mt-8 lg:mt-36 px-8 lg:px-24"
          text="Our clients"
        />
        <Clients baseVelocity={-1} margin="mt-12 lg:mt-24">
          Jump2Sport.hr TripleJump d.o.o. JMS d.o.o. Infodesign d.o.o. Tire
          Calligraphy SPID
        </Clients>
        <Clients baseVelocity={1} margin="mb-12 lg:mb-24">
          Goridar Grupa d.o.o. 144 Kuk Sul Do Zagreb Tring Energetika d.o.o.
          Rigeta d.o.o. Župić&partneri d.o.o.
        </Clients>
        <AnimatedHeading
          className="w-full text-3xl text-right lg:text-5xl p-8 lg:p-24"
          text="Selected works"
        />
        <motion.section
          variants={items}
          className="bg-stone-900 text-zinc-100 py-10 lg:py-20"
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
      <Contact />
    </motion.section>
  );
}
