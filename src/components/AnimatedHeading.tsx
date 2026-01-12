import { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'

interface AnimatedHeadingProps {
  text: string
  className?: string
}

export default function AnimatedHeading({ text, className }: AnimatedHeadingProps) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75vh', 'end center'],
  })

  return (
    <motion.h2
      ref={ref}
      style={{ opacity: scrollYProgress }}
      className={`font-space-mono ${className}`}
    >
      {text}
    </motion.h2>
  )
}
