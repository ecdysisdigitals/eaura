"\"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  x: number
  y: number
  size: number
  color: string
  speed: number
  opacity: number
  rotation: number
  shape: "circle" | "square" | "triangle" | "star"
}

interface EnhancedParticlesProps {
  count?: number
  colors?: string[]
  minSize?: number
  maxSize?: number
  minSpeed?: number
  maxSpeed?: number
  className?: string
  shapes?: ("circle" | "square" | "triangle" | "star")[]
  interactive?: boolean
}

export function EnhancedParticles({
  count = 50,
  colors = ["#FFEDAB", "#F0E6DA", "#75070C"],
  minSize = 2,
  maxSize = 6,
  minSpeed = 0.2,
  maxSpeed = 0.8,
  className = "",
  shapes = ["circle"],
  interactive = false,
}: EnhancedParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    // Generate particles
    const newParticles = Array.from({ length: count }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: minSize + Math.random() * (maxSize - minSize),
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: minSpeed + Math.random() * (maxSpeed - minSpeed),
      opacity: 0.1 + Math.random() * 0.4,
      rotation: Math.random() * 360,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }))

    setParticles(newParticles)
  }, [count, colors, minSize, maxSize, minSpeed, maxSpeed, shapes, dimensions])

  useEffect(() => {
    if (!interactive) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [interactive])

  const renderShape = (particle: Particle) => {
    switch (particle.shape) {
      case "square":
        return (
          <motion.div
            className="absolute"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.opacity,
              left: particle.x,
              top: particle.y,
              rotate: particle.rotation,
            }}
            animate={{
              y: [particle.y, particle.y - 100, particle.y],
              opacity: [particle.opacity, particle.opacity + 0.2, particle.opacity],
              rotate: [particle.rotation, particle.rotation + 180, particle.rotation + 360],
            }}
            transition={{
              duration: 5 / particle.speed,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        )
      case "triangle":
        return (
          <motion.div
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${particle.size / 2}px solid transparent`,
              borderRight: `${particle.size / 2}px solid transparent`,
              borderBottom: `${particle.size}px solid ${particle.color}`,
              opacity: particle.opacity,
              left: particle.x,
              top: particle.y,
            }}
            animate={{
              y: [particle.y, particle.y - 100, particle.y],
              opacity: [particle.opacity, particle.opacity + 0.2, particle.opacity],
              rotate: [particle.rotation, particle.rotation + 180, particle.rotation + 360],
            }}
            transition={{
              duration: 5 / particle.speed,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        )
      case "star":
        return (
          <motion.div
            className="absolute"
            style={{
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              left: particle.x,
              top: particle.y,
            }}
            animate={{
              y: [particle.y, particle.y - 100, particle.y],
              opacity: [particle.opacity, particle.opacity + 0.2, particle.opacity],
              rotate: [particle.rotation, particle.rotation + 180, particle.rotation + 360],
            }}
            transition={{
              duration: 5 / particle.speed,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            <svg
              width={particle.size}
              height={particle.size}
              viewBox="0 0 24 24"
              fill={particle.color}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0L14.91 8.36L24 9.27L17.5 15.34L19.24 24L12 19.5L4.76 24L6.5 15.34L0 9.27L9.09 8.36L12 0Z" />
            </svg>
          </motion.div>
        )
      default:
        return (
          <motion.div
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
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 / particle.speed,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        )
    }
  }

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle, index) => (
        <div key={index}>{renderShape(particle)}</div>
      ))}
      {interactive && isHovering && (
        <motion.div
          className="absolute w-32 h-32 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,237,171,0.2) 0%, rgba(255,237,171,0) 70%)",
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  )
}
