"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Particle {
  x: number
  y: number
  size: number
  color: string
  speed: number
  opacity: number
}

interface ParticlesBackgroundProps {
  count?: number
  colors?: string[]
  minSize?: number
  maxSize?: number
  minSpeed?: number
  maxSpeed?: number
  className?: string
}

export function ParticlesBackground({
  count = 50,
  colors = ["#FFEDAB", "#F0E6DA", "#75070C"],
  minSize = 2,
  maxSize = 6,
  minSpeed = 0.2,
  maxSpeed = 0.8,
  className = "",
}: ParticlesBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const { width, height } = container.getBoundingClientRect()

    // Generate particles
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: minSize + Math.random() * (maxSize - minSize),
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: minSpeed + Math.random() * (maxSpeed - minSpeed),
      opacity: 0.1 + Math.random() * 0.4,
    }))

    // Force a re-render
    const forceUpdate = () => {
      containerRef.current?.setAttribute("data-update", Date.now().toString())
    }
    forceUpdate()

    // Clean up
    return () => {
      particlesRef.current = []
    }
  }, [count, colors, minSize, maxSize, minSpeed, maxSpeed])

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particlesRef.current.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            y: [particle.y, particle.y - 100, particle.y],
            opacity: [particle.opacity, particle.opacity + 0.2, particle.opacity],
          }}
          transition={{
            duration: 5 / particle.speed,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}
