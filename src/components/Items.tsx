interface ItemProps {
  img: string
  category: string
  name: string
  url: string
  description: string
}

export function OddItem({ img, category, name, url, description }: ItemProps) {
  return (
    <div className="flex flex-col mb-8 sm:flex-row py-10">
      <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
        <a
          href={url}
          className="relative block overflow-hidden rounded-sm shadow-slate-700 shadow-lg h-auto w-full"
        >
          <img
            alt="item"
            className="block object-cover object-center w-full"
            src={img}
          />
        </a>
      </div>
      <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-20">
        <h4 className="mb-2 text-sm font-semibold leading-none text-left text-cyan-400 uppercase">
          {category}
        </h4>
        <h3 className="mb-6 text-2xl sm:text-left md:text-4xl font-space-mono">
          {name}
        </h3>
        <p className="mt-6 sm:text-left text-sm lg:text-base text-stone-400">
          {description}
        </p>
      </div>
    </div>
  )
}

export function EvenItem({ img, category, name, url, description }: ItemProps) {
  return (
    <div className="flex flex-col mb-8 sm:flex-row py-10">
      <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
        <a
          href={url}
          className="relative block overflow-hidden rounded-sm shadow-slate-700 shadow-lg h-auto w-full"
        >
          <img
            alt="item"
            className="block object-cover object-center w-full"
            src={img}
          />
        </a>
      </div>
      <div className="flex flex-col justify-center items-end mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-20">
        <h4 className="mb-2 text-sm font-semibold leading-none text-left text-cyan-400 uppercase">
          {category}
        </h4>
        <h3 className="mb-6 text-2xl text-right md:text-4xl font-space-mono">
          {name}
        </h3>
        <p className="mt-6 text-sm lg:text-base text-right text-stone-400">
          {description}
        </p>
      </div>
    </div>
  )
}
