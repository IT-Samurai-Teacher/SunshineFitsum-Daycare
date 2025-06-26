"use client"

import { SunIcon } from "@/components/icons/sun-icon"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  text?: string
  className?: string
}

export function LoadingSpinner({ size = "md", text, className = "" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <div className="relative">
        <SunIcon 
          className={`${sizeClasses[size]} text-sunshine-yellow animate-spin`} 
        />
      </div>
      {text && (
        <p className="mt-4 text-muted-foreground text-center">{text}</p>
      )}
    </div>
  )
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-cream">
      <LoadingSpinner size="lg" text="Loading Sunshine Daycare..." />
    </div>
  )
}

export function SectionLoader() {
  return (
    <div className="py-16">
      <LoadingSpinner size="md" text="Loading..." />
    </div>
  )
} 