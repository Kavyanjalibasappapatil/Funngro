'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion'

// Fade up on scroll reveal
export function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Stagger children
export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

// Stagger child item
export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28, scale: 0.97 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}

// Counter animation
export function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  duration = 2,
  className = '',
}: {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const increment = target / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString('en-IN')}{suffix}
    </span>
  )
}

// Scale on hover card
export function HoverCard({
  children,
  className = '',
  glowColor = 'rgba(85,255,115,0.15)',
}: {
  children: ReactNode
  className?: string
  glowColor?: string
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

// Section eyebrow label
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#55FF73]/10 border border-[#55FF73]/20 text-[#55FF73] text-xs font-semibold tracking-widest uppercase mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-[#55FF73] animate-pulse" />
      {children}
    </span>
  )
}

// Section header
export function SectionHeader({
  eyebrow,
  headline,
  sub,
  align = 'center',
}: {
  eyebrow?: string
  headline: ReactNode
  sub?: string
  align?: 'center' | 'left'
}) {
  return (
    <FadeUp className={`mb-14 ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`text-4xl sm:text-5xl font-serif font-bold text-white leading-tight mb-4 ${align === 'center' ? 'max-w-2xl mx-auto' : ''}`}>
        {headline}
      </h2>
      {sub && (
        <p className={`text-white/55 text-lg leading-relaxed ${align === 'center' ? 'max-w-xl mx-auto' : 'max-w-lg'}`}>
          {sub}
        </p>
      )}
    </FadeUp>
  )
}
