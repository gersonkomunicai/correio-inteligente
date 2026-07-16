'use client'

import { motion } from "motion/react"
import { ReactNode } from "react"

type Direction = 'up' | 'down' | 'left' | 'right'

const offsetByDirection: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
}

interface RevealProps {
  children: ReactNode
  className?: string
  direction?: Direction
  delay?: number
}

// Anima a entrada de um elemento quando ele cruza a viewport durante o scroll.
// Com viewport.once=false, o Framer Motion volta ao estado `initial` sempre que
// o elemento sai de vista, então o mesmo efeito também cobre a "saída".
export default function Reveal({ children, className, direction = 'up', delay = 0 }: RevealProps) {
  const { x, y } = offsetByDirection[direction]

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
