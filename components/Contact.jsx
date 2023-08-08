import { Space_Mono } from "next/font/google";

const spaceMono700 = Space_Mono({
  subsets: ["latin"],
  weight: "700",
});

const spaceMono400 = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const Contact = () => {
  return (
    <div className="h-[70vh] bg-teal-500 flex flex-wrap justify-center items-center p-8 lg:p-16 gap-20">
      <div className="basis-80 flex-grow"><p className={`text-3xl md:text-5xl xl:text-6xl 2xl:text-8xl text-zinc-200 ${spaceMono700.className}`}>Interested in what you see?</p></div>
      <div className="basis-80 flex-grow">
        <div><p className={`text-3xl md:text-5xl xl:text-6xl 2xl:text-8xl text-zinc-200 ${spaceMono700.className}`}>Connect at</p></div>
        <div className="my-8"><p className={`text-2xl md:text-4xl 2xl:text-6xl text-zinc-200 ${spaceMono400.className}`}>office@dvasadva.com</p></div>
      </div>
    </div>
  )
}

export default Contact