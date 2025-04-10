"use client"

import { useEffect, useRef } from "react"

interface AuroraWaveProps {
  className?: string
  colors?: string[]
  speed?: number
  height?: number
  opacity?: number
}

export function AuroraWave({
  className = "",
  colors = ["#75070C", "#4F6815", "#FFEDAB"],
  speed = 15,
  height = 200,
  opacity = 0.3,
}: AuroraWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestIdRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let time = 0

    const animate = () => {
      time += 0.005 * speed
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw multiple waves with different colors
      for (let i = 0; i < colors.length; i++) {
        const color = colors[i]
        const amplitude = 20 + i * 5
        const frequency = 0.02 - i * 0.002
        const yOffset = 50 + i * 30

        ctx.beginPath()
        ctx.moveTo(0, canvas.height)

        for (let x = 0; x < canvas.width; x++) {
          const y = Math.sin(x * frequency + time) * amplitude + yOffset
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.closePath()

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(
          0,
          `${color}${Math.floor(opacity * 255)
            .toString(16)
            .padStart(2, "0")}`,
        )
        gradient.addColorStop(1, `${color}00`)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      requestIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(requestIdRef.current)
    }
  }, [colors, speed, height, opacity])

  return (
    <div className={`absolute bottom-0 left-0 right-0 pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="w-full" style={{ height: `${height}px` }} />
    </div>
  )
}
