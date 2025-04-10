"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedBorderProps {
  children: React.ReactNode
  className?: string
  borderColor?: string
  duration?: number
  pathLength?: number
}

export function AnimatedBorder({
  children,
  className = "",
  borderColor = "#75070C",
  duration = 2.5,
  pathLength = 0.8,
}: AnimatedBorderProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const updateDimensions = () => {
      const element = document.getElementById("animated-border-container")
      if (element) {
        setDimensions({
          width: element.offsetWidth,
          height: element.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [isClient])

  if (!isClient) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={cn("relative", className)} id="animated-border-container">
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
          <motion.rect
            width={dimensions.width}
            height={dimensions.height}
            rx={12}
            ry={12}
            fill="none"
            stroke={borderColor}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength, opacity: 1 }}
            transition={{ duration, ease: "easeInOut" }}
          />
        </svg>
      </div>
      {children}
    </div>
  )
}
