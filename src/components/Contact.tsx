export default function Contact() {
  return (
    <div className="h-[70vh] bg-teal-500 flex flex-wrap justify-center items-center p-8 lg:p-16 gap-20">
      <div className="basis-80 grow">
        <p className="text-3xl md:text-5xl xl:text-6xl 2xl:text-8xl text-zinc-200 font-space-mono font-bold">
          Interested in what you see?
        </p>
      </div>
      <div className="basis-80 grow">
        <div>
          <p className="text-3xl md:text-5xl xl:text-6xl 2xl:text-8xl text-zinc-200 font-space-mono font-bold">
            Connect at
          </p>
        </div>
        <div className="my-8">
          <p className="text-2xl md:text-4xl 2xl:text-6xl text-zinc-200 font-space-mono">
            office@dvasadva.com
          </p>
        </div>
      </div>
    </div>
  )
}
