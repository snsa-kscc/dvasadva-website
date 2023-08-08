import { motion } from "framer-motion";
import Contact from "../components/Contact";

const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

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

const ContactPage = () => {
  return (
    <>
      <motion.section exit={{ opacity: 0 }} className="relative body-font bg-stone-900">
        <motion.div variants={content} animate="animate" initial="initial" className="container px-5 py-24 mx-auto">
          <motion.div variants={title} className="flex flex-col w-full mb-12 text-zinc-300">
            <h1 className="mb-4 text-2xl font-medium text-zinc-50 sm:text-3xl title-font text-center">About Us</h1>
            <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
              Those humble beginnings in 2016 when dvasadva was incorporated, from today's perspective, seem otherworldly, indeed. It is fair to say that the
              act of incorporating a business back then was definitely more driven by the force of mindlessness than strategic reasoning. Obviously, sometimes
              mindlessness really works. But mindlessness will not get you far.
            </p>
            <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
              In order to navigate the treacherous waters of entrepreneurship, vision is essential, combined with an ever-present ability to quickly pivot when
              circumstances require it.
            </p>
            <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
              With that in mind, and fueled by our passion for creating standout solutions, we began developing web apps and websites using the WordPress
              architecture. Mind you, that was the time when React and its class-based components (OGs will remember these) were starting to take off.
              Admittedly, we didn't know much, but we embraced a culture of curiosity and avoided cutting corners – values that we hold dear to this day.
            </p>
            <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
              Soon, the entire WordPress ecosystem began to feel somewhat limiting. As we watched tutorials and online presentations, it became glaringly
              obvious that React was the new kid on the block. And we all know how it goes with shiny new toys. We dove right in! It was clear from the start
              that this technology had the potential to revolutionize frontend development, offering clear benefits for both clients and developers. The
              community was vibrant as well. This is the point when you realize you are part of something impactful and just know that future analyses will
              prove you right.
            </p>
            <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
              This romantic early stage of the technology life cycle obviously can't last long, and immersing oneself in another technology stack is crucial for
              a much-needed change in perspective. Thus, the strategic decision was made to pivot into the field of machine learning and artificial
              intelligence. Back in 2020, we speculated that the field would experience a renaissance, but the sheer magnitude of research being done on Large
              Language Models and the hype measured by how quickly a project can accumulate gigantic volumes of GitHub stars in a short time was honestly beyond
              our wildest dreams. History rhymes, and it is extremely satisfying to see the potential once again, as well as to be a part of it.
            </p>
            <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
              With our feet firmly planted on the ground, a human-centric approach, and a commitment to constructing solutions that benefit people throughout
              the production chain, we prioritize these values in every aspect of our business. In our case, the code is written for people, not for machines,
              and it should be easily understandable even if it means being a bit verbose.
            </p>
            <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
              Throughout our business journey, honesty and a straightforward approach have always been paramount pillars that we have abided by, alongside our
              strong business acumen.
            </p>
            <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">
              If you've come this far, I humbly thank you. I truly do. It's a pleasure to have you right here. Peace!
            </p>
            <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">Siniša Košćec</p>
            <p className="mx-auto my-3 text-base leading-relaxed lg:w-2/3">Founder and CEO</p>
          </motion.div>
        </motion.div>
      </motion.section>
      <Contact />
    </>
  );
};

export default ContactPage;
