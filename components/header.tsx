"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { FloatingElement } from "@/components/floating-element"

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cherry/20 bg-cherry text-oat">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <FloatingElement duration={3}>
            <Image src="/logo.svg" alt="Eaura Logo" width={40} height={40} className="animate-pulse" />
          </FloatingElement>
          <span className="text-xl font-bold">Eaura</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${isActive("/") ? "text-butter" : "hover:text-butter"}`}
          >
            Pangunahing Pahina
          </Link>
          <Link
            href="/naratibong-danas"
            className={`text-sm font-medium transition-colors ${isActive("/naratibong-danas") ? "text-butter" : "hover:text-butter"}`}
          >
            Naratibong Danas
          </Link>
          <Link
            href="/implikasyon"
            className={`text-sm font-medium transition-colors ${isActive("/implikasyon") ? "text-butter" : "hover:text-butter"}`}
          >
            Implikasyon
          </Link>
          <Link
            href="/tungkol-sa-mananaliksik"
            className={`text-sm font-medium transition-colors ${isActive("/tungkol-sa-mananaliksik") ? "text-butter" : "hover:text-butter"}`}
          >
            Tungkol sa Mananaliksik
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-oat">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-cherry text-oat border-olive">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className={`text-lg font-medium transition-colors ${isActive("/") ? "text-butter" : "hover:text-butter"}`}
              >
                Pangunahing Pahina
              </Link>
              <Link
                href="/naratibong-danas"
                className={`text-lg font-medium transition-colors ${isActive("/naratibong-danas") ? "text-butter" : "hover:text-butter"}`}
              >
                Naratibong Danas
              </Link>
              <Link
                href="/implikasyon"
                className={`text-lg font-medium transition-colors ${isActive("/implikasyon") ? "text-butter" : "hover:text-butter"}`}
              >
                Implikasyon
              </Link>
              <Link
                href="/tungkol-sa-mananaliksik"
                className={`text-lg font-medium transition-colors ${isActive("/tungkol-sa-mananaliksik") ? "text-butter" : "hover:text-butter"}`}
              >
                Tungkol sa Mananaliksik
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
