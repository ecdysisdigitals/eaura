"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface BackButtonProps {
  href?: string
  label?: string
}

export function BackButton({ href, label = "Bumalik" }: BackButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    if (href) {
      router.push(href)
    } else {
      router.back()
    }
  }

  return (
    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
      <Button
        variant="ghost"
        onClick={handleClick}
        className="flex items-center gap-2 text-cherry hover:text-cherry/80 hover:bg-cherry/5"
      >
        <ArrowLeft className="h-4 w-4" />
        {label}
      </Button>
    </motion.div>
  )
}
