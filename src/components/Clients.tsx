import { useRef, type ReactNode } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion'
import { wrap } from '@motionone/utils'

interface ClientsProps {
  children: ReactNode
  baseVelocity: number
  margin?: string
}

export default function Clients({ children, baseVelocity, margin }: ClientsProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className={`overflow-hidden p-1 ${margin} whitespace-nowrap flex flex-nowrap`}>
      <motion.div
        className="text-2xl lg:text-5xl text-stone-400 flex whitespace-nowrap flex-nowrap"
        style={{ x }}
      >
        <span style={{ wordSpacing: '0.25em' }} className="px-2">
          {children}
        </span>
        <span style={{ wordSpacing: '0.25em' }} className="px-2">
          {children}
        </span>
        <span style={{ wordSpacing: '0.25em' }} className="px-2">
          {children}
        </span>
        <span style={{ wordSpacing: '0.25em' }} className="px-2">
          {children}
        </span>
      </motion.div>
    </div>
  )
}
