"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "Enrollment", href: "/enrollment" },
  { name: "Contact Us", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center header-container">
        <Link href="/" className="flex items-center">
          {/* Circular logo container */}
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white shadow-sm bg-white flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunshine%20Fitsum%20Daycare%20Logo%20Final.jpg-NB36oU9t9HlifVJkRHFcO7FzvTusvV.jpeg"
                alt="Sunshine Fitsum Daycare Logo"
                fill
                style={{ objectFit: "contain" }}
                className="scale-[1.3]"
              />
            </div>
          </div>
          <span className="ml-2 sm:ml-3 font-fredoka text-base sm:text-lg whitespace-nowrap header-business-name">
            Sunshine Fitsum Daycare
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => {
            // Assign different hover colors based on index
            const hoverColors = [
              "hover:bg-sunshine-yellow/20",
              "hover:bg-soft-orange/20",
              "hover:bg-sky-blue/20",
              "hover:bg-teal-blue/20",
              "hover:bg-baby-pink/20",
              "hover:bg-coral-red/20",
              "hover:bg-light-yellow/20",
            ]
            const hoverColor = hoverColors[index % hoverColors.length]

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-full text-foreground ${hoverColor} font-medium font-fredoka transition-colors`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-sunshine-yellow/20 flex-shrink-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} className="text-warm-brown" /> : <Menu size={24} className="text-warm-brown" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-3xl overflow-hidden">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item, index) => {
              // Assign different hover colors based on index
              const hoverColors = [
                "hover:bg-sunshine-yellow/20",
                "hover:bg-soft-orange/20",
                "hover:bg-sky-blue/20",
                "hover:bg-teal-blue/20",
                "hover:bg-baby-pink/20",
                "hover:bg-coral-red/20",
                "hover:bg-light-yellow/20",
              ]
              const hoverColor = hoverColors[index % hoverColors.length]

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 rounded-full ${hoverColor} font-medium font-fredoka`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
