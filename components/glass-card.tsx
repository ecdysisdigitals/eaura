import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  intensity?: "light" | "medium" | "heavy"
}

export function GlassCard({ children, className = "", intensity = "medium" }: GlassCardProps) {
  const intensityClasses = {
    light: "bg-white/10 backdrop-blur-sm",
    medium: "bg-white/20 backdrop-blur-md",
    heavy: "bg-white/30 backdrop-blur-lg",
  }

  return <div className={cn("rounded-xl shadow-lg", intensityClasses[intensity], className)}>{children}</div>
}
