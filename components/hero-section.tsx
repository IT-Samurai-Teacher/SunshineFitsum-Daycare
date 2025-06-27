"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SunIcon } from "@/components/icons/sun-icon"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [imgError, setImgError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const logoUrl =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sunshine%20Fitsum%20Daycare%20Logo%20Final.jpg-NB36oU9t9HlifVJkRHFcO7FzvTusvV.jpeg"

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden bg-warm-cream">
      {/* Decorative elements with logo colors */}
      <div className="absolute top-40 left-10 w-16 h-16 bg-sunshine-yellow rounded-full opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-soft-orange rounded-full opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-60 right-20 w-12 h-12 bg-sky-blue rounded-full opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-40 left-1/3 w-10 h-10 bg-baby-pink rounded-full opacity-20 animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div className="absolute top-10 right-10 w-8 h-8 text-sunshine-yellow">
        <SunIcon className="w-full h-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Where little ones <span className="text-sunshine-yellow">bloom</span> and{" "}
              <span className="text-soft-orange">grow</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-muted-foreground max-w-xl mx-auto lg:mx-0">
              A nurturing daycare center with a <span className="text-sky-blue">nature-based</span> curriculum,
              <span className="text-baby-pink"> bright facilities</span>, and focus on
              <span className="text-teal-blue"> joyful learning</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild className="sunshine-button-primary">
                <Link href="/enrollment">Enroll Now</Link>
              </Button>
              <Button asChild variant="outline" className="sunshine-button-secondary">
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg mx-auto hero-logo-container">
              {/* Decorative circles behind the main circle */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-sunshine-yellow/20 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-soft-orange/20 rounded-full"></div>

              {/* Main circular container */}
              <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl bg-white">
                {/* This div centers and sizes the logo within the circle */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  {/* Extract just the sun part of the logo for the circular frame */}
                  <div className="relative w-full h-full">
                    {imgError ? (
                      // Fallback for error
                      <Image
                        src="/logo-fallback.png"
                        alt="Sunshine Fitsum Daycare Logo"
                        fill
                        style={{ objectFit: "contain" }}
                        className="scale-100 hero-logo-image"
                        priority
                        sizes="(max-width: 768px) 80vw, 40vw"
                      />
                    ) : (
                      // Regular image
                      <Image
                        src={logoUrl || "/placeholder.svg"}
                        alt="Sunshine Fitsum Daycare Logo"
                        fill
                        style={{ objectFit: "contain" }}
                        className="scale-[1.3] hero-logo-image"
                        priority
                        sizes="(max-width: 768px) 80vw, 40vw"
                        quality={90}
                        onError={() => setImgError(true)}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Sun decoration */}
              <div className="absolute -top-4 -right-4 animate-sunray">
                <SunIcon className="w-12 h-12 sm:w-16 sm:h-16 text-sunshine-yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,213.2,56.44Z"
            fill="#FFF7E8"
          ></path>
        </svg>
      </div>
    </section>
  )
}
