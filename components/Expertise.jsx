import { motion } from "framer-motion";
import { Space_Mono } from "next/font/google";

const spaceMono400 = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const Card = ({ heading, description, color }) => {
  return (
    <div className={`basis-60 flex-grow rounded-3xl ${color}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "0px 0px -30% 0px" }}
        className="flex flex-col justify-between items-center gap-8 p-8 h-full">
        <h3 className={`text-2xl text-right md:text-4xl ${spaceMono400.className}`}>{heading}</h3>
        <p className="text-sm lg:text-base text-stone-100">{description}</p>
      </motion.div>
    </div>
  )
}

const Expertise = () => {
  return (
    <div className="min-h-[80vh] xl:min-h-[70vh] flex flex-wrap justify-start gap-16 p-8 lg:p-24">
      <Card
        heading="Web Application Development"
        description="Harnessing the power of cutting-edge technology we specialize in building scalable, secure and performant web applications using Next.js and TypeScript."
        color="bg-gradient-to-r from-cyan-500 to-blue-500"
      />
      <Card
        heading="Large Language Model Inference and Deployment"
        description="We deploy powerful language models such as LLaMa and Falcon using Hugging Face and LangChain for seamless and efficient AI-driven solutions."
        color="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      />
      <Card
        heading="API Integrations & Data Driven Solutions"
        description="We enable interchange between different APIs and data sources to build data driven solutions using technologies like GraphQL, REST APIs and serverless functions."
        color="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
      />
    </div>
  );
};

export default Expertise